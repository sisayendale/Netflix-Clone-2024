//import axios = from "axios";

import axios from "axios";// it is used for fetching data from api
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance;