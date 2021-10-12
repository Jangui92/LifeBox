const { User } = require('../models')

const GetUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        { name: name },
        { username: username },
        { mood_status: mood_status },
        { journalies: journalies }
      ]
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const user = await User.create({
      name,
      username,
      email
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdateUserMood = async (req, res) => {
  try {
    const user = await User.update(
      { ...req.body },
      { where: { mood_status: req.params }, returning: true }
    )
    res.send(user)
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
