import { Injectable } from '@nestjs/common';

@Injectable()
export class HelperService {
  unixTimeToLocaleDateString(
    time: number,
    options?: { locale: string; timeZone?: string },
  ): string {
    return new Date(time).toLocaleDateString(options.locale, {
      timeZone: options.timeZone,
    });
  }

  unixTimeToLocaleTimeString(
    time: number,
    options?: { locale: string; timeZone?: string },
  ): string {
    return new Date(time).toLocaleTimeString(options.locale, {
      timeZone: options.timeZone,
    });
  }

  unixTimeToLocaleString(
    time: number,
    options?: { locale: string; timeZone?: string },
  ): string {
    return new Date(time).toLocaleString(options.locale, {
      timeZone: options.timeZone,
    });
  }

  startTimeAndEndTimeToString(start_time: number, end_time: number): string {
    const LOCALE = 'vi-VN';
    const TIMEZONE = 'Asia/Ho_Chi_Minh';

    return `${this.unixTimeToLocaleDateString(start_time, {
      locale: LOCALE,
      timeZone: TIMEZONE,
    })} ${this.unixTimeToLocaleTimeString(start_time, {
      locale: LOCALE,
      timeZone: TIMEZONE,
    })} - ${this.unixTimeToLocaleTimeString(end_time, {
      locale: LOCALE,
      timeZone: TIMEZONE,
    })}`;
  }

  makeToken(length: number): string {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getRandomNumber(min: number, max: number) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
  }

  randomNumberInListNotRepeat(length: number, length1: number): number[] {
    const arr: number[] = Array.from(Array(length).keys());
    const res: number[] = [];

    if (length1 > length) return [];
    while (length1 > 0) {
      let randomIndex = this.getRandomNumber(0, arr.length - 1);
      let randomNumber = arr[randomIndex];
      arr.splice(randomIndex, 1);
      res.push(randomNumber);
      length1--;
    }

    return res;
  }
}
