import $ from 'jquery';

const aboutContent = {
    author: 'admin',
    date: 'October 1, 2016',
    numberOfComments: 10,
    content: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam ex cumque laborum voluptates fugit nisi aut, dicta aliquam consequatur in, natus expedita cum inventore corporis accusantium distinctio! Veniam, deserunt, reprehenderit.',
    'Tenetur non enim, delectus doloremque repudiandae, dolorum eligendi explicabo cupiditate nemo mollitia. Eum inventore tempore explicabo tempora, earum voluptatum obcaecati provident nihil illo? Totam, quidem quos in vero, id enim?',
    'Non molestiae nulla eius beatae ratione dolorem doloremque, magnam sapiente dolore quis harum qui, fugit aliquam minus corrupti quod itaque accusamus velit. Repudiandae autem ex esse eos placeat sunt molestiae.']
}

class Data {
    getContent() {
        return aboutContent;
    }
}

let data = new Data();

export { data };