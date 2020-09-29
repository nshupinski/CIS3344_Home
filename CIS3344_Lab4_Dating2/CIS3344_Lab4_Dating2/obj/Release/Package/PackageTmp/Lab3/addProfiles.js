
class Profile {

    Constructor(id, Gender, Image, Title, Name, Age, Description, City, State, Status, hasKids, wantsKids, Religion, RelType) {
        this.id = id;
        this.Gender = Gender;
        this.Image = Image;
        this.Title = Title;
        this.Name = Name;
        this.Age = Age;
        this.Description = Description;
        this.City = City;
        this.State = State;
        this.Status = Status;
        this.hasKids = hasKids;
        this.wantsKids = wantsKids;
        this.Religion = Religion;
        this.RelType = RelType;
    }
}

/*
var favoritesArray = new Array(0);

var profiles = new Array(0);
profiles.push(new Profile);

profiles[0].id = 0;
profiles[0].Gender = "male";
profiles[0].Image = "Gordon-Ramsay";
profiles[0].Title = "Gordon_Ramsay";
profiles[0].Name = "Gordon Ramsay";
profiles[0].Age = 53;
profiles[0].Description = "British chef, restaurateur, writer, television personality and food critic.";
profiles[0].City = "London";
profiles[0].State = "Outside US";
profiles[0].Status = "Married";
profiles[0].hasKids = "Yes";
profiles[0].wantsKids = "No";
profiles[0].Religion = "Protestant";
profiles[0].RelType = "Long-Term";


profiles.push(new Profile);

profiles[1].id = 1;
profiles[1].Gender = "male";
profiles[1].Image = "Idris-Elba";
profiles[1].Title = "Idris_Elba";
profiles[1].Name = "Idris Elba";
profiles[1].Age = 47;
profiles[1].Description = "Well known actor having starred in many famous movies.";
profiles[1].City = "Los Angeles";
profiles[1].State = "CA";
profiles[1].Status = "Married";
profiles[1].hasKids = "Yes";
profiles[1].wantsKids = "No";
profiles[1].Religion = "NA";
profiles[1].RelType = "Long-Term";


profiles.push(new Profile);

profiles[2].id = 2;
profiles[2].Gender = "male";
profiles[2].Image = "Steveo";
profiles[2].Title = "Steve-O";
profiles[2].Name = "Steve-O";
profiles[2].Age = 45;
profiles[2].Description = "Wild stunt-man and comedian.";
profiles[2].City = "Los Angeles";
profiles[2].State = "CA";
profiles[2].Status = "Married";
profiles[2].hasKids = "No";
profiles[2].wantsKids = "No";
profiles[2].Religion = "NA";
profiles[2].RelType = "Long-Term";


profiles.push(new Profile);

profiles[3].id = 3;
profiles[3].Gender = "female";
profiles[3].Image = "billie-eilish";
profiles[3].Title = "Billie_Eilish";
profiles[3].Name = "Billie Eilish";
profiles[3].Age = 18;
profiles[3].Description = "Grammy-winning musician with multiple top-chart songs.";
profiles[3].City = "Los Angeles";
profiles[3].State = "CA";
profiles[3].Status = "Single";
profiles[3].hasKids = "No";
profiles[3].wantsKids = "No";
profiles[3].Religion = "Christianity";
profiles[3].RelType = "Friends";


profiles.push(new Profile);

profiles[4].id = 4;
profiles[4].Gender = "female";
profiles[4].Image = "scarlett-johansson";
profiles[4].Title = "Scarlett_Johansson";
profiles[4].Name = "Scarlett Johansson";
profiles[4].Age = 35;
profiles[4].Description = "Famous actress and singer. Highest-paid actress since 2018.";
profiles[4].City = "Manhattan";
profiles[4].State = "NY";
profiles[4].Status = "Single";
profiles[4].hasKids = "Yes";
profiles[4].wantsKids = "Yes";
profiles[4].Religion = "Christianity";
profiles[4].RelType = "Casual";


profiles.push(new Profile);

profiles[5].id = 5;
profiles[5].Gender = "male";
profiles[5].Image = "will-ferrell";
profiles[5].Title = "Will_Ferrell";
profiles[5].Name = "Will Ferrell";
profiles[5].Age = 52;
profiles[5].Description = "American actor, comedian, producer, writer and businessman.";
profiles[5].City = "New York";
profiles[5].State = "NY";
profiles[5].Status = "Married";
profiles[5].hasKids = "Yes";
profiles[5].wantsKids = "No";
profiles[5].Religion = "Athiest";
profiles[5].RelType = "Long-Term";


profiles.push(new Profile);

profiles[6].id = 6;
profiles[6].Gender = "female";
profiles[6].Image = "aubrey-plaza";
profiles[6].Title = "Aubrey_Plaza";
profiles[6].Name = "Aubrey Plaza";
profiles[6].Age = 35;
profiles[6].Description = "American actress, comedian and producer.";
profiles[6].City = "Los Angeles";
profiles[6].State = "CA";
profiles[6].Status = "Married";
profiles[6].hasKids = "No";
profiles[6].wantsKids = "Yes";
profiles[6].Religion = "Catholic";
profiles[6].RelType = "Short-Term";


profiles.push(new Profile);

profiles[7].id = 7;
profiles[7].Gender = "female";
profiles[7].Image = "kristen-bell";
profiles[7].Title = "Kristen_Bell";
profiles[7].Name = "Kristen Bell";
profiles[7].Age = 39;
profiles[7].Description = "American actress and singer. She began her professional acting career by starring in stage productions.";
profiles[7].City = "Huntington Woods";
profiles[7].State = "MI";
profiles[7].Status = "Married";
profiles[7].hasKids = "Yes";
profiles[7].wantsKids = "No";
profiles[7].Religion = "NA";
profiles[7].RelType = "Long-Term";


profiles.push(new Profile);

profiles[8].id = 8;
profiles[8].Gender = "male";
profiles[8].Image = "post-malone";
profiles[8].Title = "Post_Malone";
profiles[8].Name = "Post Malone";
profiles[8].Age = 24;
profiles[8].Description = "Rapper, singer, songwriter, and record producer.";
profiles[8].City = "Los Angeles";
profiles[8].State = "CA";
profiles[8].Status = "Single";
profiles[8].hasKids = "No";
profiles[8].wantsKids = "Yes";
profiles[8].Religion = "NA";
profiles[8].RelType = "Short-Term";


profiles.push(new Profile);

profiles[9].id = 9;
profiles[9].Gender = "female";
profiles[9].Image = "charlize-theron";
profiles[9].Title = "Charlize_Theron";
profiles[9].Name = "Charlize Theron";
profiles[9].Age = 44;
profiles[9].Description = "South African and American actress and producer.";
profiles[9].City = "Los Angeles";
profiles[9].State = "LA";
profiles[9].Status = "Single";
profiles[9].hasKids = "Yes";
profiles[9].wantsKids = "No";
profiles[9].Religion = "Paganism";
profiles[9].RelType = "Friends";


profiles.push(new Profile);

profiles[10].id = 10;
profiles[10].Gender = "male";
profiles[10].Image = "paul-rudd";
profiles[10].Title = "Paul_Rudd";
profiles[10].Name = "Paul Rudd";
profiles[10].Age = 50;
profiles[10].Description = "American actor, comedian, screenwriter, and producer.";
profiles[10].City = " Rhinebeck";
profiles[10].State = "NY";
profiles[10].Status = "Married";
profiles[10].hasKids = "Yes";
profiles[10].wantsKids = "No";
profiles[10].Religion = "Judaism";
profiles[10].RelType = "Long-Term";


profiles.push(new Profile);

profiles[11].id = 11;
profiles[11].Gender = "male";
profiles[11].Image = "terry-crews";
profiles[11].Title = "Terry_Crews";
profiles[11].Name = "Terry Crews";
profiles[11].Age = 51;
profiles[11].Description = "Actor, comedian, and former professional football player.";
profiles[11].City = "Santa Clarita";
profiles[11].State = "CA";
profiles[11].Status = "Married";
profiles[11].hasKids = "Yes";
profiles[11].wantsKids = "No";
profiles[11].Religion = "Christian";
profiles[11].RelType = "Long-Term";


profiles.push(new Profile);

profiles[12].id = 12;
profiles[12].Gender = "male";
profiles[12].Image = "neil-degrasse-tyson";
profiles[12].Title = "Nell_Degrasse_Tyson";
profiles[12].Name = "Neil Degrasse Tyson";
profiles[12].Age = 61;
profiles[12].Description = "Astrophysicist, author, and science communicator.";
profiles[12].City = "New York";
profiles[12].State = "NY";
profiles[12].Status = "Married";
profiles[12].hasKids = "No";
profiles[12].wantsKids = "No";
profiles[12].Religion = "Agnostic";
profiles[12].RelType = "Long-Term";


profiles.push(new Profile);

profiles[13].id = 13;
profiles[13].Gender = "female";
profiles[13].Image = "halle-berry";
profiles[13].Title = "Halle_Berry";
profiles[13].Name = "Halle Berry";
profiles[13].Age = 53;
profiles[13].Description = "American actress and won the Academy Award for Best Actress.";
profiles[13].City = "Oakwood";
profiles[13].State = "OH";
profiles[13].Status = "Single";
profiles[13].hasKids = "Yes";
profiles[13].wantsKids = "N";
profiles[13].Religion = "NA";
profiles[13].RelType = "Short-Term";


profiles.push(new Profile);

profiles[14].id = 14;
profiles[14].Gender = "male";
profiles[14].Image = "charlie-day";
profiles[14].Title = "Charlie_Day";
profiles[14].Name = "Charlie Day";
profiles[14].Age = 44;
profiles[14].Description = "Actor, screenwriter, producer, director and musician.";
profiles[14].City = "Los Angeles";
profiles[14].State = "CA";
profiles[14].Status = "Married";
profiles[14].hasKids = "Yes";
profiles[14].wantsKids = "Yes";
profiles[14].Religion = "Christian";
profiles[14].RelType = "Casual";


profiles.push(new Profile);

profiles[15].id = 15;
profiles[15].Gender = "female";
profiles[15].Image = "rachael-ray";
profiles[15].Title = "Rachael_Ray";
profiles[15].Name = "Rachael Ray";
profiles[15].Age = 51;
profiles[15].Description = "Television personality, celebrity cook and author.";
profiles[15].City = "New York";
profiles[15].State = "NY";
profiles[15].Status = "Married";
profiles[15].hasKids = "No";
profiles[15].wantsKids = "Yes";
profiles[15].Religion = "NA";
profiles[15].RelType = "Long-Term";


profiles.push(new Profile);

profiles[16].id = 16;
profiles[16].Gender = "male";
profiles[16].Image = "nick-kroll";
profiles[16].Title = "Nick_Kroll";
profiles[16].Name = "Nick Kroll";
profiles[16].Age = 41;
profiles[16].Description = "American actor, comedian, writer, and producer.";
profiles[16].City = "Rye";
profiles[16].State = "NY";
profiles[16].Status = "Single";
profiles[16].hasKids = "No";
profiles[16].wantsKids = "Yes";
profiles[16].Religion = "Judaism";
profiles[16].RelType = "Casual";


profiles.push(new Profile);

profiles[17].id = 17;
profiles[17].Gender = "male";
profiles[17].Image = "nick-offerman";
profiles[17].Title = "Nick_Offerman";
profiles[17].Name = "Nick Offerman";
profiles[17].Age = 49;
profiles[17].Description = "American actor, writer, comedian, producer and carpenter.";
profiles[17].City = "Chicago";
profiles[17].State = "IL";
profiles[17].Status = "Married";
profiles[17].hasKids = "No";
profiles[17].wantsKids = "No";
profiles[17].Religion = "Catholic";
profiles[17].RelType = "Long-Term";


profiles.push(new Profile);

profiles[18].id = 18;
profiles[18].Gender = "male";
profiles[18].Image = "james-franco";
profiles[18].Title = "James_Franco";
profiles[18].Name = "James Franco";
profiles[18].Age = 41;
profiles[18].Description = "Actor, director, screenwriter, comedian, film producer, and television producer.";
profiles[18].City = "Los Angeles";
profiles[18].State = "CA";
profiles[18].Status = "Single";
profiles[18].hasKids = "No";
profiles[18].wantsKids = "Yes";
profiles[18].Religion = "Judaism";
profiles[18].RelType = "Short-Term";


profiles.push(new Profile);

profiles[19].id = 19;
profiles[19].Gender = "male";
profiles[19].Image = "coolio";
profiles[19].Title = "coolio";
profiles[19].Name = "Coolio";
profiles[19].Age = 56;
profiles[19].Description = "Rapper, actor, chef, and record producer.";
profiles[19].City = "Compton";
profiles[19].State = "CA";
profiles[19].Status = "Married";
profiles[19].hasKids = "Yes";
profiles[19].wantsKids = "Yes";
profiles[19].Religion = "NA";
profiles[19].RelType = "Short-Term";


profiles.push(new Profile);

profiles[20].id = 20;
profiles[20].Gender = "female";
profiles[20].Image = "wanda-sykes";
profiles[20].Title = "Wanda_Sykes";
profiles[20].Name = "Wanda Sykes";
profiles[20].Age = 55;
profiles[20].Description = "American actress, comedian, and writer.";
profiles[20].City = "Portsmouth";
profiles[20].State = "VA";
profiles[20].Status = "Married";
profiles[20].hasKids = "Yes";
profiles[20].wantsKids = "No";
profiles[20].Religion = "NA";
profiles[20].RelType = "Friends";


profiles.push(new Profile);

profiles[21].id = 21;
profiles[21].Gender = "male";
profiles[21].Image = "joji";
profiles[21].Title = "Joji";
profiles[21].Name = "Joji";
profiles[21].Age = 27;
profiles[21].Description = "Formerly Filthy Frank and Pink Guy, Japanese singer, songwriter, rapper, and former Internet personality and comedian.";
profiles[21].City = "Brooklyn";
profiles[21].State = "NY";
profiles[21].Status = "Single";
profiles[21].hasKids = "No";
profiles[21].wantsKids = "Yes";
profiles[21].Religion = "NA";
profiles[21].RelType = "Short-Term";


profiles.push(new Profile);

profiles[22].id = 22;
profiles[22].Gender = "male";
profiles[22].Image = "matty-matheson";
profiles[22].Title = "Matty_Matheson";
profiles[22].Name = "Matty Matheson";
profiles[22].Age = 38;
profiles[22].Description = "Canadian chef and internet personality.";
profiles[22].City = "Ridgeway";
profiles[22].State = "Outside US";
profiles[22].Status = "Married";
profiles[22].hasKids = "Yes";
profiles[22].wantsKids = "Yes";
profiles[22].Religion = "NA";
profiles[22].RelType = "Friends";


profiles.push(new Profile);

profiles[23].id = 23;
profiles[23].Gender = "male";
profiles[23].Image = "russell-brand";
profiles[23].Title = "Russell_Brand";
profiles[23].Name = "Russell Brand";
profiles[23].Age = 44;
profiles[23].Description = "English comedian, actor, radio host, author, and activist.";
profiles[23].City = "Henley-on-Thames";
profiles[23].State = "Outside US";
profiles[23].Status = "Married";
profiles[23].hasKids = "Yes";
profiles[23].wantsKids = "No";
profiles[23].Religion = "Hindu";
profiles[23].RelType = "Friends";


profiles.push(new Profile);

profiles[24].id = 24;
profiles[24].Gender = "male";
profiles[24].Image = "eric-andre";
profiles[24].Title = "Eric_Andre";
profiles[24].Name = "Eric Andre";
profiles[24].Age = 36;
profiles[24].Description = "Comedian, television host, and internet celebrity.";
profiles[24].City = "Boca Raton";
profiles[24].State = "FL";
profiles[24].Status = "Single";
profiles[24].hasKids = "No";
profiles[24].wantsKids = "No";
profiles[24].Religion = "Judaism";
profiles[24].RelType = "Short-Term";


profiles.push(new Profile);

profiles[25].id = 25;
profiles[25].Gender = "male";
profiles[25].Image = "kevin-hart";
profiles[25].Title = "Kevin_Hart";
profiles[25].Name = "Kevin Hart";
profiles[25].Age = 40;
profiles[25].Description = "Stand-up comedian, actor, and producer.";
profiles[25].City = "Philadelphia";
profiles[25].State = "PA";
profiles[25].Status = "Married";
profiles[25].hasKids = "Yes";
profiles[25].wantsKids = "No";
profiles[25].Religion = "Christianity";
profiles[25].RelType = "Casual";


profiles.push(new Profile);

profiles[26].id = 26;
profiles[26].Gender = "male";
profiles[26].Image = "chili-klaus";
profiles[26].Title = "Chili_Klaus";
profiles[26].Name = "Chili Klaus";
profiles[26].Age = 54;
profiles[26].Description = "Chili Klaus or Klaus Wunderhits, is a Danish musician and entertainer.";
profiles[26].City = "Smukfest";
profiles[26].State = "Outside US";
profiles[26].Status = "Married";
profiles[26].hasKids = "Yes";
profiles[26].wantsKids = "No";
profiles[26].Religion = "NA";
profiles[26].RelType = "Casual";


profiles.push(new Profile);

profiles[27].id = 27;
profiles[27].Gender = "male";
profiles[27].Image = "sean-evans";
profiles[27].Title = "Sean_Evans";
profiles[27].Name = "Sean Evans";
profiles[27].Age = 33;
profiles[27].Description = "YouTuber and producer. He is the host of the YouTube series Hot Ones";
profiles[27].City = "Chicago";
profiles[27].State = "IL";
profiles[27].Status = "Single";
profiles[27].hasKids = "No";
profiles[27].wantsKids = "Yes";
profiles[27].Religion = "Christianity";
profiles[27].RelType = "Long-Term";


profiles.push(new Profile);

profiles[28].id = 28;
profiles[28].Gender = "female";
profiles[28].Image = "cara-delevingne";
profiles[28].Title = "Cara_Delevingne";
profiles[28].Name = "Cara Delevingne";
profiles[28].Age = 27;
profiles[28].Description = "English model, actress and singer.";
profiles[28].City = "Manhattan";
profiles[28].State = "NY";
profiles[28].Status = "Single";
profiles[28].hasKids = "No";
profiles[28].wantsKids = "Yes";
profiles[28].Religion = "NA";
profiles[28].RelType = "Short-Term";


profiles.push(new Profile);

profiles[29].id = 29;
profiles[29].Gender = "female";
profiles[29].Image = "padma-lakshmi";
profiles[29].Title = "Padma_Lakshmi";
profiles[29].Name = "Padma Lakshmi";
profiles[29].Age = 49;
profiles[29].Description = "Author, actress, model, and television host.";
profiles[29].City = "New York";
profiles[29].State = "NY";
profiles[29].Status = "Married";
profiles[29].hasKids = "Yes";
profiles[29].wantsKids = "No";
profiles[29].Religion = "Hindu";
profiles[29].RelType = "Casual";


profiles.push(new Profile);

profiles[30].id = 30;
profiles[30].Gender = "female";
profiles[30].Image = "margot-robbie";
profiles[30].Title = "Margot_Robbie";
profiles[30].Name = "Margot Robbie";
profiles[30].Age = 29;
profiles[30].Description = "Australian actress and film producer.";
profiles[30].City = "Los Angeles";
profiles[30].State = "CA";
profiles[30].Status = "Married";
profiles[30].hasKids = "No";
profiles[30].wantsKids = "Yes";
profiles[30].Religion = "Christianity";
profiles[30].RelType = "Friends";


profiles.push(new Profile);

profiles[31].id = 31;
profiles[31].Gender = "female";
profiles[31].Image = "gabrielle-union";
profiles[31].Title = "Gabrielle_Union";
profiles[31].Name = "Gabrielle Union";
profiles[31].Age = 47;
profiles[31].Description = "Actress, voice artist, activist, and author.";
profiles[31].City = "Miami";
profiles[31].State = "FL";
profiles[31].Status = "Married";
profiles[31].hasKids = "Yes";
profiles[31].wantsKids = "No";
profiles[31].Religion = "Roman Catholic";
profiles[31].RelType = "Casual";


profiles.push(new Profile);

profiles[32].id = 32;
profiles[32].Gender = "female";
profiles[32].Image = "halsey";
profiles[32].Title = "Halsey";
profiles[32].Name = "Halsey";
profiles[32].Age = 25;
profiles[32].Description = "Ashley Nicolette Frangipane, is an American singer and songwriter.";
profiles[32].City = "Los Angeles";
profiles[32].State = "CA";
profiles[32].Status = "Single";
profiles[32].hasKids = "No";
profiles[32].wantsKids = "Yes";
profiles[32].Religion = "Athiest";
profiles[32].RelType = "Casual";


profiles.push(new Profile);

profiles[33].id = 33;
profiles[33].Gender = "female";
profiles[33].Image = "maisie-williams";
profiles[33].Title = "Maisie Williams";
profiles[33].Name = "Maisie Williams";
profiles[33].Age = 22;
profiles[33].Description = "English actress. Professional acting debut was Game of Thrones";
profiles[33].City = "Clutton";
profiles[33].State = "Outside US";
profiles[33].Status = "Single";
profiles[33].hasKids = "No";
profiles[33].wantsKids = "No";
profiles[33].Religion = "NA";
profiles[33].RelType = "Casual";


profiles.push(new Profile);

profiles[34].id = 34;
profiles[34].Gender = "female";
profiles[34].Image = "sasha-banks";
profiles[34].Title = "Sasha_Banks";
profiles[34].Name = "Sasha Banks";
profiles[34].Age = 28;
profiles[34].Description = "American professional wrestler.";
profiles[34].City = "Fairfield";
profiles[34].State = "CA";
profiles[34].Status = "Married";
profiles[34].hasKids = "No";
profiles[34].wantsKids = "Yes";
profiles[34].Religion = "Christianity";
profiles[34].RelType = "Short-Term";


profiles.push(new Profile);

profiles[35].id = 35;
profiles[35].Gender = "female";
profiles[35].Image = "alexa-chung";
profiles[35].Title = "Alexa_Chung";
profiles[35].Name = "Alexa Chung";
profiles[35].Age = 36;
profiles[35].Description = "British writer, television presenter, model, and fashion designer.";
profiles[35].City = "Hampshire";
profiles[35].State = "Outside US";
profiles[35].Status = "Single";
profiles[35].hasKids = "No";
profiles[35].wantsKids = "Yes";
profiles[35].Religion = "NA";
profiles[35].RelType = "Casual";


profiles.push(new Profile);

profiles[36].id = 36;
profiles[36].Gender = "female";
profiles[36].Image = "chelsea-handler";
profiles[36].Title = "Chelsea-Handler";
profiles[36].Name = "Chelsea Handler";
profiles[36].Age = 45;
profiles[36].Description = "Comedian, actress, writer, television host, producer, and activist.";
profiles[36].City = "Los Angeles";
profiles[36].State = "CA";
profiles[36].Status = "Single";
profiles[36].hasKids = "No";
profiles[36].wantsKids = "No";
profiles[36].Religion = "Judaism";
profiles[36].RelType = "Long-Term";


profiles.push(new Profile);

profiles[37].id = 37;
profiles[37].Gender = "female";
profiles[37].Image = "tyra-banks";
profiles[37].Title = "Tyra_Banks";
profiles[37].Name = "Tyra Banks";
profiles[37].Age = 46;
profiles[37].Description = "Television personality, producer, actress, author, model, and occasional singer.";
profiles[37].City = "Los Angeles";
profiles[37].State = "CA";
profiles[37].Status = "Single";
profiles[37].hasKids = "Yes";
profiles[37].wantsKids = "No";
profiles[37].Religion = "Christian";
profiles[37].RelType = "Friends";


profiles.push(new Profile);

profiles[38].id = 38;
profiles[38].Gender = "female";
profiles[38].Image = "kristen-stewart";
profiles[38].Title = "Kristen_Stewart";
profiles[38].Name = "Kristen Stewart";
profiles[38].Age = 29;
profiles[38].Description = "American actress and director.";
profiles[38].City = "Los Angeles";
profiles[38].State = "CA";
profiles[38].Status = "Single";
profiles[38].hasKids = "No";
profiles[38].wantsKids = "No";
profiles[38].Religion = "NA";
profiles[38].RelType = "Friends";


profiles.push(new Profile);

profiles[39].id = 39;
profiles[39].Gender = "female";
profiles[39].Image = "zoe-kravitz";
profiles[39].Title = "Zoe_Kravitz";
profiles[39].Name = "Zoe Kravitz";
profiles[39].Age = 31;
profiles[39].Description = "American actress, singer, and model.";
profiles[39].City = "Brooklyn";
profiles[39].State = "NY";
profiles[39].Status = "Married";
profiles[39].hasKids = "No";
profiles[39].wantsKids = "No";
profiles[39].Religion = "NA";
profiles[39].RelType = "Casual";
 */