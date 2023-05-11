import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { SubjectRepositoryPortDI } from "src/application/di/subject/subject.token";
import { SubjectRepositoryPort } from "src/core/domain/hello/port/repository/subject-repository.port";
import { SubjectDto } from "src/core/service/dto/subject.dto";
import { Subject } from "src/core/domain/hello/entity/subject";
import { PutSubjectUseCase } from "src/core/domain/hello/usecase/subject/put-subject.usecase";

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
