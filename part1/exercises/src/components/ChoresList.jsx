import React from "react";
import classes from "./ChoresList.module.css";

class ChoresList extends React.Component {
  render() {
    const chores = ["Sweep the floor", "Vacuum the stairs"];
    return (
      <div className={classes.choresSection}>
        <h3 className={classes.choresHeading}>Today's Chores</h3>
        <ol>
          <li className={classes.choresText}>{chores[0]}</li>
          <li className={classes.choresText}>{chores[1]}</li>
        </ol>
      </div>
    );
  }
}

export default ChoresList;
