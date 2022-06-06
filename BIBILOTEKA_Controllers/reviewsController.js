const Review = require("../BIBILOTEKA_Models/reviewModel");

module.exports.reviewController = {
  postContoller: async (req, res) => {
    try {
      const postReview = await Review.create({
        text: req.body.text,
        clientId: req.body.clientId,
      });
      res.json(postReview);
    } catch (error) {
      res.json(error.message);
    }
  },

  getController: async (req, res) => {
    try {
      const getReview = await Review.find();
      res.json(getReview);
    } catch (error) {
      res.json(error.message);
    }
  },

  patchController: async (req, res) => {
    try {
      const pathReview = await Review.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        clientId: req.body.clientId,
      }, {new: true});
      res.json(pathReview);
    } catch (error) {
      res.json(error.message);
    }
  },

  deleteController: (req, res) => {
    Review.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Отзыв удален");
      })
      .catch((error) => {
        res.json(error.message);
      });
  },
};
