import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from 'routes/Dashboard';
import AboutUs from 'routes/AboutUs';
import SignIn from 'routes/Auth/SignIn';
import SignUp from 'routes/Auth/SignUp';
import PrivacySettings from 'routes/PrivacySettings';
import Paymentdetails from 'routes/PaymentDetails';
import SubscriptionPlans from 'routes/SubscriptionPlans';
import ForgetPasswordPage from 'routes/Auth/ForgetPassword';
import ResetPasswordPage from 'routes/Auth/ResetPassword';
import './style.scss';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/about" component={AboutUs} />
      <Route path="/login" component={SignIn} />
      <Route path="/forget-password" component={ForgetPasswordPage} />
      <Route path="/reset-password" component={ResetPasswordPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/privacy" component={PrivacySettings} />
      <Route path="/payment" component={Paymentdetails} />
      <Route path="/subscription" component={SubscriptionPlans} />
      <Redirect exact from="/" to="/login" />
    </Switch>
  </main>
);

export default App;
