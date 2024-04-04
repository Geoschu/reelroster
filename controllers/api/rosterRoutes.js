const router = require('express').Router();
// Import the Roster model from the models folder
const { Roster } = require('../../models');
const withAuth = require('../../utils/auth');

// If a POST request is made to /api/roster, a new roster item is created. If there is an error, the function returns with a 400 error. 
router.post('/', withAuth, async (req, res) => {
  try {
    const newRoster = await Roster.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRoster);
  } catch (err) {
    res.status(400).json(err);
  }
});

// If a DELETE request is made to /api/roster/:id, that project is deleted. 
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const rosterData = await Roster.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!rosterData) {
      res.status(404).json({ message: 'No roster found with this id!' });
      return;
    }

    res.status(200).json(rosterData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
