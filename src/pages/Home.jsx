import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import github from '../assets/github-mark-white.png';
import linkedin from '../assets/inBug-white.png';
import { Homepage_Projects } from "../components/Homepage/HP_Projects";
import { Homepage_TechStack } from "../components/Homepage/HP_TechStack";

import myData from '../data/myData.json'


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
  <main>
  <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-margin-mobile md:px-0">
    
		
		<div className="max-w-container-max mx-auto w-full relative z-10 px-lg py-xxl transition-all duration-1000 opacity-100 translate-y-0">
      <div className="max-w-text-max">

        <div className="inline-block mb-lg px-md py-xs bg-surface-container-high rounded-md border border-outline-variant/20">
          <span className="font-label-mono text-label-mono text-primary-fixed uppercase tracking-wider text-sm">
            {t("main-hire-status")}
          </span>
        </div>
        
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
          {t("main-introduction")}
        </h1>
      
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-text-max mb-xl">
          {t("main-description")}
        </p>

    
        <div className="flex flex-wrap items-center gap-md">

         
          <a
            href={myData.cvlink}
            className="
              inline-flex items-center gap-md
              bg-primary-fixed
              hover:brightness-110
							text-on-primary-fixed
							font-headline-sm text-headline-sm
              px-xl py-md
              rounded-xl
              font-semibold
              transition-all duration-200
              hover:-translate-y-1
              shadow-lg
            "
          >
            {t("download-cv")}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
              />
            </svg>
          </a>

          
          <div className="flex items-center gap-md">

            <a
              href={`mailto:${myData.email}`}
              className="
                w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low border border-outline-variant text-on-surface-variant hover:text-primary-fixed hover:-translate-y-1 transition-all duration-300
              "
            >
              <Mail size={20} />
            </a>

            <a
              href={myData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low border border-outline-variant text-on-surface-variant hover:text-primary-fixed hover:-translate-y-1 transition-all duration-300
              "
            >
              <img
                src={github}
                alt="Github"
                className="w-5 h-5"
              />
            </a>

            <a
              href={myData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-low border border-outline-variant text-on-surface-variant hover:text-primary-fixed hover:-translate-y-1 transition-all duration-300
              "
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>

          </div>
        </div>
      </div>
    </div>    
        
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-sm opacity-40 transition-all duration-1000 opacity-100 translate-y-0">
				<span className="font-label-mono text-caption uppercase tracking-widest">
					{t("main-scroll")}
				</span>
				<div className="w-[1px] h-12 bg-gradient-to-b from-primary-fixed to-transparent"></div>
			</div>
	</section>
    
    
    <Homepage_Projects />
    

    <Homepage_TechStack />
    
    
  
    <section className="py-xxl" id="CTA">
      <div className="max-w-container-max w-full mx-auto px-lg">
        <div className="bg-surface-container-high rounded-3xl p-xl md:p-xxl flex flex-col items-center text-center relative overflow-hidden border border-outline-variant/10">
          <div className="relative z-10 max-w-2xl">
            
						<h2 className="font-display-lg-mobile md:font-headline-md text-display-lg-mobile md:text-headline-md text-on-surface mb-md">
							{t("main-cta-header")}
						</h2>
            
						<p className="font-body-lg text-body-lg text-on-surface-variant mb-xl">
							{t("main-cta-status")}
						</p>
            
						<div className="flex flex-col sm:flex-row items-center justify-center gap-md"> 
							
							<Link 
                className="w-full sm:w-auto bg-primary-fixed text-on-primary-fixed px-xl py-md rounded-xl font-headline-sm text-headline-sm hover:brightness-110 active:scale-95 transition-all shadow-lg"
                to="/contact"
              >
								{t("main-cta-contact")}
							</Link>
              
							<Link 
                className="w-full sm:w-auto border border-primary-fixed text-primary-fixed px-xl py-md rounded-xl font-headline-sm text-headline-sm hover:bg-primary-fixed/10 active:scale-95 transition-all"
                to="/projects"
              >
								{t("main-cta-archive")}
							</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
</main>
    );

}
