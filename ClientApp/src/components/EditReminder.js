import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import $ from 'jquery';


/*
        Purpose of this component is to create a popover with a form that has reminder information prefilled.
        Once the form is submitted a PUT request is sent to the api and then onEditReminder from FetchReminderData is called.
 */
class EditReminder extends Component {

    constructor(props) {
        super(props);

        //Set initial state from prop
        this.initialState = {
            "id": props.reminder.id,
            "name": props.reminder.name,
            "reminderDatetime": props.reminder.reminderDatetime
        }

        //Initial state set to prop data set 
        this.state = this.initialState;

        //Binding events, to set 'this' context
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //When form input changed, set state for whichever has the same name
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    //Send json data from state to PUT request on api. 
    handleSubmit(event) {
        event.preventDefault();

        //Create JSON Object for API.
        var data = JSON.stringify(this.state);
        $.ajax({
            type: 'PUT',
            url: '/api/Reminders/' + this.props.reminder.id, //RemindersController
            data: data,
            async: false,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                alert("Reminder Edited");
            }
        });

        //Call onEditReminder from FetchReminderData component
        this.props.onEditReminder();
    }

    //Render Edit Form
    render() {
        return (
            <div style={{ display: "inline-block" }}>
                <Popup contentStyle={{ width: '300px' }} trigger={<button>Edit Reminder</button>} position="right center">
                    <h3>Edit Reminder</h3>
                    <form id='editReminderForm'>
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        <br />
                        <br />
                        <input name="reminderDatetime" type="datetime-local" value={this.state.reminderDatetime} onChange={this.handleChange} />
                        <br />
                        <br />
                        <input type="submit" onClick={this.handleSubmit} />
                    </form>
                </Popup>
            </div>
        );
    }
}

export { EditReminder }
