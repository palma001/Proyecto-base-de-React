/* eslint-disable react/prop-types */
export default function Loading({ label }) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-center z-50">
      <div className="grid place-items-center">
        <div className="absolute animate-spin rounded-full h-40 w-40 border-t-4 border-b-4 border-primary"></div>
        <img
          alt="loading"
          src="/cubo.png"
          width={130}
          height={130}
          className="animate-pulse"
        />
      </div>
      <p className="mt-5 ml-5 text-white text-2xl font-semibold">
        {label || "Cargando..."}
      </p>
    </div>
  );
}
