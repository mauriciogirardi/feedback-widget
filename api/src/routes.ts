import express from 'express'
import { NodeMailerMailAdapter } from './adapters/nodemailer/nodemaier-mail-adapter'

import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodeMailerMailAdapter = new NodeMailerMailAdapter()

  const { type, comment, screenshot } = req.body

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodeMailerMailAdapter
  )

  await submitFeedbackUseCase.execute({ comment, type, screenshot })

  return res.status(201).send()
})
