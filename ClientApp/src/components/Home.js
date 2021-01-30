import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1>Hello, world!</h1>
            <h2>This is my first Web Application made using ASP.NET and React.</h2>
            <p>It is a reminders application that offers the following features:
                <ul>
                            <li>Create a reminder</li>
                            <li>Edit a reminder</li>
                            <li>Be notified before or duing reminder events</li>
                            <li>More features to <strong>come...</strong></li>
                </ul>
             I have followed <a href="https://www.youtube.com/watch?v=2yHwaEZF98U&t=615s" target='_blank'>this</a> guide to kickstart this mini project
            </p>
      </div>
    );
  }
}
