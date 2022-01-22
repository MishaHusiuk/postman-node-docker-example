module.exports = {
  id: "post-user",
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    age: {
      type: "number",
      minimum: 0,
    },
    required: ["fistName", "lastName", "age"],
  },
};
