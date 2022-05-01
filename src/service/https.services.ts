// Global URL for the API calls
const URL = "https://api.tvmaze.com/shows/6771";

/**
 * Functions to retreive the show data
 * @returns a promise
 */
export const getShow = async () => {
  return await fetch(URL);
};

/**
 * Function to retreive the episodes from a show
 * @returns a promise
 */
export const getEpisodes = async () => {
  return await fetch(URL + "/episodes");
};

/**
 * Function to retreive one episode
 * @param number number of the episode
 * @param season season that contains the episode
 * @returns a promise
 */
export const getEpisode = async (
  number: string | undefined,
  season: string | undefined
) => {
  return await fetch(
    URL + `/episodebynumber?season=${season}&number=${number}`
  );
};
