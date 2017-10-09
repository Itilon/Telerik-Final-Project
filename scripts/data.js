class Data {

    getAboutContent() {
        const ref = firebase.database().ref('aboutContent');
        return ref.once('value')
            .then((snapshot) => {
                return snapshot.val();
            });
    };
    
    getArticle(id) {
        id = Number(id);
        const ref = firebase.database().ref('articleList');
        const article = ref.child(id);
        return article.once('value')
            .then((snapshot) => {
                return snapshot.val();
            });
    };

    getFirstParagraph() {
        const ref = firebase.database().ref('aboutContent');
        const firstParagraph = ref.child('content').child(0);
        return firstParagraph.once('value')
            .then((snapshot) => {
                return snapshot.val();
            })
    };

    getImage(id) {
        id = Number(id);
        const ref = firebase.database().ref('portfolio');
        const image = ref.child(id);
        return image.once('value')
            .then((snapshot) => {
                return snapshot.val();
            });
    };
    
    getLatestArticleTitles() {
        const ref = firebase.database().ref('articleList').limitToLast(5);
        return ref.once('value')
            .then((snapshot) => {
                const latestArticles = snapshot.val();
                const latestTitles = []
                latestArticles.splice(0, latestArticles.length - 5);
                latestArticles.forEach((article) => {
                    latestTitles.push({title: article.title, id: article.id}); 
                });
                
                return latestTitles;
            });
    };

    getLatestImages() {
        const ref = firebase.database().ref('portfolio').limitToLast(5);
        return ref.once('value')
            .then((snapshot) => {
                const latestImages = snapshot.val();
                latestImages.splice(0, latestImages.length - 5);
                return latestImages;
            });
    };

    getPortfolio() {
        const ref = firebase.database().ref('portfolio');
        return ref.once('value')
            .then((snapshot) => {
                return snapshot.val();
            });
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