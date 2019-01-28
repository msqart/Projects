class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.urlPage = {
            '/': 'index.html',
            '/check': '/check'
        }
        // view.on('add', this.addData.bind(this));
    }

    async request(ctx) {
        if (ctx.request.url === '/') {
            const data = await this.model.getDataUrl(this.urlPage[ctx.request.url]);
            this.view.represent(ctx, data);
        }

        if (ctx.request.url === '/check') {
            const data = await this.model.scraping(ctx.request.body);
            // this.view.represent(ctx, data);
        }
    }

};
module.exports = Controller;
