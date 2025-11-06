
import React from 'react';
import PageWrapper from '../components/PageWrapper';

const SynthesisPatterns: React.FC = () => {
    const patterns = [
        {
            title: "The Logical Trilogy",
            description: "His books form a perfect funnel: create the Offer, generate Leads for the offer, and Close those leads. It's a complete A-to-Z acquisition system."
        },
        {
            title: "Value-Centric Universe",
            description: "Everything orbits the Value Equation. A 'Grand Slam Offer' makes leads easier to get and closing a natural byproduct, reducing friction in the entire system."
        },
        {
            title: "First-Principles Thinking",
            description: "He breaks complex topics (value, sales, marketing) down to their absolute logical fundamentals. This 'engineering' approach makes his methods transferable and easy to diagnose."
        },
        {
            title: "Transparency as Leverage",
            description: "Hormozi 'gives away the secrets' because he believes execution is the only moat. This transparency builds immense trust and authority, making him the 'go-to' source."
        },
        {
            title: "Sales as Belief-Building",
            description: "The goal isn't to persuade, but to transfer certainty. The sales process is a structured journey to get the prospect to believe in the (1) Dream, (2) their ability, and (3) your vehicle."
        }
    ];

    return (
        <PageWrapper
            title="Synthesis & Identified Patterns"
            description="Analyzing Hormozi's work reveals several recurring patterns. This synthesis identifies the core principles that connect his frameworks, books, and public content, suggesting a systematic, almost scientific approach to building businesses."
        >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-3xl mx-auto">
                <ul className="space-y-5 list-inside">
                    {patterns.map((pattern, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-teal-600 font-bold text-xl mr-3 mt-1">&#10003;</span>
                            <div>
                                <h4 className="font-semibold text-lg text-slate-800">{pattern.title}</h4>
                                <p className="text-gray-600">{pattern.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </PageWrapper>
    );
};

export default SynthesisPatterns;
