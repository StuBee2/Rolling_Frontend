import { EmploymentResponse } from "@src/types/Employment/employment.type";

export interface EmployRepository {
  getMyEmployList(): Promise<EmploymentResponse[]>;
}
