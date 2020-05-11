'use strict';

/**
 * Notes.js controller
 *
 * @description: A set of functions called "actions" for managing `Notes`.
 */

module.exports = {

  /**
   * Retrieve notes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.notes.search(ctx.query);
    } else {
      return strapi.services.notes.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a notes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.notes.fetch(ctx.params);
  },

  /**
   * Count notes records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.notes.count(ctx.query, populate);
  },

  /**
   * Create a/an notes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.notes.add(ctx.request.body);
  },

  /**
   * Update a/an notes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.notes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an notes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.notes.remove(ctx.params);
  }
};
