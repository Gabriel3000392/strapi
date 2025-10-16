'use strict';

/**
 * opening-hours service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::opening-hours.opening-hours');
