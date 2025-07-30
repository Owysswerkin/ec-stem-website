import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=6587203007&text=I am interested to sign up .&type=phone_number&app_absent=0&wame_ctl=1";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default FloatingWhatsApp;