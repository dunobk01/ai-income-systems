const https = require('https');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const apiKey = process.env.KIT_API_KEY || process.env.CONVERTKIT_API_KEY;
  if (!apiKey) {
    console.error('Missing KIT_API_KEY (or CONVERTKIT_API_KEY) environment variable');
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Server is not configured for email subscriptions.' })
    };
  }

  const { email, name } = JSON.parse(event.body);

  const data = JSON.stringify({
    api_key: apiKey,
    email: email,
    first_name: name || ''
  });

  return new Promise((resolve) => {
    const options = {
      hostname: 'api.convertkit.com',
      path: '/v3/forms/9525954/subscribe',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      resolve({
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ success: true })
      });
    });

    req.on('error', () => {
      resolve({
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ success: true })
      });
    });

    req.write(data);
    req.end();
  });
};
