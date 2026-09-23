export async function sendInquiryNotification(inquiry) {
  const { RESEND_API_KEY, NOTIFY_EMAIL, FROM_EMAIL } = process.env;

  if (!RESEND_API_KEY || !NOTIFY_EMAIL || !FROM_EMAIL) {
    return { skipped: true };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [NOTIFY_EMAIL],
      reply_to: inquiry.email,
      subject: `New Raxio inquiry from ${inquiry.name}`,
      text: [
        `Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        `Company: ${inquiry.company || "-"}`,
        `Project type: ${inquiry.projectType}`,
        "",
        inquiry.message,
      ].join("\n"),
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || `Resend API error (${response.status})`);
  }

  return { skipped: false, id: data.id };
}
