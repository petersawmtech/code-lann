import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Progress } from '../types';

// In a real app, passwords would be hashed. We are storing them in plaintext
// here for simulation purposes ONLY.
type StoredUser = User & { password_plaintext: string };

interface AuthContextType {
    currentUser: User | null;
    login: (email: string, password_plaintext: string) => Promise<void>;
    signup: (email: string, password_plaintext: string) => Promise<void>;
    logout: () => void;
    progress: Progress;
    updateProgress: (resourceName: string, percentage: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const USERS_KEY = 'app_users_db';
const CURRENT_USER_KEY = 'app_session';
const PROGRESS_PREFIX = 'app_progress_';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        try {
            const session = localStorage.getItem(CURRENT_USER_KEY);
            return session ? JSON.parse(session) : null;
        } catch (e) {
            console.error('Failed to parse session from localStorage', e);
            return null;
        }
    });
    const [progress, setProgress] = useState<Progress>({});

    useEffect(() => {
        if (currentUser) {
            try {
                localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser));
            } catch (e) {
                console.error('Failed to save session to localStorage', e);
            }
            try {
                const progressKey = `${PROGRESS_PREFIX}${currentUser.email}`;
                const savedProgress = localStorage.getItem(progressKey);
                setProgress(savedProgress ? JSON.parse(savedProgress) : {});
            } catch (e) {
                console.error('Failed to load progress from localStorage', e);
                setProgress({});
            }
        } else {
            try {
                localStorage.removeItem(CURRENT_USER_KEY);
            } catch (e) {
                console.error('Failed to remove session from localStorage', e);
            }
            setProgress({});
        }
    }, [currentUser]);

    const updateProgress = (resourceName: string, percentage: number) => {
        if (!currentUser) return;

        const newProgress = { ...progress, [resourceName]: percentage };
        setProgress(newProgress);
        try {
            const progressKey = `${PROGRESS_PREFIX}${currentUser.email}`;
            localStorage.setItem(progressKey, JSON.stringify(newProgress));
        } catch (e) {
            console.error('Failed to save progress to localStorage', e);
        }
    };

    /**
     * Simulates an API call to a backend that would send a notification email.
     * In a real application, this would be a secure endpoint.
     * @param email The email of the new user.
     */
    const notifyAdminOfNewSignup = async (email: string): Promise<void> => {
        console.log(`[SIMULATED API CALL] Notifying admin at petersawm936@gmail.com of new user signup: ${email}`);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network latency
        console.log('[SIMULATED API CALL] Admin notification sent successfully.');
        // In a real-world scenario, this would be an actual fetch call:
        // await fetch('/api/signup-notification', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ newUserEmail: email })
        // });
    };

    const signup = async (email: string, password_plaintext: string): Promise<void> => {
        if (!email || !password_plaintext) {
            throw new Error('အီးမေးလ်နှင့် စကားဝှက် လိုအပ်ပါသည်။');
        }
        if (password_plaintext.length < 6) {
            throw new Error('စကားဝှက်သည် အနည်းဆုံး စာလုံး ၆ လုံး ရှိရပါမည်။');
        }

        let db: StoredUser[] = [];
        try {
            db = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
        } catch (e) {
            console.error('Failed to load users from localStorage', e);
        }
        const userExists = db.some(user => user.email.toLowerCase() === email.toLowerCase());

        if (userExists) {
            throw new Error('ဤအီးမေးလ်ဖြင့် အကောင့်ဖွင့်ပြီးသားဖြစ်ပါသည်။');
        }

        const newUser: StoredUser = { email, password_plaintext };
        db.push(newUser);
        try {
            localStorage.setItem(USERS_KEY, JSON.stringify(db));
        } catch (e) {
            console.error('Failed to save users to localStorage', e);
        }

        await notifyAdminOfNewSignup(email);

        setCurrentUser({ email });
    };

    const login = async (email: string, password_plaintext: string): Promise<void> => {
        let db: StoredUser[] = [];
        try {
            db = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
        } catch (e) {
            console.error('Failed to load users from localStorage', e);
        }
        const user = db.find(u => u.email.toLowerCase() === email.toLowerCase());

        if (!user || user.password_plaintext !== password_plaintext) {
            throw new Error('အီးမေးလ် သို့မဟုတ် စကားဝှက် မှားယွင်းနေပါသည်။');
        }

        setCurrentUser({ email });
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const value = { currentUser, login, signup, logout, progress, updateProgress };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
