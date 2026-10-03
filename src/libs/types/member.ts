// import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongoose";
import { MemberStatus, MemberType } from "../enums/member.enum";
import { Request } from "express";
import { Session } from "express-session";


export interface Member {

    _id: ObjectId;
    memberStatus: MemberStatus;
    memberType: MemberType;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: number;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    createdAt: Date;
    updatedAt: Date;
}


export interface MemberInput {

    memberStatus?: MemberStatus;
    memberType?: MemberType;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: number;
    memberNick: string;
    memberPhone: string;
    memberPassword: string;
}


export interface LoginInput {

    memberNick: string;
    memberPassword: string;
}

export interface AdminRequest extends Request {
    member: Member;
    session: Session & { member: Member };
}