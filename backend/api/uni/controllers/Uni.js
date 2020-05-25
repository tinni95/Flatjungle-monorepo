'use strict';

/**
 * Uni.js controller
 *
 * @description: A set of functions called "actions" for managing `Uni`.
 */

module.exports = {

  /**
   * Retrieve uni records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.uni.search(ctx.query);
    } else {
      return strapi.services.uni.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a uni record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.uni.fetch(ctx.params);
  },

  /**
   * Count uni records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.uni.count(ctx.query, populate);
  },

  /**
   * Create a/an uni record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.uni.add(ctx.request.body);
  },

  /**
   * Update a/an uni record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.uni.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an uni record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.uni.remove(ctx.params);
  }
};
