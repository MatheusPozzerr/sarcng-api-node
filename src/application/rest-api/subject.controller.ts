/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import {
  DeleteSubjectUseCaseDI,
  GetAllSubjectsUseCaseDI,
  GetSubjectUseCaseDI,
  PostSubjectUseCaseDI,
  UpdateSubjectUseCaseDI,
} from "../di/subject/subject.token";
import { GetSubjectUseCase } from "src/core/domain/hello/usecase/subject/get-subject.usecase";
import { SubjectDto } from "src/core/service/dto/subject.dto";
import { Subject } from "src/core/domain/hello/entity/subject";
import { PostSubjectUseCase } from "src/core/domain/hello/usecase/subject/post-subject.usecase";
import { GetAllSubjectsUseCase } from "src/core/domain/hello/usecase/subject/get-all-subjects.usecase";
import { DeleteSubjectUseCase } from "src/core/domain/hello/usecase/subject/delete-subject.usecase";
import { PutSubjectUseCase } from "src/core/domain/hello/usecase/subject/put-subject.usecase";
import { query } from "express";

export interface SubjectModelWhere {
  name?: string;
  schedule?: string;
  credits?: number;
  program?: string;
  bibliographic_item?: string;
}

@Controller("/subject")
export class SubjectController {
  constructor(
    @Inject(PostSubjectUseCaseDI)
    private readonly postSubjectUseCase: PostSubjectUseCase,
    @Inject(GetAllSubjectsUseCaseDI)
    private readonly getAllSubjectsUseCase: GetAllSubjectsUseCase,
    @Inject(GetSubjectUseCaseDI)
    private readonly getSubjectUseCase: GetSubjectUseCase,
    @Inject(DeleteSubjectUseCaseDI)
    private readonly deleteSubjectUseCase: DeleteSubjectUseCase,
    @Inject(UpdateSubjectUseCaseDI)
    private readonly putSubjectUseCase: PutSubjectUseCase,
  ) {}

  @Get(":id")
  getSubject(@Param("id") id: number): Promise<SubjectDto> {
    return this.getSubjectUseCase.getSubjectById(id);
  }

  @Delete(":id")
  deleteSubject(@Param("id") id: number): Promise<SubjectDto> {
    return this.deleteSubjectUseCase.deleteSubjectById(id);
  }

  @Post("")
  postSubject(@Body() subject: Subject): Promise<SubjectDto> {
    return this.postSubjectUseCase.createSubject(subject);
  }

  @Get("")
  getAllSubjects(@Query() query: SubjectModelWhere): Promise<SubjectDto[]> {
    return this.getAllSubjectsUseCase.getAllSubjects(query);
  }

  @Put(":id")
  putSubject(
    @Param("id") id: number,
    @Body() subject: Subject,
  ): Promise<SubjectDto> {
    return this.putSubjectUseCase.updateSubject(subject, id);
  }
}
