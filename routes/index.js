const express = require("express");
const router = express.Router();

// launchdarkly libraries
const ldServer = require("../lib/ld-server");
const ldUser = require("../lib/ld-User");

let showButton;
function setShowButton(val) {
  showButton = val;
  console.log(showButton);
}

router.get("/", async (req, res) => {
  // client is a singleton
  const client = new ldServer();

  // each user would be initialized with their info
  let user = new ldUser(await client.getClient());
  setShowButton(await user.getFlagValue("show-button", setShowButton));

  res.render("index", {
    title: "LaunchDarkly SDK Wrappers",
    showButton: showButton,
  });

  // await user.closeClient();
});

module.exports = router;
