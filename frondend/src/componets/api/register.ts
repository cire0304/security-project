import axios from "./axios";
import Axios from 'axios';

interface data {
    username: string;
    password: string;
}

export const postRegister = async (registerData: data) => {
    try {
        const res = await axios.post(
            '/register', 
            registerData, 
            {withCredentials: true}
        );

        console.log(res.data);
        return res;
    } catch (err) {
        if (!(Axios.isAxiosError(err) && err.response)) return null 

        console.log(err.response.data);
    }
}
