
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import LeadGenChart from '../components/LeadGenChart';
import Spinner from '../components/Spinner';
import { getLeadGenIdeas } from '../services/geminiService';

const stepTitles = [
    'Define Your "Grand Slam Offer"',
    'Generate Leads on a "Shoestring Budget"',
    'The Sales Call as a Strategy Session',
    'Systematic Iteration'
];

const StartupActionPlan: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [ideas, setIdeas] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const totalSteps = stepTitles.length;

    const handleGenerateIdeas = async () => {
        setIsLoading(true);
        setError('');
        setIdeas('');
        try {
            const result = await getLeadGenIdeas();
            const formattedResult = result
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/(\n|^)[\*|-] (.*?)(?=\n|$)/g, '$1<li class="mb-2">$2</li>')
                .replace(/(<li>.*<\/li>)/gs, '<ul class="list-disc list-inside mt-4">$1</ul>')
                .replace(/<\/ul>\s*<ul>/g, '');
            setIdeas(formattedResult);
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 0:
                return (
                    <div>
                        <h4 className="text-lg font-semibold text-teal-700 mb-3">Concept (from $100M Offers):</h4>
                        <p className="text-gray-700 mb-4">Stop selling "web design" or "AI services." Sell a *guaranteed outcome*. Niche down to a "starving crowd" (e.g., local plumbers, dentists, e-com stores) and build an offer so good they feel stupid saying no.</p>
                        <h4 className="text-lg font-semibold text-teal-700 mb-3">Action Steps:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Niche:</strong> Choose one specific market (e.g., "AI-powered lead gen for cosmetic dentists").</li>
                            <li><strong>Dream Outcome:</strong> What do they *really* want? (e.g., "20 new high-value patient bookings per month").</li>
                            <li><strong>Value Equation:</strong>
                                <ul className="list-inside list-disc ml-6 mt-2 text-sm">
                                    <li><strong>Likelihood:</strong> Add a bold guarantee. "If you don't get 20 new bookings in 90 days, we work for free until you do."</li>
                                    <li><strong>Time Delay:</strong> "Go-live in 14 days."</li>
                                    <li><strong>Effort:</strong> "We handle 99% of the setup. All we need is a 1-hour kickoff call."</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                );
            case 1:
                return (
                     <div>
                        <h4 className="text-lg font-semibold text-teal-700 mb-3">Concept (from $100M Leads):</h4>
                        <p className="text-gray-700 mb-4">With a shoestring budget, you must trade time for money. Focus on high-leverage organic outreach and content. Your Grand Slam Offer will make this 10x more effective. The chart below shows a sample "shoestring" lead-gen mix.</p>
                        <div className="my-6">
                            <LeadGenChart />
                        </div>
                        <h4 className="text-lg font-semibold text-teal-700 mb-3">Action Steps:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Cold Outreach (60%):</strong> Find 100 dentists on LinkedIn. Send a *personalized* video/message. "Hi Dr. Smith, I made a 2-min demo of an AI chatbot that could pre-qualify 5 new patients for you this week. Can I send it?"</li>
                            <li><strong>Content (25%):</strong> Write 3 high-value articles/posts that solve a *specific* problem for dentists. "3 AI Prompts to Automate Patient Follow-up."</li>
                            <li><strong>Referrals (15%):</strong> Do one job for free or cheap for a well-connected dentist in exchange for a video testimonial and 3 warm introductions.</li>
                        </ul>
                         <div className="bg-slate-50 p-6 rounded-xl shadow-inner mt-8">
                            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">✨ AI Lead Gen Assistant</h3>
                            <p className="text-center text-gray-600 mb-5">Click below to brainstorm more "shoestring budget" lead gen ideas for your 'cosmetic dentist' niche.</p>
                            <button onClick={handleGenerateIdeas} disabled={isLoading} className="w-full bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:bg-teal-700 disabled:bg-teal-400 disabled:cursor-not-allowed">
                                {isLoading ? 'Generating...' : '✨ Generate More Lead Ideas'}
                            </button>
                            {isLoading && <Spinner />}
                            {ideas && !isLoading && (
                                <div className="mt-6 p-4 bg-white rounded-lg text-gray-700" dangerouslySetInnerHTML={{ __html: ideas }}></div>
                            )}
                            {error && !isLoading && (
                                <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg">{error}</div>
                            )}
                        </div>
                    </div>
                );
            case 2:
                return (
                     <div>
                        <h4 className="text-lg font-semibold text-teal-700 mb-3">Concept (from $100M Closing):</h4>
                        <p className="text-gray-700 mb-4">Your "sales call" is now a *free strategy session*. The goal is to build belief and transfer certainty. Give away your best ideas to prove your value. The sale is just the logical next step.</p>
                        <h4 className="text-lg font-semibold text-teal-700 mb-3">Action Steps (The Call):</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Diagnose Pain:</strong> "What's the biggest bottleneck in getting new patients right now?"</li>
                            <li><strong>Build Belief:</strong> "Our other dental clients saw a 30% increase in bookings after we fixed that *exact* bottleneck. Here's how..."</li>
                            <li><strong>Handle Objections (AAA):</strong>
                                <ul className="list-inside list-disc ml-6 mt-2 text-sm bg-slate-50 p-3 rounded-lg">
                                    <li><strong>Prospect:</strong> "It's too expensive."</li>
                                    <li><strong>You (Acknowledge):</strong> "I hear you. $3000 is a real investment."</li>
                                    <li><strong>You (Align):</strong> "And you should be scrutinizing every dollar. You need to know it'll pay for itself."</li>
                                    <li><strong>You (Address/Ask):</strong> "Based on your average patient value of $1000, if this system brings in just *one* extra patient per month, it's paid for 3x over in the first quarter. Does that math track with what you're seeing?"</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h4 className="text-lg font-semibold text-teal-700 mb-3">Concept (The System):</h4>
                        <p className="text-gray-700 mb-4">This isn't a "one and done" process. Hormozi's models are designed for iteration. You must track your data, identify the weakest link in your funnel, and apply his principles to fix it.</p>
                        <h4 className="text-lg font-semibold text-teal-700 mb-3">Action Steps (Iteration):</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Track Metrics:</strong> You *must* know your numbers.
                                <ul className="list-none ml-6 mt-2 text-sm bg-gray-50 p-3 rounded">
                                    <li>Outreach messages sent: 100</li>
                                    <li>Replies: 10 (10% reply rate)</li>
                                    <li>Calls booked: 5 (50% reply-to-book)</li>
                                    <li>Closed deals: 1 (20% close rate)</li>
                                </ul>
                            </li>
                            <li><strong>Identify Bottleneck:</strong> "My 10% reply rate is low."</li>
                            <li><strong>Apply Framework:</strong>
                                <ul className="list-disc list-inside ml-6 mt-2 text-sm">
                                    <li>"My <strong>Offer</strong> must not be strong enough." (Go back to Step 1).</li>
                                    <li>"My <strong>Lead</strong>-gen message isn't compelling." (Go back to Step 2).</li>
                                </ul>
                            </li>
                            <li><strong>Iterate:</strong> Tweak the offer or the message and run the 100-outreach sprint again. Repeat forever.</li>
                        </ul>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <PageWrapper
            title="Startup Action Plan"
            description="This is a step-by-step implementation guide for a small AI-engineering and web-design startup on a 'shoestring budget,' applying Hormozi's principles. The focus is on high-leverage, low-cost actions. Use the 'Next' and 'Previous' buttons to navigate the plan."
        >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-4xl mx-auto">
                <div className="mb-6 border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-semibold text-slate-800">
                        Step {currentStep + 1} of {totalSteps}: {stepTitles[currentStep]}
                    </h3>
                </div>
                <div className="min-h-[300px]">
                    {renderStepContent()}
                </div>
                <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
                    <button
                        onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
                        disabled={currentStep === 0}
                        className="bg-gray-300 text-gray-700 font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentStep(s => Math.min(totalSteps - 1, s + 1))}
                        disabled={currentStep === totalSteps - 1}
                        className="bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </PageWrapper>
    );
};

export default StartupActionPlan;
