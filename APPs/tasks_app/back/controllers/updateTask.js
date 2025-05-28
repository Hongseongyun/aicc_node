const database = require('../database/database');

exports.updateCompletedTask = async (req, res) => {
  const { isCompleted, itemId } = req.body;

  // console.log(isCompleted, itemId);

  try {
    await database.query('UPDATE tasks SET isCompleted = $1 WHERE _id = $2', [
      isCompleted,
      itemId,
    ]);
    return res.status(200).json({ msg: 'Task Updated Status Successfully' });
  } catch (error) {
    return res.status(500).json({ msg: 'Update Complete Status Fail' + error });
  }
};

exports.updateTask = async (req, res) => {
  const { title, description, date, isCompleted, isImportant, _id } = req.body;
  // console.log(title, description, date, isCompleted, isImportant, _id);

  try {
    await database.query(
      'UPDATE tasks SET title = $1, description = $2, date = $3, isCompleted = $5 WHERE _id = $6',
      [title, description, date, isCompleted, isImportant, _Id]
    );
    return res.status(200).json({ msg: 'Task Updated Status Successfully' });
  } catch (error) {
    return res.status(500).json({ msg: 'Update Complete Status Fail' + error });
  }
};
