import { Link } from "@heroui/react";
import { button } from "@heroui/theme";
import { LandingLayout } from "../../layouts/LandingLayout";
import { ROUTES } from "../../routes/routes";

export default function Home() {
  return (
    <LandingLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[calc(100vh-170px)]">
        <div className="max-w-4xl flex flex-col justify-center items-center gap-5">
          <p className="text-5xl font-bold w-full text-center">
            Software de licitaciones
          </p>
          <Link
            className={button({
              color: "primary",
              radius: "full",
              variant: "flat",
              size: "lg",
            })}
            href={ROUTES.REGISTER}
          >
            Regístrate ahora
          </Link>
        </div>
      </section>
    </LandingLayout>
  );
}
