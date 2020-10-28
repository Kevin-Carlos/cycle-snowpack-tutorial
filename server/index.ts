import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import type { Request, Response } from 'express';
import { FlashcardsT } from './common/types';

// Variables
const DBURI =
  process.env.NODE_ENV === 'production'
    ? 'mongodb://database.cycle:27017/flashcards'
    : 'mongodb://localhost:27017/flashcards';

const app = express();
app.use(cors(), bodyParser.json());

// Create and run the server
const PORT = process.env.SNOWPACK_PUBLIC_PORT
  ? parseInt(process.env.SNOWPACK_PUBLIC_PORT)
  : 80;

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Server started at http://localhost:${PORT}`),
);

mongoose.connect(
  DBURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err: any) => {
    if (err) {
      console.error('Failed to connect to database...', err);
    }
  },
);

// Let's create our mongoose schema
const Flashcard = new mongoose.Schema<FlashcardsT>({
  subject: String,
  description: String,
});

type FlashcardModelT = {
  subject: string;
  description: string;
} & mongoose.Document;

const cards = mongoose.model<FlashcardModelT>(
  'flashcards',
  Flashcard,
  'flashcards',
);

app.get('/', (req: Request, res: Response) => {
  cards.find((err, cards) => {
    if (err) {
      res.status(404).send(`Error fetching cards, ${err}`);
    } else { 
      res.status(200).json(cards);
      console.log("Successfully fetched cards", cards)
    }
  });
  return;
});

app.post('/add', async (req: Request, res: Response) => {
  try {
    const card = (await cards.create(req.body)).execPopulate();

    if (!card) {
      return res.status(404).json({ message: "Failure adding card" });
    }

    return res.status(200).json(card);

  } catch (e) {
    return res.status(500).json({ message: "Internal server error" });
  }
  
});
