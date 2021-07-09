import axios, { AxiosError } from 'axios'

const suffleArray = (array: string[]) => [...array].sort(() => Math.random() - 0.5)

type ResType = {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export type QuestionType = ResType & { answers: string[] }

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionType[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`

  try {
    const { data } = await axios.get(endpoint)

    return data.results.map((question: ResType) => ({
      ...question,
      answers: suffleArray([...question.incorrect_answers, question.correct_answer])
    }))
  } catch (err) {
    if (err && err.response) {
      const axiosError = err as AxiosError
      return axiosError.response?.data
    }

    throw err
  }
}
