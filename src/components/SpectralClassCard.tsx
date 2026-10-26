import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import type { SpectralClass } from "../types/spectralClass";
import { CepheidMedia } from "./CepheidMedia";
export function SpectralClassCard({
  spectralClass,
}: {
  spectralClass: SpectralClass;
}) {
  return (
    <Card as={Link} to={`/feed/${spectralClass.id}`} className="cepheid-card">
      <CepheidMedia
        kind="image"
        source={spectralClass.image_url}
        name={spectralClass.name}
      />
      <Card.Body>
        <Card.Title as="h2">{spectralClass.name}</Card.Title>
        <p>Наклон a = {spectralClass.pl_slope}</p>
        <p>Свободный член b = {spectralClass.pl_intercept}</p>
        <span className="cepheid-likes">♥ {spectralClass.likes_count}</span>
      </Card.Body>
    </Card>
  );
}
