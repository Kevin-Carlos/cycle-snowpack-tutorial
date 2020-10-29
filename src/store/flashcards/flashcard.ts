import { atom, selector } from 'recoil';
import { fetchSettings } from 'common/fetch';

const endpoint =
  import.meta.env.NODE_ENV === 'production'
    ? window.location.hash
    : `http://localhost:8888`;

export type FlashcardResponseT = {
  id: string;
  subject: string;
  description: string;
};

export const cardState = atom({
  key: 'flashcard-state',
  default: () => fetchCards || [],
});

export const fetchCards = selector({
  key: 'fetch-flashcards',
  get: async () => {
    const resp = await fetch(endpoint, fetchSettings('GET'));

    if (!resp.ok) {
      throw resp.statusText;
    }

    const respValue: Promise<FlashcardResponseT[]> = resp.json();

    return respValue;
  },
});

export const postCards = (value: any) =>
  fetch(endpoint + '/add', fetchSettings('POST', value));

export const cardArrayTotalLength = atom({
  key: 'flashcard-index-state',
  default: 0,
});
