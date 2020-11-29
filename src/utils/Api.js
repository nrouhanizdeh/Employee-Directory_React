import axios from "axios";

export default {
  // Using randomuser api for the app
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
