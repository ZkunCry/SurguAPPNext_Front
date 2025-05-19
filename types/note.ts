type Note = {
  id: number;
  content: string;
  author: {
    id: number;
    middleName: string;
    name: string;
    surname: string;
  };
  createdAt: Date;
  updatedAt: Date;
};
