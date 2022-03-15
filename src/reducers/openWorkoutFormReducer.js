export default (state = {
    isOpen: false,
    eventData: null
}, action) => {
    switch (action.type) {
        case 'OPEN_WORKOUT_FORM':
            return action.payload;
        default:
            return state;
    }
}