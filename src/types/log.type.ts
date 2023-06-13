export interface LogType {
  id: number;
  description: string;
  module: string;
  memberId: {
    id: string;
  };
  createdAt: string;
}
