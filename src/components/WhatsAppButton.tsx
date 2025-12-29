import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '6586445667';
  const message = encodeURIComponent('Hi, I would like to enquire about EC STEM programs.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Speech Bubble */}
      <div className="relative bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700">
        Send us a message
        <div className="absolute -bottom-2 right-5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white" />
      </div>
      
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
