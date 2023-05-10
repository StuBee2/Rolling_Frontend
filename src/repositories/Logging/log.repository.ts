import { customAxios } from "../../libs/Axios/customAxios";
import { LoggingType } from "../../types/logging.type";
import { LoggingParam } from "./logging.param";

class LogRepository {
  public async postLogging({
    description,
    module,
  }: LoggingParam): Promise<LoggingType> {
    const { data } = await customAxios.post("/logging", {
      description,
      module,
    });
    return data;
  }
}

export default new LogRepository();
