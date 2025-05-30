import { create } from "zustand";

export const useCourseStore = create((set) => ({
  courses: [],
  loading: false,
  error: null,

  // Fetch all Courses
  getCourses: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchCourses();
      set({ courses: data.courses, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
