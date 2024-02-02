import React from "react";
import { useLoaderData, useNavigate, Form } from "react-router-dom";
import { getContact } from "../../contacts";
import "./contact-component.css";

export const loader = async ({ params }) => {
  const contact = await getContact(params.contactId);

  return { contact };
};

const ContactComponent = () => {
  const { contact } = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <img src={contact.avatar} alt={contact.first} />
      <div className="bio">
        <h1 className="name">
          {contact.first} {contact.last}
        </h1>
        {contact.twitterHandle && (
          <span className="twitter-handle">
            <a href={`https://twitter.com/${contact.twitterHandle}`}>
              {contact.twitterHandle}
            </a>
          </span>
        )}

        {contact.aboutMe && <span className="about-me">{contact.aboutMe}</span>}

        <div className="bio-actions">
          <button
            onClick={() => navigate(`/contacts/${contact.id}/edit`)}
            className="btn edit-btn"
          >
            Edit
          </button>

          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (
                !confirm(
                  `Confirm you wish to delete ${contact.first} ${contact.last}`
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
