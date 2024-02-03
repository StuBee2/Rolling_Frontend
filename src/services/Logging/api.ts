import { customAxios } from "@src/libs/Axios/RollingAxios";

export interface LoggingParam {
  description: string;
  module: string;
}

class LoggingApi {
  public async postLogging({
    description,
    module,
  }: LoggingParam): Promise<void> {
    await customAxios.post("/logging", {
      description,
      module,
    });
  }
}

export default new LoggingApi();
