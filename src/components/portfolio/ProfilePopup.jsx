import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useIsMobile } from '../../hooks/usemobile';

const ProfilePopup = ({ isOpen, onClose, imageSrc, altText, avatarRef }) => {
  const popupRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isOpen && avatarRef?.current && popupRef.current) {
      const avatarRect = avatarRef.current.getBoundingClientRect();
      const popup = popupRef.current;
      
      if (isMobile) {
        // Mobile: below avatar
        popup.style.setProperty('--avatar-top', `${avatarRect.bottom + window.scrollY + 8}px`);
        popup.style.setProperty('--avatar-left', `${avatarRect.left + window.scrollX}px`);
      } else {
        // Desktop: beside avatar, middle-aligned
        popup.style.setProperty('--avatar-top', `${avatarRect.top + window.scrollY + (avatarRect.height / 2) - 116}px`);
        popup.style.setProperty('--avatar-left', `${avatarRect.right + window.scrollX + 16}px`);
      }
    }
  }, [isOpen, avatarRef, isMobile]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={popupRef}
        className="profile-popup-header"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
      >
        <button className="profile-popup-close" onClick={onClose}>
          <X size={16} />
        </button>
        <img src={imageSrc} alt={altText} />
      </motion.div>
    </AnimatePresence>
  );
};

export default ProfilePopup;