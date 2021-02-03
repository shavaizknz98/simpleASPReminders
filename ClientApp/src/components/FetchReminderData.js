import React, { Component } from 'react';

export class FetchReminderData extends Component {
    static displayName = FetchReminderData.name;

    constructor(props) {
        super(props);
        this.state = { reminders: [], loading: true };
        //this.deleteReminder = this.deleteReminder.bind(this);//Binding
    }

    componentDidMount() {
        this.populateRemindersData();
    }

    //Binding function. 'this' represents function
    deleteReminder(id) {
        fetch('/api/reminders/' + id, { method: 'DELETE' })
            .then(() => window.location.reload(false));
    }

    static renderremindersTable(reminders, deleteReminder) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created On</th>
                        <th>Remind On</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reminders.map(reminders =>
                        <tr key={reminders.id}>
                            <td>{reminders.name}</td>
                            <td>{reminders.createdOn}</td>
                            <td>{reminders.reminderDatetime}</td>
                            <td><button onClick={() => deleteReminder(reminders.id)}>
                                Delete
                            </button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchReminderData.renderremindersTable(this.state.reminders, this.deleteReminder);

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
