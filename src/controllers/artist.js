const createArtist = (req, res) => {
    try {
        res.status(201).json(req.body);
    } catch (error) {
        res.status(500).send('An error occurred while creating the artist.');
    }
};

module.exports = { createArtist };