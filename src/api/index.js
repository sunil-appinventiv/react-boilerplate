import axios from "axios";

// Get the visitor identifier when you need it.
const customAxios = axios.create({
    baseURL: 'https://api.thecatapi.com',
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

const requestHandler = async (request) => {
    let authToken = sessionStorage.getItem("authToken");

    // request.headers[`authorization`] = authToken
    //     ? `Bearer ${authToken}`
    //     : `Basic ${process.env.REACT_APP_OPEN_API_TOKEN}`;


    return request;
};


const errorHandler = (error) => {
    return Promise.reject(error);
};

// Step-3: Configure/make use of request & response interceptors from Axios
// Note: You can create one method say configureInterceptors, add below in that,
// export and call it in an init function of the application/page.
customAxios.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);


export default customAxios