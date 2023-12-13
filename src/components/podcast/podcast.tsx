/* eslint-disable jsx-a11y/media-has-caption */

import { getQuackCast } from "@/services/audio";
import { FC } from "react";

const Podcast: FC = async () => {
  const audio = await getQuackCast();
  return (
    <div>
      <h2>PooCast</h2>
      <audio controls src={audio.url} />
    </div>
  );
};

export default Podcast;
