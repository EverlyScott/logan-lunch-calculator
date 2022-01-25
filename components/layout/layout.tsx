import React, { useEffect } from "react";
import styles from "../../styles/Layout.module.scss";
import { theme } from "../theme/theme";
import classNames from "classnames";
import { createStyles } from "@mui/styles";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    main: {
      backgroundColor: theme.palette?.background.default
    }
  });
});

const Layout: React.FC = ({ children }) => {
  const classes = useStyles(theme);

  return (
    <React.Fragment>
      <noscript>
        <style>
          {`body: { all: unset; } #main { display: none!important; }`}
        </style>
        <h1>Please enable JavaScript!</h1>
      </noscript>

      <div id="main" className={classNames((classes as any).main, styles.main)}>
        <main id="main" className="container pb-5 text-white">{children}</main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
