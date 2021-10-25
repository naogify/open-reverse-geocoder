/**
 * Base interface of reverse geocoding result
 */
export interface ReverseGeocodingResult {
  code?: string
}

/**
 * Interface of country polygons by world bank
 */
export interface ReverseGeocodingResultCountry extends ReverseGeocodingResult {
  name: string
}

/**
 * Interface of reverse geocoding result for Japan
 */
export interface ReverseGeocodingResultJP extends ReverseGeocodingResult {
  prefecture: string
  city: string
}

/**
 * Interface of reverse geocoding result for DRC Congo
 */
export interface ReverseGeocodingResultCD extends ReverseGeocodingResult {
  province: string
  district: string
}

/**
 * Interface of reverse geocoding result for Rwanda
 */
export interface ReverseGeocodingResultRW extends ReverseGeocodingResult {
  province: string
  district: string
  sector: string
  cell: string
  village: string
}
