import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Mail } from "lucide-react";
import github from '../assets/github-mark-white.png';
import linkedin from '../assets/inBug-white.png';


export default function Home() {
    const [visible, setVisible] = useState(false);

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
                <h1 className="text-5xl font-bold mb-4 flex justify-center">Hi, I'm Ludwig Steinhorst</h1>
                <p className="mt-2 flex justify-center mb-4">Software Engineer & Web Developer</p>
                <div className="flex justify-center gap-4 mt-4">
                    <a href="mailto:lusteinhorst1@gmail.com"><Mail /></a>
                    <a href="https://github.com/luddi770" target="_blank"><img src={github} alt="Github" width={24} height={24} /></a>
                    <a href="https://www.linkedin.com/in/ludwig-steinhorst-2b1a2034b/" target="_blank"><img src={linkedin} alt="LinkedIn" width={24} height={24} /></a>
                </div>
            </div>


        </div>
    );
}