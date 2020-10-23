import axios from 'axios';

// This will change EVERY 8 HOURS , or when you restart the ngrok tunnel
/*
open jsonserver folder in 2 terminal tabs, run 'npm run db ' in one and 'npm run tunnel' in the other. In the tunnel window copy the address and paste it below.
*/
export default axios.create({
  baseURL: 'http://175d6239.ngrok.io'
})