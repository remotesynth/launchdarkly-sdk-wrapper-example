const ldServer = require("./lib/ld-server");
const ldUser = require("./lib/ld-User");

let showButton;
function setShowButton(val) {
  showButton = val;
  console.log(showButton);
}

(async () => {
  let user = new ldUser(await ldServer.getClient());
  setShowButton(await user.getFlagValue("show-button", setShowButton));
})();
