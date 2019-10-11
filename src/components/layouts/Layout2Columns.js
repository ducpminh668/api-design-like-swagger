import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import MenuLeft from "../baseComponent/MenuLeft/MenuLeft";
import MainContent from "../baseComponent/MainContent/MainContent";

class Layout2Columns extends Component {
  render() {
    return (
      <Grid container item xs={12}>
        <Grid item sm={2} xs={12}>
          <MenuLeft />
        </Grid>
        <Grid item sm={10} xs={12}>
          <MainContent>{this.props.route}</MainContent>
        </Grid>
      </Grid>
    );
  }
}

export default Layout2Columns;
