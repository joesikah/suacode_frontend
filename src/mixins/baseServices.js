import axios from "axios";
import env from "react-dotenv";

const api = env.API_BASE_URL;

const config = {
    headers: {
        'Content-Type': 'application/json'
    },
}

//Axios Post
const post_api = (route, data) => {
    return axios.post(api + route, data, config)
}


//Axios Get
const get_api = (route) => {
    return axios.get(api + route, config)
}


//Axios Put
const patch_api = (route, data) => {
    return axios.patch(api + route, data, config)
}



//Axios Delete
const delete_api = (route) => {
    var config = {
        method: 'delete',
        url: api + route,
        headers: {},
    };

    return axios(config)
}




const BaseService = {
    post_api,
    get_api,
    patch_api,
    delete_api
}

export default BaseService;