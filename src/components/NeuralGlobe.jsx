import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function Nodes({ count = 500 }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 10;
            p[i * 3 + 1] = (Math.random() - 0.5) * 10;
            p[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return p;
    }, [count]);

    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.x += 0.001;
        ref.current.rotation.y += 0.001;
    });

    return (
        <group ref={ref}>
            <Points positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#00f2ff"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function TrustSphere() {
    const sphereRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        sphereRef.current.rotation.y = time * 0.2;
        sphereRef.current.rotation.z = time * 0.1;
    });

    return (
        <mesh ref={sphereRef}>
            <sphereGeometry args={[3, 32, 32]} />
            <MeshDistortMaterial
                color="#bc13fe"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0}
                metalness={1}
                transparent
                opacity={0.3}
            />
        </mesh>
    );
}

export default function NeuralGlobe() {
    return (
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2ff" />
                <pointLight position={[-10, -10, -10]} intensity={1.5} color="#bc13fe" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <Nodes count={800} />
                    <TrustSphere />
                </Float>
            </Canvas>
        </div>
    );
}
