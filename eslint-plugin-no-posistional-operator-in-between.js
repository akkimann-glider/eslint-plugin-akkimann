module.exports = {
    meta: {
        messages: {
            invalidPositionalOperator:
                'Starting in MongoDB 4.4, the $ projection operator can only appear at the end of the field path; e.g. "field.$" or "fieldA.fieldB.$".',
        },
    },
    create(context) {
        return {
            Identifier(node) {
                if (node.name === "fields") {
                    if (node?.parent?.value?.properties?.length) {
                        node.parent.value.properties.forEach((element) => {
                            if (element?.key?.value?.includes(".$.")) {
                                context.report({
                                    node,
                                    messageId: "invalidPositionalOperator",
                                    data: { type: "block" },
                                });
                            }
                        });
                    }
                }
            },
        };
    },
};
