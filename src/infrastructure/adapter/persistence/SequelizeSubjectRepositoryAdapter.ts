/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { SubjectModel } from "src/infrastructure/db/models/subject.model";
import { SubjectRepositoryPort } from "src/core/domain/hello/port/repository/subject-repository.port";
import { Subject } from "src/core/domain/hello/entity/subject";
import { SubjectRepository } from "src/application/di/subject/subject.token";
import { modelToJson } from "src/infrastructure/shared/function";
import { SubjectModelWhere } from "src/application/rest-api/subject.controller";

export class SequelizeSubjectRepositoryAdapter implements SubjectRepositoryPort{
    constructor(
        @Inject(SubjectRepository)
        private readonly subjectRepository: typeof SubjectModel) {}

        async getSubject(id: number): Promise<Subject> {
            return await this.subjectRepository.findOne<SubjectModel>({ where: { id } }).then(subject => {
                if (subject !== null) {
                    return new Subject(modelToJson(subject));
                } else {
                    throw new HttpException('Subject not found with id ' + id, HttpStatus.NOT_FOUND);
                }
            }).catch((error) => {
                    throw new HttpException("Parameters are incorrect", HttpStatus.BAD_REQUEST, { cause: error });
            });
        }

        async postSubject(payload: Subject): Promise<Subject> {
            return await this.subjectRepository.create<SubjectModel>(payload).then(subject => {
                return new Subject(modelToJson(subject));
            }).catch((error) => {
                throw new HttpException("Parameters are incorrect", HttpStatus.BAD_REQUEST, { cause: error });
            });
        }

        async getSubjects(query: SubjectModelWhere): Promise<Subject[]> {
            return await this.subjectRepository.findAll<SubjectModel>({ where: { ...query } }).then(subjects => {
                const transformedSubjects: Subject[] = [];
                subjects.forEach((subject) => {
                    transformedSubjects.push(new Subject(modelToJson(subject)));
                })
                return transformedSubjects;
            }).catch((error) => {
                throw new HttpException("Parameters are incorrect", HttpStatus.BAD_REQUEST, { cause: error });
            });
        }

        async deleteSubject(id: number): Promise<Subject> {
            return await this.subjectRepository.findByPk<SubjectModel>(id).then(subject => {
                if (subject !== null) {
                    return subject.destroy().then(_ => {
                        return new Subject(modelToJson(subject));
                    })
                } else {
                    throw new HttpException('Subject not found with id ' + id, HttpStatus.NOT_FOUND);
                }
            }).catch((error) => {
                throw new HttpException("Parameters are incorrect", HttpStatus.BAD_REQUEST, { cause: error });
            });
        }

        async updateSubject(payload: Subject, id: number): Promise<Subject> {
            return await this.subjectRepository.findByPk<SubjectModel>(id).then(subject => {
                if (subject == null) {
                    throw new HttpException('Subject not found with id ' + id, HttpStatus.NOT_FOUND);
                } else {
                    return subject.update(payload).then(_ => {
                        return new Subject(modelToJson(subject));
                    })
                }
            }).catch((error) => {
                throw new HttpException("Parameters are incorrect", HttpStatus.BAD_REQUEST, { cause: error });
            });
        }

}