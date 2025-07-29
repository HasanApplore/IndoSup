import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface ScrollNavigationProps {
  showScrollTop: boolean;
  showScrollDown: boolean;
  scrollToTop: () => void;
  scrollToBottom: () => void;
}

export default function ScrollNavigation({ 
  showScrollTop, 
  showScrollDown, 
  scrollToTop, 
  scrollToBottom 
}: ScrollNavigationProps) {
  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      {/* Scroll to Bottom Button */}
      {showScrollDown && (
        <motion.button
          onClick={scrollToBottom}
          className="fixed bottom-6 left-6 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      )}
    </>
  );
}