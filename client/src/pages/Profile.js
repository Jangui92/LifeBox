import React from 'react'
import TipsForm from '../components/TipsForm'
import JournaliesForm from '../components/JournaliesForm'
import CommentsForm from '../components/CommentsForm'
import GratefulForm from '../components/GratefulForm'

const Profile = () => {
  return (
    <div>
      <h1> Hello! </h1>
      <TipsForm />
      <JournaliesForm />
      <GratefulForm />
      <CommentsForm />
    </div>
  )
}

export default Profile
