import connections from "@config/db"
import { authRoutes } from "auth/routes/auth.routes"
import express from "express"
import morgan from "morgan"
import session from "express-session"

import { userRoutes } from "users/routes/user.routes"
// // ? configuración del directorio de subida de archivos
// const fileUpload = path.join(__dirname, "./uploads");
// app.use(express.static(path.join(__dirname, "public")));

// // ? verificación de la existencia del directorio de subida de archivos
// if (!fs.existsSync(fileUpload)) fs.mkdirSync(fileUpload, { recursive: true });

// // ? configuración de middlewares
// app.use(
//   cors({
//     origin: ["http://localhost:5500", "http://localhost:3402", "http://localhost:5173"],
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
// app.use(cookies());
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("./src/uploads"));


const app = express()
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


app.use(morgan("dev"))
app.use(express.json())
app.use("/api", userRoutes)
app.use("/api", authRoutes)

app.listen(3000, async () => {
    console.log('the server is runing in the port ')
    await connections();
})