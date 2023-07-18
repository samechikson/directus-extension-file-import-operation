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

    let fileService: any;
    try {
      fileService = new services.FilesService({
        knex: context.database,
        schema: await context.getSchema(),
      });
    } catch (error: any) {
      throw JSON.stringify({
        error: "Error creating file service",
        errorDetails: error.message ? error.message : error,
      });
    }

    let file;
    try {
      file = await fileService.importOne(importUrl);
    } catch (error: any) {
      throw JSON.stringify({
        error: "Error importing file",
        errorDetails: error.message ? error.message : error,
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
