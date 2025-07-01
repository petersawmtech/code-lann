import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Resource } from '../types';
import { SparklesIcon } from './icons';

interface AIPlan {
    planRationale: string;
    recommendedResources: {
        name: string;
        reason: string;
    }[];
}

interface AIPlannerProps {
    onPlanGenerated: (plan: AIPlan) => void;
    resources: Resource[];
}

const AIPlanner: React.FC<AIPlannerProps> = ({ onPlanGenerated, resources }) => {
    const [goal, setGoal] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGeneratePlan = async () => {
        if (!goal.trim()) {
            setError('သင်၏ ရည်မှန်းချက်ကို ထည့်သွင်းပါ။');
            return;
        }
        setLoading(true);
        setError(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const prompt = `You are an expert curriculum planner for software developers. The user wants to achieve the following goal: "${goal}".

            Here is a list of available learning resources in JSON format:
            ${JSON.stringify(resources.map(r => ({ name: r.name, description: r.description, technologies: r.technologies, level: r.level })))}

            Analyze the user's goal and the available resources. Create a step-by-step learning plan by selecting the most appropriate resources.

            Your response MUST be a single, valid JSON object with the following structure, and nothing else:
            {
              "planRationale": "A short, encouraging paragraph in Burmese explaining the overall learning path and why these resources were chosen.",
              "recommendedResources": [
                {
                  "name": "resource_name_from_the_list",
                  "reason": "A short, one-sentence explanation in Burmese of why this specific resource is recommended for their goal."
                }
              ]
            }

            - Only include resources from the provided list.
            - Match the resource names exactly.
            - The "reason" and "planRationale" MUST be in Burmese language.
            - Choose a variety of resources if applicable, guiding the user from beginner to more advanced topics based on their goal.
            - If the user's goal is vague, create a general-purpose plan for web development.`;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash-preview-04-17',
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                },
            });

            let jsonStr = response.text.trim();
            const fenceRegex = /^```(\w*)?\s*\n?(.*?)\n?\s*```$/s;
            const match = jsonStr.match(fenceRegex);
            if (match && match[2]) {
              jsonStr = match[2].trim();
            }

            const plan = JSON.parse(jsonStr) as AIPlan;

            if (!plan.planRationale || !plan.recommendedResources) {
                throw new Error("AI မှ မမှန်ကန်သော တုံ့ပြန်မှု ရရှိခဲ့သည်။");
            }
            onPlanGenerated(plan);

        } catch (e) {
            console.error("Failed to generate AI plan:", e);
            setError('သင်တန်းအစီအစဉ် ဖန်တီးရာတွင် အမှားအယွင်း ဖြစ်ပွားပါသည်။ နောက်တစ်ကြိမ် ထပ်ကြိုးစားကြည့်ပါ။');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800 py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center justify-center gap-2 mb-4">
                    <SparklesIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white">
                        AI ဖြင့် သင်တန်းအစီအစဉ်ဆွဲပါ
                    </h2>
                </div>
                <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-6">
                    သင်၏ coding ရည်မှန်းချက်ကို ရေးလိုက်ပါ၊ ကျွန်ုပ်တို့၏ AI က သင့်အတွက် အသင့်တော်ဆုံး သင်ခန်းစာများကို အကြံပြုပေးပါမည်။
                </p>
                <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
                    <input
                        type="text"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="ဥပမာ- Frontend developer ဖြစ်ချင်ပါတယ်။"
                        className="w-full flex-grow px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label="သင်၏ coding ရည်မှန်းချက်"
                        disabled={loading}
                    />
                    <button
                        onClick={handleGeneratePlan}
                        disabled={loading}
                        className="w-full sm:w-auto flex-shrink-0 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 transition-all duration-300 disabled:bg-blue-400 dark:disabled:bg-blue-800 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                           <SparklesIcon className="w-5 h-5"/>
                        )}
                        <span>{loading ? 'ဖန်တီးနေသည်...' : 'အစီအစဉ်ဆွဲမည်'}</span>
                    </button>
                </div>
                {error && <p className="mt-4 text-sm text-red-600 dark:text-red-400">{error}</p>}
            </div>
        </div>
    );
};

export default AIPlanner;
