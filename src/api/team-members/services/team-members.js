'use strict';

/**
 * team-members service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::team-members.team-members');
