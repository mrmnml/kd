'use strict';

/**
 * comedian service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::comedian.comedian');
