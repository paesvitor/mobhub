const basicContronller = {};

basicContronller.get = (req, res) => {
    console.log(req.body);

    res.json({
        message: "Working basic controller"
    });
};

module.exports = basicContronller;
