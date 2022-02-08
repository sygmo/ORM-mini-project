const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');

Traveller.belongsToMany(Location, { 
    through: Trips,
    unique: false,
    foreignKey: 'traveller_id' 
});

Location.belongsToMany(Traveller, { 
    through: Trips,
    unique: false,
    foreignKey: 'location_id' 
});

module.exports = { Traveller, Location, Trips };