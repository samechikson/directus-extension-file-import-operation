import { defineOperationApi } from "@directus/extensions-sdk";

type Options = {
  text: string;
};

export default defineOperationApi<Options>({
  id: "file-import-operation",
  handler: ({ text }) => {
    console.log(text);
  },
});
