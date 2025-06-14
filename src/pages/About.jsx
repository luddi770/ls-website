import SkillsTable from "./SkillsTable";

export default function Home() {
    return (
        <div className="mb-16 min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-8">
            <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto text-center text-slate-300">
                <p className="mt-2">I'm a software developer passionate about building impactful applications.</p>
            </div>
            <SkillsTable />
        </div>
    );
}