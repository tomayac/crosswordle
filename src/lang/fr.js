const STRINGS = {
  "help1": `Le but est de deviner les deux mots qui se croisent en aussi peu de suppositions
      que possible. Chaque supposition doit être composée de mots valides. Après chaque
      supposition, vous recevrez un indice. Par exemple:`,
  "help2": "Les indices se résumeront ainsi:",
  "help3": `Le vert indique que la lettre est au bon endroit. Le jaune indique un
      lettre correcte au mauvais endroit. Chaque carreau jaune correspond à un
      de cette lettre. Par exemple, dans ce cas, la réponse n'a qu'un S donc
      seul le premier S est devenu jaune.`,
  "help4": "De l'indice ci-dessus, vous pouvez déduire:",
  "help5": "Indice : Les deux mots sont liés.",
  "help-clue1": "Il y a un C au début du mot horizontal.",
  "help-clue2": "Il y a un O dans au moins un des mots. Notez qu'il n'y avait qu'un seul O dans votre estimation, même s'il est affiché deux fois dans le résumé.",
  "help-clue3": "Il y a exactement un S dans un des mots.",
  "help-clue4": "Il n'y a ni W ni R dans la réponse.",
  "help-clue5": "Il y a un D dans au moins un des mots.",
  "settings": "Paramètres",
  "skip-filled": "Ignorer les carreaux déjà remplis",
  "clue-remaining": "Indices de clavier pour les lettres restantes",
  "hard-mode": "Mode difficile",
  "hard-mode-next-game": "Le mode difficile prendra effet lors de votre prochaine partie. Il ne peut pas être activé en cours de partie.",
  "create-custom": "Créez vos propres Crosswordle:",
  "credit": `
      Créé par Robert Flack, source disponible sur <a href="https://github.com/flackr/crosswordle">github</a>.
      Inspiré du célèbre jeu <a href="https://www.powerlanguage.co.uk/wordle/">Wordle</a>.
      Fichier de dictionnaire du package aspell6. Voir <a href="third_party/aspell6-en/Copyright">Copyright</a> pour plus de détails.`,
  "victory": "La victoire!",
  "victory-message": `Vous l'avez obtenu en <span id="guesses"></span> suppositions`,
  "click-share": `Cliquez sur <button id="share">partager</button> pour copier un résumé de votre partie`,
  "copied-clipboard": "Résultats copiés dans le presse-papier!",
  "incomplete": "Mot incomplet",
  "horizontal-word-letter-must-be": "La lettre de mot horizontale {} doit être {}",
  "vertical-word-letter-must-be": "la lettre {} du mot vertical doit être {}",
  "unrecognized-word": "Mot absent du dictionnaire: {}",
  "two-words-required": "Vous devez entrer exactement deux mots séparés par un espace.",
  "min-letters": "Vous devez avoir {} {}.",
  "custom-crosswordle": "Crosswordle personnalisée",
  "enter": "Entrer",
  "erase": "Effacer",
  "language": "Language",
  "automatic": "Automatique",
  "english": "Anglais",
  "french": "Français",
};

const FIRST_PUZZLE = new Date(2022,1,20,0,0,0,0);
const ENCODED = ["dhacvzz ffwbxky","ypfh igxdca","ywzskp voeg","wpskn bwpke","eduo xxnwf","qrprb wsceg","ipbic zsjhg","hlaco oceqany","qcck xzse","eoahdp makgngk","pwgto dscbt","chqrap irknn","whvpdp ddr","cwtao kije","tgtxo ildr","eoaik vwdrg","spbxo cibkge","zljb lxhm","lhfidj noinn","grurk wigrg","cpjgll pvvdhru","eouo iqhqkbh","gyag xqvjxch","spjj vxh","ihzglsa bfbgunl","wwfgll vovlhr","sccsk ligkg","wljcvp advrr","yhzib unpqg","hdepo nipxg","jcevcp ejvjt","zlacbp loqvh","hduskp levg","wwhznp imhgny","hlaq kaaokcvj","gccsh limegsu","gyvo xxwzf","rwhco iizxgt","swglo ccajg","zluclv pvghej","ewzvob jdr","wwfrd clovdljt","dphi ogixpbt","qeushja xkgv","zlatnlul ltkj","eoejiygl xazmk","hyfgo msmqg","shvl jqxd","iprkn clecg","ydubc himdln","ewzxo scmcg","trjgo aldtg","kovho lssfdzm","yhjvyykl haehcle","pcki xkhqwg","eoebi nceng","hwcsk dlosg","wpfgon qmpln","lhfutn ooeazbnl","eountj mdxch","kyajo mnvvg","txjshp djxanyk","tvaic bcpkbhy","hwqc obibfay","lyf zzgemf","wwhrkp mjvjh","chfytl lotg","swksk oimbrtj"];
