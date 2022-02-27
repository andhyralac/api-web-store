const { PORT } = require('./config/default');
const app = require('./server');

app.listen(PORT, () => {
    console.log('Sever on port', PORT);
})