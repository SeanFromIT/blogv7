import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '1eae4e97752a1c3d2dd5358a3c741db9057b312d', queries,  });
export default client;
  