import { projects } from '../data/projects';

export default function Projects() {
    return (
        <div className='p-8'>
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <ul className='space-y-4'>
                {projects.map((project, idx) => (
                    <li key={idx} className='border p-4 rounded shadow'>
                        <h3 className='text-x1 font-bold'>{project.title}</h3>
                        <p>{project.description}</p>
                        <a className='text-blue-500' href={project.link} target='_blank' rel='nooperner noreeferrer'>View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}