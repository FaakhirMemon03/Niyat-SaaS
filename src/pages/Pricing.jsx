import React from 'react';
import { Check, Shield, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    const plans = [
        {
            name: "Identity",
            price: "Free",
            description: "Build your basic trust score.",
            features: ["Personal Trust Score", "Behavioral Passport", "3 Active Connections", "Basic Analytics"],
            btnText: "Get Started",
            premium: false
        },
        {
            name: "Professional",
            price: "$29",
            period: "/mo",
            description: "Advanced insights for high-stakes work.",
            features: ["Predictive Ghosting Radar", "Compatibility Engine", "Unlimited Connections", "Deep Behavioral DNA", "Priority Support"],
            btnText: "Upgrade Now",
            premium: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Full reliability infrastructure for teams.",
            features: ["Global Observatory Access", "Fraud Cluster Detection", "API Integration", "SLA Monitoring", "Dedicated Neural Node"],
            btnText: "Contact Sales",
            premium: false
        }
    ];

    return (
        <div className="pricing-page">
            <div className="bg-glow"></div>

            <header className="pricing-header">
                <h1 className="title-medium">Simple, Transparent <span className="text-gradient">Trust.</span></h1>
                <p>Choose the level of reliability intelligence you need.</p>
            </header>

            <div className="pricing-grid">
                {plans.map((plan, i) => (
                    <div key={i} className={`pricing-card glass-card ${plan.premium ? 'premium' : ''}`}>
                        {plan.premium && <div className="premium-tag">MOST POPULAR</div>}
                        <div className="plan-header">
                            <h3>{plan.name}</h3>
                            <div className="price">
                                <span className="currency">{plan.price !== 'Free' && plan.price !== 'Custom' ? '$' : ''}</span>
                                <span className="amount">{plan.price.replace('$', '')}</span>
                                <span className="period">{plan.period}</span>
                            </div>
                            <p>{plan.description}</p>
                        </div>

                        <div className="plan-features">
                            {plan.features.map((feature, idx) => (
                                <div key={idx} className="feature-item">
                                    <Check size={16} className="text-gradient" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Link to="/signup" className={`btn-pricing ${plan.premium ? 'btn-primary' : 'glass-card'}`} style={{ textDecoration: 'none', textAlign: 'center' }}>
                            {plan.btnText}
                        </Link>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .pricing-page { padding: 80px 5%; min-height: 100vh; }
                .pricing-header { text-align: center; margin-bottom: 60px; }
                .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 1200px; margin: 0 auto; }
                .pricing-card { padding: 40px; display: flex; flex-direction: column; position: relative; }
                .pricing-card.premium { border-color: var(--cyan-neon); box-shadow: 0 0 30px rgba(0, 242, 255, 0.1); transform: scale(1.05); z-index: 10; }
                .premium-tag { position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--cyan-neon); color: black; font-weight: 800; font-size: 0.7rem; padding: 4px 12px; border-radius: 4px; }
                
                .plan-header h3 { font-size: 1.5rem; margin-bottom: 15px; }
                .price { margin-bottom: 20px; }
                .amount { font-size: 3rem; font-weight: 800; }
                .period { color: var(--gray-text); font-size: 1rem; }
                .plan-header p { color: var(--gray-text); font-size: 0.95rem; margin-bottom: 30px; }

                .plan-features { margin-bottom: 40px; flex-grow: 1; }
                .feature-item { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; font-size: 0.9rem; }
                
                .btn-pricing { padding: 14px; border-radius: 12px; font-weight: 700; transition: all 0.3s ease; }
                
                @media (max-width: 1024px) {
                    .pricing-card.premium { transform: scale(1); }
                }
            `}</style>
        </div>
    );
};

export default Pricing;
