import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

import "./Main.css";
import TopPage from "./TopPage";
import New from "./New";
import AskPage from "./AskPage";
import Jobs from "./Jobs";
import ShowPage from "./ShowPage";
import UserPage from "./UserPage";
import StoryDetail from "./StoryDetail";
import Guidelines from "./static/Guidelines";
import NewsFaq from "./static/NewsFaq";
import Security from "./static/Security";
import List from "./static/List";
import Bookmarklet from "./static/Bookmarklet";
import Leaders from "./static/Leaders";

class Main extends Component {
  render() {
    return (
      <div className="main" id="new">
        <div className="head">
          <Header />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={TopPage} />
            <Route exact path="/newest" component={New} />
            <Route exact path="/ask" component={AskPage} />
            <Route exact path="/jobs" component={Jobs} />
            <Route exact path="/show" component={ShowPage} />
            <Route exact path="/user" component={UserPage} />
            <Route exact path="/item" component={StoryDetail} />
            <Route exact path="/newsguidelines" component={Guidelines} />
            <Route exact path="/newsfaq" component={NewsFaq} />
            <Route exact path="/security" component={Security} />
            <Route exact path="/lists" component={List} />
            <Route exact path="/bookmarklet" component={Bookmarklet} />
            <Route exact path="/leaders" component={Leaders} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
