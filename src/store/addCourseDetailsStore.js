import { create } from "zustand";
import { createCourse } from "@/api/course";

export const useAddCourseDetailsStore = create((set) => ({
  // store

  courseDetails: {
    id: "",
    title: "",
    description: "",
    courseContents: "",
    image: null, // File
    pdf: null, // File
    instructorIds: [],
    categoryId: "cbed4b23-ca60-4245-9bea-1ade60684fbf",
  },

  loading: false,
  error: null,

  //   change course details
  setCourseDetail: (field, value) => {
    set((state) => ({
      courseDetails: {
        ...state.courseDetails,
        [field]: value,
      },
    }));
  },

  //   clear course material
  clearCourseMaterial: () => {
    set((state) => ({
      courseDetails: {
        ...state.courseDetails,
        pdf: null,
      },
    }));
  },

  //add course content
  addCourseContent: (newContent) => {
    set((state) => ({
      courseDetails: {
        ...state.courseDetails,
        courseContents: [...state.courseDetails.courseContents, newContent],
      },
    }));
  },

  //remove course content
  removeCourseContent: (indexToRemove) => {
    set((state) => ({
      courseDetails: {
        ...state.courseDetails,
        courseContents: state.courseDetails.courseContents.filter(
          (_, idx) => idx !== indexToRemove
        ),
      },
    }));
  },

  //add new faculty
  addFaculty: (newFaculty) => {
    set((state) => ({
      courseDetails: {
        ...state.courseDetails,
        instructorIds: [...state.courseDetails.instructorIds, newFaculty],
      },
    }));
  },

  // remove a faculty
  removeFaculty: (indexToRemove) => {
    set((state) => ({
      courseDetails: {
        ...state.courseDetails,
        instructorIds: state.courseDetails.instructorIds.filter(
          (_, idx) => idx !== indexToRemove
        ),
      },
    }));
  },

  // Add a new member
  addCourse: async (courseData) => {
    set({ loading: true, error: null });
    try {
      const res = await createCourse(courseData);
      set((state) => ({
        loading: false,
        courseDetails: {
          ...state.courseDetails,
          id: res?.course?.id,
        },
      }));
      return res;
    } catch (error) {
      set({ error: "Failed to create a new course", loading: false });
      throw error;
    }
  },

  //reset course details
  resetCourseDetails: () => {
    set({
      courseDetails: {
        title: "",
        description: "",
        courseContents: "",
        image: null,
        pdf: null,
        instructorIds: [],
        categoryId: "",
      },
    });
  },
}));
