import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { SubjectRepositoryPortDI } from "src/application/di/subject/subject.token";
import { SubjectDto } from "src/core/service/subject/dto/subject.dto";
import { PostSubjectUseCase } from "src/core/domain/usecase/subject/post-subject.usecase";
import { Subject } from "src/core/domain/entity/subject";
import { SubjectRepositoryPort } from "src/core/domain/repository/subject-repository.port";

@Injectable()
export class PostSubjectService implements PostSubjectUseCase {
  constructor(
    @Inject(SubjectRepositoryPortDI)
    private readonly subjectRepository: SubjectRepositoryPort,
  ) {}

  public async createSubject(payload: Subject): Promise<SubjectDto> {
    return await this.subjectRepository
      .postSubject(payload)
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
