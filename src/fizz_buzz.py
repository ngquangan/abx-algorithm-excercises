# url: https://leetcode.com/problems/fizz-buzz/submissions/
# writtenby: hoangddt

class Solution:
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        result = []
        for number in range(1, n+1):
            if (number % 3 == 0) and (number % 5 == 0):
                result.append('FizzBuzz')
            elif (number % 3 == 0):
                result.append('Fizz')
            elif (number % 5 == 0):
                result.append('Buzz')
            else:
                result.append(str(number))
        
        return result