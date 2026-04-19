import { motion } from 'framer-motion';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      className="l-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
}

export { Layout };
