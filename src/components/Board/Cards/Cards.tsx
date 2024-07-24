import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import Card from "components/Board/Card/Card";

// CSS prefix: .bdcards-
import "./style.css";

function Cards() {
  return (
    <OverlayScrollbarsComponent className="bdcards-scrollbar">
      <section className="bdcards-cont">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </OverlayScrollbarsComponent>
  );
}

export default Cards;
