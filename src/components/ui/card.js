export function Card({ children, className }) {
  return <div className={`p-6 bg-white shadow-lg rounded-xl ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div className="mt-2">{children}</div>;
}
