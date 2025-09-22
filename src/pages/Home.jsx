import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Mail } from "lucide-react";
import github from '../assets/github-mark-white.png';
import linkedin from '../assets/inBug-white.png';
import { useTranslation } from 'react-i18next';


export default function Home() {
    const [visible, setVisible] = useState(false);

    const { t, i18n } = useTranslation();

    useEffect(() => {
        // Trigger the slide-in animation after component mounts
        const timer = setTimeout(() => {
            setVisible(true);
        }, 100); // Small delay to allow the initial class to apply

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-8">
            <div className="p-8">
                <h1 className="text-5xl font-bold mb-4 flex justify-center">{t("main-introduction")}</h1>
                <p className="mt-2 flex justify-center mb-4">{t("main-description")}</p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="mailto:lusteinhorst1@gmail.com"><Mail /></a>
                    <a href="https://github.com/luddi770" target="_blank"><img src={github} alt="Github" width={24} height={24} /></a>
                    <a href="https://www.linkedin.com/in/ludwig-steinhorst-2b1a2034b/" target="_blank"><img src={linkedin} alt="LinkedIn" width={24} height={24} /></a>
                </div>
            </div>
           <div className="w-full flex justify-center">
            <a 
                href="https://drive.google.com/uc?export=download&id=1AMWcU2AnaDWzQB8Wxm-UFu7230vG6UF4" 
                className="inline-flex items-center justify-center gap-2 
                        px-6 py-3 rounded-lg 
                        bg-gradient-to-r from-indigo-500 to-gray-900 
                        text-white font-medium 
                        shadow-lg transition-transform duration-300 
                        hover:scale-105 hover:shadow-xl 
                        animate-bounce"
            >
                <svg xmlns="http://www.w3.org/2000/svg" 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round">
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
                </svg>
                Download CV
            </a>
            </div>
        </div>
    );
}