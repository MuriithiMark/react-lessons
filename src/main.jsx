import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacts from "./page/Contacts/Contacts.jsx";
import ContactComponent from "./page/ContactComponent/ContactComponent.jsx";
import ErrorPage from "./page/ErrorPage/index.jsx";
import {
  loader as contactsLoader,
  action as contactsAction,
} from "./page/Contacts/Contacts.jsx";
import { loader as singleContactLoader } from "./page/ContactComponent/ContactComponent.jsx";
import { loader as editLoader, action as editAction } from "./page/ContactEdit/ContactEdit.jsx";
import { loader as deleteLoader, action as deleteAction } from "./page/ContactDelete/ContactDelete.jsx";
import ContactEdit from "./page/ContactEdit/ContactEdit.jsx";


const router = createBrowserRouter([
  {
    path: "/contacts",
    element: <Contacts />,
    loader: contactsLoader,
    action: contactsAction,
    children: [
      {
        path: "/contacts/:contactId",
        element: <ContactComponent />,
        loader: singleContactLoader,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <ContactEdit />,
        loader: editLoader,
        action: editAction,
      },
      {
        path: "/contacts/:contactId/delete",
        loader: deleteLoader,
        action: deleteAction,
        errorElement: (
          <div>
            Oops there was an error!
          </div>
        )
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
