import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openWorkoutFormAction, addToWorkoutListAction } from '../actions';
import { getLocation, renderMarker, _MAP, showMap } from '../utils/helper';

class MapView extends Component {


    componentDidMount = () => {
        this.renderMap();

        const data = JSON.parse(localStorage.getItem('workouts'));

        if (!data) return;
        data.forEach(work => {
            this.props.addToWorkoutListAction(work);
        });
    };


    renderMap = async () => {
        try {

            const locationResponse = await getLocation();
            const { latitude, longitude } = locationResponse.coords;
            const coords = [latitude, longitude];

            await showMap(coords);
            _MAP.on('click', mapEvent => {
                this.props.openWorkoutFormAction(true, mapEvent);
            });

            if (this.props.workouts.length > 0)
                this.props.workouts.forEach(
                    work => renderMarker(work)
                );

        } catch (err) {
            alert(err);
        }

    };

    render = () => {
        return (
            <div id='map'></div>
        );

    };


};

const mapStateToProps = (state) => {
    return {
        workouts: state.workoutList
    };
};



export default connect(mapStateToProps, {
    openWorkoutFormAction,
    addToWorkoutListAction
})(MapView);