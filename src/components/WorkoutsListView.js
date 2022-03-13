import React, { Component } from 'react';
import WorkoutForm from './WorkoutForm';

class WorkoutsListView extends Component {
    render() {
        return (
            <ul className='workouts'>
                <WorkoutForm />
            </ul>
        );
    }
}

export default WorkoutsListView;