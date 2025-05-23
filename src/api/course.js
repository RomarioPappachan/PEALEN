import axiosInstance from "./axiosInstance";

// Categories
export const fetchCategories = async () => {
  try {
    const res = await axiosInstance.get("/category/listCategories");
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch categories"
    );
  }
};

// Courses
export const fetchCourses = async () => {
  try {
    const res = await axiosInstance.get("/courses/listCourses");
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch courses");
  }
};

export const fetchCourseById = async (courseId) => {
  try {
    const res = await axiosInstance.get(
      `/courses/getCourseDetails/${courseId}`
    );
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch course");
  }
};

export const createCourse = async (courseData) => {
  try {
    const res = await axiosInstance.post(
      "/admin/adminCreateCourse",
      courseData
    );
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to create course");
  }
};

export const updateCourse = async (courseId, updatedData) => {
  try {
    const res = await axiosInstance.put(
      `/courses/updateCourse/${courseId}`,
      updatedData
    );
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to update course");
  }
};

export const deleteCourse = async (courseId) => {
  try {
    const res = await axiosInstance.delete(`/courses/deleteCourse/${courseId}`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to delete course");
  }
};

// Videos
export const fetchCourseVideos = async (courseId) => {
  try {
    const res = await axiosInstance.get(`/videos/getCourseVideos/${courseId}`);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch course videos"
    );
  }
};

export const fetchCourseVideoById = async (videoId) => {
  try {
    const res = await axiosInstance.get(`/videos/getVideoDetails/${videoId}`);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch course video"
    );
  }
};

export const createCourseVideo = async (courseId, videoData) => {
  try {
    const res = await axiosInstance.put(
      `/videos/manageVideos/${courseId}`,
      videoData
    );
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to create course video"
    );
  }
};

export const updateCourseVideo = async (courseId, updatedData) => {
  try {
    const res = await axiosInstance.put(`/videos/manageVideos/${courseId}`, {
      updateVideos: [updatedData],
    });
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update course video"
    );
  }
};

export const deleteCourseVideo = async (courseId, videoId) => {
  try {
    const res = await axiosInstance.put(`/videos/manageVideos/${courseId}`, {
      removeVideoIds: [videoId],
    });
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to delete course video"
    );
  }
};

// Challenges
export const submitChallenge = async (videoId, challengeData) => {
  try {
    const res = await axiosInstance.put(`/tests/manageTests/${videoId}`, {
      addTest: challengeData,
    });
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to submit challenge"
    );
  }
};

export const updateChallenge = async (videoId, challengeData) => {
  try {
    const res = await axiosInstance.put(`/tests/manageTests/${videoId}`, {
      updateTest: {
        testId: challengeData.id,
        questions: challengeData.questions,
        challenge: challengeData.challenge,
      },
    });
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update challenge"
    );
  }
};

export const deleteChallenge = async (videoId, challengeId) => {
  try {
    const res = await axiosInstance.put(
      `/tests/manageTests/${videoId}`,
      challengeId
    );
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to delete challenge"
    );
  }
};
