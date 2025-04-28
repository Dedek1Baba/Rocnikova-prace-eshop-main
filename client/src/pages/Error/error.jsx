import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-white text-center px-4">
      <motion.h1 
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        404
      </motion.h1>
      <motion.h2 
        className="text-2xl mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        Stránka nebyla nalezena
      </motion.h2>
      <Link to="/">
        <motion.button 
          className="bg-gradient-to-br from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Zpět na hlavní stránku
        </motion.button>
      </Link>
    </div>
  );
}
