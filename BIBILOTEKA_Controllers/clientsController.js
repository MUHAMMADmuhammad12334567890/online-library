const Client = require("../BIBILOTEKA_Models/clientModel");
const Book = require("../BIBILOTEKA_Models/bookModel");

module.exports.clientController = {
  postController: async (req, res) => {
    try {
      const postClient = await Client.create({
        name: req.body.name,
      });
      res.json(postClient);
    } catch (error) {
      res.json(error.message);
    }
  },

  patchController: async (req, res) => {
    try {
      const newBook = await Book.findById(req.body.books);
      const pathClient = await Client.findById(req.params.id);
      if (pathClient.books.length < 4 && pathClient.blocked === false) {
        if (newBook.rented === false) {
          await Client.findByIdAndUpdate(req.params.id, {
            $push: { books: req.body.books },
          });
          await Book.findByIdAndUpdate(req.body.books, {
            rented: true,
            client: req.params.id,
          });
          return res.json(pathClient);
        } else {
          res.json("Эта книга уже арендована другим пользоветелем");
        }
      } else {
        res.json("Вы заблокированы");
      }
    } catch (error) {
      res.json(error);
    }
  },

  returnBookController: async (req, res) => {
    try {
      const client1 = await Client.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { books: req.body.books },
        },
        { new: true }
      );
      await Book.findByIdAndUpdate(req.body.books, {
    client: null
      })
      res.json(client1);
    } catch (error) {
      res.json(error.message);
    }
  },

  pathAdminController: async (req, res) => {
    try {
      const patchClient = await Client.findByIdAndUpdate(
        req.params.id,
        {
          blocked: req.body.blocked,
        },
        { new: true }
      );
      res.json(patchClient);
    } catch (error) {
      res.json(error.message);
    }
  },

  returnAdminBookController: async (req, res) => {
    try {
      const client1 = await Client.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { books: req.body.books },
          blocked: true
        },
        { new: true }
      );
      await Book.findByIdAndUpdate(req.body.books, {
    client: null
      })
      res.json(client1);
    } catch (error) {
      res.json(error.message);
    }
  },
 
};
