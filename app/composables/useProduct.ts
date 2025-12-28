export const useProduct = async (slug: string) => {
  const { data, error, status, clear, execute, pending, refresh } = await useFetch(
    `/api/product/${slug}`
  );

  return {
    data,

    product: data,
    error,
    status,
    clear,
    execute,
    pending,
    refresh,
  };
};
