const { RuleTester } = require('eslint');
const invalidPositionalOperator = require('./mongodb-positional-operator-placement-restriction.js');
const ruleTester = new RuleTester();
ruleTester.run('mongodb-positional-operator-placement-restriction', invalidPositionalOperator, {
    valid: [{
        code: 'Steplr.Client.Collections.ClientCompanyCollection.findOne({}, { fields: { _id: 1 } }) || {}',
    }],
    invalid: [{
        code: 'Steplr.Collections.CandidateCards.findOne({},{ fields: { "cardData.assessments.$.": 1 } })',
        // we can use messageId from the rule object
        errors: [{ messageId: 'invalidPositionalOperator' }],
    }]
});