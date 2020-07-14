const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo {path} é obrigatorio"
mongoose.Error.messages.Number.min = "O '{value}' informado é menor que o limite de '{min}'"
mongoose.Error.messages.Number.max = "O '{value}' informado é maior que o limite de '{max}'"
mongoose.Error.messages.String.enum = "'{value}' não é valido para o atributo" 
