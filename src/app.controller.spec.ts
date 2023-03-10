import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { isPalindrome } from './test_modules/isPalindrome';
import { rotateMatrix } from './test_modules/rotateMatrix';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('isPalindrome', () => {
    it('should return true for a simple palindrome', () => {
      const result = isPalindrome('racecar');
      expect(result).toBe(true);
    });

    it('should return true for a palindrome with spaces', () => {
      const result = isPalindrome('A man a plan a canal Panama');
      expect(result).toBe(true);
    });

    it('should return true for a palindrome with punctuation', () => {
      const result = isPalindrome("A Toyota's a toyota!");
      expect(result).toBe(true);
    });

    it('should return false for a non-palindrome', () => {
      const result = isPalindrome('hello world');
      expect(result).toBe(false);
    });

    it('should ignore case', () => {
      const result = isPalindrome('Was it a car or a cat I saw');
      expect(result).toBe(true);
    });

    it('should ignore non-alphanumeric characters', () => {
      const result = isPalindrome('A man, a plan, a canal: Panama');
      expect(result).toBe(true);
    });

    it('should handle empty strings', () => {
      const result = isPalindrome('');
      expect(result).toBe(true);
    });
  });

  describe('rotateMatrix', () => {
    it('should rotate a 2x2 matrix', () => {
      const matrix = [
        [1, 2],
        [3, 4],
      ];
      const expected = [
        [2, 4],
        [1, 3],
      ];
      expect(rotateMatrix(matrix)).toEqual(expected);
    });

    it('should rotate a 3x3 matrix', () => {
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const expected = [
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7],
      ];
      expect(rotateMatrix(matrix)).toEqual(expected);
    });

    it('should rotate a 4x4 matrix', () => {
      const matrix = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ];
      const expected = [
        [4, 8, 12, 16],
        [3, 7, 11, 15],
        [2, 6, 10, 14],
        [1, 5, 9, 13],
      ];
      expect(rotateMatrix(matrix)).toEqual(expected);
    });

    it('should return the original matrix when rotating 360 degrees', () => {
      const matrix = [
        [1, 2],
        [3, 4],
      ];
      const rotated90 = rotateMatrix(matrix);
      const rotated180 = rotateMatrix(rotated90);
      const rotated270 = rotateMatrix(rotated180);
      const rotated360 = rotateMatrix(rotated270);
      expect(rotated360).toEqual(matrix);
    });
  });
});
