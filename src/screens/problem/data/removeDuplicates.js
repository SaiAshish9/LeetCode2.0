function objToArray(obj) {
  return Object.entries(obj);
}

function arrayToObj(arr) {
  return Object.fromEntries(arr);
}

function combineObjects(obj1, obj2) {
  const arr1 = objToArray(obj1);
  const arr2 = objToArray(obj2);

  const keysInObj1 = new Set(arr1.map(([key, _]) => key));

  // Filter out keys from the second object that are already in the first object
  const filteredArr2 = arr2.filter(([key, _]) => !keysInObj1.has(key));
  const combinedArr = arr1.concat(filteredArr2);

  return arrayToObj(combinedArr);
}

const obj1 = {
  1: {
    java: {
      "hash-table": "",
    },
  },
  2: {
    java: {
      recursion: "",
    },
  },
  3: {
    java: {
      "sliding-window":
        'public class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int[] charIndex = new int[128]; \n        int left = 0, right = 0;\n        int maxLength = 0;\n\n        while (right < s.length()) {\n            char right = s.charAt(right);\n            left = Math.max(charIndex[right], left);\n            maxLength = Math.max(maxLength, right - left + 1);\n            charIndex[right] = right + 1;\n            right++;\n        }\n\n        return maxLength;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String input = "abcabcbb";\n        int result = sol.lengthOfLongestSubstring(input);\n        System.out.println("Length of Longest Substring Without Repeating Characters: " + result);\n    }\n}',
    },
  },
  4: {
    java: {
      "divide-and-conquer":
        "public class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        if (nums1.length > nums2.length) {\n            return findMedianSortedArrays(nums2, nums1);\n        }\n\n        int x = nums1.length;\n        int y = nums2.length;\n        int low = 0, high = x;\n\n        while (low <= high) {\n            int partitionX = (low + high) / 2;\n            int partitionY = (x + y + 1) / 2 - partitionX;\n\n            int maxX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];\n            int minX = (partitionX == x) ? Integer.MAX_VALUE : nums1[partitionX];\n\n            int maxY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];\n            int minY = (partitionY == y) ? Integer.MAX_VALUE : nums2[partitionY];\n\n            if (maxX <= minY && maxY <= minX) {\n                if ((x + y) % 2 == 0) {\n                    return ((double) Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;\n                } else {\n                    return (double) Math.max(maxX, maxY);\n                }\n            } else if (maxX > minY) {\n                high = partitionX - 1;\n            } else {\n                low = partitionX + 1;\n            }\n        }\n\n        throw new IllegalArgumentException();\n    }\n}",
    },
  },
  5: {
    java: {
      "two-pointers":
        'class Solution {\n\n    public String longestPalindrome(String s) {\n        if (s == null || s.length() == 0) {\n            return "";\n        }\n        int n = s.length();\n        int start = 0;\n        int maxLen = 1; \n        for (int i = 0; i < n; i++) {\n            int len1 = expandAroundCenter(s, i, i); // odd-length palindromes           \n            int len2 = expandAroundCenter(s, i, i + 1); // even-length palindromes\n            int maxLenCurr = Math.max(len1, len2);\n            if (maxLenCurr > maxLen) {\n                maxLen = maxLenCurr;\n                start = i - (maxLen - 1) / 2;\n            }\n        }\n        \n        return s.substring(start, start + maxLen);\n    }\n    \n    private int expandAroundCenter(String s, int left, int right) {\n        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            left--;\n            right++;\n        }\n        return right - left - 1;\n    }\n}\n',
    },
  },
  6: {
    java: {
      string: "",
    },
  },
  7: {
    java: {
      math: "",
    },
  },
  8: {
    java: {
      string: "",
    },
  },
  9: {
    java: {
      math: "",
    },
  },
  10: {
    java: {
      "dynamic-programming": "",
    },
  },
  11: {
    java: {
      "two-pointers":
        "public class Solution {\n    public int maxArea(int[] height) {\n        int max = 0;\n        int left = 0;\n        int right = height.length - 1;\n\n        while (left < right) {\n            int currentArea = Math.min(height[left], height[right]) * (right - left);\n            max = Math.max(max, currentArea);\n\n            if (height[left] < height[right]) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n\n        return max;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] heights = {1, 2, 1};\n        System.out.println(solution.maxArea(heights)); // Output: 2\n    }\n}\n",
    },
  },
  12: {
    java: {
      math: "",
    },
  },
  13: {
    java: {
      math: "",
    },
  },
  14: {
    java: {
      trie: "",
    },
  },
  15: {
    java: {
      "two-pointers":
        "public class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        Arrays.sort(nums);\n        List<List<Integer>> result = new ArrayList<>();\n\n        for (int i = 0; i < nums.length - 2; i++) {\n            if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {\n                int left = i + 1, right = nums.length - 1, target = -nums[i];\n                while (left < right) {\n                    if (nums[left] + nums[right] == target) {\n                        result.add(Arrays.asList(nums[i], nums[left], nums[right]));\n                        while (left < right && nums[left] == nums[left + 1]) left++;\n                        while (left < right && nums[right] == nums[right - 1]) right--;\n                        left++;\n                        right--;\n                    } else if (nums[left] + nums[right] < target) {\n                        left++;\n                    } else {\n                        right--;\n                    }\n                }\n            }\n        }\n\n        return result;\n    }\n}",
    },
  },
  16: {
    java: {
      "two-pointers":
        "import java.util.*;\n\npublic class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        Arrays.sort(nums);\n        int closestSum = nums[0] + nums[1] + nums[2];\n\n        for (int i = 0; i < nums.length - 2; i++) {\n            int left = i + 1, right = nums.length - 1;\n            while (left < right) {\n                int currentSum = nums[i] + nums[left] + nums[right];\n                if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {\n                    closestSum = currentSum;\n                }\n                if (currentSum < target) {\n                    left++;\n                } else if (currentSum > target) {\n                    right--;\n                } else {\n                    return target; // Early exit if we find an exact match\n                }\n            }\n        }\n\n        return closestSum;\n    }\n}",
    },
  },
  17: {
    java: {
      backtracking: "",
    },
  },
  18: {
    java: {
      "two-pointers":
        "import java.util.*;\n\nclass Solution {\n    public List<List<Integer>> fourSum(int[] nums, int target) {\n        List<List<Integer>> result = new ArrayList<>();\n        int n = nums.length;\n        if (n < 4) return result;\n        \n        Arrays.sort(nums);\n        \n        for (int i = 0; i < n - 3; i++) {\n            if (i > 0 && nums[i] == nums[i - 1]) continue; \n            for (int j = i + 1; j < n - 2; j++) {\n                if (j > i + 1 && nums[j] == nums[j - 1]) continue; \n                \n                int left = j + 1;\n                int right = n - 1;\n                \n                while (left < right) {\n                    long sum = (long) nums[i] + nums[j] + nums[left] + nums[right];\n                    \n                    if (sum == target) {\n                        result.add(Arrays.asList(nums[i], nums[j], nums[left], nums[right]));\n                        \n                        while (left < right && nums[left] == nums[left + 1]) left++;\n                        while (left < right && nums[right] == nums[right - 1]) right--;\n                        \n                        left++;\n                        right--;\n                    } else if (sum < target) {\n                        left++;\n                    } else {\n                        right--;\n                    }\n                }\n            }\n        }\n        \n        return result;\n    }\n    \n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {1000000000, 1000000000, 1000000000, 1000000000};\n        int target = -294967296;\n        List<List<Integer>> result = sol.fourSum(nums, target);\n        \n        // Expected Output: []\n        for (List<Integer> quad : result) {\n            System.out.println(quad);\n        }\n    }\n}\n",
    },
  },
  19: {
    java: {
      "two-pointers":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        ListNode dummy = new ListNode(0);\n        dummy.next = head;\n        ListNode slow = dummy;\n        ListNode fast = dummy;\n        for (int i = 1; i <= n + 1; i++) {\n            fast = fast.next;\n        }\n\n        while (fast != null) {\n            fast = fast.next;\n            slow = slow.next;\n        }\n        slow.next = slow.next.next;\n\n        return dummy.next;\n    }\n}\n",
    },
  },
  20: {
    java: {
      stack:
        "import java.util.*;\n\nclass Solution {\n    public boolean isValid(String s) {\n        Deque<Character> stack = new ArrayDeque<>();\n\n        for (char ch : s.toCharArray()) {\n            if (ch == '(' || ch == '{' || ch == '[') {\n                stack.push(ch);\n            } else {\n                if (stack.isEmpty())\n                    return false;\n                char open = stack.pop();\n                if (!isMatchingPair(open, ch))\n                    return false;\n            }\n        }\n\n        return stack.isEmpty();\n    }\n\n    private boolean isMatchingPair(char open, char close) {\n        return (open == '(' && close == ')') ||\n                (open == '{' && close == '}') ||\n                (open == '[' && close == ']');\n    }\n}\n",
    },
  },
  21: {
    java: {
      recursion: "",
    },
  },
  22: {
    java: {
      "dynamic-programming": "",
    },
  },
  23: {
    java: {
      "merge-sort":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists == null || lists.length == 0) {\n            return null;\n        }\n        return mergeKLists(lists, 0, lists.length - 1);\n    }\n    \n    private ListNode mergeKLists(ListNode[] lists, int left, int right) {\n        if (left == right) {\n            return lists[left];\n        }\n        int mid = left + (right - left) / 2;\n        ListNode l1 = mergeKLists(lists, left, mid);\n        ListNode l2 = mergeKLists(lists, mid + 1, right);\n        return mergeTwoLists(l1, l2);\n    }\n    \n    private ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(0);\n        ListNode current = dummy;\n        \n        while (l1 != null && l2 != null) {\n            if (l1.val < l2.val) {\n                current.next = l1;\n                l1 = l1.next;\n            } else {\n                current.next = l2;\n                l2 = l2.next;\n            }\n            current = current.next;\n        }\n        \n        if (l1 != null) {\n            current.next = l1;\n        } else if (l2 != null) {\n            current.next = l2;\n        }\n        \n        return dummy.next;\n    }\n}\n",
      "heap-(priority-queue)":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n * int val;\n * ListNode next;\n * ListNode() {}\n * ListNode(int val) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        ListNode dummy = new ListNode(0);\n        ListNode curr = dummy;\n        Queue<ListNode> minHeap = new PriorityQueue<>((a, b) -> a.val - b.val);\n\n        for (ListNode list : lists)\n            if (list != null)\n                minHeap.offer(list);\n\n        while (!minHeap.isEmpty()) {\n            ListNode minNode = minHeap.poll();\n            if (minNode.next != null)\n                minHeap.offer(minNode.next);\n            curr.next = minNode;\n            curr = curr.next;\n        }\n\n        return dummy.next;\n    }\n}",
    },
  },
  24: {
    java: {
      recursion: "",
    },
  },
  25: {
    java: {
      recursion: "",
    },
  },
  26: {
    java: {
      "two-pointers":
        "class Solution {\n    public int removeDuplicates(int[] nums) {\n        if (nums.length == 0) return 0;\n\n        int slow = 1;  // slow pointer\n        for (int fast = 1; fast < nums.length; fast++) {  // fast pointer\n            if (nums[fast] != nums[fast - 1]) {\n                nums[slow++] = nums[fast];\n            }\n        }\n        return slow;\n    }\n}\n",
    },
  },
  27: {
    java: {
      "two-pointers":
        "class Solution {\n    public int removeElement(int[] nums, int val) {\n        int left = 0;  \n        for (int right = 0; right < nums.length; right++) { \n            if (nums[right] != val) {\n                nums[left] = nums[right];\n                left++;\n            }\n        }\n        return left;\n    }\n}",
    },
  },
  28: {
    java: {
      "two-pointers":
        "class Solution {\n    public int strStr(String haystack, String needle) {\n        if (needle.isEmpty()) {\n            return 0;\n        }\n        int haystackLength = haystack.length();\n        int needleLength = needle.length();\n        \n        for (int i = 0; i <= haystackLength - needleLength; i++) {\n            int j = 0;\n            while (j < needleLength && haystack.charAt(i + j) == needle.charAt(j)) {\n                j++;\n            }\n            if (j == needleLength) {\n                return i;\n            }\n        }\n        return -1;\n    }\n}\n",
    },
  },
  29: {
    java: {
      "bit-manipulation": "",
    },
  },
  30: {
    java: {
      "sliding-window":
        "import java.util.*;\n\npublic class Solution {\n    public List<Integer> findSubstring(String s, String[] words) {\n        List<Integer> result = new ArrayList<>();\n        if (s == null || s.length() == 0 || words == null || words.length == 0) {\n            return result;\n        }\n\n        int wordLength = words[0].length();\n        int wordsCount = words.length;\n        int totalLength = wordLength * wordsCount;\n\n        Map<String, Integer> wordMap = new HashMap<>();\n        for (String word : words) {\n            wordMap.put(word, wordMap.getOrDefault(word, 0) + 1);\n        }\n\n        for (int i = 0; i < wordLength; i++) {\n            int left = i;\n            int right = i;\n            int count = 0;\n            Map<String, Integer> currentMap = new HashMap<>();\n            \n            while (right + wordLength <= s.length()) {\n                String word = s.substring(right, right + wordLength);\n                right += wordLength;\n\n                if (wordMap.containsKey(word)) {\n                    currentMap.put(word, currentMap.getOrDefault(word, 0) + 1);\n                    count++;\n                    while (currentMap.get(word) > wordMap.get(word)) {\n                        String leftWord = s.substring(left, left + wordLength);\n                        currentMap.put(leftWord, currentMap.get(leftWord) - 1);\n                        left += wordLength;\n                        count--;\n                    }\n                    if (count == wordsCount) {\n                        result.add(left);\n                    }\n                } else {\n                    currentMap.clear();\n                    count = 0;\n                    left = right;\n                }\n            }\n        }\n\n        return result;\n    }\n}",
    },
  },
  31: {
    java: {
      "two-pointers":
        "class Solution {\n    public void nextPermutation(int[] nums) {\n        int n = nums.length;\n        int i = n - 2;\n        \n        while (i >= 0 && nums[i] >= nums[i + 1]) {\n            i--;\n        }\n        \n        if (i >= 0) {\n            int j = n - 1;\n            while (nums[j] <= nums[i]) {\n                j--;\n            }\n            swap(nums, i, j);\n        }\n        \n        reverse(nums, i + 1, n - 1);\n    }\n    \n    private void swap(int[] nums, int i, int j) {\n        int temp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = temp;\n    }\n    \n    private void reverse(int[] nums, int start, int end) {\n        while (start < end) {\n            swap(nums, start, end);\n            start++;\n            end--;\n        }\n    }\n}\n",
    },
  },
  32: {
    java: {
      stack:
        "import java.util.*;\n\nclass Solution {\n    public int longestValidParentheses(String s) {\n        Deque<Integer> stack = new ArrayDeque<>();\n        stack.push(-1);\n        int maxLength = 0;\n\n        for (int i = 0; i < s.length(); i++) {\n            char ch = s.charAt(i);\n            if (ch == '(') {\n                stack.push(i);\n            } else {\n                stack.pop();\n                if (stack.isEmpty()) {\n                    stack.push(i);\n                } else {\n                    maxLength = Math.max(maxLength, i - stack.peek());\n                }\n            }\n        }\n\n        return maxLength;\n    }\n}\n",
    },
  },
  36: {
    java: {
      matrix:
        "public class Solution {\n\n    public boolean isSafe(char[][] board, int row, int col, char num) {\n        for (int j = 0; j < 9; j++) {\n            if (board[row][j] == num) {\n                return false;\n            }\n        }\n\n        for (int i = 0; i < 9; i++) {\n            if (board[i][col] == num) {\n                return false;\n            }\n        }\n\n        int startRow = row - row % 3;\n        int startCol = col - col % 3;\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                if (board[i + startRow][j + startCol] == num) {\n                    return false;\n                }\n            }\n        }\n\n        return true;\n    }\n\n    public boolean isValidSudoku(char[][] board) {\n        for (int i = 0; i < 9; i++) {\n            for (int j = 0; j < 9; j++) {\n                char num = board[i][j];                \n                if (num == '.') continue;\n\n                board[i][j] = '.';\n                if (!isSafe(board, i, j, num)) {\n                    return false; \n                }\n                board[i][j] = num;\n            }\n        }\n\n        return true;\n    }\n}\n",
    },
  },
  37: {
    java: {
      backtracking:
        "public class Solution {\n\n   public boolean isSafe(int[][] board, int row, int col, int num, int n) {\n        for (int j = 0; j < n; j++)\n            if (board[row][j] == num)\n                return false;\n\n        for (int i = 0; i < n; i++)\n            if (board[i][col] == num)\n                return false;\n\n        int startRow = row - row % 3,\n                startCol = col - col % 3;\n\n        // check within the section (3 * 3)(n = 3)\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                if (board[i + startRow][j + startCol] == num)\n                    return false;\n            }\n        }\n\n        return true;\n    }\n\n    boolean solve(int[][] board, int row, int col, int n) {\n        // avoid further tracking if all cells are explored\n        if (row == n - 1 && col == n)\n            return true;\n\n        // move to next row\n        if (col == n) {\n            row++;\n            col = 0;\n        }\n\n        // check for next element horizontally if element is\n        // already present\n        if (board[row][col] != 0)\n            return solve(board, row, col + 1, n);\n\n        // if present value is 0, replace it with values from 0-9\n        for (int num = 1; num < n + 1; num++) {\n            if (isSafe(board, row, col, num, n)) {\n                board[row][col] = num;\n        // check for next column\n                if (solve(board, row, col + 1, n)) {\n                    return true;\n                }\n            }\n            board[row][col] = 0;\n        }\n\n        return false;\n    }\n\n    public void solveSudoku(char[][] board) {\n        int n = board[0].length;\n        int grid[][] = new int[n][n];\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (board[i][j] == '.') {\n                    grid[i][j] = 0;\n                } else {\n                    grid[i][j] = Integer.parseInt(String.valueOf(board[i][j]));\n                }\n            }\n        }\n        solve(grid, 0, 0, n);\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                if (grid[i][j] == 0) {\n                    board[i][j] = '.';\n                } else {\n                    board[i][j] = (char) (grid[i][j] + '0');\n                }\n            }\n        }\n    }\n\n}\n",
    },
  },
  38: {
    java: {
      string: "",
    },
  },
  39: {
    java: {
      backtracking: "",
    },
  },
  40: {
    java: {
      backtracking: "",
    },
  },
  41: {
    java: {
      "hash-table": "",
    },
  },
  42: {
    java: {
      "two-pointers":
        "class Solution {\n    public int trap(int[] height) {\n        if (height == null || height.length == 0) return 0;\n\n        int left = 0, right = height.length - 1;\n        int left_max = 0, right_max = 0;\n        int waterTrapped = 0;\n\n        while (left < right) {\n            if (height[left] < height[right]) {\n                if (height[left] >= left_max) {\n                    left_max = height[left];\n                } else {\n                    waterTrapped += left_max - height[left];\n                }\n                left++;\n            } else {\n                if (height[right] >= right_max) {\n                    right_max = height[right];\n                } else {\n                    waterTrapped += right_max - height[right];\n                }\n                right--;\n            }\n        }\n\n        return waterTrapped;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] height = {0,1,0,2,1,0,1,3,2,1,2,1};\n        System.out.println(sol.trap(height)); // Output: 6\n    }\n}\n",
    },
  },
  43: {
    java: {
      math: "",
    },
  },
  44: {
    java: {
      "dynamic-programming": "",
    },
  },
  45: {
    java: {
      "dynamic-programming": "",
    },
  },
  46: {
    java: {
      backtracking: "",
    },
  },
  47: {
    java: {
      backtracking: "",
    },
  },
  48: {
    java: {
      matrix:
        'public class RotateImage {\n\n    public void rotate(int[][] matrix) {\n        if (matrix == null || matrix.length == 0) return;\n        \n        int n = matrix.length;\n        transpose(matrix, n);\n        \n        for (int i = 0; i < n; i++) {\n            reverseRow(matrix[i], n);\n        }\n    }\n    \n    private void transpose(int[][] matrix, int n) {\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                swap(matrix, i, j, j, i);\n            }\n        }\n    }\n    \n    private void reverseRow(int[] row, int n) {\n        int left = 0, right = n - 1;\n        while (left < right) {\n            int temp = row[left];\n            row[left] = row[right];\n            row[right] = temp;\n            left++;\n            right--;\n        }\n    }\n    \n    private void swap(int[][] matrix, int i, int j, int x, int y) {\n        int temp = matrix[i][j];\n        matrix[i][j] = matrix[x][y];\n        matrix[x][y] = temp;\n    }\n\n    public static void main(String[] args) {\n        RotateImage ri = new RotateImage();\n        int[][] matrix = {\n            {1, 2, 3},\n            {4, 5, 6},\n            {7, 8, 9}\n        };\n        \n        ri.rotate(matrix);\n        \n        for (int i = 0; i < matrix.length; i++) {\n            for (int j = 0; j < matrix[i].length; j++) {\n                System.out.print(matrix[i][j] + " ");\n            }\n            System.out.println();\n        }\n    }\n}\n',
    },
  },
  49: {
    java: {
      sorting: "",
    },
  },
  50: {
    java: {
      recursion: "",
    },
  },
  51: {
    java: {
      backtracking: "",
    },
  },
  52: {
    java: {
      backtracking: "",
    },
  },
  53: {
    java: {
      "dynamic-programming": "",
      "divide-and-conquer":
        "public class Solution {\n    public int maxSubArray(int[] nums) {\n        return maxSubArrayHelper(nums, 0, nums.length - 1);\n    }\n\n    private int maxSubArrayHelper(int[] nums, int left, int right) {\n        if (left == right) {\n            return nums[left];\n        }\n\n        int mid = (left + right) / 2;\n        int leftMax = maxSubArrayHelper(nums, left, mid);\n        int rightMax = maxSubArrayHelper(nums, mid + 1, right);\n        int crossMax = findMaxCrossingSubarray(nums, left, mid, right);\n\n        return Math.max(leftMax, Math.max(rightMax, crossMax));\n    }\n\n    private int findMaxCrossingSubarray(int[] nums, int left, int mid, int right) {\n        int leftSum = Integer.MIN_VALUE;\n        int sum = 0;\n        for (int i = mid; i >= left; i--) {\n            sum += nums[i];\n            if (sum > leftSum) {\n                leftSum = sum;\n            }\n        }\n\n        int rightSum = Integer.MIN_VALUE;\n        sum = 0;\n        for (int i = mid + 1; i <= right; i++) {\n            sum += nums[i];\n            if (sum > rightSum) {\n                rightSum = sum;\n            }\n        }\n\n        return leftSum + rightSum;\n    }\n\n}",
    },
  },
  54: {
    java: {
      matrix:
        "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Solution {\n    private static final int[] dr = {0, 1, 0, -1};\n    private static final int[] dc = {1, 0, -1, 0};\n\n    public List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> result = new ArrayList<>();\n        if (matrix == null || matrix.length == 0) return result;\n\n        int rows = matrix.length;\n        int cols = matrix[0].length;\n        boolean[][] visited = new boolean[rows][cols];\n\n        dfs(matrix, visited, result, 0, 0, 0);\n        return result;\n    }\n\n    private void dfs(int[][] matrix, boolean[][] visited, List<Integer> result, int row, int col, int direction) {\n        if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || visited[row][col]) {\n            return;\n        }\n\n        visited[row][col] = true;\n        result.add(matrix[row][col]);\n\n        int nextRow = row + dr[direction];\n        int nextCol = col + dc[direction];\n\n        if (nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length || visited[nextRow][nextCol]) {\n            direction = (direction + 1) % 4; \n            nextRow = row + dr[direction];\n            nextCol = col + dc[direction];\n        }\n\n        dfs(matrix, visited, result, nextRow, nextCol, direction);\n    }\n\n}\n",
    },
  },
  55: {
    java: {
      "dynamic-programming": "",
    },
  },
  56: {
    java: {
      sorting: "",
    },
  },
  58: {
    java: {
      string: "",
    },
  },
  59: {
    java: {
      matrix:
        "public class Solution {\n\n    private static final int[] dr = {0, 1, 0, -1}; \n    private static final int[] dc = {1, 0, -1, 0}; \n\n    public int[][] generateMatrix(int n) {\n        int[][] matrix = new int[n][n];\n        boolean[][] visited = new boolean[n][n];\n        int row = 0, col = 0, dir = 0;\n        for (int i = 1; i <= n * n; i++) {\n            matrix[row][col] = i;\n            visited[row][col] = true;\n\n            int nextRow = row + dr[dir];\n            int nextCol = col + dc[dir];\n\n            if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || visited[nextRow][nextCol]) {\n                dir = (dir + 1) % 4; // change direction\n                nextRow = row + dr[dir];\n                nextCol = col + dc[dir];\n            }\n\n            row = nextRow;\n            col = nextCol;\n        }\n        return matrix;\n    }\n\n}\n",
    },
  },
  60: {
    java: {
      recursion: "",
    },
  },
  61: {
    java: {
      "two-pointers":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode rotateRight(ListNode head, int k) {\n        if (head == null || head.next == null || k == 0) {\n            return head;\n        }\n        ListNode oldTail = head;\n        int length = 1;\n        while (oldTail.next != null) {\n            oldTail = oldTail.next;\n            length++;\n        }\n        oldTail.next = head;        \n        int newTailPosition = length - k % length - 1;        \n        ListNode newTail = head;\n        for (int i = 0; i < newTailPosition; i++) {\n            newTail = newTail.next;\n        }        \n        ListNode newHead = newTail.next;        \n        newTail.next = null;\n        return newHead;\n    }\n}\n",
    },
  },
  62: {
    java: {
      "dynamic-programming": "",
    },
  },
  63: {
    java: {
      matrix: "",
    },
  },
  64: {
    java: {
      matrix: "",
    },
  },
  65: {
    java: {
      string: "",
    },
  },
  66: {
    java: {
      math: "",
    },
  },
  67: {
    java: {
      "bit-manipulation": "",
    },
  },
  68: {
    java: {
      string: "",
    },
  },
  69: {
    java: {
      math: "",
    },
  },
  70: {
    java: {
      "dynamic-programming": "",
    },
  },
  71: {
    java: {
      stack:
        'import java.util.*;\n\nclass Solution {\n    public String simplifyPath(String path) {\n        Deque<String> stack = new ArrayDeque<>();\n        String[] components = path.split("/");\n\n        for (String component : components) {\n            if (component.equals("") || component.equals(".")) {\n                continue;\n            } else if (component.equals("..")) {\n                if (!stack.isEmpty()) {\n                    stack.pop();\n                }\n            } else {\n                stack.push(component);\n            }\n        }\n\n        StringBuilder simplifiedPath = new StringBuilder();\n        while (!stack.isEmpty()) {\n            simplifiedPath.insert(0, "/" + stack.pop());\n        }\n\n        return simplifiedPath.length() > 0 ? simplifiedPath.toString() : "/";\n    }\n}\n',
    },
  },
  72: {
    java: {
      "dynamic-programming": "",
    },
  },
  73: {
    java: {
      matrix: "",
    },
  },
  74: {
    java: {
      matrix: "",
    },
  },
  75: {
    java: {
      "two-pointers":
        'class Solution {\n    public void sortColors(int[] nums) {\n        int low = 0;\n        int mid = 0;\n        int high = nums.length - 1;\n\n        while (mid <= high) {\n            if (nums[mid] == 0) {\n                swap(nums, low, mid);\n                low++;\n                mid++;\n            } else if (nums[mid] == 1) {\n                mid++;\n            } else {  // nums[mid] == 2\n                swap(nums, mid, high);\n                high--;\n            }\n        }\n    }\n\n    private void swap(int[] nums, int i, int j) {\n        int temp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = temp;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] nums = {2, 0, 2, 1, 1, 0};\n        sol.sortColors(nums);        \n        for (int num : nums) {\n            System.out.print(num + " ");\n        }\n    }\n}\n',
    },
  },
  76: {
    java: {
      "sliding-window":
        "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Solution {\n    public String minWindow(String s, String t) {\n        if (s == null || s.length() == 0 || t == null || t.length() == 0) {\n            return;\n        }\n\n        Map<Character, Integer> tCount = new HashMap<>();\n        for (char c : t.toCharArray()) {\n            tCount.put(c, tCount.getOrDefault(c, 0) + 1);\n        }\n\n        int required = tCount.size();\n        int left = 0, right = 0;\n        int formed = 0;\n        Map<Character, Integer> windowCounts = new HashMap<>();\n        int[] ans = {-1, 0, 0}; // length, left, right\n\n        while (right < s.length()) {\n            char c = s.charAt(right);\n            windowCounts.put(c, windowCounts.getOrDefault(c, 0) + 1);\n\n            if (tCount.containsKey(c) && windowCounts.get(c).intValue() == tCount.get(c).intValue()) {\n                formed++;\n            }\n\n            while (left <= right && formed == required) {\n                c = s.charAt(left);\n                \n                if (ans[0] == -1 || right - left + 1 < ans[0]) {\n                    ans[0] = right - left + 1;\n                    ans[1] = left;\n                    ans[2] = right;\n                }\n\n                windowCounts.put(c, windowCounts.get(c) - 1);\n                if (tCount.containsKey(c) && windowCounts.get(c).intValue() < tCount.get(c).intValue()) {\n                    formed--;\n                }\n\n                left++;\n            }\n\n            right++;\n        }\n\n        return ans[0] == -1 ? : s.substring(ans[1], ans[2] + 1);\n    }\n}\n",
    },
  },
  77: {
    java: {
      backtracking: "",
    },
  },
  78: {
    java: {
      backtracking: "",
    },
  },
  79: {
    java: {
      matrix: "",
    },
  },
  80: {
    java: {
      "two-pointers":
        "class Solution {\n    public int removeDuplicates(int[] nums) {\n        int n = nums.length;\n        if (n <= 2) {\n            return n;\n        }\n        int slow = 2;\n        for (int fast = 2; fast < n; fast++) {\n            if (nums[fast] != nums[slow - 2]) {\n                nums[slow] = nums[fast];\n                slow++;\n            }\n        }\n\n        return slow;\n    }\n}",
    },
  },
  82: {
    java: {
      "two-pointers":
        '/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\n\nclass Solution {\n    public ListNode deleteDuplicates(ListNode head) {\n        if (head == null) return null;\n\n        ListNode dummy = new ListNode(0);\n        dummy.next = head;\n        ListNode prev = dummy;\n        ListNode current = head;\n\n        while (current != null) {\n            while (current.next != null && current.val == current.next.val) {\n                current = current.next;\n            }\n            if (prev.next != current) {\n                prev.next = current.next;\n            } else {\n                prev = prev.next;\n            }\n            current = current.next; \n        }\n\n        return dummy.next;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();        \n        ListNode head = new ListNode(1);\n        head.next = new ListNode(2);\n        head.next.next = new ListNode(3);\n        head.next.next.next = new ListNode(3);\n        head.next.next.next.next = new ListNode(4);\n        head.next.next.next.next.next = new ListNode(4);\n        head.next.next.next.next.next.next = new ListNode(5);\n\n        ListNode result = sol.deleteDuplicates(head);        \n        while (result != null) {\n            System.out.print(result.val + " ");\n            result = result.next;\n        }\n    }\n}\n',
    },
  },
  83: {
    java: {
      "linked-list": "",
    },
  },
  84: {
    java: {
      "monotonic-stack":
        "class Solution {\n    public int largestRectangleArea(int[] heights) {\n        Stack<Integer> stack = new Stack<>();\n        int maxArea = 0;\n        int index = 0;\n\n        while (index < heights.length) {\n            if (stack.isEmpty() || heights[index] >= heights[stack.peek()]) {\n                stack.push(index++);\n            } else {\n                int top = stack.pop();\n                int height = heights[top];\n                int width = stack.isEmpty() ? index : index - stack.peek() - 1;\n                maxArea = Math.max(maxArea, height * width);\n            }\n        }\n\n        while (!stack.isEmpty()) {\n            int top = stack.pop();\n            int height = heights[top];\n            int width = stack.isEmpty() ? index : index - stack.peek() - 1;\n            maxArea = Math.max(maxArea, height * width);\n        }\n\n        return maxArea;\n    }\n}",
    },
  },
  85: {
    java: {
      matrix: "",
    },
  },
  86: {
    java: {
      "two-pointers":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\n\nclass Solution {\n    public ListNode partition(ListNode head, int x) {\n        ListNode dummy1 = new ListNode(0);\n        ListNode dummy2 = new ListNode(0); \n        ListNode lessPtr = dummy1; \n        ListNode greaterOrEqualPtr = dummy2; \n        \n        while (head != null) {\n            if (head.val < x) {\n                lessPtr.next = head;\n                lessPtr = lessPtr.next;\n            } else {\n                greaterOrEqualPtr.next = head;\n                greaterOrEqualPtr = greaterOrEqualPtr.next;\n            }\n            head = head.next;\n        }\n        \n        lessPtr.next = dummy2.next;\n        greaterOrEqualPtr.next = null; \n        return dummy1.next; \n    }\n}\n",
    },
  },
  87: {
    java: {
      "dynamic-programming": "",
    },
  },
  88: {
    java: {
      "two-pointers":
        "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        int p1 = m - 1;\n        int p2 = n - 1;\n        \n        int p = m + n - 1; \n        while (p1 >= 0 && p2 >= 0) {\n            if (nums1[p1] > nums2[p2]) {\n                nums1[p--] = nums1[p1--];\n            } else {\n                nums1[p--] = nums2[p2--];\n            }\n        }\n        \n        while (p2 >= 0) {\n            nums1[p--] = nums2[p2--];\n        }\n    }\n}\n",
    },
  },
  89: {
    java: {
      backtracking: "",
    },
  },
  90: {
    java: {
      backtracking: "",
    },
  },
  91: {
    java: {
      "dynamic-programming": "",
    },
  },
  92: {
    java: {
      "linked-list": "",
    },
  },
  93: {
    java: {
      backtracking: "",
    },
  },
  94: {
    java: {
      stack: "",
    },
  },
  95: {
    java: {
      "binary-search-tree":
        "\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode() {\n    }\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\npublic class Solution {\n    public List<TreeNode> generateTrees(int n) {\n        if (n == 0)\n            return new ArrayList<>();\n        return generateTrees(1, n);\n    }\n\n    private List<TreeNode> generateTrees(int start, int end) {\n        List<TreeNode> allTrees = new ArrayList<>();\n        if (start > end) {\n            allTrees.add(null);\n            return allTrees;\n        }\n\n        for (int i = start; i <= end; i++) {\n            // all possible left subtrees if i is chosen to be a root\n            List<TreeNode> leftTrees = generateTrees(start, i - 1);\n\n            // all possible right subtrees if i is chosen to be a root\n            List<TreeNode> rightTrees = generateTrees(i + 1, end);\n\n            // connect left and right subtrees to the root i\n            for (TreeNode left : leftTrees) {\n                for (TreeNode right : rightTrees) {\n                    TreeNode currTree = new TreeNode(i);\n                    currTree.left = left;\n                    currTree.right = right;\n                    allTrees.add(currTree);\n                }\n            }\n        }\n        return allTrees;\n    }\n}\n",
    },
  },
  96: {
    java: {
      "binary-search-tree":
        "public class Solution {\n\n    public int numTrees(int n) {\n        int[] dp = new int[n + 1];\n        dp[0] = 1;\n        dp[1] = 1;\n        for (int nodes = 2; nodes <= n; nodes++) {\n            for (int root = 1; root <= nodes; root++) {\n                dp[nodes] += dp[root - 1] * dp[nodes - root];\n            }\n        }\n        return dp[n];\n    }\n\n}\n",
    },
  },
  97: {
    java: {
      "dynamic-programming": "",
    },
  },
  98: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode() {}\n * TreeNode(int val) { this.val = val; }\n * TreeNode(int val, TreeNode left, TreeNode right) {\n * this.val = val;\n * this.left = left;\n * this.right = right;\n * }\n * }\n */\npublic class Solution {\n\n    public boolean isValidBST(TreeNode root) {\n        return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);\n    }\n\n    private boolean isValidBST(TreeNode node, long min, long max) {\n        if (node == null) {\n            return true;\n        }\n        if (node.val <= min || node.val >= max) {\n            return false;\n        }\n        return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);\n    }\n\n}\n",
    },
  },
  99: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\npublic class Solution {\n\n    public void recoverTree(TreeNode root) {\n        TreeNode first = null;\n        TreeNode second = null;\n        TreeNode prev = null;\n        TreeNode temp = null;\n\n        while (root != null) {\n            if (root.left != null) {\n                // Find the rightmost node in the left subtree or link it to the current root\n                temp = root.left;\n                while (temp.right != null && temp.right != root) {\n                    temp = temp.right;\n                }\n\n                if (temp.right != null) {\n                    // Unlink the rightmost node from the current root\n                    if (prev != null && root.val < prev.val) {\n                        if (first == null) {\n                            first = prev;\n                        }\n                        second = root;\n                    }\n                    prev = root;\n\n                    temp.right = null;\n                    root = root.right;\n                } else {\n                    // Link the rightmost node to the current root\n                    temp.right = root;\n                    root = root.left;\n                }\n            } else {\n                // Check for swapped nodes\n                if (prev != null && root.val < prev.val) {\n                    if (first == null) {\n                        first = prev;\n                    }\n                    second = root;\n                }\n                prev = root;\n\n                root = root.right;\n            }\n        }\n\n        // Swap the values of the two nodes\n        if (first != null && second != null) {\n            int tempVal = first.val;\n            first.val = second.val;\n            second.val = tempVal;\n        }\n    }\n}\n",
    },
  },
  100: {
    java: {
      tree: "",
    },
  },
  101: {
    java: {
      tree: "",
    },
  },
  102: {
    java: {
      tree: "",
    },
  },
  103: {
    java: {
      tree: "",
    },
  },
  104: {
    java: {
      tree: "",
    },
  },
  105: {
    java: {
      tree: "",
    },
  },
  106: {
    java: {
      tree: "",
    },
  },
  107: {
    java: {
      tree: "",
    },
  },
  108: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode() {}\n * TreeNode(int val) { this.val = val; }\n * TreeNode(int val, TreeNode left, TreeNode right) {\n * this.val = val;\n * this.left = left;\n * this.right = right;\n * }\n * }\n */\nclass Solution {\n    public TreeNode sortedArrayToBST(int[] nums) {\n        if (nums == null || nums.length == 0) {\n            return null;\n        }\n        return constructBST(nums, 0, nums.length - 1);\n    }\n\n    private TreeNode constructBST(int[] nums, int left, int right) {\n        if (left > right) {\n            return null;\n        }\n\n        int mid = left + (right - left) / 2;\n        TreeNode node = new TreeNode(nums[mid]);\n\n        node.left = constructBST(nums, left, mid - 1);\n        node.right = constructBST(nums, mid + 1, right);\n\n        return node;\n    }\n}",
    },
  },
  109: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode() {}\n * TreeNode(int val) { this.val = val; }\n * TreeNode(int val, TreeNode left, TreeNode right) {\n * this.val = val;\n * this.left = left;\n * this.right = right;\n * }\n * }\n */\nclass Solution {\n    public TreeNode sortedListToBST(ListNode head) {\n        if (head == null) {\n            return null;\n        }\n        return sortedListToBSTHelper(head, null);\n    }\n\n    private TreeNode sortedListToBSTHelper(ListNode head, ListNode tail) {\n        if (head == tail) {\n            return null;\n        }\n\n        ListNode slow = head;\n        ListNode fast = head;\n\n        while (fast != tail && fast.next != tail) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n\n        TreeNode node = new TreeNode(slow.val);\n        node.left = sortedListToBSTHelper(head, slow);\n        node.right = sortedListToBSTHelper(slow.next, tail);\n        return node;\n    }\n}",
    },
  },
  110: {
    java: {
      tree: "",
    },
  },
  111: {
    java: {
      tree: "",
    },
  },
  112: {
    java: {
      tree: "",
    },
  },
  113: {
    java: {
      tree: "",
    },
  },
  114: {
    java: {
      stack: "",
    },
  },
  115: {
    java: {
      "dynamic-programming": "",
    },
  },
  116: {
    java: {
      tree: "",
    },
  },
  117: {
    java: {
      tree: "",
    },
  },
  118: {
    java: {
      "dynamic-programming": "",
    },
  },
  119: {
    java: {
      "dynamic-programming": "",
    },
  },
  120: {
    java: {
      "dynamic-programming": "",
    },
  },
  121: {
    java: {
      "dynamic-programming": "",
    },
  },
  122: {
    java: {
      "dynamic-programming": "",
    },
  },
  123: {
    java: {
      "dynamic-programming": "",
    },
  },
  124: {
    java: {
      "dynamic-programming": "",
    },
  },
  125: {
    java: {
      "two-pointers":
        "class Solution {\n    public boolean isPalindrome(String s) {\n        int left = 0, right = s.length() - 1;\n        \n        while (left < right) {\n            char c1 = s.charAt(left);\n            char c2 = s.charAt(right);\n            \n            if (!Character.isLetterOrDigit(c1)) {\n                left++;\n            } else if (!Character.isLetterOrDigit(c2)) {\n                right--;\n            } else {\n                if (Character.toLowerCase(c1) != Character.toLowerCase(c2)) {\n                    return false;\n                }\n                left++;\n                right--;\n            }\n        }\n        \n        return true;\n    }\n}\n",
    },
  },
  126: {
    java: {
      backtracking: "",
    },
  },
  127: {
    java: {
      "breadth-first-search": "",
    },
  },
  128: {
    java: {
      "union-find": "",
    },
  },
  129: {
    java: {
      tree: "",
    },
  },
  130: {
    java: {
      "union-find": "",
    },
  },
  131: {
    java: {
      "dynamic-programming": "",
    },
  },
  132: {
    java: {
      "dynamic-programming": "",
    },
  },
  133: {
    java: {
      graph: "",
    },
  },
  134: {
    java: {
      greedy: "",
    },
  },
  135: {
    java: {
      greedy: "",
    },
  },
  136: {
    java: {
      "bit-manipulation": "",
    },
  },
  137: {
    java: {
      "bit-manipulation": "",
    },
  },
  138: {
    java: {
      "linked-list": "",
    },
  },
  139: {
    java: {
      "dynamic-programming": "",
    },
  },
  140: {
    java: {
      "dynamic-programming": "",
    },
  },
  141: {
    java: {
      "two-pointers":
        "/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        if (head == null || head.next == null) {\n            return false;\n        }\n        ListNode slow = head;\n        ListNode fast = head.next;\n        while (slow != fast) {\n            if (fast == null || fast.next == null) {\n                return false;\n            }\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        return true;\n    }\n}",
    },
  },
  142: {
    java: {
      "two-pointers":
        "public class Solution {\n    public ListNode detectCycle(ListNode head) {\n        ListNode slow = head;\n        ListNode fast = head;\n\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n            if (slow == fast) {\n                slow = head;\n                while (slow != fast) {\n                    slow = slow.next;\n                    fast = fast.next;\n                }\n                return slow; \n            }\n        }\n\n        return null; \n    }\n}\n",
    },
  },
  143: {
    java: {
      "two-pointers": "",
    },
  },
  144: {
    java: {
      stack: "",
    },
  },
  145: {
    java: {
      stack: "",
    },
  },
  146: {
    java: {
      "doubly-linked-list":
        "class LRUCache {\n    class Node {\n        int key;\n        int value;\n        Node prev;\n        Node next;\n        \n        public Node(int key, int value) {\n            this.key = key;\n            this.value = value;\n        }\n    }\n    \n    private int capacity;\n    private Map<Integer, Node> map;\n    private Node head;\n    private Node tail;\n    \n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        map = new HashMap<>();\n        head = new Node(-1, -1);\n        tail = new Node(-1, -1);\n        head.next = tail;\n        tail.prev = head;\n    }\n    \n    public int get(int key) {\n        if (!map.containsKey(key)) {\n            return -1;\n        }\n        \n        Node node = map.get(key);\n        moveToHead(node);\n        \n        return node.value;\n    }\n    \n    public void put(int key, int value) {\n        if (map.containsKey(key)) {\n            Node node = map.get(key);\n            node.value = value;\n            moveToHead(node);\n        } else {\n            Node newNode = new Node(key, value);\n            map.put(key, newNode);\n            addToHead(newNode);\n            \n            if (map.size() > capacity) {\n                Node removed = removeTail();\n                map.remove(removed.key);\n            }\n        }\n    }\n    \n    private void moveToHead(Node node) {\n        removeNode(node);\n        addToHead(node);\n    }\n    \n    private void removeNode(Node node) {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n    }\n    \n    private void addToHead(Node node) {\n        node.next = head.next;\n        node.next.prev = node;\n        head.next = node;\n        node.prev = head;\n    }\n    \n    private Node removeTail() {\n        Node nodeToRemove = tail.prev;\n        removeNode(nodeToRemove);\n        return nodeToRemove;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        LRUCache cache = new LRUCache(2); // Capacity is 2\n        cache.put(1, 1);\n        cache.put(2, 2);\n        System.out.println(cache.get(1)); // Output: 1\n        cache.put(3, 3);\n        System.out.println(cache.get(2)); // Output: -1 (not found)\n        cache.put(4, 4);\n        System.out.println(cache.get(1)); // Output: -1 (not found)\n        System.out.println(cache.get(3)); // Output: 3\n        System.out.println(cache.get(4)); // Output: 4\n    }\n}\n",
    },
  },
  147: {
    java: {
      "linked-list": "",
    },
  },
  148: {
    java: {
      "merge-sort":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode sortList(ListNode head) {\n        if (head == null || head.next == null) {\n            return head;\n        }\n\n        ListNode mid = getMid(head);\n        ListNode left = head;\n        ListNode right = mid.next;\n        mid.next = null; \n        left = sortList(left);\n        right = sortList(right);\n\n        return merge(left, right);\n    }\n\n    private ListNode getMid(ListNode head) {\n        ListNode slow = head;\n        ListNode fast = head.next;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n\n        return slow;\n    }\n\n    private ListNode merge(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(0);\n        ListNode current = dummy;\n\n        while (l1 != null && l2 != null) {\n            if (l1.val < l2.val) {\n                current.next = l1;\n                l1 = l1.next;\n            } else {\n                current.next = l2;\n                l2 = l2.next;\n            }\n            current = current.next;\n        }\n\n        if (l1 != null) {\n            current.next = l1;\n        } else {\n            current.next = l2;\n        }\n\n        return dummy.next;\n    }\n}\n",
    },
  },
  149: {
    java: {
      geometry: "",
    },
  },
  150: {
    java: {
      stack: "",
    },
  },
  151: {
    java: {
      "two-pointers": "",
    },
  },
  152: {
    java: {
      "dynamic-programming": "",
    },
  },
  155: {
    java: {
      stack:
        "import java.util.Stack;\n\nclass MinStack {\n    private Stack<Integer> stack;\n    private Stack<Integer> minStack;\n\n    public MinStack() {\n        stack = new Stack<>();\n        minStack = new Stack<>();\n    }\n\n    public void push(int val) {\n        stack.push(val);\n        if (minStack.isEmpty() || val <= minStack.peek()) {\n            minStack.push(val);\n        }\n    }\n\n    public void pop() {\n        if (stack.peek().equals(minStack.peek())) {\n            minStack.pop();\n        }\n        stack.pop();\n    }\n\n    public int top() {\n        return stack.peek();\n    }\n\n    public int getMin() {\n        return minStack.peek();\n    }\n}",
    },
  },
  156: {
    java: {
      tree: "",
    },
  },
  157: {
    java: {
      interactive: "",
    },
  },
  158: {
    java: {
      interactive: "",
    },
  },
  159: {
    java: {
      "sliding-window":
        "class Solution {\n    public int lengthOfLongestSubstringTwoDistinct(String s) {\n        Map<Character, Integer> count = new HashMap<>();\n        int n = s.length();\n        int ans = 0;\n        int left = 0;\n        for (int right = 0; right < n; ++right) {\n            char c = s.charAt(right);\n            count.put(c, count.getOrDefault(c, 0) + 1);\n            while (count.size() > 2) {\n                char t = s.charAt(left++);\n                count.put(t, count.get(t) - 1);\n                if (count.get(t) == 0) {\n                    count.remove(t);\n                }\n            }\n            ans = Math.max(ans, right - left + 1);\n        }\n        return ans;\n    }\n}",
    },
  },
  160: {
    java: {
      "two-pointers": "",
    },
  },
  161: {
    java: {
      "two-pointers": "",
    },
  },
  164: {
    java: {
      "radix-sort":
        "class Solution {\n    public int maximumGap(int[] nums) {\n        if (nums == null || nums.length < 2) {\n            return 0;\n        }\n        \n        radixSort(nums);\n        \n        int maxGap = 0;\n        for (int i = 1; i < nums.length; i++) {\n            maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);\n        }\n        return maxGap;\n    }\n\n    private void radixSort(int[] nums) {\n        int max = Arrays.stream(nums).max().getAsInt();\n        int exp = 1;\n        while (max / exp > 0) {\n            countingSort(nums, exp);\n            exp *= 10;\n        }\n    }\n\n    private void countingSort(int[] nums, int exp) {\n        int n = nums.length;\n        int[] output = new int[n];\n        int[] count = new int[10];\n\n        for (int i = 0; i < n; i++) {\n            int index = (nums[i] / exp) % 10;\n            count[index]++;\n        }\n\n        for (int i = 1; i < 10; i++) {\n            count[i] += count[i - 1];\n        }\n\n        for (int i = n - 1; i >= 0; i--) {\n            int index = (nums[i] / exp) % 10;\n            output[count[index] - 1] = nums[i];\n            count[index]--;\n        }\n\n        System.arraycopy(output, 0, nums, 0, n);\n    }\n}\n",
      "bucket-sort":
        'import java.util.*;\n\npublic class Solution {\n\n    public int maximumGap(int[] nums) {\n        if (nums == null || nums.length < 2) {\n            return 0;\n        }\n\n        int n = nums.length;\n        int minVal = Integer.MAX_VALUE;\n        int maxVal = Integer.MIN_VALUE;\n\n        for (int num : nums) {\n            minVal = Math.min(minVal, num);\n            maxVal = Math.max(maxVal, num);\n        }\n\n        int bucketSize = Math.max(1, (maxVal - minVal) / (n - 1));\n        int bucketCount = (maxVal - minVal) / bucketSize + 1;\n\n        List<Integer>[] buckets = new ArrayList[bucketCount];\n        for (int i = 0; i < bucketCount; i++) {\n            buckets[i] = new ArrayList<>();\n        }\n\n        for (int num : nums) {\n            int bucketIndex = (num - minVal) / bucketSize;\n            buckets[bucketIndex].add(num);\n        }\n\n        int maxGap = 0;\n        int previousMax = minVal;\n\n        for (int i = 0; i < bucketCount; i++) {\n            if (buckets[i].isEmpty()) {\n                continue;\n            }\n            Collections.sort(buckets[i]);\n            int currentMin = buckets[i].get(0);\n            int currentMax = buckets[i].get(buckets[i].size() - 1);\n            maxGap = Math.max(maxGap, currentMin - previousMax);\n            previousMax = currentMax;\n        }\n\n        return maxGap;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums1 = { 3, 6, 9, 1 };\n        int[] nums2 = { 10 };\n\n        System.out.println("Maximum gap for nums1: " + solution.maximumGap(nums1)); // Output: 3\n        System.out.println("Maximum gap for nums2: " + solution.maximumGap(nums2)); // Output: 0\n    }\n}\n',
    },
  },
  165: {
    java: {
      "two-pointers": "",
    },
  },
  166: {
    java: {
      math: "",
    },
  },
  167: {
    java: {
      "two-pointers":
        "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        int left = 0;\n        int right = numbers.length - 1;\n\n        while (left < right) {\n            int sum = numbers[left] + numbers[right];\n            if (sum == target) {\n                return new int[] { left + 1, right + 1 };\n            } else if (sum < target) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n        \n        return new int[] {};\n    }\n}",
    },
  },
  168: {
    java: {
      math: "",
    },
  },
  169: {
    java: {
      "divide-and-conquer": "",
      counting:
        "class Solution {\n  public int majorityElement(int[] nums) {\n    Integer ans = null;\n    int count = 0;\n\n    for (final int num : nums) {\n      if (count == 0)\n        ans = num;\n      count += num == ans ? 1 : -1;\n    }\n\n    return ans;\n  }\n}",
    },
  },
  170: {
    java: {
      "two-pointers": "",
    },
  },
  171: {
    java: {
      math: "",
    },
  },
  172: {
    java: {
      math: "",
    },
  },
  173: {
    java: {
      iterator:
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nimport java.util.*;\n\nclass BSTIterator {\n    private Stack<TreeNode> stack;\n\n    public BSTIterator(TreeNode root) {\n        stack = new Stack<>();\n        pushAll(root);\n    }\n    \n    /** @return the next smallest number */\n    public int next() {\n        TreeNode node = stack.pop();\n        pushAll(node.right);\n        return node.val;\n    }\n    \n    public boolean hasNext() {\n        return !stack.isEmpty();\n    }\n    \n    private void pushAll(TreeNode node) {\n        while (node != null) {\n            stack.push(node);\n            node = node.left;\n        }\n    }\n}\n\n/**\n * Your BSTIterator object will be instantiated and called as such:\n * BSTIterator obj = new BSTIterator(root);\n * int param_1 = obj.next();\n * boolean param_2 = obj.hasNext();\n */",
    },
  },
  174: {
    java: {
      matrix: "",
    },
  },
  175: {
    java: {
      database: "",
    },
  },
  176: {
    java: {
      database: "",
    },
  },
  177: {
    java: {
      database: "",
    },
  },
  178: {
    java: {
      database: "",
    },
  },
  179: {
    java: {
      greedy: "",
    },
  },
  180: {
    java: {
      database: "",
    },
  },
  181: {
    java: {
      database: "",
    },
  },
  182: {
    java: {
      database: "",
    },
  },
  183: {
    java: {
      database: "",
    },
  },
  184: {
    java: {
      database: "",
    },
  },
  185: {
    java: {
      database: "",
    },
  },
  186: {
    java: {
      "two-pointers": "",
    },
  },
  187: {
    java: {
      "sliding-window":
        "import java.util.List;\nimport java.util.Map;\n\nclass Solution {\n    public List<String> findRepeatedDnaSequences(String s) {\n        List<String> result = new ArrayList<>();\n        if (s.length() <= 10) return result;\n\n        Map<String, Integer> sequenceCount = new HashMap<>();\n        for (int i = 0; i <= s.length() - 10; i++) {\n            String sequence = s.substring(i, i + 10);\n            sequenceCount.put(sequence, sequenceCount.getOrDefault(sequence, 0) + 1);\n            if (sequenceCount.get(sequence) == 2) {\n                result.add(sequence);\n            }\n        }\n\n        return result;\n    }\n}",
    },
  },
  188: {
    java: {
      "dynamic-programming": "",
    },
  },
  189: {
    java: {
      "two-pointers":
        "class Solution {\n    public void rotate(int[] nums, int k) {\n        k = k % nums.length;\n        reverse(nums, 0, nums.length - 1);\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, nums.length - 1);\n    }\n\n    private void reverse(int[] nums, int start, int end) {\n        while (start < end) {\n            int temp = nums[start];\n            nums[start] = nums[end];\n            nums[end] = temp;\n            start++;\n            end--;\n        }\n    }\n}",
    },
  },
  190: {
    java: {
      "divide-and-conquer": "",
    },
  },
  191: {
    java: {
      "divide-and-conquer": "",
    },
  },
  192: {
    java: {
      shell:
        "#!/bin/bash\ntr -s ' ' '\\n' < words.txt | sort | uniq -c | awk '{print $2, $1}' | sort -nr -k2\n",
    },
  },
  193: {
    java: {
      shell:
        "#!/bin/bash\ngrep -E '^(([0-9]{3}) [0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$)' file.txt",
    },
  },
  194: {
    java: {
      shell:
        "#!/bin/bash\nawk '\n{\n    for (i = 1; i <= NF; i++) {\n        if (NR == 1) {\n            res[i] = $i;\n        } else {\n            res[i] = res[i] \" \" $i;\n        }\n    }\n}\nEND {\n    for (i = 1; i <= NF; i++) {\n        print res[i];\n    }\n}' file.txt\n",
    },
  },
  195: {
    java: {
      shell: "#!/bin/bash\nsed '10q;d' file.txt",
    },
  },
  196: {
    java: {
      database: "",
    },
  },
  197: {
    java: {
      database: "",
    },
  },
  198: {
    java: {
      "dynamic-programming": "",
    },
  },
  199: {
    java: {
      tree: "",
    },
  },
  200: {
    java: {
      "union-find": "",
    },
  },
  201: {
    java: {
      "bit-manipulation": "",
    },
  },
  202: {
    java: {
      "two-pointers":
        "import java.util.HashSet;\n\npublic class Solution {\n    public boolean isHappy(int n) {\n        HashSet<Integer> seen = new HashSet<>();\n\n        while (n != 1 && !seen.contains(n)) {\n            seen.add(n);\n            n = getNextNumber(n);\n        }\n\n        return n == 1;\n    }\n\n    private int getNextNumber(int n) {\n        int sum = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            sum += digit * digit;\n            n /= 10;\n        }\n        return sum;\n    }\n}\n",
    },
  },
  203: {
    java: {
      recursion: "",
    },
  },
  204: {
    java: {
      "number-theory": "",
    },
  },
  205: {
    java: {
      "hash-table": "",
    },
  },
  206: {
    java: {
      recursion: "",
    },
  },
  207: {
    java: {
      "topological-sort": "",
    },
  },
  208: {
    java: {
      trie: "",
    },
  },
  209: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        int n = nums.length;\n        int minLength = Integer.MAX_VALUE;\n        int left = 0;\n        int sum = 0;\n        \n        for (int right = 0; right < n; right++) {\n            sum += nums[right];\n            \n            while (sum >= target) {\n                minLength = Math.min(minLength, right - left + 1);\n                sum -= nums[left];\n                left++;\n            }\n        }\n        \n        return (minLength == Integer.MAX_VALUE) ? 0 : minLength;\n    }\n}\n",
    },
  },
  210: {
    java: {
      "topological-sort": "",
    },
  },
  211: {
    java: {
      trie: "",
    },
  },
  212: {
    java: {
      matrix: "",
    },
  },
  213: {
    java: {
      "dynamic-programming": "",
    },
  },
  214: {
    java: {
      "rolling-hash": "",
    },
  },
  215: {
    java: {
      quickselect:
        "public class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        int left = 0, right = nums.length - 1;\n        Random rand = new Random();\n        while (true) {\n            int pivot_index = left + rand.nextInt(right - left + 1);\n            int new_pivot_index = partition(nums, left, right, pivot_index);\n            if (new_pivot_index == nums.length - k) {\n                return nums[new_pivot_index];\n            } else if (new_pivot_index > nums.length - k) {\n                right = new_pivot_index - 1;\n            } else {\n                left = new_pivot_index + 1;\n            }\n        }\n    }\n\n    private int partition(int[] nums, int left, int right, int pivot_index) {\n        int pivot = nums[pivot_index];\n        swap(nums, pivot_index, right);\n        int stored_index = left;\n        for (int i = left; i < right; i++) {\n            if (nums[i] < pivot) {\n                swap(nums, i, stored_index);\n                stored_index++;\n            }\n        }\n        swap(nums, right, stored_index);\n        return stored_index;\n    }\n\n    private void swap(int[] nums, int i, int j) {\n        int temp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = temp;\n    }\n}",
      "heap-(priority-queue)":
        "class Solution {\n  public int findKthLargest(int[] nums, int k) {\n    Queue<Integer> minHeap = new PriorityQueue<>();\n\n    for (final int num : nums) {\n      minHeap.offer(num);\n      while (minHeap.size() > k)\n        minHeap.poll();\n    }\n\n    return minHeap.peek();\n  }\n}",
    },
  },
  216: {
    java: {
      backtracking: "",
    },
  },
  217: {
    java: {
      sorting: "",
    },
  },
  218: {
    java: {
      "line-sweep":
        "import java.util.*;\n\nclass Solution {\n    public List<List<Integer>> getSkyline(int[][] buildings) {\n        List<List<Integer>> result = new ArrayList<>();\n        List<int[]> heights = new ArrayList<>();\n        \n        // Step 1: Collect Events\n        for (int[] building : buildings) {\n            heights.add(new int[]{building[0], -building[2]}); // start event\n            heights.add(new int[]{building[1], building[2]});  // end event\n        }\n        \n        // Step 2: Sort Events\n        Collections.sort(heights, (a, b) -> {\n            if (a[0] != b[0]) {\n                return a[0] - b[0];\n            }\n            return a[1] - b[1];\n        });\n        \n        // Step 3: Process Events\n        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> b - a);\n        pq.offer(0);\n        int prevHeight = 0;\n        \n        for (int[] h : heights) {\n            if (h[1] < 0) {\n                pq.offer(-h[1]); // start event\n            } else {\n                pq.remove(h[1]); // end event\n            }\n            int currHeight = pq.peek();\n            if (prevHeight != currHeight) {\n                result.add(Arrays.asList(h[0], currHeight));\n                prevHeight = currHeight;\n            }\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  219: {
    java: {
      "sliding-window":
        "import java.util.HashSet;\n\npublic class Solution {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        if (nums == null || nums.length == 0 || k <= 0) {\n            return false;\n        }\n        \n        HashSet<Integer> set = new HashSet<>();\n        \n        for (int i = 0; i < nums.length; i++) {\n            if (set.contains(nums[i])) {\n                return true;\n            }\n            \n            set.add(nums[i]);\n            \n            if (set.size() > k) {\n                set.remove(nums[i - k]);\n            }\n        }\n        \n        return false;\n    }\n}\n",
    },
  },
  220: {
    java: {
      "bucket-sort":
        "import java.util.*;\n\npublic class Solution {\n    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {\n        if (k <= 0 || t < 0) {\n            return false;\n        }\n\n        Map<Long, Long> bucketMap = new HashMap<>();\n        long bucketSize = (long) t + 1;\n\n        for (int i = 0; i < nums.length; i++) {\n            long num = (long) nums[i];\n            long bucket = getBucket(num, bucketSize);\n\n            if (bucketMap.containsKey(bucket)) {\n                return true;\n            }\n\n            if (bucketMap.containsKey(bucket - 1) && Math.abs(num - bucketMap.get(bucket - 1)) < bucketSize) {\n                return true;\n            }\n            if (bucketMap.containsKey(bucket + 1) && Math.abs(num - bucketMap.get(bucket + 1)) < bucketSize) {\n                return true;\n            }\n\n            bucketMap.put(bucket, num);\n            if (i >= k) {\n                bucketMap.remove(getBucket((long) nums[i - k], bucketSize));\n            }\n        }\n\n        return false;\n    }\n\n    private long getBucket(long num, long bucketSize) {\n        return num < 0 ? (num + 1) / bucketSize - 1 : num / bucketSize;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums1 = { 1, 2, 3, 1 };\n        int k1 = 3, t1 = 0;\n        System.out.println(solution.containsNearbyAlmostDuplicate(nums1, k1, t1)); // Output: true\n\n        int[] nums2 = { 1, 0, 1, 1 };\n        int k2 = 1, t2 = 2;\n        System.out.println(solution.containsNearbyAlmostDuplicate(nums2, k2, t2)); // Output: true\n\n        int[] nums3 = { 1, 5, 9, 1, 5, 9 };\n        int k3 = 2, t3 = 3;\n        System.out.println(solution.containsNearbyAlmostDuplicate(nums3, k3, t3)); // Output: false\n    }\n}\n",
      "sliding-window":
        "import java.util.TreeSet;\n\npublic class Solution {\n    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {\n        if (nums == null || nums.length == 0 || k <= 0 || t < 0) {\n            return false;\n        }\n        \n        TreeSet<Long> set = new TreeSet<>();\n        \n        for (int i = 0; i < nums.length; i++) {\n            long num = nums[i];\n            \n            Long floor = set.floor(num + t);\n            if (floor != null && floor >= num - t) {\n                return true;\n            }\n            \n            set.add(num);\n            \n            if (set.size() > k) {\n                set.remove((long) nums[i - k]);\n            }\n        }\n        \n        return false;\n    }\n}\n",
    },
  },
  221: {
    java: {
      matrix: "",
    },
  },
  222: {
    java: {
      tree: "",
    },
  },
  223: {
    java: {
      geometry: "",
    },
  },
  224: {
    java: {
      stack:
        "import java.util.Stack;\n\npublic class Solution {\n    public int calculate(String s) {\n        Stack<Integer> stack = new Stack<>();\n        int result = 0;\n        int number = 0;\n        int sign = 1; \n\n        for (int i = 0; i < s.length(); i++) {\n            char c = s.charAt(i);\n\n            if (Character.isDigit(c)) {\n                number = number * 10 + (c - '0');\n            } else if (c == '+') {\n                result += sign * number;\n                number = 0;\n                sign = 1;\n            } else if (c == '-') {\n                result += sign * number;\n                number = 0;\n                sign = -1;\n            } else if (c == '(') {\n                stack.push(result);\n                stack.push(sign);\n                result = 0;\n                sign = 1;\n            } else if (c == ')') {\n                result += sign * number;\n                number = 0;\n                result *= stack.pop();\n                result += stack.pop();\n            }\n        }\n\n        if (number != 0) {\n            result += sign * number;\n        }\n\n        return result;\n    }\n}\n",
    },
  },
  225: {
    java: {
      queue:
        'import java.util.LinkedList;\nimport java.util.Queue;\n\nclass MyStack {\n\n    private Queue<Integer> queue1;\n    private Queue<Integer> queue2;\n\n    public MyStack() {\n        queue1 = new LinkedList<>();\n        queue2 = new LinkedList<>();\n    }\n    \n    public void push(int x) {\n        queue2.offer(x);\n        while (!queue1.isEmpty()) {\n            queue2.offer(queue1.poll());\n        }\n        Queue<Integer> temp = queue1;\n        queue1 = queue2;\n        queue2 = temp;\n    }\n    \n    public int pop() {\n        if (queue1.isEmpty()) {\n            throw new RuntimeException("Stack is empty");\n        }\n        return queue1.poll();\n    }\n    \n    public int top() {\n        if (queue1.isEmpty()) {\n            throw new RuntimeException("Stack is empty");\n        }\n        return queue1.peek();\n    }\n    \n    public boolean empty() {\n        return queue1.isEmpty();\n    }\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * MyStack obj = new MyStack();\n * obj.push(x);\n * int param_2 = obj.pop();\n * int param_3 = obj.top();\n * boolean param_4 = obj.empty();\n */\n',
    },
  },
  226: {
    java: {
      tree: "",
    },
  },
  227: {
    java: {
      stack: "",
    },
  },
  229: {
    java: {
      counting:
        "class Solution {\n  public List<Integer> majorityElement(int[] nums) {\n    List<Integer> ans = new ArrayList<>();\n    int candidate1 = 0;\n    int candidate2 = 1;  \n    int countSoFar1 = 0;\n    int countSoFar2 = 0; \n\n    for (final int num : nums)\n      if (num == candidate1) {\n        ++countSoFar1;\n      } else if (num == candidate2) {\n        ++countSoFar2;\n      } else if (countSoFar1 == 0) { \n        candidate1 = num;\n        ++countSoFar1;\n      } else if (countSoFar2 == 0) {\n        candidate2 = num;\n        ++countSoFar2;\n      } else { \n        --countSoFar1;\n        --countSoFar2;\n      }\n\n    int count1 = 0;\n    int count2 = 0;\n\n    for (final int num : nums)\n      if (num == candidate1)\n        ++count1;\n      else if (num == candidate2)\n        ++count2;\n\n    if (count1 > nums.length / 3)\n      ans.add(candidate1);\n    if (count2 > nums.length / 3)\n      ans.add(candidate2);\n    return ans;\n  }\n}",
    },
  },
  230: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode() {}\n * TreeNode(int val) { this.val = val; }\n * TreeNode(int val, TreeNode left, TreeNode right) {\n * this.val = val;\n * this.left = left;\n * this.right = right;\n * }\n * }\n */\nclass Solution {\n    private int count = 0;\n    private int result = 0;\n\n    public int kthSmallest(TreeNode root, int k) {\n        inorder(root, k);\n        return result;\n    }\n\n    private void inorder(TreeNode root, int k) {\n        if (root == null) {\n            return;\n        }\n\n        inorder(root.left, k);\n\n        count++;\n        if (count == k) {\n            result = root.val;\n            return;\n        }\n\n        inorder(root.right, k);\n    }\n}",
    },
  },
  231: {
    java: {
      recursion: "",
    },
  },
  232: {
    java: {
      queue:
        "import java.util.Stack;\n\nclass MyQueue {\n\n    private Stack<Integer> stack1;\n    private Stack<Integer> stack2;\n\n    public MyQueue() {\n        stack1 = new Stack<>();\n        stack2 = new Stack<>();\n    }\n    \n    public void push(int x) {\n        stack1.push(x);\n    }\n    \n    public int pop() {\n        if (stack2.isEmpty()) {\n            while (!stack1.isEmpty()) {\n                stack2.push(stack1.pop());\n            }\n        }\n        return stack2.pop();\n    }\n    \n    public int peek() {\n        if (stack2.isEmpty()) {\n            while (!stack1.isEmpty()) {\n                stack2.push(stack1.pop());\n            }\n        }\n        return stack2.peek();\n    }\n    \n    public boolean empty() {\n        return stack1.isEmpty() && stack2.isEmpty();\n    }\n}\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * MyQueue obj = new MyQueue();\n * obj.push(x);\n * int param_2 = obj.pop();\n * int param_3 = obj.peek();\n * boolean param_4 = obj.empty();\n */\n",
    },
  },
  233: {
    java: {
      "dynamic-programming": "",
    },
  },
  234: {
    java: {
      "two-pointers": "",
    },
  },
  235: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode(int x) { val = x; }\n * }\n */\n\npublic class Solution {\n\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if (root == null) {\n            return null;\n        }\n\n        if (p.val < root.val && q.val < root.val) {\n            return lowestCommonAncestor(root.left, p, q);\n        } else if (p.val > root.val && q.val > root.val) {\n            return lowestCommonAncestor(root.right, p, q);\n        } else {\n            return root;\n        }\n    }\n\n}\n",
    },
  },
  236: {
    java: {
      tree: "",
    },
  },
  237: {
    java: {
      "linked-list": "",
    },
  },
  238: {
    java: {
      "prefix-sum": "",
    },
  },
  239: {
    java: {
      "monotonic-queue":
        "import java.util.*;\n\nclass Solution {\n    public int[] maxSlidingWindow(int[] nums, int k) {\n        int n = nums.length;\n        if (n * k == 0) return new int[0]; \n        if (k == 1) return nums; \n        Deque<Integer> deque = new LinkedList<>();\n        int[] result = new int[n - k + 1]; \n        for (int i = 0; i < n; i++) {\n            while (!deque.isEmpty() && deque.peek() < i - k + 1) {\n                deque.poll();\n            }\n            while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) {\n                deque.pollLast();\n            }\n            deque.offer(i); \n            if (i - k + 1 >= 0) {\n                result[i - k + 1] = nums[deque.peek()];\n            }\n        }\n        return result;\n    }\n}\n",
    },
  },
  240: {
    java: {
      matrix: "",
    },
  },
  241: {
    java: {
      "dynamic-programming": "",
    },
  },
  242: {
    java: {
      sorting: "",
    },
  },
  243: {
    java: {
      string: "",
    },
  },
  244: {
    java: {
      "two-pointers": "",
    },
  },
  245: {
    java: {
      string: "",
    },
  },
  246: {
    java: {
      "two-pointers": "",
    },
  },
  247: {
    java: {
      recursion: "",
    },
  },
  248: {
    java: {
      recursion: "",
    },
  },
  249: {
    java: {
      "hash-table": "",
    },
  },
  250: {
    java: {
      tree: "",
    },
  },
  251: {
    java: {
      iterator:
        "class Vector2D {\n    private int i;\n    private int j;\n    private int[][] vec;\n\n    public Vector2D(int[][] vec) {\n        this.vec = vec;\n    }\n\n    public int next() {\n        forward();\n        return vec[i][j++];\n    }\n\n    public boolean hasNext() {\n        forward();\n        return i < vec.length;\n    }\n\n    private void forward() {\n        while (i < vec.length && j >= vec[i].length) {\n            ++i;\n            j = 0;\n        }\n    }\n}\n\n/**\n * Your Vector2D object will be instantiated and called as such:\n * Vector2D obj = new Vector2D(vec);\n * int param_1 = obj.next();\n * boolean param_2 = obj.hasNext();\n */",
    },
  },
  252: {
    java: {
      sorting: "",
    },
  },
  253: {
    java: {
      "two-pointers": "",
    },
  },
  254: {
    java: {
      backtracking: "",
    },
  },
  255: {
    java: {
      "binary-search-tree":
        "class Solution {\n    public boolean verifyPreorder(int[] preorder) {\n        Deque<Integer> stack = new ArrayDeque<>();\n        int last = Integer.MIN_VALUE;\n        for (int x : preorder) {\n            if (x < last) {\n                return false;\n            }\n            while (!stack.isEmpty() && stack.peek() < x) {\n                last = stack.poll();\n            }\n            stack.push(x);\n        }\n        return true;\n    }\n}",
    },
  },
  256: {
    java: {
      "dynamic-programming": "",
    },
  },
  257: {
    java: {
      tree: "",
    },
  },
  258: {
    java: {
      "number-theory": "",
    },
  },
  259: {
    java: {
      "two-pointers": "",
    },
  },
  260: {
    java: {
      "bit-manipulation": "",
    },
  },
  261: {
    java: {
      "union-find": "",
    },
  },
  262: {
    java: {
      database: "",
    },
  },
  263: {
    java: {
      math: "",
    },
  },
  264: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  265: {
    java: {
      "dynamic-programming": "",
    },
  },
  266: {
    java: {
      "bit-manipulation": "",
    },
  },
  267: {
    java: {
      backtracking: "",
    },
  },
  268: {
    java: {
      "bit-manipulation": "",
    },
  },
  269: {
    java: {
      "topological-sort": "",
    },
  },
  270: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int closestValue(TreeNode root, double target) {\n        int ans = root.val;\n        double max = Double.MAX_VALUE;\n        while (root != null) {\n            double t = Math.abs(root.val - target);\n            if (t < max || (t == max && root.val < ans)) {\n                max = t;\n                ans = root.val;\n            }\n            if (root.val > target) {\n                root = root.left;\n            } else {\n                root = root.right;\n            }\n        }\n        return ans;\n    }\n}",
    },
  },
  271: {
    java: {
      design: "",
    },
  },
  272: {
    java: {
      "two-pointers":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private List<Integer> ans;\n    private double target;\n    private int k;\n\n    public List<Integer> closestKValues(TreeNode root, double target, int k) {\n        ans = new LinkedList<>();\n        this.target = target;\n        this.k = k;\n        dfs(root);\n        return ans;\n    }\n\n    private void dfs(TreeNode root) {\n        if (root == null) {\n            return;\n        }\n        dfs(root.left);\n        if (ans.size() < k) {\n            ans.add(root.val);\n        } else {\n            if (Math.abs(root.val - target) >= Math.abs(ans.get(0) - target)) {\n                return;\n            }\n            ans.remove(0);\n            ans.add(root.val);\n        }\n        dfs(root.right);\n    }\n}",
    },
  },
  273: {
    java: {
      recursion: "",
    },
  },
  274: {
    java: {
      "counting-sort":
        "class Solution {\n    public int hIndex(int[] citations) {\n        int n = citations.length;\n        int[] count = new int[n + 1];\n        \n        for (int c : citations) {\n            if (c >= n) {\n                count[n]++;\n            } else {\n                count[c]++;\n            }\n        }\n        \n        // Calculate the H-Index\n        int total = 0;\n        for (int i = n; i >= 0; i--) {\n            total += count[i];\n            if (total >= i) {\n                return i;\n            }\n        }\n        \n        return 0;\n    }\n}\n",
    },
  },
  276: {
    java: {
      "dynamic-programming": "",
    },
  },
  277: {
    java: {
      "two-pointers": "",
    },
  },
  278: {
    java: {
      interactive: "",
    },
  },
  279: {
    java: {
      "dynamic-programming": "",
    },
  },
  280: {
    java: {
      greedy: "",
    },
  },
  281: {
    java: {
      iterator:
        "public class ZigzagIterator {\n    private int curr;\n    private int size;\n    private List<Integer> indexes = new ArrayList<>();\n    private List<List<Integer>> vectors = new ArrayList<>();\n\n    public ZigzagIterator(List<Integer> v1, List<Integer> v2) {\n        curr = 0;\n        size = 2;\n        indexes.add(0);\n        indexes.add(0);\n        vectors.add(v1);\n        vectors.add(v2);\n    }\n\n    public int next() {\n        List<Integer> vector = vectors.get(curr);\n        int index = indexes.get(curr);\n        int res = vector.get(index);\n        indexes.set(curr, index + 1);\n        curr = (curr + 1) % size;\n        return res;\n    }\n\n    public boolean hasNext() {\n        int start = curr;\n        while (indexes.get(curr) == vectors.get(curr).size()) {\n            curr = (curr + 1) % size;\n            if (start == curr) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n\n/**\n * Your ZigzagIterator object will be instantiated and called as such:\n * ZigzagIterator i = new ZigzagIterator(v1, v2);\n * while (i.hasNext()) v[dp()] = i.next();\n */",
    },
  },
  282: {
    java: {
      backtracking: "",
    },
  },
  283: {
    java: {
      "two-pointers":
        "public class Solution {\n    public void moveZeroes(int[] nums) {\n        int slow = 0;\n\n        for (int fast = 0; fast < nums.length; fast++) {\n            if (nums[fast] != 0) {\n                int temp = nums[slow];\n                nums[slow] = nums[fast];\n                nums[fast] = temp;\n                slow++;\n            }\n        }\n    }\n}\n",
    },
  },
  284: {
    java: {
      iterator:
        "import java.util.*;\n\nclass PeekingIterator implements Iterator<Integer> {\n    private Iterator<Integer> iterator;\n    private Integer nextElement;\n    private boolean hasNext;\n\n    public PeekingIterator(Iterator<Integer> iterator) {\n        this.iterator = iterator;\n        if (iterator.hasNext()) {\n            nextElement = iterator.next();\n            hasNext = true;\n        } else {\n            hasNext = false;\n        }\n    }\n\n    public Integer peek() {\n        return nextElement;\n    }\n    \n    @Override\n    public Integer next() {\n        if (!hasNext) {\n            throw new NoSuchElementException();\n        }\n        Integer result = nextElement;\n        if (iterator.hasNext()) {\n            nextElement = iterator.next();\n        } else {\n            hasNext = false;\n        }\n        return result;\n    }\n    \n    @Override\n    public boolean hasNext() {\n        return hasNext;\n    }\n}\n",
    },
  },
  285: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass Solution {\n    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {\n        TreeNode ans = null;\n        while (root != null) {\n            if (root.val > p.val) {\n                ans = root;\n                root = root.left;\n            } else {\n                root = root.right;\n            }\n        }\n        return ans;\n    }\n}",
    },
  },
  286: {
    java: {
      matrix: "",
    },
  },
  287: {
    java: {
      "two-pointers":
        "public class Solution {\n    public int findDuplicate(int[] nums) {\n        int slow = nums[0];\n        int fast = nums[nums[0]];\n        \n        while (slow != fast) {\n            slow = nums[slow];\n            fast = nums[nums[fast]];\n        }\n        \n        fast = 0;\n        while (slow != fast) {\n            slow = nums[slow];\n            fast = nums[fast];\n        }\n        \n        return slow;\n    }\n}\n",
    },
  },
  288: {
    java: {
      design: "",
    },
  },
  289: {
    java: {
      matrix: "",
    },
  },
  290: {
    java: {
      "hash-table": "",
    },
  },
  291: {
    java: {
      backtracking: "",
    },
  },
  292: {
    java: {
      brainteaser:
        "class Solution {\n    public boolean canWinNim(int n) {\n        return n % 4 != 0;\n    }\n}\n",
    },
  },
  293: {
    java: {
      string: "",
    },
  },
  294: {
    java: {
      "game-theory": "",
    },
  },
  295: {
    java: {
      "two-pointers": "",
    },
  },
  296: {
    java: {
      matrix: "",
    },
  },
  297: {
    java: {
      tree: "",
    },
  },
  298: {
    java: {
      tree: "",
    },
  },
  299: {
    java: {
      counting: "",
    },
  },
  300: {
    java: {
      "dynamic-programming": "",
    },
  },
  301: {
    java: {
      backtracking: "",
    },
  },
  302: {
    java: {
      matrix: "",
    },
  },
  303: {
    java: {
      "prefix-sum": "",
    },
  },
  304: {
    java: {
      matrix: "",
    },
  },
  305: {
    java: {
      "union-find": "",
    },
  },
  306: {
    java: {
      backtracking: "",
    },
  },
  307: {
    java: {
      design: "",
    },
  },
  308: {
    java: {
      matrix: "",
    },
  },
  309: {
    java: {
      "dynamic-programming": "",
    },
  },
  310: {
    java: {
      "topological-sort": "",
    },
  },
  311: {
    java: {
      matrix: "",
    },
  },
  312: {
    java: {
      "dynamic-programming": "",
    },
  },
  313: {
    java: {
      "dynamic-programming": "",
    },
  },
  314: {
    java: {
      tree: "",
    },
  },
  315: {
    java: {
      "merge-sort":
        "class Solution {\n    public List<Integer> countSmaller(int[] nums) {\n        int n = nums.length;\n        int[] countSmaller = new int[n];\n        int[] indices = new int[n];\n        for (int i = 0; i < n; i++) {\n            indices[i] = i;\n        }\n        mergeSort(nums, indices, countSmaller, 0, n - 1);\n        List<Integer> result = new ArrayList<>();\n        for (int count : countSmaller) {\n            result.add(count);\n        }\n        return result;\n    }\n    \n    private void mergeSort(int[] nums, int[] indices, int[] countSmaller, int start, int end) {\n        if (start >= end) {\n            return;\n        }\n        int mid = start + (end - start) / 2;\n        mergeSort(nums, indices, countSmaller, start, mid);\n        mergeSort(nums, indices, countSmaller, mid + 1, end);\n        merge(nums, indices, countSmaller, start, mid, end);\n    }\n    \n    private void merge(int[] nums, int[] indices, int[] countSmaller, int start, int mid, int end) {\n        int leftIndex = start;\n        int rightIndex = mid + 1;\n        int rightCount = 0;\n        int[] newIndices = new int[end - start + 1];\n        int newIndex = 0;\n        \n        while (leftIndex <= mid && rightIndex <= end) {\n            if (nums[indices[rightIndex]] < nums[indices[leftIndex]]) {\n                newIndices[newIndex] = indices[rightIndex];\n                rightCount++;\n                rightIndex++;\n            } else {\n                newIndices[newIndex] = indices[leftIndex];\n                countSmaller[indices[leftIndex]] += rightCount;\n                leftIndex++;\n            }\n            newIndex++;\n        }\n        \n        while (leftIndex <= mid) {\n            newIndices[newIndex] = indices[leftIndex];\n            countSmaller[indices[leftIndex]] += rightCount;\n            leftIndex++;\n            newIndex++;\n        }\n        \n        while (rightIndex <= end) {\n            newIndices[newIndex] = indices[rightIndex];\n            rightIndex++;\n            newIndex++;\n        }\n        \n        System.arraycopy(newIndices, 0, indices, start, end - start + 1);\n    }\n}\n",
    },
  },
  316: {
    java: {
      "monotonic-stack":
        "import java.util.Stack;\n\nclass Solution {\n    public String removeDuplicateLetters(String s) {\n        int[] count = new int[26];\n        for (char c : s.toCharArray()) {\n            count[c - 'a']++;\n        }\n\n        boolean[] visited = new boolean[26];\n        Stack<Character> stack = new Stack<>();\n\n        for (char c : s.toCharArray()) {\n            count[c - 'a']--;\n\n            if (visited[c - 'a']) {\n                continue;\n            }\n\n            while (!stack.isEmpty() && stack.peek() > c\n                    && count[stack.peek() - 'a'] > 0) {\n                visited[stack.pop() - 'a'] = false;\n            }\n\n            stack.push(c);\n            visited[c - 'a'] = true;\n        }\n\n        StringBuilder result = new StringBuilder();\n        while (!stack.isEmpty()) {\n            result.insert(0, stack.pop());\n        }\n\n        return result.toString();\n    }\n}\n",
    },
  },
  317: {
    java: {
      matrix: "",
    },
  },
  318: {
    java: {
      "bit-manipulation": "",
    },
  },
  319: {
    java: {
      brainteaser:
        "class Solution {\n    public int bulbSwitch(int n) {\n        return (int) Math.sqrt(n);\n    }\n}\n",
    },
  },
  320: {
    java: {
      backtracking: "",
    },
  },
  321: {
    java: {
      "two-pointers":
        "class Solution {\n    public int[] maxNumber(int[] nums1, int[] nums2, int k) {\n        int n = nums1.length;\n        int m = nums2.length;\n        int[] maxNum = new int[k];\n        \n        for (int i = Math.max(0, k - m); i <= k && i <= n; ++i) {\n            int[] candidate = merge(maxSubsequence(nums1, i), maxSubsequence(nums2, k - i), k);\n            if (greater(candidate, 0, maxNum, 0)) {\n                maxNum = candidate;\n            }\n        }\n        \n        return maxNum;\n    }\n    \n    private int[] maxSubsequence(int[] nums, int k) {\n        int n = nums.length;\n        int[] stack = new int[k];\n        int top = -1;\n        int remain = n - k; // number of elements to remove\n        for (int num : nums) {\n            while (top >= 0 && stack[top] < num && remain > 0) {\n                top--;\n                remain--;\n            }\n            if (top < k - 1) {\n                stack[++top] = num;\n            } else {\n                remain--; // skip num since top == k - 1\n            }\n        }\n        return stack;\n    }\n    \n    private int[] merge(int[] nums1, int[] nums2, int k) {\n        int[] result = new int[k];\n        int i = 0, j = 0;\n        for (int r = 0; r < k; r++) {\n            if (greater(nums1, i, nums2, j)) {\n                result[r] = nums1[i++];\n            } else {\n                result[r] = nums2[j++];\n            }\n        }\n        return result;\n    }\n    \n    private boolean greater(int[] nums1, int i, int[] nums2, int j) {\n        while (i < nums1.length && j < nums2.length && nums1[i] == nums2[j]) {\n            i++;\n            j++;\n        }\n        return j == nums2.length || (i < nums1.length && nums1[i] > nums2[j]);\n    }\n}\n",
    },
  },
  322: {
    java: {
      "dynamic-programming": "",
    },
  },
  323: {
    java: {
      "union-find": "",
    },
  },
  324: {
    java: {
      quickselect:
        "import java.util.Arrays;\n\npublic class Solution {\n    public void wiggleSort(int[] nums) {\n        int n = nums.length;\n        \n        int median = quickselect(nums, 0, n - 1, n / 2);\n        \n        // Three-way partitioning: Elements less than median go to the left,\n        // Elements equal to median go to the middle, Elements greater than median go to the right\n        int left = 0, right = n - 1, i = 0;\n        while (i <= right) {\n            if (nums[newIndex(i, n)] > median) {\n                swap(nums, newIndex(left++, n), newIndex(i++, n));\n            } else if (nums[newIndex(i, n)] < median) {\n                swap(nums, newIndex(right--, n), newIndex(i, n));\n            } else {\n                i++;\n            }\n        }\n    }\n    \n    // Quickselect to find the k-th smallest element\n    private int quickselect(int[] nums, int left, int right, int k) {\n        while (left < right) {\n            int pivot = partition(nums, left, right);\n            if (pivot == k) {\n                return nums[k];\n            } else if (pivot < k) {\n                left = pivot + 1;\n            } else {\n                right = pivot - 1;\n            }\n        }\n        return nums[left];\n    }\n    \n    private int partition(int[] nums, int left, int right) {\n        int pivot = nums[right];\n        int i = left;\n        for (int j = left; j < right; j++) {\n            if (nums[j] < pivot) {\n                swap(nums, i++, j);\n            }\n        }\n        swap(nums, i, right);\n        return i;\n    }\n    \n    private int newIndex(int index, int n) {\n        return (1 + 2 * index) % (n | 1);\n    }\n    \n    private void swap(int[] nums, int i, int j) {\n        int temp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = temp;\n    }\n}\n",
    },
  },
  325: {
    java: {
      "prefix-sum": "",
    },
  },
  326: {
    java: {
      recursion: "",
    },
  },
  327: {
    java: {
      "merge-sort":
        "class Solution {\n    public int countRangeSum(int[] nums, int lower, int upper) {\n        long[] prefixSum = new long[nums.length + 1];\n        for (int i = 0; i < nums.length; i++) {\n            prefixSum[i + 1] = prefixSum[i] + nums[i];\n        }\n        return mergeSortAndCount(prefixSum, 0, prefixSum.length - 1, lower, upper);\n    }\n    \n    private int mergeSortAndCount(long[] prefixSum, int left, int right, int lower, int upper) {\n        if (left >= right) return 0;\n        \n        int mid = left + (right - left) / 2;\n        int count = 0;\n        \n        count += mergeSortAndCount(prefixSum, left, mid, lower, upper);\n        count += mergeSortAndCount(prefixSum, mid + 1, right, lower, upper);\n        count += mergeAndCount(prefixSum, left, mid, right, lower, upper);\n        \n        return count;\n    }\n    \n    private int mergeAndCount(long[] prefixSum, int left, int mid, int right, int lower, int upper) {\n        int count = 0;\n        int i = left;\n        int j = mid + 1;\n        int k = mid + 1;\n        \n        while (i <= mid) {\n            while (j <= right && prefixSum[j] - prefixSum[i] < lower) j++;\n            while (k <= right && prefixSum[k] - prefixSum[i] <= upper) k++;\n            count += (k - j);\n            i++;\n        }\n        \n        long[] sorted = new long[right - left + 1];\n        int p1 = left, p2 = mid + 1, p = 0;\n        while (p1 <= mid || p2 <= right) {\n            if (p2 > right || (p1 <= mid && prefixSum[p1] <= prefixSum[p2])) {\n                sorted[p++] = prefixSum[p1++];\n            } else {\n                sorted[p++] = prefixSum[p2++];\n            }\n        }\n        \n        System.arraycopy(sorted, 0, prefixSum, left, sorted.length);\n        \n        return count;\n    }\n}\n",
      "binary-indexed-tree":
        "import java.util.*;\n\npublic class Solution {\n    public int countRangeSum(int[] nums, int lower, int upper) {\n        if (nums == null || nums.length == 0) {\n            return 0;\n        }\n\n        int n = nums.length;\n        long[] prefixSums = new long[n + 1];\n        for (int i = 0; i < n; i++) {\n            prefixSums[i + 1] = prefixSums[i] + nums[i];\n        }\n\n        // Create a sorted list of all possible prefix sums.\n        Set<Long> allSums = new TreeSet<>();\n        for (long sum : prefixSums) {\n            allSums.add(sum);\n            allSums.add(sum - lower);\n            allSums.add(sum - upper);\n        }\n\n        // Map each prefix sum to an index for use in the Fenwick Tree.\n        Map<Long, Integer> sumToIndex = new HashMap<>();\n        int index = 0;\n        for (long sum : allSums) {\n            sumToIndex.put(sum, index++);\n        }\n\n        FenwickTree fenwickTree = new FenwickTree(sumToIndex.size());\n        int count = 0;\n        for (long sum : prefixSums) {\n            int left = sumToIndex.get(sum - upper);\n            int right = sumToIndex.get(sum - lower);\n            count += fenwickTree.query(right) - fenwickTree.query(left - 1);\n            fenwickTree.update(sumToIndex.get(sum), 1);\n        }\n\n        return count;\n    }\n\n    class FenwickTree {\n        private int[] tree;\n        \n        public FenwickTree(int size) {\n            tree = new int[size + 1];\n        }\n        \n        public void update(int index, int delta) {\n            index++;\n            while (index < tree.length) {\n                tree[index] += delta;\n                index += index & -index;\n            }\n        }\n        \n        public int query(int index) {\n            index++;\n            int sum = 0;\n            while (index > 0) {\n                sum += tree[index];\n                index -= index & -index;\n            }\n            return sum;\n        }\n    }\n}\n",
    },
  },
  328: {
    java: {
      "linked-list": "",
    },
  },
  329: {
    java: {
      matrix: "",
    },
  },
  330: {
    java: {
      greedy: "",
    },
  },
  331: {
    java: {
      stack: "",
    },
  },
  332: {
    java: {
      "eulerian-circuit":
        "import java.util.*;\n\npublic class Solution {\n\n    public List<String> findItinerary(List<List<String>> tickets) {\n              Map<String, PriorityQueue<String>> graph = new HashMap<>();\n              for (List<String> ticket : tickets) {\n                  graph.computeIfAbsent(ticket.get(0), k -> new PriorityQueue<>()).add(ticket.get(1));\n              }\n      \n              LinkedList<String> itinerary = new LinkedList<>();\n              // dfs('JFK', graph, itinerary); or else use stack\n      \n              Stack<String> stack = new Stack<>();\n              stack.push('JFK');\n      \n              while (!stack.isEmpty()) {\n                  String currentAirport = stack.peek();\n                  PriorityQueue<String> nextAirports = graph.get(currentAirport);\n      \n                  // If the current airport has any destinations left to visit\n                  if (nextAirports != null && !nextAirports.isEmpty()) {\n                      stack.push(nextAirports.poll());\n                  } else {\n                      // If no destinations left, add to itinerary and backtrack\n                      itinerary.addFirst(stack.pop());\n                  }\n              }\n      \n              return itinerary;\n          }\n\n    private void dfs(String airport, Map<String, PriorityQueue<String>> graph, LinkedList<String> itinerary) {\n        PriorityQueue<String> nextAirports = graph.get(airport);\n        while (nextAirports != null && !nextAirports.isEmpty()) {\n            dfs(nextAirports.poll(), graph, itinerary);\n        }\n        itinerary.addFirst(airport);\n    }\n\n    public static void main(String[] args) {\n              Solution solution = new Solution();\n              List<List<String>> tickets = Arrays.asList(\n                      Arrays.asList('MUC', 'LHR'),\n                      Arrays.asList('JFK', 'MUC'),\n                      Arrays.asList('SFO', 'SJC'),\n                      Arrays.asList('LHR', 'SFO'));\n              List<String> itinerary = solution.findItinerary(tickets);\n              System.out.println(itinerary); // Output: [JFK, MUC, LHR, SFO, SJC]\n          }\n}\n",
    },
  },
  333: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private int ans;\n\n    public int largestBSTSubtree(TreeNode root) {\n        ans = 0;\n        dfs(root);\n        return ans;\n    }\n\n    private int[] dfs(TreeNode root) {\n        if (root == null) {\n            return new int[] {Integer.MAX_VALUE, Integer.MIN_VALUE, 0};\n        }\n        int[] left = dfs(root.left);\n        int[] right = dfs(root.right);\n        if (left[1] < root.val && root.val < right[0]) {\n            ans = Math.max(ans, left[2] + right[2] + 1);\n            return new int[] {\n                Math.min(root.val, left[0]), Math.max(root.val, right[1]), left[2] + right[2] + 1};\n        }\n        return new int[] {Integer.MIN_VALUE, Integer.MAX_VALUE, 0};\n    }\n}",
    },
  },
  334: {
    java: {
      greedy: "",
    },
  },
  335: {
    java: {
      geometry: "",
    },
  },
  336: {
    java: {
      trie: "",
    },
  },
  337: {
    java: {
      "dynamic-programming": "",
    },
  },
  338: {
    java: {
      "dynamic-programming": "",
    },
  },
  339: {
    java: {
      "breadth-first-search": "",
    },
  },
  340: {
    java: {
      "sliding-window":
        "import java.util.HashMap;\n\npublic class Solution {\n    public int lengthOfLongestSubstringKDistinct(String s, int k) {\n        if (s == null || s.length() == 0 || k == 0) {\n            return 0;\n        }\n        \n        HashMap<Character, Integer> map = new HashMap<>();\n        int left = 0;\n        int maxLength = 0;\n        \n        for (int right = 0; right < s.length(); right++) {\n            char rightChar = s.charAt(right);\n            map.put(rightChar, map.getOrDefault(rightChar, 0) + 1);\n            \n            while (map.size() > k) {\n                char leftChar = s.charAt(left);\n                map.put(leftChar, map.get(leftChar) - 1);\n                if (map.get(leftChar) == 0) {\n                    map.remove(leftChar);\n                }\n                left++;\n            }\n            \n            maxLength = Math.max(maxLength, right - left + 1);\n        }\n        \n        return maxLength;\n    }\n}\n",
    },
  },
  341: {
    java: {
      iterator:
        "public class NestedIterator implements Iterator<Integer> {\n    private Stack<NestedInteger> stack = new Stack<>();\n\n    public NestedIterator(List<NestedInteger> nestedList) {\n        addInteger(nestedList);\n    }\n\n    @Override\n    public Integer next() {\n        return stack.pop().getInteger();\n    }\n\n    @Override\n    public boolean hasNext() {\n        while (!stack.isEmpty() && !stack.peek().isInteger()) {\n          NestedInteger ni = stack.pop();\n            addInteger(ni.getList());\n        }\n        return !stack.isEmpty();\n    }\n\n    private void addInteger(final List<NestedInteger> nestedList) {\n        for (int i = nestedList.size() - 1; i >= 0; --i)\n            stack.push(nestedList.get(i));\n    }\n}\n",
    },
  },
  342: {
    java: {
      recursion: "",
    },
  },
  343: {
    java: {
      "dynamic-programming": "",
    },
  },
  344: {
    java: {
      "two-pointers":
        "public class Solution {\n    public void reverseString(char[] s) {\n        int left = 0;\n        int right = s.length - 1;\n        \n        while (left < right) {\n            char temp = s[left];\n            s[left] = s[right];\n            s[right] = temp;            \n            left++;\n            right--;\n        }\n    }\n}\n",
    },
  },
  345: {
    java: {
      "two-pointers":
        "import java.util.HashSet;\n\npublic class Solution {\n    public String reverseVowels(String s) {\n        char[] chars = s.toCharArray();\n        HashSet<Character> vowels = new HashSet<>();\n        vowels.addAll(Set.of('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'));\n\n        int left = 0, right = chars.length - 1;\n        while (left < right) {\n            while (left < right && !vowels.contains(chars[left])) {\n                left++;\n            }\n            while (left < right && !vowels.contains(chars[right])) {\n                right--;\n            }\n            if (left < right) {\n                char temp = chars[left];\n                chars[left] = chars[right];\n                chars[right] = temp;\n                left++;\n                right--;\n            }\n        }\n\n        return new String(chars);\n    }\n}\n",
    },
  },
  346: {
    java: {
      queue: "",
    },
  },
  347: {
    java: {
      "bucket-sort":
        "import java.util.*;\n\npublic class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        Map<Integer, Integer> frequencyMap = new HashMap<>();\n        for (int num : nums) {\n            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);\n        }\n\n        List<Integer>[] buckets = new List[nums.length + 1];\n        for (int key : frequencyMap.keySet()) {\n            int frequency = frequencyMap.get(key);\n            if (buckets[frequency] == null) {\n                buckets[frequency] = new ArrayList<>();\n            }\n            buckets[frequency].add(key);\n        }\n\n        // Step 3: Collect the top k frequent elements\n        List<Integer> result = new ArrayList<>();\n        for (int i = buckets.length - 1; i >= 0 && result.size() < k; i--) {\n            if (buckets[i] != null) {\n                result.addAll(buckets[i]);\n            }\n        }\n\n        int[] topK = new int[k];\n        for (int i = 0; i < k; i++) {\n            topK[i] = result.get(i);\n        }\n        \n        return topK;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums1 = {1, 1, 1, 2, 2, 3};\n        int k1 = 2;\n        System.out.println(Arrays.toString(solution.topKFrequent(nums1, k1))); // Output: [1, 2]\n\n        int[] nums2 = {1};\n        int k2 = 1;\n        System.out.println(Arrays.toString(solution.topKFrequent(nums2, k2))); // Output: [1]\n    }\n}\n",
      quickselect:
        "import java.util.*;\n\npublic class Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        Map<Integer, Integer> frequencyMap = new HashMap<>();\n        for (int num : nums) {\n            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);\n        }\n        \n        List<Integer> uniqueNums = new ArrayList<>(frequencyMap.keySet());\n        int[] result = new int[k];\n        int left = 0, right = uniqueNums.size() - 1;\n        \n        while (left <= right) {\n            int pivotIndex = partition(uniqueNums, frequencyMap, left, right);\n            if (pivotIndex == k - 1) {\n                for (int i = 0; i < k; i++) {\n                    result[i] = uniqueNums.get(i);\n                }\n                break;\n            } else if (pivotIndex < k - 1) {\n                left = pivotIndex + 1;\n            } else {\n                right = pivotIndex - 1;\n            }\n        }\n        \n        return result;\n    }\n    \n    private int partition(List<Integer> nums, Map<Integer, Integer> frequencyMap, int left, int right) {\n        int pivotFreq = frequencyMap.get(nums.get(right));\n        int i = left;\n        for (int j = left; j < right; j++) {\n            if (frequencyMap.get(nums.get(j)) >= pivotFreq) {\n                Collections.swap(nums, i, j);\n                i++;\n            }\n        }\n        Collections.swap(nums, i, right);\n        return i;\n    }\n}\n",
      "heap-(priority-queue)":
        "import java.util.*;\n\nclass Solution {\n    public int[] topKFrequent(int[] nums, int k) {\n        Map<Integer, Integer> frequencyMap = new HashMap<>();\n        for (int num : nums) {\n            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);\n        }\n        \n        PriorityQueue<Map.Entry<Integer, Integer>> heap = new PriorityQueue<>(\n            (a, b) -> a.getValue() - b.getValue()\n        );\n        \n        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {\n            heap.offer(entry);\n            if (heap.size() > k) {\n                heap.poll();\n            }\n        }\n        \n        int[] result = new int[k];\n        for (int i = k - 1; i >= 0; i--) {\n            result[i] = heap.poll().getKey();\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  348: {
    java: {
      matrix: "",
    },
  },
  349: {
    java: {
      "two-pointers":
        "import java.util.*;\n\npublic class Solution {\n    public int[] intersection(int[] nums1, int[] nums2) {\n        Set<Integer> set = new HashSet<>();\n        Set<Integer> intersect = new HashSet<>();\n        \n        for (int num : nums1) {\n            set.add(num);\n        }\n        \n        for (int num : nums2) {\n            if (set.contains(num)) {\n                intersect.add(num);\n            }\n        }\n        \n        int[] result = new int[intersect.size()];\n        int index = 0;\n        for (int num : intersect) {\n            result[index++] = num;\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  350: {
    java: {
      "two-pointers":
        "import java.util.*;\n\npublic class Solution {\n    public int[] intersect(int[] nums1, int[] nums2) {\n        Map<Integer, Integer> map = new HashMap<>();\n        for (int num : nums1) {\n            map.put(num, map.getOrDefault(num, 0) + 1);\n        }\n\n        List<Integer> intersect = new ArrayList<>();\n\n        for (int num : nums2) {\n            if (map.containsKey(num) && map.get(num) > 0) {\n                intersect.add(num);\n                map.put(num, map.get(num) - 1);\n            }\n        }\n\n        int[] result = new int[intersect.size()];\n        int index = 0;\n        for (int num : intersect) {\n            result[index++] = num;\n        }\n\n        return result;\n    }\n}\n",
    },
  },
  351: {
    java: {
      "dynamic-programming": "",
    },
  },
  352: {
    java: {
      "ordered-set": "",
    },
  },
  353: {
    java: {
      queue: "",
    },
  },
  354: {
    java: {
      "dynamic-programming": "",
    },
  },
  355: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  356: {
    java: {
      math: "",
    },
  },
  357: {
    java: {
      "dynamic-programming": "",
    },
  },
  358: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  359: {
    java: {
      "data-stream": "",
    },
  },
  360: {
    java: {
      "two-pointers":
        "class Solution {\n    public int[] sortTransformedArray(int[] nums, int a, int b, int c) {\n        int n = nums.length;\n        int left = 0, right = n - 1, k = a < 0 ? 0 : n - 1;\n        int[] res = new int[n];\n        while (left <= right) {\n            int v1 = fn(a, b, c, nums[left]), v2 = fn(a, b, c, nums[right]);\n            if (a < 0) {\n                if (v1 <= v2) {\n                    res[k] = v1;\n                    ++left;\n                } else {\n                    res[k] = v2;\n                    --right;\n                }\n                ++k;\n            } else {\n                if (v1 >= v2) {\n                    res[k] = v1;\n                    ++left;\n                } else {\n                    res[k] = v2;\n                    --right;\n                }\n                --k;\n            }\n        }\n        return res;\n    }\n\n    private int fn(int a, int b, int c, int x) {\n        return a * x * x + b * x + c;\n    }\n}\n",
    },
  },
  361: {
    java: {
      matrix: "",
    },
  },
  362: {
    java: {
      queue: "",
    },
  },
  363: {
    java: {
      matrix: "",
    },
  },
  364: {
    java: {
      stack: "",
    },
  },
  365: {
    java: {
      "breadth-first-search": "",
    },
  },
  366: {
    java: {
      tree: "",
    },
  },
  367: {
    java: {
      math: "",
    },
  },
  368: {
    java: {
      "dynamic-programming": "",
    },
  },
  369: {
    java: {
      "linked-list": "",
    },
  },
  370: {
    java: {
      "prefix-sum": "",
    },
  },
  371: {
    java: {
      "bit-manipulation": "",
    },
  },
  372: {
    java: {
      "divide-and-conquer": "",
    },
  },
  373: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  374: {
    java: {
      interactive: "",
    },
  },
  375: {
    java: {
      "game-theory": "",
    },
  },
  376: {
    java: {
      "dynamic-programming": "",
    },
  },
  377: {
    java: {
      "dynamic-programming": "",
    },
  },
  378: {
    java: {
      matrix:
        "import java.util.PriorityQueue;\n\nclass Solution {\n    public int kthSmallest(int[][] matrix, int k) {\n        int n = matrix.length;\n        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);\n        \n        for (int j = 0; j < n; j++) {\n            minHeap.offer(new int[]{matrix[0][j], 0, j}); // value, row, col\n        }\n        \n        for (int i = 0; i < k - 1; i++) {\n            int[] current = minHeap.poll();\n            int row = current[1];\n            int col = current[2];\n            \n            if (row < n - 1) {\n                minHeap.offer(new int[]{matrix[row + 1][col], row + 1, col});\n            }\n        }\n        \n        return minHeap.poll()[0];\n    }\n}\n",
    },
  },
  379: {
    java: {
      queue: "",
    },
  },
  380: {
    java: {
      randomized:
        "import java.util.*;\n\nclass RandomizedSet {\n    private List<Integer> nums;\n    private Map<Integer, Integer> pos;\n    private Random rand;\n\n    public RandomizedSet() {\n        nums = new ArrayList<>();\n        pos = new HashMap<>();\n        rand = new Random();\n    }\n\n    public boolean insert(int val) {\n        if (pos.containsKey(val)) {\n            return false;\n        }\n        pos.put(val, nums.size());\n        nums.add(val);\n        return true;\n    }\n\n    public boolean remove(int val) {\n        if (!pos.containsKey(val)) {\n            return false;\n        }\n        int idx = pos.get(val);\n        int lastElement = nums.get(nums.size() - 1);\n        nums.set(idx, lastElement);\n        pos.put(lastElement, idx);\n        nums.remove(nums.size() - 1);\n        pos.remove(val);\n        return true;\n    }\n\n    public int getRandom() {\n        return nums.get(rand.nextInt(nums.size()));\n    }\n}\n/**\n * Your RandomizedSet object will be instantiated and called as such:\n * RandomizedSet obj = new RandomizedSet();\n * boolean param_1 = obj.insert(val);\n * boolean param_2 = obj.remove(val);\n * int param_3 = obj.getRandom();\n */",
    },
  },
  381: {
    java: {
      randomized:
        "import java.util.*;\n\nclass RandomizedCollection {\n    private List<Integer> nums;\n    private Map<Integer, Set<Integer>> pos;\n    private Random rand;\n\n    public RandomizedCollection() {\n        nums = new ArrayList<>();\n        pos = new HashMap<>();\n        rand = new Random();\n    }\n\n    public boolean insert(int val) {\n        if (!pos.containsKey(val)) {\n            pos.put(val, new HashSet<>());\n        }\n        pos.get(val).add(nums.size());\n        nums.add(val);\n        return pos.get(val).size() == 1;\n    }\n\n    public boolean remove(int val) {\n        if (!pos.containsKey(val) || pos.get(val).isEmpty()) {\n            return false;\n        }\n        int idxToRemove = pos.get(val).iterator().next();\n        pos.get(val).remove(idxToRemove);\n        int lastElement = nums.get(nums.size() - 1);\n        nums.set(idxToRemove, lastElement);\n        if (pos.get(lastElement) != null) {\n            pos.get(lastElement).add(idxToRemove);\n            pos.get(lastElement).remove(nums.size() - 1);\n        }\n        nums.remove(nums.size() - 1);\n        if (pos.get(val).isEmpty()) {\n            pos.remove(val);\n        }\n        return true;\n    }\n\n    public int getRandom() {\n        return nums.get(rand.nextInt(nums.size()));\n    }\n}\n",
    },
  },
  382: {
    java: {
      "reservoir-sampling":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nimport java.util.Random;\n\npublic class Solution {\n    private ListNode head;\n    private Random rand;\n\n    public Solution(ListNode head) {\n        this.head = head;\n        this.rand = new Random();\n    }\n\n    /** Returns a random node's value. */\n    public int getRandom() {\n        ListNode current = head;\n        int reservoir = -1; \n        int count = 0;\n\n        while (current != null) {\n            count++;\n            // With probability 1/count, select the current node's value\n            if (rand.nextInt(count) == 0) {\n                reservoir = current.val;\n            }\n            current = current.next;\n        }\n\n        return reservoir;\n    }\n}\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(head);\n * int param_1 = obj.getRandom();\n */",
    },
  },
  383: {
    java: {
      counting: "",
    },
  },
  384: {
    java: {
      randomized:
        "import java.util.Random;\n\nclass Solution {\n    private int[] original;\n    private int[] array;\n    private Random rand;\n\n    public Solution(int[] nums) {\n        original = nums.clone();\n        array = nums.clone();\n        rand = new Random();\n    }\n\n    public int[] reset() {\n        array = original.clone();\n        return array;\n    }\n\n    public int[] shuffle() {\n        for (int i = 0; i < array.length; i++) {\n            int swapIdx = i + rand.nextInt(array.length - i);\n            int temp = array[i];\n            array[i] = array[swapIdx];\n            array[swapIdx] = temp;\n        }\n        return array;\n    }\n}\n\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(nums);\n * int[] param_1 = obj.reset();\n * int[] param_2 = obj.shuffle();\n */",
    },
  },
  385: {
    java: {
      stack: "",
    },
  },
  386: {
    java: {
      trie: "",
    },
  },
  387: {
    java: {
      queue:
        "import java.util.HashMap;\n\npublic class Solution {\n    public int firstUniqChar(String s) {\n        HashMap<Character, Integer> count = new HashMap<>();\n        int n = s.length();\n\n        for (int i = 0; i < n; i++) {\n            char c = s.charAt(i);\n            count.put(c, count.getOrDefault(c, 0) + 1);\n        }\n\n        for (int i = 0; i < n; i++) {\n            if (count.get(s.charAt(i)) == 1) {\n                return i;\n            }\n        }\n        return -1;\n    }\n}\n",
    },
  },
  388: {
    java: {
      stack:
        'import java.util.HashMap;\n\npublic class Solution {\n    public int lengthLongestPath(String input) {\n        HashMap<Integer, Integer> pathLengths = new HashMap<>();\n        pathLengths.put(0, 0); \n        int maxLength = 0;\n\n        for (String part : input.split("\\n")) {\n            int level = part.lastIndexOf(\'\t\') + 1; \n            int len = part.length() - level; \n\n            if (part.contains(".")) { \n                maxLength = Math.max(maxLength, pathLengths.get(level) + len);\n            } else { \n                pathLengths.put(level + 1, pathLengths.get(level) + len + 1);\n            }\n        }\n\n        return maxLength;\n    }\n\n}\n',
    },
  },
  389: {
    java: {
      "bit-manipulation": "",
    },
  },
  390: {
    java: {
      recursion: "",
    },
  },
  391: {
    java: {
      "line-sweep":
        "import java.util.*;\n\nclass Solution {\n    public boolean isRectangleCover(int[][] rectangles) {\n        int area = 0;\n        int x1 = Integer.MAX_VALUE;\n        int y1 = Integer.MAX_VALUE;\n        int x2 = Integer.MIN_VALUE;\n        int y2 = Integer.MIN_VALUE;\n\n        Set<String> corners = new HashSet<>();\n\n        for (int[] rect : rectangles) {\n            x1 = Math.min(x1, rect[0]);\n            y1 = Math.min(y1, rect[1]);\n            x2 = Math.max(x2, rect[2]);\n            y2 = Math.max(y2, rect[3]);\n\n            area += (rect[2] - rect[0]) * (rect[3] - rect[1]);\n\n            String[] cornerPoints = {\n                rect[0] + ' ' + rect[1], rect[0] + ' ' + rect[3],\n                rect[2] + ' ' + rect[1], rect[2] + ' ' + rect[3]\n            };\n\n            for (String point : cornerPoints) {\n                if (!corners.add(point)) {\n                    corners.remove(point);\n                }\n            }\n        }\n\n        if (!corners.contains(x1 + ' ' + y1) ||\n            !corners.contains(x1 + ' ' + y2) ||\n            !corners.contains(x2 + ' ' + y1) ||\n            !corners.contains(x2 + ' ' + y2) ||\n            corners.size() != 4) {\n            return false;\n        }\n\n        return area == (x2 - x1) * (y2 - y1);\n    }\n}\n",
    },
  },
  392: {
    java: {
      "two-pointers": "",
    },
  },
  393: {
    java: {
      "bit-manipulation": "",
    },
  },
  394: {
    java: {
      stack: "",
    },
  },
  395: {
    java: {
      "sliding-window":
        "import java.util.HashMap;\n\npublic class Solution {\n    public int longestSubstring(String s, int k) {\n        int maxLength = 0;\n        \n        for (int uniqueCount = 1; uniqueCount <= 26; uniqueCount++) {\n            maxLength = Math.max(maxLength, longestSubstringWithNUniqueChars(s, k, uniqueCount));\n        }\n        \n        return maxLength;\n    }\n\n    private int longestSubstringWithNUniqueChars(String s, int k, int uniqueTarget) {\n        HashMap<Character, Integer> freqMap = new HashMap<>();\n        int left = 0, right = 0, maxLength = 0;\n        int uniqueChars = 0, countAtLeastack = 0;\n\n        while (right < s.length()) {\n            char rightChar = s.charAt(right);\n            freqMap.put(rightChar, freqMap.getOrDefault(rightChar, 0) + 1);\n            if (freqMap.get(rightChar) == 1) uniqueChars++;\n            if (freqMap.get(rightChar) == k) countAtLeastack++;\n            right++;\n\n            while (uniqueChars > uniqueTarget) {\n                char leftChar = s.charAt(left);\n                if (freqMap.get(leftChar) == k) countAtLeastack--;\n                freqMap.put(leftChar, freqMap.get(leftChar) - 1);\n                if (freqMap.get(leftChar) == 0) uniqueChars--;\n                left++;\n            }\n\n            if (uniqueChars == uniqueTarget && uniqueChars == countAtLeastack) {\n                maxLength = Math.max(maxLength, right - left);\n            }\n        }\n\n        return maxLength;\n    }\n\n}\n",
    },
  },
  396: {
    java: {
      "dynamic-programming": "",
    },
  },
  397: {
    java: {
      "dynamic-programming": "",
    },
  },
  398: {
    java: {
      "reservoir-sampling":
        "public class Solution {\n    private int[] nums;\n    private Random rand;\n\n    public Solution(int[] nums) {\n        this.nums = nums;\n        this.rand = new Random();\n    }\n\n    public int pick(int target) {\n        int count = 0;\n        int result = -1; // Variable to store the chosen index\n\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] == target) {\n                count++;\n                // With probability 1/count, select the current index\n                if (rand.nextInt(count) == 0) {\n                    result = i;\n                }\n            }\n        }\n\n        return result;\n    }\n}\n\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(nums);\n * int param_1 = obj.pick(target);\n */",
    },
  },
  399: {
    java: {
      "union-find": "",
    },
  },
  400: {
    java: {
      math: "",
    },
  },
  401: {
    java: {
      backtracking: "",
    },
  },
  402: {
    java: {
      "monotonic-stack":
        "class Solution {\n    public String removeKdigits(String num, int k) {\n        if (k == num.length()) {\n            return \"0\";\n        }\n\n        Stack<Character> stack = new Stack<>();\n\n        for (char digit : num.toCharArray()) {\n            while (!stack.isEmpty() && k > 0 && stack.peek() > digit) {\n                stack.pop();\n                k--;\n            }\n            stack.push(digit);\n        }\n\n        while (k > 0) {\n            stack.pop();\n            k--;\n        }\n\n        StringBuilder result = new StringBuilder();\n        while (!stack.isEmpty()) {\n            result.append(stack.pop());\n        }\n\n        result.reverse();\n        while (result.length() > 1 && result.charAt(0) == '0') {\n            result.deleteCharAt(0);\n        }\n\n        return result.toString();\n    }\n}\n",
    },
  },
  403: {
    java: {
      "dynamic-programming": "",
    },
  },
  404: {
    java: {
      tree: "",
    },
  },
  405: {
    java: {
      "bit-manipulation": "",
    },
  },
  406: {
    java: {
      sorting: "",
    },
  },
  407: {
    java: {
      matrix: "",
    },
  },
  408: {
    java: {
      "two-pointers": "",
    },
  },
  409: {
    java: {
      greedy: "",
    },
  },
  410: {
    java: {
      "prefix-sum": "",
    },
  },
  411: {
    java: {
      backtracking: "",
    },
  },
  412: {
    java: {
      math: "",
    },
  },
  413: {
    java: {
      "dynamic-programming": "",
    },
  },
  414: {
    java: {
      sorting: "",
    },
  },
  415: {
    java: {
      math: "",
    },
  },
  416: {
    java: {
      "dynamic-programming": "",
    },
  },
  417: {
    java: {
      matrix: "",
    },
  },
  418: {
    java: {
      "dynamic-programming": "",
    },
  },
  419: {
    java: {
      matrix: "",
    },
  },
  420: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  421: {
    java: {
      trie: "",
    },
  },
  422: {
    java: {
      matrix: "",
    },
  },
  423: {
    java: {
      math: "",
    },
  },
  424: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int characterReplacement(String s, int k) {\n        int[] count = new int[26];\n        int maxCount = 0, left = 0, maxLength = 0;\n\n        for (int right = 0; right < s.length(); right++) {\n            char rightChar = s.charAt(right);\n            count[rightChar - 'A']++;\n            maxCount = Math.max(maxCount, count[rightChar - 'A']);\n\n            while (right - left + 1 - maxCount > k) {\n                char leftChar = s.charAt(left);\n                count[leftChar - 'A']--;\n                left++;\n            }\n\n            maxLength = Math.max(maxLength, right - left + 1);\n        }\n\n        return maxLength;\n    }\n}\n",
    },
  },
  425: {
    java: {
      backtracking: "",
    },
  },
  426: {
    java: {
      "doubly-linked-list":
        "/*\n// Definition for a Node.\nclass Node {\n    public int val;\n    public Node left;\n    public Node right;\n\n    public Node() {}\n\n    public Node(int _val) {\n        val = _val;\n    }\n\n    public Node(int _val,Node _left,Node _right) {\n        val = _val;\n        left = _left;\n        right = _right;\n    }\n};\n*/\n\nclass Solution {\n    private Node prev;\n    private Node head;\n\n    public Node treeToDoublyList(Node root) {\n        if (root == null) {\n            return null;\n        }\n        prev = null;\n        head = null;\n        dfs(root);\n        prev.right = head;\n        head.left = prev;\n        return head;\n    }\n\n    private void dfs(Node root) {\n        if (root == null) {\n            return;\n        }\n        dfs(root.left);\n        if (prev != null) {\n            prev.right = root;\n            root.left = prev;\n        } else {\n            head = root;\n        }\n        prev = root;\n        dfs(root.right);\n    }\n}",
    },
  },
  427: {
    java: {
      matrix: "",
    },
  },
  428: {
    java: {
      tree: "",
    },
  },
  429: {
    java: {
      tree: "",
    },
  },
  430: {
    java: {
      "doubly-linked-list":
        "/*\nDefinition for a Node.\nclass Node {\n    public int val;\n    public Node prev;\n    public Node next;\n    public Node child;\n};\n*/\n\nclass Solution {\n    public Node flatten(Node head) {\n        if (head == null) return head;\n        \n        Node pointer = head;\n        \n        while (pointer != null) {\n            if (pointer.child == null) {\n                pointer = pointer.next;\n                continue;\n            }\n            \n            Node nextNode = pointer.next;            \n            Node child = pointer.child;\n            Node flattenedChild = flatten(child);\n            \n            pointer.next = flattenedChild;\n            flattenedChild.prev = pointer;\n            \n            Node tail = flattenedChild;\n            while (tail.next != null) {\n                tail = tail.next;\n            }\n            \n            tail.next = nextNode;\n            if (nextNode != null) {\n                nextNode.prev = tail;\n            }\n            \n            pointer.child = null;            \n            pointer = nextNode;\n        }\n        \n        return head;\n    }\n}\n\n",
    },
  },
  431: {
    java: {
      tree: "",
    },
  },
  432: {
    java: {
      "doubly-linked-list":
        "class AllOne {\n\n    class Node {\n        int freq;\n        Set<String> keys;\n        Node prev;\n        Node next;\n\n        Node(int freq) {\n            this.freq = freq;\n            keys = new HashSet<>();\n        }\n    }\n\n    private Node head;\n    private Node tail;\n    private Map<String, Node> keyToNode;\n\n    public AllOne() {\n        head = new Node(0);\n        tail = new Node(0);\n        head.next = tail;\n        tail.prev = head;\n        keyToNode = new HashMap<>();\n    }\n\n    public void inc(String key) {\n        if (keyToNode.containsKey(key)) {\n            Node node = keyToNode.get(key);\n            moveKeyToNextFreq(node, key);\n        } else {\n            if (head.next.freq != 1) {\n                addNodeAfter(new Node(1), head);\n            }\n            head.next.keys.add(key);\n            keyToNode.put(key, head.next);\n        }\n    }\n\n    public void dec(String key) {\n        if (!keyToNode.containsKey(key)) return;\n        Node node = keyToNode.get(key);\n        if (node.freq == 1) {\n            node.keys.remove(key);\n            keyToNode.remove(key);\n        } else {\n            moveKeyToPrevFreq(node, key);\n        }\n        if (node.keys.isEmpty()) removeNode(node);\n    }\n\n    public String getMaxKey() {\n        return tail.prev == head ? ",
      " : tail.prev.keys.iterator().next();\n    }\n\n    public String getMinKey() {\n        return head.next == tail ? ":
        " : head.next.keys.iterator().next();\n    }\n\n    private void moveKeyToNextFreq(Node node, String key) {\n        int nextFreq = node.freq + 1;\n        Node nextNode = node.next;\n        if (nextNode.freq != nextFreq) {\n            nextNode = new Node(nextFreq);\n            addNodeAfter(nextNode, node);\n        }\n        node.keys.remove(key);\n        nextNode.keys.add(key);\n        keyToNode.put(key, nextNode);\n        if (node.keys.isEmpty()) removeNode(node);\n    }\n\n    private void moveKeyToPrevFreq(Node node, String key) {\n        int prevFreq = node.freq - 1;\n        Node prevNode = node.prev;\n        if (prevNode.freq != prevFreq) {\n            prevNode = new Node(prevFreq);\n            addNodeAfter(prevNode, node.prev);\n        }\n        node.keys.remove(key);\n        prevNode.keys.add(key);\n        keyToNode.put(key, prevNode);\n        if (node.keys.isEmpty()) removeNode(node);\n    }\n\n    private void addNodeAfter(Node newNode, Node prevNode) {\n        newNode.next = prevNode.next;\n        newNode.prev = prevNode;\n        prevNode.next.prev = newNode;\n        prevNode.next = newNode;\n    }\n\n    private void removeNode(Node node) {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n    }\n}\n",
    },
  },
  433: {
    java: {
      "breadth-first-search": "",
    },
  },
  434: {
    java: {
      string: "",
    },
  },
  435: {
    java: {
      "dynamic-programming": "",
    },
  },
  436: {
    java: {
      sorting: "",
    },
  },
  437: {
    java: {
      tree: "",
    },
  },
  438: {
    java: {
      "sliding-window":
        "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Solution {\n    public List<Integer> findAnagrams(String s, String p) {\n        List<Integer> result = new ArrayList<>();\n        if (s == null || p == null || s.length() < p.length()) {\n            return result;\n        }\n\n        int[] pCount = new int[26];\n        int[] sCount = new int[26];\n\n        for (char c : p.toCharArray()) {\n            pCount[c - 'a']++;\n        }\n\n        int windowLength = p.length();\n        for (int i = 0; i < windowLength; i++) {\n            sCount[s.charAt(i) - 'a']++;\n        }\n\n        for (int i = windowLength; i < s.length(); i++) {\n            if (areArraysEqual(pCount, sCount)) {\n                result.add(i - windowLength);\n            }\n\n            sCount[s.charAt(i - windowLength) - 'a']--;\n            sCount[s.charAt(i) - 'a']++;\n        }\n\n        if (areArraysEqual(pCount, sCount)) {\n            result.add(s.length() - windowLength);\n        }\n\n        return result;\n    }\n\n    private boolean areArraysEqual(int[] arr1, int[] arr2) {\n        for (int i = 0; i < 26; i++) {\n            if (arr1[i] != arr2[i]) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n",
    },
  },
  439: {
    java: {
      stack: "",
    },
  },
  440: {
    java: {
      trie: "",
    },
  },
  441: {
    java: {
      math: "",
    },
  },
  442: {
    java: {
      "hash-table": "",
    },
  },
  443: {
    java: {
      "two-pointers": "",
    },
  },
  444: {
    java: {
      "topological-sort": "",
    },
  },
  445: {
    java: {
      stack:
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n * int val;\n * ListNode next;\n * ListNode() {}\n * ListNode(int val) { this.val = val; }\n * ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\n\npublic class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        Stack<Integer> s1 = new Stack<>();\n        Stack<Integer> s2 = new Stack<>();\n\n        while (l1 != null) {\n            s1.push(l1.val);\n            l1 = l1.next;\n        }\n        while (l2 != null) {\n            s2.push(l2.val);\n            l2 = l2.next;\n        }\n\n        int carry = 0;\n        ListNode head = null;\n\n        while (!s1.isEmpty() || !s2.isEmpty() || carry != 0) {\n            int sum = carry;\n            if (!s1.isEmpty())\n                sum += s1.pop();\n            if (!s2.isEmpty())\n                sum += s2.pop();\n\n            carry = sum / 10;\n            ListNode newNode = new ListNode(sum % 10);\n            newNode.next = head;\n            head = newNode;\n        }\n\n        return head;\n    }\n\n}\n",
    },
  },
  446: {
    java: {
      "dynamic-programming": "",
    },
  },
  447: {
    java: {
      math: "",
    },
  },
  448: {
    java: {
      "hash-table": "",
    },
  },
  449: {
    java: {
      "binary-search-tree":
        '/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode(int x) { val = x; }\n * }\n */\nimport java.util.*;\n\npublic class Codec {\n\n    public String serialize(TreeNode root) {\n        StringBuilder sb = new StringBuilder();\n        serializeHelper(root, sb);\n        return sb.toString();\n    }\n\n    private void serializeHelper(TreeNode node, StringBuilder sb) {\n        if (node == null) {\n            sb.append("null").append(",");\n            return;\n        }\n\n        sb.append(node.val).append(",");\n        serializeHelper(node.left, sb);\n        serializeHelper(node.right, sb);\n    }\n\n    public TreeNode deserialize(String data) {\n        if (data == null || data.isEmpty()) {\n            return null;\n        }\n\n        String[] nodes = data.split(",");\n        Queue<String> queue = new LinkedList<>(Arrays.asList(nodes));\n        return deserializeHelper(queue);\n    }\n\n    private TreeNode deserializeHelper(Queue<String> queue) {\n        String val = queue.poll();\n        if (val.equals("null")) {\n            return null;\n        }\n\n        TreeNode node = new TreeNode(Integer.parseInt(val));\n        node.left = deserializeHelper(queue);\n        node.right = deserializeHelper(queue);\n\n        return node;\n    }\n}\n\n// Your Codec object will be instantiated and called as such:\n// Codec ser = new Codec();\n// Codec deser = new Codec();\n// String tree = ser.serialize(root);\n// TreeNode ans = deser.deserialize(tree);\n// return ans;',
    },
  },
  450: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode() {}\n * TreeNode(int val) { this.val = val; }\n * TreeNode(int val, TreeNode left, TreeNode right) {\n * this.val = val;\n * this.left = left;\n * this.right = right;\n * }\n * }\n */\nclass Solution {\n    public TreeNode deleteNode(TreeNode root, int key) {\n        if (root == null) {\n            return null;\n        }\n\n        if (key < root.val) {\n            root.left = deleteNode(root.left, key);\n        } else if (key > root.val) {\n            root.right = deleteNode(root.right, key);\n        } else {\n            if (root.left == null) {\n                return root.right;\n            } else if (root.right == null) {\n                return root.left;\n            }\n            root.val = findMin(root.right);\n            root.right = deleteNode(root.right, root.val);\n        }\n\n        return root;\n    }\n\n    private int findMin(TreeNode node) {\n        while (node.left != null) {\n            node = node.left;\n        }\n        return node.val;\n    }\n}\n",
    },
  },
  451: {
    java: {
      "bucket-sort":
        'import java.util.*;\n\npublic class Solution {\n    public String frequencySort(String s) {\n        Map<Character, Integer> frequencyMap = new HashMap<>();\n        for (char c : s.toCharArray()) {\n            frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);\n        }\n\n        List<Character>[] buckets = new List[s.length() + 1];\n        for (char key : frequencyMap.keySet()) {\n            int frequency = frequencyMap.get(key);\n            if (buckets[frequency] == null) {\n                buckets[frequency] = new ArrayList<>();\n            }\n            buckets[frequency].add(key);\n        }\n\n        StringBuilder result = new StringBuilder();\n        for (int i = buckets.length - 1; i >= 0; i--) {\n            if (buckets[i] != null) {\n                for (char c : buckets[i]) {\n                    for (int j = 0; j < i; j++) {\n                        result.append(c);\n                    }\n                }\n            }\n        }\n\n        return result.toString();\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        System.out.println(solution.frequencySort("tree")); // Output: "eert" or "rtee"\n        System.out.println(solution.frequencySort("cccaaa")); // Output: "cccaaa" or "aaaccc"\n        System.out.println(solution.frequencySort("Aabb")); // Output: "bbAa" or "bbaA"\n    }\n}\n',
    },
  },
  452: {
    java: {
      greedy: "",
    },
  },
  453: {
    java: {
      math: "",
    },
  },
  454: {
    java: {
      "hash-table": "",
    },
  },
  455: {
    java: {
      "two-pointers": "",
    },
  },
  456: {
    java: {
      "monotonic-stack":
        "class Solution {\n    public boolean find132pattern(int[] nums) {\n        int n = nums.length;\n        if (n < 3) {\n            return false;\n        }\n\n        Stack<Integer> stack = new Stack<>();\n        int[] min = new int[n];\n        min[0] = nums[0];\n\n        for (int i = 1; i < n; ++i) {\n            min[i] = Math.min(min[i - 1], nums[i]);\n        }\n\n        for (int j = n - 1; j >= 0; --j) {\n            if (nums[j] > min[j]) {\n                while (!stack.isEmpty() && stack.peek() <= min[j]) {\n                    stack.pop();\n                }\n                if (!stack.isEmpty() && stack.peek() < nums[j]) {\n                    return true;\n                }\n                stack.push(nums[j]);\n            }\n        }\n\n        return false;\n    }\n}\n",
    },
  },
  457: {
    java: {
      "two-pointers":
        "class Solution {\n    public boolean circularArrayLoop(int[] nums) {\n        if (nums.length < 2)\n            return false;\n\n        for (int i = 0; i < nums.length; ++i) {\n            if (nums[i] == 0)\n                continue;\n            int slow = i;\n            int fast = advance(nums, slow);\n            while (nums[i] * nums[fast] > 0 && nums[i] * nums[advance(nums, fast)] > 0) {\n                if (slow == fast) {\n                    if (slow == advance(nums, slow))\n                        break;\n                    return true;\n                }\n                slow = advance(nums, slow);\n                fast = advance(nums, advance(nums, fast));\n            }\n\n            slow = i;\n            int sign = nums[i];\n            while (sign * nums[slow] > 0) {\n                int next = advance(nums, slow);\n                nums[slow] = 0;\n                slow = next;\n            }\n        }\n\n        return false;\n    }\n\n    private int advance(int[] nums, int i) {\n        int n = nums.length;\n        int val = (i + nums[i]) % n;\n        return i + nums[i] >= 0 ? val : n + val;\n    }\n}",
    },
  },
  458: {
    java: {
      "dynamic-programming": "",
    },
  },
  459: {
    java: {
      "string-matching": "",
    },
  },
  460: {
    java: {
      "doubly-linked-list":
        "class LFUCache {\n    class Node {\n        int key, value, freq;\n        Node prev, next;\n        Node(int k, int v) {\n            key = k;\n            value = v;\n            freq = 1;\n        }\n    }\n\n    class DoublyLinkedList {\n        Node head, tail;\n        DoublyLinkedList() {\n            head = new Node(0, 0);\n            tail = new Node(0, 0);\n            head.next = tail;\n            tail.prev = head;\n        }\n\n        void addNode(Node node) {\n            Node nextNode = head.next;\n            head.next = node;\n            node.prev = head;\n            node.next = nextNode;\n            nextNode.prev = node;\n        }\n\n        void removeNode(Node node) {\n            Node prevNode = node.prev;\n            Node nextNode = node.next;\n            prevNode.next = nextNode;\n            nextNode.prev = prevNode;\n        }\n\n        boolean isEmpty() {\n            return head.next == tail;\n        }\n    }\n\n    private int capacity, size, minFreq;\n    private Map<Integer, Node> keyToNode;\n    private Map<Integer, DoublyLinkedList> freqToDLL;\n\n    public LFUCache(int capacity) {\n        this.capacity = capacity;\n        this.size = 0;\n        this.minFreq = 0;\n        this.keyToNode = new HashMap<>();\n        this.freqToDLL = new HashMap<>();\n    }\n\n    public int get(int key) {\n        if (!keyToNode.containsKey(key)) return -1;\n        Node node = keyToNode.get(key);\n        updateFrequency(node);\n        return node.value;\n    }\n\n    public void put(int key, int value) {\n        if (capacity == 0) return;\n        if (keyToNode.containsKey(key)) {\n            Node node = keyToNode.get(key);\n            node.value = value;\n            updateFrequency(node);\n        } else {\n            if (size == capacity) {\n                DoublyLinkedList minFreqList = freqToDLL.get(minFreq);\n                keyToNode.remove(minFreqList.tail.prev.key);\n                minFreqList.removeNode(minFreqList.tail.prev);\n                size--;\n            }\n            Node newNode = new Node(key, value);\n            keyToNode.put(key, newNode);\n            minFreq = 1;\n            freqToDLL.computeIfAbsent(1, k -> new DoublyLinkedList()).addNode(newNode);\n            size++;\n        }\n    }\n\n    private void updateFrequency(Node node) {\n        int oldFreq = node.freq;\n        DoublyLinkedList oldList = freqToDLL.get(oldFreq);\n        oldList.removeNode(node);\n        if (oldFreq == minFreq && oldList.isEmpty()) minFreq++;\n        node.freq++;\n        freqToDLL.computeIfAbsent(node.freq, k -> new DoublyLinkedList()).addNode(node);\n    }\n}\n",
    },
  },
  461: {
    java: {
      "bit-manipulation": "",
    },
  },
  462: {
    java: {
      sorting: "",
    },
  },
  463: {
    java: {
      matrix: "",
    },
  },
  464: {
    java: {
      "game-theory": "",
    },
  },
  465: {
    java: {
      "dynamic-programming": "",
    },
  },
  466: {
    java: {
      "dynamic-programming": "",
    },
  },
  467: {
    java: {
      "dynamic-programming": "",
    },
  },
  468: {
    java: {
      string: "",
    },
  },
  469: {
    java: {
      geometry: "",
    },
  },
  470: {
    java: {
      "rejection-sampling":
        "/**\n * The rand7() API is already defined in the parent class SolBase.\n * public int rand7();\n * @return a random integer in the range 1 to 7\n */\nclass Solution extends SolBase {\n    public int rand10() {\n        while (true) {\n            int num = (rand7() - 1) * 7 + rand7(); // Generate a number from 1 to 49\n            if (num <= 40) { // Accept only if the number is in the range 1 to 40\n                return 1 + (num - 1) % 10; // Map to the range 1 to 10\n            }\n        }\n    }\n}",
    },
  },
  471: {
    java: {
      "dynamic-programming": "",
    },
  },
  472: {
    java: {
      "dynamic-programming": "",
    },
  },
  473: {
    java: {
      "dynamic-programming": "",
    },
  },
  474: {
    java: {
      "dynamic-programming": "",
    },
  },
  475: {
    java: {
      "two-pointers": "",
    },
  },
  476: {
    java: {
      "bit-manipulation": "",
    },
  },
  477: {
    java: {
      "bit-manipulation": "",
    },
  },
  478: {
    java: {
      "rejection-sampling":
        "import java.util.Random;\n\nclass Solution {\n    private double radius;\n    private double x_center;\n    private double y_center;\n    private Random random;\n\n    public Solution(double radius, double x_center, double y_center) {\n        this.radius = radius;\n        this.x_center = x_center;\n        this.y_center = y_center;\n        this.random = new Random();\n    }\n\n    public double[] randPoint() {\n        double x = x_center - radius + 2 * radius * random.nextDouble();\n        double y = y_center - radius + 2 * radius * random.nextDouble();\n\n        while (!isInCircle(x, y)) {\n            x = x_center - radius + 2 * radius * random.nextDouble();\n            y = y_center - radius + 2 * radius * random.nextDouble();\n        }\n\n        return new double[]{x, y};\n    }\n\n    private boolean isInCircle(double x, double y) {\n        return Math.pow(x - x_center, 2) + Math.pow(y - y_center, 2) <= Math.pow(radius, 2);\n    }\n}\n\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(radius, x_center, y_center);\n * double[] param_1 = obj.randPoint();\n */",
    },
  },
  479: {
    java: {
      enumeration: "",
    },
  },
  480: {
    java: {
      "sliding-window":
        "import java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\n\npublic class Solution {\n    public double[] medianSlidingWindow(int[] nums, int k) {\n        List<Double> resList = new ArrayList<>();\n        int n = nums.length;\n        int i = 0;\n        int j = k - 1;\n        List<Integer> temp = new ArrayList<>();\n        for (int x = 0; x < k - 1; x++) {\n            temp.add(nums[x]);\n        }\n        Collections.sort(temp);\n        while (j < n) {\n            int num = nums[j];\n            int insertIdx = Collections.binarySearch(temp, num);\n            if (insertIdx < 0) {\n                insertIdx = -insertIdx - 1;\n            }\n            temp.add(insertIdx, num);\n\n            if (k % 2 == 1) {\n                double median = (double) temp.get(k / 2);\n                resList.add(median);\n            } else {\n                int idx = k / 2;\n                double median1 = (double) temp.get(idx);\n                double median2 = (double) temp.get(idx - 1);\n                resList.add((median1 + median2) / 2);\n            }\n\n            int removeIdx = Collections.binarySearch(temp, nums[i]);\n            if (removeIdx < 0) {\n                removeIdx = -removeIdx - 1;\n            }\n            temp.remove(removeIdx);\n\n            i++;\n            j++;\n        }\n\n        double[] resArray = new double[resList.size()];\n        for (int x = 0; x < resList.size(); x++) {\n            resArray[x] = resList.get(x);\n        }\n\n        return resArray;\n    }\n}",
    },
  },
  481: {
    java: {
      "two-pointers": "",
    },
  },
  482: {
    java: {
      string: "",
    },
  },
  483: {
    java: {
      math: "",
    },
  },
  484: {
    java: {
      stack: "",
    },
  },
  485: {
    java: {
      array:
        "class Solution {\n    public int findMaxConsecutiveOnes(int[] nums) {\n        int maxCount = 0;\n        int currentCount = 0;\n        \n        for (int num : nums) {\n            if (num == 1) {\n                currentCount++;\n                maxCount = Math.max(maxCount, currentCount);\n            } else {\n                currentCount = 0;\n            }\n        }\n        \n        return maxCount;\n    }\n}\n",
    },
  },
  486: {
    java: {
      "game-theory": "",
    },
  },
  487: {
    java: {
      "sliding-window":
        "class Solution {\n    public int findMaxConsecutiveOnes(int[] nums) {\n        int left = 0, right = 0;\n        int k = 1;\n        while (right < nums.length) {\n            if (nums[right++] == 0) {\n                --k;\n            }\n            if (k < 0 && nums[left++] == 0) {\n                ++k;\n            }\n        }\n        return right - left;\n    }\n}",
    },
  },
  488: {
    java: {
      stack: "",
    },
  },
  489: {
    java: {
      interactive: "",
    },
  },
  490: {
    java: {
      matrix: "",
    },
  },
  491: {
    java: {
      backtracking: "",
    },
  },
  492: {
    java: {
      math: "",
    },
  },
  493: {
    java: {
      "merge-sort":
        "class Solution {\n    public int reversePairs(int[] nums) {\n        return mergeSortAndCount(nums, 0, nums.length - 1);\n    }\n    \n    private int mergeSortAndCount(int[] nums, int left, int right) {\n        if (left >= right) return 0;\n        \n        int mid = left + (right - left) / 2;\n        int count = mergeSortAndCount(nums, left, mid) + mergeSortAndCount(nums, mid + 1, right);\n        count += mergeAndCount(nums, left, mid, right);\n        \n        return count;\n    }\n    \n    private int mergeAndCount(int[] nums, int left, int mid, int right) {\n        int count = 0;\n        int[] merged = new int[right - left + 1];\n        int i = left, j = mid + 1, k = 0;\n        \n        while (i <= mid && j <= right) {\n            if ((long) nums[i] > 2 * (long) nums[j]) {\n                count += (mid - i + 1);\n                j++;\n            } else {\n                i++;\n            }\n        }\n        \n        i = left; j = mid + 1;\n        while (i <= mid && j <= right) {\n            if (nums[i] <= nums[j]) {\n                merged[k++] = nums[i++];\n            } else {\n                merged[k++] = nums[j++];\n            }\n        }\n        \n        while (i <= mid) {\n            merged[k++] = nums[i++];\n        }\n        \n        while (j <= right) {\n            merged[k++] = nums[j++];\n        }\n        \n        System.arraycopy(merged, 0, nums, left, merged.length);\n        \n        return count;\n    }\n}\n",
    },
  },
  494: {
    java: {
      "dynamic-programming": "",
    },
  },
  496: {
    java: {
      "monotonic-stack":
        "class Solution {\n    public int[] nextGreaterElement(int[] nums1, int[] nums2) {\n        Map<Integer, Integer> map = new HashMap<>();\n        int m = nums1.length;\n        int n = nums2.length;\n        int[] nums = nextGreaterElement(nums2);\n\n        for (int i = 0; i < n; i++) {\n            map.put(nums2[i], nums[i]);\n        }\n\n        int[] result = new int[m];\n\n        for (int i = 0; i < m; i++) {\n            result[i] = map.get(nums1[i]);\n        }\n\n        return result;\n    }\n\n    public int[] nextGreaterElement(int[] nums) {\n        int[] result = new int[nums.length];\n        Stack<Integer> stack = new Stack<>();\n\n        for (int i = nums.length - 1; i >= 0; i--) {\n            while (!stack.isEmpty() && stack.peek() <= nums[i]) {\n                stack.pop();\n            }\n            result[i] = stack.isEmpty() ? -1 : stack.peek();\n            stack.push(nums[i]);\n        }\n\n        return result;\n    }\n\n}\n\n// class Solution {\n//     public int[] nextGreaterElement(int[] nums1, int[] nums2) {\n//         Map<Integer, Integer> map = new HashMap<>();\n//         Stack<Integer> stack = new Stack<>();\n//         for (int num : nums2) {\n//             while (!stack.isEmpty() && stack.peek() < num) {\n//                 map.put(stack.pop(), num);\n//             }\n//             stack.push(num);\n//         }\n//         for (int i = 0; i < nums1.length; i++) {\n//             nums1[i] = map.getOrDefault(nums1[i], -1);\n//         }\n//         return nums1;\n//     }\n// }",
    },
  },
  497: {
    java: {
      "reservoir-sampling":
        "import java.util.Random;\nimport java.util.TreeMap;\n\npublic class Solution {\n    private int[][] rects;\n    private Random rand;\n    private TreeMap<Integer, Integer> areaMap;\n    private int totalPoints;\n\n    public Solution(int[][] rects) {\n        this.rects = rects;\n        this.rand = new Random();\n        this.areaMap = new TreeMap<>();\n        this.totalPoints = 0;\n\n        // Calculate the cumulative number of points for each rectangle\n        for (int i = 0; i < rects.length; i++) {\n            int[] rect = rects[i];\n            int area = (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1);\n            totalPoints += area;\n            areaMap.put(totalPoints, i);\n        }\n    }\n\n    public int[] pick() {\n        int randomPoint = rand.nextInt(totalPoints) + 1;\n        int rectIndex = areaMap.ceilingEntry(randomPoint).getValue();\n        int[] rect = rects[rectIndex];\n\n        int x = rect[0] + rand.nextInt(rect[2] - rect[0] + 1);\n        int y = rect[1] + rand.nextInt(rect[3] - rect[1] + 1);\n\n        return new int[] { x, y };\n    }\n}\n\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(rects);\n * int[] param_1 = obj.pick();\n */",
    },
  },
  498: {
    java: {
      matrix: "",
    },
  },
  499: {
    java: {
      matrix:
        "class Solution {\n    public String findShortestWay(int[][] maze, int[] ball, int[] hole) {\n        int m = maze.length;\n        int n = maze[0].length;\n        int r = ball[0], c = ball[1];\n        int rh = hole[0], ch = hole[1];\n        Deque<int[]> q = new LinkedList<>();\n        q.offer(new int[] {r, c});\n        int[][] dist = new int[m][n];\n        for (int i = 0; i < m; ++i) {\n            Arrays.fill(dist[i], Integer.MAX_VALUE);\n        }\n        dist[r][c] = 0;\n        String[][] path = new String[m][n];\n        path[r][c] = \"\";\n        int[][] dirs = { {-1, 0, 'u'}, {1, 0, 'd'}, {0, -1, 'l'}, {0, 1, 'r'} };\n        while (!q.isEmpty()) {\n            int[] p = q.poll();\n            int i = p[0], j = p[1];\n            for (int[] dir : dirs) {\n                int a = dir[0], b = dir[1];\n                String d = String.valueOf((char) (dir[2]));\n                int x = i, y = j;\n                int step = dist[i][j];\n                while (x + a >= 0 && x + a < m && y + b >= 0 && y + b < n && maze[x + a][y + b] == 0\n                    && (x != rh || y != ch)) {\n                    x += a;\n                    y += b;\n                    ++step;\n                }\n                if (dist[x][y] > step\n                    || (dist[x][y] == step && (path[i][j] + d).compareTo(path[x][y]) < 0)) {\n                    dist[x][y] = step;\n                    path[x][y] = path[i][j] + d;\n                    if (x != rh || y != ch) {\n                        q.offer(new int[] {x, y});\n                    }\n                }\n            }\n        }\n        return path[rh][ch] == null ? \"impossible\" : path[rh][ch];\n    }\n}\n",
    },
  },
  500: {
    java: {
      "hash-table": "",
    },
  },
  501: {
    java: {
      "binary-search-tree":
        "import java.util.*;\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode() {}\n * TreeNode(int val) { this.val = val; }\n * TreeNode(int val, TreeNode left, TreeNode right) {\n * this.val = val;\n * this.left = left;\n * this.right = right;\n * }\n * }\n */\nclass Solution {\n    private int maxCount;\n    private int currentCount;\n    private int currentVal;\n    private List<Integer> modes;\n\n    public int[] findMode(TreeNode root) {\n        if (root == null) {\n            return new int[0];\n        }\n\n        maxCount = 0;\n        currentCount = 0;\n        currentVal = Integer.MIN_VALUE;\n        modes = new ArrayList<>();\n\n        traverse(root);\n\n        int[] result = new int[modes.size()];\n        for (int i = 0; i < modes.size(); i++) {\n            result[i] = modes.get(i);\n        }\n\n        return result;\n    }\n\n    private void traverse(TreeNode node) {\n        if (node == null) {\n            return;\n        }\n\n        traverse(node.left);\n\n        handleValue(node.val);\n\n        traverse(node.right);\n    }\n\n    private void handleValue(int val) {\n        if (val != currentVal) {\n            currentVal = val;\n            currentCount = 0;\n        }\n\n        currentCount++;\n\n        if (currentCount > maxCount) {\n            maxCount = currentCount;\n            modes.clear();\n            modes.add(currentVal);\n        } else if (currentCount == maxCount) {\n            modes.add(currentVal);\n        }\n    }\n}\n",
    },
  },
  502: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  503: {
    java: {
      "monotonic-stack":
        "class Solution {\n    public int[] nextGreaterElements(int[] nums) {\n        int n = nums.length;\n        int[] result = new int[n];\n        Stack<Integer> stack = new Stack<>();\n\n        for (int i = 2 * n - 1; i >= 0; i--) {\n            while (!stack.isEmpty() && stack.peek() <= nums[i % n]) {\n                stack.pop();\n            }\n            result[i % n] = stack.isEmpty() ? -1 : stack.peek();\n            stack.push(nums[i % n]);\n        }\n\n        return result;\n    }\n}\n",
    },
  },
  504: {
    java: {
      math: "",
    },
  },
  505: {
    java: {
      matrix:
        "class Solution {\n    public int shortestDistance(int[][] maze, int[] start, int[] destination) {\n        int m = maze.length, n = maze[0].length;\n        int inf = 1 << 30;\n        int[][] dist = new int[m][n];\n        for (var row : dist) {\n            Arrays.fill(row, inf);\n        }\n        int si = start[0], sj = start[1];\n        int di = destination[0], dj = destination[1];\n        dist[si][sj] = 0;\n        Deque<int[]> q = new ArrayDeque<>();\n        q.offer(new int[] {si, sj});\n        int[] dirs = {-1, 0, 1, 0, -1};\n        while (!q.isEmpty()) {\n            var p = q.poll();\n            int i = p[0], j = p[1];\n            for (int d = 0; d < 4; ++d) {\n                int x = i, y = j, k = dist[i][j];\n                int a = dirs[d], b = dirs[d + 1];\n                while (\n                    x + a >= 0 && x + a < m && y + b >= 0 && y + b < n && maze[x + a][y + b] == 0) {\n                    x += a;\n                    y += b;\n                    ++k;\n                }\n                if (k < dist[x][y]) {\n                    dist[x][y] = k;\n                    q.offer(new int[] {x, y});\n                }\n            }\n        }\n        return dist[di][dj] == inf ? -1 : dist[di][dj];\n    }\n}",
    },
  },
  506: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  507: {
    java: {
      math: "",
    },
  },
  508: {
    java: {
      tree: "",
    },
  },
  509: {
    java: {
      "dynamic-programming": "",
    },
  },
  510: {
    java: {
      "binary-search-tree": "",
    },
  },
  511: {
    java: {
      database: "",
    },
  },
  512: {
    java: {
      database: "",
    },
  },
  513: {
    java: {
      tree: "",
    },
  },
  514: {
    java: {
      "dynamic-programming": "",
    },
  },
  515: {
    java: {
      tree: "",
    },
  },
  516: {
    java: {
      "dynamic-programming": "",
    },
  },
  517: {
    java: {
      greedy: "",
    },
  },
  518: {
    java: {
      "dynamic-programming": "",
    },
  },
  519: {
    java: {
      "reservoir-sampling":
        "import java.util.HashMap;\nimport java.util.Map;\nimport java.util.Random;\n\npublic class Solution {\n    private int m, n, totalCells;\n    private Map<Integer, Integer> map;\n    private Random rand;\n\n    public Solution(int m, int n) {\n        this.m = m;\n        this.n = n;\n        this.totalCells = m * n;\n        this.map = new HashMap<>();\n        this.rand = new Random();\n    }\n\n    public int[] flip() {\n        int randomCell = rand.nextInt(totalCells);\n        totalCells--;\n\n        // Use map to get the actual position or the random position\n        int position = map.getOrDefault(randomCell, randomCell);\n\n        // Map the selected position to the last available cell position\n        map.put(randomCell, map.getOrDefault(totalCells, totalCells));\n\n        return new int[]{position / n, position % n};\n    }\n\n    public void reset() {\n        map.clear();\n        totalCells = m * n;\n    }\n}\n\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(m, n);\n * int[] param_1 = obj.flip();\n * obj.reset();\n */",
    },
  },
  520: {
    java: {
      string: "",
    },
  },
  521: {
    java: {
      string: "",
    },
  },
  522: {
    java: {
      "two-pointers": "",
    },
  },
  523: {
    java: {
      "prefix-sum": "",
    },
  },
  524: {
    java: {
      "two-pointers": "",
    },
  },
  525: {
    java: {
      "prefix-sum": "",
    },
  },
  526: {
    java: {
      "dynamic-programming": "",
    },
  },
  527: {
    java: {
      trie: "",
    },
  },
  528: {
    java: {
      randomized:
        "import java.util.Random;\nimport java.util.TreeMap;\n\nclass Solution {\n    private int[] prefixSums;\n    private int totalSum;\n    private Random rand;\n\n    public Solution(int[] w) {\n        prefixSums = new int[w.length];\n        prefixSums[0] = w[0];\n        for (int i = 1; i < w.length; i++) {\n            prefixSums[i] = prefixSums[i - 1] + w[i];\n        }\n        totalSum = prefixSums[prefixSums.length - 1];\n        rand = new Random();\n    }\n\n    public int pickIndex() {\n        int target = rand.nextInt(totalSum) + 1;\n        int low = 0, high = prefixSums.length - 1;\n        while (low < high) {\n            int mid = low + (high - low) / 2;\n            if (prefixSums[mid] < target) {\n                low = mid + 1;\n            } else {\n                high = mid;\n            }\n        }\n        return low;\n    }\n}\n\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(w);\n * int param_1 = obj.pickIndex();\n */",
    },
  },
  529: {
    java: {
      matrix: "",
    },
  },
  530: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private int minDiff;\n    private Integer prev;\n\n    public int getMinimumDifference(TreeNode root) {\n        minDiff = Integer.MAX_VALUE;\n        prev = null;\n        inorder(root);\n        return minDiff;\n    }\n    \n    private void inorder(TreeNode node) {\n        if (node == null) {\n            return;\n        }\n        \n        inorder(node.left);\n        if (prev != null) {\n            minDiff = Math.min(minDiff, node.val - prev);\n        }\n        prev = node.val;\n        inorder(node.right);\n    }\n}\n",
    },
  },
  531: {
    java: {
      matrix: "",
    },
  },
  532: {
    java: {
      "two-pointers":
        "import java.util.HashMap;\nimport java.util.HashSet;\nimport java.util.Map;\nimport java.util.Set;\n\npublic class Solution {\n    public int findPairs(int[] nums, int k) {\n        if (nums == null || nums.length < 2 || k < 0) {\n            return 0;\n        }\n\n        Map<Integer, Integer> frequencyMap = new HashMap<>();\n        Set<Integer> countedPairs = new HashSet<>();\n        int count = 0;\n\n        for (int num : nums) {\n            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);\n        }\n\n        for (int num : nums) {\n            if (frequencyMap.containsKey(num + k) && !countedPairs.contains(num)) {\n                if (k == 0) {\n                    if (frequencyMap.get(num) > 1) {\n                        count++;\n                        countedPairs.add(num);\n                    }\n                } else {\n                    count++;\n                    countedPairs.add(num);\n                }\n            }\n        }\n\n        return count;\n    }\n}\n",
    },
  },
  533: {
    java: {
      matrix: "",
    },
  },
  534: {
    java: {
      database: "",
    },
  },
  535: {
    java: {
      "hash-function":
        'import java.util.HashMap;\nimport java.util.Map;\n\npublic class Codec {\n    private static final String BASE_URL = "http://tinyurl.com/";\n    private Map<String, String> shortToLongMap = new HashMap<>();\n    private Map<String, String> longToShortMap = new HashMap<>();\n    \n    private String getHash(String url) {\n        return Integer.toHexString(url.hashCode());\n    }\n\n    public String encode(String longUrl) {\n        if (longToShortMap.containsKey(longUrl)) {\n            return BASE_URL + longToShortMap.get(longUrl);\n        }\n\n        String shortKey = getHash(longUrl);\n        while (shortToLongMap.containsKey(shortKey)) {\n            longUrl += " ";\n            shortKey = getHash(longUrl);\n        }\n        \n        shortToLongMap.put(shortKey, longUrl);\n        longToShortMap.put(longUrl, shortKey);\n        \n        return BASE_URL + shortKey;\n    }\n\n    public String decode(String shortUrl) {\n        String shortKey = shortUrl.replace(BASE_URL, "");\n        return shortToLongMap.get(shortKey);\n    }\n\n}\n',
    },
  },
  536: {
    java: {
      stack: "",
    },
  },
  537: {
    java: {
      math: "",
    },
  },
  538: {
    java: {
      "binary-search-tree": "",
    },
  },
  539: {
    java: {
      sorting: "",
    },
  },
  541: {
    java: {
      "two-pointers": "",
    },
  },
  542: {
    java: {
      matrix: "",
    },
  },
  543: {
    java: {
      tree: "",
    },
  },
  544: {
    java: {
      recursion: "",
    },
  },
  545: {
    java: {
      tree: "",
    },
  },
  546: {
    java: {
      "dynamic-programming": "",
    },
  },
  547: {
    java: {
      "union-find": "",
    },
  },
  548: {
    java: {
      "prefix-sum": "",
    },
  },
  549: {
    java: {
      tree: "",
    },
  },
  550: {
    java: {
      database: "",
    },
  },
  551: {
    java: {
      string: "",
    },
  },
  552: {
    java: {
      "dynamic-programming": "",
    },
  },
  553: {
    java: {
      "dynamic-programming": "",
    },
  },
  554: {
    java: {
      "hash-table": "",
    },
  },
  555: {
    java: {
      greedy: "",
    },
  },
  556: {
    java: {
      "two-pointers":
        "public class Solution {\n    public int nextGreaterElement(int n) {\n        char[] digits = Integer.toString(n).toCharArray();\n        int length = digits.length;\n\n        int left = length - 2;\n        while (left >= 0 && digits[left] >= digits[left + 1]) {\n            left--;\n        }\n\n        if (left == -1) {\n            return -1; \n        }\n\n        int right = length - 1;\n        while (digits[right] <= digits[left]) {\n            right--;\n        }\n\n        char temp = digits[left];\n        digits[left] = digits[right];\n        digits[right] = temp;\n\n        reverse(digits, left + 1, length - 1);\n        \n        try {\n            long result = Long.parseLong(new String(digits));\n            return (result <= Integer.MAX_VALUE) ? (int) result : -1;\n        } catch (NumberFormatException e) {\n            return -1;\n        }\n    }\n\n    private void reverse(char[] arr, int start, int end) {\n        while (start < end) {\n            char temp = arr[start];\n            arr[start] = arr[end];\n            arr[end] = temp;\n            start++;\n            end--;\n        }\n    }\n}\n",
    },
  },
  557: {
    java: {
      "two-pointers": "",
    },
  },
  558: {
    java: {
      tree: "",
    },
  },
  559: {
    java: {
      tree: "",
    },
  },
  560: {
    java: {
      "prefix-sum": "",
    },
  },
  561: {
    java: {
      "counting-sort":
        "class Solution {\n    public int arrayPairSum(int[] nums) {\n        int maxNum = 10000;\n        int[] count = new int[2 * maxNum + 1];\n\n        for (int num : nums) {\n            count[num + maxNum]++;\n        }\n\n        int sum = 0;\n        boolean add = true;\n        for (int i = 0; i < count.length; i++) {\n            while (count[i] > 0) {\n                if (add) {\n                    sum += i - maxNum;\n                }\n                add = !add;\n                count[i]--;\n            }\n        }\n\n        return sum;\n    }\n}\n",
    },
  },
  562: {
    java: {
      matrix: "",
    },
  },
  563: {
    java: {
      tree: "",
    },
  },
  564: {
    java: {
      math: "",
    },
  },
  565: {
    java: {
      "depth-first-search": "",
    },
  },
  566: {
    java: {
      matrix: "",
    },
  },
  567: {
    java: {
      "two-pointers": "",
      "sliding-window":
        "import java.util.Arrays;\n\npublic class Solution {\n    public boolean checkInclusion(String s1, String s2) {\n        if (s1.length() > s2.length()) {\n            return false;\n        }\n        \n        int[] countS1 = new int[26];\n        int[] countWindow = new int[26];        \n        for (char c : s1.toCharArray()) {\n            countS1[c - 'a']++;\n        }        \n        for (int i = 0; i < s1.length(); i++) {\n            countWindow[s2.charAt(i) - 'a']++;\n        }        \n        for (int i = 0; i <= s2.length() - s1.length(); i++) {\n            if (Arrays.equals(countS1, countWindow)) {\n                return true;\n            }            \n            if (i + s1.length() < s2.length()) {\n                countWindow[s2.charAt(i) - 'a']--;\n                countWindow[s2.charAt(i + s1.length()) - 'a']++;\n            }\n        }\n        \n        return false;\n    }\n}\n",
    },
  },
  568: {
    java: {
      matrix: "",
    },
  },
  569: {
    java: {
      database: "",
    },
  },
  570: {
    java: {
      database: "",
    },
  },
  571: {
    java: {
      database: "",
    },
  },
  572: {
    java: {
      "hash-function": "",
    },
  },
  573: {
    java: {
      math: "",
    },
  },
  574: {
    java: {
      database: "",
    },
  },
  575: {
    java: {
      "hash-table": "",
    },
  },
  576: {
    java: {
      "dynamic-programming": "",
    },
  },
  577: {
    java: {
      database: "",
    },
  },
  578: {
    java: {
      database: "",
    },
  },
  579: {
    java: {
      database: "",
    },
  },
  580: {
    java: {
      database: "",
    },
  },
  581: {
    java: {
      "two-pointers":
        "public class Solution {\n    public int findUnsortedSubarray(int[] nums) {\n        int n = nums.length;\n        int left = 0, right = n - 1;\n        \n        while (left < n - 1 && nums[left] <= nums[left + 1]) {\n            left++;\n        }\n        \n        if (left == n - 1) {\n            return 0;\n        }\n        \n        while (right > 0 && nums[right] >= nums[right - 1]) {\n            right--;\n        }\n        \n        int subarrayMin = Integer.MAX_VALUE, subarrayMax = Integer.MIN_VALUE;\n        for (int i = left; i <= right; i++) {\n            subarrayMin = Math.min(subarrayMin, nums[i]);\n            subarrayMax = Math.max(subarrayMax, nums[i]);\n        }\n        \n        while (left > 0 && nums[left - 1] > subarrayMin) {\n            left--;\n        }\n        \n        while (right < n - 1 && nums[right + 1] < subarrayMax) {\n            right++;\n        }\n        \n        return right - left + 1;\n    }\n}\n",
    },
  },
  582: {
    java: {
      tree: "",
    },
  },
  583: {
    java: {
      "dynamic-programming": "",
    },
  },
  584: {
    java: {
      database: "",
    },
  },
  585: {
    java: {
      database: "",
    },
  },
  586: {
    java: {
      database: "",
    },
  },
  587: {
    java: {
      geometry: "",
    },
  },
  588: {
    java: {
      trie: "",
    },
  },
  589: {
    java: {
      stack:
        "/*\n// Definition for a Node.\nclass Node {\n    public int val;\n    public List<Node> children;\n\n    public Node() {}\n\n    public Node(int _val) {\n        val = _val;\n    }\n\n    public Node(int _val, List<Node> _children) {\n        val = _val;\n        children = _children;\n    }\n};\n*/\n\nclass Solution {\n    public List<Integer> preorder(Node root) {\n        List<Integer> result = new ArrayList<>();\n        if (root == null) {\n            return result;\n        }\n\n        Stack<Node> stack = new Stack<>();\n        stack.push(root);\n\n        while (!stack.isEmpty()) {\n            Node node = stack.pop();\n            result.add(node.val);\n            for (int i = node.children.size() - 1; i >= 0; i--) {\n                stack.push(node.children.get(i));\n            }\n        }\n\n        return result;\n    }\n}",
    },
  },
  590: {
    java: {
      stack:
        "/*\n// Definition for a Node.\nclass Node {\n    public int val;\n    public List<Node> children;\n\n    public Node() {}\n\n    public Node(int _val) {\n        val = _val;\n    }\n\n    public Node(int _val, List<Node> _children) {\n        val = _val;\n        children = _children;\n    }\n};\n*/\n\nclass Solution {\n    public List<Integer> postorder(Node root) {\n        List<Integer> result = new ArrayList<>();\n        if (root == null) {\n            return result;\n        }\n\n        Stack<Node> stack = new Stack<>();\n        stack.push(root);\n\n        while (!stack.isEmpty()) {\n            Node node = stack.pop();\n            result.add(0, node.val);\n            for (Node child : node.children) {\n                stack.push(child);\n            }\n        }\n\n        return result;\n    }\n}",
    },
  },
  591: {
    java: {
      stack: "",
    },
  },
  592: {
    java: {
      math: "",
    },
  },
  593: {
    java: {
      geometry: "",
    },
  },
  594: {
    java: {
      "sliding-window":
        "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Solution {\n    public int findLHS(int[] nums) {\n        Map<Integer, Integer> frequencyMap = new HashMap<>();\n        int maxLen = 0;\n        \n        for (int num : nums) {\n            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);\n        }\n        \n        for (int num : frequencyMap.keySet()) {\n            if (frequencyMap.containsKey(num + 1)) {\n                int currentLen = frequencyMap.get(num) + frequencyMap.get(num + 1);\n                maxLen = Math.max(maxLen, currentLen);\n            }\n        }\n        \n        return maxLen;\n    }\n}\n",
    },
  },
  595: {
    java: {
      database: "",
    },
  },
  596: {
    java: {
      database: "",
    },
  },
  597: {
    java: {
      database: "",
    },
  },
  598: {
    java: {
      math: "",
    },
  },
  599: {
    java: {
      "hash-table": "",
    },
  },
  600: {
    java: {
      "dynamic-programming": "",
    },
  },
  601: {
    java: {
      database: "",
    },
  },
  602: {
    java: {
      database: "",
    },
  },
  603: {
    java: {
      database: "",
    },
  },
  604: {
    java: {
      iterator:
        "class StringIterator {\n    private List<Node> d = new ArrayList<>();\n    private int p;\n\n    public StringIterator(String compressedString) {\n        int n = compressedString.length();\n        int i = 0;\n        while (i < n) {\n            char c = compressedString.charAt(i);\n            int x = 0;\n            while (++i < n && Character.isDigit(compressedString.charAt(i))) {\n                x = x * 10 + (compressedString.charAt(i) - '0');\n            }\n            d.add(new Node(c, x));\n        }\n    }\n\n    public char next() {\n        if (!hasNext()) {\n            return ' ';\n        }\n        char ans = d.get(p).c;\n        if (--d.get(p).x == 0) {\n            ++p;\n        }\n        return ans;\n    }\n\n    public boolean hasNext() {\n        return p < d.size() && d.get(p).x > 0;\n    }\n}\n\nclass Node {\n    char c;\n    int x;\n\n    Node(char c, int x) {\n        this.c = c;\n        this.x = x;\n    }\n}\n\n/**\n * Your StringIterator object will be instantiated and called as such:\n * StringIterator obj = new StringIterator(compressedString);\n * char param_1 = obj.next();\n * boolean param_2 = obj.hasNext();\n */",
    },
  },
  605: {
    java: {
      greedy: "",
    },
  },
  606: {
    java: {
      tree: "",
    },
  },
  607: {
    java: {
      database: "",
    },
  },
  608: {
    java: {
      database: "",
    },
  },
  609: {
    java: {
      "hash-table": "",
    },
  },
  610: {
    java: {
      database: "",
    },
  },
  611: {
    java: {
      "two-pointers":
        "import java.util.Arrays;\n\npublic class Solution {\n    public int triangleNumber(int[] nums) {\n        Arrays.sort(nums);\n        int count = 0;\n        for (int i = nums.length - 1; i >= 2; i--) {\n            int left = 0, right = i - 1;\n            while (left < right) {\n                if (nums[left] + nums[right] > nums[i]) {\n                    count += right - left;\n                    right--;\n                } else {\n                    left++;\n                }\n            }\n        }\n        return count;\n    }\n}\n",
    },
  },
  612: {
    java: {
      database: "",
    },
  },
  613: {
    java: {
      database: "",
    },
  },
  614: {
    java: {
      database: "",
    },
  },
  615: {
    java: {
      database: "",
    },
  },
  616: {
    java: {
      "string-matching": "",
    },
  },
  617: {
    java: {
      tree: "",
    },
  },
  618: {
    java: {
      database: "",
    },
  },
  619: {
    java: {
      database: "",
    },
  },
  620: {
    java: {
      database: "",
    },
  },
  621: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  622: {
    java: {
      queue: "",
    },
  },
  623: {
    java: {
      tree: "",
    },
  },
  624: {
    java: {
      greedy: "",
    },
  },
  625: {
    java: {
      greedy: "",
    },
  },
  626: {
    java: {
      database: "",
    },
  },
  627: {
    java: {
      database: "",
    },
  },
  628: {
    java: {
      sorting: "",
    },
  },
  629: {
    java: {
      "dynamic-programming": "",
    },
  },
  630: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  631: {
    java: {
      matrix: "",
    },
  },
  632: {
    java: {
      "sliding-window":
        "import java.util.Comparator;\nimport java.util.PriorityQueue;\n\nclass Solution {\n    public int[] smallestRange(List<List<Integer>> nums) {\n        PriorityQueue<int[]> minHeap = new PriorityQueue<>(Comparator.comparingInt(o -> nums.get(o[0]).get(o[1])));\n        int maxElement = Integer.MIN_VALUE;\n        int start = 0, end = Integer.MAX_VALUE;\n        \n        for (int i = 0; i < nums.size(); i++) {\n            minHeap.offer(new int[]{i, 0});\n            maxElement = Math.max(maxElement, nums.get(i).get(0));\n        }\n        \n        while (true) {\n            int[] current = minHeap.poll();\n            int listIdx = current[0];\n            int elementIdx = current[1];            \n            int currentRange = maxElement - nums.get(listIdx).get(elementIdx);            \n            if (currentRange < end - start) {\n                start = nums.get(listIdx).get(elementIdx);\n                end = maxElement;\n            }            \n            elementIdx++;\n            if (elementIdx == nums.get(listIdx).size()) {\n                break;\n            }            \n            minHeap.offer(new int[]{listIdx, elementIdx});\n            maxElement = Math.max(maxElement, nums.get(listIdx).get(elementIdx));\n        }\n        \n        return new int[]{start, end};\n    }\n}\n",
    },
  },
  633: {
    java: {
      "two-pointers":
        "public class Solution {\n    public boolean judgeSquareSum(int c) {\n        long left = 0;\n        long right = (long) Math.sqrt(c);\n\n        while (left <= right) {\n            long sum = left * left + right * right;\n            if (sum == c) {\n                return true;\n            } else if (sum < c) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n\n        return false;\n    }\n}\n",
    },
  },
  634: {
    java: {
      "dynamic-programming": "",
    },
  },
  635: {
    java: {
      "ordered-set": "",
    },
  },
  636: {
    java: {
      stack: "",
    },
  },
  637: {
    java: {
      tree: "",
    },
  },
  638: {
    java: {
      "dynamic-programming": "",
    },
  },
  639: {
    java: {
      "dynamic-programming": "",
    },
  },
  640: {
    java: {
      math: "",
    },
  },
  641: {
    java: {
      queue: "",
    },
  },
  642: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  643: {
    java: {
      "sliding-window":
        "public class Solution {\n    public double findMaxAverage(int[] nums, int k) {\n        int sum = 0;\n        for (int i = 0; i < k; ++i) {\n            sum += nums[i];\n        }\n        \n        double res = sum;\n        \n        for (int i = k; i < nums.length; ++i) {\n            sum += nums[i] - nums[i - k];\n            res = Math.max(res, sum);\n        }\n        \n        return res / k;\n    }\n}\n",
    },
  },
  644: {
    java: {
      "prefix-sum": "",
    },
  },
  645: {
    java: {
      "bit-manipulation": "",
    },
  },
  646: {
    java: {
      "dynamic-programming": "",
    },
  },
  647: {
    java: {
      "two-pointers":
        "public class Solution {\n    public int countSubstrings(String s) {\n        int n = s.length();\n        int count = 0;\n\n        for (int i = 0; i < n; i++) {\n            count += countPalindromesAroundCenter(s, i, i); // Odd length palindromes\n            count += countPalindromesAroundCenter(s, i, i + 1); // Even length palindromes\n        }\n\n        return count;\n    }\n\n    private int countPalindromesAroundCenter(String s, int left, int right) {\n        int count = 0;\n        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            count++;\n            left--;\n            right++;\n        }\n        return count;\n    }\n}\n",
    },
  },
  648: {
    java: {
      trie: "",
    },
  },
  649: {
    java: {
      queue: "",
    },
  },
  650: {
    java: {
      "dynamic-programming": "",
    },
  },
  651: {
    java: {
      "dynamic-programming": "",
    },
  },
  652: {
    java: {
      tree: "",
    },
  },
  653: {
    java: {
      "two-pointers": "",
    },
  },
  654: {
    java: {
      "monotonic-stack": "",
    },
  },
  655: {
    java: {
      tree: "",
    },
  },
  656: {
    java: {
      "dynamic-programming": "",
    },
  },
  657: {
    java: {
      string: "",
    },
  },
  658: {
    java: {
      "two-pointers":
        "class Solution {\n    public List<Integer> findClosestElements(int[] arr, int k, int x) {\n        int left = 0;\n        int right = arr.length - k;\n\n        while (left < right) {\n            int mid = left + (right - left) / 2;\n            if (x - arr[mid] <= arr[mid + k] - x) {\n                right = mid;\n            } else {\n                left = mid + 1;\n            }\n        }\n\n        List<Integer> result = new ArrayList<>();\n        for (int i = left; i < left + k; i++) {\n            result.add(arr[i]);\n        }\n\n        return result;\n    }\n}\n",
    },
  },
  659: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  660: {
    java: {
      math: "",
    },
  },
  661: {
    java: {
      matrix: "",
    },
  },
  662: {
    java: {
      tree: "",
    },
  },
  663: {
    java: {
      tree: "",
    },
  },
  664: {
    java: {
      "dynamic-programming": "",
    },
  },
  666: {
    java: {
      tree: "",
    },
  },
  667: {
    java: {
      math: "",
    },
  },
  668: {
    java: {
      math: "",
    },
  },
  669: {
    java: {
      "binary-search-tree": "",
    },
  },
  670: {
    java: {
      greedy: "",
    },
  },
  671: {
    java: {
      tree: "",
    },
  },
  672: {
    java: {
      "bit-manipulation": "",
    },
  },
  673: {
    java: {
      "dynamic-programming": "",
    },
  },
  675: {
    java: {
      matrix: "",
    },
  },
  676: {
    java: {
      trie: "",
    },
  },
  677: {
    java: {
      trie: "",
    },
  },
  678: {
    java: {
      stack: "",
    },
  },
  679: {
    java: {
      backtracking: "",
    },
  },
  680: {
    java: {
      "two-pointers": "",
    },
  },
  681: {
    java: {
      backtracking: "",
    },
  },
  682: {
    java: {
      stack: "",
    },
  },
  683: {
    java: {
      "sliding-window":
        "class Solution {\n    public int kEmptySlots(int[] bulbs, int k) {\n      int n = bulbs.length;\n        int ans = Integer.MAX_VALUE;\n        int[] day = new int[n]; // day[i] will store the day when bulb at position (i+1) is turned on\n\n        for (int i = 0; i < n; ++i)\n            day[bulbs[i] - 1] = i + 1;\n\n        int left = 0;\n        int right = left + k + 1;\n        \n        for (int i = 1; right < n; ++i) {\n            if (i == right) {\n                ans = Math.min(ans, Math.max(day[left], day[right]));\n                left = i;\n                right = i + k + 1;\n            } else if (day[i] < Math.max(day[left], day[right])) {\n                left = i;\n                right = i + k + 1;\n            }\n        }\n\n        return ans == Integer.MAX_VALUE ? -1 : ans;\n    }\n}\n",
    },
  },
  684: {
    java: {
      "union-find": "",
    },
  },
  685: {
    java: {
      "union-find": "",
    },
  },
  686: {
    java: {
      "string-matching": "",
    },
  },
  687: {
    java: {
      tree: "",
    },
  },
  688: {
    java: {
      "dynamic-programming": "",
    },
  },
  689: {
    java: {
      "dynamic-programming": "",
    },
  },
  690: {
    java: {
      tree: "",
    },
  },
  691: {
    java: {
      "dynamic-programming": "",
    },
  },
  692: {
    java: {
      "bucket-sort":
        'import java.util.*;\n\nclass Solution {\n    public List<String> topKFrequent(String[] words, int k) {\n        Map<String, Integer> frequencyMap = new HashMap<>();\n        for (String word : words) {\n            frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);\n        }\n\n        List<String>[] buckets = new List[words.length + 1];\n        for (String word : frequencyMap.keySet()) {\n            int frequency = frequencyMap.get(word);\n            if (buckets[frequency] == null) {\n                buckets[frequency] = new ArrayList<>();\n            }\n            buckets[frequency].add(word);\n        }\n\n        List<String> result = new ArrayList<>();\n        for (int i = buckets.length - 1; i >= 0 && result.size() < k; i--) {\n            if (buckets[i] != null) {\n                Collections.sort(buckets[i]);\n                result.addAll(buckets[i]);\n            }\n        }\n\n        return result.subList(0, k);\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        System.out.println(solution.topKFrequent(new String[]{"i", "love", "leetcode", "i", "love", "coding"}, 2)); // Output: ["i", "love"]\n    }\n}\n',
      "heap-(priority-queue)":
        "import java.util.*;\n\nclass Solution {\n    public List<String> topKFrequent(String[] words, int k) {\n        Map<String, Integer> frequencyMap = new HashMap<>();\n        for (String word : words) {\n            frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);\n        }\n\n        PriorityQueue<String> minHeap = new PriorityQueue<>(\n                (a, b) -> frequencyMap.get(a).equals(frequencyMap.get(b))\n                        ? b.compareTo(a)\n                        : frequencyMap.get(a) - frequencyMap.get(b));\n\n        for (String word : frequencyMap.keySet()) {\n            minHeap.offer(word);\n            if (minHeap.size() > k) {\n                minHeap.poll();\n            }\n        }\n\n        List<String> result = new ArrayList<>();\n        while (!minHeap.isEmpty()) {\n            result.add(minHeap.poll());\n        }\n        Collections.reverse(result);\n        return result;\n    }\n}\n",
    },
  },
  693: {
    java: {
      "bit-manipulation": "",
    },
  },
  694: {
    java: {
      "union-find": "",
    },
  },
  695: {
    java: {
      "union-find": "",
    },
  },
  696: {
    java: {
      "two-pointers": "",
    },
  },
  697: {
    java: {
      "hash-table": "",
    },
  },
  698: {
    java: {
      "dynamic-programming": "",
    },
  },
  699: {
    java: {
      "ordered-set": "",
    },
  },
  700: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public TreeNode searchBST(TreeNode root, int val) {\n        if (root == null || root.val == val) {\n            return root;\n        }\n        \n        if (val < root.val) {\n            return searchBST(root.left, val);\n        } else {\n            return searchBST(root.right, val);\n        }\n    }\n}\n",
    },
  },
  701: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public TreeNode insertIntoBST(TreeNode root, int val) {\n        if (root == null) {\n            return new TreeNode(val);\n        }\n        \n        if (val < root.val) {\n            root.left = insertIntoBST(root.left, val);\n        } else {\n            root.right = insertIntoBST(root.right, val);\n        }\n        \n        return root;\n    }\n}\n",
    },
  },
  702: {
    java: {
      interactive: "",
    },
  },
  703: {
    java: {
      "binary-search-tree":
        "import java.util.PriorityQueue;\n\nclass KthLargest {\n    private PriorityQueue<Integer> minHeap;\n    private int k;\n\n    public KthLargest(int k, int[] nums) {\n        this.k = k;\n        this.minHeap = new PriorityQueue<>(k);\n        \n        for (int num : nums) {\n            add(num);\n        }\n    }\n    \n    public int add(int val) {\n        if (minHeap.size() < k) {\n            minHeap.offer(val);\n        } else if (val > minHeap.peek()) {\n            minHeap.poll();\n            minHeap.offer(val);\n        }\n        return minHeap.peek();\n    }\n}\n",
    },
  },
  705: {
    java: {
      "hash-function": "",
    },
  },
  706: {
    java: {
      "hash-function": "",
    },
  },
  707: {
    java: {
      "linked-list": "",
    },
  },
  708: {
    java: {
      "linked-list": "",
    },
  },
  709: {
    java: {
      string: "",
    },
  },
  710: {
    java: {
      randomized: "",
    },
  },
  711: {
    java: {
      "union-find": "",
    },
  },
  712: {
    java: {
      "dynamic-programming": "",
    },
  },
  713: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numSubarrayProductLessThanK(int[] nums, int k) {\n        if (k <= 1) return 0; /\n        int left = 0;\n        int product = 1;\n        int count = 0;\n        \n        for (int right = 0; right < nums.length; right++) {\n            product *= nums[right];\n            \n            while (product >= k) {\n                product /= nums[left];\n                left++;\n            }\n            \n            count += right - left + 1;\n        }\n        \n        return count;\n    }\n}",
    },
  },
  714: {
    java: {
      "dynamic-programming": "",
    },
  },
  715: {
    java: {
      "ordered-set": "",
    },
  },
  716: {
    java: {
      "doubly-linked-list":
        "class Node {\n    public int val;\n    public Node prev, next;\n\n    public Node() {\n    }\n\n    public Node(int val) {\n        this.val = val;\n    }\n}\n\nclass DoubleLinkedList {\n    private final Node head = new Node();\n    private final Node tail = new Node();\n\n    public DoubleLinkedList() {\n        head.next = tail;\n        tail.prev = head;\n    }\n\n    public Node append(int val) {\n        Node node = new Node(val);\n        node.next = tail;\n        node.prev = tail.prev;\n        tail.prev = node;\n        node.prev.next = node;\n        return node;\n    }\n\n    public static Node remove(Node node) {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n        return node;\n    }\n\n    public Node pop() {\n        return remove(tail.prev);\n    }\n\n    public int peek() {\n        return tail.prev.val;\n    }\n}\n\nclass MaxStack {\n    private DoubleLinkedList stack = new DoubleLinkedList();\n    private TreeMap<Integer, List<Node>> map = new TreeMap<>();\n\n    public MaxStack() {\n    }\n\n    public void push(int x) {\n        Node node = stack.append(x);\n        map.computeIfAbsent(x, k -> new ArrayList<>()).add(node);\n    }\n\n    public int pop() {\n        Node node = stack.pop();\n        List<Node> nodes = map.get(node.val);\n        int x = nodes.remove(nodes.size() - 1).val;\n        if (nodes.isEmpty()) {\n            map.remove(node.val);\n        }\n        return x;\n    }\n\n    public int top() {\n        return stack.peek();\n    }\n\n    public int peekMax() {\n        return map.lastackey();\n    }\n\n    public int popMax() {\n        int x = peekMax();\n        List<Node> nodes = map.get(x);\n        Node node = nodes.remove(nodes.size() - 1);\n        if (nodes.isEmpty()) {\n            map.remove(x);\n        }\n        DoubleLinkedList.remove(node);\n        return x;\n    }\n}\n\n/**\n * Your MaxStack object will be instantiated and called as such:\n * MaxStack obj = new MaxStack();\n * obj.push(x);\n * int param_2 = obj.pop();\n * int param_3 = obj.top();\n * int param_4 = obj.peekMax();\n * int param_5 = obj.popMax();\n */",
    },
  },
  718: {
    java: {
      "sliding-window":
        "class Solution {\n    public int findLength(int[] A, int[] B) {\n        int m = A.length;\n        int n = B.length;\n        int[][] dp = new int[m + 1][n + 1];\n        int maxLen = 0;\n\n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= n; j++) {\n                if (A[i - 1] == B[j - 1]) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                    maxLen = Math.max(maxLen, dp[i][j]);\n                } else {\n                    dp[i][j] = 0;\n                }\n            }\n        }\n\n        return maxLen;\n    }\n}\n",
    },
  },
  719: {
    java: {
      "two-pointers":
        "import java.util.Arrays;\n\npublic class Solution {\n    public int smallestDistancePair(int[] nums, int k) {\n        Arrays.sort(nums);\n        int n = nums.length;\n        int left = 0;\n        int right = nums[n - 1] - nums[0];\n\n        while (left < right) {\n            int mid = (left + right) / 2;\n            if (countPairs(nums, mid) < k) {\n                left = mid + 1;\n            } else {\n                right = mid;\n            }\n        }\n\n        return left;\n    }\n\n    private int countPairs(int[] nums, int mid) {\n        int count = 0;\n        int n = nums.length;\n        for (int i = 0; i < n; i++) {\n            int j = i;\n            while (j < n && nums[j] - nums[i] <= mid) {\n                j++;\n            }\n            count += j - i - 1;\n        }\n        return count;\n    }\n}\n",
    },
  },
  720: {
    java: {
      trie: "",
    },
  },
  721: {
    java: {
      "union-find": "",
    },
  },
  722: {
    java: {
      string: "",
    },
  },
  723: {
    java: {
      "two-pointers": "",
    },
  },
  724: {
    java: {
      "prefix-sum": "",
    },
  },
  725: {
    java: {
      "linked-list": "",
    },
  },
  726: {
    java: {
      stack:
        'class Solution {\n    public String countOfAtoms(String formula) {\n        StringBuffer sb = new StringBuffer();\n        sb.append(formula.charAt(0));\n        char prevC = formula.charAt(0);\n        int length = formula.length();\n        for (int i = 1; i < length; i++) {\n            char c = formula.charAt(i);\n            boolean flag = Character.isLowerCase(c) || Character.isDigit(c) && Character.isDigit(prevC);\n            if (!flag)\n                sb.append(\' \');\n            sb.append(c);\n            prevC = c;\n        }\n        String[] array = sb.toString().split(" ");\n        Stack<String> stack = new Stack<String>();\n        int arrayLength = array.length;\n        for (int i = 0; i < arrayLength; i++) {\n            String str = array[i];\n            if (str.equals(")")) {\n                if (i < arrayLength - 1 && Character.isDigit(array[i + 1].charAt(0)))\n                    stack.push(str);\n                else {\n                    Stack<String> tempStack = new Stack<String>();\n                    while (!stack.peek().equals("("))\n                        tempStack.push(stack.pop());\n                    stack.pop();\n                    while (!tempStack.isEmpty())\n                        stack.push(tempStack.pop());\n                }\n            } else if (Character.isDigit(str.charAt(0))) {\n                int count = Integer.parseInt(str);\n                String prev = stack.pop();\n                if (prev.equals(")")) {\n                    Stack<String> tempStack = new Stack<String>();\n                    while (!stack.peek().equals("(")) {\n                        String element = stack.pop();\n                        int index = element.indexOf(\',\');\n                        if (index >= 0) {\n                            String atom = element.substring(0, index);\n                            int atomCount = Integer.parseInt(element.substring(index + 1)) * count;\n                            tempStack.push(atom + "," + atomCount);\n                        } else\n                            tempStack.push(element + "," + str);\n                    }\n                    stack.pop();\n                    while (!tempStack.isEmpty())\n                        stack.push(tempStack.pop());\n                } else {\n                    String curStr = prev + "," + str;\n                    stack.push(curStr);\n                }\n            } else\n                stack.push(str);\n        }\n        TreeMap<String, Integer> map = new TreeMap<String, Integer>();\n        while (!stack.isEmpty()) {\n            String atomCount = stack.pop();\n            int index = atomCount.indexOf(\',\');\n            if (index >= 0) {\n                String atom = atomCount.substring(0, index);\n                int count = Integer.parseInt(atomCount.substring(index + 1));\n                count += map.getOrDefault(atom, 0);\n                map.put(atom, count);\n            } else {\n                int count = map.getOrDefault(atomCount, 0) + 1;\n                map.put(atomCount, count);\n            }\n        }\n        StringBuffer output = new StringBuffer();\n        Set<String> keySet = map.keySet();\n        for (String atom : keySet) {\n            int count = map.get(atom);\n            output.append(atom);\n            if (count > 1)\n                output.append(count);\n        }\n        return output.toString();\n    }\n}',
    },
  },
  727: {
    java: {
      "sliding-window":
        'class Solution {\n  public String minWindow(String s1, String s2) {\n  int m = s2.length();\n  int n = s1.length();\n    int[][] dp = new int[m + 1][n + 1];\n\n    for (int j = 0; j <= n; ++j)\n      dp[0][j] = j + 1;\n\n    for (int i = 1; i <= m; ++i)\n      for (int j = 1; j <= n; ++j)\n        if (s2.charAt(i - 1) == s1.charAt(j - 1))\n          dp[i][j] = dp[i - 1][j - 1];\n        else\n          dp[i][j] = dp[i][j - 1];\n\n    int bestLeft = 0;\n    int minLength = Integer.MAX_VALUE;\n\n    for (int j = 1; j <= n; ++j)\n      if (dp[m][j] > 0 && j - dp[m][j] + 1 < minLength) {\n        bestLeft = dp[m][j] - 1;\n        minLength = j - dp[m][j] + 1;\n      }\n\n    return minLength == Integer.MAX_VALUE ? "" : s1.substring(bestLeft, bestLeft + minLength);\n  }\n}',
    },
  },
  728: {
    java: {
      math: "",
    },
  },
  729: {
    java: {
      "ordered-set": "",
    },
  },
  730: {
    java: {
      "dynamic-programming": "",
    },
  },
  731: {
    java: {
      "prefix-sum": "",
    },
  },
  732: {
    java: {
      "prefix-sum": "",
    },
  },
  733: {
    java: {
      matrix: "",
    },
  },
  734: {
    java: {
      "hash-table": "",
    },
  },
  735: {
    java: {
      stack:
        "// [5,10,-5]\nclass Solution {\n    public int[] asteroidCollision(int[] asteroids) {\n        Stack<Integer> stack = new Stack<>();\n        for (final int a : asteroids)\n            if (a > 0) {\n                stack.push(a);\n            } else {\n                while (!stack.isEmpty() && stack.peek() > 0 && stack.peek() < -a)\n                    stack.pop();\n                if (stack.isEmpty() || stack.peek() < 0)\n                    stack.push(a);\n                else if (stack.peek() == -a)\n                    stack.pop();\n            }\n        int[] ans = new int[stack.size()];\n        for (int i = ans.length - 1; i >= 0; --i)\n            ans[i] = stack.pop();\n        return ans;\n    }\n}\n",
    },
  },
  736: {
    java: {
      stack: "",
    },
  },
  737: {
    java: {
      "union-find": "",
    },
  },
  738: {
    java: {
      greedy: "",
    },
  },
  739: {
    java: {
      "monotonic-stack": "",
    },
  },
  740: {
    java: {
      "dynamic-programming": "",
    },
  },
  741: {
    java: {
      matrix: "",
    },
  },
  742: {
    java: {
      tree: "",
    },
  },
  743: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  745: {
    java: {
      trie: "",
    },
  },
  746: {
    java: {
      "dynamic-programming": "",
    },
  },
  747: {
    java: {
      sorting: "",
    },
  },
  748: {
    java: {
      "hash-table": "",
    },
  },
  749: {
    java: {
      matrix: "",
    },
  },
  750: {
    java: {
      matrix: "",
    },
  },
  751: {
    java: {
      "bit-manipulation": "",
    },
  },
  752: {
    java: {
      "breadth-first-search": "",
    },
  },
  753: {
    java: {
      "eulerian-circuit":
        "class Solution {\n\n    public String crackSafe(int n, int k) {\n        if (n == 1) {\n            StringBuilder sb = new StringBuilder();\n            for (int i = 0; i < k; i++) {\n                sb.append(i);\n            }\n            return sb.toString();\n        }\n\n        StringBuilder result = new StringBuilder();\n        Set<String> visited = new HashSet<>();\n        Stack<String> stack = new Stack<>();\n        String start = String.join('', Collections.nCopies(n - 1, '0'));\n        stack.push(start);\n\n        while (!stack.isEmpty()) {\n            String node = stack.peek();\n            boolean hasUnvisitedEdge = false;\n\n            // Try all possible edges from this node by appending each digit from 0 to k-1\n            for (int i = 0; i < k; i++) {\n                String next = node + i;\n                if (!visited.contains(next)) {\n                    visited.add(next);\n                    stack.push(next.substring(1));\n                    hasUnvisitedEdge = true;\n                    break;\n                }\n            }\n\n            // If all edges from this node are visited, backtrack and append the last\n            // character to the result\n            if (!hasUnvisitedEdge) {\n                result.append(stack.pop().charAt(node.length() - 1));\n            }\n        }\n\n        result.append(start.substring(0, start.length() - 1));\n        return result.toString();\n    }\n\n    // public String crackSafe(int n, int k) {\n    // StringBuilder result = new StringBuilder();\n    // Set<String> visited = new HashSet<>();\n    // String start = String.join('', Collections.nCopies(n - 1, '0'));\n    // dfs(start, k, visited, result, n);\n    // result.append(start);\n    // return result.toString();\n    // }\n    // private void dfs(String node, int k, Set<String> visited, StringBuilder\n    // result, int n) {\n    // for (int i = 0; i < k; i++) {\n    // String next = node + i;\n    // if (!visited.contains(next)) {\n    // visited.add(next);\n    // dfs(next.substring(1), k, visited, result, n);\n    // result.append(i);\n    // }\n    // }\n    // }\n\n}",
    },
  },
  754: {
    java: {
      math: "",
    },
  },
  756: {
    java: {
      "bit-manipulation": "",
    },
  },
  757: {
    java: {
      greedy: "",
    },
  },
  758: {
    java: {
      "string-matching": "",
    },
  },
  759: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  760: {
    java: {
      "hash-table": "",
    },
  },
  761: {
    java: {
      recursion: "",
    },
  },
  762: {
    java: {
      "bit-manipulation": "",
    },
  },
  763: {
    java: {
      "two-pointers": "",
    },
  },
  764: {
    java: {
      "dynamic-programming": "",
    },
  },
  765: {
    java: {
      "union-find": "",
    },
  },
  766: {
    java: {
      matrix: "",
    },
  },
  767: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  768: {
    java: {
      "monotonic-stack":
        "class Solution {\n    public int maxChunksToSorted(int[] arr) {\n        int n = arr.length;\n        Stack<Integer> stack = new Stack<>();\n\n        for (int i = 0; i < n; i++) {\n            int max = arr[i];\n            while (!stack.isEmpty() && stack.peek() > arr[i]) {\n                max = Math.max(max, stack.pop());\n            }\n            stack.push(max);\n        }\n\n        return stack.size();\n    }\n}\n",
    },
  },
  769: {
    java: {
      "monotonic-stack":
        "public class Solution {\n    public int maxChunksToSorted(int[] arr) {\n        int maxChunks = 0;\n        int maxElement = 0;\n\n        for (int i = 0; i < arr.length; i++) {\n            maxElement = Math.max(maxElement, arr[i]);\n            if (maxElement == i) {\n                maxChunks++;\n            }\n        }\n\n        return maxChunks;\n    }\n}\n",
    },
  },
  770: {
    java: {
      stack: "",
    },
  },
  771: {
    java: {
      "hash-table": "",
    },
  },
  772: {
    java: {
      stack: "",
    },
  },
  773: {
    java: {
      matrix: "",
    },
  },
  775: {
    java: {
      math: "",
    },
  },
  776: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private int t;\n\n    public TreeNode[] splitBST(TreeNode root, int target) {\n        t = target;\n        return dfs(root);\n    }\n\n    private TreeNode[] dfs(TreeNode root) {\n        if (root == null) {\n            return new TreeNode[] {null, null};\n        }\n        if (root.val <= t) {\n            TreeNode[] ans = dfs(root.right);\n            root.right = ans[0];\n            ans[0] = root;\n            return ans;\n        } else {\n            TreeNode[] ans = dfs(root.left);\n            root.left = ans[1];\n            ans[1] = root;\n            return ans;\n        }\n    }\n}",
    },
  },
  777: {
    java: {
      "two-pointers": "",
    },
  },
  778: {
    java: {
      "union-find": "",
    },
  },
  779: {
    java: {
      recursion: "",
    },
  },
  780: {
    java: {
      math: "",
    },
  },
  781: {
    java: {
      greedy: "",
    },
  },
  782: {
    java: {
      matrix: "",
    },
  },
  783: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private Integer prev;\n    private int minDiff;\n\n    public int minDiffInBST(TreeNode root) {\n        minDiff = Integer.MAX_VALUE;\n        prev = null;\n        inorder(root);\n        return minDiff;\n    }\n    \n    private void inorder(TreeNode node) {\n        if (node == null) {\n            return;\n        }\n        \n        inorder(node.left);\n        \n        if (prev != null) {\n            minDiff = Math.min(minDiff, node.val - prev);\n        }\n        prev = node.val;\n        \n        inorder(node.right);\n    }\n}\n",
    },
  },
  784: {
    java: {
      backtracking: "",
    },
  },
  785: {
    java: {
      "union-find": "",
    },
  },
  786: {
    java: {
      "two-pointers":
        "import java.util.PriorityQueue;\n\npublic class Solution {\n    public int[] kthSmallestPrimeFraction(int[] arr, int k) {\n        int n = arr.length;\n        PriorityQueue<Fraction> minHeap = new PriorityQueue<>((a, b) -> Double.compare(a.value, b.value));\n\n        for (int i = 0; i < n - 1; i++) {\n            minHeap.offer(new Fraction(i, n - 1, (double) arr[i] / arr[n - 1]));\n        }\n\n        Fraction fraction = null;\n        for (int i = 0; i < k; i++) {\n            fraction = minHeap.poll();\n            int numeratorIndex = fraction.numeratorIndex;\n            int denominatorIndex = fraction.denominatorIndex;\n            if (denominatorIndex - 1 > numeratorIndex) {\n                minHeap.offer(new Fraction(numeratorIndex, denominatorIndex - 1,\n                        (double) arr[numeratorIndex] / arr[denominatorIndex - 1]));\n            }\n        }\n\n        return new int[] { arr[fraction.numeratorIndex], arr[fraction.denominatorIndex] };\n    }\n\n    private static class Fraction {\n        int numeratorIndex;\n        int denominatorIndex;\n        double value;\n\n        Fraction(int numeratorIndex, int denominatorIndex, double value) {\n            this.numeratorIndex = numeratorIndex;\n            this.denominatorIndex = denominatorIndex;\n            this.value = value;\n        }\n    }\n}\n",
    },
  },
  787: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  788: {
    java: {
      "dynamic-programming": "",
    },
  },
  789: {
    java: {
      math: "",
    },
  },
  790: {
    java: {
      "dynamic-programming": "",
    },
  },
  791: {
    java: {
      sorting: "",
    },
  },
  792: {
    java: {
      "dynamic-programming": "",
    },
  },
  793: {
    java: {
      math: "",
    },
  },
  794: {
    java: {
      matrix: "",
    },
  },
  795: {
    java: {
      "two-pointers": "",
    },
  },
  796: {
    java: {
      "string-matching": "",
    },
  },
  797: {
    java: {
      backtracking: "",
    },
  },
  798: {
    java: {
      "prefix-sum": "",
    },
  },
  799: {
    java: {
      "dynamic-programming": "",
    },
  },
  800: {
    java: {
      enumeration: "",
    },
  },
  801: {
    java: {
      "dynamic-programming": "",
    },
  },
  802: {
    java: {
      "topological-sort": "",
    },
  },
  803: {
    java: {
      "union-find": "",
    },
  },
  804: {
    java: {
      "hash-table": "",
    },
  },
  805: {
    java: {
      "dynamic-programming": "",
    },
  },
  806: {
    java: {
      string: "",
    },
  },
  807: {
    java: {
      matrix: "",
    },
  },
  808: {
    java: {
      "probability-and-statistics":
        "class Solution {\n    public double soupServings(int n) {\n        // If n is large, directly return 1.0 as per problem statement\n        if (n >= 4800) return 1.0;\n        \n        // We need to calculate up to 2 * n\n        int m = n / 25 + (n % 25 == 0 ? 0 : 1);\n        \n        // dp[i][j] represents the probability that Chef A has i ml and Chef B has j ml\n        double[][] dp = new double[m + 1][m + 1];\n        \n        dp[0][0] = 0.5; // Both soups are empty initially\n        for (int i = 1; i <= m; i++) {\n            dp[0][i] = 1.0; // Chef A's soup is empty, Chef A has already lost\n            dp[i][0] = 0.0; // Chef B's soup is empty, Chef A wins\n        }\n        \n        for (int i = 1; i <= m; i++) {\n            for (int j = 1; j <= m; j++) {\n                dp[i][j] = 0.25 * (dp[Math.max(0, i - 4)][j] +\n                                   dp[Math.max(0, i - 3)][Math.max(0, j - 1)] +\n                                   dp[Math.max(0, i - 2)][Math.max(0, j - 2)] +\n                                   dp[Math.max(0, i - 1)][Math.max(0, j - 3)]);\n            }\n        }\n        \n        // The probability that both soups are empty at the same time when n ml are consumed in total\n        return dp[m][m];\n    }\n}\n",
    },
  },
  809: {
    java: {
      "two-pointers": "",
    },
  },
  810: {
    java: {
      brainteaser: "",
    },
  },
  811: {
    java: {
      counting: "",
    },
  },
  812: {
    java: {
      geometry: "",
    },
  },
  813: {
    java: {
      "prefix-sum": "",
    },
  },
  814: {
    java: {
      tree: "",
    },
  },
  815: {
    java: {
      "breadth-first-search": "",
    },
  },
  816: {
    java: {
      backtracking: "",
    },
  },
  817: {
    java: {
      "linked-list": "",
    },
  },
  818: {
    java: {
      "dynamic-programming": "",
    },
  },
  819: {
    java: {
      counting: "",
    },
  },
  820: {
    java: {
      trie: "",
    },
  },
  821: {
    java: {
      "two-pointers": "",
    },
  },
  822: {
    java: {
      "hash-table": "",
    },
  },
  823: {
    java: {
      "dynamic-programming": "",
    },
  },
  824: {
    java: {
      string: "",
    },
  },
  825: {
    java: {
      "two-pointers": "",
    },
  },
  826: {
    java: {
      "two-pointers": "",
    },
  },
  827: {
    java: {
      "union-find": "",
    },
  },
  828: {
    java: {
      "dynamic-programming": "",
    },
  },
  829: {
    java: {
      enumeration: "",
    },
  },
  830: {
    java: {
      string: "",
    },
  },
  831: {
    java: {
      string: "",
    },
  },
  832: {
    java: {
      "two-pointers": "",
    },
  },
  833: {
    java: {
      sorting: "",
    },
  },
  834: {
    java: {
      "dynamic-programming": "",
    },
  },
  835: {
    java: {
      matrix: "",
    },
  },
  836: {
    java: {
      geometry: "",
    },
  },
  837: {
    java: {
      "probability-and-statistics":
        "class Solution {\n    public double new21Game(int N, int K, int W) {\n        if (K == 0 || N >= K + W) return 1.0;\n        \n        double[] dp = new double[N + 1];\n        double sum = 0.0;\n        dp[0] = 1.0;\n        sum += dp[0];\n        \n        for (int i = 1; i <= N; i++) {\n            dp[i] = sum / W;\n            if (i < K) sum += dp[i];\n            if (i - W >= 0) sum -= dp[i - W];\n        }\n        \n        double probability = 0.0;\n        for (int i = K; i <= N; i++) {\n            probability += dp[i];\n        }\n        \n        return probability;\n    }\n}\n",
    },
  },
  838: {
    java: {
      "two-pointers": "",
    },
  },
  839: {
    java: {
      "union-find": "",
    },
  },
  840: {
    java: {
      matrix: "",
    },
  },
  841: {
    java: {
      graph: "",
    },
  },
  842: {
    java: {
      backtracking: "",
    },
  },
  843: {
    java: {
      interactive: "",
    },
  },
  844: {
    java: {
      "two-pointers": "",
    },
  },
  845: {
    java: {
      "two-pointers": "",
    },
  },
  846: {
    java: {
      greedy: "",
    },
  },
  847: {
    java: {
      "dynamic-programming": "",
    },
  },
  848: {
    java: {
      "prefix-sum": "",
    },
  },
  850: {
    java: {
      "line-sweep":
        "class Event {\n  public int x;\n  public int y1;\n  public int y2;\n  public char type;\n  public Event(int x, int y1, int y2, char type) {\n    this.x = x;\n    this.y1 = y1;\n    this.y2 = y2;\n    this.type = type;\n  }\n}\n\nclass Solution {\n  public int rectangleArea(int[][] rectangles) {\n  int kMod = 1_000_000_007;\n    List<Event> events = new ArrayList<>();\n\n    for (int[] right : rectangles) {\n      events.add(new Event(right[0], right[1], right[3], 's'));\n      events.add(new Event(right[2], right[1], right[3], 'e'));\n    }\n\n    Collections.sort(events, (a, b) -> a.x - b.x);\n\n    long ans = 0;\n    int prevX = 0;\n    List<Pair<Integer, Integer>> yPairs = new ArrayList<>();\n\n    for (Event e : events) {\n      if (e.x > prevX) {\n      int width = e.x - prevX;\n        ans = (ans + width * getHeight(yPairs)) % kMod;\n        prevX = e.x;\n      }\n      if (e.type == 's') {\n        yPairs.add(new Pair<>(e.y1, e.y2));\n        Collections.sort(yPairs, Comparator.comparing(Pair::getKey));\n      } else { // type == 'e'\n        yPairs.remove(new Pair<>(e.y1, e.y2));\n      }\n    }\n\n    return (int) (ans % kMod);\n  }\n\n  private long getHeight(List<Pair<Integer, Integer>> yPairs) {\n    int height = 0;\n    int prevY = 0;\n\n    for (Pair<Integer, Integer> pair : yPairs) {\n    int y1 = pair.getKey();\n    int y2 = pair.getValue();\n      prevY = Math.max(prevY, y1);\n      if (y2 > prevY) {\n        height += y2 - prevY;\n        prevY = y2;\n      }\n    }\n\n    return height;\n  }\n}",
    },
  },
  851: {
    java: {
      "topological-sort": "",
    },
  },
  853: {
    java: {
      "monotonic-stack": "",
    },
  },
  854: {
    java: {
      "breadth-first-search": "",
    },
  },
  855: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  856: {
    java: {
      stack: "",
    },
  },
  857: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  858: {
    java: {
      geometry: "",
    },
  },
  859: {
    java: {
      "hash-table": "",
    },
  },
  860: {
    java: {
      greedy: "",
    },
  },
  861: {
    java: {
      matrix: "",
    },
  },
  862: {
    java: {
      "monotonic-queue":
        "import java.util.Deque;\nimport java.util.LinkedList;\n\npublic class Solution {\n\n    public int shortestSubarray(int[] nums, int K) {\n        int n = nums.length;\n        long[] prefixSum = new long[n + 1];        \n        for (int i = 0; i < n; i++) {\n            prefixSum[i + 1] = prefixSum[i] + nums[i];\n        }\n        \n        Deque<Integer> deque = new LinkedList<>();\n        int minLength = Integer.MAX_VALUE;\n        \n        for (int i = 0; i <= n; i++) {\n            while (!deque.isEmpty() && prefixSum[i] - prefixSum[deque.peekFirst()] >= K) {\n                minLength = Math.min(minLength, i - deque.pollFirst());\n            }            \n            while (!deque.isEmpty() && prefixSum[i] <= prefixSum[deque.peekLast()]) {\n                deque.pollLast();\n            }\n            \n            deque.addLast(i);\n        }\n        \n        return minLength == Integer.MAX_VALUE ? -1 : minLength;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums = {2, -1, 2};\n        int K = 3;\n        System.out.println(solution.shortestSubarray(nums, K)); \n    }\n}\n",
    },
  },
  863: {
    java: {
      tree: "",
    },
  },
  864: {
    java: {
      matrix: "",
    },
  },
  865: {
    java: {
      tree: "",
    },
  },
  866: {
    java: {
      "number-theory": "",
    },
  },
  867: {
    java: {
      matrix: "",
    },
  },
  868: {
    java: {
      "bit-manipulation": "",
    },
  },
  869: {
    java: {
      enumeration: "",
    },
  },
  870: {
    java: {
      "two-pointers": "",
    },
  },
  871: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  872: {
    java: {
      tree: "",
    },
  },
  873: {
    java: {
      "dynamic-programming": "",
    },
  },
  874: {
    java: {
      "hash-table": "",
    },
  },
  876: {
    java: {
      "two-pointers": "",
    },
  },
  877: {
    java: {
      "game-theory": "",
    },
  },
  878: {
    java: {
      math: "",
    },
  },
  879: {
    java: {
      "dynamic-programming": "",
    },
  },
  880: {
    java: {
      stack: "",
    },
  },
  881: {
    java: {
      "two-pointers": "",
    },
  },
  882: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  883: {
    java: {
      matrix: "",
    },
  },
  884: {
    java: {
      "hash-table": "",
    },
  },
  885: {
    java: {
      matrix: "",
    },
  },
  886: {
    java: {
      "union-find": "",
    },
  },
  887: {
    java: {
      "dynamic-programming": "",
    },
  },
  888: {
    java: {
      sorting: "",
    },
  },
  889: {
    java: {
      tree: "",
    },
  },
  890: {
    java: {
      "hash-table": "",
    },
  },
  891: {
    java: {
      sorting: "",
    },
  },
  892: {
    java: {
      matrix: "",
    },
  },
  893: {
    java: {
      sorting: "",
    },
  },
  894: {
    java: {
      "dynamic-programming": "",
    },
  },
  895: {
    java: {
      stack:
        "class FreqStack {\n  public void push(int val) {\n    count.merge(val, 1, Integer::sum);\n    countToStack.putIfAbsent(count.get(val), new ArrayDeque<>());\n    countToStack.get(count.get(val)).push(val);\n    maxFreq = Math.max(maxFreq, count.get(val));\n  }\n\n  public int pop() {\n    final int val = countToStack.get(maxFreq).pop();\n    count.merge(val, -1, Integer::sum);\n    if (countToStack.get(maxFreq).isEmpty())\n      --maxFreq;\n    return val;\n  }\n\n  private int maxFreq = 0;\n  private Map<Integer, Integer> count = new HashMap<>();\n  private Map<Integer, Deque<Integer>> countToStack = new HashMap<>();\n}\n\n/**\n * Your FreqStack object will be instantiated and called as such:\n * FreqStack obj = new FreqStack();\n * obj.push(val);\n * int param_2 = obj.pop();\n */",
    },
  },
  897: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private TreeNode result;\n\n    public TreeNode increasingBST(TreeNode root) {\n        TreeNode dummy = new TreeNode();\n        result = dummy;\n        inorder(root);\n        return dummy.right;\n    }\n    \n    private void inorder(TreeNode node) {\n        if (node == null) {\n            return;\n        }\n        \n        inorder(node.left);\n        \n        result.right = new TreeNode(node.val);\n        result = result.right;\n        \n        inorder(node.right);\n    }\n}\n",
    },
  },
  898: {
    java: {
      "dynamic-programming": "",
    },
  },
  899: {
    java: {
      sorting: "",
    },
  },
  900: {
    java: {
      iterator:
        "class RLEIterator {\n    private int[] encoding;\n    private int index;\n\n    public RLEIterator(int[] encoding) {\n        this.encoding = encoding;\n        this.index = 0;\n    }\n\n    public int next(int n) {\n        while (index < encoding.length) {\n            if (n <= encoding[index]) {\n                encoding[index] -= n;\n                return encoding[index + 1];\n            } else {\n                n -= encoding[index];\n                index += 2;\n            }\n        }\n        return -1; \n    }\n}\n\n/**\n * Your RLEIterator object will be instantiated and called as such:\n * RLEIterator obj = new RLEIterator(encoding);\n * int param_1 = obj.next(n);\n */",
    },
  },
  901: {
    java: {
      "monotonic-stack":
        "import java.util.Stack;\n\nclass StockSpanner {\n    Stack<int[]> stack;\n\n    public StockSpanner() {\n        stack = new Stack<>();\n    }\n\n    public int next(int price) {\n        int span = 1;\n        while (!stack.isEmpty() && stack.peek()[0] <= price) {\n            span += stack.pop()[1];\n        }\n        stack.push(new int[]{price, span});\n        return span;\n    }\n}\n\n/**\n * Your StockSpanner object will be instantiated and called as such:\n * StockSpanner obj = new StockSpanner();\n * int param_1 = obj.next(price);\n */\n",
    },
  },
  902: {
    java: {
      "dynamic-programming": "",
    },
  },
  903: {
    java: {
      "prefix-sum": "",
    },
  },
  904: {
    java: {
      "sliding-window":
        "class Solution {\n    public int totalFruit(int[] tree) {\n        int maxFruits = 0;\n        int start = 0;\n        Map<Integer, Integer> fruitCount = new HashMap<>();\n        \n        for (int end = 0; end < tree.length; end++) {\n            fruitCount.put(tree[end], fruitCount.getOrDefault(tree[end], 0) + 1);\n            \n            while (fruitCount.size() > 2) {\n                fruitCount.put(tree[start], fruitCount.get(tree[start]) - 1);\n                if (fruitCount.get(tree[start]) == 0) {\n                    fruitCount.remove(tree[start]);\n                }\n                start++;\n            }\n            \n            maxFruits = Math.max(maxFruits, end - start + 1);\n        }\n        \n        return maxFruits;\n    }\n}\n",
    },
  },
  905: {
    java: {
      "two-pointers": "",
    },
  },
  906: {
    java: {
      enumeration: "",
    },
  },
  907: {
    java: {
      "monotonic-stack":
        "import java.util.Stack;\n\npublic class Solution {\n    public int sumSubarrayMins(int[] arr) {\n        int MOD = 1_000_000_007;\n        int n = arr.length;\n        \n        Stack<Integer> stack = new Stack<>();        \n        int[] prevLess = new int[n];\n        int[] nextLess = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {\n                stack.pop();\n            }\n            prevLess[i] = stack.isEmpty() ? -1 : stack.peek();\n            stack.push(i);\n        }\n        \n        stack.clear();\n        \n        for (int i = n - 1; i >= 0; i--) {\n            while (!stack.isEmpty() && arr[stack.peek()] > arr[i]) {\n                stack.pop();\n            }\n            nextLess[i] = stack.isEmpty() ? n : stack.peek();\n            stack.push(i);\n        }\n        \n        long result = 0;\n        \n        for (int i = 0; i < n; i++) {\n            int leftCount = i - prevLess[i];\n            int rightCount = nextLess[i] - i;\n            result = (result + (long) arr[i] * leftCount * rightCount) % MOD;\n        }\n        \n        return (int) result;\n    }\n}\n",
    },
  },
  908: {
    java: {
      math: "",
    },
  },
  909: {
    java: {
      matrix: "",
    },
  },
  910: {
    java: {
      greedy: "",
    },
  },
  911: {
    java: {
      design: "",
    },
  },
  912: {
    java: {
      "radix-sort":
        "import java.util.Arrays;\n\nclass Solution {\n    public int[] sortArray(int[] nums) {\n        if (nums == null || nums.length < 2) {\n            return nums;\n        }\n\n        // Find the maximum absolute value to handle negative numbers\n        int max = Arrays.stream(nums).map(Math::abs).max().getAsInt();\n        int exp = 1;\n\n        while (max / exp > 0) {\n            countingSort(nums, exp);\n            exp *= 10;\n        }\n\n        return nums;\n    }\n\n    private void countingSort(int[] nums, int exp) {\n        int n = nums.length;\n        int[] output = new int[n];\n        int[] count = new int[19]; // 19 because the range of values is [-9, 9]\n\n        for (int num : nums) {\n            int index = (num / exp) % 10 + 9; // Shifting by 9 to handle negative numbers\n            count[index]++;\n        }\n\n        for (int i = 1; i < 19; i++) {\n            count[i] += count[i - 1];\n        }\n\n        for (int i = n - 1; i >= 0; i--) {\n            int index = (nums[i] / exp) % 10 + 9;\n            output[count[index] - 1] = nums[i];\n            count[index]--;\n        }\n\n        System.arraycopy(output, 0, nums, 0, n);\n    }\n}\n",
      "bucket-sort":
        'import java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\n\nclass Solution {\n    public int[] sortArray(int[] nums) {\n        if (nums == null || nums.length == 0) return nums;\n\n        int n = nums.length;\n        int minValue = nums[0];\n        int maxValue = nums[0];\n\n        for (int num : nums) {\n            if (num < minValue) {\n                minValue = num;\n            } else if (num > maxValue) {\n                maxValue = num;\n            }\n        }\n\n        int bucketCount = (maxValue - minValue) / n + 1;\n        List<Integer>[] buckets = new List[bucketCount];\n        for (int i = 0; i < bucketCount; i++) {\n            buckets[i] = new ArrayList<>();\n        }\n\n        for (int num : nums) {\n            int bucketIndex = (num - minValue) / n;\n            buckets[bucketIndex].add(num);\n        }\n\n        int index = 0;\n        for (List<Integer> bucket : buckets) {\n            Collections.sort(bucket);\n            for (int num : bucket) {\n                nums[index++] = num;\n            }\n        }\n\n        return nums;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums = {5, 2, 9, 1, 5, 6};\n        int[] sorted = solution.sortArray(nums);\n        for (int num : sorted) {\n            System.out.print(num + " ");\n        }\n        // Output: 1 2 5 5 6 9\n    }\n}\n',
      "merge-sort":
        "class Solution {\n    public int[] sortArray(int[] nums) {\n        mergeSort(nums, 0, nums.length - 1);\n        return nums;\n    }\n    \n    private void mergeSort(int[] nums, int left, int right) {\n        if (left < right) {\n            int mid = left + (right - left) / 2;\n            mergeSort(nums, left, mid);\n            mergeSort(nums, mid + 1, right);\n            merge(nums, left, mid, right);\n        }\n    }\n    \n    private void merge(int[] nums, int left, int mid, int right) {\n        int n1 = mid - left + 1;\n        int n2 = right - mid;\n        \n        int[] leftArr = new int[n1];\n        int[] rightArr = new int[n2];\n        \n        for (int i = 0; i < n1; i++) {\n            leftArr[i] = nums[left + i];\n        }\n        \n        for (int j = 0; j < n2; j++) {\n            rightArr[j] = nums[mid + 1 + j];\n        }\n        \n        int i = 0, j = 0, k = left;\n        \n        while (i < n1 && j < n2) {\n            if (leftArr[i] <= rightArr[j]) {\n                nums[k++] = leftArr[i++];\n            } else {\n                nums[k++] = rightArr[j++];\n            }\n        }\n        \n        while (i < n1) {\n            nums[k++] = leftArr[i++];\n        }\n        \n        while (j < n2) {\n            nums[k++] = rightArr[j++];\n        }\n    }\n}\n",
    },
  },
  913: {
    java: {
      "topological-sort": "",
    },
  },
  914: {
    java: {
      "number-theory": "",
    },
  },
  916: {
    java: {
      "hash-table": "",
    },
  },
  917: {
    java: {
      "two-pointers": "",
    },
  },
  918: {
    java: {
      "monotonic-queue":
        "import java.util.Deque;\nimport java.util.LinkedList;\n\npublic class Solution {\n    public int maxSubarraySumCircular(int[] nums) {\n        int n = nums.length;\n        int[] extendedNums = new int[2 * n];        \n        System.arraycopy(nums, 0, extendedNums, 0, n);\n        System.arraycopy(nums, 0, extendedNums, n, n);        \n        long[] prefixSum = new long[2 * n + 1];\n        for (int i = 0; i < 2 * n; i++) {\n            prefixSum[i + 1] = prefixSum[i] + extendedNums[i];\n        }\n        \n        Deque<Integer> deque = new LinkedList<>();\n        deque.add(0);\n        int maxSum = Integer.MIN_VALUE;\n        \n        for (int i = 1; i <= 2 * n; i++) {\n            if (deque.peekFirst() < i - n) {\n                deque.pollFirst();\n            }            \n            maxSum = Math.max(maxSum, (int)(prefixSum[i] - prefixSum[deque.peekFirst()]));\n            \n            // Maintain the deque's monotonic property\n            while (!deque.isEmpty() && prefixSum[i] <= prefixSum[deque.peekLast()]) {\n                deque.pollLast();\n            }\n            \n            deque.addLast(i);\n        }\n        \n        return maxSum;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums = {1, -2, 3, -2};\n        System.out.println(solution.maxSubarraySumCircular(nums));  // Output: 3\n    }\n}\n",
    },
  },
  919: {
    java: {
      tree: "",
    },
  },
  920: {
    java: {
      "dynamic-programming": "",
    },
  },
  921: {
    java: {
      stack: "",
    },
  },
  922: {
    java: {
      "two-pointers": "",
    },
  },
  923: {
    java: {
      "two-pointers":
        "import java.util.Arrays;\n\npublic class Solution {\n    public int threeSumMulti(int[] arr, int target) {\n        int MOD = 1_000_000_007;\n        Arrays.sort(arr);\n        int n = arr.length;\n        long result = 0;\n\n        for (int left = 0; left < n; left++) {\n            int T = target - arr[left];\n            int right = left + 1, k = n - 1;\n            while (right < k) {\n                if (arr[right] + arr[k] < T) {\n                    right++;\n                } else if (arr[right] + arr[k] > T) {\n                    k--;\n                } else if (arr[right] != arr[k]) {\n                    int leftCount = 1, rightCount = 1;\n                    while (right + 1 < k && arr[right] == arr[right + 1]) {\n                        leftCount++;\n                        right++;\n                    }\n                    while (k - 1 > right && arr[k] == arr[k - 1]) {\n                        rightCount++;\n                        k--;\n                    }\n                    result += leftCount * rightCount;\n                    result %= MOD;\n                    right++;\n                    k--;\n                } else {\n                    result += (k - right + 1) * (k - right) / 2;\n                    result %= MOD;\n                    break;\n                }\n            }\n        }\n\n        return (int) result;\n    }\n}\n",
    },
  },
  924: {
    java: {
      "union-find": "",
    },
  },
  925: {
    java: {
      "two-pointers": "",
    },
  },
  926: {
    java: {
      "dynamic-programming": "",
    },
  },
  927: {
    java: {
      math: "",
    },
  },
  928: {
    java: {
      "union-find": "",
    },
  },
  929: {
    java: {
      "hash-table": "",
    },
  },
  930: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numSubarraysWithSum(int[] nums, int goal) {\n        Map<Integer, Integer> prefixSumCount = new HashMap<>();\n        prefixSumCount.put(0, 1);\n        int prefixSum = 0;\n        int count = 0;\n\n        for (int num : nums) {\n            prefixSum += num;\n            int currentSum = prefixSum - goal;\n            if (prefixSumCount.containsKey(currentSum)) {\n                count += prefixSumCount.get(currentSum);\n            }\n            prefixSumCount.put(prefixSum, prefixSumCount.getOrDefault(prefixSum, 0) + 1);\n        }\n\n        return count;\n    }\n}\n",
    },
  },
  931: {
    java: {
      matrix: "",
    },
  },
  932: {
    java: {
      "divide-and-conquer": "",
    },
  },
  933: {
    java: {
      queue: "",
    },
  },
  934: {
    java: {
      matrix: "",
    },
  },
  935: {
    java: {
      "dynamic-programming": "",
    },
  },
  936: {
    java: {
      queue: "",
    },
  },
  937: {
    java: {
      sorting: "",
    },
  },
  938: {
    java: {
      "binary-search-tree": "",
    },
  },
  939: {
    java: {
      geometry: "",
    },
  },
  940: {
    java: {
      "dynamic-programming": "",
    },
  },
  942: {
    java: {
      "two-pointers": "",
    },
  },
  943: {
    java: {
      "dynamic-programming": "",
    },
  },
  944: {
    java: {
      string: "",
    },
  },
  945: {
    java: {
      counting: "",
    },
  },
  946: {
    java: {
      stack: "",
    },
  },
  947: {
    java: {
      "union-find": "",
    },
  },
  948: {
    java: {
      "two-pointers": "",
    },
  },
  949: {
    java: {
      enumeration: "",
    },
  },
  950: {
    java: {
      queue: "",
    },
  },
  951: {
    java: {
      tree: "",
    },
  },
  952: {
    java: {
      "union-find": "",
    },
  },
  953: {
    java: {
      "hash-table": "",
    },
  },
  954: {
    java: {
      greedy: "",
    },
  },
  955: {
    java: {
      greedy: "",
    },
  },
  956: {
    java: {
      "dynamic-programming": "",
    },
  },
  957: {
    java: {
      "bit-manipulation": "",
    },
  },
  958: {
    java: {
      tree: "",
    },
  },
  959: {
    java: {
      "union-find": "",
    },
  },
  960: {
    java: {
      "dynamic-programming": "",
    },
  },
  961: {
    java: {
      "hash-table": "",
    },
  },
  962: {
    java: {
      "monotonic-stack": "",
    },
  },
  963: {
    java: {
      geometry: "",
    },
  },
  964: {
    java: {
      "dynamic-programming": "",
    },
  },
  965: {
    java: {
      tree: "",
    },
  },
  966: {
    java: {
      "hash-table": "",
    },
  },
  967: {
    java: {
      backtracking: "",
    },
  },
  968: {
    java: {
      "dynamic-programming": "",
    },
  },
  969: {
    java: {
      "two-pointers": "",
    },
  },
  970: {
    java: {
      enumeration: "",
    },
  },
  971: {
    java: {
      tree: "",
    },
  },
  972: {
    java: {
      math: "",
    },
  },
  973: {
    java: {
      quickselect:
        "import java.util.*;\n\npublic class Solution {\n    public int[][] kClosest(int[][] points, int k) {\n        int left = 0, right = points.length - 1;\n        while (left <= right) {\n            int pivotIndex = partition(points, left, right);\n            if (pivotIndex == k - 1) {\n                break;\n            } else if (pivotIndex < k - 1) {\n                left = pivotIndex + 1;\n            } else {\n                right = pivotIndex - 1;\n            }\n        }\n        \n        int[][] result = new int[k][2];\n        for (int i = 0; i < k; i++) {\n            result[i] = points[i];\n        }\n        \n        return result;\n    }\n    \n    private int partition(int[][] points, int left, int right) {\n        int pivotIndex = left + (right - left) / 2;\n        int[] pivot = points[pivotIndex];\n        int pivotDist = distance(pivot);\n        swap(points, pivotIndex, right);\n        int storeIndex = left;\n        for (int i = left; i < right; i++) {\n            if (distance(points[i]) < pivotDist) {\n                swap(points, storeIndex++, i);\n            }\n        }\n        swap(points, storeIndex, right);\n        return storeIndex;\n    }\n    \n    private int distance(int[] point) {\n        return point[0] * point[0] + point[1] * point[1];\n    }\n    \n    private void swap(int[][] points, int i, int j) {\n        int[] temp = points[i];\n        points[i] = points[j];\n        points[j] = temp;\n    }\n}\n",
      "heap-(priority-queue)":
        "import java.util.*;\n\npublic class Solution {\n    public int[][] kClosest(int[][] points, int k) {\n        // Step 1: Calculate distances and store in a max heap (priority queue)\n        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> distance(b) - distance(a));\n        \n        for (int[] point : points) {\n            maxHeap.offer(point);\n            if (maxHeap.size() > k) {\n                maxHeap.poll(); // Maintain heap size k by removing the farthest point\n            }\n        }\n        \n        // Step 2: Convert max heap to result array\n        int[][] result = new int[k][2];\n        int index = 0;\n        while (!maxHeap.isEmpty()) {\n            result[index++] = maxHeap.poll();\n        }\n        \n        return result;\n    }\n    \n    // Helper method to calculate distance from origin (0, 0)\n    private int distance(int[] point) {\n        return point[0] * point[0] + point[1] * point[1];\n    }\n}\n",
    },
  },
  974: {
    java: {
      "prefix-sum": "",
    },
  },
  975: {
    java: {
      "monotonic-stack": "",
    },
  },
  976: {
    java: {
      greedy: "",
    },
  },
  977: {
    java: {
      "two-pointers":
        "import java.util.Arrays;\n\npublic class Solution {\n    public int[] sortedSquares(int[] nums) {\n        int n = nums.length;\n        int[] result = new int[n];\n        int left = 0, right = n - 1;\n\n        for (int i = n - 1; i >= 0; i--) {\n            if (Math.abs(nums[left]) > Math.abs(nums[right])) {\n                result[i] = nums[left] * nums[left];\n                left++;\n            } else {\n                result[i] = nums[right] * nums[right];\n                right--;\n            }\n        }\n\n        return result;\n    }\n}\n",
    },
  },
  978: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maxTurbulenceSize(int[] arr) {\n        int ans = 1;\n        int increasing = 1;\n        int decreasing = 1;\n\n        for (int i = 1; i < arr.length; ++i) {\n            if (arr[i] > arr[i - 1]) {\n                increasing = decreasing + 1;\n                decreasing = 1;\n            } else if (arr[i] < arr[i - 1]) {\n                decreasing = increasing + 1;\n                increasing = 1;\n            } else {\n                increasing = 1;\n                decreasing = 1;\n            }\n            ans = Math.max(ans, Math.max(increasing, decreasing));\n        }\n\n        return ans;\n    }\n}\n",
    },
  },
  979: {
    java: {
      tree: "",
    },
  },
  980: {
    java: {
      matrix: "",
    },
  },
  981: {
    java: {
      design: "",
    },
  },
  982: {
    java: {
      "bit-manipulation": "",
    },
  },
  983: {
    java: {
      "dynamic-programming": "",
    },
  },
  984: {
    java: {
      greedy: "",
    },
  },
  986: {
    java: {
      "two-pointers": "",
    },
  },
  987: {
    java: {
      tree: "",
    },
  },
  988: {
    java: {
      tree: "",
    },
  },
  989: {
    java: {
      math: "",
    },
  },
  990: {
    java: {
      "union-find": "",
    },
  },
  991: {
    java: {
      greedy: "",
    },
  },
  992: {
    java: {
      "sliding-window":
        "class Solution {\n    public int subarraysWithKDistinct(int[] nums, int k) {\n        return atMostackDistinct(nums, k) - atMostackDistinct(nums, k - 1);\n    }\n    \n    private int atMostackDistinct(int[] nums, int k) {\n        int n = nums.length;\n        int left = 0;\n        int count = 0;\n        Map<Integer, Integer> frequency = new HashMap<>();\n        int distinctCount = 0;\n        \n        for (int right = 0; right < n; right++) {\n            int num = nums[right];\n            if (frequency.getOrDefault(num, 0) == 0) {\n                distinctCount++;\n            }\n            frequency.put(num, frequency.getOrDefault(num, 0) + 1);\n            \n            while (distinctCount > k) {\n                int leftNum = nums[left++];\n                frequency.put(leftNum, frequency.get(leftNum) - 1);\n                if (frequency.get(leftNum) == 0) {\n                    distinctCount--;\n                }\n            }\n            \n            count += right - left + 1;\n        }\n        \n        return count;\n    }\n}\n",
    },
  },
  993: {
    java: {
      tree: "",
    },
  },
  994: {
    java: {
      matrix: "",
    },
  },
  995: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int minKBitFlips(int[] nums, int k) {\n        int ans = 0;\n        int flippedTime = 0;\n        int left = 0;\n        for (int right = 0; right < nums.length; ++right) {\n            if (right >= k && nums[right - k] == 2)\n                --flippedTime;\n\n            if (flippedTime % 2 == nums[right]) {\n                if (right + k > nums.length)\n                    return -1;\n                ++ans;\n                ++flippedTime;\n                nums[right] = 2;\n            }\n        }\n\n        return ans;\n    }\n}\n",
    },
  },
  996: {
    java: {
      "dynamic-programming": "",
    },
  },
  997: {
    java: {
      graph: "",
    },
  },
  998: {
    java: {
      tree: "",
    },
  },
  999: {
    java: {
      matrix: "",
    },
  },
  1000: {
    java: {
      "prefix-sum": "",
    },
  },
  1001: {
    java: {
      "hash-table": "",
    },
  },
  1002: {
    java: {
      "hash-table": "",
    },
  },
  1003: {
    java: {
      stack: "",
    },
  },
  1004: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int longestOnes(int[] nums, int k) {\n        int left = 0;\n        int right = 0;\n        int maxOnes = 0;\n        int zerosCount = 0;\n\n        for (right = 0; right < nums.length; right++) {\n            if (nums[right] == 0) {\n                zerosCount++;\n            }\n\n            while (zerosCount > k) {\n                if (nums[left] == 0) {\n                    zerosCount--;\n                }\n                left++;\n            }\n\n            maxOnes = Math.max(maxOnes, right - left + 1);\n        }\n\n        return maxOnes;\n    }\n\n// /**\n//  * @param {number[]} nums\n//  * @param {number} k\n//  * @return {number}\n//  */\n// var longestOnes = function(nums, k) {\n//     let ans = 0;\n//     for (let l = 0, r = 0; r < nums.length; ++r) {\n//         if (nums[r] == 0)\n//             --k;\n//         while (k < 0)\n//             if (nums[l++] == 0)\n//                 ++k;\n//         ans = Math.max(ans, r - l + 1);\n//     }\n//     return ans;\n// };\n// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums = {1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0};\n        int k = 2;\n        System.out.println(solution.longestOnes(nums, k)); // Output: 6\n    }\n}",
    },
  },
  1005: {
    java: {
      greedy: "",
    },
  },
  1006: {
    java: {
      stack: "",
    },
  },
  1007: {
    java: {
      greedy: "",
    },
  },
  1008: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private int index = 0;\n\n    public TreeNode bstFromPreorder(int[] preorder) {\n        return bstFromPreorder(preorder, Integer.MIN_VALUE, Integer.MAX_VALUE);\n    }\n    \n    private TreeNode bstFromPreorder(int[] preorder, int lower, int upper) {\n        if (index == preorder.length || preorder[index] < lower || preorder[index] > upper) {\n            return null;\n        }\n        \n        int val = preorder[index++];\n        TreeNode root = new TreeNode(val);\n        root.left = bstFromPreorder(preorder, lower, val - 1);\n        root.right = bstFromPreorder(preorder, val + 1, upper);\n        \n        return root;\n    }\n}\n",
    },
  },
  1009: {
    java: {
      "bit-manipulation": "",
    },
  },
  1010: {
    java: {
      counting: "",
    },
  },
  1012: {
    java: {
      "dynamic-programming": "",
    },
  },
  1013: {
    java: {
      greedy: "",
    },
  },
  1014: {
    java: {
      "dynamic-programming": "",
    },
  },
  1015: {
    java: {
      math: "",
    },
  },
  1016: {
    java: {
      string: "",
    },
  },
  1017: {
    java: {
      math: "",
    },
  },
  1018: {
    java: {
      "bit-manipulation": "",
    },
  },
  1019: {
    java: {
      "monotonic-stack":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public int[] nextLargerNodes(ListNode head) {\n        List<Integer> nums = new ArrayList<>();\n        for (; head != null; head = head.next) {\n            nums.add(head.val);\n        }\n        Deque<Integer> stack = new ArrayDeque<>();\n        int n = nums.size();\n        int[] ans = new int[n];\n        for (int i = n - 1; i >= 0; --i) {\n            while (!stack.isEmpty() && stack.peek() <= nums.get(i)) {\n                stack.pop();\n            }\n            if (!stack.isEmpty()) {\n                ans[i] = stack.peek();\n            }\n            stack.push(nums.get(i));\n        }\n        return ans;\n    }\n}",
    },
  },
  1020: {
    java: {
      "union-find": "",
    },
  },
  1021: {
    java: {
      stack: "",
    },
  },
  1022: {
    java: {
      tree: "",
    },
  },
  1023: {
    java: {
      "two-pointers": "",
    },
  },
  1024: {
    java: {
      "dynamic-programming": "",
    },
  },
  1025: {
    java: {
      brainteaser: "",
    },
  },
  1026: {
    java: {
      tree: "",
    },
  },
  1027: {
    java: {
      "dynamic-programming": "",
    },
  },
  1028: {
    java: {
      tree: "",
    },
  },
  1029: {
    java: {
      greedy: "",
    },
  },
  1030: {
    java: {
      matrix: "",
    },
  },
  1031: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int maxSumTwoNoOverlap(int[] nums, int L, int M) {\n        int n = nums.length;\n        int[] prefixSum = new int[n + 1];\n        \n        for (int i = 0; i < n; i++) {\n            prefixSum[i + 1] = prefixSum[i] + nums[i];\n        }\n        \n        int maxL = 0, maxM = 0, result = 0;\n        \n        for (int i = L + M; i <= n; i++) {\n            maxL = Math.max(maxL, prefixSum[i - M] - prefixSum[i - M - L]);\n            maxM = Math.max(maxM, prefixSum[i - L] - prefixSum[i - L - M]);\n            result = Math.max(result, Math.max(maxL + prefixSum[i] - prefixSum[i - M], maxM + prefixSum[i] - prefixSum[i - L]));\n        }\n        \n        return result;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums = {0, 6, 5, 2, 2, 5, 1, 9, 4};\n        int L = 1;\n        int M = 2;\n        System.out.println(solution.maxSumTwoNoOverlap(nums, L, M)); // Output: 20\n    }\n}\n",
    },
  },
  1032: {
    java: {
      "data-stream": "",
    },
  },
  1033: {
    java: {
      brainteaser: "",
    },
  },
  1034: {
    java: {
      matrix: "",
    },
  },
  1035: {
    java: {
      "dynamic-programming": "",
    },
  },
  1036: {
    java: {
      "breadth-first-search": "",
    },
  },
  1037: {
    java: {
      geometry: "",
    },
  },
  1038: {
    java: {
      "binary-search-tree": "",
    },
  },
  1039: {
    java: {
      "dynamic-programming": "",
    },
  },
  1040: {
    java: {
      "two-pointers": "",
    },
  },
  1041: {
    java: {
      math: "",
    },
  },
  1042: {
    java: {
      graph: "",
    },
  },
  1043: {
    java: {
      "dynamic-programming": "",
    },
  },
  1044: {
    java: {
      "suffix-array":
        'import java.util.Arrays;\n\npublic class Solution {\n\n    public String longestDupSubstring(String s) {\n        int n = s.length();\n        int[] suffixArray = buildSuffixArray(s);\n        int[] lcpArray = buildLCPArray(suffixArray, s);\n\n        int pos = -1, maxLen = 0;\n        for (int i = 0; i < n - 1; i++) {\n            if (lcpArray[i] > maxLen) {\n                maxLen = lcpArray[i];\n                pos = suffixArray[i];\n            }\n        }\n\n        return pos == -1 ? "" : s.substring(pos, pos + maxLen);\n    }\n\n    private int[] buildSuffixArray(String S) {\n        int n = S.length();\n        Integer[] order = new Integer[n];\n        for (int i = 0; i < n; i++)\n            order[i] = n - 1 - i;\n\n        Arrays.sort(order, (a, b) -> Character.compare(S.charAt(a), S.charAt(b)));\n\n        int[] suffixArray = new int[n];\n        int[] classes = new int[n];\n        for (int i = 0; i < n; i++) {\n            suffixArray[i] = order[i];\n            classes[i] = S.charAt(i);\n        }\n\n        for (int len = 1; len < n; len *= 2) {\n            int[] c = classes.clone();\n            for (int i = 0; i < n; i++) {\n                classes[suffixArray[i]] = i > 0 && c[suffixArray[i - 1]] == c[suffixArray[i]] && suffixArray[i - 1] + len < n\n                        && c[suffixArray[i - 1] + len / 2] == c[suffixArray[i] + len / 2] ? classes[suffixArray[i - 1]] : i;\n            }\n\n            int[] count = new int[n];\n            for (int i = 0; i < n; i++)\n                count[i] = i;\n            int[] s = suffixArray.clone();\n            for (int i = 0; i < n; i++) {\n                int s1 = s[i] - len;\n                if (s1 >= 0)\n                    suffixArray[count[classes[s1]]++] = s1;\n            }\n        }\n\n        return suffixArray;\n    }\n\n    private int[] buildLCPArray(int[] suffixArray, String s) {\n        int n = suffixArray.length;\n        int[] rank = new int[n];\n        for (int i = 0; i < n; i++)\n            rank[suffixArray[i]] = i;\n        int[] lcpArray = new int[n - 1];\n        for (int i = 0, h = 0; i < n; i++) {\n            if (rank[i] < n - 1) {\n                int j = suffixArray[rank[i] + 1];\n                while (i + h < n && j + h < n && s.charAt(i + h) == s.charAt(j + h)) {\n                    h++;\n                }\n                lcpArray[rank[i]] = h;\n                if (h > 0) {\n                    h--;\n                }\n            }\n        }\n        return lcpArray;\n    }\n}\n',
      "rolling-hash":
        "class Solution {\n    public String longestDupSubstring(String s) {\n        int kMod = 1_000_000_007;\n        int n = s.length();\n        int[] pows = new int[n];\n        int bestStart = -1;\n        int left = 1;\n        int right = n;\n\n        pows[0] = 1;\n        for (int i = 1; i < n; ++i)\n            pows[i] = (int) ((pows[i - 1] * 26L) % (long) kMod);\n\n        while (left < right) {\n            int mid = (left + right) / 2;\n            int start = getStart(s, mid, pows, kMod);\n            if (start == -1) {\n                right = mid;\n            } else {\n                bestStart = start;\n                left = mid + 1;\n            }\n        }\n\n        if (bestStart == -1)\n            return \"\";\n        if (getStart(s, left, pows, kMod) == -1)\n            return s.substring(bestStart, bestStart + left - 1);\n        return s.substring(bestStart, bestStart + left);\n    }\n\n    private int getStart(String s, int k, int[] pows, int kMod) {\n        Map<Long, List<Integer>> hashToStarts = new HashMap<>();\n        long hash = 0;\n\n        for (int i = 0; i < k; ++i)\n            hash = ((hash * 26) % kMod + val(s.charAt(i))) % kMod;\n        hashToStarts.put(hash, new ArrayList<>());\n        hashToStarts.get(hash).add(0);\n\n        for (int i = k; i < s.length(); ++i) {\n            int startIndex = i - k + 1;\n            hash = ((hash - (long) (pows[k - 1]) * val(s.charAt(i - k))) % kMod + kMod) % kMod;\n            hash = (hash * 26 + val(s.charAt(i))) % kMod;\n            if (hashToStarts.containsKey(hash)) {\n                String currSub = s.substring(startIndex, startIndex + k);\n                for (int start : hashToStarts.get(hash))\n                    if (s.substring(start, start + k).equals(currSub))\n                        return startIndex;\n            }\n            hashToStarts.put(hash, new ArrayList<>());\n            hashToStarts.get(hash).add(startIndex);\n        }\n\n        return -1;\n    }\n\n    private int val(char c) {\n        return c - 'a';\n    }\n}",
    },
  },
  1045: {
    java: {
      database: "",
    },
  },
  1046: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1047: {
    java: {
      stack: "",
    },
  },
  1048: {
    java: {
      "two-pointers": "",
    },
  },
  1049: {
    java: {
      "dynamic-programming": "",
    },
  },
  1050: {
    java: {
      database: "",
    },
  },
  1051: {
    java: {
      "counting-sort":
        "class Solution {\n    public int heightChecker(int[] heights) {\n        int maxNum = 100; // As the problem states that heights are between 1 and 100\n        int[] count = new int[maxNum + 1];\n        \n        for (int height : heights) {\n            count[height]++;\n        }\n        \n        int[] sortedHeights = new int[heights.length];\n        int index = 0;\n        for (int i = 1; i <= maxNum; i++) {\n            while (count[i] > 0) {\n                sortedHeights[index++] = i;\n                count[i]--;\n            }\n        }\n        \n        // Count the number of heights that are out of place\n        int result = 0;\n        for (int i = 0; i < heights.length; i++) {\n            if (heights[i] != sortedHeights[i]) {\n                result++;\n            }\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  1052: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int maxSatisfied(int[] customers, int[] grumpy, int X) {\n        int n = customers.length;\n        int totalSatisfied = 0;\n\n        for (int i = 0; i < n; i++) {\n            if (grumpy[i] == 0) {\n                totalSatisfied += customers[i];\n            }\n        }\n\n        int maxAdditionalSatisfied = 0;\n        int currentAdditionalSatisfied = 0;\n\n        for (int i = 0; i < n; i++) {\n            if (grumpy[i] == 1) {\n                currentAdditionalSatisfied += customers[i];\n            }\n            if (i >= X) {\n                if (grumpy[i - X] == 1) {\n                    currentAdditionalSatisfied -= customers[i - X];\n                }\n            }\n\n            maxAdditionalSatisfied = Math.max(maxAdditionalSatisfied, currentAdditionalSatisfied);\n        }\n\n        return totalSatisfied + maxAdditionalSatisfied;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] customers = {1, 0, 1, 2, 1, 1, 7, 5};\n        int[] grumpy = {0, 1, 0, 1, 0, 1, 0, 1};\n        int X = 3;\n        System.out.println(solution.maxSatisfied(customers, grumpy, X)); \n    }\n}\n",
    },
  },
  1053: {
    java: {
      greedy: "",
    },
  },
  1054: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1055: {
    java: {
      "two-pointers": "",
    },
  },
  1056: {
    java: {
      math: "",
    },
  },
  1057: {
    java: {
      greedy: "",
    },
  },
  1058: {
    java: {
      greedy: "",
    },
  },
  1059: {
    java: {
      "topological-sort": "",
    },
  },
  1061: {
    java: {
      "union-find": "",
    },
  },
  1062: {
    java: {
      "suffix-array":
        'import java.util.*;\n\npublic class Solution {\n    public String longestRepeatingSubstring(String s) {\n        int n = s.length();\n        int[] suffixArray = buildSuffixArray(s);\n        int[] lcpArray = buildLCPArray(s, suffixArray);\n        \n        int left = 1, right = n;\n        int maxLength = 0;\n        String result = "";\n        \n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (hasRepeatedSubstring(mid, n, suffixArray, lcpArray)) {\n                maxLength = mid;\n                left = mid + 1;\n            } else {\n                right = mid - 1;\n            }\n        }\n        \n        for (int i = 0; i <= n - maxLength; i++) {\n            String candidate = s.substring(suffixArray[i], suffixArray[i] + maxLength);\n            if (hasRepeatedSubstring(candidate, s, maxLength)) {\n                return candidate;\n            }\n        }\n        \n        return result;\n    }\n    \n    private boolean hasRepeatedSubstring(int len, int n, int[] suffixArray, int[] lcpArray) {\n        for (int i = 1; i < n; i++) {\n            if (lcpArray[i] >= len) {\n                int start1 = suffixArray[i - 1];\n                int start2 = suffixArray[i];\n                if ((start1 < n - len && start2 > n - len) || (start1 > n - len && start2 < n - len)) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n    \n    private boolean hasRepeatedSubstring(String candidate, String s, int len) {\n        int count = 0;\n        int index = s.indexOf(candidate);\n        while (index != -1) {\n            count++;\n            index = s.indexOf(candidate, index + 1);\n        }\n        return count > 1;\n    }\n    \n    private int[] buildSuffixArray(String s) {\n        int n = s.length();\n        Integer[] order = new Integer[n];\n        for (int i = 0; i < n; i++) {\n            order[i] = i;\n        }\n        \n        Arrays.sort(order, (a, b) -> Character.compare(s.charAt(a), s.charAt(b)));\n        \n        int[] suffixArray = new int[n];\n        int[] classes = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            suffixArray[i] = order[i];\n            classes[i] = s.charAt(i);\n        }\n        \n        for (int len = 1; len < n; len *= 2) {\n            int[] c = classes.clone();\n            for (int i = 0; i < n; i++) {\n                classes[suffixArray[i]] = i > 0 && c[suffixArray[i - 1]] == c[suffixArray[i]] && suffixArray[i - 1] + len < n\n                        && c[suffixArray[i - 1] + len / 2] == c[suffixArray[i] + len / 2] ? classes[suffixArray[i - 1]] : i;\n            }\n            \n            int[] count = new int[n];\n            for (int i = 0; i < n; i++) {\n                count[i] = i;\n            }\n            \n            int[] s = suffixArray.clone();\n            for (int i = 0; i < n; i++) {\n                int s1 = s[i] - len;\n                if (s1 >= 0) {\n                    suffixArray[count[classes[s1]]++] = s1;\n                }\n            }\n        }\n        \n        return suffixArray;\n    }\n    \n    private int[] buildLCPArray(String s, int[] suffixArray) {\n        int n = s.length();\n        int[] rank = new int[n];\n        for (int i = 0; i < n; i++) {\n            rank[suffixArray[i]] = i;\n        }\n        \n        int[] lcpArray = new int[n - 1];\n        int h = 0;\n        \n        for (int i = 0; i < n; i++) {\n            if (rank[i] > 0) {\n                int j = suffixArray[rank[i] - 1];\n                while (i + h < n && j + h < n && s.charAt(i + h) == s.charAt(j + h)) {\n                    h++;\n                }\n                lcpArray[rank[i] - 1] = h;\n                if (h > 0) {\n                    h--;\n                }\n            }\n        }\n        \n        return lcpArray;\n    }\n}\n',
      "dynamic-programming":
        "class Solution {\n    public int longestRepeatingSubstring(String s) {\n        int n = s.length();\n        int ans = 0;\n        int[][] dp = new int[n][n];\n        for (int i = 0; i < n; ++i) {\n            for (int j = i + 1; j < n; ++j) {\n                if (s.charAt(i) == s.charAt(j)) {\n                    dp[i][j] = i > 0 ? dp[i - 1][j - 1] + 1 : 1;\n                    ans = Math.max(ans, dp[i][j]);\n                }\n            }\n        }\n        return ans;\n    }\n}",
    },
  },
  1063: {
    java: {
      "monotonic-stack":
        "class Solution {\n    public int validSubarrays(int[] nums) {\n        int n = nums.length;\n        int[] right = new int[n];\n        Arrays.fill(right, n);\n        Deque<Integer> stack = new ArrayDeque<>();\n        for (int i = n - 1; i >= 0; --i) {\n            while (!stack.isEmpty() && nums[stack.peek()] >= nums[i]) {\n                stack.pop();\n            }\n            if (!stack.isEmpty()) {\n                right[i] = stack.peek();\n            }\n            stack.push(i);\n        }\n        int ans = 0;\n        for (int i = 0; i < n; ++i) {\n            ans += right[i] - i;\n        }\n        return ans;\n    }\n}",
    },
  },
  1065: {
    java: {
      trie: "",
    },
  },
  1066: {
    java: {
      "dynamic-programming": "",
    },
  },
  1067: {
    java: {
      "dynamic-programming": "",
    },
  },
  1068: {
    java: {
      database: "",
    },
  },
  1069: {
    java: {
      database: "",
    },
  },
  1070: {
    java: {
      database: "",
    },
  },
  1071: {
    java: {
      math: "",
    },
  },
  1072: {
    java: {
      matrix: "",
    },
  },
  1073: {
    java: {
      math: "",
    },
  },
  1074: {
    java: {
      matrix: "",
    },
  },
  1075: {
    java: {
      database: "",
    },
  },
  1076: {
    java: {
      database: "",
    },
  },
  1077: {
    java: {
      database: "",
    },
  },
  1078: {
    java: {
      string: "",
    },
  },
  1079: {
    java: {
      backtracking: "",
    },
  },
  1080: {
    java: {
      tree: "",
    },
  },
  1081: {
    java: {
      "monotonic-stack": "",
    },
  },
  1082: {
    java: {
      database: "",
    },
  },
  1083: {
    java: {
      database: "",
    },
  },
  1084: {
    java: {
      database: "",
    },
  },
  1085: {
    java: {
      math: "",
    },
  },
  1086: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1087: {
    java: {
      backtracking: "",
    },
  },
  1088: {
    java: {
      backtracking: "",
    },
  },
  1089: {
    java: {
      "two-pointers":
        "public class Solution {\n    public void duplicateZeros(int[] arr) {\n        int n = arr.length;\n        \n        int zeroCount = 0;\n        for (int num : arr) {\n            if (num == 0) {\n                zeroCount++;\n            }\n        }\n        \n        int lastIndex = n - 1;\n        for (int i = lastIndex; i >= 0; i--) {\n            if (arr[i] == 0) {\n                if (i + zeroCount <= lastIndex) {\n                    arr[i + zeroCount] = 0;\n                }\n                zeroCount--;\n                if (i + zeroCount <= lastIndex) {\n                    arr[i + zeroCount] = 0;\n                }\n            } else {\n                if (i + zeroCount <= lastIndex) {\n                    arr[i + zeroCount] = arr[i];\n                }\n            }\n        }\n    }\n}\n",
    },
  },
  1090: {
    java: {
      counting: "",
    },
  },
  1091: {
    java: {
      matrix: "",
    },
  },
  1092: {
    java: {
      "dynamic-programming": "",
    },
  },
  1093: {
    java: {
      "probability-and-statistics":
        "class Solution {\n    public double[] sampleStats(int[] count) {\n      int n = Arrays.stream(count).sum();\n        return new double[] {\n                getMinimum(count), \n                getMaximum(count), \n                getMean(count, n), \n                (getLeftMedian(count, n) + getRightMedian(count, n)) / 2.0,\n                getMode(count),\n        };\n    }\n\n    private double getMinimum(int[] count) {\n        for (int i = 0; i < count.length; ++i)\n            if (count[i] > 0)\n                return i;\n        return -1;\n    }\n\n    private double getMaximum(int[] count) {\n        for (int i = count.length - 1; i >= 0; --i)\n            if (count[i] > 0)\n                return i;\n        return -1;\n    }\n\n    private double getMean(int[] count, double n) {\n        double mean = 0;\n        for (int i = 0; i < count.length; ++i)\n            mean += ((long) i * (long) count[i]) / n;\n        return mean;\n    }\n\n    private double getLeftMedian(int[] count, double n) {\n        int numCount = 0;\n        for (int i = 0; i < count.length; ++i) {\n            numCount += count[i];\n            if (numCount >= n / 2)\n                return i;\n        }\n        return -1;\n    }\n\n    private double getRightMedian(int[] count, double n) {\n        int numCount = 0;\n        for (int i = count.length - 1; i >= 0; --i) {\n            numCount += count[i];\n            if (numCount >= n / 2)\n                return i;\n        }\n        return -1;\n    }\n\n    private double getMode(int[] count) {\n        int mode = -1;\n        int maxCount = 0;\n        for (int i = 0; i < count.length; ++i)\n            if (count[i] > maxCount) {\n                maxCount = count[i];\n                mode = i;\n            }\n        return mode;\n    }\n}",
    },
  },
  1094: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1095: {
    java: {
      interactive: "",
    },
  },
  1096: {
    java: {
      stack: "",
    },
  },
  1097: {
    java: {
      database: "",
    },
  },
  1098: {
    java: {
      database: "",
    },
  },
  1099: {
    java: {
      "two-pointers":
        "class Solution {\n    public int twoSumLessThanK(int[] nums, int k) {\n        Arrays.sort(nums);\n        int ans = -1;\n        int n = nums.length;\n        for (int i = 0; i < n; ++i) {\n            int j = search(nums, k - nums[i], i + 1, n) - 1;\n            if (i < j) {\n                ans = Math.max(ans, nums[i] + nums[j]);\n            }\n        }\n        return ans;\n    }\n\n    private int search(int[] nums, int x, int left, int right) {\n        while (left < right) {\n            int mid = (left + right) >> 1;\n            if (nums[mid] >= x) {\n                right = mid;\n            } else {\n                left = mid + 1;\n            }\n        }\n        return left;\n    }\n}\n",
    },
  },
  1100: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int numKLenSubstrNoRepeats(String S, int K) {\n        int n = S.length();\n        if (n < K) return 0;\n\n        HashSet<Character> set = new HashSet<>();\n        int count = 0;\n\n        for (int i = 0; i <= n - K; i++) {\n            set.clear();\n            boolean isValid = true;\n            for (int j = i; j < i + K; j++) {\n                char ch = S.charAt(j);\n                if (set.contains(ch)) {\n                    isValid = false;\n                    break;\n                }\n                set.add(ch);\n            }\n            if (isValid) {\n                count++;\n            }\n        }\n        return count;\n    }\n}",
    },
  },
  1101: {
    java: {
      "union-find": "",
    },
  },
  1102: {
    java: {
      "union-find": "",
    },
  },
  1103: {
    java: {
      math: "",
    },
  },
  1104: {
    java: {
      tree: "",
    },
  },
  1105: {
    java: {
      "dynamic-programming": "",
    },
  },
  1106: {
    java: {
      stack: "",
    },
  },
  1107: {
    java: {
      database: "",
    },
  },
  1108: {
    java: {
      string: "",
    },
  },
  1109: {
    java: {
      "prefix-sum": "",
    },
  },
  1110: {
    java: {
      tree: "",
    },
  },
  1111: {
    java: {
      stack: "",
    },
  },
  1112: {
    java: {
      database: "",
    },
  },
  1113: {
    java: {
      database: "",
    },
  },
  1114: {
    java: {
      concurrency:
        "class Foo {\n    private final Object lock = new Object();\n    private boolean firstExecuted;\n    private boolean secondExecuted;\n\n    public Foo() {\n        firstExecuted = false;\n        secondExecuted = false;\n    }\n\n    public void first(Runnable printFirst) throws InterruptedException {\n        synchronized (lock) {\n            printFirst.run();\n            firstExecuted = true;\n            lock.notifyAll(); // Notify waiting threads that first() has completed\n        }\n    }\n\n    public void second(Runnable printSecond) throws InterruptedException {\n        synchronized (lock) {\n            while (!firstExecuted) {\n                lock.wait(); // Wait until first() has completed\n            }\n            printSecond.run();\n            secondExecuted = true;\n            lock.notifyAll(); // Notify waiting threads that second() has completed\n        }\n    }\n\n    public void third(Runnable printThird) throws InterruptedException {\n        synchronized (lock) {\n            while (!secondExecuted) {\n                lock.wait(); // Wait until second() has completed\n            }\n            printThird.run();\n        }\n    }\n}\n",
    },
  },
  1115: {
    java: {
      concurrency:
        'import java.util.concurrent.Semaphore;\n\nclass FooBar {\n    private int n;\n    private Semaphore fooSemaphore;\n    private Semaphore barSemaphore;\n\n    public FooBar(int n) {\n        this.n = n;\n        this.fooSemaphore = new Semaphore(1); // Initially fooSemaphore is available\n        this.barSemaphore = new Semaphore(0); // Initially barSemaphore is not available\n    }\n\n    public void foo(Runnable printFoo) throws InterruptedException {\n        for (int i = 0; i < n; i++) {\n            fooSemaphore.acquire();\n            printFoo.run();\n            barSemaphore.release();\n        }\n    }\n\n    public void bar(Runnable printBar) throws InterruptedException {\n        for (int i = 0; i < n; i++) {\n            barSemaphore.acquire();\n            printBar.run();\n            fooSemaphore.release();\n        }\n    }\n\n    public static void main(String[] args) {\n        FooBar fooBar = new FooBar(5);\n\n        Runnable printFoo = () -> System.out.print("foo");\n        Runnable printBar = () -> System.out.print("bar");\n\n        Thread threadFoo = new Thread(() -> {\n            try {\n                fooBar.foo(printFoo);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        });\n\n        Thread threadBar = new Thread(() -> {\n            try {\n                fooBar.bar(printBar);\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        });\n\n        threadFoo.start();\n        threadBar.start();\n    }\n\n}\n',
    },
  },
  1116: {
    java: {
      concurrency:
        "import java.util.concurrent.Semaphore;\nimport java.util.function.IntConsumer;\n\nclass ZeroEvenOdd {\n    private int n;\n    private Semaphore zeroSemaphore;\n    private Semaphore evenSemaphore;\n    private Semaphore oddSemaphore;\n\n    public ZeroEvenOdd(int n) {\n        this.n = n;\n        this.zeroSemaphore = new Semaphore(1);\n        this.evenSemaphore = new Semaphore(0);\n        this.oddSemaphore = new Semaphore(0);\n    }\n\n    public void zero(IntConsumer printNumber) throws InterruptedException {\n        for (int i = 1; i <= n; i++) {\n            zeroSemaphore.acquire();\n            printNumber.accept(0);\n            if (i % 2 == 0) {\n                evenSemaphore.release();\n            } else {\n                oddSemaphore.release();\n            }\n        }\n    }\n\n    public void even(IntConsumer printNumber) throws InterruptedException {\n        for (int i = 2; i <= n; i += 2) {\n            evenSemaphore.acquire();\n            printNumber.accept(i);\n            zeroSemaphore.release();\n        }\n    }\n\n    public void odd(IntConsumer printNumber) throws InterruptedException {\n        for (int i = 1; i <= n; i += 2) {\n            oddSemaphore.acquire();\n            printNumber.accept(i);\n            zeroSemaphore.release();\n        }\n    }\n}\n",
    },
  },
  1117: {
    java: {
      concurrency:
        "import java.util.concurrent.Semaphore;\n\nclass H2O {\n    private Semaphore hydrogenSemaphore;\n    private Semaphore oxygenSemaphore;\n    private int hydrogenCount;\n\n    public H2O() {\n        hydrogenSemaphore = new Semaphore(2); // Allow up to 2 hydrogen atoms\n        oxygenSemaphore = new Semaphore(1); // Allow up to 1 oxygen atom\n        hydrogenCount = 0;\n    }\n\n    public void hydrogen(Runnable releaseHydrogen) throws InterruptedException {\n        hydrogenSemaphore.acquire();\n        synchronized (this) {\n            hydrogenCount++;\n            releaseHydrogen.run();\n            if (hydrogenCount == 2) {\n                oxygenSemaphore.release();            }\n        }\n    }\n\n    public void oxygen(Runnable releaseOxygen) throws InterruptedException {\n        oxygenSemaphore.acquire();\n        synchronized (this) {\n            releaseOxygen.run();\n            hydrogenCount = 0;\n            hydrogenSemaphore.release(2);\n        }\n    }\n}\n",
    },
  },
  1118: {
    java: {
      math: "",
    },
  },
  1119: {
    java: {
      string: "",
    },
  },
  1120: {
    java: {
      tree: "",
    },
  },
  1121: {
    java: {
      counting: "",
    },
  },
  1122: {
    java: {
      "counting-sort":
        "class Solution {\n    public int[] relativeSortArray(int[] arr1, int[] arr2) {\n        int maxNum = 1000; // assuming the values in arr1 are between 0 and 1000\n        int[] count = new int[maxNum + 1];\n        \n        for (int num : arr1) {\n            count[num]++;\n        }\n        \n        int[] result = new int[arr1.length];\n        int index = 0;\n        \n        for (int num : arr2) {\n            while (count[num] > 0) {\n                result[index++] = num;\n                count[num]--;\n            }\n        }\n        \n        for (int i = 0; i <= maxNum; i++) {\n            while (count[i] > 0) {\n                result[index++] = i;\n                count[i]--;\n            }\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  1123: {
    java: {
      tree: "",
    },
  },
  1124: {
    java: {
      "monotonic-stack": "",
    },
  },
  1125: {
    java: {
      "dynamic-programming": "",
    },
  },
  1126: {
    java: {
      database: "",
    },
  },
  1127: {
    java: {
      database: "",
    },
  },
  1128: {
    java: {
      counting: "",
    },
  },
  1129: {
    java: {
      graph: "",
    },
  },
  1130: {
    java: {
      "monotonic-stack":
        "class Solution {\n  public int mctFromLeafValues(int[] arr) {\n    int ans = 0;\n    Deque<Integer> stack = new ArrayDeque<>();\n    stack.push(Integer.MAX_VALUE);\n\n    for (int a : arr) {\n      while (stack.peek() <= a) {\n        int mid = stack.pop();\n        ans += Math.min(stack.peek(), a) * mid;\n      }\n      stack.push(a);\n    }\n\n    while (stack.size() > 2)\n      ans += stack.pop() * stack.peek();\n\n    return ans;\n  }\n}",
    },
  },
  1131: {
    java: {
      math: "",
    },
  },
  1132: {
    java: {
      database: "",
    },
  },
  1133: {
    java: {
      sorting: "",
    },
  },
  1134: {
    java: {
      math: "",
    },
  },
  1135: {
    java: {
      "union-find": "",
    },
  },
  1136: {
    java: {
      "topological-sort": "",
    },
  },
  1137: {
    java: {
      "dynamic-programming": "",
      memoization:
        "public class Solution {\n    private HashMap<Integer, Integer> memo = new HashMap<>();\n\n    public int tribonacci(int n) {\n        if (n == 0)\n            return 0;\n        if (n == 1 || n == 2)\n            return 1;\n\n        if (memo.containsKey(n)) {\n            return memo.get(n);\n        }\n\n        int result = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);\n        memo.put(n, result);\n\n        return result;\n    }\n\n}",
    },
  },
  1138: {
    java: {
      "hash-table": "",
    },
  },
  1139: {
    java: {
      matrix: "",
    },
  },
  1140: {
    java: {
      "prefix-sum": "",
    },
  },
  1141: {
    java: {
      database: "",
    },
  },
  1142: {
    java: {
      database: "",
    },
  },
  1143: {
    java: {
      "dynamic-programming": "",
    },
  },
  1144: {
    java: {
      greedy: "",
    },
  },
  1145: {
    java: {
      tree: "",
    },
  },
  1146: {
    java: {
      design: "",
    },
  },
  1147: {
    java: {
      "two-pointers": "",
    },
  },
  1148: {
    java: {
      database: "",
    },
  },
  1149: {
    java: {
      database: "",
    },
  },
  1151: {
    java: {
      "sliding-window":
        "class Solution {\n  public int minSwaps(int[] data) {\n      int sum = 0;\n      for (int v : data) {\n          sum += v;\n      }\n      int sumK = 0;\n      for (int i = 0; i < sum; ++i) {\n          sumK += data[i];\n      }\n      int max = sumK;\n      for (int i = sum; i < data.length; ++i) {\n          sumK += data[i];\n          sumK -= data[i - sum];\n          max = Math.max(max, sumK);\n      }\n      return sum - max;\n  }\n}",
    },
  },
  1152: {
    java: {
      sorting: "",
    },
  },
  1153: {
    java: {
      "hash-table": "",
    },
  },
  1154: {
    java: {
      math: "",
    },
  },
  1155: {
    java: {
      "dynamic-programming": "",
    },
  },
  1156: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int maxRepOpt1(String text) {\n        int[] count = new int[26];\n        for (char c : text.toCharArray()) {\n            count[c - 'a']++;\n        }\n        int maxLen = 0;\n        for (int i = 0; i < text.length(); ) {\n            char currentChar = text.charAt(i);\n            int start = i;            \n            while (i < text.length() && text.charAt(i) == currentChar) {\n                i++;\n            }\n            int blockLen = i - start;            \n            int nextBlockStart = i + 1;\n            while (nextBlockStart < text.length() && text.charAt(nextBlockStart) == currentChar) {\n                nextBlockStart++;\n            }\n            int totalLen = blockLen + (nextBlockStart - i - 1);            \n            maxLen = Math.max(maxLen, Math.min(totalLen + 1, count[currentChar - 'a']));            \n            i = start + blockLen;\n        }\n\n        return maxLen;\n    }\n}\n",
    },
  },
  1157: {
    java: {
      design: "",
    },
  },
  1158: {
    java: {
      database: "",
    },
  },
  1159: {
    java: {
      database: "",
    },
  },
  1160: {
    java: {
      "hash-table": "",
    },
  },
  1161: {
    java: {
      tree: "",
    },
  },
  1162: {
    java: {
      matrix: "",
    },
  },
  1163: {
    java: {
      "two-pointers": "",
    },
  },
  1164: {
    java: {
      database: "",
    },
  },
  1165: {
    java: {
      "hash-table": "",
    },
  },
  1166: {
    java: {
      trie: "",
    },
  },
  1167: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1168: {
    java: {
      "union-find": "",
    },
  },
  1169: {
    java: {
      sorting: "",
    },
  },
  1170: {
    java: {
      sorting: "",
    },
  },
  1171: {
    java: {
      "linked-list": "",
    },
  },
  1172: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1173: {
    java: {
      database: "",
    },
  },
  1174: {
    java: {
      database: "",
    },
  },
  1175: {
    java: {
      math: "",
    },
  },
  1176: {
    java: {
      "sliding-window":
        "class Solution {\n    public int dietPlanPerformance(int[] calories, int k, int lower, int upper) {\n        int n = calories.length;\n        int[] s = new int[n + 1];\n        for (int i = 0; i < n; ++i) {\n            s[i + 1] = s[i] + calories[i];\n        }\n        int ans = 0;\n        for (int i = 0; i < n - k + 1; ++i) {\n            int t = s[i + k] - s[i];\n            if (t < lower) {\n                --ans;\n            } else if (t > upper) {\n                ++ans;\n            }\n        }\n        return ans;\n    }\n}",
    },
  },
  1177: {
    java: {
      "prefix-sum": "",
    },
  },
  1178: {
    java: {
      trie: "",
    },
  },
  1179: {
    java: {
      database: "",
    },
  },
  1180: {
    java: {
      math: "",
    },
  },
  1181: {
    java: {
      sorting: "",
    },
  },
  1182: {
    java: {
      "dynamic-programming": "",
    },
  },
  1183: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1185: {
    java: {
      math: "",
    },
  },
  1186: {
    java: {
      "dynamic-programming": "",
    },
  },
  1187: {
    java: {
      "dynamic-programming": "",
    },
  },
  1188: {
    java: {
      concurrency:
        "class BoundedBlockingQueue {\n    private Semaphore s1;\n    private Semaphore s2;\n    private Deque<Integer> q = new ArrayDeque<>();\n\n    public BoundedBlockingQueue(int capacity) {\n        s1 = new Semaphore(capacity);\n        s2 = new Semaphore(0);\n    }\n\n    public void enqueue(int element) throws InterruptedException {\n        s1.acquire();\n        q.offer(element);\n        s2.release();\n    }\n\n    public int dequeue() throws InterruptedException {\n        s2.acquire();\n        int ans = q.poll();\n        s1.release();\n        return ans;\n    }\n\n    public int size() {\n        return q.size();\n    }\n}",
    },
  },
  1189: {
    java: {
      counting: "",
    },
  },
  1190: {
    java: {
      stack:
        "class Solution {\n    public String reverseParentheses(String s) {\n        Stack<Integer> stack = new Stack<>();\n        StringBuilder sb = new StringBuilder();\n        \n        for (int i = 0; i < s.length(); i++) {\n            char c = s.charAt(i);\n            if (c == '(') {\n                stack.push(sb.length());\n            } else if (c == ')') {\n                int start = stack.pop();\n                int end = sb.length() - 1;\n                reverse(sb, start, end);\n            } else {\n                sb.append(c);\n            }\n        }\n        \n        return sb.toString();\n    }\n    \n    private void reverse(StringBuilder sb, int start, int end) {\n        while (start < end) {\n            char temp = sb.charAt(start);\n            sb.setCharAt(start++, sb.charAt(end));\n            sb.setCharAt(end--, temp);\n        }\n    }\n}\n",
    },
  },
  1191: {
    java: {
      "dynamic-programming": "",
    },
  },
  1192: {
    java: {
      "biconnected-component":
        "import java.util.*;\n\nclass Solution {\n    List<List<Integer>> graph;\n    int[] low;\n    int[] disc;\n    int time;\n    List<List<Integer>> result;\n    \n    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {\n        graph = new ArrayList<>();\n        low = new int[n];\n        disc = new int[n];\n        result = new ArrayList<>();\n        time = 0;\n        \n        for (int i = 0; i < n; i++) {\n            graph.add(new ArrayList<>());\n        }\n        \n        for (List<Integer> conn : connections) {\n            int u = conn.get(0);\n            int v = conn.get(1);\n            graph.get(u).add(v);\n            graph.get(v).add(u);\n        }\n        \n        dfs(0, -1);\n        \n        return result;\n    }\n    \n    private void dfs(int u, int parent) {\n        low[u] = disc[u] = ++time;\n        \n        for (int v : graph.get(u)) {\n            if (v == parent) continue;\n            \n            if (disc[v] == 0) { // If v is not visited\n                dfs(v, u);\n                low[u] = Math.min(low[u], low[v]);\n                if (low[v] > disc[u]) {\n                    // (u, v) is a critical connection\n                    result.add(Arrays.asList(u, v));\n                }\n            } else {\n                low[u] = Math.min(low[u], disc[v]);\n            }\n        }\n    }\n}",
      graph:
        "import java.util.*;\n\nclass Solution {\n    List<List<Integer>> graph;\n    int[] low;\n    int[] disc;\n    int time;\n    List<List<Integer>> result;\n    \n    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {\n        graph = new ArrayList<>();\n        low = new int[n];\n        disc = new int[n];\n        result = new ArrayList<>();\n        time = 0;\n        \n        for (int i = 0; i < n; i++) {\n            graph.add(new ArrayList<>());\n        }\n        \n        for (List<Integer> conn : connections) {\n            int u = conn.get(0);\n            int v = conn.get(1);\n            graph.get(u).add(v);\n            graph.get(v).add(u);\n        }\n        \n        dfs(0, -1);\n        \n        return result;\n    }\n    \n    private void dfs(int u, int parent) {\n        low[u] = disc[u] = ++time;\n        \n        for (int v : graph.get(u)) {\n            if (v == parent) continue;\n            \n            if (disc[v] == 0) { // If v is not visited\n                dfs(v, u);\n                low[u] = Math.min(low[u], low[v]);\n                if (low[v] > disc[u]) {\n                    // (u, v) is a critical connection\n                    result.add(Arrays.asList(u, v));\n                }\n            } else {\n                low[u] = Math.min(low[u], disc[v]);\n            }\n        }\n    }\n}",
      "depth-first-search":
        "import java.util.*;\n\nclass Solution {\n    List<List<Integer>> graph;\n    int[] low;\n    int[] disc;\n    int time;\n    List<List<Integer>> result;\n    \n    public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {\n        graph = new ArrayList<>();\n        low = new int[n];\n        disc = new int[n];\n        result = new ArrayList<>();\n        time = 0;\n        \n        for (int i = 0; i < n; i++) {\n            graph.add(new ArrayList<>());\n        }\n        \n        for (List<Integer> conn : connections) {\n            int u = conn.get(0);\n            int v = conn.get(1);\n            graph.get(u).add(v);\n            graph.get(v).add(u);\n        }\n        \n        dfs(0, -1);\n        \n        return result;\n    }\n    \n    private void dfs(int u, int parent) {\n        low[u] = disc[u] = ++time;\n        \n        for (int v : graph.get(u)) {\n            if (v == parent) continue;\n            \n            if (disc[v] == 0) { // If v is not visited\n                dfs(v, u);\n                low[u] = Math.min(low[u], low[v]);\n                if (low[v] > disc[u]) {\n                    // (u, v) is a critical connection\n                    result.add(Arrays.asList(u, v));\n                }\n            } else {\n                low[u] = Math.min(low[u], disc[v]);\n            }\n        }\n    }\n}",
    },
  },
  1193: {
    java: {
      database: "",
    },
  },
  1194: {
    java: {
      database: "",
    },
  },
  1195: {
    java: {
      concurrency:
        "import java.util.function.IntConsumer;\n\npublic class FizzBuzz {\n    private int n;\n    private int current = 1;\n\n    public FizzBuzz(int n) {\n        this.n = n;\n    }\n\n    public synchronized void fizz(Runnable printFizz) throws InterruptedException {\n        while (current <= n) {\n            while (current <= n && (current % 3 != 0 || current % 5 == 0)) {\n                wait();\n            }\n            if (current <= n) {\n                printFizz.run();\n                current++;\n                notifyAll();\n            }\n        }\n    }\n\n    public synchronized void buzz(Runnable printBuzz) throws InterruptedException {\n        while (current <= n) {\n            while (current <= n && (current % 5 != 0 || current % 3 == 0)) {\n                wait();\n            }\n            if (current <= n) {\n                printBuzz.run();\n                current++;\n                notifyAll();\n            }\n        }\n    }\n\n    public synchronized void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {\n        while (current <= n) {\n            while (current <= n && (current % 3 != 0 || current % 5 != 0)) {\n                wait();\n            }\n            if (current <= n) {\n                printFizzBuzz.run();\n                current++;\n                notifyAll();\n            }\n        }\n    }\n\n    public synchronized void number(IntConsumer printNumber) throws InterruptedException {\n        while (current <= n) {\n            while (current <= n && (current % 3 == 0 || current % 5 == 0)) {\n                wait();\n            }\n            if (current <= n) {\n                printNumber.accept(current);\n                current++;\n                notifyAll();\n            }\n        }\n    }\n}\n",
    },
  },
  1196: {
    java: {
      greedy: "",
    },
  },
  1197: {
    java: {
      "breadth-first-search": "",
    },
  },
  1198: {
    java: {
      matrix: "",
    },
  },
  1199: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1200: {
    java: {
      sorting: "",
    },
  },
  1201: {
    java: {
      combinatorics: "",
    },
  },
  1202: {
    java: {
      "union-find": "",
    },
  },
  1203: {
    java: {
      "topological-sort": "",
    },
  },
  1204: {
    java: {
      database: "",
    },
  },
  1205: {
    java: {
      database: "",
    },
  },
  1206: {
    java: {
      "linked-list": "",
    },
  },
  1207: {
    java: {
      "hash-table": "",
    },
  },
  1208: {
    java: {
      "sliding-window":
        "class Solution {\n    public int equalSubstring(String s, String t, int maxCost) {\n        int n = s.length();\n        int[] cost = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            cost[i] = Math.abs(s.charAt(i) - t.charAt(i));\n        }\n        \n        int left = 0, right = 0;\n        int currentCost = 0;\n        int maxLength = 0;\n        \n        while (right < n) {\n            currentCost += cost[right];\n            \n            while (currentCost > maxCost) {\n                currentCost -= cost[left];\n                left++;\n            }\n            \n            maxLength = Math.max(maxLength, right - left + 1);\n            right++;\n        }\n        \n        return maxLength;\n    }\n}\n",
    },
  },
  1209: {
    java: {
      stack:
        "class Solution {\n    public String removeDuplicates(String s, int k) {\n        Stack<Pair<Character, Integer>> stack = new Stack<>();\n\n        for (char c : s.toCharArray()) {\n            if (!stack.isEmpty() && stack.peek().getKey() == c) {\n                Pair<Character, Integer> top = stack.pop();\n                if (top.getValue() + 1 < k) {\n                    stack.push(new Pair<>(c, top.getValue() + 1));\n                }\n            } else {\n                stack.push(new Pair<>(c, 1));\n            }\n        }\n\n        StringBuilder sb = new StringBuilder();\n        while (!stack.isEmpty()) {\n            Pair<Character, Integer> pair = stack.pop();\n            for (int i = 0; i < pair.getValue(); i++) {\n                sb.append(pair.getKey());\n            }\n        }\n\n        return sb.reverse().toString();\n    }\n}\n",
    },
  },
  1210: {
    java: {
      matrix: "",
    },
  },
  1211: {
    java: {
      database: "",
    },
  },
  1212: {
    java: {
      database: "",
    },
  },
  1213: {
    java: {
      counting: "",
    },
  },
  1214: {
    java: {
      "two-pointers": "",
    },
  },
  1215: {
    java: {
      backtracking: "",
    },
  },
  1216: {
    java: {
      "dynamic-programming": "",
    },
  },
  1217: {
    java: {
      greedy: "",
    },
  },
  1218: {
    java: {
      "dynamic-programming": "",
    },
  },
  1219: {
    java: {
      matrix: "",
    },
  },
  1220: {
    java: {
      "dynamic-programming": "",
    },
  },
  1221: {
    java: {
      counting: "",
    },
  },
  1222: {
    java: {
      matrix: "",
    },
  },
  1223: {
    java: {
      "dynamic-programming": "",
    },
  },
  1224: {
    java: {
      "hash-table": "",
    },
  },
  1225: {
    java: {
      database: "",
    },
  },
  1226: {
    java: {
      concurrency:
        "import java.util.concurrent.TimeUnit;\nimport java.util.concurrent.locks.Lock;\nimport java.util.concurrent.locks.ReentrantLock;\n\npublic class DiningPhilosophers {\n\n    private Lock leftForkLock = new ReentrantLock();\n    private Lock rightForkLock = new ReentrantLock();\n\n    public DiningPhilosophers() {\n\n    }\n\n    // call the run() method of any runnable to execute its code\n    public void wantsToEat(int philosopher,\n            Runnable pickLeftFork,\n            Runnable pickRightFork,\n            Runnable eat,\n            Runnable putLeftFork,\n            Runnable putRightFork) throws InterruptedException {\n\n        while (true) {\n            if (leftForkLock.tryLock(100, TimeUnit.MILLISECONDS)) {\n                try {\n                    pickLeftFork.run();\n                    if (rightForkLock.tryLock(100, TimeUnit.MILLISECONDS)) {\n                        try {\n                            pickRightFork.run();\n                            eat.run();\n                            putRightFork.run();\n                            return;\n                        } finally {\n                            rightForkLock.unlock();\n                        }\n                    }\n\n                } finally {\n                    putLeftFork.run();\n                    leftForkLock.unlock();\n                }\n            }\n        }\n    }\n}",
    },
  },
  1227: {
    java: {
      "probability-and-statistics":
        "class Solution {\n  public double nthPersonGetsNthSeat(int n) {\n    return n == 1 ? 1 : 0.5;\n  }\n}",
    },
  },
  1228: {
    java: {
      math: "",
    },
  },
  1229: {
    java: {
      "two-pointers": "",
    },
  },
  1230: {
    java: {
      "probability-and-statistics":
        "class Solution {\n    public double probabilityOfHeads(double[] prob, int target) {\n        int n = prob.length;\n        double[][] dp = new double[n + 1][target + 1];\n        dp[0][0] = 1;\n        for (int i = 1; i <= n; ++i) {\n            for (int j = 0; j <= Math.min(i, target); ++j) {\n                dp[i][j] = (1 - prob[i - 1]) * dp[i - 1][j];\n                if (j > 0) {\n                    dp[i][j] += prob[i - 1] * dp[i - 1][j - 1];\n                }\n            }\n        }\n        return dp[n][target];\n    }\n}",
    },
  },
  1232: {
    java: {
      geometry: "",
    },
  },
  1233: {
    java: {
      trie: "",
    },
  },
  1234: {
    java: {
      "sliding-window":
        "class Solution {\n  public int balancedString(String s) {\n  int n = s.length();\n  int k = n / 4;\n    int ans = n;\n    int[] count = new int[128];\n\n    for (final char c : s.toCharArray())\n      ++count[c];\n\n    for (int i = 0, j = 0; i < n; ++i) {\n      --count[s.charAt(i)];\n      while (j < n && count['Q'] <= k && count['W'] <= k && count['E'] <= k && count['R'] <= k) {\n        ans = Math.min(ans, i - j + 1);\n        ++count[s.charAt(j)];\n        ++j;\n      }\n    }\n\n    return ans;\n  }\n}",
    },
  },
  1235: {
    java: {
      "dynamic-programming": "",
    },
  },
  1236: {
    java: {
      interactive: "",
    },
  },
  1237: {
    java: {
      "two-pointers": "",
    },
  },
  1238: {
    java: {
      backtracking: "",
    },
  },
  1239: {
    java: {
      backtracking: "",
    },
  },
  1240: {
    java: {
      backtracking: "",
    },
  },
  1241: {
    java: {
      database: "",
    },
  },
  1242: {
    java: {
      concurrency:
        "import java.net.URI;\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\nimport java.util.Set;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.ConcurrentSkipListSet;\nimport java.util.stream.Collectors;\nimport java.util.stream.Stream;\n\npublic class Web_Crawler_Multithreaded {\n\n    class Solution_1_synchronizedList {\n        private final Set<String> set = Collections.newSetFromMap(new ConcurrentHashMap<String, Boolean>());\n        private final List<String> result = Collections.synchronizedList(new ArrayList<String>());\n        private String HOSTNAME = null;\n\n        public List<String> crawl(String startUrl, HtmlParser htmlParser) {\n            initHostName(startUrl);\n            set.add(startUrl);\n            getUrlDfs(startUrl, htmlParser);\n            return result;\n        }\n\n        private boolean judgeHostname(String url) {\n            int idx = url.indexOf('/', 7);\n            String hostName = (idx != -1) ? url.substring(0, idx) : url;\n            return hostName.equals(HOSTNAME);\n        }\n\n        private void initHostName(String url) {\n            int idx = url.indexOf('/', 7);\n            HOSTNAME = (idx != -1) ? url.substring(0, idx) : url;\n        }\n\n        private void getUrlDfs(String startUrl, HtmlParser htmlParser) {\n            result.add(startUrl);\n            List<String> res = htmlParser.getUrls(startUrl);\n            List<Thread> threads = new ArrayList<>();\n            for (String url : res) {\n                if (judgeHostname(url) && !set.contains(url)) {\n                    set.add(url);\n                    threads.add(new Thread(() -> {\n                        getUrlDfs(url, htmlParser);\n                    }));\n                }\n            }\n            for (Thread thread : threads) {\n                thread.start();\n            }\n            try {\n                for (Thread thread : threads) {\n                    thread.join(); \n                }\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n\n    }\n\n    class Solution_2_ConcurrentSkipListSet {\n\n        public List<String> crawl(String startUrl, HtmlParser htmlParser) {\n            Set<String> visited = new ConcurrentSkipListSet<>();\n            String hostname = getHostname(startUrl);\n            visited.add(startUrl);\n\n            return crawlDfs(startUrl, htmlParser, hostname, visited).collect(Collectors.toList());\n        }\n\n        private Stream<String> crawlDfs(String startUrl, HtmlParser htmlParser, String hostname,\n                                     Set<String> visited) {\n            try (Stream<String> stream = htmlParser.getUrls(startUrl)\n                .parallelStream()\n                .filter(url -> isSameHostname(url, hostname))\n                .filter(visited::add)\n                .flatMap(url -> crawlDfs(url, htmlParser, hostname, visited))) {\n\n                return Stream.concat(Stream.of(startUrl), stream);\n            }\n        }\n\n        private String getHostname(String url) {\n            int idx = url.indexOf('/', 7);\n            return (idx != -1) ? url.substring(0, idx) : url;\n        }\n\n        private boolean isSameHostname(String url, String hostname) {\n            return url.startsWith(hostname) && (url.length() == hostname.length()\n                || url.charAt(hostname.length()) == '/');\n        }\n    }\n\n    interface HtmlParser {\n        List<String> getUrls(String str);\n    }\n\n\n    class Solution_CrawlerClass {\n        public List<String> crawl(String startUrl, HtmlParser htmlParser) {\n            String host = URI.create(startUrl).getHost();\n            Crawler crawler = new Crawler(startUrl, host, htmlParser);\n            crawler.res = new ArrayList<>();\n            crawler.start();\n            Crawler.joinThread(crawler);\n            return crawler.res;\n        }\n    }\n\n    static class Crawler extends Thread {\n        String startUrl;\n        String hostname;\n        HtmlParser htmlParser;\n        public volatile List<String> res = new ArrayList<>();\n\n        public Crawler(String startUrl, String hostname, HtmlParser htmlParser) {\n            this.startUrl = startUrl;\n            this.hostname = hostname;\n            this.htmlParser = htmlParser;\n        }\n\n        @Override\n        public void run() {\n            String host = URI.create(startUrl).getHost();\n            if (!host.equals(hostname) || res.contains(startUrl)) {\n                return;\n            }\n            res.add(startUrl);\n            List<Thread> threads = new ArrayList<>();\n            for (String s : htmlParser.getUrls(startUrl)) {\n                Crawler crawler = new Crawler(s, hostname, htmlParser);\n                crawler.start();\n                threads.add(crawler);\n            }\n            for (Thread t : threads) {\n                joinThread(t);\n            }\n        }\n\n        public static void joinThread(Thread thread) {\n            try {\n                thread.join();\n            } catch (InterruptedException e) {\n            }\n        }\n\n    }\n}",
    },
  },
  1244: {
    java: {
      design: "",
    },
  },
  1245: {
    java: {
      "topological-sort": "",
    },
  },
  1246: {
    java: {
      "dynamic-programming": "",
    },
  },
  1247: {
    java: {
      greedy: "",
    },
  },
  1248: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numberOfSubarrays(int[] nums, int k) {\n        return atMost(nums, k) - atMost(nums, k - 1);\n    }\n    \n    private int atMost(int[] nums, int k) {\n        int res = 0;\n        int left = 0;\n        int count = 0;\n        \n        for (int right = 0; right < nums.length; ++right) {\n            if (nums[right] % 2 == 1) {\n                --k;\n            }\n            \n            while (k < 0) {\n                if (nums[left] % 2 == 1) {\n                    ++k;\n                }\n                ++left;\n            }\n            \n            res += right - left + 1;\n        }\n        \n        return res;\n    }\n}",
    },
  },
  1249: {
    java: {
      stack:
        "class Solution {\n    public String minRemoveToMakeValid(String s) {\n        Stack<Integer> stack = new Stack<>();\n        char[] chars = s.toCharArray();\n        \n        for (int i = 0; i < chars.length; i++) {\n            if (chars[i] == '(') {\n                stack.push(i); \n            } else if (chars[i] == ')') {\n                if (!stack.isEmpty()) {\n                    stack.pop();\n                } else {\n                    chars[i] = '*'; \n                }\n            }\n        }\n        \n        while (!stack.isEmpty()) {\n            chars[stack.pop()] = '*';\n        }\n        \n        StringBuilder result = new StringBuilder();\n        for (char c : chars) {\n            if (c != '*') {\n                result.append(c);\n            }\n        }\n        \n        return result.toString();\n    }\n}\n",
    },
  },
  1250: {
    java: {
      "number-theory": "",
    },
  },
  1251: {
    java: {
      database: "",
    },
  },
  1252: {
    java: {
      math: "",
    },
  },
  1253: {
    java: {
      matrix: "",
    },
  },
  1254: {
    java: {
      "union-find": "",
    },
  },
  1255: {
    java: {
      "dynamic-programming": "",
    },
  },
  1256: {
    java: {
      "bit-manipulation": "",
    },
  },
  1257: {
    java: {
      tree: "",
    },
  },
  1258: {
    java: {
      "union-find": "",
    },
  },
  1259: {
    java: {
      "dynamic-programming": "",
    },
  },
  1260: {
    java: {
      matrix: "",
    },
  },
  1261: {
    java: {
      tree: "",
    },
  },
  1262: {
    java: {
      "dynamic-programming": "",
    },
  },
  1263: {
    java: {
      matrix: "",
    },
  },
  1264: {
    java: {
      database: "",
    },
  },
  1265: {
    java: {
      "two-pointers": "",
    },
  },
  1266: {
    java: {
      geometry: "",
    },
  },
  1267: {
    java: {
      "union-find": "",
    },
  },
  1268: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1269: {
    java: {
      "dynamic-programming": "",
    },
  },
  1270: {
    java: {
      database: "",
    },
  },
  1271: {
    java: {
      math: "",
    },
  },
  1273: {
    java: {
      tree: "",
    },
  },
  1274: {
    java: {
      interactive: "",
    },
  },
  1275: {
    java: {
      matrix: "",
    },
  },
  1276: {
    java: {
      math: "",
    },
  },
  1277: {
    java: {
      matrix: "",
    },
  },
  1278: {
    java: {
      "dynamic-programming": "",
    },
  },
  1279: {
    java: {
      concurrency:
        "class TrafficLight {\n  private int road = 1;\n\n  public TrafficLight() {\n  }\n\n  public synchronized void carArrived(\n      int carId, \n      int roadId,\n      int direction, \n      Runnable turnGreen, \n      Runnable crossCar \n  ) {\n      if (roadId != road) {\n          turnGreen.run();\n          road = roadId;\n      }\n      crossCar.run();\n  }\n}",
    },
  },
  1280: {
    java: {
      database: "",
    },
  },
  1281: {
    java: {
      math: "",
    },
  },
  1282: {
    java: {
      "hash-table": "",
    },
  },
  1284: {
    java: {
      matrix: "",
    },
  },
  1285: {
    java: {
      database: "",
    },
  },
  1286: {
    java: {
      iterator:
        "class CombinationIterator {\n    private List<String> combinations;\n    private int currentIndex;\n\n    public CombinationIterator(String characters, int combinationLength) {\n        combinations = new ArrayList<>();\n        generateCombinations(characters, combinationLength, 0, new StringBuilder());\n        currentIndex = 0;\n    }\n\n    private void generateCombinations(String characters, int length, int start, StringBuilder sb) {\n        if (sb.length() == length) {\n            combinations.add(sb.toString());\n            return;\n        }\n\n        for (int i = start; i < characters.length(); i++) {\n            sb.append(characters.charAt(i));\n            generateCombinations(characters, length, i + 1, sb);\n            sb.deleteCharAt(sb.length() - 1);\n        }\n    }\n\n    public String next() {\n        return combinations.get(currentIndex++);\n    }\n\n    public boolean hasNext() {\n        return currentIndex < combinations.size();\n    }\n}\n\n/**\n * Your CombinationIterator object will be instantiated and called as such:\n * CombinationIterator obj = new CombinationIterator(characters,\n * combinationLength);\n * String param_1 = obj.next();\n * boolean param_2 = obj.hasNext();\n */",
    },
  },
  1288: {
    java: {
      sorting: "",
    },
  },
  1289: {
    java: {
      matrix: "",
    },
  },
  1290: {
    java: {
      "linked-list": "",
    },
  },
  1291: {
    java: {
      enumeration: "",
    },
  },
  1292: {
    java: {
      matrix: "",
    },
  },
  1293: {
    java: {
      matrix: "",
    },
  },
  1294: {
    java: {
      database: "",
    },
  },
  1296: {
    java: {
      greedy: "",
    },
  },
  1297: {
    java: {
      "sliding-window":
        "import java.util.HashMap;\nimport java.util.Map;\n\nclass Solution {\n    public int maxFreq(String s, int maxLetters, int minSize, int maxSize) {\n        int n = s.length();\n        int maxCount = 0;\n        Map<String, Integer> substringCount = new HashMap<>();\n        \n        for (int i = 0; i <= n - minSize; ++i) {\n            String sub = s.substring(i, i + minSize);\n            if (isValid(sub, maxLetters)) {\n                substringCount.put(sub, substringCount.getOrDefault(sub, 0) + 1);\n                maxCount = Math.max(maxCount, substringCount.get(sub));\n            }\n        }\n        \n        return maxCount;\n    }\n    \n    private boolean isValid(String sub, int maxLetters) {\n        int[] count = new int[26];\n        int uniqueLetters = 0;\n        for (char c : sub.toCharArray()) {\n            if (count[c - 'a'] == 0) {\n                uniqueLetters++;\n            }\n            count[c - 'a']++;\n        }\n        return uniqueLetters <= maxLetters;\n    }\n}\n",
    },
  },
  1298: {
    java: {
      graph: "",
    },
  },
  1300: {
    java: {
      sorting: "",
    },
  },
  1301: {
    java: {
      matrix: "",
    },
  },
  1302: {
    java: {
      tree: "",
    },
  },
  1303: {
    java: {
      database: "",
    },
  },
  1304: {
    java: {
      math: "",
    },
  },
  1305: {
    java: {
      "binary-search-tree": "",
    },
  },
  1306: {
    java: {
      "breadth-first-search": "",
    },
  },
  1307: {
    java: {
      backtracking: "",
    },
  },
  1308: {
    java: {
      database: "",
    },
  },
  1309: {
    java: {
      string: "",
    },
  },
  1310: {
    java: {
      "prefix-sum": "",
    },
  },
  1311: {
    java: {
      graph: "",
    },
  },
  1312: {
    java: {
      "dynamic-programming": "",
    },
  },
  1314: {
    java: {
      matrix: "",
    },
  },
  1315: {
    java: {
      tree: "",
    },
  },
  1316: {
    java: {
      "rolling-hash": "",
    },
  },
  1317: {
    java: {
      math: "",
    },
  },
  1318: {
    java: {
      "bit-manipulation": "",
    },
  },
  1319: {
    java: {
      "union-find": "",
    },
  },
  1320: {
    java: {
      "dynamic-programming": "",
    },
  },
  1321: {
    java: {
      database: "",
    },
  },
  1322: {
    java: {
      database: "",
    },
  },
  1323: {
    java: {
      greedy: "",
    },
  },
  1324: {
    java: {
      string: "",
    },
  },
  1325: {
    java: {
      tree: "",
    },
  },
  1326: {
    java: {
      "dynamic-programming": "",
    },
  },
  1327: {
    java: {
      database: "",
    },
  },
  1328: {
    java: {
      greedy: "",
    },
  },
  1329: {
    java: {
      matrix: "",
    },
  },
  1330: {
    java: {
      greedy: "",
    },
  },
  1331: {
    java: {
      sorting: "",
    },
  },
  1332: {
    java: {
      "two-pointers": "",
    },
  },
  1333: {
    java: {
      sorting: "",
    },
  },
  1334: {
    java: {
      "dynamic-programming": "",
    },
  },
  1335: {
    java: {
      "dynamic-programming": "",
    },
  },
  1336: {
    java: {
      database: "",
    },
  },
  1337: {
    java: {
      matrix:
        "import java.util.*;\n\nclass Solution {\n    public int[] kWeakestRows(int[][] mat, int k) {\n        int m = mat.length;\n        int n = mat[0].length;\n        \n        PriorityQueue<int[]> pq = new PriorityQueue<>(\n            (a, b) -> a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]\n        );\n        \n        for (int i = 0; i < m; i++) {\n            int soldiers = countSoldiers(mat[i]);\n            pq.offer(new int[]{i, soldiers});\n        }\n        \n        int[] result = new int[k];\n        for (int i = 0; i < k; i++) {\n            result[i] = pq.poll()[0];\n        }\n        \n        return result;\n    }\n    \n    private int countSoldiers(int[] row) {\n        int count = 0;\n        for (int num : row) {\n            if (num == 1) {\n                count++;\n            }\n        }\n        return count;\n    }\n}\n",
    },
  },
  1338: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1339: {
    java: {
      tree: "",
    },
  },
  1340: {
    java: {
      "dynamic-programming": "",
    },
  },
  1341: {
    java: {
      database: "",
    },
  },
  1342: {
    java: {
      "bit-manipulation": "",
    },
  },
  1343: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numOfSubarrays(int[] arr, int k, int threshold) {\n        int count = 0;\n        int windowSum = 0;\n        int n = arr.length;\n        int targetSum = k * threshold;\n\n        for (int i = 0; i < k; i++) {\n            windowSum += arr[i];\n        }\n\n        if (windowSum >= targetSum) {\n            count++;\n        }\n\n        for (int i = k; i < n; i++) {\n            windowSum += arr[i] - arr[i - k];\n            if (windowSum >= targetSum) {\n                count++;\n            }\n        }\n\n        return count;\n    }\n}\n",
    },
  },
  1344: {
    java: {
      math: "",
    },
  },
  1345: {
    java: {
      "breadth-first-search": "",
    },
  },
  1346: {
    java: {
      "two-pointers": "",
    },
  },
  1347: {
    java: {
      counting: "",
    },
  },
  1348: {
    java: {
      "ordered-set": "",
    },
  },
  1349: {
    java: {
      matrix: "",
    },
  },
  1350: {
    java: {
      database: "",
    },
  },
  1351: {
    java: {
      matrix: "",
    },
  },
  1352: {
    java: {
      queue:
        "class ProductOfNumbers {\n    public ProductOfNumbers() {\n        prefix = new ArrayList<>(Arrays.asList(1));\n    }\n\n    public void add(int num) {\n        if (num == 0)\n            prefix = new ArrayList<>(Arrays.asList(1));\n        else\n            prefix.add(prefix.get(prefix.size() - 1) * num);\n    }\n\n    public int getProduct(int k) {\n        return k >= prefix.size() ? 0\n                : prefix.get(prefix.size() - 1) / prefix.get(prefix.size() - k - 1);\n    }\n\n    private List<Integer> prefix = new ArrayList<>();\n}\n/**\n * Your ProductOfNumbers object will be instantiated and called as such:\n * ProductOfNumbers obj = new ProductOfNumbers();\n * obj.add(num);\n * int param_2 = obj.getProduct(k);\n */",
    },
  },
  1353: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1354: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1355: {
    java: {
      database: "",
    },
  },
  1356: {
    java: {
      "bit-manipulation": "",
    },
  },
  1357: {
    java: {
      design: "",
    },
  },
  1358: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numberOfSubstrings(String s) {\n        int[] count = new int[3]; \n        int left = 0;\n        int result = 0;\n        \n        for (int right = 0; right < s.length(); right++) {\n            count[s.charAt(right) - 'a']++;\n            \n            while (count[0] > 0 && count[1] > 0 && count[2] > 0) {\n                result += s.length() - right; \n                count[s.charAt(left) - 'a']--;\n                left++;\n            }\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  1359: {
    java: {
      "dynamic-programming": "",
    },
  },
  1360: {
    java: {
      math: "",
    },
  },
  1361: {
    java: {
      "union-find": "",
    },
  },
  1362: {
    java: {
      math: "",
    },
  },
  1363: {
    java: {
      "dynamic-programming": "",
    },
  },
  1364: {
    java: {
      database: "",
    },
  },
  1365: {
    java: {
      counting: "",
    },
  },
  1366: {
    java: {
      counting: "",
    },
  },
  1367: {
    java: {
      tree: "",
    },
  },
  1368: {
    java: {
      matrix: "",
    },
  },
  1369: {
    java: {
      database: "",
    },
  },
  1370: {
    java: {
      counting: "",
    },
  },
  1371: {
    java: {
      "prefix-sum": "",
    },
  },
  1372: {
    java: {
      "dynamic-programming": "",
    },
  },
  1373: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode() {}\n * TreeNode(int val) { this.val = val; }\n * TreeNode(int val, TreeNode left, TreeNode right) {\n * this.val = val;\n * this.left = left;\n * this.right = right;\n * }\n * }\n */\nclass Solution {\n    private int maxSum = 0;\n\n    public int maxSumBST(TreeNode root) {\n        dfs(root);\n        return maxSum;\n    }\n\n    private int[] dfs(TreeNode node) {\n        if (node == null) {\n            return new int[] { 1, Integer.MAX_VALUE, Integer.MIN_VALUE, 0 }; // isBST, min, max, sum\n        }\n\n        int[] left = dfs(node.left);\n        int[] right = dfs(node.right);\n\n        if (left[0] == 1 && right[0] == 1 && node.val > left[2] && node.val < right[1]) {\n            int sum = left[3] + right[3] + node.val;\n            maxSum = Math.max(maxSum, sum);\n            int min = Math.min(left[1], node.val);\n            int max = Math.max(right[2], node.val);\n            return new int[] { 1, min, max, sum };\n        } else {\n            return new int[] { 0, 0, 0, 0 }; // not a BST\n        }\n    }\n}\n",
    },
  },
  1374: {
    java: {
      string: "",
    },
  },
  1376: {
    java: {
      tree: "",
    },
  },
  1377: {
    java: {
      tree: "",
    },
  },
  1378: {
    java: {
      database: "",
    },
  },
  1379: {
    java: {
      tree: "",
    },
  },
  1380: {
    java: {
      matrix: "",
    },
  },
  1381: {
    java: {
      stack: "",
    },
  },
  1382: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public TreeNode balanceBST(TreeNode root) {\n        List<TreeNode> nodes = new ArrayList<>();\n        inorderTraversal(root, nodes);\n        return buildBalancedBST(nodes, 0, nodes.size() - 1);\n    }\n    \n    private void inorderTraversal(TreeNode root, List<TreeNode> nodes) {\n        if (root == null) {\n            return;\n        }\n        inorderTraversal(root.left, nodes);\n        nodes.add(root);\n        inorderTraversal(root.right, nodes);\n    }\n    \n    private TreeNode buildBalancedBST(List<TreeNode> nodes, int start, int end) {\n        if (start > end) {\n            return null;\n        }\n        int mid = (start + end) / 2;\n        TreeNode node = nodes.get(mid);\n        node.left = buildBalancedBST(nodes, start, mid - 1);\n        node.right = buildBalancedBST(nodes, mid + 1, end);\n        return node;\n    }\n}\n",
    },
  },
  1383: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1384: {
    java: {
      database: "",
    },
  },
  1385: {
    java: {
      "two-pointers": "",
    },
  },
  1386: {
    java: {
      "bit-manipulation": "",
    },
  },
  1387: {
    java: {
      "dynamic-programming": "",
    },
  },
  1388: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1390: {
    java: {
      math: "",
    },
  },
  1391: {
    java: {
      "union-find": "",
    },
  },
  1392: {
    java: {
      "rolling-hash": "",
    },
  },
  1393: {
    java: {
      database: "",
    },
  },
  1394: {
    java: {
      counting: "",
    },
  },
  1395: {
    java: {
      "dynamic-programming": "",
    },
  },
  1396: {
    java: {
      design: "",
    },
  },
  1397: {
    java: {
      "dynamic-programming": "",
    },
  },
  1398: {
    java: {
      database: "",
    },
  },
  1399: {
    java: {
      math: "",
    },
  },
  1400: {
    java: {
      counting: "",
    },
  },
  1401: {
    java: {
      geometry: "",
    },
  },
  1402: {
    java: {
      "dynamic-programming": "",
    },
  },
  1403: {
    java: {
      greedy: "",
    },
  },
  1404: {
    java: {
      "bit-manipulation": "",
    },
  },
  1405: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1406: {
    java: {
      "game-theory": "",
    },
  },
  1407: {
    java: {
      database: "",
    },
  },
  1408: {
    java: {
      "string-matching": "",
    },
  },
  1410: {
    java: {
      "hash-table": "",
    },
  },
  1411: {
    java: {
      "dynamic-programming": "",
    },
  },
  1412: {
    java: {
      database: "",
    },
  },
  1413: {
    java: {
      "prefix-sum": "",
    },
  },
  1414: {
    java: {
      greedy: "",
    },
  },
  1415: {
    java: {
      backtracking: "",
    },
  },
  1416: {
    java: {
      "dynamic-programming": "",
    },
  },
  1417: {
    java: {
      string: "",
    },
  },
  1418: {
    java: {
      "ordered-set": "",
    },
  },
  1419: {
    java: {
      counting: "",
    },
  },
  1420: {
    java: {
      "prefix-sum": "",
    },
  },
  1421: {
    java: {
      database: "",
    },
  },
  1422: {
    java: {
      "prefix-sum": "",
    },
  },
  1423: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maxScore(int[] cardPoints, int k) {\n        int n = cardPoints.length;\n        int totalPoints = 0;\n        for (int i = 0; i < k; i++) {\n            totalPoints += cardPoints[i];\n        }\n\n        int maxPoints = totalPoints;\n\n        for (int i = 0; i < k; i++) {\n            totalPoints = totalPoints - cardPoints[k - 1 - i] + cardPoints[n - 1 - i];\n            maxPoints = Math.max(maxPoints, totalPoints);\n        }\n\n        return maxPoints;\n    }\n}",
    },
  },
  1424: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1425: {
    java: {
      "monotonic-queue":
        "import java.util.Deque;\nimport java.util.LinkedList;\n\npublic class Solution {\n    public int constrainedSubsetSum(int[] nums, int k) {\n        int n = nums.length;\n        int[] dp = new int[n];\n        Deque<Integer> deque = new LinkedList<>();\n        int maxSum = nums[0];\n\n        for (int i = 0; i < n; i++) {\n            dp[i] = nums[i];\n            if (!deque.isEmpty()) {\n                dp[i] = Math.max(dp[i], nums[i] + dp[deque.peekFirst()]);\n            }\n            maxSum = Math.max(maxSum, dp[i]);\n\n            while (!deque.isEmpty() && dp[i] >= dp[deque.peekLast()]) {\n                deque.pollLast();\n            }\n\n            deque.addLast(i);\n            \n            if (i - deque.peekFirst() >= k) {\n                deque.pollFirst();\n            }\n        }\n\n        return maxSum;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums = {10, 2, -10, 5, 20};\n        int k = 2;\n        System.out.println(solution.constrainedSubsetSum(nums, k));  // Output: 37\n    }\n}\n",
    },
  },
  1426: {
    java: {
      "hash-table": "",
    },
  },
  1427: {
    java: {
      math: "",
    },
  },
  1428: {
    java: {
      matrix: "",
    },
  },
  1429: {
    java: {
      queue:
        "class FirstUnique {\n    private Map<Integer, Integer> count = new HashMap<>();\n    private Set<Integer> unique = new LinkedHashSet<>();\n\n    public FirstUnique(int[] nums) {\n        for (int v : nums) {\n            count.put(v, count.getOrDefault(v, 0) + 1);\n        }\n        for (int v : nums) {\n            if (count.get(v) == 1) {\n                unique.add(v);\n            }\n        }\n    }\n\n    public int showFirstUnique() {\n        return unique.isEmpty() ? -1 : unique.iterator().next();\n    }\n\n    public void add(int value) {\n        count.put(value, count.getOrDefault(value, 0) + 1);\n        if (count.get(value) == 1) {\n            unique.add(value);\n        } else {\n            unique.remove(value);\n        }\n    }\n}\n\n/**\n * Your FirstUnique object will be instantiated and called as such:\n * FirstUnique obj = new FirstUnique(nums);\n * int param_1 = obj.showFirstUnique();\n * obj.add(value);\n */",
    },
  },
  1430: {
    java: {
      tree: "",
    },
  },
  1432: {
    java: {
      greedy: "",
    },
  },
  1433: {
    java: {
      greedy: "",
    },
  },
  1434: {
    java: {
      "dynamic-programming": "",
    },
  },
  1435: {
    java: {
      database: "",
    },
  },
  1436: {
    java: {
      "hash-table": "",
    },
  },
  1438: {
    java: {
      "monotonic-queue":
        "import java.util.Deque;\nimport java.util.LinkedList;\n\npublic class Solution {\n    public int longestSubarray(int[] nums, int limit) {\n        int left = 0, right = 0;\n        int maxLength = 0;\n        Deque<Integer> maxDeque = new LinkedList<>();\n        Deque<Integer> minDeque = new LinkedList<>();\n\n        while (right < nums.length) {\n            while (!maxDeque.isEmpty() && maxDeque.peekLast() < nums[right]) {\n                maxDeque.pollLast();\n            }\n            maxDeque.addLast(nums[right]);\n\n            while (!minDeque.isEmpty() && minDeque.peekLast() > nums[right]) {\n                minDeque.pollLast();\n            }\n            minDeque.addLast(nums[right]);\n\n            while (maxDeque.peekFirst() - minDeque.peekFirst() > limit) {\n                if (maxDeque.peekFirst() == nums[left]) {\n                    maxDeque.pollFirst();\n                }\n                if (minDeque.peekFirst() == nums[left]) {\n                    minDeque.pollFirst();\n                }\n                left++;\n            }\n\n            maxLength = Math.max(maxLength, right - left + 1);\n            right++;\n        }\n\n        return maxLength;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums = {8, 2, 4, 7};\n        int limit = 4;\n        System.out.println(solution.longestSubarray(nums, limit));  // Output: 2\n    }\n}\n",
    },
  },
  1439: {
    java: {
      matrix:
        "class T {\n    public int i;\n    public int j;\n    public int sum; // nums1[i] + nums2[j]\n\n    public T(int i, int j, int sum) {\n        this.i = i;\n        this.j = j;\n        this.sum = sum;\n    }\n}\n\nclass Solution {\n    public int kthSmallest(int[][] mat, int k) {\n        int[] row = mat[0];\n\n        for (int i = 1; i < mat.length; ++i)\n            row = kSmallestPairSums(row, mat[i], k);\n\n        return row[k - 1];\n    }\n\n    private int[] kSmallestPairSums(int[] nums1, int[] nums2, int k) {\n        List<Integer> ans = new ArrayList<>();\n        Queue<T> minHeap = new PriorityQueue<>((a, b) -> a.sum - b.sum);\n\n        for (int i = 0; i < k && i < nums1.length; ++i)\n            minHeap.offer(new T(i, 0, nums1[i] + nums2[0]));\n\n        while (!minHeap.isEmpty() && ans.size() < k) {\n            int i = minHeap.peek().i;\n            int j = minHeap.poll().j;\n            ans.add(nums1[i] + nums2[j]);\n            if (j + 1 < nums2.length)\n                minHeap.offer(new T(i, j + 1, nums1[i] + nums2[j + 1]));\n        }\n\n        return ans.stream().mapToInt(Integer::intValue).toArray();\n    }\n}",
    },
  },
  1440: {
    java: {
      database: "",
    },
  },
  1441: {
    java: {
      stack: "",
    },
  },
  1442: {
    java: {
      "prefix-sum": "",
    },
  },
  1443: {
    java: {
      tree: "",
    },
  },
  1444: {
    java: {
      matrix: "",
    },
  },
  1445: {
    java: {
      database: "",
    },
  },
  1446: {
    java: {
      string: "",
    },
  },
  1447: {
    java: {
      "number-theory": "",
    },
  },
  1448: {
    java: {
      tree: "",
    },
  },
  1449: {
    java: {
      "dynamic-programming": "",
    },
  },
  1451: {
    java: {
      sorting: "",
    },
  },
  1452: {
    java: {
      "hash-table": "",
    },
  },
  1453: {
    java: {
      geometry: "",
    },
  },
  1454: {
    java: {
      database: "",
    },
  },
  1455: {
    java: {
      "two-pointers": "",
    },
  },
  1456: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maxVowels(String s, int k) {\n        int maxVowels = 0;\n        int currentVowels = 0;\n        int n = s.length();\n\n        for (int i = 0; i < k; i++) {\n            if (isVowel(s.charAt(i))) {\n                currentVowels++;\n            }\n        }\n\n        maxVowels = currentVowels;\n\n        for (int i = k; i < n; i++) {\n            if (isVowel(s.charAt(i))) {\n                currentVowels++;\n            }\n            if (isVowel(s.charAt(i - k))) {\n                currentVowels--;\n            }\n            maxVowels = Math.max(maxVowels, currentVowels);\n        }\n\n        return maxVowels;\n    }\n\n    private boolean isVowel(char c) {\n        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ||\n               c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U';\n    }\n}\n",
    },
  },
  1457: {
    java: {
      tree: "",
    },
  },
  1458: {
    java: {
      "dynamic-programming": "",
    },
  },
  1459: {
    java: {
      database: "",
    },
  },
  1460: {
    java: {
      sorting: "",
    },
  },
  1461: {
    java: {
      "rolling-hash": "",
    },
  },
  1462: {
    java: {
      "topological-sort": "",
    },
  },
  1463: {
    java: {
      matrix: "",
    },
  },
  1464: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1465: {
    java: {
      greedy: "",
    },
  },
  1466: {
    java: {
      graph: "",
    },
  },
  1467: {
    java: {
      "probability-and-statistics":
        "enum BoxCase {\n    kEqualBalls, kEqualDistantBalls\n}\n\nclass Solution {\n    public double getProbability(int[] balls) {\n      int n = Arrays.stream(balls).sum() / 2;\n        return cases(balls, 0, 0, 0, 0, 0, n, BoxCase.kEqualDistantBalls) /\n                cases(balls, 0, 0, 0, 0, 0, n, BoxCase.kEqualBalls);\n    }\n\n    private int[] fact = { 1, 1, 2, 6, 24, 120, 720 };\n\n    double cases(int[] balls, int i, int ballsCountA, int ballsCountB, int colorsCountA,\n            int colorsCountB, int n, BoxCase boxCase) {\n        if (ballsCountA > n || ballsCountB > n)\n            return 0;\n        if (i == balls.length)\n            return boxCase == BoxCase.kEqualBalls ? 1 : (colorsCountA == colorsCountB ? 1 : 0);\n\n        double ans = 0;\n\n        for (int ballsTakenA = 0; ballsTakenA <= balls[i]; ++ballsTakenA) {\n          int ballsTakenB = balls[i] - ballsTakenA;\n          int newcolorsCountA = colorsCountA + (ballsTakenA > 0 ? 1 : 0);\n          int newcolorsCountB = colorsCountB + (ballsTakenB > 0 ? 1 : 0);\n            ans += cases(balls, i + 1, ballsCountA + ballsTakenA, ballsCountB + ballsTakenB,\n                    newcolorsCountA, newcolorsCountB, n, boxCase) /\n                    (fact[ballsTakenA] * fact[ballsTakenB]);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  1468: {
    java: {
      database: "",
    },
  },
  1469: {
    java: {
      tree: "",
    },
  },
  1471: {
    java: {
      "two-pointers": "",
    },
  },
  1472: {
    java: {
      "doubly-linked-list":
        "class BrowserHistory {\n    class Node {\n        String url;\n        Node prev, next;\n        \n        Node(String url) {\n            this.url = url;\n        }\n      }\n    \n    private Node current;\n\n    public BrowserHistory(String homepage) {\n        current = new Node(homepage);\n      }\n\n    public void visit(String url) {\n        Node newNode = new Node(url);\n        current.next = newNode;\n        newNode.prev = current;\n        current = newNode;\n      }\n\n    public String back(int steps) {\n        while (steps > 0 && current.prev != null) {\n            current = current.prev;\n            steps--;\n        }\n        return current.url;\n      }\n\n    public String forward(int steps) {\n        while (steps > 0 && current.next != null) {\n            current = current.next;\n            steps--;\n        }\n        return current.url;\n      }\n    }\n    /**\n * Your BrowserHistory object will be instantiated and called as such:\n * BrowserHistory obj = new BrowserHistory(homepage);\n * obj.visit(url);\n * String param_2 = obj.back(steps);\n * String param_3 = obj.forward(steps);\n */",
    },
  },
  1473: {
    java: {
      "dynamic-programming": "",
    },
  },
  1474: {
    java: {
      "linked-list": "",
    },
  },
  1475: {
    java: {
      "monotonic-stack": "",
    },
  },
  1476: {
    java: {
      matrix: "",
    },
  },
  1477: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minSumOfLengths(int[] arr, int target) {\n        int n = arr.length;\n        int[] minLength = new int[n];\n        Arrays.fill(minLength, Integer.MAX_VALUE);\n        \n        int left = 0, currSum = 0, minLen = Integer.MAX_VALUE, result = Integer.MAX_VALUE;\n\n        for (int right = 0; right < n; ++right) {\n            currSum += arr[right];\n\n            while (currSum > target) {\n                currSum -= arr[left++];\n            }\n\n            if (currSum == target) {\n                int currLen = right - left + 1;\n                if (left > 0 && minLength[left - 1] != Integer.MAX_VALUE) {\n                    result = Math.min(result, currLen + minLength[left - 1]);\n                }\n                minLen = Math.min(minLen, currLen);\n            }\n\n            minLength[right] = minLen;\n        }\n\n        return result == Integer.MAX_VALUE ? -1 : result;\n    }\n}\n",
    },
  },
  1478: {
    java: {
      "dynamic-programming": "",
    },
  },
  1479: {
    java: {
      database: "",
    },
  },
  1480: {
    java: {
      "prefix-sum": "",
    },
  },
  1481: {
    java: {
      counting: "",
    },
  },
  1483: {
    java: {
      "dynamic-programming": "",
    },
  },
  1484: {
    java: {
      database: "",
    },
  },
  1485: {
    java: {
      tree: "",
    },
  },
  1486: {
    java: {
      "bit-manipulation": "",
    },
  },
  1487: {
    java: {
      "hash-table": "",
    },
  },
  1488: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1489: {
    java: {
      "union-find": "",
    },
  },
  1490: {
    java: {
      tree: "",
    },
  },
  1491: {
    java: {
      sorting: "",
    },
  },
  1492: {
    java: {
      "number-theory": "",
    },
  },
  1493: {
    java: {
      "sliding-window":
        "class Solution {\n    public int longestSubarray(int[] nums) {\n        int left = 0;\n        int zeroCount = 0;\n        int maxLength = 0;\n\n        for (int right = 0; right < nums.length; right++) {\n            if (nums[right] == 0) {\n                zeroCount++;\n            }\n\n            while (zeroCount > 1) {\n                if (nums[left] == 0) {\n                    zeroCount--;\n                }\n                left++;\n            }\n\n            maxLength = Math.max(maxLength, right - left);\n        }\n\n        return maxLength;\n    }\n}\n",
    },
  },
  1494: {
    java: {
      "dynamic-programming": "",
    },
  },
  1495: {
    java: {
      database: "",
    },
  },
  1496: {
    java: {
      "hash-table": "",
    },
  },
  1497: {
    java: {
      counting: "",
    },
  },
  1498: {
    java: {
      "two-pointers": "",
    },
  },
  1499: {
    java: {
      "monotonic-queue":
        "import java.util.Deque;\nimport java.util.LinkedList;\n\npublic class Solution {\n    public int findMaxValueOfEquation(int[][] points, int k) {\n        Deque<int[]> deque = new LinkedList<>();\n        int maxValue = Integer.MIN_VALUE;\n\n        for (int[] point : points) {\n            int xj = point[0];\n            int yj = point[1];\n\n            while (!deque.isEmpty() && xj - deque.peekFirst()[0] > k) {\n                deque.pollFirst();\n            }\n\n            if (!deque.isEmpty()) {\n                maxValue = Math.max(maxValue, yj + xj + deque.peekFirst()[1]);\n            }\n\n            while (!deque.isEmpty() && yj - xj >= deque.peekLast()[1]) {\n                deque.pollLast();\n            }\n\n            deque.offerLast(new int[]{xj, yj - xj});\n        }\n\n        return maxValue;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[][] points = {{1, 3}, {2, 0}, {3, 10}, {4, 10}, {5, 1}};\n        int k = 1;\n        System.out.println(solution.findMaxValueOfEquation(points, k));  // Output: 14\n    }\n}\n",
    },
  },
  1500: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1501: {
    java: {
      database: "",
    },
  },
  1502: {
    java: {
      sorting: "",
    },
  },
  1503: {
    java: {
      brainteaser: "",
    },
  },
  1504: {
    java: {
      matrix:
        "class Solution {\n    public int numSubmat(int[][] mat) {\n        int m = mat.length;\n        int n = mat[0].length;\n        int ans = 0;\n        int[] hist = new int[n];\n\n        for (int[] row : mat) {\n            for (int i = 0; i < row.length; ++i)\n                hist[i] = row[i] == 0 ? 0 : hist[i] + 1;\n            ans += count(hist);\n        }\n\n        return ans;\n    }\n\n    private int count(int[] nums) {\n        int[] submatrices = new int[nums.length];\n        Deque<Integer> stack = new ArrayDeque<>();\n\n        for (int i = 0; i < nums.length; ++i) {\n            while (!stack.isEmpty() && nums[stack.peek()] >= nums[i])\n                stack.pop();\n            if (!stack.isEmpty()) {\n                int prevIndex = stack.peek();\n                submatrices[i] = submatrices[prevIndex] + nums[i] * (i - prevIndex);\n            } else {\n                submatrices[i] = nums[i] * (i + 1);\n            }\n            stack.push(i);\n        }\n\n        return Arrays.stream(submatrices).sum();\n    }\n}",
    },
  },
  1505: {
    java: {
      greedy: "",
    },
  },
  1506: {
    java: {
      tree: "",
    },
  },
  1507: {
    java: {
      string: "",
    },
  },
  1508: {
    java: {
      "two-pointers": "",
    },
  },
  1509: {
    java: {
      greedy: "",
    },
  },
  1510: {
    java: {
      "game-theory": "",
    },
  },
  1511: {
    java: {
      database: "",
    },
  },
  1512: {
    java: {
      counting: "",
    },
  },
  1513: {
    java: {
      math: "",
    },
  },
  1514: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1515: {
    java: {
      randomized:
        "class Solution {\n    public double getMinDistSum(int[][] positions) {\n        int n = positions.length;\n        double x = 0, y = 0;\n        for (int[] p : positions) {\n            x += p[0];\n            y += p[1];\n        }\n        x /= n;\n        y /= n;\n        double decay = 0.999;\n        double eps = 1e-6;\n        double alpha = 0.5;\n        while (true) {\n            double gradX = 0, gradY = 0;\n            double dist = 0;\n            for (int[] p : positions) {\n                double a = x - p[0], b = y - p[1];\n                double c = Math.sqrt(a * a + b * b);\n                gradX += a / (c + 1e-8);\n                gradY += b / (c + 1e-8);\n                dist += c;\n            }\n            double dx = gradX * alpha, dy = gradY * alpha;\n            if (Math.abs(dx) <= eps && Math.abs(dy) <= eps) {\n                return dist;\n            }\n            x -= dx;\n            y -= dy;\n            alpha *= decay;\n        }\n    }\n}",
    },
  },
  1516: {
    java: {
      tree: "",
    },
  },
  1517: {
    java: {
      database: "",
    },
  },
  1518: {
    java: {
      math: "",
    },
  },
  1519: {
    java: {
      tree: "",
    },
  },
  1520: {
    java: {
      greedy: "",
    },
  },
  1521: {
    java: {
      "bit-manipulation": "",
    },
  },
  1522: {
    java: {
      tree: "",
    },
  },
  1523: {
    java: {
      math: "",
    },
  },
  1524: {
    java: {
      "prefix-sum": "",
    },
  },
  1525: {
    java: {
      "dynamic-programming": "",
    },
  },
  1526: {
    java: {
      "monotonic-stack": "",
    },
  },
  1527: {
    java: {
      database: "",
    },
  },
  1528: {
    java: {
      string: "",
    },
  },
  1529: {
    java: {
      greedy: "",
    },
  },
  1530: {
    java: {
      tree: "",
    },
  },
  1531: {
    java: {
      "dynamic-programming": "",
    },
  },
  1532: {
    java: {
      database: "",
    },
  },
  1533: {
    java: {
      interactive: "",
    },
  },
  1534: {
    java: {
      enumeration: "",
    },
  },
  1536: {
    java: {
      matrix: "",
    },
  },
  1537: {
    java: {
      "two-pointers": "",
    },
  },
  1538: {
    java: {
      interactive: "",
    },
  },
  1540: {
    java: {
      "hash-table": "",
    },
  },
  1541: {
    java: {
      stack: "",
    },
  },
  1542: {
    java: {
      "bit-manipulation": "",
    },
  },
  1543: {
    java: {
      database: "",
    },
  },
  1544: {
    java: {
      stack: "",
    },
  },
  1545: {
    java: {
      recursion: "",
    },
  },
  1546: {
    java: {
      "prefix-sum": "",
    },
  },
  1547: {
    java: {
      "dynamic-programming": "",
    },
  },
  1548: {
    java: {
      "dynamic-programming": "",
    },
  },
  1549: {
    java: {
      database: "",
    },
  },
  1551: {
    java: {
      math: "",
    },
  },
  1552: {
    java: {
      sorting: "",
    },
  },
  1553: {
    java: {
      "dynamic-programming": "",
    },
  },
  1554: {
    java: {
      "rolling-hash": "",
    },
  },
  1555: {
    java: {
      database: "",
    },
  },
  1556: {
    java: {
      string: "",
    },
  },
  1557: {
    java: {
      graph: "",
    },
  },
  1558: {
    java: {
      "bit-manipulation": "",
    },
  },
  1559: {
    java: {
      "union-find": "",
    },
  },
  1561: {
    java: {
      "game-theory": "",
    },
  },
  1563: {
    java: {
      "game-theory": "",
    },
  },
  1564: {
    java: {
      greedy: "",
    },
  },
  1565: {
    java: {
      database: "",
    },
  },
  1566: {
    java: {
      enumeration: "",
    },
  },
  1567: {
    java: {
      "dynamic-programming": "",
    },
  },
  1568: {
    java: {
      "strongly-connected-component":
        "class Solution {\n\n    private final int[][] dirs = { { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } };\n\n    public int minDays(int[][] grid) {\n        if (disconnected(grid))\n            return 0;\n\n        // Try to remove 1 land.\n        for (int i = 0; i < grid.length; ++i)\n            for (int j = 0; j < grid[0].length; ++j)\n                if (grid[i][j] == 1) {\n                    grid[i][j] = 0;\n                    if (disconnected(grid))\n                        return 1;\n                    grid[i][j] = 1;\n                }\n\n        // Remove 2 lands.\n        return 2;\n    }\n\n    private boolean disconnected(int[][] grid) {\n        int islandsCount = 0;\n        boolean[][] seen = new boolean[grid.length][grid[0].length];\n        for (int i = 0; i < grid.length; ++i)\n            for (int j = 0; j < grid[0].length; ++j) {\n                if (grid[i][j] == 0 || seen[i][j])\n                    continue;\n                if (++islandsCount > 1)\n                    return true;\n                dfs(grid, i, j, seen);\n            }\n\n        return islandsCount != 1;\n    }\n\n    private void dfs(int[][] grid, int i, int j, boolean[][] seen) {\n        seen[i][j] = true;\n        for (int[] dir : dirs) {\n            int x = i + dir[0];\n            int y = j + dir[1];\n            if (x < 0 || x == grid.length || y < 0 || y == grid[0].length)\n                continue;\n            if (grid[x][y] == 0 || seen[x][y])\n                continue;\n            dfs(grid, x, y, seen);\n        }\n    }\n}\n",
    },
  },
  1569: {
    java: {
      "union-find": "",
    },
  },
  1570: {
    java: {
      "two-pointers": "",
    },
  },
  1571: {
    java: {
      database: "",
    },
  },
  1572: {
    java: {
      matrix: "",
    },
  },
  1573: {
    java: {
      math: "",
    },
  },
  1574: {
    java: {
      "two-pointers":
        "class Solution {\n    public int findLengthOfShortestSubarray(int[] arr) {\n        int n = arr.length;\n        int left = 0, right = n - 1;\n        \n        while (left < n - 1 && arr[left] <= arr[left + 1]) {\n            left++;\n        }\n        \n        if (left == n - 1) {\n            return 0;\n        }\n        \n        while (right > 0 && arr[right - 1] <= arr[right]) {\n            right--;\n        }\n        \n        int minRemove = Math.min(n - left - 1, right);        \n        int i = 0, j = right;\n        while (i <= left && j < n) {\n            if (arr[i] <= arr[j]) {\n                minRemove = Math.min(minRemove, j - i - 1);\n                i++;\n            } else {\n                j++;\n            }\n        }\n        \n        return minRemove;\n    }\n}\n",
    },
  },
  1575: {
    java: {
      "dynamic-programming": "",
    },
  },
  1576: {
    java: {
      string: "",
    },
  },
  1577: {
    java: {
      "two-pointers": "",
    },
  },
  1578: {
    java: {
      "dynamic-programming": "",
    },
  },
  1579: {
    java: {
      "union-find": "",
    },
  },
  1580: {
    java: {
      greedy: "",
    },
  },
  1581: {
    java: {
      database: "",
    },
  },
  1582: {
    java: {
      matrix: "",
    },
  },
  1584: {
    java: {
      "union-find": "",
    },
  },
  1585: {
    java: {
      greedy: "",
    },
  },
  1586: {
    java: {
      iterator:
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass BSTIterator {\n    private List<Integer> nums = new ArrayList<>();\n    private int i = -1;\n\n    public BSTIterator(TreeNode root) {\n        dfs(root);\n    }\n\n    public boolean hasNext() {\n        return i < nums.size() - 1;\n    }\n\n    public int next() {\n        return nums.get(++i);\n    }\n\n    public boolean hasPrev() {\n        return i > 0;\n    }\n\n    public int prev() {\n        return nums.get(--i);\n    }\n\n    private void dfs(TreeNode root) {\n        if (root == null) {\n            return;\n        }\n        dfs(root.left);\n        nums.add(root.val);\n        dfs(root.right);\n    }\n}\n\n/**\n * Your BSTIterator object will be instantiated and called as such:\n * BSTIterator obj = new BSTIterator(root);\n * boolean param_1 = obj.hasNext();\n * int param_2 = obj.next();\n * boolean param_3 = obj.hasPrev();\n * int param_4 = obj.prev();\n */",
    },
  },
  1587: {
    java: {
      database: "",
    },
  },
  1588: {
    java: {
      "prefix-sum": "",
    },
  },
  1589: {
    java: {
      "prefix-sum": "",
    },
  },
  1590: {
    java: {
      "prefix-sum": "",
    },
  },
  1591: {
    java: {
      matrix: "",
    },
  },
  1592: {
    java: {
      string: "",
    },
  },
  1593: {
    java: {
      backtracking: "",
    },
  },
  1594: {
    java: {
      matrix: "",
    },
  },
  1595: {
    java: {
      matrix: "",
    },
  },
  1596: {
    java: {
      database: "",
    },
  },
  1597: {
    java: {
      stack: "",
    },
  },
  1598: {
    java: {
      stack: "",
    },
  },
  1600: {
    java: {
      tree: "",
    },
  },
  1601: {
    java: {
      backtracking: "",
    },
  },
  1602: {
    java: {
      tree: "",
    },
  },
  1603: {
    java: {
      counting: "",
    },
  },
  1604: {
    java: {
      sorting: "",
    },
  },
  1605: {
    java: {
      matrix: "",
    },
  },
  1606: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1607: {
    java: {
      database: "",
    },
  },
  1608: {
    java: {
      sorting: "",
    },
  },
  1609: {
    java: {
      tree: "",
    },
  },
  1610: {
    java: {
      "sliding-window":
        "import java.util.*;\n\nclass Solution {\n    public int visiblePoints(List<List<Integer>> points, int angle, List<Integer> location) {\n        int sameLocationCount = 0;\n        List<Double> angles = new ArrayList<>();\n\n        int x0 = location.get(0);\n        int y0 = location.get(1);\n\n        for (List<Integer> point : points) {\n            int x = point.get(0);\n            int y = point.get(1);\n\n            if (x == x0 && y == y0) {\n                sameLocationCount++;\n            } else {\n                double theta = Math.atan2(y - y0, x - x0) * (180 / Math.PI);\n                angles.add(theta);\n            }\n        }\n\n        Collections.sort(angles);\n\n        int m = angles.size();\n        for (int i = 0; i < m; i++) {\n            angles.add(angles.get(i) + 360);\n        }\n\n        int maxVisible = 0;\n        int left = 0;\n\n        for (int right = 0; right < angles.size(); right++) {\n            while (angles.get(right) - angles.get(left) > angle) {\n                left++;\n            }\n            maxVisible = Math.max(maxVisible, right - left + 1);\n        }\n\n        return maxVisible + sameLocationCount;\n    }\n}\n",
    },
  },
  1611: {
    java: {
      "dynamic-programming": "",
    },
  },
  1612: {
    java: {
      tree: "",
    },
  },
  1613: {
    java: {
      database: "",
    },
  },
  1614: {
    java: {
      stack: "",
    },
  },
  1615: {
    java: {
      graph: "",
    },
  },
  1616: {
    java: {
      "two-pointers": "",
    },
  },
  1617: {
    java: {
      "dynamic-programming": "",
    },
  },
  1618: {
    java: {
      interactive: "",
    },
  },
  1619: {
    java: {
      sorting: "",
    },
  },
  1620: {
    java: {
      enumeration: "",
    },
  },
  1621: {
    java: {
      "dynamic-programming": "",
    },
  },
  1622: {
    java: {
      design: "",
    },
  },
  1623: {
    java: {
      database: "",
    },
  },
  1624: {
    java: {
      "hash-table": "",
    },
  },
  1625: {
    java: {
      enumeration: "",
    },
  },
  1626: {
    java: {
      "dynamic-programming": "",
    },
  },
  1627: {
    java: {
      "union-find": "",
    },
  },
  1628: {
    java: {
      stack: "",
    },
  },
  1629: {
    java: {
      string: "",
    },
  },
  1630: {
    java: {
      sorting: "",
    },
  },
  1631: {
    java: {
      "union-find": "",
    },
  },
  1632: {
    java: {
      "union-find": "",
    },
  },
  1633: {
    java: {
      database: "",
    },
  },
  1634: {
    java: {
      "two-pointers": "",
    },
  },
  1635: {
    java: {
      database: "",
    },
  },
  1636: {
    java: {
      sorting: "",
    },
  },
  1637: {
    java: {
      sorting: "",
    },
  },
  1638: {
    java: {
      "dynamic-programming": "",
    },
  },
  1639: {
    java: {
      "dynamic-programming": "",
    },
  },
  1640: {
    java: {
      "hash-table": "",
    },
  },
  1641: {
    java: {
      "dynamic-programming": "",
    },
  },
  1642: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1643: {
    java: {
      "dynamic-programming": "",
    },
  },
  1644: {
    java: {
      tree: "",
    },
  },
  1645: {
    java: {
      database: "",
    },
  },
  1647: {
    java: {
      greedy: "",
    },
  },
  1648: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1649: {
    java: {
      "merge-sort":
        "class Solution {\n    private static final int MOD = 1000000007;\n\n    public int createSortedArray(int[] instructions) {\n        FenwickTree tree = new FenwickTree(100001);\n        long cost = 0;\n\n        for (int i = 0; i < instructions.length; i++) {\n            int num = instructions[i];\n            int countSmaller = tree.query(num - 1); // Number of elements less than num\n            int countGreater = i - tree.query(num); // Number of elements greater than num\n            cost = (cost + Math.min(countSmaller, countGreater)) % MOD;\n            tree.update(num, 1);\n        }\n\n        return (int) cost;\n    }\n}\n\nclass FenwickTree {\n    private int[] tree;\n\n    public FenwickTree(int size) {\n        this.tree = new int[size + 1];\n    }\n\n    public void update(int index, int delta) {\n        while (index < tree.length) {\n            tree[index] += delta;\n            index += index & -index;\n        }\n    }\n\n    public int query(int index) {\n        int sum = 0;\n        while (index > 0) {\n            sum += tree[index];\n            index -= index & -index;\n        }\n        return sum;\n    }\n}\n",
    },
  },
  1650: {
    java: {
      "two-pointers": "",
    },
  },
  1651: {
    java: {
      database: "",
    },
  },
  1652: {
    java: {
      "sliding-window":
        "class Solution {\n    public int[] decrypt(int[] code, int k) {\n        int n = code.length;\n        int[] result = new int[n];\n        \n        if (k == 0) {\n            return result;\n        }\n        \n        for (int i = 0; i < n; i++) {\n            if (k > 0) {\n                for (int j = 1; j <= k; j++) {\n                    result[i] += code[(i + j) % n];\n                }\n            } else {\n                for (int j = -1; j >= k; j--) {\n                    result[i] += code[(i + j + n) % n];\n                }\n            }\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  1653: {
    java: {
      stack: "",
    },
  },
  1654: {
    java: {
      "dynamic-programming": "",
    },
  },
  1655: {
    java: {
      "dynamic-programming": "",
    },
  },
  1656: {
    java: {
      "data-stream": "",
    },
  },
  1657: {
    java: {
      counting: "",
    },
  },
  1658: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minOperations(int[] nums, int x) {\n        x = -x;\n        for (int v : nums) {\n            x += v;\n        }\n        Map<Integer, Integer> vis = new HashMap<>();\n        vis.put(0, -1);\n        int n = nums.length;\n        int ans = 1 << 30;\n        for (int i = 0, s = 0; i < n; ++i) {\n            s += nums[i];\n            vis.putIfAbsent(s, i);\n            if (vis.containsKey(s - x)) {\n                int j = vis.get(s - x);\n                ans = Math.min(ans, n - (i - j));\n            }\n        }\n        return ans == 1 << 30 ? -1 : ans;\n    }\n}",
    },
  },
  1659: {
    java: {
      "dynamic-programming": "",
    },
  },
  1660: {
    java: {
      tree: "",
    },
  },
  1661: {
    java: {
      database: "",
    },
  },
  1662: {
    java: {
      string: "",
    },
  },
  1663: {
    java: {
      greedy: "",
    },
  },
  1664: {
    java: {
      "prefix-sum": "",
    },
  },
  1665: {
    java: {
      greedy: "",
    },
  },
  1666: {
    java: {
      tree: "",
    },
  },
  1667: {
    java: {
      database: "",
    },
  },
  1668: {
    java: {
      "dynamic-programming": "",
    },
  },
  1669: {
    java: {
      "linked-list": "",
    },
  },
  1670: {
    java: {
      queue: "",
    },
  },
  1671: {
    java: {
      "dynamic-programming": "",
    },
  },
  1672: {
    java: {
      matrix: "",
    },
  },
  1673: {
    java: {
      "monotonic-stack": "",
    },
  },
  1674: {
    java: {
      "prefix-sum": "",
    },
  },
  1675: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1676: {
    java: {
      tree: "",
    },
  },
  1677: {
    java: {
      database: "",
    },
  },
  1678: {
    java: {
      string: "",
    },
  },
  1679: {
    java: {
      "two-pointers": "",
    },
  },
  1680: {
    java: {
      "bit-manipulation": "",
    },
  },
  1681: {
    java: {
      "dynamic-programming": "",
    },
  },
  1682: {
    java: {
      "dynamic-programming": "",
    },
  },
  1683: {
    java: {
      database: "",
    },
  },
  1684: {
    java: {
      "bit-manipulation": "",
    },
  },
  1685: {
    java: {
      "prefix-sum": "",
    },
  },
  1686: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1687: {
    java: {
      "monotonic-queue":
        "class Solution {\n    public int boxDelivering(int[][] boxes, int portsCount, int maxBoxes, int maxWeight) {\n        int length = boxes.length;\n        int[] ports = new int[length + 1];\n        int[] weights = new int[length + 1];\n        int[] differences = new int[length + 1];\n        long[] prefixWeights = new long[length + 1];\n        for (int i = 1; i <= length; i++) {\n            ports[i] = boxes[i - 1][0];\n            weights[i] = boxes[i - 1][1];\n            if (i > 1)\n                differences[i] = differences[i - 1] + (ports[i - 1] != ports[i] ? 1 : 0);\n            prefixWeights[i] = prefixWeights[i - 1] + weights[i];\n        }\n        Deque<Integer> deque = new LinkedList<Integer>();\n        deque.offerLast(0);\n        int[] dp = new int[length + 1];\n        int[] remain = new int[length + 1];\n        for (int i = 1; i <= length; i++) {\n            while (!deque.isEmpty() && (i - deque.peekFirst() > maxBoxes || prefixWeights[i] - prefixWeights[deque.peekFirst()] > maxWeight))\n                deque.pollFirst();\n            dp[i] = remain[deque.peekFirst()] + differences[i] + 2;\n            if (i != length) {\n                remain[i] = dp[i] - differences[i + 1];\n                while (!deque.isEmpty() && remain[i] <= remain[deque.peekLast()])\n                    deque.pollLast();\n                deque.offerLast(i);\n            }\n        }\n        return dp[length];\n    }\n}",
    },
  },
  1688: {
    java: {
      math: "",
    },
  },
  1689: {
    java: {
      greedy: "",
    },
  },
  1690: {
    java: {
      "game-theory": "",
    },
  },
  1691: {
    java: {
      "dynamic-programming": "",
    },
  },
  1692: {
    java: {
      "dynamic-programming": "",
    },
  },
  1693: {
    java: {
      database: "",
    },
  },
  1694: {
    java: {
      string: "",
    },
  },
  1695: {
    java: {
      "sliding-window":
        "import java.util.*;\n\nclass Solution {\n    public int maximumUniqueSubarray(int[] nums) {\n        int n = nums.length;\n        Set<Integer> set = new HashSet<>();\n        int left = 0, right = 0;\n        int maxSum = 0, currentSum = 0;\n        \n        while (right < n) {\n            if (!set.contains(nums[right])) {\n                set.add(nums[right]);\n                currentSum += nums[right];\n                maxSum = Math.max(maxSum, currentSum);\n                right++;\n            } else {\n                set.remove(nums[left]);\n                currentSum -= nums[left];\n                left++;\n            }\n        }\n        \n        return maxSum;\n    }\n}\n",
    },
  },
  1696: {
    java: {
      "monotonic-queue":
        "import java.util.Deque;\nimport java.util.LinkedList;\n\npublic class Solution {\n    public int maxResult(int[] nums, int k) {\n        int n = nums.length;\n        Deque<Integer> deque = new LinkedList<>();\n        int[] dp = new int[n];\n        dp[0] = nums[0];\n        deque.offerLast(0);\n\n        for (int i = 1; i < n; i++) {\n            while (!deque.isEmpty() && deque.peekFirst() < i - k) {\n                deque.pollFirst();\n            }\n            \n            dp[i] = nums[i] + dp[deque.peekFirst()];\n\n            while (!deque.isEmpty() && dp[i] >= dp[deque.peekLast()]) {\n                deque.pollLast();\n            }\n            \n            deque.offerLast(i);\n        }\n        \n        return dp[n - 1];\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums = {1, -1, -2, 4, -7, 3};\n        int k = 2;\n        System.out.println(solution.maxResult(nums, k));  // Output: 7\n    }\n}\n",
    },
  },
  1697: {
    java: {
      "union-find": "",
    },
  },
  1698: {
    java: {
      "suffix-array":
        'import java.util.Arrays;\n\npublic class Solution {\n\n    public int countDistinct(String s) {\n        int n = s.length();\n        int[] suffixArray = buildSuffixArray(s);\n        int[] lcpArray = buildLCPArray(s, suffixArray);\n\n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            int suffixLength = n - suffixArray[i];\n            count += suffixLength - (i > 0 ? lcpArray[i] : 0);\n        }\n\n        return count;\n    }\n\n    private int[] buildSuffixArray(String s) {\n        int n = s.length();\n        Suffix[] suffixes = new Suffix[n];\n\n        for (int i = 0; i < n; i++) {\n            suffixes[i] = new Suffix(i, s.substring(i));\n        }\n\n        Arrays.sort(suffixes);\n\n        int[] suffixArray = new int[n];\n        for (int i = 0; i < n; i++) {\n            suffixArray[i] = suffixes[i].index;\n        }\n\n        return suffixArray;\n    }\n\n    private int[] buildLCPArray(String s, int[] suffixArray) {\n        int n = s.length();\n        int[] rank = new int[n];\n        int[] lcpArray = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            rank[suffixArray[i]] = i;\n        }\n\n        int h = 0;\n        for (int i = 0; i < n; i++) {\n            if (rank[i] > 0) {\n                int j = suffixArray[rank[i] - 1];\n                while (i + h < n && j + h < n && s.charAt(i + h) == s.charAt(j + h)) {\n                    h++;\n                }\n                lcpArray[rank[i]] = h;\n                if (h > 0) {\n                    h--;\n                }\n            }\n        }\n\n        return lcpArray;\n    }\n\n    class Suffix implements Comparable<Suffix> {\n        int index;\n        String suffix;\n\n        Suffix(int index, String suffix) {\n            this.index = index;\n            this.suffix = suffix;\n        }\n\n        @Override\n        public int compareTo(Suffix other) {\n            return this.suffix.compareTo(other.suffix);\n        }\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        String s = "aabbaba";\n        int distinctSubstrings = solution.countDistinct(s);\n        System.out.println("Number of distinct substrings: " + distinctSubstrings); // Output: 21\n    }\n}\n',
    },
  },
  1699: {
    java: {
      database: "",
    },
  },
  1700: {
    java: {
      queue: "",
    },
  },
  1702: {
    java: {
      greedy: "",
    },
  },
  1703: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minMoves(int[] nums, int k) {\n        List<Integer> ones = new ArrayList<>();\n\n        for (int i = 0; i < nums.length; ++i)\n            if (nums[i] == 1)\n                ones.add(i);\n\n      int median = ones.get(getMedIndex(0, k));\n        int moves = 0;\n        for (int i = 0; i < k; ++i)\n            moves += Math.abs(ones.get(i) - median);\n\n        int ans = moves;\n\n        for (int i = 1; i <= ones.size() - k; ++i) {\n          int oldMedianIndex = ones.get(getMedIndex(i - 1, k));\n          int newMedianIndex = ones.get(getMedIndex(i, k));\n            if (k % 2 == 1)\n                moves += newMedianIndex - oldMedianIndex;\n            moves -= newMedianIndex - ones.get(i - 1);\n            moves += ones.get(i + k - 1) - newMedianIndex;\n            ans = Math.min(ans, moves);\n        }\n\n        return ans - nThSum((k - 1) / 2) - nThSum(k / 2);\n    }\n\n    private int getMedIndex(int i, int k) {\n        return (i + (i + k - 1)) / 2;\n    }\n\n    private int nThSum(int n) {\n        return n * (n + 1) / 2;\n    }\n}",
    },
  },
  1704: {
    java: {
      counting: "",
    },
  },
  1705: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1706: {
    java: {
      matrix: "",
    },
  },
  1707: {
    java: {
      trie: "",
    },
  },
  1708: {
    java: {
      greedy: "",
    },
  },
  1709: {
    java: {
      database: "",
    },
  },
  1710: {
    java: {
      greedy: "",
    },
  },
  1711: {
    java: {
      "hash-table": "",
    },
  },
  1712: {
    java: {
      "two-pointers":
        "class Solution {\n    public int waysToSplit(int[] nums) {\n        int kMod = 1_000_000_007;\n        int n = nums.length;\n        int ans = 0;\n        int[] prefix = nums.clone();\n\n        for (int i = 1; i < n; ++i)\n            prefix[i] += prefix[i - 1];\n\n        for (int i = 0; i < n - 2; ++i) {\n            int j = firstGreaterEqual(prefix, i);\n            if (j == n - 1)\n                break;\n            int mid = prefix[j] - prefix[i];\n            int right = prefix[prefix.length - 1] - prefix[j];\n            if (mid > right)\n                continue;\n            int k = firstGreater(prefix, i);\n            ans = (ans + k - j) % kMod;\n        }\n\n        return ans;\n    }\n\n    private int firstGreaterEqual(int[] prefix, int i) {\n        int left = i + 1;\n        int right = prefix.length - 1;\n        while (left < right) {\n            int mid = (left + right) / 2;\n            if (prefix[mid] - prefix[i] >= prefix[i])\n                right = mid;\n            else\n                left = mid + 1;\n        }\n        return left;\n    };\n\n    private int firstGreater(int[] prefix, int i) {\n        int left = i + 1;\n        int right = prefix.length - 1;\n        while (left < right) {\n            int mid = (left + right) / 2;\n            if (prefix[mid] - prefix[i] > prefix[prefix.length - 1] - prefix[mid])\n                right = mid;\n            else\n                left = mid + 1;\n        }\n        return left;\n    };\n}",
    },
  },
  1713: {
    java: {
      greedy: "",
    },
  },
  1714: {
    java: {
      "dynamic-programming": "",
    },
  },
  1715: {
    java: {
      database: "",
    },
  },
  1716: {
    java: {
      math: "",
    },
  },
  1717: {
    java: {
      stack: "",
    },
  },
  1718: {
    java: {
      backtracking: "",
    },
  },
  1719: {
    java: {
      tree: "",
    },
  },
  1720: {
    java: {
      "bit-manipulation": "",
    },
  },
  1721: {
    java: {
      "two-pointers": "",
    },
  },
  1722: {
    java: {
      "union-find": "",
    },
  },
  1723: {
    java: {
      "dynamic-programming": "",
    },
  },
  1724: {
    java: {
      "union-find": "",
    },
  },
  1726: {
    java: {
      counting: "",
    },
  },
  1727: {
    java: {
      matrix: "",
    },
  },
  1728: {
    java: {
      matrix: "",
    },
  },
  1729: {
    java: {
      database: "",
    },
  },
  1730: {
    java: {
      matrix: "",
    },
  },
  1731: {
    java: {
      database: "",
    },
  },
  1732: {
    java: {
      "prefix-sum": "",
    },
  },
  1733: {
    java: {
      greedy: "",
    },
  },
  1734: {
    java: {
      "bit-manipulation": "",
    },
  },
  1735: {
    java: {
      "dynamic-programming": "",
    },
  },
  1736: {
    java: {
      greedy: "",
    },
  },
  1737: {
    java: {
      "prefix-sum": "",
    },
  },
  1738: {
    java: {
      quickselect:
        "import java.util.*;\n\npublic class Solution {\n    public int kthLargestValue(int[][] matrix, int k) {\n        int m = matrix.length;\n        int n = matrix[0].length;\n        \n        int[][] xorMatrix = new int[m][n];\n        List<Integer> xorValues = new ArrayList<>();\n        \n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                int xor = matrix[i][j];\n                if (i > 0) xor ^= xorMatrix[i - 1][j];\n                if (j > 0) xor ^= xorMatrix[i][j - 1];\n                if (i > 0 && j > 0) xor ^= xorMatrix[i - 1][j - 1];\n                xorMatrix[i][j] = xor;\n                xorValues.add(xor);\n            }\n        }\n        \n        int[] xorArray = xorValues.stream().mapToInt(Integer::intValue).toArray();\n        int kthLargestXOR = quickselect(xorArray, 0, xorArray.length - 1, xorArray.length - k);\n        \n        return kthLargestXOR;\n    }\n    \n    private int quickselect(int[] nums, int left, int right, int k) {\n        while (left < right) {\n            int pivotIndex = partition(nums, left, right);\n            if (pivotIndex == k) {\n                return nums[k];\n            } else if (pivotIndex < k) {\n                left = pivotIndex + 1;\n            } else {\n                right = pivotIndex - 1;\n            }\n        }\n        return nums[left];\n    }\n    \n    private int partition(int[] nums, int left, int right) {\n        int pivot = nums[right];\n        int i = left;\n        for (int j = left; j < right; j++) {\n            if (nums[j] < pivot) {\n                swap(nums, i++, j);\n            }\n        }\n        swap(nums, i, right);\n        return i;\n    }\n    \n    private void swap(int[] nums, int i, int j) {\n        int temp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = temp;\n    }\n}\n",
    },
  },
  1739: {
    java: {
      greedy: "",
    },
  },
  1740: {
    java: {
      tree: "",
    },
  },
  1741: {
    java: {
      database: "",
    },
  },
  1742: {
    java: {
      counting: "",
    },
  },
  1743: {
    java: {
      "hash-table": "",
    },
  },
  1744: {
    java: {
      "prefix-sum": "",
    },
  },
  1745: {
    java: {
      "dynamic-programming": "",
    },
  },
  1746: {
    java: {
      "dynamic-programming": "",
    },
  },
  1747: {
    java: {
      database: "",
    },
  },
  1748: {
    java: {
      counting: "",
    },
  },
  1749: {
    java: {
      "dynamic-programming": "",
    },
  },
  1750: {
    java: {
      "two-pointers": "",
    },
  },
  1751: {
    java: {
      "dynamic-programming": "",
    },
  },
  1753: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1754: {
    java: {
      "two-pointers": "",
    },
  },
  1755: {
    java: {
      "two-pointers": "",
    },
  },
  1756: {
    java: {
      stack: "",
    },
  },
  1757: {
    java: {
      database: "",
    },
  },
  1758: {
    java: {
      string: "",
    },
  },
  1759: {
    java: {
      math: "",
    },
  },
  1761: {
    java: {
      graph: "",
    },
  },
  1762: {
    java: {
      "monotonic-stack": "",
    },
  },
  1763: {
    java: {
      "sliding-window":
        'class Solution {\n    public String longestNiceSubstring(String s) {\n        int n = s.length();\n        int k = -1;\n        int max = 0;\n        for (int i = 0; i < n; ++i) {\n            Set<Character> set = new HashSet<>();\n            for (int j = i; j < n; ++j) {\n                set.add(s.charAt(j));\n                boolean check = true;\n                for (char a : set) {\n                    char b = (char) (a ^ 32);\n                    if (!(set.contains(a) && set.contains(b))) {\n                        check = false;\n                        break;\n                    }\n                }\n                if (check && max < j - i + 1) {\n                    max = j - i + 1;\n                    k = i;\n                }\n            }\n        }\n        return k == -1 ? "" : s.substring(k, k + max);\n    }\n}',
    },
  },
  1764: {
    java: {
      "two-pointers": "",
    },
  },
  1765: {
    java: {
      matrix: "",
    },
  },
  1766: {
    java: {
      tree: "",
    },
  },
  1767: {
    java: {
      database: "",
    },
  },
  1768: {
    java: {
      "two-pointers": "",
    },
  },
  1769: {
    java: {
      string: "",
    },
  },
  1770: {
    java: {
      "dynamic-programming": "",
    },
  },
  1771: {
    java: {
      "dynamic-programming": "",
    },
  },
  1772: {
    java: {
      sorting: "",
    },
  },
  1773: {
    java: {
      string: "",
    },
  },
  1774: {
    java: {
      "dynamic-programming": "",
    },
  },
  1775: {
    java: {
      counting: "",
    },
  },
  1776: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1777: {
    java: {
      database: "",
    },
  },
  1778: {
    java: {
      interactive: "",
    },
  },
  1780: {
    java: {
      math: "",
    },
  },
  1781: {
    java: {
      counting: "",
    },
  },
  1782: {
    java: {
      "two-pointers": "",
    },
  },
  1783: {
    java: {
      database: "",
    },
  },
  1784: {
    java: {
      string: "",
    },
  },
  1785: {
    java: {
      greedy: "",
    },
  },
  1786: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1787: {
    java: {
      "dynamic-programming": "",
    },
  },
  1788: {
    java: {
      "prefix-sum": "",
    },
  },
  1789: {
    java: {
      database: "",
    },
  },
  1790: {
    java: {
      counting: "",
    },
  },
  1791: {
    java: {
      graph: "",
    },
  },
  1792: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1793: {
    java: {
      "two-pointers":
        "class Solution {\n    public int maximumScore(int[] nums, int k) {\n        int ans = 0;\n        Deque<Integer> stack = new ArrayDeque<>();\n\n        for (int i = 0; i <= nums.length; ++i) {\n            while (!stack.isEmpty() && (i == nums.length || nums[stack.peek()] > nums[i])) {\n                int h = nums[stack.pop()];\n                int w = stack.isEmpty() ? i : i - stack.peek() - 1;\n                if ((stack.isEmpty() || stack.peek() + 1 <= k) && i - 1 >= k)\n                    ans = Math.max(ans, h * w);\n            }\n            stack.push(i);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  1794: {
    java: {
      greedy: "",
    },
  },
  1795: {
    java: {
      database: "",
    },
  },
  1796: {
    java: {
      "hash-table": "",
    },
  },
  1797: {
    java: {
      "linked-list": "",
    },
  },
  1798: {
    java: {
      greedy: "",
    },
  },
  1799: {
    java: {
      "dynamic-programming": "",
    },
  },
  1801: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1802: {
    java: {
      greedy: "",
    },
  },
  1803: {
    java: {
      trie: "",
    },
  },
  1804: {
    java: {
      trie: "",
    },
  },
  1805: {
    java: {
      "hash-table": "",
    },
  },
  1806: {
    java: {
      math: "",
    },
  },
  1807: {
    java: {
      "hash-table": "",
    },
  },
  1808: {
    java: {
      recursion: "",
    },
  },
  1809: {
    java: {
      database: "",
    },
  },
  1810: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1811: {
    java: {
      database: "",
    },
  },
  1812: {
    java: {
      math: "",
    },
  },
  1813: {
    java: {
      "two-pointers": "",
    },
  },
  1814: {
    java: {
      counting: "",
    },
  },
  1815: {
    java: {
      "dynamic-programming": "",
    },
  },
  1816: {
    java: {
      string: "",
    },
  },
  1817: {
    java: {
      "hash-table": "",
    },
  },
  1818: {
    java: {
      "ordered-set": "",
    },
  },
  1819: {
    java: {
      "number-theory": "",
    },
  },
  1820: {
    java: {
      matrix: "",
    },
  },
  1821: {
    java: {
      database: "",
    },
  },
  1822: {
    java: {
      math: "",
    },
  },
  1823: {
    java: {
      queue:
        "class Solution {\n    public int findTheWinner(int n, int k) {\n        List<Integer> players = new ArrayList<>();\n        for (int i = 1; i <= n; i++) {\n            players.add(i);\n        }\n        \n        int index = 0;\n        while (players.size() > 1) {\n            index = (index + k - 1) % players.size();\n            players.remove(index);\n        }\n        \n        return players.get(0);\n    }\n}\n",
    },
  },
  1824: {
    java: {
      "dynamic-programming": "",
    },
  },
  1825: {
    java: {
      queue: "",
    },
  },
  1826: {
    java: {
      "two-pointers": "",
    },
  },
  1827: {
    java: {
      greedy: "",
    },
  },
  1828: {
    java: {
      geometry: "",
    },
  },
  1829: {
    java: {
      "prefix-sum": "",
    },
  },
  1830: {
    java: {
      combinatorics: "",
    },
  },
  1831: {
    java: {
      database: "",
    },
  },
  1832: {
    java: {
      "hash-table": "",
    },
  },
  1833: {
    java: {
      greedy: "",
    },
  },
  1834: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1835: {
    java: {
      "bit-manipulation": "",
    },
  },
  1836: {
    java: {
      "linked-list": "",
    },
  },
  1837: {
    java: {
      math: "",
    },
  },
  1838: {
    java: {
      "sliding-window":
        "import java.util.Arrays;\n\npublic class Solution {\n    public int maxFrequency(int[] nums, int k) {\n        Arrays.sort(nums); \n        int left = 0;\n        long sum = 0; \n        int maxFreq = 0; \n        \n        for (int right = 0; right < nums.length; right++) {\n            sum += nums[right];\n            while ((right - left + 1) * (long) nums[right] - sum > k) {\n                sum -= nums[left]; \n                left++;\n            }            \n            int windowSize = right - left + 1;\n            maxFreq = Math.max(maxFreq, windowSize);\n        }\n        \n        return maxFreq;\n    }\n    \n    public static void main(String[] args) {\n        Solution solution = new Solution();        \n        int[] nums = {1, 2, 4};\n        int k = 5;\n        System.out.println(solution.maxFrequency(nums, k)); // Output: 3\n    }\n}\n",
    },
  },
  1839: {
    java: {
      "sliding-window":
        "class Solution {\n  public int longestBeautifulSubstring(String word) {\n    int ans = 0;\n    int count = 1;\n\n    for (int left = 0, right = 1; right < word.length(); ++right) {\n    char curr = word.charAt(right);\n    char prev = word.charAt(right - 1);\n      if (curr >= prev) {\n        if (curr > prev)\n          ++count;\n        if (count == 5)\n          ans = Math.max(ans, right - left + 1);\n      } else {\n        count = 1;\n        left = right;\n      }\n    }\n\n    return ans;\n  }\n}",
    },
  },
  1840: {
    java: {
      sorting: "",
    },
  },
  1841: {
    java: {
      database: "",
    },
  },
  1842: {
    java: {
      "two-pointers": "",
    },
  },
  1843: {
    java: {
      database: "",
    },
  },
  1844: {
    java: {
      string: "",
    },
  },
  1845: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1846: {
    java: {
      greedy: "",
    },
  },
  1847: {
    java: {
      sorting: "",
    },
  },
  1849: {
    java: {
      backtracking: "",
    },
  },
  1850: {
    java: {
      "two-pointers": "",
    },
  },
  1851: {
    java: {
      "line-sweep":
        "class T {\n  public int size;\n  public int right;\n  public T(int size, int right) {\n    this.size = size;\n    this.right = right;\n  }\n}\n\nclass Solution {\n  public int[] minInterval(int[][] intervals, int[] queries) {\n    int[] ans = new int[queries.length];\n    Arrays.fill(ans, -1);\n    \n    // Use a minHeap to store intervals sorted by size\n    PriorityQueue<T> minHeap = new PriorityQueue<>((a, b) -> a.size - b.size);\n    \n    // Store the indices of queries\n    Integer[] indices = new Integer[queries.length];\n    for (int i = 0; i < queries.length; ++i)\n      indices[i] = i;\n    \n    // Sort intervals by start time and queries by value\n    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);\n    Arrays.sort(indices, (a, b) -> queries[a] - queries[b]);\n\n    int i = 0; // intervals' index\n    for (final int index : indices) {\n      // Add intervals to the minHeap that start before or at the current query\n      while (i < intervals.length && intervals[i][0] <= queries[index]) {\n        minHeap.offer(new T(intervals[i][1] - intervals[i][0] + 1, intervals[i][1]));\n        ++i;\n      }\n      \n      // Remove intervals from minHeap that end before the current query\n      while (!minHeap.isEmpty() && minHeap.peek().right < queries[index])\n        minHeap.poll();\n      \n      // Assign the size of the smallest interval in minHeap to the current query\n      if (!minHeap.isEmpty())\n        ans[index] = minHeap.peek().size;\n    }\n\n    return ans;\n  }\n}\n",
    },
  },
  1852: {
    java: {
      "sliding-window":
        "class Solution {\n    public int[] distinctNumbers(int[] nums, int k) {\n        Map<Integer, Integer> count = new HashMap<>();\n        for (int i = 0; i < k; ++i) {\n            count.merge(nums[i], 1, Integer::sum);\n        }\n        int n = nums.length;\n        int[] ans = new int[n - k + 1];\n        ans[0] = count.size();\n        for (int i = k; i < n; ++i) {\n            count.merge(nums[i], 1, Integer::sum);\n            if (count.merge(nums[i - k], -1, Integer::sum) == 0) {\n                count.remove(nums[i - k]);\n            }\n            ans[i - k + 1] = count.size();\n        }\n        return ans;\n    }\n}",
    },
  },
  1853: {
    java: {
      database: "",
    },
  },
  1854: {
    java: {
      "prefix-sum": "",
    },
  },
  1855: {
    java: {
      "two-pointers": "",
    },
  },
  1856: {
    java: {
      "monotonic-stack":
        "import java.util.ArrayDeque;\nimport java.util.Deque;\n\nclass Solution {\n    public int maxSumMinProduct(int[] nums) {\n        int n = nums.length;\n        long[] prefixSum = new long[n + 1];\n        for (int i = 0; i < n; i++) {\n            prefixSum[i + 1] = prefixSum[i] + nums[i];\n        }\n        \n        int[] left = new int[n];\n        int[] right = new int[n];\n        \n        Deque<Integer> stack = new ArrayDeque<>();\n        for (int i = 0; i < n; i++) {\n            while (!stack.isEmpty() && nums[stack.peek()] >= nums[i]) {\n                stack.pop();\n            }\n            left[i] = stack.isEmpty() ? 0 : stack.peek() + 1;\n            stack.push(i);\n        }\n        \n        stack.clear();\n        for (int i = n - 1; i >= 0; i--) {\n            while (!stack.isEmpty() && nums[stack.peek()] >= nums[i]) {\n                stack.pop();\n            }\n            right[i] = stack.isEmpty() ? n : stack.peek();\n            stack.push(i);\n        }\n        \n        long maxMinProduct = 0;\n        for (int i = 0; i < n; i++) {\n            long minProduct = (prefixSum[right[i]] - prefixSum[left[i]]) * nums[i];\n            maxMinProduct = Math.max(maxMinProduct, minProduct);\n        }\n        \n        return (int) (maxMinProduct % 1000000007);\n    }\n}\n",
    },
  },
  1857: {
    java: {
      "topological-sort": "",
    },
  },
  1858: {
    java: {
      trie: "",
    },
  },
  1859: {
    java: {
      sorting: "",
    },
  },
  1860: {
    java: {
      math: "",
    },
  },
  1861: {
    java: {
      "two-pointers": "",
    },
  },
  1862: {
    java: {
      "prefix-sum": "",
    },
  },
  1863: {
    java: {
      combinatorics: "",
    },
  },
  1864: {
    java: {
      greedy: "",
    },
  },
  1865: {
    java: {
      design: "",
    },
  },
  1866: {
    java: {
      "dynamic-programming": "",
    },
  },
  1867: {
    java: {
      database: "",
    },
  },
  1868: {
    java: {
      "two-pointers": "",
    },
  },
  1869: {
    java: {
      string: "",
    },
  },
  1871: {
    java: {
      "sliding-window":
        "class Solution {\n  public boolean canReach(String s, int minJump, int maxJump) {\n    int count = 0;\n    boolean dp[] = new boolean[s.length()];\n    dp[0] = true;\n\n    for (int i = minJump; i < s.length(); ++i) {\n      count += dp[i - minJump] ? 1 : 0;\n      if (i - maxJump > 0)\n        count -= dp[i - maxJump - 1] ? 1 : 0;\n      dp[i] = count > 0 && s.charAt(i) == '0';\n    }\n\n    return dp[dp.length - 1];\n  }\n}",
    },
  },
  1872: {
    java: {
      "prefix-sum": "",
    },
  },
  1873: {
    java: {
      database: "",
    },
  },
  1874: {
    java: {
      greedy: "",
    },
  },
  1875: {
    java: {
      database: "",
    },
  },
  1876: {
    java: {
      "sliding-window":
        "class Solution {\n    public int countGoodSubstrings(String s) {\n        int count = 0;\n        int n = s.length();\n        \n        for (int i = 0; i <= n - 3; i++) {\n            if (s.charAt(i) != s.charAt(i + 1) && \n                s.charAt(i) != s.charAt(i + 2) &&\n                s.charAt(i + 1) != s.charAt(i + 2)) {\n                count++;\n            }\n        }\n        \n        return count;\n    }\n}\n",
    },
  },
  1877: {
    java: {
      "two-pointers": "",
    },
  },
  1878: {
    java: {
      matrix: "",
    },
  },
  1879: {
    java: {
      "dynamic-programming": "",
    },
  },
  1880: {
    java: {
      string: "",
    },
  },
  1881: {
    java: {
      greedy: "",
    },
  },
  1882: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1883: {
    java: {
      "dynamic-programming": "",
    },
  },
  1884: {
    java: {
      "dynamic-programming": "",
    },
  },
  1885: {
    java: {
      "two-pointers":
        "class Solution {\n    public long countPairs(int[] nums1, int[] nums2) {\n        long count = 0;\n        int n = nums1.length;\n        int[] differences = new int[n];\n        for (int i = 0; i < n; i++)\n            differences[i] = nums1[i] - nums2[i];\n        Arrays.sort(differences);\n        for (int i = 0; i < n - 1; i++) {\n            int target = -differences[i] + 1;\n            int index = binarySearch(differences, n, target, i + 1);\n            count += n - index;\n        }\n        return count;\n    }\n\n    public int binarySearch(int[] differences, int n, int target, int startIndex) {\n        int low = startIndex, high = n - 1;\n        if (differences[high] < target)\n            return n;\n        while (low < high) {\n            int mid = (high - low) / 2 + low;\n            if (differences[mid] < target)\n                low = mid + 1;\n            else\n                high = mid;\n        }\n        return low;\n    }\n}",
    },
  },
  1886: {
    java: {
      matrix: "",
    },
  },
  1887: {
    java: {
      sorting: "",
    },
  },
  1888: {
    java: {
      "sliding-window":
        "class Solution {\n  public int minFlips(String s) {\n  int n = s.length();\n    int[][] count = new int[2][2];\n\n    for (int i = 0; i < n; ++i)\n      ++count[s.charAt(i) - '0'][i % 2];\n\n    int ans = Math.min(count[1][0] + count[0][1], count[0][0] + count[1][1]);\n\n    for (int i = 0; i < n; ++i) {\n      --count[s.charAt(i) - '0'][i % 2];\n      ++count[s.charAt(i) - '0'][(n + i) % 2];\n      ans = Math.min(ans, Math.min(count[1][0] + count[0][1], count[0][0] + count[1][1]));\n    }\n\n    return ans;\n  }\n}",
    },
  },
  1889: {
    java: {
      "prefix-sum": "",
    },
  },
  1890: {
    java: {
      database: "",
    },
  },
  1892: {
    java: {
      database: "",
    },
  },
  1893: {
    java: {
      "prefix-sum": "",
    },
  },
  1894: {
    java: {
      "prefix-sum": "",
    },
  },
  1895: {
    java: {
      matrix: "",
    },
  },
  1896: {
    java: {
      stack: "",
    },
  },
  1897: {
    java: {
      counting: "",
    },
  },
  1898: {
    java: {
      "two-pointers": "",
    },
  },
  1899: {
    java: {
      greedy: "",
    },
  },
  1900: {
    java: {
      "dynamic-programming": "",
    },
  },
  1901: {
    java: {
      matrix: "",
    },
  },
  1902: {
    java: {
      "binary-search-tree":
        "class Solution {\n    public int maxDepthBST(int[] order) {\n        TreeMap<Integer, Integer> map = new TreeMap<>();\n        map.put(0, 0);\n        map.put(Integer.MAX_VALUE, 0);\n        map.put(order[0], 1);\n        int ans = 1;\n        for (int i = 1; i < order.length; ++i) {\n            int v = order[i];\n            Map.Entry<Integer, Integer> lower = map.lowerEntry(v);\n            Map.Entry<Integer, Integer> higher = map.higherEntry(v);\n            int depth = 1 + Math.max(lower.getValue(), higher.getValue());\n            ans = Math.max(ans, depth);\n            map.put(v, depth);\n        }\n        return ans;\n    }\n}",
    },
  },
  1903: {
    java: {
      greedy: "",
    },
  },
  1904: {
    java: {
      math: "",
    },
  },
  1905: {
    java: {
      "union-find": "",
    },
  },
  1906: {
    java: {
      "hash-table": "",
    },
  },
  1907: {
    java: {
      database: "",
    },
  },
  1908: {
    java: {
      brainteaser:
        "class Solution {\n    public boolean nimGame(int[] piles) {\n        int xor = 0;\n        for (int pile : piles)\n            xor ^= pile;\n        return xor != 0;\n    }\n}",
    },
  },
  1910: {
    java: {
      string: "",
    },
  },
  1911: {
    java: {
      "dynamic-programming": "",
    },
  },
  1912: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1913: {
    java: {
      sorting: "",
    },
  },
  1914: {
    java: {
      matrix: "",
    },
  },
  1915: {
    java: {
      "prefix-sum": "",
    },
  },
  1916: {
    java: {
      "topological-sort": "",
    },
  },
  1917: {
    java: {
      database: "",
    },
  },
  1918: {
    java: {
      "sliding-window":
        "class Solution {\n    public int kthSmallestSubarraySum(int[] nums, int k) {\n        int min = Integer.MAX_VALUE, sum = 0;\n        for (int num : nums) {\n            min = Math.min(min, num);\n            sum += num;\n        }\n        int low = min, high = sum;\n        while (low < high) {\n            int mid = (high - low) / 2 + low;\n            int count = countSubarrays(nums, mid);\n            if (count < k)\n                low = mid + 1;\n            else\n                high = mid;\n        }\n        return low;\n    }\n\n    public int countSubarrays(int[] nums, int threshold) {\n        int count = 0;\n        int sum = 0;\n        int length = nums.length;\n        int left = 0, right = 0;\n        while (right < length) {\n            sum += nums[right];\n            while (sum > threshold) {\n                sum -= nums[left];\n                left++;\n            }\n            count += right - left + 1;\n            right++;\n        }\n        return count;\n    }\n}",
    },
  },
  1919: {
    java: {
      database: "",
    },
  },
  1921: {
    java: {
      greedy: "",
    },
  },
  1922: {
    java: {
      recursion: "",
    },
  },
  1923: {
    java: {
      "suffix-array":
        "class Solution {\n    public int longestCommonSubpath(int n, int[][] paths) {\n        int left = 0;\n        int right = paths[0].length;\n\n        while (left < right) {\n          int m = left + (right - left + 1) / 2;\n            if (checkCommonSubpath(paths, m))\n                left = m;\n            else\n                right = m - 1;\n        }\n\n        return left;\n    }\n\n    private static final long kMod = 8_417_508_174_513L;\n    private static final long kBase = 165_131L;\n\n    private boolean checkCommonSubpath(int[][] paths, int m) {\n        Set<Long>[] hashSets = new Set[paths.length];\n\n        for (int i = 0; i < paths.length; ++i)\n            hashSets[i] = rabinKarp(paths[i], m);\n\n        for (final long subpathHash : hashSets[0])\n            if (Arrays.stream(hashSets).allMatch(hashSet -> hashSet.contains(subpathHash)))\n                return true;\n\n        return false;\n    }\n\n    private Set<Long> rabinKarp(int[] path, int m) {\n        Set<Long> hashes = new HashSet<>();\n        long maxPower = 1;\n        long hash = 0;\n        for (int i = 0; i < path.length; ++i) {\n            hash = (hash * kBase + path[i]) % kMod;\n            if (i >= m)\n                hash = (hash - path[i - m] * maxPower % kMod + kMod) % kMod;\n            else\n                maxPower = maxPower * kBase % kMod;\n            if (i >= m - 1)\n                hashes.add(hash);\n        }\n        return hashes;\n    }\n}",
    },
  },
  1924: {
    java: {
      geometry: "",
    },
  },
  1925: {
    java: {
      enumeration: "",
    },
  },
  1926: {
    java: {
      matrix: "",
    },
  },
  1927: {
    java: {
      "game-theory": "",
    },
  },
  1928: {
    java: {
      "dynamic-programming": "",
    },
  },
  1930: {
    java: {
      "prefix-sum": "",
    },
  },
  1931: {
    java: {
      "dynamic-programming": "",
    },
  },
  1932: {
    java: {
      tree: "",
    },
  },
  1933: {
    java: {
      string: "",
    },
  },
  1934: {
    java: {
      database: "",
    },
  },
  1935: {
    java: {
      "hash-table": "",
    },
  },
  1936: {
    java: {
      greedy: "",
    },
  },
  1937: {
    java: {
      "dynamic-programming": "",
    },
  },
  1938: {
    java: {
      trie: "",
    },
  },
  1939: {
    java: {
      database: "",
    },
  },
  1940: {
    java: {
      counting: "",
    },
  },
  1941: {
    java: {
      counting: "",
    },
  },
  1942: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1943: {
    java: {
      "prefix-sum": "",
    },
  },
  1944: {
    java: {
      "monotonic-stack":
        "import java.util.ArrayDeque;\nimport java.util.Deque;\n\nclass Solution {\n    public int[] canSeePersonsCount(int[] heights) {\n        int n = heights.length;\n        int[] result = new int[n];\n        Deque<Integer> stack = new ArrayDeque<>();\n\n        for (int i = 0; i < n; i++) {\n            while (!stack.isEmpty() && heights[stack.peek()] <= heights[i]) {\n                result[stack.pop()]++;\n            }\n            if (!stack.isEmpty()) {\n                result[stack.peek()]++; \n            }\n            stack.push(i);\n        }\n\n        return result;\n    }\n}\n",
    },
  },
  1945: {
    java: {
      string: "",
    },
  },
  1946: {
    java: {
      greedy: "",
    },
  },
  1947: {
    java: {
      "dynamic-programming": "",
    },
  },
  1948: {
    java: {
      "hash-function": "",
    },
  },
  1949: {
    java: {
      database: "",
    },
  },
  1950: {
    java: {
      "monotonic-stack": "",
    },
  },
  1951: {
    java: {
      database: "",
    },
  },
  1952: {
    java: {
      "number-theory": "",
    },
  },
  1953: {
    java: {
      greedy: "",
    },
  },
  1954: {
    java: {
      math: "",
    },
  },
  1955: {
    java: {
      "dynamic-programming": "",
    },
  },
  1956: {
    java: {
      geometry: "",
    },
  },
  1957: {
    java: {
      string: "",
    },
  },
  1958: {
    java: {
      matrix: "",
    },
  },
  1959: {
    java: {
      "dynamic-programming": "",
    },
  },
  1960: {
    java: {
      "rolling-hash": "",
    },
  },
  1961: {
    java: {
      "two-pointers": "",
    },
  },
  1962: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1963: {
    java: {
      "two-pointers": "",
    },
  },
  1965: {
    java: {
      database: "",
    },
  },
  1967: {
    java: {
      string: "",
    },
  },
  1968: {
    java: {
      greedy: "",
    },
  },
  1969: {
    java: {
      recursion: "",
    },
  },
  1970: {
    java: {
      "union-find": "",
    },
  },
  1971: {
    java: {
      "union-find": "",
    },
  },
  1972: {
    java: {
      database: "",
    },
  },
  1973: {
    java: {
      tree: "",
    },
  },
  1974: {
    java: {
      greedy: "",
    },
  },
  1975: {
    java: {
      matrix: "",
    },
  },
  1976: {
    java: {
      "topological-sort": "",
    },
  },
  1977: {
    java: {
      "suffix-array":
        "class Solution {\n    public int numberOfCombinations(String num) {\n        if (num.charAt(0) == '0')\n            return 0;\n\n      int kMod = 1_000_000_007;\n      int n = num.length();\n        // dp[i][k] := the number of possible lists of integers ending in num[i] with\n        // the length of the last number being 1..k\n        long[][] dp = new long[n][n + 1];\n        // lcs[i][j] := the number of the same digits in num[i..n) and num[j..n)\n        int[][] lcs = new int[n + 1][n + 1];\n\n        // Step 1: Compute LCS array\n        for (int i = n - 1; i >= 0; --i)\n            for (int j = i + 1; j < n; ++j)\n                if (num.charAt(i) == num.charAt(j))\n                    lcs[i][j] = lcs[i + 1][j + 1] + 1;\n\n        // Step 2: Dynamic programming to count number of combinations\n        for (int i = 0; i < n; ++i)\n            for (int k = 1; k <= i + 1; ++k) {\n                dp[i][k] += dp[i][k - 1];\n                dp[i][k] %= kMod;\n                // The last number is num[s..i].\n              int s = i - k + 1;\n                if (num.charAt(s) == '0')\n                    // If the number starts with '0', skip it as it's invalid\n                    continue;\n                if (s == 0) {\n                    // If the whole string is considered, increment the count by 1\n                    dp[i][k] += 1;\n                    continue;\n                }\n                if (s < k) {\n                    // If the length k is not enough, add counts from num[0..s - 1]\n                    dp[i][k] += dp[s - 1][s];\n                    continue;\n                }\n              int left = lcs[s - k][s];\n                if (left >= k || num.charAt(s - k + left) <= num.charAt(s + left))\n                    // If num[s - k..s - 1] <= num[s..i], add counts from dp[s - 1][k]\n                    dp[i][k] += dp[s - 1][k];\n                else\n                    // Otherwise, add counts from dp[s - 1][k - 1]\n                    dp[i][k] += dp[s - 1][k - 1];\n                \n                dp[i][k] %= kMod;\n            }\n\n        return (int) dp[n - 1][n] % kMod;\n    }\n}\n",
    },
  },
  1978: {
    java: {
      database: "",
    },
  },
  1979: {
    java: {
      "number-theory": "",
    },
  },
  1980: {
    java: {
      backtracking: "",
    },
  },
  1981: {
    java: {
      matrix: "",
    },
  },
  1982: {
    java: {
      "divide-and-conquer": "",
    },
  },
  1983: {
    java: {
      "prefix-sum": "",
    },
  },
  1984: {
    java: {
      "sliding-window":
        "import java.util.Arrays;\n\nclass Solution {\n    public int minimumDifference(int[] nums, int k) {\n        Arrays.sort(nums);\n        int minDiff = Integer.MAX_VALUE;\n        for (int i = 0; i <= nums.length - k; i++) {\n            int diff = nums[i + k - 1] - nums[i];\n            minDiff = Math.min(minDiff, diff);\n        }\n\n        return minDiff;\n    }\n}\n",
    },
  },
  1985: {
    java: {
      quickselect:
        "class Solution {\n    Random rand;\n\n    public int compare(String a, String b) {\n        if (a.length() != b.length()) {\n            return b.length() - a.length();\n        } else {\n            return b.compareTo(a);\n        }\n    }\n\n    public String kthLargestNumber(String[] nums, int k) {\n        rand = new Random();\n        quickSort(nums, k, 0, nums.length);\n        return nums[k - 1];\n    }\n\n    public void quickSort(String[] nums, int k, int start, int end) {\n        int selected = start + rand.nextInt(end - start);\n        swap(nums, selected, start);\n        int idx = start;\n        for (int i = start + 1; i < end; i++) {\n            if (compare(nums[start], nums[i]) > 0) {\n                swap(nums, ++idx, i);\n            }\n        }\n        swap(nums, idx, start);\n        if (k == idx - start + 1) {\n            return;\n        } else if (k < idx - start + 1) {\n            quickSort(nums, k, start, idx);\n        } else {\n            quickSort(nums, k - (idx - start + 1), idx + 1, end);\n        }\n    }\n\n    public void swap(String[] nums, int a, int b) {\n        String temp = nums[a];\n        nums[a] = nums[b];\n        nums[b] = temp;\n    }\n}",
      "heap-(priority-queue)":
        "class Solution {\n\n  public String kthLargestNumber(String[] nums, int k) {\n    Queue<String> minHeap = new PriorityQueue<>(\n        (a, b) -> a.length() == b.length() ? a.compareTo(b) : a.length() - b.length());\n\n    for (final String num : nums) {\n      minHeap.offer(num);\n      if (minHeap.size() > k)\n        minHeap.poll();\n    }\n\n    return minHeap.poll();\n  }\n}",
    },
  },
  1986: {
    java: {
      "dynamic-programming": "",
    },
  },
  1987: {
    java: {
      "dynamic-programming": "",
    },
  },
  1988: {
    java: {
      database: "",
    },
  },
  1989: {
    java: {
      greedy: "",
    },
  },
  1990: {
    java: {
      database: "",
    },
  },
  1991: {
    java: {
      "prefix-sum": "",
    },
  },
  1992: {
    java: {
      matrix: "",
    },
  },
  1993: {
    java: {
      tree: "",
    },
  },
  1994: {
    java: {
      "dynamic-programming": "",
    },
  },
  1995: {
    java: {
      enumeration: "",
    },
  },
  1996: {
    java: {
      "monotonic-stack": "",
    },
  },
  1997: {
    java: {
      "dynamic-programming": "",
    },
  },
  1998: {
    java: {
      "union-find": "",
    },
  },
  1999: {
    java: {
      enumeration: "",
    },
  },
  2000: {
    java: {
      "two-pointers": "",
    },
  },
  2001: {
    java: {
      "number-theory": "",
    },
  },
  2002: {
    java: {
      "dynamic-programming": "",
    },
  },
  2003: {
    java: {
      "union-find": "",
    },
  },
  2004: {
    java: {
      database: "",
    },
  },
  2005: {
    java: {
      "game-theory": "",
    },
  },
  2006: {
    java: {
      counting: "",
    },
  },
  2007: {
    java: {
      greedy: "",
    },
  },
  2008: {
    java: {
      "dynamic-programming": "",
    },
  },
  2009: {
    java: {
      "sliding-window":
        "import java.util.Arrays;\nimport java.util.HashSet;\nimport java.util.Set;\n\nclass Solution {\n    public int minOperations(int[] nums) {\n        Set<Integer> set = new HashSet<>();\n        for (int num : nums) {\n            set.add(num);\n        }\n        int[] uniqueNums = new int[set.size()];\n        int index = 0;\n        for (int num : set) {\n            uniqueNums[index++] = num;\n        }\n        Arrays.sort(uniqueNums);\n\n        int maxLength = 0;\n        int left = 0;\n        for (int right = 0; right < uniqueNums.length; ++right) {\n            while (uniqueNums[right] - uniqueNums[left] >= nums.length) {\n                left++;\n            }\n            maxLength = Math.max(maxLength, right - left + 1);\n        }\n\n        return nums.length - maxLength;\n    }\n}\n",
    },
  },
  2010: {
    java: {
      database: "",
    },
  },
  2011: {
    java: {
      string: "",
    },
  },
  2013: {
    java: {
      counting: "",
    },
  },
  2014: {
    java: {
      backtracking: "",
    },
  },
  2015: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2017: {
    java: {
      matrix: "",
    },
  },
  2018: {
    java: {
      matrix: "",
    },
  },
  2019: {
    java: {
      stack: "",
    },
  },
  2020: {
    java: {
      database: "",
    },
  },
  2021: {
    java: {
      "prefix-sum": "",
    },
  },
  2022: {
    java: {
      matrix: "",
    },
  },
  2023: {
    java: {
      counting: "",
    },
  },
  2024: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maxConsecutiveAnswers(String answerKey, int k) {\n        return Math.max(maxConsecutiveChar(answerKey, k, 'T'), maxConsecutiveChar(answerKey, k, 'F'));\n    }\n\n    private int maxConsecutiveChar(String answerKey, int k, char ch) {\n        int maxLen = 0;\n        int left = 0, right = 0;\n        int flipCount = 0;\n\n        while (right < answerKey.length()) {\n            if (answerKey.charAt(right) != ch) {\n                flipCount++;\n            }\n\n            while (flipCount > k) {\n                if (answerKey.charAt(left) != ch) {\n                    flipCount--;\n                }\n                left++;\n            }\n\n            maxLen = Math.max(maxLen, right - left + 1);\n            right++;\n        }\n\n        return maxLen;\n    }\n}\n",
    },
  },
  2025: {
    java: {
      "prefix-sum": "",
    },
  },
  2026: {
    java: {
      database: "",
    },
  },
  2027: {
    java: {
      greedy: "",
    },
  },
  2028: {
    java: {
      math: "",
    },
  },
  2029: {
    java: {
      "game-theory": "",
    },
  },
  2030: {
    java: {
      "monotonic-stack": "",
    },
  },
  2031: {
    java: {
      "merge-sort":
        "class FenwickTree {\n  public FenwickTree(int n) {\n    sums = new int[n + 1];\n  }\n\n  public void add(int i, int delta) {\n    while (i < sums.length) {\n      sums[i] += delta;\n      i += lowbit(i);\n    }\n  }\n\n  public int get(int i) {\n    int sum = 0;\n    while (i > 0) {\n      sum += sums[i];\n      i -= lowbit(i);\n    }\n    return sum;\n  }\n\n  private int[] sums;\n\n  private static int lowbit(int i) {\n    return i & -i;\n  }\n}\n\nclass Solution {\n  public int subarraysWithMoreZerosThanOnes(int[] nums) {\n  int kMod = 1_000_000_007;\n  int n = nums.length;\n    int ans = 0;\n    int prefix = 0;\n    FenwickTree tree = new FenwickTree(2 * n + 1);\n    tree.add(remap(0, n), 1);\n\n    for (final int num : nums) {\n      prefix += num == 0 ? -1 : 1;\n      ans += tree.get(remap(prefix - 1, n));\n      ans %= kMod;\n      tree.add(remap(prefix, n), 1);\n    }\n\n    return ans;\n  }\n\n  private int remap(int i, int n) {\n    return i + n + 1;\n  }\n}",
    },
  },
  2032: {
    java: {
      "bit-manipulation": "",
    },
  },
  2033: {
    java: {
      matrix: "",
    },
  },
  2034: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2035: {
    java: {
      "two-pointers": "",
    },
  },
  2036: {
    java: {
      "dynamic-programming": "",
    },
  },
  2037: {
    java: {
      greedy: "",
    },
  },
  2038: {
    java: {
      "game-theory": "",
    },
  },
  2039: {
    java: {
      graph: "",
    },
  },
  2041: {
    java: {
      database: "",
    },
  },
  2042: {
    java: {
      string: "",
    },
  },
  2043: {
    java: {
      design: "",
    },
  },
  2044: {
    java: {
      backtracking: "",
    },
  },
  2045: {
    java: {
      "shortest-path": "",
    },
  },
  2046: {
    java: {
      "two-pointers": "",
    },
  },
  2047: {
    java: {
      string: "",
    },
  },
  2048: {
    java: {
      backtracking: "",
    },
  },
  2049: {
    java: {
      tree: "",
    },
  },
  2050: {
    java: {
      "topological-sort": "",
    },
  },
  2051: {
    java: {
      database: "",
    },
  },
  2052: {
    java: {
      "dynamic-programming": "",
    },
  },
  2053: {
    java: {
      counting: "",
    },
  },
  2054: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2055: {
    java: {
      "prefix-sum": "",
    },
  },
  2056: {
    java: {
      backtracking: "",
    },
  },
  2058: {
    java: {
      "linked-list": "",
    },
  },
  2059: {
    java: {
      "breadth-first-search": "",
    },
  },
  2060: {
    java: {
      "dynamic-programming": "",
    },
  },
  2061: {
    java: {
      matrix: "",
    },
  },
  2062: {
    java: {
      "hash-table": "",
    },
  },
  2063: {
    java: {
      "dynamic-programming": "",
    },
  },
  2065: {
    java: {
      backtracking: "",
    },
  },
  2066: {
    java: {
      database: "",
    },
  },
  2067: {
    java: {
      "prefix-sum": "",
    },
  },
  2068: {
    java: {
      counting: "",
    },
  },
  2069: {
    java: {
      design: "",
    },
  },
  2070: {
    java: {
      sorting: "",
    },
  },
  2071: {
    java: {
      "monotonic-queue":
        "import java.util.Arrays;\nimport java.util.ArrayDeque;\nimport java.util.Deque;\n\nclass Solution {\n    private int[] tasks;\n    private int[] workers;\n    private int strength;\n    private int pills;\n    private int taskCount;\n    private int workerCount;\n\n    public int maxTaskAssign(int[] tasks, int[] workers, int pills, int strength) {\n        Arrays.sort(tasks);\n        Arrays.sort(workers);\n        this.tasks = tasks;\n        this.workers = workers;\n        this.strength = strength;\n        this.pills = pills;\n        taskCount = tasks.length; \n        workerCount = workers.length; \n\n        int left = 0, right = Math.min(workerCount, taskCount);\n        while (left < right) {\n            int mid = (left + right + 1) / 2; \n            if (check(mid)) {\n                left = mid; \n            } else {\n                right = mid - 1;\n            }\n        }\n\n        return left; \n    }\n\n    private boolean check(int x) {\n        int taskIdx = 0;\n        Deque<Integer> taskQueue = new ArrayDeque<>();\n        int remainingPills = pills;\n\n        for (int workerIdx = workerCount - x; workerIdx < workerCount; ++workerIdx) {\n            while (taskIdx < x && tasks[taskIdx] <= workers[workerIdx] + strength) {\n                taskQueue.offer(tasks[taskIdx++]); \n            }\n            if (taskQueue.isEmpty()) {\n                return false;\n            }\n            if (taskQueue.peekFirst() <= workers[workerIdx]) {\n                taskQueue.pollFirst(); \n            } else if (remainingPills == 0) {\n                return false; \n            } else {\n                --remainingPills; \n                taskQueue.pollLast();\n            }\n        }\n      \n        return true; \n    }\n}",
    },
  },
  2072: {
    java: {
      database: "",
    },
  },
  2073: {
    java: {
      queue: "",
    },
  },
  2074: {
    java: {
      "linked-list": "",
    },
  },
  2075: {
    java: {
      string: "",
    },
  },
  2076: {
    java: {
      "union-find": "",
    },
  },
  2077: {
    java: {
      graph: "",
    },
  },
  2078: {
    java: {
      greedy: "",
    },
  },
  2080: {
    java: {
      design: "",
    },
  },
  2081: {
    java: {
      enumeration: "",
    },
  },
  2082: {
    java: {
      database: "",
    },
  },
  2083: {
    java: {
      "prefix-sum": "",
    },
  },
  2084: {
    java: {
      database: "",
    },
  },
  2085: {
    java: {
      counting: "",
    },
  },
  2086: {
    java: {
      "dynamic-programming": "",
    },
  },
  2087: {
    java: {
      greedy: "",
    },
  },
  2088: {
    java: {
      matrix: "",
    },
  },
  2089: {
    java: {
      sorting: "",
    },
  },
  2090: {
    java: {
      "sliding-window":
        "class Solution {\n    public int[] getAverages(int[] nums, int k) {\n        int n = nums.length;\n        int[] result = new int[n];\n        Arrays.fill(result, -1);\n\n        if (2 * k + 1 > n) return result;  \n        long windowSum = 0;\n        int windowSize = 2 * k + 1;\n        for (int i = 0; i < windowSize; i++) {\n            windowSum += nums[i];\n        }\n        result[k] = (int)(windowSum / windowSize);\n        for (int i = k + 1; i < n - k; i++) {\n            windowSum = windowSum - nums[i - k - 1] + nums[i + k];\n            result[i] = (int)(windowSum / windowSize);\n        }\n\n        return result;\n    }\n}\n",
    },
  },
  2091: {
    java: {
      greedy: "",
    },
  },
  2092: {
    java: {
      "union-find": "",
    },
  },
  2093: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2094: {
    java: {
      enumeration: "",
    },
  },
  2095: {
    java: {
      "two-pointers": "",
    },
  },
  2096: {
    java: {
      tree: "",
    },
  },
  2097: {
    java: {
      "eulerian-circuit":
        "class Solution {\n    public int[][] validArrangement(int[][] pairs) {\n        List<int[]> ans = new ArrayList<>();\n        Map<Integer, Stack<Integer>> graph = new HashMap<>();\n        Map<Integer, Integer> outDegree = new HashMap<>();\n        Map<Integer, Integer> inDegrees = new HashMap<>();\n\n        for (int[] pair : pairs) {\n          int start = pair[0];\n          int end = pair[1];\n            graph.putIfAbsent(start, new Stack<>());\n            graph.get(start).push(end);\n            outDegree.merge(start, 1, Integer::sum);\n            inDegrees.merge(end, 1, Integer::sum);\n        }\n\n      int startNode = getStartNode(graph, outDegree, inDegrees, pairs);\n        eulerDFS(graph, startNode, ans);\n        Collections.reverse(ans);\n        return ans.stream().toArray(int[][]::new);\n    }\n\n    private int getStartNode(Map<Integer, Stack<Integer>> graph, Map<Integer, Integer> outDegree,\n            Map<Integer, Integer> inDegrees, int[][] pairs) {\n        for (final int u : graph.keySet())\n            if (outDegree.getOrDefault(u, 0) - inDegrees.getOrDefault(u, 0) == 1)\n                return u;\n        return pairs[0][0];\n    }\n\n    private void eulerDFS(Map<Integer, Stack<Integer>> graph, int u, List<int[]> ans) {\n        Stack<Integer> stack = graph.get(u);\n        while (stack != null && !stack.isEmpty()) {\n          int v = stack.pop();\n            eulerDFS(graph, v, ans);\n            ans.add(new int[] { u, v });\n        }\n    }\n}",
    },
  },
  2098: {
    java: {
      greedy: "",
    },
  },
  2099: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2100: {
    java: {
      "prefix-sum": "",
    },
  },
  2101: {
    java: {
      geometry: "",
    },
  },
  2102: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2103: {
    java: {
      "hash-table": "",
    },
  },
  2104: {
    java: {
      "monotonic-stack":
        "class Solution {\n    public long subArrayRanges(int[] nums) {\n        return subarraySum(nums, '<') - subarraySum(nums, '>');\n    }\n\n    private long subarraySum(int[] A, char op) {\n        int n = A.length;\n        long res = 0;\n        int[] prev = new int[n];\n        int[] next = new int[n];\n        Deque<Integer> stack = new ArrayDeque<>();\n\n        Arrays.fill(prev, -1);\n        Arrays.fill(next, n);\n\n        for (int i = 0; i < n; ++i) {\n            while (!stack.isEmpty() && func(op, A[stack.peek()], A[i])) {\n                int index = stack.pop();\n                next[index] = i;\n            }\n            if (!stack.isEmpty())\n                prev[i] = stack.peek();\n            stack.push(i);\n        }\n\n        for (int i = 0; i < n; ++i)\n            res += (long) A[i] * (i - prev[i]) * (next[i] - i);\n\n        return res;\n    }\n\n    private boolean func(char op, int a, int b) {\n        if (op == '<')\n            return a < b;\n        return a > b;\n    }\n}",
    },
  },
  2105: {
    java: {
      "two-pointers": "",
    },
  },
  2106: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maxTotalFruits(int[][] fruits, int startPos, int k) {\n      int maxRight = Math.max(startPos, fruits[fruits.length - 1][0]);\n        int ans = 0;\n        int[] amounts = new int[1 + maxRight];\n        int[] prefix = new int[2 + maxRight];\n\n        for (int[] dp : fruits)\n            amounts[dp[0]] = dp[1];\n\n        for (int i = 0; i + 1 < prefix.length; ++i)\n            prefix[i + 1] = prefix[i] + amounts[i];\n\n      int maxRightSteps = Math.min(maxRight - startPos, k);\n        for (int rightSteps = 0; rightSteps <= maxRightSteps; ++rightSteps) {\n          int leftSteps = Math.max(0, k - 2 * rightSteps);\n            ans = Math.max(ans, getFruits(startPos, maxRight, leftSteps, rightSteps, prefix));\n        }\n\n      int maxLeftSteps = Math.min(startPos, k);\n        for (int leftSteps = 0; leftSteps <= maxLeftSteps; ++leftSteps) {\n          int rightSteps = Math.max(0, k - 2 * leftSteps);\n            ans = Math.max(ans, getFruits(startPos, maxRight, leftSteps, rightSteps, prefix));\n        }\n\n        return ans;\n    }\n\n    private int getFruits(int startPos, int maxRight, int leftSteps, int rightSteps, int[] prefix) {\n      int left = Math.max(0, startPos - leftSteps);\n      int right = Math.min(maxRight, startPos + rightSteps);\n        return prefix[right + 1] - prefix[left];\n    }\n}",
    },
  },
  2107: {
    java: {
      "sliding-window":
        "class Solution {\n    public int shareCandies(int[] candies, int k) {\n        Map<Integer, Integer> count = new HashMap<>();\n        int n = candies.length;\n        for (int i = k; i < n; ++i) {\n            count.merge(candies[i], 1, Integer::sum);\n        }\n        int ans = count.size();\n        for (int i = k; i < candies.length; ++i) {\n            if (count.merge(candies[i], -1, Integer::sum) == 0) {\n                count.remove(candies[i]);\n            }\n            count.merge(candies[i - k], 1, Integer::sum);\n            ans = Math.max(ans, count.size());\n        }\n        return ans;\n    }\n}",
    },
  },
  2108: {
    java: {
      "two-pointers": "",
    },
  },
  2109: {
    java: {
      "two-pointers": "",
    },
  },
  2110: {
    java: {
      "dynamic-programming": "",
    },
  },
  2112: {
    java: {
      database: "",
    },
  },
  2114: {
    java: {
      string: "",
    },
  },
  2115: {
    java: {
      "topological-sort": "",
    },
  },
  2116: {
    java: {
      stack: "",
    },
  },
  2117: {
    java: {
      math: "",
    },
  },
  2118: {
    java: {
      database: "",
    },
  },
  2119: {
    java: {
      math: "",
    },
  },
  2120: {
    java: {
      string: "",
    },
  },
  2121: {
    java: {
      "prefix-sum": "",
    },
  },
  2122: {
    java: {
      enumeration: "",
    },
  },
  2123: {
    java: {
      matrix: "",
    },
  },
  2124: {
    java: {
      string: "",
    },
  },
  2125: {
    java: {
      matrix: "",
    },
  },
  2126: {
    java: {
      greedy: "",
    },
  },
  2127: {
    java: {
      "topological-sort": "",
    },
  },
  2128: {
    java: {
      matrix: "",
    },
  },
  2129: {
    java: {
      string: "",
    },
  },
  2130: {
    java: {
      "two-pointers": "",
    },
  },
  2131: {
    java: {
      counting: "",
    },
  },
  2132: {
    java: {
      matrix: "",
    },
  },
  2133: {
    java: {
      matrix: "",
    },
  },
  2134: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minSwaps(int[] nums) {\n      int n = nums.length;\n      int k = (int) Arrays.stream(nums).filter(a -> a == 1).count();\n        int ones = 0;\n        int maxOnes = 0;\n\n        for (int i = 0; i < n * 2; ++i) {\n            if (i >= k && nums[(i - k) % n] == 1)\n                --ones;\n            if (nums[i % n] == 1)\n                ++ones;\n            maxOnes = Math.max(maxOnes, ones);\n        }\n\n        return k - maxOnes;\n    }\n}",
    },
  },
  2135: {
    java: {
      "bit-manipulation": "",
    },
  },
  2136: {
    java: {
      greedy: "",
    },
  },
  2138: {
    java: {
      string: "",
    },
  },
  2139: {
    java: {
      greedy: "",
    },
  },
  2140: {
    java: {
      "dynamic-programming": "",
    },
  },
  2141: {
    java: {
      greedy: "",
    },
  },
  2142: {
    java: {
      database: "",
    },
  },
  2143: {
    java: {
      "dynamic-programming": "",
    },
  },
  2144: {
    java: {
      greedy: "",
    },
  },
  2145: {
    java: {
      "prefix-sum": "",
    },
  },
  2146: {
    java: {
      matrix: "",
    },
  },
  2147: {
    java: {
      "dynamic-programming": "",
    },
  },
  2148: {
    java: {
      sorting: "",
    },
  },
  2149: {
    java: {
      "two-pointers": "",
    },
  },
  2150: {
    java: {
      counting: "",
    },
  },
  2151: {
    java: {
      backtracking: "",
    },
  },
  2152: {
    java: {
      "dynamic-programming": "",
    },
  },
  2153: {
    java: {
      database: "",
    },
  },
  2154: {
    java: {
      sorting: "",
    },
  },
  2156: {
    java: {
      "sliding-window":
        "class Solution {\n    public String subStrHash(String s, int power, int modulo, int k, int hashValue) {\n        long maxPower = 1;\n        long hash = 0;\n        int bestLeft = -1;\n\n        for (int i = s.length() - 1; i >= 0; --i) {\n            hash = (hash * power + val(s.charAt(i))) % modulo;\n            if (i + k < s.length())\n                hash = (hash - val(s.charAt(i + k)) * maxPower % modulo + modulo) % modulo;\n            else\n                maxPower = maxPower * power % modulo;\n            if (hash == hashValue)\n                bestLeft = i;\n        }\n\n        return s.substring(bestLeft, bestLeft + k);\n    }\n\n    private int val(char c) {\n        return c - 'a' + 1;\n    }\n}",
    },
  },
  2157: {
    java: {
      "union-find": "",
    },
  },
  2158: {
    java: {
      "ordered-set": "",
    },
  },
  2159: {
    java: {
      database: "",
    },
  },
  2160: {
    java: {
      greedy: "",
    },
  },
  2161: {
    java: {
      "two-pointers": "",
    },
  },
  2162: {
    java: {
      enumeration: "",
    },
  },
  2163: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2164: {
    java: {
      sorting: "",
    },
  },
  2165: {
    java: {
      sorting: "",
    },
  },
  2166: {
    java: {
      design: "",
    },
  },
  2167: {
    java: {
      "dynamic-programming": "",
    },
  },
  2168: {
    java: {
      "rolling-hash": "",
    },
  },
  2169: {
    java: {
      math: "",
    },
  },
  2170: {
    java: {
      counting: "",
    },
  },
  2171: {
    java: {
      "prefix-sum": "",
    },
  },
  2172: {
    java: {
      "dynamic-programming": "",
    },
  },
  2173: {
    java: {
      database: "",
    },
  },
  2174: {
    java: {
      matrix: "",
    },
  },
  2175: {
    java: {
      database: "",
    },
  },
  2177: {
    java: {
      math: "",
    },
  },
  2178: {
    java: {
      backtracking: "",
    },
  },
  2179: {
    java: {
      "merge-sort":
        "class FenwickTree {\n  public FenwickTree(int n) {\n    sums = new int[n + 1];\n  }\n\n  public void add(int i, int delta) {\n    while (i < sums.length) {\n      sums[i] += delta;\n      i += lowbit(i);\n    }\n  }\n\n  public int get(int i) {\n    int sum = 0;\n    while (i > 0) {\n      sum += sums[i];\n      i -= lowbit(i);\n    }\n    return sum;\n  }\n\n  private int[] sums;\n\n  private static int lowbit(int i) {\n    return i & -i;\n  }\n}\n\nclass Solution {\n  public long goodTriplets(int[] nums1, int[] nums2) {\n  int n = nums1.length;\n    long ans = 0;\n    Map<Integer, Integer> numToIndex = new HashMap<>();\n    int[] nums = new int[n];\n    int[] leftSmaller = new int[n];\n    int[] rightLarger = new int[n];\n    FenwickTree tree1 = new FenwickTree(n);\n    FenwickTree tree2 = new FenwickTree(n);\n\n    for (int i = 0; i < n; ++i)\n      numToIndex.put(nums1[i], i);\n    for (int i = 0; i < n; ++i)\n      nums[i] = numToIndex.get(nums2[i]);\n\n    for (int i = 0; i < n; ++i) {\n      leftSmaller[i] = tree1.get(nums[i]);\n      tree1.add(nums[i] + 1, 1);\n    }\n\n    for (int i = n - 1; i >= 0; --i) {\n      rightLarger[i] = tree2.get(n) - tree2.get(nums[i]);\n      tree2.add(nums[i] + 1, 1);\n    }\n\n    for (int i = 0; i < n; ++i)\n      ans += (long) leftSmaller[i] * rightLarger[i];\n\n    return ans;\n  }\n}",
    },
  },
  2180: {
    java: {
      math: "",
    },
  },
  2181: {
    java: {
      "linked-list": "",
    },
  },
  2182: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2183: {
    java: {
      "number-theory": "",
    },
  },
  2184: {
    java: {
      "dynamic-programming": "",
    },
  },
  2185: {
    java: {
      "string-matching": "",
    },
  },
  2186: {
    java: {
      counting: "",
    },
  },
  2188: {
    java: {
      "dynamic-programming": "",
    },
  },
  2189: {
    java: {
      "dynamic-programming": "",
    },
  },
  2190: {
    java: {
      counting: "",
    },
  },
  2191: {
    java: {
      sorting: "",
    },
  },
  2192: {
    java: {
      "topological-sort": "",
    },
  },
  2193: {
    java: {
      "two-pointers": "",
    },
  },
  2194: {
    java: {
      string: "",
    },
  },
  2195: {
    java: {
      greedy: "",
    },
  },
  2196: {
    java: {
      tree: "",
    },
  },
  2197: {
    java: {
      stack: "",
    },
  },
  2198: {
    java: {
      math: "",
    },
  },
  2199: {
    java: {
      database: "",
    },
  },
  2200: {
    java: {
      "two-pointers": "",
    },
  },
  2201: {
    java: {
      "hash-table": "",
    },
  },
  2202: {
    java: {
      greedy: "",
    },
  },
  2203: {
    java: {
      "shortest-path": "",
    },
  },
  2204: {
    java: {
      "union-find": "",
    },
  },
  2205: {
    java: {
      database: "",
    },
  },
  2206: {
    java: {
      "bit-manipulation": "",
    },
  },
  2207: {
    java: {
      "prefix-sum": "",
    },
  },
  2208: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2209: {
    java: {
      "prefix-sum": "",
    },
  },
  2211: {
    java: {
      stack: "",
    },
  },
  2212: {
    java: {
      backtracking: "",
    },
  },
  2213: {
    java: {
      "ordered-set": "",
    },
  },
  2214: {
    java: {
      greedy: "",
    },
  },
  2215: {
    java: {
      "hash-table": "",
    },
  },
  2216: {
    java: {
      stack: "",
    },
  },
  2217: {
    java: {
      math: "",
    },
  },
  2218: {
    java: {
      "prefix-sum": "",
    },
  },
  2219: {
    java: {
      "prefix-sum": "",
    },
  },
  2220: {
    java: {
      "bit-manipulation": "",
    },
  },
  2221: {
    java: {
      combinatorics: "",
    },
  },
  2222: {
    java: {
      "prefix-sum": "",
    },
  },
  2223: {
    java: {
      "suffix-array":
        "class Solution {\n    public long sumScores(String s) {\n      int n = s.length();\n        // https://cp-algorithms.com/string/z-function.html#implementation\n        int[] z = new int[n];\n        // [left, right] := the indices of the rightmost segment match\n        int left = 0;\n        int right = 0;\n\n        for (int i = 1; i < n; ++i) {\n            if (i < right)\n                z[i] = Math.min(right - i, z[i - left]);\n            while (i + z[i] < n && s.charAt(z[i]) == s.charAt(i + z[i]))\n                ++z[i];\n            if (i + z[i] > right) {\n                left = i;\n                right = i + z[i];\n            }\n        }\n\n        return Arrays.stream(z).asLongStream().sum() + n;\n    }\n}",
    },
  },
  2224: {
    java: {
      greedy: "",
    },
  },
  2225: {
    java: {
      counting: "",
    },
  },
  2227: {
    java: {
      trie: "",
    },
  },
  2228: {
    java: {
      database: "",
    },
  },
  2229: {
    java: {
      sorting: "",
    },
  },
  2230: {
    java: {
      database: "",
    },
  },
  2231: {
    java: {
      "heap-(priority-queue)":
        "class Solution {\n    public int largestInteger(int num) {\n        String s = String.valueOf(num);\n        int ans = 0;\n        // maxHeap[0] := the odd digits\n        // maxHeap[1] := the even digits\n        Queue<Integer>[] maxHeap = new Queue[2];\n\n        for (int i = 0; i < 2; ++i)\n            maxHeap[i] = new PriorityQueue<>(Comparator.reverseOrder());\n\n        for (char c : s.toCharArray()) {\n            int digit = c - '0';\n            maxHeap[digit & 1].offer(digit);\n        }\n\n        for (char c : s.toCharArray()) {\n            int i = c - '0' & 1;\n            ans = (ans * 10 + maxHeap[i].poll());\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2232: {
    java: {
      enumeration: "",
    },
  },
  2233: {
    java: {
      "heap-(priority-queue)":
        "class Solution {\n    public int maximumProduct(int[] nums, int k) {\n        int kMod = 1_000_000_007;\n        long ans = 1;\n        Queue<Integer> minHeap = new PriorityQueue<>();\n\n        for (int num : nums)\n            minHeap.offer(num);\n\n        for (int i = 0; i < k; ++i) {\n            int minNum = minHeap.poll();\n            minHeap.offer(minNum + 1);\n        }\n\n        while (!minHeap.isEmpty()) {\n            ans *= minHeap.poll();\n            ans %= kMod;\n        }\n\n        return (int) ans;\n    }\n}",
    },
  },
  2234: {
    java: {
      "two-pointers": "",
    },
  },
  2235: {
    java: {
      math: "",
    },
  },
  2236: {
    java: {
      tree: "",
    },
  },
  2237: {
    java: {
      "prefix-sum": "",
    },
  },
  2238: {
    java: {
      database: "",
    },
  },
  2240: {
    java: {
      enumeration: "",
    },
  },
  2241: {
    java: {
      design: "",
    },
  },
  2242: {
    java: {
      enumeration: "",
    },
  },
  2243: {
    java: {
      string: "",
    },
  },
  2244: {
    java: {
      counting: "",
    },
  },
  2245: {
    java: {
      matrix: "",
    },
  },
  2246: {
    java: {
      "topological-sort": "",
    },
  },
  2247: {
    java: {
      "dynamic-programming": "",
    },
  },
  2248: {
    java: {
      counting: "",
    },
  },
  2249: {
    java: {
      geometry: "",
    },
  },
  2250: {
    java: {
      sorting: "",
    },
  },
  2251: {
    java: {
      "prefix-sum": "",
    },
  },
  2252: {
    java: {
      database: "",
    },
  },
  2253: {
    java: {
      database: "",
    },
  },
  2254: {
    java: {
      stack: "",
    },
  },
  2255: {
    java: {
      string: "",
    },
  },
  2256: {
    java: {
      "prefix-sum": "",
    },
  },
  2257: {
    java: {
      matrix: "",
    },
  },
  2258: {
    java: {
      matrix: "",
    },
  },
  2259: {
    java: {
      enumeration: "",
    },
  },
  2260: {
    java: {
      "sliding-window":
        "class Solution {\n  public int minimumCardPickup(int[] cards) {\n    int ans = Integer.MAX_VALUE;\n    Map<Integer, Integer> seen = new HashMap<>();\n\n    for (int i = 0; i < cards.length; ++i) {\n      if (seen.containsKey(cards[i]))\n        ans = Math.min(ans, i - seen.get(cards[i]) + 1);\n      seen.put(cards[i], i);\n    }\n\n    return ans == Integer.MAX_VALUE ? -1 : ans;\n  }\n}",
    },
  },
  2261: {
    java: {
      "rolling-hash": "",
    },
  },
  2262: {
    java: {
      "dynamic-programming": "",
    },
  },
  2263: {
    java: {
      "dynamic-programming": "",
    },
  },
  2264: {
    java: {
      string: "",
    },
  },
  2265: {
    java: {
      tree: "",
    },
  },
  2266: {
    java: {
      "dynamic-programming": "",
    },
  },
  2267: {
    java: {
      matrix: "",
    },
  },
  2268: {
    java: {
      counting: "",
    },
  },
  2269: {
    java: {
      "sliding-window":
        "class Solution {\n  public int divisorSubstrings(int num, int k) {\n  String s = String.valueOf(num);\n    int ans = 0;\n\n    for (int i = 0; i + k <= s.length(); ++i) {\n    int x = Integer.parseInt(s.substring(i, i + k));\n      if (x != 0 && num % x == 0)\n        ++ans;\n    }\n\n    return ans;\n  }\n}",
    },
  },
  2270: {
    java: {
      "prefix-sum": "",
    },
  },
  2271: {
    java: {
      "prefix-sum": "",
    },
  },
  2272: {
    java: {
      "dynamic-programming": "",
    },
  },
  2273: {
    java: {
      sorting: "",
    },
  },
  2274: {
    java: {
      sorting: "",
    },
  },
  2275: {
    java: {
      "bit-manipulation": "",
    },
  },
  2276: {
    java: {
      "ordered-set": "",
    },
  },
  2277: {
    java: {
      tree: "",
    },
  },
  2278: {
    java: {
      string: "",
    },
  },
  2279: {
    java: {
      greedy: "",
    },
  },
  2280: {
    java: {
      geometry: "",
    },
  },
  2281: {
    java: {
      "monotonic-stack": "",
    },
  },
  2282: {
    java: {
      matrix: "",
    },
  },
  2283: {
    java: {
      counting: "",
    },
  },
  2284: {
    java: {
      counting: "",
    },
  },
  2285: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2286: {
    java: {
      design: "",
    },
  },
  2287: {
    java: {
      counting: "",
    },
  },
  2288: {
    java: {
      string: "",
    },
  },
  2289: {
    java: {
      "monotonic-stack": "",
    },
  },
  2290: {
    java: {
      matrix: "",
    },
  },
  2291: {
    java: {
      "dynamic-programming": "",
    },
  },
  2292: {
    java: {
      database: "",
    },
  },
  2294: {
    java: {
      greedy: "",
    },
  },
  2295: {
    java: {
      "hash-table": "",
    },
  },
  2296: {
    java: {
      "doubly-linked-list":
        "class TextEditor {\n    private class Node {\n        char c;\n        Node prev, next;\n\n        Node(char c) {\n            this.c = c;\n        }\n    }\n\n    private Node head, tail, cursor;\n\n    public TextEditor() {\n        head = new Node('0');\n        tail = new Node('0');\n        head.next = tail;\n        tail.prev = head;\n        cursor = tail;\n    }\n\n    public void addText(String text) {\n        for (char c : text.toCharArray()) {\n            Node newNode = new Node(c);\n            Node prev = cursor.prev;\n            prev.next = newNode;\n            newNode.prev = prev;\n            newNode.next = cursor;\n            cursor.prev = newNode;\n        }\n    }\n\n    public int deleteText(int k) {\n        int deleted = 0;\n        while (k > 0 && cursor.prev != head) {\n            Node prev = cursor.prev;\n            prev.prev.next = cursor;\n            cursor.prev = prev.prev;\n            k--;\n            deleted++;\n        }\n        return deleted;\n    }\n\n    public String cursorLeft(int k) {\n        while (k > 0 && cursor.prev != head) {\n            cursor = cursor.prev;\n            k--;\n        }\n        return getText();\n    }\n\n    public String cursorRight(int k) {\n        while (k > 0 && cursor != tail) {\n            cursor = cursor.next;\n            k--;\n        }\n        return getText();\n    }\n\n    private String getText() {\n        StringBuilder sb = new StringBuilder();\n        Node temp = cursor.prev;\n        for (int i = 0; i < 10 && temp != head; i++) {\n            sb.append(temp.c);\n            temp = temp.prev;\n        }\n        return sb.reverse().toString();\n    }\n}\n",
    },
  },
  2297: {
    java: {
      "monotonic-stack": "",
    },
  },
  2298: {
    java: {
      database: "",
    },
  },
  2299: {
    java: {
      string: "",
    },
  },
  2300: {
    java: {
      "two-pointers": "",
    },
  },
  2301: {
    java: {
      "string-matching": "",
    },
  },
  2302: {
    java: {
      "sliding-window":
        "class Solution {\n    public long countSubarrays(int[] nums, long k) {\n        long ans = 0;\n        long sum = 0;\n\n        for (int left = 0, right = 0; right < nums.length; ++right) {\n            sum += nums[right];\n            while (sum * (right - left + 1) >= k)\n                sum -= nums[left++];\n            ans += right - left + 1;\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2304: {
    java: {
      matrix: "",
    },
  },
  2305: {
    java: {
      "dynamic-programming": "",
    },
  },
  2306: {
    java: {
      "bit-manipulation": "",
    },
  },
  2307: {
    java: {
      "union-find": "",
    },
  },
  2308: {
    java: {
      database: "",
    },
  },
  2309: {
    java: {
      enumeration: "",
    },
  },
  2310: {
    java: {
      "dynamic-programming": "",
    },
  },
  2311: {
    java: {
      "dynamic-programming": "",
    },
  },
  2312: {
    java: {
      "dynamic-programming": "",
    },
  },
  2313: {
    java: {
      "dynamic-programming": "",
    },
  },
  2314: {
    java: {
      database: "",
    },
  },
  2315: {
    java: {
      string: "",
    },
  },
  2316: {
    java: {
      "union-find": "",
    },
  },
  2317: {
    java: {
      "bit-manipulation": "",
    },
  },
  2318: {
    java: {
      "dynamic-programming": "",
    },
  },
  2319: {
    java: {
      matrix: "",
    },
  },
  2320: {
    java: {
      "dynamic-programming": "",
    },
  },
  2321: {
    java: {
      "dynamic-programming": "",
    },
  },
  2322: {
    java: {
      tree: "",
    },
  },
  2323: {
    java: {
      greedy: "",
    },
  },
  2324: {
    java: {
      database: "",
    },
  },
  2325: {
    java: {
      "hash-table": "",
    },
  },
  2326: {
    java: {
      matrix: "",
    },
  },
  2327: {
    java: {
      queue: "",
    },
  },
  2328: {
    java: {
      matrix: "",
    },
  },
  2329: {
    java: {
      database: "",
    },
  },
  2330: {
    java: {
      "two-pointers": "",
    },
  },
  2331: {
    java: {
      tree: "",
    },
  },
  2332: {
    java: {
      "two-pointers": "",
    },
  },
  2333: {
    java: {
      "heap-(priority-queue)":
        "class Solution {\n    public long minSumSquareDiff(int[] nums1, int[] nums2, int k1, int k2) {\n        int[] diff = getDiff(nums1, nums2);\n        int k = k1 + k2;\n        if (Arrays.stream(diff).asLongStream().sum() <= k)\n            return 0;\n\n        Map<Integer, Integer> count = new HashMap<>();\n        // (num, freq)\n        Queue<Pair<Integer, Integer>> maxHeap = new PriorityQueue<>((a, b) -> b.getKey() - a.getKey());\n\n        for (int d : diff)\n            if (d != 0)\n                count.merge(d, 1, Integer::sum);\n\n        for (Map.Entry<Integer, Integer> entry : count.entrySet())\n            maxHeap.offer(new Pair<>(entry.getKey(), entry.getValue()));\n\n        while (k > 0) {\n            Pair<Integer, Integer> pair = maxHeap.poll();\n            int maxNum = pair.getKey();\n            int maxNumFreq = pair.getValue();\n            // Buck decrease in this turn\n            int numDecreased = Math.min(k, maxNumFreq);\n            k -= numDecreased;\n            if (maxNumFreq > numDecreased)\n                maxHeap.offer(new Pair<>(maxNum, maxNumFreq - numDecreased));\n            if (!maxHeap.isEmpty() && maxHeap.peek().getKey() + 1 == maxNum) {\n                Pair<Integer, Integer> secondNode = maxHeap.poll();\n                int secondMaxNum = secondNode.getKey();\n                int secondMaxNumFreq = secondNode.getValue();\n                maxHeap.offer(new Pair<>(secondMaxNum, secondMaxNumFreq + numDecreased));\n            } else if (maxNum > 1) {\n                maxHeap.offer(new Pair<>(maxNum - 1, numDecreased));\n            }\n        }\n\n        long ans = 0;\n        while (!maxHeap.isEmpty()) {\n            Pair<Integer, Integer> pair = maxHeap.poll();\n            int num = pair.getKey();\n            int freq = pair.getValue();\n            ans += (long) num * num * freq;\n        }\n\n        return ans;\n    }\n\n    private int[] getDiff(int[] nums1, int[] nums2) {\n        int[] diff = new int[nums1.length];\n        for (int i = 0; i < nums1.length; ++i)\n            diff[i] = Math.abs(nums1[i] - nums2[i]);\n        return diff;\n    }\n}",
    },
  },
  2334: {
    java: {
      "union-find": "",
    },
  },
  2335: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2336: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2337: {
    java: {
      "two-pointers": "",
    },
  },
  2338: {
    java: {
      "dynamic-programming": "",
    },
  },
  2339: {
    java: {
      database: "",
    },
  },
  2340: {
    java: {
      greedy: "",
    },
  },
  2341: {
    java: {
      counting: "",
    },
  },
  2342: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2343: {
    java: {
      "radix-sort":
        "import java.math.BigInteger;\nimport java.util.*;\n\nclass Solution {\n    public int[] smallestTrimmedNumbers(String[] nums, int[][] queries) {\n        int[] ans = new int[queries.length];\n        for (int i = 0; i < queries.length; i++) {\n            ans[i] = getKSmallestIndex(nums, queries[i][0], queries[i][1]);\n        }\n        return ans;\n    }\n\n    private int getKSmallestIndex(String[] nums, int k, int trim) {\n        int startIndex = nums[0].length() - trim;\n        List<Pair<String, Integer>> trimmed = new ArrayList<>();  \n\n        for (int i = 0; i < nums.length; ++i) {\n            String numStr = nums[i].substring(startIndex);\n            trimmed.add(new Pair<>(numStr, i));\n        }\n\n        int n = trimmed.size();\n        String[] numArray = new String[n];\n        int[] indexArray = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            numArray[i] = trimmed.get(i).getKey();\n            indexArray[i] = trimmed.get(i).getValue();\n        }\n\n        radixSort(numArray, indexArray);\n\n        return indexArray[k - 1];\n    }\n\n    public static void radixSort(String[] arr, int[] indexArr) {\n        int maxLen = Arrays.stream(arr).mapToInt(String::length).max().orElse(0);\n        for (int exp = maxLen - 1; exp >= 0; exp--) {\n            countingSort(arr, indexArr, exp);\n        }\n    }\n\n    private static void countingSort(String[] arr, int[] indexArr, int exp) {\n        int n = arr.length;\n        String[] output = new String[n];\n        int[] outputIndex = new int[n];\n        int[] count = new int[256];  // ASCII characters count\n\n        for (int i = 0; i < n; i++) {\n            char index = exp < arr[i].length() ? arr[i].charAt(exp) : 0;\n            count[index]++;\n        }\n\n        for (int i = 1; i < 256; i++) {\n            count[i] += count[i - 1];\n        }\n\n        for (int i = n - 1; i >= 0; i--) {\n            char index = exp < arr[i].length() ? arr[i].charAt(exp) : 0;\n            output[count[index] - 1] = arr[i];\n            outputIndex[count[index] - 1] = indexArr[i];\n            count[index]--;\n        }\n\n        System.arraycopy(output, 0, arr, 0, n);\n        System.arraycopy(outputIndex, 0, indexArr, 0, n);\n    }\n\n    static class Pair<K, V> {\n        private final K key;\n        private final V value;\n\n        public Pair(K key, V value) {\n            this.key = key;\n            this.value = value;\n        }\n\n        public K getKey() {\n            return key;\n        }\n\n        public V getValue() {\n            return value;\n        }\n    }\n\n}\n",
      quickselect:
        "import java.util.*;\n\npublic class Solution {\n\n    class Pair implements Comparable<Pair> {\n        String trimmedNumber;\n        int originalIndex;\n\n        public Pair(String trimmedNumber, int originalIndex) {\n            this.trimmedNumber = trimmedNumber;\n            this.originalIndex = originalIndex;\n        }\n\n        @Override\n        public int compareTo(Pair other) {\n            if (this.trimmedNumber.equals(other.trimmedNumber)) {\n                return Integer.compare(this.originalIndex, other.originalIndex);\n            }\n            return this.trimmedNumber.compareTo(other.trimmedNumber);\n        }\n    }\n\n    public int[] smallestTrimmedNumbers(String[] nums, int[][] queries) {\n        int[] result = new int[queries.length];\n        int resultIndex = 0;\n        Map<Integer, String[]> trimmedMap = new HashMap<>();\n\n        for (int[] query : queries) {\n            int trimLength = query[1];\n            \n            if (!trimmedMap.containsKey(trimLength)) {\n                trimmedMap.put(trimLength, trimStrings(nums, trimLength));\n            }\n            String[] trimmedArray = trimmedMap.get(trimLength);\n            \n            Pair[] pairs = new Pair[trimmedArray.length];\n            for (int i = 0; i < trimmedArray.length; i++) {\n                pairs[i] = new Pair(trimmedArray[i], i);\n            }\n            \n            Pair kthSmallest = findKthSmallest(pairs, query[0]);\n            result[resultIndex++] = kthSmallest.originalIndex;\n        }\n\n        return result;\n    }\n\n    private String[] trimStrings(String[] nums, int trimLength) {\n        int fullLength = nums[0].length();\n        if (trimLength == fullLength) {\n            return nums; // No trimming needed\n        }\n\n        String[] trimmed = new String[nums.length];\n        for (int i = 0; i < nums.length; i++) {\n            trimmed[i] = nums[i].substring(fullLength - trimLength);\n        }\n        return trimmed;\n    }\n\n    private Pair findKthSmallest(Pair[] pairs, int k) {\n        k--; // Convert k to zero-based index\n        int left = 0;\n        int right = pairs.length - 1;\n\n        while (left <= right) {\n            int pivotIndex = partition(pairs, left, right);\n            if (pivotIndex == k) {\n                return pairs[k];\n            } else if (pivotIndex < k) {\n                left = pivotIndex + 1;\n            } else {\n                right = pivotIndex - 1;\n            }\n        }\n\n        return pairs[k];\n    }\n\n    private int partition(Pair[] pairs, int left, int right) {\n        // Select middle element as pivot\n        int mid = left + (right - left) / 2;\n        Pair pivot = pairs[mid];\n        \n        swap(pairs, mid, right);\n\n        int i = left;\n        for (int j = left; j < right; j++) {\n            if (pairs[j].compareTo(pivot) <= 0) {\n                swap(pairs, i, j);\n                i++;\n            }\n        }\n        \n        swap(pairs, i, right);\n        return i;\n    }\n\n    private void swap(Pair[] pairs, int i, int j) {\n        Pair temp = pairs[i];\n        pairs[i] = pairs[j];\n        pairs[j] = temp;\n    }\n}\n",
    },
  },
  2344: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2345: {
    java: {
      "monotonic-stack": "",
    },
  },
  2346: {
    java: {
      database: "",
    },
  },
  2347: {
    java: {
      counting: "",
    },
  },
  2348: {
    java: {
      math: "",
    },
  },
  2349: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2350: {
    java: {
      greedy: "",
    },
  },
  2351: {
    java: {
      "bit-manipulation": "",
    },
  },
  2352: {
    java: {
      matrix: "",
    },
  },
  2353: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2354: {
    java: {
      "bit-manipulation": "",
    },
  },
  2355: {
    java: {
      "monotonic-stack": "",
    },
  },
  2356: {
    java: {
      database: "",
    },
  },
  2357: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2358: {
    java: {
      greedy: "",
    },
  },
  2359: {
    java: {
      graph: "",
    },
  },
  2360: {
    java: {
      "topological-sort": "",
    },
  },
  2361: {
    java: {
      "dynamic-programming": "",
    },
  },
  2362: {
    java: {
      database: "",
    },
  },
  2363: {
    java: {
      "ordered-set": "",
    },
  },
  2364: {
    java: {
      "hash-table": "",
    },
  },
  2365: {
    java: {
      "hash-table": "",
    },
  },
  2366: {
    java: {
      greedy: "",
    },
  },
  2367: {
    java: {
      "two-pointers": "",
    },
  },
  2368: {
    java: {
      "union-find": "",
    },
  },
  2369: {
    java: {
      "dynamic-programming": "",
    },
  },
  2370: {
    java: {
      "dynamic-programming": "",
    },
  },
  2371: {
    java: {
      "union-find": "",
    },
  },
  2372: {
    java: {
      database: "",
    },
  },
  2373: {
    java: {
      matrix: "",
    },
  },
  2374: {
    java: {
      graph: "",
    },
  },
  2375: {
    java: {
      stack: "",
    },
  },
  2376: {
    java: {
      "dynamic-programming": "",
    },
  },
  2377: {
    java: {
      database: "",
    },
  },
  2378: {
    java: {
      "dynamic-programming": "",
    },
  },
  2379: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minimumRecolors(String blocks, int k) {\n        int countB = 0;\n        int maxCountB = 0;\n\n        for (int i = 0; i < blocks.length(); ++i) {\n            if (blocks.charAt(i) == 'B')\n                ++countB;\n            if (i >= k && blocks.charAt(i - k) == 'B')\n                --countB;\n            maxCountB = Math.max(maxCountB, countB);\n        }\n\n        return k - maxCountB;\n    }\n}",
    },
  },
  2380: {
    java: {
      "dynamic-programming": "",
    },
  },
  2381: {
    java: {
      "prefix-sum": "",
    },
  },
  2382: {
    java: {
      "union-find": "",
    },
  },
  2383: {
    java: {
      greedy: "",
    },
  },
  2384: {
    java: {
      counting: "",
    },
  },
  2385: {
    java: {
      tree: "",
    },
  },
  2386: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2387: {
    java: {
      matrix: "",
    },
  },
  2388: {
    java: {
      database: "",
    },
  },
  2389: {
    java: {
      "prefix-sum": "",
    },
  },
  2390: {
    java: {
      stack:
        "import java.util.*;\n\nclass Solution {\n    public String removeStars(String s) {\n        Deque<Integer> stack = new ArrayDeque<>();\n        \n        for (int i = 0; i < s.length(); i++) {\n            char ch = s.charAt(i);\n            if (ch == '*') {\n                if (!stack.isEmpty()) {\n                    stack.pop(); \n                }\n            } else {\n                stack.push(i); \n            }\n        }\n        \n        StringBuilder result = new StringBuilder();\n        while (!stack.isEmpty()) {\n            result.append(s.charAt(stack.pop()));\n        }\n        \n        return result.reverse().toString();\n    }\n}\n",
    },
  },
  2391: {
    java: {
      "prefix-sum": "",
    },
  },
  2392: {
    java: {
      matrix: "",
    },
  },
  2393: {
    java: {
      "dynamic-programming": "",
    },
  },
  2394: {
    java: {
      database: "",
    },
  },
  2395: {
    java: {
      "hash-table": "",
    },
  },
  2396: {
    java: {
      "two-pointers": "",
    },
  },
  2397: {
    java: {
      matrix: "",
    },
  },
  2398: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maximumRobots(int[] times, int[] costs, long budget) {\n        long sum = 0;\n        int i = 0, n = times.length;\n        Deque<Integer> deque = new LinkedList<Integer>();\n        for (int j = 0; j < n; ++j) {\n            sum += costs[j];\n            while (!deque.isEmpty() && times[deque.peekLast()] <= times[j])\n                deque.pollLast();\n            deque.addLast(j);\n            if (times[deque.getFirst()] + (j - i + 1) * sum > budget) {\n                if (deque.getFirst() == i)\n                    deque.pollFirst();\n                sum -= costs[i++];\n            }\n        }\n        return n - i;\n    }\n}\n",
    },
  },
  2399: {
    java: {
      "hash-table": "",
    },
  },
  2400: {
    java: {
      "dynamic-programming": "",
    },
  },
  2401: {
    java: {
      "sliding-window":
        "class Solution {\n  public int longestNiceSubarray(int[] nums) {\n    int ans = 0;\n    int used = 0;\n\n    for (int left = 0, right = 0; right < nums.length; ++right) {\n      while ((used & nums[right]) > 0)\n        used ^= nums[left++];\n      used |= nums[right];\n      ans = Math.max(ans, right - left + 1);\n    }\n\n    return ans;\n  }\n}",
    },
  },
  2402: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2403: {
    java: {
      "dynamic-programming": "",
    },
  },
  2404: {
    java: {
      counting: "",
    },
  },
  2405: {
    java: {
      greedy: "",
    },
  },
  2406: {
    java: {
      "two-pointers": "",
    },
  },
  2407: {
    java: {
      "monotonic-queue":
        "class Solution {\n    public int lengthOfLIS(int[] nums, int k) {\n        SegmentTree root = new SegmentTree(1, 100000);\n        int res = 0;\n        for (int num : nums) {\n            int preMax = root.rangeMaxQuery(root, num - k, num - 1);\n            root.update(root, num, preMax + 1);\n            res = Math.max(res, preMax + 1);\n        }\n        return res;\n    }\n}\n\nclass SegmentTree {\n    SegmentTree left, right;\n    int start, end, val;\n    public SegmentTree(int start, int end) {\n        this.start = start;\n        this.end = end;\n        setup(this, start, end);\n    }\n    public void setup(SegmentTree node, int start, int end) {\n        if (start == end) return;\n        int mid = start + (end - start) / 2;\n        if (node.left == null) {\n            node.left = new SegmentTree(start, mid);\n            node.right = new SegmentTree(mid + 1, end);\n        }\n        setup(node.left, start, mid);\n        setup(node.right, mid + 1, end);\n        node.val = Math.max(node.left.val, node.right.val);\n    }\n    \n    public void update(SegmentTree node, int index, int val) {\n        if (index < node.start || index > node.end) return;\n        if (node.start == node.end && node.start == index) {\n            node.val = val;\n            return;\n        }\n        update(node.left, index, val);\n        update(node.right, index, val);\n        node.val = Math.max(node.left.val, node.right.val);\n    }\n    \n    public int rangeMaxQuery(SegmentTree node, int start, int end) {\n        if (node.start > end || node.end < start) return 0;\n        if (node.start >= start && node.end <= end) return node.val;\n        return Math.max(rangeMaxQuery(node.left, start, end), rangeMaxQuery(node.right, start, end));\n    }\n}",
    },
  },
  2408: {
    java: {
      design: "",
    },
  },
  2409: {
    java: {
      math: "",
    },
  },
  2410: {
    java: {
      "two-pointers": "",
    },
  },
  2411: {
    java: {
      "sliding-window":
        "class Solution {\n  public int[] smallestSubarrays(int[] nums) {\n  int kMaxBit = 30;\n    int[] ans = new int[nums.length];\n    int[] closest = new int[kMaxBit];\n\n    Arrays.fill(ans, 1);\n\n    for (int i = nums.length - 1; i >= 0; --i)\n      for (int j = 0; j < kMaxBit; ++j) {\n        if ((nums[i] >> j & 1) == 1)\n          closest[j] = i;\n        ans[i] = Math.max(ans[i], closest[j] - i + 1);\n      }\n\n    return ans;\n  }\n}",
    },
  },
  2412: {
    java: {
      greedy: "",
    },
  },
  2413: {
    java: {
      "number-theory": "",
    },
  },
  2414: {
    java: {
      string: "",
    },
  },
  2415: {
    java: {
      tree: "",
    },
  },
  2416: {
    java: {
      trie: "",
    },
  },
  2417: {
    java: {
      enumeration: "",
    },
  },
  2418: {
    java: {
      sorting: "",
    },
  },
  2419: {
    java: {
      brainteaser:
        "class Solution {\n    public int longestSubarray(int[] nums) {\n        int max = 0;\n        for (int num : nums) {\n            max = Math.max(max, num);\n        }\n\n        int maxLength = 0;\n        int currentLength = 0;\n        for (int num : nums) {\n            if (num == max) {\n                currentLength++;\n                maxLength = Math.max(maxLength, currentLength);\n            } else {\n                currentLength = 0;\n            }\n        }\n        return maxLength;\n    }\n}\n",
    },
  },
  2420: {
    java: {
      "prefix-sum": "",
    },
  },
  2421: {
    java: {
      "union-find": "",
    },
  },
  2422: {
    java: {
      "two-pointers": "",
    },
  },
  2423: {
    java: {
      counting: "",
    },
  },
  2424: {
    java: {
      "union-find": "",
    },
  },
  2425: {
    java: {
      brainteaser: "",
    },
  },
  2426: {
    java: {
      "merge-sort":
        "import java.util.*;\n\nclass Solution {\n    public long numberOfPairs(int[] nums1, int[] nums2, int diff) {\n        int n = nums1.length;\n        int[] A = new int[n];\n        \n        for (int i = 0; i < n; ++i) {\n            A[i] = nums1[i] - nums2[i];\n        }\n        \n        long[] ans = {0}; \n        mergeSort(A, 0, n - 1, diff, ans);\n        \n        return ans[0];\n    }\n\n    private void mergeSort(int[] A, int left, int right, int diff, long[] ans) {\n        if (left >= right) {\n            return;\n        }\n        \n        int m = (left + right) / 2;\n        mergeSort(A, left, m, diff, ans);\n        mergeSort(A, m + 1, right, diff, ans);\n        merge(A, left, m, right, diff, ans);\n    }\n\n    private void merge(int[] A, int left, int m, int right, int diff, long[] ans) {\n        int lo = m + 1;\n        int hi = m + 1; \n        for (int i = left; i <= m; ++i) {\n            while (hi <= right && A[i] > A[hi] + diff) {\n                ++hi;\n            }\n            ans[0] += right - hi + 1;\n        }\n        \n        int[] sorted = new int[right - left + 1];\n        int k = 0; // Index for sorted array\n        int i = left; // Index for left subarray\n        int j = m + 1; // Index for right subarray\n        \n        while (i <= m && j <= right) {\n            if (A[i] <= A[j]) {\n                sorted[k++] = A[i++];\n            } else {\n                sorted[k++] = A[j++];\n            }\n        }\n        \n        while (i <= m) {\n            sorted[k++] = A[i++];\n        }\n        \n        while (j <= right) {\n            sorted[k++] = A[j++];\n        }\n        \n        System.arraycopy(sorted, 0, A, left, sorted.length);\n    }\n}\n",
    },
  },
  2427: {
    java: {
      "number-theory": "",
    },
  },
  2428: {
    java: {
      matrix: "",
    },
  },
  2429: {
    java: {
      "bit-manipulation": "",
    },
  },
  2430: {
    java: {
      "dynamic-programming": "",
    },
  },
  2431: {
    java: {
      "dynamic-programming": "",
    },
  },
  2433: {
    java: {
      "bit-manipulation": "",
    },
  },
  2434: {
    java: {
      stack: "",
    },
  },
  2435: {
    java: {
      matrix: "",
    },
  },
  2436: {
    java: {
      "dynamic-programming": "",
    },
  },
  2437: {
    java: {
      enumeration: "",
    },
  },
  2438: {
    java: {
      "prefix-sum": "",
    },
  },
  2439: {
    java: {
      "prefix-sum": "",
    },
  },
  2440: {
    java: {
      tree: "",
    },
  },
  2441: {
    java: {
      "two-pointers": "",
    },
  },
  2442: {
    java: {
      math: "",
    },
  },
  2443: {
    java: {
      enumeration: "",
    },
  },
  2444: {
    java: {
      "monotonic-queue":
        "class Solution {\n    public long countSubarrays(int[] nums, int minK, int maxK) {\n        long ans = 0;\n        int j1 = -1, j2 = -1, k = -1;\n        for (int i = 0; i < nums.length; ++i) {\n            if (nums[i] < minK || nums[i] > maxK) {\n                k = i;\n            }\n            if (nums[i] == minK) {\n                j1 = i;\n            }\n            if (nums[i] == maxK) {\n                j2 = i;\n            }\n            ans += Math.max(0, Math.min(j1, j2) - k);\n        }\n        return ans;\n    }\n}",
    },
  },
  2445: {
    java: {
      tree: "",
    },
  },
  2446: {
    java: {
      string: "",
    },
  },
  2447: {
    java: {
      "number-theory": "",
    },
  },
  2448: {
    java: {
      "prefix-sum": "",
    },
  },
  2449: {
    java: {
      greedy: "",
    },
  },
  2450: {
    java: {
      math: "",
    },
  },
  2451: {
    java: {
      "hash-table": "",
    },
  },
  2452: {
    java: {
      string: "",
    },
  },
  2453: {
    java: {
      counting: "",
    },
  },
  2454: {
    java: {
      "monotonic-stack":
        "class Solution {\n    public int[] secondGreaterElement(int[] nums) {\n        int[] ans = new int[nums.length];\n        Arrays.fill(ans, -1);\n        // a decreasing stack that stores indices that met the first greater number\n        Deque<Integer> prevStack = new ArrayDeque<>();\n        // a decreasing stack that stores indices\n        Deque<Integer> currStack = new ArrayDeque<>();\n\n        for (int i = 0; i < nums.length; ++i) {\n            while (!prevStack.isEmpty() && nums[prevStack.peek()] < nums[i])\n                ans[prevStack.poll()] = nums[i];\n            Deque<Integer> decreasingIndices = new ArrayDeque<>();\n            while (!currStack.isEmpty() && nums[currStack.peek()] < nums[i])\n                decreasingIndices.push(currStack.poll());\n            while (!decreasingIndices.isEmpty())\n                prevStack.push(decreasingIndices.poll());\n            currStack.push(i);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2455: {
    java: {
      math: "",
    },
  },
  2456: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2457: {
    java: {
      greedy: "",
    },
  },
  2458: {
    java: {
      tree: "",
    },
  },
  2459: {
    java: {
      greedy: "",
    },
  },
  2460: {
    java: {
      "two-pointers": "",
    },
  },
  2461: {
    java: {
      "sliding-window":
        "class Solution {\n  public long maximumSubarraySum(int[] nums, int k) {\n    long ans = 0;\n    long sum = 0;\n    int distinct = 0;\n    Map<Integer, Integer> count = new HashMap<>();\n\n    for (int i = 0; i < nums.length; ++i) {\n      sum += nums[i];\n      if (count.merge(nums[i], 1, Integer::sum) == 1)\n        ++distinct;\n      if (i >= k) {\n        if (count.merge(nums[i - k], -1, Integer::sum) == 0)\n          --distinct;\n        sum -= nums[i - k];\n      }\n      if (i >= k - 1 && distinct == k)\n        ans = Math.max(ans, sum);\n    }\n\n    return ans;\n  }\n}",
    },
  },
  2462: {
    java: {
      "two-pointers": "",
    },
  },
  2463: {
    java: {
      "dynamic-programming": "",
    },
  },
  2464: {
    java: {
      "dynamic-programming": "",
    },
  },
  2465: {
    java: {
      "two-pointers": "",
    },
  },
  2466: {
    java: {
      "dynamic-programming": "",
    },
  },
  2467: {
    java: {
      tree: "",
    },
  },
  2468: {
    java: {
      string: "",
    },
  },
  2469: {
    java: {
      math: "",
    },
  },
  2470: {
    java: {
      "number-theory": "",
    },
  },
  2471: {
    java: {
      tree: "",
    },
  },
  2472: {
    java: {
      "dynamic-programming": "",
    },
  },
  2473: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2474: {
    java: {
      database: "",
    },
  },
  2475: {
    java: {
      sorting: "",
    },
  },
  2476: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private List<Integer> nums = new ArrayList<>();\n\n    public List<List<Integer>> closestNodes(TreeNode root, List<Integer> queries) {\n        inorder(root);\n        List<List<Integer>> ans = new ArrayList<>();\n        for (int x : queries) {\n            int i = Collections.binarySearch(nums, x + 1);\n            int j = Collections.binarySearch(nums, x);\n            i = i < 0 ? -i - 2 : i - 1;\n            j = j < 0 ? -j - 1 : j;\n            int mi = i >= 0 && i < nums.size() ? nums.get(i) : -1;\n            int mx = j >= 0 && j < nums.size() ? nums.get(j) : -1;\n            ans.add(List.of(mi, mx));\n        }\n        return ans;\n    }\n\n    private void inorder(TreeNode root) {\n        if (root == null) {\n            return;\n        }\n        inorder(root.left);\n        nums.add(root.val);\n        inorder(root.right);\n    }\n}\n",
    },
  },
  2477: {
    java: {
      tree: "",
    },
  },
  2478: {
    java: {
      "dynamic-programming": "",
    },
  },
  2479: {
    java: {
      tree: "",
    },
  },
  2480: {
    java: {
      database: "",
    },
  },
  2481: {
    java: {
      geometry: "",
    },
  },
  2482: {
    java: {
      matrix: "",
    },
  },
  2483: {
    java: {
      "prefix-sum": "",
    },
  },
  2484: {
    java: {
      "dynamic-programming": "",
    },
  },
  2485: {
    java: {
      "prefix-sum": "",
    },
  },
  2486: {
    java: {
      "two-pointers": "",
    },
  },
  2487: {
    java: {
      "monotonic-stack": "",
    },
  },
  2488: {
    java: {
      "prefix-sum": "",
    },
  },
  2489: {
    java: {
      "prefix-sum": "",
    },
  },
  2490: {
    java: {
      string: "",
    },
  },
  2491: {
    java: {
      "two-pointers": "",
    },
  },
  2492: {
    java: {
      "union-find": "",
    },
  },
  2493: {
    java: {
      "union-find": "",
    },
  },
  2494: {
    java: {
      database: "",
    },
  },
  2495: {
    java: {
      "dynamic-programming": "",
    },
  },
  2496: {
    java: {
      string: "",
    },
  },
  2497: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2498: {
    java: {
      greedy: "",
    },
  },
  2499: {
    java: {
      counting: "",
    },
  },
  2500: {
    java: {
      matrix: "",
    },
  },
  2501: {
    java: {
      "dynamic-programming": "",
    },
  },
  2502: {
    java: {
      design: "",
    },
  },
  2503: {
    java: {
      "union-find": "",
    },
  },
  2504: {
    java: {
      database: "",
    },
  },
  2505: {
    java: {
      brainteaser: "",
    },
  },
  2506: {
    java: {
      "bit-manipulation": "",
    },
  },
  2507: {
    java: {
      "number-theory": "",
    },
  },
  2508: {
    java: {
      graph: "",
    },
  },
  2509: {
    java: {
      tree: "",
    },
  },
  2510: {
    java: {
      matrix: "",
    },
  },
  2511: {
    java: {
      "two-pointers": "",
    },
  },
  2512: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2513: {
    java: {
      "number-theory": "",
    },
  },
  2514: {
    java: {
      combinatorics: "",
    },
  },
  2515: {
    java: {
      string: "",
    },
  },
  2516: {
    java: {
      "sliding-window":
        "class Solution {\n    public int takeCharacters(String s, int k) {\n      int n = s.length();\n        int ans = n;\n        int[] count = new int[3];\n\n        for (final char c : s.toCharArray())\n            ++count[c - 'a'];\n\n        if (count[0] < k || count[1] < k || count[2] < k)\n            return -1;\n\n        for (int left = 0, right = 0; right < n; ++right) {\n            --count[s.charAt(right) - 'a'];\n            while (count[s.charAt(right) - 'a'] < k)\n                ++count[s.charAt(left++) - 'a'];\n            ans = Math.min(ans, n - (right - left + 1));\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2517: {
    java: {
      greedy: "",
    },
  },
  2518: {
    java: {
      "dynamic-programming": "",
    },
  },
  2519: {
    java: {
      "merge-sort":
        "class FenwickTree {\n  public FenwickTree(int n) {\n    sums = new int[n + 1];\n  }\n\n  public void add(int i, int delta) {\n    while (i < sums.length) {\n      sums[i] += delta;\n      i += lowbit(i);\n    }\n  }\n\n  public int get(int i) {\n    int sum = 0;\n    while (i > 0) {\n      sum += sums[i];\n      i -= lowbit(i);\n    }\n    return sum;\n  }\n\n  private int[] sums;\n\n  private static int lowbit(int i) {\n    return i & -i;\n  }\n}\n\nclass Solution {\n  public int kBigIndices(int[] nums, int k) {\n  int n = nums.length;\n    int ans = 0;\n    FenwickTree leftTree = new FenwickTree(n);\n    FenwickTree rightTree = new FenwickTree(n);\n    int[] left = new int[n];\n    int[] right = new int[n];\n\n    for (int i = 0; i < n; ++i) {\n      left[i] = leftTree.get(nums[i] - 1);\n      leftTree.add(nums[i], 1);\n    }\n\n    for (int i = n - 1; i >= 0; --i) {\n      right[i] = rightTree.get(nums[i] - 1);\n      rightTree.add(nums[i], 1);\n    }\n\n    for (int i = 0; i < n; ++i)\n      if (left[i] >= k && right[i] >= k)\n        ++ans;\n\n    return ans;\n  }\n}",
    },
  },
  2520: {
    java: {
      math: "",
    },
  },
  2521: {
    java: {
      "number-theory": "",
    },
  },
  2522: {
    java: {
      "dynamic-programming": "",
    },
  },
  2523: {
    java: {
      "number-theory": "",
    },
  },
  2524: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maxFrequencyScore(int[] nums, int k) {\n      int mod = (int) 1e9 + 7;\n        Map<Integer, Integer> count = new HashMap<>();\n        for (int i = 0; i < k; ++i) {\n            count.put(nums[i], count.getOrDefault(nums[i], 0) + 1);\n        }\n        long curr = 0;\n        for (var e : count.entrySet()) {\n            curr = (curr + qmi(e.getKey(), e.getValue(), mod)) % mod;\n        }\n        long ans = curr;\n        for (int i = k; i < nums.length; ++i) {\n            int a = nums[i - k];\n            int b = nums[i];\n            if (a != b) {\n                if (count.getOrDefault(b, 0) > 0) {\n                    curr += (b - 1) * qmi(b, count.get(b), mod) % mod;\n                } else {\n                    curr += b;\n                }\n                if (count.getOrDefault(a, 0) > 1) {\n                    curr -= (a - 1) * qmi(a, count.get(a) - 1, mod) % mod;\n                } else {\n                    curr -= a;\n                }\n                curr = (curr + mod) % mod;\n                count.put(b, count.getOrDefault(b, 0) + 1);\n                count.put(a, count.getOrDefault(a, 0) - 1);\n                ans = Math.max(ans, curr);\n            }\n        }\n        return (int) ans;\n    }\n\n    long qmi(long a, long k, long p) {\n        long res = 1;\n        while (k != 0) {\n            if ((k & 1) == 1) {\n                res = res * a % p;\n            }\n            k >>= 1;\n            a = a * a % p;\n        }\n        return res;\n    }\n}",
    },
  },
  2525: {
    java: {
      math: "",
    },
  },
  2526: {
    java: {
      queue: "",
    },
  },
  2527: {
    java: {
      "bit-manipulation": "",
    },
  },
  2528: {
    java: {
      "sliding-window":
        "class Solution {\n  public long maxPower(int[] stations, int right, int k) {\n    long left = Arrays.stream(stations).min().getAsInt();\n    long right = Arrays.stream(stations).asLongStream().sum() + k + 1;\n\n    while (left < right) {\n    long mid = (left + right) / 2;\n      if (check(stations.clone(), right, k, mid))\n        left = mid + 1;\n      else\n        right = mid;\n    }\n\n    return left - 1;\n  }\n\n  boolean check(int[] stations, int right, int additionalStations, long minPower) {\n  int n = stations.length;\n    long power = 0;\n\n    for (int i = 0; i < right; ++i)\n      power += stations[i];\n\n    for (int i = 0; i < n; ++i) {\n      if (i + right < n)\n        power += stations[i + right]; \n      if (power < minPower) {\n      long requiredPower = minPower - power;\n        if (requiredPower > additionalStations)\n          return false;\n        stations[Math.min(n - 1, i + right)] += requiredPower;\n        additionalStations -= requiredPower;\n        power += requiredPower;\n      }\n      if (i - right >= 0)\n        power -= stations[i - right];\n    }\n\n    return true;\n  }\n}",
    },
  },
  2529: {
    java: {
      counting: "",
    },
  },
  2530: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2531: {
    java: {
      counting: "",
    },
  },
  2532: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2533: {
    java: {
      "dynamic-programming": "",
    },
  },
  2534: {
    java: {
      queue: "",
    },
  },
  2535: {
    java: {
      math: "",
    },
  },
  2536: {
    java: {
      matrix: "",
    },
  },
  2537: {
    java: {
      "sliding-window":
        "import java.util.*;\n\nclass Solution {\n    public long countGood(int[] nums, int k) {\n        long ans = 0;\n        int pairs = 0;\n        Map<Integer, Integer> count = new HashMap<>();\n\n        for (int left = 0, right = 0; right < nums.length; ++right) {\n            pairs += count.getOrDefault(nums[right], 0);\n            count.put(nums[right], count.getOrDefault(nums[right], 0) + 1);\n            \n            while (pairs >= k) {\n                pairs -= count.get(nums[left]) - 1;\n                count.put(nums[left], count.get(nums[left]) - 1);\n                left++;\n            }\n            \n            ans += left;\n        }\n\n        return ans;\n    }\n}\n",
    },
  },
  2538: {
    java: {
      "dynamic-programming": "",
    },
  },
  2539: {
    java: {
      combinatorics: "",
    },
  },
  2540: {
    java: {
      "two-pointers": "",
    },
  },
  2541: {
    java: {
      greedy: "",
    },
  },
  2542: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2543: {
    java: {
      "number-theory": "",
    },
  },
  2544: {
    java: {
      math: "",
    },
  },
  2545: {
    java: {
      matrix: "",
    },
  },
  2546: {
    java: {
      "bit-manipulation": "",
    },
  },
  2547: {
    java: {
      "dynamic-programming": "",
    },
  },
  2548: {
    java: {
      greedy: "",
    },
  },
  2549: {
    java: {
      math: "",
    },
  },
  2550: {
    java: {
      recursion: "",
    },
  },
  2551: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2552: {
    java: {
      "prefix-sum": "",
    },
  },
  2554: {
    java: {
      greedy: "",
    },
  },
  2555: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maximizeWin(int[] prizePositions, int k) {\n        int ans = 0;\n        int[] dp = new int[prizePositions.length + 1];\n\n        for (int i = 0, j = 0; i < prizePositions.length; ++i) {\n            while (prizePositions[i] - prizePositions[j] > k)\n                ++j;\n          int covered = i - j + 1;\n            dp[i + 1] = Math.max(dp[i], covered);\n            ans = Math.max(ans, dp[j] + covered);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2556: {
    java: {
      matrix: "",
    },
  },
  2557: {
    java: {
      greedy: "",
    },
  },
  2558: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2559: {
    java: {
      "prefix-sum": "",
    },
  },
  2561: {
    java: {
      greedy: "",
    },
  },
  2562: {
    java: {
      "two-pointers": "",
    },
  },
  2563: {
    java: {
      "two-pointers": "",
    },
  },
  2564: {
    java: {
      "bit-manipulation": "",
    },
  },
  2565: {
    java: {
      "two-pointers": "",
    },
  },
  2566: {
    java: {
      greedy: "",
    },
  },
  2567: {
    java: {
      greedy: "",
    },
  },
  2568: {
    java: {
      brainteaser:
        "class Solution {\n    public int minImpossibleOR(int[] nums) {\n        int res = 1;\n        Set<Integer> seen = new HashSet<>();\n        for (int num : nums) {\n            seen.add(num);\n        }\n\n        while (seen.contains(res)) {\n            res <<= 1; // Move to the next power of 2\n        }\n        \n        return res;\n    }\n}\n",
    },
  },
  2569: {
    java: {
      "segment-tree": "",
    },
  },
  2570: {
    java: {
      "two-pointers": "",
    },
  },
  2571: {
    java: {
      "dynamic-programming": "",
    },
  },
  2572: {
    java: {
      "dynamic-programming": "",
    },
  },
  2573: {
    java: {
      "union-find": "",
    },
  },
  2574: {
    java: {
      "prefix-sum": "",
    },
  },
  2575: {
    java: {
      math: "",
    },
  },
  2576: {
    java: {
      "two-pointers": "",
    },
  },
  2577: {
    java: {
      matrix: "",
    },
  },
  2578: {
    java: {
      greedy: "",
    },
  },
  2579: {
    java: {
      math: "",
    },
  },
  2580: {
    java: {
      sorting: "",
    },
  },
  2581: {
    java: {
      "dynamic-programming": "",
    },
  },
  2582: {
    java: {
      math: "",
    },
  },
  2583: {
    java: {
      tree: "",
    },
  },
  2584: {
    java: {
      "number-theory": "",
    },
  },
  2585: {
    java: {
      "dynamic-programming": "",
    },
  },
  2586: {
    java: {
      string: "",
    },
  },
  2587: {
    java: {
      "prefix-sum": "",
    },
  },
  2588: {
    java: {
      "prefix-sum": "",
    },
  },
  2589: {
    java: {
      stack: "",
    },
  },
  2590: {
    java: {
      design: "",
    },
  },
  2591: {
    java: {
      greedy: "",
    },
  },
  2592: {
    java: {
      "two-pointers": "",
    },
  },
  2593: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2595: {
    java: {
      "bit-manipulation": "",
    },
  },
  2596: {
    java: {
      matrix: "",
    },
  },
  2597: {
    java: {
      "dynamic-programming": "",
    },
  },
  2598: {
    java: {
      greedy: "",
    },
  },
  2599: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2600: {
    java: {
      greedy: "",
    },
  },
  2601: {
    java: {
      "number-theory": "",
    },
  },
  2602: {
    java: {
      "prefix-sum": "",
    },
  },
  2603: {
    java: {
      "topological-sort": "",
    },
  },
  2604: {
    java: {
      "two-pointers": "",
    },
  },
  2605: {
    java: {
      enumeration: "",
    },
  },
  2606: {
    java: {
      "dynamic-programming": "",
    },
  },
  2607: {
    java: {
      "number-theory": "",
    },
  },
  2608: {
    java: {
      graph: "",
    },
  },
  2609: {
    java: {
      string: "",
    },
  },
  2610: {
    java: {
      "hash-table": "",
    },
  },
  2611: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2612: {
    java: {
      "ordered-set": "",
    },
  },
  2613: {
    java: {
      "ordered-set": "",
    },
  },
  2614: {
    java: {
      matrix: "",
    },
  },
  2615: {
    java: {
      "prefix-sum": "",
    },
  },
  2616: {
    java: {
      greedy: "",
    },
  },
  2617: {
    java: {
      "union-find": "",
    },
  },
  2638: {
    java: {
      "dynamic-programming": "",
    },
  },
  2639: {
    java: {
      matrix: "",
    },
  },
  2640: {
    java: {
      "prefix-sum": "",
    },
  },
  2641: {
    java: {
      tree: "",
    },
  },
  2642: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2643: {
    java: {
      matrix: "",
    },
  },
  2645: {
    java: {
      stack: "",
    },
  },
  2646: {
    java: {
      "dynamic-programming": "",
    },
  },
  2647: {
    java: {
      math: "",
    },
  },
  2651: {
    java: {
      math: "",
    },
  },
  2652: {
    java: {
      math: "",
    },
  },
  2653: {
    java: {
      "sliding-window":
        "class Solution {\n    public int[] getSubarrayBeauty(int[] nums, int k, int x) {\n        int[] ans = new int[nums.length - k + 1];\n        int[] count = new int[50];\n\n        for (int i = 0; i < nums.length; ++i) {\n            if (nums[i] < 0)\n                ++count[nums[i] + 50];\n            if (i - k >= 0 && nums[i - k] < 0)\n                --count[nums[i - k] + 50];\n            if (i + 1 >= k)\n                ans[i - k + 1] = getXthSmallestNum(count, x);\n        }\n\n        return ans;\n    }\n\n    private int getXthSmallestNum(int[] count, int x) {\n        int prefix = 0;\n        for (int i = 0; i < 50; ++i) {\n            prefix += count[i];\n            if (prefix >= x)\n                return i - 50;\n        }\n        return 0;\n    }\n}",
    },
  },
  2654: {
    java: {
      "number-theory": "",
    },
  },
  2655: {
    java: {
      sorting: "",
    },
  },
  2656: {
    java: {
      greedy: "",
    },
  },
  2657: {
    java: {
      "bit-manipulation": "",
    },
  },
  2658: {
    java: {
      "union-find": "",
    },
  },
  2659: {
    java: {
      "ordered-set": "",
    },
  },
  2661: {
    java: {
      matrix: "",
    },
  },
  2662: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2663: {
    java: {
      greedy: "",
    },
  },
  2664: {
    java: {
      matrix: "",
    },
  },
  2668: {
    java: {
      database: "",
    },
  },
  2669: {
    java: {
      database: "",
    },
  },
  2670: {
    java: {
      "hash-table": "",
    },
  },
  2671: {
    java: {
      design: "",
    },
  },
  2673: {
    java: {
      "dynamic-programming": "",
    },
  },
  2674: {
    java: {
      "two-pointers": "",
    },
  },
  2678: {
    java: {
      string: "",
    },
  },
  2679: {
    java: {
      matrix: "",
    },
  },
  2680: {
    java: {
      "prefix-sum": "",
    },
  },
  2681: {
    java: {
      "prefix-sum": "",
    },
  },
  2682: {
    java: {
      "hash-table": "",
    },
  },
  2683: {
    java: {
      "bit-manipulation": "",
    },
  },
  2684: {
    java: {
      matrix: "",
    },
  },
  2685: {
    java: {
      graph: "",
    },
  },
  2686: {
    java: {
      database: "",
    },
  },
  2687: {
    java: {
      database: "",
    },
  },
  2688: {
    java: {
      database: "",
    },
  },
  2689: {
    java: {
      tree: "",
    },
  },
  2696: {
    java: {
      stack: "",
    },
  },
  2697: {
    java: {
      "two-pointers": "",
    },
  },
  2698: {
    java: {
      backtracking: "",
    },
  },
  2699: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2701: {
    java: {
      database: "",
    },
  },
  2706: {
    java: {
      sorting: "",
    },
  },
  2707: {
    java: {
      "dynamic-programming": "",
    },
  },
  2708: {
    java: {
      "dynamic-programming": "",
    },
  },
  2709: {
    java: {
      "union-find": "",
    },
  },
  2710: {
    java: {
      string: "",
    },
  },
  2711: {
    java: {
      matrix: "",
    },
  },
  2712: {
    java: {
      "dynamic-programming": "",
    },
  },
  2713: {
    java: {
      matrix: "",
    },
  },
  2714: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2716: {
    java: {
      "hash-table": "",
    },
  },
  2718: {
    java: {
      "hash-table": "",
    },
  },
  2719: {
    java: {
      "dynamic-programming": "",
    },
  },
  2720: {
    java: {
      database: "",
    },
  },
  2728: {
    java: {
      interactive: "",
    },
  },
  2729: {
    java: {
      math: "",
    },
  },
  2730: {
    java: {
      "sliding-window":
        "class Solution {\n  public int longestSemiRepetitiveSubstring(String s) {\n    int ans = 1;\n    int prevStart = 0;\n    int start = 0;\n\n    for (int i = 1; i < s.length(); ++i) {\n      if (s.charAt(i) == s.charAt(i - 1)) {\n        if (prevStart > 0)\n          start = prevStart;\n        prevStart = i;\n      }\n      ans = Math.max(ans, i - start + 1);\n    }\n\n    return ans;\n  }\n}",
    },
  },
  2731: {
    java: {
      brainteaser: "",
    },
  },
  2732: {
    java: {
      matrix: "",
    },
  },
  2733: {
    java: {
      sorting: "",
    },
  },
  2734: {
    java: {
      greedy: "",
    },
  },
  2735: {
    java: {
      enumeration: "",
    },
  },
  2736: {
    java: {
      "monotonic-stack": "",
    },
  },
  2737: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2738: {
    java: {
      database: "",
    },
  },
  2739: {
    java: {
      math: "",
    },
  },
  2740: {
    java: {
      sorting: "",
    },
  },
  2741: {
    java: {
      "dynamic-programming": "",
    },
  },
  2742: {
    java: {
      "dynamic-programming": "",
    },
  },
  2743: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numberOfSpecialSubstrings(String s) {\n        int n = s.length();\n        int ans = 0;\n        int[] count = new int[26];\n        for (int i = 0, j = 0; i < n; ++i) {\n            int k = s.charAt(i) - 'a';\n            ++count[k];\n            while (count[k] > 1) {\n                --count[s.charAt(j++) - 'a'];\n            }\n            ans += i - j + 1;\n        }\n        return ans;\n    }\n}",
    },
  },
  2744: {
    java: {
      "hash-table": "",
    },
  },
  2745: {
    java: {
      brainteaser:
        "class Solution {\n    public int longestString(int x, int y, int z) {\n        int min = Math.min(x, y);\n        if (x == y)\n            return (min * 2 + z) * 2;\n        return (min * 2 + 1 + z) * 2;\n    }\n}",
    },
  },
  2746: {
    java: {
      "dynamic-programming": "",
    },
  },
  2747: {
    java: {
      "sliding-window":
        "class Solution {\n    private class Query {\n        public int query;\n        public int index;\n        public Query(int q, int index) {\n            this.query = q;\n            this.index = index;\n        }\n    }\n\n    public int[] countServers(int n, int[][] logs, int x, int[] queries) {\n        Arrays.sort(logs, (int[] a, int[] b) -> Integer.compare(a[1], b[1]));\n        List<Query> queryList = new ArrayList<>();\n        for (int i = 0; i < queries.length; ++i) {\n            queryList.add(new Query(queries[i], i));\n        }\n        Collections.sort(queryList, (a, b) -> Integer.compare(a.query, b.query));\n\n        int[] ans = new int[queries.length];\n        Map<Integer, Integer> countMap = new HashMap<>();\n        int left = 0;\n        int right = 0;\n        for (int i = 0; i < queryList.size(); ++i) {\n            Query q = queryList.get(i);\n            while (right < logs.length && logs[right][1] <= q.query) {\n                countMap.put(logs[right][0], countMap.getOrDefault(logs[right][0], 0) + 1);\n                ++right;\n            }\n\n            while (left < logs.length && logs[left][1] < q.query - x) {\n                int newCount = countMap.get(logs[left][0]) - 1;\n                if (newCount == 0) {\n                    countMap.remove(logs[left][0]);\n                } else {\n                    countMap.put(logs[left][0], newCount);\n                }\n                ++left;\n            }\n            ans[q.index] = n - countMap.size();\n        }\n        return ans;\n    }\n}",
    },
  },
  2748: {
    java: {
      "number-theory": "",
    },
  },
  2749: {
    java: {
      brainteaser: "",
    },
  },
  2750: {
    java: {
      "dynamic-programming": "",
    },
  },
  2751: {
    java: {
      stack:
        "class Robot {\n    public int index;\n    public int position;\n    public int health;\n    public char direction;\n\n    public Robot(int index, int position, int health, char direction) {\n        this.index = index;\n        this.position = position;\n        this.health = health;\n        this.direction = direction;\n    }\n}\n\nclass Solution {\n    public List<Integer> survivedRobotsHealths(int[] positions, int[] healths,\n            String directions) {\n        List<Integer> ans = new ArrayList<>();\n        Robot[] robots = new Robot[positions.length];\n        List<Robot> stack = new ArrayList<>();\n        for (int i = 0; i < positions.length; ++i)\n            robots[i] = new Robot(i, positions[i], healths[i], directions.charAt(i));\n\n        Arrays.sort(robots, (a, b) -> a.position - b.position);\n\n        for (Robot robot : robots) {\n            if (robot.direction == 'R') {\n                stack.add(robot);\n                continue;\n            }\n            while (!stack.isEmpty() && stack.get(stack.size() - 1).direction == 'R'\n                    && robot.health > 0) {\n                if (stack.get(stack.size() - 1).health == robot.health) {\n                    stack.remove(stack.size() - 1);\n                    robot.health = 0;\n                } else if (stack.get(stack.size() - 1).health < robot.health) {\n                    stack.remove(stack.size() - 1);\n                    robot.health -= 1;\n                } else {\n                    stack.get(stack.size() - 1).health -= 1;\n                    robot.health = 0;\n                }\n            }\n            if (robot.health > 0)\n                stack.add(robot);\n        }\n\n        stack.sort((a, b) -> a.index - b.index);\n\n        for (Robot robot : stack)\n            ans.add(robot.health);\n\n        return ans;\n    }\n}",
    },
  },
  2752: {
    java: {
      database: "",
    },
  },
  2760: {
    java: {
      "sliding-window":
        "class Solution {\n    public int longestAlternatingSubarray(int[] nums, int threshold) {\n        int ans = 0;\n        int dp = 0;\n\n        for (int i = 0; i < nums.length; ++i) {\n            if (nums[i] > threshold)\n                dp = 0;\n            else if (i > 0 && dp > 0 && isOddEven(nums[i - 1], nums[i]))\n                ++dp;\n            else\n                dp = nums[i] % 2 == 0 ? 1 : 0;\n            ans = Math.max(ans, dp);\n        }\n\n        return ans;\n    }\n\n    private boolean isOddEven(int a, int b) {\n        return a % 2 != b % 2;\n    }\n}",
    },
  },
  2761: {
    java: {
      "number-theory": "",
    },
  },
  2762: {
    java: {
      "monotonic-queue":
        "import java.util.Deque;\nimport java.util.LinkedList;\n\nclass Solution {\n    public long continuousSubarrays(int[] nums) {\n        long count = 0;\n        int left = 0;\n        Deque<Integer> maxDeque = new LinkedList<>();\n        Deque<Integer> minDeque = new LinkedList<>();\n\n        for (int right = 0; right < nums.length; right++) {\n            while (!maxDeque.isEmpty() && nums[maxDeque.peekLast()] <= nums[right]) {\n                maxDeque.pollLast();\n            }\n            maxDeque.offerLast(right);\n\n            while (!minDeque.isEmpty() && nums[minDeque.peekLast()] >= nums[right]) {\n                minDeque.pollLast();\n            }\n            minDeque.offerLast(right);\n\n            while (nums[maxDeque.peekFirst()] - nums[minDeque.peekFirst()] > 2) {\n                left++;\n                if (maxDeque.peekFirst() < left) {\n                    maxDeque.pollFirst();\n                }\n                if (minDeque.peekFirst() < left) {\n                    minDeque.pollFirst();\n                }\n            }\n\n            count += right - left + 1;\n        }\n\n        return count;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums1 = {5, 4, 2, 4};\n        System.out.println(solution.continuousSubarrays(nums1)); \n\n        int[] nums2 = {1, 2, 3};\n        System.out.println(solution.continuousSubarrays(nums2));\n    }\n}\n",
    },
  },
  2763: {
    java: {
      "ordered-set": "",
    },
  },
  2764: {
    java: {
      stack: "",
    },
  },
  2765: {
    java: {
      enumeration: "",
    },
  },
  2766: {
    java: {
      sorting: "",
    },
  },
  2767: {
    java: {
      "dynamic-programming": "",
    },
  },
  2768: {
    java: {
      enumeration: "",
    },
  },
  2769: {
    java: {
      math: "",
    },
  },
  2770: {
    java: {
      "dynamic-programming": "",
    },
  },
  2771: {
    java: {
      "dynamic-programming": "",
    },
  },
  2772: {
    java: {
      "prefix-sum": "",
    },
  },
  2773: {
    java: {
      tree: "",
    },
  },
  2778: {
    java: {
      enumeration: "",
    },
  },
  2779: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maximumBeauty(int[] nums, int k) {\n        int ans = 0;\n\n        Arrays.sort(nums);\n\n        for (int left = 0, right = 0; right < nums.length; ++right) {\n            while (nums[right] - nums[left] > 2 * k)\n                ++left;\n            ans = Math.max(ans, right - left + 1);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2780: {
    java: {
      sorting: "",
    },
  },
  2781: {
    java: {
      "sliding-window":
        "class Solution {\n    public int longestValidSubstring(String word, List<String> forbidden) {\n        int ans = 0;\n        Set<String> forbiddenSet = new HashSet<>(forbidden);\n\n        int right = word.length() - 1;\n        for (int left = word.length() - 1; left >= 0; --left) {\n            for (int end = left; end < Math.min(left + 10, right + 1); ++end)\n                if (forbiddenSet.contains(word.substring(left, end + 1))) {\n                    right = end - 1;\n                    break;\n                }\n            ans = Math.max(ans, right - left + 1);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2782: {
    java: {
      "union-find": "",
    },
  },
  2783: {
    java: {
      database: "",
    },
  },
  2784: {
    java: {
      sorting: "",
    },
  },
  2785: {
    java: {
      sorting: "",
    },
  },
  2786: {
    java: {
      "dynamic-programming": "",
    },
  },
  2787: {
    java: {
      "dynamic-programming": "",
    },
  },
  2788: {
    java: {
      string: "",
    },
  },
  2789: {
    java: {
      greedy: "",
    },
  },
  2790: {
    java: {
      greedy: "",
    },
  },
  2791: {
    java: {
      "dynamic-programming": "",
    },
  },
  2792: {
    java: {
      tree: "",
    },
  },
  2799: {
    java: {
      "sliding-window":
        "import java.util.HashSet;\nimport java.util.HashMap;\nimport java.util.Set;\n\nclass Solution {\n    public int countCompleteSubarrays(int[] nums) {\n        Set<Integer> uniqueElements = new HashSet<>();\n        for (int num : nums) {\n            uniqueElements.add(num);\n        }\n        int uniqueCount = uniqueElements.size();\n        int result = 0;\n        HashMap<Integer, Integer> windowCounts = new HashMap<>();\n        int left = 0;\n        \n        for (int right = 0; right < nums.length; right++) {\n            windowCounts.put(nums[right], windowCounts.getOrDefault(nums[right], 0) + 1);\n            \n            while (windowCounts.size() == uniqueCount) {\n                result += nums.length - right;\n                int leftNum = nums[left];\n                windowCounts.put(leftNum, windowCounts.get(leftNum) - 1);\n                if (windowCounts.get(leftNum) == 0) {\n                    windowCounts.remove(leftNum);\n                }\n                left++;\n            }\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  2800: {
    java: {
      enumeration: "",
    },
  },
  2801: {
    java: {
      "dynamic-programming": "",
    },
  },
  2802: {
    java: {
      "bit-manipulation": "",
    },
  },
  2806: {
    java: {
      math: "",
    },
  },
  2807: {
    java: {
      "number-theory": "",
    },
  },
  2808: {
    java: {
      "hash-table": "",
    },
  },
  2809: {
    java: {
      "dynamic-programming": "",
    },
  },
  2810: {
    java: {
      string: "",
    },
  },
  2811: {
    java: {
      "dynamic-programming": "",
    },
  },
  2812: {
    java: {
      "union-find": "",
    },
  },
  2813: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2814: {
    java: {
      matrix: "",
    },
  },
  2815: {
    java: {
      "hash-table": "",
    },
  },
  2816: {
    java: {
      stack: "",
    },
  },
  2817: {
    java: {
      "ordered-set": "",
    },
  },
  2818: {
    java: {
      "monotonic-stack": "",
    },
  },
  2819: {
    java: {
      "prefix-sum": "",
    },
  },
  2824: {
    java: {
      "two-pointers": "",
    },
  },
  2825: {
    java: {
      "two-pointers": "",
    },
  },
  2826: {
    java: {
      "dynamic-programming": "",
    },
  },
  2827: {
    java: {
      "dynamic-programming": "",
    },
  },
  2828: {
    java: {
      string: "",
    },
  },
  2829: {
    java: {
      greedy: "",
    },
  },
  2830: {
    java: {
      "dynamic-programming": "",
    },
  },
  2831: {
    java: {
      "sliding-window":
        "class Solution {\n  public int longestEqualSubarray(List<Integer> nums, int k) {\n    int ans = 0;\n    Map<Integer, Integer> count = new HashMap<>();\n\n    for (int left = 0, right = 0; right < nums.size(); ++right) {\n      ans = Math.max(ans, count.merge(nums.get(right), 1, Integer::sum));\n      while (right - left + 1 - k > ans)\n        count.merge(nums.get(left++), -1, Integer::sum);\n    }\n\n    return ans;\n  }\n}",
    },
  },
  2832: {
    java: {
      "monotonic-stack": "",
    },
  },
  2833: {
    java: {
      counting: "",
    },
  },
  2834: {
    java: {
      greedy: "",
    },
  },
  2835: {
    java: {
      "bit-manipulation": "",
    },
  },
  2836: {
    java: {
      "dynamic-programming": "",
    },
  },
  2837: {
    java: {
      database: "",
    },
  },
  2838: {
    java: {
      "two-pointers": "",
    },
  },
  2839: {
    java: {
      string: "",
    },
  },
  2840: {
    java: {
      sorting: "",
    },
  },
  2841: {
    java: {
      "sliding-window":
        "public class Solution {\n    public long maxSum(List<Integer> nums, int m, int k) {\n        long ans = 0;\n        long sum = 0;\n        Map<Integer, Integer> count = new HashMap<>();\n\n        for (int i = 0; i < nums.size(); ++i) {\n            sum += nums.get(i);\n            count.merge(nums.get(i), 1, Integer::sum);\n            if (i >= k) {\n              int numToRemove = nums.get(i - k);\n                sum -= numToRemove;\n                count.merge(numToRemove, -1, Integer::sum);\n                if (count.get(numToRemove) == 0)\n                    count.remove(numToRemove);\n            }\n            if (count.size() >= m)\n                ans = Math.max(ans, sum);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2842: {
    java: {
      combinatorics: "",
    },
  },
  2843: {
    java: {
      enumeration: "",
    },
  },
  2844: {
    java: {
      enumeration: "",
    },
  },
  2845: {
    java: {
      "prefix-sum": "",
    },
  },
  2846: {
    java: {
      "strongly-connected-component":
        "class Solution {\n  public int[] minOperationsQueries(int n, int[][] edges, int[][] queries) {\n  int kMax = 26;\n  int m = (int) (Math.log(n) / Math.log(2)) + 1;\n    int[] ans = new int[queries.length];\n    List<Pair<Integer, Integer>>[] graph = new List[n];\n    int[][] jump = new int[n][m];\n    int[][] count = new int[n][];\n    int[] depth = new int[n];\n\n    for (int i = 0; i < n; ++i)\n      graph[i] = new ArrayList<>();\n\n    for (int[] edge : edges) {\n    int u = edge[0];\n    int v = edge[1];\n    int w = edge[2];\n      graph[u].add(new Pair<>(v, w));\n      graph[v].add(new Pair<>(u, w));\n    }\n\n    count[0] = new int[kMax + 1];\n    dfs(graph, 0, -1, 0, jump, count, depth);\n\n    for (int j = 1; j < m; ++j)\n      for (int i = 0; i < n; ++i)\n        jump[i][j] = jump[jump[i][j - 1]][j - 1];\n\n    for (int i = 0; i < queries.length; ++i) {\n    int u = queries[i][0];\n    int v = queries[i][1];\n    int lca = getLCA(u, v, jump, depth);\n    int numEdges = depth[u] + depth[v] - 2 * depth[lca];\n      int maxFreq = 0;\n      for (int j = 1; j <= kMax; ++j)\n        maxFreq = Math.max(maxFreq, count[u][j] + count[v][j] - 2 * count[lca][j]);\n      ans[i] = numEdges - maxFreq;\n    }\n\n    return ans;\n  }\n\n  private void dfs(List<Pair<Integer, Integer>>[] graph, int u, int prev, int d, int[][] jump,\n                   int[][] count, int[] depth) {\n    if (prev != -1)\n      jump[u][0] = prev;\n    depth[u] = d;\n    for (Pair<Integer, Integer> pair : graph[u]) {\n    int v = pair.getKey();\n    int w = pair.getValue();\n      if (v == prev)\n        continue;\n      count[v] = count[u].clone();\n      ++count[v][w];\n      dfs(graph, v, u, d + 1, jump, count, depth);\n    }\n  }\n\n  private int getLCA(int u, int v, int[][] jump, int[] depth) {\n    if (depth[u] > depth[v])\n      return getLCA(v, u, jump, depth);\n    for (int j = 0; j < jump[0].length; ++j)\n      if ((depth[v] - depth[u] >> j & 1) == 1)\n        v = jump[v][j];\n    if (u == v)\n      return u;\n    for (int j = jump[0].length - 1; j >= 0; --j)\n      if (jump[u][j] != jump[v][j]) {\n        u = jump[u][j];\n        v = jump[v][j];\n      }\n    return jump[v][0];\n  }\n}\n",
    },
  },
  2847: {
    java: {
      greedy: "",
    },
  },
  2848: {
    java: {
      "prefix-sum": "",
    },
  },
  2849: {
    java: {
      math: "",
    },
  },
  2850: {
    java: {
      matrix: "",
    },
  },
  2851: {
    java: {
      "dynamic-programming": "",
    },
  },
  2852: {
    java: {
      "union-find": "",
    },
  },
  2853: {
    java: {
      database: "",
    },
  },
  2854: {
    java: {
      database: "",
    },
  },
  2856: {
    java: {
      "two-pointers":
        "class Solution {\n    public int minLengthAfterRemovals(List<Integer> nums) {\n        Map<Integer, Integer> count = new HashMap<>();\n        for (int x : nums) {\n            count.merge(x, 1, Integer::sum);\n        }\n        PriorityQueue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());\n        for (int x : count.values()) {\n            pq.offer(x);\n        }\n        int ans = nums.size();\n        while (pq.size() > 1) {\n            int x = pq.poll();\n            int y = pq.poll();\n            x--;\n            y--;\n            if (x > 0) {\n                pq.offer(x);\n            }\n            if (y > 0) {\n                pq.offer(y);\n            }\n            ans -= 2;\n        }\n        return ans;\n    }\n}",
    },
  },
  2857: {
    java: {
      "bit-manipulation": "",
    },
  },
  2858: {
    java: {
      "dynamic-programming": "",
    },
  },
  2859: {
    java: {
      "bit-manipulation": "",
    },
  },
  2860: {
    java: {
      enumeration: "",
    },
  },
  2862: {
    java: {
      "number-theory": "",
    },
  },
  2863: {
    java: {
      sorting: "",
    },
  },
  2864: {
    java: {
      greedy: "",
    },
  },
  2865: {
    java: {
      "monotonic-stack":
        "import java.util.*;\n\nclass Solution {\n    public long maximumSumOfHeights(int[] heights) {\n        int n = heights.length;\n        long[] maxSum = new long[n];\n        Deque<Integer> stack = new ArrayDeque<>(Arrays.asList(-1));\n        long sum = 0;\n\n        for (int i = 0; i < n; ++i) {\n            sum = process(stack, heights, i, sum);\n            maxSum[i] = sum;\n        }\n\n        stack = new ArrayDeque<>(Arrays.asList(n));\n        sum = 0;\n\n        for (int i = n - 1; i >= 0; --i) {\n            sum = process(stack, heights, i, sum);\n            maxSum[i] += sum - heights[i];\n        }\n\n        return Arrays.stream(maxSum).max().getAsLong();\n    }\n\n    private long process(Deque<Integer> stack, int[] heights, int i, long sum) {\n        while (stack.size() > 1 && heights[stack.peek()] > heights[i]) {\n            int j = stack.pop();\n            sum -= Math.abs(j - stack.peek()) * (long) heights[j];\n        }\n        sum += Math.abs(i - stack.peek()) * (long) heights[i];\n        stack.push(i);\n        return sum;\n    }\n}\n",
    },
  },
  2866: {
    java: {
      "monotonic-stack": "",
    },
  },
  2867: {
    java: {
      "dynamic-programming": "",
    },
  },
  2868: {
    java: {
      "two-pointers": "",
    },
  },
  2869: {
    java: {
      "bit-manipulation": "",
    },
  },
  2870: {
    java: {
      counting: "",
    },
  },
  2871: {
    java: {
      "bit-manipulation": "",
    },
  },
  2872: {
    java: {
      tree: "",
    },
  },
  2875: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minSizeSubarray(int[] nums, int target) {\n      long sum = Arrays.stream(nums).asLongStream().sum();\n      int n = nums.length;\n      int remainingTarget = (int) (target % sum);\n      int repeatLength = (int) (target / sum) * n;\n        if (remainingTarget == 0)\n            return repeatLength;\n\n        int suffixPlusPrefixLength = n;\n        long prefix = 0;\n        HashMap<Long, Integer> prefixToIndex = new HashMap<>();\n        prefixToIndex.put(0L, -1);\n\n        for (int i = 0; i < 2 * n; ++i) {\n            prefix += nums[i % n];\n            if (prefixToIndex.containsKey(prefix - remainingTarget))\n                suffixPlusPrefixLength = Math.min(suffixPlusPrefixLength,\n                        i - prefixToIndex.get(prefix - remainingTarget));\n            prefixToIndex.put(prefix, i);\n        }\n\n        return suffixPlusPrefixLength == n ? -1 : repeatLength + suffixPlusPrefixLength;\n    }\n}",
    },
  },
  2876: {
    java: {
      "dynamic-programming": "",
    },
  },
  2892: {
    java: {
      "dynamic-programming": "",
    },
  },
  2893: {
    java: {
      database: "",
    },
  },
  2894: {
    java: {
      math: "",
    },
  },
  2895: {
    java: {
      greedy: "",
    },
  },
  2896: {
    java: {
      "dynamic-programming": "",
    },
  },
  2897: {
    java: {
      "bit-manipulation": "",
    },
  },
  2898: {
    java: {
      "hash-table": "",
    },
  },
  2900: {
    java: {
      "dynamic-programming": "",
    },
  },
  2901: {
    java: {
      "dynamic-programming": "",
    },
  },
  2902: {
    java: {
      "sliding-window":
        "class Solution {\n    public int countSubMultisets(List<Integer> nums, int left, int right) {\n        int kMod = 1_000_000_007;\n        // dp[i] := the number of submultisets of `nums` with sum i\n        long[] dp = new long[right + 1];\n        dp[0] = 1;\n        Map<Integer, Integer> count = new HashMap<>();\n\n        for (int num : nums)\n            count.merge(num, 1, Integer::sum);\n\n        int zeros = count.containsKey(0) ? count.remove(0) : 0;\n\n        for (Map.Entry<Integer, Integer> entry : count.entrySet()) {\n            int num = entry.getKey();\n            int freq = entry.getValue();\n            long[] stride = dp.clone();\n            for (int i = num; i <= right; ++i)\n                stride[i] += stride[i - num];\n            for (int i = right; i > 0; --i)\n                if (i >= num * (freq + 1))\n                    dp[i] = (stride[i] - stride[i - num * (freq + 1)]) % kMod;\n                else\n                    dp[i] = stride[i] % kMod;\n        }\n\n        long ans = 0;\n        for (int i = left; i <= right; ++i)\n            ans = (ans + dp[i]) % kMod;\n        return (int) (((zeros + 1) * ans) % kMod);\n    }\n}",
    },
  },
  2903: {
    java: {
      "two-pointers":
        "public class Solution {\n    public int[] findIndices(int[] nums, int indexDifference, int valueDifference) {\n        int n = nums.length;\n        \n        for (int i = 0; i < n; i++) {\n            for (int j = i + indexDifference; j < n; j++) {\n                if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) {\n                    return new int[]{i, j};\n                }\n            }\n        }\n        \n        return new int[]{-1, -1};\n    }\n}\n",
    },
  },
  2904: {
    java: {
      "sliding-window":
        "class Solution {\n    public String shortestBeautifulSubstring(String s, int k) {\n        int bestLeft = -1;\n        int minLength = s.length() + 1;\n        int ones = 0;\n\n        for (int left = 0, right = 0; right < s.length(); ++right) {\n            if (s.charAt(right) == '1')\n                ++ones;\n            while (ones == k) {\n                if (right - left + 1 < minLength) {\n                    bestLeft = left;\n                    minLength = right - left + 1;\n                } else if (right - left + 1 == minLength &&\n                        s.substring(left, left + minLength)\n                                .compareTo(s.substring(bestLeft, bestLeft + minLength)) < 0) {\n                    bestLeft = left;\n                }\n                if (s.charAt(left++) == '1')\n                    --ones;\n            }\n        }\n\n        return bestLeft == -1 ? \"\" : s.substring(bestLeft, bestLeft + minLength);\n    }\n}",
    },
  },
  2905: {
    java: {
      "two-pointers":
        "class Solution {\n    public int[] findIndices(int[] nums, int indexDifference, int valueDifference) {\n        int minIndex = 0;\n        int maxIndex = 0;\n\n        for (int i = indexDifference; i < nums.length; ++i) {\n            if (nums[i - indexDifference] < nums[minIndex])\n                minIndex = i - indexDifference;\n            if (nums[i - indexDifference] > nums[maxIndex])\n                maxIndex = i - indexDifference;\n            if (nums[i] - nums[minIndex] >= valueDifference)\n                return new int[] { i, minIndex };\n            if (nums[maxIndex] - nums[i] >= valueDifference)\n                return new int[] { i, maxIndex };\n        }\n\n        return new int[] { -1, -1 };\n    }\n}",
    },
  },
  2906: {
    java: {
      matrix: "",
    },
  },
  2910: {
    java: {
      greedy: "",
    },
  },
  2911: {
    java: {
      "two-pointers": "",
    },
  },
  2912: {
    java: {
      "dynamic-programming": "",
    },
  },
  2913: {
    java: {
      "hash-table": "",
    },
  },
  2914: {
    java: {
      string: "",
    },
  },
  2915: {
    java: {
      "dynamic-programming": "",
    },
  },
  2916: {
    java: {
      "dynamic-programming": "",
    },
  },
  2917: {
    java: {
      "bit-manipulation": "",
    },
  },
  2918: {
    java: {
      greedy: "",
    },
  },
  2919: {
    java: {
      "dynamic-programming": "",
    },
  },
  2920: {
    java: {
      "dynamic-programming": "",
    },
  },
  2922: {
    java: {
      database: "",
    },
  },
  2923: {
    java: {
      matrix: "",
    },
  },
  2924: {
    java: {
      graph: "",
    },
  },
  2925: {
    java: {
      "dynamic-programming": "",
    },
  },
  2926: {
    java: {
      "dynamic-programming": "",
    },
  },
  2927: {
    java: {
      combinatorics: "",
    },
  },
  2928: {
    java: {
      combinatorics: "",
    },
  },
  2929: {
    java: {
      combinatorics: "",
    },
  },
  2930: {
    java: {
      "dynamic-programming": "",
    },
  },
  2931: {
    java: {
      matrix: "",
    },
  },
  2932: {
    java: {
      "sliding-window":
        "class TrieNode {\n    public TrieNode[] children = new TrieNode[2];\n    public int min = Integer.MAX_VALUE;\n    public int max = Integer.MIN_VALUE;\n}\n\nclass BitTrie {\n    public BitTrie(int maxBit) {\n        this.maxBit = maxBit;\n    }\n\n    public void insert(int num) {\n        TrieNode node = root;\n        for (int i = maxBit; i >= 0; --i) {\n            int bit = (int) (num >> i & 1);\n            if (node.children[bit] == null)\n                node.children[bit] = new TrieNode();\n            node = node.children[bit];\n            node.min = Math.min(node.min, num);\n            node.max = Math.max(node.max, num);\n        }\n    }\n\n    public int getMaxXor(int x) {\n        int maxXor = 0;\n        TrieNode node = root;\n        for (int i = maxBit; i >= 0; --i) {\n            int bit = (int) (x >> i & 1);\n            int toggleBit = bit ^ 1;\n            if (node.children[toggleBit] != null && node.children[toggleBit].max > x &&\n                    node.children[toggleBit].min <= 2 * x) {\n                maxXor = maxXor | 1 << i;\n                node = node.children[toggleBit];\n            } else if (node.children[bit] != null) {\n                node = node.children[bit];\n            } else {\n                return 0;\n            }\n        }\n        return maxXor;\n    }\n\n    private int maxBit;\n    private TrieNode root = new TrieNode();\n}\n\nclass Solution {\n    public int maximumStrongPairXor(int[] nums) {\n        int maxNum = Arrays.stream(nums).max().getAsInt();\n        int maxBit = (int) (Math.log(maxNum) / Math.log(2));\n        int ans = 0;\n        BitTrie bitTrie = new BitTrie(maxBit);\n\n        for (int num : nums)\n            bitTrie.insert(num);\n\n        for (int num : nums)\n            ans = Math.max(ans, bitTrie.getMaxXor(num));\n\n        return ans;\n    }\n}",
    },
  },
  2933: {
    java: {
      sorting: "",
    },
  },
  2934: {
    java: {
      enumeration: "",
    },
  },
  2935: {
    java: {
      "sliding-window":
        "class TrieNode {\n    public TrieNode[] children = new TrieNode[2];\n    public int min = Integer.MAX_VALUE;\n    public int max = Integer.MIN_VALUE;\n}\n\nclass BitTrie {\n    public BitTrie(int maxBit) {\n        this.maxBit = maxBit;\n    }\n\n    public void insert(int num) {\n        TrieNode node = root;\n        for (int i = maxBit; i >= 0; --i) {\n            int bit = (int) (num >> i & 1);\n            if (node.children[bit] == null)\n                node.children[bit] = new TrieNode();\n            node = node.children[bit];\n            node.min = Math.min(node.min, num);\n            node.max = Math.max(node.max, num);\n        }\n    }\n\n    public int getMaxXor(int x) {\n        int maxXor = 0;\n        TrieNode node = root;\n        for (int i = maxBit; i >= 0; --i) {\n            int bit = (int) (x >> i & 1);\n            int toggleBit = bit ^ 1;\n            if (node.children[toggleBit] != null && node.children[toggleBit].max > x &&\n                    node.children[toggleBit].min <= 2 * x) {\n                maxXor = maxXor | 1 << i;\n                node = node.children[toggleBit];\n            } else if (node.children[bit] != null) {\n                node = node.children[bit];\n            } else {\n                return 0;\n            }\n        }\n        return maxXor;\n    }\n\n    private int maxBit;\n    private TrieNode root = new TrieNode();\n}\n\nclass Solution {\n    public int maximumStrongPairXor(int[] nums) {\n        int maxNum = Arrays.stream(nums).max().getAsInt();\n        int maxBit = (int) (Math.log(maxNum) / Math.log(2));\n        int ans = 0;\n        BitTrie bitTrie = new BitTrie(maxBit);\n\n        for (int num : nums)\n            bitTrie.insert(num);\n\n        for (int num : nums)\n            ans = Math.max(ans, bitTrie.getMaxXor(num));\n\n        return ans;\n    }\n}",
    },
  },
  2936: {
    java: {
      interactive: "",
    },
  },
  2937: {
    java: {
      string: "",
    },
  },
  2938: {
    java: {
      "two-pointers": "",
    },
  },
  2939: {
    java: {
      "bit-manipulation": "",
    },
  },
  2940: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2941: {
    java: {
      "number-theory": "",
    },
  },
  2942: {
    java: {
      string: "",
    },
  },
  2943: {
    java: {
      sorting: "",
    },
  },
  2944: {
    java: {
      "monotonic-queue":
        "class Solution {\n    public int minimumCoins(int[] prices) {\n      int n = prices.length;\n        int ans = Integer.MAX_VALUE;\n\n        Deque<Pair<Integer, Integer>> deque = new ArrayDeque<>();\n        deque.offerFirst(new Pair<>(0, n));\n\n        for (int i = n - 1; i >= 0; --i) {\n            while (!deque.isEmpty() && deque.peekFirst().getValue() > (i + 1) * 2)\n                deque.pollFirst();\n            ans = prices[i] + deque.peekFirst().getKey();\n            while (!deque.isEmpty() && deque.peekLast().getKey() >= ans)\n                deque.pollLast();\n            deque.offerLast(new Pair<>(ans, i));\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2945: {
    java: {
      "monotonic-queue":
        "import java.util.Arrays;\n\nclass Solution {\n    public int findMaximumLength(int[] A) {\n        int n = A.length;\n        int[] pre = new int[n + 2], dp = new int[n + 1];\n        long[] acc = new long[n + 1];\n        for (int i = 1; i <= n; i++) {\n            acc[i] = acc[i - 1] + A[i - 1];\n        }\n        for (int i = 0, j = 1; j <= n; j++) {\n            i = Math.max(i, pre[j]);\n            dp[j] = dp[i] + 1;\n            int k = Arrays.binarySearch(acc, 2 * acc[j] - acc[i]);\n            if (k < 0) {\n                k = -k - 1;\n            }\n            pre[k] = j;\n        }\n        return dp[n];\n    }\n}\n",
    },
  },
  2946: {
    java: {
      matrix: "",
    },
  },
  2947: {
    java: {
      "prefix-sum": "",
    },
  },
  2948: {
    java: {
      "union-find": "",
    },
  },
  2949: {
    java: {
      "prefix-sum": "",
    },
  },
  2950: {
    java: {
      "prefix-sum": "",
    },
  },
  2951: {
    java: {
      enumeration: "",
    },
  },
  2952: {
    java: {
      greedy: "",
    },
  },
  2953: {
    java: {
      "sliding-window":
        "class Solution {\n    public int countCompleteSubstrings(String word, int k) {\n      int uniqueLetters = word.chars().boxed().collect(Collectors.toSet()).size();\n        int ans = 0;\n\n        for (int windowSize = k; windowSize <= k * uniqueLetters && windowSize <= word.length(); windowSize += k) {\n            ans += countCompleteStrings(word, k, windowSize);\n        }\n\n        return ans;\n    }\n\n    private int countCompleteStrings(final String word, int k, int windowSize) {\n        int res = 0;\n        int countLetters = 0;\n        int[] count = new int[26];\n\n        for (int i = 0; i < word.length(); ++i) {\n            ++count[word.charAt(i) - 'a'];\n            ++countLetters;\n            if (i > 0 && Math.abs(word.charAt(i) - word.charAt(i - 1)) > 2) {\n                count = new int[26];\n                ++count[word.charAt(i) - 'a'];\n                countLetters = 1;\n            }\n            if (countLetters == windowSize + 1) {\n                --count[word.charAt(i - windowSize) - 'a'];\n                --countLetters;\n            }\n            if (countLetters == windowSize)\n                res += Arrays.stream(count).allMatch(freq -> freq == 0 || freq == k) ? 1 : 0;\n        }\n\n        return res;\n    }\n}",
    },
  },
  2954: {
    java: {
      combinatorics: "",
    },
  },
  2955: {
    java: {
      "prefix-sum": "",
    },
  },
  2956: {
    java: {
      "hash-table": "",
    },
  },
  2957: {
    java: {
      "dynamic-programming": "",
    },
  },
  2958: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maxSubarrayLength(int[] nums, int k) {\n        int ans = 0;\n        Map<Integer, Integer> count = new HashMap<>();\n\n        for (int left = 0, right = 0; right < nums.length; ++right) {\n            count.merge(nums[right], 1, Integer::sum);\n            while (count.get(nums[right]) == k + 1)\n                count.merge(nums[left++], -1, Integer::sum);\n            ans = Math.max(ans, right - left + 1);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2959: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2961: {
    java: {
      math: "",
    },
  },
  2962: {
    java: {
      "sliding-window":
        "class Solution {\n    public long countSubarrays(int[] nums, int k) {\n      int maxNum = Arrays.stream(nums).max().getAsInt();\n        long ans = 0;\n        int count = 0;\n\n        for (int left = 0, right = 0; right < nums.length; ++right) {\n            if (nums[right] == maxNum)\n                ++count;\n            while (count == k)\n                if (nums[left++] == maxNum)\n                    --count;\n            ans += left;\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2963: {
    java: {
      combinatorics: "",
    },
  },
  2964: {
    java: {
      "hash-table": "",
    },
  },
  2965: {
    java: {
      matrix: "",
    },
  },
  2966: {
    java: {
      greedy: "",
    },
  },
  2967: {
    java: {
      greedy: "",
    },
  },
  2968: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maxFrequencyScore(int[] nums, long k) {\n        int ans = 0;\n        long cost = 0;\n\n        Arrays.sort(nums);\n\n        for (int left = 0, right = 0; right < nums.length; ++right) {\n            cost += nums[right] - nums[(left + right) / 2];\n            while (cost > k)\n                cost -= nums[(left + right + 1) / 2] - nums[left++];\n            ans = Math.max(ans, right - left + 1);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2969: {
    java: {
      "monotonic-queue":
        "class Solution {\n    public int minimumCoins(int[] prices) {\n        int n = prices.length;\n        Deque<Integer> q = new ArrayDeque<>();\n        for (int i = n; i > 0; --i) {\n            while (!q.isEmpty() && q.peek() > i * 2 + 1) {\n                q.poll();\n            }\n            if (i <= (n - 1) / 2) {\n                prices[i - 1] += prices[q.peek() - 1];\n            }\n            while (!q.isEmpty() && prices[q.peekLast() - 1] >= prices[i - 1]) {\n                q.pollLast();\n            }\n            q.offer(i);\n        }\n        return prices[0];\n    }\n}",
    },
  },
  2970: {
    java: {
      "two-pointers":
        "class Solution {\n    public int incremovableSubarrayCount(int[] nums) {\n        int n = nums.length;\n        int count = 0;\n        \n        for (int start = 0; start < n; start++) {\n            for (int end = start + 1; end <= n; end++) {\n                if (isIncremovable(nums, start, end)) {\n                    count++;\n                }\n            }\n        }\n        \n        return count;\n    }\n    \n    private boolean isIncremovable(int[] nums, int start, int end) {\n        List<Integer> remaining = new ArrayList<>();\n        \n        for (int i = 0; i < nums.length; i++) {\n            if (i < start || i >= end) {\n                remaining.add(nums[i]);\n            }\n        }\n        \n        for (int i = 1; i < remaining.size(); i++) {\n            if (remaining.get(i) <= remaining.get(i - 1)) {\n                return false;\n            }\n        }\n        \n        return true;\n    }\n}\n",
    },
  },
  2971: {
    java: {
      "prefix-sum": "",
    },
  },
  2972: {
    java: {
      "two-pointers":
        "class Solution {\n    public long incremovableSubarrayCount(int[] nums) {\n        int n = nums.length;\n        int startIndex = getStartIndexOfSuffix(nums);\n        if (startIndex == 0)\n            return (long) n * (n + 1) / 2;\n\n        long ans = n - startIndex + 1;\n\n        for (int i = 0, j = startIndex; i < startIndex; ++i) {\n            if (i > 0 && nums[i] <= nums[i - 1])\n                break;\n            while (j < n && nums[i] >= nums[j])\n                ++j;\n            ans += n - j + 1;\n        }\n\n        return ans;\n    }\n\n    private int getStartIndexOfSuffix(int[] nums) {\n        for (int i = nums.length - 2; i >= 0; --i)\n            if (nums[i] >= nums[i + 1])\n                return i + 1;\n        return 0;\n    }\n\n    private int firstGreater(int[] A, int startIndex, int target) {\n        int i = Arrays.binarySearch(A, startIndex, A.length, target + 1);\n        return i < 0 ? -i - 1 : i;\n    }\n}",
    },
  },
  2973: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2974: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2975: {
    java: {
      enumeration: "",
    },
  },
  2976: {
    java: {
      "shortest-path": "",
    },
  },
  2977: {
    java: {
      "dynamic-programming": "",
    },
  },
  2978: {
    java: {
      database: "",
    },
  },
  2979: {
    java: {
      "dynamic-programming": "",
    },
  },
  2980: {
    java: {
      "bit-manipulation": "",
    },
  },
  2981: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maximumLength(String s) {\n        int n = s.length();\n        int ans = -1;\n        int runningLen = 0;\n        char prevLetter = '@';\n        int[][] counts = new int[26][n + 1];\n\n        for (final char c : s.toCharArray())\n            if (c == prevLetter) {\n                ++counts[c - 'a'][++runningLen];\n            } else {\n                runningLen = 1;\n                ++counts[c - 'a'][runningLen];\n                prevLetter = c;\n            }\n\n        for (int[] count : counts) {\n            ans = Math.max(ans, getMaxFreq(count, n));\n        }\n\n        return ans;\n    }\n\n    private int getMaxFreq(int[] count, int maxFreq) {\n        int times = 0;\n        for (int freq = maxFreq; freq >= 1; --freq) {\n            times += count[freq];\n            if (times >= 3)\n                return freq;\n        }\n        return -1;\n    }\n}",
    },
  },
  2982: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maximumLength(String s) {\n        int n = s.length();\n        int ans = -1;\n        int runningLen = 0;\n        char prevLetter = '@';\n        int[][] counts = new int[26][n + 1];\n\n        for (final char c : s.toCharArray())\n            if (c == prevLetter) {\n                ++counts[c - 'a'][++runningLen];\n            } else {\n                runningLen = 1;\n                ++counts[c - 'a'][runningLen];\n                prevLetter = c;\n            }\n\n        for (int[] count : counts) {\n            ans = Math.max(ans, getMaxFreq(count, n));\n        }\n\n        return ans;\n    }\n\n    private int getMaxFreq(int[] count, int maxFreq) {\n        int times = 0;\n        for (int freq = maxFreq; freq >= 1; --freq) {\n            times += count[freq];\n            if (times >= 3)\n                return freq;\n        }\n        return -1;\n    }\n}",
    },
  },
  2983: {
    java: {
      "prefix-sum": "",
    },
  },
  2984: {
    java: {
      database: "",
    },
  },
  2985: {
    java: {
      database: "",
    },
  },
  2986: {
    java: {
      database: "",
    },
  },
  2987: {
    java: {
      database: "",
    },
  },
  2988: {
    java: {
      database: "",
    },
  },
  2989: {
    java: {
      database: "",
    },
  },
  2990: {
    java: {
      database: "",
    },
  },
  2991: {
    java: {
      database: "",
    },
  },
  2992: {
    java: {
      "dynamic-programming": "",
    },
  },
  2993: {
    java: {
      database: "",
    },
  },
  2994: {
    java: {
      database: "",
    },
  },
  2995: {
    java: {
      database: "",
    },
  },
  2996: {
    java: {
      sorting: "",
    },
  },
  2997: {
    java: {
      "bit-manipulation": "",
    },
  },
  2998: {
    java: {
      "dynamic-programming": "",
    },
  },
  2999: {
    java: {
      "dynamic-programming": "",
    },
  },
  3001: {
    java: {
      enumeration: "",
    },
  },
  3002: {
    java: {
      greedy: "",
    },
  },
  3003: {
    java: {
      "dynamic-programming": "",
    },
  },
  3004: {
    java: {
      "dynamic-programming": "",
    },
  },
  3005: {
    java: {
      counting: "",
    },
  },
  3006: {
    java: {
      "two-pointers": "",
    },
  },
  3007: {
    java: {
      "dynamic-programming": "",
    },
  },
  3008: {
    java: {
      "two-pointers": "",
    },
  },
  3009: {
    java: {
      geometry: "",
    },
  },
  3010: {
    java: {
      enumeration: "",
    },
  },
  3011: {
    java: {
      "bit-manipulation": "",
    },
  },
  3012: {
    java: {
      "number-theory": "",
    },
  },
  3013: {
    java: {
      "sliding-window":
        "class Multiset {\n    public void add(int num) {\n        map.merge(num, 1, Integer::sum);\n        ++sz;\n    }\n\n    public void remove(int num) {\n        map.merge(num, -1, Integer::sum);\n        if (map.get(num) == 0)\n            map.remove(num);\n        --sz;\n    }\n\n    public int min() {\n        return map.firstEntry().getKey();\n    }\n\n    public int max() {\n        return map.lastEntry().getKey();\n    }\n\n    public int size() {\n        return sz;\n    }\n\n    public boolean contains(int num) {\n        return map.containsKey(num);\n    }\n\n    private TreeMap<Integer, Integer> map = new TreeMap<>();\n    private int sz = 0;\n}\n\nclass Solution {\n    public long minimumCost(int[] nums, int k, int dist) {\n        long windowSum = 0;\n        Multiset selected = new Multiset();\n        Multiset candidates = new Multiset();\n\n        for (int i = 1; i <= dist + 1; ++i) {\n            windowSum += nums[i];\n            selected.add(nums[i]);\n        }\n\n        windowSum = balance(windowSum, selected, candidates, k);\n        long minWindowSum = windowSum;\n\n        for (int i = dist + 2; i < nums.length; ++i) {\n          int outOfScope = nums[i - dist - 1];\n            if (selected.contains(outOfScope)) {\n                windowSum -= outOfScope;\n                selected.remove(outOfScope);\n            } else {\n                candidates.remove(outOfScope);\n            }\n            if (nums[i] < selected.max()) {\n                windowSum += nums[i];\n                selected.add(nums[i]);\n            } else {\n                candidates.add(nums[i]);\n            }\n            windowSum = balance(windowSum, selected, candidates, k);\n            minWindowSum = Math.min(minWindowSum, windowSum);\n        }\n\n        return nums[0] + minWindowSum;\n    }\n\n    private long balance(long windowSum, Multiset selected, Multiset candidates, int k) {\n        while (selected.size() < k - 1) {\n          int minCandidate = candidates.min();\n            windowSum += minCandidate;\n            selected.add(minCandidate);\n            candidates.remove(minCandidate);\n        }\n        while (selected.size() > k - 1) {\n          int maxSelected = selected.max();\n            windowSum -= maxSelected;\n            selected.remove(maxSelected);\n            candidates.add(maxSelected);\n        }\n        return windowSum;\n    }\n}",
    },
  },
  3014: {
    java: {
      greedy: "",
    },
  },
  3015: {
    java: {
      "prefix-sum": "",
    },
  },
  3016: {
    java: {
      counting: "",
    },
  },
  3017: {
    java: {
      "prefix-sum": "",
    },
  },
  3018: {
    java: {
      "dynamic-programming": "",
    },
  },
  3019: {
    java: {
      string: "",
    },
  },
  3020: {
    java: {
      enumeration: "",
    },
  },
  3021: {
    java: {
      math: "",
    },
  },
  3022: {
    java: {
      "bit-manipulation": "",
    },
  },
  3023: {
    java: {
      "sliding-window":
        "**\n * Definition for an infinite stream.\n * class InfiniteStream {\n *     public InfiniteStream(int[] bits);\n *     public int next();\n * }\n */\nclass Solution {\n    public int findPattern(InfiniteStream infiniteStream, int[] pattern) {\n        long a = 0, b = 0;\n        int m = pattern.length;\n        int half = m >> 1;\n        long mask1 = (1L << half) - 1;\n        long mask2 = (1L << (m - half)) - 1;\n        for (int i = 0; i < half; ++i) {\n            a |= (long) pattern[i] << (half - 1 - i);\n        }\n        for (int i = half; i < m; ++i) {\n            b |= (long) pattern[i] << (m - 1 - i);\n        }\n        long x = 0, y = 0;\n        for (int i = 1;; ++i) {\n            int v = infiniteStream.next();\n            y = y << 1 | v;\n            v = (int) ((y >> (m - half)) & 1);\n            y &= mask2;\n            x = x << 1 | v;\n            x &= mask1;\n            if (i >= m && a == x && b == y) {\n                return i - m;\n            }\n        }\n    }\n}",
    },
  },
  3024: {
    java: {
      sorting: "",
    },
  },
  3025: {
    java: {
      geometry: "",
    },
  },
  3026: {
    java: {
      "prefix-sum": "",
    },
  },
  3027: {
    java: {
      geometry: "",
    },
  },
  3028: {
    java: {
      "prefix-sum": "",
    },
  },
  3029: {
    java: {
      "rolling-hash": "",
    },
  },
  3030: {
    java: {
      matrix: "",
    },
  },
  3031: {
    java: {
      "rolling-hash": "",
    },
  },
  3032: {
    java: {
      "dynamic-programming": "",
    },
  },
  3033: {
    java: {
      matrix: "",
    },
  },
  3034: {
    java: {
      "rolling-hash": "",
    },
  },
  3035: {
    java: {
      counting: "",
    },
  },
  3036: {
    java: {
      "rolling-hash": "",
    },
  },
  3037: {
    java: {
      "sliding-window":
        "/**\n * Definition for an infinite stream.\n * class InfiniteStream {\n *   public InfiniteStream(int[] bits);\n *   public int next();\n * }\n */\n\nclass Solution {\n  public int findPattern(InfiniteStream stream, int[] pattern) {\n    int[] lps = getLPS(pattern);\n    int i = 0;  \n    int j = 0;   \n    int bit = 0;\n    boolean readNext = false;\n    while (true) {\n      if (!readNext) {\n        bit = stream.next();\n        readNext = true;\n      }\n      if (bit == pattern[j]) {\n        ++i;\n        readNext = false;\n        ++j;\n        if (j == pattern.length)\n          return i - j;\n      }\n      else if (j > 0) {\n        j = lps[j - 1];\n      } else {\n        ++i;\n        readNext = false;\n      }\n    }\n  }\n\n\n  private int[] getLPS(int[] pattern) {\n    int[] lps = new int[pattern.length];\n    int j = 0;\n    for (int i = 1; i < pattern.length; ++i) {\n      while (j > 0 && pattern[j] != pattern[i])\n        j = lps[j - 1];\n      if (pattern[i] == pattern[j])\n        lps[i] = ++j;\n    }\n    return lps;\n  }\n}",
    },
  },
  3039: {
    java: {
      counting: "",
    },
  },
  3040: {
    java: {
      "dynamic-programming": "",
    },
  },
  3041: {
    java: {
      "dynamic-programming": "",
    },
  },
  3042: {
    java: {
      "rolling-hash": "",
    },
  },
  3043: {
    java: {
      trie: "",
    },
  },
  3044: {
    java: {
      matrix: "",
    },
  },
  3045: {
    java: {
      "rolling-hash": "",
    },
  },
  3046: {
    java: {
      counting: "",
    },
  },
  3047: {
    java: {
      geometry: "",
    },
  },
  3049: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3050: {
    java: {
      database: "",
    },
  },
  3051: {
    java: {
      database: "",
    },
  },
  3052: {
    java: {
      database: "",
    },
  },
  3053: {
    java: {
      database: "",
    },
  },
  3054: {
    java: {
      database: "",
    },
  },
  3055: {
    java: {
      database: "",
    },
  },
  3056: {
    java: {
      database: "",
    },
  },
  3057: {
    java: {
      database: "",
    },
  },
  3058: {
    java: {
      database: "",
    },
  },
  3059: {
    java: {
      database: "",
    },
  },
  3060: {
    java: {
      database: "",
    },
  },
  3061: {
    java: {
      database: "",
    },
  },
  3062: {
    java: {
      "linked-list": "",
    },
  },
  3063: {
    java: {
      "linked-list": "",
    },
  },
  3064: {
    java: {
      interactive: "",
    },
  },
  3066: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3067: {
    java: {
      tree: "",
    },
  },
  3068: {
    java: {
      "dynamic-programming": "",
    },
  },
  3070: {
    java: {
      matrix: "",
    },
  },
  3071: {
    java: {
      matrix: "",
    },
  },
  3073: {
    java: {
      "ordered-set": "",
    },
  },
  3074: {
    java: {
      greedy: "",
    },
  },
  3075: {
    java: {
      greedy: "",
    },
  },
  3076: {
    java: {
      trie: "",
    },
  },
  3077: {
    java: {
      "prefix-sum": "",
    },
  },
  3078: {
    java: {
      matrix: "",
    },
  },
  3079: {
    java: {
      math: "",
    },
  },
  3080: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3081: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3082: {
    java: {
      "dynamic-programming": "",
    },
  },
  3083: {
    java: {
      "hash-table": "",
    },
  },
  3084: {
    java: {
      counting: "",
    },
  },
  3085: {
    java: {
      counting: "",
    },
  },
  3086: {
    java: {
      "sliding-window":
        "class Solution {\n  public long minimumMoves(int[] nums, int k, int maxChanges) {\n    int kNumOfIndicesWithinOneDistance = 3;\n    long ans = Long.MAX_VALUE;\n    List<Integer> oneIndices = new ArrayList<>(); \n    List<Long> prefix = new ArrayList<>();       \n    prefix.add(0L);\n\n    for (int i = 0; i < nums.length; ++i)\n      if (nums[i] == 1)\n        oneIndices.add(i);\n\n    for (int oneIndex : oneIndices)\n      prefix.add(prefix.get(prefix.size() - 1) + oneIndex);\n\n    int minOnesByTwo = Math.max(0, k - maxChanges);\n    int maxOnesByTwo =\n        Math.min(k, Math.min(minOnesByTwo + kNumOfIndicesWithinOneDistance, oneIndices.size()));\n\n    for (int onesByTwo = minOnesByTwo; onesByTwo <= maxOnesByTwo; ++onesByTwo)\n      for (int left = 0; left + onesByTwo < prefix.size(); ++left) {\n        int right = left + onesByTwo;\n        long cost1 = (k - onesByTwo) * 2;\n        long cost2 = (prefix.get(right) - prefix.get((left + right) / 2)) -\n                           (prefix.get((left + right + 1) / 2) - prefix.get(left));\n        ans = Math.min(ans, cost1 + cost2);\n      }\n\n    return ans;\n  }\n}",
    },
  },
  3087: {
    java: {
      database: "",
    },
  },
  3088: {
    java: {
      greedy: "",
    },
  },
  3089: {
    java: {
      database: "",
    },
  },
  3090: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maximumLengthSubstring(String s) {\n        int ans = 0;\n        int[] count = new int[26];\n\n        for (int left = 0, right = 0; right < s.length(); ++right) {\n            ++count[s.charAt(right) - 'a'];\n            while (count[s.charAt(right) - 'a'] > 2)\n                --count[s.charAt(left++) - 'a'];\n            ans = Math.max(ans, right - left + 1);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  3091: {
    java: {
      enumeration: "",
    },
  },
  3092: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3093: {
    java: {
      trie: "",
    },
  },
  3094: {
    java: {
      interactive: "",
    },
  },
  3095: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minimumSubarrayLength(int[] nums, int k) {\n        int kMax = 50;\n        int n = nums.length;\n        int ans = n + 1;\n        int ors = 0;\n        int[] count = new int[kMax + 1];\n\n        for (int left = 0, right = 0; right < n; ++right) {\n            ors = orNum(ors, nums[right], count);\n            while (ors >= k && left <= right) {\n                ans = Math.min(ans, right - left + 1);\n                ors = undoOrNum(ors, nums[left], count);\n                ++left;\n            }\n        }\n\n        return (ans == n + 1) ? -1 : ans;\n    }\n\n    private static final int kMaxBit = 30;\n\n    private int orNum(int ors, int num, int[] count) {\n        for (int i = 0; i < kMaxBit; ++i)\n            if ((num >> i & 1) == 1 && ++count[i] == 1)\n                ors += 1 << i;\n        return ors;\n    }\n\n    private int undoOrNum(int ors, int num, int[] count) {\n        for (int i = 0; i < kMaxBit; ++i)\n            if ((num >> i & 1) == 1 && --count[i] == 0)\n                ors -= 1 << i;\n        return ors;\n    }\n}",
    },
  },
  3096: {
    java: {
      "prefix-sum": "",
    },
  },
  3097: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minimumSubarrayLength(int[] nums, int k) {\n        int kMax = 50;\n        int n = nums.length;\n        int ans = n + 1;\n        int ors = 0;\n        int[] count = new int[kMax + 1];\n\n        for (int left = 0, right = 0; right < n; ++right) {\n            ors = orNum(ors, nums[right], count);\n            while (ors >= k && left <= right) {\n                ans = Math.min(ans, right - left + 1);\n                ors = undoOrNum(ors, nums[left], count);\n                ++left;\n            }\n        }\n\n        return (ans == n + 1) ? -1 : ans;\n    }\n\n    private static final int kMaxBit = 30;\n\n    private int orNum(int ors, int num, int[] count) {\n        for (int i = 0; i < kMaxBit; ++i)\n            if ((num >> i & 1) == 1 && ++count[i] == 1)\n                ors += 1 << i;\n        return ors;\n    }\n\n    private int undoOrNum(int ors, int num, int[] count) {\n        for (int i = 0; i < kMaxBit; ++i)\n            if ((num >> i & 1) == 1 && --count[i] == 0)\n                ors -= 1 << i;\n        return ors;\n    }\n}",
    },
  },
  3098: {
    java: {
      "dynamic-programming": "",
    },
  },
  3099: {
    java: {
      math: "",
    },
  },
  3100: {
    java: {
      math: "",
    },
  },
  3101: {
    java: {
      math: "",
    },
  },
  3102: {
    java: {
      "ordered-set": "",
    },
  },
  3103: {
    java: {
      database: "",
    },
  },
  3104: {
    java: {
      "prefix-sum": "",
    },
  },
  3106: {
    java: {
      greedy: "",
    },
  },
  3107: {
    java: {
      greedy: "",
    },
  },
  3108: {
    java: {
      "union-find": "",
    },
  },
  3109: {
    java: {
      "merge-sort":
        "class FenwickTree {\n  public FenwickTree(int n) {\n    sums = new int[n + 1];\n  }\n\n  public void add(int i, int delta) {\n    while (i < sums.length) {\n      sums[i] += delta;\n      i += lowbit(i);\n    }\n  }\n\n  public int get(int i) {\n    int sum = 0;\n    while (i > 0) {\n      sum += sums[i];\n      i -= lowbit(i);\n    }\n    return sum;\n  }\n\n  private int[] sums;\n\n  private static int lowbit(int i) {\n    return i & -i;\n  }\n}\n\nclass Solution {\n  public int getPermutationIndex(int[] perm) {\n  int kMod = 1_000_000_007;\n  int n = perm.length;\n    int ans = 0;\n    FenwickTree tree = new FenwickTree(n);\n    int[] fact = new int[n + 1]; \n    Arrays.fill(fact, 1);\n\n    for (int i = 2; i <= n; ++i)\n      fact[i] = (int) ((fact[i - 1] * (long) i) % kMod);\n\n    for (int i = 0; i < n; ++i) {\n    int num = perm[i];\n    int unusedNums = num - 1 - tree.get(num - 1);\n    int suffixLength = fact[n - 1 - i];\n      ans = (int) ((ans + unusedNums * (long) suffixLength) % kMod);\n      tree.add(num, 1);\n    }\n\n    return ans;\n  }\n}",
    },
  },
  3110: {
    java: {
      string: "",
    },
  },
  3111: {
    java: {
      greedy: "",
    },
  },
  3112: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3113: {
    java: {
      "monotonic-stack":
        "class Solution {\n    public long numberOfSubarrays(int[] nums) {\n        Deque<int[]> stack = new ArrayDeque<>();\n        long ans = 0;\n        int top = -1;\n\n        for (int num : nums) {\n            while (!stack.isEmpty() && stack.peek()[0] < num)\n                stack.pop();\n            if (stack.isEmpty() || stack.peek()[0] != num)\n                stack.push(new int[] { num, 0 });\n            ans += ++stack.peek()[1];\n        }\n\n        return ans;\n    }\n}",
    },
  },
  3114: {
    java: {
      enumeration: "",
    },
  },
  3115: {
    java: {
      "number-theory": "",
    },
  },
  3116: {
    java: {
      combinatorics: "",
    },
  },
  3117: {
    java: {
      queue: "",
    },
  },
  3118: {
    java: {
      database: "",
    },
  },
  3119: {
    java: {
      greedy: "",
    },
  },
  3120: {
    java: {
      "hash-table": "",
    },
  },
  3121: {
    java: {
      "hash-table": "",
    },
  },
  3122: {
    java: {
      matrix: "",
    },
  },
  3123: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3124: {
    java: {
      database: "",
    },
  },
  3125: {
    java: {
      greedy: "",
    },
  },
  3126: {
    java: {
      database: "",
    },
  },
  3127: {
    java: {
      matrix: "",
    },
  },
  3128: {
    java: {
      combinatorics: "",
    },
  },
  3129: {
    java: {
      "prefix-sum": "",
    },
  },
  3130: {
    java: {
      "prefix-sum": "",
    },
  },
  3132: {
    java: {
      "two-pointers": "",
    },
  },
  3133: {
    java: {
      "bit-manipulation": "",
    },
  },
  3134: {
    java: {
      "sliding-window":
        "class Solution {\n    public int medianOfUniquenessArray(int[] nums) {\n        int n = nums.length;\n        long subarrayCount = n * (n + 1L) / 2;\n        long medianCount = (subarrayCount + 1) / 2;\n        int left = 1;\n        int right = n;\n\n        while (left < right) {\n            int mid = (left + right) / 2;\n            if (subarrayWithAtMostackDistinct(nums, mid) >= medianCount)\n                right = mid;\n            else\n                left = mid + 1;\n        }\n\n        return left;\n    }\n\n    private long subarrayWithAtMostackDistinct(int[] nums, int k) {\n        long res = 0;\n        HashMap<Integer, Integer> count = new HashMap<>();\n\n        for (int left = 0, right = 0; right < nums.length; ++right) {\n            if (count.merge(nums[right], 1, Integer::sum) == 1)\n                --k;\n            while (k == -1)\n                if (count.merge(nums[left++], -1, Integer::sum) == 0)\n                    ++k;\n            res += right - left + 1;\n        }\n\n        return res;\n    }\n}",
    },
  },
  3135: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minOperations(String initial, String target) {\n        int m = initial.length(), n = target.length();\n        int[][] dp = new int[m + 1][n + 1];\n        int mx = 0;\n        for (int i = 1; i <= m; ++i) {\n            for (int j = 1; j <= n; ++j) {\n                if (initial.charAt(i - 1) == target.charAt(j - 1)) {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                    mx = Math.max(mx, dp[i][j]);\n                }\n            }\n        }\n        return m + n - 2 * mx;\n    }\n}",
    },
  },
  3136: {
    java: {
      string: "",
    },
  },
  3137: {
    java: {
      counting: "",
    },
  },
  3138: {
    java: {
      counting: "",
    },
  },
  3139: {
    java: {
      enumeration: "",
    },
  },
  3140: {
    java: {
      database: "",
    },
  },
  3141: {
    java: {
      "bit-manipulation": "",
    },
  },
  3142: {
    java: {
      matrix: "",
    },
  },
  3143: {
    java: {
      sorting: "",
    },
  },
  3144: {
    java: {
      "dynamic-programming": "",
    },
  },
  3145: {
    java: {
      "bit-manipulation": "",
    },
  },
  3146: {
    java: {
      "hash-table": "",
    },
  },
  3147: {
    java: {
      "prefix-sum": "",
    },
  },
  3148: {
    java: {
      matrix: "",
    },
  },
  3149: {
    java: {
      "dynamic-programming": "",
    },
  },
  3150: {
    java: {
      database: "",
    },
  },
  3152: {
    java: {
      "prefix-sum": "",
    },
  },
  3153: {
    java: {
      counting: "",
    },
  },
  3154: {
    java: {
      "dynamic-programming": "",
      memoization:
        'class Solution {\n    HashMap<String, Integer> memoizeMap = new HashMap<>();\n    int K;\n\n    public int waysToReachStair(int k) {\n\n        K = k;\n        int index = 1;\n        int jump = 0;\n        boolean canJumpBack = true;\n\n        return solve(index, jump, canJumpBack);\n    }\n\n    public int solve(int index, int jump, boolean canJumpBack) {\n\n        if (index > K + 1) {\n            return 0;\n        }\n\n        String str = String.valueOf(index) + "_" + String.valueOf(jump) + "_" + String.valueOf(canJumpBack);\n\n        if (memoizeMap.containsKey(str)) {\n\n            return memoizeMap.get(str);\n        }\n\n        int totalWays = 0;\n\n        if (index == K) {\n            totalWays++;\n        }\n\n        if (canJumpBack == true) {\n\n            totalWays += solve(index - 1, jump, false);\n        }\n        totalWays += solve(index + (int) Math.pow(2, jump), jump + 1, true);\n        memoizeMap.put(str, totalWays);\n\n        return totalWays;\n    }\n}',
    },
  },
  3155: {
    java: {
      math: "",
    },
  },
  3156: {
    java: {
      database: "",
    },
  },
  3157: {
    java: {
      tree: "",
    },
  },
  3158: {
    java: {
      "bit-manipulation": "",
    },
  },
  3159: {
    java: {
      "hash-table": "",
    },
  },
  3160: {
    java: {
      "hash-table": "",
    },
  },
  3162: {
    java: {
      "hash-table": "",
    },
  },
  3163: {
    java: {
      string: "",
    },
  },
  3164: {
    java: {
      "hash-table": "",
    },
  },
  3165: {
    java: {
      "dynamic-programming": "",
    },
  },
  3166: {
    java: {
      database: "",
    },
  },
  3167: {
    java: {
      counting: "",
    },
  },
  3168: {
    java: {
      string: "",
    },
  },
  3169: {
    java: {
      sorting: "",
    },
  },
  3170: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3171: {
    java: {
      "bit-manipulation": "",
    },
  },
  3172: {
    java: {
      database: "",
    },
  },
  3173: {
    java: {
      "bit-manipulation": "",
    },
  },
  3174: {
    java: {
      "hash-table": "",
    },
  },
  3176: {
    java: {
      "dynamic-programming": "",
    },
  },
  3177: {
    java: {
      "dynamic-programming": "",
    },
  },
  3178: {
    java: {
      math: "",
    },
  },
  3179: {
    java: {
      "prefix-sum": "",
    },
  },
  3180: {
    java: {
      "dynamic-programming": "",
    },
  },
  3181: {
    java: {
      "dynamic-programming": "",
    },
  },
  3182: {
    java: {
      database: "",
    },
  },
  3183: {
    java: {
      "dynamic-programming": "",
    },
  },
  3184: {
    java: {
      counting: "",
    },
  },
  3185: {
    java: {
      counting: "",
    },
  },
  3186: {
    java: {
      "two-pointers": "",
    },
  },
  3188: {
    java: {
      database: "",
    },
  },
  3189: {
    java: {
      greedy: "",
    },
  },
  3190: {
    java: {
      math: "",
    },
  },
  3191: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minOperations(int[] nums) {\n        int n = nums.length;\n        int ans = 0;\n\n        for (int i = 0; i + 2 < n; ++i)\n            if (nums[i] == 0) {\n                nums[i + 1] ^= 1;\n                nums[i + 2] ^= 1;\n                ++ans;\n            }\n\n        return nums[n - 1] == 0 || nums[n - 2] == 0 ? -1 : ans;\n    }\n}",
    },
  },
  3192: {
    java: {
      "dynamic-programming": "",
    },
  },
  3193: {
    java: {
      "dynamic-programming": "",
    },
  },
  3194: {
    java: {
      "two-pointers":
        "import java.util.Arrays;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class Solution {\n    public double minimumAverage(int[] nums) {\n        Arrays.sort(nums); \n        List<Double> averages = new ArrayList<>();\n        int left = 0, right = nums.length - 1;\n        \n        while (left < right) {\n            int min = nums[left++];\n            int max = nums[right--];\n            double avg = (min + max) / 2.0;\n            averages.add(avg);\n        }\n        \n        return averages.stream().mapToDouble(Double::doubleValue).min().orElse(0.0);\n    }\n}\n",
    },
  },
  3195: {
    java: {
      matrix: "",
    },
  },
  3196: {
    java: {
      "dynamic-programming": "",
    },
  },
  3197: {
    java: {
      matrix: "",
    },
  },
  3198: {
    java: {
      database: "",
    },
  },
  3199: {
    java: {
      "bit-manipulation": "",
    },
  },
  3200: {
    java: {
      enumeration: "",
    },
  },
  3201: {
    java: {
      "dynamic-programming": "",
    },
  },
  3202: {
    java: {
      "dynamic-programming": "",
    },
  },
  3203: {
    java: {
      tree: "",
    },
  },
  3204: {
    java: {
      database: "",
    },
  },
  3205: {
    java: {
      "monotonic-stack": "",
    },
  },
  3207: {
    java: {
      greedy: "",
    },
  },
  3209: {
    java: {
      "bit-manipulation": "",
    },
  },
  3210: {
    java: {
      string: "",
    },
  },
  3211: {
    java: {
      recursion: "",
    },
  },
  3212: {
    java: {
      matrix: "",
    },
  },
  3213: {
    java: {
      "dynamic-programming": "",
    },
  },
  3214: {
    java: {
      database: "",
    },
  },
  3215: {
    java: {
      "bit-manipulation": "",
    },
  },
  3216: {
    java: {
      greedy: "",
    },
  },
  3217: {
    java: {
      "linked-list": "",
    },
  },
  3218: {
    java: {
      greedy: "",
    },
  },
  3219: {
    java: {
      greedy: "",
    },
  },
};
// existing

const obj2 = {
  1: {
    java: {
      array: "",
    },
  },
  4: {
    java: {
      array: "",
    },
  },
  11: {
    java: {
      array: "",
    },
  },
  15: {
    java: {
      array: "",
    },
  },
  16: {
    java: {
      array: "",
    },
  },
  18: {
    java: {
      array: "",
    },
  },
  26: {
    java: {
      array: "",
    },
  },
  27: {
    java: {
      array: "",
    },
  },
  31: {
    java: {
      array: "",
    },
  },
  33: {
    java: {
      array: "",
    },
  },
  34: {
    java: {
      array: "",
    },
  },
  35: {
    java: {
      array: "",
    },
  },
  36: {
    java: {
      array: "",
    },
  },
  37: {
    java: {
      array: "",
    },
  },
  39: {
    java: {
      array: "",
    },
  },
  40: {
    java: {
      array: "",
    },
  },
  41: {
    java: {
      array: "",
    },
  },
  42: {
    java: {
      array: "",
    },
  },
  45: {
    java: {
      array: "",
    },
  },
  46: {
    java: {
      array: "",
    },
  },
  47: {
    java: {
      array: "",
    },
  },
  48: {
    java: {
      array: "",
    },
  },
  49: {
    java: {
      array: "",
    },
  },
  51: {
    java: {
      array: "",
    },
  },
  53: {
    java: {
      array: "",
    },
  },
  54: {
    java: {
      array: "",
    },
  },
  55: {
    java: {
      array: "",
    },
  },
  56: {
    java: {
      array: "",
    },
  },
  57: {
    java: {
      array: "",
    },
  },
  59: {
    java: {
      array: "",
    },
  },
  63: {
    java: {
      array: "",
    },
  },
  64: {
    java: {
      array: "",
    },
  },
  66: {
    java: {
      array: "",
    },
  },
  68: {
    java: {
      array: "",
    },
  },
  73: {
    java: {
      array: "",
    },
  },
  74: {
    java: {
      array: "",
    },
  },
  75: {
    java: {
      array: "",
    },
  },
  78: {
    java: {
      array: "",
    },
  },
  79: {
    java: {
      array: "",
    },
  },
  80: {
    java: {
      array: "",
    },
  },
  81: {
    java: {
      array: "",
    },
  },
  84: {
    java: {
      array: "",
    },
  },
  85: {
    java: {
      array: "",
    },
  },
  88: {
    java: {
      array: "",
    },
  },
  90: {
    java: {
      array: "",
    },
  },
  105: {
    java: {
      array: "",
    },
  },
  106: {
    java: {
      array: "",
    },
  },
  108: {
    java: {
      array: "",
    },
  },
  118: {
    java: {
      array: "",
    },
  },
  119: {
    java: {
      array: "",
    },
  },
  120: {
    java: {
      array: "",
    },
  },
  121: {
    java: {
      array: "",
    },
  },
  122: {
    java: {
      array: "",
    },
  },
  123: {
    java: {
      array: "",
    },
  },
  128: {
    java: {
      array: "",
    },
  },
  130: {
    java: {
      array: "",
    },
  },
  134: {
    java: {
      array: "",
    },
  },
  135: {
    java: {
      array: "",
    },
  },
  136: {
    java: {
      array: "",
    },
  },
  137: {
    java: {
      array: "",
    },
  },
  139: {
    java: {
      array: "",
    },
  },
  140: {
    java: {
      array: "",
    },
  },
  149: {
    java: {
      array: "",
    },
  },
  150: {
    java: {
      array: "",
    },
  },
  152: {
    java: {
      array: "",
    },
  },
  153: {
    java: {
      array: "",
    },
  },
  154: {
    java: {
      array: "",
    },
  },
  157: {
    java: {
      array: "",
    },
  },
  158: {
    java: {
      array: "",
    },
  },
  162: {
    java: {
      array: "",
    },
  },
  163: {
    java: {
      array: "",
    },
  },
  164: {
    java: {
      array: "",
    },
  },
  167: {
    java: {
      array: "",
    },
  },
  169: {
    java: {
      array: "",
    },
  },
  170: {
    java: {
      array: "",
    },
  },
  174: {
    java: {
      array: "",
    },
  },
  179: {
    java: {
      array: "",
    },
  },
  188: {
    java: {
      array: "",
    },
  },
  189: {
    java: {
      array: "",
    },
  },
  198: {
    java: {
      array: "",
    },
  },
  200: {
    java: {
      array: "",
    },
  },
  204: {
    java: {
      array: "",
    },
  },
  209: {
    java: {
      array: "",
    },
  },
  212: {
    java: {
      array: "",
    },
  },
  213: {
    java: {
      array: "",
    },
  },
  215: {
    java: {
      array: "",
    },
  },
  216: {
    java: {
      array: "",
    },
  },
  217: {
    java: {
      array: "",
    },
  },
  218: {
    java: {
      array: "",
    },
  },
  219: {
    java: {
      array: "",
    },
  },
  220: {
    java: {
      array: "",
    },
  },
  221: {
    java: {
      array: "",
    },
  },
  228: {
    java: {
      array: "",
    },
  },
  229: {
    java: {
      array: "",
    },
  },
  238: {
    java: {
      array: "",
    },
  },
  239: {
    java: {
      array: "",
    },
  },
  240: {
    java: {
      array: "",
    },
  },
  243: {
    java: {
      array: "",
    },
  },
  244: {
    java: {
      array: "",
    },
  },
  245: {
    java: {
      array: "",
    },
  },
  247: {
    java: {
      array: "",
    },
  },
  248: {
    java: {
      array: "",
    },
  },
  249: {
    java: {
      array: "",
    },
  },
  251: {
    java: {
      array: "",
    },
  },
  252: {
    java: {
      array: "",
    },
  },
  253: {
    java: {
      array: "",
    },
  },
  255: {
    java: {
      array: "",
    },
  },
  256: {
    java: {
      array: "",
    },
  },
  259: {
    java: {
      array: "",
    },
  },
  260: {
    java: {
      array: "",
    },
  },
  265: {
    java: {
      array: "",
    },
  },
  268: {
    java: {
      array: "",
    },
  },
  269: {
    java: {
      array: "",
    },
  },
  271: {
    java: {
      array: "",
    },
  },
  274: {
    java: {
      array: "",
    },
  },
  275: {
    java: {
      array: "",
    },
  },
  280: {
    java: {
      array: "",
    },
  },
  281: {
    java: {
      array: "",
    },
  },
  283: {
    java: {
      array: "",
    },
  },
  284: {
    java: {
      array: "",
    },
  },
  286: {
    java: {
      array: "",
    },
  },
  287: {
    java: {
      array: "",
    },
  },
  288: {
    java: {
      array: "",
    },
  },
  289: {
    java: {
      array: "",
    },
  },
  296: {
    java: {
      array: "",
    },
  },
  300: {
    java: {
      array: "",
    },
  },
  302: {
    java: {
      array: "",
    },
  },
  303: {
    java: {
      array: "",
    },
  },
  304: {
    java: {
      array: "",
    },
  },
  305: {
    java: {
      array: "",
    },
  },
  307: {
    java: {
      array: "",
    },
  },
  308: {
    java: {
      array: "",
    },
  },
  309: {
    java: {
      array: "",
    },
  },
  311: {
    java: {
      array: "",
    },
  },
  312: {
    java: {
      array: "",
    },
  },
  313: {
    java: {
      array: "",
    },
  },
  315: {
    java: {
      array: "",
    },
  },
  317: {
    java: {
      array: "",
    },
  },
  318: {
    java: {
      array: "",
    },
  },
  321: {
    java: {
      array: "",
    },
  },
  322: {
    java: {
      array: "",
    },
  },
  324: {
    java: {
      array: "",
    },
  },
  325: {
    java: {
      array: "",
    },
  },
  327: {
    java: {
      array: "",
    },
  },
  329: {
    java: {
      array: "",
    },
  },
  330: {
    java: {
      array: "",
    },
  },
  334: {
    java: {
      array: "",
    },
  },
  335: {
    java: {
      array: "",
    },
  },
  336: {
    java: {
      array: "",
    },
  },
  346: {
    java: {
      array: "",
    },
  },
  347: {
    java: {
      array: "",
    },
  },
  348: {
    java: {
      array: "",
    },
  },
  349: {
    java: {
      array: "",
    },
  },
  350: {
    java: {
      array: "",
    },
  },
  353: {
    java: {
      array: "",
    },
  },
  354: {
    java: {
      array: "",
    },
  },
  356: {
    java: {
      array: "",
    },
  },
  360: {
    java: {
      array: "",
    },
  },
  361: {
    java: {
      array: "",
    },
  },
  362: {
    java: {
      array: "",
    },
  },
  363: {
    java: {
      array: "",
    },
  },
  368: {
    java: {
      array: "",
    },
  },
  370: {
    java: {
      array: "",
    },
  },
  373: {
    java: {
      array: "",
    },
  },
  376: {
    java: {
      array: "",
    },
  },
  377: {
    java: {
      array: "",
    },
  },
  378: {
    java: {
      array: "",
    },
  },
  379: {
    java: {
      array: "",
    },
  },
  380: {
    java: {
      array: "",
    },
  },
  381: {
    java: {
      array: "",
    },
  },
  384: {
    java: {
      array: "",
    },
  },
  391: {
    java: {
      array: "",
    },
  },
  393: {
    java: {
      array: "",
    },
  },
  396: {
    java: {
      array: "",
    },
  },
  399: {
    java: {
      array: "",
    },
  },
  403: {
    java: {
      array: "",
    },
  },
  406: {
    java: {
      array: "",
    },
  },
  407: {
    java: {
      array: "",
    },
  },
  410: {
    java: {
      array: "",
    },
  },
  413: {
    java: {
      array: "",
    },
  },
  414: {
    java: {
      array: "",
    },
  },
  416: {
    java: {
      array: "",
    },
  },
  417: {
    java: {
      array: "",
    },
  },
  418: {
    java: {
      array: "",
    },
  },
  419: {
    java: {
      array: "",
    },
  },
  421: {
    java: {
      array: "",
    },
  },
  422: {
    java: {
      array: "",
    },
  },
  425: {
    java: {
      array: "",
    },
  },
  427: {
    java: {
      array: "",
    },
  },
  435: {
    java: {
      array: "",
    },
  },
  436: {
    java: {
      array: "",
    },
  },
  442: {
    java: {
      array: "",
    },
  },
  444: {
    java: {
      array: "",
    },
  },
  446: {
    java: {
      array: "",
    },
  },
  447: {
    java: {
      array: "",
    },
  },
  448: {
    java: {
      array: "",
    },
  },
  452: {
    java: {
      array: "",
    },
  },
  453: {
    java: {
      array: "",
    },
  },
  454: {
    java: {
      array: "",
    },
  },
  455: {
    java: {
      array: "",
    },
  },
  456: {
    java: {
      array: "",
    },
  },
  457: {
    java: {
      array: "",
    },
  },
  462: {
    java: {
      array: "",
    },
  },
  463: {
    java: {
      array: "",
    },
  },
  465: {
    java: {
      array: "",
    },
  },
  469: {
    java: {
      array: "",
    },
  },
  472: {
    java: {
      array: "",
    },
  },
  473: {
    java: {
      array: "",
    },
  },
  474: {
    java: {
      array: "",
    },
  },
  475: {
    java: {
      array: "",
    },
  },
  477: {
    java: {
      array: "",
    },
  },
  480: {
    java: {
      array: "",
    },
  },
  484: {
    java: {
      array: "",
    },
  },
  485: {
    java: {
      array: "",
    },
  },
  486: {
    java: {
      array: "",
    },
  },
  487: {
    java: {
      array: "",
    },
  },
  490: {
    java: {
      array: "",
    },
  },
  491: {
    java: {
      array: "",
    },
  },
  493: {
    java: {
      array: "",
    },
  },
  494: {
    java: {
      array: "",
    },
  },
  495: {
    java: {
      array: "",
    },
  },
  496: {
    java: {
      array: "",
    },
  },
  497: {
    java: {
      array: "",
    },
  },
  498: {
    java: {
      array: "",
    },
  },
  499: {
    java: {
      array: "",
    },
  },
  500: {
    java: {
      array: "",
    },
  },
  502: {
    java: {
      array: "",
    },
  },
  503: {
    java: {
      array: "",
    },
  },
  505: {
    java: {
      array: "",
    },
  },
  506: {
    java: {
      array: "",
    },
  },
  517: {
    java: {
      array: "",
    },
  },
  518: {
    java: {
      array: "",
    },
  },
  522: {
    java: {
      array: "",
    },
  },
  523: {
    java: {
      array: "",
    },
  },
  524: {
    java: {
      array: "",
    },
  },
  525: {
    java: {
      array: "",
    },
  },
  526: {
    java: {
      array: "",
    },
  },
  527: {
    java: {
      array: "",
    },
  },
  528: {
    java: {
      array: "",
    },
  },
  529: {
    java: {
      array: "",
    },
  },
  531: {
    java: {
      array: "",
    },
  },
  532: {
    java: {
      array: "",
    },
  },
  533: {
    java: {
      array: "",
    },
  },
  539: {
    java: {
      array: "",
    },
  },
  540: {
    java: {
      array: "",
    },
  },
  542: {
    java: {
      array: "",
    },
  },
  546: {
    java: {
      array: "",
    },
  },
  548: {
    java: {
      array: "",
    },
  },
  553: {
    java: {
      array: "",
    },
  },
  554: {
    java: {
      array: "",
    },
  },
  555: {
    java: {
      array: "",
    },
  },
  560: {
    java: {
      array: "",
    },
  },
  561: {
    java: {
      array: "",
    },
  },
  562: {
    java: {
      array: "",
    },
  },
  565: {
    java: {
      array: "",
    },
  },
  566: {
    java: {
      array: "",
    },
  },
  568: {
    java: {
      array: "",
    },
  },
  573: {
    java: {
      array: "",
    },
  },
  575: {
    java: {
      array: "",
    },
  },
  581: {
    java: {
      array: "",
    },
  },
  582: {
    java: {
      array: "",
    },
  },
  587: {
    java: {
      array: "",
    },
  },
  594: {
    java: {
      array: "",
    },
  },
  598: {
    java: {
      array: "",
    },
  },
  599: {
    java: {
      array: "",
    },
  },
  604: {
    java: {
      array: "",
    },
  },
  605: {
    java: {
      array: "",
    },
  },
  609: {
    java: {
      array: "",
    },
  },
  611: {
    java: {
      array: "",
    },
  },
  616: {
    java: {
      array: "",
    },
  },
  621: {
    java: {
      array: "",
    },
  },
  622: {
    java: {
      array: "",
    },
  },
  624: {
    java: {
      array: "",
    },
  },
  628: {
    java: {
      array: "",
    },
  },
  630: {
    java: {
      array: "",
    },
  },
  631: {
    java: {
      array: "",
    },
  },
  632: {
    java: {
      array: "",
    },
  },
  636: {
    java: {
      array: "",
    },
  },
  638: {
    java: {
      array: "",
    },
  },
  641: {
    java: {
      array: "",
    },
  },
  643: {
    java: {
      array: "",
    },
  },
  644: {
    java: {
      array: "",
    },
  },
  645: {
    java: {
      array: "",
    },
  },
  646: {
    java: {
      array: "",
    },
  },
  648: {
    java: {
      array: "",
    },
  },
  654: {
    java: {
      array: "",
    },
  },
  656: {
    java: {
      array: "",
    },
  },
  658: {
    java: {
      array: "",
    },
  },
  659: {
    java: {
      array: "",
    },
  },
  661: {
    java: {
      array: "",
    },
  },
  665: {
    java: {
      array: "",
    },
  },
  666: {
    java: {
      array: "",
    },
  },
  667: {
    java: {
      array: "",
    },
  },
  673: {
    java: {
      array: "",
    },
  },
  674: {
    java: {
      array: "",
    },
  },
  675: {
    java: {
      array: "",
    },
  },
  679: {
    java: {
      array: "",
    },
  },
  682: {
    java: {
      array: "",
    },
  },
  683: {
    java: {
      array: "",
    },
  },
  689: {
    java: {
      array: "",
    },
  },
  690: {
    java: {
      array: "",
    },
  },
  691: {
    java: {
      array: "",
    },
  },
  695: {
    java: {
      array: "",
    },
  },
  697: {
    java: {
      array: "",
    },
  },
  698: {
    java: {
      array: "",
    },
  },
  699: {
    java: {
      array: "",
    },
  },
  702: {
    java: {
      array: "",
    },
  },
  704: {
    java: {
      array: "",
    },
  },
  705: {
    java: {
      array: "",
    },
  },
  706: {
    java: {
      array: "",
    },
  },
  710: {
    java: {
      array: "",
    },
  },
  713: {
    java: {
      array: "",
    },
  },
  714: {
    java: {
      array: "",
    },
  },
  717: {
    java: {
      array: "",
    },
  },
  718: {
    java: {
      array: "",
    },
  },
  719: {
    java: {
      array: "",
    },
  },
  720: {
    java: {
      array: "",
    },
  },
  721: {
    java: {
      array: "",
    },
  },
  722: {
    java: {
      array: "",
    },
  },
  723: {
    java: {
      array: "",
    },
  },
  724: {
    java: {
      array: "",
    },
  },
  729: {
    java: {
      array: "",
    },
  },
  731: {
    java: {
      array: "",
    },
  },
  733: {
    java: {
      array: "",
    },
  },
  734: {
    java: {
      array: "",
    },
  },
  735: {
    java: {
      array: "",
    },
  },
  737: {
    java: {
      array: "",
    },
  },
  739: {
    java: {
      array: "",
    },
  },
  740: {
    java: {
      array: "",
    },
  },
  741: {
    java: {
      array: "",
    },
  },
  744: {
    java: {
      array: "",
    },
  },
  745: {
    java: {
      array: "",
    },
  },
  746: {
    java: {
      array: "",
    },
  },
  747: {
    java: {
      array: "",
    },
  },
  748: {
    java: {
      array: "",
    },
  },
  749: {
    java: {
      array: "",
    },
  },
  750: {
    java: {
      array: "",
    },
  },
  752: {
    java: {
      array: "",
    },
  },
  755: {
    java: {
      array: "",
    },
  },
  757: {
    java: {
      array: "",
    },
  },
  758: {
    java: {
      array: "",
    },
  },
  759: {
    java: {
      array: "",
    },
  },
  760: {
    java: {
      array: "",
    },
  },
  764: {
    java: {
      array: "",
    },
  },
  766: {
    java: {
      array: "",
    },
  },
  768: {
    java: {
      array: "",
    },
  },
  769: {
    java: {
      array: "",
    },
  },
  773: {
    java: {
      array: "",
    },
  },
  774: {
    java: {
      array: "",
    },
  },
  775: {
    java: {
      array: "",
    },
  },
  778: {
    java: {
      array: "",
    },
  },
  781: {
    java: {
      array: "",
    },
  },
  782: {
    java: {
      array: "",
    },
  },
  786: {
    java: {
      array: "",
    },
  },
  789: {
    java: {
      array: "",
    },
  },
  792: {
    java: {
      array: "",
    },
  },
  794: {
    java: {
      array: "",
    },
  },
  795: {
    java: {
      array: "",
    },
  },
  798: {
    java: {
      array: "",
    },
  },
  801: {
    java: {
      array: "",
    },
  },
  803: {
    java: {
      array: "",
    },
  },
  804: {
    java: {
      array: "",
    },
  },
  805: {
    java: {
      array: "",
    },
  },
  806: {
    java: {
      array: "",
    },
  },
  807: {
    java: {
      array: "",
    },
  },
  809: {
    java: {
      array: "",
    },
  },
  810: {
    java: {
      array: "",
    },
  },
  811: {
    java: {
      array: "",
    },
  },
  812: {
    java: {
      array: "",
    },
  },
  813: {
    java: {
      array: "",
    },
  },
  815: {
    java: {
      array: "",
    },
  },
  817: {
    java: {
      array: "",
    },
  },
  819: {
    java: {
      array: "",
    },
  },
  820: {
    java: {
      array: "",
    },
  },
  821: {
    java: {
      array: "",
    },
  },
  822: {
    java: {
      array: "",
    },
  },
  823: {
    java: {
      array: "",
    },
  },
  825: {
    java: {
      array: "",
    },
  },
  826: {
    java: {
      array: "",
    },
  },
  827: {
    java: {
      array: "",
    },
  },
  832: {
    java: {
      array: "",
    },
  },
  833: {
    java: {
      array: "",
    },
  },
  835: {
    java: {
      array: "",
    },
  },
  839: {
    java: {
      array: "",
    },
  },
  840: {
    java: {
      array: "",
    },
  },
  843: {
    java: {
      array: "",
    },
  },
  845: {
    java: {
      array: "",
    },
  },
  846: {
    java: {
      array: "",
    },
  },
  848: {
    java: {
      array: "",
    },
  },
  849: {
    java: {
      array: "",
    },
  },
  850: {
    java: {
      array: "",
    },
  },
  851: {
    java: {
      array: "",
    },
  },
  852: {
    java: {
      array: "",
    },
  },
  853: {
    java: {
      array: "",
    },
  },
  857: {
    java: {
      array: "",
    },
  },
  860: {
    java: {
      array: "",
    },
  },
  861: {
    java: {
      array: "",
    },
  },
  862: {
    java: {
      array: "",
    },
  },
  864: {
    java: {
      array: "",
    },
  },
  867: {
    java: {
      array: "",
    },
  },
  870: {
    java: {
      array: "",
    },
  },
  871: {
    java: {
      array: "",
    },
  },
  873: {
    java: {
      array: "",
    },
  },
  874: {
    java: {
      array: "",
    },
  },
  875: {
    java: {
      array: "",
    },
  },
  877: {
    java: {
      array: "",
    },
  },
  879: {
    java: {
      array: "",
    },
  },
  881: {
    java: {
      array: "",
    },
  },
  883: {
    java: {
      array: "",
    },
  },
  885: {
    java: {
      array: "",
    },
  },
  888: {
    java: {
      array: "",
    },
  },
  889: {
    java: {
      array: "",
    },
  },
  890: {
    java: {
      array: "",
    },
  },
  891: {
    java: {
      array: "",
    },
  },
  892: {
    java: {
      array: "",
    },
  },
  893: {
    java: {
      array: "",
    },
  },
  896: {
    java: {
      array: "",
    },
  },
  898: {
    java: {
      array: "",
    },
  },
  900: {
    java: {
      array: "",
    },
  },
  902: {
    java: {
      array: "",
    },
  },
  904: {
    java: {
      array: "",
    },
  },
  905: {
    java: {
      array: "",
    },
  },
  907: {
    java: {
      array: "",
    },
  },
  908: {
    java: {
      array: "",
    },
  },
  909: {
    java: {
      array: "",
    },
  },
  910: {
    java: {
      array: "",
    },
  },
  911: {
    java: {
      array: "",
    },
  },
  912: {
    java: {
      array: "",
    },
  },
  914: {
    java: {
      array: "",
    },
  },
  915: {
    java: {
      array: "",
    },
  },
  916: {
    java: {
      array: "",
    },
  },
  918: {
    java: {
      array: "",
    },
  },
  922: {
    java: {
      array: "",
    },
  },
  923: {
    java: {
      array: "",
    },
  },
  924: {
    java: {
      array: "",
    },
  },
  927: {
    java: {
      array: "",
    },
  },
  928: {
    java: {
      array: "",
    },
  },
  929: {
    java: {
      array: "",
    },
  },
  930: {
    java: {
      array: "",
    },
  },
  931: {
    java: {
      array: "",
    },
  },
  932: {
    java: {
      array: "",
    },
  },
  934: {
    java: {
      array: "",
    },
  },
  937: {
    java: {
      array: "",
    },
  },
  939: {
    java: {
      array: "",
    },
  },
  941: {
    java: {
      array: "",
    },
  },
  942: {
    java: {
      array: "",
    },
  },
  943: {
    java: {
      array: "",
    },
  },
  944: {
    java: {
      array: "",
    },
  },
  945: {
    java: {
      array: "",
    },
  },
  946: {
    java: {
      array: "",
    },
  },
  948: {
    java: {
      array: "",
    },
  },
  949: {
    java: {
      array: "",
    },
  },
  950: {
    java: {
      array: "",
    },
  },
  952: {
    java: {
      array: "",
    },
  },
  953: {
    java: {
      array: "",
    },
  },
  954: {
    java: {
      array: "",
    },
  },
  955: {
    java: {
      array: "",
    },
  },
  956: {
    java: {
      array: "",
    },
  },
  957: {
    java: {
      array: "",
    },
  },
  959: {
    java: {
      array: "",
    },
  },
  960: {
    java: {
      array: "",
    },
  },
  961: {
    java: {
      array: "",
    },
  },
  962: {
    java: {
      array: "",
    },
  },
  963: {
    java: {
      array: "",
    },
  },
  966: {
    java: {
      array: "",
    },
  },
  969: {
    java: {
      array: "",
    },
  },
  973: {
    java: {
      array: "",
    },
  },
  974: {
    java: {
      array: "",
    },
  },
  975: {
    java: {
      array: "",
    },
  },
  976: {
    java: {
      array: "",
    },
  },
  977: {
    java: {
      array: "",
    },
  },
  978: {
    java: {
      array: "",
    },
  },
  980: {
    java: {
      array: "",
    },
  },
  982: {
    java: {
      array: "",
    },
  },
  983: {
    java: {
      array: "",
    },
  },
  985: {
    java: {
      array: "",
    },
  },
  986: {
    java: {
      array: "",
    },
  },
  989: {
    java: {
      array: "",
    },
  },
  990: {
    java: {
      array: "",
    },
  },
  992: {
    java: {
      array: "",
    },
  },
  994: {
    java: {
      array: "",
    },
  },
  995: {
    java: {
      array: "",
    },
  },
  996: {
    java: {
      array: "",
    },
  },
  997: {
    java: {
      array: "",
    },
  },
  999: {
    java: {
      array: "",
    },
  },
  1000: {
    java: {
      array: "",
    },
  },
  1001: {
    java: {
      array: "",
    },
  },
  1002: {
    java: {
      array: "",
    },
  },
  1004: {
    java: {
      array: "",
    },
  },
  1005: {
    java: {
      array: "",
    },
  },
  1007: {
    java: {
      array: "",
    },
  },
  1008: {
    java: {
      array: "",
    },
  },
  1010: {
    java: {
      array: "",
    },
  },
  1011: {
    java: {
      array: "",
    },
  },
  1013: {
    java: {
      array: "",
    },
  },
  1014: {
    java: {
      array: "",
    },
  },
  1018: {
    java: {
      array: "",
    },
  },
  1019: {
    java: {
      array: "",
    },
  },
  1020: {
    java: {
      array: "",
    },
  },
  1023: {
    java: {
      array: "",
    },
  },
  1024: {
    java: {
      array: "",
    },
  },
  1027: {
    java: {
      array: "",
    },
  },
  1029: {
    java: {
      array: "",
    },
  },
  1030: {
    java: {
      array: "",
    },
  },
  1031: {
    java: {
      array: "",
    },
  },
  1032: {
    java: {
      array: "",
    },
  },
  1034: {
    java: {
      array: "",
    },
  },
  1035: {
    java: {
      array: "",
    },
  },
  1036: {
    java: {
      array: "",
    },
  },
  1037: {
    java: {
      array: "",
    },
  },
  1039: {
    java: {
      array: "",
    },
  },
  1040: {
    java: {
      array: "",
    },
  },
  1043: {
    java: {
      array: "",
    },
  },
  1046: {
    java: {
      array: "",
    },
  },
  1048: {
    java: {
      array: "",
    },
  },
  1049: {
    java: {
      array: "",
    },
  },
  1051: {
    java: {
      array: "",
    },
  },
  1052: {
    java: {
      array: "",
    },
  },
  1053: {
    java: {
      array: "",
    },
  },
  1054: {
    java: {
      array: "",
    },
  },
  1057: {
    java: {
      array: "",
    },
  },
  1058: {
    java: {
      array: "",
    },
  },
  1060: {
    java: {
      array: "",
    },
  },
  1063: {
    java: {
      array: "",
    },
  },
  1064: {
    java: {
      array: "",
    },
  },
  1065: {
    java: {
      array: "",
    },
  },
  1066: {
    java: {
      array: "",
    },
  },
  1072: {
    java: {
      array: "",
    },
  },
  1073: {
    java: {
      array: "",
    },
  },
  1074: {
    java: {
      array: "",
    },
  },
  1085: {
    java: {
      array: "",
    },
  },
  1086: {
    java: {
      array: "",
    },
  },
  1089: {
    java: {
      array: "",
    },
  },
  1090: {
    java: {
      array: "",
    },
  },
  1091: {
    java: {
      array: "",
    },
  },
  1093: {
    java: {
      array: "",
    },
  },
  1094: {
    java: {
      array: "",
    },
  },
  1095: {
    java: {
      array: "",
    },
  },
  1099: {
    java: {
      array: "",
    },
  },
  1101: {
    java: {
      array: "",
    },
  },
  1102: {
    java: {
      array: "",
    },
  },
  1105: {
    java: {
      array: "",
    },
  },
  1109: {
    java: {
      array: "",
    },
  },
  1110: {
    java: {
      array: "",
    },
  },
  1121: {
    java: {
      array: "",
    },
  },
  1122: {
    java: {
      array: "",
    },
  },
  1124: {
    java: {
      array: "",
    },
  },
  1125: {
    java: {
      array: "",
    },
  },
  1128: {
    java: {
      array: "",
    },
  },
  1130: {
    java: {
      array: "",
    },
  },
  1131: {
    java: {
      array: "",
    },
  },
  1133: {
    java: {
      array: "",
    },
  },
  1139: {
    java: {
      array: "",
    },
  },
  1140: {
    java: {
      array: "",
    },
  },
  1144: {
    java: {
      array: "",
    },
  },
  1146: {
    java: {
      array: "",
    },
  },
  1150: {
    java: {
      array: "",
    },
  },
  1151: {
    java: {
      array: "",
    },
  },
  1152: {
    java: {
      array: "",
    },
  },
  1157: {
    java: {
      array: "",
    },
  },
  1160: {
    java: {
      array: "",
    },
  },
  1162: {
    java: {
      array: "",
    },
  },
  1167: {
    java: {
      array: "",
    },
  },
  1169: {
    java: {
      array: "",
    },
  },
  1170: {
    java: {
      array: "",
    },
  },
  1176: {
    java: {
      array: "",
    },
  },
  1177: {
    java: {
      array: "",
    },
  },
  1178: {
    java: {
      array: "",
    },
  },
  1181: {
    java: {
      array: "",
    },
  },
  1182: {
    java: {
      array: "",
    },
  },
  1184: {
    java: {
      array: "",
    },
  },
  1186: {
    java: {
      array: "",
    },
  },
  1187: {
    java: {
      array: "",
    },
  },
  1191: {
    java: {
      array: "",
    },
  },
  1196: {
    java: {
      array: "",
    },
  },
  1198: {
    java: {
      array: "",
    },
  },
  1199: {
    java: {
      array: "",
    },
  },
  1200: {
    java: {
      array: "",
    },
  },
  1202: {
    java: {
      array: "",
    },
  },
  1207: {
    java: {
      array: "",
    },
  },
  1210: {
    java: {
      array: "",
    },
  },
  1213: {
    java: {
      array: "",
    },
  },
  1217: {
    java: {
      array: "",
    },
  },
  1218: {
    java: {
      array: "",
    },
  },
  1219: {
    java: {
      array: "",
    },
  },
  1222: {
    java: {
      array: "",
    },
  },
  1223: {
    java: {
      array: "",
    },
  },
  1224: {
    java: {
      array: "",
    },
  },
  1228: {
    java: {
      array: "",
    },
  },
  1229: {
    java: {
      array: "",
    },
  },
  1230: {
    java: {
      array: "",
    },
  },
  1231: {
    java: {
      array: "",
    },
  },
  1232: {
    java: {
      array: "",
    },
  },
  1233: {
    java: {
      array: "",
    },
  },
  1235: {
    java: {
      array: "",
    },
  },
  1239: {
    java: {
      array: "",
    },
  },
  1243: {
    java: {
      array: "",
    },
  },
  1246: {
    java: {
      array: "",
    },
  },
  1248: {
    java: {
      array: "",
    },
  },
  1250: {
    java: {
      array: "",
    },
  },
  1252: {
    java: {
      array: "",
    },
  },
  1253: {
    java: {
      array: "",
    },
  },
  1254: {
    java: {
      array: "",
    },
  },
  1255: {
    java: {
      array: "",
    },
  },
  1257: {
    java: {
      array: "",
    },
  },
  1258: {
    java: {
      array: "",
    },
  },
  1260: {
    java: {
      array: "",
    },
  },
  1262: {
    java: {
      array: "",
    },
  },
  1263: {
    java: {
      array: "",
    },
  },
  1266: {
    java: {
      array: "",
    },
  },
  1267: {
    java: {
      array: "",
    },
  },
  1268: {
    java: {
      array: "",
    },
  },
  1272: {
    java: {
      array: "",
    },
  },
  1273: {
    java: {
      array: "",
    },
  },
  1274: {
    java: {
      array: "",
    },
  },
  1275: {
    java: {
      array: "",
    },
  },
  1277: {
    java: {
      array: "",
    },
  },
  1282: {
    java: {
      array: "",
    },
  },
  1283: {
    java: {
      array: "",
    },
  },
  1284: {
    java: {
      array: "",
    },
  },
  1287: {
    java: {
      array: "",
    },
  },
  1288: {
    java: {
      array: "",
    },
  },
  1289: {
    java: {
      array: "",
    },
  },
  1292: {
    java: {
      array: "",
    },
  },
  1293: {
    java: {
      array: "",
    },
  },
  1295: {
    java: {
      array: "",
    },
  },
  1296: {
    java: {
      array: "",
    },
  },
  1298: {
    java: {
      array: "",
    },
  },
  1299: {
    java: {
      array: "",
    },
  },
  1300: {
    java: {
      array: "",
    },
  },
  1301: {
    java: {
      array: "",
    },
  },
  1304: {
    java: {
      array: "",
    },
  },
  1306: {
    java: {
      array: "",
    },
  },
  1307: {
    java: {
      array: "",
    },
  },
  1310: {
    java: {
      array: "",
    },
  },
  1311: {
    java: {
      array: "",
    },
  },
  1313: {
    java: {
      array: "",
    },
  },
  1314: {
    java: {
      array: "",
    },
  },
  1324: {
    java: {
      array: "",
    },
  },
  1326: {
    java: {
      array: "",
    },
  },
  1329: {
    java: {
      array: "",
    },
  },
  1330: {
    java: {
      array: "",
    },
  },
  1331: {
    java: {
      array: "",
    },
  },
  1333: {
    java: {
      array: "",
    },
  },
  1335: {
    java: {
      array: "",
    },
  },
  1337: {
    java: {
      array: "",
    },
  },
  1338: {
    java: {
      array: "",
    },
  },
  1340: {
    java: {
      array: "",
    },
  },
  1343: {
    java: {
      array: "",
    },
  },
  1345: {
    java: {
      array: "",
    },
  },
  1346: {
    java: {
      array: "",
    },
  },
  1349: {
    java: {
      array: "",
    },
  },
  1351: {
    java: {
      array: "",
    },
  },
  1352: {
    java: {
      array: "",
    },
  },
  1353: {
    java: {
      array: "",
    },
  },
  1354: {
    java: {
      array: "",
    },
  },
  1356: {
    java: {
      array: "",
    },
  },
  1357: {
    java: {
      array: "",
    },
  },
  1363: {
    java: {
      array: "",
    },
  },
  1365: {
    java: {
      array: "",
    },
  },
  1366: {
    java: {
      array: "",
    },
  },
  1368: {
    java: {
      array: "",
    },
  },
  1375: {
    java: {
      array: "",
    },
  },
  1380: {
    java: {
      array: "",
    },
  },
  1381: {
    java: {
      array: "",
    },
  },
  1383: {
    java: {
      array: "",
    },
  },
  1385: {
    java: {
      array: "",
    },
  },
  1386: {
    java: {
      array: "",
    },
  },
  1388: {
    java: {
      array: "",
    },
  },
  1389: {
    java: {
      array: "",
    },
  },
  1390: {
    java: {
      array: "",
    },
  },
  1391: {
    java: {
      array: "",
    },
  },
  1394: {
    java: {
      array: "",
    },
  },
  1395: {
    java: {
      array: "",
    },
  },
  1402: {
    java: {
      array: "",
    },
  },
  1403: {
    java: {
      array: "",
    },
  },
  1406: {
    java: {
      array: "",
    },
  },
  1408: {
    java: {
      array: "",
    },
  },
  1409: {
    java: {
      array: "",
    },
  },
  1413: {
    java: {
      array: "",
    },
  },
  1418: {
    java: {
      array: "",
    },
  },
  1423: {
    java: {
      array: "",
    },
  },
  1424: {
    java: {
      array: "",
    },
  },
  1425: {
    java: {
      array: "",
    },
  },
  1426: {
    java: {
      array: "",
    },
  },
  1427: {
    java: {
      array: "",
    },
  },
  1428: {
    java: {
      array: "",
    },
  },
  1429: {
    java: {
      array: "",
    },
  },
  1431: {
    java: {
      array: "",
    },
  },
  1434: {
    java: {
      array: "",
    },
  },
  1436: {
    java: {
      array: "",
    },
  },
  1437: {
    java: {
      array: "",
    },
  },
  1438: {
    java: {
      array: "",
    },
  },
  1439: {
    java: {
      array: "",
    },
  },
  1441: {
    java: {
      array: "",
    },
  },
  1442: {
    java: {
      array: "",
    },
  },
  1444: {
    java: {
      array: "",
    },
  },
  1449: {
    java: {
      array: "",
    },
  },
  1450: {
    java: {
      array: "",
    },
  },
  1452: {
    java: {
      array: "",
    },
  },
  1453: {
    java: {
      array: "",
    },
  },
  1458: {
    java: {
      array: "",
    },
  },
  1460: {
    java: {
      array: "",
    },
  },
  1463: {
    java: {
      array: "",
    },
  },
  1464: {
    java: {
      array: "",
    },
  },
  1465: {
    java: {
      array: "",
    },
  },
  1467: {
    java: {
      array: "",
    },
  },
  1470: {
    java: {
      array: "",
    },
  },
  1471: {
    java: {
      array: "",
    },
  },
  1472: {
    java: {
      array: "",
    },
  },
  1473: {
    java: {
      array: "",
    },
  },
  1475: {
    java: {
      array: "",
    },
  },
  1476: {
    java: {
      array: "",
    },
  },
  1477: {
    java: {
      array: "",
    },
  },
  1478: {
    java: {
      array: "",
    },
  },
  1480: {
    java: {
      array: "",
    },
  },
  1481: {
    java: {
      array: "",
    },
  },
  1482: {
    java: {
      array: "",
    },
  },
  1487: {
    java: {
      array: "",
    },
  },
  1488: {
    java: {
      array: "",
    },
  },
  1491: {
    java: {
      array: "",
    },
  },
  1493: {
    java: {
      array: "",
    },
  },
  1497: {
    java: {
      array: "",
    },
  },
  1498: {
    java: {
      array: "",
    },
  },
  1499: {
    java: {
      array: "",
    },
  },
  1502: {
    java: {
      array: "",
    },
  },
  1503: {
    java: {
      array: "",
    },
  },
  1504: {
    java: {
      array: "",
    },
  },
  1508: {
    java: {
      array: "",
    },
  },
  1509: {
    java: {
      array: "",
    },
  },
  1512: {
    java: {
      array: "",
    },
  },
  1514: {
    java: {
      array: "",
    },
  },
  1515: {
    java: {
      array: "",
    },
  },
  1521: {
    java: {
      array: "",
    },
  },
  1524: {
    java: {
      array: "",
    },
  },
  1526: {
    java: {
      array: "",
    },
  },
  1528: {
    java: {
      array: "",
    },
  },
  1533: {
    java: {
      array: "",
    },
  },
  1534: {
    java: {
      array: "",
    },
  },
  1535: {
    java: {
      array: "",
    },
  },
  1536: {
    java: {
      array: "",
    },
  },
  1537: {
    java: {
      array: "",
    },
  },
  1538: {
    java: {
      array: "",
    },
  },
  1539: {
    java: {
      array: "",
    },
  },
  1546: {
    java: {
      array: "",
    },
  },
  1547: {
    java: {
      array: "",
    },
  },
  1550: {
    java: {
      array: "",
    },
  },
  1552: {
    java: {
      array: "",
    },
  },
  1558: {
    java: {
      array: "",
    },
  },
  1559: {
    java: {
      array: "",
    },
  },
  1560: {
    java: {
      array: "",
    },
  },
  1561: {
    java: {
      array: "",
    },
  },
  1562: {
    java: {
      array: "",
    },
  },
  1563: {
    java: {
      array: "",
    },
  },
  1564: {
    java: {
      array: "",
    },
  },
  1566: {
    java: {
      array: "",
    },
  },
  1567: {
    java: {
      array: "",
    },
  },
  1568: {
    java: {
      array: "",
    },
  },
  1569: {
    java: {
      array: "",
    },
  },
  1570: {
    java: {
      array: "",
    },
  },
  1572: {
    java: {
      array: "",
    },
  },
  1574: {
    java: {
      array: "",
    },
  },
  1575: {
    java: {
      array: "",
    },
  },
  1577: {
    java: {
      array: "",
    },
  },
  1578: {
    java: {
      array: "",
    },
  },
  1580: {
    java: {
      array: "",
    },
  },
  1582: {
    java: {
      array: "",
    },
  },
  1583: {
    java: {
      array: "",
    },
  },
  1584: {
    java: {
      array: "",
    },
  },
  1588: {
    java: {
      array: "",
    },
  },
  1589: {
    java: {
      array: "",
    },
  },
  1590: {
    java: {
      array: "",
    },
  },
  1591: {
    java: {
      array: "",
    },
  },
  1594: {
    java: {
      array: "",
    },
  },
  1595: {
    java: {
      array: "",
    },
  },
  1598: {
    java: {
      array: "",
    },
  },
  1599: {
    java: {
      array: "",
    },
  },
  1601: {
    java: {
      array: "",
    },
  },
  1604: {
    java: {
      array: "",
    },
  },
  1605: {
    java: {
      array: "",
    },
  },
  1606: {
    java: {
      array: "",
    },
  },
  1608: {
    java: {
      array: "",
    },
  },
  1610: {
    java: {
      array: "",
    },
  },
  1618: {
    java: {
      array: "",
    },
  },
  1619: {
    java: {
      array: "",
    },
  },
  1620: {
    java: {
      array: "",
    },
  },
  1626: {
    java: {
      array: "",
    },
  },
  1627: {
    java: {
      array: "",
    },
  },
  1628: {
    java: {
      array: "",
    },
  },
  1629: {
    java: {
      array: "",
    },
  },
  1630: {
    java: {
      array: "",
    },
  },
  1631: {
    java: {
      array: "",
    },
  },
  1632: {
    java: {
      array: "",
    },
  },
  1636: {
    java: {
      array: "",
    },
  },
  1637: {
    java: {
      array: "",
    },
  },
  1639: {
    java: {
      array: "",
    },
  },
  1640: {
    java: {
      array: "",
    },
  },
  1642: {
    java: {
      array: "",
    },
  },
  1643: {
    java: {
      array: "",
    },
  },
  1646: {
    java: {
      array: "",
    },
  },
  1648: {
    java: {
      array: "",
    },
  },
  1649: {
    java: {
      array: "",
    },
  },
  1652: {
    java: {
      array: "",
    },
  },
  1654: {
    java: {
      array: "",
    },
  },
  1655: {
    java: {
      array: "",
    },
  },
  1656: {
    java: {
      array: "",
    },
  },
  1658: {
    java: {
      array: "",
    },
  },
  1662: {
    java: {
      array: "",
    },
  },
  1664: {
    java: {
      array: "",
    },
  },
  1665: {
    java: {
      array: "",
    },
  },
  1670: {
    java: {
      array: "",
    },
  },
  1671: {
    java: {
      array: "",
    },
  },
  1672: {
    java: {
      array: "",
    },
  },
  1673: {
    java: {
      array: "",
    },
  },
  1674: {
    java: {
      array: "",
    },
  },
  1675: {
    java: {
      array: "",
    },
  },
  1679: {
    java: {
      array: "",
    },
  },
  1681: {
    java: {
      array: "",
    },
  },
  1684: {
    java: {
      array: "",
    },
  },
  1685: {
    java: {
      array: "",
    },
  },
  1686: {
    java: {
      array: "",
    },
  },
  1687: {
    java: {
      array: "",
    },
  },
  1690: {
    java: {
      array: "",
    },
  },
  1691: {
    java: {
      array: "",
    },
  },
  1695: {
    java: {
      array: "",
    },
  },
  1696: {
    java: {
      array: "",
    },
  },
  1697: {
    java: {
      array: "",
    },
  },
  1700: {
    java: {
      array: "",
    },
  },
  1701: {
    java: {
      array: "",
    },
  },
  1703: {
    java: {
      array: "",
    },
  },
  1705: {
    java: {
      array: "",
    },
  },
  1706: {
    java: {
      array: "",
    },
  },
  1707: {
    java: {
      array: "",
    },
  },
  1708: {
    java: {
      array: "",
    },
  },
  1710: {
    java: {
      array: "",
    },
  },
  1711: {
    java: {
      array: "",
    },
  },
  1712: {
    java: {
      array: "",
    },
  },
  1713: {
    java: {
      array: "",
    },
  },
  1714: {
    java: {
      array: "",
    },
  },
  1718: {
    java: {
      array: "",
    },
  },
  1720: {
    java: {
      array: "",
    },
  },
  1722: {
    java: {
      array: "",
    },
  },
  1723: {
    java: {
      array: "",
    },
  },
  1725: {
    java: {
      array: "",
    },
  },
  1726: {
    java: {
      array: "",
    },
  },
  1727: {
    java: {
      array: "",
    },
  },
  1728: {
    java: {
      array: "",
    },
  },
  1730: {
    java: {
      array: "",
    },
  },
  1732: {
    java: {
      array: "",
    },
  },
  1733: {
    java: {
      array: "",
    },
  },
  1734: {
    java: {
      array: "",
    },
  },
  1735: {
    java: {
      array: "",
    },
  },
  1738: {
    java: {
      array: "",
    },
  },
  1743: {
    java: {
      array: "",
    },
  },
  1744: {
    java: {
      array: "",
    },
  },
  1746: {
    java: {
      array: "",
    },
  },
  1748: {
    java: {
      array: "",
    },
  },
  1749: {
    java: {
      array: "",
    },
  },
  1751: {
    java: {
      array: "",
    },
  },
  1752: {
    java: {
      array: "",
    },
  },
  1755: {
    java: {
      array: "",
    },
  },
  1756: {
    java: {
      array: "",
    },
  },
  1760: {
    java: {
      array: "",
    },
  },
  1762: {
    java: {
      array: "",
    },
  },
  1764: {
    java: {
      array: "",
    },
  },
  1765: {
    java: {
      array: "",
    },
  },
  1766: {
    java: {
      array: "",
    },
  },
  1769: {
    java: {
      array: "",
    },
  },
  1770: {
    java: {
      array: "",
    },
  },
  1772: {
    java: {
      array: "",
    },
  },
  1773: {
    java: {
      array: "",
    },
  },
  1774: {
    java: {
      array: "",
    },
  },
  1775: {
    java: {
      array: "",
    },
  },
  1776: {
    java: {
      array: "",
    },
  },
  1779: {
    java: {
      array: "",
    },
  },
  1782: {
    java: {
      array: "",
    },
  },
  1785: {
    java: {
      array: "",
    },
  },
  1787: {
    java: {
      array: "",
    },
  },
  1788: {
    java: {
      array: "",
    },
  },
  1792: {
    java: {
      array: "",
    },
  },
  1793: {
    java: {
      array: "",
    },
  },
  1798: {
    java: {
      array: "",
    },
  },
  1799: {
    java: {
      array: "",
    },
  },
  1800: {
    java: {
      array: "",
    },
  },
  1801: {
    java: {
      array: "",
    },
  },
  1803: {
    java: {
      array: "",
    },
  },
  1806: {
    java: {
      array: "",
    },
  },
  1807: {
    java: {
      array: "",
    },
  },
  1813: {
    java: {
      array: "",
    },
  },
  1814: {
    java: {
      array: "",
    },
  },
  1815: {
    java: {
      array: "",
    },
  },
  1816: {
    java: {
      array: "",
    },
  },
  1817: {
    java: {
      array: "",
    },
  },
  1818: {
    java: {
      array: "",
    },
  },
  1819: {
    java: {
      array: "",
    },
  },
  1820: {
    java: {
      array: "",
    },
  },
  1822: {
    java: {
      array: "",
    },
  },
  1823: {
    java: {
      array: "",
    },
  },
  1824: {
    java: {
      array: "",
    },
  },
  1826: {
    java: {
      array: "",
    },
  },
  1827: {
    java: {
      array: "",
    },
  },
  1828: {
    java: {
      array: "",
    },
  },
  1829: {
    java: {
      array: "",
    },
  },
  1833: {
    java: {
      array: "",
    },
  },
  1834: {
    java: {
      array: "",
    },
  },
  1835: {
    java: {
      array: "",
    },
  },
  1838: {
    java: {
      array: "",
    },
  },
  1840: {
    java: {
      array: "",
    },
  },
  1846: {
    java: {
      array: "",
    },
  },
  1847: {
    java: {
      array: "",
    },
  },
  1848: {
    java: {
      array: "",
    },
  },
  1851: {
    java: {
      array: "",
    },
  },
  1852: {
    java: {
      array: "",
    },
  },
  1854: {
    java: {
      array: "",
    },
  },
  1855: {
    java: {
      array: "",
    },
  },
  1856: {
    java: {
      array: "",
    },
  },
  1861: {
    java: {
      array: "",
    },
  },
  1862: {
    java: {
      array: "",
    },
  },
  1863: {
    java: {
      array: "",
    },
  },
  1865: {
    java: {
      array: "",
    },
  },
  1868: {
    java: {
      array: "",
    },
  },
  1870: {
    java: {
      array: "",
    },
  },
  1872: {
    java: {
      array: "",
    },
  },
  1874: {
    java: {
      array: "",
    },
  },
  1877: {
    java: {
      array: "",
    },
  },
  1878: {
    java: {
      array: "",
    },
  },
  1879: {
    java: {
      array: "",
    },
  },
  1882: {
    java: {
      array: "",
    },
  },
  1883: {
    java: {
      array: "",
    },
  },
  1885: {
    java: {
      array: "",
    },
  },
  1886: {
    java: {
      array: "",
    },
  },
  1887: {
    java: {
      array: "",
    },
  },
  1889: {
    java: {
      array: "",
    },
  },
  1891: {
    java: {
      array: "",
    },
  },
  1893: {
    java: {
      array: "",
    },
  },
  1894: {
    java: {
      array: "",
    },
  },
  1895: {
    java: {
      array: "",
    },
  },
  1898: {
    java: {
      array: "",
    },
  },
  1899: {
    java: {
      array: "",
    },
  },
  1901: {
    java: {
      array: "",
    },
  },
  1905: {
    java: {
      array: "",
    },
  },
  1906: {
    java: {
      array: "",
    },
  },
  1908: {
    java: {
      array: "",
    },
  },
  1909: {
    java: {
      array: "",
    },
  },
  1911: {
    java: {
      array: "",
    },
  },
  1912: {
    java: {
      array: "",
    },
  },
  1913: {
    java: {
      array: "",
    },
  },
  1914: {
    java: {
      array: "",
    },
  },
  1918: {
    java: {
      array: "",
    },
  },
  1920: {
    java: {
      array: "",
    },
  },
  1921: {
    java: {
      array: "",
    },
  },
  1923: {
    java: {
      array: "",
    },
  },
  1924: {
    java: {
      array: "",
    },
  },
  1926: {
    java: {
      array: "",
    },
  },
  1928: {
    java: {
      array: "",
    },
  },
  1929: {
    java: {
      array: "",
    },
  },
  1936: {
    java: {
      array: "",
    },
  },
  1937: {
    java: {
      array: "",
    },
  },
  1938: {
    java: {
      array: "",
    },
  },
  1940: {
    java: {
      array: "",
    },
  },
  1942: {
    java: {
      array: "",
    },
  },
  1943: {
    java: {
      array: "",
    },
  },
  1944: {
    java: {
      array: "",
    },
  },
  1946: {
    java: {
      array: "",
    },
  },
  1947: {
    java: {
      array: "",
    },
  },
  1948: {
    java: {
      array: "",
    },
  },
  1950: {
    java: {
      array: "",
    },
  },
  1953: {
    java: {
      array: "",
    },
  },
  1955: {
    java: {
      array: "",
    },
  },
  1956: {
    java: {
      array: "",
    },
  },
  1958: {
    java: {
      array: "",
    },
  },
  1959: {
    java: {
      array: "",
    },
  },
  1961: {
    java: {
      array: "",
    },
  },
  1962: {
    java: {
      array: "",
    },
  },
  1964: {
    java: {
      array: "",
    },
  },
  1966: {
    java: {
      array: "",
    },
  },
  1968: {
    java: {
      array: "",
    },
  },
  1970: {
    java: {
      array: "",
    },
  },
  1975: {
    java: {
      array: "",
    },
  },
  1979: {
    java: {
      array: "",
    },
  },
  1980: {
    java: {
      array: "",
    },
  },
  1981: {
    java: {
      array: "",
    },
  },
  1982: {
    java: {
      array: "",
    },
  },
  1983: {
    java: {
      array: "",
    },
  },
  1984: {
    java: {
      array: "",
    },
  },
  1985: {
    java: {
      array: "",
    },
  },
  1986: {
    java: {
      array: "",
    },
  },
  1989: {
    java: {
      array: "",
    },
  },
  1991: {
    java: {
      array: "",
    },
  },
  1992: {
    java: {
      array: "",
    },
  },
  1993: {
    java: {
      array: "",
    },
  },
  1994: {
    java: {
      array: "",
    },
  },
  1995: {
    java: {
      array: "",
    },
  },
  1996: {
    java: {
      array: "",
    },
  },
  1997: {
    java: {
      array: "",
    },
  },
  1998: {
    java: {
      array: "",
    },
  },
  2001: {
    java: {
      array: "",
    },
  },
  2006: {
    java: {
      array: "",
    },
  },
  2007: {
    java: {
      array: "",
    },
  },
  2008: {
    java: {
      array: "",
    },
  },
  2009: {
    java: {
      array: "",
    },
  },
  2011: {
    java: {
      array: "",
    },
  },
  2012: {
    java: {
      array: "",
    },
  },
  2013: {
    java: {
      array: "",
    },
  },
  2015: {
    java: {
      array: "",
    },
  },
  2016: {
    java: {
      array: "",
    },
  },
  2017: {
    java: {
      array: "",
    },
  },
  2018: {
    java: {
      array: "",
    },
  },
  2019: {
    java: {
      array: "",
    },
  },
  2021: {
    java: {
      array: "",
    },
  },
  2022: {
    java: {
      array: "",
    },
  },
  2023: {
    java: {
      array: "",
    },
  },
  2025: {
    java: {
      array: "",
    },
  },
  2028: {
    java: {
      array: "",
    },
  },
  2029: {
    java: {
      array: "",
    },
  },
  2031: {
    java: {
      array: "",
    },
  },
  2032: {
    java: {
      array: "",
    },
  },
  2033: {
    java: {
      array: "",
    },
  },
  2035: {
    java: {
      array: "",
    },
  },
  2036: {
    java: {
      array: "",
    },
  },
  2037: {
    java: {
      array: "",
    },
  },
  2039: {
    java: {
      array: "",
    },
  },
  2040: {
    java: {
      array: "",
    },
  },
  2043: {
    java: {
      array: "",
    },
  },
  2044: {
    java: {
      array: "",
    },
  },
  2049: {
    java: {
      array: "",
    },
  },
  2050: {
    java: {
      array: "",
    },
  },
  2052: {
    java: {
      array: "",
    },
  },
  2053: {
    java: {
      array: "",
    },
  },
  2054: {
    java: {
      array: "",
    },
  },
  2055: {
    java: {
      array: "",
    },
  },
  2056: {
    java: {
      array: "",
    },
  },
  2057: {
    java: {
      array: "",
    },
  },
  2059: {
    java: {
      array: "",
    },
  },
  2061: {
    java: {
      array: "",
    },
  },
  2064: {
    java: {
      array: "",
    },
  },
  2065: {
    java: {
      array: "",
    },
  },
  2070: {
    java: {
      array: "",
    },
  },
  2071: {
    java: {
      array: "",
    },
  },
  2073: {
    java: {
      array: "",
    },
  },
  2078: {
    java: {
      array: "",
    },
  },
  2079: {
    java: {
      array: "",
    },
  },
  2080: {
    java: {
      array: "",
    },
  },
  2085: {
    java: {
      array: "",
    },
  },
  2087: {
    java: {
      array: "",
    },
  },
  2088: {
    java: {
      array: "",
    },
  },
  2089: {
    java: {
      array: "",
    },
  },
  2090: {
    java: {
      array: "",
    },
  },
  2091: {
    java: {
      array: "",
    },
  },
  2094: {
    java: {
      array: "",
    },
  },
  2098: {
    java: {
      array: "",
    },
  },
  2099: {
    java: {
      array: "",
    },
  },
  2100: {
    java: {
      array: "",
    },
  },
  2101: {
    java: {
      array: "",
    },
  },
  2104: {
    java: {
      array: "",
    },
  },
  2105: {
    java: {
      array: "",
    },
  },
  2106: {
    java: {
      array: "",
    },
  },
  2107: {
    java: {
      array: "",
    },
  },
  2108: {
    java: {
      array: "",
    },
  },
  2109: {
    java: {
      array: "",
    },
  },
  2110: {
    java: {
      array: "",
    },
  },
  2111: {
    java: {
      array: "",
    },
  },
  2113: {
    java: {
      array: "",
    },
  },
  2114: {
    java: {
      array: "",
    },
  },
  2115: {
    java: {
      array: "",
    },
  },
  2121: {
    java: {
      array: "",
    },
  },
  2122: {
    java: {
      array: "",
    },
  },
  2123: {
    java: {
      array: "",
    },
  },
  2125: {
    java: {
      array: "",
    },
  },
  2126: {
    java: {
      array: "",
    },
  },
  2128: {
    java: {
      array: "",
    },
  },
  2131: {
    java: {
      array: "",
    },
  },
  2132: {
    java: {
      array: "",
    },
  },
  2133: {
    java: {
      array: "",
    },
  },
  2134: {
    java: {
      array: "",
    },
  },
  2135: {
    java: {
      array: "",
    },
  },
  2136: {
    java: {
      array: "",
    },
  },
  2137: {
    java: {
      array: "",
    },
  },
  2140: {
    java: {
      array: "",
    },
  },
  2141: {
    java: {
      array: "",
    },
  },
  2143: {
    java: {
      array: "",
    },
  },
  2144: {
    java: {
      array: "",
    },
  },
  2145: {
    java: {
      array: "",
    },
  },
  2146: {
    java: {
      array: "",
    },
  },
  2148: {
    java: {
      array: "",
    },
  },
  2149: {
    java: {
      array: "",
    },
  },
  2150: {
    java: {
      array: "",
    },
  },
  2151: {
    java: {
      array: "",
    },
  },
  2152: {
    java: {
      array: "",
    },
  },
  2154: {
    java: {
      array: "",
    },
  },
  2155: {
    java: {
      array: "",
    },
  },
  2158: {
    java: {
      array: "",
    },
  },
  2161: {
    java: {
      array: "",
    },
  },
  2163: {
    java: {
      array: "",
    },
  },
  2164: {
    java: {
      array: "",
    },
  },
  2166: {
    java: {
      array: "",
    },
  },
  2170: {
    java: {
      array: "",
    },
  },
  2171: {
    java: {
      array: "",
    },
  },
  2172: {
    java: {
      array: "",
    },
  },
  2174: {
    java: {
      array: "",
    },
  },
  2176: {
    java: {
      array: "",
    },
  },
  2179: {
    java: {
      array: "",
    },
  },
  2183: {
    java: {
      array: "",
    },
  },
  2184: {
    java: {
      array: "",
    },
  },
  2185: {
    java: {
      array: "",
    },
  },
  2187: {
    java: {
      array: "",
    },
  },
  2188: {
    java: {
      array: "",
    },
  },
  2190: {
    java: {
      array: "",
    },
  },
  2191: {
    java: {
      array: "",
    },
  },
  2195: {
    java: {
      array: "",
    },
  },
  2196: {
    java: {
      array: "",
    },
  },
  2197: {
    java: {
      array: "",
    },
  },
  2200: {
    java: {
      array: "",
    },
  },
  2201: {
    java: {
      array: "",
    },
  },
  2202: {
    java: {
      array: "",
    },
  },
  2206: {
    java: {
      array: "",
    },
  },
  2208: {
    java: {
      array: "",
    },
  },
  2210: {
    java: {
      array: "",
    },
  },
  2212: {
    java: {
      array: "",
    },
  },
  2213: {
    java: {
      array: "",
    },
  },
  2214: {
    java: {
      array: "",
    },
  },
  2215: {
    java: {
      array: "",
    },
  },
  2216: {
    java: {
      array: "",
    },
  },
  2217: {
    java: {
      array: "",
    },
  },
  2218: {
    java: {
      array: "",
    },
  },
  2219: {
    java: {
      array: "",
    },
  },
  2221: {
    java: {
      array: "",
    },
  },
  2225: {
    java: {
      array: "",
    },
  },
  2226: {
    java: {
      array: "",
    },
  },
  2227: {
    java: {
      array: "",
    },
  },
  2229: {
    java: {
      array: "",
    },
  },
  2233: {
    java: {
      array: "",
    },
  },
  2234: {
    java: {
      array: "",
    },
  },
  2237: {
    java: {
      array: "",
    },
  },
  2239: {
    java: {
      array: "",
    },
  },
  2241: {
    java: {
      array: "",
    },
  },
  2242: {
    java: {
      array: "",
    },
  },
  2244: {
    java: {
      array: "",
    },
  },
  2245: {
    java: {
      array: "",
    },
  },
  2246: {
    java: {
      array: "",
    },
  },
  2248: {
    java: {
      array: "",
    },
  },
  2249: {
    java: {
      array: "",
    },
  },
  2250: {
    java: {
      array: "",
    },
  },
  2251: {
    java: {
      array: "",
    },
  },
  2255: {
    java: {
      array: "",
    },
  },
  2256: {
    java: {
      array: "",
    },
  },
  2257: {
    java: {
      array: "",
    },
  },
  2258: {
    java: {
      array: "",
    },
  },
  2260: {
    java: {
      array: "",
    },
  },
  2261: {
    java: {
      array: "",
    },
  },
  2267: {
    java: {
      array: "",
    },
  },
  2270: {
    java: {
      array: "",
    },
  },
  2271: {
    java: {
      array: "",
    },
  },
  2272: {
    java: {
      array: "",
    },
  },
  2273: {
    java: {
      array: "",
    },
  },
  2274: {
    java: {
      array: "",
    },
  },
  2275: {
    java: {
      array: "",
    },
  },
  2277: {
    java: {
      array: "",
    },
  },
  2279: {
    java: {
      array: "",
    },
  },
  2280: {
    java: {
      array: "",
    },
  },
  2281: {
    java: {
      array: "",
    },
  },
  2282: {
    java: {
      array: "",
    },
  },
  2284: {
    java: {
      array: "",
    },
  },
  2289: {
    java: {
      array: "",
    },
  },
  2290: {
    java: {
      array: "",
    },
  },
  2291: {
    java: {
      array: "",
    },
  },
  2293: {
    java: {
      array: "",
    },
  },
  2294: {
    java: {
      array: "",
    },
  },
  2295: {
    java: {
      array: "",
    },
  },
  2297: {
    java: {
      array: "",
    },
  },
  2300: {
    java: {
      array: "",
    },
  },
  2301: {
    java: {
      array: "",
    },
  },
  2302: {
    java: {
      array: "",
    },
  },
  2303: {
    java: {
      array: "",
    },
  },
  2304: {
    java: {
      array: "",
    },
  },
  2305: {
    java: {
      array: "",
    },
  },
  2306: {
    java: {
      array: "",
    },
  },
  2307: {
    java: {
      array: "",
    },
  },
  2312: {
    java: {
      array: "",
    },
  },
  2317: {
    java: {
      array: "",
    },
  },
  2319: {
    java: {
      array: "",
    },
  },
  2321: {
    java: {
      array: "",
    },
  },
  2322: {
    java: {
      array: "",
    },
  },
  2323: {
    java: {
      array: "",
    },
  },
  2326: {
    java: {
      array: "",
    },
  },
  2328: {
    java: {
      array: "",
    },
  },
  2332: {
    java: {
      array: "",
    },
  },
  2333: {
    java: {
      array: "",
    },
  },
  2334: {
    java: {
      array: "",
    },
  },
  2335: {
    java: {
      array: "",
    },
  },
  2340: {
    java: {
      array: "",
    },
  },
  2341: {
    java: {
      array: "",
    },
  },
  2342: {
    java: {
      array: "",
    },
  },
  2343: {
    java: {
      array: "",
    },
  },
  2344: {
    java: {
      array: "",
    },
  },
  2345: {
    java: {
      array: "",
    },
  },
  2347: {
    java: {
      array: "",
    },
  },
  2348: {
    java: {
      array: "",
    },
  },
  2350: {
    java: {
      array: "",
    },
  },
  2352: {
    java: {
      array: "",
    },
  },
  2354: {
    java: {
      array: "",
    },
  },
  2355: {
    java: {
      array: "",
    },
  },
  2357: {
    java: {
      array: "",
    },
  },
  2358: {
    java: {
      array: "",
    },
  },
  2361: {
    java: {
      array: "",
    },
  },
  2363: {
    java: {
      array: "",
    },
  },
  2364: {
    java: {
      array: "",
    },
  },
  2365: {
    java: {
      array: "",
    },
  },
  2366: {
    java: {
      array: "",
    },
  },
  2367: {
    java: {
      array: "",
    },
  },
  2368: {
    java: {
      array: "",
    },
  },
  2369: {
    java: {
      array: "",
    },
  },
  2371: {
    java: {
      array: "",
    },
  },
  2373: {
    java: {
      array: "",
    },
  },
  2381: {
    java: {
      array: "",
    },
  },
  2382: {
    java: {
      array: "",
    },
  },
  2383: {
    java: {
      array: "",
    },
  },
  2386: {
    java: {
      array: "",
    },
  },
  2387: {
    java: {
      array: "",
    },
  },
  2389: {
    java: {
      array: "",
    },
  },
  2391: {
    java: {
      array: "",
    },
  },
  2392: {
    java: {
      array: "",
    },
  },
  2393: {
    java: {
      array: "",
    },
  },
  2395: {
    java: {
      array: "",
    },
  },
  2397: {
    java: {
      array: "",
    },
  },
  2398: {
    java: {
      array: "",
    },
  },
  2399: {
    java: {
      array: "",
    },
  },
  2401: {
    java: {
      array: "",
    },
  },
  2402: {
    java: {
      array: "",
    },
  },
  2403: {
    java: {
      array: "",
    },
  },
  2404: {
    java: {
      array: "",
    },
  },
  2406: {
    java: {
      array: "",
    },
  },
  2407: {
    java: {
      array: "",
    },
  },
  2408: {
    java: {
      array: "",
    },
  },
  2410: {
    java: {
      array: "",
    },
  },
  2411: {
    java: {
      array: "",
    },
  },
  2412: {
    java: {
      array: "",
    },
  },
  2416: {
    java: {
      array: "",
    },
  },
  2418: {
    java: {
      array: "",
    },
  },
  2419: {
    java: {
      array: "",
    },
  },
  2420: {
    java: {
      array: "",
    },
  },
  2421: {
    java: {
      array: "",
    },
  },
  2422: {
    java: {
      array: "",
    },
  },
  2425: {
    java: {
      array: "",
    },
  },
  2426: {
    java: {
      array: "",
    },
  },
  2428: {
    java: {
      array: "",
    },
  },
  2431: {
    java: {
      array: "",
    },
  },
  2432: {
    java: {
      array: "",
    },
  },
  2433: {
    java: {
      array: "",
    },
  },
  2435: {
    java: {
      array: "",
    },
  },
  2436: {
    java: {
      array: "",
    },
  },
  2438: {
    java: {
      array: "",
    },
  },
  2439: {
    java: {
      array: "",
    },
  },
  2440: {
    java: {
      array: "",
    },
  },
  2441: {
    java: {
      array: "",
    },
  },
  2442: {
    java: {
      array: "",
    },
  },
  2444: {
    java: {
      array: "",
    },
  },
  2446: {
    java: {
      array: "",
    },
  },
  2447: {
    java: {
      array: "",
    },
  },
  2448: {
    java: {
      array: "",
    },
  },
  2449: {
    java: {
      array: "",
    },
  },
  2451: {
    java: {
      array: "",
    },
  },
  2452: {
    java: {
      array: "",
    },
  },
  2453: {
    java: {
      array: "",
    },
  },
  2454: {
    java: {
      array: "",
    },
  },
  2455: {
    java: {
      array: "",
    },
  },
  2456: {
    java: {
      array: "",
    },
  },
  2458: {
    java: {
      array: "",
    },
  },
  2459: {
    java: {
      array: "",
    },
  },
  2460: {
    java: {
      array: "",
    },
  },
  2461: {
    java: {
      array: "",
    },
  },
  2462: {
    java: {
      array: "",
    },
  },
  2463: {
    java: {
      array: "",
    },
  },
  2464: {
    java: {
      array: "",
    },
  },
  2465: {
    java: {
      array: "",
    },
  },
  2467: {
    java: {
      array: "",
    },
  },
  2470: {
    java: {
      array: "",
    },
  },
  2473: {
    java: {
      array: "",
    },
  },
  2475: {
    java: {
      array: "",
    },
  },
  2476: {
    java: {
      array: "",
    },
  },
  2482: {
    java: {
      array: "",
    },
  },
  2488: {
    java: {
      array: "",
    },
  },
  2491: {
    java: {
      array: "",
    },
  },
  2495: {
    java: {
      array: "",
    },
  },
  2496: {
    java: {
      array: "",
    },
  },
  2497: {
    java: {
      array: "",
    },
  },
  2498: {
    java: {
      array: "",
    },
  },
  2499: {
    java: {
      array: "",
    },
  },
  2500: {
    java: {
      array: "",
    },
  },
  2501: {
    java: {
      array: "",
    },
  },
  2502: {
    java: {
      array: "",
    },
  },
  2503: {
    java: {
      array: "",
    },
  },
  2505: {
    java: {
      array: "",
    },
  },
  2506: {
    java: {
      array: "",
    },
  },
  2509: {
    java: {
      array: "",
    },
  },
  2510: {
    java: {
      array: "",
    },
  },
  2511: {
    java: {
      array: "",
    },
  },
  2512: {
    java: {
      array: "",
    },
  },
  2515: {
    java: {
      array: "",
    },
  },
  2517: {
    java: {
      array: "",
    },
  },
  2518: {
    java: {
      array: "",
    },
  },
  2519: {
    java: {
      array: "",
    },
  },
  2521: {
    java: {
      array: "",
    },
  },
  2524: {
    java: {
      array: "",
    },
  },
  2527: {
    java: {
      array: "",
    },
  },
  2528: {
    java: {
      array: "",
    },
  },
  2529: {
    java: {
      array: "",
    },
  },
  2530: {
    java: {
      array: "",
    },
  },
  2532: {
    java: {
      array: "",
    },
  },
  2534: {
    java: {
      array: "",
    },
  },
  2535: {
    java: {
      array: "",
    },
  },
  2536: {
    java: {
      array: "",
    },
  },
  2537: {
    java: {
      array: "",
    },
  },
  2538: {
    java: {
      array: "",
    },
  },
  2540: {
    java: {
      array: "",
    },
  },
  2541: {
    java: {
      array: "",
    },
  },
  2542: {
    java: {
      array: "",
    },
  },
  2545: {
    java: {
      array: "",
    },
  },
  2547: {
    java: {
      array: "",
    },
  },
  2548: {
    java: {
      array: "",
    },
  },
  2549: {
    java: {
      array: "",
    },
  },
  2551: {
    java: {
      array: "",
    },
  },
  2552: {
    java: {
      array: "",
    },
  },
  2553: {
    java: {
      array: "",
    },
  },
  2554: {
    java: {
      array: "",
    },
  },
  2555: {
    java: {
      array: "",
    },
  },
  2556: {
    java: {
      array: "",
    },
  },
  2557: {
    java: {
      array: "",
    },
  },
  2558: {
    java: {
      array: "",
    },
  },
  2559: {
    java: {
      array: "",
    },
  },
  2560: {
    java: {
      array: "",
    },
  },
  2561: {
    java: {
      array: "",
    },
  },
  2562: {
    java: {
      array: "",
    },
  },
  2563: {
    java: {
      array: "",
    },
  },
  2564: {
    java: {
      array: "",
    },
  },
  2567: {
    java: {
      array: "",
    },
  },
  2568: {
    java: {
      array: "",
    },
  },
  2569: {
    java: {
      array: "",
    },
  },
  2570: {
    java: {
      array: "",
    },
  },
  2572: {
    java: {
      array: "",
    },
  },
  2573: {
    java: {
      array: "",
    },
  },
  2574: {
    java: {
      array: "",
    },
  },
  2575: {
    java: {
      array: "",
    },
  },
  2576: {
    java: {
      array: "",
    },
  },
  2577: {
    java: {
      array: "",
    },
  },
  2580: {
    java: {
      array: "",
    },
  },
  2584: {
    java: {
      array: "",
    },
  },
  2585: {
    java: {
      array: "",
    },
  },
  2586: {
    java: {
      array: "",
    },
  },
  2587: {
    java: {
      array: "",
    },
  },
  2588: {
    java: {
      array: "",
    },
  },
  2589: {
    java: {
      array: "",
    },
  },
  2590: {
    java: {
      array: "",
    },
  },
  2592: {
    java: {
      array: "",
    },
  },
  2593: {
    java: {
      array: "",
    },
  },
  2594: {
    java: {
      array: "",
    },
  },
  2596: {
    java: {
      array: "",
    },
  },
  2597: {
    java: {
      array: "",
    },
  },
  2598: {
    java: {
      array: "",
    },
  },
  2599: {
    java: {
      array: "",
    },
  },
  2601: {
    java: {
      array: "",
    },
  },
  2602: {
    java: {
      array: "",
    },
  },
  2603: {
    java: {
      array: "",
    },
  },
  2604: {
    java: {
      array: "",
    },
  },
  2605: {
    java: {
      array: "",
    },
  },
  2606: {
    java: {
      array: "",
    },
  },
  2607: {
    java: {
      array: "",
    },
  },
  2610: {
    java: {
      array: "",
    },
  },
  2611: {
    java: {
      array: "",
    },
  },
  2612: {
    java: {
      array: "",
    },
  },
  2613: {
    java: {
      array: "",
    },
  },
  2614: {
    java: {
      array: "",
    },
  },
  2615: {
    java: {
      array: "",
    },
  },
  2616: {
    java: {
      array: "",
    },
  },
  2617: {
    java: {
      array: "",
    },
  },
  2638: {
    java: {
      array: "",
    },
  },
  2639: {
    java: {
      array: "",
    },
  },
  2640: {
    java: {
      array: "",
    },
  },
  2643: {
    java: {
      array: "",
    },
  },
  2644: {
    java: {
      array: "",
    },
  },
  2646: {
    java: {
      array: "",
    },
  },
  2647: {
    java: {
      array: "",
    },
  },
  2653: {
    java: {
      array: "",
    },
  },
  2654: {
    java: {
      array: "",
    },
  },
  2655: {
    java: {
      array: "",
    },
  },
  2656: {
    java: {
      array: "",
    },
  },
  2657: {
    java: {
      array: "",
    },
  },
  2658: {
    java: {
      array: "",
    },
  },
  2659: {
    java: {
      array: "",
    },
  },
  2660: {
    java: {
      array: "",
    },
  },
  2661: {
    java: {
      array: "",
    },
  },
  2662: {
    java: {
      array: "",
    },
  },
  2664: {
    java: {
      array: "",
    },
  },
  2670: {
    java: {
      array: "",
    },
  },
  2672: {
    java: {
      array: "",
    },
  },
  2673: {
    java: {
      array: "",
    },
  },
  2678: {
    java: {
      array: "",
    },
  },
  2679: {
    java: {
      array: "",
    },
  },
  2680: {
    java: {
      array: "",
    },
  },
  2681: {
    java: {
      array: "",
    },
  },
  2682: {
    java: {
      array: "",
    },
  },
  2683: {
    java: {
      array: "",
    },
  },
  2684: {
    java: {
      array: "",
    },
  },
  2702: {
    java: {
      array: "",
    },
  },
  2706: {
    java: {
      array: "",
    },
  },
  2707: {
    java: {
      array: "",
    },
  },
  2708: {
    java: {
      array: "",
    },
  },
  2709: {
    java: {
      array: "",
    },
  },
  2711: {
    java: {
      array: "",
    },
  },
  2713: {
    java: {
      array: "",
    },
  },
  2717: {
    java: {
      array: "",
    },
  },
  2718: {
    java: {
      array: "",
    },
  },
  2728: {
    java: {
      array: "",
    },
  },
  2731: {
    java: {
      array: "",
    },
  },
  2732: {
    java: {
      array: "",
    },
  },
  2733: {
    java: {
      array: "",
    },
  },
  2735: {
    java: {
      array: "",
    },
  },
  2736: {
    java: {
      array: "",
    },
  },
  2737: {
    java: {
      array: "",
    },
  },
  2740: {
    java: {
      array: "",
    },
  },
  2741: {
    java: {
      array: "",
    },
  },
  2742: {
    java: {
      array: "",
    },
  },
  2744: {
    java: {
      array: "",
    },
  },
  2746: {
    java: {
      array: "",
    },
  },
  2747: {
    java: {
      array: "",
    },
  },
  2748: {
    java: {
      array: "",
    },
  },
  2750: {
    java: {
      array: "",
    },
  },
  2751: {
    java: {
      array: "",
    },
  },
  2760: {
    java: {
      array: "",
    },
  },
  2761: {
    java: {
      array: "",
    },
  },
  2762: {
    java: {
      array: "",
    },
  },
  2763: {
    java: {
      array: "",
    },
  },
  2765: {
    java: {
      array: "",
    },
  },
  2766: {
    java: {
      array: "",
    },
  },
  2768: {
    java: {
      array: "",
    },
  },
  2770: {
    java: {
      array: "",
    },
  },
  2771: {
    java: {
      array: "",
    },
  },
  2772: {
    java: {
      array: "",
    },
  },
  2778: {
    java: {
      array: "",
    },
  },
  2779: {
    java: {
      array: "",
    },
  },
  2780: {
    java: {
      array: "",
    },
  },
  2781: {
    java: {
      array: "",
    },
  },
  2784: {
    java: {
      array: "",
    },
  },
  2786: {
    java: {
      array: "",
    },
  },
  2788: {
    java: {
      array: "",
    },
  },
  2789: {
    java: {
      array: "",
    },
  },
  2790: {
    java: {
      array: "",
    },
  },
  2798: {
    java: {
      array: "",
    },
  },
  2799: {
    java: {
      array: "",
    },
  },
  2808: {
    java: {
      array: "",
    },
  },
  2809: {
    java: {
      array: "",
    },
  },
  2811: {
    java: {
      array: "",
    },
  },
  2812: {
    java: {
      array: "",
    },
  },
  2813: {
    java: {
      array: "",
    },
  },
  2814: {
    java: {
      array: "",
    },
  },
  2815: {
    java: {
      array: "",
    },
  },
  2817: {
    java: {
      array: "",
    },
  },
  2818: {
    java: {
      array: "",
    },
  },
  2819: {
    java: {
      array: "",
    },
  },
  2824: {
    java: {
      array: "",
    },
  },
  2826: {
    java: {
      array: "",
    },
  },
  2828: {
    java: {
      array: "",
    },
  },
  2830: {
    java: {
      array: "",
    },
  },
  2831: {
    java: {
      array: "",
    },
  },
  2832: {
    java: {
      array: "",
    },
  },
  2835: {
    java: {
      array: "",
    },
  },
  2836: {
    java: {
      array: "",
    },
  },
  2838: {
    java: {
      array: "",
    },
  },
  2841: {
    java: {
      array: "",
    },
  },
  2845: {
    java: {
      array: "",
    },
  },
  2846: {
    java: {
      array: "",
    },
  },
  2848: {
    java: {
      array: "",
    },
  },
  2850: {
    java: {
      array: "",
    },
  },
  2852: {
    java: {
      array: "",
    },
  },
  2855: {
    java: {
      array: "",
    },
  },
  2856: {
    java: {
      array: "",
    },
  },
  2857: {
    java: {
      array: "",
    },
  },
  2859: {
    java: {
      array: "",
    },
  },
  2860: {
    java: {
      array: "",
    },
  },
  2861: {
    java: {
      array: "",
    },
  },
  2862: {
    java: {
      array: "",
    },
  },
  2863: {
    java: {
      array: "",
    },
  },
  2865: {
    java: {
      array: "",
    },
  },
  2866: {
    java: {
      array: "",
    },
  },
  2868: {
    java: {
      array: "",
    },
  },
  2869: {
    java: {
      array: "",
    },
  },
  2870: {
    java: {
      array: "",
    },
  },
  2871: {
    java: {
      array: "",
    },
  },
  2873: {
    java: {
      array: "",
    },
  },
  2874: {
    java: {
      array: "",
    },
  },
  2875: {
    java: {
      array: "",
    },
  },
  2892: {
    java: {
      array: "",
    },
  },
  2895: {
    java: {
      array: "",
    },
  },
  2897: {
    java: {
      array: "",
    },
  },
  2898: {
    java: {
      array: "",
    },
  },
  2899: {
    java: {
      array: "",
    },
  },
  2900: {
    java: {
      array: "",
    },
  },
  2901: {
    java: {
      array: "",
    },
  },
  2902: {
    java: {
      array: "",
    },
  },
  2903: {
    java: {
      array: "",
    },
  },
  2905: {
    java: {
      array: "",
    },
  },
  2906: {
    java: {
      array: "",
    },
  },
  2907: {
    java: {
      array: "",
    },
  },
  2908: {
    java: {
      array: "",
    },
  },
  2909: {
    java: {
      array: "",
    },
  },
  2910: {
    java: {
      array: "",
    },
  },
  2913: {
    java: {
      array: "",
    },
  },
  2915: {
    java: {
      array: "",
    },
  },
  2916: {
    java: {
      array: "",
    },
  },
  2917: {
    java: {
      array: "",
    },
  },
  2918: {
    java: {
      array: "",
    },
  },
  2919: {
    java: {
      array: "",
    },
  },
  2920: {
    java: {
      array: "",
    },
  },
  2921: {
    java: {
      array: "",
    },
  },
  2923: {
    java: {
      array: "",
    },
  },
  2926: {
    java: {
      array: "",
    },
  },
  2931: {
    java: {
      array: "",
    },
  },
  2932: {
    java: {
      array: "",
    },
  },
  2933: {
    java: {
      array: "",
    },
  },
  2934: {
    java: {
      array: "",
    },
  },
  2935: {
    java: {
      array: "",
    },
  },
  2936: {
    java: {
      array: "",
    },
  },
  2940: {
    java: {
      array: "",
    },
  },
  2941: {
    java: {
      array: "",
    },
  },
  2942: {
    java: {
      array: "",
    },
  },
  2943: {
    java: {
      array: "",
    },
  },
  2944: {
    java: {
      array: "",
    },
  },
  2945: {
    java: {
      array: "",
    },
  },
  2946: {
    java: {
      array: "",
    },
  },
  2948: {
    java: {
      array: "",
    },
  },
  2951: {
    java: {
      array: "",
    },
  },
  2952: {
    java: {
      array: "",
    },
  },
  2954: {
    java: {
      array: "",
    },
  },
  2955: {
    java: {
      array: "",
    },
  },
  2956: {
    java: {
      array: "",
    },
  },
  2958: {
    java: {
      array: "",
    },
  },
  2960: {
    java: {
      array: "",
    },
  },
  2961: {
    java: {
      array: "",
    },
  },
  2962: {
    java: {
      array: "",
    },
  },
  2963: {
    java: {
      array: "",
    },
  },
  2964: {
    java: {
      array: "",
    },
  },
  2965: {
    java: {
      array: "",
    },
  },
  2966: {
    java: {
      array: "",
    },
  },
  2967: {
    java: {
      array: "",
    },
  },
  2968: {
    java: {
      array: "",
    },
  },
  2969: {
    java: {
      array: "",
    },
  },
  2970: {
    java: {
      array: "",
    },
  },
  2971: {
    java: {
      array: "",
    },
  },
  2972: {
    java: {
      array: "",
    },
  },
  2974: {
    java: {
      array: "",
    },
  },
  2975: {
    java: {
      array: "",
    },
  },
  2976: {
    java: {
      array: "",
    },
  },
  2977: {
    java: {
      array: "",
    },
  },
  2980: {
    java: {
      array: "",
    },
  },
  2992: {
    java: {
      array: "",
    },
  },
  2996: {
    java: {
      array: "",
    },
  },
  2997: {
    java: {
      array: "",
    },
  },
  3000: {
    java: {
      array: "",
    },
  },
  3001: {
    java: {
      array: "",
    },
  },
  3002: {
    java: {
      array: "",
    },
  },
  3004: {
    java: {
      array: "",
    },
  },
  3005: {
    java: {
      array: "",
    },
  },
  3009: {
    java: {
      array: "",
    },
  },
  3010: {
    java: {
      array: "",
    },
  },
  3011: {
    java: {
      array: "",
    },
  },
  3012: {
    java: {
      array: "",
    },
  },
  3013: {
    java: {
      array: "",
    },
  },
  3018: {
    java: {
      array: "",
    },
  },
  3020: {
    java: {
      array: "",
    },
  },
  3022: {
    java: {
      array: "",
    },
  },
  3023: {
    java: {
      array: "",
    },
  },
  3024: {
    java: {
      array: "",
    },
  },
  3025: {
    java: {
      array: "",
    },
  },
  3026: {
    java: {
      array: "",
    },
  },
  3027: {
    java: {
      array: "",
    },
  },
  3028: {
    java: {
      array: "",
    },
  },
  3030: {
    java: {
      array: "",
    },
  },
  3033: {
    java: {
      array: "",
    },
  },
  3034: {
    java: {
      array: "",
    },
  },
  3035: {
    java: {
      array: "",
    },
  },
  3036: {
    java: {
      array: "",
    },
  },
  3037: {
    java: {
      array: "",
    },
  },
  3038: {
    java: {
      array: "",
    },
  },
  3039: {
    java: {
      array: "",
    },
  },
  3040: {
    java: {
      array: "",
    },
  },
  3041: {
    java: {
      array: "",
    },
  },
  3042: {
    java: {
      array: "",
    },
  },
  3043: {
    java: {
      array: "",
    },
  },
  3044: {
    java: {
      array: "",
    },
  },
  3045: {
    java: {
      array: "",
    },
  },
  3046: {
    java: {
      array: "",
    },
  },
  3047: {
    java: {
      array: "",
    },
  },
  3048: {
    java: {
      array: "",
    },
  },
  3049: {
    java: {
      array: "",
    },
  },
  3065: {
    java: {
      array: "",
    },
  },
  3066: {
    java: {
      array: "",
    },
  },
  3067: {
    java: {
      array: "",
    },
  },
  3068: {
    java: {
      array: "",
    },
  },
  3069: {
    java: {
      array: "",
    },
  },
  3070: {
    java: {
      array: "",
    },
  },
  3071: {
    java: {
      array: "",
    },
  },
  3072: {
    java: {
      array: "",
    },
  },
  3073: {
    java: {
      array: "",
    },
  },
  3074: {
    java: {
      array: "",
    },
  },
  3075: {
    java: {
      array: "",
    },
  },
  3076: {
    java: {
      array: "",
    },
  },
  3077: {
    java: {
      array: "",
    },
  },
  3078: {
    java: {
      array: "",
    },
  },
  3079: {
    java: {
      array: "",
    },
  },
  3080: {
    java: {
      array: "",
    },
  },
  3082: {
    java: {
      array: "",
    },
  },
  3086: {
    java: {
      array: "",
    },
  },
  3092: {
    java: {
      array: "",
    },
  },
  3093: {
    java: {
      array: "",
    },
  },
  3095: {
    java: {
      array: "",
    },
  },
  3096: {
    java: {
      array: "",
    },
  },
  3097: {
    java: {
      array: "",
    },
  },
  3098: {
    java: {
      array: "",
    },
  },
  3101: {
    java: {
      array: "",
    },
  },
  3102: {
    java: {
      array: "",
    },
  },
  3105: {
    java: {
      array: "",
    },
  },
  3107: {
    java: {
      array: "",
    },
  },
  3108: {
    java: {
      array: "",
    },
  },
  3109: {
    java: {
      array: "",
    },
  },
  3111: {
    java: {
      array: "",
    },
  },
  3112: {
    java: {
      array: "",
    },
  },
  3113: {
    java: {
      array: "",
    },
  },
  3115: {
    java: {
      array: "",
    },
  },
  3116: {
    java: {
      array: "",
    },
  },
  3117: {
    java: {
      array: "",
    },
  },
  3122: {
    java: {
      array: "",
    },
  },
  3127: {
    java: {
      array: "",
    },
  },
  3128: {
    java: {
      array: "",
    },
  },
  3131: {
    java: {
      array: "",
    },
  },
  3132: {
    java: {
      array: "",
    },
  },
  3134: {
    java: {
      array: "",
    },
  },
  3139: {
    java: {
      array: "",
    },
  },
  3141: {
    java: {
      array: "",
    },
  },
  3142: {
    java: {
      array: "",
    },
  },
  3143: {
    java: {
      array: "",
    },
  },
  3145: {
    java: {
      array: "",
    },
  },
  3147: {
    java: {
      array: "",
    },
  },
  3148: {
    java: {
      array: "",
    },
  },
  3149: {
    java: {
      array: "",
    },
  },
  3151: {
    java: {
      array: "",
    },
  },
  3152: {
    java: {
      array: "",
    },
  },
  3153: {
    java: {
      array: "",
    },
  },
  3155: {
    java: {
      array: "",
    },
  },
  3158: {
    java: {
      array: "",
    },
  },
  3159: {
    java: {
      array: "",
    },
  },
  3160: {
    java: {
      array: "",
    },
  },
  3161: {
    java: {
      array: "",
    },
  },
  3162: {
    java: {
      array: "",
    },
  },
  3164: {
    java: {
      array: "",
    },
  },
  3165: {
    java: {
      array: "",
    },
  },
  3169: {
    java: {
      array: "",
    },
  },
  3171: {
    java: {
      array: "",
    },
  },
  3173: {
    java: {
      array: "",
    },
  },
  3175: {
    java: {
      array: "",
    },
  },
  3176: {
    java: {
      array: "",
    },
  },
  3177: {
    java: {
      array: "",
    },
  },
  3179: {
    java: {
      array: "",
    },
  },
  3180: {
    java: {
      array: "",
    },
  },
  3181: {
    java: {
      array: "",
    },
  },
  3183: {
    java: {
      array: "",
    },
  },
  3184: {
    java: {
      array: "",
    },
  },
  3185: {
    java: {
      array: "",
    },
  },
  3186: {
    java: {
      array: "",
    },
  },
  3187: {
    java: {
      array: "",
    },
  },
  3189: {
    java: {
      array: "",
    },
  },
  3190: {
    java: {
      array: "",
    },
  },
  3191: {
    java: {
      array: "",
    },
  },
  3192: {
    java: {
      array: "",
    },
  },
  3193: {
    java: {
      array: "",
    },
  },
  3194: {
    java: {
      array: "",
    },
  },
  3195: {
    java: {
      array: "",
    },
  },
  3196: {
    java: {
      array: "",
    },
  },
  3197: {
    java: {
      array: "",
    },
  },
  3199: {
    java: {
      array: "",
    },
  },
  3200: {
    java: {
      array: "",
    },
  },
  3201: {
    java: {
      array: "",
    },
  },
  3202: {
    java: {
      array: "",
    },
  },
  3205: {
    java: {
      array: "",
    },
  },
  3206: {
    java: {
      array: "",
    },
  },
  3207: {
    java: {
      array: "",
    },
  },
  3208: {
    java: {
      array: "",
    },
  },
  3209: {
    java: {
      array: "",
    },
  },
  3212: {
    java: {
      array: "",
    },
  },
  3213: {
    java: {
      array: "",
    },
  },
  3215: {
    java: {
      array: "",
    },
  },
  3217: {
    java: {
      array: "",
    },
  },
  3218: {
    java: {
      array: "",
    },
  },
  3219: {
    java: {
      array: "",
    },
  },
};
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);

// 1462
// https://algo.monster/liteproblems/1462

// const arr1 = [
//   1, 3, 12, 13, 17, 30, 36, 37, 41, 49, 73, 76, 105, 106, 126, 127, 128, 133,
//   138, 139, 140, 141, 142, 146, 149, 159, 160, 166, 169, 170, 187, 202, 205,
//   208, 217, 219, 229, 242, 244, 246, 249, 264, 266, 267, 268, 288, 290, 291,
//   299, 305, 311, 314, 325, 336, 340, 347, 348, 349, 350, 353, 355, 356, 358,
//   359, 379, 380, 381, 383, 387, 389, 395, 398, 409, 421, 423, 424, 432, 433,
//   438, 442, 447, 448, 451, 454, 457, 460, 480, 491, 496, 500, 508, 1983, 522,
//   523, 525, 531, 532, 533, 535, 548, 554, 560, 567, 575, 582, 588, 594, 599,
//   609, 616, 621, 632, 635, 645, 648, 652, 653, 659, 666, 676, 677, 681, 690,
//   692, 694, 697, 711, 720, 721, 726, 734, 736, 737, 740, 745, 748, 752, 758,
//   760, 763, 767, 770, 771, 781, 791, 792, 705, 706, 804, 811, 815, 817, 819,
//   820, 822, 823, 828, 839, 840, 846, 859, 863, 710, 865, 869, 873, 874, 519,
//   884, 888, 889, 890, 893, 895, 904, 911, 914, 916, 923, 924, 928, 929, 930,
//   939, 947, 952, 953, 954, 957, 959, 961, 966, 970, 974, 981, 982, 987, 992,
//   996, 997, 1001, 1002, 1010, 1015, 1086, 1100, 1027, 1133, 1036, 1152, 1160,
//   1165, 1153, 1166, 1048, 1181, 1054, 1198, 1074, 1072, 1213, 1079, 1090, 1244,
//   1257, 1258, 1110, 1122, 1123, 1124, 1128, 1138, 1146, 1331, 1156, 1935, 1171,
//   1172, 1169, 1170, 1177, 1178, 2080, 1189, 1202, 2201, 1207, 1218, 1224, 2273,
//   2225, 2309, 1726, 1429, 1248, 1261, 1426, 2215, 1275, 1282, 1284, 2229, 1296,
//   1297, 2227, 1311, 1345, 1357, 1358, 1338, 1346, 1347, 1348, 1370, 1371, 1365,
//   1366, 1386, 1399, 1400, 1394, 1396, 1410, 1418, 1436, 1442, 1443, 1460, 1461,
//   1452, 1477, 1481, 1487, 1488, 1496, 1497, 1485, 1525, 1490, 1512, 1500, 1519,
//   1540, 1546, 1506, 1542, 1590, 1554, 1577, 1604, 1570, 1593, 1600, 1636, 1638,
//   1624, 1612, 1630, 1640, 1647, 1656, 1658, 1657, 1684, 1650, 1674, 1660, 1679,
//   1695, 1676, 1711, 1713, 1733, 1742, 1748, 1737, 1743, 1763, 1740, 1781, 1775,
//   1756, 1796, 1797, 1790, 1772, 1814, 1805, 1807, 1788, 1794, 1817, 1804, 1832,
//   1836, 1857, 1876, 1865, 1852, 1893, 1912, 1897, 1906, 1915, 1941, 1942, 1943,
//   1930, 1932, 1938, 1940, 1948, 1993, 1980, 2006, 2007, 2008, 2009, 1995, 2001,
//   2023, 2025, 2013, 2032, 2034, 2053, 2043, 2068, 2062, 2085, 2099, 2094, 2115,
//   2083, 2103, 2131, 2121, 2122, 2107, 2133, 2135, 2150, 2154, 2166, 2152, 2170,
//   2186, 2182, 2168, 2196, 2206, 2190, 2248, 2249, 2251, 2260, 2261, 2262, 2266,
//   2275, 2244, 2287, 2283, 2284, 2295, 2306, 2301, 2254, 2268, 2325, 2336, 2341,
//   2351, 2352, 2353, 2354, 2347, 2349, 2350, 2357, 2367, 2370, 2368, 2363, 2364,
//   2374, 2385, 2342, 2384, 2399, 2402, 2395, 2365, 2404, 2405, 2418, 2421, 2434,
//   2441, 2442, 2423, 2456, 2451, 2453, 2461, 2408, 2465, 2475, 2488, 2491, 2501,
//   2502, 2499, 2506, 2508, 2516, 2512, 2514, 2521, 2531, 2526, 2537, 2489, 2547,
//   2540, 2554, 2584, 2581, 2588, 2598, 2524, 2605, 2606, 2641, 2549, 2539, 2661,
//   2590, 2561, 2593, 2597, 2564, 2570, 2615, 2610, 2653, 2707, 2657, 2670, 2671,
//   2682, 2711, 2713, 2729, 2716, 2732, 2748, 2831, 2747, 2766, 2718, 2744, 2763,
//   2799, 2767, 2781, 2780, 2768, 2743, 2784, 2813, 2815, 2845, 2808, 2857, 2841,
//   2840, 2830, 2848, 2869, 2842, 2856, 2902, 2870, 2875, 2852, 2897, 2863, 2913,
//   2910, 2898, 2932, 2935, 2933, 2983, 2956, 2949, 2947, 2963, 2953, 2958, 2965,
//   3002, 2996, 2950, 3005, 2955, 2975, 2964, 3013, 3026, 2982, 2981, 3016, 3020,
//   3080, 3039, 3044, 3035, 3046, 3043, 3071, 3032, 3090, 3083, 3081, 3076, 3063,
//   3085, 3134, 3092, 3137, 3078, 3128, 3138, 3144, 3121, 3120, 3104, 3146, 3153,
//   3185, 3143, 3159, 3184, 3158, 3160, 3186, 3164, 3170, 3162, 3174, 3177, 3176,
//   3167, 3217,
// ];

// const arr2 = [
//   1, 3, 12, 13, 17, 30, 36, 37, 41, 49, 73, 76, 105, 106, 126, 127, 128, 133,
//   138, 139, 140, 141, 142, 146, 149, 159, 160, 166, 169, 170, 187, 202, 205,
//   208, 217, 219, 229, 242, 244, 246, 249, 264, 266, 267, 268, 288, 290, 291,
//   299, 305, 311, 314, 325, 336, 340, 347, 348, 349, 350, 353, 355, 356, 358,
//   359, 379, 380, 381, 383, 387, 389, 395, 398, 409, 421, 423, 424, 432, 433,
//   438, 442, 447, 448, 451, 454, 457, 460, 480, 491, 496, 500, 508, 519, 522,
//   523, 525, 531, 532, 533, 535, 548, 554, 560, 567, 575, 582, 588, 594, 599,
//   609, 616, 621, 632, 635, 645, 648, 652, 653, 659, 666, 676, 677, 681, 690,
//   694, 697, 705, 706, 710, 711, 720, 721, 726, 734, 736, 737, 740, 745, 748,
//   752, 758, 760, 763, 767, 770, 771, 781, 791, 792, 804, 811, 815, 817, 819,
//   820, 822, 823, 828, 839, 840, 846, 859, 863, 865, 869, 873, 874, 884, 888,
//   889, 890, 893, 895, 904, 911, 914, 916, 923, 924, 928, 929, 930, 939, 947,
//   952, 953, 954, 957, 959, 961, 966, 970, 974, 981, 982, 987, 992, 996, 997,
//   1001, 1002, 1010, 1015, 1027, 1036, 1048, 1054, 1072, 1074, 1079, 1086, 1090,
//   1100, 1110, 1122, 1123, 1124, 1128, 1133, 1138, 1146, 1152, 1153, 1156, 1160,
//   1165, 1166, 1169, 1170, 1171, 1172, 1177, 1178, 1181, 1189, 1198, 1202, 1207,
//   1213, 1218, 1224, 1244, 1248, 1257, 1258, 1261, 1275, 1282, 1284, 1296, 1297,
//   1311, 1331, 1338, 1345, 1346, 1347, 1348, 1357, 1358, 1365, 1366, 1370, 1371,
//   1386, 1394, 1396, 1399, 1400, 1410, 1418, 1426, 1429, 1436, 1442, 1443, 1452,
//   1460, 1461, 1477, 1481, 1485, 1487, 1488, 1490, 1496, 1497, 1500, 1506, 1512,
//   1519, 1525, 1540, 1542, 1546, 1554, 1570, 1577, 1590, 1593, 1600, 1604, 1612,
//   1624, 1630, 1636, 1638, 1640, 1647, 1650, 1656, 1657, 1658, 1660, 1674, 1676,
//   1679, 1684, 1695, 1711, 1713, 1726, 1733, 1737, 1740, 1742, 1743, 1748, 1756,
//   1763, 1772, 1775, 1781, 1790, 1794, 1796, 1797, 1804, 1805, 1807, 1814, 1817,
//   1832, 1836, 1852, 1857, 1865, 1876, 1893, 1897, 1906, 1912, 1915, 1930, 1932,
//   1935, 1938, 1940, 1941, 1942, 1943, 1948, 1980, 1983, 1993, 1995, 2001, 2006,
//   2007, 2008, 2009, 2013, 2023, 2025, 2032, 2034, 2043, 2053, 2062, 2068, 2080,
//   2083, 2085, 2094, 2099, 2103, 2107, 2115, 2121, 2122, 2131, 2133, 2135, 2150,
//   2152, 2154, 2166, 2168, 2170, 2182, 2186, 2190, 2196, 2201, 2206, 2215, 2225,
//   2227, 2229, 2244, 2248, 2249, 2251, 2254, 2260, 2261, 2262, 2266, 2268, 2273,
//   2275, 2283, 2284, 2287, 2295, 2301, 2306, 2309, 2325, 2336, 2341, 2342, 2347,
//   2349, 2350, 2351, 2352, 2353, 2354, 2357, 2363, 2364, 2365, 2367, 2368, 2370,
//   2374, 2384, 2385, 2395, 2399, 2402, 2404, 2405, 2408, 2418, 2421, 2423, 2434,
//   2441, 2442, 2451, 2453, 2456, 2461, 2465, 2475, 2488, 2489, 2491, 2499, 2501,
//   2502, 2506, 2508, 2512, 2514, 2516, 2521, 2524, 2526, 2531, 2537, 2539, 2540,
//   2547, 2549, 2554, 2561, 2564, 2570, 2581, 2584, 2588, 2590, 2593, 2598, 2605,
//   2606, 2610, 2615, 2641, 2653, 2657, 2661, 2670, 2671, 2682, 2707, 2711, 2713,
//   2716, 2718, 2729, 2732, 2743, 2744, 2747, 2748, 2763, 2766, 2767, 2768, 2780,
//   2781, 2784, 2799, 2808, 2813, 2815, 2830, 2831, 2840, 2841, 2842, 2845, 2848,
//   2852, 2856, 2857, 2863, 2869, 2870, 2875, 2897, 2898, 2902, 2910, 2913, 2932,
//   2933, 2935, 2947, 2949, 2950, 2953, 2955, 2956, 2958, 2963, 2964, 2965, 2975,
//   2981, 2982, 2983, 2996, 3002, 3005, 3013, 3016, 3020, 3026, 3032, 3035, 3039,
//   3043, 3044, 3046, 3063, 3071, 3076, 3078, 3080, 3081, 3083, 3085, 3090, 3092,
//   3104, 3120, 3121, 3128, 3134, 3137, 3138, 3143, 3144, 3146, 3153, 3158, 3159,
//   3160, 3162, 3164, 3167, 3170, 3174, 3176, 3177, 3184, 3185, 3186, 3217,
// ];

// function findMissingElement(arr, expectedArray) {
//   const set = new Set(arr);
//   const res = []
//   for (let num of expectedArray) {
//     if (!set.has(num)) {
//       res.add(num);
//     }
//   }
//   return res; // All elements are present
// }

// console.log(arr1.filter(x => !arr2.includes(x))); // Output: 3
