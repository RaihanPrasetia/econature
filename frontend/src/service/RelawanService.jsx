import axios from 'axios';
import Relawan from '../class/RelawanConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const createRelawan = async (formData) => {
    try {
        const response = await axios.post(`${apiUrl}/relawans/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.relawan) {
            return new Relawan(response.data.relawan);
        } else {
            throw new Error("No Donation data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Donation info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch bank info");
    }
};

const RelawanService = {
    createRelawan,
};

export default RelawanService;