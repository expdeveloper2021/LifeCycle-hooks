
import React from 'react';

export default class Judge extends React.Component {
    constructor() {
        super()

        this.state = { stars: 0, available: false }
    }

    applaud() {
        //Send this applaud status to Kid.js
    }

    provideStars() {
        const { stars } = this.state;
        this.setState({ stars: stars + 1 })
    }

    shouldComponentUpdate(props, state) {
        if (state.stars > 5) {
            return false
        } else {
            return true
        }
    }

    render() {
        const { stars, available } = this.state;

        return (
            <div>
                <button type="button" onClick={() => this.props.asd(this.applaud())}>
                    Appreciate performance
          </button>
                <button type="button" onClick={() => this.props.ending(this.provideStars())}>
                    Provide stars
          </button>

                Kid is available: {available}

                Stars gained: {stars}
            </div>
        );
    }
}
