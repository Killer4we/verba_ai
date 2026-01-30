export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-card border border-white/10 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-muted mb-6">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}
