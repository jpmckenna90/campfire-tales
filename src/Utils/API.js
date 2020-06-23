import axios from "axios";

export default {
  getBoxes: function () {
    console.log("get boxes hit");
    return axios.get("/api/encounters", {});
  },
};
