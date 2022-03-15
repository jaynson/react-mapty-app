import L from 'leaflet';
import { MAP_ZOOM_LEVEL } from './config';

export const getLocation = async () => {

    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        }
    });
};

export let _MAP;

export const showMap = (coords) => {

    return new Promise((resolve, reject) => {
        _MAP = L.map('map').setView(coords, MAP_ZOOM_LEVEL);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(_MAP);

        if (!_MAP) {
            reject('Could not display map!');
        }

        resolve(_MAP);
    });

};

export const renderMarker = (workout) => {
    L.marker(workout.coords).addTo(_MAP)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`,

        }))
        .setPopupContent(
            `${workout.type === 'running' ? '🏃🏾' : '🚴🏾'} ${workout.description}`
        )
        .openPopup();

};

class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;

    constructor(coords, distance, duration) {
        this.coords = coords; // [lat, lng]
        this.distance = distance; // in km
        this.duration = duration; // in min
    }

    _setDescription() {
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]
            } ${this.date.getDate()}`;
    }

    click() {
        this.clicks++;
    }
}

export class Running extends Workout {
    type = 'running';

    constructor(coords, distance, duration, cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }

    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}

export class Cycling extends Workout {
    type = 'cycling';

    constructor(coords, distance, duration, elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        // this.type = 'cycling';
        this.calcSpeed();
        this._setDescription();
    }

    calcSpeed() {
        // km/h
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

export const validInputs = (...inputs) =>
    inputs.every(inp => Number.isFinite(inp));
export const allPositive = (...inputs) =>
    inputs.every(inp => inp > 0);