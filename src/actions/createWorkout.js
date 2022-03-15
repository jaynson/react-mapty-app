import { allPositive, Cycling, Running, validInputs } from "../utils/helper";

export default (formData, coords) => {
    let workout;
    // Create workout
    if (formData.type === 'running') {
        const { distance, duration, cadence } = formData;

        // Check Validity
        if (!validInputs(+distance, +duration, +cadence) ||
            !allPositive(+distance, +duration, +cadence)) {
            throw new Error('Invalid Input');
        }

        workout = new Running(coords, +distance, +duration, +cadence);
    }

    if (formData.type === 'cycling') {
        const { distance, duration, elevation } = formData;

        // Check Validity
        if (!validInputs(+distance, +duration, +elevation) ||
            !allPositive(+distance, +duration, +elevation)) {
            throw new Error('Invalid Input');
        }

        workout = new Cycling(coords, +distance, +duration, +elevation);
    }

    return {
        type: 'CREATE_WORKOUT',
        payload: workout
    };

};