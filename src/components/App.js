import React, { Component } from 'react';
import MapView from './MapView';
import SidebarView from './SidebarView';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <SidebarView />
                <MapView />
            </React.Fragment>
        );
    }
}

export default App;