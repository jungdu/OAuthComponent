import React, { Component } from "react";
import { connect } from "react-redux";
import { clientId } from "../config";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    console.log("In render ", this.props.isSignedIn);
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return <button onClick={this.onSignOutClick}>Sign Out</button>;
    } else {
      return <button onClick={this.onSignInClick}>Sign In</button>;
    }
  }

  render() {
    return <div> {this.renderAuthButton()} </div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
