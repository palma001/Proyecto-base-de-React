import { Link } from "@nextui-org/react";
import { subtitle, title } from "../../components/primitives";
import { button } from "@nextui-org/theme";
import { LandingLayout } from "../../layouts/LandingLayout";
import { ROUTES } from "../../routes/routes";

export default function Home() {
  return (
    <LandingLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[calc(100vh-200px)]">
        <div className="inline-block max-w-4xl text-center justify-center">
          <span className={title({ color: "green" })}>
            ¡Juega Online y Diviértete al Máximo!
          </span>
          <br />
          <br />
          <span className={title()}>Juegos,&nbsp;</span>
          <span className={title({ color: "yellow" })}>Diversión &nbsp;</span>
          <span className={title({ color: "blue" })}>y más.&nbsp;</span>
          <br />
          <br />
          <span className="text-2xl">
            Descubre los mejores juegos, compite con amigos y disfruta sin
            límites.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            ¿Listo para ganar dinero mientras juegas? ¡Es hora de comenzar!
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            className={button({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: "lg",
            })}
            href={ROUTES.REGISTER}
          >
            Únete Ahora
          </Link>
        </div>
      </section>
    </LandingLayout>
  );
}
