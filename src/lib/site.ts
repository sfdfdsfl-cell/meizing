/** Site-wide URLs and contact details, kept in one place. */

export const SITE_URL = "https://mezingbroadband.com";

export const CUSTOMER_LOGIN_URL = "https://my.mezingbroadband.com/login";

export const PHONE_DISPLAY = "+91 7389692807";
export const PHONE_HREF = "tel:+917389692807";
export const SUPPORT_EMAIL = "support@mezingbroadband.com";

export const WHATSAPP_NUMBER = "917389692807";

export const whatsappChatUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Opens WhatsApp with a pre-written referral message to share with friends. */
export const REFER_URL = `https://wa.me/?text=${encodeURIComponent(
  `I'm using Mezing Broadband's 100% fiber internet — book your connection here: ${SITE_URL}/booking`,
)}`;

/** Replace the "#" placeholders with the real profile / store URLs. */
export const SOCIAL_URLS = {
  instagram: "#",
  facebook: "#",
  linkedin: "#",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
};

export const APP_STORE_URLS = {
  googlePlay: "#",
  appStore: "#",
};
