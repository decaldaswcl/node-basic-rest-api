require('./config/config');
const app = require('./src/app');


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running in port ${process.env.SERVER_PORT}`);
  });
