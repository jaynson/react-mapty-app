import { combineReducers } from "redux";

const fakeReducer = (state, action) => {
    return '123';
};

export default combineReducers({
    fake: fakeReducer
});