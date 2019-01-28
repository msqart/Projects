class View {

    constructor(url) {
        this.url = url;
    }

    async represent(ctx, data) {
        ctx.body = data;
    }
}

module.exports = View;