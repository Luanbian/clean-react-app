import { HttpPostCLient } from "@/data/protocols/http/http.post.client";
import { AuthenticationParamns } from "@/domain/usecases/authentication";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostCLient
  ) {}

  async auth(paramns: AuthenticationParamns): Promise<void> {
    await this.httpPostClient.post({ url: this.url, body: paramns });
  }
}
