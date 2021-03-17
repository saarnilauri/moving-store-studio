import {BiBook} from 'react-icons/bi';

export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  icon: BiBook,
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'Part of series',
      name: 'partNum',
      type: 'number'
    },
    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ],
}
