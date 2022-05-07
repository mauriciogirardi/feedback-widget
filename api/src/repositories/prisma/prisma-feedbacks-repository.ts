import { prisma } from '../../prisma'
import {
  FeedbacksCreateData,
  FeedbacksRepository,
} from '../feedbacks-repository'

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  public async create({ comment, type, screenshot }: FeedbacksCreateData) {
    await prisma.feedback.create({
      data: {
        screenshot,
        comment,
        type,
      },
    })
  }
}
