import type { Request, Response, Express } from 'express';
import type { Model, Document } from 'mongoose';

export const registerAddFlashcard = (
  app: Express,
  Flashcard: Model<Document, {}>,
) =>
  app.post('/add', async (req: Request, res: Response) => {
    const card = new Flashcard(req.body);

    try {
      await card.save();
      // res.200
    } catch (e) {
      res.status(400).send(console.error('Error inserting flashcard', e));
    }
    return;
  });
