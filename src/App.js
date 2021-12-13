import './App.css'
import { Component } from 'react';
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'

class App extends Component {

    state = {
        user: {}
    }

render(){
    return (
            <div className="App">
                <SignUp />
                <LogIn />
            </div>
        );
    }
}
export default App;