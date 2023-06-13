import { LogType } from "../../types/log.type";
import { LoggingParam } from "./log.param";

export interface LogRepository {
  postLogging({ description, module }: LoggingParam): Promise<LogType>;
}
