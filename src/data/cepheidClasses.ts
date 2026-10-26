import type { SpectralClass } from "../types/spectralClass";
export const CEPHEID_CLASSES: SpectralClass[] = [
  {
    id: 1,
    name: "Спектральный класс F",
    description:
      "Цефеиды — пульсирующие переменные звёзды. Их период связан со средней абсолютной звёздной величиной.\nКоэффициенты a и b задают калибровку M = a · log₁₀(P) + b. Сопоставление абсолютной и видимой величин позволяет определить расстояние. Значения в этой демонстрации иллюстрируют интерфейс и не заменяют научную калибровку.",
    pl_slope: -2.76,
    pl_intercept: -1.4,
    image_url: "/media/class_f.jpg",
    video_url: "/media/class_f.mp4",
    likes_count: 12,
  },
  {
    id: 2,
    name: "Спектральный класс G",
    description:
      "Более холодные звёзды с выраженными линиями металлов в спектре. Параметры зависимости период–светимость показаны для демонстрации фильтрации.",
    pl_slope: -3.1,
    pl_intercept: -1.2,
    image_url: "/media/class_g.jpg",
    video_url: "/media/class_g.mp4",
    likes_count: 8,
  },
  {
    id: 3,
    name: "Спектральный класс K",
    description:
      "Спектральный класс K в демонстрационной коллекции. Для каждой записи отдельно хранятся наклон a и свободный член b.",
    pl_slope: -2.4,
    pl_intercept: -2,
    image_url: "/media/class_k.jpg",
    video_url: "/media/class_k.mp4",
    likes_count: 5,
  },
  {
    id: 4,
    name: "Спектральный класс M",
    description:
      "Спектральный класс M в демонстрационной коллекции. Числа — учебные данные интерфейса, а не результаты измерений цефеид.",
    pl_slope: -3.5,
    pl_intercept: -2.3,
    image_url: "/media/class_m.jpg",
    video_url: "/media/class_m.mp4",
    likes_count: 3,
  },
  {
    id: 5,
    name: "Калибровка цефеид — без медиа",
    description:
      "У записи нет изображения и видео: используются локальные медиа по умолчанию.",
    pl_slope: -2.76,
    pl_intercept: -1.4,
    image_url: "",
    video_url: "",
    likes_count: 0,
  },
  {
    id: 6,
    name: "Калибровка цефеид — проверка медиа",
    description:
      "Адреса файлов недоступны: компоненты заменяют их локальными медиа по умолчанию.",
    pl_slope: -2.9,
    pl_intercept: -1.6,
    image_url: "/media/missing-cepheid.jpg",
    video_url: "/media/missing-cepheid.mp4",
    likes_count: 0,
  },
];
