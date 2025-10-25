import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturedSectionFeaturedSection extends Struct.ComponentSchema {
  collectionName: 'components_featured_section_featured_sections';
  info: {
    displayName: 'FeaturedSection';
  };
  attributes: {};
}

export interface FlavorsFlavors extends Struct.ComponentSchema {
  collectionName: 'components_flavors_flavors';
  info: {
    displayName: 'Flavors';
    icon: 'restaurant';
  };
  attributes: {
    Dessert: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Dinner: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Drinks: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Small_text_on_what_we_offer: Schema.Attribute.Text &
      Schema.Attribute.Required;
  };
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

export interface HomePageHomePage extends Struct.ComponentSchema {
  collectionName: 'components_home_page_home_pages';
  info: {
    displayName: 'HomePage';
    icon: 'cog';
  };
  attributes: {
    Dessert: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Dinner: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Drinks: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Short_text_on_what_we_offer: Schema.Attribute.Text &
      Schema.Attribute.Required;
  };
}

export interface HomePageOurStory extends Struct.ComponentSchema {
  collectionName: 'components_home_page_our_stories';
  info: {
    displayName: 'Our_story';
    icon: 'emotionHappy';
  };
  attributes: {
    Close_up: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Environment: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    Our_story_short: Schema.Attribute.Text;
  };
}

export interface HomePageReview extends Struct.ComponentSchema {
  collectionName: 'components_home_page_reviews';
  info: {
    displayName: 'Review';
    icon: 'volumeUp';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    profile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    review_text: Schema.Attribute.Text;
  };
}

export interface HomePageWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_home_page_why_choose_uses';
  info: {
    displayName: 'Why_choose_us';
    icon: 'thumbUp';
  };
  attributes: {
    Event_n_party: Schema.Attribute.Text;
    Fresh_environment: Schema.Attribute.Text;
    Hygienic_food: Schema.Attribute.Text;
    Skilled_chefs: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'featured-section.featured-section': FeaturedSectionFeaturedSection;
      'flavors.flavors': FlavorsFlavors;
      'footer-column.footer-column': FooterColumnFooterColumn;
      'hero.hero': HeroHero;
      'home-page.home-page': HomePageHomePage;
      'home-page.our-story': HomePageOurStory;
      'home-page.review': HomePageReview;
      'home-page.why-choose-us': HomePageWhyChooseUs;
    }
  }
}
