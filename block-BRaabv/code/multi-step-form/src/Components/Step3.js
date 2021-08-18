import React from 'react';

class Step3 extends React.Component {
  render() {
    if (this.props.currentStep !== 3) {
      // Prop: The current step
      return null;
    }
    // The markup for the Step 1 UI
    return (
      <div className="form-group">
        <h2 className="text-lg font-bold mb-10">Checkbox</h2>
        <div className="flex justify-around image-option">
          <label className="flex w-1/2 h-60">
            <input type="radio" name="test" value="small" checked />
            <img src="/image1.jpg" alt="Select" />
          </label>
          <label className="flex w-1/2 h-60">
            <input type="radio" name="test" value="small" />
            <img src="/image2.jpg" alt="Select" />
          </label>
        </div>
        <div className="flex flex-col">
          <label className="text-lg mb-5 mt-5">
            <input type="radio" name="option" className="" />I want to add this
            option
          </label>
          <label className="text-lg mb-5 mt-5">
            <input type="radio" name="option" />
            Let me click on this checkbox and choose some cool stuf
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-600 px-3 py-2 rounded float-right mr-10 mt-5"
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Step3;
