import {FaFileAlt} from 'react-icons/fa';

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: FaFileAlt,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    },
    {
      title: 'Sale price',
      name: 'salePrice',
      type: 'number'
    },
    {
      name: 'group',
      title: 'Group',
      type: 'reference',
      to: [{type: 'group'}],
    },
    {
      title: 'Order number',
      name: 'orderNum',
      type: 'number'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'altImages',
      title: 'Alternative images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'promo',
      title: 'Promote on front page',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'sold',
      title: 'Sold already',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Sold price',
      name: 'soldPrice',
      type: 'number'
    },
    {
      name: 'deliveryDate',
      title: 'Delivery date',
      type: 'date',
    },
    {
      name: 'fbUrl',
      title: 'Facebook url',
      type: 'url',
    },
    {
      title: 'Price on Ebay',
      name: 'ebayPrice',
      type: 'number'
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        { type: 'youtube' },
      ],
    },

    {
      name: 'customers',
      title: 'Customers',
      type: 'array',
      of: [
        { type: 'customer' },
      ],
    },

  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
