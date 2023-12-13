import Clocks from "@/components/clock/ClocksComponent";
import { DateTime } from "luxon";

export const metadata = {
  title: "welcome to Poo Economnomnom"
};

export default async function IndexPage() {
  const time = DateTime.utc().toMillis();
  return (
    <div>
      <h1>Poo Economnomnom</h1>
      <Clocks serverTime={time} />
      <Podcast />
      <Pootube />
    </div>
  );
}
