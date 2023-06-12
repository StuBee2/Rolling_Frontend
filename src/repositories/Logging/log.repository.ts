import { LogType } from "../../types/log.type";

export interface LogRepository {
  postLogging({ description, module }: LoggingParam): Promise<LogType>;
}

export interface LoggingParam {
  description: string;
  module: string;
  page?: string;
}
