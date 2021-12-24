import './App.css'
import { Component } from 'react';
import SignUp from './components/SignUp'
import LogInForm from './components/LogInForm'
import Navigation from './components/Navigation';

class App extends Component {

    state = {
        user: {}
    }

render(){
    return (
            <div className="App">
                <Navigation/>
                <SignUp />
                <LogInForm />
                
            </div>
        );
    }
}
export default App;