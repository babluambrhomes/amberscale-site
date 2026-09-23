import mongoose, {
  Schema,
  models,
  type InferSchemaType,
} from "mongoose";

const subscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    source: {
      type: String,
      default: "website",
      trim: true,
    },

    action: {
      type: String,
      enum: ["SUBSCRIBED", "UNSUBSCRIBED"],
      default: "SUBSCRIBED",
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

export type Subscriber = InferSchemaType<
  typeof subscriberSchema
>;

const SubscriberModel =
  models.Subscriber ||
  mongoose.model("Subscriber", subscriberSchema);

export default SubscriberModel;