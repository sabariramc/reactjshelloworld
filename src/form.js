import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            fruit: [],
            isGoing: false

        }
        this.handleFormEvent = this.handleFormEvent.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleFormEvent(e) {
        let value = null;
        if (e.target.multiple) {
            var options = e.target.options;
            value = [];
            for (let option of options) {
                if (option.selected) {
                    value.push(option.value);
                }
            }
        }
        else if (e.target.type === "text") {
            value = e.target.value
        }
        else if (e.target.type === "checkbox")
            value = e.target.checked
        this.setState({
            [e.target.name]: value
        })

    }

    handleSubmit(event) {
        console.log(event)
        alert('An essay was submitted: ' + this.state);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} method="post">
                <input type="text" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleFormEvent} />
                <input type="text" name="lname" placeholder="Last Name" value={this.state.lname} onChange={this.handleFormEvent} />
                <select multiple={true} value={this.state.fruit} name="fruit" onChange={this.handleFormEvent}>
                    <option value="graphfruit">Graph Fruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleFormEvent} />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

class FormChild extends Form {
}

ReactDOM.render(
    <FormChild />
    , document.getElementById("form")
)