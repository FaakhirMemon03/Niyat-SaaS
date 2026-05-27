import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader({ onFinish }) {
    const containerRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: onFinish
        });

        tl.fromTo('.loader-logo', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 })
            .to('.loader-text', { opacity: 1, duration: 0.5, stagger: 0.2 })
            .to('.loader-bar-inner', { width: '100%', duration: 2, ease: 'power1.inOut' })
            .to(containerRef.current, { opacity: 0, duration: 0.8, delay: 0.5 });
    }, [onFinish]);

    return (
        <div className="loader-container" ref={containerRef} style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'black', zIndex: 2000, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center'
        }}>
            <div className="logo text-gradient loader-logo" style={{ fontSize: '3rem', marginBottom: '40px' }}>NIYAT</div>
            <div className="loader-content" style={{ width: '300px' }}>
                <div className="loader-text-group" style={{ marginBottom: '10px', fontSize: '0.7rem', letterSpacing: '2px', color: 'var(--gray-text)', textAlign: 'center' }}>
                    <div className="loader-text" style={{ opacity: 0 }}>INITIALIZING BEHAVIORAL GRAPH...</div>
                    <div className="loader-text" style={{ opacity: 0 }}>LOADING NEURAL NODES...</div>
                    <div className="loader-text" style={{ opacity: 0 }}>AUTHENTICATING TRUST INFRASTRUCTURE...</div>
                </div>
                <div className="loader-bar" style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                    <div className="loader-bar-inner" style={{ width: '0%', height: '100%', background: 'var(--cyan-neon)', boxShadow: '0 0 10px var(--cyan-neon)' }}></div>
                </div>
            </div>
        </div>
    );
}
