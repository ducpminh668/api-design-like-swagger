import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import "./MenuItem.css";

class MenuItem extends Component {
  render() {
    return (
      <ExpansionPanel className="MenuItem">
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{this.props.data.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className="list-action">
            {this.props.data.actions.map((item, index) => {
              return (
                <Link
                  to={`/detai-api/${this.props.index}/${item.id}`}
                  className="d-flex justify-content-between item"
                  key={item.id}
                >
                  <div>{item.name}</div>
                  <div>
                    <span className="badge badge-danger">{item.method}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default MenuItem;
