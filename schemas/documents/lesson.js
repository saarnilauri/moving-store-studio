import {GrDocumentText} from 'react-icons/gr';

export default {
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  icon: GrDocumentText,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'book',
      title: 'Book',
      type: 'reference',
      to: [{type: 'book'}],
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        { type: 'youtube' },
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
