const products = [
    {
        name: "Black-Pan",
        imageUrl: "data:image/jpeg;base64,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",
        description: "djthvg kjegrjtgsdrjk rugsghj\gsf b jfggfjjgkjggjkhkhhfjjfgf jkgf ug jkgjfg",
        price: 499,
        countInStock: 12,
    },
    {
        name: "green-Pan",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FADD-Achiever-Gel-Pen-Green-Set-Pens%2Fdp%2FB011NKM0UI&psig=AOvVaw1Y2hGA22NQ0nNDiUUWOVgU&ust=1665142011117000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDXu8W_y_oCFQAAAAAdAAAAABAD",
        description: "djthvg kjegrjtgsdrjk rugsghj\gsf b jfggfjjgkjggjkhkhhfjjfgf jkgf ug jkgjfg",
        price: 599,
        countInStock: 2,
    },
    {
        name: "headPhone",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fheadphone&psig=AOvVaw3zKQc4NAcmv3_OUybAVD7n&ust=1665142084472000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMCSzOi_y_oCFQAAAAAdAAAAABAD",
        description: "this product is v good.. kjegrjtgsdrjk rugsghj\gsf b jfggfjjgkjggjkhkhhfjjfgf jkgf ug jkgjfg",
        price: 8999,
        countInStock: 12,
    },
    {
        name: "trangister",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcircuitdigest.com%2Farticle%2Fdifferent-types-of-transistors&psig=AOvVaw0E6b-Az4jm1rca6x4Yd8if&ust=1665142170008000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDNhJDAy_oCFQAAAAAdAAAAABAD",
        description: "djthvg kjegrjtgsdrjk rugsghj\gsf b jfggfjjgkjggjkhkhhfjjfgf jkgf ug jkgjfg",
        price: 99,
        countInStock: 34,
    },
    {
        name: "capaciter",
        imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fcapacitor&psig=AOvVaw1rW80xTcK8jvGVm637IPSG&ust=1665142208101000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNCYs6LAy_oCFQAAAAAdAAAAABAD",
        description: "djthvg kjegrjtgsdrjk rugsghj\gsf b jfggfjjgkjggjkhkhhfjjfgf jkgf ug jkgjfg",
        price: 489,
        countInStock: 20,
    },
];
module.export = products;