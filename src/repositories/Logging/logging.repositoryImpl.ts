import { customAxios } from "@src/libs/Axios/customAxios";
import { LoggingRepository, LoggingParam } from "./logging.repository";

class LoggingRepositoryImpl implements LoggingRepository {
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

export default new LoggingRepositoryImpl();
