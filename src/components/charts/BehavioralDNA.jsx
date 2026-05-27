import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
    { subject: 'Reliability', A: 120, fullMark: 150 },
    { subject: 'Consistency', A: 98, fullMark: 150 },
    { subject: 'Resilience', A: 86, fullMark: 150 },
    { subject: 'Empathy', A: 99, fullMark: 150 },
    { subject: 'Stability', A: 85, fullMark: 150 },
    { subject: 'Speed', A: 65, fullMark: 150 },
];

export default function BehavioralDNA() {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="rgba(255,255,255,0.05)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--gray-text)', fontSize: 10 }} />
                    <Radar
                        name="Behavioral DNA"
                        dataKey="A"
                        stroke="var(--purple-glow)"
                        fill="var(--purple-glow)"
                        fillOpacity={0.4}
                        animationDuration={2000}
                    />
                </RadarChart>
            </ResponsiveContainer>
            <div className="dna-title">
                <span className="text-gradient">AI SIGNATURE PATTERN</span>
            </div>
            <style jsx>{`
        .dna-title {
           text-align: center;
           font-size: 0.7rem;
           letter-spacing: 2px;
           margin-top: -20px;
           font-weight: 800;
           opacity: 0.8;
        }
      `}</style>
        </div>
    );
}
