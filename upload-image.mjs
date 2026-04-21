import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import fs from "fs";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadImage() {
    const filePath = "profile.jpg";
    if (!fs.existsSync(filePath)) {
        console.error(`Error: No se encontró la imagen '${filePath}'. Por favor, coloca tu foto aquí y vuelve a intentar.`);
        process.exit(1);
    }

    try {
        if (!process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME === '<INGRESA_TU_CLOUD_NAME_AQUI>') {
            console.error("Error: Falta configurar CLOUDINARY_CLOUD_NAME en el archivo .env. Por favor, agregalo antes de subir la imagen.");
            process.exit(1);
        }

        console.log("Subiendo la imagen a Cloudinary...");
        const result = await cloudinary.uploader.upload(filePath, { folder: "cv_assets", public_id: "profile", overwrite: true });

        const url = result.secure_url;
        console.log("URL obtenida:", url);

        console.log("Actualizando el documento de Header en Firestore...");
        const headerRef = doc(db, "header", "info");
        await updateDoc(headerRef, { photoUrl: url });

        console.log("¡Éxito! La imagen se ha subido y tu CV se ha actualizado.");
        process.exit(0);
    } catch (error) {
        console.error("Hubo un error al subir la imagen:", error);
        process.exit(1);
    }
}

uploadImage();
