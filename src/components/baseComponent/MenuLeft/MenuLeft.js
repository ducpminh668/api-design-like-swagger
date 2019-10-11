import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer";
import "./MainLeft.css";
import MenuItem from "./MenuItem/MenuItem";
import { connect } from "react-redux";

class MenuLeft extends Component {
  render() {
    return (
      <div className="MenuLeft">
        <div className="search-left">
          <Paper className="input-container test">
            <TemporaryDrawer />
            <InputBase
              className="input"
              placeholder="Tìm kiếm api"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton aria-label="search" className="btn-search">
              <SearchIcon />
            </IconButton>
            <Divider orientation="vertical" />
          </Paper>
        </div>
        <div className="list-menu-item">
          {this.props.apiReducer.apiData.map((item, index) => (
            <MenuItem key={index} data={item} index={index} />
          ))}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     getDepartmentDetail: id => dispatch(getDepartmentDetail(id))
//   };
// };

export default connect(
  mapStateToProps,
  null
)(MenuLeft);
