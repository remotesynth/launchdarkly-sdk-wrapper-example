const LaunchDarkly = require("launchdarkly-js-client-sdk");

let launchDarklyClient;

async function initialize(user) {
  if (!user) {
    user = {
      key: "anonymous",
    };
  }
  const client = LaunchDarkly.initialize("61409b046ca8d52601d179ef", user);
  await client.waitForInitialization();
  return client;
}

async function getClient() {
  if (launchDarklyClient) return launchDarklyClient;
  return (launchDarklyClient = await initialize());
}

export async function getFlagValue(key, fnChangeListener) {
  const client = await getClient();
  let flagValue;

  flagValue = await client.variation(key, false);

  if (fnChangeListener) {
    client.on("change:" + key, fnChangeListener);
  }
  return flagValue;
}
