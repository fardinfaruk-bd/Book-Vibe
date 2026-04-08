import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white  px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white800/60 backdrop-blur-xl rounded-2xl shadow-2xl p-10 text-center max-w-md w-full"
      >
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <AlertTriangle size={60} className="text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold mb-2">404</h1>
        <h2 className="text-xl font-semibold mb-4">Page Not Found</h2>

        {/* Description */}
        <p className="text-gray-300 mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2 bg-black text-white rounded-lg font-medium hover:scale-105 transition"
          >
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-5 py-2 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
          >
            Go Home
          </button>
        </div>

      </motion.div>
    </div>
  );
};

export default ErrorPage;