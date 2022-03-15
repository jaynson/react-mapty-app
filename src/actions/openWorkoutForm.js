export default (openForm, mapEv = null) => {
    return {
        type: 'OPEN_WORKOUT_FORM',
        payload: {
            isOpen: openForm,
            eventData: mapEv
        }
    };
}