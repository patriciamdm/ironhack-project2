const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

const dbName = 'ironhack-project2'

// mongoose.connect(`mongodb://localhost/${dbName}`)

mongoose.connect(process.env.DB_REMOTE)

// const baseUsers = [{
//     email: 'patrimdm96@gmail.com',
//     password: '',
//     name: 'Patricia'
//     about: 'Ironhacker',
//     role: 'admin'
// },
// {
//     email: 'jordi.b.arevalo@gmail.com',
//     password: '',
//     name: 'Jordi',
//     about: 'A ver pelis',
//     role: 'admin'
// }]

// User.create(baseUsers)
//     .then(data => {
//         console.log(data)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log(err))

const movies = [{
    genres: ["Drama"],
    overview: `A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.`,
    popularity: 46.667,
    poster_path: "/2z8mFQrT0ESSytWZqro1jsCbvCC.jpg",
    release_date: "1999-10-15",
    tagline: "Mischief. Mayhem. Soap.",
    title: "Fight Club",
    vote_average: 8.4,
}, {
    genres: ["Drama", "Crime"],
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    popularity: 35.997,
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    release_date: "1972-03-14",
    tagline: "An offer you can't refuse.",
    title: "The Godfather",
    vote_average: 8.7,
},
{
    genres: ["Drama", "History", "War"],
    overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    popularity: 29.275,
    poster_path: "/c8Ass7acuOe4za6DhSattE359gr.jpg",
    release_date: "1993-11-30",
    tagline: "Whoever saves one life, saves the world entire.",
    title: "Schindler's List",
    vote_average: 8.6,
},
{
    genres: ["Romance", "Animation", "Drama"],
    overview: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    popularity: 126.853,
    poster_path: "/q719jXXEzOoYaps6babgKnONONX.jpg",
    release_date: "2016-08-26",
    tagline: "",
    title: "Your Name.",
    vote_average: 8.6,
},
{
    genres: ["Animation", "Family", "Fantasy"],
    overview: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    popularity: 54.698,
    poster_path: "/eO4NHOsitcVpRw0kolJRLxXdxa2.jpg",
    release_date: "2001-07-20",
    tagline: "",
    title: "Spirited Away",
    vote_average: 8.5,
},
{
    genres: ["Thriller", "Crime"],
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    popularity: 37.718,
    poster_path: "/dRZpdpKLgN9nk57zggJCs1TjJb4.jpg",
    release_date: "1994-09-10",
    tagline: "Just because you are a character doesn't mean you have character.",
    title: "Pulp Fiction",
    vote_average: 8.5,
},
{
    genres: ["Comedy", "Drama", "Romance"],
    overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    popularity: 48.644,
    poster_path: "/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg",
    release_date: "1994-07-06",
    tagline: "Life is like a box of chocolates...you never know what you're gonna get.",
    title: "Forrest Gump",
    vote_average: 8.5,
},
{
    genres: ["Adventure", "Fantasy", "Action"],
    overview: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
    popularity: 48.865,
    poster_path: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    release_date: "2003-12-01",
    tagline: "The eye of the enemy is moving.",
    title: "The Lord of the Rings: The Return of the King",
    vote_average: 8.5,

}]




Movie.create(movies)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))



const Serie = require('../models/series.model')

const series = [
    {
        first_air_date: "2019-11-12",
        genres: ["Sci-Fi & Fantasy", "Action & Adventure", "Western"],
        name: "The Mandalorian",
        number_of_episodes: 16,
        number_of_seasons: 2,
        overview: "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
        popularity: 1844.008,
        poster_path: "/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
        tagline: "Bounty hunting is a complicated profession.",
        vote_average: 8.5
    },
    {
        first_air_date: "2011-04-17",
        genres: ["Sci-Fi & Fantasy", "Drama", "Action & Adventure", "Mystery"],
        name: "Game of Thrones",
        number_of_episodes: 73,
        number_of_seasons: 8,
        overview: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
        popularity: 312.963,
        poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        tagline: "Winter Is Coming",
        vote_average: 8.3
    },
    {
        first_air_date: "2017-01-26",
        genres: ["Drama", "Mystery"],
        name: "Riverdale",
        number_of_episodes: 80,
        number_of_seasons: 5,
        overview: "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
        popularity: 334.118,
        poster_path: "/4X7o1ssOEvp4BFLim1AZmPNcYbU.jpg",
        tagline: "Small town. Big secrets.",
        vote_average: 8.6,
        vote_count: 6717
    },

    {
        first_air_date: "1989-12-16",
        genres: ["Animation", "Comedy", "Family", "Drama"],
        name: "The Simpsons",
        number_of_episodes: 694,
        number_of_seasons: 32,
        overview: "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
        popularity: 337.656,
        poster_path: "/2IWouZK4gkgHhJa3oyYuSWfSqbG.jpg",
        tagline: "On your marks, get set, d'oh!",
        vote_average: 7.7

    },
    {
        first_air_date: "2014-01-08",
        genres: ["Crime", "Drama"],
        name: "Chicago P.D.",
        number_of_episodes: 150,
        number_of_seasons: 8,
        overview: "A riveting police drama about the men and women of the Chicago Police Department's District 21 who put it all on the line to serve and protect their community. District 21 is made up of two distinctly different groups: the uniformed cops who patrol the beat and go head-to-head with the city's street crimes and the Intelligence Unit that combats the city's major offenses - organized crime, drug trafficking, high profile murders and beyond.",
        popularity: 339.398,
        poster_path: "/OlPR1kctwXzSUJQkZINDDhNlHV.jpg",
        tagline: "Break the rules. Not the law.",
        vote_average: 8.2,
    },
    {
        first_air_date: "2019-07-25",
        genres: ["Sci-Fi & Fantasy", "Action & Adventure"],
        homepage: "https://www.amazon.com/dp/B0875L45GK",
        name: "The Boys",
        number_of_episodes: 16,
        number_of_seasons: 2,
        overview: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
        popularity: 437.488,
        poster_path: "/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg",
        tagline: "Never meet your heroes.",
        vote_average: 8.4
    },
    {

        first_air_date: "2020-10-23",
        genres: ["Drama"],
        name: "The Queen's Gambit",
        number_of_episodes: 7,
        number_of_seasons: 1,
        overview: "In a Kentucky orphanage in the 1950s, a young girl discovers an astonishing talent for chess while struggling with addiction.",
        popularity: 486.13,
        poster_path: "/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
        tagline: "",
        vote_average: 8.8,

    },
    {
        first_air_date: "2019-02-15",
        genres: ["Action & Adventure", "Sci-Fi & Fantasy", "Comedy", "Drama"],
        name: "The Umbrella Academy",
        number_of_episodes: 20,
        number_of_seasons: 2,
        overview: "A dysfunctional family of superheroes comes together to solve the mystery of their father's death, the threat of the apocalypse and more.",
        popularity: 364.209,
        poster_path: "/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",
        tagline: "Super. Dysfunctional. Family.",
        vote_average: 8.7,
    }
]


Serie.create(series)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))


const Person = require('../models/person.model')


const people = [{
    name: "Edward Norton",
    profile_path: "/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg",
    birthday: "1969-08-18",
    deathday: "",
    biography: "Edward Harrison Norton (born August 18, 1969) is an American actor, screenwriter, film director and producer. In 1996, his supporting role in the courtroom drama Primal Fear garnered him a nomination for the Academy Award for Best Supporting Actor. Two years later, his lead role as a reformed white power skinhead in American History X earned a nomination for Academy Award for Best Actor. His other films include period dramas such as Kingdom of Heaven (2005), The Illusionist (2006), and The Painted Veil (2006); and other notable films such as Rounders (1998), Fight Club (1999), 25th Hour (2002), Red Dragon (2002), and The Incredible Hulk (2008). In addition to acting, Norton is also a writer and director. He made his directorial debut with the film Keeping the Faith (2000) and is slated to direct the film adaptation of the novel Motherless Brooklyn. Norton did uncredited work on the scripts for The Score, Frida, and The Incredible Hulk. In his private life, Norton is an environmental and social activist. He is a member of the board of trustees of Enterprise Community Partners, a non-profit organization for developing affordable housing, founded by his grandfather, James Rouse. Norton is president of the American branch of the Maasai Wilderness Conservation Trust. He ran in the 2009 New York City Marathon to raise money for the Trust. He also raises money for charity through Crowdrise, a social networking community for volunteers and a micro-donations fundraising platform. In July 2010, Norton was designated as the United Nations Goodwill Ambassador for Biodiversityby UN Secretary-General Ban Ki-moon.",
    place_of_birth: "Boston, Massachusetts, USA",
    popularity: 7.405,
    known_for_department: "Acting",
},
{
    name: "Brad Pitt",
    profile_path: "/cckcYc2v0yh1tc9QjRelptcOBko.jpg",
    birthday: "1963-12-18",
    deathday: "",
    biography: "William Bradley Pitt is an American actor and film producer. He has received multiple awards, including two Golden Globe Awards and an Academy Award for his acting, in addition to another Academy Award and a Primetime Emmy Award as producer under his production company, Plan B Entertainment. Pitt first gained recognition as a cowboy hitchhiker in the road movie Thelma & Louise (1991). His first leading roles in big-budget productions came with the drama films A River Runs Through It (1992) and Legends of the Fall (1994), and the horror film Interview with the Vampire (1994). He gave critically acclaimed performances in the crime thriller Seven (1995) and the science fiction film 12 Monkeys (1995), the latter earning him a Golden Globe Award for Best Supporting Actor and an Academy Award nomination. Pitt starred in Fight Club (1999) and the heist film Ocean's Eleven (2001), as well as its sequels, Ocean's Twelve (2004) and Ocean's Thirteen (2007). His greatest commercial successes have been Ocean's Eleven (2001), Troy (2004), Mr. & Mrs. Smith (2005), World War Z (2013), and Once Upon a Time in Hollywood (2019), for which he won a second Golden Globe Award and the Academy Award for Best Supporting Actor. Pitt's other Academy Award nominated performances were in The Curious Case of Benjamin Button (2008) and Moneyball (2011). He produced The Departed (2006) and 12 Years a Slave (2013), both of which won the Academy Award for Best Picture, and also The Tree of Life (2011), Moneyball (2011), and The Big Short (2015), all of which were nominated for Best Picture. As a public figure, Pitt has been cited as one of the most influential and powerful people in the American entertainment industry. For a number of years, he was cited as the world's most attractive man by various media outlets, and his personal life is the subject of wide publicity. From 2000 to 2005, he was married to the actress Jennifer Aniston, and from 2014 to 2019, he was married to the actress Angelina Jolie. Pitt and Jolie have six children together, three of whom were adopted internationally.",
    place_of_birth: "Shawnee, Oklahoma, USA",
    popularity: 19.908,
    known_for_department: "Acting",
},
{
    name: "Helena Bonham Carter",
    profile_path: "/mW1NolxQmPE16Zg6zuWyZlFgOwL.jpg",
    birthday: "1966-05-26",
    deathday: "",
    biography: "Helena Bonham Carter (born 26 May 1966) is an English actress of film, stage, and television. She made her film debut in K. M. Peyton's A Pattern of Roses before winning her first leading role as the titular character in Lady Jane. She is known for her roles in films such as A Room with a View, Fight Club, and the Harry Potter series, as well as for frequently collaborating with director Tim Burton, her domestic partner since 2001. Bonham Carter is a two-time Academy Award nominee for her performances in The Wings of the Dove and The King's Speech; her portrayal of Queen Elizabeth in the latter film garnering her a BAFTA Award in 2011. Description above from the Wikipedia article Helena Bonham Carter, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    place_of_birth: "Golders Green, London, England, UK",
    popularity: 11.722,
    known_for_department: "Acting",
},
{
    name: "Jared Leto",
    profile_path: "/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg",
    birthday: "1971-12-26",
    deathday: "",
    biography: "Jared Joseph Leto (born December 26, 1971) is an American actor and musician. He began his career as a model before studying art, and then later, film and video. Leto gained fame during his role as Jordan Catalano in My So-Called Life. He has appeared in films such as Fight Club; Girl, Interrupted; Panic Room; American Psycho; Alexander; Requiem for a Dream; Lord of War, Prefontaine, Mr. Nobody and Suicide Squad. He is the lead vocalist, rhythm guitarist and main songwriter for the American rock band 30 Seconds to Mars and has directed music videos under the pseudonym Bartholomew Cubbins.",
    place_of_birth: "Bossier City, Louisiana, USA",
    popularity: 3.156,
    known_for_department: "Acting",
},
{
    biography: "Thomas Jeffrey Hanks (born July 9, 1956) is an American actor and filmmaker. Known for both his comedic and dramatic roles, Hanks is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon. Hanks made his breakthrough with leading roles in the comedies Splash (1984) and Big (1988). He won two consecutive Academy Awards for Best Actor for starring as a gay lawyer suffering from AIDS in Philadelphia (1993) and a young man with below-average IQ in Forrest Gump (1994). Hanks collaborated with film director Steven Spielberg on five films: Saving Private Ryan (1998), Catch Me If You Can (2002), The Terminal (2004), Bridge of Spies (2015), and The Post (2017), as well as the 2001 miniseries Band of Brothers, which launched him as a director, producer, and screenwriter. Hanks' other notable films include the romantic comedies Sleepless in Seattle (1993) and You've Got Mail (1998); the dramas Apollo 13 (1995), The Green Mile (1999), Cast Away (2000), Road to Perdition (2002), and Cloud Atlas (2012); and the biographical dramas Saving Mr. Banks (2013), Captain Phillips (2013), Sully (2016), and A Beautiful Day in the Neighborhood (2019). He has also appeared as the title character in the Robert Langdon film series, and has voiced Sheriff Woody in the Toy Story film series. Description above from the Wikipedia article Tom Hanks, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    birthday: "1956-07-09",
    deathday: null,
    known_for_department: "Acting",
    name: "Tom Hanks",
    place_of_birth: "Concord, California, USA",
    popularity: 17.864,
    profile_path: "/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg"
},
{
    biography: "Robin Gayle Wright (born April 8, 1966) is an American actress. She is best known for her roles as Jenny Curran in Forrest Gump, as Buttercup in The Princess Bride, and as Mary Surratt in The Conspirator. She has also been credited as Robin Wright Penn.",
    birthday: "1966-04-08",
    deathday: null,
    known_for_department: "Acting",
    name: "Robin Wright",
    place_of_birth: "Dallas, Texas, USA",
    popularity: 7.146,
    profile_path: "/3IvlZd2PpT3Tuxy8lr6ymWLyoNU.jpg"
},
{
    biography: "Margot Elise Robbie (born 2 July 1990) is an Australian actress and film producer. She has received nominations for two Academy Awards and five BAFTA Awards. In 2017, Time magazine named her one of the 100 most influential people in the world and in 2019 she was ranked among the world's highest-paid actresses. Robbie studied drama at Somerset College and began her career in Australian independent films in the late 2000s, before working in the soap opera Neighbours (2008–2011). After moving to America, she starred in the ABC drama series Pan Am (2011–2012) and had her breakthrough role in Martin Scorsese's black comedy film The Wolf of Wall Street (2013). Robbie's profile continued to grow with starring roles as a grifter in Focus (2015), Jane Porter in The Legend of Tarzan (2016), and Harley Quinn in the DC Extended Universe, beginning with Suicide Squad (2016). Robbie gained critical praise and nominations for the BAFTA Award and Academy Award for Best Actress for portraying the disgraced figure skater Tonya Harding in the biopic I, Tonya (2017). This acclaim continued for her roles as Queen Elizabeth I in the period drama Mary Queen of Scots (2018), Sharon Tate in the comedy-drama Once Upon a Time in Hollywood (2019), and a fictional Fox News employee in the drama Bombshell (2019). She received BAFTA Award nominations for all three and a nomination for the Academy Award for Best Supporting Actress for the lattermost. Robbie is married to the filmmaker Tom Ackerley. They are among the founders of the production company LuckyChap Entertainment, under which she has produced some of her own films, as well as the television series Dollface (2019).",
    birthday: "1990-07-02",
    deathday: null,
    known_for_department: "Acting",
    name: "Margot Robbie",
    place_of_birth: "Dalby, Queensland, Australia",
    popularity: 19.193,
    profile_path: "/pbSz7d1aURy88HGzFWng5EoFU81.jpg"
},
{
    biography: `Willard Christopher "Will" Smith, Jr. (born September 25, 1968) is an American actor, film producer and pop rapper. He has enjoyed success in music, television and film. In April 2007, Newsweek called him the most powerful actor on the planet. Smith has been nominated for four Golden Globe Awards, two Academy Awards, and has won multiple Grammy Awards. In the late 1980s, Smith achieved modest fame as a rapper under the name The Fresh Prince. In 1990, his popularity increased dramatically when he starred in the popular television series The Fresh Prince of Bel-Air. The show ran for nearly six years (1990–1996) on NBC and has been syndicated consistently on various networks since then. In the mid-1990s, Smith transitioned from television to film, and ultimately starred in numerous blockbuster films that received broad box office success. In fact, he is the only actor in history to have eight consecutive films gross over $100 million in the domestic box office as well as being the only actor to have eight consecutive films in which he starred open at the #1 spot in the domestic box office tally. Fourteen of the 19 fiction films he has acted in have accumulated worldwide gross earnings of over $100 million, and 4 of them took in over $500 million in global box office receipts. His most financially successful films have been Bad Boys, Bad Boys II, Independence Day, Men in Black, Men in Black II, I, Robot, The Pursuit of Happyness, I Am Legend, Hancock, Wild Wild West, Enemy of the State, Shark Tale, Hitch, and Seven Pounds. He also earned critical praise for his performances in Six Degrees of Separation, Ali, and The Pursuit of Happyness, receiving Best Actor Oscar nominations for the latter two.`,
    birthday: "1968-09-25",
    deathday: null,
    known_for_department: "Acting",
    name: "Will Smith",
    place_of_birth: "Philadelphia, Pennsylvania, USA ",
    popularity: 29.338,
    profile_path: "/eze9FO9VuryXLP0aF2cRqPCcibN.jpg"
},
//DIRECTORS
{
    name: "David Fincher",
    profile_path: "/wdBeQXDNbbjkIKXHeEZtQShwSDM.jpg",
    birthday: "1962-08-28",
    deathday: "",
    biography: "David Andrew Leo Fincher (born August 28, 1962) is an American film director and music video director. Known for his dark and stylish thrillers, such as Seven (1995), The Game (1997), Fight Club (1999), Panic Room (2002), and Zodiac (2007), Fincher received Academy Award nominations for Best Director for his 2008 film The Curious Case of Benjamin Button and his 2010 film The Social Network, which also won him the Golden Globe and the BAFTA for best director.",
    place_of_birth: "Denver, Colorado, USA",
    popularity: 5.091,
    known_for_department: "Directing",
    job: 'director'
},
{
    name: "Stanley Kubrick",
    profile_path: "/exfQ6vXXq7rMS5YWb3B88PK39a1.jpg",
    birthday: "1928-07-26",
    deathday: "1999-03-07",
    biography: `Stanley Kubrick (July 26, 1928 – March 7, 1999) was an American film director, writer, producer, and photographer who lived in England during most of the last four decades of his career. Kubrick was noted for the scrupulous care with which he chose his subjects, his slow method of working, the variety of genres he worked in, his technical perfectionism, and his reclusiveness about his films and personal life. He maintained almost complete artistic control, making movies according to his own whims and time constraints, but with the rare advantage of big-studio financial support for all his endeavors. Kubrick's films are characterized by a formal visual style and meticulous attention to detail—his later films often have elements of surrealism and expressionism that eschews structured linear narrative. His films are repeatedly described as slow and methodical, and are often perceived as a reflection of his obsessive and perfectionist nature. A recurring theme in his films is man's inhumanity to man. While often viewed as expressing an ironic pessimism, a few critics feel his films contain a cautious optimism when viewed more carefully. The film that first brought him attention to many critics was Paths of Glory, the first of three films of his about the dehumanizing effects of war. Many of his films at first got a lukewarm reception, only to be years later acclaimed as masterpieces that had a seminal influence on many later generations of film-makers. Considered especially groundbreaking was 2001: A Space Odyssey noted for being both one of the most scientifically realistic and visually innovative science-fiction films ever made while maintaining an enigmatic non-linear storyline. He voluntarily withdrew his film A Clockwork Orange from England, after it was accused of inspiring copycat crimes which in turn resulted in threats against Kubrick's family. His films were largely successful at the box-office, although Barry Lyndon performed poorly in the United States. Living authors Anthony Burgess and Stephen King were both unhappy with Kubrick's adaptations of their novels A Clockwork Orange and The Shining respectively, and both authors were engaged with subsequent adaptations. All of Kubrick's films from the mid-1950s to his death except for The Shining were nominated for Oscars, Golden Globes, or BAFTAs. Although he was nominated for an Academy Award as a screenwriter and director on several occasions, his only personal win was for the special effects in 2001: A Space Odyssey. Even though all of his films, apart from the first two, were adapted from novels or short stories, his works have been described by Jason Ankeny and others as "original and visionary". Although some critics, notably Andrew Sarris and Pauline Kael, frequently disparaged Kubrick's work, Ankeny describes Kubrick as one of the most "universally acclaimed and influential directors of the postwar era" with a "standing unique among the filmmakers of his day." Description above from the Wikipedia article Stanley Kubrick, licensed under CC-BY-SA, full list of contributors on Wikipedia.`,
    place_of_birth: "Manhattan, New York, USA",
    popularity: 3.41,
    known_for_department: "Directing",
    job: 'director'

},
{
    biography: `Robert Lee Zemeckis (born May 14, 1952) is an American film director, producer and screenwriter. Zemeckis first came to public attention in the 1980s as the director of the comedic time-travel Back to the Future film series, as well as the Academy Award-winning live-action/animation epic Who Framed Roger Rabbit (1988), though in the 1990s he diversified into more dramatic fare, including 1994's Forrest Gump, for which he won an Academy Award for Best Director. His films are characterized by an interest in state-of-the-art special effects, including the early use of match moving in Back to the Future Part II (1989) and the pioneering performance capture techniques seen in The Polar Express (2004), Beowulf (2007) and A Christmas Carol (2009). Though Zemeckis has often been pigeonholed as a director interested only in effects, his work has been defended by several critics, including David Thomson, who wrote that "No other contemporary director has used special effects to more dramatic and narrative purpose.`,
    birthday: "1952-05-14",
    deathday: null,
    known_for_department: "Directing",
    name: "Robert Zemeckis",
    place_of_birth: "Chicago, Illinois, USA ",
    popularity: 1.985,
    profile_path: "/lPYDQ5LYNJ12rJZENtyASmVZ1Ql.jpg",
    job: 'director'
},
{

    biography: `Frank Darabont (born January 28, 1959) is a Hungarian-American film director, screenwriter and producer who has been nominated for three Academy Awards and a Golden Globe. He was born in France by Hungarian parents who fled Budapest during the 1956 uprising, but the family moved to Los Angeles while he was still an infant. He has directed the films The Shawshank Redemption, The Green Mile, and The Mist, all based on stories by Stephen King. In 2010 he developed and executive produced the first season of the AMC network television series The Walking Dead. Description above from the Wikipedia article Frank Darabont, licensed under CC-BY-SA, full list of contributors on Wikipedia.`,
    birthday: "1959-01-28",
    deathday: null,
    known_for_department: "Directing",
    name: "Frank Darabont",
    place_of_birth: "Montbéliard, Doubs, France",
    popularity: 3.689,
    profile_path: "/wmUGB2vPuYQKPWNrK24SonBtyJY.jpg",
    job: 'director'
},
{
    biography: "James Cameron was born in Kapuskasing, Ontario, Canada, on August 16, 1954. He moved to the USA in 1971. The son of an engineer, he majored in physics at California State University but, after graduating, drove a truck to support his screen-writing ambition. He landed his first professional film job as art director, miniature-set builder, and process-projection supervisor on Roger Corman's Battle Beyond the Stars (1980) and debuted as a director with Piranha Part Two: The Spawning (1981) the following year. In 1984, he wrote and directed The Terminator (1984), a futuristic action-thriller starring Arnold Schwarzenegger, Michael Biehn, and Linda Hamilton. It was a huge success. After this came a string of successful science-fiction action films such as Aliens (1986) and Terminator 2: Judgment Day (1991). Cameron is now one of the most sought-after directors in Hollywood. He was formerly married to producer Gale Anne Hurd, who produced several of his films. He married Kathryn Bigelow in 1989.",
    birthday: "1954-08-16",
    deathday: null,
    known_for_department: "Directing",
    name: "James Cameron",
    place_of_birth: "Kapuskasing, Ontario, Canada",
    popularity: 3.166,
    profile_path: "/9NAZnTjBQ9WcXAQEzZpKy4vdQto.jpg",
    job: 'director'
},
{
    biography: "Quentin Jerome Tarantino (born March 27, 1963) is an American film director, screenwriter, producer, cinematographer and actor. In the early 1990s he was an independent filmmaker whose films used nonlinear storylines and aestheticization of violence. His films have earned him a variety of Academy Award, Golden Globe, BAFTA and Palme d'Or Awards and he has been nominated for Emmy and Grammy Awards. In 2007, Total Film named him the 12th-greatest director of all time. Tarantino was born in Knoxville, Tennessee, the son of Connie McHugh Tarantino Zastoupil, a health care executive and nurse born in Knoxville, and Tony Tarantino, an actor and amateur musician born in Queens, New York. Tarantino's mother allowed him to quit school at age 17, to attend an acting class full time. Tarantino gave up acting while attending the acting school, saying that he admired directors more than actors. Tarantino also worked in a video rental store before becoming a filmmaker, paid close attention to the types of films people liked to rent, and has cited that experience as inspiration for his directorial career. Tarantino has been romantically linked with numerous entertainers, including actress Mira Sorvino, directors Allison Anders and Sofia Coppola, actresses Julie Dreyfus and Shar Jackson and comedians Kathy Griffin and Margaret Cho. He has never married and has no children. Description above from the Wikipedia article Quentin Tarantino, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    birthday: "1963-03-27",
    deathday: null,
    known_for_department: "Directing",
    name: "Quentin Tarantino",
    place_of_birth: "Knoxville, Tennessee, USA",
    popularity: 8.093,
    profile_path: "/1gjcpAa99FAOWGnrUvHEXXsRs7o.jpg",
    job: 'director'
},
{
    biography: "David Ayer (born January 18, 1968) is an American film director, producer and screenwriter. He is best known for being the writer of Training Day (2001) and the director of Harsh Times (2005), Street Kings (2008), End of Watch (2012), Sabotage (2014), Fury (2014), Suicide Squad (2016) and Bright (2017). Description above from the Wikipedia article  David Ayer, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
    birthday: "1968-01-18",
    deathday: null,
    known_for_department: "Directing",
    name: "David Ayer",
    place_of_birth: "Champaign, Illinois, USA",
    popularity: 1.31,
    profile_path: "/2oBT2jQbsV8IWPMr3Cm87YBJxGu.jpg",
    job: 'director'
},
{
    biography: `Alejandro González Iñárritu (American Spanish: [aleˈxandɾo gonˈsales iˈɲaritu]; credited since 2014 as Alejandro G. Iñárritu; born August 15, 1963) is a Mexican film director, producer and screenwriter. He is the first Mexican director to be nominated for the Academy Award for Best Director and the Directors Guild of America Award for Outstanding Directing, for Babel (2007). Iñárritu's six feature films—Amores perros (2000), 21 Grams (2003), Babel (2006) (comprising the "Death Trilogy"), Biutiful (2010), Birdman or (The Unexpected Virtue of Ignorance) (2014), and The Revenant (2015)—have garnered critical acclaim and numerous accolades, including Academy Award nominations and wins. In 2015, Iñárritu won the Academy Award for Best Director, Best Original Screenplay, and Best Picture for Birdman. The following year, he won the Academy Award for Best Director for The Revenant, making him the third director to win back to back Academy Awards, and the first since 1950. He is friends with fellow Mexican directors Guillermo del Toro and Alfonso Cuarón, collectively known as "The Three Amigos of Cinema."`,
    birthday: "1963-08-15",
    deathday: null,
    gender: 2,
    known_for_department: "Directing",
    name: "Alejandro González Iñárritu",
    place_of_birth: "Mexico City, Distrito Federal, Mexico",
    popularity: 1.824,
    profile_path: "/qWrltG9e0ssM3Y9pF86EAgteKHu.jpg",
    job: 'director'
}


]


Person.create(people)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))