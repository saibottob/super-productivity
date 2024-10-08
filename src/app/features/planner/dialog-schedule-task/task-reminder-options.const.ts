import { TaskReminderOption, TaskReminderOptionId } from '../../tasks/task.model';
import { T } from '../../../t.const';

export const TASK_REMINDER_OPTIONS: TaskReminderOption[] = [
  {
    value: TaskReminderOptionId.DoNotRemind,
    label: T.F.TASK.D_REMINDER_ADD.RO_NEVER,
  },
  {
    value: TaskReminderOptionId.AtStart,
    label: T.F.TASK.D_REMINDER_ADD.RO_START,
  },
  {
    value: TaskReminderOptionId.m5,
    label: T.F.TASK.D_REMINDER_ADD.RO_5M,
  },
  {
    value: TaskReminderOptionId.m10,
    label: T.F.TASK.D_REMINDER_ADD.RO_10M,
  },
  {
    value: TaskReminderOptionId.m15,
    label: T.F.TASK.D_REMINDER_ADD.RO_15M,
  },
  {
    value: TaskReminderOptionId.m30,
    label: T.F.TASK.D_REMINDER_ADD.RO_30M,
  },
  {
    value: TaskReminderOptionId.h1,
    label: T.F.TASK.D_REMINDER_ADD.RO_1H,
  },
];
