import { Model, Types } from 'mongoose';
import { PaginateOptions, PaginateResult } from '../../../types/paginate';

export interface INotification {
  _id?: Types.ObjectId;
  receiverId?: Types.ObjectId | string;
  title: string;
  message?: string;
  image?: object;
  linkId?: Types.ObjectId | string;
  role: 'admin' | 'technician' | 'company';
  viewStatus?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface INotificationModal extends Model<INotification> {
  paginate: (
    query: Record<string, any>,
    options: PaginateOptions
  ) => Promise<PaginateResult<INotification>>;
}
