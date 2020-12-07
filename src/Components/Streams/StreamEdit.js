import React from "react";
import { connect } from "react-redux";
import { fetch_Single_Stream } from "../../Actions/index";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetch_Single_Stream(this.props.match.params.id);
  }
  // render_Single_Stream() {

  //   this.props.edit.map((item) => {
  //     return (
  //       <div key={item.id}>
  //         <i className="large middle aligned icon camera" />
  //         <div className="content">
  //           {item.title}
  //           <div className="description">{item.description}</div>
  //         </div>
  //       </div>
  //     );
  //   });
  // }
  render() {
    console.log(this.props);
    if (!this.props.edit) {
      return <p>....Loading</p>;
    }
    return (
      <div>
        <h1>StreamEdit</h1>
        <div>{this.props.edit.title}</div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    edit: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetch_Single_Stream })(StreamEdit);
