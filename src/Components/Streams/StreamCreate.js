import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { add_Stream } from "../../Actions/index";

class StreamCreate extends React.Component {
  displayError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui negative message">
          <div className="header ">{error}</div>
        </div>
      );
    }
  };
  displayInputs = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />

        {this.displayError(meta)}
      </div>
    );
  };
  onSubmit = (details) => {
    console.log("details");
    this.props.add_Stream(details);
  };
  render() {
    return (
      <div>
        <h1>StreamCreate</h1>
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
const formContainer = reduxForm({
  form: "streamForms",
  validate,
})(StreamCreate);
export default connect(null, { add_Stream })(formContainer);
