const { RuleTester } = require('eslint');
const invalidPositionalOperator = require('./eslint-plugin-no-posistional-operator-in-between.js');
const ruleTester = new RuleTester();
ruleTester.run('eslint-plugin-no-posistional-operator-in-between', invalidPositionalOperator, {
    valid: [{
        code: 'Steplr.Client.Collections.ClientCompanyCollection.findOne({}, { fields: { _id: 1 } }) || {}',
    }],
    invalid: [{
        code: 'Steplr.Collections.CandidateCards.findOne({},{ fields: { "cardData.assessments.$.": 1 } })',
        // we can use messageId from the rule object
        errors: [{ messageId: 'invalidPositionalOperator' }],
    }]
});