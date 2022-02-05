import './App.css';
import FooterComponent from './components/CommonComponents/FooterComponent';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import AboutUsComponent from './components/CommonComponents/AboutUsComponent';
import ContactUsComponent from './components/CommonComponents/ContactUsComponent';
import AllJobsComponent from './components/GuestUserComponent/AllJobsComponent';
import HomeComponent from './components/GuestUserComponent/HomeComponent';
import LoginJobProviderComponent from './components/JobProviderComponents/LoginJobProviderComponent';
import CreateJobProviderComponent from './components/JobProviderComponents/CreateJobProviderComponent';
import CardComponent from './components/PaymentComponents/CardComponent';
import CreatePaymentComponent from './components/PaymentComponents/CreatePaymentComponent';
import JobSeekerRegistrationComponent from './components/JobSeekerComponents/JobSeekerRegistrationComponent';
import JobSeekerLogin from './components/JobSeekerComponents/JobSeekerLogin';
import JobProviderHomeComponent from './components/JobDetailsComponents/JobProviderHomeComponent';
import UpdateJobComponent from './components/JobDetailsComponents/UpdateJobComponent';
import PostJobDetailsComponent from './components/JobDetailsComponents/PostJobDetailsComponent';
import JobDetailsJobsComponent from './components/JobDetailsComponents/JobDetailsJobsComponent';
import AdminLoginComponent from './components/AdminComponents/AdminLoginComponent';
import ListJobComponent from './components/JobSeekerComponents/ListJobComponent';
import CreateAppliedJobComponent from './components/JobSeekerComponents/CreateAppliedJobComponent';
import ViewJobDetailsComponent from './components/GuestUserComponent/ViewJobDetailsComponent';
import AdminHomeComponent from './components/AdminComponents/AdminHomeComponent';
import ViewJobPostedComponent from './components/AdminComponents/ViewJobPostedComponent';
import ViewJobSeekerComponent from './components/AdminComponents/ViewJobSeekerComponent';
import JobSeekerHomeComponent from './components/JobSeekerComponents/JobSeekerHomeComponent';
import ViewJobProvidersComponent from './components/AdminComponents/ViewJobProvidersComponent';
import ViewJobProviderComponent from './components/JobProviderComponents/ViewJobProviderComponent';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/about-us" component={AboutUsComponent} />
            <Route exact path="/contact-us" component={ContactUsComponent} />
            <Route exact path="/allJobs" component={AllJobsComponent} />
            <Route exact path="/view-job/:jid" component={ViewJobDetailsComponent} />
            <Route exact path='/Login' component={LoginJobProviderComponent} />
            <Route exact path='/registrationOrEdit/:jp_id' component={CreateJobProviderComponent} />
            <Route exact path="/payments" component={CardComponent} />
            <Route exact path="/addPayment" component={CreatePaymentComponent} />
            <Route exact path='/JobSeekerRegistration' component={JobSeekerRegistrationComponent} />
            <Route exact path='/seekerlogin' component={JobSeekerLogin} />
            <Route exact path='/seekerJobs' component={ListJobComponent} />
            <Route exact path='/applyJob' component={CreateAppliedJobComponent} />
            <Route exact path="/providerHome/:id" component={JobProviderHomeComponent} />
            <Route exact path="/view-provider/:jp_id" component={ViewJobProviderComponent} />
            <Route exact path="/postJob" component={PostJobDetailsComponent} />
            <Route exact path="/providerJobs" component={JobDetailsJobsComponent} />
            <Route exact path="/updateJob/:id" component={UpdateJobComponent} />
            <Route exact path="/adminLogin" component={AdminLoginComponent} />
            <Route exact path="/adminHome" component={AdminHomeComponent} />
            <Route exact path="/adminJobs" component={ViewJobPostedComponent} />
            <Route exact path="/adminJobProvider" component={ViewJobProvidersComponent} />
            <Route exact path="/adminJobSeeker" component={ViewJobSeekerComponent} />
            <Route exact path="/seekerHome" component={JobSeekerHomeComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
