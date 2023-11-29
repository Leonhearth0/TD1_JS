const prompt = require('prompt-sync')();

class Chapitre { // Class pour construction des objets chapitres
    constructor(texte, choix1, choix2, gameover = false, prochainChapitre1, prochainChapitre2) { // Paramètres des objets chapitres
        this.texte = texte; // texte du chapitre
        this.choix1 = choix1; // texte du choix 1
        this.choix2 = choix2; // texte du choix 2
        this.gameover = gameover; // condition gameover pour les 2 chapitres de fin
        this.prochainChapitre1 = prochainChapitre1; // déclare lien entre chapitre actuel et sa suite si choix 1
        this.prochainChapitre2 = prochainChapitre2; // déclare lien entre chapitre actuel et sa suite si choix 2
    }
}

class Histoire { // Class pour indiquer block de code début de l'aventure + boucle de gameplay
    constructor(ChapitreDebut) {
        this.chapitreActuel = ChapitreDebut;
    }

    start() { // Début Boucle de gameplay
        while (true) { // Boucle infinie jusqu'à tomber sur condition de "Break"

            console.log(this.chapitreActuel.texte); // Affiche texte du chapitre
            if (this.chapitreActuel.gameover) { // Check si paramètre gameover is true. Si true, affiche message "fin de partie" et termine instance de jeu 
                console.log("Fin de la partie");
                break;
            }
            console.log("1. " + this.chapitreActuel.choix1); // Affiche dans console choix 1 + paramametre texte du choix 1 pour chapitre actuel
            console.log("2. " + this.chapitreActuel.choix2); // Affiche dans console choix 2 + paramametre texte du choix 2 pour chapitre actuel
            let reponse = prompt("Votre Choix (1 ou 2) ")
            if (reponse == "1") {
                this.chapitreActuel = this.chapitreActuel.prochainChapitre1 // Si choix 1, même au parametre prochain chapitre 1. 
            }
            else if (reponse == "2") { // Si choix 2, mène au parametre prochain chapitre 2.
                this.chapitreActuel = this.chapitreActuel.prochainChapitre2
            } else { console.log("Merci de choisir 1 ou 2 ") } // Si choix invalide, affiche message et redemande
        }
    }
}

/* Déclaration des objets chapitres*/

let ChapitreDebut = new Chapitre(`Nous sommes en 1112. Pendant des années, la guerre a fait rage sur le continent de Caldaria suite à la chute du précédent Empire et sa dissolution en trois Royaumes. D'autres Royaumes dissidents ont eux aussi voulu gouverner ces terres
Après des années de nombreux Royaumes sont tombés et seuls d'eux d'entre eux subsistent. Tout d'abord, le Royaume de Vlandia gouverné par le Roi Derhert II, fils du roi Derhert, connu pour sa cavalerie lourde. Et l'Empire du Nord, dernier reliquat de l'Empire de Caldaria après la chute de l'Empire de l'Ouest et du Sud qui utilise principalement des phalanges de Légionnaires.

En tant que possesseur de la Bannière du Dragon, relique censée être entre les mains de celui qui refondra l'Empire de Caldaria, vous êtes entré au service de Derhert II il y a des années.
Après des années de conquêtes et de batailles, vous voici arrivé à la bataille finale aux côté du Roi. Celle-ci décidera du destin de la Caldaria.

Alors que les deux armées sont alignées l'une face à l'autre, vous êtes à la tête de votre clan étant majoritairement composé de Cavaliers lourds. Face à vous, une ligne de piquiers est présente en première ligne. Alors que le Roi ordonne l'attaque vous `, "Chargez directement, vous et votre clan, confiant dans les capacités défensives de vos troupes lourdes.", "Faites le choix plus prudent de contourner les lignes ennemies profitant de votre mobilité sur les troupes majoritairement à pied de vos opposants.")

let ChapitreMauvaiseFin = new Chapitre(`Vous avez pris un très mauvais coup. Alors que vous regardez en direction de la douleur qui vous lacère, vous vous rendez compte à la quantité de sang perdu qu'il ne vous reste plus longtemps.
A peine avez-vous le temps de vous en rendre compte que vous sentez de nouveau une douleur.
Celle-ci sera la dernière. Vous êtes mort.`, null, null, true)

let ChapitreBonneFin = new Chapitre(`Vous mettez alors toutes vos forces dans un dernier coup ravageur. Vous voyez Luçon tomber lourdement au sol, crachant du sang.
Alors que vous regardez béatement autour de vous, les combats proches cessent et un silence se fait sentir. Mais celui-ci n'est que de courte durée puisqu'il est rompu par un soldat criant de ses pleins poumons « L'Empereur Luçon a été vaincu ! Longue vie au Roi, longue vie au porteur de bannière ! ».
Vous avez réussi. Vous avez survécu à cette dernière bataille. Le Roi pour lequel vous avez été fidèle depuis tant d'années est maintenant l'Empereur et vous serez connu comme une légende. Vous êtes le « Porteur de Bannière. » Félicitations.`, null, null, true)

let Chapitre1_1 = new Chapitre(`Vous chargez directement sur la première ligne ennemie. Vous avez sous-estimé l'efficacité des piques et les pertes au sein de votre unité sont lourdes. Toutefois, vous et vos plus proches compagnons d'armes réussissez à infliger quelques dégâts à la ligne ennemi et vous vous en sortez personnellement sans trop de heurt.
Suite à cette charge vous`, `Décidez d'effectuer une nouvelle charge sur la ligne ennemie.`, `Décidez de vous reculer et de vous regrouper avec vos compagnons`)

let Chapitre1_1_1 = new Chapitre(`Enragé par la première charge, vous décidez de remettre le couvert. Vous vous apercevez vite que c'était un mauvais choix. Les chevaux de vos propres compagnons se retrouvent embrochés par les piquiers et ceux-ci tombent lourdement au sol. Surpris du résultat, vous n'avez pas le temps de voir un piquer adverse qui vous transperce sur votre flanc.`, `Continuer`, `Continuer`) // mène vers Bad Ending//

let Chapitre1_1_2 = new Chapitre(`Suite aux dégâts infligés à votre unité, vous indiquez à vos hommes de reculer afin de vous regrouper et d'estimer les dégâts.
Vous retournez auprès du Roi et faites rapidement le point sur les pertes concernant les autres unités. La bataille semble être équilibrée, mais vous apercevez au loin une brèche dans la défense adverse menant directement au centre de l'armée ennemie.`, `Continuer`, `Continuer`) // mène vers Chapitre3

let Chapitre1_2 = new Chapitre(`Vous décidez de contourner la première ligne de piquiers ennemis et de les laisser aux mains des fantassins et archers de l'armée de Vlandia.
Jetant un coup d’œil sur l'arrière garde adverse, vous apercevez une ouverture vers les archers adverse. Toutefois, vous apercevez également une unité de cavalerie légère qui essaye également de contourner le milieu du champs de bataille. Vous :`, `Chargez les archers en position fixe sur le champ de bataille.`, `Chargez la cavalerie légère.`)

let Chapitre1_2_1 = new Chapitre(`Vous vous élancez alors avec vos compagnons vers les archers adverses. Ceux-ci n'étant que légèrement protégés par leurs fines armures, votre cavalerie lourde n'a aucun mal a percer leur formation et commencez à la mettre en déroute.
Vous choisissez alors d'`, `En finir une bonne fois avec l'unité d'archers.`, `Être prudent et de détourner votre attention vers la cavalerie légère.`)

let Chapitre1_2_1_1 = new Chapitre(`Vous restez au centre de l'unité d'archers, tailladant à coup d'épée longue tous ceux qui sont à votre portée.
Malheureusement, votre volonté d'achever l'ennemi se retourne contre vous. L'unité de cavalerie légère aperçue plus tôt finit par vous encercler vous et vos compagnons. Malgré vos armures lourdes, leur avantage du nombre est trop important.`, `Continuer`, `Continuer`) // Mène vers Bad Ending 

let Chapitre1_2_1_2 = new Chapitre(`Alors que l'unité d'archer est en panique suite à votre charge, vous vous retourner vers la cavalerie légère. Choix judicieux qui permet de vous regrouper avant que cette unité ne vous atteigne. Vous formez une ligne solide sur laquelle la cavalerie légère vient s'écraser, surprise par la rapidité à laquelle vous avez réagi à leur approche.
Les archers paniqués et la cavalerie légère désarçonné, vous vous retirez alors pour vous regrouper à l'arrière auprès du Roi et faites rapidement le point sur les pertes concernant les autres unités. Malgré votre succès, la bataille semble être équilibrée, mais vous apercevez au loin une nouvelle brèche dans la défense adverse menant directement au centre de l'armée ennemie.`, `Continuer`, `Continuer`)

let Chapitre1_2_2 = new Chapitre(`Vous décidez d'intercepter la cavalerie légère avant que celle-ci ne vous atteigne ou s'attaque à votre Roi. Cette unité est plus rapide que la votre, mais grâce à votre expérience, vous parvenez à anticiper leur mouvement de troupe et à les intercepter avant qu'ils n'aient pu faire trop de dégâts au reste des troupes vlandiennes.
Vous parvenez facilement à les mettre en déroute vous donnant ensuite l'avantage sur les archers paniqués.
Les archers paniqués et la cavalerie légère désarçonné, vous vous retirez alors pour vous regrouper à l'arrière auprès du Roi et faites rapidement le point sur les pertes concernant les autres unités. Malgré votre succès, la bataille semble être équilibrée, mais vous apercevez au loin une nouvelle brèche dans la défense adverse menant directement au centre de l'armée ennemie.`, `Continuer`, `Continuer`)

let Chapitre3 = new Chapitre(`Vous vous élancez alors seul vers Luçon, dirigeant de l'armée ennemie, esquivant les troupes ennemies jusqu'à être à sa portée. Avec votre épée longue, vous décidez de frapper`, ` directement Luçon.`, ` la monture de Luçon`)

let Chapitre3_1 = new Chapitre(`De par son expérience, Luçon voit aisément votre coup venir. Celui-ci vous pare avant qu'un membre de sa garde rapprochée ne parvienne à embrocher votre monture. Vous tombez alors lourdement au sol avant que le même garde ne vous inflige une blessure perçante.`, `Continuer`, `Continuer`) // Mène vers Bad Ending

let Chapitre3_2 = new Chapitre(`Alors que le chef ennemi s'attendait à une attaque directe de votre part, vous décidez à la place d'attaquer sa monture. Celle-ci, au moins autant surprise que votre adversaire se redresse sur ses pattes arrière désarçonnant son cavalier. Luçon se retrouve au sol étourdi par sa chute.
Vous décidez alors de`, ` rester à cheval pour garder l'avantage. `, ` descendre de votre cheval et affronter Luçon de manière honorable.`)

let Chapitre3_2_1 = new Chapitre(`Alors que votre adversaire est au sol, vous tentez de l'achever rapidement en le transperçant de votre épée longue. C'était toutefois sans compter sur l'un des membres de sa garde rapprochée qui, profitant de votre attention focalisée, parvient à vous porter un coup d'estoc sur votre flanc qui vous fait lourdement tomber de votre monture`, ` Continuer`, `Continuer`) // Mène vers Bad Ending

let Chapitre3_2_2 = new Chapitre(`Souhaitant combattre honorablement pour ce qui est sans doute votre dernière bataille, vous descendez de votre monture. Alors que vous approchez de Luçon, un membre de sa garde tente de s'interposer mais son chef lui ordonne de s'arrêter. Luçon veut vous combattre vous, le porteur de bannière, en duel.
Pour votre duel final vous décidez de`, ` Attaquer Luçon de toute vos forces.`, ` Garder votre calme et adopter une approche prudente. `)

let Chapitre_Final_1 = new Chapitre(`Avec la volonté d'en finir, vous vous jetez de toute vos forces sur votre adversaire. Alors que vos épées s'entrechoquent, vous ne parvenez pas à voir que celui-ci à discrètement sorti une lame cachée qu'il parvient avec précision à enfoncer entre deux plaques de votre armure. La douleur vous arrête net.`, `Continuer`, `Continuer`) // Mène vers Bad Ending

let Chapitre_Final_2 = new Chapitre(`Alors que vous auriez pu prendre l'avantage en attaquant directement, vous choisissez de laisser Luçon vous attaquer en premier en adoptant une posture défensive.
Alors que vous épées s'entrechoquent, vous parvenez à voir que votre adversaire a sorti une lame cachée qu'il tente de vous enfoncer entre les plaques de votre armure. Vous parvenez à l'esquiver à temps et à trancher son poignet tenant la lame.`, `Continuer`, `Continuer`) // Mêne à Good Ending


/*Liaison des chapitres entre eux suite aux choix*/

ChapitreDebut.prochainChapitre1 = Chapitre1_1;
ChapitreDebut.prochainChapitre2 = Chapitre1_2;
Chapitre1_1.prochainChapitre1 = Chapitre1_1_1;
Chapitre1_1.prochainChapitre2 = Chapitre1_1_2;
Chapitre1_1_1.prochainChapitre1 = ChapitreMauvaiseFin
Chapitre1_1_1.prochainChapitre2 = ChapitreMauvaiseFin
Chapitre1_1_2.prochainChapitre1 = Chapitre3
Chapitre1_1_2.prochainChapitre2 = Chapitre3
Chapitre1_2.prochainChapitre1 = Chapitre1_2_1
Chapitre1_2.prochainChapitre2 = Chapitre1_2_2
Chapitre1_2_1.prochainChapitre1 = Chapitre1_2_1_1
Chapitre1_2_1.prochainChapitre2 = Chapitre1_2_1_2
Chapitre1_2_1_1.prochainChapitre1 = ChapitreMauvaiseFin
Chapitre1_2_1_1.prochainChapitre2 = ChapitreMauvaiseFin
Chapitre1_2_1_2.prochainChapitre1 = Chapitre3
Chapitre1_2_1_2.prochainChapitre2 = Chapitre3
Chapitre1_2_2.prochainChapitre1 = Chapitre3
Chapitre1_2_2.prochainChapitre2 = Chapitre3
Chapitre3.prochainChapitre1 = Chapitre3_1
Chapitre3.prochainChapitre2 = Chapitre3_2
Chapitre3_1.prochainChapitre1 = ChapitreMauvaiseFin
Chapitre3_1.prochainChapitre2 = ChapitreMauvaiseFin
Chapitre3_2.prochainChapitre1 = Chapitre3_2_1
Chapitre3_2.prochainChapitre2 = Chapitre3_2_2
Chapitre3_2_1.prochainChapitre1 = ChapitreMauvaiseFin
Chapitre3_2_1.prochainChapitre2 = ChapitreMauvaiseFin
Chapitre3_2_2.prochainChapitre1 = Chapitre_Final_1
Chapitre3_2_2.prochainChapitre2 = Chapitre_Final_2
Chapitre_Final_1.prochainChapitre1 = ChapitreMauvaiseFin
Chapitre_Final_1.prochainChapitre2 = ChapitreMauvaiseFin
Chapitre_Final_2.prochainChapitre1 = ChapitreBonneFin
Chapitre_Final_2.prochainChapitre2 = ChapitreBonneFin

// Lancement de l'instance de jeu
let jeu = new Histoire(ChapitreDebut);
jeu.start();