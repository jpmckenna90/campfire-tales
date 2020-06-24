import axios from "axios";

export default {
  getBoxes: function () {
    console.log("get boxes hit");
    return axios.get("/api/boxes", {});
  },
  getEncounters: function (box) {
    return axios.get(`/api/encounters/${box}`);
  },
  getEncounterCards: function(encounter){
    return axios.get(`/api/encountercards/${encounter}`)
  }
};
