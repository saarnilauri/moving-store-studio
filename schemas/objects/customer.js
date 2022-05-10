import { MdPerson } from "react-icons/md";
export default {
  name: "customer",
  title: "Customer",
  type: "document",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "notes",
      title: "Notes",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: 'paid',
      title: 'Paid already',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'delivered',
      title: 'Delivered already',
      type: 'boolean',
      initialValue: false,
    },
  ],
};
