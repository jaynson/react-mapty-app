export default (workout) => {
    return {
        type: 'ADD_TO_WORKOUT_LIST',
        payload: workout
    };
}