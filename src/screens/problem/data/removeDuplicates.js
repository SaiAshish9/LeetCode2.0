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
  3: {
    java: {
      "sliding-window":
        'public class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        int[] charIndex = new int[128]; \n        int left = 0, right = 0;\n        int maxLength = 0;\n\n        while (right < s.length()) {\n            char right = s.charAt(right);\n            left = Math.max(charIndex[right], left);\n            maxLength = Math.max(maxLength, right - left + 1);\n            charIndex[right] = right + 1;\n            right++;\n        }\n\n        return maxLength;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        String input = "abcabcbb";\n        int result = sol.lengthOfLongestSubstring(input);\n        System.out.println("Length of Longest Substring Without Repeating Characters: " + result);\n    }\n}',
    },
  },
  5: {
    java: {
      "two-pointers":
        'class Solution {\n\n    public String longestPalindrome(String s) {\n        if (s == null || s.length() == 0) {\n            return "";\n        }\n        int n = s.length();\n        int start = 0;\n        int maxLen = 1; \n        for (int i = 0; i < n; i++) {\n            int len1 = expandAroundCenter(s, i, i);            \n            int len2 = expandAroundCenter(s, i, i + 1);\n            int maxLenCurr = Math.max(len1, len2);\n            if (maxLenCurr > maxLen) {\n                maxLen = maxLenCurr;\n                start = i - (maxLen - 1) / 2;\n            }\n        }\n        \n        return s.substring(start, start + maxLen);\n    }\n    \n    private int expandAroundCenter(String s, int left, int right) {\n        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            left--;\n            right++;\n        }\n        return right - left - 1;\n    }\n}\n',
    },
  },
  11: {
    java: {
      "two-pointers":
        "public class Solution {\n    public int maxArea(int[] height) {\n        int max = 0;\n        int left = 0;\n        int right = height.length - 1;\n\n        while (left < right) {\n            int currentArea = Math.min(height[left], height[right]) * (right - left);\n            max = Math.max(max, currentArea);\n\n            if (height[left] < height[right]) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n\n        return max;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] heights = {1, 2, 1};\n        System.out.println(solution.maxArea(heights)); // Output: 2\n    }\n}\n",
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
  23: {
    java: {
      "merge-sort":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists == null || lists.length == 0) {\n            return null;\n        }\n        return mergeKLists(lists, 0, lists.length - 1);\n    }\n    \n    private ListNode mergeKLists(ListNode[] lists, int left, int right) {\n        if (left == right) {\n            return lists[left];\n        }\n        int mid = left + (right - left) / 2;\n        ListNode l1 = mergeKLists(lists, left, mid);\n        ListNode l2 = mergeKLists(lists, mid + 1, right);\n        return mergeTwoLists(l1, l2);\n    }\n    \n    private ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(0);\n        ListNode current = dummy;\n        \n        while (l1 != null && l2 != null) {\n            if (l1.val < l2.val) {\n                current.next = l1;\n                l1 = l1.next;\n            } else {\n                current.next = l2;\n                l2 = l2.next;\n            }\n            current = current.next;\n        }\n        \n        if (l1 != null) {\n            current.next = l1;\n        } else if (l2 != null) {\n            current.next = l2;\n        }\n        \n        return dummy.next;\n    }\n}\n",
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
  42: {
    java: {
      "two-pointers":
        "class Solution {\n    public int trap(int[] height) {\n        if (height == null || height.length == 0) return 0;\n\n        int left = 0, right = height.length - 1;\n        int left_max = 0, right_max = 0;\n        int waterTrapped = 0;\n\n        while (left < right) {\n            if (height[left] < height[right]) {\n                if (height[left] >= left_max) {\n                    left_max = height[left];\n                } else {\n                    waterTrapped += left_max - height[left];\n                }\n                left++;\n            } else {\n                if (height[right] >= right_max) {\n                    right_max = height[right];\n                } else {\n                    waterTrapped += right_max - height[right];\n                }\n                right--;\n            }\n        }\n\n        return waterTrapped;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int[] height = {0,1,0,2,1,0,1,3,2,1,2,1};\n        System.out.println(sol.trap(height)); // Output: 6\n    }\n}\n",
    },
  },
  48: {
    java: {
      matrix:
        'public class RotateImage {\n\n    public void rotate(int[][] matrix) {\n        if (matrix == null || matrix.length == 0) return;\n        \n        int n = matrix.length;\n        transpose(matrix, n);\n        \n        for (int i = 0; i < n; i++) {\n            reverseRow(matrix[i], n);\n        }\n    }\n    \n    private void transpose(int[][] matrix, int n) {\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                swap(matrix, i, j, j, i);\n            }\n        }\n    }\n    \n    private void reverseRow(int[] row, int n) {\n        int left = 0, right = n - 1;\n        while (left < right) {\n            int temp = row[left];\n            row[left] = row[right];\n            row[right] = temp;\n            left++;\n            right--;\n        }\n    }\n    \n    private void swap(int[][] matrix, int i, int j, int x, int y) {\n        int temp = matrix[i][j];\n        matrix[i][j] = matrix[x][y];\n        matrix[x][y] = temp;\n    }\n\n    public static void main(String[] args) {\n        RotateImage ri = new RotateImage();\n        int[][] matrix = {\n            {1, 2, 3},\n            {4, 5, 6},\n            {7, 8, 9}\n        };\n        \n        ri.rotate(matrix);\n        \n        for (int i = 0; i < matrix.length; i++) {\n            for (int j = 0; j < matrix[i].length; j++) {\n                System.out.print(matrix[i][j] + " ");\n            }\n            System.out.println();\n        }\n    }\n}\n',
    },
  },
  54: {
    java: {
      matrix:
        "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Solution {\n    private static final int[] dr = {0, 1, 0, -1};\n    private static final int[] dc = {1, 0, -1, 0};\n\n    public List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> result = new ArrayList<>();\n        if (matrix == null || matrix.length == 0) return result;\n\n        int rows = matrix.length;\n        int cols = matrix[0].length;\n        boolean[][] visited = new boolean[rows][cols];\n\n        dfs(matrix, visited, result, 0, 0, 0);\n        return result;\n    }\n\n    private void dfs(int[][] matrix, boolean[][] visited, List<Integer> result, int row, int col, int direction) {\n        if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || visited[row][col]) {\n            return;\n        }\n\n        visited[row][col] = true;\n        result.add(matrix[row][col]);\n\n        int nextRow = row + dr[direction];\n        int nextCol = col + dc[direction];\n\n        if (nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length || visited[nextRow][nextCol]) {\n            direction = (direction + 1) % 4; \n            nextRow = row + dr[direction];\n            nextCol = col + dc[direction];\n        }\n\n        dfs(matrix, visited, result, nextRow, nextCol, direction);\n    }\n\n}\n",
    },
  },
  59: {
    java: {
      matrix:
        "public class Solution {\n\n    private static final int[] dr = {0, 1, 0, -1}; \n    private static final int[] dc = {1, 0, -1, 0}; \n\n    public int[][] generateMatrix(int n) {\n        int[][] matrix = new int[n][n];\n        boolean[][] visited = new boolean[n][n];\n        int row = 0, col = 0, dir = 0;\n        for (int i = 1; i <= n * n; i++) {\n            matrix[row][col] = i;\n            visited[row][col] = true;\n\n            int nextRow = row + dr[dir];\n            int nextCol = col + dc[dir];\n\n            if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || visited[nextRow][nextCol]) {\n                dir = (dir + 1) % 4; // change direction\n                nextRow = row + dr[dir];\n                nextCol = col + dc[dir];\n            }\n\n            row = nextRow;\n            col = nextCol;\n        }\n        return matrix;\n    }\n\n}\n",
    },
  },
  61: {
    java: {
      "two-pointers":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode rotateRight(ListNode head, int k) {\n        if (head == null || head.next == null || k == 0) {\n            return head;\n        }\n        ListNode oldTail = head;\n        int length = 1;\n        while (oldTail.next != null) {\n            oldTail = oldTail.next;\n            length++;\n        }\n        oldTail.next = head;        \n        int newTailPosition = length - k % length - 1;        \n        ListNode newTail = head;\n        for (int i = 0; i < newTailPosition; i++) {\n            newTail = newTail.next;\n        }        \n        ListNode newHead = newTail.next;        \n        newTail.next = null;\n        return newHead;\n    }\n}\n",
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
  88: {
    java: {
      "two-pointers":
        "class Solution {\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\n        int p1 = m - 1;\n        int p2 = n - 1;\n        \n        int p = m + n - 1; \n        while (p1 >= 0 && p2 >= 0) {\n            if (nums1[p1] > nums2[p2]) {\n                nums1[p--] = nums1[p1--];\n            } else {\n                nums1[p--] = nums2[p2--];\n            }\n        }\n        \n        while (p2 >= 0) {\n            nums1[p--] = nums2[p2--];\n        }\n    }\n}\n",
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
  125: {
    java: {
      "two-pointers":
        "class Solution {\n    public boolean isPalindrome(String s) {\n        int left = 0, right = s.length() - 1;\n        \n        while (left < right) {\n            char c1 = s.charAt(left);\n            char c2 = s.charAt(right);\n            \n            if (!Character.isLetterOrDigit(c1)) {\n                left++;\n            } else if (!Character.isLetterOrDigit(c2)) {\n                right--;\n            } else {\n                if (Character.toLowerCase(c1) != Character.toLowerCase(c2)) {\n                    return false;\n                }\n                left++;\n                right--;\n            }\n        }\n        \n        return true;\n    }\n}\n",
    },
  },
  130: {
    java: {
      matrix: "",
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
  146: {
    java: {
      "doubly-linked-list":
        "class LRUCache {\n    class Node {\n        int key;\n        int value;\n        Node prev;\n        Node next;\n        \n        public Node(int key, int value) {\n            this.key = key;\n            this.value = value;\n        }\n    }\n    \n    private int capacity;\n    private Map<Integer, Node> map;\n    private Node head;\n    private Node tail;\n    \n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        map = new HashMap<>();\n        head = new Node(-1, -1);\n        tail = new Node(-1, -1);\n        head.next = tail;\n        tail.prev = head;\n    }\n    \n    public int get(int key) {\n        if (!map.containsKey(key)) {\n            return -1;\n        }\n        \n        Node node = map.get(key);\n        moveToHead(node);\n        \n        return node.value;\n    }\n    \n    public void put(int key, int value) {\n        if (map.containsKey(key)) {\n            Node node = map.get(key);\n            node.value = value;\n            moveToHead(node);\n        } else {\n            Node newNode = new Node(key, value);\n            map.put(key, newNode);\n            addToHead(newNode);\n            \n            if (map.size() > capacity) {\n                Node removed = removeTail();\n                map.remove(removed.key);\n            }\n        }\n    }\n    \n    private void moveToHead(Node node) {\n        removeNode(node);\n        addToHead(node);\n    }\n    \n    private void removeNode(Node node) {\n        node.prev.next = node.next;\n        node.next.prev = node.prev;\n    }\n    \n    private void addToHead(Node node) {\n        node.next = head.next;\n        node.next.prev = node;\n        head.next = node;\n        node.prev = head;\n    }\n    \n    private Node removeTail() {\n        Node nodeToRemove = tail.prev;\n        removeNode(nodeToRemove);\n        return nodeToRemove;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        LRUCache cache = new LRUCache(2); // Capacity is 2\n        cache.put(1, 1);\n        cache.put(2, 2);\n        System.out.println(cache.get(1)); // Output: 1\n        cache.put(3, 3);\n        System.out.println(cache.get(2)); // Output: -1 (not found)\n        cache.put(4, 4);\n        System.out.println(cache.get(1)); // Output: -1 (not found)\n        System.out.println(cache.get(3)); // Output: 3\n        System.out.println(cache.get(4)); // Output: 4\n    }\n}\n",
    },
  },
  148: {
    java: {
      "merge-sort":
        "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode() {}\n *     ListNode(int val) { this.val = val; }\n *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n * }\n */\nclass Solution {\n    public ListNode sortList(ListNode head) {\n        if (head == null || head.next == null) {\n            return head;\n        }\n\n        ListNode mid = getMid(head);\n        ListNode left = head;\n        ListNode right = mid.next;\n        mid.next = null; \n        left = sortList(left);\n        right = sortList(right);\n\n        return merge(left, right);\n    }\n\n    private ListNode getMid(ListNode head) {\n        ListNode slow = head;\n        ListNode fast = head.next;\n        while (fast != null && fast.next != null) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n\n        return slow;\n    }\n\n    private ListNode merge(ListNode l1, ListNode l2) {\n        ListNode dummy = new ListNode(0);\n        ListNode current = dummy;\n\n        while (l1 != null && l2 != null) {\n            if (l1.val < l2.val) {\n                current.next = l1;\n                l1 = l1.next;\n            } else {\n                current.next = l2;\n                l2 = l2.next;\n            }\n            current = current.next;\n        }\n\n        if (l1 != null) {\n            current.next = l1;\n        } else {\n            current.next = l2;\n        }\n\n        return dummy.next;\n    }\n}\n",
    },
  },
  151: {
    java: {
      "two-pointers": "",
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
  167: {
    java: {
      "two-pointers":
        "class Solution {\n    public int[] twoSum(int[] numbers, int target) {\n        int left = 0;\n        int right = numbers.length - 1;\n\n        while (left < right) {\n            int sum = numbers[left] + numbers[right];\n            if (sum == target) {\n                return new int[] { left + 1, right + 1 };\n            } else if (sum < target) {\n                left++;\n            } else {\n                right--;\n            }\n        }\n        \n        return new int[] {};\n    }\n}",
    },
  },
  170: {
    java: {
      "two-pointers": "",
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
  189: {
    java: {
      "two-pointers":
        "class Solution {\n    public void rotate(int[] nums, int k) {\n        k = k % nums.length;\n        reverse(nums, 0, nums.length - 1);\n        reverse(nums, 0, k - 1);\n        reverse(nums, k, nums.length - 1);\n    }\n\n    private void reverse(int[] nums, int start, int end) {\n        while (start < end) {\n            int temp = nums[start];\n            nums[start] = nums[end];\n            nums[end] = temp;\n            start++;\n            end--;\n        }\n    }\n}",
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
  200: {
    java: {
      matrix: "",
    },
  },
  202: {
    java: {
      "two-pointers":
        "import java.util.HashSet;\n\npublic class Solution {\n    public boolean isHappy(int n) {\n        HashSet<Integer> seen = new HashSet<>();\n\n        while (n != 1 && !seen.contains(n)) {\n            seen.add(n);\n            n = getNextNumber(n);\n        }\n\n        return n == 1;\n    }\n\n    private int getNextNumber(int n) {\n        int sum = 0;\n        while (n > 0) {\n            int digit = n % 10;\n            sum += digit * digit;\n            n /= 10;\n        }\n        return sum;\n    }\n}\n",
    },
  },
  209: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int minSubArrayLen(int target, int[] nums) {\n        int n = nums.length;\n        int minLength = Integer.MAX_VALUE;\n        int left = 0;\n        int sum = 0;\n        \n        for (int right = 0; right < n; right++) {\n            sum += nums[right];\n            \n            while (sum >= target) {\n                minLength = Math.min(minLength, right - left + 1);\n                sum -= nums[left];\n                left++;\n            }\n        }\n        \n        return (minLength == Integer.MAX_VALUE) ? 0 : minLength;\n    }\n}\n",
    },
  },
  212: {
    java: {
      matrix: "",
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
  225: {
    java: {
      queue:
        'import java.util.LinkedList;\nimport java.util.Queue;\n\nclass MyStack {\n\n    private Queue<Integer> queue1;\n    private Queue<Integer> queue2;\n\n    public MyStack() {\n        queue1 = new LinkedList<>();\n        queue2 = new LinkedList<>();\n    }\n    \n    public void push(int x) {\n        queue2.offer(x);\n        while (!queue1.isEmpty()) {\n            queue2.offer(queue1.poll());\n        }\n        Queue<Integer> temp = queue1;\n        queue1 = queue2;\n        queue2 = temp;\n    }\n    \n    public int pop() {\n        if (queue1.isEmpty()) {\n            throw new RuntimeException("Stack is empty");\n        }\n        return queue1.poll();\n    }\n    \n    public int top() {\n        if (queue1.isEmpty()) {\n            throw new RuntimeException("Stack is empty");\n        }\n        return queue1.peek();\n    }\n    \n    public boolean empty() {\n        return queue1.isEmpty();\n    }\n}\n\n/**\n * Your MyStack object will be instantiated and called as such:\n * MyStack obj = new MyStack();\n * obj.push(x);\n * int param_2 = obj.pop();\n * int param_3 = obj.top();\n * boolean param_4 = obj.empty();\n */\n',
    },
  },
  230: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode() {}\n * TreeNode(int val) { this.val = val; }\n * TreeNode(int val, TreeNode left, TreeNode right) {\n * this.val = val;\n * this.left = left;\n * this.right = right;\n * }\n * }\n */\nclass Solution {\n    private int count = 0;\n    private int result = 0;\n\n    public int kthSmallest(TreeNode root, int k) {\n        inorder(root, k);\n        return result;\n    }\n\n    private void inorder(TreeNode root, int k) {\n        if (root == null) {\n            return;\n        }\n\n        inorder(root.left, k);\n\n        count++;\n        if (count == k) {\n            result = root.val;\n            return;\n        }\n\n        inorder(root.right, k);\n    }\n}",
    },
  },
  232: {
    java: {
      queue:
        "import java.util.Stack;\n\nclass MyQueue {\n\n    private Stack<Integer> stack1;\n    private Stack<Integer> stack2;\n\n    public MyQueue() {\n        stack1 = new Stack<>();\n        stack2 = new Stack<>();\n    }\n    \n    public void push(int x) {\n        stack1.push(x);\n    }\n    \n    public int pop() {\n        if (stack2.isEmpty()) {\n            while (!stack1.isEmpty()) {\n                stack2.push(stack1.pop());\n            }\n        }\n        return stack2.pop();\n    }\n    \n    public int peek() {\n        if (stack2.isEmpty()) {\n            while (!stack1.isEmpty()) {\n                stack2.push(stack1.pop());\n            }\n        }\n        return stack2.peek();\n    }\n    \n    public boolean empty() {\n        return stack1.isEmpty() && stack2.isEmpty();\n    }\n}\n\n/**\n * Your MyQueue object will be instantiated and called as such:\n * MyQueue obj = new MyQueue();\n * obj.push(x);\n * int param_2 = obj.pop();\n * int param_3 = obj.peek();\n * boolean param_4 = obj.empty();\n */\n",
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
  244: {
    java: {
      "two-pointers": "",
    },
  },
  246: {
    java: {
      "two-pointers": "",
    },
  },
  251: {
    java: {
      iterator:
        "class Vector2D {\n    private int i;\n    private int j;\n    private int[][] vec;\n\n    public Vector2D(int[][] vec) {\n        this.vec = vec;\n    }\n\n    public int next() {\n        forward();\n        return vec[i][j++];\n    }\n\n    public boolean hasNext() {\n        forward();\n        return i < vec.length;\n    }\n\n    private void forward() {\n        while (i < vec.length && j >= vec[i].length) {\n            ++i;\n            j = 0;\n        }\n    }\n}\n\n/**\n * Your Vector2D object will be instantiated and called as such:\n * Vector2D obj = new Vector2D(vec);\n * int param_1 = obj.next();\n * boolean param_2 = obj.hasNext();\n */",
    },
  },
  253: {
    java: {
      "two-pointers": "",
    },
  },
  255: {
    java: {
      "binary-search-tree":
        "class Solution {\n    public boolean verifyPreorder(int[] preorder) {\n        Deque<Integer> stack = new ArrayDeque<>();\n        int last = Integer.MIN_VALUE;\n        for (int x : preorder) {\n            if (x < last) {\n                return false;\n            }\n            while (!stack.isEmpty() && stack.peek() < x) {\n                last = stack.poll();\n            }\n            stack.push(x);\n        }\n        return true;\n    }\n}",
    },
  },
  259: {
    java: {
      "two-pointers": "",
    },
  },
  264: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  270: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    public int closestValue(TreeNode root, double target) {\n        int ans = root.val;\n        double max = Double.MAX_VALUE;\n        while (root != null) {\n            double t = Math.abs(root.val - target);\n            if (t < max || (t == max && root.val < ans)) {\n                max = t;\n                ans = root.val;\n            }\n            if (root.val > target) {\n                root = root.left;\n            } else {\n                root = root.right;\n            }\n        }\n        return ans;\n    }\n}",
    },
  },
  272: {
    java: {
      "two-pointers":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private List<Integer> ans;\n    private double target;\n    private int k;\n\n    public List<Integer> closestKValues(TreeNode root, double target, int k) {\n        ans = new LinkedList<>();\n        this.target = target;\n        this.k = k;\n        dfs(root);\n        return ans;\n    }\n\n    private void dfs(TreeNode root) {\n        if (root == null) {\n            return;\n        }\n        dfs(root.left);\n        if (ans.size() < k) {\n            ans.add(root.val);\n        } else {\n            if (Math.abs(root.val - target) >= Math.abs(ans.get(0) - target)) {\n                return;\n            }\n            ans.remove(0);\n            ans.add(root.val);\n        }\n        dfs(root.right);\n    }\n}",
    },
  },
  274: {
    java: {
      "counting-sort":
        "class Solution {\n    public int hIndex(int[] citations) {\n        int n = citations.length;\n        int[] count = new int[n + 1];\n        \n        for (int c : citations) {\n            if (c >= n) {\n                count[n]++;\n            } else {\n                count[c]++;\n            }\n        }\n        \n        // Calculate the H-Index\n        int total = 0;\n        for (int i = n; i >= 0; i--) {\n            total += count[i];\n            if (total >= i) {\n                return i;\n            }\n        }\n        \n        return 0;\n    }\n}\n",
    },
  },
  277: {
    java: {
      "two-pointers": "",
    },
  },
  281: {
    java: {
      iterator:
        "public class ZigzagIterator {\n    private int curr;\n    private int size;\n    private List<Integer> indexes = new ArrayList<>();\n    private List<List<Integer>> vectors = new ArrayList<>();\n\n    public ZigzagIterator(List<Integer> v1, List<Integer> v2) {\n        curr = 0;\n        size = 2;\n        indexes.add(0);\n        indexes.add(0);\n        vectors.add(v1);\n        vectors.add(v2);\n    }\n\n    public int next() {\n        List<Integer> vector = vectors.get(curr);\n        int index = indexes.get(curr);\n        int res = vector.get(index);\n        indexes.set(curr, index + 1);\n        curr = (curr + 1) % size;\n        return res;\n    }\n\n    public boolean hasNext() {\n        int start = curr;\n        while (indexes.get(curr) == vectors.get(curr).size()) {\n            curr = (curr + 1) % size;\n            if (start == curr) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n\n/**\n * Your ZigzagIterator object will be instantiated and called as such:\n * ZigzagIterator i = new ZigzagIterator(v1, v2);\n * while (i.hasNext()) v[dp()] = i.next();\n */",
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
  289: {
    java: {
      matrix: "",
    },
  },
  292: {
    java: {
      brainteaser:
        "class Solution {\n    public boolean canWinNim(int n) {\n        return n % 4 != 0;\n    }\n}\n",
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
  302: {
    java: {
      matrix: "",
    },
  },
  304: {
    java: {
      matrix: "",
    },
  },
  308: {
    java: {
      matrix: "",
    },
  },
  311: {
    java: {
      matrix: "",
    },
  },
  315: {
    java: {
      "merge-sort":
        "class Solution {\n    public List<Integer> countSmaller(int[] nums) {\n        int n = nums.length;\n        int[] countSmaller = new int[n];\n        int[] indices = new int[n];\n        for (int i = 0; i < n; i++) {\n            indices[i] = i;\n        }\n        mergeSort(nums, indices, countSmaller, 0, n - 1);\n        List<Integer> result = new ArrayList<>();\n        for (int count : countSmaller) {\n            result.add(count);\n        }\n        return result;\n    }\n    \n    private void mergeSort(int[] nums, int[] indices, int[] countSmaller, int start, int end) {\n        if (start >= end) {\n            return;\n        }\n        int mid = start + (end - start) / 2;\n        mergeSort(nums, indices, countSmaller, start, mid);\n        mergeSort(nums, indices, countSmaller, mid + 1, end);\n        merge(nums, indices, countSmaller, start, mid, end);\n    }\n    \n    private void merge(int[] nums, int[] indices, int[] countSmaller, int start, int mid, int end) {\n        int leftIndex = start;\n        int rightIndex = mid + 1;\n        int rightCount = 0;\n        int[] newIndices = new int[end - start + 1];\n        int newIndex = 0;\n        \n        while (leftIndex <= mid && rightIndex <= end) {\n            if (nums[indices[rightIndex]] < nums[indices[leftIndex]]) {\n                newIndices[newIndex] = indices[rightIndex];\n                rightCount++;\n                rightIndex++;\n            } else {\n                newIndices[newIndex] = indices[leftIndex];\n                countSmaller[indices[leftIndex]] += rightCount;\n                leftIndex++;\n            }\n            newIndex++;\n        }\n        \n        while (leftIndex <= mid) {\n            newIndices[newIndex] = indices[leftIndex];\n            countSmaller[indices[leftIndex]] += rightCount;\n            leftIndex++;\n            newIndex++;\n        }\n        \n        while (rightIndex <= end) {\n            newIndices[newIndex] = indices[rightIndex];\n            rightIndex++;\n            newIndex++;\n        }\n        \n        System.arraycopy(newIndices, 0, indices, start, end - start + 1);\n    }\n}\n",
    },
  },
  317: {
    java: {
      matrix: "",
    },
  },
  319: {
    java: {
      brainteaser:
        "class Solution {\n    public int bulbSwitch(int n) {\n        return (int) Math.sqrt(n);\n    }\n}\n",
    },
  },
  321: {
    java: {
      "two-pointers": "",
    },
  },
  324: {
    java: {
      quickselect:
        "import java.util.Arrays;\n\npublic class Solution {\n    public void wiggleSort(int[] nums) {\n        int n = nums.length;\n        \n        int median = quickselect(nums, 0, n - 1, n / 2);\n        \n        // Three-way partitioning: Elements less than median go to the left,\n        // Elements equal to median go to the middle, Elements greater than median go to the right\n        int left = 0, right = n - 1, i = 0;\n        while (i <= right) {\n            if (nums[newIndex(i, n)] > median) {\n                swap(nums, newIndex(left++, n), newIndex(i++, n));\n            } else if (nums[newIndex(i, n)] < median) {\n                swap(nums, newIndex(right--, n), newIndex(i, n));\n            } else {\n                i++;\n            }\n        }\n    }\n    \n    // Quickselect to find the k-th smallest element\n    private int quickselect(int[] nums, int left, int right, int k) {\n        while (left < right) {\n            int pivot = partition(nums, left, right);\n            if (pivot == k) {\n                return nums[k];\n            } else if (pivot < k) {\n                left = pivot + 1;\n            } else {\n                right = pivot - 1;\n            }\n        }\n        return nums[left];\n    }\n    \n    private int partition(int[] nums, int left, int right) {\n        int pivot = nums[right];\n        int i = left;\n        for (int j = left; j < right; j++) {\n            if (nums[j] < pivot) {\n                swap(nums, i++, j);\n            }\n        }\n        swap(nums, i, right);\n        return i;\n    }\n    \n    private int newIndex(int index, int n) {\n        return (1 + 2 * index) % (n | 1);\n    }\n    \n    private void swap(int[] nums, int i, int j) {\n        int temp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = temp;\n    }\n}\n",
    },
  },
  327: {
    java: {
      "merge-sort":
        "class Solution {\n    public int countRangeSum(int[] nums, int lower, int upper) {\n        long[] prefixSum = new long[nums.length + 1];\n        for (int i = 0; i < nums.length; i++) {\n            prefixSum[i + 1] = prefixSum[i] + nums[i];\n        }\n        return mergeSortAndCount(prefixSum, 0, prefixSum.length - 1, lower, upper);\n    }\n    \n    private int mergeSortAndCount(long[] prefixSum, int left, int right, int lower, int upper) {\n        if (left >= right) return 0;\n        \n        int mid = left + (right - left) / 2;\n        int count = 0;\n        \n        count += mergeSortAndCount(prefixSum, left, mid, lower, upper);\n        count += mergeSortAndCount(prefixSum, mid + 1, right, lower, upper);\n        count += mergeAndCount(prefixSum, left, mid, right, lower, upper);\n        \n        return count;\n    }\n    \n    private int mergeAndCount(long[] prefixSum, int left, int mid, int right, int lower, int upper) {\n        int count = 0;\n        int i = left;\n        int j = mid + 1;\n        int k = mid + 1;\n        \n        while (i <= mid) {\n            while (j <= right && prefixSum[j] - prefixSum[i] < lower) j++;\n            while (k <= right && prefixSum[k] - prefixSum[i] <= upper) k++;\n            count += (k - j);\n            i++;\n        }\n        \n        long[] sorted = new long[right - left + 1];\n        int p1 = left, p2 = mid + 1, p = 0;\n        while (p1 <= mid || p2 <= right) {\n            if (p2 > right || (p1 <= mid && prefixSum[p1] <= prefixSum[p2])) {\n                sorted[p++] = prefixSum[p1++];\n            } else {\n                sorted[p++] = prefixSum[p2++];\n            }\n        }\n        \n        System.arraycopy(sorted, 0, prefixSum, left, sorted.length);\n        \n        return count;\n    }\n}\n",
    },
  },
  329: {
    java: {
      matrix: "",
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
  353: {
    java: {
      queue: "",
    },
  },
  355: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  358: {
    java: {
      "heap-(priority-queue)": "",
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
  373: {
    java: {
      "heap-(priority-queue)": "",
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
  384: {
    java: {
      randomized:
        "import java.util.Random;\n\nclass Solution {\n    private int[] original;\n    private int[] array;\n    private Random rand;\n\n    public Solution(int[] nums) {\n        original = nums.clone();\n        array = nums.clone();\n        rand = new Random();\n    }\n\n    public int[] reset() {\n        array = original.clone();\n        return array;\n    }\n\n    public int[] shuffle() {\n        for (int i = 0; i < array.length; i++) {\n            int swapIdx = i + rand.nextInt(array.length - i);\n            int temp = array[i];\n            array[i] = array[swapIdx];\n            array[swapIdx] = temp;\n        }\n        return array;\n    }\n}\n\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(nums);\n * int[] param_1 = obj.reset();\n * int[] param_2 = obj.shuffle();\n */",
    },
  },
  387: {
    java: {
      queue:
        "import java.util.HashMap;\n\npublic class Solution {\n    public int firstUniqChar(String s) {\n        HashMap<Character, Integer> count = new HashMap<>();\n        int n = s.length();\n\n        for (int i = 0; i < n; i++) {\n            char c = s.charAt(i);\n            count.put(c, count.getOrDefault(c, 0) + 1);\n        }\n\n        for (int i = 0; i < n; i++) {\n            if (count.get(s.charAt(i)) == 1) {\n                return i;\n            }\n        }\n        return -1;\n    }\n}\n",
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
  395: {
    java: {
      "sliding-window":
        "import java.util.HashMap;\n\npublic class Solution {\n    public int longestSubstring(String s, int k) {\n        int maxLength = 0;\n        \n        for (int uniqueCount = 1; uniqueCount <= 26; uniqueCount++) {\n            maxLength = Math.max(maxLength, longestSubstringWithNUniqueChars(s, k, uniqueCount));\n        }\n        \n        return maxLength;\n    }\n\n    private int longestSubstringWithNUniqueChars(String s, int k, int uniqueTarget) {\n        HashMap<Character, Integer> freqMap = new HashMap<>();\n        int left = 0, right = 0, maxLength = 0;\n        int uniqueChars = 0, countAtLeastack = 0;\n\n        while (right < s.length()) {\n            char rightChar = s.charAt(right);\n            freqMap.put(rightChar, freqMap.getOrDefault(rightChar, 0) + 1);\n            if (freqMap.get(rightChar) == 1) uniqueChars++;\n            if (freqMap.get(rightChar) == k) countAtLeastack++;\n            right++;\n\n            while (uniqueChars > uniqueTarget) {\n                char leftChar = s.charAt(left);\n                if (freqMap.get(leftChar) == k) countAtLeastack--;\n                freqMap.put(leftChar, freqMap.get(leftChar) - 1);\n                if (freqMap.get(leftChar) == 0) uniqueChars--;\n                left++;\n            }\n\n            if (uniqueChars == uniqueTarget && uniqueChars == countAtLeastack) {\n                maxLength = Math.max(maxLength, right - left);\n            }\n        }\n\n        return maxLength;\n    }\n\n}\n",
    },
  },
  398: {
    java: {
      "reservoir-sampling":
        "public class Solution {\n    private int[] nums;\n    private Random rand;\n\n    public Solution(int[] nums) {\n        this.nums = nums;\n        this.rand = new Random();\n    }\n\n    public int pick(int target) {\n        int count = 0;\n        int result = -1; // Variable to store the chosen index\n\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] == target) {\n                count++;\n                // With probability 1/count, select the current index\n                if (rand.nextInt(count) == 0) {\n                    result = i;\n                }\n            }\n        }\n\n        return result;\n    }\n}\n\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(nums);\n * int param_1 = obj.pick(target);\n */",
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
  417: {
    java: {
      matrix: "",
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
  422: {
    java: {
      matrix: "",
    },
  },
  424: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int characterReplacement(String s, int k) {\n        int[] count = new int[26];\n        int maxCount = 0, left = 0, maxLength = 0;\n\n        for (int right = 0; right < s.length(); right++) {\n            char rightChar = s.charAt(right);\n            count[rightChar - 'A']++;\n            maxCount = Math.max(maxCount, count[rightChar - 'A']);\n\n            while (right - left + 1 - maxCount > k) {\n                char leftChar = s.charAt(left);\n                count[leftChar - 'A']--;\n                left++;\n            }\n\n            maxLength = Math.max(maxLength, right - left + 1);\n        }\n\n        return maxLength;\n    }\n}\n",
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
  430: {
    java: {
      "doubly-linked-list":
        "/*\nDefinition for a Node.\nclass Node {\n    public int val;\n    public Node prev;\n    public Node next;\n    public Node child;\n};\n*/\n\nclass Solution {\n    public Node flatten(Node head) {\n        if (head == null) return head;\n        \n        Node pointer = head;\n        \n        while (pointer != null) {\n            if (pointer.child == null) {\n                pointer = pointer.next;\n                continue;\n            }\n            \n            Node nextNode = pointer.next;            \n            Node child = pointer.child;\n            Node flattenedChild = flatten(child);\n            \n            pointer.next = flattenedChild;\n            flattenedChild.prev = pointer;\n            \n            Node tail = flattenedChild;\n            while (tail.next != null) {\n                tail = tail.next;\n            }\n            \n            tail.next = nextNode;\n            if (nextNode != null) {\n                nextNode.prev = tail;\n            }\n            \n            pointer.child = null;            \n            pointer = nextNode;\n        }\n        \n        return head;\n    }\n}\n\n",
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
  438: {
    java: {
      "sliding-window":
        "import java.util.ArrayList;\nimport java.util.List;\n\npublic class Solution {\n    public List<Integer> findAnagrams(String s, String p) {\n        List<Integer> result = new ArrayList<>();\n        if (s == null || p == null || s.length() < p.length()) {\n            return result;\n        }\n\n        int[] pCount = new int[26];\n        int[] sCount = new int[26];\n\n        for (char c : p.toCharArray()) {\n            pCount[c - 'a']++;\n        }\n\n        int windowLength = p.length();\n        for (int i = 0; i < windowLength; i++) {\n            sCount[s.charAt(i) - 'a']++;\n        }\n\n        for (int i = windowLength; i < s.length(); i++) {\n            if (areArraysEqual(pCount, sCount)) {\n                result.add(i - windowLength);\n            }\n\n            sCount[s.charAt(i - windowLength) - 'a']--;\n            sCount[s.charAt(i) - 'a']++;\n        }\n\n        if (areArraysEqual(pCount, sCount)) {\n            result.add(s.length() - windowLength);\n        }\n\n        return result;\n    }\n\n    private boolean areArraysEqual(int[] arr1, int[] arr2) {\n        for (int i = 0; i < 26; i++) {\n            if (arr1[i] != arr2[i]) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n",
    },
  },
  443: {
    java: {
      "two-pointers": "",
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
  455: {
    java: {
      "two-pointers": "",
    },
  },
  457: {
    java: {
      "two-pointers":
        "class Solution {\n    public boolean circularArrayLoop(int[] nums) {\n        if (nums.length < 2)\n            return false;\n\n        for (int i = 0; i < nums.length; ++i) {\n            if (nums[i] == 0)\n                continue;\n            int slow = i;\n            int fast = advance(nums, slow);\n            while (nums[i] * nums[fast] > 0 && nums[i] * nums[advance(nums, fast)] > 0) {\n                if (slow == fast) {\n                    if (slow == advance(nums, slow))\n                        break;\n                    return true;\n                }\n                slow = advance(nums, slow);\n                fast = advance(nums, advance(nums, fast));\n            }\n\n            slow = i;\n            int sign = nums[i];\n            while (sign * nums[slow] > 0) {\n                int next = advance(nums, slow);\n                nums[slow] = 0;\n                slow = next;\n            }\n        }\n\n        return false;\n    }\n\n    private int advance(int[] nums, int i) {\n        int n = nums.length;\n        int val = (i + nums[i]) % n;\n        return i + nums[i] >= 0 ? val : n + val;\n    }\n}",
    },
  },
  460: {
    java: {
      "doubly-linked-list":
        "class LFUCache {\n    class Node {\n        int key, value, freq;\n        Node prev, next;\n        Node(int k, int v) {\n            key = k;\n            value = v;\n            freq = 1;\n        }\n    }\n\n    class DoublyLinkedList {\n        Node head, tail;\n        DoublyLinkedList() {\n            head = new Node(0, 0);\n            tail = new Node(0, 0);\n            head.next = tail;\n            tail.prev = head;\n        }\n\n        void addNode(Node node) {\n            Node nextNode = head.next;\n            head.next = node;\n            node.prev = head;\n            node.next = nextNode;\n            nextNode.prev = node;\n        }\n\n        void removeNode(Node node) {\n            Node prevNode = node.prev;\n            Node nextNode = node.next;\n            prevNode.next = nextNode;\n            nextNode.prev = prevNode;\n        }\n\n        boolean isEmpty() {\n            return head.next == tail;\n        }\n    }\n\n    private int capacity, size, minFreq;\n    private Map<Integer, Node> keyToNode;\n    private Map<Integer, DoublyLinkedList> freqToDLL;\n\n    public LFUCache(int capacity) {\n        this.capacity = capacity;\n        this.size = 0;\n        this.minFreq = 0;\n        this.keyToNode = new HashMap<>();\n        this.freqToDLL = new HashMap<>();\n    }\n\n    public int get(int key) {\n        if (!keyToNode.containsKey(key)) return -1;\n        Node node = keyToNode.get(key);\n        updateFrequency(node);\n        return node.value;\n    }\n\n    public void put(int key, int value) {\n        if (capacity == 0) return;\n        if (keyToNode.containsKey(key)) {\n            Node node = keyToNode.get(key);\n            node.value = value;\n            updateFrequency(node);\n        } else {\n            if (size == capacity) {\n                DoublyLinkedList minFreqList = freqToDLL.get(minFreq);\n                keyToNode.remove(minFreqList.tail.prev.key);\n                minFreqList.removeNode(minFreqList.tail.prev);\n                size--;\n            }\n            Node newNode = new Node(key, value);\n            keyToNode.put(key, newNode);\n            minFreq = 1;\n            freqToDLL.computeIfAbsent(1, k -> new DoublyLinkedList()).addNode(newNode);\n            size++;\n        }\n    }\n\n    private void updateFrequency(Node node) {\n        int oldFreq = node.freq;\n        DoublyLinkedList oldList = freqToDLL.get(oldFreq);\n        oldList.removeNode(node);\n        if (oldFreq == minFreq && oldList.isEmpty()) minFreq++;\n        node.freq++;\n        freqToDLL.computeIfAbsent(node.freq, k -> new DoublyLinkedList()).addNode(node);\n    }\n}\n",
    },
  },
  463: {
    java: {
      matrix: "",
    },
  },
  470: {
    java: {
      "rejection-sampling":
        "/**\n * The rand7() API is already defined in the parent class SolBase.\n * public int rand7();\n * @return a random integer in the range 1 to 7\n */\nclass Solution extends SolBase {\n    public int rand10() {\n        while (true) {\n            int num = (rand7() - 1) * 7 + rand7(); // Generate a number from 1 to 49\n            if (num <= 40) { // Accept only if the number is in the range 1 to 40\n                return 1 + (num - 1) % 10; // Map to the range 1 to 10\n            }\n        }\n    }\n}",
    },
  },
  475: {
    java: {
      "two-pointers": "",
    },
  },
  478: {
    java: {
      "rejection-sampling":
        "import java.util.Random;\n\nclass Solution {\n    private double radius;\n    private double x_center;\n    private double y_center;\n    private Random random;\n\n    public Solution(double radius, double x_center, double y_center) {\n        this.radius = radius;\n        this.x_center = x_center;\n        this.y_center = y_center;\n        this.random = new Random();\n    }\n\n    public double[] randPoint() {\n        double x = x_center - radius + 2 * radius * random.nextDouble();\n        double y = y_center - radius + 2 * radius * random.nextDouble();\n\n        while (!isInCircle(x, y)) {\n            x = x_center - radius + 2 * radius * random.nextDouble();\n            y = y_center - radius + 2 * radius * random.nextDouble();\n        }\n\n        return new double[]{x, y};\n    }\n\n    private boolean isInCircle(double x, double y) {\n        return Math.pow(x - x_center, 2) + Math.pow(y - y_center, 2) <= Math.pow(radius, 2);\n    }\n}\n\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(radius, x_center, y_center);\n * double[] param_1 = obj.randPoint();\n */",
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
  485: {
    java: {
      array:
        "class Solution {\n    public int findMaxConsecutiveOnes(int[] nums) {\n        int maxCount = 0;\n        int currentCount = 0;\n        \n        for (int num : nums) {\n            if (num == 1) {\n                currentCount++;\n                maxCount = Math.max(maxCount, currentCount);\n            } else {\n                currentCount = 0;\n            }\n        }\n        \n        return maxCount;\n    }\n}\n",
    },
  },
  487: {
    java: {
      "sliding-window":
        "class Solution {\n    public int findMaxConsecutiveOnes(int[] nums) {\n        int left = 0, right = 0;\n        int k = 1;\n        while (right < nums.length) {\n            if (nums[right++] == 0) {\n                --k;\n            }\n            if (k < 0 && nums[left++] == 0) {\n                ++k;\n            }\n        }\n        return right - left;\n    }\n}",
    },
  },
  490: {
    java: {
      matrix: "",
    },
  },
  493: {
    java: {
      "merge-sort":
        "class Solution {\n    public int reversePairs(int[] nums) {\n        return mergeSortAndCount(nums, 0, nums.length - 1);\n    }\n    \n    private int mergeSortAndCount(int[] nums, int left, int right) {\n        if (left >= right) return 0;\n        \n        int mid = left + (right - left) / 2;\n        int count = mergeSortAndCount(nums, left, mid) + mergeSortAndCount(nums, mid + 1, right);\n        count += mergeAndCount(nums, left, mid, right);\n        \n        return count;\n    }\n    \n    private int mergeAndCount(int[] nums, int left, int mid, int right) {\n        int count = 0;\n        int[] merged = new int[right - left + 1];\n        int i = left, j = mid + 1, k = 0;\n        \n        while (i <= mid && j <= right) {\n            if ((long) nums[i] > 2 * (long) nums[j]) {\n                count += (mid - i + 1);\n                j++;\n            } else {\n                i++;\n            }\n        }\n        \n        i = left; j = mid + 1;\n        while (i <= mid && j <= right) {\n            if (nums[i] <= nums[j]) {\n                merged[k++] = nums[i++];\n            } else {\n                merged[k++] = nums[j++];\n            }\n        }\n        \n        while (i <= mid) {\n            merged[k++] = nums[i++];\n        }\n        \n        while (j <= right) {\n            merged[k++] = nums[j++];\n        }\n        \n        System.arraycopy(merged, 0, nums, left, merged.length);\n        \n        return count;\n    }\n}\n",
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
  510: {
    java: {
      "binary-search-tree": "",
    },
  },
  519: {
    java: {
      "reservoir-sampling":
        "import java.util.HashMap;\nimport java.util.Map;\nimport java.util.Random;\n\npublic class Solution {\n    private int m, n, totalCells;\n    private Map<Integer, Integer> map;\n    private Random rand;\n\n    public Solution(int m, int n) {\n        this.m = m;\n        this.n = n;\n        this.totalCells = m * n;\n        this.map = new HashMap<>();\n        this.rand = new Random();\n    }\n\n    public int[] flip() {\n        int randomCell = rand.nextInt(totalCells);\n        totalCells--;\n\n        // Use map to get the actual position or the random position\n        int position = map.getOrDefault(randomCell, randomCell);\n\n        // Map the selected position to the last available cell position\n        map.put(randomCell, map.getOrDefault(totalCells, totalCells));\n\n        return new int[]{position / n, position % n};\n    }\n\n    public void reset() {\n        map.clear();\n        totalCells = m * n;\n    }\n}\n\n/**\n * Your Solution object will be instantiated and called as such:\n * Solution obj = new Solution(m, n);\n * int[] param_1 = obj.flip();\n * obj.reset();\n */",
    },
  },
  522: {
    java: {
      "two-pointers": "",
    },
  },
  524: {
    java: {
      "two-pointers": "",
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
  538: {
    java: {
      "binary-search-tree": "",
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
  581: {
    java: {
      "two-pointers":
        "public class Solution {\n    public int findUnsortedSubarray(int[] nums) {\n        int n = nums.length;\n        int left = 0, right = n - 1;\n        \n        while (left < n - 1 && nums[left] <= nums[left + 1]) {\n            left++;\n        }\n        \n        if (left == n - 1) {\n            return 0;\n        }\n        \n        while (right > 0 && nums[right] >= nums[right - 1]) {\n            right--;\n        }\n        \n        int subarrayMin = Integer.MAX_VALUE, subarrayMax = Integer.MIN_VALUE;\n        for (int i = left; i <= right; i++) {\n            subarrayMin = Math.min(subarrayMin, nums[i]);\n            subarrayMax = Math.max(subarrayMax, nums[i]);\n        }\n        \n        while (left > 0 && nums[left - 1] > subarrayMin) {\n            left--;\n        }\n        \n        while (right < n - 1 && nums[right + 1] < subarrayMax) {\n            right++;\n        }\n        \n        return right - left + 1;\n    }\n}\n",
    },
  },
  594: {
    java: {
      "sliding-window":
        "import java.util.HashMap;\nimport java.util.Map;\n\npublic class Solution {\n    public int findLHS(int[] nums) {\n        Map<Integer, Integer> frequencyMap = new HashMap<>();\n        int maxLen = 0;\n        \n        for (int num : nums) {\n            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);\n        }\n        \n        for (int num : frequencyMap.keySet()) {\n            if (frequencyMap.containsKey(num + 1)) {\n                int currentLen = frequencyMap.get(num) + frequencyMap.get(num + 1);\n                maxLen = Math.max(maxLen, currentLen);\n            }\n        }\n        \n        return maxLen;\n    }\n}\n",
    },
  },
  604: {
    java: {
      iterator:
        "class StringIterator {\n    private List<Node> d = new ArrayList<>();\n    private int p;\n\n    public StringIterator(String compressedString) {\n        int n = compressedString.length();\n        int i = 0;\n        while (i < n) {\n            char c = compressedString.charAt(i);\n            int x = 0;\n            while (++i < n && Character.isDigit(compressedString.charAt(i))) {\n                x = x * 10 + (compressedString.charAt(i) - '0');\n            }\n            d.add(new Node(c, x));\n        }\n    }\n\n    public char next() {\n        if (!hasNext()) {\n            return ' ';\n        }\n        char ans = d.get(p).c;\n        if (--d.get(p).x == 0) {\n            ++p;\n        }\n        return ans;\n    }\n\n    public boolean hasNext() {\n        return p < d.size() && d.get(p).x > 0;\n    }\n}\n\nclass Node {\n    char c;\n    int x;\n\n    Node(char c, int x) {\n        this.c = c;\n        this.x = x;\n    }\n}\n\n/**\n * Your StringIterator object will be instantiated and called as such:\n * StringIterator obj = new StringIterator(compressedString);\n * char param_1 = obj.next();\n * boolean param_2 = obj.hasNext();\n */",
    },
  },
  611: {
    java: {
      "two-pointers":
        "import java.util.Arrays;\n\npublic class Solution {\n    public int triangleNumber(int[] nums) {\n        Arrays.sort(nums);\n        int count = 0;\n        for (int i = nums.length - 1; i >= 2; i--) {\n            int left = 0, right = i - 1;\n            while (left < right) {\n                if (nums[left] + nums[right] > nums[i]) {\n                    count += right - left;\n                    right--;\n                } else {\n                    left++;\n                }\n            }\n        }\n        return count;\n    }\n}\n",
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
  647: {
    java: {
      "two-pointers":
        "public class Solution {\n    public int countSubstrings(String s) {\n        int n = s.length();\n        int count = 0;\n\n        for (int i = 0; i < n; i++) {\n            count += countPalindromesAroundCenter(s, i, i); // Odd length palindromes\n            count += countPalindromesAroundCenter(s, i, i + 1); // Even length palindromes\n        }\n\n        return count;\n    }\n\n    private int countPalindromesAroundCenter(String s, int left, int right) {\n        int count = 0;\n        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            count++;\n            left--;\n            right++;\n        }\n        return count;\n    }\n}\n",
    },
  },
  649: {
    java: {
      queue: "",
    },
  },
  653: {
    java: {
      "two-pointers": "",
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
  661: {
    java: {
      matrix: "",
    },
  },
  669: {
    java: {
      "binary-search-tree": "",
    },
  },
  675: {
    java: {
      matrix: "",
    },
  },
  680: {
    java: {
      "two-pointers": "",
    },
  },
  683: {
    java: {
      "sliding-window":
        "class Solution {\n    public int kEmptySlots(int[] bulbs, int k) {\n      int n = bulbs.length;\n        int ans = Integer.MAX_VALUE;\n        int[] day = new int[n]; // day[i] will store the day when bulb at position (i+1) is turned on\n\n        for (int i = 0; i < n; ++i)\n            day[bulbs[i] - 1] = i + 1;\n\n        int left = 0;\n        int right = left + k + 1;\n        \n        for (int i = 1; right < n; ++i) {\n            if (i == right) {\n                ans = Math.min(ans, Math.max(day[left], day[right]));\n                left = i;\n                right = i + k + 1;\n            } else if (day[i] < Math.max(day[left], day[right])) {\n                left = i;\n                right = i + k + 1;\n            }\n        }\n\n        return ans == Integer.MAX_VALUE ? -1 : ans;\n    }\n}\n",
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
  695: {
    java: {
      matrix: "",
    },
  },
  696: {
    java: {
      "two-pointers": "",
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
  703: {
    java: {
      "binary-search-tree":
        "import java.util.PriorityQueue;\n\nclass KthLargest {\n    private PriorityQueue<Integer> minHeap;\n    private int k;\n\n    public KthLargest(int k, int[] nums) {\n        this.k = k;\n        this.minHeap = new PriorityQueue<>(k);\n        \n        for (int num : nums) {\n            add(num);\n        }\n    }\n    \n    public int add(int val) {\n        if (minHeap.size() < k) {\n            minHeap.offer(val);\n        } else if (val > minHeap.peek()) {\n            minHeap.poll();\n            minHeap.offer(val);\n        }\n        return minHeap.peek();\n    }\n}\n",
    },
  },
  710: {
    java: {
      randomized: "",
    },
  },
  713: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numSubarrayProductLessThanK(int[] nums, int k) {\n        if (k <= 1) return 0; /\n        int left = 0;\n        int product = 1;\n        int count = 0;\n        \n        for (int right = 0; right < nums.length; right++) {\n            product *= nums[right];\n            \n            while (product >= k) {\n                product /= nums[left];\n                left++;\n            }\n            \n            count += right - left + 1;\n        }\n        \n        return count;\n    }\n}",
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
  723: {
    java: {
      "two-pointers": "",
    },
  },
  727: {
    java: {
      "sliding-window":
        'class Solution {\n  public String minWindow(String s1, String s2) {\n  int m = s2.length();\n  int n = s1.length();\n    int[][] dp = new int[m + 1][n + 1];\n\n    for (int j = 0; j <= n; ++j)\n      dp[0][j] = j + 1;\n\n    for (int i = 1; i <= m; ++i)\n      for (int j = 1; j <= n; ++j)\n        if (s2.charAt(i - 1) == s1.charAt(j - 1))\n          dp[i][j] = dp[i - 1][j - 1];\n        else\n          dp[i][j] = dp[i][j - 1];\n\n    int bestLeft = 0;\n    int minLength = Integer.MAX_VALUE;\n\n    for (int j = 1; j <= n; ++j)\n      if (dp[m][j] > 0 && j - dp[m][j] + 1 < minLength) {\n        bestLeft = dp[m][j] - 1;\n        minLength = j - dp[m][j] + 1;\n      }\n\n    return minLength == Integer.MAX_VALUE ? "" : s1.substring(bestLeft, bestLeft + minLength);\n  }\n}',
    },
  },
  733: {
    java: {
      matrix: "",
    },
  },
  741: {
    java: {
      matrix: "",
    },
  },
  743: {
    java: {
      "heap-(priority-queue)": "",
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
  753: {
    java: {
      "eulerian-circuit":
        "class Solution {\n\n    public String crackSafe(int n, int k) {\n        if (n == 1) {\n            StringBuilder sb = new StringBuilder();\n            for (int i = 0; i < k; i++) {\n                sb.append(i);\n            }\n            return sb.toString();\n        }\n\n        StringBuilder result = new StringBuilder();\n        Set<String> visited = new HashSet<>();\n        Stack<String> stack = new Stack<>();\n        String start = String.join('', Collections.nCopies(n - 1, '0'));\n        stack.push(start);\n\n        while (!stack.isEmpty()) {\n            String node = stack.peek();\n            boolean hasUnvisitedEdge = false;\n\n            // Try all possible edges from this node by appending each digit from 0 to k-1\n            for (int i = 0; i < k; i++) {\n                String next = node + i;\n                if (!visited.contains(next)) {\n                    visited.add(next);\n                    stack.push(next.substring(1));\n                    hasUnvisitedEdge = true;\n                    break;\n                }\n            }\n\n            // If all edges from this node are visited, backtrack and append the last\n            // character to the result\n            if (!hasUnvisitedEdge) {\n                result.append(stack.pop().charAt(node.length() - 1));\n            }\n        }\n\n        result.append(start.substring(0, start.length() - 1));\n        return result.toString();\n    }\n\n    // public String crackSafe(int n, int k) {\n    // StringBuilder result = new StringBuilder();\n    // Set<String> visited = new HashSet<>();\n    // String start = String.join('', Collections.nCopies(n - 1, '0'));\n    // dfs(start, k, visited, result, n);\n    // result.append(start);\n    // return result.toString();\n    // }\n    // private void dfs(String node, int k, Set<String> visited, StringBuilder\n    // result, int n) {\n    // for (int i = 0; i < k; i++) {\n    // String next = node + i;\n    // if (!visited.contains(next)) {\n    // visited.add(next);\n    // dfs(next.substring(1), k, visited, result, n);\n    // result.append(i);\n    // }\n    // }\n    // }\n\n}",
    },
  },
  759: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  763: {
    java: {
      "two-pointers": "",
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
  773: {
    java: {
      matrix: "",
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
      matrix: "",
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
  803: {
    java: {
      matrix: "",
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
  821: {
    java: {
      "two-pointers": "",
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
      matrix: "",
    },
  },
  832: {
    java: {
      "two-pointers": "",
    },
  },
  835: {
    java: {
      matrix: "",
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
  840: {
    java: {
      matrix: "",
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
  850: {
    java: {
      "line-sweep":
        "class Event {\n  public int x;\n  public int y1;\n  public int y2;\n  public char type;\n  public Event(int x, int y1, int y2, char type) {\n    this.x = x;\n    this.y1 = y1;\n    this.y2 = y2;\n    this.type = type;\n  }\n}\n\nclass Solution {\n  public int rectangleArea(int[][] rectangles) {\n  int kMod = 1_000_000_007;\n    List<Event> events = new ArrayList<>();\n\n    for (int[] right : rectangles) {\n      events.add(new Event(right[0], right[1], right[3], 's'));\n      events.add(new Event(right[2], right[1], right[3], 'e'));\n    }\n\n    Collections.sort(events, (a, b) -> a.x - b.x);\n\n    long ans = 0;\n    int prevX = 0;\n    List<Pair<Integer, Integer>> yPairs = new ArrayList<>();\n\n    for (Event e : events) {\n      if (e.x > prevX) {\n      int width = e.x - prevX;\n        ans = (ans + width * getHeight(yPairs)) % kMod;\n        prevX = e.x;\n      }\n      if (e.type == 's') {\n        yPairs.add(new Pair<>(e.y1, e.y2));\n        Collections.sort(yPairs, Comparator.comparing(Pair::getKey));\n      } else { // type == 'e'\n        yPairs.remove(new Pair<>(e.y1, e.y2));\n      }\n    }\n\n    return (int) (ans % kMod);\n  }\n\n  private long getHeight(List<Pair<Integer, Integer>> yPairs) {\n    int height = 0;\n    int prevY = 0;\n\n    for (Pair<Integer, Integer> pair : yPairs) {\n    int y1 = pair.getKey();\n    int y2 = pair.getValue();\n      prevY = Math.max(prevY, y1);\n      if (y2 > prevY) {\n        height += y2 - prevY;\n        prevY = y2;\n      }\n    }\n\n    return height;\n  }\n}",
    },
  },
  855: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  857: {
    java: {
      "heap-(priority-queue)": "",
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
  864: {
    java: {
      matrix: "",
    },
  },
  867: {
    java: {
      matrix: "",
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
  876: {
    java: {
      "two-pointers": "",
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
  885: {
    java: {
      matrix: "",
    },
  },
  892: {
    java: {
      matrix: "",
    },
  },
  897: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private TreeNode result;\n\n    public TreeNode increasingBST(TreeNode root) {\n        TreeNode dummy = new TreeNode();\n        result = dummy;\n        inorder(root);\n        return dummy.right;\n    }\n    \n    private void inorder(TreeNode node) {\n        if (node == null) {\n            return;\n        }\n        \n        inorder(node.left);\n        \n        result.right = new TreeNode(node.val);\n        result = result.right;\n        \n        inorder(node.right);\n    }\n}\n",
    },
  },
  900: {
    java: {
      iterator:
        "class RLEIterator {\n    private int[] encoding;\n    private int index;\n\n    public RLEIterator(int[] encoding) {\n        this.encoding = encoding;\n        this.index = 0;\n    }\n\n    public int next(int n) {\n        while (index < encoding.length) {\n            if (n <= encoding[index]) {\n                encoding[index] -= n;\n                return encoding[index + 1];\n            } else {\n                n -= encoding[index];\n                index += 2;\n            }\n        }\n        return -1; \n    }\n}\n\n/**\n * Your RLEIterator object will be instantiated and called as such:\n * RLEIterator obj = new RLEIterator(encoding);\n * int param_1 = obj.next(n);\n */",
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
  909: {
    java: {
      matrix: "",
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
  925: {
    java: {
      "two-pointers": "",
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
  936: {
    java: {
      queue: "",
    },
  },
  938: {
    java: {
      "binary-search-tree": "",
    },
  },
  942: {
    java: {
      "two-pointers": "",
    },
  },
  948: {
    java: {
      "two-pointers": "",
    },
  },
  950: {
    java: {
      queue: "",
    },
  },
  959: {
    java: {
      matrix: "",
    },
  },
  969: {
    java: {
      "two-pointers": "",
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
  980: {
    java: {
      matrix: "",
    },
  },
  986: {
    java: {
      "two-pointers": "",
    },
  },
  992: {
    java: {
      "sliding-window":
        "class Solution {\n    public int subarraysWithKDistinct(int[] nums, int k) {\n        return atMostackDistinct(nums, k) - atMostackDistinct(nums, k - 1);\n    }\n    \n    private int atMostackDistinct(int[] nums, int k) {\n        int n = nums.length;\n        int left = 0;\n        int count = 0;\n        Map<Integer, Integer> frequency = new HashMap<>();\n        int distinctCount = 0;\n        \n        for (int right = 0; right < n; right++) {\n            int num = nums[right];\n            if (frequency.getOrDefault(num, 0) == 0) {\n                distinctCount++;\n            }\n            frequency.put(num, frequency.getOrDefault(num, 0) + 1);\n            \n            while (distinctCount > k) {\n                int leftNum = nums[left++];\n                frequency.put(leftNum, frequency.get(leftNum) - 1);\n                if (frequency.get(leftNum) == 0) {\n                    distinctCount--;\n                }\n            }\n            \n            count += right - left + 1;\n        }\n        \n        return count;\n    }\n}\n",
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
  999: {
    java: {
      matrix: "",
    },
  },
  1004: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int longestOnes(int[] nums, int k) {\n        int left = 0;\n        int right = 0;\n        int maxOnes = 0;\n        int zerosCount = 0;\n\n        for (right = 0; right < nums.length; right++) {\n            if (nums[right] == 0) {\n                zerosCount++;\n            }\n\n            while (zerosCount > k) {\n                if (nums[left] == 0) {\n                    zerosCount--;\n                }\n                left++;\n            }\n\n            maxOnes = Math.max(maxOnes, right - left + 1);\n        }\n\n        return maxOnes;\n    }\n\n// /**\n//  * @param {number[]} nums\n//  * @param {number} k\n//  * @return {number}\n//  */\n// var longestOnes = function(nums, k) {\n//     let ans = 0;\n//     for (let l = 0, r = 0; r < nums.length; ++r) {\n//         if (nums[r] == 0)\n//             --k;\n//         while (k < 0)\n//             if (nums[l++] == 0)\n//                 ++k;\n//         ans = Math.max(ans, r - l + 1);\n//     }\n//     return ans;\n// };\n// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums = {1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0};\n        int k = 2;\n        System.out.println(solution.longestOnes(nums, k)); // Output: 6\n    }\n}",
    },
  },
  1008: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private int index = 0;\n\n    public TreeNode bstFromPreorder(int[] preorder) {\n        return bstFromPreorder(preorder, Integer.MIN_VALUE, Integer.MAX_VALUE);\n    }\n    \n    private TreeNode bstFromPreorder(int[] preorder, int lower, int upper) {\n        if (index == preorder.length || preorder[index] < lower || preorder[index] > upper) {\n            return null;\n        }\n        \n        int val = preorder[index++];\n        TreeNode root = new TreeNode(val);\n        root.left = bstFromPreorder(preorder, lower, val - 1);\n        root.right = bstFromPreorder(preorder, val + 1, upper);\n        \n        return root;\n    }\n}\n",
    },
  },
  1020: {
    java: {
      matrix: "",
    },
  },
  1023: {
    java: {
      "two-pointers": "",
    },
  },
  1025: {
    java: {
      brainteaser: "",
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
  1038: {
    java: {
      "binary-search-tree": "",
    },
  },
  1040: {
    java: {
      "two-pointers": "",
    },
  },
  1044: {
    java: {
      "suffix-array":
        'import java.util.Arrays;\n\npublic class Solution {\n\n    public String longestDupSubstring(String s) {\n        int n = s.length();\n        int[] suffixArray = buildSuffixArray(s);\n        int[] lcpArray = buildLCPArray(suffixArray, s);\n\n        int pos = -1, maxLen = 0;\n        for (int i = 0; i < n - 1; i++) {\n            if (lcpArray[i] > maxLen) {\n                maxLen = lcpArray[i];\n                pos = suffixArray[i];\n            }\n        }\n\n        return pos == -1 ? "" : s.substring(pos, pos + maxLen);\n    }\n\n    private int[] buildSuffixArray(String S) {\n        int n = S.length();\n        Integer[] order = new Integer[n];\n        for (int i = 0; i < n; i++)\n            order[i] = n - 1 - i;\n\n        Arrays.sort(order, (a, b) -> Character.compare(S.charAt(a), S.charAt(b)));\n\n        int[] suffixArray = new int[n];\n        int[] classes = new int[n];\n        for (int i = 0; i < n; i++) {\n            suffixArray[i] = order[i];\n            classes[i] = S.charAt(i);\n        }\n\n        for (int len = 1; len < n; len *= 2) {\n            int[] c = classes.clone();\n            for (int i = 0; i < n; i++) {\n                classes[suffixArray[i]] = i > 0 && c[suffixArray[i - 1]] == c[suffixArray[i]] && suffixArray[i - 1] + len < n\n                        && c[suffixArray[i - 1] + len / 2] == c[suffixArray[i] + len / 2] ? classes[suffixArray[i - 1]] : i;\n            }\n\n            int[] count = new int[n];\n            for (int i = 0; i < n; i++)\n                count[i] = i;\n            int[] s = suffixArray.clone();\n            for (int i = 0; i < n; i++) {\n                int s1 = s[i] - len;\n                if (s1 >= 0)\n                    suffixArray[count[classes[s1]]++] = s1;\n            }\n        }\n\n        return suffixArray;\n    }\n\n    private int[] buildLCPArray(int[] suffixArray, String s) {\n        int n = suffixArray.length;\n        int[] rank = new int[n];\n        for (int i = 0; i < n; i++)\n            rank[suffixArray[i]] = i;\n        int[] lcpArray = new int[n - 1];\n        for (int i = 0, h = 0; i < n; i++) {\n            if (rank[i] < n - 1) {\n                int j = suffixArray[rank[i] + 1];\n                while (i + h < n && j + h < n && s.charAt(i + h) == s.charAt(j + h)) {\n                    h++;\n                }\n                lcpArray[rank[i]] = h;\n                if (h > 0) {\n                    h--;\n                }\n            }\n        }\n        return lcpArray;\n    }\n}\n',
    },
  },
  1046: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1048: {
    java: {
      "two-pointers": "",
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
  1062: {
    java: {
      "suffix-array":
        'import java.util.*;\n\npublic class Solution {\n    public String longestRepeatingSubstring(String s) {\n        int n = s.length();\n        int[] suffixArray = buildSuffixArray(s);\n        int[] lcpArray = buildLCPArray(s, suffixArray);\n        \n        int left = 1, right = n;\n        int maxLength = 0;\n        String result = "";\n        \n        while (left <= right) {\n            int mid = left + (right - left) / 2;\n            if (hasRepeatedSubstring(mid, n, suffixArray, lcpArray)) {\n                maxLength = mid;\n                left = mid + 1;\n            } else {\n                right = mid - 1;\n            }\n        }\n        \n        for (int i = 0; i <= n - maxLength; i++) {\n            String candidate = s.substring(suffixArray[i], suffixArray[i] + maxLength);\n            if (hasRepeatedSubstring(candidate, s, maxLength)) {\n                return candidate;\n            }\n        }\n        \n        return result;\n    }\n    \n    private boolean hasRepeatedSubstring(int len, int n, int[] suffixArray, int[] lcpArray) {\n        for (int i = 1; i < n; i++) {\n            if (lcpArray[i] >= len) {\n                int start1 = suffixArray[i - 1];\n                int start2 = suffixArray[i];\n                if ((start1 < n - len && start2 > n - len) || (start1 > n - len && start2 < n - len)) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    }\n    \n    private boolean hasRepeatedSubstring(String candidate, String s, int len) {\n        int count = 0;\n        int index = s.indexOf(candidate);\n        while (index != -1) {\n            count++;\n            index = s.indexOf(candidate, index + 1);\n        }\n        return count > 1;\n    }\n    \n    private int[] buildSuffixArray(String s) {\n        int n = s.length();\n        Integer[] order = new Integer[n];\n        for (int i = 0; i < n; i++) {\n            order[i] = i;\n        }\n        \n        Arrays.sort(order, (a, b) -> Character.compare(s.charAt(a), s.charAt(b)));\n        \n        int[] suffixArray = new int[n];\n        int[] classes = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            suffixArray[i] = order[i];\n            classes[i] = s.charAt(i);\n        }\n        \n        for (int len = 1; len < n; len *= 2) {\n            int[] c = classes.clone();\n            for (int i = 0; i < n; i++) {\n                classes[suffixArray[i]] = i > 0 && c[suffixArray[i - 1]] == c[suffixArray[i]] && suffixArray[i - 1] + len < n\n                        && c[suffixArray[i - 1] + len / 2] == c[suffixArray[i] + len / 2] ? classes[suffixArray[i - 1]] : i;\n            }\n            \n            int[] count = new int[n];\n            for (int i = 0; i < n; i++) {\n                count[i] = i;\n            }\n            \n            int[] s = suffixArray.clone();\n            for (int i = 0; i < n; i++) {\n                int s1 = s[i] - len;\n                if (s1 >= 0) {\n                    suffixArray[count[classes[s1]]++] = s1;\n                }\n            }\n        }\n        \n        return suffixArray;\n    }\n    \n    private int[] buildLCPArray(String s, int[] suffixArray) {\n        int n = s.length();\n        int[] rank = new int[n];\n        for (int i = 0; i < n; i++) {\n            rank[suffixArray[i]] = i;\n        }\n        \n        int[] lcpArray = new int[n - 1];\n        int h = 0;\n        \n        for (int i = 0; i < n; i++) {\n            if (rank[i] > 0) {\n                int j = suffixArray[rank[i] - 1];\n                while (i + h < n && j + h < n && s.charAt(i + h) == s.charAt(j + h)) {\n                    h++;\n                }\n                lcpArray[rank[i] - 1] = h;\n                if (h > 0) {\n                    h--;\n                }\n            }\n        }\n        \n        return lcpArray;\n    }\n}\n',
      "dynamic-programming":
        "class Solution {\n    public int longestRepeatingSubstring(String s) {\n        int n = s.length();\n        int ans = 0;\n        int[][] dp = new int[n][n];\n        for (int i = 0; i < n; ++i) {\n            for (int j = i + 1; j < n; ++j) {\n                if (s.charAt(i) == s.charAt(j)) {\n                    dp[i][j] = i > 0 ? dp[i - 1][j - 1] + 1 : 1;\n                    ans = Math.max(ans, dp[i][j]);\n                }\n            }\n        }\n        return ans;\n    }\n}",
    },
  },
  1072: {
    java: {
      matrix: "",
    },
  },
  1074: {
    java: {
      matrix: "",
    },
  },
  1086: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1089: {
    java: {
      "two-pointers":
        "public class Solution {\n    public void duplicateZeros(int[] arr) {\n        int n = arr.length;\n        \n        int zeroCount = 0;\n        for (int num : arr) {\n            if (num == 0) {\n                zeroCount++;\n            }\n        }\n        \n        int lastIndex = n - 1;\n        for (int i = lastIndex; i >= 0; i--) {\n            if (arr[i] == 0) {\n                if (i + zeroCount <= lastIndex) {\n                    arr[i + zeroCount] = 0;\n                }\n                zeroCount--;\n                if (i + zeroCount <= lastIndex) {\n                    arr[i + zeroCount] = 0;\n                }\n            } else {\n                if (i + zeroCount <= lastIndex) {\n                    arr[i + zeroCount] = arr[i];\n                }\n            }\n        }\n    }\n}\n",
    },
  },
  1091: {
    java: {
      matrix: "",
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
  1102: {
    java: {
      matrix: "",
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
  1122: {
    java: {
      "counting-sort":
        "class Solution {\n    public int[] relativeSortArray(int[] arr1, int[] arr2) {\n        int maxNum = 1000; // assuming the values in arr1 are between 0 and 1000\n        int[] count = new int[maxNum + 1];\n        \n        for (int num : arr1) {\n            count[num]++;\n        }\n        \n        int[] result = new int[arr1.length];\n        int index = 0;\n        \n        for (int num : arr2) {\n            while (count[num] > 0) {\n                result[index++] = num;\n                count[num]--;\n            }\n        }\n        \n        for (int i = 0; i <= maxNum; i++) {\n            while (count[i] > 0) {\n                result[index++] = i;\n                count[i]--;\n            }\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  1135: {
    java: {
      "minimum-spanning-tree":
        'import java.util.*;\n\nclass Solution {\n    class Edge {\n        int src, dest, weight;\n        Edge(int src, int dest, int weight) {\n            this.src = src;\n            this.dest = dest;\n            this.weight = weight;\n        }\n    }\n\n    class UnionFind {\n        int[] parent, rank;\n\n        UnionFind(int n) {\n            parent = new int[n];\n            rank = new int[n];\n            for (int i = 0; i < n; i++) {\n                parent[i] = i;\n                rank[i] = 0;\n            }\n        }\n\n        int find(int x) {\n            if (parent[x] != x) {\n                parent[x] = find(parent[x]);\n            }\n            return parent[x];\n        }\n\n        boolean union(int x, int y) {\n            int rootX = find(x);\n            int rootY = find(y);\n            if (rootX != rootY) {\n                if (rank[rootX] > rank[rootY]) {\n                    parent[rootY] = rootX;\n                } else if (rank[rootX] < rank[rootY]) {\n                    parent[rootX] = rootY;\n                } else {\n                    parent[rootY] = rootX;\n                    rank[rootX]++;\n                }\n                return true;\n            }\n            return false;\n        }\n    }\n\n    public int minimumCost(int n, int[][] connections) {\n        List<Edge> edges = new ArrayList<>();\n        for (int[] connection : connections) {\n            edges.add(new Edge(connection[0] - 1, connection[1] - 1, connection[2]));\n        }\n        edges.sort(Comparator.comparingInt(e -> e.weight));\n\n        UnionFind uf = new UnionFind(n);\n        int cost = 0, count = 0;\n        for (Edge edge : edges) {\n            if (uf.union(edge.src, edge.dest)) {\n                cost += edge.weight;\n                count++;\n                if (count == n - 1) {\n                    return cost;\n                }\n            }\n        }\n        return -1; // if it\'s not possible to connect all cities\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[][] connections = { {1, 2, 5}, {1, 3, 6}, {2, 3, 1} };\n        int n = 3;\n        int result = solution.minimumCost(n, connections);\n        System.out.println("Minimum cost to connect all cities: " + result); // Output: 6\n    }\n}\n',
    },
  },
  1139: {
    java: {
      matrix: "",
    },
  },
  1147: {
    java: {
      "two-pointers": "",
    },
  },
  1151: {
    java: {
      "sliding-window":
        "class Solution {\n  public int minSwaps(int[] data) {\n      int sum = 0;\n      for (int v : data) {\n          sum += v;\n      }\n      int sumK = 0;\n      for (int i = 0; i < sum; ++i) {\n          sumK += data[i];\n      }\n      int max = sumK;\n      for (int i = sum; i < data.length; ++i) {\n          sumK += data[i];\n          sumK -= data[i - sum];\n          max = Math.max(max, sumK);\n      }\n      return sum - max;\n  }\n}",
    },
  },
  1156: {
    java: {
      "sliding-window":
        "public class Solution {\n    public int maxRepOpt1(String text) {\n        int[] count = new int[26];\n        for (char c : text.toCharArray()) {\n            count[c - 'a']++;\n        }\n        int maxLen = 0;\n        for (int i = 0; i < text.length(); ) {\n            char currentChar = text.charAt(i);\n            int start = i;            \n            while (i < text.length() && text.charAt(i) == currentChar) {\n                i++;\n            }\n            int blockLen = i - start;            \n            int nextBlockStart = i + 1;\n            while (nextBlockStart < text.length() && text.charAt(nextBlockStart) == currentChar) {\n                nextBlockStart++;\n            }\n            int totalLen = blockLen + (nextBlockStart - i - 1);            \n            maxLen = Math.max(maxLen, Math.min(totalLen + 1, count[currentChar - 'a']));            \n            i = start + blockLen;\n        }\n\n        return maxLen;\n    }\n}\n",
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
  1167: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1168: {
    java: {
      "minimum-spanning-tree":
        'import java.util.*;\n\nclass Solution {\n    class Edge {\n        int u, v, cost;\n        Edge(int u, int v, int cost) {\n            this.u = u;\n            this.v = v;\n            this.cost = cost;\n        }\n    }\n\n    class UnionFind {\n        int[] parent, rank;\n\n        UnionFind(int n) {\n            parent = new int[n];\n            rank = new int[n];\n            for (int i = 0; i < n; i++) {\n                parent[i] = i;\n                rank[i] = 0;\n            }\n        }\n\n        int find(int x) {\n            if (parent[x] != x) {\n                parent[x] = find(parent[x]);\n            }\n            return parent[x];\n        }\n\n        boolean union(int x, int y) {\n            int rootX = find(x);\n            int rootY = find(y);\n            if (rootX != rootY) {\n                if (rank[rootX] > rank[rootY]) {\n                    parent[rootY] = rootX;\n                } else if (rank[rootX] < rank[rootY]) {\n                    parent[rootX] = rootY;\n                } else {\n                    parent[rootY] = rootX;\n                    rank[rootX]++;\n                }\n                return true;\n            }\n            return false;\n        }\n    }\n\n    public int minCostToSupplyWater(int n, int[] wells, int[][] pipes) {\n        List<Edge> edges = new ArrayList<>();\n\n        // Add the virtual vertex connections to the wells\n        for (int i = 0; i < wells.length; i++) {\n            edges.add(new Edge(0, i + 1, wells[i]));\n        }\n\n        // Add the existing pipes connections\n        for (int[] pipe : pipes) {\n            edges.add(new Edge(pipe[0], pipe[1], pipe[2]));\n        }\n\n        // Sort all edges by cost\n        edges.sort(Comparator.comparingInt(e -> e.cost));\n\n        // Kruskal\'s algorithm to find the MST\n        UnionFind uf = new UnionFind(n + 1);\n        int minCost = 0;\n\n        for (Edge edge : edges) {\n            if (uf.union(edge.u, edge.v)) {\n                minCost += edge.cost;\n            }\n        }\n\n        return minCost;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int n = 3;\n        int[] wells = {1, 2, 2};\n        int[][] pipes = {{1, 2, 1}, {2, 3, 1}};\n        System.out.println("Minimum cost to supply water: " + solution.minCostToSupplyWater(n, wells, pipes)); // Output: 3\n    }\n}\n',
    },
  },
  1172: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1176: {
    java: {
      "sliding-window":
        "class Solution {\n    public int dietPlanPerformance(int[] calories, int k, int lower, int upper) {\n        int n = calories.length;\n        int[] s = new int[n + 1];\n        for (int i = 0; i < n; ++i) {\n            s[i + 1] = s[i] + calories[i];\n        }\n        int ans = 0;\n        for (int i = 0; i < n - k + 1; ++i) {\n            int t = s[i + k] - s[i];\n            if (t < lower) {\n                --ans;\n            } else if (t > upper) {\n                ++ans;\n            }\n        }\n        return ans;\n    }\n}",
    },
  },
  1183: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1188: {
    java: {
      concurrency:
        "class BoundedBlockingQueue {\n    private Semaphore s1;\n    private Semaphore s2;\n    private Deque<Integer> q = new ArrayDeque<>();\n\n    public BoundedBlockingQueue(int capacity) {\n        s1 = new Semaphore(capacity);\n        s2 = new Semaphore(0);\n    }\n\n    public void enqueue(int element) throws InterruptedException {\n        s1.acquire();\n        q.offer(element);\n        s2.release();\n    }\n\n    public int dequeue() throws InterruptedException {\n        s2.acquire();\n        int ans = q.poll();\n        s1.release();\n        return ans;\n    }\n\n    public int size() {\n        return q.size();\n    }\n}",
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
  1195: {
    java: {
      concurrency:
        "import java.util.function.IntConsumer;\n\npublic class FizzBuzz {\n    private int n;\n    private int current = 1;\n\n    public FizzBuzz(int n) {\n        this.n = n;\n    }\n\n    public synchronized void fizz(Runnable printFizz) throws InterruptedException {\n        while (current <= n) {\n            while (current <= n && (current % 3 != 0 || current % 5 == 0)) {\n                wait();\n            }\n            if (current <= n) {\n                printFizz.run();\n                current++;\n                notifyAll();\n            }\n        }\n    }\n\n    public synchronized void buzz(Runnable printBuzz) throws InterruptedException {\n        while (current <= n) {\n            while (current <= n && (current % 5 != 0 || current % 3 == 0)) {\n                wait();\n            }\n            if (current <= n) {\n                printBuzz.run();\n                current++;\n                notifyAll();\n            }\n        }\n    }\n\n    public synchronized void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {\n        while (current <= n) {\n            while (current <= n && (current % 3 != 0 || current % 5 != 0)) {\n                wait();\n            }\n            if (current <= n) {\n                printFizzBuzz.run();\n                current++;\n                notifyAll();\n            }\n        }\n    }\n\n    public synchronized void number(IntConsumer printNumber) throws InterruptedException {\n        while (current <= n) {\n            while (current <= n && (current % 3 == 0 || current % 5 == 0)) {\n                wait();\n            }\n            if (current <= n) {\n                printNumber.accept(current);\n                current++;\n                notifyAll();\n            }\n        }\n    }\n}\n",
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
  1208: {
    java: {
      "sliding-window":
        "class Solution {\n    public int equalSubstring(String s, String t, int maxCost) {\n        int n = s.length();\n        int[] cost = new int[n];\n        \n        for (int i = 0; i < n; i++) {\n            cost[i] = Math.abs(s.charAt(i) - t.charAt(i));\n        }\n        \n        int left = 0, right = 0;\n        int currentCost = 0;\n        int maxLength = 0;\n        \n        while (right < n) {\n            currentCost += cost[right];\n            \n            while (currentCost > maxCost) {\n                currentCost -= cost[left];\n                left++;\n            }\n            \n            maxLength = Math.max(maxLength, right - left + 1);\n            right++;\n        }\n        \n        return maxLength;\n    }\n}\n",
    },
  },
  1210: {
    java: {
      matrix: "",
    },
  },
  1214: {
    java: {
      "two-pointers": "",
    },
  },
  1219: {
    java: {
      matrix: "",
    },
  },
  1222: {
    java: {
      matrix: "",
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
  1234: {
    java: {
      "sliding-window":
        "class Solution {\n  public int balancedString(String s) {\n  int n = s.length();\n  int k = n / 4;\n    int ans = n;\n    int[] count = new int[128];\n\n    for (final char c : s.toCharArray())\n      ++count[c];\n\n    for (int i = 0, j = 0; i < n; ++i) {\n      --count[s.charAt(i)];\n      while (j < n && count['Q'] <= k && count['W'] <= k && count['E'] <= k && count['R'] <= k) {\n        ans = Math.min(ans, i - j + 1);\n        ++count[s.charAt(j)];\n        ++j;\n      }\n    }\n\n    return ans;\n  }\n}",
    },
  },
  1237: {
    java: {
      "two-pointers": "",
    },
  },
  1242: {
    java: {
      concurrency:
        "import java.net.URI;\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\nimport java.util.Set;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.ConcurrentSkipListSet;\nimport java.util.stream.Collectors;\nimport java.util.stream.Stream;\n\npublic class Web_Crawler_Multithreaded {\n\n    class Solution_1_synchronizedList {\n        private final Set<String> set = Collections.newSetFromMap(new ConcurrentHashMap<String, Boolean>());\n        private final List<String> result = Collections.synchronizedList(new ArrayList<String>());\n        private String HOSTNAME = null;\n\n        public List<String> crawl(String startUrl, HtmlParser htmlParser) {\n            initHostName(startUrl);\n            set.add(startUrl);\n            getUrlDfs(startUrl, htmlParser);\n            return result;\n        }\n\n        private boolean judgeHostname(String url) {\n            int idx = url.indexOf('/', 7);\n            String hostName = (idx != -1) ? url.substring(0, idx) : url;\n            return hostName.equals(HOSTNAME);\n        }\n\n        private void initHostName(String url) {\n            int idx = url.indexOf('/', 7);\n            HOSTNAME = (idx != -1) ? url.substring(0, idx) : url;\n        }\n\n        private void getUrlDfs(String startUrl, HtmlParser htmlParser) {\n            result.add(startUrl);\n            List<String> res = htmlParser.getUrls(startUrl);\n            List<Thread> threads = new ArrayList<>();\n            for (String url : res) {\n                if (judgeHostname(url) && !set.contains(url)) {\n                    set.add(url);\n                    threads.add(new Thread(() -> {\n                        getUrlDfs(url, htmlParser);\n                    }));\n                }\n            }\n            for (Thread thread : threads) {\n                thread.start();\n            }\n            try {\n                for (Thread thread : threads) {\n                    thread.join(); \n                }\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n        }\n\n    }\n\n    class Solution_2_ConcurrentSkipListSet {\n\n        public List<String> crawl(String startUrl, HtmlParser htmlParser) {\n            Set<String> visited = new ConcurrentSkipListSet<>();\n            String hostname = getHostname(startUrl);\n            visited.add(startUrl);\n\n            return crawlDfs(startUrl, htmlParser, hostname, visited).collect(Collectors.toList());\n        }\n\n        private Stream<String> crawlDfs(String startUrl, HtmlParser htmlParser, String hostname,\n                                     Set<String> visited) {\n            try (Stream<String> stream = htmlParser.getUrls(startUrl)\n                .parallelStream()\n                .filter(url -> isSameHostname(url, hostname))\n                .filter(visited::add)\n                .flatMap(url -> crawlDfs(url, htmlParser, hostname, visited))) {\n\n                return Stream.concat(Stream.of(startUrl), stream);\n            }\n        }\n\n        private String getHostname(String url) {\n            int idx = url.indexOf('/', 7);\n            return (idx != -1) ? url.substring(0, idx) : url;\n        }\n\n        private boolean isSameHostname(String url, String hostname) {\n            return url.startsWith(hostname) && (url.length() == hostname.length()\n                || url.charAt(hostname.length()) == '/');\n        }\n    }\n\n    interface HtmlParser {\n        List<String> getUrls(String str);\n    }\n\n\n    class Solution_CrawlerClass {\n        public List<String> crawl(String startUrl, HtmlParser htmlParser) {\n            String host = URI.create(startUrl).getHost();\n            Crawler crawler = new Crawler(startUrl, host, htmlParser);\n            crawler.res = new ArrayList<>();\n            crawler.start();\n            Crawler.joinThread(crawler);\n            return crawler.res;\n        }\n    }\n\n    static class Crawler extends Thread {\n        String startUrl;\n        String hostname;\n        HtmlParser htmlParser;\n        public volatile List<String> res = new ArrayList<>();\n\n        public Crawler(String startUrl, String hostname, HtmlParser htmlParser) {\n            this.startUrl = startUrl;\n            this.hostname = hostname;\n            this.htmlParser = htmlParser;\n        }\n\n        @Override\n        public void run() {\n            String host = URI.create(startUrl).getHost();\n            if (!host.equals(hostname) || res.contains(startUrl)) {\n                return;\n            }\n            res.add(startUrl);\n            List<Thread> threads = new ArrayList<>();\n            for (String s : htmlParser.getUrls(startUrl)) {\n                Crawler crawler = new Crawler(s, hostname, htmlParser);\n                crawler.start();\n                threads.add(crawler);\n            }\n            for (Thread t : threads) {\n                joinThread(t);\n            }\n        }\n\n        public static void joinThread(Thread thread) {\n            try {\n                thread.join();\n            } catch (InterruptedException e) {\n            }\n        }\n\n    }\n}",
    },
  },
  1248: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numberOfSubarrays(int[] nums, int k) {\n        return atMost(nums, k) - atMost(nums, k - 1);\n    }\n    \n    private int atMost(int[] nums, int k) {\n        int res = 0;\n        int left = 0;\n        int count = 0;\n        \n        for (int right = 0; right < nums.length; ++right) {\n            if (nums[right] % 2 == 1) {\n                --k;\n            }\n            \n            while (k < 0) {\n                if (nums[left] % 2 == 1) {\n                    ++k;\n                }\n                ++left;\n            }\n            \n            res += right - left + 1;\n        }\n        \n        return res;\n    }\n}",
    },
  },
  1253: {
    java: {
      matrix: "",
    },
  },
  1254: {
    java: {
      matrix: "",
    },
  },
  1260: {
    java: {
      matrix: "",
    },
  },
  1263: {
    java: {
      matrix: "",
    },
  },
  1265: {
    java: {
      "two-pointers": "",
    },
  },
  1267: {
    java: {
      matrix: "",
    },
  },
  1268: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1275: {
    java: {
      matrix: "",
    },
  },
  1277: {
    java: {
      matrix: "",
    },
  },
  1279: {
    java: {
      concurrency:
        "class TrafficLight {\n  private int road = 1;\n\n  public TrafficLight() {\n  }\n\n  public synchronized void carArrived(\n      int carId, \n      int roadId,\n      int direction, \n      Runnable turnGreen, \n      Runnable crossCar \n  ) {\n      if (roadId != road) {\n          turnGreen.run();\n          road = roadId;\n      }\n      crossCar.run();\n  }\n}",
    },
  },
  1284: {
    java: {
      matrix: "",
    },
  },
  1286: {
    java: {
      iterator:
        "class CombinationIterator {\n    private List<String> combinations;\n    private int currentIndex;\n\n    public CombinationIterator(String characters, int combinationLength) {\n        combinations = new ArrayList<>();\n        generateCombinations(characters, combinationLength, 0, new StringBuilder());\n        currentIndex = 0;\n    }\n\n    private void generateCombinations(String characters, int length, int start, StringBuilder sb) {\n        if (sb.length() == length) {\n            combinations.add(sb.toString());\n            return;\n        }\n\n        for (int i = start; i < characters.length(); i++) {\n            sb.append(characters.charAt(i));\n            generateCombinations(characters, length, i + 1, sb);\n            sb.deleteCharAt(sb.length() - 1);\n        }\n    }\n\n    public String next() {\n        return combinations.get(currentIndex++);\n    }\n\n    public boolean hasNext() {\n        return currentIndex < combinations.size();\n    }\n}\n\n/**\n * Your CombinationIterator object will be instantiated and called as such:\n * CombinationIterator obj = new CombinationIterator(characters,\n * combinationLength);\n * String param_1 = obj.next();\n * boolean param_2 = obj.hasNext();\n */",
    },
  },
  1289: {
    java: {
      matrix: "",
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
  1297: {
    java: {
      "sliding-window":
        "import java.util.HashMap;\nimport java.util.Map;\n\nclass Solution {\n    public int maxFreq(String s, int maxLetters, int minSize, int maxSize) {\n        int n = s.length();\n        int maxCount = 0;\n        Map<String, Integer> substringCount = new HashMap<>();\n        \n        for (int i = 0; i <= n - minSize; ++i) {\n            String sub = s.substring(i, i + minSize);\n            if (isValid(sub, maxLetters)) {\n                substringCount.put(sub, substringCount.getOrDefault(sub, 0) + 1);\n                maxCount = Math.max(maxCount, substringCount.get(sub));\n            }\n        }\n        \n        return maxCount;\n    }\n    \n    private boolean isValid(String sub, int maxLetters) {\n        int[] count = new int[26];\n        int uniqueLetters = 0;\n        for (char c : sub.toCharArray()) {\n            if (count[c - 'a'] == 0) {\n                uniqueLetters++;\n            }\n            count[c - 'a']++;\n        }\n        return uniqueLetters <= maxLetters;\n    }\n}\n",
    },
  },
  1301: {
    java: {
      matrix: "",
    },
  },
  1305: {
    java: {
      "binary-search-tree": "",
    },
  },
  1314: {
    java: {
      matrix: "",
    },
  },
  1329: {
    java: {
      matrix: "",
    },
  },
  1332: {
    java: {
      "two-pointers": "",
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
  1343: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numOfSubarrays(int[] arr, int k, int threshold) {\n        int count = 0;\n        int windowSum = 0;\n        int n = arr.length;\n        int targetSum = k * threshold;\n\n        for (int i = 0; i < k; i++) {\n            windowSum += arr[i];\n        }\n\n        if (windowSum >= targetSum) {\n            count++;\n        }\n\n        for (int i = k; i < n; i++) {\n            windowSum += arr[i] - arr[i - k];\n            if (windowSum >= targetSum) {\n                count++;\n            }\n        }\n\n        return count;\n    }\n}\n",
    },
  },
  1346: {
    java: {
      "two-pointers": "",
    },
  },
  1349: {
    java: {
      matrix: "",
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
  1358: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numberOfSubstrings(String s) {\n        int[] count = new int[3]; \n        int left = 0;\n        int result = 0;\n        \n        for (int right = 0; right < s.length(); right++) {\n            count[s.charAt(right) - 'a']++;\n            \n            while (count[0] > 0 && count[1] > 0 && count[2] > 0) {\n                result += s.length() - right; \n                count[s.charAt(left) - 'a']--;\n                left++;\n            }\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  1368: {
    java: {
      matrix: "",
    },
  },
  1373: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n * int val;\n * TreeNode left;\n * TreeNode right;\n * TreeNode() {}\n * TreeNode(int val) { this.val = val; }\n * TreeNode(int val, TreeNode left, TreeNode right) {\n * this.val = val;\n * this.left = left;\n * this.right = right;\n * }\n * }\n */\nclass Solution {\n    private int maxSum = 0;\n\n    public int maxSumBST(TreeNode root) {\n        dfs(root);\n        return maxSum;\n    }\n\n    private int[] dfs(TreeNode node) {\n        if (node == null) {\n            return new int[] { 1, Integer.MAX_VALUE, Integer.MIN_VALUE, 0 }; // isBST, min, max, sum\n        }\n\n        int[] left = dfs(node.left);\n        int[] right = dfs(node.right);\n\n        if (left[0] == 1 && right[0] == 1 && node.val > left[2] && node.val < right[1]) {\n            int sum = left[3] + right[3] + node.val;\n            maxSum = Math.max(maxSum, sum);\n            int min = Math.min(left[1], node.val);\n            int max = Math.max(right[2], node.val);\n            return new int[] { 1, min, max, sum };\n        } else {\n            return new int[] { 0, 0, 0, 0 }; // not a BST\n        }\n    }\n}\n",
    },
  },
  1380: {
    java: {
      matrix: "",
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
  1385: {
    java: {
      "two-pointers": "",
    },
  },
  1388: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1391: {
    java: {
      matrix: "",
    },
  },
  1405: {
    java: {
      "heap-(priority-queue)": "",
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
  1428: {
    java: {
      matrix: "",
    },
  },
  1429: {
    java: {
      queue:
        "class FirstUnique {\n    private Map<Integer, Integer> cnt = new HashMap<>();\n    private Set<Integer> unique = new LinkedHashSet<>();\n\n    public FirstUnique(int[] nums) {\n        for (int v : nums) {\n            cnt.put(v, cnt.getOrDefault(v, 0) + 1);\n        }\n        for (int v : nums) {\n            if (cnt.get(v) == 1) {\n                unique.add(v);\n            }\n        }\n    }\n\n    public int showFirstUnique() {\n        return unique.isEmpty() ? -1 : unique.iterator().next();\n    }\n\n    public void add(int value) {\n        cnt.put(value, cnt.getOrDefault(value, 0) + 1);\n        if (cnt.get(value) == 1) {\n            unique.add(value);\n        } else {\n            unique.remove(value);\n        }\n    }\n}\n\n/**\n * Your FirstUnique object will be instantiated and called as such:\n * FirstUnique obj = new FirstUnique(nums);\n * int param_1 = obj.showFirstUnique();\n * obj.add(value);\n */",
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
  1444: {
    java: {
      matrix: "",
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
  1467: {
    java: {
      "probability-and-statistics":
        "enum BoxCase {\n    kEqualBalls, kEqualDistantBalls\n}\n\nclass Solution {\n    public double getProbability(int[] balls) {\n      int n = Arrays.stream(balls).sum() / 2;\n        return cases(balls, 0, 0, 0, 0, 0, n, BoxCase.kEqualDistantBalls) /\n                cases(balls, 0, 0, 0, 0, 0, n, BoxCase.kEqualBalls);\n    }\n\n    private int[] fact = { 1, 1, 2, 6, 24, 120, 720 };\n\n    double cases(int[] balls, int i, int ballsCountA, int ballsCountB, int colorsCountA,\n            int colorsCountB, int n, BoxCase boxCase) {\n        if (ballsCountA > n || ballsCountB > n)\n            return 0;\n        if (i == balls.length)\n            return boxCase == BoxCase.kEqualBalls ? 1 : (colorsCountA == colorsCountB ? 1 : 0);\n\n        double ans = 0;\n\n        for (int ballsTakenA = 0; ballsTakenA <= balls[i]; ++ballsTakenA) {\n          int ballsTakenB = balls[i] - ballsTakenA;\n          int newcolorsCountA = colorsCountA + (ballsTakenA > 0 ? 1 : 0);\n          int newcolorsCountB = colorsCountB + (ballsTakenB > 0 ? 1 : 0);\n            ans += cases(balls, i + 1, ballsCountA + ballsTakenA, ballsCountB + ballsTakenB,\n                    newcolorsCountA, newcolorsCountB, n, boxCase) /\n                    (fact[ballsTakenA] * fact[ballsTakenB]);\n        }\n\n        return ans;\n    }\n}",
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
  1488: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1489: {
    java: {
      "strongly-connected-component":
        "import java.util.*;\n\nclass UnionFind {\n    private int[] id;\n    private int[] rank;\n\n    public UnionFind(int n) {\n        id = new int[n];\n        rank = new int[n];\n        for (int i = 0; i < n; ++i)\n            id[i] = i;\n    }\n\n    public void unionByRank(int u, int v) {\n        int i = find(u);\n        int j = find(v);\n        if (i == j)\n            return;\n        if (rank[i] < rank[j]) {\n            id[i] = j;\n        } else if (rank[i] > rank[j]) {\n            id[j] = i;\n        } else {\n            id[i] = j;\n            ++rank[j];\n        }\n    }\n\n    public int find(int u) {\n        return id[u] == u ? u : (id[u] = find(id[u]));\n    }\n}\n\nclass Solution {\n    public List<List<Integer>> findCriticalAndPseudoCriticalEdges(int n, int[][] edges) {\n        List<Integer> criticalEdges = new ArrayList<>();\n        List<Integer> pseudoCriticalEdges = new ArrayList<>();\n\n        for (int i = 0; i < edges.length; ++i)\n            edges[i] = new int[] {edges[i][0], edges[i][1], edges[i][2], i};\n\n        Arrays.sort(edges, (a, b) -> a[2] - b[2]);\n\n      int mstWeight = getMSTWeight(n, edges, new int[] {}, -1);\n\n        for (int[] edge : edges) {\n          int index = edge[3];\n            // Deleting the `edge` increases the MST's weight or makes the MST invalid.\n            if (getMSTWeight(n, edges, new int[] {}, index) > mstWeight)\n                criticalEdges.add(index);\n            // If an edge can be in any MST, we can always add `edge` to the edge set.\n            else if (getMSTWeight(n, edges, edge, -1) == mstWeight)\n                pseudoCriticalEdges.add(index);\n        }\n\n        return new ArrayList<>(Arrays.asList(criticalEdges, pseudoCriticalEdges));\n    }\n\n    private int getMSTWeight(int n, int[][] edges, int[] firstEdge, int deletedEdgeIndex) {\n        int mstWeight = 0;\n        UnionFind uf = new UnionFind(n);\n\n        if (firstEdge.length == 4) {\n            uf.unionByRank(firstEdge[0], firstEdge[1]);\n            mstWeight += firstEdge[2];\n        }\n\n        for (int[] edge : edges) {\n          int u = edge[0];\n          int v = edge[1];\n          int weight = edge[2];\n          int index = edge[3];\n            if (index == deletedEdgeIndex)\n                continue;\n            if (uf.find(u) == uf.find(v))\n                continue;\n            uf.unionByRank(u, v);\n            mstWeight += weight;\n        }\n\n      int root = uf.find(0);\n        for (int i = 0; i < n; ++i)\n            if (uf.find(i) != root)\n                return Integer.MAX_VALUE;\n\n        return mstWeight;\n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        int n = 14;\n        int[][] edges = {\n            {0, 1, 13}, {0, 2, 6}, {2, 3, 13}, {3, 4, 4}, {0, 5, 11}, {4, 6, 14}, {4, 7, 8}, \n            {2, 8, 6}, {4, 9, 6}, {7, 10, 4}, {5, 11, 3}, {6, 12, 7}, {12, 13, 9}, {7, 13, 2}, \n            {5, 13, 10}, {0, 6, 4}, {2, 7, 3}, {0, 7, 8}, {1, 12, 9}, {10, 12, 11}, {1, 2, 7}, \n            {1, 3, 10}, {3, 10, 6}, {6, 10, 4}, {4, 8, 5}, {1, 13, 4}, {11, 13, 8}, {2, 12, 10}, \n            {5, 8, 1}, {3, 7, 6}, {7, 12, 12}, {1, 7, 9}, {5, 9, 1}, {2, 13, 10}, {10, 11, 4}, \n            {3, 5, 10}, {6, 11, 14}, {5, 12, 3}, {0, 8, 13}, {8, 9, 1}, {3, 6, 8}, {0, 3, 4}, \n            {2, 9, 6}, {0, 11, 4}, {2, 5, 14}, {4, 11, 2}, {7, 11, 11}, {1, 11, 6}, {2, 10, 12}, \n            {0, 13, 4}, {3, 9, 9}, {4, 12, 3}, {6, 7, 10}, {6, 8, 13}, {9, 11, 3}, {1, 6, 2}, \n            {2, 4, 12}, {0, 10, 3}, {3, 12, 1}, {3, 8, 12}, {1, 8, 6}, {8, 13, 2}, {10, 13, 12}, \n            {9, 13, 11}, {2, 11, 14}, {5, 10, 9}, {5, 6, 10}, {2, 6, 9}, {8, 11, 3}\n        };\n        List<List<Integer>> result = sol.findCriticalAndPseudoCriticalEdges(n, edges);\n        System.out.println(result); \n    }\n}\n",
    },
  },
  1493: {
    java: {
      "sliding-window":
        "class Solution {\n    public int longestSubarray(int[] nums) {\n        int left = 0;\n        int zeroCount = 0;\n        int maxLength = 0;\n\n        for (int right = 0; right < nums.length; right++) {\n            if (nums[right] == 0) {\n                zeroCount++;\n            }\n\n            while (zeroCount > 1) {\n                if (nums[left] == 0) {\n                    zeroCount--;\n                }\n                left++;\n            }\n\n            maxLength = Math.max(maxLength, right - left);\n        }\n\n        return maxLength;\n    }\n}\n",
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
  1503: {
    java: {
      brainteaser: "",
    },
  },
  1504: {
    java: {
      matrix: "",
    },
  },
  1508: {
    java: {
      "two-pointers": "",
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
  1559: {
    java: {
      matrix: "",
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
      "binary-search-tree": "",
    },
  },
  1570: {
    java: {
      "two-pointers": "",
    },
  },
  1572: {
    java: {
      matrix: "",
    },
  },
  1574: {
    java: {
      "two-pointers": "",
    },
  },
  1577: {
    java: {
      "two-pointers": "",
    },
  },
  1582: {
    java: {
      matrix: "",
    },
  },
  1584: {
    java: {
      "minimum-spanning-tree":
        'import java.util.*;\n\nclass Solution {\n    class Edge {\n        int u, v, cost;\n        Edge(int u, int v, int cost) {\n            this.u = u;\n            this.v = v;\n            this.cost = cost;\n        }\n    }\n\n    class UnionFind {\n        int[] parent, rank;\n\n        UnionFind(int n) {\n            parent = new int[n];\n            rank = new int[n];\n            for (int i = 0; i < n; i++) {\n                parent[i] = i;\n                rank[i] = 0;\n            }\n        }\n\n        int find(int x) {\n            if (parent[x] != x) {\n                parent[x] = find(parent[x]);\n            }\n            return parent[x];\n        }\n\n        boolean union(int x, int y) {\n            int rootX = find(x);\n            int rootY = find(y);\n            if (rootX != rootY) {\n                if (rank[rootX] > rank[rootY]) {\n                    parent[rootY] = rootX;\n                } else if (rank[rootX] < rank[rootY]) {\n                    parent[rootX] = rootY;\n                } else {\n                    parent[rootY] = rootX;\n                    rank[rootX]++;\n                }\n                return true;\n            }\n            return false;\n        }\n    }\n\n    public int minCostConnectPoints(int[][] points) {\n        int n = points.length;\n        List<Edge> edges = new ArrayList<>();\n\n        // Create all possible edges with their costs\n        for (int i = 0; i < n; i++) {\n            for (int j = i + 1; j < n; j++) {\n                int cost = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);\n                edges.add(new Edge(i, j, cost));\n            }\n        }\n\n        // Sort edges by cost\n        edges.sort(Comparator.comparingInt(e -> e.cost));\n\n        // Kruskal\'s algorithm to find the MST\n        UnionFind uf = new UnionFind(n);\n        int minCost = 0, edgesUsed = 0;\n\n        for (Edge edge : edges) {\n            if (uf.union(edge.u, edge.v)) {\n                minCost += edge.cost;\n                edgesUsed++;\n                if (edgesUsed == n - 1) {\n                    break;\n                }\n            }\n        }\n\n        return minCost;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[][] points = { {0, 0}, {2, 2}, {3, 10}, {5, 2}, {7, 0} };\n        System.out.println("Minimum cost to connect all points: " + solution.minCostConnectPoints(points));\n    }\n}\n',
    },
  },
  1586: {
    java: {
      iterator:
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass BSTIterator {\n    private List<Integer> nums = new ArrayList<>();\n    private int i = -1;\n\n    public BSTIterator(TreeNode root) {\n        dfs(root);\n    }\n\n    public boolean hasNext() {\n        return i < nums.size() - 1;\n    }\n\n    public int next() {\n        return nums.get(++i);\n    }\n\n    public boolean hasPrev() {\n        return i > 0;\n    }\n\n    public int prev() {\n        return nums.get(--i);\n    }\n\n    private void dfs(TreeNode root) {\n        if (root == null) {\n            return;\n        }\n        dfs(root.left);\n        nums.add(root.val);\n        dfs(root.right);\n    }\n}\n\n/**\n * Your BSTIterator object will be instantiated and called as such:\n * BSTIterator obj = new BSTIterator(root);\n * boolean param_1 = obj.hasNext();\n * int param_2 = obj.next();\n * boolean param_3 = obj.hasPrev();\n * int param_4 = obj.prev();\n */",
    },
  },
  1591: {
    java: {
      matrix: "",
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
  1610: {
    java: {
      "sliding-window":
        "import java.util.*;\n\nclass Solution {\n    public int visiblePoints(List<List<Integer>> points, int angle, List<Integer> location) {\n        int sameLocationCount = 0;\n        List<Double> angles = new ArrayList<>();\n\n        int x0 = location.get(0);\n        int y0 = location.get(1);\n\n        for (List<Integer> point : points) {\n            int x = point.get(0);\n            int y = point.get(1);\n\n            if (x == x0 && y == y0) {\n                sameLocationCount++;\n            } else {\n                double theta = Math.atan2(y - y0, x - x0) * (180 / Math.PI);\n                angles.add(theta);\n            }\n        }\n\n        Collections.sort(angles);\n\n        int m = angles.size();\n        for (int i = 0; i < m; i++) {\n            angles.add(angles.get(i) + 360);\n        }\n\n        int maxVisible = 0;\n        int left = 0;\n\n        for (int right = 0; right < angles.size(); right++) {\n            while (angles.get(right) - angles.get(left) > angle) {\n                left++;\n            }\n            maxVisible = Math.max(maxVisible, right - left + 1);\n        }\n\n        return maxVisible + sameLocationCount;\n    }\n}\n",
    },
  },
  1616: {
    java: {
      "two-pointers": "",
    },
  },
  1631: {
    java: {
      matrix: "",
    },
  },
  1632: {
    java: {
      matrix: "",
    },
  },
  1634: {
    java: {
      "two-pointers": "",
    },
  },
  1642: {
    java: {
      "heap-(priority-queue)": "",
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
  1652: {
    java: {
      "sliding-window":
        "class Solution {\n    public int[] decrypt(int[] code, int k) {\n        int n = code.length;\n        int[] result = new int[n];\n        \n        if (k == 0) {\n            return result;\n        }\n        \n        for (int i = 0; i < n; i++) {\n            if (k > 0) {\n                for (int j = 1; j <= k; j++) {\n                    result[i] += code[(i + j) % n];\n                }\n            } else {\n                for (int j = -1; j >= k; j--) {\n                    result[i] += code[(i + j + n) % n];\n                }\n            }\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  1658: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minOperations(int[] nums, int x) {\n        x = -x;\n        for (int v : nums) {\n            x += v;\n        }\n        Map<Integer, Integer> vis = new HashMap<>();\n        vis.put(0, -1);\n        int n = nums.length;\n        int ans = 1 << 30;\n        for (int i = 0, s = 0; i < n; ++i) {\n            s += nums[i];\n            vis.putIfAbsent(s, i);\n            if (vis.containsKey(s - x)) {\n                int j = vis.get(s - x);\n                ans = Math.min(ans, n - (i - j));\n            }\n        }\n        return ans == 1 << 30 ? -1 : ans;\n    }\n}",
    },
  },
  1670: {
    java: {
      queue: "",
    },
  },
  1672: {
    java: {
      matrix: "",
    },
  },
  1675: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1679: {
    java: {
      "two-pointers": "",
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
      "two-pointers": "",
    },
  },
  1698: {
    java: {
      "suffix-array":
        'import java.util.Arrays;\n\npublic class Solution {\n\n    public int countDistinct(String s) {\n        int n = s.length();\n        int[] suffixArray = buildSuffixArray(s);\n        int[] lcpArray = buildLCPArray(s, suffixArray);\n\n        int count = 0;\n        for (int i = 0; i < n; i++) {\n            int suffixLength = n - suffixArray[i];\n            count += suffixLength - (i > 0 ? lcpArray[i] : 0);\n        }\n\n        return count;\n    }\n\n    private int[] buildSuffixArray(String s) {\n        int n = s.length();\n        Suffix[] suffixes = new Suffix[n];\n\n        for (int i = 0; i < n; i++) {\n            suffixes[i] = new Suffix(i, s.substring(i));\n        }\n\n        Arrays.sort(suffixes);\n\n        int[] suffixArray = new int[n];\n        for (int i = 0; i < n; i++) {\n            suffixArray[i] = suffixes[i].index;\n        }\n\n        return suffixArray;\n    }\n\n    private int[] buildLCPArray(String s, int[] suffixArray) {\n        int n = s.length();\n        int[] rank = new int[n];\n        int[] lcpArray = new int[n];\n\n        for (int i = 0; i < n; i++) {\n            rank[suffixArray[i]] = i;\n        }\n\n        int h = 0;\n        for (int i = 0; i < n; i++) {\n            if (rank[i] > 0) {\n                int j = suffixArray[rank[i] - 1];\n                while (i + h < n && j + h < n && s.charAt(i + h) == s.charAt(j + h)) {\n                    h++;\n                }\n                lcpArray[rank[i]] = h;\n                if (h > 0) {\n                    h--;\n                }\n            }\n        }\n\n        return lcpArray;\n    }\n\n    class Suffix implements Comparable<Suffix> {\n        int index;\n        String suffix;\n\n        Suffix(int index, String suffix) {\n            this.index = index;\n            this.suffix = suffix;\n        }\n\n        @Override\n        public int compareTo(Suffix other) {\n            return this.suffix.compareTo(other.suffix);\n        }\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        String s = "aabbaba";\n        int distinctSubstrings = solution.countDistinct(s);\n        System.out.println("Number of distinct substrings: " + distinctSubstrings); // Output: 21\n    }\n}\n',
    },
  },
  1700: {
    java: {
      queue: "",
    },
  },
  1703: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minMoves(int[] nums, int k) {\n        List<Integer> ones = new ArrayList<>();\n\n        for (int i = 0; i < nums.length; ++i)\n            if (nums[i] == 1)\n                ones.add(i);\n\n      int median = ones.get(getMedIndex(0, k));\n        int moves = 0;\n        for (int i = 0; i < k; ++i)\n            moves += Math.abs(ones.get(i) - median);\n\n        int ans = moves;\n\n        for (int i = 1; i <= ones.size() - k; ++i) {\n          int oldMedianIndex = ones.get(getMedIndex(i - 1, k));\n          int newMedianIndex = ones.get(getMedIndex(i, k));\n            if (k % 2 == 1)\n                moves += newMedianIndex - oldMedianIndex;\n            moves -= newMedianIndex - ones.get(i - 1);\n            moves += ones.get(i + k - 1) - newMedianIndex;\n            ans = Math.min(ans, moves);\n        }\n\n        return ans - nThSum((k - 1) / 2) - nThSum(k / 2);\n    }\n\n    private int getMedIndex(int i, int k) {\n        return (i + (i + k - 1)) / 2;\n    }\n\n    private int nThSum(int n) {\n        return n * (n + 1) / 2;\n    }\n}",
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
  1712: {
    java: {
      "two-pointers":
        "class Solution {\n    public int waysToSplit(int[] nums) {\n        int kMod = 1_000_000_007;\n        int n = nums.length;\n        int ans = 0;\n        int[] prefix = nums.clone();\n\n        for (int i = 1; i < n; ++i)\n            prefix[i] += prefix[i - 1];\n\n        for (int i = 0; i < n - 2; ++i) {\n            int j = firstGreaterEqual(prefix, i);\n            if (j == n - 1)\n                break;\n            int mid = prefix[j] - prefix[i];\n            int right = prefix[prefix.length - 1] - prefix[j];\n            if (mid > right)\n                continue;\n            int k = firstGreater(prefix, i);\n            ans = (ans + k - j) % kMod;\n        }\n\n        return ans;\n    }\n\n    private int firstGreaterEqual(int[] prefix, int i) {\n        int left = i + 1;\n        int right = prefix.length - 1;\n        while (left < right) {\n            int mid = (left + right) / 2;\n            if (prefix[mid] - prefix[i] >= prefix[i])\n                right = mid;\n            else\n                left = mid + 1;\n        }\n        return left;\n    };\n\n    private int firstGreater(int[] prefix, int i) {\n        int left = i + 1;\n        int right = prefix.length - 1;\n        while (left < right) {\n            int mid = (left + right) / 2;\n            if (prefix[mid] - prefix[i] > prefix[prefix.length - 1] - prefix[mid])\n                right = mid;\n            else\n                left = mid + 1;\n        }\n        return left;\n    };\n}",
    },
  },
  1721: {
    java: {
      "two-pointers": "",
    },
  },
  1724: {
    java: {
      "minimum-spanning-tree":
        "import java.util.*;\n\nclass PersistentUnionFind {\n    private int[] parent;\n    private int[] rank;\n    private int[] version;\n\n    public PersistentUnionFind(int n) {\n        parent = new int[n];\n        rank = new int[n];\n        version = new int[n];\n        Arrays.fill(rank, 0);\n        for (int i = 0; i < n; i++) {\n            parent[i] = i;\n            version[i] = Integer.MAX_VALUE;\n        }\n    }\n\n    public int find(int x, int t) {\n        if (parent[x] == x || version[x] >= t) {\n            return x;\n        }\n        return find(parent[x], t);\n    }\n\n    public boolean union(int a, int b, int t) {\n        int rootX = find(a, Integer.MAX_VALUE);\n        int rootY = find(b, Integer.MAX_VALUE);\n        if (rootX == rootY) {\n            return false;\n        }\n        if (rank[rootX] > rank[rootY]) {\n            version[rootY] = t;\n            parent[rootY] = rootX;\n        } else {\n            version[rootX] = t;\n            parent[rootX] = rootY;\n            if (rank[rootX] == rank[rootY]) {\n                rank[rootY]++;\n            }\n        }\n        return true;\n    }\n}\n\nclass DistanceLimitedPathsExist {\n    private PersistentUnionFind puf;\n\n    public DistanceLimitedPathsExist(int n, int[][] edgeList) {\n        puf = new PersistentUnionFind(n);\n        Arrays.sort(edgeList, Comparator.comparingInt(a -> a[2]));\n        for (int[] edge : edgeList) {\n            int u = edge[0];\n            int v = edge[1];\n            int dis = edge[2];\n            puf.union(u, v, dis);\n        }\n    }\n\n    public boolean query(int p, int q, int limit) {\n        return puf.find(p, limit) == puf.find(q, limit);\n    }\n\n    public static void main(String[] args) {\n        int n = 4;\n        int[][] edgeList = { {0, 1, 2}, {1, 2, 3}, {2, 3, 4} };\n\n        DistanceLimitedPathsExist checker = new DistanceLimitedPathsExist(n, edgeList);\n\n        System.out.println(checker.query(0, 3, 4));  // Output: true\n        System.out.println(checker.query(0, 3, 2));  // Output: false\n    }\n}\n",
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
  1730: {
    java: {
      matrix: "",
    },
  },
  1738: {
    java: {
      quickselect:
        "import java.util.*;\n\npublic class Solution {\n    public int kthLargestValue(int[][] matrix, int k) {\n        int m = matrix.length;\n        int n = matrix[0].length;\n        \n        int[][] xorMatrix = new int[m][n];\n        List<Integer> xorValues = new ArrayList<>();\n        \n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                int xor = matrix[i][j];\n                if (i > 0) xor ^= xorMatrix[i - 1][j];\n                if (j > 0) xor ^= xorMatrix[i][j - 1];\n                if (i > 0 && j > 0) xor ^= xorMatrix[i - 1][j - 1];\n                xorMatrix[i][j] = xor;\n                xorValues.add(xor);\n            }\n        }\n        \n        int[] xorArray = xorValues.stream().mapToInt(Integer::intValue).toArray();\n        int kthLargestXOR = quickselect(xorArray, 0, xorArray.length - 1, xorArray.length - k);\n        \n        return kthLargestXOR;\n    }\n    \n    private int quickselect(int[] nums, int left, int right, int k) {\n        while (left < right) {\n            int pivotIndex = partition(nums, left, right);\n            if (pivotIndex == k) {\n                return nums[k];\n            } else if (pivotIndex < k) {\n                left = pivotIndex + 1;\n            } else {\n                right = pivotIndex - 1;\n            }\n        }\n        return nums[left];\n    }\n    \n    private int partition(int[] nums, int left, int right) {\n        int pivot = nums[right];\n        int i = left;\n        for (int j = left; j < right; j++) {\n            if (nums[j] < pivot) {\n                swap(nums, i++, j);\n            }\n        }\n        swap(nums, i, right);\n        return i;\n    }\n    \n    private void swap(int[] nums, int i, int j) {\n        int temp = nums[i];\n        nums[i] = nums[j];\n        nums[j] = temp;\n    }\n}\n",
    },
  },
  1750: {
    java: {
      "two-pointers": "",
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
  1768: {
    java: {
      "two-pointers": "",
    },
  },
  1776: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1782: {
    java: {
      "two-pointers": "",
    },
  },
  1786: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1792: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1793: {
    java: {
      "two-pointers": "",
    },
  },
  1801: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1810: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1813: {
    java: {
      "two-pointers": "",
    },
  },
  1820: {
    java: {
      matrix: "",
    },
  },
  1823: {
    java: {
      queue:
        "class Solution {\n    public int findTheWinner(int n, int k) {\n        List<Integer> players = new ArrayList<>();\n        for (int i = 1; i <= n; i++) {\n            players.add(i);\n        }\n        \n        int index = 0;\n        while (players.size() > 1) {\n            index = (index + k - 1) % players.size();\n            players.remove(index);\n        }\n        \n        return players.get(0);\n    }\n}\n",
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
  1834: {
    java: {
      "heap-(priority-queue)": "",
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
  1842: {
    java: {
      "two-pointers": "",
    },
  },
  1845: {
    java: {
      "heap-(priority-queue)": "",
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
  1855: {
    java: {
      "two-pointers": "",
    },
  },
  1861: {
    java: {
      "two-pointers": "",
    },
  },
  1868: {
    java: {
      "two-pointers": "",
    },
  },
  1871: {
    java: {
      "sliding-window":
        "class Solution {\n  public boolean canReach(String s, int minJump, int maxJump) {\n    int count = 0;\n    boolean dp[] = new boolean[s.length()];\n    dp[0] = true;\n\n    for (int i = minJump; i < s.length(); ++i) {\n      count += dp[i - minJump] ? 1 : 0;\n      if (i - maxJump > 0)\n        count -= dp[i - maxJump - 1] ? 1 : 0;\n      dp[i] = count > 0 && s.charAt(i) == '0';\n    }\n\n    return dp[dp.length - 1];\n  }\n}",
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
  1882: {
    java: {
      "heap-(priority-queue)": "",
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
  1888: {
    java: {
      "sliding-window":
        "class Solution {\n  public int minFlips(String s) {\n  int n = s.length();\n    int[][] count = new int[2][2];\n\n    for (int i = 0; i < n; ++i)\n      ++count[s.charAt(i) - '0'][i % 2];\n\n    int ans = Math.min(count[1][0] + count[0][1], count[0][0] + count[1][1]);\n\n    for (int i = 0; i < n; ++i) {\n      --count[s.charAt(i) - '0'][i % 2];\n      ++count[s.charAt(i) - '0'][(n + i) % 2];\n      ans = Math.min(ans, Math.min(count[1][0] + count[0][1], count[0][0] + count[1][1]));\n    }\n\n    return ans;\n  }\n}",
    },
  },
  1895: {
    java: {
      matrix: "",
    },
  },
  1898: {
    java: {
      "two-pointers": "",
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
  1905: {
    java: {
      matrix: "",
    },
  },
  1908: {
    java: {
      brainteaser:
        "class Solution {\n    public boolean nimGame(int[] piles) {\n        int xor = 0;\n        for (int pile : piles)\n            xor ^= pile;\n        return xor != 0;\n    }\n}",
    },
  },
  1912: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1914: {
    java: {
      matrix: "",
    },
  },
  1918: {
    java: {
      "sliding-window":
        "class Solution {\n    public int kthSmallestSubarraySum(int[] nums, int k) {\n        int min = Integer.MAX_VALUE, sum = 0;\n        for (int num : nums) {\n            min = Math.min(min, num);\n            sum += num;\n        }\n        int low = min, high = sum;\n        while (low < high) {\n            int mid = (high - low) / 2 + low;\n            int count = countSubarrays(nums, mid);\n            if (count < k)\n                low = mid + 1;\n            else\n                high = mid;\n        }\n        return low;\n    }\n\n    public int countSubarrays(int[] nums, int threshold) {\n        int count = 0;\n        int sum = 0;\n        int length = nums.length;\n        int left = 0, right = 0;\n        while (right < length) {\n            sum += nums[right];\n            while (sum > threshold) {\n                sum -= nums[left];\n                left++;\n            }\n            count += right - left + 1;\n            right++;\n        }\n        return count;\n    }\n}",
    },
  },
  1923: {
    java: {
      "suffix-array":
        "class Solution {\n    public int longestCommonSubpath(int n, int[][] paths) {\n        int left = 0;\n        int right = paths[0].length;\n\n        while (left < right) {\n          int m = left + (right - left + 1) / 2;\n            if (checkCommonSubpath(paths, m))\n                left = m;\n            else\n                right = m - 1;\n        }\n\n        return left;\n    }\n\n    private static final long kMod = 8_417_508_174_513L;\n    private static final long kBase = 165_131L;\n\n    private boolean checkCommonSubpath(int[][] paths, int m) {\n        Set<Long>[] hashSets = new Set[paths.length];\n\n        for (int i = 0; i < paths.length; ++i)\n            hashSets[i] = rabinKarp(paths[i], m);\n\n        for (final long subpathHash : hashSets[0])\n            if (Arrays.stream(hashSets).allMatch(hashSet -> hashSet.contains(subpathHash)))\n                return true;\n\n        return false;\n    }\n\n    private Set<Long> rabinKarp(int[] path, int m) {\n        Set<Long> hashes = new HashSet<>();\n        long maxPower = 1;\n        long hash = 0;\n        for (int i = 0; i < path.length; ++i) {\n            hash = (hash * kBase + path[i]) % kMod;\n            if (i >= m)\n                hash = (hash - path[i - m] * maxPower % kMod + kMod) % kMod;\n            else\n                maxPower = maxPower * kBase % kMod;\n            if (i >= m - 1)\n                hashes.add(hash);\n        }\n        return hashes;\n    }\n}",
    },
  },
  1926: {
    java: {
      matrix: "",
    },
  },
  1942: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  1958: {
    java: {
      matrix: "",
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
  1970: {
    java: {
      matrix: "",
    },
  },
  1975: {
    java: {
      matrix: "",
    },
  },
  1977: {
    java: {
      "suffix-array":
        "class Solution {\n    public int numberOfCombinations(String num) {\n        if (num.charAt(0) == '0')\n            return 0;\n\n      int kMod = 1_000_000_007;\n      int n = num.length();\n        // dp[i][k] := the number of possible lists of integers ending in num[i] with\n        // the length of the last number being 1..k\n        long[][] dp = new long[n][n + 1];\n        // lcs[i][j] := the number of the same digits in num[i..n) and num[j..n)\n        int[][] lcs = new int[n + 1][n + 1];\n\n        // Step 1: Compute LCS array\n        for (int i = n - 1; i >= 0; --i)\n            for (int j = i + 1; j < n; ++j)\n                if (num.charAt(i) == num.charAt(j))\n                    lcs[i][j] = lcs[i + 1][j + 1] + 1;\n\n        // Step 2: Dynamic programming to count number of combinations\n        for (int i = 0; i < n; ++i)\n            for (int k = 1; k <= i + 1; ++k) {\n                dp[i][k] += dp[i][k - 1];\n                dp[i][k] %= kMod;\n                // The last number is num[s..i].\n              int s = i - k + 1;\n                if (num.charAt(s) == '0')\n                    // If the number starts with '0', skip it as it's invalid\n                    continue;\n                if (s == 0) {\n                    // If the whole string is considered, increment the count by 1\n                    dp[i][k] += 1;\n                    continue;\n                }\n                if (s < k) {\n                    // If the length k is not enough, add counts from num[0..s - 1]\n                    dp[i][k] += dp[s - 1][s];\n                    continue;\n                }\n              int left = lcs[s - k][s];\n                if (left >= k || num.charAt(s - k + left) <= num.charAt(s + left))\n                    // If num[s - k..s - 1] <= num[s..i], add counts from dp[s - 1][k]\n                    dp[i][k] += dp[s - 1][k];\n                else\n                    // Otherwise, add counts from dp[s - 1][k - 1]\n                    dp[i][k] += dp[s - 1][k - 1];\n                \n                dp[i][k] %= kMod;\n            }\n\n        return (int) dp[n - 1][n] % kMod;\n    }\n}\n",
    },
  },
  1981: {
    java: {
      matrix: "",
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
  1992: {
    java: {
      matrix: "",
    },
  },
  2000: {
    java: {
      "two-pointers": "",
    },
  },
  2009: {
    java: {
      "sliding-window":
        "import java.util.Arrays;\nimport java.util.HashSet;\nimport java.util.Set;\n\nclass Solution {\n    public int minOperations(int[] nums) {\n        Set<Integer> set = new HashSet<>();\n        for (int num : nums) {\n            set.add(num);\n        }\n        int[] uniqueNums = new int[set.size()];\n        int index = 0;\n        for (int num : set) {\n            uniqueNums[index++] = num;\n        }\n        Arrays.sort(uniqueNums);\n\n        int maxLength = 0;\n        int left = 0;\n        for (int right = 0; right < uniqueNums.length; ++right) {\n            while (uniqueNums[right] - uniqueNums[left] >= nums.length) {\n                left++;\n            }\n            maxLength = Math.max(maxLength, right - left + 1);\n        }\n\n        return nums.length - maxLength;\n    }\n}\n",
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
  2022: {
    java: {
      matrix: "",
    },
  },
  2024: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maxConsecutiveAnswers(String answerKey, int k) {\n        return Math.max(maxConsecutiveChar(answerKey, k, 'T'), maxConsecutiveChar(answerKey, k, 'F'));\n    }\n\n    private int maxConsecutiveChar(String answerKey, int k, char ch) {\n        int maxLen = 0;\n        int left = 0, right = 0;\n        int flipCount = 0;\n\n        while (right < answerKey.length()) {\n            if (answerKey.charAt(right) != ch) {\n                flipCount++;\n            }\n\n            while (flipCount > k) {\n                if (answerKey.charAt(left) != ch) {\n                    flipCount--;\n                }\n                left++;\n            }\n\n            maxLen = Math.max(maxLen, right - left + 1);\n            right++;\n        }\n\n        return maxLen;\n    }\n}\n",
    },
  },
  2031: {
    java: {
      "merge-sort":
        "class FenwickTree {\n  public FenwickTree(int n) {\n    sums = new int[n + 1];\n  }\n\n  public void add(int i, int delta) {\n    while (i < sums.length) {\n      sums[i] += delta;\n      i += lowbit(i);\n    }\n  }\n\n  public int get(int i) {\n    int sum = 0;\n    while (i > 0) {\n      sum += sums[i];\n      i -= lowbit(i);\n    }\n    return sum;\n  }\n\n  private int[] sums;\n\n  private static int lowbit(int i) {\n    return i & -i;\n  }\n}\n\nclass Solution {\n  public int subarraysWithMoreZerosThanOnes(int[] nums) {\n  int kMod = 1_000_000_007;\n  int n = nums.length;\n    int ans = 0;\n    int prefix = 0;\n    FenwickTree tree = new FenwickTree(2 * n + 1);\n    tree.add(remap(0, n), 1);\n\n    for (final int num : nums) {\n      prefix += num == 0 ? -1 : 1;\n      ans += tree.get(remap(prefix - 1, n));\n      ans %= kMod;\n      tree.add(remap(prefix, n), 1);\n    }\n\n    return ans;\n  }\n\n  private int remap(int i, int n) {\n    return i + n + 1;\n  }\n}",
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
  2046: {
    java: {
      "two-pointers": "",
    },
  },
  2054: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2061: {
    java: {
      matrix: "",
    },
  },
  2071: {
    java: {
      "monotonic-queue":
        "import java.util.Arrays;\nimport java.util.ArrayDeque;\nimport java.util.Deque;\n\nclass Solution {\n    private int[] tasks;\n    private int[] workers;\n    private int strength;\n    private int pills;\n    private int taskCount;\n    private int workerCount;\n\n    public int maxTaskAssign(int[] tasks, int[] workers, int pills, int strength) {\n        Arrays.sort(tasks);\n        Arrays.sort(workers);\n        this.tasks = tasks;\n        this.workers = workers;\n        this.strength = strength;\n        this.pills = pills;\n        taskCount = tasks.length; \n        workerCount = workers.length; \n\n        int left = 0, right = Math.min(workerCount, taskCount);\n        while (left < right) {\n            int mid = (left + right + 1) / 2; \n            if (check(mid)) {\n                left = mid; \n            } else {\n                right = mid - 1;\n            }\n        }\n\n        return left; \n    }\n\n    private boolean check(int x) {\n        int taskIdx = 0;\n        Deque<Integer> taskQueue = new ArrayDeque<>();\n        int remainingPills = pills;\n\n        for (int workerIdx = workerCount - x; workerIdx < workerCount; ++workerIdx) {\n            while (taskIdx < x && tasks[taskIdx] <= workers[workerIdx] + strength) {\n                taskQueue.offer(tasks[taskIdx++]); \n            }\n            if (taskQueue.isEmpty()) {\n                return false;\n            }\n            if (taskQueue.peekFirst() <= workers[workerIdx]) {\n                taskQueue.pollFirst(); \n            } else if (remainingPills == 0) {\n                return false; \n            } else {\n                --remainingPills; \n                taskQueue.pollLast();\n            }\n        }\n      \n        return true; \n    }\n}",
    },
  },
  2073: {
    java: {
      queue: "",
    },
  },
  2088: {
    java: {
      matrix: "",
    },
  },
  2090: {
    java: {
      "sliding-window":
        "class Solution {\n    public int[] getAverages(int[] nums, int k) {\n        int n = nums.length;\n        int[] result = new int[n];\n        Arrays.fill(result, -1);\n\n        if (2 * k + 1 > n) return result;  \n        long windowSum = 0;\n        int windowSize = 2 * k + 1;\n        for (int i = 0; i < windowSize; i++) {\n            windowSum += nums[i];\n        }\n        result[k] = (int)(windowSum / windowSize);\n        for (int i = k + 1; i < n - k; i++) {\n            windowSum = windowSum - nums[i - k - 1] + nums[i + k];\n            result[i] = (int)(windowSum / windowSize);\n        }\n\n        return result;\n    }\n}\n",
    },
  },
  2093: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2095: {
    java: {
      "two-pointers": "",
    },
  },
  2097: {
    java: {
      "eulerian-circuit":
        "class Solution {\n    public int[][] validArrangement(int[][] pairs) {\n        List<int[]> ans = new ArrayList<>();\n        Map<Integer, Stack<Integer>> graph = new HashMap<>();\n        Map<Integer, Integer> outDegree = new HashMap<>();\n        Map<Integer, Integer> inDegrees = new HashMap<>();\n\n        for (int[] pair : pairs) {\n          int start = pair[0];\n          int end = pair[1];\n            graph.putIfAbsent(start, new Stack<>());\n            graph.get(start).push(end);\n            outDegree.merge(start, 1, Integer::sum);\n            inDegrees.merge(end, 1, Integer::sum);\n        }\n\n      int startNode = getStartNode(graph, outDegree, inDegrees, pairs);\n        eulerDFS(graph, startNode, ans);\n        Collections.reverse(ans);\n        return ans.stream().toArray(int[][]::new);\n    }\n\n    private int getStartNode(Map<Integer, Stack<Integer>> graph, Map<Integer, Integer> outDegree,\n            Map<Integer, Integer> inDegrees, int[][] pairs) {\n        for (final int u : graph.keySet())\n            if (outDegree.getOrDefault(u, 0) - inDegrees.getOrDefault(u, 0) == 1)\n                return u;\n        return pairs[0][0];\n    }\n\n    private void eulerDFS(Map<Integer, Stack<Integer>> graph, int u, List<int[]> ans) {\n        Stack<Integer> stack = graph.get(u);\n        while (stack != null && !stack.isEmpty()) {\n          int v = stack.pop();\n            eulerDFS(graph, v, ans);\n            ans.add(new int[] { u, v });\n        }\n    }\n}",
    },
  },
  2099: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2102: {
    java: {
      "heap-(priority-queue)": "",
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
  2123: {
    java: {
      matrix: "",
    },
  },
  2125: {
    java: {
      matrix: "",
    },
  },
  2128: {
    java: {
      matrix: "",
    },
  },
  2130: {
    java: {
      "two-pointers": "",
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
  2146: {
    java: {
      matrix: "",
    },
  },
  2149: {
    java: {
      "two-pointers": "",
    },
  },
  2156: {
    java: {
      "sliding-window":
        "class Solution {\n    public String subStrHash(String s, int power, int modulo, int k, int hashValue) {\n        long maxPower = 1;\n        long hash = 0;\n        int bestLeft = -1;\n\n        for (int i = s.length() - 1; i >= 0; --i) {\n            hash = (hash * power + val(s.charAt(i))) % modulo;\n            if (i + k < s.length())\n                hash = (hash - val(s.charAt(i + k)) * maxPower % modulo + modulo) % modulo;\n            else\n                maxPower = maxPower * power % modulo;\n            if (hash == hashValue)\n                bestLeft = i;\n        }\n\n        return s.substring(bestLeft, bestLeft + k);\n    }\n\n    private int val(char c) {\n        return c - 'a' + 1;\n    }\n}",
    },
  },
  2161: {
    java: {
      "two-pointers": "",
    },
  },
  2163: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2174: {
    java: {
      matrix: "",
    },
  },
  2179: {
    java: {
      "merge-sort":
        "class FenwickTree {\n  public FenwickTree(int n) {\n    sums = new int[n + 1];\n  }\n\n  public void add(int i, int delta) {\n    while (i < sums.length) {\n      sums[i] += delta;\n      i += lowbit(i);\n    }\n  }\n\n  public int get(int i) {\n    int sum = 0;\n    while (i > 0) {\n      sum += sums[i];\n      i -= lowbit(i);\n    }\n    return sum;\n  }\n\n  private int[] sums;\n\n  private static int lowbit(int i) {\n    return i & -i;\n  }\n}\n\nclass Solution {\n  public long goodTriplets(int[] nums1, int[] nums2) {\n  int n = nums1.length;\n    long ans = 0;\n    Map<Integer, Integer> numToIndex = new HashMap<>();\n    int[] nums = new int[n];\n    int[] leftSmaller = new int[n];\n    int[] rightLarger = new int[n];\n    FenwickTree tree1 = new FenwickTree(n);\n    FenwickTree tree2 = new FenwickTree(n);\n\n    for (int i = 0; i < n; ++i)\n      numToIndex.put(nums1[i], i);\n    for (int i = 0; i < n; ++i)\n      nums[i] = numToIndex.get(nums2[i]);\n\n    for (int i = 0; i < n; ++i) {\n      leftSmaller[i] = tree1.get(nums[i]);\n      tree1.add(nums[i] + 1, 1);\n    }\n\n    for (int i = n - 1; i >= 0; --i) {\n      rightLarger[i] = tree2.get(n) - tree2.get(nums[i]);\n      tree2.add(nums[i] + 1, 1);\n    }\n\n    for (int i = 0; i < n; ++i)\n      ans += (long) leftSmaller[i] * rightLarger[i];\n\n    return ans;\n  }\n}",
    },
  },
  2182: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2193: {
    java: {
      "two-pointers": "",
    },
  },
  2200: {
    java: {
      "two-pointers": "",
    },
  },
  2208: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2223: {
    java: {
      "suffix-array":
        "class Solution {\n    public long sumScores(String s) {\n      int n = s.length();\n        // https://cp-algorithms.com/string/z-function.html#implementation\n        int[] z = new int[n];\n        // [left, right] := the indices of the rightmost segment match\n        int left = 0;\n        int right = 0;\n\n        for (int i = 1; i < n; ++i) {\n            if (i < right)\n                z[i] = Math.min(right - i, z[i - left]);\n            while (i + z[i] < n && s.charAt(z[i]) == s.charAt(i + z[i]))\n                ++z[i];\n            if (i + z[i] > right) {\n                left = i;\n                right = i + z[i];\n            }\n        }\n\n        return Arrays.stream(z).asLongStream().sum() + n;\n    }\n}",
    },
  },
  2231: {
    java: {
      "heap-(priority-queue)":
        "class Solution {\n    public int largestInteger(int num) {\n        String s = String.valueOf(num);\n        int ans = 0;\n        // maxHeap[0] := the odd digits\n        // maxHeap[1] := the even digits\n        Queue<Integer>[] maxHeap = new Queue[2];\n\n        for (int i = 0; i < 2; ++i)\n            maxHeap[i] = new PriorityQueue<>(Comparator.reverseOrder());\n\n        for (char c : s.toCharArray()) {\n            int digit = c - '0';\n            maxHeap[digit & 1].offer(digit);\n        }\n\n        for (char c : s.toCharArray()) {\n            int i = c - '0' & 1;\n            ans = (ans * 10 + maxHeap[i].poll());\n        }\n\n        return ans;\n    }\n}",
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
  2245: {
    java: {
      matrix: "",
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
  2260: {
    java: {
      "sliding-window":
        "class Solution {\n  public int minimumCardPickup(int[] cards) {\n    int ans = Integer.MAX_VALUE;\n    Map<Integer, Integer> seen = new HashMap<>();\n\n    for (int i = 0; i < cards.length; ++i) {\n      if (seen.containsKey(cards[i]))\n        ans = Math.min(ans, i - seen.get(cards[i]) + 1);\n      seen.put(cards[i], i);\n    }\n\n    return ans == Integer.MAX_VALUE ? -1 : ans;\n  }\n}",
    },
  },
  2267: {
    java: {
      matrix: "",
    },
  },
  2269: {
    java: {
      "sliding-window":
        "class Solution {\n  public int divisorSubstrings(int num, int k) {\n  String s = String.valueOf(num);\n    int ans = 0;\n\n    for (int i = 0; i + k <= s.length(); ++i) {\n    int x = Integer.parseInt(s.substring(i, i + k));\n      if (x != 0 && num % x == 0)\n        ++ans;\n    }\n\n    return ans;\n  }\n}",
    },
  },
  2282: {
    java: {
      matrix: "",
    },
  },
  2285: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2290: {
    java: {
      matrix: "",
    },
  },
  2296: {
    java: {
      "doubly-linked-list":
        "class TextEditor {\n    private class Node {\n        char c;\n        Node prev, next;\n\n        Node(char c) {\n            this.c = c;\n        }\n    }\n\n    private Node head, tail, cursor;\n\n    public TextEditor() {\n        head = new Node('0');\n        tail = new Node('0');\n        head.next = tail;\n        tail.prev = head;\n        cursor = tail;\n    }\n\n    public void addText(String text) {\n        for (char c : text.toCharArray()) {\n            Node newNode = new Node(c);\n            Node prev = cursor.prev;\n            prev.next = newNode;\n            newNode.prev = prev;\n            newNode.next = cursor;\n            cursor.prev = newNode;\n        }\n    }\n\n    public int deleteText(int k) {\n        int deleted = 0;\n        while (k > 0 && cursor.prev != head) {\n            Node prev = cursor.prev;\n            prev.prev.next = cursor;\n            cursor.prev = prev.prev;\n            k--;\n            deleted++;\n        }\n        return deleted;\n    }\n\n    public String cursorLeft(int k) {\n        while (k > 0 && cursor.prev != head) {\n            cursor = cursor.prev;\n            k--;\n        }\n        return getText();\n    }\n\n    public String cursorRight(int k) {\n        while (k > 0 && cursor != tail) {\n            cursor = cursor.next;\n            k--;\n        }\n        return getText();\n    }\n\n    private String getText() {\n        StringBuilder sb = new StringBuilder();\n        Node temp = cursor.prev;\n        for (int i = 0; i < 10 && temp != head; i++) {\n            sb.append(temp.c);\n            temp = temp.prev;\n        }\n        return sb.reverse().toString();\n    }\n}\n",
    },
  },
  2300: {
    java: {
      "two-pointers": "",
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
  2319: {
    java: {
      matrix: "",
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
  2330: {
    java: {
      "two-pointers": "",
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
  2349: {
    java: {
      "heap-(priority-queue)": "",
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
  2357: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2367: {
    java: {
      "two-pointers": "",
    },
  },
  2371: {
    java: {
      matrix: "",
    },
  },
  2373: {
    java: {
      matrix: "",
    },
  },
  2379: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minimumRecolors(String blocks, int k) {\n        int countB = 0;\n        int maxCountB = 0;\n\n        for (int i = 0; i < blocks.length(); ++i) {\n            if (blocks.charAt(i) == 'B')\n                ++countB;\n            if (i >= k && blocks.charAt(i - k) == 'B')\n                --countB;\n            maxCountB = Math.max(maxCountB, countB);\n        }\n\n        return k - maxCountB;\n    }\n}",
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
  2392: {
    java: {
      matrix: "",
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
  2419: {
    java: {
      brainteaser:
        "class Solution {\n    public int longestSubarray(int[] nums) {\n        int max = 0;\n        for (int num : nums) {\n            max = Math.max(max, num);\n        }\n\n        int maxLength = 0;\n        int currentLength = 0;\n        for (int num : nums) {\n            if (num == max) {\n                currentLength++;\n                maxLength = Math.max(maxLength, currentLength);\n            } else {\n                currentLength = 0;\n            }\n        }\n        return maxLength;\n    }\n}\n",
    },
  },
  2422: {
    java: {
      "two-pointers": "",
    },
  },
  2424: {
    java: {
      "heap-(priority-queue)": "",
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
  2428: {
    java: {
      matrix: "",
    },
  },
  2435: {
    java: {
      matrix: "",
    },
  },
  2441: {
    java: {
      "two-pointers": "",
    },
  },
  2444: {
    java: {
      "monotonic-queue":
        "class Solution {\n    public long countSubarrays(int[] nums, int minK, int maxK) {\n        long ans = 0;\n        int j1 = -1, j2 = -1, k = -1;\n        for (int i = 0; i < nums.length; ++i) {\n            if (nums[i] < minK || nums[i] > maxK) {\n                k = i;\n            }\n            if (nums[i] == minK) {\n                j1 = i;\n            }\n            if (nums[i] == maxK) {\n                j2 = i;\n            }\n            ans += Math.max(0, Math.min(j1, j2) - k);\n        }\n        return ans;\n    }\n}",
    },
  },
  2454: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2456: {
    java: {
      "heap-(priority-queue)": "",
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
  2465: {
    java: {
      "two-pointers": "",
    },
  },
  2473: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2476: {
    java: {
      "binary-search-tree":
        "/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\nclass Solution {\n    private List<Integer> nums = new ArrayList<>();\n\n    public List<List<Integer>> closestNodes(TreeNode root, List<Integer> queries) {\n        inorder(root);\n        List<List<Integer>> ans = new ArrayList<>();\n        for (int x : queries) {\n            int i = Collections.binarySearch(nums, x + 1);\n            int j = Collections.binarySearch(nums, x);\n            i = i < 0 ? -i - 2 : i - 1;\n            j = j < 0 ? -j - 1 : j;\n            int mi = i >= 0 && i < nums.size() ? nums.get(i) : -1;\n            int mx = j >= 0 && j < nums.size() ? nums.get(j) : -1;\n            ans.add(List.of(mi, mx));\n        }\n        return ans;\n    }\n\n    private void inorder(TreeNode root) {\n        if (root == null) {\n            return;\n        }\n        inorder(root.left);\n        nums.add(root.val);\n        inorder(root.right);\n    }\n}\n",
    },
  },
  2482: {
    java: {
      matrix: "",
    },
  },
  2486: {
    java: {
      "two-pointers": "",
    },
  },
  2491: {
    java: {
      "two-pointers": "",
    },
  },
  2497: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2500: {
    java: {
      matrix: "",
    },
  },
  2503: {
    java: {
      "two-pointers": "",
    },
  },
  2505: {
    java: {
      brainteaser: "",
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
  2516: {
    java: {
      "sliding-window":
        "class Solution {\n    public int takeCharacters(String s, int k) {\n      int n = s.length();\n        int ans = n;\n        int[] count = new int[3];\n\n        for (final char c : s.toCharArray())\n            ++count[c - 'a'];\n\n        if (count[0] < k || count[1] < k || count[2] < k)\n            return -1;\n\n        for (int left = 0, right = 0; right < n; ++right) {\n            --count[s.charAt(right) - 'a'];\n            while (count[s.charAt(right) - 'a'] < k)\n                ++count[s.charAt(left++) - 'a'];\n            ans = Math.min(ans, n - (right - left + 1));\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2519: {
    java: {
      "merge-sort":
        "class FenwickTree {\n  public FenwickTree(int n) {\n    sums = new int[n + 1];\n  }\n\n  public void add(int i, int delta) {\n    while (i < sums.length) {\n      sums[i] += delta;\n      i += lowbit(i);\n    }\n  }\n\n  public int get(int i) {\n    int sum = 0;\n    while (i > 0) {\n      sum += sums[i];\n      i -= lowbit(i);\n    }\n    return sum;\n  }\n\n  private int[] sums;\n\n  private static int lowbit(int i) {\n    return i & -i;\n  }\n}\n\nclass Solution {\n  public int kBigIndices(int[] nums, int k) {\n  int n = nums.length;\n    int ans = 0;\n    FenwickTree leftTree = new FenwickTree(n);\n    FenwickTree rightTree = new FenwickTree(n);\n    int[] left = new int[n];\n    int[] right = new int[n];\n\n    for (int i = 0; i < n; ++i) {\n      left[i] = leftTree.get(nums[i] - 1);\n      leftTree.add(nums[i], 1);\n    }\n\n    for (int i = n - 1; i >= 0; --i) {\n      right[i] = rightTree.get(nums[i] - 1);\n      rightTree.add(nums[i], 1);\n    }\n\n    for (int i = 0; i < n; ++i)\n      if (left[i] >= k && right[i] >= k)\n        ++ans;\n\n    return ans;\n  }\n}",
    },
  },
  2524: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maxFrequencyScore(int[] nums, int k) {\n      int mod = (int) 1e9 + 7;\n        Map<Integer, Integer> count = new HashMap<>();\n        for (int i = 0; i < k; ++i) {\n            count.put(nums[i], count.getOrDefault(nums[i], 0) + 1);\n        }\n        long curr = 0;\n        for (var e : count.entrySet()) {\n            curr = (curr + qmi(e.getKey(), e.getValue(), mod)) % mod;\n        }\n        long ans = curr;\n        for (int i = k; i < nums.length; ++i) {\n            int a = nums[i - k];\n            int b = nums[i];\n            if (a != b) {\n                if (count.getOrDefault(b, 0) > 0) {\n                    curr += (b - 1) * qmi(b, count.get(b), mod) % mod;\n                } else {\n                    curr += b;\n                }\n                if (count.getOrDefault(a, 0) > 1) {\n                    curr -= (a - 1) * qmi(a, count.get(a) - 1, mod) % mod;\n                } else {\n                    curr -= a;\n                }\n                curr = (curr + mod) % mod;\n                count.put(b, count.getOrDefault(b, 0) + 1);\n                count.put(a, count.getOrDefault(a, 0) - 1);\n                ans = Math.max(ans, curr);\n            }\n        }\n        return (int) ans;\n    }\n\n    long qmi(long a, long k, long p) {\n        long res = 1;\n        while (k != 0) {\n            if ((k & 1) == 1) {\n                res = res * a % p;\n            }\n            k >>= 1;\n            a = a * a % p;\n        }\n        return res;\n    }\n}",
    },
  },
  2526: {
    java: {
      queue: "",
    },
  },
  2528: {
    java: {
      "sliding-window":
        "class Solution {\n  public long maxPower(int[] stations, int right, int k) {\n    long left = Arrays.stream(stations).min().getAsInt();\n    long right = Arrays.stream(stations).asLongStream().sum() + k + 1;\n\n    while (left < right) {\n    long mid = (left + right) / 2;\n      if (check(stations.clone(), right, k, mid))\n        left = mid + 1;\n      else\n        right = mid;\n    }\n\n    return left - 1;\n  }\n\n  boolean check(int[] stations, int right, int additionalStations, long minPower) {\n  int n = stations.length;\n    long power = 0;\n\n    for (int i = 0; i < right; ++i)\n      power += stations[i];\n\n    for (int i = 0; i < n; ++i) {\n      if (i + right < n)\n        power += stations[i + right]; \n      if (power < minPower) {\n      long requiredPower = minPower - power;\n        if (requiredPower > additionalStations)\n          return false;\n        stations[Math.min(n - 1, i + right)] += requiredPower;\n        additionalStations -= requiredPower;\n        power += requiredPower;\n      }\n      if (i - right >= 0)\n        power -= stations[i - right];\n    }\n\n    return true;\n  }\n}",
    },
  },
  2530: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2532: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2534: {
    java: {
      queue: "",
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
  2540: {
    java: {
      "two-pointers": "",
    },
  },
  2542: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2545: {
    java: {
      matrix: "",
    },
  },
  2551: {
    java: {
      "heap-(priority-queue)": "",
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
  2558: {
    java: {
      "heap-(priority-queue)": "",
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
  2565: {
    java: {
      "two-pointers": "",
    },
  },
  2568: {
    java: {
      brainteaser:
        "class Solution {\n    public int minImpossibleOR(int[] nums) {\n        int res = 1;\n        Set<Integer> seen = new HashSet<>();\n        for (int num : nums) {\n            seen.add(num);\n        }\n\n        while (seen.contains(res)) {\n            res <<= 1; // Move to the next power of 2\n        }\n        \n        return res;\n    }\n}\n",
    },
  },
  2570: {
    java: {
      "two-pointers": "",
    },
  },
  2573: {
    java: {
      matrix: "",
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
  2596: {
    java: {
      matrix: "",
    },
  },
  2599: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2604: {
    java: {
      "two-pointers": "",
    },
  },
  2611: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2614: {
    java: {
      matrix: "",
    },
  },
  2617: {
    java: {
      matrix: "",
    },
  },
  2639: {
    java: {
      matrix: "",
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
  2653: {
    java: {
      "sliding-window":
        "class Solution {\n    public int[] getSubarrayBeauty(int[] nums, int k, int x) {\n        int[] ans = new int[nums.length - k + 1];\n        int[] count = new int[50];\n\n        for (int i = 0; i < nums.length; ++i) {\n            if (nums[i] < 0)\n                ++count[nums[i] + 50];\n            if (i - k >= 0 && nums[i - k] < 0)\n                --count[nums[i - k] + 50];\n            if (i + 1 >= k)\n                ans[i - k + 1] = getXthSmallestNum(count, x);\n        }\n\n        return ans;\n    }\n\n    private int getXthSmallestNum(int[] count, int x) {\n        int prefix = 0;\n        for (int i = 0; i < 50; ++i) {\n            prefix += count[i];\n            if (prefix >= x)\n                return i - 50;\n        }\n        return 0;\n    }\n}",
    },
  },
  2658: {
    java: {
      matrix: "",
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
  2664: {
    java: {
      matrix: "",
    },
  },
  2674: {
    java: {
      "two-pointers": "",
    },
  },
  2679: {
    java: {
      matrix: "",
    },
  },
  2684: {
    java: {
      matrix: "",
    },
  },
  2697: {
    java: {
      "two-pointers": "",
    },
  },
  2699: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2711: {
    java: {
      matrix: "",
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
  2737: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  2743: {
    java: {
      "sliding-window":
        "class Solution {\n    public int numberOfSpecialSubstrings(String s) {\n        int n = s.length();\n        int ans = 0;\n        int[] count = new int[26];\n        for (int i = 0, j = 0; i < n; ++i) {\n            int k = s.charAt(i) - 'a';\n            ++count[k];\n            while (count[k] > 1) {\n                --count[s.charAt(j++) - 'a'];\n            }\n            ans += i - j + 1;\n        }\n        return ans;\n    }\n}",
    },
  },
  2745: {
    java: {
      brainteaser:
        "class Solution {\n    public int longestString(int x, int y, int z) {\n        int min = Math.min(x, y);\n        if (x == y)\n            return (min * 2 + z) * 2;\n        return (min * 2 + 1 + z) * 2;\n    }\n}",
    },
  },
  2747: {
    java: {
      "sliding-window":
        "class Solution {\n    private class Query {\n        public int query;\n        public int index;\n        public Query(int q, int index) {\n            this.query = q;\n            this.index = index;\n        }\n    }\n\n    public int[] countServers(int n, int[][] logs, int x, int[] queries) {\n        Arrays.sort(logs, (int[] a, int[] b) -> Integer.compare(a[1], b[1]));\n        List<Query> queryList = new ArrayList<>();\n        for (int i = 0; i < queries.length; ++i) {\n            queryList.add(new Query(queries[i], i));\n        }\n        Collections.sort(queryList, (a, b) -> Integer.compare(a.query, b.query));\n\n        int[] ans = new int[queries.length];\n        Map<Integer, Integer> countMap = new HashMap<>();\n        int left = 0;\n        int right = 0;\n        for (int i = 0; i < queryList.size(); ++i) {\n            Query q = queryList.get(i);\n            while (right < logs.length && logs[right][1] <= q.query) {\n                countMap.put(logs[right][0], countMap.getOrDefault(logs[right][0], 0) + 1);\n                ++right;\n            }\n\n            while (left < logs.length && logs[left][1] < q.query - x) {\n                int newCount = countMap.get(logs[left][0]) - 1;\n                if (newCount == 0) {\n                    countMap.remove(logs[left][0]);\n                } else {\n                    countMap.put(logs[left][0], newCount);\n                }\n                ++left;\n            }\n            ans[q.index] = n - countMap.size();\n        }\n        return ans;\n    }\n}",
    },
  },
  2749: {
    java: {
      brainteaser: "",
    },
  },
  2760: {
    java: {
      "sliding-window":
        "class Solution {\n    public int longestAlternatingSubarray(int[] nums, int threshold) {\n        int ans = 0;\n        int dp = 0;\n\n        for (int i = 0; i < nums.length; ++i) {\n            if (nums[i] > threshold)\n                dp = 0;\n            else if (i > 0 && dp > 0 && isOddEven(nums[i - 1], nums[i]))\n                ++dp;\n            else\n                dp = nums[i] % 2 == 0 ? 1 : 0;\n            ans = Math.max(ans, dp);\n        }\n\n        return ans;\n    }\n\n    private boolean isOddEven(int a, int b) {\n        return a % 2 != b % 2;\n    }\n}",
    },
  },
  2762: {
    java: {
      "monotonic-queue":
        "import java.util.Deque;\nimport java.util.LinkedList;\n\nclass Solution {\n    public long continuousSubarrays(int[] nums) {\n        long count = 0;\n        int left = 0;\n        Deque<Integer> maxDeque = new LinkedList<>();\n        Deque<Integer> minDeque = new LinkedList<>();\n\n        for (int right = 0; right < nums.length; right++) {\n            while (!maxDeque.isEmpty() && nums[maxDeque.peekLast()] <= nums[right]) {\n                maxDeque.pollLast();\n            }\n            maxDeque.offerLast(right);\n\n            while (!minDeque.isEmpty() && nums[minDeque.peekLast()] >= nums[right]) {\n                minDeque.pollLast();\n            }\n            minDeque.offerLast(right);\n\n            while (nums[maxDeque.peekFirst()] - nums[minDeque.peekFirst()] > 2) {\n                left++;\n                if (maxDeque.peekFirst() < left) {\n                    maxDeque.pollFirst();\n                }\n                if (minDeque.peekFirst() < left) {\n                    minDeque.pollFirst();\n                }\n            }\n\n            count += right - left + 1;\n        }\n\n        return count;\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n        int[] nums1 = {5, 4, 2, 4};\n        System.out.println(solution.continuousSubarrays(nums1)); \n\n        int[] nums2 = {1, 2, 3};\n        System.out.println(solution.continuousSubarrays(nums2));\n    }\n}\n",
    },
  },
  2779: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maximumBeauty(int[] nums, int k) {\n        int ans = 0;\n\n        Arrays.sort(nums);\n\n        for (int left = 0, right = 0; right < nums.length; ++right) {\n            while (nums[right] - nums[left] > 2 * k)\n                ++left;\n            ans = Math.max(ans, right - left + 1);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2781: {
    java: {
      "sliding-window":
        "class Solution {\n    public int longestValidSubstring(String word, List<String> forbidden) {\n        int ans = 0;\n        Set<String> forbiddenSet = new HashSet<>(forbidden);\n\n        int right = word.length() - 1;\n        for (int left = word.length() - 1; left >= 0; --left) {\n            for (int end = left; end < Math.min(left + 10, right + 1); ++end)\n                if (forbiddenSet.contains(word.substring(left, end + 1))) {\n                    right = end - 1;\n                    break;\n                }\n            ans = Math.max(ans, right - left + 1);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2799: {
    java: {
      "sliding-window":
        "import java.util.HashSet;\nimport java.util.HashMap;\nimport java.util.Set;\n\nclass Solution {\n    public int countCompleteSubarrays(int[] nums) {\n        Set<Integer> uniqueElements = new HashSet<>();\n        for (int num : nums) {\n            uniqueElements.add(num);\n        }\n        int uniqueCount = uniqueElements.size();\n        int result = 0;\n        HashMap<Integer, Integer> windowCounts = new HashMap<>();\n        int left = 0;\n        \n        for (int right = 0; right < nums.length; right++) {\n            windowCounts.put(nums[right], windowCounts.getOrDefault(nums[right], 0) + 1);\n            \n            while (windowCounts.size() == uniqueCount) {\n                result += nums.length - right;\n                int leftNum = nums[left];\n                windowCounts.put(leftNum, windowCounts.get(leftNum) - 1);\n                if (windowCounts.get(leftNum) == 0) {\n                    windowCounts.remove(leftNum);\n                }\n                left++;\n            }\n        }\n        \n        return result;\n    }\n}\n",
    },
  },
  2812: {
    java: {
      matrix: "",
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
  2831: {
    java: {
      "sliding-window":
        "class Solution {\n  public int longestEqualSubarray(List<Integer> nums, int k) {\n    int ans = 0;\n    Map<Integer, Integer> count = new HashMap<>();\n\n    for (int left = 0, right = 0; right < nums.size(); ++right) {\n      ans = Math.max(ans, count.merge(nums.get(right), 1, Integer::sum));\n      while (right - left + 1 - k > ans)\n        count.merge(nums.get(left++), -1, Integer::sum);\n    }\n\n    return ans;\n  }\n}",
    },
  },
  2838: {
    java: {
      "two-pointers": "",
    },
  },
  2841: {
    java: {
      "sliding-window":
        "public class Solution {\n    public long maxSum(List<Integer> nums, int m, int k) {\n        long ans = 0;\n        long sum = 0;\n        Map<Integer, Integer> count = new HashMap<>();\n\n        for (int i = 0; i < nums.size(); ++i) {\n            sum += nums.get(i);\n            count.merge(nums.get(i), 1, Integer::sum);\n            if (i >= k) {\n              int numToRemove = nums.get(i - k);\n                sum -= numToRemove;\n                count.merge(numToRemove, -1, Integer::sum);\n                if (count.get(numToRemove) == 0)\n                    count.remove(numToRemove);\n            }\n            if (count.size() >= m)\n                ans = Math.max(ans, sum);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2846: {
    java: {
      "strongly-connected-component":
        "class Solution {\n  public int[] minOperationsQueries(int n, int[][] edges, int[][] queries) {\n  int kMax = 26;\n  int m = (int) (Math.log(n) / Math.log(2)) + 1;\n    int[] ans = new int[queries.length];\n    List<Pair<Integer, Integer>>[] graph = new List[n];\n    int[][] jump = new int[n][m];\n    int[][] count = new int[n][];\n    int[] depth = new int[n];\n\n    for (int i = 0; i < n; ++i)\n      graph[i] = new ArrayList<>();\n\n    for (int[] edge : edges) {\n    int u = edge[0];\n    int v = edge[1];\n    int w = edge[2];\n      graph[u].add(new Pair<>(v, w));\n      graph[v].add(new Pair<>(u, w));\n    }\n\n    count[0] = new int[kMax + 1];\n    dfs(graph, 0, -1, 0, jump, count, depth);\n\n    for (int j = 1; j < m; ++j)\n      for (int i = 0; i < n; ++i)\n        jump[i][j] = jump[jump[i][j - 1]][j - 1];\n\n    for (int i = 0; i < queries.length; ++i) {\n    int u = queries[i][0];\n    int v = queries[i][1];\n    int lca = getLCA(u, v, jump, depth);\n    int numEdges = depth[u] + depth[v] - 2 * depth[lca];\n      int maxFreq = 0;\n      for (int j = 1; j <= kMax; ++j)\n        maxFreq = Math.max(maxFreq, count[u][j] + count[v][j] - 2 * count[lca][j]);\n      ans[i] = numEdges - maxFreq;\n    }\n\n    return ans;\n  }\n\n  private void dfs(List<Pair<Integer, Integer>>[] graph, int u, int prev, int d, int[][] jump,\n                   int[][] count, int[] depth) {\n    if (prev != -1)\n      jump[u][0] = prev;\n    depth[u] = d;\n    for (Pair<Integer, Integer> pair : graph[u]) {\n    int v = pair.getKey();\n    int w = pair.getValue();\n      if (v == prev)\n        continue;\n      count[v] = count[u].clone();\n      ++count[v][w];\n      dfs(graph, v, u, d + 1, jump, count, depth);\n    }\n  }\n\n  private int getLCA(int u, int v, int[][] jump, int[] depth) {\n    if (depth[u] > depth[v])\n      return getLCA(v, u, jump, depth);\n    for (int j = 0; j < jump[0].length; ++j)\n      if ((depth[v] - depth[u] >> j & 1) == 1)\n        v = jump[v][j];\n    if (u == v)\n      return u;\n    for (int j = jump[0].length - 1; j >= 0; --j)\n      if (jump[u][j] != jump[v][j]) {\n        u = jump[u][j];\n        v = jump[v][j];\n      }\n    return jump[v][0];\n  }\n}\n",
    },
  },
  2850: {
    java: {
      matrix: "",
    },
  },
  2852: {
    java: {
      matrix: "",
    },
  },
  2856: {
    java: {
      "two-pointers":
        "class Solution {\n    public int minLengthAfterRemovals(List<Integer> nums) {\n        Map<Integer, Integer> count = new HashMap<>();\n        for (int x : nums) {\n            count.merge(x, 1, Integer::sum);\n        }\n        PriorityQueue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());\n        for (int x : count.values()) {\n            pq.offer(x);\n        }\n        int ans = nums.size();\n        while (pq.size() > 1) {\n            int x = pq.poll();\n            int y = pq.poll();\n            x--;\n            y--;\n            if (x > 0) {\n                pq.offer(x);\n            }\n            if (y > 0) {\n                pq.offer(y);\n            }\n            ans -= 2;\n        }\n        return ans;\n    }\n}",
    },
  },
  2868: {
    java: {
      "two-pointers": "",
    },
  },
  2875: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minSizeSubarray(int[] nums, int target) {\n      long sum = Arrays.stream(nums).asLongStream().sum();\n      int n = nums.length;\n      int remainingTarget = (int) (target % sum);\n      int repeatLength = (int) (target / sum) * n;\n        if (remainingTarget == 0)\n            return repeatLength;\n\n        int suffixPlusPrefixLength = n;\n        long prefix = 0;\n        HashMap<Long, Integer> prefixToIndex = new HashMap<>();\n        prefixToIndex.put(0L, -1);\n\n        for (int i = 0; i < 2 * n; ++i) {\n            prefix += nums[i % n];\n            if (prefixToIndex.containsKey(prefix - remainingTarget))\n                suffixPlusPrefixLength = Math.min(suffixPlusPrefixLength,\n                        i - prefixToIndex.get(prefix - remainingTarget));\n            prefixToIndex.put(prefix, i);\n        }\n\n        return suffixPlusPrefixLength == n ? -1 : repeatLength + suffixPlusPrefixLength;\n    }\n}",
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
  2911: {
    java: {
      "two-pointers": "",
    },
  },
  2923: {
    java: {
      matrix: "",
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
  2935: {
    java: {
      "sliding-window":
        "class TrieNode {\n    public TrieNode[] children = new TrieNode[2];\n    public int min = Integer.MAX_VALUE;\n    public int max = Integer.MIN_VALUE;\n}\n\nclass BitTrie {\n    public BitTrie(int maxBit) {\n        this.maxBit = maxBit;\n    }\n\n    public void insert(int num) {\n        TrieNode node = root;\n        for (int i = maxBit; i >= 0; --i) {\n            int bit = (int) (num >> i & 1);\n            if (node.children[bit] == null)\n                node.children[bit] = new TrieNode();\n            node = node.children[bit];\n            node.min = Math.min(node.min, num);\n            node.max = Math.max(node.max, num);\n        }\n    }\n\n    public int getMaxXor(int x) {\n        int maxXor = 0;\n        TrieNode node = root;\n        for (int i = maxBit; i >= 0; --i) {\n            int bit = (int) (x >> i & 1);\n            int toggleBit = bit ^ 1;\n            if (node.children[toggleBit] != null && node.children[toggleBit].max > x &&\n                    node.children[toggleBit].min <= 2 * x) {\n                maxXor = maxXor | 1 << i;\n                node = node.children[toggleBit];\n            } else if (node.children[bit] != null) {\n                node = node.children[bit];\n            } else {\n                return 0;\n            }\n        }\n        return maxXor;\n    }\n\n    private int maxBit;\n    private TrieNode root = new TrieNode();\n}\n\nclass Solution {\n    public int maximumStrongPairXor(int[] nums) {\n        int maxNum = Arrays.stream(nums).max().getAsInt();\n        int maxBit = (int) (Math.log(maxNum) / Math.log(2));\n        int ans = 0;\n        BitTrie bitTrie = new BitTrie(maxBit);\n\n        for (int num : nums)\n            bitTrie.insert(num);\n\n        for (int num : nums)\n            ans = Math.max(ans, bitTrie.getMaxXor(num));\n\n        return ans;\n    }\n}",
    },
  },
  2938: {
    java: {
      "two-pointers": "",
    },
  },
  2940: {
    java: {
      "heap-(priority-queue)": "",
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
  2953: {
    java: {
      "sliding-window":
        "class Solution {\n    public int countCompleteSubstrings(String word, int k) {\n      int uniqueLetters = word.chars().boxed().collect(Collectors.toSet()).size();\n        int ans = 0;\n\n        for (int windowSize = k; windowSize <= k * uniqueLetters && windowSize <= word.length(); windowSize += k) {\n            ans += countCompleteStrings(word, k, windowSize);\n        }\n\n        return ans;\n    }\n\n    private int countCompleteStrings(final String word, int k, int windowSize) {\n        int res = 0;\n        int countLetters = 0;\n        int[] count = new int[26];\n\n        for (int i = 0; i < word.length(); ++i) {\n            ++count[word.charAt(i) - 'a'];\n            ++countLetters;\n            if (i > 0 && Math.abs(word.charAt(i) - word.charAt(i - 1)) > 2) {\n                count = new int[26];\n                ++count[word.charAt(i) - 'a'];\n                countLetters = 1;\n            }\n            if (countLetters == windowSize + 1) {\n                --count[word.charAt(i - windowSize) - 'a'];\n                --countLetters;\n            }\n            if (countLetters == windowSize)\n                res += Arrays.stream(count).allMatch(freq -> freq == 0 || freq == k) ? 1 : 0;\n        }\n\n        return res;\n    }\n}",
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
  2962: {
    java: {
      "sliding-window":
        "class Solution {\n    public long countSubarrays(int[] nums, int k) {\n      int maxNum = Arrays.stream(nums).max().getAsInt();\n        long ans = 0;\n        int count = 0;\n\n        for (int left = 0, right = 0; right < nums.length; ++right) {\n            if (nums[right] == maxNum)\n                ++count;\n            while (count == k)\n                if (nums[left++] == maxNum)\n                    --count;\n            ans += left;\n        }\n\n        return ans;\n    }\n}",
    },
  },
  2965: {
    java: {
      matrix: "",
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
  3006: {
    java: {
      "two-pointers": "",
    },
  },
  3008: {
    java: {
      "two-pointers": "",
    },
  },
  3013: {
    java: {
      "sliding-window":
        "class Multiset {\n    public void add(int num) {\n        map.merge(num, 1, Integer::sum);\n        ++sz;\n    }\n\n    public void remove(int num) {\n        map.merge(num, -1, Integer::sum);\n        if (map.get(num) == 0)\n            map.remove(num);\n        --sz;\n    }\n\n    public int min() {\n        return map.firstEntry().getKey();\n    }\n\n    public int max() {\n        return map.lastEntry().getKey();\n    }\n\n    public int size() {\n        return sz;\n    }\n\n    public boolean contains(int num) {\n        return map.containsKey(num);\n    }\n\n    private TreeMap<Integer, Integer> map = new TreeMap<>();\n    private int sz = 0;\n}\n\nclass Solution {\n    public long minimumCost(int[] nums, int k, int dist) {\n        long windowSum = 0;\n        Multiset selected = new Multiset();\n        Multiset candidates = new Multiset();\n\n        for (int i = 1; i <= dist + 1; ++i) {\n            windowSum += nums[i];\n            selected.add(nums[i]);\n        }\n\n        windowSum = balance(windowSum, selected, candidates, k);\n        long minWindowSum = windowSum;\n\n        for (int i = dist + 2; i < nums.length; ++i) {\n          int outOfScope = nums[i - dist - 1];\n            if (selected.contains(outOfScope)) {\n                windowSum -= outOfScope;\n                selected.remove(outOfScope);\n            } else {\n                candidates.remove(outOfScope);\n            }\n            if (nums[i] < selected.max()) {\n                windowSum += nums[i];\n                selected.add(nums[i]);\n            } else {\n                candidates.add(nums[i]);\n            }\n            windowSum = balance(windowSum, selected, candidates, k);\n            minWindowSum = Math.min(minWindowSum, windowSum);\n        }\n\n        return nums[0] + minWindowSum;\n    }\n\n    private long balance(long windowSum, Multiset selected, Multiset candidates, int k) {\n        while (selected.size() < k - 1) {\n          int minCandidate = candidates.min();\n            windowSum += minCandidate;\n            selected.add(minCandidate);\n            candidates.remove(minCandidate);\n        }\n        while (selected.size() > k - 1) {\n          int maxSelected = selected.max();\n            windowSum -= maxSelected;\n            selected.remove(maxSelected);\n            candidates.add(maxSelected);\n        }\n        return windowSum;\n    }\n}",
    },
  },
  3023: {
    java: {
      "sliding-window":
        "**\n * Definition for an infinite stream.\n * class InfiniteStream {\n *     public InfiniteStream(int[] bits);\n *     public int next();\n * }\n */\nclass Solution {\n    public int findPattern(InfiniteStream infiniteStream, int[] pattern) {\n        long a = 0, b = 0;\n        int m = pattern.length;\n        int half = m >> 1;\n        long mask1 = (1L << half) - 1;\n        long mask2 = (1L << (m - half)) - 1;\n        for (int i = 0; i < half; ++i) {\n            a |= (long) pattern[i] << (half - 1 - i);\n        }\n        for (int i = half; i < m; ++i) {\n            b |= (long) pattern[i] << (m - 1 - i);\n        }\n        long x = 0, y = 0;\n        for (int i = 1;; ++i) {\n            int v = infiniteStream.next();\n            y = y << 1 | v;\n            v = (int) ((y >> (m - half)) & 1);\n            y &= mask2;\n            x = x << 1 | v;\n            x &= mask1;\n            if (i >= m && a == x && b == y) {\n                return i - m;\n            }\n        }\n    }\n}",
    },
  },
  3030: {
    java: {
      matrix: "",
    },
  },
  3033: {
    java: {
      matrix: "",
    },
  },
  3037: {
    java: {
      "sliding-window":
        "/**\n * Definition for an infinite stream.\n * class InfiniteStream {\n *   public InfiniteStream(int[] bits);\n *   public int next();\n * }\n */\n\nclass Solution {\n  public int findPattern(InfiniteStream stream, int[] pattern) {\n    int[] lps = getLPS(pattern);\n    int i = 0;  \n    int j = 0;   \n    int bit = 0;\n    boolean readNext = false;\n    while (true) {\n      if (!readNext) {\n        bit = stream.next();\n        readNext = true;\n      }\n      if (bit == pattern[j]) {\n        ++i;\n        readNext = false;\n        ++j;\n        if (j == pattern.length)\n          return i - j;\n      }\n      else if (j > 0) {\n        j = lps[j - 1];\n      } else {\n        ++i;\n        readNext = false;\n      }\n    }\n  }\n\n\n  private int[] getLPS(int[] pattern) {\n    int[] lps = new int[pattern.length];\n    int j = 0;\n    for (int i = 1; i < pattern.length; ++i) {\n      while (j > 0 && pattern[j] != pattern[i])\n        j = lps[j - 1];\n      if (pattern[i] == pattern[j])\n        lps[i] = ++j;\n    }\n    return lps;\n  }\n}",
    },
  },
  3044: {
    java: {
      matrix: "",
    },
  },
  3049: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3066: {
    java: {
      "heap-(priority-queue)": "",
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
  3078: {
    java: {
      matrix: "",
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
  3086: {
    java: {
      "sliding-window":
        "class Solution {\n  public long minimumMoves(int[] nums, int k, int maxChanges) {\n    int kNumOfIndicesWithinOneDistance = 3;\n    long ans = Long.MAX_VALUE;\n    List<Integer> oneIndices = new ArrayList<>(); \n    List<Long> prefix = new ArrayList<>();       \n    prefix.add(0L);\n\n    for (int i = 0; i < nums.length; ++i)\n      if (nums[i] == 1)\n        oneIndices.add(i);\n\n    for (int oneIndex : oneIndices)\n      prefix.add(prefix.get(prefix.size() - 1) + oneIndex);\n\n    int minOnesByTwo = Math.max(0, k - maxChanges);\n    int maxOnesByTwo =\n        Math.min(k, Math.min(minOnesByTwo + kNumOfIndicesWithinOneDistance, oneIndices.size()));\n\n    for (int onesByTwo = minOnesByTwo; onesByTwo <= maxOnesByTwo; ++onesByTwo)\n      for (int left = 0; left + onesByTwo < prefix.size(); ++left) {\n        int right = left + onesByTwo;\n        long cost1 = (k - onesByTwo) * 2;\n        long cost2 = (prefix.get(right) - prefix.get((left + right) / 2)) -\n                           (prefix.get((left + right + 1) / 2) - prefix.get(left));\n        ans = Math.min(ans, cost1 + cost2);\n      }\n\n    return ans;\n  }\n}",
    },
  },
  3090: {
    java: {
      "sliding-window":
        "class Solution {\n    public int maximumLengthSubstring(String s) {\n        int ans = 0;\n        int[] count = new int[26];\n\n        for (int left = 0, right = 0; right < s.length(); ++right) {\n            ++count[s.charAt(right) - 'a'];\n            while (count[s.charAt(right) - 'a'] > 2)\n                --count[s.charAt(left++) - 'a'];\n            ans = Math.max(ans, right - left + 1);\n        }\n\n        return ans;\n    }\n}",
    },
  },
  3092: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3095: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minimumSubarrayLength(int[] nums, int k) {\n        int kMax = 50;\n        int n = nums.length;\n        int ans = n + 1;\n        int ors = 0;\n        int[] count = new int[kMax + 1];\n\n        for (int left = 0, right = 0; right < n; ++right) {\n            ors = orNum(ors, nums[right], count);\n            while (ors >= k && left <= right) {\n                ans = Math.min(ans, right - left + 1);\n                ors = undoOrNum(ors, nums[left], count);\n                ++left;\n            }\n        }\n\n        return (ans == n + 1) ? -1 : ans;\n    }\n\n    private static final int kMaxBit = 30;\n\n    private int orNum(int ors, int num, int[] count) {\n        for (int i = 0; i < kMaxBit; ++i)\n            if ((num >> i & 1) == 1 && ++count[i] == 1)\n                ors += 1 << i;\n        return ors;\n    }\n\n    private int undoOrNum(int ors, int num, int[] count) {\n        for (int i = 0; i < kMaxBit; ++i)\n            if ((num >> i & 1) == 1 && --count[i] == 0)\n                ors -= 1 << i;\n        return ors;\n    }\n}",
    },
  },
  3097: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minimumSubarrayLength(int[] nums, int k) {\n        int kMax = 50;\n        int n = nums.length;\n        int ans = n + 1;\n        int ors = 0;\n        int[] count = new int[kMax + 1];\n\n        for (int left = 0, right = 0; right < n; ++right) {\n            ors = orNum(ors, nums[right], count);\n            while (ors >= k && left <= right) {\n                ans = Math.min(ans, right - left + 1);\n                ors = undoOrNum(ors, nums[left], count);\n                ++left;\n            }\n        }\n\n        return (ans == n + 1) ? -1 : ans;\n    }\n\n    private static final int kMaxBit = 30;\n\n    private int orNum(int ors, int num, int[] count) {\n        for (int i = 0; i < kMaxBit; ++i)\n            if ((num >> i & 1) == 1 && ++count[i] == 1)\n                ors += 1 << i;\n        return ors;\n    }\n\n    private int undoOrNum(int ors, int num, int[] count) {\n        for (int i = 0; i < kMaxBit; ++i)\n            if ((num >> i & 1) == 1 && --count[i] == 0)\n                ors -= 1 << i;\n        return ors;\n    }\n}",
    },
  },
  3109: {
    java: {
      "merge-sort":
        "class FenwickTree {\n  public FenwickTree(int n) {\n    sums = new int[n + 1];\n  }\n\n  public void add(int i, int delta) {\n    while (i < sums.length) {\n      sums[i] += delta;\n      i += lowbit(i);\n    }\n  }\n\n  public int get(int i) {\n    int sum = 0;\n    while (i > 0) {\n      sum += sums[i];\n      i -= lowbit(i);\n    }\n    return sum;\n  }\n\n  private int[] sums;\n\n  private static int lowbit(int i) {\n    return i & -i;\n  }\n}\n\nclass Solution {\n  public int getPermutationIndex(int[] perm) {\n  int kMod = 1_000_000_007;\n  int n = perm.length;\n    int ans = 0;\n    FenwickTree tree = new FenwickTree(n);\n    int[] fact = new int[n + 1]; \n    Arrays.fill(fact, 1);\n\n    for (int i = 2; i <= n; ++i)\n      fact[i] = (int) ((fact[i - 1] * (long) i) % kMod);\n\n    for (int i = 0; i < n; ++i) {\n    int num = perm[i];\n    int unusedNums = num - 1 - tree.get(num - 1);\n    int suffixLength = fact[n - 1 - i];\n      ans = (int) ((ans + unusedNums * (long) suffixLength) % kMod);\n      tree.add(num, 1);\n    }\n\n    return ans;\n  }\n}",
    },
  },
  3112: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3117: {
    java: {
      queue: "",
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
  3127: {
    java: {
      matrix: "",
    },
  },
  3132: {
    java: {
      "two-pointers": "",
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
  3142: {
    java: {
      matrix: "",
    },
  },
  3148: {
    java: {
      matrix: "",
    },
  },
  3170: {
    java: {
      "heap-(priority-queue)": "",
    },
  },
  3186: {
    java: {
      "two-pointers": "",
    },
  },
  3191: {
    java: {
      "sliding-window":
        "class Solution {\n    public int minOperations(int[] nums) {\n        int n = nums.length;\n        int ans = 0;\n\n        for (int i = 0; i + 2 < n; ++i)\n            if (nums[i] == 0) {\n                nums[i + 1] ^= 1;\n                nums[i + 2] ^= 1;\n                ++ans;\n            }\n\n        return nums[n - 1] == 0 || nums[n - 2] == 0 ? -1 : ans;\n    }\n}",
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
  3197: {
    java: {
      matrix: "",
    },
  },
  84: {
    java: {
      "monotonic-stack": "",
    },
  },
  316: {
    java: {
      "monotonic-stack": "",
    },
  },
  402: {
    java: {
      "monotonic-stack": "",
    },
  },
  456: {
    java: {
      "monotonic-stack": "",
    },
  },
  496: {
    java: {
      "monotonic-stack": "",
    },
  },
  503: {
    java: {
      "monotonic-stack": "",
    },
  },
  654: {
    java: {
      "monotonic-stack": "",
    },
  },
  739: {
    java: {
      "monotonic-stack": "",
    },
  },
  768: {
    java: {
      "monotonic-stack": "",
    },
  },
  769: {
    java: {
      "monotonic-stack": "",
    },
  },
  853: {
    java: {
      "monotonic-stack": "",
    },
  },
  901: {
    java: {
      "monotonic-stack": "",
    },
  },
  907: {
    java: {
      "monotonic-stack": "",
    },
  },
  962: {
    java: {
      "monotonic-stack": "",
    },
  },
  975: {
    java: {
      "monotonic-stack": "",
    },
  },
  1019: {
    java: {
      "monotonic-stack": "",
    },
  },
  1063: {
    java: {
      "monotonic-stack": "",
    },
  },
  1081: {
    java: {
      "monotonic-stack": "",
    },
  },
  1124: {
    java: {
      "monotonic-stack": "",
    },
  },
  1130: {
    java: {
      "monotonic-stack": "",
    },
  },
  1475: {
    java: {
      "monotonic-stack": "",
    },
  },
  1526: {
    java: {
      "monotonic-stack": "",
    },
  },
  1673: {
    java: {
      "monotonic-stack": "",
    },
  },
  1762: {
    java: {
      "monotonic-stack": "",
    },
  },
  1856: {
    java: {
      "monotonic-stack": "",
    },
  },
  1944: {
    java: {
      "monotonic-stack": "",
    },
  },
  1950: {
    java: {
      "monotonic-stack": "",
    },
  },
  1996: {
    java: {
      "monotonic-stack": "",
    },
  },
  2030: {
    java: {
      "monotonic-stack": "",
    },
  },
  2104: {
    java: {
      "monotonic-stack": "",
    },
  },
  2281: {
    java: {
      "monotonic-stack": "",
    },
  },
  2289: {
    java: {
      "monotonic-stack": "",
    },
  },
  2297: {
    java: {
      "monotonic-stack": "",
    },
  },
  2334: {
    java: {
      "monotonic-stack": "",
    },
  },
  2345: {
    java: {
      "monotonic-stack": "",
    },
  },
  2355: {
    java: {
      "monotonic-stack": "",
    },
  },
  2487: {
    java: {
      "monotonic-stack": "",
    },
  },
  2736: {
    java: {
      "monotonic-stack": "",
    },
  },
  2818: {
    java: {
      "monotonic-stack": "",
    },
  },
  2832: {
    java: {
      "monotonic-stack": "",
    },
  },
  2865: {
    java: {
      "monotonic-stack": "",
    },
  },
  2866: {
    java: {
      "monotonic-stack": "",
    },
  },
  3113: {
    java: {
      "monotonic-stack": "",
    },
  },
  3205: {
    java: {
      "monotonic-stack": "",
    },
  },
};

const obj2 = {
  20: {
    java: {
      stack: "",
    },
  },
  32: {
    java: {
      stack: "",
    },
  },
  42: {
    java: {
      stack: "",
    },
  },
  71: {
    java: {
      stack: "",
    },
  },
  84: {
    java: {
      stack: "",
    },
  },
  85: {
    java: {
      stack: "",
    },
  },
  94: {
    java: {
      stack: "",
    },
  },
  114: {
    java: {
      stack: "",
    },
  },
  143: {
    java: {
      stack: "",
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
  150: {
    java: {
      stack: "",
    },
  },
  155: {
    java: {
      stack: "",
    },
  },
  173: {
    java: {
      stack: "",
    },
  },
  224: {
    java: {
      stack: "",
    },
  },
  225: {
    java: {
      stack: "",
    },
  },
  227: {
    java: {
      stack: "",
    },
  },
  232: {
    java: {
      stack: "",
    },
  },
  234: {
    java: {
      stack: "",
    },
  },
  255: {
    java: {
      stack: "",
    },
  },
  272: {
    java: {
      stack: "",
    },
  },
  316: {
    java: {
      stack: "",
    },
  },
  321: {
    java: {
      stack: "",
    },
  },
  331: {
    java: {
      stack: "",
    },
  },
  341: {
    java: {
      stack: "",
    },
  },
  364: {
    java: {
      stack: "",
    },
  },
  385: {
    java: {
      stack: "",
    },
  },
  388: {
    java: {
      stack: "",
    },
  },
  394: {
    java: {
      stack: "",
    },
  },
  402: {
    java: {
      stack: "",
    },
  },
  426: {
    java: {
      stack: "",
    },
  },
  439: {
    java: {
      stack: "",
    },
  },
  445: {
    java: {
      stack: "",
    },
  },
  456: {
    java: {
      stack: "",
    },
  },
  484: {
    java: {
      stack: "",
    },
  },
  488: {
    java: {
      stack: "",
    },
  },
  496: {
    java: {
      stack: "",
    },
  },
  503: {
    java: {
      stack: "",
    },
  },
  536: {
    java: {
      stack: "",
    },
  },
  581: {
    java: {
      stack: "",
    },
  },
  589: {
    java: {
      stack: "",
    },
  },
  590: {
    java: {
      stack: "",
    },
  },
  591: {
    java: {
      stack: "",
    },
  },
  636: {
    java: {
      stack: "",
    },
  },
  654: {
    java: {
      stack: "",
    },
  },
  678: {
    java: {
      stack: "",
    },
  },
  682: {
    java: {
      stack: "",
    },
  },
  716: {
    java: {
      stack: "",
    },
  },
  726: {
    java: {
      stack: "",
    },
  },
  735: {
    java: {
      stack: "",
    },
  },
  736: {
    java: {
      stack: "",
    },
  },
  739: {
    java: {
      stack: "",
    },
  },
  768: {
    java: {
      stack: "",
    },
  },
  769: {
    java: {
      stack: "",
    },
  },
  770: {
    java: {
      stack: "",
    },
  },
  772: {
    java: {
      stack: "",
    },
  },
  844: {
    java: {
      stack: "",
    },
  },
  853: {
    java: {
      stack: "",
    },
  },
  856: {
    java: {
      stack: "",
    },
  },
  880: {
    java: {
      stack: "",
    },
  },
  895: {
    java: {
      stack: "",
    },
  },
  897: {
    java: {
      stack: "",
    },
  },
  901: {
    java: {
      stack: "",
    },
  },
  907: {
    java: {
      stack: "",
    },
  },
  921: {
    java: {
      stack: "",
    },
  },
  936: {
    java: {
      stack: "",
    },
  },
  946: {
    java: {
      stack: "",
    },
  },
  962: {
    java: {
      stack: "",
    },
  },
  975: {
    java: {
      stack: "",
    },
  },
  1003: {
    java: {
      stack: "",
    },
  },
  1006: {
    java: {
      stack: "",
    },
  },
  1008: {
    java: {
      stack: "",
    },
  },
  1019: {
    java: {
      stack: "",
    },
  },
  1021: {
    java: {
      stack: "",
    },
  },
  1047: {
    java: {
      stack: "",
    },
  },
  1063: {
    java: {
      stack: "",
    },
  },
  1081: {
    java: {
      stack: "",
    },
  },
  1096: {
    java: {
      stack: "",
    },
  },
  1106: {
    java: {
      stack: "",
    },
  },
  1111: {
    java: {
      stack: "",
    },
  },
  1124: {
    java: {
      stack: "",
    },
  },
  1130: {
    java: {
      stack: "",
    },
  },
  1172: {
    java: {
      stack: "",
    },
  },
  1190: {
    java: {
      stack: "",
    },
  },
  1209: {
    java: {
      stack: "",
    },
  },
  1214: {
    java: {
      stack: "",
    },
  },
  1249: {
    java: {
      stack: "",
    },
  },
  1265: {
    java: {
      stack: "",
    },
  },
  1381: {
    java: {
      stack: "",
    },
  },
  1441: {
    java: {
      stack: "",
    },
  },
  1472: {
    java: {
      stack: "",
    },
  },
  1475: {
    java: {
      stack: "",
    },
  },
  1504: {
    java: {
      stack: "",
    },
  },
  1526: {
    java: {
      stack: "",
    },
  },
  1541: {
    java: {
      stack: "",
    },
  },
  1544: {
    java: {
      stack: "",
    },
  },
  1574: {
    java: {
      stack: "",
    },
  },
  1586: {
    java: {
      stack: "",
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
  1614: {
    java: {
      stack: "",
    },
  },
  1628: {
    java: {
      stack: "",
    },
  },
  1653: {
    java: {
      stack: "",
    },
  },
  1673: {
    java: {
      stack: "",
    },
  },
  1700: {
    java: {
      stack: "",
    },
  },
  1717: {
    java: {
      stack: "",
    },
  },
  1756: {
    java: {
      stack: "",
    },
  },
  1762: {
    java: {
      stack: "",
    },
  },
  1776: {
    java: {
      stack: "",
    },
  },
  1793: {
    java: {
      stack: "",
    },
  },
  1856: {
    java: {
      stack: "",
    },
  },
  1896: {
    java: {
      stack: "",
    },
  },
  1944: {
    java: {
      stack: "",
    },
  },
  1950: {
    java: {
      stack: "",
    },
  },
  1963: {
    java: {
      stack: "",
    },
  },
  1996: {
    java: {
      stack: "",
    },
  },
  2019: {
    java: {
      stack: "",
    },
  },
  2030: {
    java: {
      stack: "",
    },
  },
  2104: {
    java: {
      stack: "",
    },
  },
  2116: {
    java: {
      stack: "",
    },
  },
  2130: {
    java: {
      stack: "",
    },
  },
  2197: {
    java: {
      stack: "",
    },
  },
  2211: {
    java: {
      stack: "",
    },
  },
  2216: {
    java: {
      stack: "",
    },
  },
  2254: {
    java: {
      stack: "",
    },
  },
  2281: {
    java: {
      stack: "",
    },
  },
  2282: {
    java: {
      stack: "",
    },
  },
  2289: {
    java: {
      stack: "",
    },
  },
  2296: {
    java: {
      stack: "",
    },
  },
  2297: {
    java: {
      stack: "",
    },
  },
  2334: {
    java: {
      stack: "",
    },
  },
  2345: {
    java: {
      stack: "",
    },
  },
  2355: {
    java: {
      stack: "",
    },
  },
  2375: {
    java: {
      stack: "",
    },
  },
  2390: {
    java: {
      stack: "",
    },
  },
  2434: {
    java: {
      stack: "",
    },
  },
  2454: {
    java: {
      stack: "",
    },
  },
  2487: {
    java: {
      stack: "",
    },
  },
  2589: {
    java: {
      stack: "",
    },
  },
  2617: {
    java: {
      stack: "",
    },
  },
  2645: {
    java: {
      stack: "",
    },
  },
  2696: {
    java: {
      stack: "",
    },
  },
  2736: {
    java: {
      stack: "",
    },
  },
  2751: {
    java: {
      stack: "",
    },
  },
  2764: {
    java: {
      stack: "",
    },
  },
  2813: {
    java: {
      stack: "",
    },
  },
  2816: {
    java: {
      stack: "",
    },
  },
  2818: {
    java: {
      stack: "",
    },
  },
  2832: {
    java: {
      stack: "",
    },
  },
  2865: {
    java: {
      stack: "",
    },
  },
  2866: {
    java: {
      stack: "",
    },
  },
  2940: {
    java: {
      stack: "",
    },
  },
  2945: {
    java: {
      stack: "",
    },
  },
  3113: {
    java: {
      stack: "",
    },
  },
  3170: {
    java: {
      stack: "",
    },
  },
  3205: {
    java: {
      stack: "",
    },
  },
};

const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);