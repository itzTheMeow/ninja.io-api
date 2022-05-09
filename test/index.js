const NinjaClient = require("../dist/index").default;

const client = new NinjaClient();

client.status().then(console.log);
