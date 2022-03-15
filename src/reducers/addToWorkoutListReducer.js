export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_WORKOUT_LIST':
            return [action.payload, ...state];
        default:
            return state;
    }
}