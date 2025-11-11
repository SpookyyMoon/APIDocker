import mongoose from "mongoose";

const GrupoEschema = new mongoose.Schema({
    nombreGrupo: { type: String, required: true },
    integrantesGrupo: { type: Array, required: true }
});

export default mongoose.model("Grupo", GrupoEschema);