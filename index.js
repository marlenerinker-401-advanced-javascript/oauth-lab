'use strict';

require('dotenv').config();


// Start the web server
require('./src/app.js').start(process.env.PORT);



// HTTPS.createServer({
//   key: FS.readFileSync("server.key"),
//   cert: FS.readFileSync("server.cert")
// }, app).listen(443, () => {
//   console.log("Listening at :443...");
// });
