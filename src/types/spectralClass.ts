export interface SpectralClass {
  id: number;
  name: string;
  description: string;
  pl_slope: number;
  pl_intercept: number;
  image_url: string;
  video_url: string;
  likes_count: number;
}
export interface CepheidCalibrationRange {
  min_slope: number;
  max_slope: number;
  min_b: number;
  max_b: number;
}
