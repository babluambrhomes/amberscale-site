import mongoose, {
  Schema,
  models,
  type InferSchemaType,
} from "mongoose";

const contactMessageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },

    company: {
      type: String,
      trim: true,
      default: null,
    },

    subject: {
      type: String,
      trim: true,
      default: null,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    action: {
      type: String,
      enum: ["NEW", "CONTACTED", "RESOLVED"],
      default: "NEW",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export type ContactMessage = InferSchemaType<
  typeof contactMessageSchema
>;

const ContactMessageModel =
  models.ContactMessage ||
  mongoose.model("ContactMessage", contactMessageSchema);

export default ContactMessageModel;