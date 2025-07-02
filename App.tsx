import React, { useState } from 'react';
import { Resource } from '../types';

interface AIPlannerProps {
  resources: Resource[];
  onPlanGenerated: (plan: {
    planRationale: string;
    recommendedResources: {
      name: string;
      reason: string;
    }[];
  }) => void;
}

const AIPlanner: React.FC<AIPlannerProps> = ({ resources, onPlanGenerated }) => {
  const [loading, setLoading] = useState(false);

  const handleGeneratePlan = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai-plan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resources })
      });
      const data = await response.json();
      onPlanGenerated(data);
    } catch (error) {
      console.error('AI Plan Generation Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 text-center bg-gray-100 dark:bg-slate-800">
      <h2 className="text-2xl font-bold mb-4">AI သင်တန်းအစီအစဉ်ဖန်တီးရန်</h2>
      <button
        onClick={handleGeneratePlan}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'AI ဖန်တီးနေသည်...' : 'AI နဲ့စတင်မည်'}
      </button>
    </section>
  );
};

export default AIPlanner;
