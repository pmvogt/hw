"use client";

import { Html, Line } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { Color, Vector3, type Group } from "three";
import { DisplayCard } from "./display-card";
import {
  GLOBE_RADIUS,
  HARNESS_HUB,
  type OrbitCard,
  latLonToVec,
} from "./mission-data";

interface OrbitCardMarkerProps {
  card: OrbitCard;
  /** When true, all cards stay fully visible (static / exploded view). */
  staticMode: boolean;
  cardRadius: number;
  distanceFactor: number;
}

const HUB = new Vector3(...HARNESS_HUB);
const SPOKE_SEGMENTS = 32;

/**
 * Globe-hugging harness cable: lerp card → plaque, then push any interior
 * samples onto a shell just outside the wireframe so arcs stay on-sphere
 * (and inside the viewport) instead of looping into the sky.
 */
function buildSpokePoints(outer: Vector3): Vector3[] {
  const shell = GLOBE_RADIUS * 1.08;
  const points: Vector3[] = [];

  for (let i = 0; i <= SPOKE_SEGMENTS; i++) {
    const t = i / SPOKE_SEGMENTS;
    const p = new Vector3().lerpVectors(outer, HUB, t);
    if (p.length() < shell) p.normalize().multiplyScalar(shell);
    // Never climb past the plaque attach point
    if (p.y > HUB.y) p.y = HUB.y;
    points.push(p);
  }
  return points;
}

export function OrbitCardMarker({
  card,
  staticMode,
  cardRadius,
  distanceFactor,
}: OrbitCardMarkerProps) {
  const groupRef = useRef<Group>(null);
  const [opacity, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);
  const { camera } = useThree();

  const outer = useMemo(
    () => new Vector3(...latLonToVec(card.lat, card.lon, cardRadius)),
    [card.lat, card.lon, cardRadius],
  );

  const spokePoints = useMemo(() => buildSpokePoints(outer), [outer]);

  const spokeColors = useMemo(() => {
    const base = new Color(card.spokeColor);
    const lit = base.clone().lerp(new Color("#f2f2f0"), 0.18);
    // Hold the hue end-to-end; only brighten slightly into the hub
    return spokePoints.map((_, i) => {
      const t = i / (spokePoints.length - 1);
      return base.clone().lerp(lit, t * t);
    });
  }, [spokePoints, card.spokeColor]);

  const camDir = useMemo(() => new Vector3(), []);
  const worldPos = useMemo(() => new Vector3(), []);

  useFrame(() => {
    if (staticMode) {
      setOpacity(1);
      setScale(1);
      return;
    }

    if (!groupRef.current) return;
    groupRef.current.getWorldPosition(worldPos);
    camDir.copy(camera.position).sub(worldPos).normalize();
    const radial = worldPos.clone().normalize();
    const facing = radial.dot(camDir);
    const mapped = (facing + 0.35) / 1.15;
    const nextOpacity = Math.max(0.45, Math.min(1, mapped));
    const nextScale = 0.9 + nextOpacity * 0.1;
    setOpacity((o) => (Math.abs(o - nextOpacity) > 0.02 ? nextOpacity : o));
    setScale((s) => (Math.abs(s - nextScale) > 0.02 ? nextScale : s));
  });

  const spokeOpacity = 0.75 + opacity * 0.25;

  return (
    <group>
      <Line
        points={spokePoints}
        vertexColors={spokeColors}
        transparent
        opacity={spokeOpacity}
        lineWidth={2.6}
        depthWrite={false}
        toneMapped={false}
      />
      <mesh position={outer}>
        <sphereGeometry args={[0.042, 12, 10]} />
        <meshBasicMaterial color={card.spokeColor} toneMapped={false} />
      </mesh>
      <mesh position={outer}>
        <sphereGeometry args={[0.016, 10, 8]} />
        <meshBasicMaterial color="#f4efe4" toneMapped={false} />
      </mesh>
      <group ref={groupRef} position={outer}>
        <Html
          center
          distanceFactor={distanceFactor}
          style={{
            opacity,
            transform: `scale(${scale})`,
            transition: "opacity 120ms linear, transform 120ms linear",
            pointerEvents: "none",
          }}
          zIndexRange={[40, 0]}
        >
          <DisplayCard
            title={card.title}
            body={card.body}
            size="sm"
            imageSrc={card.imageSrc}
            imageAlt=""
          />
        </Html>
      </group>
    </group>
  );
}
