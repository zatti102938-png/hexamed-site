import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";

const CEO_VIDEO_URL = "https://hexamedical.com.br/wp-content/uploads/2024/12/V3-1920-x-1080-Horizontal-1.mp4";

const CeoVideoBlock = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  const handlePlay = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => {
          videoRef.current!.controls = true;
          setIsPlaying(true);
        });
      }
    }
  };

  return (
    <section className="border-t border-border bg-dark-surface py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-primary">
              {t("ceo.label")}
            </span>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {t("ceo.name")}
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-white/80">
              {t("ceo.description")}
            </p>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-3xl font-extrabold text-primary">16+</div>
              <p className="text-sm text-white/70">{t("ceo.stat")}</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl aspect-video">
            <video
              ref={videoRef}
              src={CEO_VIDEO_URL}
              controls={isPlaying}
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="h-full w-full object-cover"
            />
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 transition-colors hover:bg-black/25"
                aria-label="Play CEO video"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-110">
                  <Play className="h-8 w-8 ml-1" />
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoVideoBlock;
