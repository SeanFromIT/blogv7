import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/d644012a-ff5c-432b-8178-266f85acd0a1/github/master', token: '1eae4e97752a1c3d2dd5358a3c741db9057b312d', queries,  });
export default client;
  