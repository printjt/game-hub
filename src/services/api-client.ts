import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"bea2fa0c918d4493ab6318b08488c0f2"
    }
})