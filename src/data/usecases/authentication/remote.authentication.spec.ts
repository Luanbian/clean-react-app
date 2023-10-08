import { HttpStatusCode } from "@/data/protocols/http/http.response";
import { InvalidCredentialsError } from "@/domain/errors/invalid.credentials.error";
import { UnexpectedError } from "@/domain/errors/unexpected.error";
import { AccountModel } from "@/domain/models/account.model";
import { AuthenticationParamns } from "@/domain/usecases/authentication";
import { faker } from "@faker-js/faker";
import {
  mockAccountModel,
  mockAuthentication,
} from "../../../domain/test/mock.account";
import { HttpPostCLientSpy } from "../../test/mock.http.client";
import { RemoteAuthentication } from "./remote.authentication";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostCLientSpy<AuthenticationParamns, AccountModel>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostCLientSpy<
    AuthenticationParamns,
    AccountModel
  >();
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
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });
  test("Should call http post client with correct body", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const authParams = mockAuthentication();
    await sut.auth(authParams);
    expect(httpPostClientSpy.body).toEqual(authParams);
  });
  test("Should throw InvalidCredentialsError if HttpClient return 401", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unathorized,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });
  test("Should throw UnexpectedError if HttpClient return 400", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
  test("Should throw UnexpectedError if HttpClient return 500", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
  test("Should throw UnexpectedError if HttpClient return 404", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };
    const promise = sut.auth(mockAuthentication());
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
  test("Should return an AccountModel if HttpCLient return 200", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const httpResult = mockAccountModel();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };
    const account = await sut.auth(mockAuthentication());
    expect(account).toEqual(httpResult);
  });
});
