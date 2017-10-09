class PostsData {
    constructor(db) {
        this.db = db;
    }

    getAboutContent() {
        const ref = this.db.ref('aboutContent');
        return ref.once('value')
            .then((snapshot) => {
                return snapshot.val();
            });
    };
    
    getAllArticles() {
        const ref = this.db.ref('articleList');
        return ref.once('value')
            .then((snapshot) => {
                return snapshot.val();
            });
    };
    
    getArticle(id) {
        id = Number(id);
        const ref = this.db.ref('articleList');
        const article = ref.child(id);
        return article.once('value')
            .then((snapshot) => {
                return snapshot.val();
            });
    };

    getFirstParagraph() {
        const ref = this.db.ref('aboutContent');
        const firstParagraph = ref.child('content').child(0);
        return firstParagraph.once('value')
            .then((snapshot) => {
                return snapshot.val();
            })
    };

    getImage(id) {
        id = Number(id);
        const ref = this.db.ref('portfolio');
        const image = ref.child(id);
        return image.once('value')
            .then((snapshot) => {
                return snapshot.val();
            });
    };
    
    getLatestArticleTitles() {
        const ref = this.db.ref('articleList').limitToLast(5);
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
        const ref = this.db.ref('portfolio').limitToLast(5);
        return ref.once('value')
            .then((snapshot) => {
                const latestImages = snapshot.val();
                latestImages.splice(0, latestImages.length - 5);
                return latestImages;
            });
    };

    getPortfolio() {
        const ref = this.db.ref('portfolio');
        return ref.once('value')
            .then((snapshot) => {
                return snapshot.val();
            });
    };

    getQuote() {
        const ref = this.db.ref('quoteList');
        return ref.once('value')
            .then((snapshot) => {
                const quoteList = snapshot.val();
                const quoteNumber = Math.floor(Math.random() * quoteList.length);
                const quote = quoteList[quoteNumber];
                return quote;
            });
    };
}

module.exports = PostsData;