import { Resource, Level, CostModel } from '../types';

export const resources: Resource[] = [
  // Beginner
 [
    "name": "Codecademy",
    "description": "ပရိုဂရမ်းမင်းဘာသာစကားများစွာကို သင်ကြားပေးသော Freemium ပလက်ဖောင်း။",
    "technologies": ["HTML", "CSS", "JavaScript", "jQuery", "Python", "Ruby", "Rails", "PHP", "C++", "Java"],
    "level": "Beginner",
    "costModel": "Freemium",
    "url": "https://www.codecademy.com/",
    "logo": "https://logo.clearbit.com/codecademy.com"
  },
  {
    "name": "Khan Academy's Hour of Code",
    "description": "ဝဘ်ဖွံ့ဖြိုးတိုးတက်မှု၏ အခြေခံများကို လေ့လာရန် အခမဲ့ ၁ နာရီကြာ အပြန်အလှန်တုံ့ပြန် သင်တန်းများ။",
    "technologies": ["HTML", "CSS", "JavaScript", "SQL"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://www.khanacademy.org/hourofcode",
    "logo": "https://logo.clearbit.com/khanacademy.org"
  },
  {
    "name": "UpLeveled Bootcamp Prep Course",
    "description": "ဝဘ်ဖွံ့ဖြိုးတိုးတက်မှု၏ အခြေခံများကို လေ့လာရန် Freemium ပလက်ဖောင်း။",
    "technologies": ["HTML", "CSS", "JavaScript", "Node.js", "Git", "GitHub"],
    "level": "Beginner",
    "costModel": "Freemium",
    "url": "https://upleveled.io/bootcamp-prep-course/",
    "logo": "https://logo.clearbit.com/upleveled.io"
  },
  {
    "name": "Treehouse",
    "description": "ဝဘ်ဆိုဒ်များနှင့် အက်ပ်များ တည်ဆောက်နည်း သင်တန်းများအတွက် အခပေး ပလက်ဖောင်း။",
    "technologies": ["Web Design", "Front End Web Development", "Rails", "iOS", "Android", "PHP"],
    "level": "Beginner",
    "costModel": "Paid",
    "url": "https://teamtreehouse.com/",
    "logo": "https://logo.clearbit.com/teamtreehouse.com"
  },
  {
    "name": "Learn CSS Layout",
    "description": "CSS ဖြင့် layout ပြုလုပ်နည်းအတွက် အခမဲ့ သင်ခန်းစာ။",
    "technologies": ["CSS"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://learnlayout.com/",
    "logo": "https://cdn.worldvectorlogo.com/logos/css-3.svg"
  },
  {
    "name": "Udemy Programming, Development",
    "description": "ပြင်ပသင်တန်းပေးသူများထံမှ သင်တန်းများ၏ Freemium ဈေးကွက် - အရည်အသွေး ကွဲပြားနိုင်သည်။",
    "technologies": ["HTML", "CSS", "JavaScript", "Ruby", "Rails", "Python", "iOS", "Android"],
    "level": "Beginner",
    "costModel": "Freemium",
    "url": "https://www.udemy.com/courses/development/programming-fundamentals/",
    "logo": "https://logo.clearbit.com/udemy.com"
  },
  {
    "name": "Code Avengers",
    "description": "အခြေခံ ဝဘ်နှင့် အက်ပ် ဖွံ့ဖြိုးတိုးတက်ရေး သင်တန်းများအတွက် Freemium ပလက်ဖောင်း။",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "level": "Beginner",
    "costModel": "Freemium",
    "url": "https://www.codeavengers.com/",
    "logo": "https://logo.clearbit.com/codeavengers.com"
  },
  {
    "name": "Shay Howe's Learn to Code HTML & CSS",
    "description": "ဝဘ်ဖွံ့ဖြိုးတိုးတက်မှုဆိုင်ရာ အခမဲ့ အစပြုသူမှ အလယ်အလတ်အဆင့် လမ်းညွှန်များ။",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://learn.shayhowe.com/",
    "logo": "https://learn.shayhowe.com/assets/images/shay-howe-avatar.png"
  },
  {
    "name": "HTML Dog",
    "description": "ဝဘ်ဖွံ့ဖြိုးတိုးတက်မှုဆိုင်ရာ အခမဲ့ အစပြုသူနှင့် အလယ်အလတ်အဆင့် လမ်းညွှန်များ။",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://htmldog.com/",
    "logo": "https://htmldog.com/img/logo.png"
  },
  {
    "name": "freeCodeCamp",
    "description": "အခမဲ့ ကုဒ်ရေးနည်းလေ့လာပြီး တစ်ချိန်တည်းမှာ အကျိုးအမြတ်မယူသော အဖွဲ့အစည်းများကို ကူညီပါ။",
    "technologies": ["HTML", "CSS", "JavaScript", "Databases", "Git & GitHub", "Node.js", "React.js", "D3.js", "Python"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://www.freecodecamp.org/",
    "logo": "https://logo.clearbit.com/freecodecamp.org"
  },
  {
    "name": "Vertabelo Academy",
    "description": "အပြန်အလှန်တုံ့ပြန် လေ့ကျင့်ခန်းများနှင့် ဉာဏ်စမ်းပဟေဠိများပါသော အခမဲ့ SQL သင်တန်းများ။",
    "technologies": ["SQL", "database concepts"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://www.vertabelo.com/academy/",
    "logo": "https://logo.clearbit.com/vertabelo.com"
  },
  {
    "name": "The Odin Project",
    "description": "Ruby နှင့် JS သင်ယူမှုလမ်းကြောင်းများပါသော အခမဲ့ အစပြုသူမှ အလယ်အလတ်အဆင့် full-stack သင်တန်းများ။",
    "technologies": ["HTML", "CSS", "JavaScript", "Ruby", "Rails"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://www.theodinproject.com/",
    "logo": "https://logo.clearbit.com/theodinproject.com"
  },
  {
    "name": "MDN Learning Area",
    "description": "အခြေခံ ဝဘ်ဖွံ့ဖြိုးတိုးတက်မှု သဘောတရားများဆိုင်ရာ အခမဲ့ လမ်းညွှန်များ။",
    "technologies": ["HTML", "CSS", "JavaScript", "accessibility", "performance", "React", "Ember", "Vue", "Svelte", "Angular", "Git", "GitHub"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://developer.mozilla.org/en-US/docs/Learn",
    "logo": "https://logo.clearbit.com/developer.mozilla.org"
  },
  {
    "name": "GitHub Skills",
    "description": "GitHub ၏ သင်တန်းအဖွဲ့မှ ဖန်တီးထိန်းသိမ်းထားသော Git နှင့် GitHub ကိုလေ့လာရန် အခမဲ့ ကိုယ်ပိုင်အရှိန်ဖြင့် အပြန်အလှန်တုံ့ပြန် ပရောဂျက်များ။",
    "technologies": ["Git", "GitHub"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://skills.github.com/",
    "logo": "https://logo.clearbit.com/github.com"
  },
  {
    "name": "Grid Garden",
    "description": "@thomaspark မှ ဖန်တီးထားသော CSS grid system ကို သင်ကြားပေးသည့် အခမဲ့ဂိမ်း။",
    "technologies": ["CSS"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://cssgridgarden.com/",
    "logo": "https://cssgridgarden.com/favicon.ico"
  },
  {
    "name": "Flexbox Froggy",
    "description": "CSS Flexbox ကို သင်ကြားပေးသည့် အခမဲ့ဂိမ်း။",
    "technologies": ["CSS"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://flexboxfroggy.com/",
    "logo": "https://flexboxfroggy.com/favicon.ico"
  },
  {
    "name": "Hexlet.io",
    "description": "JavaScript, C, Regular Expressions နှင့် ကွန်ပျူတာသိပ္ပံ ယေဘုယျကို လေ့လာရန် ရောနှောထားသော ကိုယ်ပိုင်အရှိန်ဖြင့် အပြန်အလှန်တုံ့ပြန် ပရောဂျက်များ။",
    "technologies": ["JavaScript", "Regular Expressions", "Bash", "computer science", "Ansible"],
    "level": "Beginner",
    "costModel": "Mixed",
    "url": "https://hexlet.io/",
    "logo": "https://logo.clearbit.com/hexlet.io"
  },
  {
    "name": "Programming Historian",
    "description": "ဒစ်ဂျစ်တယ် လူမှုသိပ္ပံပညာရှင်များအတွက် အခမဲ့ peer reviewed အခြေခံသင်တန်းများ။",
    "technologies": ["Python", "R", "Unity", "QGIS", "HTML", "Regular Expressions"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://programminghistorian.org/",
    "logo": "https://logo.clearbit.com/programminghistorian.org"
  },
  {
    "name": "Software Carpentry",
    "description": "သုတေသီများအတွက် အခမဲ့ အခြေခံ coding နှင့် data science ကျွမ်းကျင်မှုများ။",
    "technologies": ["Python", "R", "OpenRefine", "Unix Shell", "Git"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://software-carpentry.org/",
    "logo": "https://software-carpentry.org/assets/img/swc-icon-blue.svg"
  },
  {
    "name": "Hyperskill by JetBrains Academy",
    "description": "လူကြိုက်များသော ပရိုဂရမ်းမင်းဘာသာစကားများနှင့် ဖွံ့ဖြိုးတိုးတက်ရေး framework များတွင် Freemium ကျယ်ပြန့်သော လမ်းကြောင်းများ။",
    "technologies": ["Python", "Java", "Kotlin", "SQL"],
    "level": "Beginner",
    "costModel": "Freemium",
    "url": "https://hyperskill.org/",
    "logo": "https://logo.clearbit.com/hyperskill.org"
  },
  {
    "name": "Cratecode",
    "description": "အပြန်အလှန်တုံ့ပြန် သင်ခန်းစာများမှတဆင့် ပရိုဂရမ်းမင်း သင်ကြားပေးသော အခမဲ့ အွန်လိုင်းပလက်ဖောင်း။",
    "technologies": ["JavaScript", "TypeScript", "HTML", "p5.js", "Backend Web Development"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://cratecode.com/",
    "logo": "https://cratecode.com/cratecode_mascot.png"
  },
  {
    "name": "DataCamp",
    "description": "ဒေတာသိပ္ပံ လေ့လာရန် Freemium အပြန်အလှန်တုံ့ပြန် ပလက်ဖောင်း။",
    "technologies": ["Python", "R", "SQL", "Power BI", "ChatGPT"],
    "level": "Beginner",
    "costModel": "Freemium",
    "url": "https://www.datacamp.com/",
    "logo": "https://logo.clearbit.com/datacamp.com"
  },
  {
    "name": "Developer Roadmaps",
    "description": "ပညာရေးဆိုင်ရာ အကြောင်းအရာများသို့ လင့်ခ်များပါသော အခမဲ့ လေ့လာမှုလမ်းပြမြေပုံများ။",
    "technologies": ["Fullstack", "UX Design", "Cyber Security", "Computer Science", "Blockchain", "DevOps", "PostgreSQL"],
    "level": "Beginner",
    "costModel": "Free",
    "url": "https://roadmap.sh/",
    "logo": "https://roadmap.sh/logo.svg"
  },
  // Intermediate
  {
    "name": "Khan Academy Computer Programming, Computer Science",
    "description": "ပုံဆွဲခြင်း၊ ကာတွန်း၊ ဂိမ်းများနှင့် ဝဘ်စာမျက်နှာများ ပရိုဂရမ်ရေးဆွဲနည်းနှင့် ပိုမိုအဆင့်မြင့်သော ကွန်ပျူတာသိပ္ပံခေါင်းစဉ်များဆိုင်ရာ အခမဲ့ အလယ်အလတ်မှ အဆင့်မြင့်သင်တန်းများ။",
    "technologies": ["HTML", "CSS", "JavaScript", "SQL", "algorithms", "cryptography"],
    "level": "Intermediate",
    "costModel": "Free",
    "url": "https://www.khanacademy.org/computing",
    "logo": "https://logo.clearbit.com/khanacademy.org"
  },
  {
    "name": "Udacity",
    "description": "ကွန်ပျူတာသိပ္ပံနှင့် ဝဘ်ဖွံ့ဖြိုးတိုးတက်ရေး သင်တန်းများအတွက် Freemium ပလက်ဖောင်း။",
    "technologies": ["HTML", "CSS", "JavaScript", "data science", "Python", "computer science topics"],
    "level": "Intermediate",
    "costModel": "Freemium",
    "url": "https://www.udacity.com/",
    "logo": "https://logo.clearbit.com/udacity.com"
  },
  {
    "name": "Learn Python the Hard Way",
    "description": "အစပြုသူမှ အလယ်အလတ် Python ပရိုဂရမ်းမင်းအတွက် အခပေးစာအုပ်နှင့် သင်တန်း။",
    "technologies": ["Python", "object-oriented programming", "web development"],
    "level": "Intermediate",
    "costModel": "Paid",
    "url": "https://learnpythonthehardway.org/",
    "logo": "https://learnpythonthehardway.org/static/images/favicon.ico"
  },
  {
    "name": "Michael Hartl's Ruby on Rails Tutorial",
    "description": "Ruby on Rails application ဖန်တီးခြင်း၏ အဆင့်အားလုံးကို လွှမ်းခြုံထားသော အခမဲ့ အွန်လိုင်းစာအုပ်။",
    "technologies": ["HTML", "CSS", "JavaScript", "Ruby", "Rails"],
    "level": "Intermediate",
    "costModel": "Free",
    "url": "https://www.railstutorial.org/",
    "logo": "https://www.railstutorial.org/assets/images/apple-touch-icon-57x57-precomposed-7b9d7c062768565b834d83fa30906295.png"
  },
  {
    "name": "LinkedIn Learning: Web Development, Web Design",
    "description": "ဝဘ်ဖွံ့ဖြိုးတိုးတက်ရေးနှင့် ဒီဇိုင်းဆိုင်ရာ ဗီဒီယိုသင်တန်းများအတွက် အခပေး ပလက်ဖောင်း။",
    "technologies": ["HTML", "CSS", "JavaScript", "web development", "web design"],
    "level": "Intermediate",
    "costModel": "Paid",
    "url": "https://www.linkedin.com/learning/topics/web-development",
    "logo": "https://logo.clearbit.com/linkedin.com"
  },
  {
    "name": "Thinkful",
    "description": "စက်မှုလုပ်ငန်းကျွမ်းကျင်သူများထံမှ လမ်းညွှန်ပေးသော ဝဘ်နှင့် မိုဘိုင်းဖွံ့ဖြိုးတိုးတက်ရေး သင်တန်းများအတွက် အခပေး ပလက်ဖောင်း။",
    "technologies": ["web development", "frontend web development", "AngularJS", "Android", "iOS"],
    "level": "Intermediate",
    "costModel": "Paid",
    "url": "https://www.thinkful.com/",
    "logo": "https://logo.clearbit.com/thinkful.com"
  },
  {
    "name": "exercism.io",
    "description": "ပရိုဂရမ်းမင်း လေ့ကျင့်ခန်းများနှင့် ကုဒ်သုံးသပ်ချက်များ၏ အခမဲ့ လူထုအရင်းအမြစ်သုံး လမ်းညွှန်မှု ပလက်ဖောင်း။",
    "technologies": ["Clojure", "CoffeeScript", "C++", "C#", "Elixir", "Erlang", "F#", "Go", "Haskell", "JavaScript", "Common Lisp", "Lua", "Objective-C", "OCaml", "Perl 5", "PL/SQL", "Python", "Ruby", "Scala", "Swift"],
    "level": "Intermediate",
    "costModel": "Free",
    "url": "https://exercism.io/",
    "logo": "https://logo.clearbit.com/exercism.io"
  },
  {
    "name": "LabEx",
    "description": "AI လေ့လာမှုလက်ထောက်မှ ပံ့ပိုးပေးသော virtual environments များတွင် Freemium လက်တွေ့ နည်းပညာကျွမ်းကျင်မှု labs များ။",
    "technologies": ["Linux", "Docker", "DevOps", "Python", "Data Science", "Machine Learning", "Go", "Java", "C", "C++", "HTML", "CSS", "JavaScript", "React"],
    "level": "Intermediate",
    "costModel": "Freemium",
    "url": "https://labex.io/",
    "logo": "https://logo.clearbit.com/labex.io"
  },
  {
    "name": "PluralSight",
    "description": "ဝဘ်ဖွံ့ဖြိုးတိုးတက်ရေး၊ ဆော့ဖ်ဝဲလ်ဖွံ့ဖြိုးတိုးတက်ရေး၊ လုံခြုံရေးနှင့် အခြားအရာများအတွက် သင်တန်းများအတွက် အခပေး ပလက်ဖောင်း။",
    "technologies": ["HTML", "CSS", "JavaScript", "React", "AngularJS", "Java", "SQL"],
    "level": "Intermediate",
    "costModel": "Paid",
    "url": "https://www.pluralsight.com/",
    "logo": "https://logo.clearbit.com/pluralsight.com"
  },
  {
    "name": "CodeChef Courses",
    "description": "ဝဘ်ဖွံ့ဖြိုးတိုးတက်ရေးနှင့် ဆော့ဖ်ဝဲလ်ဖွံ့ဖြိုးတိုးတက်ရေး သင်တန်းများပါသော Freemium ပလက်ဖောင်း။",
    "technologies": ["HTML", "CSS", "JavaScript", "Python", "Java", "C++"],
    "level": "Intermediate",
    "costModel": "Freemium",
    "url": "https://www.codechef.com/courses",
    "logo": "https://logo.clearbit.com/codechef.com"
  },
  {
    "name": "CodeChef Problems",
    "description": "Freemium အလယ်အလတ်မှ အဆင့်မြင့် ပရိုဂရမ်းမင်း ပြဿနာများ။",
    "technologies": ["programming"],
    "level": "Intermediate",
    "costModel": "Freemium",
    "url": "https://www.codechef.com/problems/school",
    "logo": "https://logo.clearbit.com/codechef.com"
  },
  {
    "name": "CodingBat",
    "description": "Python နှင့် Java တွင် အခမဲ့ လေ့ကျင့်ရန် ပြဿနာများ။",
    "technologies": ["Python", "Java"],
    "level": "Intermediate",
    "costModel": "Free",
    "url": "https://codingbat.com/",
    "logo": "https://codingbat.com/images/cblogo.png"
  },
  {
    "name": "Codewars",
    "description": "အခမဲ့ ကုဒ်စိန်ခေါ်မှုများ - သင့်အဖြေကို အခြားသူများနှင့် နှိုင်းယှဉ်ပါ။",
    "technologies": ["JavaScript", "CoffeeScript", "Ruby", "Python", "Clojure", "Haskell", "Java"],
    "level": "Intermediate",
    "costModel": "Free",
    "url": "https://www.codewars.com/",
    "logo": "https://logo.clearbit.com/codewars.com"
  },
  {
    "name": "CodinGame",
    "description": "အခမဲ့ ကုဒ်ရေးနည်းလေ့လာပြီး တစ်ချိန်တည်းမှာ ဂိမ်းကစားပါ။",
    "technologies": ["C#", "C++", "Java", "JavaScript", "Python", "Bash", "C", "Clojure", "Dart", "F#", "Go", "Groovy", "Haskell", "Lua", "ObjectiveC", "Pascal", "Perl", "PHP", "Ruby", "Rust", "Scala", "Swift", "VB.NET"],
    "level": "Intermediate",
    "costModel": "Free",
    "url": "https://www.codingame.com/",
    "logo": "https://logo.clearbit.com/codingame.com"
  },
  {
    "name": "1 Million Women To Tech Summer of Code",
    "description": "အစပြုသူ၊ အလယ်အလတ်နှင့် အဆင့်မြင့်အဆင့်များအတွက် အခမဲ့ ပရိုဂရမ်းမင်းသင်တန်း အကြောင်းအရာ။",
    "technologies": ["Python", "JavaScript", "Data Science", "artificial intelligence", "machine learning", "AR & VR"],
    "level": "Intermediate",
    "costModel": "Free",
    "url": "https://github.com/1millionwomentotech/2018-Summer-of-Code",
    "logo": "https://logo.clearbit.com/1millionwomentotech.com"
  },
  {
    "name": "Wes Bos",
    "description": "နည်းပညာအသစ်များ အသုံးပြု၍ ထုတ်ကုန်များ တည်ဆောက်ရန် ရောနှောထားသော လမ်းညွှန် ဗီဒီယိုသင်တန်းများ။",
    "technologies": ["JavaScript", "CSS", "React", "Node.js", "GraphQL", "Redux"],
    "level": "Intermediate",
    "costModel": "Mixed",
    "url": "https://wesbos.com/",
    "logo": "https://logo.clearbit.com/wesbos.com"
  },
  {
    "name": "Level Up Tutorials",
    "description": "ဝဘ် developer များနှင့် ဒီဇိုင်နာများအတွက် အခမဲ့ ဗီဒီယိုသင်ခန်းစာများ။",
    "technologies": ["HTML", "CSS", "JavaScript", "React", "Svelte", "Vue", "Node.js", "GraphQL", "TypeScript", "Deno", "GitHub", "Figma", "Ruby", "Drupal", "Magento", "Wordpress"],
    "level": "Intermediate",
    "costModel": "Free",
    "url": "https://www.leveluptutorials.com/",
    "logo": "https://logo.clearbit.com/leveluptutorials.com"
  },
  // Advanced
  {
    "name": "MIT OpenCourseWare",
    "description": "MIT မှ အဆင့်မြင့် ကွန်ပျူတာသိပ္ပံ ခေါင်းစဉ်များဆိုင်ရာ အခမဲ့သင်တန်းများ။",
    "technologies": ["varied and extensive computer science topics", "C", "C++"],
    "level": "Advanced",
    "costModel": "Free",
    "url": "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/",
    "logo": "https://logo.clearbit.com/ocw.mit.edu"
  },
  {
    "name": "edX",
    "description": "Harvard, MIT နှင့် အခြားတက္ကသိုလ်များမှ အခမဲ့သင်တန်းများ။",
    "technologies": ["varied computer science subjects including theory and programming", "data science", "algorithms"],
    "level": "Advanced",
    "costModel": "Free",
    "url": "https://www.edx.org/learn/computer-science",
    "logo": "https://logo.clearbit.com/edx.org"
  },
  {
    "name": "Coursera",
    "description": "ကမ္ဘာတစ်ဝှမ်းမှ တက္ကသိုလ်များနှင့် အဖွဲ့အစည်းများမှ သင်တန်းများအတွက် ရောနှောထားသော ပလက်ဖောင်း။",
    "technologies": ["varied computer science subjects including theory and programming", "data science", "algorithms"],
    "level": "Advanced",
    "costModel": "Mixed",
    "url": "https://www.coursera.org/browse/computer-science",
    "logo": "https://logo.clearbit.com/coursera.org"
  },
  {
    "name": "Awesome CS Courses",
    "description": "အင်တာနက်တစ်ဝိုက်မှ ရှာဖွေထားသော တက္ကသိုလ်အဆင့် အခမဲ့သင်တန်းများ။",
    "technologies": ["varied and extensive computer science topics"],
    "level": "Advanced",
    "costModel": "Free",
    "url": "https://github.com/prakhar1989/awesome-cs-courses",
    "logo": "https://logo.clearbit.com/github.com"
  },
  {
    "name": "Metacademy Roadmaps, Course Guides",
    "description": "သဘောတရားများကို ကျွမ်းကျင်ရန် လိုအပ်သော ဆက်စပ်အကြောင်းအရာများ၏ အခမဲ့ ဂရပ်များ။",
    "technologies": ["programming", "machine learning"],
    "level": "Advanced",
    "costModel": "Free",
    "url": "https://metacademy.org/",
    "logo": "https://metacademy.org/media/images/logo-big-2.png"
  },
  {
    "name": "HackerRank",
    "description": "အခမဲ့ ပရိုဂရမ်းမင်း စိန်ခေါ်မှုများနှင့် ပြိုင်ပွဲများ။",
    "technologies": ["artificial intelligence", "algorithms", "functional programming", "machine learning"],
    "level": "Advanced",
    "costModel": "Free",
    "url": "https://www.hackerrank.com/",
    "logo": "https://logo.clearbit.com/hackerrank.com"
  },
  {
    "name": "HackerEarth",
    "description": "အခမဲ့ ပရိုဂရမ်းမင်း စိန်ခေါ်မှုများ၊ hackathons နှင့် ပြိုင်ပွဲများ။",
    "technologies": ["dynamic programming", "artificial intelligence", "algorithms", "functional programming", "machine learning"],
    "level": "Advanced",
    "costModel": "Free",
    "url": "https://www.hackerearth.com/",
    "logo": "https://logo.clearbit.com/hackerearth.com"
  },
  {
    "name": "Project Euler",
    "description": "အခမဲ့ သင်္ချာ/ကွန်ပျူတာ ပရိုဂရမ်းမင်း ပြဿနာများ။",
    "technologies": ["programming", "mathematics"],
    "level": "Advanced",
    "costModel": "Free",
    "url": "https://projecteuler.net/",
    "logo": "https://projecteuler.net/themes/logo_default.png"
  },
  {
    "name": "CodeSignal",
    "description": "အခမဲ့ ပရိုဂရမ်းမင်း စိန်ခေါ်မှုများ။",
    "technologies": ["Java", "C++", "Python", "JavaScript", "Ruby", "C#", "PHP", "Perl"],
    "level": "Advanced",
    "costModel": "Free",
    "url": "https://codesignal.com/",
    "logo": "https://logo.clearbit.com/codesignal.com"
  },
  {
    "name": "CodeCrafters",
    "description": "ဘာသာစကားမရွေး ပရိုဂရမ်းမင်းကိရိယာများကို အစမှပြန်လည်ဖန်တီးသော Freemium။",
    "technologies": ["Go", "Rust", "Python", "JavaScript", "C++", "Ruby", "Haskell", "C#", "C", "Java", "PHP", "Elixir", "Crystal", "Clojure", "Zig", "Nim"],
    "level": "Advanced",
    "costModel": "Freemium",
    "url": "https://codecrafters.io/",
    "logo": "https://logo.clearbit.com/codecrafters.io"
  }
]
