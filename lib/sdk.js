const axios = require('axios');

let ClientConfig = null;

const getBaseUrl = namespace => `https://${namespace}.reactivehub.io`;

const getEventUrl = (namespace, eventId) => `${getBaseUrl(namespace)}/event/${eventId}`;

module.exports = {
  initialize: ({ namespace, clientKey, clientSecret }) => {
    ClientConfig = { namespace, clientKey, clientSecret };
  },
  publishEvent: (eventId, payload) => {
    if (!ClientConfig) throw new Error('Client not intialized!');

    const { namespace, clientKey, clientSecret } = ClientConfig;
    const url = getEventUrl(namespace, eventId);
    const headers = {
      'Content-Type': 'application/json',
      client_key: clientKey,
      client_secret: clientSecret,
      namespace,
    };
    return axios.post(url, payload, { headers });
  },
};
