import { createUseStyles } from "react-jss";

/**
 * css-in-js applied with the react-js library
 * @breakpoint defined as for width: 400px for mobile devices
 */

const styles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    padding: 5,
  },
  content: {
    flexDirection: "column",
    display: "flex",
    paddingInline: 20,
  },
  title: {
    fontSize: 50,
    padding: 10,
    "@media (min-width: 400px)": {
      fontSize: 20,
    },
  },
  episodeTitle: {
    fontSize: 20,
  },
  summary: {
    textAlign: "justify",
    padding: 10,
    fontSize: 20,
    "@media (min-width: 400px)": {
      fontSize: 15,
    },
  },
  image: {
    width: "80rem",
    height: "80rem",
    paddingBlock: 10,
    "@media (min-width: 400px)": {
      width: "10rem",
      height: "10rem",
    },
  },
});

export default styles;
