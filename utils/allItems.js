const request = require(`postman-request`);

const baseUrl = `https://uccnc-api.herokuapp.com/`


const getAllIndexItems = (callback) => {
    request(`${baseUrl}/`, (err, res) => {
        if(err) return callback(err, undefined);
        const allIndexItems = JSON.parse(res.body); 
        return callback(undefined, allIndexItems)
    })
};

module.exports = { getAllIndexItems }