export interface IGroup {
  id: number;
  name: string;
  code: string;
  year: number;
  institute: string;
  profile: string | null;
}

export interface ILesson {
  id: number;
  startDate: string;
  endDate: string;
  course: number;
  day: string;
  position: number;
  alternativePosition: number | null;
  cabinet: string;
  name: string;
  type: string;
  week: number | null;
  subGroup: number;
  groupId: number;
  teacher: ITeacher;
  group: IGroup;
  notes?: Note[] | null;
}
export interface ITeacher {
  id: number;
  name: string;
  surname: string;
  middleName: string;
}
export type Schedule = ILesson[];
export type Calendar = ILesson[];
export type ScheduleByDay = {
  [key: string]: ILesson[];
};
