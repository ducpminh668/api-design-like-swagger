import axios from "axios";

export const apiFileService = axios.create({
  config: {
    crossDomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  }
});
