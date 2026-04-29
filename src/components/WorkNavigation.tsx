import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import type { SyntheticEvent } from "react";

const photosGradientOnly =
  "absolute inset-0 bg-gradient-to-br from-zinc-950 via-emerald-950/40 to-zinc-900 bg-[length:200%_200%] transition-transform duration-700 group-hover:scale-105";
const videosGradientOnly =
  "absolute inset-0 bg-gradient-to-bl from-zinc-950 via-amber-950/30 to-zinc-900 bg-[length:200%_200%] transition-transform duration-700 group-hover:scale-105";

const photosPanelTint =
  "absolute inset-0 bg-gradient-to-br from-zinc-950/80 via-emerald-950/45 to-zinc-900/75 transition-transform duration-700 group-hover:scale-105";
const videosPanelTint =
  "absolute inset-0 bg-gradient-to-bl from-zinc-950/80 via-amber-950/35 to-zinc-900/75 transition-transform duration-700 group-hover:scale-105";

export interface WorkNavigationProps {
  /** First collection cover from Sanity (homepage Photos tile). */
  photosImageSrc?: string;
  /** First video thumbnail URL (homepage Videos tile). */
  videosImageSrc?: string;
  /** Used to fall back YouTube thumb URLs when maxres is missing. */
  videosYoutubeId?: string;
}

function youtubeThumbFallback(e: SyntheticEvent<HTMLImageElement>, youtubeId: string) {
  const el = e.currentTarget;
  if (el.src.includes("maxresdefault")) {
    el.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  } else if (el.src.includes("hqdefault")) {
    el.src = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
  }
}

const WorkNavigation = ({
  photosImageSrc,
  videosImageSrc,
  videosYoutubeId,
}: WorkNavigationProps) => {
  const navigate = useNavigate();
  const showPhotosImg = Boolean(photosImageSrc);
  const showVideosImg = Boolean(videosImageSrc);

  return (
    <div id="work" className="scroll-mt-14 flex flex-col md:flex-row">
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        onClick={() => navigate("/photos")}
        className="group relative flex h-[50vh] md:h-[70vh] md:w-1/2 cursor-pointer items-center justify-center overflow-hidden"
      >
        {showPhotosImg ? (
          <>
            <motion.img
              src={photosImageSrc}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              aria-hidden
              draggable={false}
            />
            <motion.div
              className={photosPanelTint}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              aria-hidden
            />
          </>
        ) : (
          <motion.div
            className={photosGradientOnly}
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            aria-hidden
          />
        )}
        <div className="absolute inset-0 bg-background/45 transition-colors duration-500 group-hover:bg-background/30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Photos</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-foreground font-black">
            View Collections
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        onClick={() => navigate("/videos")}
        className="group relative flex h-[50vh] md:h-[70vh] md:w-1/2 cursor-pointer items-center justify-center overflow-hidden"
      >
        {showVideosImg ? (
          <>
            <motion.img
              src={videosImageSrc}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              aria-hidden
              draggable={false}
              onError={
                videosYoutubeId
                  ? (e) => youtubeThumbFallback(e, videosYoutubeId)
                  : undefined
              }
            />
            <motion.div
              className={videosPanelTint}
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              aria-hidden
            />
          </>
        ) : (
          <motion.div
            className={videosGradientOnly}
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            aria-hidden
          />
        )}
        <div className="absolute inset-0 bg-background/45 transition-colors duration-500 group-hover:bg-background/30" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">Videos</h2>
          <p className="mt-2 text-sm uppercase tracking-widest text-foreground font-black">
            Watch Reels
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default WorkNavigation;
