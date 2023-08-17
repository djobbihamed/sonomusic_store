const { db } = require("./index.js");
const { instruments } =require("./Instruments.js");
const sampleData = require("../data.json");
const insertSampleinstruments = function () {
    instruments.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};
insertSampleinstruments();