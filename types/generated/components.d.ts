import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturedSectionFeaturedSection extends Struct.ComponentSchema {
  collectionName: 'components_featured_section_featured_sections';
  info: {
    displayName: 'FeaturedSection';
  };
  attributes: {};
}

export interface FooterColumnFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_column_footer_columns';
  info: {
    displayName: 'FooterColumn';
  };
  attributes: {};
}

export interface HeroHero extends Struct.ComponentSchema {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'featured-section.featured-section': FeaturedSectionFeaturedSection;
      'footer-column.footer-column': FooterColumnFooterColumn;
      'hero.hero': HeroHero;
    }
  }
}
