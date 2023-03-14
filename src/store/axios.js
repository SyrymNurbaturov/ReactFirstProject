import axios from "axios";
const instance =axios.create({
    baseURL:"https://takinada1.pythonanywhere.com/blog/api"
});

export default instance;