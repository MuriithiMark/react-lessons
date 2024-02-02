import React from 'react'
import { deleteContact, getContact } from '../../contacts'
import { redirect } from 'react-router-dom'

export const loader = async ({ params}) => {
    const contact = await getContact(params.contactId)
    return {contact}
}

export const action = async ({ params }) => {
  await deleteContact(params.contactId)
  return redirect("/contacts")
}