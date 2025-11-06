
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import Spinner from '../components/Spinner';
import { getObjectionResponse } from '../services/geminiService';

const FrameworkCard: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({ title, subtitle, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="bg-white p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl"
            onClick={() => setIsOpen(!isOpen)}
        >
            <h3 className="text-4xl font-bold text-teal-600 mb-3">{title}</h3>
            <h4 className="text-xl font-semibold text-slate-800 mb-2">{subtitle}</h4>
            {isOpen && (
                <div className="text-gray-600 mt-4 animate-fadeIn">
                    {children}
                </div>
            )}
        </div>
    );
}

const KeyFrameworks: React.FC = () => {
    const [objection, setObjection] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateResponse = async () => {
        if (!objection.trim()) {
            setError("Please enter an objection first.");
            return;
        }
        setIsLoading(true);
        setError('');
        setResponse('');
        try {
            const result = await getObjectionResponse(objection);
            setResponse(result);
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PageWrapper
            title="Key Frameworks: The AAA Close"
            description="Hormozi's sales process is not about 'tricks' but about building belief. When objections arise, he uses simple, repeatable frameworks to handle them without conflict. The 'AAA' framework is a prime example for handling objections calmly and logically. Click each card to see an explanation and example."
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FrameworkCard title="A" subtitle="Acknowledge">
                    <p>
                        Validate the prospect's concern. Don't fight it. This shows you're listening and disarms them.
                        <br /><br />
                        <strong>Example:</strong> "I hear you. $5,000 is a significant investment, and it's completely valid to be cautious about that."
                    </p>
                </FrameworkCard>
                <FrameworkCard title="A" subtitle="Align">
                    <p>
                        Agree with the logic or feeling behind the concern. This builds rapport and shows you're on their side.
                        <br /><br />
                        <strong>Example:</strong> "In fact, you *should* be thinking about the ROI. It's smart to make sure every dollar you spend is going to come back to you."
                    </p>
                </FrameworkCard>
                <FrameworkCard title="A" subtitle="Address / Ask">
                    <p>
                        Address the core issue by reframing it as an investment, not a cost, or ask a question to isolate the real objection.
                        <br /><br />
                        <strong>Example (Ask):</strong> "Just to clarify, if the price were not an issue, is this the solution you would want to move forward with?"
                    </p>
                </FrameworkCard>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-3xl mx-auto mt-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center">✨ AI Objection Handler</h3>
                <p className="text-center text-gray-600 mb-6">Enter a prospect's objection below and let AI generate a response using the "AAA" framework.</p>
                <textarea
                    value={objection}
                    onChange={(e) => setObjection(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-teal-500"
                    rows={3}
                    placeholder="e.g., 'It's too expensive,' or 'I need to think about it.'"
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerateResponse}
                    disabled={isLoading}
                    className="w-full bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-teal-700 mt-4 disabled:bg-teal-400 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Generating...' : 'Generate Response'}
                </button>
                {isLoading && <Spinner />}
                {response && !isLoading && (
                    <div className="mt-6 p-4 bg-slate-50 rounded-lg text-gray-700 leading-relaxed whitespace-pre-wrap">{response}</div>
                )}
                {error && !isLoading && (
                    <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg">{error}</div>
                )}
            </div>
        </PageWrapper>
    );
};

export default KeyFrameworks;
