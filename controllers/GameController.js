const GameService = require("../services/GameService");

const getAllSuperPeople = async (req, res)  => {
  try{
      const allSuperPeople = await GameService.getAllSuperPeople();
      if(allSuperPeople.length === 0) {
          return res.status(404).send({message: 'No existen superPersonas'});
      }
      res.send({ status: "OK", data: allSuperPeople});
  }
  catch (error){
      res
          .status(error?.status || 500)
          .send({ status: "FAILED",
                  message: "Error al realizar la peticion:",
                  data: { error: error?.message || error } });
  }
};


module.exports = {
    getAllSuperPeople
} 