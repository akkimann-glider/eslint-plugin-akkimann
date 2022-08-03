const { RuleTester } = require('eslint');
const invalidPositionalOperator = require('./meteor-mongo-no-posistional-operator-in-between.js');
const ruleTester = new RuleTester();
ruleTester.run('meteor-mongo-no-posistional-operator-in-between', invalidPositionalOperator, {
    valid: [{
        code: 'db.collectionname.findOne({}, { fields: { "some.field.$": 1 } }) || {}',
    }],
    invalid: [{
        code: 'db.collectionname.findOne({},{ fields: { "some.field.$.": 1 } })',
        // we can use messageId from the rule object
        errors: [{ messageId: 'invalidPositionalOperator' }],
    }]
});
