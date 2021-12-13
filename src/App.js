import './App.css'
import { Component } from 'react';
import SignUp from './components/SignUp'
import LogInForm from './components/LogInForm'

class App extends Component {

    state = {
        user: {}
    }

render(){
    return (
            <div className="App">
                <SignUp />
                <LogInForm />
            </div>
        );
    }
}
export default App;