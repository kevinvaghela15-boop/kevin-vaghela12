const API_BASE = import.meta.env.VITE_API_URL || "";

export async function submitInquiry(payload) {
  const response = await fetch(`${API_BASE}/api/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data.message || "Unable to send your inquiry. Please try again.";
    throw new Error(message);
  }

  return data;
}
