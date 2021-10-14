import React from 'react'
import TipsForm from '../components/TipsForm'
import JournaliesForm from '../components/JournaliesForm'
import CommentsForm from '../components/CommentsForm'

const Profile = () => {
  return (
    <div>
      <h1> Hello! </h1>
      <TipsForm />
      <JournaliesForm />
      <CommentsForm />
    </div>
  )
}

export default Profile
