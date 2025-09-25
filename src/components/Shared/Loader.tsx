export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1B1B1B] space-x-2">
      <span className="h-4 w-4 rounded-full animate-ping"
        style={{ background: "linear-gradient(135deg, #7DD3DD, #89CFF0, #A7C8F7)" }}
      />
      <span className="h-4 w-4 rounded-full animate-ping delay-200"
        style={{ background: "linear-gradient(135deg, #7DD3DD, #89CFF0, #A7C8F7)" }}
      />
      <span className="h-4 w-4 rounded-full animate-ping delay-400"
        style={{ background: "linear-gradient(135deg, #7DD3DD, #89CFF0, #A7C8F7)" }}
      />
    </div>
  );
}
