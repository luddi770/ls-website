//import { FaReact } from "react-icons/fa";

function SkillCard({ skill, icon }) {
  const Icon = icon
  return (
    <div 

      className="SkillCard p-lg bg-surface-container-low rounded-xl border border-outline-variant/5 hover:border-primary-fixed/30 transition-all duration-300 group"
    >
        <Icon size={24} />
        

        <div className="font-label-mono text-label-mono text-on-surface">
            {skill}
        </div>
    </div>
  );
}

export default SkillCard;