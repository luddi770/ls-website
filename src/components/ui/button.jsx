export function Button({ children, className, ...props }) {
    return (
        <button
            className={`bg-slate-600 px-4 py-2 rounded hover:bg-slate-500 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}