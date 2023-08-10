import { EmploymentResponse } from "../../types/Employment/employment.type";

export interface EmployRepository {
  getMyEmployList(): Promise<EmploymentResponse[]>;
}
