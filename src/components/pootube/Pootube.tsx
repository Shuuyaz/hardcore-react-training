/* eslint-disable jsx-a11y/media-has-caption */
import { getVideos } from "@/services/video";
import { FC } from "react";
import Video from "./Video";
import * as styles from "./Video.css";

const Pootube: FC = async () => {
  const videos = await getVideos();
  const video = videos[0];
  return (
    <div>
      <h2>PooTube</h2>
      <div className={styles.video}>
        <Video source={video.url} />
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default Pootube;
