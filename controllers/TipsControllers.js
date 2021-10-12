const GetTips = async (req, res) => {
  try {
    const user = await Tips.findByPk(req.params.id, {
      include: [{ name: name }, { content: content }]
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const DeleteTip = async (req, res) => {
  try {
    await Tip.destroy({ where: { user_id: req.params.user_id } })
    res.send({
      msg: 'Tip Deleted',
      payload: req.params.user_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}
