import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { SubjectRepositoryPortDI } from "src/application/di/subject/subject.token";
import { SubjectDto } from "src/core/service/subject/dto/subject.dto";
import { DeleteSubjectUseCase } from "src/core/domain/usecase/subject/delete-subject.usecase";
import { SubjectRepositoryPort } from "src/core/domain/repository/subject-repository.port";

@Injectable()
export class DeleteSubjectService implements DeleteSubjectUseCase {
  constructor(
    @Inject(SubjectRepositoryPortDI)
    private readonly subjectRepository: SubjectRepositoryPort,
  ) {}

  public async deleteSubjectById(id: number): Promise<SubjectDto> {
    return await this.subjectRepository
      .deleteSubject(id)
      .then((user) => {
        return new SubjectDto(user);
      })
      .catch((error) => {
        throw new HttpException(
          error.options.cause.message,
          HttpStatus.BAD_REQUEST,
        );
      });
  }
}
