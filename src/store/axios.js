import axios from "axios";
const instance =axios.create({
    baseURL:"http://takinada1.pythonanywhere.com/blog/api"
});

export default instance;