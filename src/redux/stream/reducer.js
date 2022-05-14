import { APP_STATES } from "./types";

const INITIAL_STATE = {
    appState: APP_STATES.API_KEY,
    apiKey: null,
    streamId: null,
    playbackId: null,
    streamKey: null,
    streamIsActive: false,
    error: null,
  };
  
  const streamReducer = (state = INITIAL_STATE,  action) => {
    switch (action.type) {
      case "SUBMIT_API_KEY":
        return {
          ...state,
          appState: APP_STATES.CREATING_STREAM,
          apiKey: action.payload.apiKey,
        };
      case "CREATE_CLICKED":
        return {
          ...state,
          appState: APP_STATES.CREATING_STREAM,
        };
      case "STREAM_CREATED":
        return {
          ...state,
          appState: APP_STATES.WAITING_FOR_VIDEO,
          streamId: action.payload.streamId,
          playbackId: action.payload.playbackId,
          streamKey: action.payload.streamKey,
        };
      case "VIDEO_STARTED":
        return {
          ...state,
          appState: APP_STATES.SHOW_VIDEO,
          streamIsActive: true,
        };
      case "VIDEO_STOPPED":
        return {
          ...state,
          appState: APP_STATES.WAITING_FOR_VIDEO,
          streamIsActive: false,
        };
      case "RESET_DEMO_CLICKED":
        return {
          ...INITIAL_STATE,
        };
      case "INVALID_API_KEY":
        return {
          ...state,
          error: action.payload.message,
        };
      default:
        return state;
    }
  };
  export default streamReducer;