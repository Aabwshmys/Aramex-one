import axios from 'axios';
require('dotenv').config()


export const TeleSned = () => {

    const Send = async (des) => {
        let txt= "مدونة زاجل  %0A"+ des   
        await axios.post(`https://api.telegram.org/bot${process.env.NEXT_BOT_TOKEN}/sendMessage?chat_id=${process.env.NEXT_BOT_CHAT_ID}&text=${txt}`);
    }
  return {
    Send,
}
}

export default TeleSned;
