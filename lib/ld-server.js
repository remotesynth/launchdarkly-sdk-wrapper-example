const LaunchDarkly = require("launchdarkly-node-server-sdk");
require("dotenv").config();

module.exports = class Client {
  constructor() {
    if (Client._instance) {
      return Client._instance;
    }
    Client._instance = this;

    this.client = null;
  }

  async initialize() {
    const client = LaunchDarkly.init(process.env.LAUNCHDARKLY_SDK_KEY);
    await client.waitForInitialization();
    return client;
  }

  async getClient() {
    if (this.client) return this.client;

    return await this.initialize();
  }
};
