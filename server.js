require('./src/config/config.js');
const app = require('./app');



app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running in port ${process.env.SERVER_PORT}`);
  });
