'use strict';

/**
 * opening-hours router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::opening-hours.opening-hours');
