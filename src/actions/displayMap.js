import { showMap } from "../utils/helper";

export default (coords) => async dispatch => {
    const map = await showMap(coords);
    console.log('PROMISE', map);
    dispatch({
        type: 'DISPLAY_MAP',
        payload: map
    });
};