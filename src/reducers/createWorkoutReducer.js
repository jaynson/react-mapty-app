export default (state = null, action) => {
    switch (action.type) {
        case 'CREATE_WORKOUT':
            return action.payload;
        default:
            return state;
    }
}