import type { DataResponse, DataResponseTeacher } from "@/types/teachers";
import axios from "axios";
export const SearchService = {
  async search(str: string | null) {
    const { data } = await axios.get<DataResponse>(
      `https://lk.surgu.ru/api/teachers?query=${str}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );

    return data;
  },
  async getSearchTeacher(id: string | null) {
    try {
      const { data } = await axios.get<DataResponseTeacher>(
        `https://lk.surgu.ru/api/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
