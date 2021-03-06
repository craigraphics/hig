import { css, cx } from "emotion";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { ThemeContext } from "@hig/theme-context";

import stylesheet from "./SkeletonItem.stylesheet";

export default class SkeletonItem extends Component {
  static propTypes = {
    /** Sets height of the skeleton item */
    height: PropTypes.string,
    /** Sets max width of the skeleton item */
    maxWidth: PropTypes.string,
    /** Sets spacing below the skeleton item */
    marginBottom: PropTypes.string
  };

  render() {
    const { height, marginBottom, maxWidth, ...otherProps } = this.props;
    const { className } = otherProps;

    return (
      <ThemeContext.Consumer>
        {({ resolvedRoles }) => {
          const styles = stylesheet(
            {
              maxWidth,
              marginBottom,
              height
            },
            resolvedRoles
          );
          return <div className={cx(css(styles.skeletonItem), className)} />;
        }}
      </ThemeContext.Consumer>
    );
  }
}
