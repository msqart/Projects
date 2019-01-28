const fs = require('fs');
const needle = require('needle');
const parsePage = new (require('./parsePage'))();

class Model {
    constructor(obj) {
        this.obj = {};
    }

    getDataUrl(url) {

        return new Promise((resolve, reject) => {

            fs.readFile(url, 'utf8', (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });

        // await fs.readFile(url, 'utf8', (error, result) => {
        //     if (error) {
        //         return error;
        //     } else {
        //         return result;
        //     }
        // });
    }

    scrapingLink(arr) {





    }

    scraping(urlObject) {
        return new Promise((resolve, reject) => {


            needle.get(urlObject['url'], function (error, response) {
                if (!error && response.statusCode === 200) {
                    let data = parsePage.getText(response.body);
                    resolve(data);
                } else {
                    reject(response.statusCode);
                }
            });

        });

    };
}

module.exports = Model;
