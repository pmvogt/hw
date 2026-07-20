"use client";

import { Billboard, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BufferGeometry,
  CanvasTexture,
  Color,
  DoubleSide,
  Float32BufferAttribute,
  type Group,
} from "three";
import { GLOBE_RADIUS } from "./mission-data";

const AMBER = new Color("#e8a020");
const MERIDIANS = 30;
const PARALLELS = 15;
const SEGMENTS = 64;

function buildLatLongGeometry(radius: number) {
  const positions: number[] = [];

  for (let m = 0; m < MERIDIANS; m++) {
    const theta = (m / MERIDIANS) * Math.PI * 2;
    for (let i = 0; i < SEGMENTS; i++) {
      const phi0 = (i / SEGMENTS) * Math.PI - Math.PI / 2;
      const phi1 = ((i + 1) / SEGMENTS) * Math.PI - Math.PI / 2;
      positions.push(
        Math.cos(phi0) * Math.cos(theta) * radius,
        Math.sin(phi0) * radius,
        Math.cos(phi0) * Math.sin(theta) * radius,
        Math.cos(phi1) * Math.cos(theta) * radius,
        Math.sin(phi1) * radius,
        Math.cos(phi1) * Math.sin(theta) * radius,
      );
    }
  }

  for (let p = 1; p < PARALLELS; p++) {
    const phi = (p / PARALLELS) * Math.PI - Math.PI / 2;
    const ringR = Math.cos(phi) * radius;
    const y = Math.sin(phi) * radius;
    for (let i = 0; i < SEGMENTS; i++) {
      const t0 = (i / SEGMENTS) * Math.PI * 2;
      const t1 = ((i + 1) / SEGMENTS) * Math.PI * 2;
      positions.push(
        Math.cos(t0) * ringR,
        y,
        Math.sin(t0) * ringR,
        Math.cos(t1) * ringR,
        y,
        Math.sin(t1) * ringR,
      );
    }
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  return geometry;
}

function createSoftGlowTexture() {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  // Single brand amber, soft falloff only
  g.addColorStop(0, "rgba(232, 160, 32, 0.55)");
  g.addColorStop(0.35, "rgba(232, 160, 32, 0.22)");
  g.addColorStop(0.7, "rgba(232, 160, 32, 0.06)");
  g.addColorStop(1, "rgba(232, 160, 32, 0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function CoreEmblem({ reducedMotion }: { reducedMotion: boolean }) {
  const glowRef = useRef<Group>(null);
  const emblem = useTexture("/figma/emblem.png");
  const glowMap = useMemo(() => createSoftGlowTexture(), []);

  useEffect(() => () => glowMap.dispose(), [glowMap]);

  useFrame(({ clock }) => {
    if (!glowRef.current || reducedMotion) return;
    const pulse = 0.96 + Math.sin(clock.elapsedTime * 1.1) * 0.04;
    glowRef.current.scale.setScalar(pulse);
  });

  return (
    <Billboard follow>
      <group ref={glowRef}>
        <mesh>
          <planeGeometry args={[1.7, 1.7]} />
          <meshBasicMaterial
            map={glowMap}
            transparent
            depthWrite={false}
            blending={AdditiveBlending}
            side={DoubleSide}
          />
        </mesh>
      </group>

      <mesh position={[0, 0, 0.04]}>
        <planeGeometry args={[0.92, 1.14]} />
        <meshBasicMaterial
          map={emblem}
          transparent
          depthWrite={false}
          side={DoubleSide}
        />
      </mesh>
    </Billboard>
  );
}

interface ConnectorGlobeProps {
  reducedMotion: boolean;
}

export function ConnectorGlobe({ reducedMotion }: ConnectorGlobeProps) {
  const wireGeo = useMemo(() => buildLatLongGeometry(GLOBE_RADIUS), []);

  useEffect(() => () => wireGeo.dispose(), [wireGeo]);

  return (
    <group>
      {/* Thin atmospheric shell only — keeps the core visible */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 0.985, 64, 48]} />
        <meshStandardMaterial
          color="#120c04"
          emissive={AMBER}
          emissiveIntensity={0.18}
          roughness={1}
          metalness={0}
          transparent
          opacity={0.18}
          depthWrite={false}
        />
      </mesh>

      <CoreEmblem reducedMotion={reducedMotion} />

      {/* Clean Figma-adjacent cage */}
      <lineSegments geometry={wireGeo}>
        <lineBasicMaterial color={AMBER} transparent opacity={0.88} />
      </lineSegments>

      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS * 1.04, 32, 24]} />
        <meshBasicMaterial
          color={AMBER}
          transparent
          opacity={0.05}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
