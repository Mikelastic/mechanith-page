export const ui = {
    en: {
      nav: { home: 'Home', media: 'Media', faq: 'FAQ', blog: 'Blog', wiki: 'Wiki' },
      buy: 'BUY',
      whereToBuy: 'Where to buy',
      stayInTouch: 'Stay in orbit',
      newsletterNote: 'Monthly development notes. No spam. Unsubscribe anytime.',
      emailLabel: 'Email address',
      emailPlaceholder: 'you@example.com',
      subscribe: 'Notify me',
      newsletterSoon: 'The mailing list opens soon — until then, catch updates on Discord and X.',
      contactLine: 'Business & press:',
      soon: 'soon',
    },
    // es: { … }   ← future locales are added here; nothing else changes
  } as const;
  
  export type Locale = keyof typeof ui;