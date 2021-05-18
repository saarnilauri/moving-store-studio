export default {
  type: 'object',
  name: 'imageSection',
  title: 'Image with text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
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
      heading: 'heading',
      subtitle: 'label',
      media: 'image',
    },
    prepare({ heading, media }) {
      return {
        title: `Image: ${heading}`,
        subtitle: 'Image section',
        media,
      };
    },
  },
};
