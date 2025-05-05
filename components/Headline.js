import React from "react";

import classes from "./Hedline.module.css"

export function Headline(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.page} Page</h1>
            <ol className={classes.headline}>
                <li className={classes.headline1}>
                    Get started by editing{" "}
                    {props.children}
                    .
                </li>
                <li className={classes.headline2}>
                    Save and see your changes instantly.
                </li>
            </ol>
        </div>


    );
}
