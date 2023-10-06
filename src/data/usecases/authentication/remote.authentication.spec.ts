import { faker } from "@faker-js/faker";
import { HttpPostCLientSpy } from "../../test/mock.http.client";
import { RemoteAuthentication } from "./remote.authentication";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostCLientSpy;
};

const makeSut = (url: string): SutTypes => {
  const httpPostClientSpy = new HttpPostCLientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe("RemoteAuthentication", () => {
  test("Should call http post client with correct url", async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
