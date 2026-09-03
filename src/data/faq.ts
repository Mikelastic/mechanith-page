import type { Locale } from '../config/i18n';

export interface FaqEntry { q: string; a: string }

export const faq: Record<Locale, FaqEntry[]> = {
  en: [
    {
      q: 'What is Mechanith?',
      a: 'A top-down, sci-fi action rogue-like. You swap control between Kael, a nimble gunslinger, and A.X.L, his robust wheeled companion, to fight through a hostile alien planet, grow stronger at your crashed-ship hub, and uncover the secrets of a lost civilization.',
    },
    {
      q: 'What is “Symbiotic Swapping”?',
      a: 'Our core mechanic. You control two characters with different strengths and can swap between them on the fly. Combat is not just about reflexes — the real skill is knowing who is the right character for each exact moment.',
    },
    {
      q: 'Who are Kael and A.X.L?',
      a: 'Kael (Kaelen) is the protagonist: agile and gun-wielding. A.X.L is his companion: a robust, wheeled robot. One is fast and fragile; the other is durable and deliberate.',
    },
    {
      q: 'How do the levels work?',
      a: 'Each biome is built from carefully crafted rooms and tilemaps — the “dungeon”. A procedural manager connects and populates them, so every descent is a new layout assembled from hand-made parts.',
    },
    {
      q: 'What is the crashed-ship hub?',
      a: 'Your base between runs. Spend the resources you recover to grow stronger before the next descent.',
    },
    {
      q: 'What platforms will it release on?',
      a: 'In development for PC (Steam) — the wishlist is open. Console plans: [FUTURE].',
    },
    {
      q: 'What languages will the game support?',
      a: 'English and Spanish at first release. Simplified Chinese, Japanese, Korean, Brazilian Portuguese, German and Russian are planned afterward.',
    },
    {
      q: 'When does it release? How can I follow development?',
      a: 'No date yet — we will announce it on Steam, Discord and X (and on the mailing list, once it opens). Wishlist and follow to be the first to know.',
    },
  ],
  es: [
    {
      q: '¿Qué es Mechanith?',
      a: 'Un rogue-like de acción de ciencia ficción con vista cenital. Intercambia el control entre Kael, un tirador ágil, y A.X.L, su robusto compañero sobre ruedas, para luchar en un planeta alienígena hostil, hacerte más fuerte en el hub de tu nave estrellada y desentrañar los secretos de una civilización perdida.',
    },
    {
      q: '¿Qué es el «intercambio simbiótico»?',
      a: 'Nuestra mecánica central. Controlas dos personajes con fortalezas distintas, los cuales se pueden intercambiar al instante. El combate no es solo cuestión de reflejos: la verdadera habilidad es saber quién es personaje correcto en cada momento exacto.',
    },
    {
      q: '¿Quiénes son Kael y A.X.L?',
      a: 'Kael (Kaelen) es el protagonista: ágil y armado. A.X.L es su compañero: un robusto robot sobre ruedas. Uno es rápido y frágil; el otro, durable y deliberado.',
    },
    {
      q: '¿Cómo funcionan los niveles?',
      a: 'Cada bioma se construye con salas y tilemaps cuidadosamente diseñados — la «mazmorra». Un gestor procedural los conecta y puebla, así que cada descenso es un trazado nuevo ensamblado con piezas hechas a mano.',
    },
    {
      q: '¿Qué es el hub de la nave estrellada?',
      a: 'Tu base entre partidas. Gasta los recursos que recuperas para hacerte más fuerte antes del próximo descenso.',
    },
    {
      q: '¿En qué plataformas saldrá?',
      a: 'En desarrollo para PC (Steam) — la lista de deseos está abierta. Planes de consolas: [FUTURO].',
    },
    {
      q: '¿Qué idiomas soportará el juego?',
      a: 'Inglés y español en el primer lanzamiento. Chino simplificado, japonés, coreano, portugués de Brasil, alemán y ruso están planificados después.',
    },
    {
      q: '¿Cuándo sale? ¿Cómo puedo seguir el desarrollo?',
      a: 'Aún no hay fecha — la anunciaremos en Steam, Discord y X (y en la lista de correo, cuando abra). Añádelo a tu lista de deseos y síguenos para ser el primero en saberlo.',
    },
  ],
};