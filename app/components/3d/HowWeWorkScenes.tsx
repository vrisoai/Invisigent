'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

/* ═══════════════════════════════════════════════════════════════════════════
 * VRISO Process Engine — rotating glass ring, 3 nodes, particles
 * ═══════════════════════════════════════════════════════════════════════════ */
function ProcessEngineInner({ activeStep }: { activeStep: number | null }) {
  const ringRef = useRef<THREE.Group>(null);
  const nodeCount = 3;
  const nodePositions = useMemo(
    () =>
      Array.from({ length: nodeCount }, (_, i) => {
        const a = (i / nodeCount) * Math.PI * 2 - Math.PI / 2;
        return [Math.cos(a) * 0.7, Math.sin(a) * 0.7, 0] as [number, number, number];
      }),
    [],
  );

  useFrame(({ clock }) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z = clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={0.6} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={ringRef}>
        {/* Glass ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.7, 0.03, 16, 48]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#3B82F6"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
        {/* Nodes */}
        {nodePositions.map((pos, i) => {
          const isActive = activeStep === i;
          return (
            <mesh key={i} position={pos}>
              <sphereGeometry args={[0.1, 12, 12]} />
              <meshStandardMaterial
                color={i === 0 ? '#FBBF24' : '#3B82F6'}
                emissive={i === 0 ? '#FBBF24' : '#3B82F6'}
                emissiveIntensity={isActive ? 1.5 : 0.8}
              />
            </mesh>
          );
        })}
        {/* Connection lines between nodes */}
        {nodePositions.map((pos, i) => {
          const next = nodePositions[(i + 1) % nodeCount];
          return (
            <Line
              key={i}
              points={[pos, next]}
              color="#3B82F6"
              lineWidth={0.5}
              transparent
              opacity={activeStep !== null ? 0.5 : 0.2}
            />
          );
        })}
        {/* Center glow */}
        <mesh>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial
            color="#FBBF24"
            emissive="#FBBF24"
            emissiveIntensity={0.6}
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 1 — Magnifying glass scanning data nodes
 * ═══════════════════════════════════════════════════════════════════════════ */
function DiscoveryIcon({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const nodes = useMemo<[number, number, number][]>(
    () => [
      [-0.3, -0.2, 0],
      [0.2, 0.1, 0],
      [-0.1, 0.3, 0],
    ],
    [],
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Lens circle */}
        <mesh>
          <ringGeometry args={[0.15, 0.25, 16]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#3B82F6"
            emissiveIntensity={hovered ? 0.6 : 0.3}
            transparent
            opacity={0.5}
            side={2}
          />
        </mesh>
        {/* Handle */}
        <mesh position={[0.2, -0.25, 0]} rotation={[0, 0, 0.4]}>
          <boxGeometry args={[0.08, 0.2, 0.04]} />
          <meshStandardMaterial color="#3B5BDB" emissive="#3B82F6" emissiveIntensity={0.2} />
        </mesh>
        {/* Data nodes */}
        {nodes.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial
              color="#FBBF24"
              emissive="#FBBF24"
              emissiveIntensity={hovered ? 1 : 0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 2 — Floating architecture blueprint
 * ═══════════════════════════════════════════════════════════════════════════ */
function ArchitectureIcon({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const lines = useMemo(
    () => [
      [[-0.3, 0.2, 0], [0.3, 0.2, 0]],
      [[-0.3, 0, 0], [0.3, 0, 0]],
      [[-0.3, -0.2, 0], [0.3, -0.2, 0]],
      [[-0.3, 0.2, 0], [-0.3, -0.2, 0]],
      [[0, 0.2, 0], [0, -0.2, 0]],
      [[0.3, 0.2, 0], [0.3, -0.2, 0]],
    ],
    [],
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={0.7} rotationIntensity={0.12} floatIntensity={0.35}>
      <group ref={groupRef}>
        {lines.map((pts, i) => (
          <Line
            key={i}
            points={pts as [number, number, number][]}
            color="#3B82F6"
            lineWidth={hovered ? 0.8 : 0.5}
            transparent
            opacity={hovered ? 0.6 : 0.35}
          />
        ))}
        <mesh>
          <boxGeometry args={[0.08, 0.08, 0.08]} />
          <meshStandardMaterial
            color="#FBBF24"
            emissive="#FBBF24"
            emissiveIntensity={hovered ? 1.2 : 0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Step 3 — Circular optimization cycle
 * ═══════════════════════════════════════════════════════════════════════════ */
function DeploymentIcon({ hovered }: { hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const nodeCount = 4;
  const nodePositions = useMemo(
    () =>
      Array.from({ length: nodeCount }, (_, i) => {
        const a = (i / nodeCount) * Math.PI * 2;
        return [Math.cos(a) * 0.4, Math.sin(a) * 0.4, 0] as [number, number, number];
      }),
    [],
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z = clock.elapsedTime * (hovered ? 0.4 : 0.2);
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.4, 0.02, 8, 32]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#3B82F6"
            emissiveIntensity={hovered ? 0.8 : 0.4}
            transparent
            opacity={0.6}
          />
        </mesh>
        {nodePositions.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#FBBF24' : '#3B82F6'}
              emissive={i % 2 === 0 ? '#FBBF24' : '#3B82F6'}
              emissiveIntensity={hovered ? 1.2 : 0.6}
            />
          </mesh>
        ))}
        <mesh>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color="#FBBF24"
            emissive="#FBBF24"
            emissiveIntensity={hovered ? 1.5 : 0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * Exports
 * ═══════════════════════════════════════════════════════════════════════════ */
const STEP_ICONS = [DiscoveryIcon, ArchitectureIcon, DeploymentIcon];

interface ProcessEngineProps {
  activeStep: number | null;
}

export function ProcessEngine({ activeStep }: ProcessEngineProps) {
  return (
    <div className="h-full w-full min-h-[200px]" style={{ minHeight: 220 }} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 2.2], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.35} />
        <pointLight position={[2, 2, 2]} intensity={1} color="#3B82F6" />
        <pointLight position={[-1, -1, 1]} intensity={0.4} color="#FBBF24" />
        <ProcessEngineInner activeStep={activeStep} />
      </Canvas>
    </div>
  );
}

interface StepIconProps {
  variant: number;
  hovered: boolean;
}

export function StepIcon({ variant, hovered }: StepIconProps) {
  const Icon = STEP_ICONS[variant] ?? DiscoveryIcon;
  return (
    <div style={{ height: 120, width: '100%' }} aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 1.8], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 2, 2]} intensity={0.8} color="#3B82F6" />
        <Icon hovered={hovered} />
      </Canvas>
    </div>
  );
}
