export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#1B1B1B] text-white px-6">
      <h1 className="text-6xl font-extrabold tracking-tight">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-400 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-8 px-6 py-3 rounded-xl font-medium shadow-lg transition-transform transform hover:scale-105"
        style={{
          background:
            "linear-gradient(135deg, #7DD3DD 0%, #89CFF0 50%, #A7C8F7 100%)",
          color: "#1B1B1B",
        }}
      >
        Go Back Home
      </a>
    </main>
  );
}
