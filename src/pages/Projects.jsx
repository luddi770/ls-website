import { projects, projekte } from '../data/projects';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t, i18n } = useTranslation();
    
    let projectObject = projects;
    if(i18n.language === "de") projectObject = projekte

    return (
  <main className="flex-grow">
    
    <section className="relative pt-xxl pb-xl px-lg">
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="flex flex-col gap-md">
          <span className="font-label-mono text-primary-fixed uppercase tracking-widest">
            {t("project-header")}
          </span>
          <h1 className="font-display-lg text-5xl md:text-7xl">
            {t("project-title")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-text-max">
            {t("project-headline")}
          </p>
        </div>
      </div>
    </section>

    {/* Project Grid */}
    <div className="max-w-container-max w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg  pb-xxl">
      {projectObject.map((project, idx) => (
        <div
          key={idx}
          className="glass-card rounded-xl overflow-hidden flex flex-col group"
        >
          
          {project.image && (
            <div className="project-image-container relative aspect-video overflow-hidden bg-surface-container-highest">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}

          <div className="p-lg flex flex-col flex-grow">
            
            {project.tech && (
              <div className="flex flex-wrap gap-sm mb-md">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="font-label-mono text-label-mono px-sm py-xs bg-surface-container-high text-on-surface-variant rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">
              {project.title}
            </h3>

            <p className="text-on-surface-variant font-body-md mb-xl flex-grow">
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              
              className="flex items-center gap-sm text-primary-fixed hover:text-primary-fixed-dim transition-colors font-bold active:scale-95"
            >
                <svg className='fill-primary-fixed hover:fill-primary-fixed-dim' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /><path d="M21.894 11.553C19.736 7.236 15.904 5 12 5c-3.903 0-7.736 2.236-9.894 6.553a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19c3.903 0 7.736-2.236 9.894-6.553a1 1 0 0 0 0-.894zM12 17c-2.969 0-6.002-1.62-7.87-5C5.998 8.62 9.03 7 12 7c2.969 0 6.002 1.62 7.87 5-1.868 3.38-4.901 5-7.87 5z" /></svg>
                
                <span>{t("project-github")}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </main>
);
}