# new_ecran_de_veille
On va réaliser une sorte d'écran de veille avec une image qui bouge dans un carré. Un peu comme les vieux écrans de veille des premiers Windows pour ceux qui ont connu. Voici une vidéo qui représente l'objectif à atteindre :

!! Merci de suivre le TP étape par étape, et de ne pas reproduire le modèle de la vidéo dès le début !!

Le grand carré est une div qui fait 500 pixels de cote. Et l'image qui bouge fait 50 pixels de côté. Ils fonctionnent avec des position relative/absolute en CSS. Ça c'est la base, après on va améliorer notre code.
Les différentes parties du TP déroulent étape par étape le code a créer pour avoir un "écran de veille" sympa avec quelques fonctionnalités. Ça va du plus simple au plus compliqué, et certaines parties nécessiteront d'utiliser les concepts nouveaux (asynchrone, récursivité), mais de manière minimaliste.

N'hésitez pas à mettre en application tout ce que nous avons déjà vu ensemble sur le HTML/CSS pour améliorer le style de votre page (SCSS, Bootstrap, etc...)

Vous aurez besoin de manipuler de manière très simple ces concepts en JS, selon les différentes parties :

    les événements
    la manipulation du DOM
    asynchrone
    récursivité


Je le répète, nous n'avons pas encore vu tous ces concepts en cours, mais vous pouvez commencer à les découvrir simplement. Ils sont vraiment très répandus dans l'utilisation de JS, donc c'est compliqué de s'en passer, et plus tôt vous les découvrirez, mieux ce sera. Pour le reste, vous pourrez tout faire avec les éléments de base de JS (fonctions, conditions, etc...). Vous pouvez même vous passer des boucles.

Je vous ai décortiqué chaque étape afin que vous ayez un fil conducteur clair. Libre à vous de reformuler la logique que je vous propose, ou bien de nommer vos éléments différemment que les miens (fonctions, variables, etc...), une fois que vous aurez compris ce que j'attends de vous. Voici un exemple des différentes étapes qu'on aurait à respecter pour avancer "pas à pas" :
Conseil : pour arriver au résultat attendu, vous allez devoir écrire beaucoup de lignes dans le même fichier. Donc faites quelque chose de clair et lisible, avec des nommages qui ont du sens, des commentaires, etc... Sinon vous ne vous y retrouverez pas vous même au bout d'un moment.


Consignes


Mise en place :

    créez un fichier veille.html et un fichier veille.js
    Créez une div "id = conteneur", et une div "id = carre". Mettez vos div en place comme sur l'image de présentation grâce au html / css. Ce sont des div avec des positions relative/absolute, et vous utiliserez les propriétés bottom et left pour positionner le petit carré
    vérifier que votre script JS fonctionne en affichant dans la console "Lancement écran de veille"


Voici un exemple de ce que vous devriez avoir pour l'instant :
Partie 1 : faire bouger le carré dans une direction (easy)

    mettez en place un événement qui attends que le DOM soit chargé, et affichez "Le DOM est chargé" quand l’événement se déclenche. C'est ce qui permet d'attendre le chargement complet de la page avant de lancer votre script. Ecrivez tout votre script à l'intérieur de cet événement.
    définissez en JS les valeurs des propriétés "bottom" et "left" de votre carré en utilisant la fonction querySelector(). Puis, affichez le contenu de ces propriétés dans votre console.
    demandez deux valeurs à l'utilisateur qui correspondent a des nouvelles coordonnées du carré. Mettez ces valeurs dans des variables x / y, puis changez à nouveau les valeurs bottom et left du carré avec la méthode querySelector
    rajouter un bouton "Go" dans le html avec id = go, en dehors de vos div, puis mettez toutes les instructions JS du point précédent dans un événement qui se déclenche quand on clique sur le bouton Go
    En dehors de votre événement "go", définissez deux constantes min et max, et écrivez une fonction ckeckValue qui prends un paramètre et qui vérifie si ce paramètres est supérieur ou égal à min, et inférieur ou égal à max. Cette fonction renverra true ou false
    Dans votre événement "go", vérifiez les valeurs saisies par l'utilisateur, et ne modifiez las valeurs bottom left que si les valeurs sont bonnes
    Créez une constante qui s'appel cycle et initialisé la à 1000. Créez une fonction qui s'appel run et qui affiche les valeurs de x et de y. Faites en sortes d'exécuter cette fonction dans votre événement go toutes les secondes, grâce à la fonction native de JS setInterval() et votre constante cycle.
    Créez une fonction changePositionX() et changePositionY() qui ont chacune un paramètre, et qui changent respectivement les propriétés css bottom et left du carré. Dans votre fonction run, incrémentez x et y de 1, puis appelez vos fonctions changePosition avec les nouvelles valeurs de x et y.
    Forcez vos coordonnées de départ à 0 0, et changez la valeur de votre constante cycle à 1
    Rajouter un bouton stop qui permet de désactiver manuellement l'interval setInterval()


Partie 2 : mettre des limites et faire bouger le carré dans deux directions (medium/tricky)

    faites en sorte que les positions x y ne changent que si x et y sont dans le bons intervalles en utilisant vos fonctions checkValue. Si ça n'est pas le cas, le setInterval doit être désactivé afin d’arrêter de lancer la fonction run() périodiquement
    définissez une nouvelle constante TAILLE_CARRE qui prendra comme valeur la taille de votre carré (récupérée via le DOM, en JS). Ecrivez une fonction checkPosition(), qui vérifiera que votre carré à une position qui ne peut pas déborder à l'extérieur de votre conteneur (elle prendra en compte la constante TAILLE_CARRE, et elle renverra true ou false). Puis prenez en compte cette fonction dans la condition de votre fonction run(), avec les checkValue().
    créez une variable "direction" contenant un objet avec les clés "x" et "y", initialisées à 1. Puis créez une fonction changeDirection() qui vous dira si la direction de x et y peut être 1 ou -1 en fonctions des limites des div. Cela correspond au fait que l'on peux "avancer" (par exemple x = x+1) ou bien "reculer" (par exemple x = x -1). Puis faites en sorte que les valeurs de x et de y, dans votre fonction run, changent en fonction de la direction (donc incrémental ou décrémental)
    Changez les variables de départ. Mettez 10 0 au lieu de 0 0 par exemple


Partie 3 : modifier la trajectoire du carré (tricky)

    faites en sorte que l'incrémentation de X et Y puissent se faire de 1 en 1 OU de 2 en 2 aléatoirement. Créez une fonction radomCoeff qui va vous générer aléatoirement un chiffre entre 1 et 2, vous vous servirez de cette valeur pour définir la valeur de vos incréments. Vous changerez la valeur de vos coeffs uniquement lorsqu'il y a un changement de direction de X ou de Y.
    Augmentez un peu les valeurs possibles de votre coeff aléatoire. Et transformez votre carré en cercle grâce au border-radius en CSS.
    Améliorez votre code librement. Cleanez tout. Enlever les setInterval, et faire en sorte que la fonction run se relance elle même grâce à un setTimeout au bout de "cycle" millisecondes, après avoir changé les positions X Y du carré
    Faites en sorte que l'animation se lance seulement quand on clique sur le bouton "go", et qu'elle s’arrête quand on clique sur le bouton "Stop"


Partie 4 : améliorer l'interaction avec le DOM (medium)

    rajoutez deux input type number dans votre fichier HTML. L'un avec id="x" et l'autre avec id="y". Initialisez les à 0.
    faites en sorte que vos variables X et Y se définissent selon les valeurs des input HTML id=x et id=y (grâce à querySelector)
    faites en sorte que quand l'animation est lancée, les valeurs des variables X et de Y soient visibles dans les input HTML (grâce à querySelector)
    rajouter un bouton "Relancer". Mettez en place un événement clic sur le bouton. Faites en sorte que tout revienne à zéro quand on clique sur ce bouton.
    faire en sorte que le style des bordures du conteneur change à chaque fois que le carré viens toucher un des bords. Pour ça, créez une fonction highlightBorder qui sera exécutée à chaque fois que le carré touche un des bords du conteneur


Partie 5 : afficher l'image, et rajouter un curseur pour la vitesse (medium/tricky)

    dans l’événement "go", récupérer l'objet JSON renvoyé par cette url : http://cda2019.webboy.fr/veille.php (en utilisant le fetch vu en asynchrone)
    changer l'image de fond du carré en utilisant la valeur image de l'objet récupérée précédemment. Les images sont disponibles sur cette URL : http://cda2019.webboy.fr/fichier-image.png.
    Faire en sorte que votre animation ne se lance que lorsque l'image est chargée et affichée dans le carré.
    retoucher au style du carré pour ne voir que l'image (sans les bordure et la couleur de fond)
    rajouter un input range dans le HTML, qui permet de modifier la vitesse (la valeur du cycle) à la souris.
    rajouter un événement "change" sur le input range qui permet de modifier la vitesse du cycle dès que le curseur à bougé



A vérifier :

    la vitesse du carré ne doit pas accélerer quand on clique plusieurs fois sur "go"
    ...

Idée pour ce qui ont fini : (sauvegardez bien votre travail avant)

    faire en sorte que ça marche si on change les dimensions du carré et du conteneur
    faire en sorte que ça marche si le conteneur est un triangle
