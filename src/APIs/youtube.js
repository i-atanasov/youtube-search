import axios from "axios";

const KEY = "AIzaSyBnDWHeIdojb6sD4rfK97A-0Jyko99vEA0";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
    }
});