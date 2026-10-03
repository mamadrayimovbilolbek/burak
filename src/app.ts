import express from "express";
import path from "path";
import router from "./routers";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";
import dotenv from "dotenv";
dotenv.config();

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions',    // BIZNING SESSIONLARIMIZ MONDGODB NING  "SESSIONS COLLECTIONIDA"  HOSIL BOLISH MANTIGINI YARATDIK.. 
});

/** 1-Entrance **/
const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-Sessions **/
app.use(
    session({    // SESSIONSni MIDDLEWARE SIFATIDA INTEGRATION QILYAPMIZ ?
        secret: String(process.env.SESSION_SECRET), // OTHER USERS NEVER SHOULD SEE THIS..
        cookie: {
            maxAge: 1000 * 3600 * 6, // 6hrs  // HOW LONG LASTS OUR SESSIONS(TIME)..
        },
        store: store, // TEPADAGI "cost = store" ning QIYMATINI BERYAPMIZ..
        // Ya'ni bizni session miz hosil bo'lganda, mongodb sessions collectionga murojaat qiladi..  
        resave: true, // true bolsa => oxirgi kirgandan kn 3soat mobaynida..  11:00 - 14:00 => reentered 12:30   ==> 15:30 
        saveUninitialized: true,
    })
);

/** 3-Views **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

/** 4-Routers **/
app.use("/admin", routerAdmin); // SSR (EJS) 
app.use("/", router);           // SPA  (REACT)

export default app;    // module.export = app; 