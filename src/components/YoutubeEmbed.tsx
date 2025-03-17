export default function App({ embedId }: { embedId: string }) {
  return (
    <div className="w-full flex justify-center">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="max-w-3xl w-full max-h-[500px] aspect-video rounded-3xl shadow-md"
      ></iframe>
    </div>
  );
}
