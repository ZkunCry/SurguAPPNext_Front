interface ClassStudyPlanInfoName {
  id: number;
  name: string;
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
