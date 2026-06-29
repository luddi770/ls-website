import { useTranslation } from 'react-i18next';

import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { TbDatabase } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";

import ProgressBar from "./Techstack/ProgressBar"
import SkillCard from "./Techstack/SkillCard";

import {homepageSkills, skillCardSkills} from '../../data/mySkills'

export function Homepage_TechStack(){
    const skills = homepageSkills

    const { t, i18n } = useTranslation();
    
    return (

    <section className="py-xxl bg-surface border-y border-outline-variant/10" id="TechStack">
        <div className="max-w-container-max mx-auto px-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xxl items-center">
                <div>
                    <span className="font-label-mono text-label-mono text-primary-fixed mb-sm block uppercase">
                        {t("main-tech-stack-title")}
                    </span>
                    <h2 className="font-headline-md text-headline-md text-on-surface mb-lg">
                        {t("main-tech-stack-headline")}
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
                        {t("main-tech-stack-description")}
                    </p>
                    
                    <div className="space-y-md">
                        {skills.map((item) => (
                            <ProgressBar
                                key={item.skill}
                                skill={item.skill}
                                percentage={item.percentage}
                            />
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-md">
                    { skillCardSkills.map((item, index) => (
                        <SkillCard 
                            key={item.skill} 
                            skill={item.skill} 
                            icon={item.icon} 
                        />
                        
                    ))}
                 
                </div>
            </div>
        </div>
    </section>
    )
}