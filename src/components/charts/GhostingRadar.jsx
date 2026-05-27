import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'W1', risk: 12 },
    { name: 'W2', risk: 15 },
    { name: 'W3', risk: 45 }, // Anomaly spike
    { name: 'W4', risk: 20 },
    { name: 'W5', risk: 18 },
    { name: 'W6', risk: 85 }, // High risk abandon
];

export default function GhostingRadar() {
    return (
        <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--gray-text)', fontSize: 10 }} />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip
                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                return (
                                    <div className="glass-card risk-tooltip">
                                        <h4 style={{ color: payload[0].value > 50 ? 'var(--red-anomaly)' : 'var(--emerald-trust)' }}>
                                            RISK: {payload[0].value}%
                                        </h4>
                                        <p style={{ fontSize: '0.7rem', color: 'var(--gray-text)' }}>
                                            {payload[0].value > 50 ? 'GHOSTING PATTERN DETECTED' : 'HEALTHY RHYTHM'}
                                        </p>
                                    </div>
                                )
                            }
                            return null;
                        }}
                    />
                    <Bar dataKey="risk" radius={[10, 10, 0, 0]}>
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.risk > 50 ? 'var(--red-anomaly)' : 'var(--cyan-neon)'}
                                className="radar-bar"
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            <div className="radar-legend">
                <div className="pulse-red"></div>
                <span>PREDICTIVE ANOMALY SCAN</span>
            </div>
            <style jsx>{`
        .risk-tooltip { padding: 10px; border-radius: 8px; border: 1px solid var(--glass-border); }
        .radar-legend { display: flex; align-items: center; gap: 8px; font-size: 0.65rem; color: var(--red-anomaly); font-weight: 800; justify-content: center; margin-top: 10px; letter-spacing: 1px; }
        .pulse-red { width: 8px; height: 8px; background: var(--red-anomaly); border-radius: 50%; animation: pulse-red-anim 1s infinite; }
        @keyframes pulse-red-anim {
           0% { transform: scale(1); opacity: 1; }
           100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
        </div>
    );
}
