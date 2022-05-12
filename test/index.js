const fs = require("fs");
const NinjaClient = require("../dist/index").default;

!(async function () {
  const client = new NinjaClient();

  // make a file called 'details' in the test folder
  // first line is username, second line is password
  const cred = fs.readFileSync("test/details").toString().split("\n");
  await client.login(cred[0].trim(), cred[1].trim());
})();
