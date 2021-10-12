const { User } = require('../models/user.js')

const GetUser = async (req, res) => {
  console.log('GetUser')
  try {
    const user = await User.findAll()
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.create({
      id: req.body.id,
      name: req.body.name,
      username: req.body.username,
      email: req.body.email
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateUserMood = async (req, res) => {
  try {
    const mood = await User.update(
      { ...req.body },
      { where: { mood_status: req.params }, returning: true }
    )
    res.send(mood)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { user_id: req.params.user_id } })
    res.send({
      msg: 'Profile Deleted',
      payload: req.params.user_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUser,
  CreateUser,
  UpdateUserMood,
  DeleteUser
}
