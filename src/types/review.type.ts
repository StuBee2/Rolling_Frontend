export interface ReviewType {
  companyId: string;
  content: string;
  position: string;
  careerPath: string;
  grade: number;
}

export interface ReviewResType {
  id: string;
  content: string;
  position: string;
  careerPath: string;
  grade: number;
  memberId: string;
  companyId: string;
  createdAt: string;
  modifiedAt: string;
}
