import React from "react";
import { FaPython, FaJsSquare, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
    { name: "Python", level: 80, icon: <FaPython size={24} color="#3776AB" /> },
    { name: "SQL", level: 80, icon: <FaDatabase size={24} color="#4479A1" /> },
    { name: "C", level: 75, icon: <i className="devicon-c-plain colored text-2xl" size={10} /> },
    { name: "VisualBasic", level: 75, icon: <i className="devicon-visualbasic-plain colored text-2xl" size={10} /> },
    { name: "C++", level: 65, icon: <i className="devicon-cplusplus-plain colored text-2xl" size={10} /> },
    { name: "Java", level: 65, icon: <i className="devicon-java-plain colored text-2xl" size={10} /> },
    { name: "JavaScript", level: 55, icon: <FaJsSquare size={24} color="#F7DF1E" /> },
    { name: "React", level: 45, icon: <FaReact size={24} color="#61DAFB" /> },
    { name: "Node.js", level: 35, icon: <FaNodeJs size={24} color="#339933" /> },
    { name: "Tailwind CSS", level: 30, icon: <SiTailwindcss size={24} color="#38B2AC" /> },
    
];

export default function SkillsTable() {
    return (
        <section id="skills" className="max-w-3xl mx-auto my-16 px-4">
            <h2 className="text-3xl font-semibold mb-6 text-center text-white">Skills</h2>
            <div className="space-y-6">
                {skills.map(({ name, level, icon }) => (
                    <div
                        key={name}
                        className="flex items-center space-x-4 bg-slate-800 rounded-lg p-4 hover:bg-sky-700 transition-colors"
                    >
                        <div className="flex-shrink-0">{icon}</div>
                        <div className="flex-1">
                            <div className="flex justify-between mb-1">
                                <span className="text-white font-medium">{name}</span>
                                <span className="text-sky-400 font-semibold">{level}%</span>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-sky-400 h-3 rounded-full transition-all duration-500"
                                    style={{ width: `${level}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
