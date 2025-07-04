import { defineConfig } from 'eslint/config';

export default defineConfig({
  extends: [
    'xo',
  ],
  rules: {
    semi: ['error', 'always'],               // impose les points-virgules
    quotes: ['error', 'double'],             // utilise des guillemets doubles
    eqeqeq: ['error', 'always'],             // impose l'utilisation de === et !==
    indent: ['error', 2],                    // indentation de 2 espaces
    'no-unused-vars': 'warn',                // avertit sur les variables inutilisées
    'react/prop-types': 'off',               // désactive les prop-types si tu utilises TypeScript
    '@typescript-eslint/no-explicit-any': 'warn', // évite l'utilisation de `any`
    curly: ['error', 'all'],                 // impose des blocs pour if/else/while
    'object-curly-spacing': ['error', 'always'], // espace dans les objets { like this }
    'comma-dangle': ['error', 'always-multiline'], // virgule finale en multilignes
    'arrow-body-style': ['error', 'as-needed'],  // simplifie les fonctions fléchées
  },
});
