module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: { contentSecurityPolicy: false },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://thesailandanchor.co.nz'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
