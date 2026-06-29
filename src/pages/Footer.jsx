
import myData from '../data/myData.json'

export default function Footer() {

    return (
    <footer className="bg-surface-container-lowest py-xl border-t border-outline-variant/10" id="Footer">
        <div className="max-w-container-max mx-auto px-lg flex flex-col md:flex-row justify-between items-center gap-md">
            <div className="flex flex-col items-center md:items-start gap-xs">
                <span className="font-label-mono text-label-mono text-on-surface font-bold">
                    &lt; Ludwig &gt;
                </span>
                <span className="font-caption text-caption text-on-surface-variant/60">
                    © 2026 Ludwig Steinhorst
                </span>
            </div>
            <div className="flex items-center gap-xl">
            <a  className="font-body-md text-body-md text-on-surface-variant/60 hover:text-primary-fixed hover:-translate-y-0.5 transition-all duration-300" 
                href={myData.github}>
                    GitHub
            </a>
            <a  className="font-body-md text-body-md text-on-surface-variant/60 hover:text-primary-fixed hover:-translate-y-0.5 transition-all duration-300" 
                href={myData.linkedin}>
                    LinkedIn
            </a>
            </div>
        </div>
    </footer>
    );
}