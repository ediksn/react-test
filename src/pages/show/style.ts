import { createUseStyles } from "react-jss";

/**
 * css-in-js applied with the react-js library
 * @breakpoint defined as for width: 400px for mobile devices
 */

const styles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  content: {
    flexDirection: "column",
    display: "flex",
    paddingInline: 20,
  },
  block: {
    flexDirection: "row",
    display: "flex",
    paddingInline: 10,
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
    paddingBlock: 5,
    paddingInline: 5,
    textDecoration: "none",
    textAlign: "center",
    alignSelf: "center",
    "@media (min-width: 400px)": {
      fontSize: 15,
    },
  },
  episodesText: {
    fontSize: 20,
    "@media (min-width: 400px)": {
      fontSize: 15,
    },
  },
  summary: {
    textAlign: "justify",
    padding: 10,
    "@media (min-width: 400px)": {
      fontSize: 10,
    },
  },
  image: {
    width: "15rem",
    height: "15rem",
    paddingBlock: 10,
    "@media (min-width: 400px)": {
      width: "10rem",
      height: "10rem",
    },
  },
  listContainer: {
    flexDirection: "column",
    alignSelf: "flex-start",
  },
  tabContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "40rem",
    padding: 10,
    "@media (min-width: 400px)": {
      width: "20rem",
    },
  },
  tabImg: {
    width: "10rem",
    height: "10rem",
    "@media (min-width: 400px)": {
      width: "10rem",
      height: "10rem",
    },
  },
});

export default styles;
