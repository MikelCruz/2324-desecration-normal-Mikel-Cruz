

const getAllSuperPeople = async () => {
  try
  {
      const SuperPeopleAPI = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
      return SuperPeopleAPI;
  }
  catch (error)
  {
      throw error;
  }
};

module.exports = {
  getAllSuperPeople
} 