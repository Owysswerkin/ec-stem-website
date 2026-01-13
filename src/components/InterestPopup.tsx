import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const InterestPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown this session
    const alreadyShown = sessionStorage.getItem('interestPopupShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 400 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('interestPopupShown', 'true');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[560px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">
            Register Your Interest
          </DialogTitle>
          <DialogDescription className="text-base">
            Register your interest for our upcoming STEM classes and get early-bird access to registration.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 -mx-6 -mb-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfpqs8RLUbBbg9UHJ47/viewform?embedded=true"
            width="100%"
            height="450"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="border-0"
            title="Interest Registration Form"
          >
            Loading…
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InterestPopup;
