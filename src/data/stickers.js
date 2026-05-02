function time(sigla, bandeira, selecao, grupo, j) {
  const s = []
  s.push({ codigo: `${sigla}1`, nome: 'Escudo', selecao, bandeira, grupo, tipo: 'escudo' })
  for (let i = 0; i < 11; i++) s.push({ codigo: `${sigla}${i+2}`, nome: j[i]||`??? ${sigla}${i+2}`, selecao, bandeira, grupo, tipo: 'normal' })
  s.push({ codigo: `${sigla}13`, nome: 'Foto do Time', selecao, bandeira, grupo, tipo: 'foto' })
  for (let i = 11; i < 18; i++) s.push({ codigo: `${sigla}${i+3}`, nome: j[i]||`??? ${sigla}${i+3}`, selecao, bandeira, grupo, tipo: 'normal' })
  return s
}

const RAW = [
  // CAPA
  { codigo:'00', nome:'Capa do Álbum', selecao:'Capa', bandeira:'🎴', grupo:'FWC', tipo:'especial' },

  // FWC INTRO
  { codigo:'FWC1', nome:'Emblema Oficial (1)', selecao:'Apresentação', bandeira:'🏆', grupo:'FWC', tipo:'especial' },
  { codigo:'FWC2', nome:'Emblema Oficial (2)', selecao:'Apresentação', bandeira:'🏆', grupo:'FWC', tipo:'especial' },
  { codigo:'FWC3', nome:'Mascotes Oficiais', selecao:'Apresentação', bandeira:'🏆', grupo:'FWC', tipo:'especial' },
  { codigo:'FWC4', nome:'Slogan Oficial', selecao:'Apresentação', bandeira:'🏆', grupo:'FWC', tipo:'especial' },
  { codigo:'FWC5', nome:'Bola Oficial', selecao:'Apresentação', bandeira:'🏆', grupo:'FWC', tipo:'especial' },
  { codigo:'FWC6', nome:'Emblema CAN', selecao:'Apresentação', bandeira:'🏆', grupo:'FWC', tipo:'especial' },
  { codigo:'FWC7', nome:'Emblema MEX', selecao:'Apresentação', bandeira:'🏆', grupo:'FWC', tipo:'especial' },
  { codigo:'FWC8', nome:'Emblema USA', selecao:'Apresentação', bandeira:'🏆', grupo:'FWC', tipo:'especial' },

  // GRUPO A
  ...time('MEX','🇲🇽','México','A',['Luis Malagón','Johan Vásquez','Jorge Sánchez','César Montes','Jesús Gallardo','Israel Reyes','Diego Lainez','Carlos Rodríguez','Edson Álvarez','Orbelín Pineda','Marcel Ruiz','Érick Sánchez','Hirving Lozano','Santiago Giménez','Raúl Jiménez','Alexis Vega','Roberto Alvarado','César Huerta']),
  ...time('RSA','🇿🇦','África do Sul','A',['Ronwen Williams','Sipho Chaine','Aubrey Modiba','Samukele Kabini','Mbekezeli Mbokazi','Khulumani Ndamane','Siyabonga Ngezana','Khuliso Mudau','Nkosinathi Sibisi','Teboho Mokoena','Thalente Mbatha','Bathuisi Aubaas','Yaya Sithole','Sipho Mbule','Lyle Foster','Ioraam Rayners','Mohau Nkota','Oswin Appolis']),
  ...time('KOR','🇰🇷','Coreia do Sul','A',['Hyeon-woo Jo','Seung-Gyu Kim','Min-jae Kim','Yu-min Cho','Young-woo Seol','Han-beom Lee','Tae-seok Lee','Myung-jae Lee','Jae-sung Lee','In-beom Hwang','Kang-in Lee','Seung-ho Paik','Jens Castrop','Dong-gyeong Lee','Gue-sung Cho','Heung-min Son','Hee-chan Hwang','Hyeon-Gyu Oh']),
  ...time('CZE','🇨🇿','República Tcheca','A',['Matěj Kovář','Jindřich Staněk','Ladislav Krejčí','Vladimír Coufal','Jaroslav Zelený','Tomáš Holeš','David Zima','Michal Sadílek','Lukáš Provod','Lukáš Červ','Tomáš Souček','Pavel Šulc','Matěj Vydra','Vasil Kušej','Tomáš Chorý','Václav Černý','Adam Hložek','Patrik Schick']),

  // GRUPO B
  ...time('CAN','🇨🇦','Canadá','B',['Dayne St. Clair','Alphonso Davies','Alistair Johnston','Samuel Adekugbe','Richie Laryea','Derek Cornelius','Moïse Bombito','Kamal Miller','Stephen Eustáquio','Ismaël Koné','Jonathan Osorio','Jacob Shaffelburg','Mathieu Choinière','Niko Sigur','Tajon Buchanan','Liam Millar','Cyle Larin','Jonathan David']),
  ...time('BIH','🇧🇦','Bósnia e Herzegovina','B',['Nikola Vasilj','Amar Dedić','Sead Kolašinac','Tarik Muharemović','Nihad Mujakić','Nikola Katić','Amir Hadžiahmetović','Benjamin Tahirović','Armin Gigović','Ivan Šunjić','Ivan Bašić','Dženis Burnić','Esmir Bajraktarević','Amar Memić','Ermedin Demirović','Edin Džeko','Samed Baždar','Haris Tabaković']),
  ...time('QAT','🇶🇦','Catar','B',['Meshaal Barsham','Sultan Albrake','Lucas Mendes','Homam Ahmed','Boualem Khoukhi','Pedro Miguel','Tarek Salman','Mohamed Al-Mannai','Karim Boudiaf','Assim Madibo','Ahmed Fatehi','Mohammed Waad','Abdulaziz Hatem','Hassan Al-Haydos','Edmilson Junior','Akram Hassan Afif','Ahmed Al Ganehi','Almoez Ali']),
  ...time('SUI','🇨🇭','Suíça','B',['Gregor Kobel','Yvon Mvogo','Manuel Akanji','Ricardo Rodriguez','Nico Elvedi','Aurèle Amenda','Silvan Widmer','Granit Xhaka','Denis Zakaria','Remo Freuler','Fabian Rieder','Ardon Jashari','Johan Manzambi','Michel Aebischer','Breel Embolo','Ruben Vargas','Dan Ndoye','Zeki Amdouni']),

  // GRUPO C
  ...time('BRA','🇧🇷','Brasil','C',['Alisson','Bento','Marquinhos','Éder Militão','Gabriel Magalhães','Danilo','Wesley','Lucas Paquetá','Casemiro','Bruno Guimarães','Luiz Henrique','Vinícius Júnior','Rodrygo','João Pedro','Matheus Cunha','Gabriel Martinelli','Raphinha','Estêvão']),
  ...time('MAR','🇲🇦','Marrocos','C',['Yassine Bounou','Munir El Kajoui','Achraf Hakimi','Noussair Mazraoui','Nayef Aguerd','Romain Saïss','Jawad El Yamiq','Adam Masina','Sofyan Amrabat','Azzedine Ounahi','Eliesse Ben Seghir','Bilal El Khannouss','Ismael Saibari','Youssef En-Nesyri','Abde Ezzalzouli','Soufiane Rahimi','Brahim Díaz','Ayoub El Kaabi']),
  ...time('HAI','🇭🇹','Haiti','C',['Johny Placide','Carlens Arcus','Martin Expérience','Jean-Kevin Duverne','Ricardo Adé','Duke Lacroix','Garven Metusala','Hannes Delcroix','Leverton Pierre','Danley Jean Jacques','Jean-Ricner Bellegarde','Christopher Attys','Derrick Etienne Jr.','Josué Casimir','Ruben Providence','Duckens Nazon','Louicius Deedson','Frantzdy Pierrot']),
  ...time('SCO','🏴󠁧󠁢󠁳󠁣󠁴󠁿','Escócia','C',['Angus Gunn','Jack Hendry','Kieran Tierney','Aaron Hickey','Andrew Robertson','Scott McKenna','John Souttar','Anthony Ralston','Grant Hanley','Scott McTominay','Billy Gilmour','Lewis Ferguson','Ryan Christie','Kenny McLean','John McGinn','Lyndon Dykes','Che Adams','Ben Doak']),

  // GRUPO D
  ...time('USA','🇺🇸','Estados Unidos','D',['Matt Freese','Chris Richards','Tim Ream','Mark McKenzie','Alex Freeman','Antonee Robinson','Tyler Adams','Tanner Tessmann','Weston McKennie','Christian Roldan','Timothy Weah','Diego Luna','Malik Tillman','Christian Pulisic','Brenden Aaronson','Ricardo Pepi','Haji Wright','Folarin Balogun']),
  ...time('PAR','🇵🇾','Paraguai','D',['Roberto Fernández','Orlando Gill','Gustavo Gómez','Fabián Balbuena','Juan José Cáceres','Omar Alderete','Junior Alonso','Mathías Villasanti','Diego Gómez','Damián Bobadilla','Andrés Cubas','Matías Galarza','Julio Enciso','Alejandro Romero Gamarra','Miguel Almirón','Ramon Sosa','Angel Romero','Antonio Sanabria']),
  ...time('AUS','🇦🇺','Austrália','D',['Mathew Ryan','Joe Gauci','Harry Souttar','Alessandro Circati','Jordan Bos','Aziz Behich','Cameron Burgess','Lewis Miller','Milos Degenek','Jackson Irvine','Riley McGree',"Aiden O'Neill",'Connor Metcalfe','Patrick Yazbek','Craig Goodwin','Kusini Yengi','Nestory Irankunda','Mohamed Touré']),
  ...time('TUR','🇹🇷','Turquia','D',['Ugurcan Cakir','Mert Muldur','Zeki Celik','Abdulkerim Bardakci','Caglar Soyuncu','Merih Demiral','Ferdi Kadioglu','Kaan Ayhan','Ismail Yuksek','Hakan Calhanoglu','Orkun Kokcu','Arda Güler','Irfan Can Kahveci','Yunus Akgun','Can Uzun','Baris Alper Yilmaz','Kerem Akturkoglu','Kenan Yildiz']),

  // GRUPO E
  ...time('GER','🇩🇪','Alemanha','E',['Marc-André ter Stegen','Jonathan Tah','David Raum','Nico Schlotterbeck','Antonio Rüdiger','Waldemar Anton','Ridle Baku','Maximilian Mittelstädt','Joshua Kimmich','Florian Wirtz','Felix Nmecha','Leon Goretzka','Jamal Musiala','Serge Gnabry','Kai Havertz','Leroy Sané','Karim Adeyemi','Nick Woltemade']),
  ...time('CUW','🇨🇼','Curaçao','E',['Eloy Room','Armando Obispo','Sherel Floranus','Jurien Gaari','Joshua Brenet','Roshon Van Eijma','Shurandy Sambo','Livano Comenencia','Godfried Roemeratoe','Juninho Bacuna','Leandro Bacuna','Tahith Chong','Kenji Gorré','Jearl Margaritha','Jurgen Locadia','Jeremy Antonisse','Gervane Kastaneer','Sontje Hansen']),
  ...time('CIV','🇨🇮','Costa do Marfim','E',['Yahia Fofana','Ghislain Konan','Wilfried Singo','Odilon Kossounou','Evan Ndicka','Willy Boly','Emmanuel Agbadou','Ousmane Diomande','Franck Kessié','Seko Fofana','Ibrahim Sangaré','Jean-Philippe Gbamin','Amad Diallo','Sébastien Haller','Simon Adingra','Yan Diomande','Evann Guessand','Oumar Diakité']),
  ...time('ECU','🇪🇨','Equador','E',['Hernán Galíndez','Gonzalo Valle','Piero Hincapié','Pervis Estupiñán','Willian Pacho','Ángelo Preciado','Joel Ordóñez','Moisés Caicedo','Alan Franco','Kendry Páez','Pedro Vite','John Yeboah','Leonardo Campana','Gonzalo Plata','Nilson Angulo','Alan Minda','Kevin Rodríguez','Enner Valencia']),

  // GRUPO F
  ...time('NED','🇳🇱','Holanda','F',['Bart Verbruggen','Virgil van Dijk','Micky van de Ven','Jurriën Timber','Denzel Dumfries','Nathan Aké','Jeremie Frimpong','Jan Paul van Hecke','Tijjani Reijnders','Ryan Gravenberch','Teun Koopmeiners','Frenkie de Jong','Xavi Simons','Justin Kluivert','Memphis Depay','Donyell Malen','Wout Weghorst','Cody Gakpo']),
  ...time('JPN','🇯🇵','Japão','F',['Zion Suzuki','Henry Heroki Mochizuki','Ayumu Seko','Junnosuke Suzuki','Shogo Taniguchi','Tsuyoshi Watanabe','Kaishu Sano','Yuki Soma','Ao Tanaka','Daichi Kamada','Takefusa Kubo','Ritsu Doan','Keito Nakamura','Takumi Minamino','Shuto Machino','Junya Ito','Koki Ogawa','Ayase Ueda']),
  ...time('SWE','🇸🇪','Suécia','F',['Victor Johansson','Isak Hien','Gabriel Gudmundsson','Emil Holm','Victor Nilsson Lindelöf','Gustaf Lagerbielke','Lucas Bergvall','Hugo Larsson','Jesper Karlström','Yasin Ayari','Mattias Svanberg','Daniel Svensson','Ken Sema','Roony Bardghji','Dejan Kulusevski','Anthony Elanga','Alexander Isak','Viktor Gyökeres']),
  ...time('TUN','🇹🇳','Tunísia','F',['Bechir Ben Said','Aymen Dahmen','Van Valery','Montassar Talbi','Yassine Meriah','Ali Abdi','Dylan Bronn','Ellyes Skhiri','Aissa Laidouni','Ferjani Sassi','Mohamed Ali Ben Romdhane','Hannibal Mejbri','Elias Achouri','Elias Saad','Hazem Mastouri','Ismael Gharbi','Sayfallah Ltaief','Naim Sliti']),

  // GRUPO G
  ...time('BEL','🇧🇪','Bélgica','G',['Thibaut Courtois','Arthur Theate','Timothy Castagne','Zeno Debast','Brandon Mechele','Maxim De Cuyper','Thomas Meunier','Youri Tielemans','Amadou Onana','Nicolas Raskin','Alexis Saelemaekers','Hans Vanaken','Kevin De Bruyne','Jérémy Doku','Charles De Ketelaere','Leandro Trossard','Loïs Openda','Romelu Lukaku']),
  ...time('EGY','🇪🇬','Egito','G',['Mohamed El Shenawy','Mohamed Hany','Mohamed Hamdy','Yasser Ibrahim','Khaled Sobhi','Ramy Rabia','Hossam Abdelmaguid','Ahmed Fatouh','Marwan Attia','Zizo','Hamdy Fathy','Mohamed Lasheen','Emam Ashour','Osama Faisal','Mohamed Salah','Mostafa Mohamed','Trezeguet','Omar Marmoush']),
  ...time('IRN','🇮🇷','Irã','G',['Alireza Beiranvand','Morteza Pouraliganji','Ehsan Hajsafi','Milad Mohammadi','Shoja Khalilzadeh','Ramin Rezaeian','Hossein Kanaani','Sadegh Moharrami','Saleh Hardani','Saeed Ezatolahi','Saman Ghoddos','Omid Noorafkan','Roozbeh Cheshmi','Mohammad Mohebi','Sardar Azmoun','Mehdi Taremi','Alireza Jahanbakhsh','Ali Gholizadeh']),
  ...time('NZL','🇳🇿','Nova Zelândia','G',['Max Crocombe-Payne','Alex Paulsen','Michael Boxall','Liberato Cacace','Tim Payne','Tyler Bindon','Francis de Vries','Finn Surman','Joe Bell','Sarpreet Singh','Ryan Thomas','Matthew Garbett','Marko Stamenić','Ben Old','Chris Wood','Elijah Just','Callum McCowatt','Kosta Barbarouses']),

  // GRUPO H
  ...time('ESP','🇪🇸','Espanha','H',['Unai Simón','Robin Le Normand','Aymeric Laporte','Dean Huijsen','Pedro Porro','Dani Carvajal','Marc Cucurella','Martín Zubimendi','Rodri','Pedri','Fabián Ruiz','Mikel Merino','Lamine Yamal','Dani Olmo','Nico Williams','Ferran Torres','Álvaro Morata','Mikel Oyarzabal']),
  ...time('CPV','🇨🇻','Cabo Verde','H',['Vozinha','Logan Costa','Pico','Diney','Steven Moreira','Wagner Pina','João Paulo','Yannick Semedo','Kevin Pina','Patrick Andrade','Jamiro Monteiro','Deroy Duarte','Garry Rodrigues','Jovane Cabral','Ryan Mendes','Dailon Livramento','Willy Semedo','Bebé']),
  ...time('KSA','🇸🇦','Arábia Saudita','H',['Nawaf Alaqidi','Abdulrahman Al-Sanbi','Saud Abdulhamid','Nawaf Boushal','Jihad Thakri','Moteb Al-Harbi','Hassan Altambakti','Musab Aljuwayr','Ziyad Aljohani','Abdullah Alkhaibari','Nasser Aldawsari','Saleh Abu Alshamat','Marwan Alsahafi','Salem Aldawsari','Abdulrahman Al-Aboud','Feras Albrikan','Saleh Alshehri','Abdullah Al-Hamdan']),
  ...time('URU','🇺🇾','Uruguai','H',['Sergio Rochet','Santiago Mele','Ronald Araujo','José María Giménez','Sebastian Caceres','Mathias Olivera','Guillermo Varela','Nahitan Nandez','Federico Valverde','Giorgian De Arrascaeta','Rodrigo Bentancur','Manuel Ugarte','Nicolás de la Cruz','Maxi Araujo','Darwin Núñez','Federico Viñas','Rodrigo Aguirre','Facundo Pellistri']),

  // GRUPO I
  ...time('FRA','🇫🇷','França','I',['Mike Maignan','Theo Hernández','William Saliba','Jules Koundé','Ibrahima Konaté','Dayot Upamecano','Lucas Digne','Aurélien Tchouaméni','Eduardo Camavinga','Manu Koné','Adrien Rabiot','Michael Olise','Ousmane Dembélé','Bradley Barcola','Désiré Doué','Kingsley Coman','Hugo Ekitike','Kylian Mbappé']),
  ...time('SEN','🇸🇳','Senegal','I',['Eduardo Mendy','Yehvann Diouf','Moussa Niakhaté','Abdoulaye Seck','Ismail Jakobs','El Hadji Malick Diouf','Kalidou Koulibaly','Idrissa Gana Gueye','Pape Matar Sarr','Pape Gueye','Habib Diarra','Lamine Camara','Sadio Mane','Ismaïla Sarr','Boulaye Dia','Iliman Ndiaye','Nicolas Jackson','Krepin Diatta']),
  ...time('IRQ','🇮🇶','Iraque','I',['Jalal Hassan','Rebin Sulaka','Hussein Ali','Akam Hashem','Merchas Doski','Zaid Tahseen','Manaf Younis','Zidane Iqbal','Amir Al-Ammari','Ibrahim Bayesh','Ali Jasim','Youssef Amyn','Aimar Sher','Marko Farji','Osama Rashid','Ali Al-Hamadi','Aymen Hussein','Mohanad Ali']),
  ...time('NOR','🇳🇴','Noruega','I',['Ørjan Nyland','Julian Ryerson','Leo Østigård','Kristoffer Ajer','Marcus Holmgren Pedersen','David Møller Wolfe','Torbjørn Heggem','Morten Thorsby','Martin Ødegaard','Sander Berge','Andreas Schjelderup','Patrick Berg','Erling Haaland','Alexander Sørloth','Aron Dønnum','Jørgen Strand Larsen','Antonio Nusa','Oscar Bobb']),

  // GRUPO J
  ...time('ARG','🇦🇷','Argentina','J',['Emiliano Martínez','Nahuel Molina','Cristian Romero','Nicolás Otamendi','Nicolás Tagliafico','Leonardo Balerdi','Enzo Fernández','Alexis Mac Allister','Rodrigo De Paul','Exequiel Palacios','Leandro Paredes','Nico Paz','Franco Mastantuono','Nico González','Lionel Messi','Lautaro Martínez','Julián Álvarez','Giuliano Simeone']),
  ...time('ALG','🇩🇿','Argélia','J',['Alexis Guendouz','Ramy Bensebaini','Youcef Atal','Rayan Aït-Nouri','Mohamed Amine Tougai','Aïssa Mandi','Ismael Bennacer','Houssem Aouar','Hicham Boudaoui','Ramiz Zerrouki','Nabil Bentaleb','Farés Chaibi','Riyad Mahrez','Said Benrahma','Anis Hadj Moussa','Amine Gouiri','Baghdad Bounedjah','Mohammed Amoura']),
  ...time('AUT','🇦🇹','Áustria','J',['Alexander Schlager','Patrick Pentz','David Alaba','Kevin Danso','Philipp Lienhart','Stefan Posch','Phillipp Mwene','Alexander Prass','Xaver Schlager','Marcel Sabitzer','Konrad Laimer','Florian Grillitsch','Nicolas Seiwald','Romano Schmid','Patrick Wimmer','Christoph Baumgartner','Michael Gregoritsch','Marko Arnautović']),
  ...time('JOR','🇯🇴','Jordânia','J',['Yazeed Abulaila','Ihsan Haddad','Mohammad Abu Hashish','Yazan Al-Arab','Abdallah Nasib','Saleem Obaid','Mohammad Abualnadi','Ibrahim Saadeh','Nizar Al-Rashdan','Noor Al-Rawabdeh','Mohannad Abu Taha','Amer Jamous','Musa Al-Taamari','Yazan Al-Naimat','Mahmoud Al-Mardi','Ali Olwan','Mohammad Abu Zrayq','Ibrahim Sabra']),

  // GRUPO K
  ...time('POR','🇵🇹','Portugal','K',['Diogo Costa','Jose Sa','Ruben Dias','João Cancelo','Diogo Dalot','Nuno Mendes','Gonçalo Inácio','Bernardo Silva','Bruno Fernandes','Ruben Neves','Vitinha','João Neves','Cristiano Ronaldo','Francisco Trincão','João Felix','Gonçalo Ramos','Pedro Neto','Rafael Leão']),
  ...time('COD','🇨🇩','RD Congo','K',['Lionel Mpasi','Aaron Wan-Bissaka','Axel Tuanzebe','Arthur Masuaku','Chancel Mbemba','Joris Kayembe','Charles Pickel',"Ngal'ayel Mukau",'Edo Kayembe','Samuel Moutoussamy','Noah Sadiki','Théo Bongonda','Meschack Elia','Yoane Wissa','Brian Cipenga','Fiston Mayele','Cédric Bakambu','Nathanaël Mbuku']),
  ...time('UZB','🇺🇿','Uzbequistão','K',['Utkir Yusupov','Farrukh Savfiev','Sherzod Nasrullaev','Umar Eshmurodov','Husniddin Aliqulov','Rustamjon Ashurmatov','Khojiakbar Alijonov','Abdukodir Khusanov','Odiljon Hamrobekov','Otabek Shukurov','Jamshid Iskanderov','Azizbek Turgunboev','Khojimat Erkinov','Eldor Shomurodov','Oston Urunov','Jaloliddin Masharipov','Igor Sergeev','Abbosbek Fayzullaev']),
  ...time('COL','🇨🇴','Colômbia','K',['Camilo Vargas','David Ospina','Dávinson Sánchez','Yerry Mina','Daniel Munoz','Johan Mojica','Jhon Lucumí','Santiago Arias','Jefferson Lerma','Kevin Castaño','Richard Rios','James Rodriguez','Juan Fernando Quintero','Jorge Carrascal','Jhon Arias','Jhon Córdoba','Luis Suarez','Luis Diaz']),

  // GRUPO L
  ...time('ENG','🏴󠁧󠁢󠁥󠁮󠁧󠁿','Inglaterra','L',['Jordan Pickford','John Stones','Marc Guéhi','Ezri Konsa','Trent Alexander-Arnold','Reece James','Dan Burn','Jordan Henderson','Declan Rice','Jude Bellingham','Cole Palmer','Morgan Rogers','Anthony Gordon','Phil Foden','Bukayo Saka','Harry Kane','Marcus Rashford','Ollie Watkins']),
  ...time('CRO','🇭🇷','Croácia','L',['Dominik Livaković','Ivica Ivušić','Joško Gvardiol','Duje Ćaleta-Car','Josip Stanišić','Josip Šutalo','Kristijan Jakić','Luka Modrić','Mateo Kovačić','Martin Baturina','Lovro Majer','Mario Pašalić','Petar Sučić','Ivan Perišić','Marco Pašalić','Ante Budimir','Andrej Kramarić','Franjo Ivanović']),
  ...time('GHA','🇬🇭','Gana','L',['Lawrence Ati Zigi','Tariq Lamptey','Mohammed Salisu','Alidu Seidu','Alexander Djiku','Gideon Mensah','Caleb Yirenkyi','Abdul Issahaku Fatawu','Thomas Partey','Salis Abdul Samed','Kamaldeen Sulemana','Mohammed Kudus','Iñaki Williams','Jordan Ayew','Andrew Ayew','Joseph Paintsil','Osman Bukari','Antoine Semenyo']),
  ...time('PAN','🇵🇦','Panamá','L',['Orlando Mosquera','Luis Mejia','Fidel Escobar','Andres Andrade','Michael Amir Murillo','Eric Davis','Jose Cordoba','Cesar Blackman','Cristian Martinez','Aníbal Godoy','Adalberto Carrasquilla','Édgar Bárcenas','Carlos Harvey','Ismael Díaz','Jose Fajardo','Cecilio Waterman','Jose Luiz Rodriguez','Alberto Quintero']),

  // FWC HISTÓRIA (FWC9-FWC19)
  { codigo:'FWC9',  nome:'Copa 1934 - Itália',       selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },
  { codigo:'FWC10', nome:'Copa 1950 - Brasil',        selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },
  { codigo:'FWC11', nome:'Copa 1954 - Suíça',         selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },
  { codigo:'FWC12', nome:'Copa 1962 - Chile',         selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },
  { codigo:'FWC13', nome:'Copa 1974 - Alemanha',      selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },
  { codigo:'FWC14', nome:'Copa 1986 - México',        selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },
  { codigo:'FWC15', nome:'Copa 1994 - EUA',           selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },
  { codigo:'FWC16', nome:'Copa 2002 - Coreia/Japão',  selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },
  { codigo:'FWC17', nome:'Copa 2006 - Alemanha',      selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },
  { codigo:'FWC18', nome:'Copa 2014 - Brasil',        selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },
  { codigo:'FWC19', nome:'Copa 2022 - Catar',         selecao:'História', bandeira:'📜', grupo:'HIST', tipo:'especial' },

  // COCA-COLA (CC1-CC14)
  { codigo:'CC1',  nome:'Lamine Yamal',       selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC2',  nome:'Joshua Kimmich',     selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC3',  nome:'Harry Kane',         selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC4',  nome:'Santiago Giménez',   selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC5',  nome:'Joško Gvardiol',     selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC6',  nome:'Federico Valverde',  selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC7',  nome:'Jefferson Lerma',    selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC8',  nome:'Enner Valencia',     selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC9',  nome:'Gabriel Magalhães',  selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC10', nome:'Virgil van Dijk',    selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC11', nome:'Alphonso Davies',    selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC12', nome:'Emiliano Martínez',  selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC13', nome:'Raúl Jiménez',       selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
  { codigo:'CC14', nome:'Lautaro Martínez',   selecao:'Coca-Cola', bandeira:'🥤', grupo:'CC', tipo:'cc' },
]

export const STICKERS = RAW
export const TOTAL = RAW.length

// Grupos para exibição
const GRUPOS_IDS = ['FWC','A','B','C','D','E','F','G','H','I','J','K','L','HIST','CC']
const GRUPO_NOMES = { FWC:'Apresentação', A:'Grupo A', B:'Grupo B', C:'Grupo C', D:'Grupo D', E:'Grupo E', F:'Grupo F', G:'Grupo G', H:'Grupo H', I:'Grupo I', J:'Grupo J', K:'Grupo K', L:'Grupo L', HIST:'História', CC:'Coca-Cola' }

export const GRUPOS = GRUPOS_IDS.map(id => ({
  id,
  nome: GRUPO_NOMES[id],
  stickers: RAW.filter(s => s.grupo === id)
}))