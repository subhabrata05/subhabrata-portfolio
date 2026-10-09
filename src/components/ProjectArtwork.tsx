import React from 'react';
import { Cpu, Sparkles, Activity, ShieldCheck, Eye, Mic, Hand, Radio, WifiOff, Share2, Compass } from 'lucide-react';

interface ProjectArtworkProps {
  projectId: string;
}

export const ProjectArtwork: React.FC<ProjectArtworkProps> = ({ projectId }) => {
  // 1. JARVIS Visual
  if (projectId === 'jarvis') {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          minHeight: '320px',
          backgroundColor: '#090D17',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(129, 64, 220, 0.3)',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(17, 46, 129, 0.25)'
        }}
      >
        {/* Terminal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '0.75rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#CB2957' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#8140DC' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#112E81' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-text-secondary)',
                marginLeft: '0.5rem'
              }}
            >
              jarvis-gateway :: express:5000/api/chat
            </span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'rgba(129, 64, 220, 0.15)',
              border: '1px solid rgba(129, 64, 220, 0.35)',
              padding: '0.2rem 0.5rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--color-violet)'
            }}
          >
            <ShieldCheck size={12} />
            <span>CORS_ACTIVE · 200 OK</span>
          </div>
        </div>

        {/* Chat Stream Simulation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', margin: '1rem 0' }}>
          <div
            style={{
              alignSelf: 'flex-end',
              backgroundColor: 'rgba(17, 46, 129, 0.35)',
              padding: '0.65rem 1rem',
              borderRadius: '12px 12px 2px 12px',
              maxWidth: '85%',
              border: '1px solid rgba(129, 64, 220, 0.25)'
            }}
          >
            <p style={{ fontSize: '0.82rem', color: 'var(--color-text)', margin: 0 }}>
              "Summarize the decoupled backend architecture and Groq inference pipeline."
            </p>
          </div>

          <div
            style={{
              alignSelf: 'flex-start',
              backgroundColor: 'rgba(13, 18, 32, 0.95)',
              padding: '0.75rem 1rem',
              borderRadius: '12px 12px 12px 2px',
              maxWidth: '92%',
              border: '1px solid rgba(203, 41, 87, 0.35)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-rose)'
              }}
            >
              <Cpu size={12} />
              <span>LLAMA-3.3-70B-VERSATILE · INFERENCE: 182ms</span>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.45, margin: 0 }}>
              Incoming prompt received via Express POST route with request-logging middleware. Groq SDK dispatches tokens via low-latency streaming pipeline...
            </p>
          </div>
        </div>

        {/* Terminal Footer Telemetry */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '0.65rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--color-text-muted)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Activity size={12} color="var(--color-violet)" />
            <span>HEALTH: OK /api/health</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={12} color="var(--color-rose)" />
            <span>REACT 19 + GROQ ENGINE</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. PhantomNet Visual (Custom Mesh Network Topology Artwork)
  if (projectId === 'phantomnet') {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          minHeight: '320px',
          backgroundColor: '#070A14',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(207, 65, 115, 0.35)',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.95), 0 0 32px rgba(17, 46, 129, 0.35)'
        }}
      >
        {/* Topology HUD Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '0.75rem',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-rose)',
                boxShadow: '0 0 8px var(--color-rose)'
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--color-text)',
                letterSpacing: '0.05em'
              }}
            >
              PHANTOMNET // TOPOLOGY RADAR PROTOTYPE
            </span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              backgroundColor: 'rgba(203, 41, 87, 0.15)',
              border: '1px solid rgba(203, 41, 87, 0.35)',
              padding: '0.2rem 0.55rem',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--color-rose)'
            }}
          >
            <WifiOff size={11} />
            <span>OFFLINE MESH · UPCOMING</span>
          </div>
        </div>

        {/* Central Network Topology Visual with SVG Mesh & Radar Elements */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '210px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0.5rem 0'
          }}
        >
          {/* Concentric Radar Rings */}
          <div
            style={{
              position: 'absolute',
              width: '190px',
              height: '190px',
              borderRadius: '50%',
              border: '1px dashed rgba(129, 64, 220, 0.3)',
              background: 'radial-gradient(circle, rgba(17, 46, 129, 0.3) 0%, rgba(7, 10, 20, 0.1) 70%)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '1px solid rgba(207, 65, 115, 0.25)',
              pointerEvents: 'none'
            }}
          />

          {/* SVG Multi-Hop Mesh Vectors */}
          <svg
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
            viewBox="0 0 340 210"
            fill="none"
          >
            {/* Mesh Links between Nodes */}
            {/* Center (170, 105) to Node 1 (80, 50) */}
            <line x1="170" y1="105" x2="80" y2="50" stroke="#8140DC" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
            {/* Center (170, 105) to Node 2 (260, 55) */}
            <line x1="170" y1="105" x2="260" y2="55" stroke="#CF4173" strokeWidth="1.5" opacity="0.85" />
            {/* Center (170, 105) to Node 3 (100, 165) */}
            <line x1="170" y1="105" x2="100" y2="165" stroke="#8140DC" strokeWidth="1.5" opacity="0.65" />
            {/* Center (170, 105) to Node 4 (250, 160) */}
            <line x1="170" y1="105" x2="250" y2="160" stroke="#CB2957" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.8" />
            {/* Outer Hop: Node 1 to Node 3 */}
            <line x1="80" y1="50" x2="100" y2="165" stroke="rgba(17, 46, 129, 0.7)" strokeWidth="1" strokeDasharray="2 2" />
            {/* Outer Hop: Node 2 to Node 4 */}
            <line x1="260" y1="55" x2="250" y2="160" stroke="rgba(129, 64, 220, 0.5)" strokeWidth="1" />

            {/* Signal Pulse Circles on Links */}
            <circle cx="215" cy="80" r="3" fill="#CF4173" opacity="0.9" />
            <circle cx="125" cy="78" r="2.5" fill="#8140DC" opacity="0.7" />
            <circle cx="210" cy="132" r="3" fill="#CB2957" opacity="0.9" />
          </svg>

          {/* Central Mobile Node (Root / Self) */}
          <div
            style={{
              position: 'absolute',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'rgba(13, 18, 32, 0.95)',
                border: '2px solid var(--color-violet)',
                boxShadow: '0 0 20px rgba(129, 64, 220, 0.5), inset 0 0 10px rgba(17, 46, 129, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Radio size={20} color="var(--color-rose)" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--color-text)',
                backgroundColor: 'rgba(8, 10, 18, 0.85)',
                padding: '1px 5px',
                borderRadius: '3px',
                border: '1px solid rgba(129, 64, 220, 0.3)'
              }}
            >
              YOU · HOST
            </span>
          </div>

          {/* Peer Node 1: Top-Left (Relay Node) */}
          <div
            style={{
              position: 'absolute',
              left: '52px',
              top: '25px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(17, 46, 129, 0.8)',
                border: '1.5px solid var(--color-violet)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(129, 64, 220, 0.35)'
              }}
            >
              <Share2 size={14} color="#FFFFFF" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--color-text-secondary)',
                backgroundColor: 'rgba(8, 10, 18, 0.85)',
                padding: '1px 4px',
                borderRadius: '2px'
              }}
            >
              NODE_01 (HOP 1)
            </span>
          </div>

          {/* Peer Node 2: Top-Right (Secure Peer) */}
          <div
            style={{
              position: 'absolute',
              right: '48px',
              top: '30px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px'
            }}
          >
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                backgroundColor: 'rgba(203, 41, 87, 0.25)',
                border: '1.5px solid var(--color-rose)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 14px rgba(207, 65, 115, 0.4)'
              }}
            >
              <ShieldCheck size={15} color="var(--color-rose)" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--color-rose)',
                backgroundColor: 'rgba(8, 10, 18, 0.85)',
                padding: '1px 4px',
                borderRadius: '2px'
              }}
            >
              PEER_02 (X25519)
            </span>
          </div>

          {/* Peer Node 3: Bottom-Left (BLE Mesh Relay) */}
          <div
            style={{
              position: 'absolute',
              left: '70px',
              bottom: '15px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px'
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'rgba(13, 18, 32, 0.9)',
                border: '1px solid rgba(129, 64, 220, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Compass size={13} color="var(--color-violet)" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--color-text-muted)'
              }}
            >
              RELAY_03
            </span>
          </div>

          {/* Peer Node 4: Bottom-Right (Emergency SOS Channel) */}
          <div
            style={{
              position: 'absolute',
              right: '58px',
              bottom: '18px',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px'
            }}
          >
            <div
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: 'rgba(168, 32, 32, 0.3)',
                border: '1.5px solid var(--color-crimson)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 12px rgba(203, 41, 87, 0.35)'
              }}
            >
              <Activity size={13} color="#FFFFFF" />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.58rem',
                color: 'var(--color-crimson)'
              }}
            >
              SOS_BROADCAST
            </span>
          </div>
        </div>

        {/* Planned Architecture Telemetry Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '0.65rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--color-text-muted)',
            position: 'relative',
            zIndex: 2
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: 'var(--color-violet)' }}>HOPS: 2 · RSSI: -68dBm</span>
            <span>·</span>
            <span>BLE + WI-FI DIRECT</span>
          </div>
          <div style={{ color: 'var(--color-rose)' }}>
            FLUTTER + RUST CRYPTO CORE
          </div>
        </div>
      </div>
    );
  }

  // 3. U.L.T.R.O.N. Visual (Default)
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '320px',
        backgroundColor: '#090D17',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid rgba(203, 41, 87, 0.3)',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'inset 0 0 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(203, 41, 87, 0.2)'
      }}
    >
      {/* HUD Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '0.75rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-crimson)', boxShadow: '0 0 8px var(--color-crimson)' }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-text)',
              letterSpacing: '0.05em'
            }}
          >
            U.L.T.R.O.N. // THREE.JS + MEDIAPIPE HUD
          </span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            backgroundColor: 'rgba(203, 41, 87, 0.15)',
            border: '1px solid rgba(203, 41, 87, 0.35)',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--color-rose)'
          }}
        >
          <Eye size={12} />
          <span>FPS: 60 · CAMERA: LIVE</span>
        </div>
      </div>

      {/* Central 3D Vision & Hand Gesture Graphic */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
          margin: '1.25rem 0',
          position: 'relative'
        }}
      >
        {/* Radar Ring Visual */}
        <div
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            border: '2px dashed rgba(129, 64, 220, 0.45)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            background: 'radial-gradient(circle, rgba(17, 46, 129, 0.35) 0%, rgba(13, 18, 32, 0.2) 70%)'
          }}
        >
          <div
            style={{
              width: '110px',
              height: '110px',
              borderRadius: '50%',
              border: '1px solid rgba(203, 41, 87, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'rgba(13, 18, 32, 0.9)',
                border: '1.5px solid var(--color-violet)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 24px rgba(129, 64, 220, 0.45)'
              }}
            >
              <Hand size={28} color="var(--color-violet)" />
            </div>
          </div>

          {/* Coordinate accents */}
          <div
            style={{
              position: 'absolute',
              top: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--color-rose)'
            }}
          >
            Y: +1.42
          </div>
          <div
            style={{
              position: 'absolute',
              right: '4px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: 'var(--color-violet)'
            }}
          >
            X: +0.89
          </div>
        </div>

        {/* Multi-modal status banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem'
          }}
        >
          <span style={{ color: 'var(--color-violet)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Hand size={13} /> 10+ GESTURES
          </span>
          <span style={{ color: 'var(--color-rose)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Mic size={13} /> VOICE SYNTHESIS
          </span>
          <span style={{ color: 'var(--color-text-muted)' }}>KEYBOARD FALLBACK</span>
        </div>
      </div>

      {/* HUD Telemetry Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '0.65rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          color: 'var(--color-text-muted)'
        }}
      >
        <span>MEDIAPIPE HAND PIPELINE</span>
        <span style={{ color: 'var(--color-violet)' }}>NEXT.JS + REACT 19</span>
      </div>
    </div>
  );
};
