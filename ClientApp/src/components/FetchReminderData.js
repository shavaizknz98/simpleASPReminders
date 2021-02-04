import React, { Component } from 'react';

export class FetchReminderData extends Component {
    static displayName = FetchReminderData.name;

    constructor(props) {
        super(props);
        this.state = { reminders: [], loading: true };
        this.deleteReminder = this.deleteReminder.bind(this);//Binding
    }

    componentDidMount() {
        this.populateRemindersData();
    }

    deleteReminder(reminder) {
        fetch('/api/reminders/' + reminder.id, { method: 'DELETE' })
            .then(() => this.populateRemindersData());
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created On</th>
                        <th>Remind On</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.reminders.map(reminders =>
                        <tr key={reminders.id}>
                            <td>{reminders.name}</td>
                            <td>{reminders.createdOn}</td>
                            <td>{reminders.reminderDatetime}</td>
                            <td><button onClick={() => this.deleteReminder(reminders)}>
                                Delete
                            </button></td>
                        </tr>
                    )}
                </tbody>
            </table>;

        return (
            <div>
                <h1 id="tabelLabel" >My Reminders</h1>
                <p>Here are your reminders.</p>
                {contents}
            </div>
        );
    }

    async populateRemindersData() {
        const response = await fetch('/api/reminders');
        const data = await response.json();
        this.setState({ reminders: data, loading: false });
    }
}
