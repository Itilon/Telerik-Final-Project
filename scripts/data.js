import $ from 'jquery';

class Data {
    getContent() {
        return aboutContent;
    }
    getPortfolio() {
        return portfolio
    }
}

let data = new Data();

export { data };

const aboutContent = {
    author: 'admin',
    date: 'October 1, 2016',
    numberOfComments: 10,
    content: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ex cumque laborum voluptates fugit nisi aut, dicta aliquam consequatur in, natus expedita cum inventore corporis accusantium distinctio! Veniam, deserunt, reprehenderit.',
    'Tenetur non enim, delectus doloremque repudiandae, dolorum eligendi explicabo cupiditate nemo mollitia. Eum inventore tempore explicabo tempora, earum voluptatum obcaecati provident nihil illo? Totam, quidem quos in vero, id enim?',
    'Non molestiae nulla eius beatae ratione dolorem doloremque, magnam sapiente dolore quis harum qui, fugit aliquam minus corrupti quod itaque accusamus velit. Repudiandae autem ex esse eos placeat sunt molestiae.']
}

const portfolio = [
    { 
        url: 'http://www.parnavsports.com/images/sports.jpg',
        isLeading: true 
    },
    { 
        url: 'https://cdn-s3.si.com/s3fs-public/styles/marquee_large_2x/public/2017/08/03/tom-brady-vault-lead-2.jpg?itok=x3XaNoOh',
        isLeading: false 
    },
    { 
        url: 'https://media1.britannica.com/eb-media/40/162540-050-1D07AA68.jpg',
        isLeading: false 
    },
    { 
        url: 'http://www.jmisports.com/wp-content/uploads/2017/01/Clemson-Signs-Deal-with-JMI-Sports-Home.jpg',
        isLeading: false 
    },
    { 
        url: 'http://media.philly.com/images/600*400/dixon-187686-f-wp-content-uploads-2017-10-100417_sixers-grizzlies_1200-1200x800.jpg',
        ieLeading: false
    },
    { 
        url: 'https://images.laola1.tv/pool/10414_1920x1080.jpg',
        isLeading: true 
    },
    { 
        url: 'https://timedotcom.files.wordpress.com/2014/02/04056250.jpg?quality=85',
        isLeading: false 
    },
    { 
        url: 'https://squashskills.com/images/sized/1400x660/1063618794-poi824.290-qx100.png',
        isLeading: false 
    },
    { 
        url: 'https://qph.ec.quoracdn.net/main-qimg-f1d5cf8bf852e5331adde65cf8944d1f-c',
        isLeading: false
    },
    { 
        url: 'https://i.ytimg.com/vi/KNe2SZ1guL8/maxresdefault.jpg',
        isLeading: false
    }
]