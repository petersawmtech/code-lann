import React from 'react';

interface HeroProps {
  onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  return (
    <div className="relative text-center py-20 sm:py-28 lg:py-36 px-4 bg-gradient-to-b from-blue-50 dark:from-slate-900 to-slate-50 dark:to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-400 dark:to-sky-300 animate-fadeInUp"
                style={{ animationDelay: '100ms' }}
            >
                သင်၏ Coding ခရီးလမ်း၊ <br className="sm:hidden" />ဒီနေရာကနေ စတင်ပါ။
            </h1>
            <p 
                className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 animate-fadeInUp"
                style={{ animationDelay: '300ms' }}
            >
                "ကုဒ်လမ်း" သည် သင်၏နည်းပညာဆိုင်ရာ ရည်မှန်းချက်များကို အမှန်တကယ်ဖြစ်လာစေရန် ကူညီပေးမည့် အကောင်းဆုံး အထောက်အကူပစ္စည်းများနှင့် လမ်းညွှန်များကို စုစည်းပေးထားသော နေရာတစ်ခုဖြစ်သည်။
            </p>
            <div 
                className="mt-8 flex justify-center animate-fadeInUp"
                style={{ animationDelay: '500ms' }}
            >
                <button
                    onClick={onGetStartedClick}
                    className="text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-6 py-3 transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
                >
                    သင်ခန်းစာများ ကြည့်ရှုမည်
                </button>
            </div>
        </div>
    </div>
  );
};

export default Hero;
