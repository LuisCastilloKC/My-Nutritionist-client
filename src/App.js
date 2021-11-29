import { Component } from 'react';
import SignUp from './components/SignUp'

class App extends Component {

    state = {
        user: {}
    }

render(){
    return (
            <div className="App">
                <SignUp />
            </div>
        );
    }
}
export default App;