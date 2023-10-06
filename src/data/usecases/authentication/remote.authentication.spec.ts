import { HttpPostCLient } from "@/data/protocols/http/http.post.client";
import { RemoteAuthentication } from "./remote.authentication";

describe("RemoteAuthentication", () => {
  test("Should call http post client with correct url", async () => {
    class HttpPostCLientSpy implements HttpPostCLient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = "any_url";
    const httpPostClientSpy = new HttpPostCLientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
