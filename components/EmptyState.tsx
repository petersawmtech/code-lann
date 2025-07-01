import React from 'react';
import { EmptyStateIcon } from './icons';

interface EmptyStateProps {
    title: string;
    message: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, message }) => {
    return (
        <div className="text-center py-16 px-6 animate-fadeInUp">
            <EmptyStateIcon className="mx-auto h-20 w-20 text-slate-400 dark:text-slate-600" />
            <h2 className="mt-6 text-2xl font-semibold text-slate-700 dark:text-slate-300">{title}</h2>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
                {message}
            </p>
        </div>
    );
};

export default EmptyState;
