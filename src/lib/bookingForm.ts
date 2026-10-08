/**
 * Connection booking → Google Forms.
 *
 * To connect a Google Form:
 * 1. Open the form → ⋮ → "Get pre-filled link", fill every field with dummy
 *    text and click "Get link".
 * 2. The link looks like
 *    https://docs.google.com/forms/d/e/<FORM_ID>/viewform?entry.111=...&entry.222=...
 *    Replace `viewform` with `formResponse` and paste it (without the query
 *    string) into `actionUrl` below.
 * 3. Copy each `entry.<number>` into the matching field in `fields`.
 *
 * Until `actionUrl` is filled in, submissions are only logged to the browser
 * console so the flow can be tested end to end.
 */
export const GOOGLE_FORM = {
  actionUrl:
    "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse",
  fields: {
    fullName: "entry.0000000001",
    mobile: "entry.0000000002",
    email: "entry.0000000003",
    address: "entry.0000000004",
    plan: "entry.0000000005",
    consent: "entry.0000000006",
  },
} as const;

export type BookingDetails = {
  fullName: string;
  mobile: string;
  email: string;
  address: string;
  plan: string;
  consent: boolean;
};

export const isGoogleFormConfigured = () =>
  !GOOGLE_FORM.actionUrl.includes("YOUR_GOOGLE_FORM_ID");

export function buildBookingPayload(details: BookingDetails) {
  const { fields } = GOOGLE_FORM;
  const payload = new URLSearchParams();
  payload.append(fields.fullName, details.fullName.trim());
  payload.append(fields.mobile, `+91 ${details.mobile}`);
  payload.append(fields.email, details.email.trim());
  payload.append(fields.address, details.address.trim());
  payload.append(fields.plan, details.plan || "Not selected");
  payload.append(fields.consent, details.consent ? "Yes" : "No");
  return payload;
}

export async function submitBooking(details: BookingDetails) {
  const payload = buildBookingPayload(details);

  if (!isGoogleFormConfigured()) {
    console.info(
      "[booking] Google Form not configured yet — payload:",
      Object.fromEntries(payload),
    );
    return;
  }

  // Google Forms doesn't send CORS headers, so the response is opaque:
  // a resolved fetch means the request was sent, not that it was validated.
  await fetch(GOOGLE_FORM.actionUrl, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: payload,
  });
}
