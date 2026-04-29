import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useAboutPage } from "@/hooks/useAboutPage";

const DEFAULT_HEADING = "About Us";

const DEFAULT_BODY = `njomotionpictures is a photography business based in New York. I specialize in capturing wildlife, sports, street, and landscape photography. With 6 months of experience, I primarily focus on selling prints of my captivating photographs. My business aims to capture and preserve special moments through professional photography services, with a focus on creativity and attention to detail. I offer a range of photography services, including specific packages tailored to your needs. I take pride in delivering high-quality, personalized services to my clients. I am dedicated to ensuring your satisfaction and capturing your vision. Let me help you create lasting memories through my photography services.`;

const PLACEHOLDER_IMAGE = "/about-placeholder.png";

const About = () => {
  const { data } = useAboutPage();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const heading = data?.heading?.trim() || DEFAULT_HEADING;
  const body = data?.body?.trim() || DEFAULT_BODY;
  const imageSrc = data?.imageSrc?.trim() || PLACEHOLDER_IMAGE;

  return (
    <main className="min-h-screen bg-background px-6 pb-16 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:mb-8 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="text-base leading-relaxed text-foreground/90 md:text-lg">{body}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative w-full"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-md bg-muted">
              <img
                src={imageSrc}
                alt={heading}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default About;
