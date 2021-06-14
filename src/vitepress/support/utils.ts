export function isArray(value: any): value is any[] {
  return Array.isArray(value)
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}
