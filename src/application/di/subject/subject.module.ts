/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from "@nestjs/common";
import {
  GetSubjectUseCaseDI,
  SubjectRepositoryPortDI,
  SubjectRepository,
  PostSubjectUseCaseDI,
  GetAllSubjectsUseCaseDI,
  DeleteSubjectUseCaseDI,
  UpdateSubjectUseCaseDI,
} from "./subject.token";
import { SequelizeSubjectRepositoryAdapter } from "src/infrastructure/adapter/persistence/SequelizeSubjectRepositoryAdapter";
import { SubjectController } from "src/application/rest-api/subject.controller";
import { GetSubjectService } from "src/core/service/subject/get-subject.service";
import { SubjectModel } from "src/infrastructure/db/models/subject.model";
import { PostSubjectService } from "src/core/service/subject/post-subject.service";
import { GetAllSubjectsService } from "src/core/service/subject/get-all-subjects.service";
import { DeleteSubjectService } from "src/core/service/subject/delete-subject.service";
import { PutSubjectService } from "src/core/service/subject/put-subject.service";

const repositoryProviders = [
  {
    provide: SubjectRepositoryPortDI,
    useFactory: (repository) =>
      new SequelizeSubjectRepositoryAdapter(repository),
    inject: [SubjectRepository],
  },
];

export const subjectRepositoryProviders = [
  {
    provide: SubjectRepository,
    useValue: SubjectModel,
  },
];

const useCaseProviders = [
  {
    provide: GetSubjectUseCaseDI,
    useFactory: (repository) => new GetSubjectService(repository),
    inject: [SubjectRepositoryPortDI],
  },
  {
    provide: PostSubjectUseCaseDI,
    useFactory: (repository) => new PostSubjectService(repository),
    inject: [SubjectRepositoryPortDI],
  },
  {
    provide: GetAllSubjectsUseCaseDI,
    useFactory: (repository) => new GetAllSubjectsService(repository),
    inject: [SubjectRepositoryPortDI],
  },
  {
    provide: DeleteSubjectUseCaseDI,
    useFactory: (repository) => new DeleteSubjectService(repository),
    inject: [SubjectRepositoryPortDI],
  },
  {
    provide: UpdateSubjectUseCaseDI,
    useFactory: (repository) => new PutSubjectService(repository),
    inject: [SubjectRepositoryPortDI],
  },
];

@Module({
  imports: [],
  controllers: [SubjectController],
  providers: [
    ...subjectRepositoryProviders,
    ...repositoryProviders,
    ...useCaseProviders,
  ],
})
export class SubjectModule {}
