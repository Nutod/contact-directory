import React from "react";
import SignUp from "../components/auth/SignUp";
import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from "../components/auth/SignIn";
import AddNewContact from "../components/contact/AddNewContact";

export default function Layout() {
  return (
    <div className="App">
        <Switch>
            <Route path="/auth/sign-up" component={SigUp} />
            <Route path="/auth/sign-in" component={SignIn} />
            <Route path="/contact/add-new" component={AddNewContact} />
            <Route path="/" exact component={SignUp} />
            {/* Add the other routes here */}
        </Switch>
    </div>
  );
}
