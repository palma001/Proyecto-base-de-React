import { Card, Button, CardBody, Tabs, Tab, Chip } from "@heroui/react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function App() {
  return (
    <div className="flex flex-col gap-4 items-center my-16 p-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-6">Planes y Suscripciones</h2>
        <p className="text-lg text-gray-400 mb-2">
          Ten tu comercio en linea y vende incluso mientras duermes
        </p>
        <p className="font-bold">Todo por muy bajo costo</p>
      </div>
      <Tabs
        aria-label="Tabs variants"
        variant="solid"
        radius="full"
        color="secondary"
        classNames={{
          tabList: "bg-white",
        }}
      >
        <Tab title="Mensual">
          <div className="container mx-auto py-12 px-4">
            <div className="gap-5 flex sm:flex-row flex-col items-center justify-center">
              <div>
                <Card className="max-w-xs p-3 rounded-3xl h-[500px] shadow-none border-1 border-slate-200">
                  <CardBody className="relative">
                    <p className="text-4xl font-bold text-quantoDark mb-5">
                      USD $5
                      <span className="text-xl font-normal text-gray-400">
                        /mes
                      </span>
                    </p>
                    <p className="font-bold text-xl text-quantoDark mb-3">
                      Básico
                    </p>
                    <p className="text-gray-500">
                      Funcionalidades básicas de la aplicación y soporte por
                      correo
                    </p>
                    <div className="mt-4 mb-6 list-disc list-inside text-left gap-3 flex flex-col">
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Funcionalidad básica
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Soporte por correo
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                    </div>
                    <Button className="bg-[#F0ECF9] text-quanto font-semibold rounded-full absolute bottom-0 left-0 w-[100%]">
                      Suscribirse
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="max-w-xs p-3 rounded-3xl h-[500px] relative sm:top-[-40px] bg-quanto sm:shadow-[#6b42c2be] sm:shadow-2xl shadow-none">
                  <CardBody className="relative">
                    <div className="container flex justify-end mb-3">
                      <Chip size="lg" className="bg-pink-500">
                        <span className="text-white font-semibold">
                          Más vendido
                        </span>
                      </Chip>
                    </div>
                    <p className="text-4xl font-bold text-white mb-5">
                      USD $10
                      <span className="text-xl font-normal text-gray-200">
                        /mes
                      </span>
                    </p>
                    <p className="font-bold text-xl text-white mb-3">
                      Profesional
                    </p>
                    <p className="text-gray-200">
                      Funcionalidades básicas de la aplicación y soporte por
                      correo
                    </p>
                    <div className="mt-4 mb-6 list-disc list-inside text-left gap-3 flex flex-col">
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Funcionalidad básica
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Soporte por correo
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                    </div>
                    <Button className="bg-white text-quanto font-semibold rounded-full absolute bottom-0 left-0 w-[100%]">
                      Suscribirse
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="max-w-xs p-3 rounded-3xl h-[500px] shadow-none border-1 border-slate-200">
                  <CardBody className="relative">
                    <p className="text-4xl font-bold text-quantoDark mb-5">
                      USD $10
                      <span className="text-xl font-normal text-gray-400">
                        /mes
                      </span>
                    </p>
                    <p className="font-bold text-xl text-quantoDark mb-3">
                      Básico
                    </p>
                    <p className="text-gray-500">
                      Funcionalidades básicas de la aplicación y soporte por
                      correo
                    </p>
                    <div className="mt-4 mb-6 list-disc list-inside text-left gap-3 flex flex-col">
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Funcionalidad básica
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Soporte por correo
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                    </div>
                    <Button className="bg-[#F0ECF9] text-quanto font-semibold rounded-full absolute bottom-0 left-0 w-[100%]">
                      Suscribirse
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </Tab>
        <Tab title="Anual">
          <div className="container mx-auto py-12 px-4">
            <div className="gap-5 flex sm:flex-row flex-col items-center justify-center">
              <div>
                <Card className="max-w-xs p-3 rounded-3xl h-[500px] shadow-none border-1 border-slate-200">
                  <CardBody className="relative">
                    <p className="text-4xl font-bold text-quantoDark mb-5">
                      USD $50
                      <span className="text-xl font-normal text-gray-400">
                        /mes
                      </span>
                    </p>
                    <p className="font-bold text-xl text-quantoDark mb-3">
                      Básico
                    </p>
                    <p className="text-gray-500">
                      Funcionalidades básicas de la aplicación y soporte por
                      correo
                    </p>
                    <div className="mt-4 mb-6 list-disc list-inside text-left gap-3 flex flex-col">
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Funcionalidad básica
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Soporte por correo
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                    </div>
                    <Button className="bg-[#F0ECF9] text-quanto font-semibold rounded-full absolute bottom-0 left-0 w-[100%]">
                      Suscribirse
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="max-w-xs p-3 rounded-3xl h-[500px] relative sm:top-[-40px] bg-quanto sm:shadow-[#6b42c2be] sm:shadow-2xl shadow-none">
                  <CardBody className="relative">
                    <p className="text-4xl font-bold text-white mb-5">
                      USD $100
                      <span className="text-xl font-normal text-gray-200">
                        /mes
                      </span>
                    </p>
                    <p className="font-bold text-xl text-white mb-3">
                      Profesional
                    </p>
                    <p className="text-gray-200">
                      Funcionalidades básicas de la aplicación y soporte por
                      correo
                    </p>
                    <div className="mt-4 mb-6 list-disc list-inside text-left gap-3 flex flex-col">
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Funcionalidad básica
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Soporte por correo
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                    </div>
                    <Button className="bg-white text-quanto font-semibold rounded-full absolute bottom-0 left-0 w-[100%]">
                      Suscribirse
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div>
                <Card className="max-w-xs p-3 rounded-3xl h-[500px] shadow-none border-1 border-slate-200">
                  <CardBody className="relative">
                    <p className="text-4xl font-bold text-quantoDark mb-5">
                      USD $150
                      <span className="text-xl font-normal text-gray-400">
                        /mes
                      </span>
                    </p>
                    <p className="font-bold text-xl text-quantoDark mb-3">
                      Básico
                    </p>
                    <p className="text-gray-500">
                      Funcionalidades básicas de la aplicación y soporte por
                      correo
                    </p>
                    <div className="mt-4 mb-6 list-disc list-inside text-left gap-3 flex flex-col">
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Funcionalidad básica
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Soporte por correo
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                      <div className="flex items-center gap-2">
                        <IoMdCheckmarkCircleOutline /> Acceso limitado
                      </div>
                    </div>
                    <Button className="bg-[#F0ECF9] text-quanto font-semibold rounded-full absolute bottom-0 left-0 w-[100%]">
                      Suscribirse
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
