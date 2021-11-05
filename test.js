const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

//collection section
const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2 lorem ipsum',
// });

//read a photo
// Photo.find({}, (err, data) => {
//     console.log(data);
// })

// Update
// const id = '618258a11bc249a7223ea93f';
// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Title 111 updated',
//     description: 'Photo description 1 updated',
//   },
//   {
//       new: true
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete a photo
const id = '61825abc967531ec53f6e2b8';

Photo.findByIdAndDelete(id, (err, data) => {
    console.log("Photo is removed...");
})

//Bu dosyayı siliyoruz çünkü app.js ve Photo.js e taşıdık.