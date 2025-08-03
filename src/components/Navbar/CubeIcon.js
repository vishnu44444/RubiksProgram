import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const CubeIcon = ({ size }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        const currentMount = mountRef.current;
        const width = 25;
        const height = 25;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio); // For sharper rendering
        currentMount.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        const cubeGroup = new THREE.Group();
        const cubieSize = 1 / size;
        const gap = 0.05 / (size / 2);

        // Create materials once for efficiency
        const blackMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8 });
        const faceColors = {
            right: new THREE.MeshStandardMaterial({ color: 0xC41E3A, roughness: 0.8 }), // Red (+X)
            left: new THREE.MeshStandardMaterial({ color: 0xFF5800, roughness: 0.8 }), // Orange (-X)
            top: new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.8 }), // White (+Y)
            bottom: new THREE.MeshStandardMaterial({ color: 0xFFD500, roughness: 0.8 }), // Yellow (-Y)
            front: new THREE.MeshStandardMaterial({ color: 0x0051BA, roughness: 0.8 }), // Blue (+Z)
            back: new THREE.MeshStandardMaterial({ color: 0x009E60, roughness: 0.8 }), // Green (-Z)
        };
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

        // Store disposable items for cleanup
        const disposables = [lineMaterial, blackMaterial, ...Object.values(faceColors)];

        const offset = (size - 1) / 2;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                for (let k = 0; k < size; k++) {
                    // Only create cubies for the outer shell to improve performance
                    if (i > 0 && i < size - 1 && j > 0 && j < size - 1 && k > 0 && k < size - 1) {
                        continue;
                    }

                    const geometry = new THREE.BoxGeometry(cubieSize - gap, cubieSize - gap, cubieSize - gap);
                    disposables.push(geometry);

                    const materials = [
                        i === size - 1 ? faceColors.right : blackMaterial,
                        i === 0 ? faceColors.left : blackMaterial,
                        j === size - 1 ? faceColors.top : blackMaterial,
                        j === 0 ? faceColors.bottom : blackMaterial,
                        k === size - 1 ? faceColors.front : blackMaterial,
                        k === 0 ? faceColors.back : blackMaterial,
                    ];

                    const cubie = new THREE.Mesh(geometry, materials);
                    cubie.position.set(
                        (i - offset) * cubieSize,
                        (j - offset) * cubieSize,
                        (k - offset) * cubieSize
                    );

                    const edges = new THREE.EdgesGeometry(geometry);
                    const line = new THREE.LineSegments(edges, lineMaterial);
                    disposables.push(edges);
                    cubie.add(line);

                    cubeGroup.add(cubie);
                }
            }
        }

        scene.add(cubeGroup);

        camera.position.z = 1.6;

        const xSpeed = (Math.random() - 0.5) * 0.04;
        const ySpeed = (Math.random() - 0.5) * 0.04;

        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            cubeGroup.rotation.x += xSpeed;
            cubeGroup.rotation.y += ySpeed;
            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on unmount
        return () => {
            cancelAnimationFrame(animationFrameId);
            currentMount.removeChild(renderer.domElement);
            disposables.forEach(item => item.dispose());
        };
    }, [size]);

    return <div ref={mountRef} style={{ display: 'inline-block', width: '25px', height: '25px', marginRight: '5px', verticalAlign: 'text-bottom' }} />;
};

export default CubeIcon;
