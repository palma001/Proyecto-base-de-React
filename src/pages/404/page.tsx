import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] text-gray-800">
      <img
        src="/images/not-found.png"
        alt="Página no encontrada"
        className="max-w-[400px]"
      />
      <h2 className="mt-4 text-2xl font-semibold">
        Oops, página no encontrada
      </h2>
      <p className="mt-2 text-lg text-gray-600 text-center">
        No pudimos encontrar la página que buscas. Es posible que haya sido
        movida o no exista.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-secondary transition duration-300"
      >
        Volver
      </button>
    </div>
  );
};

export default NotFoundPage;
