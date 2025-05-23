import { create } from "zustand";
import { fetchFaculties } from "@/api/faculty";

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
}));
