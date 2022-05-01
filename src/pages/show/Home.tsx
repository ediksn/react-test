import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Episode, Season, Show } from "../../models/Show";
import { getEpisodes, getShow } from "../../service/https.services";
import styles from "./style";
import "react-tabs/style/react-tabs.css";

const Home = () => {
  // Calling the styles created in the styles.ts file
  const classes = styles();
  /**
   * State varibles to store the Show and Seasons information
   */
  const [show, setShow] = useState<Show>();
  const [seasons, setSeasons] = useState<Season[]>([]);

  //Functions

  /**
   * Function to retreive the information fo the show.
   * Uses the @getShow created service to make a request to the
   * endpoint.
   * It is passed to the @setShow method
   */
  const getShowInfo = useCallback(() => {
    getShow().then((res: Response) => {
      if (res.statusText === "OK") {
        res.json().then((resp: Show) => {
          setShow(resp);
        });
      }
    });
  }, []);

  /**
   * Function to retreive the information of the episodes
   * from show. It filter the episodes by season to render all the
   * seasons with their episodes by tabs
   * Uses the @getEpisodes service created to make a request to the
   * endpoint.
   * It is passed to the @setSeasons method
   */
  const getEpisodesFromShow = useCallback(() => {
    getEpisodes().then((res: Response) => {
      if (res.statusText === "OK") {
        res.json().then((resp: Episode[]) => {
          let seasonsArr: Season[] = seasons || [];
          resp.forEach((ep: Episode) => {
            const idx = seasons?.findIndex((el) => el.number === ep.season);
            if (idx === -1) {
              seasonsArr.push({ number: ep.season, episodes: [ep] });
            } else {
              seasonsArr[idx]?.episodes.push(ep);
            }
          });
          setSeasons(seasonsArr);
        });
      }
    });
  }, [seasons]);

  /**
   * With the @useEffect we call the two methods to retreive our data
   */
  useEffect(() => {
    getShowInfo();
    getEpisodesFromShow();
  }, [getShowInfo, getEpisodesFromShow]);

  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <img src={show?.image.original} alt="" className={classes.image} />
        <div className={classes.content}>
          <div className={classes.title}>{show?.name}</div>
          <div
            className={classes.summary}
            dangerouslySetInnerHTML={{ __html: show?.summary || "" }}
          ></div>
        </div>
      </div>
      <p className={classes.episodesText}>Seasons</p>
      <div className={classes.listContainer}>
        <Tabs>
          <TabList>
            {seasons.map((el, i) => {
              return <Tab key={`tab${i}`}>Season {el.number}</Tab>;
            })}
          </TabList>
          {seasons.map((el, ind) => {
            return (
              <TabPanel key={`tabpan${ind}`}>
                {el.episodes?.map((ep, idx) => {
                  return (
                    <div key={idx} className={classes.tabContainer}>
                      <Link
                        className={classes.episodeTitle}
                        to={"/episode/" + ep.season + "/" + ep.number}
                      >
                        {ep.name}
                      </Link>
                      <img
                        alt=""
                        src={ep.image?.medium}
                        className={classes.tabImg}
                      />
                    </div>
                  );
                })}
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
