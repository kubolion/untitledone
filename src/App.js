import Header from "./components/Header/Header";
import InfoData from "./components/InfoData/InfoData";
import "./App.css"
import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'posts',
            data : []
        }
    }
    handeChangeState = (display) => {
        // console.log(this.state.data)
        console.log(display)
        fetch(`https://jsonplaceholder.typicode.com/${display}`)
            .then(response =>response.json())
            .then(data => this.setState({
                display,
                data
            }))
            .catch(e => {
                this.setState({
                    display: 'posts',
                    data : []
                })
            })



}
componentDidMount() {
        this.handeChangeState("posts")
    }

    render() {
        // this.handeChangeState("posts")
        return (
            <div className="wrapper" >
                <Header changeState={this.handeChangeState}/>
                <InfoData stateApp={this.state}/>
            </div>
        );
    }
}

export default App;
