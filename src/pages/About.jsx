import SkillsTable from "./SkillsTable";
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t, i18n } = useTranslation();
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 text-white p-8 m-0">
            <h2 className="text-3xl font-semibold mb-6 text-center">{t("nav-about-me")}</h2>
            <div className="max-w-3xl mx-auto text-center text-slate-300">
                <p className="mt-2">{t("about-description")}</p>
            </div>
            <h2 className="text-3xl font-semibold mb-6 text-center"></h2>
            <div>
                <p></p>
            </div>
            <SkillsTable />
        </div>
    );
}