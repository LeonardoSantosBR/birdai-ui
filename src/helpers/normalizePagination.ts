export function normalizePagination<T>(data?: {
  rows?: T[];
  pagination?: {
    page?: number;
    lastPage?: number;
  };
}) {
  return {
    rows: data?.rows ?? [],
    currentPage: data?.pagination?.page ?? 1,
    lastPage: data?.pagination?.lastPage ?? 1,
  };
}
