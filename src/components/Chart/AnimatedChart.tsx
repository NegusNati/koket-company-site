import React from "react";
import { motion } from "framer-motion";

const AnimatedChart: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center"
    aria-label="Animated project metrics chart placeholder"
  >
    {/* Placeholder for animated chart. Replace with a real chart (e.g., Recharts) as needed. */}
    <div className="w-full h-48 flex items-center justify-center">
      <span className="text-gray-400">[Animated Chart Placeholder]</span>
    </div>
  </motion.div>
);

export default AnimatedChart;
