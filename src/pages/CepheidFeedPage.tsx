import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CEPHEID_CLASSES } from "../data/cepheidClasses";
import type { SpectralClass } from "../types/spectralClass";
import { nextCepheidClass } from "../lib/cepheidCalibration";
import { CepheidMedia } from "../components/CepheidMedia";
export function CepheidFeedPage({ classes }: { classes: SpectralClass[] }) {
  const { id } = useParams();
  const spectralClass =
    id === undefined
      ? classes[0]
      : CEPHEID_CLASSES.find((c) => String(c.id) === id);
  if (!spectralClass)
    return (
      <main className="cepheid-page">
        <h1>{id ? "Спектральный класс не найден" : "Лента пуста"}</h1>
        <Link to="/classes">Вернуться к плитке</Link>
      </main>
    );
  const sequence = classes.some((c) => c.id === spectralClass.id)
    ? classes
    : CEPHEID_CLASSES;
  return (
    <CepheidFeedCard
      key={spectralClass.id}
      spectralClass={spectralClass}
      nextClass={nextCepheidClass(sequence, spectralClass.id)!}
    />
  );
}
function CepheidFeedCard({
  spectralClass,
  nextClass,
}: {
  spectralClass: SpectralClass;
  nextClass: SpectralClass;
}) {
  const [expanded, setExpanded] = useState(false);
  const longDescription = spectralClass.description.length > 150;
  return (
    <main className="cepheid-feed">
      <CepheidMedia
        kind="video"
        source={spectralClass.video_url}
        name={spectralClass.name}
      />
      <div className="cepheid-feed-shade" />
      <aside
        className="cepheid-rail"
        aria-label="Параметры спектрального класса"
      >
        <div>
          <span className="cepheid-circle cepheid-accent" aria-hidden="true">
            ♥
          </span>
          <span aria-label="Количество лайков">
            {spectralClass.likes_count}
          </span>
        </div>
        <div>
          <span className="cepheid-circle">a</span>
          <span>{spectralClass.pl_slope}</span>
        </div>
        <div>
          <span className="cepheid-circle">b</span>
          <span>{spectralClass.pl_intercept}</span>
        </div>
        <Link
          to={`/feed/${nextClass.id}`}
          aria-label="Следующий спектральный класс"
        >
          <span className="cepheid-circle cepheid-accent">↓</span>
        </Link>
      </aside>
      <section className="cepheid-feed-info">
        <h1>{spectralClass.name}</h1>
        <p>
          {expanded || !longDescription
            ? spectralClass.description
            : `${spectralClass.description.slice(0, 150)}…`}
        </p>
        {longDescription && (
          <Button
            variant="link"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Свернуть" : "Больше"}
          </Button>
        )}
      </section>
    </main>
  );
}
