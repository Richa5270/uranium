const handler = function (req, res) {
    res.send({ msg:"Successful request & response cycle!"});
};

module.exports.handler = handler;