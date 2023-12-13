import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
type Props = {
  children: ReactNode;
};

import "normalize.css";
import "./layout.css";

export default async function Layout(props: Props) {
  return (
    <html lang="en">
      <Header />
      <head>
        <title>Poo Economnomnom</title>
      </head>
      <Main>{props.children}</Main>
      <Footer />
    </html>
  );
}
