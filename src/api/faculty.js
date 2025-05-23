import axiosInstance from "./axiosInstance";

// Faculties
export const fetchFaculties = async () => {
  try {
    const res = await axiosInstance.get("/faculty/getAllFaculties");
    console.log(res);

    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch faculties"
    );
  }
};
