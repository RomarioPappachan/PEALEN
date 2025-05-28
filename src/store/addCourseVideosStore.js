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
          videoSteps: [],
          test: {
            challenge: "",
            questions: [
              {
                id: crypto.randomUUID(),
                question: "",
                options: [
                  { id: crypto.randomUUID(), textOption: "", imageOption: "" },
                  { id: crypto.randomUUID(), textOption: "", imageOption: "" },
                  { id: crypto.randomUUID(), textOption: "", imageOption: "" },
                  { id: crypto.randomUUID(), textOption: "", imageOption: "" },
                ],
                correctAnswer: "",
              },
            ],
          },
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

  addClassVideoSteps: (newVideoStep, videoIndex) => {
    set((state) => {
      const updatedClassVideos = state.classVideos.map((video, index) => {
        if (index === videoIndex) {
          const updatedvideoSteps = video.videoSteps;
          updatedvideoSteps.push(newVideoStep);
          return { ...video, videoSteps: updatedvideoSteps };
        }
        return video;
      });
      return { classVideos: updatedClassVideos };
    });
  },

  removeClassVideoSteps: (videoIndex, stepIndex) => {
    set((state) => {
      const updatedClassVideos = state.classVideos.map((video, index) => {
        if (index === videoIndex) {
          const updatedvideoSteps = video.videoSteps.filter(
            (_, index) => index !== stepIndex
          );
          return { ...video, videoSteps: updatedvideoSteps };
        }
        return video;
      });
      return { classVideos: updatedClassVideos };
    });
  },

  addClassVideoQuestions: (videoIndex) => {
    set((state) => {
      const updatedClassVideos = state.classVideos.map((video, index) => {
        if (index === videoIndex) {
          const newQuestion = {
            id: crypto.randomUUID(),
            question: "",
            options: [
              { id: crypto.randomUUID(), textOption: "", imageOption: "" },
              { id: crypto.randomUUID(), textOption: "", imageOption: "" },
              { id: crypto.randomUUID(), textOption: "", imageOption: "" },
              { id: crypto.randomUUID(), textOption: "", imageOption: "" },
            ],
            correctAnswer: "",
          };

          return {
            ...video,
            test: {
              ...video.test,
              questions: [...video.test.questions, newQuestion],
            },
          };
        }
        return video;
      });
      return { classVideos: updatedClassVideos };
    });
  },

  removeClassVideoQuestions: (videoIndex, questionIndex) => {
    set((state) => {
      const updatedClassVideos = state.classVideos.map((video, index) => {
        if (index === videoIndex) {
          const updatedQuestions = video.test.questions.filter(
            (_, i) => i !== questionIndex
          );

          return {
            ...video,
            test: {
              ...video.test,
              questions: updatedQuestions,
            },
          };
        }
        return video;
      });
      return { classVideos: updatedClassVideos };
    });
  },

  addClassQuestionOptions: (videoIndex, questionIndex) => {
    set((state) => {
      const updatedClassVideos = state.classVideos.map((video, index) => {
        if (index === videoIndex) {
          const updatedQuestions = video.test.questions.map((question, idx) => {
            if (idx === questionIndex) {
              const newOption = {
                id: crypto.randomUUID(),
                textOption: "",
                imageOption: "",
              };
              return {
                ...question,
                options: [...question.options, newOption],
              };
            }
            return question;
          });

          return {
            ...video,
            test: {
              ...video.test,
              questions: updatedQuestions,
            },
          };
        }
        return video;
      });
      return { classVideos: updatedClassVideos };
    });
  },

  removeClassQuestionOptions: (videoIndex, questionIndex, optionIndex) => {
    set((state) => {
      const updatedClassVideos = state.classVideos.map((video, index) => {
        if (index === videoIndex) {
          const updatedQuestions = video.test.questions.map((question, idx) => {
            if (idx === questionIndex) {
              const updatedOptions = question.options.filter(
                (_, i) => i !== optionIndex
              );
              return { ...question, options: updatedOptions };
            }
            return question;
          });

          return {
            ...video,
            test: {
              ...video.test,
              questions: updatedQuestions,
            },
          };
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

  // Conclusion Videos

  addConclusionVideo: () => {
    set({ conclusionVideos: conclusionVideos.push(newConclusionVideo) });
  },
}));
