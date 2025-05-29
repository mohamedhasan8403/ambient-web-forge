
import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-cyber-blue/20 bg-cyber-dark/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-cyber-pink fill-current" />
            </motion.div>
            <span>and</span>
            <Code size={16} className="text-cyber-blue" />
            <span>by Alex Chen</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {currentYear} Alex Chen. All rights reserved.
          </div>
          
          <div className="flex items-center justify-center space-x-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-muted-foreground hover:text-cyber-blue transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <span className="text-muted-foreground/50">•</span>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="text-muted-foreground hover:text-cyber-blue transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
            <span className="text-muted-foreground/50">•</span>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="text-muted-foreground hover:text-cyber-blue transition-colors duration-300"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
