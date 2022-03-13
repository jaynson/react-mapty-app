import React, { Component } from 'react';
import FormTextInput from './FormTextInput';

class WorkoutForm extends Component {
    state = { workoutType: 'running' };

    render() {
        return (
            <form className='form hidden'>
                <div className="form__row">
                    <label className="form__label">Type</label>
                    <select className="form__input form__input--type">
                        <option value="running">Running</option>
                        <option value="cycling">Cycling</option>
                    </select>
                </div>

                <FormTextInput
                    label='Distance'
                    type='distance'
                    placeHolder='km'
                />
                <FormTextInput
                    label='Duration'
                    type='duration'
                    placeHolder='mins'
                />
                <FormTextInput
                    label={ this.state.workoutType === 'running' ? 'Cadence' : 'Elev Gain' }
                    type={ this.state.workoutType === 'running' ? 'cadence' : 'elevation' }
                    placeHolder={ this.state.workoutType === 'running' ? 'steps/min' : 'meters' }
                />
                <button className="form__btn">OK</button>

            </form>
        );
    }
}

export default WorkoutForm;