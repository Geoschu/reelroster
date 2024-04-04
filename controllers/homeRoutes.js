const router = require('express').Router();
const { Roster, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all rosters and JOIN with user data
    const rosterData = await Roster.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const rosters = rosterData.map((roster) => roster.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      rosters, 
      logged_in: req.session.logged_in,
      bodyClass: "bg-zinc-700"
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/roster/:id', async (req, res) => {
  try {
    const rosterData = await Roster.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const roster = rosterData.get({ plain: true });

    res.render('myroster', {
      ...roster,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

<<<<<<< HEAD
// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Roster }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
=======

router.get('/myroster', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Roster }],
    });

    const user = userData.get({ plain: true });

    res.render('myroster', {
>>>>>>> 2a92df9 (re-routing myroster)
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login', {styleSheet: '/css/login.css', bodyClass: 'bg-gray-100'});
});

module.exports = router;