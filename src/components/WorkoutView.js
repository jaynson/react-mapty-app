import React from 'react';

const WorkoutView = (props) => {

    return (
        <li className={ `workout workout--${props.workout.type}` } data-id={ props.workout.id }>
            <h2 className="workout__title">{ props.workout.description }</h2>
            <div className="workout__details">
                <span className="workout__icon">{ props.workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️' }</span>
                <span className="workout__value">{ props.workout.distance }</span>
                <span className="workout__unit">km</span>
            </div>
            <div className="workout__details">
                <span className="workout__icon">⏱</span>
                <span className="workout__value">{ props.workout.duration }</span>
                <span className="workout__unit">min</span>
            </div>
            <div className="workout__details">
                <span className="workout__icon">⚡️</span>
                <span className="workout__value">{ props.workout.speed?.toFixed(1) || props.workout.pace?.toFixed(1) }</span>
                <span className="workout__unit">{ props.workout.type === 'running' ? 'min/km' : 'km/h' }</span>
            </div>
            <div className="workout__details">
                <span className="workout__icon">{ props.workout.type === 'running' ? '🦶🏼' : '⛰' }</span>
                <span className="workout__value">{ props.workout.elevationGain || props.workout.cadence }</span>
                <span className="workout__unit">{ props.workout.type === 'running' ? 'spm' : 'm' }</span>
            </div>
        </li>
    );

};

export default WorkoutView;