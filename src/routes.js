import React from "react";
import HomePage from "./page/HomePage";
import DetailApi from "./page/DetailApi";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "/detai-api/:parentIndex/:id",
    main: () => <DetailApi />
  }
];

export default routes;
