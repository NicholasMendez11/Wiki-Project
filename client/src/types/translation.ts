export interface TranslationResponse {
  detectedLanguage: DetectedLanguage;
  translatedText: string;
}

export interface DetectedLanguage {
  confidence: number;
  language: string;
}
