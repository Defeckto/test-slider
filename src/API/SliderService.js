import axios from "axios";

export default class SliderService {
    static async fetchSlider () {
        const response = await axios.get(`https://api.thecatapi.com/v1/breeds`, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "7eb0376a-e2e4-4539-bf92-f6bb79ffbc51"
            }
        })
        return response;
    }
}