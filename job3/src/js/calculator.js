function calculate(expression) {
    // Nettoyer l'expression
    expression = expression.trim();

    // Vérifier si l'expression est vide
    if (!expression) {
        throw new Error("Expression vide");
    }

    // Vérifier si l'expression est valide
    if (!isValidExpression(expression)) {
        throw new Error("Expression invalide");
    }

    try {
        // Évaluer l'expression de manière sécurisée
        const result = Function('"use strict";return (' + expression + ')')();
        
        // Vérifier si le résultat est un nombre
        if (typeof result !== 'number' || isNaN(result)) {
            throw new Error("Résultat non numérique");
        }
        
        return result;
    } catch (e) {
        // Si l'expression est syntaxiquement invalide, on renvoie "Expression invalide"
        if (e instanceof SyntaxError || !isValidExpression(expression)) {
            throw new Error("Expression invalide");
        }
        throw new Error("Erreur de calcul");
    }
}

function isValidExpression(expression) {
    // Expression régulière pour valider les caractères autorisés
    return /^[\d\s()+\-*/.]+$/.test(expression);
}

// Exporter pour Jest
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculate };
}
