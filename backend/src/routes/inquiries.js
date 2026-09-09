import { body, validationResult } from "express-validator";
import { Inquiry } from "../models/Inquiry.js";
import { sendInquiryNotification } from "../services/email.js";

export const inquiryValidators = [
  body("name").trim().isLength({ min: 2, max: 120 }).withMessage("Name is required."),
  body("email").isEmail().normalizeEmail().withMessage("Valid email is required."),
  body("company").optional({ values: "falsy" }).trim().isLength({ max: 160 }),
  body("projectType").trim().isLength({ min: 2, max: 80 }).withMessage("Project type is required."),
  body("message").trim().isLength({ min: 12, max: 4000 }).withMessage("Please add more detail to your message."),
];

export async function createInquiry(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array()[0].msg });
  }

  try {
    const inquiry = await Inquiry.create(req.body);
    try {
      await sendInquiryNotification(inquiry);
    } catch (emailError) {
      console.error("Email notification failed:", emailError.message);
    }
    return res.status(201).json({ ok: true, id: inquiry._id });
  } catch (error) {
    console.error("Inquiry save failed:", error.message);
    return res.status(500).json({ message: "Could not save your inquiry. Please try again later." });
  }
}
