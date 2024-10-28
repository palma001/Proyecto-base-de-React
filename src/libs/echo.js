// src/echo.js
import Echo from "laravel-echo";
import Pusher from "pusher-js";

// Asegúrate de que estas variables de entorno estén definidas en tu archivo .env
const echo = new Echo({
  broadcaster: "",
  key: "",
  cluster: "",
  forceTLS: true,
});

export default echo;
