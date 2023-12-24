import axios from "./axios";
import Axios from 'axios';


export const getMypage = async () => {
    try {
        const res = await axios.get(
            '/user', 
            {withCredentials: true}
        );

        return res;
    } catch (err) {
        if (!(Axios.isAxiosError(err) && err.response)) return "에러 발생"; 

        return err.response.data;
    }
}
