import mongoose from 'mongoose'

const SampleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    num: {
      type: Number,
      required: true,
      unique: false,
    },
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
)

// QuestionSchema.plugin(mongoosePaginate)

SampleSchema.index({ createdAt: 1 })

const Sample = mongoose.model('Sample', SampleSchema)

Sample.syncIndexes()

export default Sample
