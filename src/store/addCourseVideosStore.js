import { create } from "zustand";

export const useAddCourseVideosStore = create((set) => ({
  // newIntroVideo: {
  //   title: "",
  //   videoThumbnail: null,
  //   uploadId: "",
  //   playbackId: "",
  //   videoUrl: "",
  //   moduleMaterial: "",
  // },
  // newClassVideo: {},
  // newConclusionVideo: {},

  introVideos: [],
  classVideos: [],
  conclusionVideos: [],

  // Intro Videos
  addNewIntroVideo: () => {
    set((state) => ({
      introVideos: [
        ...state.introVideos,
        {
          id: crypto.randomUUID(),
          videoTitle: "",
          videoThumbnail: null,
          uploadId: "",
          playbackId: "",
          videoUrl: "",
          moduleMaterial: "",
        },
      ],
    }));
  },

  addIntroVideoTitle: (videoTitle, videoIndex) => {
    set((state) => {
      const updatedIntroVideos = state.introVideos.map((video, index) => {
        if (index === videoIndex) {
          return { ...video, videoTitle };
        }
        return video;
      });
      return { introVideos: updatedIntroVideos };
    });
  },

  addIntroVideoThumbnail: (imageFile, videoIndex) => {
    set((state) => {
      const updatedIntroVideos = state.introVideos.map((video, index) => {
        if (index === videoIndex) {
          return { ...video, videoThumbnail: imageFile };
        }
        return video;
      });
      return { introVideos: updatedIntroVideos };
    });
  },

  removeIntroVideo: (introVideoId) => {
    set((state) => ({
      introVideos: state.introVideos.filter(
        (_, index) => index !== introVideoId
      ),
    }));
  },

  // Class Videos

  addNewClassVideo: () => {
    set((state) => ({
      classVideos: [
        ...state.classVideos,
        {
          id: crypto.randomUUID(),
          videoTitle: "",
          videoThumbnail: null,
          uploadId: "",
          playbackId: "",
          videoUrl: "",
          moduleMaterial: "",
        },
      ],
    }));
  },

  addClassVideoThumbnail: (imageFile, videoIndex) => {
    set((state) => {
      const updatedClassVideos = state.classVideos.map((video, index) => {
        if (index === videoIndex) {
          return { ...video, videoThumbnail: imageFile };
        }
        return video;
      });
      return { classVideos: updatedClassVideos };
    });
  },

  removeClassVideo: (classVideoId) => {
    set((state) => ({
      classVideos: state.classVideos.filter(
        (_, index) => index !== classVideoId
      ),
    }));
  },

  // Conclution Videos

  addConclusionVideo: () => {
    set({ conclusionVideos: conclusionVideos.push(newConclusionVideo) });
  },
}));
