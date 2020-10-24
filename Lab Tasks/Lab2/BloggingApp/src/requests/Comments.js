import { JPClient } from "./../clients/JPClient";

const comment_endpoint = "/comments";
const getComments = () => {
  return JPClient.get(comment_endpoint);
};

export { getComments };
