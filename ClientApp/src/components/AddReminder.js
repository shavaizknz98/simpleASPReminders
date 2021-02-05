import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Row, Form, Col, Button } from 'react-bootstrap';
import $ from 'jquery';

/*
        Purpose of this component is to create a popover with a form that can be used to fill out reminder information.
        Once the form is submitted a POST request is sent to the api and then onAddReminder from FetchReminderData is called.
 */

class AddReminder extends Component {

    constructor(props) {
        super(props);

        //Set initial state to empty since it is Add a new reminder
        this.initialState = {
            "name": "",
            "reminderDatetime": ""
        }

        this.state = this.initialState;

        //Event binding this 'this' context
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

    //Send json data from state to POST request on api. 
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        //Create JSON object for API
        var data = JSON.stringify(this.state);
        $.ajax({
            type: 'POST',
            url: '/api/Reminders',//RemindersController
            data: data,
            async: false,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                alert("Reminder Created");
            }
        });

        //Call onAddReminder() from FetchReminderData component
        this.props.onAddReminder();
    }

    //Render AddForm
    render() {
        return (
            <div>
                <Popup contentStyle={{ width: '300px' }} trigger={<button>Add Reminder</button>} position="right center">
                    <h3>Add Reminder</h3>
                    <form id='addReminderForm'>
                        <input name="name" type="text" onChange={this.handleChange} />
                        <br />
                        <br />
                        <input name="reminderDatetime" type="datetime-local" onChange={this.handleChange} />
                        <br />
                        <br />
                        <input type="submit" onClick={this.handleSubmit} />
                    </form>
                </Popup>
            </div>
        );
    }
}

export { AddReminder }
