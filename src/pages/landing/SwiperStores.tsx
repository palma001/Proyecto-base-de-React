import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Button } from "@heroui/react";
import "swiper/swiper-bundle.css";

export default function App({ ContainerStyles = "" }) {
  return (
    <div className={`w-full flex justify-center ${ContainerStyles}`}>
      <div className="grid grid-cols-1 w-[800px] sm:grid-cols-2 gap-5 ">
        <div className="flex flex-col gap-5 p-4">
          <p className="text-3xl font-bold">
            Estas tiendas ya usan
            <span className="text-quanto text-4xl"> Quanto</span>
          </p>
          <p className="text-sm text-gray-500">
            Todas tus tiendas favoritas en el mismo lugar con las mejores
            facilidades de pago y gestión, visita todas las tiendas que usan
            Quanto.
          </p>
          <Button className="rounded-full w-[150px] bg-quanto text-white">
            Explorar ahora
          </Button>
          <footer className="flex items-center gap-5">
            <div>
              <p className="text-3xl font-bold text-black">20k+</p>
              <p className="text-gray-500">Tiendas</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-black">99k+</p>
              <p className="text-gray-500">Compradores</p>
            </div>
          </footer>
        </div>

        <div className="overflow-hidden px-8 py-5">
          <Swiper modules={[EffectCards]} effect={"cards"}>
            {["1", "2", "3", "4", "5", "6"].map((item, index) => (
              <SwiperSlide
                key={index + item}
                className="max-w-[300px] rounded-3xl"
              >
                <img
                  src={`/image/placeholder.png`}
                  className="h-full w-full object-cover relative"
                />
                <div className="flex flex-col items-center justify-between p-5 absolute top-0 left-0 w-full h-full">
                  <div className="w-full">
                  <p className="text-xl font-bold  text-white">
                    Tienda de ejemplo {item}
                  </p>
                  <p className="text-sm  text-gray-200">
                    Tipo de tienda {item}
                  </p>
                  </div>
                  <div className="w-full">
                    <Button
                      variant="bordered"
                      className="rounded-full border-white text-white font-semibold w-full"
                    >
                      Ver tienda
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
