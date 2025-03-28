// 'use strict';

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::user-cart.user-cart');

"use strict";


const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::user-cart.user-cart", ({ strapi }) => ({
  async delete(ctx) {
    try {
      const { id } = ctx.params;

      // Fetch the existing record (optional, for debugging)
      const existingItem = await strapi.db.query("api::user-cart.user-cart").findOne({
        where: { id },
      });

      if (!existingItem) {
        return ctx.send({ message: "Cart item not found" }, 404);
      }

      // Permanently delete the cart item
      await strapi.db.query("api::user-cart.user-cart").delete({
        where: { id },
      });

      return ctx.send({ message: "Cart item permanently deleted" }, 200);
    } catch (error) {
      console.error("Error deleting cart item:", error);
      return ctx.send({ error: "Failed to delete cart item" }, 500);
    }
  },
}));
