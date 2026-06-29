function TimelineItem({ position, time, location, description }) {
  return (
    <div className="relative pl-xl pb-xl">
        <div className="timeline-dot absolute left-0 top-0 w-4 h-4 bg-primary-fixed rounded-full timeline-dot-glow"></div>
        
        <span className="font-label-mono text-caption text-outline mb-xs block">
            {time}
       
        </span>
        <h3 className="font-headline-sm text-headline-sm">
            {position}
            
        </h3>
        <p className="font-body-md text-primary-fixed mb-sm">
            {location}
         
        </p>
        <p className="text-on-surface-variant text-body-md">
            {description}
            
        </p>
    </div>
  );
}

export default TimelineItem;