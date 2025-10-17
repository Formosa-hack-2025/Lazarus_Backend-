import connections from "@config/db";
import { authRoutes } from "auth/routes/auth.routes";
import express from "express";
import morgan from "morgan";
import session from "express-session";
import cultivosRouter from "agricultura/routers/cultivos.route";
import { userRoutes } from "users/routes/user.routes";
import chatRouter from "chatbot/routers/chatRouter";
import { metricRouter } from "agricultura/routers/metric.route";
import { ganadoRoutes } from "Ganado/Routes/ganado.Routes";
import { parcelaRoutes } from "Parcela/Routes/parcela.Routes";

const app = express();
app.use(
  session({
    secret: "tu_clave_secreta",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // poner true solo si usas HTTPS
      maxAge: 3600000,
    },
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", cultivosRouter);
app.use("/api", ganadoRoutes);
app.use("/api", parcelaRoutes)
app.use("/api", chatRouter);
app.use("/api", metricRouter);

app.listen(3402, async () => {
  console.log("the server is runing in the port ");
  await connections();
});
