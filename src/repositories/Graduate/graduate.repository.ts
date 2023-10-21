export interface graduateRepository {
  certifyGraduate(housemaster: string): Promise<void>;
}
