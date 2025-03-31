export type Pair = {
  name: string;
  time: string;
  subject: string;
  type: string;
  group: string;
  room: string;
  teacher: string;
  note: string;
};

export type GroupedPairs = Pair[][];
interface Group {
  id: number;
  name: string;
  code: string;
  year: number;
  institute: string;
  profile: string | null;
}

export interface Lesson {
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
  teacherId: number | null;
  group: Group;
}

export type Schedule = Lesson[];
