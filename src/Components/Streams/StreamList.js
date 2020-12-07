import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetch_Stream_List } from "../../Actions/index";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetch_Stream_List();
  }
  renderStreamsList() {
    const { streams } = this.props;
    return streams.map((item) => {
      return (
        <div key={item.id} className="item">
          {/*pass the item(streams) to renderEdit_And_DeleteButton to callback function */}
          {this.renderEdit_And_DeleteButton(item)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {item.title}
            <div className="description">{item.description}</div>
          </div>
        </div>
      );
    });
  }

  renderEdit_And_DeleteButton(streamsData) {
    const { oAuthUserId } = this.props;
    if (streamsData.userId === oAuthUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/streams/edit/${streamsData.id}`}
            className="ui button primary"
          >
            Edit
          </Link>
          <Link to="/streams/delete" className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  }

  render_Create_Stream() {
    const { oAuthUserId } = this.props;
    if (oAuthUserId) {
      return (
        <div>
          <Link className="ui button primary" to={`/streams/new`}>
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>StreamList</h1>
        <div className="ui celled list">{this.renderStreamsList()}</div>
        <div style={{ textAlign: "right" }}>{this.render_Create_Stream()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    oAuthUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { fetch_Stream_List })(StreamList);
