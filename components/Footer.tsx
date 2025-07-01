
import React from 'react';

interface FooterProps {
    onTermsClick: () => void;
    onPrivacyClick: () => void;
    onCookieClick: () => void;
    onAccessibilityClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onTermsClick, onPrivacyClick, onCookieClick, onAccessibilityClick }) => {
    const footerLinks = [
        { name: 'အသုံးပြုမှုဆိုင်ရာ စည်းမျဉ်းများ', action: onTermsClick },
        { name: 'ကိုယ်ရေးကိုယ်တာ မူဝါဒ', action: onPrivacyClick },
        { name: 'ကွတ်ကီး အသိပေးချက်', action: onCookieClick },
        { name: 'အသုံးပြုနိုင်စွမ်းဆိုင်ရာ ထုတ်ပြန်ချက်', action: onAccessibilityClick },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            &copy; {currentYear} Peter Sawm. All Rights Reserved.
                        </p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
                        {footerLinks.map((link) => (
                            <button key={link.name} onClick={link.action} className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                {link.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;