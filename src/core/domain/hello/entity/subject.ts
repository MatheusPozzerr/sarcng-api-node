import { SubjectModel } from "src/infrastructure/db/models/subject.model";

export class Subject {
  private _id?: number;
  private _name: string;
  private _schedule: string;
  private _credits: number;
  private _program: string;
  private _bibliographic_item: string;

  constructor(subject: SubjectModel) {
    this._id = subject?.id;
    this._name = subject.name;
    this._schedule = subject.schedule;
    this._credits = subject.credits;
    this._program = subject.program;
    this._bibliographic_item = subject.bibliographic_item;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get schedule() {
    return this._schedule;
  }

  get credits() {
    return this._credits;
  }

  get program() {
    return this._program;
  }

  get bibliographic_item() {
    return this._bibliographic_item;
  }
}
