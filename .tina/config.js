import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "assets/img",
      publicFolder: "./",
    },
  },
  search: {
    tina: {
      indexerToken: process.env.SEARCH_TOKEN, // Get this from tina.io
      stopwordLanguages: ['eng']
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
        defaultItem: () => {
          return {
            comments: true,
            date: new Date().toISOString(),
            layout: "post",
            title: new Date().toISOString().substr(0, 10) + "-"
          }
        },
        fields: [
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
             type: "string",
             name: "title",
             label: "Title",
             isTitle: true,
             required: true,
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
             isBody: true,
          },
          {
            type: "string",
            name: "categories",
            label: "categories",
            list: true,
          },
          {
            // true/false whether comments should be enabled for the post
            type: "boolean",
            name: "comments",
            label: "comments",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "collection"
          }
          // See https://tina.io/docs/schema/
          // for help modelling your fields
        ],
      },
      {
        label: "Works",
        name: "works",
        path: "_works",
        defaultItem: () => {
          return {
            type: "post",
            date: new Date().toISOString(),
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
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
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "type",
            required: true
          }
        ],
      },
      {
        label: "Press",
        name: "press",
        path: "_press",
        defaultItem: () => {
          return {
            type: "newspaper",
            date: new Date().toISOString(),
          }
        },
        fields: [
          {
            type: "string",
            name: "headline",
            label: "Headline",
            isTitle: true,
            required: true,
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
            required: true,
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
        ],
      },
    ],
  },
});
