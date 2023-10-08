import { faker } from "@faker-js/faker";
import axios from "axios";
import { AxiosHttpCLient } from "./axios.http.client";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpCLient => {
  return new AxiosHttpCLient();
};

describe("AxiosHttpClient", () => {
  test("should call axios with correct url and verb", async () => {
    const sut = makeSut();
    const url = faker.internet.url();
    await sut.post({ url });
    expect(mockedAxios.post).toHaveBeenCalledWith(url);
  });
});
