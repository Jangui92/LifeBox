// import React, { useState, useEffect } from 'react'
// import { Button, Form, Navbar, Container } from 'react-bootstrap'
import React from 'react'
import TipsForm from '../components/TipsForm'
import JournaliesForm from '../components/JournaliesForm'
import CommentsForm from '../components/CommentsForm'

const Profile = () => {
  return (
    <div>
      <TipsForm />
      <JournaliesForm />
      <CommentsForm />
    </div>
  )
}

export default Profile
