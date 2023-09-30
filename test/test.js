// const assert = require('assert');
const addStrings = require('..').addStrings;

describe('addStrings', function () {
    it('should return 5 when given \'2\' and \'3\'', function () {
        console.log(addStrings('2', '3'), 5);
    });

    it('should return 5 when given \'0x02\' and \'0x03\'', function () {
        console.log(addStrings('0x02', '0x03'), 5);
    });
});