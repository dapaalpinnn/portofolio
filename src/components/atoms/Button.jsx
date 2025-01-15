export default function Button({
  children,
  onClick,
  className,
  color = "bg-slate-300",
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-black text-sm font-medium tracking-tight rounded-full ${color} ${className}`}
    >
      {children}
    </button>
  );
}
