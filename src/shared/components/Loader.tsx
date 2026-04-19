import { motion } from 'framer-motion';

export function Loader() {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loader" />
    </motion.div>
  );
}
