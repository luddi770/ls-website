function ProgressBar({ skill, percentage, icon }) {
  
  console.log(icon)

  return (
    <div >
      <div className="flex justify-between font-label-mono text-caption text-on-surface mb-xs uppercase">
        <div className="flex items-center gap-sm"> 
           {icon && (

           <div className="w-6 h-6 flex items-center justify-center">
            {icon}
           </div>
           )
           }
          
          
          <span className="font-label-mono text-caption uppercase">
            {skill}
          </span>
        </div>
          
        <span className="font-label-mono text-caption text-primary-fixed">
          {percentage}%
          </span>
      </div>

      <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-fixed transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;