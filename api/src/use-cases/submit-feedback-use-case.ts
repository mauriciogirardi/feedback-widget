import { MailAdapter } from '../adapters/mail-adapter'
import { FeedbacksRepository } from '../repositories/feedbacks-repository'

type SubmitFeedbackUseCaseRequest = {
  type: string
  comment: string
  screenshot?: string
}

const feedbackTypes = ['BUG', 'IDEA', 'OTHER']

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  public async execute({
    comment,
    type,
    screenshot,
  }: SubmitFeedbackUseCaseRequest) {
    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    if (!type || !comment) {
      throw new Error('The type field and comment field are required!!')
    }

    if (!feedbackTypes.includes(type)) {
      throw new Error('The type of feedback not exist!!')
    }

    await this.feedbacksRepository.create({ comment, type, screenshot })
    await this.mailAdapter.sendMail({
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #222;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join('\n'),
      subject: 'Novo Feedback',
    })
  }
}
