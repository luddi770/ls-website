import { projects, projekte } from '../data/projects';
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t, i18n } = useTranslation();
    
    let projectObject = projects;
    if(i18n.language === "de") projectObject = projekte

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-8'>
            <h2 className="text-3xl font-semibold mb-6 text-center">{t("nav-projects")}</h2>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {projectObject.map((project, idx) => (
                    <Card key={idx} className='border p-4 rounded shadow'>
                        <CardContent className="p-4">

                            < h3 className='text-xl font-bold mb-2' > {project.title}</h3>
                            <p className='text-slate-300 mb-4'>{project.description}</p>
                            <Button variant="primary" href={project.link} target='_blank' rel='nooperner noreeferrer'>{t("project-view-project")}</Button>
                        </CardContent>
                    </Card>
                ))
                }
            </ul >
        </div >
    );
}