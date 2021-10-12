const { Tips } = require('../models/tips')

const GetAllTips = async (req, res) => {
  try {
    const tips = await Tips.findAll(req.params.tips_id)
    res.send(tips)
  } catch (error) {
    throw error
  }
}

const DeleteTip = async (req, res) => {
  try {
    const tips = await Tips.destroy({ where: { tips_id: req.params.id } })
    res.send({
      msg: 'Tip Deleted',
      payload: req.params.user_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}
module.exports = {
  GetAllTips,
  DeleteTip
}
