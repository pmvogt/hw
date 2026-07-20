"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { DoubleSide, type Group } from "three";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { ConnectorGlobe } from "./connector-globe";
import { HarnessHub } from "./harness-hub";
import { OrbitCardMarker } from "./orbit-card-marker";
import {
  CARD_RADIUS,
  CARD_RADIUS_COMPACT,
  GLOBE_RADIUS,
  ORBIT_CARDS,
} from "./mission-data";

function Rotator({
  reducedMotion,
  staticMode,
  children,
}: {
  reducedMotion: boolean;
  staticMode: boolean;
  children: React.ReactNode;
}) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current || reducedMotion || staticMode) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = 0.06 + Math.sin(performance.now() * 0.0002) * 0.03;
  });

  return <group ref={group}>{children}</group>;
}

function GlobeHitTarget({
  staticMode,
  onToggleStatic,
}: {
  staticMode: boolean;
  onToggleStatic: () => void;
}) {
  const drag = useRef({ active: false, x: 0, y: 0, moved: false });
  const { gl } = useThree();

  useEffect(() => {
    const el = gl.domElement;

    function onDown(e: PointerEvent) {
      drag.current = { active: true, x: e.clientX, y: e.clientY, moved: false };
    }

    function onMove(e: PointerEvent) {
      if (!drag.current.active) return;
      const dx = e.clientX - drag.current.x;
      const dy = e.clientY - drag.current.y;
      if (dx * dx + dy * dy > 36) drag.current.moved = true;
    }

    function onUp() {
      drag.current.active = false;
    }

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointerleave", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointerleave", onUp);
    };
  }, [gl]);

  return (
    <group>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
          if (drag.current.moved) return;
          onToggleStatic();
        }}
      >
        <sphereGeometry args={[GLOBE_RADIUS * 1.08, 32, 24]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      {staticMode ? (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[GLOBE_RADIUS * 1.09, GLOBE_RADIUS * 1.125, 64]} />
          <meshBasicMaterial color="#e8a020" transparent opacity={0.4} side={DoubleSide} />
        </mesh>
      ) : null}
    </group>
  );
}

function Scene({
  reducedMotion,
  staticMode,
  compact,
  onToggleStatic,
  controlsRef,
}: {
  reducedMotion: boolean;
  staticMode: boolean;
  compact: boolean;
  onToggleStatic: () => void;
  controlsRef: React.MutableRefObject<OrbitControlsImpl | null>;
}) {
  const cardRadius = compact ? CARD_RADIUS_COMPACT : CARD_RADIUS;
  const distanceFactor = compact ? 4.4 : 5.5;

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 5]} intensity={2.4} color="#e8a020" />
      <pointLight position={[-4, -2, -3]} intensity={0.55} color="#8899aa" />

      <group scale={compact ? 0.8 : 0.96} position={[0, compact ? -0.28 : 0.08, 0]}>
        <Rotator reducedMotion={reducedMotion} staticMode={staticMode}>
          <ConnectorGlobe reducedMotion={reducedMotion || staticMode} />
          <HarnessHub />
          {ORBIT_CARDS.map((card) => (
            <OrbitCardMarker
              key={card.id}
              card={card}
              staticMode={staticMode}
              cardRadius={cardRadius}
              distanceFactor={distanceFactor}
            />
          ))}
          <GlobeHitTarget staticMode={staticMode} onToggleStatic={onToggleStatic} />
        </Rotator>
      </group>

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={false}
        enableRotate={!reducedMotion && !staticMode}
        autoRotate={false}
        minPolarAngle={Math.PI * 0.28}
        maxPolarAngle={Math.PI * 0.72}
        rotateSpeed={0.55}
      />
    </>
  );
}

function ResponsiveCamera({ compact }: { compact: boolean }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, compact ? 0.05 : 0.22, compact ? 6.8 : 5.45);
    camera.updateProjectionMatrix();
  }, [camera, compact]);

  return null;
}

export function MissionSphere() {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [staticMode, setStaticMode] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const widthMq = window.matchMedia("(max-width: 1023px)");
    const applyMotion = () => setReducedMotion(motionMq.matches);
    const applyWidth = () => setCompact(widthMq.matches);
    applyMotion();
    applyWidth();
    motionMq.addEventListener("change", applyMotion);
    widthMq.addEventListener("change", applyWidth);
    return () => {
      motionMq.removeEventListener("change", applyMotion);
      widthMq.removeEventListener("change", applyWidth);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.35, 5.4], fov: compact ? 34 : 38 }}
        dpr={[1, compact ? 1.5 : 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{ background: "transparent", cursor: staticMode ? "pointer" : "grab" }}
      >
        <Suspense fallback={null}>
          <ResponsiveCamera compact={compact} />
          <Scene
            reducedMotion={reducedMotion}
            staticMode={staticMode}
            compact={compact}
            onToggleStatic={() => setStaticMode((s) => !s)}
            controlsRef={controlsRef}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
