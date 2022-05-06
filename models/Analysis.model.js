const { Schema, model } = require("mongoose");

const analysisSchema = new Schema(
  {
    analysisName: {
      type: String,
      required: true,
    },
    strengths1: {
      type: String,
      required: true,
    },
    strengthsRel1: {
      type: Number,
      required: true,
    },
    strengths2: {
      type: String,
      required: true,
    },
    strengthsRel2: {
      type: Number,
      required: true,
    },
    strengths3: {
      type: String,
      required: true,
    },
    strengthsRel3: {
      type: Number,
      required: true,
    },
    strengths4: {
      type: String,
      required: true,
    },
    strengthsRel4: {
      type: Number,
      required: true,
    },
    strengths5: {
      type: String,
      required: true,
    },
    strengthsRel5: {
      type: Number,
      required: true,
    },
    weaknesses1: {
      type: String,
      required: true,
    },
    weaknessesRel1: {
      type: Number,
      required: true,
    },
    weaknesses2: {
      type: String,
      required: true,
    },
    weaknessesRel2: {
      type: Number,
      required: true,
    },
    weaknesses3: {
      type: String,
      required: true,
    },
    weaknessesRel3: {
      type: Number,
      required: true,
    },
    weaknesses4: {
      type: String,
      required: true,
    },
    weaknessesRel4: {
      type: Number,
      required: true,
    },
    weaknesses5: {
      type: String,
      required: true,
    },
    weaknessesRel5: {
      type: Number,
      required: true,
    },
    opportunities1: {
      type: String,
      required: true,
    },
    opportunitiesRel1: {
      type: Number,
      required: true,
    },
    opportunities2: {
      type: String,
      required: true,
    },
    opportunitiesRel2: {
      type: Number,
      required: true,
    },
    opportunities3: {
      type: String,
      required: true,
    },
    opportunitiesRel3: {
      type: Number,
      required: true,
    },
    opportunities4: {
      type: String,
      required: true,
    },
    opportunitiesRel4: {
      type: Number,
      required: true,
    },
    opportunities5: {
      type: String,
      required: true,
    },
    opportunitiesRel5: {
      type: Number,
      required: true,
    },
    threats1: {
      type: String,
      required: true,
    },
    threatsRel1: {
      type: Number,
      required: true,
    },
    threats2: {
      type: String,
      required: true,
    },
    threatsRel2: {
      type: Number,
      required: true,
    },
    threats3: {
      type: String,
      required: true,
    },
    threatsRel3: {
      type: Number,
      required: true,
    },
    threats4: {
      type: String,
      required: true,
    },
    threatsRel4: {
      type: Number,
      required: true,
    },
    threats5: {
      type: String,
      required: true,
    },
    threatsRel5: {
      type: Number,
      required: true,
    },
    analysisScore: {
      type: String,
      required: true,
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

