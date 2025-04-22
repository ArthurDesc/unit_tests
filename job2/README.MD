# test-unitaire-php-debutant

Projet d'initiation aux tests unitaires avec PHPUnit.

## Installation
```bash
composer install
```

## Lancer les tests
```bash
composer test
```

## Structure du projet
- `src/Math.php` : la classe à tester
- `tests/MathTest.php` : le test unitaire
- `images/` : pour les captures d'écran

## Exemple de test
```php
$math = new Math();
$this->assertEquals(5, $math->addition(2, 3));
```

## Bonnes pratiques
- Commits réguliers et explicites
- Documentation claire dans le README
- Captures d'écran pour illustrer le process
