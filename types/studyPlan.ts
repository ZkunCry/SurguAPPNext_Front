interface ClassStudyPlanInfoName {
  id: number;
  name: string;
  course: number;
}

export interface ClassStudyPlanInfoItem {
  id: number;
  info: string;
  infoData: string;
  name: ClassStudyPlanInfoName;
  semester: number;
}

export interface StudyPlanResponse {
  courseCount: number;
  classStudyPlanInfo: ClassStudyPlanInfoItem[];
}
export type EducationData = {
  alumniName: string;
  code: string;
  specialityName: string;
  year: number;
};
