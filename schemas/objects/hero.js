export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'Call to actions',
      of: [
        {
          title: 'Call to action',
          type: 'cta',
        },
      ],
    },
    {
      title: "Section color",
      description: "Pick a color",
      name: "color",
      type: "colorlist", // required
      options: {
        borderradius: {
          outer: "100%",
          inner: "100%"
        },
        list: [
          { title: "Orange", value: "#fe6201" },
          { title: "Purple", value: "#554e9c" },
          { title: "Teal", value: "#58bfcb" },
          { title: "Blue", value: "#25aee4" },
          { title: "Green", value: "#94c82d" },
          { title: "Red", value: "#cd291d" },
          { title: "Gray", value: "#D6D3D1" }
        ]
      }
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Hero section',
        media,
      };
    },
  },
};
