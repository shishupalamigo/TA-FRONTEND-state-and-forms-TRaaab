import React from "react";

class Form1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: "",
            dateInput: "",
            textarea: ""
        }
        this.fileInput = React.createRef();
    }
    handleInput = ({target}) => {
        let {name, value} = target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.textInput + " " + this.state.dateInput + " " + this.state.textarea);
        console.log(this.fileInput.current.files[0].name);
    }

    render() {
        return (
            <div className="w-1/2 mx-auto">
            <form className="flex flex-col p-10 border" onSubmit={this.handleSubmit}>
                <label  htmlFor="textInput" className="text-lg ">Text Input</label>
                <input type="text" id="textInput" name="textInput"  className="p-3 rounded mb-8" onChange={this.handleInput} value={this.state.value}/>
                <label htmlFor="dateInput" className="text-lg">Date Input</label>
                <input type="date" id="dateInput" name="dateInput"  className="p-3 rounded mb-8" onChange={this.handleInput} value={this.state.value} />
                <label htmlFor="fileInput" className="text-lg">File Input</label>
                <input type="file" id="fileInput" name="fileInput"  className="p-3 rounded mb-8" onChange={this.handleInput} ref={this.fileInput} />
                <label htmlFor="readOnlyInput" className="text-lg">Read-Only-Input</label>
                <input type="text" id="readonlyInput" name="readOnlyInput" readOnly value="This can only be Read"  className="p-3 rounded mb-8" onChange={this.handleInput} />
                <label htmlFor="disabledInput" className="text-lg">Disabled Input</label>
                <input type="text" id="disabledInput" name="disabledInput" disabled  className="p-3 rounded mb-8" onChange={this.handleInput}/>
                <label htmlFor="textarea" className="text-lg">Textarea </label>
                <textarea id="textarea" className="p-3 rounded mb-8" onChange={this.handleInput} value={this.state.value}>

                </textarea>
                <label htmlFor="disabledTextarea">Textarea Disabled</label>
                <textarea id="disabledTextarea" disabled className="p-3 rounded mb-8" onChange={this.handleInput}>

                </textarea>
                <button type="submit" value="Submit" className="p-2 rounded bg-green-400 text-white font-bold">Submit</button>
            </form>
            </div>
        )
    }
}

export default Form1;