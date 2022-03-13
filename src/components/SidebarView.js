import React, { Component } from 'react';
import Copyright from './Copyright';
import WorkoutsListView from './WorkoutsListView';

class SidebarView extends Component {
    render() {
        return (
            <div className='sidebar'>
                <img src='logo.png' alt='Logo' className='logo' />
                <WorkoutsListView />
                <Copyright />

            </div>
        );
    }
}

export default SidebarView;