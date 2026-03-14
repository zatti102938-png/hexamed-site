import { Play } from "lucide-react";
import { useRef, useState } from "react";

const VIDEO_URL = "https://hexamedical.com.br/wp-content/uploads/2025/05/Hexamedical-Video-site-2.mp4";

const TestimonialsBlock = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground md:text-4xl">
            Clientes que recomendam. Resultados que comprovam.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Hexamedical vai além da entrega: oferece suporte contínuo, agilidade e compromisso real com o sucesso dos seus parceiros.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-black shadow-lg aspect-video">
            <video
              ref={videoRef}
              src={VIDEO_URL}
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
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/20"
                aria-label="Reproduzir vídeo"
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

export default TestimonialsBlock;
