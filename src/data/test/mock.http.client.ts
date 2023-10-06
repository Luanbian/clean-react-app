import { HttpPostCLient } from "../protocols/http/http.post.client";

export class HttpPostCLientSpy implements HttpPostCLient {
  url?: string;
  async post(url: string): Promise<void> {
    this.url = url;
    return Promise.resolve();
  }
}