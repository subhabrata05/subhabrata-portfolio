import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const checkWebGLSupport = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch {
    return false;
  }
};

export const Scene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported] = useState<boolean>(checkWebGLSupport);

  useEffect(() => {
    if (!webGLSupported) return;

    const container = mountRef.current;
    if (!container) return;

    let isVisible = true;
    let animationFrameId: number;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // Group to hold all 3D components for coordinated rotation & mouse tilt
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // 1. Inner core: Icosahedron with custom Deep Blue / Electric Violet shading
    const coreGeometry = new THREE.IcosahedronGeometry(1.25, 3);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x112E81,
      emissive: 0x0D1220,
      roughness: 0.25,
      metalness: 0.85,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      wireframe: false
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    orbGroup.add(coreMesh);

    // 2. Wireframe shell cage: Electric Violet wireframe with subtle glow
    const wireGeometry = new THREE.IcosahedronGeometry(1.4, 2);
    const wireMaterial = new THREE.MeshStandardMaterial({
      color: 0x8140DC,
      emissive: 0x112E81,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    orbGroup.add(wireMesh);

    // 3. Concentric Orbital Rings (Electric Violet & Neon Rose)
    const ring1Geo = new THREE.TorusGeometry(1.85, 0.015, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xCF4173,
      emissive: 0xCB2957,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.8
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    orbGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.15, 0.012, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x8140DC,
      emissive: 0x112E81,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.6
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 4;
    orbGroup.add(ring2);

    // 4. Floating Atmospheric Dust Particles
    const particleCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      scales[i] = Math.random();
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x8140DC,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    orbGroup.add(particleSystem);

    // 5. Lighting: Deep Blue shadows, Electric Violet Key Light & Crimson Rim
    const ambientLight = new THREE.AmbientLight(0x0D1220, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x8140DC, 2.8);
    keyLight.position.set(4, 5, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x112E81, 2.0);
    fillLight.position.set(-4, -3, -2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xCF4173, 3, 10);
    rimLight.position.set(0, 3, 2);
    scene.add(rimLight);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.7;
      targetRotationX = y * 0.7;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Pause rendering when scrolled out of view
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Render Loop
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      // Base auto rotation + mouse offset
      orbGroup.rotation.y = elapsedTime * 0.25 + currentRotationY;
      orbGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.15 + currentRotationX;

      // Independent ring dynamics
      ring1.rotation.z = elapsedTime * 0.35;
      ring2.rotation.y = -elapsedTime * 0.28;

      // Micro pulse on core
      const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.025;
      coreMesh.scale.set(pulse, pulse, pulse);

      // Subtle particle swirl
      particleSystem.rotation.y = elapsedTime * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose Geometries and Materials
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [webGLSupported]);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '380px'
      }}
      aria-label="Interactive 3D Geometric Orb visual representing creative engineering"
      role="img"
    >
      {!webGLSupported && (
        <div
          style={{
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, #2B5748 0%, #273338 70%)',
            border: '2px solid #9CB080',
            boxShadow: '0 0 30px rgba(156, 176, 128, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9CB080',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem'
          }}
        >
          [3D Engine Fallback]
        </div>
      )}
    </div>
  );
};
