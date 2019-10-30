const lodash = jest.requireActual("lodash");

lodash.shuffle = arr => arr.reverse();
lodash.__esModule = true;

export default lodash;

module.exports = lodash;
