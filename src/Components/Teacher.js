import React from 'react';


export default class Teacher extends React.Component {
    sendDataToKid() {
        return ["Step 3", "Step 4", "Step 5"]
    }
    render() {
        return (
            <button onClick={() => this.props.steps(this.sendDataToKid())}>Get Help From Teacher</button>
        );
    }
}
