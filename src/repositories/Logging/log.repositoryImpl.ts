import { customAxios } from "../../libs/Axios/customAxios";
import { LogType } from "../../types/log.type";
import { LoggingParam } from "./log.param";
import { LogRepository } from "./log.repository";

class LogRepositoryImpl implements LogRepository {
  public async postLogging({
    description,
    module,
  }: LoggingParam): Promise<LogType> {
    const { data } = await customAxios.post("/logging", {
      description,
      module,
    });
    return data;
  }
}

export default new LogRepositoryImpl();
