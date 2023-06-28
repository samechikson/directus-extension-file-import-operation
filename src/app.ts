import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "file-import-operation",
  name: "File Import Operation",
  icon: "add_photo_alternate",
  description: "Operation to import files from a remote URL.",
  overview: ({ text }) => [
    {
      label: "File Import",
      text: text,
    },
  ],
  options: [
    {
      field: "importUrl",
      name: "Import URL",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
  ],
});
