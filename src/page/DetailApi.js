import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { formatURL } from "../untils/untils";
import CustomizedTables from "../components/baseComponent/CustomizedTables/CustomizedTables";

class DetailApi extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    const parentIndex = this.props.match.params.parentIndex;
    const item = this.props.apiReducer.apiData[parentIndex].actions;
    const title = this.props.apiReducer.apiData[parentIndex].title;
    const action = item.find(item => {
      return item.id === id;
    });
    this.state = {
      action,
      title,
      body: [
        {
          field: "grant_type",
          type: "String",
          description: "required"
        },
        {
          field: "scope",
          type: "String",
          description: "option"
        }
      ]
    };
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.match.params.parentIndex !==
        this.props.match.params.parentIndex ||
      nextProps.match.params.id !== this.props.match.params.id
    ) {
      const id = nextProps.match.params.id;
      const parentIndex = nextProps.match.params.parentIndex;
      const item = nextProps.apiReducer.apiData[parentIndex].actions;
      const title = nextProps.apiReducer.apiData[parentIndex].title;
      const action = item.find(item => {
        return item.id === id;
      });
      this.setState({
        action,
        title
      });
    }
  }
  _renderContent() {}
  render() {
    return (
      <div className="DetailApi">
        <h1>{this.state.title}</h1>
        <h3>{this.state.action.name}</h3>
        <div className="mb-1">
          <small>{this.state.action.description}</small>
        </div>
        <span className="type type__post">{this.state.action.method}</span>
        <pre
          className="prettyprint language-html prettyprinted"
          data-type="post"
        >
          <code>
            <span className="pln">
              {formatURL(this.props.apiReducer.baseURL, this.state.action.url)}
            </span>
          </code>
        </pre>
        <div className="table-group">
          <h5>Parameter</h5>
          <div className="table-responsive">
            <CustomizedTables
              header={["Field", "Type", "Description"]}
              body={this.state.body}
            />
          </div>
        </div>
        <div className="table-group">
          <h5>Success</h5>
          <div className="table-responsive">
            <CustomizedTables
              header={["Field", "Type", "Description"]}
              body={this.state.body}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apiReducer: state.apiReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(DetailApi));
