"use client";

import { Html, Line } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { Vector3, type Group } from "three";
import { DisplayCard } from "./display-card";
import {
  GLOBE_RADIUS,
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

  const surface = useMemo(
    () => latLonToVec(card.lat, card.lon, GLOBE_RADIUS * 1.01),
    [card.lat, card.lon],
  );
  const outer = useMemo(
    () => latLonToVec(card.lat, card.lon, cardRadius),
    [card.lat, card.lon, cardRadius],
  );

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
    const nextOpacity = Math.max(0.28, Math.min(1, mapped));
    const nextScale = 0.9 + nextOpacity * 0.1;
    setOpacity((o) => (Math.abs(o - nextOpacity) > 0.02 ? nextOpacity : o));
    setScale((s) => (Math.abs(s - nextScale) > 0.02 ? nextScale : s));
  });

  return (
    <group>
      <Line
        points={[surface, outer]}
        color="#e8a020"
        transparent
        opacity={0.12 + opacity * 0.35}
        lineWidth={1}
      />
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
          <DisplayCard title={card.title} body={card.body} size="sm" />
        </Html>
      </group>
    </group>
  );
}
