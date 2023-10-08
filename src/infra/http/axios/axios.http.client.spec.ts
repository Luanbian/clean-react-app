import { HttpPostParams } from "@/data/protocols/http/http.post.client";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { AxiosHttpCLient } from "./axios.http.client";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosResult = {
  data: faker.person,
  status: faker.number,
};
mockedAxios.post.mockResolvedValue(mockedAxiosResult);

const makeSut = (): AxiosHttpCLient => {
  return new AxiosHttpCLient();
};

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.person,
});

describe("AxiosHttpClient", () => {
  test("should call axios with correct values", async () => {
    const sut = makeSut();
    const request = mockPostRequest();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
  test("should return the correct statusCode and body", async () => {
    const sut = makeSut();
    const request = mockPostRequest();
    const response = await sut.post(request);
    expect(response).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    });
  });
});
