import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openWorkoutFormAction, createWorkoutAction, addToWorkoutListAction } from '../actions';
import L from 'leaflet';
import FormTextInput from './FormTextInput';
import { renderMarker } from '../utils/helper';

class WorkoutForm extends Component {
    state = { workoutType: 'running', clearForm: false };

    componentDidMount = () => {
        this.formRef = React.createRef();
    };

    componentDidUpdate = (prevProps, prevState) => {

        if (prevProps.workout !== this.props.workout) {
            renderMarker(this.props.workout);
            this.props.addToWorkoutListAction(this.props.workout);
        }

    };

    getFormData = () => {
        const formData = new FormData(this.formRef.current);
        const dataArr = [...formData];
        const data = Object.fromEntries(dataArr);
        return data;
    };

    onSubmitHandler = (e) => {

        e.preventDefault();
        try {
            const formData = this.getFormData();
            const { lat, lng } = this.props.formState.eventData.latlng;
            this.props.createWorkoutAction(formData, [lat, lng]);
            this.props.openWorkoutFormAction(false);
            this.setState({ clearForm: true });
        } catch (err) {
            alert(err);
        }
    };

    onTypeChangeHandler = (e) => {
        this.setState({ workoutType: e.target.value });
    };

    setForm = () => {
        this.setState({ clearForm: false });
    };

    render() {
        return (
            <form
                className={ `form ${this.props.formState.isOpen ? '' : 'hidden'}` }
                onSubmit={ this.onSubmitHandler }
                ref={ this.formRef }
            >
                <div className="form__row">
                    <label className="form__label">Type</label>
                    <select
                        className="form__input form__input--type"
                        onChange={ this.onTypeChangeHandler }
                        name='type'
                        defaultValue='running'
                    >
                        <option value="running">Running</option>
                        <option value="cycling">Cycling</option>
                    </select>
                </div>

                <FormTextInput
                    label='Distance'
                    type='distance'
                    placeHolder='km'
                    focused={ true }
                    clear={ this.state.clearForm }
                    setForm={ this.setForm }
                />
                <FormTextInput
                    label='Duration'
                    type='duration'
                    placeHolder='mins'
                    focused={ false }
                    clear={ this.state.clearForm }
                    setForm={ this.setForm }
                />
                <FormTextInput
                    label={ this.state.workoutType === 'running' ? 'Cadence' : 'Elev Gain' }
                    type={ this.state.workoutType === 'running' ? 'cadence' : 'elevation' }
                    placeHolder={ this.state.workoutType === 'running' ? 'steps/min' : 'meters' }
                    focused={ false }
                    clear={ this.state.clearForm }
                    setForm={ this.setForm }
                />
                <button className="form__btn">OK</button>

            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        formState: state.workoutFormEvent,
        workout: state.createdWorkout
    };
};

export default connect(mapStateToProps, {
    openWorkoutFormAction,
    createWorkoutAction,
    addToWorkoutListAction
})(WorkoutForm);