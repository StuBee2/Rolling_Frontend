export interface EmploymentResponse {
  employmentId: {
    id: string;
  };
  employeeId: {
    id: string;
  };
  employerId: {
    id: string;
  };
  employmentDetails: {
    position: string;
    schoolLife: string;
    preparationCourse: string;
    employmentProcess: string;
    interviewQuestion: string;
    mostImportantThing: string;
  };
}
