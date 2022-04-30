const { Schema, model } = require("mongoose");

const analysisSchema = new Schema(
  {
    analysisName: {
      type: String,
      required: true,
    },
    strengths: {
      elements: [{
        type: String
    }],
    },
    weaknesses: {
      elements: [{
        type: String
    }],
    },
    opportunities: {
      elements: [{
        type: String
    }],
    },
    threats: {
      elements: [{
        type: String
    }],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
},
  {
    timestamp: true,
  }
);

module.exports = model("Analysis", analysisSchema);
