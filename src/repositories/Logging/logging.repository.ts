export interface LoggingRepository {
  postLogging({ description, module }: LoggingParam): Promise<void>;
}

export interface LoggingParam {
  description: string;
  module: string;
}
