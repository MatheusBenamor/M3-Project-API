const { Schema, model } = require("mongoose");

const analysisSchema = new Schema(
  {
    analysisName: {
      type: String,
      required: true,
    },
    strengths: {
      type: Array,
      maxItems: 5,
      items: {
        type: "string",
      },
    },
    weaknesses: {
      type: Array,
      maxItems: 5,
      items: {
        type: "string",
      },
    },
    opportunities: {
      type: Array,
      maxItems: 5,
      items: {
        type: "string",
      },
    },
    threats: {
      type: Array,
      maxItems: 5,
      items: {
        type: "string",
      },
    },
    //teste: [{type: String}]
  },
  {
    timestamp: true,
  }
);

module.exports = model("Analysis", analysisSchema);
