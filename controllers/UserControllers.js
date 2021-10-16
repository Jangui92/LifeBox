const { User } = require('../models')

const GetUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.user_id)
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.create({
      name: req.body.name,
      userName: req.body.userName,
      email: req.body.email,
      moodStatus: req.body.moodStatus,
      journalies: req.body.journalies
    })
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
  DeleteUser
}
