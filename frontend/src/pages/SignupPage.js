import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';

// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik, Form, Field } from 'formik';
import { withRouter } from 'react-router-dom';

class SignupPage extends Component {

  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    return (
      <div className="signup">
        <h2>Signup</h2>
        <Formik
          // Sets up our default values
          initialValues={{ name: '', email: '', password: '', city: '' }}

          // Validates our data
          // validate={values => {
          //   const errors = {};
          //   console.log(values);
          //   if (!values.email) {
          //     errors.email = 'Required';
          //   }
          //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          //     errors.email = 'You must supply a valid email address';
          //   }
          //   if (values.password.length < 8) {
          //     errors.password = 'Passwords must be at least 8 characters';
          //   }
          //   if (values.email === values.password) {
          //     errors.password = 'Your password shouldn\'t be the same as your email';
          //   }
          //   return errors;
          // }}

          // Handles our submission
          onSubmit={(values, actions) => {
            // This is where you could wire up axios or superagent
            // console.log('Submitted Values:', values);
            // Simulates the delay of a real request
            // setTimeout(() => actions.setSubmitting(false), 3 * 1000);

            // console.log('Submitted Values:', values);
            this.props.setUser(values.name)
              .then(() => this.props.history.push(`/`))
          }}
        >
          {formikProps => (
            <Form className="signup-form">
              <div className="user-name">
                {/* <Field name="name" autoFocus={(window.innerWidth > 500)} type="text"
                  placeholder="Write your name" /> */}
                <Field name="name" placeholder="Write your name" type="text"
                  autoFocus={(window.orientation === undefined &&
                    navigator.userAgent.indexOf('Mobile') === -1)} />
              </div>

              {/* <div>
                <Field name="city" component="select">
                  <option value="Haifa1">Haifa1</option>
                  <option value="TLV">TLV</option>
                </Field><br />

                <label htmlFor="email">Email </label>
                <Field name="email" /><br />
                {formikProps.errors.email && formikProps.touched.email && (
                  <div style={{ color: 'red' }}>
                    {formikProps.errors.email}
                  </div>
                )}

                <label htmlFor="password">Password </label>
                <Field name="password" type="password" />
                {formikProps.errors.password && formikProps.touched.password && (
                  <div style={{ color: 'red' }}>
                    {formikProps.errors.password}
                  </div>
                )}
              </div> */}
              <div className="approves-btn flex wrap space-between">
                <input className="reset" type="reset" value="Reset"
                  onClick={formikProps.handleReset}
                  disabled={!formikProps.dirty || formikProps.isSubmitting}
                />

                <input className="submit" type="submit" value="Enter!" />
              </div>

            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return {
  }
}

// export default SignupPage
export default connect(mapStateToProps, actions)(SignupPage)

