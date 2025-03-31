export type DataResponse = {
  data: DataItem[];
};
export type DataItem = {
  id: string;
  first_name: string;
  last_name: string;
  third_name: string;
  name: string;
  work_email: string;
  student_groups: StudentGroup[];
  avatar: string;
};

type StudentGroup = {
  id: string;
  name: string;
  curriculum: Curriculum;
  speciality: Speciality;
  leader: Leader;
};

type Curriculum = {
  id: number;
  name: string;
  degree: Degree;
  education_format: EducationFormat;
  department: Department;
  speciality: Speciality;
};

export type DataResponseTeacher = {
  data: DataObject;
};

type DataObject = {
  id: string;
  first_name: string;
  last_name: string;
  third_name: string;
  name: string;
  work_email: string;
  student_groups: StudentGroup[];
  avatar: string;
  departments: DepartmentShort[];
  degrees: DegreeDocument[];
  academic_titles: AcademicTitleAward[];
  educational_documents: EducationalDocument[];
  last_activity_at: string;
};

// Повторно используем ранее созданные типы с дополнениями

// Новые типы для дополнительных полей
type DepartmentShort = {
  id: number;
  name: string;
  institute: Institute;
};

type DegreeDocument = {
  id: number;
  doc_number: string;
  degree_id: string;
  degree_name: string;
  awarded_at: string; // ISO date-time
};

type AcademicTitleAward = {
  academic_title: {
    id: string;
    name: string;
  };
  awarded_at: string;
};

type EducationalDocument = {
  id: number;
  number: string;
  series: string;
  speciality_name: string;
  qualification_name: string;
  user_id: number;
  organization: Organization;
  education_type: EducationType;
  document_type: DocumentType;
  start_year: string; // ISO date-time
  end_year: string; // ISO date-time
  dt: string; // ISO date-time
  created_at: string; // ISO date-time
  updated_at: string; // ISO date-time
};

// Вспомогательные типы для EducationalDocument
type Organization = {
  id: string;
  name: string;
};

type EducationType = {
  id: string;
  name: string;
};

type DocumentType = {
  id: string;
  name: string;
};

// Повторно используемые типы из предыдущей реализации
type Degree = {
  id: number;
  name: string;
};

type EducationFormat = {
  id: number;
  name: string;
};

type Department = {
  id: number;
  name: string;
  institute: Institute;
};

type Institute = {
  id: number;
  name: string;
  internal_id: string;
  created_at: string;
  updated_at: string;
  director_id: number;
  description: string;
  building_id: number;
  phone: string;
  email: string;
};

type Speciality = {
  id: number;
  name: string;
  description: string;
};

type Leader = {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  third_name: string;
  phone: string;
};
