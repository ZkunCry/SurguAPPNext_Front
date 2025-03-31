import { SearchService } from "@/services/search/searchService";
import type { DataResponse } from "@/types/teachers";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export function useSearchQuery(
  str: string | null,
  options?: UseQueryOptions<DataResponse, Error>
) {
  return useQuery<DataResponse, Error>({
    queryKey: ["search", str],
    queryFn: async () => {
      const result = await SearchService.search(str);
      console.log(result);
      return result;
    },
    ...options,
  });
}
