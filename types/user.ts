export interface IUser {
  id: number;
  name: string;
  surname: string;
  middleName?: string;
  privilege: number;
  role: string;
  active: boolean;
}
