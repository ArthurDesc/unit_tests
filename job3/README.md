# Projet de Tests Unitaires - Calculatrice

Ce projet contient deux implémentations d'une calculatrice (PHP et JavaScript) avec leurs tests unitaires respectifs.

## Structure du Projet

```
job3/
├── src/
│   ├── js/              # Code source JavaScript
│   │   ├── calculator.js
│   │   ├── Calculator_JS.html
│   │   └── calculator.css
│   └── php/             # Code source PHP
│       ├── calculator.php
│       └── Calculator_PHP.php
├── tests/
│   ├── js/              # Tests JavaScript
│   └── php/             # Tests PHP
├── package.json         # Configuration npm/Jest
└── composer.json        # Configuration Composer/PHPUnit
```

## Installation

1. Installer les dépendances PHP :
```bash
composer install
```

2. Installer les dépendances JavaScript :
```bash
npm install
```

## Lancer les Tests

### Tests PHP (PHPUnit)
```bash
# Lancer tous les tests PHP
composer test

# Lancer les tests en mode watch
composer test:watch
```

### Tests JavaScript (Jest)
```bash
# Lancer tous les tests JavaScript
npm test

# Lancer les tests en mode watch
npm run test:watch
```

## Développement

- Les tests PHP sont écrits avec PHPUnit
- Les tests JavaScript sont écrits avec Jest
- Chaque fonction de la calculatrice doit avoir ses propres tests unitaires
- Les tests doivent couvrir les cas normaux et les cas d'erreur 