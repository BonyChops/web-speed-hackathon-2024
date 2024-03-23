import { format } from 'date-fns';

type DayOfWeek = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday';

export const getDayOfWeekStr = (date: Date): DayOfWeek => {
  const dayStr = format(date, 'eeee').toLowerCase();

  // 型ガードを使用して、dayStrがDayOfWeek型に割り当て可能かチェック
  if (!isDayOfWeek(dayStr)) {
    throw new Error('dayOfWeek is invalid');
  }

  return dayStr;
};

function isDayOfWeek(value: string): value is DayOfWeek {
  return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].includes(value);
}
