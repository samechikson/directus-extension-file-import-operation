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
      throw JSON.stringify({
        error: "Import URL is required.",
      });
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
      throw JSON.stringify({
        error: "Error importing file",
        errorDetails: e,
      });
    }

    if (!file) {
      throw JSON.stringify({
        error: "File not found",
      });
    }

    return file;
  },
});
