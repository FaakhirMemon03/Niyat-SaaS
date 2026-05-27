import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const data = [
    { name: 'Jan', reliability: 85, predicted: 85 },
    { name: 'Feb', reliability: 88, predicted: 88 },
    { name: 'Mar', reliability: 82, predicted: 82 },
    { name: 'Apr', reliability: 90, predicted: 90 },
    { name: 'May', reliability: 92, predicted: 92 },
    { name: 'Jun', reliability: null, predicted: 94 }, // Future prediction
    { name: 'Jul', reliability: null, predicted: 96 },
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="glass-card chart-tooltip">
                <p className="tooltip-label">{`${payload[0].payload.name}`}</p>
                <p className="tooltip-value trust-high">
                    {payload[0].value ? `Current: ${payload[0].value}%` : `Predicted: ${payload[1].value}%`}
                </p>
                <p className="tooltip-reason">AI: Consistent response rhythm detected.</p>
            </div>
        );
    }
    return null;
};

export default function TrustTimeline() {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorReliability" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--cyan-neon)" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="var(--cyan-neon)" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--purple-glow)" stopOpacity={0.2} />
                            <stop offset="95%" stopColor="var(--purple-glow)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis
                        dataKey="name"
                        stroke="var(--gray-text)"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip content={<CustomTooltip />} />

                    {/* Historical Data */}
                    <Area
                        type="monotone"
                        dataKey="reliability"
                        stroke="var(--cyan-neon)"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorReliability)"
                        animationDuration={2000}
                    />

                    {/* Predictive Data */}
                    <Area
                        type="monotone"
                        dataKey="predicted"
                        stroke="var(--purple-glow)"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        fillOpacity={1}
                        fill="url(#colorPredicted)"
                        animationDuration={2500}
                    />

                    <ReferenceLine x="May" stroke="var(--emerald-trust)" label={{ position: 'top', value: 'AI FORECAST', fill: 'var(--emerald-trust)', fontSize: 10 }} />
                </AreaChart>
            </ResponsiveContainer>

            <style jsx>{`
        .chart-tooltip {
          padding: 12px;
          border: 1px solid var(--glass-border);
          font-size: 0.8rem;
        }
        .tooltip-label { color: var(--gray-text); margin-bottom: 4px; }
        .tooltip-value { font-weight: 800; font-size: 1rem; }
        .tooltip-reason { font-size: 0.7rem; color: var(--cyan-neon); margin-top: 8px; font-style: italic; }
      `}</style>
        </div>
    );
}
