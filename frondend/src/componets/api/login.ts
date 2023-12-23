import axios from "./axios";
import Axios from 'axios';

interface data {
    username: string;
    password: string;
}

export const postLogin = async (loginData: data) => {
    try {
        const res = await axios.post(
            '/login', 
            loginData, 
            {withCredentials: false}
        );

        console.log("요청 성공");
        console.log(res.data);
        return res;
    } catch (err) {
        if (!(Axios.isAxiosError(err) && err.response)) return null 

        console.log(err.response.data);
    }
}
