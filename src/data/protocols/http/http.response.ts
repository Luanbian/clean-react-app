export enum HttpStatusCode {
  noContent = 204,
  unathorized = 401,
  ok = 200,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: any;
};
