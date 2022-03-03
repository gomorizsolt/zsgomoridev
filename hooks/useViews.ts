import useSWR from "swr";

interface Views {
  views: number;
}

const useViews = (slug: string) => {
  const { data, error } = useSWR<Views>(`/api/views/${slug}`);

  return {
    views: data?.views,
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useViews;
