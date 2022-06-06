const Book = require("../BIBILOTEKA_Models/bookModel");

module.exports.bookController = {
  postController: (req, res) => {
    Book.create({
      name: req.body.name,
      genreId: req.body.genreId
    })
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error.message);
      });
  },

  getController: (req, res) => {
    Book.find()
      .populate("Genres")
      .populate("reviewId")
      .populate("client")
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json(error.message);
      });
  },

  getGenresController: (req, res) => {
    Book.find({ genreId: req.body.genreId })
      .populate("reviewId")
      .populate("client")
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error.message);
      });
  },

  getfindByIdController: (req, res) => {
    Book.findById(req.params.id)
    .populate("client")
      .populate("reviewId")
      .populate("genreId")
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error.message);
      });
  },

  pathController: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      reviewId: req.body.reviewId,
      rented: req.body.rented,
      client: req.body.client,
    }, {new: true}).then((data) => {
res.json(data)
    }).catch((error) => {
        res.json(error.message)
    })
  },

  deleteController: (req, res) => {
    Book.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Книга удалена");
      })
      .catch((error) => {
        res.json(error.message);
      });
  },
};
