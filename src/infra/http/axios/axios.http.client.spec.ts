import { mockPostRequest } from "@/data/test/mock.http.post";
import { mockAxios } from "@/infra/test/mock.axios";
import axios from "axios";
import { AxiosHttpCLient } from "./axios.http.client";

jest.mock("axios");
interface sutTypes {
  sut: AxiosHttpCLient;
  mockedAxios: jest.Mocked<typeof axios>;
}

const makeSut = (): sutTypes => {
  const sut = new AxiosHttpCLient();
  const mockedAxios = mockAxios();
  return {
    sut,
    mockedAxios,
  };
};

describe("AxiosHttpClient", () => {
  test("should call axios with correct values", async () => {
    const { sut, mockedAxios } = makeSut();
    const request = mockPostRequest();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
  test("should return the correct statusCode and body", () => {
    const { sut, mockedAxios } = makeSut();
    const request = mockPostRequest();
    const promise = sut.post(request);
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value);
  });
});
