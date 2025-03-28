import type { Schema, Struct } from '@strapi/strapi';

export interface OrderedItemOrderedItem extends Struct.ComponentSchema {
  collectionName: 'components_ordered_item_ordered_items';
  info: {
    description: '';
    displayName: 'Ordered-item';
    icon: 'apps';
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    quantity: Schema.Attribute.Decimal;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'ordered-item.ordered-item': OrderedItemOrderedItem;
    }
  }
}
