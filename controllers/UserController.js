const { useAccordionButton } = require('react-bootstrap')
const {
  default: usePlaceholder
} = require('react-bootstrap/esm/usePlaceholder')
const { User } = require('../models')

const CreateUser = async (req, res) => {
  try {
    let name = ''
    let username = ''
    const user = await User.CreateOne({
      name: name,
      username: username
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { email, password, name, is_renter, is_owner, picture } = req.body
    console.log(password)
    let password_digest = await middleware.hashPassword(password)
    const user = await User.create({
      email,
      password_digest,
      name,
      is_renter,
      is_owner,
      picture
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}
