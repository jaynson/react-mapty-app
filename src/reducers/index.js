import { combineReducers } from "redux";
import addToWorkoutListReducer from "./addToWorkoutListReducer";
import createWorkoutReducer from "./createWorkoutReducer";
import displayMapReducer from "./displayMapReducer";
import openWorkoutFormReducer from "./openWorkoutFormReducer";


export default combineReducers({
    workoutFormEvent: openWorkoutFormReducer,
    mapDisplay: displayMapReducer,
    createdWorkout: createWorkoutReducer,
    workoutList: addToWorkoutListReducer
});