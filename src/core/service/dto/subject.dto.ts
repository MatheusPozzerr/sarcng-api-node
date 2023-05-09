import { Subject } from "src/core/domain/hello/entity/subject";

export class SubjectDto {
    private id: number;
    private name: string;
    private schedule: string;
    private credits: number;
    private program: string;
    private bibliographic_item: string;

    constructor(entity: Subject) {
        this.id = entity.id;
        this.name = entity.name;
        this.schedule = entity.schedule;
        this.credits = entity.credits;
        this.program = entity.program;
        this.bibliographic_item = entity.bibliographic_item;
    }

}