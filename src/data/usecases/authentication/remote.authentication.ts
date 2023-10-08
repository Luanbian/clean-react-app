import { HttpPostCLient } from "@/data/protocols/http/http.post.client";
import { HttpStatusCode } from "@/data/protocols/http/http.response";
import { InvalidCredentialsError } from "@/domain/errors/invalid.credentials.error";
import { UnexpectedError } from "@/domain/errors/unexpected.error";
import { AuthenticationParamns } from "@/domain/usecases/authentication";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostCLient
  ) {}

  async auth(paramns: AuthenticationParamns): Promise<void> {
    const HttpResponse = await this.httpPostClient.post({
      url: this.url,
      body: paramns,
    });
    switch (HttpResponse.statusCode) {
      case HttpStatusCode.ok:
        break;
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
