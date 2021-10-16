const { Tips } = require('../models')
// const { Tips } = require('../seeders')

const GetAllTips = async (req, res) => {
  try {
    const tips = await Tips.findAll()
    res.send(tips)
  } catch (error) {
    throw error
  }
}

const DeleteTip = async (req, res) => {
  try {
    let tipsId = parseInt(req.params.tips_id)
    await Tips.destroy({ where: { id: tipsId } })
    res.send({
      msg: `Tip ${tipsId} Deleted`
    })
  } catch (error) {
    throw error
  }
}
const CreateTip = async (req, res) => {
  try {
    const tips = await Tips.create({
      content: req.body.content,
      date: req.body.date
    })
    res.send(tips)
  } catch (error) {
    throw error
  }
}
const UpdateTips = async (req, res) => {
  try {
    let tipsId = parseInt(req.params.tips_id)
    let updatedTips = await Tips.update(req.body, {
      where: { id: tipsId },
      returning: true
    })
    res.send(updatedTips)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllTips,
  DeleteTip,
  CreateTip,
  UpdateTips
}
