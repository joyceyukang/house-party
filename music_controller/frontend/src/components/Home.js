import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateJoinPage from "./CreateRoomPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  Routes,
} from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    // calling parent constructor
    super(props);
  }

  render() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<p>This is the home page</p>}/>
                <Route path="/join" component={RoomJoinPage}/>
                <Route path="/create" component={CreateJoinPage}/>
            </Routes>
        </Router>
    )
  }
}
