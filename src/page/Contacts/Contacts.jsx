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
import { useEffect } from "react";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const contacts = await getContacts(search);
  return { contacts, search };
};

export const action = async () => {
  const contact = await createContact();
  return { contact };
};

const Contacts = () => {
  const { contacts, search } = useLoaderData();
  const navigation = useNavigate();

  useEffect(() => {
    document.getElementById("search").value = search;
  }, [search])

  return (
    <div className="contacts">
      <div className="side-bar">
        <div className="top-bar">
          <Form id="search-form" role="search">
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Search..."
              aria-label="Search Contacts"
              defaultValue={search}
            />
            {/* Learn more about below 2 lines of code */}
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
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
