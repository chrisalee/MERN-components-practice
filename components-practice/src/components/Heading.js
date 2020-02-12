import React from 'react';

function Heading() {
    const firstName = "Chris"
    const date = new Date();
    const currentTime = date.getHours();

    const customGreeting = {
        color: ''
    }
    let greeting;
    if (currentTime < 12) {
        greeting = "Good Morning"
        customGreeting.color = 'red';
    } else if (currentTime < 18) {
        greeting = "Good Afternoon"
        customGreeting.color = 'green';
    } else {
        greeting = "Good Night"
        customGreeting.color = 'blue';
    }

    return (
        <h1 
            className="greetingheading" 
            style={customGreeting}> 
                {greeting} {firstName}!!!
        </h1>
    );

}

export default Heading;