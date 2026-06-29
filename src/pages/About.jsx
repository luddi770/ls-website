import SkillsTable from "../components/About/SkillsTable";
import TimelineItem from "../components/About/TimelineItem";

import { useTranslation } from 'react-i18next';
import { karriere, career } from "../data/career";

import { MdOutlinePersonSearch } from "react-icons/md";

export default function Home() {
    const { t, i18n } = useTranslation();
    
    let careerObject = career;
    if(i18n.language === "de") careerObject = karriere
    
    return (
    <main className="flex-grow">
       
        <section className="relative pt-xxl pb-xl px-lg">
            <div className="max-w-container-max mx-auto relative z-10">
                <div className="flex flex-col gap-md">
                    <span className="font-label-mono text-primary-fixed uppercase tracking-widest">
                        {t("about-desc")}
                    </span>

                    <h1 className="font-display-lg text-5xl md:text-7xl">
                        {t("about-title")}
                    </h1>
                </div>
            </div>

        </section>

        
        <section className="px-lg pb-xxl">
            <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-xl">
                
                <div className="lg:col-span-7 flex flex-col gap-xl">
                    <p className="text-on-surface-variant leading-relaxed text-lg">
                        {t("about-personal-description")}
                    </p>

                    <SkillsTable />
                </div>

                
                <div className="lg:col-span-5">
                    <div className="sticky top-24 reveal-on-scroll">
                    <h2 className="font-headline-sm text-headline-sm text-primary-fixed mb-lg border-l-4 border-primary-fixed pl-md">
                        {t("about-career-title")}
                    </h2>
                        <div className="flex flex-col gap-0">
                            {careerObject.map((career, idx) => (
                                <TimelineItem key={idx}
                                position= {career.position}
                                time={career.time} 
                                location={career.location}
                                description={career.description}
                            />
                            ))}
                        </div>
                    
                    </div>
                </div>
            </div>
         
        </section>
    </main>
);
    
    
    
   
}