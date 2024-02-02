import React from "react";
import { useLoaderData, redirect, Form } from "react-router-dom";
import { getContact, updateContact } from "../../contacts";
import "./contact-edit.css";

export const loader = async ({ params }) => {
  const contact = await getContact(params.contactId);
  return { contact };
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const updatedContact = Object.fromEntries(formData);
  await updateContact(params.contactId, updatedContact);
  return redirect(`/contacts/${params.contactId}`);
};

const ContactEdit = () => {
  const { contact } = useLoaderData();
  return (
    <Form method="post" id="contact-form">
      <p className="name">
        <span>Name</span>
        <input
          placeholder="First"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          placeholder="@twitter"
          type="text"
          name="twitterHandle"
          defaultValue={contact.twitterHandle}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://placebear.com/g/200/200"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>About Me</span>
        <input
          placeholder="Hello, I'm fun ..."
          type="text"
          name="aboutMe"
          defaultValue={contact.aboutMe}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" style={{ color: "red" }}>
          Cancel
        </button>
      </p>
    </Form>
  );
};

export default ContactEdit;
