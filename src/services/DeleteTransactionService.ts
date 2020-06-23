import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transationsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transationsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists');
    }

    await transationsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
