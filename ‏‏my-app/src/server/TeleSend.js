import axios from 'axios';
require('dotenv').config()


export const TeleSned = () => {

    const Send = async (des) => {
        let txt= "مدونة زاجل  %0A"+ des   
        await axios.post(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHAT_ID}&text=${text}`);
    }
  return {
    Send,
}
}

export default TeleSned;
