import { motion } from 'framer-motion';
import { FileText, Truck } from 'lucide-react';

const ChatToCheckout = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const circleVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        variants={circleVariants}
        animate="animate"
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full border border-white/10"
      />
      <motion.div
        variants={circleVariants}
        animate="animate"
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full border border-white/10"
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            variants={itemVariants}
            className="font-kaisei text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            From chat to checkout, without leaving the app.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/80 text-lg max-w-2xl mx-auto mb-10"
          >
            Order automation ensures that once the customer says &quot;done&quot;, the invoice is generated, the address is logged, and the shipping label is ready.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Auto Invoicing Pill */}
            <div className="bg-white/10 backdrop-blur-sm text-white rounded-full px-6 py-3 flex items-center gap-3 border border-white/20">
              <FileText className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="font-medium">Auto Invoicing</div>
                <div className="text-white/60 text-xs">Instant PDF generation</div>
              </div>
            </div>

            {/* Courier Sync Pill */}
            <div className="bg-white/10 backdrop-blur-sm text-white rounded-full px-6 py-3 flex items-center gap-3 border border-white/20">
              <Truck className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="font-medium">Courier Sync</div>
                <div className="text-white/60 text-xs">TCS &amp; Leopards integrated</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatToCheckout;
