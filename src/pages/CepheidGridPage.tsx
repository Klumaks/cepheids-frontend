import type {
  CepheidCalibrationRange,
  SpectralClass,
} from "../types/spectralClass";
import { CepheidFilter } from "../components/CepheidFilter";
import { SpectralClassCard } from "../components/SpectralClassCard";
interface CepheidGridProps {
  classes: SpectralClass[];
  range: CepheidCalibrationRange;
  error: string;
  onChange: (range: CepheidCalibrationRange) => void;
  onApply: () => void;
}
export function CepheidGridPage({
  classes,
  range,
  error,
  onChange,
  onApply,
}: CepheidGridProps) {
  return (
    <main className="cepheid-page">
      <h1>Плитка</h1>
      <CepheidFilter
        range={range}
        error={error}
        onChange={onChange}
        onApply={onApply}
      />
      <div className="cepheid-grid">
        {classes.map((c) => (
          <SpectralClassCard key={c.id} spectralClass={c} />
        ))}
      </div>
      {!classes.length && (
        <p role="status">
          Спектральные классы не найдены. Измените диапазон коэффициентов.
        </p>
      )}
    </main>
  );
}
