import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StreamList from "./Streams/StreamList";
import StreamCreate from "./Streams/StreamCreate";
import StreamEdit from "./Streams/StreamEdit";
import StreamDelete from "./Streams/StreamDelete";
import StreamShow from "./Streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
