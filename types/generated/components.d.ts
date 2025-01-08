import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooterLeft extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_left_s';
  info: {
    displayName: 'Footer (left)';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer-left': FooterFooterLeft;
    }
  }
}
