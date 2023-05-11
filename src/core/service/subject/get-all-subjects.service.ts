import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { SubjectRepositoryPortDI } from "src/application/di/subject/subject.token";
import { SubjectRepositoryPort } from "src/core/domain/hello/port/repository/subject-repository.port";
import { SubjectDto } from "src/core/service/dto/subject.dto";
import { SubjectModelWhere } from "src/application/rest-api/subject.controller";
import { GetAllSubjectsUseCase } from "src/core/domain/hello/usecase/subject/get-all-subjects.usecase";

@Injectable()
export class GetAllSubjectsService implements GetAllSubjectsUseCase {
  constructor(
    @Inject(SubjectRepositoryPortDI)
    private readonly subjectRepository: SubjectRepositoryPort,
  ) {}

  public async getAllSubjects(query: SubjectModelWhere): Promise<SubjectDto[]> {
    return await this.subjectRepository
      .getSubjects(query)
      .then((subjects) => {
        const transformedSubjects: SubjectDto[] = [];
        subjects.forEach((subject) => {
          transformedSubjects.push(new SubjectDto(subject));
        });
        return transformedSubjects;
      })
      .catch((error) => {
        throw new HttpException(
          error.options.cause.message,
          HttpStatus.BAD_REQUEST,
        );
      });
  }
}
