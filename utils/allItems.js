const request = require(`postman-request`);

const baseUrl = `http://localhost:3001`


const getAllIndexItems = (callback) => {
    request(`${baseUrl}/`, (err, res) => {
        if(err) return callback(err, undefined);
        const allIndexItems = JSON.parse(res.body); 
        return callback(undefined, allIndexItems)
    })
};

module.exports = { getAllIndexItems }