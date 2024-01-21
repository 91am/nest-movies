import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity'; // Import the Loan entity

@Injectable()
export class LoansService {
  constructor(
    @InjectRepository(Loan) // Use the Loan entity
    private loansRepository: Repository<Loan>,
  ) {}

  async create(createLoanDto: CreateLoanDto): Promise<Loan> {
    const newLoan = this.loansRepository.create(createLoanDto);
    return this.loansRepository.save(newLoan);
  }

  findAll(): Promise<Loan[]> {
    return this.loansRepository.find();
  }

  findOne(id: number): Promise<Loan | null> {
    return this.loansRepository.findOneBy({ id });
  }

  async update(id: number, updateLoanDto: UpdateLoanDto): Promise<void> {
    await this.loansRepository.update(id, updateLoanDto);
  }

  async remove(id: number): Promise<void> {
    await this.loansRepository.delete(id);
  }
}
