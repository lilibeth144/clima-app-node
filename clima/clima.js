const axios=require('axios');

    const getClima= async(ubicacion)=>{
        const resp=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&appid=07beb56d0791bb1637964e84f5fe280f&units=metric`)
        return resp.data.main.temp;
    }

module.exports={
    getClima
}