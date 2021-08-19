import React from 'react';

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 2 UI
    return (
      <div className="form-group">
        <h2 className="text-lg font-bold mb-10">Message</h2>
        <div className="flex flex-col">
          <label htmlFor="message" className="flex flex-col mb-10">
            Message
            <textarea
              className="p-3 w-2/3 h-40"
              id="message"
              name="message"
              placeholder="Enter Message"
              value={this.props.message} // Prop: The message input data
              onChange={this.props.handleChange} // Prop: Puts data into state
            />
          </label>

          <div className="flex justify-between w-2/3">
            <label htmlFor="choiceOne">
              <input type="radio" checked name="choice" id="choiceOne" />
              The Number one choice
            </label>

            <label htmlFor="choiceTwo">
              <input type="radio" name="choice" id="choiceTwo" />
              The Number two choice
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Step2;
