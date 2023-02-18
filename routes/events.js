const express = require("express");
const { check } = require("express-validator");
const { fieldValidator } = require("../middlewares/field-validator");
const { jwtValidator } = require("../middlewares/jwt-validator");
const { isDate } = require("../helpers/isDate");
const {
  obtenerEventos,
  crearEvento,
  editarEvento,
  eliminarEvento,
} = require("../controllers/events");

const router = express.Router();

router.use(jwtValidator);

router.get("/", obtenerEventos);
router.post(
  "/",
  [
    check("title", "Titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha final es obligatoria").custom(isDate),
    fieldValidator,
  ],
  crearEvento
);
router.put("/:id", editarEvento);
router.delete("/:id", eliminarEvento);

module.exports = router;
