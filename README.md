# Mon EPI au Québec — blog de stage

Site statique (HTML/CSS/JS), sans framework, prêt pour GitHub Pages.

## Structure
```
epi-blog/
  index.html              → page d'accueil (liste des articles)
  style.css
  script.js
  articles/
    demarrage.html         → article "Le démarrage de l'EPI"
    semaine1.html           → article "Semaine 1 : le grand départ"
    _template.html          → modèle à dupliquer chaque semaine
  img/
    semaine1/                → photos de la semaine 1
```

## Ajouter un article chaque semaine
1. Copie `articles/_template.html` → renomme-le (ex. `semaine2.html`)
2. Crée un dossier `img/semaine2/` et mets-y tes photos
3. Remplis le titre, les dates, le texte (missions + une anecdote culturelle : c'est noté)
4. Dans `index.html`, remplace la carte "à venir" par une vraie carte vers ton nouvel article
5. Mets à jour les liens `post-nav` (précédent/suivant) dans les deux articles concernés

## Publier sur GitHub Pages (une seule fois)
1. Va sur github.com, crée un nouveau repo public, ex. `mon-epi-quebec`
2. En local, dans le dossier `epi-blog/` :
   ```
   git init
   git add .
   git commit -m "Premier commit du blog EPI"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/mon-epi-quebec.git
   git push -u origin main
   ```
3. Sur GitHub : Settings → Pages → Source → sélectionne la branche `main` et le dossier `/root`, puis Save
4. Le site est en ligne quelques minutes après à l'adresse :
   `https://TON-PSEUDO.github.io/mon-epi-quebec/`

## Publier une mise à jour (chaque semaine)
```
git add .
git commit -m "Ajout semaine X"
git push
```
Le site se met à jour automatiquement en 1-2 minutes.

## Rappel grille de notation (blog, annexe B.8)
- 1 publication par semaine (10%)
- Aspect culturel dans chaque article (10%)
- Qualité du support : lisible, illustré, copyright respecté (5%)
- Présentation du contexte de travail / entreprise (5%)
- Avant le départ : déposer un document avec le lien du blog sur le livret (campus.eseo.fr)
