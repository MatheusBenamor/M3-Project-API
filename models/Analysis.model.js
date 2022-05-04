const { Schema, model } = require("mongoose");

const analysisSchema = new Schema(
  {
    analysisName: {
      type: String,
      required: true,
    },
    
    strengths: 
       [{
        swotObject:{
          type: String
        },
        relevance: {
          type: Number
        }
    }],
    
    
    weaknesses: [{
      swotObject:{
        type: String
      },
      relevance: {
        type: Number
      }
  }],

    opportunities: [{
        swotObject:{
          type: String
        },
        relevance: {
          type: Number
        }
    }],
    
    threats: [{
      swotObject:{
        type: String
      },
      relevance: {
        type: Number
      }
  }],
  
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
