import redis from './redis';

export const getViews = async (slug: string): Promise<number> => {
  const { data, error } = await redis.get(slug);

  if (error) throw error;

  return data;
};

export const setViews = async (slug: string) => {
  // https://redis.io/commands/INCR
  // Increments the number stored at key by one. If the key does not exist, it is set to 0 before performing the operation.
  const { error } = await redis.incr(slug);

  if (error) throw error;
};
