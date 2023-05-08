import './config/config.js';
import app from './src/app.js';



app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running in port ${process.env.SERVER_PORT}`);
  });
