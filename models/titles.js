var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create schema
var TitlesSchema = new Schema({
  TitleId: Number,
  TitleName: String,
  TitleNameSortable: String,
  Awards: [{
    AwardWon: Boolean,
    AwardYear: String,
    Participants: [String],
    Award: String,
    AwardCompany: String
    }],
  Genres: [String],
  OtherNames: [{
    TitleNameLanguage: String,
    TitleNameType: String,
    TitleNameSortable: String,
    TitleName: String
   }],
   Participants:[{
    IsKey: Boolean,
    RoleType: String,
    IsOnScreen: Boolean,
    ParticipantType: String,
    Name: String,
    ParticipantId: Number
   }],
   ReleaseYear: Number,
   Storylines:[{
    Description: String,
    Language: String,
    Type: String
   }]
});



var Titles = mongoose.model('titles', TitlesSchema, 'Titles');

module.exports = Titles;