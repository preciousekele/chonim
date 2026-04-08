import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-center h-14 bg-white/80 backdrop-blur-sm">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="uppercase text-black"
        style={{
          fontFamily: "'Vonique64', serif",
          letterSpacing: "0.3em",
          fontWeight: 200,
          fontSize: "clamp(18px, 1.8vw, 27px)",
        }}
      >
        Choko weds Nimechi
      </motion.p>
    </header>
  );
};

export default Header;