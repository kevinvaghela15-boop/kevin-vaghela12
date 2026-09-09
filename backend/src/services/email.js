import nodemailer from "nodemailer";

export async function sendInquiryNotification(inquiry) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL, FROM_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: FROM_EMAIL || SMTP_USER,
    to: NOTIFY_EMAIL || SMTP_USER,
    replyTo: inquiry.email,
    subject: `New Raxio inquiry from ${inquiry.name}`,
    text: [
      `Name: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Company: ${inquiry.company || "-"}`,
      `Project type: ${inquiry.projectType}`,
      "",
      inquiry.message,
    ].join("\n"),
  });

  return { skipped: false };
}
