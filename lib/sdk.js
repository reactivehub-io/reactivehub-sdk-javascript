const axios = require('axios');

module.exports = {
  buildConfig: (teamName, clientKey, clientSdk) => ({ teamName, clientKey, clientSdk }),
  publishEvent: (config, eventName, payload) => {
    const { teamName, clientKey, clientSdk } = config;
    const url = `${teamName}.reactiveuh.io/event/${eventName}`;
    const headers = {
      'Content-Type': 'application/json',
      client_key: clientKey,
      client_secret: clientSdk,
    };

    return axios.post(url, payload, { headers });
  },
};
