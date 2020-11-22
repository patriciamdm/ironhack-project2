const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

const dbName = 'ironhack-project2'

mongoose.connect(`mongodb://localhost/${dbName}`)

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
    title: "Schindler's List",
    poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
    overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    release_date: "1993-11-30",
    vote_average: 8.6,
    popularity: 35.3,
    img: 'baby-driver-rory-hi-res.jpg'
}, {
    title: "The Godfather",
    poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    release_date: "1972-03-14",
    vote_average: 8.7,
    popularity: 44.667,
    img: 'baby-driver-rory-hi-res.jpg'
},
{
    title: "Whiplash",
    poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
    overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    release_date: "2014-10-10",
    vote_average: 8.29,
    popularity: 10.776056,
    img: 'baby-driver-rory-hi-res.jpg'
},
{
    title: "Spirited Away",
    poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
    overview: "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
    release_date: "2001-07-20",
    vote_average: 8.15,
    popularity: 10.776056,
    img: 'baby-driver-rory-hi-res.jpg'
}]




Movie.create(movies)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))



const Serie = require('../models/series.model')

const series = [{
    title: "Game of Thrones",
    poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    overview: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    first_air_date: "2011-04-17",
    vote_average: 4.8,
    popularity: 369.59,
    img: 'baby-driver-rory-hi-res.jpg'
}, {
    title: "Shark",
    poster_path: "/pBUzdT8840AATvyZ7HdPz8Z9evt.jpg",
    overview: "Notorious Los Angeles defense attorney Sebastian Stark becomes disillusioned with his career after his successful defense of a wife-abuser results in the wife's death. After more than a month trying to come to grips with his situation, he is invited by the Los Angeles district attorney to become a public prosecutor so he can apply his unorthodox-but-effective talents to putting guilty people away instead of putting them back on the street.",
    first_air_date: "2006-09-21",
    vote_average: 0,
    popularity: 0,
    img: 'baby-driver-rory-hi-res.jpg'
}, {
    title: "Hope and Glory",
    poster_path: "/9pJfV7chUj5zyqfzfd9UHXBk1vJ.jpg",
    overview: `Hope and Glory is a BBC television drama about a comprehensive school struggling with financial, staffing and disciplinary problems, and faced with closure. It starred Lenny Henry as maverick "Superhead" Ian George, enlisted to turn around the school's fortunes. It was created by Lucy Gannon, who had previously created Soldier Soldier, and was inspired by a real head teacher named William Atkinson.`,
    release_date: "1972-03-14",
    vote_average: 6.7,
    popularity: 25.5,
    img: 'baby-driver-rory-hi-res.jpg'
}]


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
    img: 'personimg.png'
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
    img: 'personimg.png'
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
    img: 'personimg.png'
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
    img: 'personimg.png'
},
{
    name: "David Fincher",
    profile_path: "/wdBeQXDNbbjkIKXHeEZtQShwSDM.jpg",
    birthday: "1962-08-28",
    deathday: "",
    biography: "David Andrew Leo Fincher (born August 28, 1962) is an American film director and music video director. Known for his dark and stylish thrillers, such as Seven (1995), The Game (1997), Fight Club (1999), Panic Room (2002), and Zodiac (2007), Fincher received Academy Award nominations for Best Director for his 2008 film The Curious Case of Benjamin Button and his 2010 film The Social Network, which also won him the Golden Globe and the BAFTA for best director.",
    place_of_birth: "Denver, Colorado, USA",
    popularity: 5.091,
    known_for_department: "Directing",
    img: 'personimg.png'
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
    img: 'personimg.png'
},
{
    name: "D. A. Pennebaker",
    profile_path: "/ck0VifZWw8Z0mOR7Usx3LlmuSX9.jpg",
    birthday: "1904-11-12",
    deathday: "1977-12-19",
    biography: "Donn Alan Pennebaker (July 15, 1925 – August 1, 2019) was an American documentary filmmaker.",
    place_of_birth: "Evanston, Illinois, USA",
    popularity: 1.456,
    known_for_department: "Directing",
    img: 'personimg.png'
},
]


Person.create(people)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))