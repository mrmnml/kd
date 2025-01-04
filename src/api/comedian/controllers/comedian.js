'use strict';

/**
 * comedian controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comedian.comedian');
