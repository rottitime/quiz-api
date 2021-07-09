// import { Difficulty, fetchQuizQuestions } from './openTrivia'
// import axios from 'axios'

// jest.mock('axios')
// const mockedAxios = axios as jest.Mocked<typeof axios>

// export const mock = {
//   response_code: 0,
//   results: [
//     {
//       category: 'Entertainment: Music',
//       type: 'multiple',
//       difficulty: 'easy',
//       question: 'Which rap group released the album &quot;Straight Outta Compton&quot;?',
//       correct_answer: 'N.W.A',
//       incorrect_answers: ['Wu-Tang Clan', 'Run-D.M.C.', 'Beastie Boys']
//     },
//     {
//       category: 'Geography',
//       type: 'multiple',
//       difficulty: 'easy',
//       question: 'What colour is the circle on the Japanese flag?',
//       correct_answer: 'Red',
//       incorrect_answers: ['White', 'Yellow', 'Black']
//     },
//     {
//       category: 'Entertainment: Television',
//       type: 'multiple',
//       difficulty: 'easy',
//       question: 'Guy&#039;s Grocery Games is hosted by which presenter?',
//       correct_answer: 'Guy Fieri',
//       incorrect_answers: ['Guy Martin', 'Guy Ritchie', 'Ainsley Harriott']
//     }
//   ]
// }

// beforeAll(() => {
//   jest.restoreAllMocks()
// })

// describe('openTrivia', () => {
//   it('Throws error', async () => {
//     const errorMessage = 'Network error: Something went wrong'
//     mockedAxios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)))
//     await expect(fetchQuizQuestions(3, Difficulty.EASY)).rejects.toThrow(errorMessage)
//   })

//   it('Return the correct data', async () => {
//     mockedAxios.get.mockImplementationOnce(() => Promise.resolve({ data: mock }))
//     const res = await fetchQuizQuestions(3, Difficulty.EASY)
//     expect(mockedAxios.get).toHaveBeenCalledTimes(1)
//     expect(res.length).toEqual(3)
//     expect(res[0].category).toEqual(mock.results[0].category)
//     expect(res[0].type).toEqual(mock.results[0].type)
//     expect(res[0].difficulty).toEqual(mock.results[0].difficulty)
//     expect(res[0].question).toEqual(mock.results[0].question)
//     expect(res[0].correct_answer).toEqual(mock.results[0].correct_answer)
//     expect(res[0].incorrect_answers.sort).toEqual(mock.results[0].incorrect_answers.sort)
//     expect(res[0].answers.length).toEqual(4)
//     expect(res[0].answers.length).toEqual(4)
//     expect(res[0].answers.includes('N.W.A')).toBeTruthy()
//   })
// })
