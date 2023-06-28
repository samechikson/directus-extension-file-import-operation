import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "file-import-operation",
  name: "File Import Operation",
  icon: "add_photo_alternate",
  description: "This is my custom operation!",
  overview: ({ text }) => [
    {
      label: "Text",
      text: text,
    },
  ],
  options: [
    {
      field: "text",
      name: "Text",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
  ],
});
