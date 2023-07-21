export interface Answer {
  text: string,
  correct: boolean
}

export interface Question {
  text: string,
  answers: Answer[]
}
