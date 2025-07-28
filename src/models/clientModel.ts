import mongoose, { Document, Schema } from "mongoose";

export interface IClient extends Document {
  name: string;
  email: string;
}

const clientSchema = new Schema<IClient>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model<IClient>("Client", clientSchema);
