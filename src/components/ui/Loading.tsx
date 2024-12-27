export default function Loading({ label }: { label?: string }) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex flex-col items-center justify-center z-50">
      <div className="grid place-items-center">
        <div className="absolute animate-spin rounded-full size-28 border-t-4 border-b-4 border-white"></div>
        {/* <img
          alt="loading"
          src="/qbits.png"
          width={100}
          height={100}
          className="animate-pulse"
        /> */}
      </div>
      <p className="mt-20 ml-5 text-white text-2xl font-semibold">
        {label || "Cargando..."}
      </p>
    </div>
  );
}
