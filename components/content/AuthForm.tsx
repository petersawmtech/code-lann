import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface AuthFormProps {
    initialState?: 'login' | 'signup';
    onSuccess: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ initialState = 'login', onSuccess }) => {
    const [isLogin, setIsLogin] = useState(initialState === 'login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { login, signup } = useAuth();

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setError(null);
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await signup(email, password);
            }
            onSuccess();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        အီးမေးလ်လိပ်စာ
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                        disabled={loading}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        စကားဝှက်
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete={isLogin ? "current-password" : "new-password"}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                        disabled={loading}
                    />
                </div>
            </div>

            {error && (
                <p className="text-sm text-red-600 dark:text-red-400 text-center bg-red-100 dark:bg-red-900/30 p-3 rounded-md">
                    {error}
                </p>
            )}

            <div className="flex flex-col gap-4">
                <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2.5 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800 disabled:bg-blue-400 dark:disabled:bg-blue-800 disabled:cursor-not-allowed flex items-center justify-center"
                    disabled={loading}
                >
                    {loading && (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    )}
                    {loading ? 'လုပ်ဆောင်နေသည်...' : (isLogin ? 'အကောင့်ဝင်ရန်' : 'အကောင့်သစ်ဖွင့်ရန်')}
                </button>
                <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                    {isLogin ? 'အကောင့်မရှိသေးဘူးလား?' : 'အကောင့်ရှိပြီးသားလား?'}
                    <button
                        type="button"
                        onClick={toggleForm}
                        className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 ml-1 disabled:opacity-50"
                        disabled={loading}
                    >
                        {isLogin ? 'အကောင့်ဖွင့်ရန်' : 'အကောင့်ဝင်ရန်'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;
