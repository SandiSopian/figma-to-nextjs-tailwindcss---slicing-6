export function Input({ className, ...props }) {
  return <input className={`border px-4 py-2 rounded w-full ${className}`} {...props} />;
}
