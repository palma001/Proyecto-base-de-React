import { SessionData } from "react-router";
import Footer from "../components/Landing/Footer";
import Navbar from "../components/Landing/Navbar";
import { authenticationStore } from "../stores/authorization";

export const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const { getSession } = authenticationStore();
  const session: SessionData | null = getSession();
  return (
    <>
      <title>Bingo Online</title>
      <div className="flex flex-col min-h-screen">
        <Navbar session={session} />
        <main className="flex-1 overflow-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};
