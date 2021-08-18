import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class MasterForm extends React.Component {
  constructor(props) {
    super(props);
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      address: '',
      message: '',
      choice: 1,
    };
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, firstName, lastName, dateOfBirth, message } = this.state;
    alert(`Your registration detail: \n 
      First Name: ${firstName}\n
      Last Name: ${lastName}\n
      Email: ${email} \n 
      Date of Birth: ${dateOfBirth} \n
      Message: ${message}`);
  };

  _next() {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="bg-blue-600 px-3 py-2 rounded-md mt-5 mb-10"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button
          className="bg-blue-600 px-3 py-2 rounded-md mt-5 float-right mr-10 mb-5"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <>
        <div className="flex justify-between w-5/6 mx-auto rounded-md bg-green-200">
          <div className="form-img">
            <img src="./form-img.jpg" alt="Form" className="rounded-md" />
          </div>

          <div className="w-2/3">
            <div className="flex p-5 border-b-2 mb-10">
              {['Sign up', 'Message', 'Checkbox'].map((elm, i) => {
                return (
                  <h3 className="text-lg font-bold mr-10 ">
                    <span
                      className={
                        this.state.currentStep === i + 1
                          ? 'active px-3 py-2 text-white rounded'
                          : 'px-3 py-2 bg-gray-100 rounded'
                      }
                    >
                      {i + 1}
                    </span>{' '}
                    {elm}
                  </h3>
                );
              })}
            </div>
            <div>
              <p>
              Step {this.state.currentStep}/3
              </p>

              <form onSubmit={this.handleSubmit}>
                {/* // Render the form steps and pass in the required props */}
                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  username={this.state.username}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  password={this.state.password}
                />

                {this.previousButton}
                {this.nextButton}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MasterForm;
