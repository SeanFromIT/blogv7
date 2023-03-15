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
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "_posts",
        defaultItem: () => {
          return {
            comments: "true",
            date: new Date().toISOString(),
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
            type: "string",
            name: "comments",
            label: "comments",
            required: true,
          }
          // See https://tina.io/docs/schema/
          // for help modelling your fields
        ],
      },
      {
        label: "Works",
        name: "works",
        path: "_works",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
      {
        label: "Press",
        name: "press",
        path: "_press",
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
