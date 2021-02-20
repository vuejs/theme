import WebFont from 'webfontloader'

export function useFont() {
  WebFont.load({
    google: {
      families: [
        'Inter:400,500,600',
        'Noto Sans JP:400,500,700',
        'Source Code Pro'
      ]
    }
  })
}
