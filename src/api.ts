import { defineOperationApi } from "@directus/extensions-sdk";
import { OperationContext } from "@directus/types";

type Options = {
  importUrl: string;
};

export default defineOperationApi<Options>({
  id: "file-import-operation",
  handler: async (options, context: OperationContext) => {
    const importUrl = options.importUrl;

    if (!importUrl) {
      throw new Error("Import URL is required.");
    }

    const { services } = context;

    const file = await services.files.import(importUrl);

    return file;
  },
});
