import Paals from "../models/Thirukural";

export async function getHomePage(req, res) {
  res.status(200).send("Welcome to Thirukural");
}

export async function getAllData(req, res) {
  try {
    const allData = await Paals.find();
    res.status(200).json(allData);
  } catch (error) {
    console.error("Error in getAllData controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getAllPaals(req, res) {
  try {
    const paals = await Paals.find({}, { name: 1, _id: 0 });
    res.status(200).json(paals);
  } catch (error) {
    console.error("Error in getAllPaals controller", error);
    res.status(500).json({ message: "Internal Sever Error" });
  }
}

export async function getAllIyals(req, res) {
  try {
    const iyals = await Paals.find({}, { "iyals.name": 1, _id: 0 });
    res.status(200).json(iyals);
  } catch (error) {
    console.error("Error in getAllIyals controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getAllAthigarams(req, res) {
  try {
    const athigarams = await Paals.find(
      {},
      { "iyals.athigarams.name": 1, _id: 0 }
    );
    res.status(200).json(athigarams);
  } catch (error) {
    console.error("Error in getAllAthigarams controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getKuralsByAthigaram(req, res) {
  try {
    const { athigaramName } = req.params;
    const data = await Paals.find({
      "iyals.athigarams.name": athigaramName,
    });

    let kurals = [];
    data.forEach((paal) => {
      paal.iyals.forEach((iyal) => {
        iyal.athigarams.forEach((athigaram) => {
          if (athigaram.name === athigaramName) {
            kurals = athigaram.kurals;
          }
        });
      });
    });

    if (kurals.length === 0) {
      return res.status(404).json({ message: "Athigaram not found" });
    }

    res.status(200).json(kurals);
  } catch (error) {
    console.error("Error in getKuralsByAthigaram controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getKuralsOnlyByAthigaram(req, res) {
  try {
    const { athigaramName } = req.params;
    const data = await Paals.find({
      "iyals.athigarams.name": athigaramName,
    });
    let kurals = [];
    data.forEach((paal) => {
      paal.iyals.forEach((iyal) => {
        iyal.athigarams.forEach((athigaram) => {
          if (athigaram.name === athigaramName) {
            kurals = athigaram.kurals.map(kural => ({
              number: kural.number,
              line1: kural.line1,
              line2: kural.line2
            }));
          }
        });
      });
    });
       if (kurals.length === 0) {
         return res.status(404).json({ message: "Athigaram not found" });
       }

       res.status(200).json(kurals);
  } catch (error) {
    console.error("Error in getKuralsOnlyByAthigaram controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
