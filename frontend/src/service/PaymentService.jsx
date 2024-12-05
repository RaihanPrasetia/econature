import axios from 'axios';
import Payment from '../class/PaymentConstructor';
const apiUrl = process.env.REACT_APP_API_URL;

const createPayment = async (formData) => {
    try {
        const response = await axios.post(`${apiUrl}/payments/create`, formData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        // Inisialisasi objek Bank menggunakan konstruktor
        if (response.data && response.data.message && response.data.payment) {
            return new Payment(response.data.payment);
        } else {
            throw new Error("No Payment data found.");
        }
    } catch (error) {
        console.error("Failed to fetch Payment info:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch Payment info");
    }
};

const PaymentService = {
    createPayment,
};

export default PaymentService;