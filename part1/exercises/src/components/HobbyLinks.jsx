import React from "react";
import classes from "./HobbyLinks.module.css";

export default function HobbyLinks() {
  const hobbyLinks = [
    "https://mostateparks.com/activity/hiking",
    "https://www.stlmag.com/family/ice-skating-rinks-st-louis/",
    "https://thenovelneighbor.com/events/2024-reading-challenge",
  ];
  return (
    <div className={classes.hobbySection}>
      <h3 className={classes.hobbyHeading}>My Hobbies</h3>
      <div className={classes.hobbyText}>
        <p>
          <a href={hobbyLinks[0]}>Hiking</a>
        </p>
        <p>
          <a href={hobbyLinks[1]}>Ice Skating</a>
        </p>
        <p>
          <a href={hobbyLinks[2]}>Reading</a>
        </p>
      </div>
    </div>
  );
}
