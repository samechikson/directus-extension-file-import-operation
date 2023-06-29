import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "file-import",
  name: "File Import",
  icon: "add_photo_alternate",
  description: "Imports a file from a remote URL.",
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
