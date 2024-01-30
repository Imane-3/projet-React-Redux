

const initialState={
  articles:[
    {id:1 , name:"The davinci code", nameAuthor:"Dane Brown" ,nbpage:"300",description:"Da Vinci Code is a novel written by the American Dan Brown, published in 2003, consisting of 105 chapters and composing the second part of the pentalogy of the fictional character Robert Langdon. The title of the first French-language edition was Le Code de Vinci. It was adapted for the cinema by Ron Howard in 2006." , img:"davinchi.png" },
    {id:2 , name:"The Idiot", nameAuthor:"Fyodor Dostoyevsky" ,nbpage:"500",description:"L'Idiot est un roman de l'écrivain russe Fiodor Dostoïevski publié en feuilleton en 1868 et 1869 dans Le Messager russe, et en édition séparée en deux volumes en 1874.  ",img:"idiot.png" },
    {id:3 , name:"A Tale ...", nameAuthor:"Charles Dichens" ,nbpage:"200", description:" The Tale of Two Cities, sometimes titled in French The Tale of Two Cities or Paris and London in 1793, is a novel by Charles Dickens published in weekly serial form from April 30 to November 25" ,img:"tale.png"},
    {id:4 , name:"صانع الظلام", nameAuthor:"تامر ابراهيم" ,nbpage:"600", description:" تامر إبراهيم هو من كتاب الرعب والتشويق في العالم العربي، ولد في الكويت عا م 1980م، وتخرج في كلية الطب بجامعة عين شمس عام 2003م بتقدير مقبول، صدرت له عدة سلاسل روائية ومجموعات قصص قصيرة إحداها مع د.أحمد خالد توفيق. أحد أفضل كتاب الرعب في العالم العربي، الدكتور تامر إبراهيم هو كاتب مصري معاصر، بدأ ظهوره في سلسلة (سلة روايات) بأكثر من عدد، ثم إتجه إلى سلسلة (ميجا) المنوعة مع الكاتبين: تامر فتحي و تامر أحمد، توقفت السلسلة بعد صدور العدد الثالث" ,img:"TAMIR.png"},
    {id:5 , name:"The Hunchback ...", nameAuthor:"Victor Hugo" ,nbpage:"400", description:"It tells the story of the beautiful gypsy Esmeralda, condemned as a witch by the tormented archdeacon Claude Frollo, who lusts after her. Quasimodo, the deformed bell ringer of Notre-Dame Cathedral, having fallen in love with the kindhearted Esmeralda, tries to save her by hiding her in the cathedral's tower." ,img:"thehanchbok.png"},    
    {id:6 , name:"قواعد جارتين", nameAuthor:"عمرو عبد الحميد" ,nbpage:"600", description:"عمرو عبد الحميد (مواليد محافظة الدقهلية في 1987م)، هو كاتب روائي مصري. درس الطب متخصصاً بجراحة الأنف والأذن والحنجرة بجامعة المنصورة. اشتهر كاتبًا في مجال الخيال بأول أعماله المنشورة وهي ثنائية أرض زيكولا وأماريتا، وصدر له مؤخراً دقات الشامو الجزء الثاني من رواية قواعد جارتين وجزئها الثالث أمواج أكما ",img:"jara.png"},
    {id:7 , name:"Les mésirables", nameAuthor:"Victor Hugo" ,nbpage:"500", description:"Roman épique, Les Misérables dépeint au moins trois grandes fresques : la bataille de Waterloo (qui représente pour l'auteur la fin de l'épopée napoléonienne et le début de l'ère bourgeoise ; il s'aperçoit alors qu'il est républicain), l'émeute de Paris en juin 1832, la traversée des égouts de Paris par Jean Valjean." ,img:"mesirable.png"},
    {id:8 , name:"Pére riche ...", nameAuthor:"Robert T.Kiyosaki" ,nbpage:"200", description:"Père riche, père pauvre est un livre de Robert Kiyosaki et de Sharon Lechter paru en 1997. De style autobiographique, Robert Kiyosaki utilise un ensemble de paraboles et d'exemples tirés de son propre parcours afin de souligner l'importance de développer son intelligence financière." ,img:"pere.png"},
    {id:9 , name:"La voleuse de..", nameAuthor:" Markus Zusak" ,nbpage:"100", description:"Synopsis. Pendant la Seconde Guerre mondiale, en Allemagne, la jeune Liesel se trouve comme passe-temps de voler des livres. Adoptée par une famille habitant une petite ville près de Munich, son quotidien est bouleversé lorsqu'un juif se réfugie chez ses parents adoptifs ." ,img:"lavoleuse.png"},
  ],
  listeUtulisateur:[
    {id:1 , login:"utilisateur1" , password:1111,nom:"chaaoula",prenom:"imane"},
    {id:2 , login:"utilisateur2" , password:2222,nom:"idrissi",prenom:"jamal"},
    {id:3 , login:"utilisateur3" , password:3333,nom:"ait bala",prenom:"mahmoud"},
    {id:4 , login:"utilisateur4" , password:4444,nom:"lmadrawi",prenom:"inass"},
    {id:5 , login:"utilisateur5" , password:5555,nom:"rohi",prenom:"othmane"}
  ]

}

export default function particleReducer(state = initialState, action){
  switch (action.type) {

    case 'ADD_ARTICLE': 
          return {...state, articles: [...state.articles, action.payload ] };

    case 'DELETE_ARTICLE':
          return    {...state,articles: state.articles.filter((article) => article.id !== action.payload.id)};

    case 'UPDATE_ARTICLE':
      //     return    {...state,articles: state.articles.find((article) => article.id !== action.payload.id)};
          const article =state.articles.find((article) => article.id == action.payload.id)
          if (article){
            article.name=action.payload.name
            article.nameAuthor=action.payload.nameAuthor
            article.nbpage=action.payload.nbpage
            article.description=action.payload.description
          }
          return state

    case 'LOGIN':
          return    {...state, listeUtulisateur: action.payload };
          
    case 'ADD_UTILI':
          return    {...state, listeUtulisateur : [...state.listeUtulisateur, action.payload ]};

    case 'FILTERE_ARTICLE':

              if (!state || !state.articles) {
                // Si non, retournez l'état actuel sans modification
                return state;
              }
              const searchTerm = action.payload.name.trim().toUpperCase();
              
              // Vérifiez si state.articles est un tableau avant d'appeler filter
              if (Array.isArray(state.articles)) {
                const filteredArticles = state.articles.filter((article) =>
                  article.name.trim().toUpperCase().includes(searchTerm)
                )
            
                return {
                  ...state,
                  articlefilter: filteredArticles,
                };
              } else {
                // Si state.articles n'est pas un tableau, retournez l'état actuel sans modification
                return state;
              }

    default:
          return state;
  }
};

