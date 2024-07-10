import axios from "axios";

const customAxios= axios.create({
    baseURL: '' , 
    timeout: 10000, 
    headers: {
        "Content-Type": "application/json",
    }
})

const requestHandler=(request)=> {
    let authToken = sessionStorage.getItem("authToken");

    // request.headers[`authorization`] = authToken
    //     ? `Bearer ${authToken}`
    //     : `Basic ${process.env.REACT_APP_OPEN_API_TOKEN}`;
    
    return request
}
const errorHandle=(error)=> {
    return Promise.reject(error);
}

customAxios.interceptors.request.use(
    (request)=>  requestHandler(request), 
    (error)=> errorHandle(error)
)


export default customAxios;