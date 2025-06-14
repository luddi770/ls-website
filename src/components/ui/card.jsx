export function Card({ children, className }) {
  return <div className={`rounded-xl bg-white/10 p-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}