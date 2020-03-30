exports.cloudFunctionDemo = (req, res) => {
    switch (req.method) {
        case 'GET':
            console.log("Hello GET");
            res.send(`Hello GET method`);
            break;
        case 'POST':
            console.log("Hello POST");
            res.send(`Hello POST method. Your name is ${req.body.name}`);
            break;
        default:
            res.send(`Only GET & POST method allowed`);
            break;
    }
};