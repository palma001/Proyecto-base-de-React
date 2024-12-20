import Navbar from "./Navbar";
import Header from "./Header";
import SwiperStores from "./SwiperStores";
import Video from "./Video";
import Footer from "./Footer";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <>
      <title>Home | Quanto</title>
      <Navbar />
      <Header />
      <SwiperStores ContainerStyles={"my-20"} />
      <Video
        embedId={"-zBkQspWAVk?si=GIlo-cT9GfI8Pgjo"}
        title={"Comienza a vender"}
        subtitle={"en solo unos clics"}
        description={"Crea y configura tu tienda en simples pasos"}
        textDescription={
          "📢 Visita nuestro canal de youtube para ver tutoriales cortos y consejos sobre Quanto"
        }
        isPointer={true}
      />
      <div className="flex flex-col items-center justify-center w-full my-16 p-5">
        <div className="max-w-4xl w-full">
          <p className={`text-quantoDark text-2xl font-semibold mr-3 `}>
            Personaliza tu tienda en línea
          </p>
          <h1 className={` w-full text-quanto text-4xl font-bold`}>
            Agrega tus colores, productos y servicios
          </h1>
          <img
            src="/image/example2.png"
            alt="example page"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full my-20 p-5">
        <div className="max-w-4xl w-full">
          <p
            className={`text-quantoDark text-right text-2xl font-semibold mr-3 `}
          >
            Personaliza tu tienda en línea
          </p>
          <h1 className={` w-full text-quanto text-right text-4xl font-bold`}>
            Agrega tus colores, productos y servicios
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 mt-10">
          <img src="/image/example.png" alt="example page" className="w-full" />
          <img src="/image/example.png" alt="example page" className="w-full" />
          <img src="/image/example.png" alt="example page" className="w-full" />
          <img src="/image/example.png" alt="example page" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full my-16 p-5">
        <div className="max-w-4xl w-full flex flex-col gap-2">
          <p className="text-gray-400">Sobre nuestro punto de venta virtual</p>
          <p className="text-4xl font-bold">Recibe pagos desde tu tienda con QPay</p>
          <p className="text-xl font-semibold text-gray-500">Pagos 24/7 directo a tu cuenta bancaria</p>
          <img
            src="/image/qpay_banner.png"
            alt="qpay banner"
            className="w-full"
          />
        </div>
      </div>

      <Video
        embedId={"-zBkQspWAVk?si=GIlo-cT9GfI8Pgjo"}
        titleStyle={"text-2xl text-quantoDark"}
        title={"La pasarela de pagos que tu negocio necesita 🚀💳"}
        subtitleStyle={"hidden"}
        subtitle={""}
        description={
          "Tu tienda en Quanto no solo sirve como un catálogo, también puedes recibir pagos con QPay, igual a un punto de venta normal pero desde la web. QPay está certificado en seguridad por el BNC."
        }
        textDescription={"Conoce más de QPay en la página oficial."}
        isPointer={false}
      />
      <Pricing />
      <Footer />
    </>
  );
}
