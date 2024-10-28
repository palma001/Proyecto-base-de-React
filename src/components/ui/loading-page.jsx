import QImage from "./QImage";

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.3)] flex items-center justify-center">
      <div className="rounded max-w-lg w-full relative flex justify-center items-center flex-col">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
        <QImage
          alt="loading"
          src="/cubo.png"
          width={90}
          height={90}
          className="animate-pulse absolute top-4"
        />
        <p className="text-white text-lg font-semibold">Cargando...</p>
      </div>
    </div>
  );
}
