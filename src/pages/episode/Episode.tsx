import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Episode } from "../../models/Show";
import { getEpisode } from "../../service/https.services";
import styles from "./style";

const EpisodeView = () => {
  // Calling the styles created in the styles.ts file
  const classes = styles();
  /**
   * State varibles to store the Show and Seasons information
   */
  const { number, season } = useParams();
  const [episode, setEpisode] = useState<Episode>();

  //Functions

  /**
   * Function to retreive the information fo the episode.
   * Uses the @getEpisode created service to make a request to the
   * endpoint, as parameters the function receives @number and @season
   * obtained thru the URL params
   * It is passed to the @setEpisode method
   */
  const getEpisodeInfo = useCallback(() => {
    getEpisode(number, season).then((res: Response) => {
      res.json().then((resp) => {
        setEpisode(resp);
      });
    });
  }, [number, season]);

  useEffect(() => {
    getEpisodeInfo();
  }, [getEpisodeInfo]);

  return (
    <div className={classes.container}>
      <img src={episode?.image.original} alt="" className={classes.image} />
      <div className={classes.content}>
        <div className={classes.title}>{episode?.name}</div>
        <div
          className={classes.summary}
          dangerouslySetInnerHTML={{ __html: episode?.summary || "" }}
        ></div>
      </div>
    </div>
  );
};

export default EpisodeView;
