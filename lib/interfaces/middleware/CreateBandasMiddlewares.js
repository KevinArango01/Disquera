const {
    createBandaValidator,
} = require('./validations/CreateBandasValidations')

module.exports = (req, res, next) => {
        try{
            createBandaValidator(req.body)
            
            next();

        } catch (error){
            res.status(500).send(`${error}`)
        }
}