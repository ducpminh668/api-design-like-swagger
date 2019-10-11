import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { formatURL } from "../untils/untils";
import CustomizedTables from "../components/baseComponent/CustomizedTables/CustomizedTables";
import FullWidthTabs from "../components/baseComponent/FullWidthTabs/FullWidthTabs";
import { InputGroup, FormControl } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { sendRequest } from "../actions";
import ReactJson from "react-json-view";

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
      body: action.body,
      reponseSuccessExample: action.reponseSuccessExample,
      responseFail: action.responseFail
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
        title,
        body: action.body,
        reponseSuccessExample: action.reponseSuccessExample,
        responseFail: action.responseFail
      });
    }
  }
  _onSend = () => {
    let flag = true;
    this.state.body.forEach(item => {
      if (item.required) {
        if (document.getElementById(item.field).value === "") {
          document.getElementById(item.field).classList.add("invalid");
          flag = false;
        } else {
          document.getElementById(item.field).classList.remove("invalid");
        }
      }
    });
    if (flag) {
      const data = {};
      const method = this.state.action.method;
      const url = formatURL(
        this.props.apiReducer.baseURL,
        this.state.action.url
      );
      this.state.body.forEach(item => {
        data[item.field] = document.getElementById(item.field).value;
      });
      this.props.sendRequest({ data, method, url });
    }
  };
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
        <div className="respone-demo mt-2">
          <FullWidthTabs
            successExample={this.state.reponseSuccessExample}
            errorExample={this.state.responseFail}
          />
        </div>
        <div className="sample-request">
          <h5>Send a Sample Request</h5>
          {this.state.body.map((item, index) => {
            return (
              <InputGroup className="mb-3" key={index}>
                <label htmlFor="">{item.field}</label>
                <FormControl
                  className="ml-3"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  id={item.field}
                  size="sm"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">
                    {item.type}
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            );
          })}

          <div className="d-flex flex-row-reverse">
            <Button variant="contained" color="primary" onClick={this._onSend}>
              SEND
            </Button>
          </div>

          <div className="response">
            {this.props.apiReducer.response ? (
              <pre
                className="prettyprint language-json prettyprinted"
                data-type="json"
              >
                <div>Status: {this.props.apiReducer.response.statusCode}</div>
                <div>
                  Message: {this.props.apiReducer.response.statusMessage}
                </div>
                Response:
                <ReactJson
                  src={this.props.apiReducer.response.body}
                  theme="monokai"
                />
              </pre>
            ) : null}
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

const mapDispatchToProps = dispatch => {
  return {
    sendRequest: data => dispatch(sendRequest(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DetailApi));
