import $ from 'jquery';
import Handlebars from 'handlebars';
import handlebars from 'handlebars';

class HandleBarsTemplate {
    constructor() {
        this.cache = {};
    }

    getTemplate(name) {
        const cache = this.cache;
        const _this = this;
        return new Promise((resolve, reject) => {
            if (cache[name]) {
                resolve(cache[name]);
            }
            else {
                $.get(`static/scripts/templates/${name}.handlebars`, (templateHtml) => {
                    const template = handlebars.compile(templateHtml);
                    cache[name] = template;
                    resolve(template);
                });
                _this.cache = cache;
            }
        });
    }
}

let template = new HandleBarsTemplate();

export { template };