const requestSchemas = require("../request-schema");
const Validator = require("jsonschema").Validator;
var validator = new Validator();

module.exports = function createBodyValidator(schemaName) {
  const schema = requestSchemas[schemaName];
  if (!schema) throw Error(`invalid schema name: ${schemaName}`);

  return (req, res, next) => {
    const result = validator.validate(req.body, schema);
    if (result.errors.length === 0) return next();

    const errors = result.errors.map((e) => `${e.instance} ${e.message}`);
    res.status(400).send({ errors });
  };
};
