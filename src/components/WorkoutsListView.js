import React from 'react';
import { connect } from 'react-redux';
import { MAP_ZOOM_LEVEL } from '../utils/config';
import { _MAP } from '../utils/helper';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

const WorkoutsListView = (props) => {

    const onClickHandler = (e) => {
        const workoutEl = e.target.closest('.workout');
        if (!workoutEl) return;

        const workout = props.workouts.find(
            item => item.id === workoutEl.dataset.id
        );
        _MAP.setView(workout.coords, MAP_ZOOM_LEVEL, {
            animate: true,
            pan: {
                duration: 1,
            }
        });
    };

    return (
        <ul
            className='workouts'
            onClick={ onClickHandler }
        >
            <WorkoutForm />
            <WorkoutList />
        </ul>
    );

};

const mapStateToProps = (state) => {
    return {
        workouts: state.workoutList,
        // map: state.mapDisplay
    };
};

export default connect(mapStateToProps)(WorkoutsListView);