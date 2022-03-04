const LaunchDarkly = require("launchdarkly-node-server-sdk");
require("dotenv").config();

let launchDarklyClient;

async function initialize() {
  const client = LaunchDarkly.init(process.env.LAUNCHDARKLY_SDK_KEY);
  await client.waitForInitialization();
  return client;
}

async function getClient() {
  if (launchDarklyClient) return launchDarklyClient;

  launchDarklyClient = await initialize();
  return launchDarklyClient;
}

exports.getClient = getClient;
