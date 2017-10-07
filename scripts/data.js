import $ from 'jquery';

class Data {

    getArticle(id) {
        id = Number(id);
        const articleArr = $.grep(articleList, function(text) 
            { 
                return text.id === id;
            } 
        );

        const article = articleArr[0];

        return article;
    }

    getContent() {
        return aboutContent;
    }

    getFirstParagraph() {
        const firstParagraph = aboutContent.content[0];
        return firstParagraph;
    }

    getLatestImages() {
        const latestImages = [];
        for(let i = 0; i < 5; i += 1) {
            latestImages.push(portfolio[i]);
        }

        return latestImages;
    }

    getPicture(id) {
        id = Number(id);
        const pictureArr = $.grep(portfolio, function(pic) 
            { 
                return pic.id === id;
            } 
        );

        const picture = pictureArr[0];

        return picture;
    }

    getPortfolio() {
        return portfolio;
    }

    getQuote() {
        const quoteNumber = Math.floor(Math.random() * quoteList.length);
        const quote = quoteList[quoteNumber];
        return quote;
    }

}

let data = new Data();

export { data };

const aboutContent = {
    author: 'admin',
    date: 'October 1, 2016',
    numberOfComments: 10,
    content: ['We believe sport is a powerful tool to create social change, to generate economic impact for communities, and to influence consumers. This philosophy advocates using sport not just as a physical activity but also as a means of educating people.',
    'Our creed, or guiding principle, is a quote by Baron de Coubertin: "The most important thing in the Olympic Games is not to win but to take part, just as the most important thing in life is not the triumph but the struggle. The essential thing is not to have conquered but to have fought well."',
    'According to our philosophy, the good sportsmanship, sense of fair play, and respect for fellow athletes that is developed through participation in sports teaches men and women of different races, religions, and nationalities to work peacefully together in competition toward common goals. We work to expand such lessons beyond the sports arena in the hope of promoting peace and a sense of brotherhood throughout the world.']
};

const articleList = [
    {
        id: 0,
        title: 'Yankees Take Control Early, Then Suffer a Crushing Defeat',
        author: 'Billy Witz',
        date: 'October 16, 2016',
        category: 'Sport',
        numberOfComments: 5,
        content: [
            'After Gary Sanchez and Aaron Hicks slugged home runs on Friday night off the Cleveland Indians ace Corey Kluber and helped send him to an early exit and then a five-run Yankees lead was turned over to their indomitable bullpen, they seemed destined to return to New York with their American League division series tied at a game apiece.',
            'But the Yankees, as young and talented as they may be, learned something about the Indians’ unwavering resolve.',
            'Francisco Lindor’s two-out, sixth-inning grand slam off Chad Green got the Indians back in the game. Jay Bruce’s solo shot off David Robertson in the eighth got them even, and Yan Gomes’s ground-ball double just inside the third-base line in the 13th lifted the Indians to a stunning 9-8 victory.',
            'As a result, the Yankees will return home for Game 3 on Sunday facing elimination by a team that has lost just four times in its last 39 games.',
            'It was a crushing defeat for the Yankees, who not only saw their big lead evaporate, but also failed to convert several late opportunities — including when they had pinch-runner Ronald Torreyes picked off second in extra innings with no one out. The Yankees also neglected to challenge a hit-by-pitch call, a move that might have prevented Lindor from coming to the plate and hitting his grand slam.'
        ]
    }
];

const portfolio = [
    { 
        id: 0,
        title: 'Image 0',
        url: 'http://www.parnavsports.com/images/sports.jpg',
        isLeading: true 
    },
    { 
        id: 1,
        title: 'Image 1',
        url: 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/08/03/tom-brady-vault-lead-2.jpg?itok=x3XaNoOh',
        isLeading: false 
    },
    { 
        id: 2,
        title: 'Image 2',
        url: 'https://media1.britannica.com/eb-media/40/162540-050-1D07AA68.jpg',
        isLeading: false 
    },
    { 
        id: 3,
        title: 'Image 3',
        url: 'http://www.jmisports.com/wp-content/uploads/2017/01/Clemson-Signs-Deal-with-JMI-Sports-Home.jpg',
        isLeading: false 
    },
    { 
        id: 4,
        title: 'Image 4',
        url: 'http://media.philly.com/images/600*400/dixon-187686-f-wp-content-uploads-2017-10-100417_sixers-grizzlies_1200-1200x800.jpg',
        ieLeading: false
    },
    { 
        id: 5,
        title: 'Image 5',
        url: 'https://images.laola1.tv/pool/10414_1920x1080.jpg',
        isLeading: true 
    },
    { 
        id: 6,
        title: 'Image 6',
        url: 'https://timedotcom.files.wordpress.com/2014/02/04056250.jpg?quality=85',
        isLeading: false 
    },
    { 
        id: 7,
        title: 'Image 7',
        url: 'https://squashskills.com/images/sized/1400x660/1063618794-poi824.290-qx100.png',
        isLeading: false 
    },
    { 
        id: 8,
        title: 'Image 8',
        url: 'https://qph.ec.quoracdn.net/main-qimg-f1d5cf8bf852e5331adde65cf8944d1f-c',
        isLeading: false
    },
    { 
        id: 9,
        title: 'Image 9',
        url: 'https://i.ytimg.com/vi/KNe2SZ1guL8/maxresdefault.jpg',
        isLeading: false
    }
];

const quoteList = [
    'The easiest way to make an impact in your community is just to be kind.',
    'Kindness isn\'t about the thanks you get. It\'s about the act itself.',
    'When there is teamwork and collaboration, wonderful things can be achieved.',
    'Talent wins games, but teamwork wins championships.',
    'Problems can become opportunities when the right people come together.',
    'The greater the obstacle, the more glory in overcoming it.',
    'We need to remember that circumstances don’t make a person, they reveal a person.',
    'Believe in your infinite potential. Your only limitations are those you set upon yourself.'
];