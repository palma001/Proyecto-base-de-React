import { Link } from "react-router"
import { ROUTES } from "../../routes/routes"

export default function Home() {
  const router = ROUTES;

  return (
    <div>
      <h1>Landing</h1>

      <Link to={`${router.AUTH}/${router.LOGIN}`}>
        ir a login
      </Link>

    </div>
  )
}