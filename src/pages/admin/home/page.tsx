import { authenticationStore } from "../../../stores/authorization";
import { SessionData } from "react-router";

export default function DASHBOARD() {
  /**
   * Get session function from store
   */
  const { getSession } = authenticationStore();
  /**
   * Get session from getSession function
   */
  const session: SessionData | null = getSession();

  return (
    <>
      <title>Panel | Subscription</title>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <p className="text-4xl font-bold text-primary-600">Bienvenido {session?.user?.name}</p>
      </div>
    </>
  )
}
