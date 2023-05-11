import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { SubjectRepositoryPortDI } from "src/application/di/subject/subject.token";
import { SubjectDto } from "src/core/service/subject/dto/subject.dto";
import { PutSubjectUseCase } from "src/core/domain/usecase/subject/put-subject.usecase";
import { SubjectRepositoryPort } from "src/core/domain/repository/subject-repository.port";
import { Subject } from "src/core/domain/entity/subject";

@Injectable()
export class PutSubjectService implements PutSubjectUseCase {
  constructor(
    @Inject(SubjectRepositoryPortDI)
    private readonly subjectRepository: SubjectRepositoryPort,
  ) {}

  public async updateSubject(
    payload: Subject,
    subjectId: number,
  ): Promise<SubjectDto> {
    return await this.subjectRepository
      .updateSubject(payload, subjectId)
      .then((subject) => {
        return new SubjectDto(subject);
      })
      .catch((error) => {
        throw new HttpException(
          error.options.cause.message,
          HttpStatus.BAD_REQUEST,
        );
      });
  }
}
