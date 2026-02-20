export function getWhatsAppLink(
  phone,
  message = 'Hi, I am interested in your home services.',
) {
  const cleanPhone = phone.replace(/\D/g, '');

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}
