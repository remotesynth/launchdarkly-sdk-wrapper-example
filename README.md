# LaunchDarkly Wrapper Example

This is an example project showing some ideas on wrapping the LaunchDarkly SDK for server-side Node.js and for client-side JavaScript. The example is intended only as guidance and not meant to be prescriptive of how you should create your own wrappers. The specific implementation of your SDK wrappers, should you choose to create them, depends on the needs of your application.

### How to run the example

1. You'll need a [LaunchDarkly account](https://launchdarkly.com)
2. From the flag dashboard, press command/control+k and copy the client side ID and server side SDK key.
3. Place these keys in a `.env` file in the root folder as follows:

   ```
   LAUNCHDARKLY_SDK_KEY=<YOUR_SDK_KEY>
   LAUNCHDARKLY_CLIENT_ID=<YOUR_CLIENT_ID>
   ```

4. The app requires only a single boolean flag named `show-button`
5. To launch the app, run `npm install` and then use `npm run start`
