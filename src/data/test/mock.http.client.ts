import {
  HttpPostCLient,
  HttpPostParams,
} from "../protocols/http/http.post.client";
import { HttpResponse, HttpStatusCode } from "../protocols/http/http.response";

export class HttpPostCLientSpy<T, R> implements HttpPostCLient<T, R> {
  url?: string;
  body?: T;
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok,
  };

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}
