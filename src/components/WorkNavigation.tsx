import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import workBg from "@/assets/work-section-bg.jpg";
import landscapesImg from "@/assets/collection-landscapes.jpg";

const WorkNavigation = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Photos Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        onClick={() => navigate("/photos")}
        className="group relative flex h-[50vh] cursor-pointer items-center justify-center overflow-hidden"
      >
        <motion.img
          src={workBg}
          alt="Photos"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-background/60 transition-colors duration-500 group-hover:bg-background/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Photos</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
            View Collections
          </p>
        </motion.div>
      </motion.section>

      {/* Videos Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        onClick={() => navigate("/videos")}
        className="group relative flex h-[50vh] cursor-pointer items-center justify-center overflow-hidden"
      >
        <motion.img
          src={landscapesImg}
          alt="Videos"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-background/60 transition-colors duration-500 group-hover:bg-background/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Videos</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
            Watch Reels
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default WorkNavigation;
