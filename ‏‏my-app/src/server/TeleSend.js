// import axios from 'axios';
// require('dotenv').config()


// export const TeleSned = () => {

//     const Send = async (des) => {
//         let txt= "مدونة زاجل  %0A"+ des   
//         await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${txt}`);
//     }
//   return {
//     Send,
// }
// }

// export default TeleSned;
import axios from 'axios';
require('dotenv').config();

export const TeleSend = () => {
    const Send = async (des) => {
        const txt = "مدونة زاجل  %0A" + des;
        const BOT_TOKEN = process.env.BOT_TOKEN;
        const CHAT_ID = process.env.CHAT_ID;

        try {
            const response = await axios.post(
                `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${txt}`
            );
            console.log("Message sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending message:", error.response?.data || error.message);
        }
    };

    return {
        Send,
    };
};

export default TeleSend;