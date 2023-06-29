FROM directus/directus:9.22

# RUN npm install --save directus-extension-file-import-operation@0.0.2
COPY ./dist ./extensions/operations/file-import

RUN npx directus init
RUN npx directus bootstrap
CMD npx directus start