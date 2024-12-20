import { Button } from "@nextui-org/react";

export default function App() {
  return (
    <div className="sm:max-w-[200px] max-w-full rounded-3xl relative">
      <img
        src={`/image/placeholder.png`}
        className="h-full w-full object-cover"
      />
      <div className="flex z-20 flex-col items-center justify-between p-5 absolute top-0 left-0 w-full h-full">
        <div className="w-full">
          <p className="text-xl font-bold  text-white">Tienda de ejemplo</p>
          <p className="text-sm  text-gray-200">Tipo de tienda</p>
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
    </div>
  );
}
