import { useState } from "react";
interface CepheidMediaProps {
  source: string;
  kind: "image" | "video";
  name: string;
}
// A changed source remounts the attempt state, so switching classes retries their own media.
export function CepheidMedia(props: CepheidMediaProps) {
  return (
    <CepheidMediaAttempt key={`${props.kind}:${props.source}`} {...props} />
  );
}
function CepheidMediaAttempt({ source, kind, name }: CepheidMediaProps) {
  const [failedSource, setFailedSource] = useState(false);
  const [failedDefault, setFailedDefault] = useState(false);
  const fallback =
    kind === "image" ? "/media/default.jpg" : "/media/default.mp4";
  const usingDefault = !source || failedSource || source === fallback;
  const mediaSource = usingDefault ? fallback : source;
  const handleError = () => {
    if (usingDefault) setFailedDefault(true);
    else setFailedSource(true);
  };
  if (failedDefault)
    return (
      <div className="cepheid-media-unavailable" role="status">
        Медиа недоступно
      </div>
    );
  return kind === "image" ? (
    <img
      className="cepheid-image"
      src={mediaSource}
      alt={name}
      onError={handleError}
    />
  ) : (
    <video
      key={mediaSource}
      className="cepheid-video"
      src={mediaSource}
      aria-label={`Видео: ${name}`}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onError={handleError}
    />
  );
}
