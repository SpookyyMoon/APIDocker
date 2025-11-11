import mongoose from "mongoose";

const UsuarioEschema = new mongoose.Schema({
    nombreUsuario: { type: String, required: true },
    apellidoUsuario: { type: String, required: true },
    dniUsuario: { type: String, required: true },
    edadUsuario: {type: Number, required: true }
});

export default mongoose.model("Usuario", UsuarioEschema);