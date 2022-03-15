import { combineReducers } from "redux";
import addToWorkoutListReducer from "./addToWorkoutListReducer";
import createWorkoutReducer from "./createWorkoutReducer";
import openWorkoutFormReducer from "./openWorkoutFormReducer";


export default combineReducers({
    workoutFormEvent: openWorkoutFormReducer,
    createdWorkout: createWorkoutReducer,
    workoutList: addToWorkoutListReducer
});