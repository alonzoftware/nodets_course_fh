const { v4: uuidv4 } = require('uuid');


// getUUID is a function that returns a UUID

const getUUID = () => {
  // return new Date().getTime()
  return uuidv4();
}


module.exports = {
  getUUID,
}
