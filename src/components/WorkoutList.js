import React, { Component } from 'react';
import { connect } from 'react-redux';
import WorkoutView from './WorkoutView';

class WorkoutList extends Component {


    componentDidUpdate = () => {
        if (this.props.workouts.length > 0) {
            localStorage.setItem('workouts', JSON.stringify(this.props.workouts));
        }
    };

    generateList = () => {
        if (this.props.workouts.length > 0) {
            return this.props.workouts.map(item => {
                return (
                    <WorkoutView workout={ item } key={ item.id } />
                );
            });
        }
    };

    render() {
        return (
            <React.Fragment>
                { this.generateList() }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        workouts: state.workoutList,
    };
};

export default connect(mapStateToProps)(WorkoutList);