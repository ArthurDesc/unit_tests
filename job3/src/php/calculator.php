<?php

namespace App;

class Calculator {
    public function calculate($expression) {
        // Nettoyer l'expression
        $expression = trim($expression);
        
        if (empty($expression)) {
            throw new \Exception("Expression vide");
        }

        // Vérifier si l'expression est valide
        if (!$this->isValidExpression($expression)) {
            throw new \Exception("Expression invalide");
        }

        // Évaluer l'expression de manière sécurisée
        try {
            $result = 0;
            eval('$result = ' . $expression . ';');
            
            // Vérifier si le résultat est un nombre
            if (!is_numeric($result)) {
                throw new \Exception("Résultat non numérique");
            }
            
            return $result;
        } catch (\Throwable $e) {
            throw new \Exception("Erreur de calcul");
        }
    }

    private function isValidExpression($expression) {
        // Expression régulière pour valider les caractères autorisés
        return preg_match('/^[\d\s\(\)\+\-\*\/\.]+$/', $expression) === 1;
    }
}
