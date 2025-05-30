import { create } from "zustand";
import {
  createFaculty,
  fetchFaculties,
  fetchFacultyById,
  findFaculty,
} from "@/api/faculty";

export const useFacultyStore = create((set) => ({
  faculties: [],

  loading: false,
  error: null,

  // Fetch all faculties
  getFaculties: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchFaculties();
      set({ faculties: data.faculties, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // Search a faculty
  searchFaculty: async (queryString) => {
    console.log(queryString);
    set({ loading: true, error: null });
    try {
      const res = await findFaculty(queryString);
      set({
        loading: false,
        error: null,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
      throw err;
    }
  },
}));
