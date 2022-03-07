const ldServer = require("./lib/ld-server");
const ldUser = require("./lib/ld-User");

let showButton;
function setShowButton(val) {
  showButton = val;
  console.log(showButton);
}

(async () => {
  // client should be a singleton
  const client = new ldServer();

  // each user would be initialized with their info
  let user = new ldUser(await client.getClient());
  setShowButton(await user.getFlagValue("show-button", setShowButton));

  // await user.closeClient();
})();
