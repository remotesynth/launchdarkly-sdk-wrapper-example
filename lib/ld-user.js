module.exports = class User {
  constructor(
    client,
    key,
    secondary,
    ip,
    email,
    firstName,
    lastName,
    anonymous,
    os,
    device
  ) {
    this.client = client;

    if (!key) key = "anonymous";

    this.user = {
      key: key,
      secondary: secondary,
      ip: ip,
      email: email,
      firstName: firstName,
      lastName: lastName,
      anonymous: anonymous,
      os: os,
      device: device,
    };
  }

  async getFlagValue(key, callback) {
    let flagValue;

    flagValue = await this.client.variation(key, this.user);

    if (callback) {
      this.client.on("update:" + key, async (keyName) => {
        const flagValue = await this.client.variation(keyName.key, this.user);
        callback(flagValue);
      });
    }
    return flagValue;
  }
};
