import React from 'react';

export default class Kid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emotion: 'Nervous',
            danceSteps: [],
            currentStepIndex: 0,
            startedPerforming: false
        };
    }

    componentDidMount() {
        this.setState({
            danceSteps: ["Step 1", "Step 2"]
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, "===> props")
        console.log(state, "===> state")
        if(props.furtherSteps.length && state.danceSteps.length !== 5) {
            return {
                danceSteps: state.danceSteps.concat(props.furtherSteps),
                startedPerforming: true
            }
        }
        if (props.applaud !== false) {
            return {
                emotion: "Happy"
            }
        }
        return true
    }

    componentDidUpdate(oldProps , oldState) {
        console.log(oldProps.endi)
        if (oldProps.endi === 5) {
            this.qualified()
        }
    }

    qualified() {
        this.setState({ startedPerforming: false })
    }

    render() {
        const { dressColor } = this.props;
        const { danceSteps, emotion, startedPerforming, currentStepIndex } = this.state;
        return (
            <div>
                <div>dressColor: {dressColor}</div>
                <div style={{ backgroundColor: dressColor, width: 50, height: 50 }}></div>
                <div>Emotion: {emotion}</div>
                {startedPerforming &&
                    <div>
                        <div>Current Step: {danceSteps[currentStepIndex]}</div>
                        <button onClick={() => this.setState({ currentStepIndex: currentStepIndex + 1 })}>Perform Next Step</button>
                    </div>}
            </div>
        );
    }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
