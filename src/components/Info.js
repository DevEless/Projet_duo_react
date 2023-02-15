import React from 'react';
import '../style/Info.css';

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Your name is: "{this.state.name}"
                    <br />
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <br />
                <label>
                    Your Email is: "{this.state.email}"
                    <br />
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                <br />
                <label>
                    Your phone number is: "{this.state.phone}"
                    <br />
                    <input type="text" value={this.state.phone} onChange={this.handlePhoneChange} />
                </label>
            </form>
        );
    }
}

export default Info;
