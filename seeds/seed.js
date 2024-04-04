const sequelize = require('../config/connection');
const { User, Roster } = require('../models');

const userData = require('./userData.json');
const rosterData = require('./rosterData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const roster of rosterData) {
    await Roster.create({
      ...roster,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
