const { Router } = require('express');
const router = Router();
const fs = require('fs');

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

fs.readdirSync(pathRouter).filter( (file) => {
    const fileWithOutExt = removeExtension(file);
    const skip = ['index'].includes(fileWithOutExt);
    if(!skip) {
        router.use(`/${fileWithOutExt}`, require(`../routes/${fileWithOutExt}.routes.js`));
        console.log('LOADED ROUTE ---->', fileWithOutExt);
    }
});

router.get('*', (req, res) => {
    res.status(400);
    res.send({ error: 'Not Found'})
});

module.exports = router;