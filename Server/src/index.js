 const http = require("http");
const fs = require("fs");
// const data = require("./utils/data.js")
const getCharById = require("./controllers/getCharById")
const PORT = 3001;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req
    if(url.includes("/rickandmorty/character")) {
        let id = parseInt(url.split("/").pop());
        getCharById(res, id);
    } 
});

server.listen(PORT, () => { console.log(`server on port ${PORT}`) });

module.exports = server;

