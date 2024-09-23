import React from "react";
import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme appearance="light">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>
);
