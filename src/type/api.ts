export type BaseResponse<T> = {
  code: number;
  message: string;
  data: T;
};

export type ErrorResponse = {
  code: number;
  message: string;
};
