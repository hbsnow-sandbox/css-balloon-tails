import React from "react";

import { NextPage } from "next";
import { classnames } from "tailwindcss-classnames";

import { BorderBalloon } from "../components/BorderBalloon";
import { ConicBalloon } from "../components/ConicBalloon";
import { PolygonBalloon } from "../components/PolygonBalloon";

const Page: NextPage = () => {
  return (
    <main
      className={classnames(
        "container",
        "grid",
        "grid-flow-row",
        "auto-rows-max",
        "gap-6",
        "mx-auto",
        "pt-6"
      )}
    >
      <div>
        <BorderBalloon>Balloon_A</BorderBalloon>
      </div>
      <div>
        <PolygonBalloon>Balloon_B</PolygonBalloon>
      </div>
      <div>
        <ConicBalloon>Balloon_C</ConicBalloon>
      </div>
    </main>
  );
};

export default Page;
