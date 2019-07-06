import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';

// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik, Form, Field } from 'formik';
// import { withRouter } from 'react-router-dom'; // Not neccerry

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
          initialValues={{ name: '', code: '' }}

          // Validates our data
          validate={values => {
            const errors = {};
            if (values.name.length < 3) {
              errors.name = 'Name must be at least 3 characters';
            }
            if (values.code.length < 5) {
              errors.code = 'Code must be at least 5 characters';
            }
            if (values.name === values.code) {
              errors.code = 'Your Code shouldn\'t be the same as your Name';
            }
            return errors;
          }}

          // Handles our submission
          onSubmit={(values, actions) => {
            this.props.newUserEnter({ name: values.name, code: values.code })
              .then(() => this.props.history.push(`/`))
          }}
        >
          {formikProps => (
            <Form className="signup-form">

              <div className="user-details">
                <div style={{
                  textAlign: 'left', paddingLeft: '8px', fontWeight: 'bold', color: '#444444'
                }}>Name</div>
                {/* <Field name="name" autoFocus={(window.innerWidth > 500)} type="text"
                  placeholder="Write your name" /> */}
                <Field name="name" placeholder="Write your name"
                  autoFocus={(window.orientation === undefined &&
                    navigator.userAgent.indexOf('Mobile') === -1)} />
                <div style={{ color: 'red', height: '20px' }}>
                  {formikProps.errors.name && formikProps.touched.name && (
                    <label>{formikProps.errors.name}</label>
                  )}
                </div>
              </div>

              <div className="user-details">
                <div style={{
                  textAlign: 'left', paddingLeft: '8px', fontWeight: 'bold', color: '#444444'
                }}>Code</div>
                <Field name="code" placeholder="Select a code - at least 5 Chars" type="password" />
                <div style={{ color: 'red', height: '20px' }}>
                  {formikProps.errors.code && formikProps.touched.code && (
                    <label>{formikProps.errors.code}</label>
                  )}
                </div>
              </div>

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

