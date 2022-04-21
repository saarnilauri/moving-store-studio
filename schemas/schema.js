// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import page from './documents/page';
import post from './documents/post'
import route from './documents/route';
import product from './documents/product';
import siteConfig from './documents/siteConfig';


// Object types
import cta from './objects/cta';
import youtube from './objects/youtube';
import embedHTML from './objects/embedHTML';
import inlineImage from "./objects/inlineImage";
import figure from './objects/figure';
import internalLink from './objects/internalLink';
import link from './objects/link';
import portableText from './objects/portableText';
import simplePortableText from './objects/simplePortableText';

import blockContent from './objects/blockContent'
import category from './objects/category'
import author from './objects/author'
import group from './objects/group'
import logo from './objects/logo'

// Landing page sections
import hero from './objects/hero';
import imageSection from './objects/imageSection';
import textSection from './objects/textSection';
import mainTextSection from './objects/mainTextSection';



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    group,
    author,
    category,
    product,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,

    cta,
    inlineImage,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    mainTextSection,
    textSection,
    youtube,
    logo

  ]),
})
