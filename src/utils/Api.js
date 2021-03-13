import axios from "axios";

function Users() {
  return axios.get("https://randomuser.me/api/?results=200&nat=US");
}

export default {
  Users
};