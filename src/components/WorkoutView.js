import React, { Component } from 'react';

class WorkoutView extends Component {
    render() {
        return (
            <li class="workout workout--running" data-id="1234567890">
                <h2 class="workout__title">Running on April 14</h2>
                <div class="workout__details">
                    <span class="workout__icon">🏃‍♂️</span>
                    <span class="workout__value">5.2</span>
                    <span class="workout__unit">km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⏱</span>
                    <span class="workout__value">24</span>
                    <span class="workout__unit">min</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">⚡️</span>
                    <span class="workout__value">4.6</span>
                    <span class="workout__unit">min/km</span>
                </div>
                <div class="workout__details">
                    <span class="workout__icon">🦶🏼</span>
                    <span class="workout__value">178</span>
                    <span class="workout__unit">spm</span>
                </div>
            </li>
        );
    }
}

export default WorkoutView;