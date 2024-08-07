// .tina/config.js
import { defineConfig } from "tinacms";
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";
var config_default = defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./"
  },
  media: {
    tina: {
      mediaRoot: "assets/img",
      publicFolder: "./"
    }
  },
  search: {
    tina: {
      indexerToken: process.env.SEARCH_TOKEN,
      // Get this from tina.io
      stopwordLanguages: ["eng"]
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        format: "md",
        ui: {
          filename: {
            slugify: (values) => {
              return (/* @__PURE__ */ new Date()).toISOString().substr(0, 10) + `-${values?.title?.toLowerCase().replace(/ /g, "-")}`;
            }
          }
        },
        defaultItem: () => {
          return {
            comments: true,
            date: (/* @__PURE__ */ new Date()).toISOString(),
            layout: "post"
          };
        },
        fields: [
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            // Short description for sharing/page previews
            type: "string",
            name: "description",
            label: "description"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true
          },
          {
            // true/false whether comments should be enabled for the post
            type: "boolean",
            name: "comments",
            label: "comments",
            required: true
          },
          {
            type: "string",
            name: "layout",
            label: "collection"
          }
          // See https://tina.io/docs/schema/
          // for help modelling your fields
        ]
      },
      {
        label: "Works",
        name: "works",
        path: "_works",
        defaultItem: () => {
          return {
            type: "post",
            date: (/* @__PURE__ */ new Date()).toISOString()
          };
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "externalLink",
            label: "externalLink",
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "type",
            label: "type",
            required: true
          }
        ]
      },
      {
        label: "Press",
        name: "press",
        path: "_press",
        defaultItem: () => {
          return {
            type: "newspaper",
            date: (/* @__PURE__ */ new Date()).toISOString()
          };
        },
        fields: [
          {
            type: "string",
            name: "headline",
            label: "Headline",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "externalLink",
            label: "externalLink",
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "type",
            label: "type",
            required: true
          },
          {
            type: "boolean",
            name: "political",
            label: "political",
            required: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
