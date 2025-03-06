export function Textarea({ className, ...props }) {
  return <textarea className={`border px-4 py-2 rounded w-full ${className}`} {...props} />;
}
