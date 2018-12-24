# url to the problem
# https://leetcode.com/problems/reverse-string/


class Solution:
    def reverseString(self, s):
        """
        :type s: str
        :rtype: str
        """
        res = ''
        for index in range(len(s)):
            res += s[len(s) - index -1]
        return res
