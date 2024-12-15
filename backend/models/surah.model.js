import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Verse Schema
const verseSchema = new Schema({
  verseNumber: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  translation: {
    type: String,
    required: true,
  },
});

// Surah Schema
const surahSchema = new Schema({
  surahNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  verses: [verseSchema], // Embedding Verse Schema
});

const Surah = mongoose.model("Surah", surahSchema);

module.exports = Surah;
