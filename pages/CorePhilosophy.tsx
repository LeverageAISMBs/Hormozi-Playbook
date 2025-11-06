
import React, { useState, useEffect } from 'react';
import PageWrapper from '../components/PageWrapper';

const CorePhilosophy: React.FC = () => {
    const [dream, setDream] = useState(50);
    const [likelihood, setLikelihood] = useState(50);
    const [time, setTime] = useState(50);
    const [effort, setEffort] = useState(50);
    const [valueScore, setValueScore] = useState('1.0');

    useEffect(() => {
        const numerator = dream * likelihood;
        const denominator = Math.max(1, time) * Math.max(1, effort);
        const score = (numerator / denominator) * 10;
        setValueScore(score.toFixed(1));
    }, [dream, likelihood, time, effort]);

    return (
        <PageWrapper
            title="Core Philosophy: The Value Equation"
            description="This section explores Alex Hormozi's foundational concept: the Value Equation. His entire business philosophy hinges on creating 'Grand Slam Offers' that are so valuable, prospects feel stupid saying no. This equation is the blueprint for engineering that value. Interact with the sliders below to see how changing each component impacts the total value score."
        >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-slate-800">Interactive Value Equation</h3>
                    <p className="text-gray-600">Value = (Dream Outcome × Likelihood of Achievement) / (Time Delay × Effort & Sacrifice)</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="dream" className="block text-sm font-semibold text-gray-700 mb-2">Dream Outcome (Numerator)</label>
                            <input type="range" id="dream" min="1" max="100" value={dream} onChange={(e) => setDream(Number(e.target.value))} />
                            <span className="text-xs text-gray-500">How desirable is the result?</span>
                        </div>
                        <div>
                            <label htmlFor="likelihood" className="block text-sm font-semibold text-gray-700 mb-2">Likelihood of Achievement (Numerator)</label>
                            <input type="range" id="likelihood" min="1" max="100" value={likelihood} onChange={(e) => setLikelihood(Number(e.target.value))} />
                            <span className="text-xs text-gray-500">How certain are they of success?</span>
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">Time Delay (Denominator)</label>
                            <input type="range" id="time" min="1" max="100" value={time} onChange={(e) => setTime(Number(e.target.value))} />
                            <span className="text-xs text-gray-500">How long until they get the result? (Less is better)</span>
                        </div>
                        <div>
                            <label htmlFor="effort" className="block text-sm font-semibold text-gray-700 mb-2">Effort & Sacrifice (Denominator)</label>
                            <input type="range" id="effort" min="1" max="100" value={effort} onChange={(e) => setEffort(Number(e.target.value))} />
                            <span className="text-xs text-gray-500">How hard is it for them? (Less is better)</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-slate-50 p-10 rounded-xl h-full">
                        <span className="text-lg font-semibold text-gray-600 mb-2">Total Value Score</span>
                        <span className="text-6xl font-bold text-teal-600">{valueScore}</span>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default CorePhilosophy;
