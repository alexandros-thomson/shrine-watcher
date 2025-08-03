// simulate-sponsor.js
const https = require('https');
// simulate-sponsor.js
const https = require('https');

const payload = new URLSearchParams({
  txn_type: 'subscr_payment',
  subscr_id: 'I-L3XR3MYTHICO',
  payer_email: 'mythic-fan@example.com',
  mc_gross: '5.00',
  mc_currency: 'USD',
  custom: 'Archetype=EchoCatalyst',
});

const options = {
  method: 'POST',
  hostname: 'your-listener-domain.com',
  path: '/api/ipn',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(payload.toString()),
  },
};

const req = https.request(options, (res) => {
  console.log(`IPN Response: ${res.statusCode}`);
  res.on('data', (chunk) => process.stdout.write(chunk));
});

req.on('error', (err) => console.error(`Simulation error: ${err.message}`));
req.write(payload.toString());
req.end();
const payload = new URLSearchParams({
  txn_type: 'subscr_payment',
  subscr_id: 'I-L3XR3MYTHICO',
  payer_email: 'mythic-fan@example.com',
  mc_gross: '5.00',
  mc_currency: 'USD',
  custom: 'Archetype=EchoCatalyst',
});

const options = {
  method: 'POST',
  hostname: 'your-listener-domain.com',
  path: '/api/ipn',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(payload.toString()),
  },
};

const req = https.request(options, (res) => {
  console.log(`IPN Response: ${res.statusCode}`);
  res.on('data', (chunk) => process.stdout.write(chunk));
});

req.on('error', (err) => console.error(`Simulation error: ${err.message}`));
req.write(payload.toString());
req.end();
