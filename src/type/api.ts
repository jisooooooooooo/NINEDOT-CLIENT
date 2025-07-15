export type ApiSuccessResponse<T> = {
  code: number;
  message: string;
  data: T;
  meta?: {
    path?: string;
    timestamp?: number;
  };
};

export type ApiErrorResponse = {
  code: number;
  message: string;
  meta: {
    path: string;
    timestamp: number;
  };
};
