const basicContronller = {};

basicContronller.get = (req, res) => {
    res.json({
        message: "Working basic controller"
    });
};

module.exports = basicContronller;
