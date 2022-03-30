import { uniformClient } from '$lib/client';

export const get = async () => {
  try {
    const { composition } = await uniformClient.getCompositionBySlug({
      slug: '/'
    });

    return {
      status: 200,
      body: {
        composition
      }
    }
  }
  catch (e) {
    console.log(e);
    return {
      status: 404,
      body: e.message
    }
  }
}