import mongoose, { Document, Schema } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  client: mongoose.Types.ObjectId;
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String },
    client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IProject>("Project", projectSchema);
