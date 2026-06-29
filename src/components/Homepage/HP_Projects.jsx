import {Link} from "react-router-dom";

import { useTranslation } from 'react-i18next';

import { projects, projekte } from '../../data/projects';

export function Homepage_Projects(){
  const { t, i18n } = useTranslation();
  
  let projectObject = projects;
  if(i18n.language === "de") projectObject = projekte
  
  return (
    <section className="relative py-xxl bg-surface-container-lowest" >
      <div className="max-w-container-max mx-auto px-lg transition-all duration-1000 ease-out opacity-100 translate-y-0">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">

          <div className="max-w-text-max">
            <span className="font-label-mono text-label-mono text-primary-fixed mb-sm block">
              {t("main-project-title")}
            </span>

            <h2 className="font-headline-md text-headline-md text-on-surface">
              {t("main-project-headline")}
            </h2>
          </div>

          <Link 
            className="font0-label-mono text-label-mono text-on-surface-variant hover:text-primary-fixed transition-colors flex items-center mb-xs group" 
            to='/projects'
          >
            {t("main-project-link")}
            <span className="text-[18px] transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">
          
          {/* Featured Homepage Project */}
          {projectObject.map((project, idx) => 
            project.HP_featured_pr && (
            <a
              key={idx} href={project.link} target="_blank"
              className="md:col-span-8 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl bg-surface-container-high aspect-video border border-outline-variant/10 group-hover:border-primary-fixed/30 transition-all duration-500 shadow-xl">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={project.image}/>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-xl">
                  <div className="flex gap-sm">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-sm py-xs bg-surface-container-highest/80 backdrop-blur-md rounded font-label-mono text-[10px] text-on-surface">
                        {tech}
                      </span>  
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-md">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {project.title}
                </h3>
                <p className="font-body-md text-on-surface-variant mt-xs">
                  {project.description}
                </p>
              </div>
            </a>
            )
           )} 

          {/* Selected Homepage Project */}
          {projectObject.map((project, idx) => 
            project.HP_selected && (
            <a key={idx} href={project.link} target="_blank" className="md:col-span-4 group cursor-pointer">

          
            
              <div className="relative overflow-hidden rounded-xl bg-surface-container-high aspect-square border border-outline-variant/10 group-hover:border-primary-fixed/30 transition-all duration-500 shadow-xl">
                <img 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={project.image}/>
              </div>
              <div className="mt-md">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {project.title}
                </h3>
              <p className="font-body-md text-on-surface-variant mt-xs">
                {project.description}
              </p>
              </div>
            </a>
            )   
            )}
      </div>
  </div>
</section>
    )
}