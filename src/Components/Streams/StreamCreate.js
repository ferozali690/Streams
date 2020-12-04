import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  displayError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };
  displayInputs = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        <p>
          <span>{meta.error}</span>
        </p>
        {this.displayError(meta)}
      </div>
    );
  };
  onSubmit(details) {
    console.log(details);
  }
  render() {
    return (
      <div>
        <p>StreamCreate</p>
        <form
          className="ui form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="title"
            component={this.displayInputs}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.displayInputs}
            label="Enter Description "
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "please enter the title";
  }
  if (!formValues.description) {
    errors.description = "please enter the description";
  }
  return errors;
};
export default reduxForm({
  form: "streamForms",
  validate,
})(StreamCreate);
