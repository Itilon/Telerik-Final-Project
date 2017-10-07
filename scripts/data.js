import $ from 'jquery';
import { requester } from 'requester';

class Data {

    getArticle(id) {
        id = Number(id);
        const ref = firebase.database().ref('articleList');
        return ref.once('value')
            .then((snapshot) => {
                const articleList = snapshot.val();
                const articleArr = $.grep(articleList, function(text) {
                    return text.id === id;
                });

                const article = articleArr[0]
                return article;
            });
    };

    getContent() {
        const $url = 'https://sport-vision-a49b7.firebaseio.com/aboutContent.json';
        return $.get($url);
    };

    getFirstParagraph() {
        const $url = 'https://sport-vision-a49b7.firebaseio.com/aboutContent/content/0.json';
        return $.get($url);
    };

    getLatestImages() {
        const latestImages = [];
        for(let i = 0; i < 5; i += 1) {
            latestImages.push(portfolio[i]);
        }

        return latestImages;
    };

    getPicture(id) {
        id = Number(id);
        const pictureArr = $.grep(portfolio, function(pic) 
            { 
                return pic.id === id;
            } 
        );

        const picture = pictureArr[0];

        return picture;
    };

    getPortfolio() {
        return portfolio;
    };

    getQuote() {
        const ref = firebase.database().ref('quoteList');
        return ref.once('value')
            .then((snapshot) => {
                const quoteList = snapshot.val();
                const quoteNumber = Math.floor(Math.random() * quoteList.length);
                const quote = quoteList[quoteNumber];
                return quote;
            });
    };
}

let data = new Data();

export { data };

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