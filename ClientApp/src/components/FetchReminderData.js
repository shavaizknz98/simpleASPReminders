import React, { Component } from 'react';
import 'reactjs-popup/dist/index.css';
import { AddReminder } from './AddReminder.js';
import { EditReminder } from './EditReminder.js';

import Moment from 'react-moment';

export class FetchReminderData extends Component {
    static displayName = FetchReminderData.name;

    constructor(props) {
        super(props);
        this.state = { reminders: [], loading: true };

        //Binding to set 'this' context, alternatively () => function can be used too
        this.deleteReminder = this.deleteReminder.bind(this);
        this.onAddReminder = this.onAddReminder.bind(this);
        this.onEditReminder = this.onEditReminder.bind(this);

    }

    //Render table from api reminder get 
    componentDidMount() {
        this.populateRemindersData();
    }

    //Delete reminder from api delete route and re-populate table
    deleteReminder(reminder) {
        fetch('/api/reminders/' + reminder.id, { method: 'DELETE' })
            .then(() => this.populateRemindersData());
    }

    //Re-populate table when new reminder added
    onAddReminder() {
        this.populateRemindersData();
    }

    //Re-populate table when old reminder edited
    onEditReminder() {
        this.populateRemindersData();
    }



    render() {
        let contents = this.state.loading //Show loading until api GET has set reminders state
            ? <p><em>Loading...</em></p>
            : <table className='table table-striped' aria-labelledby="tabelLabel"> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created/Updated On</th>
                        <th>Remind On</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.reminders.map(reminders =>
                        <tr key={reminders.id}>
                            <td>{reminders.name}</td>
                            <td><Moment date={reminders.createdOn} format="d/MM/YYYY hh:mm A" /></td>
                            <td><Moment date={reminders.reminderDatetime} format="d/MM/YYYY hh:mm A" /></td>
                            <td>
                                <button onClick={() => this.deleteReminder(reminders)}>
                                    Delete
                            </button>&nbsp;<EditReminder onEditReminder={this.onEditReminder} reminder={reminders} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>;

        return (
            <div>
                <h1 id="tabelLabel" >My Reminders</h1>
                <p>Here are your reminders.</p>
                <AddReminder onAddReminder={this.onAddReminder} />
                {contents}
            </div>
        );
    }

    //use API Get route to set reminders state, set loading to false when finished.
    async populateRemindersData() {
        const response = await fetch('/api/reminders');
        const data = await response.json();
        this.setState({ reminders: data, loading: false });
    }
}
