export default (state = null, action) => {
    switch (action.type) {
        case 'DISPLAY_MAP':
            return action.payload;
        default:
            return state;

    }
}