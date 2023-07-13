import { defineOperationApi } from "@directus/extensions-sdk";
import { OperationContext } from "@directus/types";

type Options = {
  importUrl: string;
};

export default defineOperationApi<Options>({
  id: "file-import",
  handler: async (options, context: OperationContext) => {
    const importUrl = options.importUrl;

    if (!importUrl) {
      throw new Error("Import URL is required.");
    }

    const { services } = context;

    let file;
    try {
      const fileService = new services.FilesService({
        knex: context.database,
        schema: context.getSchema(),
      });

      file = await fileService.importOne(importUrl);
    } catch (e) {
      console.log("Error:", e);
    }

    if (!file) {
      throw new Error("File could not be imported.");
    }

    return file;
  },
});
