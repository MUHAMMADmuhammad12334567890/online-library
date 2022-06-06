const Genres = require('../BIBILOTEKA_Models/genreModel')

module.exports.genresContoller = {

postController: async (req, res) => {
    try{
const genresNew = await Genres.create({
    name: req.body.name,
    description: req.body.description
})
res.json(genresNew)
    } catch(error) {
        res.json(error)
    }
},


getController: async (req, res) => {
    try{
const getGenres = await Genres.find()
res.json(getGenres)
    } catch(error) {
        res.json(error)
    }
},

patchController: async (req, res ) => {
    try{
        const patchGenres = await Genres.findByIdAndUpdate(req.params.id,{
            name: req.body.name,
            description: req.body.description
        }, {new: true})
        res.json(patchGenres)
    } catch(error) {
        res.json(error)
    }
},

deleteController: async (req, res) => {
    try{
    const deletGenres = await Genres.findByIdAndRemove(req.params.id)
    res.json('Жанр удален')
    } catch(error) {
        res.json(error)
    }
} 



}