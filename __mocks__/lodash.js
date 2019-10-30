const lodash = jest.requireActual("lodash");

lodash.shuffle = arr => arr.reverse();

export default lodash;
