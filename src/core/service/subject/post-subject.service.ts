import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { SubjectRepositoryPortDI } from "src/application/di/subject/subject.token";
import { SubjectRepositoryPort } from "src/core/domain/hello/port/repository/subject-repository.port";
import { SubjectDto } from "src/core/service/dto/subject.dto";
import { Subject } from "src/core/domain/hello/entity/subject";
import { PostSubjectUseCase } from "src/core/domain/hello/usecase/subject/post-subject.usecase";

@Injectable()
export class PostSubjectService implements PostSubjectUseCase{
    constructor(
        @Inject(SubjectRepositoryPortDI)
        private readonly subjectRepository: SubjectRepositoryPort,
    ){}

    public async createSubject(payload: Subject): Promise<SubjectDto> {
        return await this.subjectRepository.postSubject(payload).then((subject) => {
            return new SubjectDto(subject);
        }).catch((error) => {
            throw new HttpException(error.options.cause.message, HttpStatus.BAD_REQUEST);
        });
    }
}