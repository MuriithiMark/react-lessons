import React from "react";
import {
  Outlet,
  NavLink,
  Form,
  useLoaderData,
  redirect,
} from "react-router-dom";
import "./contacts.css";
import { createContact, getContacts } from "../../contacts";
import { useNavigate } from "react-router-dom";

export const loader = async () => {
  const contacts = await getContacts();
  return { contacts };
};

export const action = async () => {
  const contact = await createContact();
  return { contact };
};

const Contacts = () => {
  const { contacts } = useLoaderData();
  const navigation = useNavigate();

  return (
    <div className="contacts">
      <div className="side-bar">
        <div className="top-bar">
          <Form>
            <input name="search" />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <div className="contacts-list">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <div key={contact.id} className="contact">
                <NavLink
                  to={`/contacts/${contact.id}`}
                  className={({ isActive, isPending }) =>
                    `${isActive ? "active" : ""} ${isPending ? "pending" : ""}`
                  }
                >
                  {contact.first} {contact.last}
                </NavLink>
              </div>
            ))
          ) : (
            <span className="no-contacts">No Contacts Here!</span>
          )}
        </div>
      </div>
      <div
        className={`single-contact ${
          navigation.state === "loading" ? "loading" : ""
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Contacts;
