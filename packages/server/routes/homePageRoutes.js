import express from "express";
import {
  getHomePage,
  getAllPaals,
  getAllData,
  getAllIyals,
  getAllAthigarams,
  getKuralsByAthigaram,
  getKuralsOnlyByAthigaram,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/", getHomePage);
router.get("/paals", getAllPaals);
router.get("/alldata", getAllData);
router.get("/iyals", getAllIyals);
router.get("/athigarams", getAllAthigarams);
router.get("/athigarams/:athigaramName", getKuralsByAthigaram);
router.get("/athigarams1/:athigaramName", getKuralsOnlyByAthigaram);

export default router;
