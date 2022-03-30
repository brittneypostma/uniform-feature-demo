import { createClient, Entry } from 'contentful';
import { CanvasClient } from '@uniformdev/canvas';

if (!process.env['CONTENTFUL_SPACE_ID']) {
  throw new Error('CONTENTFUL_SPACE_ID env not set.');
}

if (!process.env['CONTENTFUL_CDA_ACCESS_TOKEN']) {
  throw new Error('CONTENTFUL_CDA_ACCESS_TOKEN env not set.');
}

if (!process.env['UNIFORM_API_KEY']) {
  throw new Error('UNIFORM_API_KEY env not set.');
}

if (!process.env['UNIFORM_PROJECT_ID']) {
  throw new Error('UNIFORM_PROJECT_ID env not set.');
}

export const uniformClient = new CanvasClient({
  apiKey: process.env['UNIFORM_API_KEY'],
  projectId: process.env['UNIFORM_PROJECT_ID'],
})

// export const contenfulClient = createClient({
//   space: process.env['CONTENTFUL_SPACE_ID'],
//   accessToken: process.env['CONTENTFUL_CDA_ACCESS_TOKEN'],
//   environment: process.env['CONTENTFUL_ENVIRONMENT'] ? ['CONTENTFUL_ENVIRONMENT'] : 'master',
// });

// export const previewClient = createClient({
//   space: process.env['CONTENTFUL_SPACE_ID'],
//   accessToken: process.env['CONTENTFUL_CDA_ACCESS_TOKEN'],
//   host: 'preview.contentful.com',
//   environment: process.env['CONTENTFUL_ENVIRONMENT'] ? ['CONTENTFUL_ENVIRONMENT'] : 'master',
// });

// const getClient = preview => preview ? previewClient : contenfulClient;

// export const getEntriesByContentType = async <T>(type: string, preview: boolean = false): Promise<Entry<T>[]> => {
//   const entries = await getClient(preview).getEntries({
//     content_type: type,
//   });
//   return entries.items;
// }