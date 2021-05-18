export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text',
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
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text section',
      };
    },
  },
};
