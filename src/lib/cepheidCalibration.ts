import type {
  CepheidCalibrationRange,
  SpectralClass,
} from "../types/spectralClass.ts";
export const INITIAL_CEPHEID_RANGE: CepheidCalibrationRange = {
  min_slope: -5,
  max_slope: 0,
  min_b: -5,
  max_b: 0,
};
export function cepheidRangeError(range: CepheidCalibrationRange): string {
  if (range.min_slope > range.max_slope)
    return "Минимальный наклон a не должен превышать максимальный.";
  if (range.min_b > range.max_b)
    return "Минимальный свободный член b не должен превышать максимальный.";
  return "";
}
export function filterCepheidClasses(
  classes: SpectralClass[],
  range: CepheidCalibrationRange,
): SpectralClass[] {
  return classes.filter(
    (c) =>
      c.pl_slope >= range.min_slope &&
      c.pl_slope <= range.max_slope &&
      c.pl_intercept >= range.min_b &&
      c.pl_intercept <= range.max_b,
  );
}
export function nextCepheidClass(
  classes: SpectralClass[],
  currentID: number,
): SpectralClass | undefined {
  if (!classes.length) return undefined;
  const index = classes.findIndex((c) => c.id === currentID);
  return classes[(index + 1) % classes.length];
}
