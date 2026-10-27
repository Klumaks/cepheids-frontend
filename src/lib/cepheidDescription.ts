export const CEPHEID_DESCRIPTION_PREVIEW_LENGTH = 20;

export function previewCepheidDescription(description: string) {
  const cepheidCharacters = Array.from(description);
  return {
    preview: cepheidCharacters
      .slice(0, CEPHEID_DESCRIPTION_PREVIEW_LENGTH)
      .join(""),
    isLong: cepheidCharacters.length > CEPHEID_DESCRIPTION_PREVIEW_LENGTH,
  };
}
