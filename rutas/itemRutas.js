import express from "express";
import Usuario from "../modelos/usuarios.js";
import Grupo from "../modelos/grupos.js";

const router = express.Router();

// Metodos de recibo
router.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

router.get("/grupos", async (req, res) => {
  const grupos = await Grupo.find();
  res.json(grupos);
});

// Metodos de envío
router.post("/usuarios", async (req, res) => {
  const nuevoUsuario = new Usuario(req.body);
  const usuarioGuardado = await nuevoUsuario.save();
  res.status(201).json(usuarioGuardado);
});

router.post("/grupos", async (req, res) => {
  const nuevoGrupo = new Comanda(req.body);
  const grupoGuardado = await nuevoGrupo.save();
  res.status(201).json(grupoGuardado);
});

// Métodos de actualización
router.put("/usuarios/:dniUsuario", async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findOneAndUpdate(
      { dniUsuario: req.params.numeroMesa },
      req.body,
      { new: true }
    );
    res.json(usuarioActualizado);
    console.log(`Usuario ${dniUsuario} actualizado!`);
  } catch (error) {
    console.log("Error al actualizar usuario!", error);
    res.status(500).json({ message: "Error al actualizar usuario!" });
  }
});

router.put("/usuarios/:dniUsuario", async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findOneAndUpdate(
      { dniUsuario: req.params.numeroMesa },
      req.body,
      { new: true }
    );
    res.json(usuarioActualizado);
    console.log(`Usuario ${dniUsuario} actualizado!`);
  } catch (error) {
    console.log("Error al actualizar usuario!", error);
    res.status(500).json({ message: "Error al actualizar usuario!" });
  }
});

export default router;