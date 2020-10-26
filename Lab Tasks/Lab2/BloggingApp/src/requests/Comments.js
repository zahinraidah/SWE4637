import { JPClient } from "./../clients/JPClient";

const getComments = (id) => {
  const comment_endpoint = "/posts/" + id + "/comments";
  return JPClient.get(comment_endpoint);
};

export { getComments };