import React from "react";

import {skills} from '../../data/mySkills'

import { useTranslation } from 'react-i18next';

import ProgressBar from "../Homepage/Techstack/ProgressBar";

export default function SkillsTable() {

    const { t, i18n } = useTranslation();
    
    skills.map((item, index) => {
  console.log(item.name);
  console.log(item.level);
  console.log(item.icon);
});

   return (
    <section className="w-full">
        <div className="mt-xl glass-panel p-lg rounded-xl">
            <div className="mb-lg">
                <h3 className="font-label-mono text-label-mono text-primary-fixed uppercase tracking-widest mb-sm">
                    {t("about-skill-table-title")}
                </h3>

                <p className="text-on-surface-variant">
                    {t("about-skill-table-headline")}
                </p>
            </div>

            <div className="flex flex-col gap-md">
                {skills.map((item) => (
                    
                    <ProgressBar 
                        key={item.name}
                        skill={item.name} 
                        percentage={item.level} 
                        icon={item.icon} 
                    />
                   
                ))}
            </div>
        </div>
    </section>
);
}
