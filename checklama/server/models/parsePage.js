const cheerio = require('cheerio');

class parsePage {
    constructor() {

    }

    allLinks($) {
        let arrLinks = [];
        $('a').each(function () {
            let stringHref = $(this).attr('href');
            if (stringHref[0] === '/') {
                arrLinks.push(stringHref);
            }
        });
    }

    getText(html) {
        const $ = cheerio.load(html);
        this.allLinks($);

        let stringData = $(html).text() + '';
        return stringData.replace(/\n+ \s+/g, ' ');
    }

}

module.exports = parsePage;