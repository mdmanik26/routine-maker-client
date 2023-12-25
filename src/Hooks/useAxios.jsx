import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://job-task-server-alpha-five.vercel.app'
})
const useAxios = () => {
    return axiosPublic;
};

export default useAxios;