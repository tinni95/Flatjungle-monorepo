'use strict';

/**
 * Universities.js controller
 *
 * @description: A set of functions called "actions" for managing `Universities`.
 */

module.exports = {

  /**
   * Retrieve universities records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.universities.search(ctx.query);
    } else {
      return strapi.services.universities.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a universities record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.universities.fetch(ctx.params);
  },

  /**
   * Count universities records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.universities.count(ctx.query, populate);
  },

  /**
   * Create a/an universities record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.universities.add(ctx.request.body);
  },

  /**
   * Update a/an universities record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.universities.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an universities record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.universities.remove(ctx.params);
  }
};
