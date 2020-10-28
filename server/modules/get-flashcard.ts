import type { Request, Response, Express } from 'express';
import type { Model, Document } from 'mongoose';

export const registerGetFlashcard = (
  app: Express,
  Flashcard: Model<Document, {}>,
) =>
  app.get('/', async (req: Request, res: Response) => {
    Flashcard.find((err, cards) => {
      if (err) {
        console.error("Error fetching cards", err)
      } else {
        res.json(cards);
      }
    })
  });
