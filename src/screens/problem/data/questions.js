/* eslint-disable react/jsx-no-comment-textnodes */
const QUESTIONS = {
  1192: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        There are <code>n</code> servers numbered from <code>0</code> to{" "}
        <code>n - 1</code> connected by undirected server-to-server{" "}
        <code>connections</code> forming a network where{" "}
        <code>
          connections[i] = [a<sub>i</sub>, b<sub>i</sub>]
        </code>{" "}
        represents a connection between servers{" "}
        <code>
          a<sub>i</sub>
        </code>{" "}
        and{" "}
        <code>
          b<sub>i</sub>
        </code>
        . Any server can reach other servers directly or indirectly through the
        network.
      </p>
      <p>
        A <em>critical connection</em> is a connection that, if removed, will
        make some servers unable to reach some other server.
      </p>
      <p>Return all critical connections in the network in any order.</p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2019/09/03/1537_ex1_2.png"
        style={{ width: "198px", height: "248px;" }}
      />
      <pre>
        <strong>Input:</strong> n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]{" "}
        <br />
        <strong>Output:</strong> [[1,3]] <br />
        <strong>Explanation:</strong> [[3,1]] is also accepted.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 2, connections = [[0,1]] <br />
        <strong>Output:</strong> [[0,1]]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            2 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            n - 1 &lt;= connections.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt;= n - 1
          </code>
        </li>
        <li>
          <code>
            a<sub>i</sub> != b<sub>i</sub>
          </code>
        </li>
        <li>There are no repeated connections.</li>
      </ul>
    </div>
  ),
  470: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given the <strong>API</strong> <code>rand7()</code> that generates a
        uniform random integer in the range <code>[1, 7]</code>, write a
        function <code>rand10()</code> that generates a uniform random integer
        in the range <code>[1, 10]</code>. You can only call the API{" "}
        <code>rand7()</code>, and you shouldn't call any other API. Please{" "}
        <strong>do not</strong> use a language's built-in random API.
      </p>

      <p>
        Each test case will have one <strong>internal</strong> argument{" "}
        <code>n</code>, the number of times that your implemented function{" "}
        <code>rand10()</code> will be called while testing. Note that this is{" "}
        <strong>not an argument</strong> passed to <code>rand10()</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> n = 1 <br />
        <strong>Output:</strong> [2]
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> n = 2 <br /> <strong>Output:</strong> [2,8]
      </pre>
      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <pre>
        <strong>Input:</strong> n = 3 <br /> <strong>Output:</strong> [3,8,10]
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong>
      </p>

      <ul>
        <li>
          What is the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Expected_value"
            target="_blank"
            rel="noreferrer"
          >
            expected value
          </a>{" "}
          for the number of calls to <code>rand7()</code> function?
        </li>
        <li>
          Could you minimize the number of calls to <code>rand7()</code>?
        </li>
      </ul>
    </div>
  ),
  478: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given the radius and the position of the center of a circle, implement
        the function <code>randPoint</code> which generates a uniform random
        point inside the circle.
      </p>

      <p>
        Implement the <code>Solution</code> class:
      </p>

      <ul>
        <li>
          <code>Solution(double radius, double x_center, double y_center)</code>{" "}
          initializes the object with the radius of the circle{" "}
          <code>radius</code> and the position of the center{" "}
          <code>(x_center, y_center)</code>.
        </li>
        <li>
          <code>randPoint()</code> returns a random point inside the circle. A
          point on the circumference of the circle is considered to be in the
          circle. The answer is returned as an array <code>[x, y]</code>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong>
        <br />
        ["Solution", "randPoint", "randPoint", "randPoint"]
        <br />
        [[1.0, 0.0, 0.0], [], [], []]
        <br />
        <strong>Output:</strong>
        <br />
        [null, [-0.02493, -0.38077], [0.82314, 0.38945], [0.36572, 0.17248]]
        <br />
        <strong>Explanation:</strong>
        <br />
        Solution solution = new Solution(1.0, 0.0, 0.0);
        <br />
        solution.randPoint(); // return [-0.02493, -0.38077]
        <br />
        solution.randPoint(); // return [0.82314, 0.38945]
        <br />
        solution.randPoint(); // return [0.36572, 0.17248]
        <br />
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            0 &lt;&nbsp;radius &lt;= 10<sup>8</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>7</sup> &lt;= x_center, y_center &lt;= 10<sup>7</sup>
          </code>
        </li>
        <li>
          At most{" "}
          <code>
            3 * 10<sup>4</sup>
          </code>{" "}
          calls will be made to <code>randPoint</code>.
        </li>
      </ul>
    </div>
  ),
  164: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code>, return{" "}
        <em>
          the maximum difference between two successive elements in its sorted
          form
        </em>
        . If the array contains less than two elements, return <code>0</code>.
      </p>

      <p>
        You must write an algorithm that runs in linear time and uses linear
        extra space.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,6,9,1]
        <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The sorted form of the array is [1,3,6,9],
        either (3,6) or (6,9) has the maximum difference 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [10] <br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> The array contains less than 2 elements,
        therefore return 0.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  912: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of integers <code>nums</code>, sort the array in
        ascending order and return it.
      </p>

      <p>
        You must solve the problem <strong>without using any built-in</strong>{" "}
        functions in <code>O(nlog(n))</code> time complexity and with the
        smallest space complexity possible.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,2,3,1]
        <br />
        <strong>Output:</strong> [1,2,3,5]
        <br />
        <strong>Explanation:</strong> After sorting the array, the positions of
        some numbers are not changed (for example, 2 and 3), while the positions
        of other numbers are changed (for example, 1 and 5).
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,1,1,2,0,0] <br />
        <strong>Output:</strong> [0,0,1,1,2,5]
        <br />
        <strong>Explanation:</strong> Note that the values of nums are not
        necessairly unique.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -5 * 10<sup>4</sup> &lt;= nums[i] &lt;= 5 * 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2343: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> array of strings{" "}
        <code>nums</code>, where each string is of <strong>equal length</strong>{" "}
        and consists of only digits.
      </p>

      <p>
        You are also given a <strong>0-indexed</strong> 2D integer array{" "}
        <code>queries</code> where{" "}
        <code>
          queries[i] = [k<sub>i</sub>, trim<sub>i</sub>]
        </code>
        . For each <code>queries[i]</code>, you need to:
      </p>

      <ul>
        <li>
          <strong>Trim</strong> each number in <code>nums</code> to its{" "}
          <strong>rightmost</strong>{" "}
          <code>
            trim<sub>i</sub>
          </code>{" "}
          digits.
        </li>
        <li>
          Determine the <strong>index</strong> of the{" "}
          <code>
            k<sub>i</sub>
            <sup>th</sup>
          </code>{" "}
          smallest trimmed number in <code>nums</code>. If two trimmed numbers
          are equal, the number with the <strong>lower</strong> index is
          considered to be smaller.
        </li>
        <li>
          Reset each number in <code>nums</code> to its original length.
        </li>
      </ul>

      <p>
        Return <em>an array </em>
        <code>answer</code>
        <em> of the same length as </em>
        <code>queries</code>,<em> where </em>
        <code>answer[i]</code>
        <em> is the answer to the </em>
        <code>
          i<sup>th</sup>
        </code>
        <em> query.</em>
      </p>

      <p>
        <strong>Note</strong>:
      </p>

      <ul>
        <li>
          To trim to the rightmost <code>x</code> digits means to keep removing
          the leftmost digit, until only <code>x</code> digits remain.
        </li>
        <li>
          Strings in <code>nums</code> may contain leading zeros.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = ["102","473","251","814"], queries =
        [[1,1],[2,3],[4,2],[1,2]]
        <br />
        <strong>Output:</strong> [2,2,1,0]
        <br />
        <strong>Explanation:</strong>
        <br />
        1. After trimming to the last digit, nums = ["2","3","1","4"]. The
        smallest number is 1 at index 2.
        <br />
        2. Trimmed to the last 3 digits, nums is unchanged. The 2<sup>
          nd
        </sup>{" "}
        smallest number is 251 at index 2.
        <br />
        3. Trimmed to the last 2 digits, nums = ["02","73","51","14"]. The 4
        <sup>th</sup> smallest number is 73.
        <br />
        4. Trimmed to the last 2 digits, the smallest number is 2 at index 0.
        <br />
        Note that the trimmed number "02" is evaluated as 2.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = ["24","37","96","04"], queries =
        [[2,1],[2,2]]
        <br />
        <strong>Output:</strong> [3,0]
        <br />
        <strong>Explanation:</strong>
        1. Trimmed to the last digit, nums = ["4","7","6","4"]. The 2
        <sup>nd</sup> smallest number is 4 at index 3. There are two occurrences
        of 4, but the one at index 0 is considered smaller than the one at index
        3. 2. Trimmed to the last 2 digits, nums is unchanged. The 2
        <sup>nd</sup> smallest number is 24.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 100</code>
        </li>
        <li>
          <code>1 &lt;= nums[i].length &lt;= 100</code>
        </li>
        <li>
          <code>nums[i]</code> consists of only digits.
        </li>
        <li>
          All <code>nums[i].length</code> are <strong>equal</strong>.
        </li>
        <li>
          <code>1 &lt;= queries.length &lt;= 100</code>
        </li>
        <li>
          <code>queries[i].length == 2</code>
        </li>
        <li>
          <code>
            1 &lt;= k<sub>i</sub> &lt;= nums.length
          </code>
        </li>
        <li>
          <code>
            1 &lt;= trim<sub>i</sub> &lt;= nums[i].length
          </code>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong> Could you use the{" "}
        <strong>Radix Sort Algorithm</strong> to solve this problem? What will
        be the complexity of that solution?
      </p>
    </div>
  ),
  332: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a list of airline <code>tickets</code> where{" "}
        <code>
          tickets[i] = [from<sub>i</sub>, to<sub>i</sub>]
        </code>{" "}
        represent the departure and the arrival airports of one flight.
        Reconstruct the itinerary in order and return it.
      </p>

      <p>
        All of the tickets belong to a man who departs from <code>"JFK"</code>,
        thus, the itinerary must begin with <code>"JFK"</code>. If there are
        multiple valid itineraries, you should return the itinerary that has the
        smallest lexical order when read as a single string.
      </p>

      <ul>
        <li>
          For example, the itinerary <code>["JFK", "LGA"]</code> has a smaller
          lexical order than <code>["JFK", "LGB"]</code>.
        </li>
      </ul>

      <p>
        You may assume all tickets form at least one valid itinerary. You must
        use all the tickets once and only once.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/03/14/itinerary1-graph.jpg"
        style={{ width: "382px", height: "222px" }}
      />
      <pre>
        <strong>Input:</strong> tickets =
        [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
        <br />
        <strong>Output:</strong> ["JFK","MUC","LHR","SFO","SJC"]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/03/14/itinerary2-graph.jpg"
        style={{ width: "222px", height: "230px" }}
      />
      <pre>
        <strong>Input:</strong> tickets =
        [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
        <br />
        <strong>Output:</strong> ["JFK","ATL","JFK","SFO","ATL","SFO"]
        <br />
        <strong>Explanation:</strong> Another possible reconstruction is
        ["JFK","SFO","ATL","JFK","ATL","SFO"] but it is larger in lexical order.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= tickets.length &lt;= 300</code>
        </li>
        <li>
          <code>tickets[i].length == 2</code>
        </li>
        <li>
          <code>
            from<sub>i</sub>.length == 3
          </code>
        </li>
        <li>
          <code>
            to<sub>i</sub>.length == 3
          </code>
        </li>
        <li>
          <code>
            from<sub>i</sub>
          </code>{" "}
          and{" "}
          <code>
            to<sub>i</sub>
          </code>{" "}
          consist of uppercase English letters.
        </li>
        <li>
          <code>
            from<sub>i</sub> != to<sub>i</sub>
          </code>
        </li>
      </ul>
    </div>
  ),
  753: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        There is a safe protected by a password. The password is a sequence of{" "}
        <code>n</code> digits where each digit can be in the range{" "}
        <code>[0, k - 1]</code>.
      </p>

      <p>
        The safe has a peculiar way of checking the password. When you enter in
        a sequence, it checks the <strong>most recent </strong>
        <code>n</code>
        <strong> digits</strong> that were entered each time you type a digit.
      </p>

      <ul>
        <li>
          For example, the correct password is <code>"345"</code> and you enter
          in <code>"012345"</code>:
          <ul>
            <li>
              After typing <code>0</code>, the most recent <code>3</code> digits
              is <code>"0"</code>, which is incorrect.
            </li>
            <li>
              After typing <code>1</code>, the most recent <code>3</code> digits
              is <code>"01"</code>, which is incorrect.
            </li>
            <li>
              After typing <code>2</code>, the most recent <code>3</code> digits
              is <code>"012"</code>, which is incorrect.
            </li>
            <li>
              After typing <code>3</code>, the most recent <code>3</code> digits
              is <code>"123"</code>, which is incorrect.
            </li>
            <li>
              After typing <code>4</code>, the most recent <code>3</code> digits
              is <code>"234"</code>, which is incorrect.
            </li>
            <li>
              After typing <code>5</code>, the most recent <code>3</code> digits
              is <code>"345"</code>, which is correct and the safe unlocks.
            </li>
          </ul>
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          any string of <strong>minimum length</strong> that will unlock the
          safe <strong>at some point</strong> of entering it
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 1, k = 2<br />
        <strong>Output:</strong> "10"
        <br />
        <strong>Explanation:</strong> The password is a single digit, so enter
        each digit. "01" would also unlock the safe.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 2, k = 2 <br />
        <strong>Output:</strong> "01100"
        <br />
        <strong>Explanation:</strong> For each possible password:
        <br />- "00" is typed in starting from the 4<sup>th</sup> digit.
        <br />- "01" is typed in starting from the 1<sup>st</sup> digit.
        <br />- "10" is typed in starting from the 3<sup>rd</sup> digit.
        <br />- "11" is typed in starting from the 2<sup>nd</sup> digit. Thus
        "01100" will unlock the safe. "10011", and "11001" would also unlock the
        safe.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= n &lt;= 4</code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= 10</code>
        </li>
        <li>
          <code>
            1 &lt;= k<sup>n</sup> &lt;= 4096
          </code>
        </li>
      </ul>
    </div>
  ),
  2097: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> 2D integer array{" "}
        <code>pairs</code> where{" "}
        <code>
          pairs[i] = [start<sub>i</sub>, end<sub>i</sub>]
        </code>
        . An arrangement of <code>pairs</code> is <strong>valid</strong> if for
        every index <code>i</code> where{" "}
        <code>1 &lt;= i &lt; pairs.length</code>, we have{" "}
        <code>
          end<sub>i-1</sub> == start<sub>i</sub>
        </code>
        .
      </p>

      <p>
        Return{" "}
        <em>
          <strong>any</strong> valid arrangement of{" "}
        </em>
        <code>pairs</code>.
      </p>

      <p>
        <strong>Note:</strong> The inputs will be generated such that there
        exists a valid arrangement of <code>pairs</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> pairs = [[5,1],[4,5],[11,9],[9,4]] <br />
        <strong>Output:</strong> [[11,9],[9,4],[4,5],[5,1]] <br />
        <strong>
          Explanation: <br />
        </strong>
        This is a valid arrangement since end<sub>i-1</sub> always equals start
        <sub>i</sub>. end<sub>0</sub> = 9 == 9 = start<sub>1</sub> <br />
        end<sub>1</sub> = 4 == 4 = start<sub>2</sub> <br />
        end<sub>2</sub> = 5 == 5 = start<sub>3</sub> <br />
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> pairs = [[1,3],[3,2],[2,1]] <br />
        <strong>Output:</strong> [[1,3],[3,2],[2,1]] <br />
        <strong>Explanation:</strong> <br />
        This is a valid arrangement since end<sub>i-1</sub> always equals start
        <sub>i</sub>. <br />
        end<sub>0</sub> = 3 == 3 = start<sub>1</sub> <br />
        end<sub>1</sub> = 2 == 2 = start<sub>2</sub> <br />
        The arrangements [[2,1],[1,3],[3,2]] and [[3,2],[2,1],[1,3]] are also
        valid.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> pairs = [[1,2],[1,3],[2,1]] <br />
        <strong>Output:</strong> [[1,2],[2,1],[1,3]] <br />
        <strong>Explanation:</strong> <br />
        This is a valid arrangement since end<sub>i-1</sub> always equals start
        <sub>i</sub>. <br />
        end<sub>0</sub> = 2 == 2 = start<sub>1</sub> <br />
        end<sub>1</sub> = 1 == 1 = start<sub>2</sub> <br />
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= pairs.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>pairs[i].length == 2</code>
        </li>
        <li>
          <code>
            0 &lt;= start<sub>i</sub>, end<sub>i</sub> &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            start<sub>i</sub> != end<sub>i</sub>
          </code>
        </li>
        <li>No two pairs are exactly the same.</li>
        <li>
          There <strong>exists</strong> a valid arrangement of{" "}
          <code>pairs</code>.
        </li>
      </ul>
    </div>
  ),
  1489: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a weighted undirected connected graph with <code>n</code>
        &nbsp;vertices numbered from <code>0</code> to <code>n - 1</code>
        ,&nbsp;and an array <code>edges</code>&nbsp;where{" "}
        <code>
          edges[i] = [a<sub>i</sub>, b<sub>i</sub>, weight<sub>i</sub>]
        </code>{" "}
        represents a bidirectional and weighted edge between nodes&nbsp;
        <code>
          a<sub>i</sub>
        </code>
        &nbsp;and{" "}
        <code>
          b<sub>i</sub>
        </code>
        . A minimum spanning tree (MST) is a subset of the graph's edges that
        connects all vertices without cycles&nbsp;and with the minimum possible
        total edge weight.
      </p>

      <p>
        Find{" "}
        <em>
          all the critical and pseudo-critical edges in the given graph's
          minimum spanning tree (MST)
        </em>
        . An MST edge whose deletion from the graph would cause the MST weight
        to increase is called a&nbsp;<em>critical edge</em>. On&nbsp;the other
        hand, a pseudo-critical edge is that which can appear in some MSTs but
        not all.
      </p>

      <p>Note that you can return the indices of the edges in any order.</p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <p>
        <img
          alt=""
          src="https://assets.leetcode.com/uploads/2020/06/04/ex1.png"
          style={{ width: 259, height: 262 }}
        />
      </p>

      <pre>
        <strong>Input:</strong> n = 5, edges =
        [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
        <br />
        <strong>Output:</strong> [[0,1],[2,3,4,5]]
        <br />
        <strong>Explanation:</strong> The figure above describes the graph.
        <br />
        The following figure shows all the possible MSTs:
        <br /> <br />
        <img
          alt=""
          src="https://assets.leetcode.com/uploads/2020/06/04/msts.png"
          style={{ width: 540, height: 553 }}
        />
        <br />
        Notice that the two edges 0 and 1 appear in all MSTs, therefore they are
        critical edges, so we return them in the first list of the output. The
        edges 2, 3, 4, and 5 are only part of some MSTs, therefore they are
        considered pseudo-critical edges. We add them to the second list of the
        output.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <p>
        <img
          alt=""
          src="https://assets.leetcode.com/uploads/2020/06/04/ex2.png"
          style={{ width: 247, height: 253 }}
        />
      </p>

      <pre>
        <strong>Input:</strong> n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]{" "}
        <br />
        <strong>Output:</strong> [[],[0,1,2,3]]
        <br />
        <strong>Explanation:</strong> We can observe that since all 4 edges have
        equal weight, choosing any 3 edges from the given 4 will yield an MST.
        Therefore all 4 edges are pseudo-critical.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>2 &lt;= n &lt;= 100</code>
        </li>
        <li>
          <code>1 &lt;= edges.length &lt;= min(200, n * (n - 1) / 2)</code>
        </li>
        <li>
          <code>edges[i].length == 3</code>
        </li>
        <li>
          <code>
            0 &lt;= a<sub>i</sub> &lt; b<sub>i</sub> &lt; n
          </code>
        </li>
        <li>
          <code>
            1 &lt;= weight<sub>i</sub>&nbsp;&lt;= 1000
          </code>
        </li>
        <li>
          All pairs{" "}
          <code>
            (a<sub>i</sub>, b<sub>i</sub>)
          </code>{" "}
          are <strong>distinct</strong>.
        </li>
      </ul>
    </div>
  ),
  1568: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an <code>m x n</code> binary grid <code>grid</code> where{" "}
        <code>1</code> represents land and <code>0</code> represents water. An{" "}
        <strong>island</strong> is a maximal <strong>4-directionally</strong>{" "}
        (horizontal or vertical) connected group of <code>1</code>'s.
      </p>

      <p>
        The grid is said to be <strong>connected</strong> if we have{" "}
        <strong>exactly one island</strong>, otherwise is said{" "}
        <strong>disconnected</strong>.
      </p>

      <p>
        In one day, we are allowed to change <strong>any </strong>single land
        cell <code>(1)</code> into a water cell <code>(0)</code>.
      </p>

      <p>
        Return <em>the minimum number of days to disconnect the grid</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/12/24/land1.jpg"
        style={{ width: 500, height: 169 }}
      />
      <pre>
        <strong>Input:</strong> grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]] <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> We need at least 2 days to get a
        disconnected grid. Change land grid[1][1] and grid[0][2] to water and
        get 2 disconnected island.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/12/24/land2.jpg"
        style={{ width: 404, height: 85 }}
      />
      <pre>
        <strong>Input:</strong> grid = [[1,1]] <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> Grid of full water is also disconnected
        ([[1,1]] -&gt; [[0,0]]), 0 islands.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>m == grid.length</code>
        </li>
        <li>
          <code>n == grid[i].length</code>
        </li>
        <li>
          <code>1 &lt;= m, n &lt;= 30</code>
        </li>
        <li>
          <code>grid[i][j]</code> is either <code>0</code> or <code>1</code>.
        </li>
      </ul>
    </div>
  ),
  2846: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        There is an undirected tree with <code>n</code> nodes labeled from{" "}
        <code>0</code> to <code>n - 1</code>. You are given the integer{" "}
        <code>n</code> and a 2D integer array <code>edges</code> of length{" "}
        <code>n - 1</code>, where{" "}
        <code>
          edges[i] = [u<sub>i</sub>, v<sub>i</sub>, w<sub>i</sub>]
        </code>{" "}
        indicates that there is an edge between nodes{" "}
        <code>
          u<sub>i</sub>
        </code>{" "}
        and{" "}
        <code>
          v<sub>i</sub>
        </code>{" "}
        with weight{" "}
        <code>
          w<sub>i</sub>
        </code>{" "}
        in the tree.
      </p>

      <p>
        You are also given a 2D integer array <code>queries</code> of length{" "}
        <code>m</code>, where{" "}
        <code>
          queries[i] = [a<sub>i</sub>, b<sub>i</sub>]
        </code>
        . For each query, find the <strong>minimum number of operations</strong>{" "}
        required to make the weight of every edge on the path from{" "}
        <code>
          a<sub>i</sub>
        </code>{" "}
        to{" "}
        <code>
          b<sub>i</sub>
        </code>{" "}
        equal. In one operation, you can choose any edge of the tree and change
        its weight to any value.
      </p>

      <p>
        <strong>Note</strong> that:
      </p>

      <ul>
        <li>
          Queries are <strong>independent</strong> of each other, meaning that
          the tree returns to its <strong>initial state</strong> on each new
          query.
        </li>
        <li>
          The path from{" "}
          <code>
            a<sub>i</sub>
          </code>{" "}
          to{" "}
          <code>
            b<sub>i</sub>
          </code>{" "}
          is a sequence of <strong>distinct</strong> nodes starting with node{" "}
          <code>
            a<sub>i</sub>
          </code>{" "}
          and ending with node{" "}
          <code>
            b<sub>i</sub>
          </code>{" "}
          such that every two adjacent nodes in the sequence share an edge in
          the tree.
        </li>
      </ul>

      <p>
        Return <em>an array </em>
        <code>answer</code>
        <em> of length </em>
        <code>m</code>
        <em> where</em> <code>answer[i]</code> <em>is the answer to the</em>{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        <em>query.</em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <br />
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2023/08/11/graph-6-1.png"
        style={{ width: 339, height: 344 }}
      />
      <pre>
        <strong>Input:</strong> n = 7,
        <br /> edges = [[0,1,1],[1,2,1],[2,3,1],[3,4,2],[4,5,2],[5,6,2]],
        <br /> queries = [[0,3],[3,6],[2,6],[0,6]]
        <br />
        <strong>Output:</strong> [0,0,1,3]
        <br />
        <strong>Explanation:</strong> In the first query, all the edges in the
        path from 0 to 3 have a weight of 1. Hence, the answer is 0. In the
        second query, all the edges in the path from 3 to 6 have a weight of 2.
        Hence, the answer is 0. In the third query, we change the weight of edge
        [2,3] to 2. After this operation, all the edges in the path from 2 to 6
        have a weight of 2. Hence, the answer is 1. In the fourth query, we
        change the weights of edges [0,1], [1,2] and [2,3] to 2. After these
        operations, all the edges in the path from 0 to 6 have a weight of 2.
        Hence, the answer is 3. For each queries[i], it can be shown that
        answer[i] is the minimum number of operations needed to equalize all the
        edge weights in the path from a<sub>i</sub> to b<sub>i</sub>.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <br />
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2023/08/11/graph-9-1.png"
        style={{ width: 472, height: 370 }}
      />
      <pre>
        <strong>Input:</strong> n = 8,
        <br /> edges =
        [[1,2,6],[1,3,4],[2,4,6],[2,5,3],[3,6,6],[3,0,8],[7,0,2]],
        <br /> queries = [[4,6],[0,4],[6,5],[7,4]]
        <br /> <strong>Output:</strong> [1,2,2,3]
        <br />
        <strong>Explanation:</strong> In the first query, we change the weight
        of edge [1,3] to 6. After this operation, all the edges in the path from
        4 to 6 have a weight of 6. Hence, the answer is 1. In the second query,
        we change the weight of edges [0,3] and [3,1] to 6. After these
        operations, all the edges in the path from 0 to 4 have a weight of 6.
        Hence, the answer is 2. In the third query, we change the weight of
        edges [1,3] and [5,2] to 6. After these operations, all the edges in the
        path from 6 to 5 have a weight of 6. Hence, the answer is 2. In the
        fourth query, we change the weights of edges [0,7], [0,3] and [1,3] to
        6. After these operations, all the edges in the path from 7 to 4 have a
        weight of 6. Hence, the answer is 3. For each queries[i], it can be
        shown that answer[i] is the minimum number of operations needed to
        equalize all the edge weights in the path from a<sub>i</sub> to b
        <sub>i</sub>.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>edges.length == n - 1</code>
        </li>
        <li>
          <code>edges[i].length == 3</code>
        </li>
        <li>
          <code>
            0 &lt;= u<sub>i</sub>, v<sub>i</sub> &lt; n
          </code>
        </li>
        <li>
          <code>
            1 &lt;= w<sub>i</sub> &lt;= 26
          </code>
        </li>
        <li>
          The input is generated such that <code>edges</code> represents a valid
          tree.
        </li>
        <li>
          <code>
            1 &lt;= queries.length == m &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>queries[i].length == 2</code>
        </li>
        <li>
          <code>
            0 &lt;= a<sub>i</sub>, b<sub>i</sub> &lt; n
          </code>
        </li>
      </ul>
    </div>
  ),
  382: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a singly linked list, return a random node's value from the linked
        list. Each node must have the <strong>same probability</strong> of being
        chosen.
      </p>

      <p>
        Implement the <code>Solution</code> class:
      </p>

      <ul>
        <li>
          <code>Solution(ListNode head)</code> Initializes the object with the
          head of the singly-linked list <code>head</code>.
        </li>
        <li>
          <code>int getRandom()</code> Chooses a node randomly from the list and
          returns its value. All the nodes of the list should be equally likely
          to be chosen.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/03/16/getrand-linked-list.jpg"
        style={{ width: 302, height: 62 }}
      />
      <pre>
        <strong>Input</strong>
        <br />
        ["Solution", "getRandom", "getRandom", "getRandom", "getRandom",
        "getRandom"] [[[1, 2, 3]], [], [], [], [], []]
        <br />
        <strong>Output:</strong> <br />
        [null, 1, 3, 2, 2, 3]
        <br />
        <strong>Explanation</strong>
        <br />
        Solution solution = new Solution([1, 2, 3]);
        <br />
        solution.getRandom(); // return 1<br />
        solution.getRandom(); // return 3<br />
        solution.getRandom(); // return 2<br />
        solution.getRandom(); // return 2<br />
        solution.getRandom(); // return 3<br />
        // getRandom() should return either 1, 2, or 3 randomly. Each element
        should have equal probability of returning.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          The number of nodes in the linked list will be in the range{" "}
          <code>
            [1, 10<sup>4</sup>]
          </code>
          .
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= Node.val &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          At most{" "}
          <code>
            10<sup>4</sup>
          </code>{" "}
          calls will be made to <code>getRandom</code>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong>
      </p>

      <ul>
        <li>
          What if the linked list is extremely large and its length is unknown
          to you?
        </li>
        <li>Could you solve this efficiently without using extra space?</li>
      </ul>
    </div>
  ),
  398: (
    <>
      <div class="elfjS" data-track-load="description_content">
        <p>
          Given an integer array <code>nums</code> with possible{" "}
          <strong>duplicates</strong>, randomly output the index of a given{" "}
          <code>target</code> number. You can assume that the given target
          number must exist in the array.
        </p>

        <p>
          Implement the <code>Solution</code> class:
        </p>

        <ul>
          <li>
            <code>Solution(int[] nums)</code> Initializes the object with the
            array <code>nums</code>.
          </li>
          <li>
            <code>int pick(int target)</code> Picks a random index{" "}
            <code>i</code> from <code>nums</code> where{" "}
            <code>nums[i] == target</code>. If there are multiple valid i's,
            then each index should have an equal probability of returning.
          </li>
        </ul>

        <p>&nbsp;</p>
        <p>
          <strong class="example">Example 1:</strong>
        </p>

        <pre>
          <strong>Input</strong> <br />
          ["Solution", "pick", "pick", "pick"]
          <br />
          [[[1, 2, 3, 3, 3]], [3], [1], [3]]
          <br />
          <strong>Output</strong>
          [null, 4, 0, 2]
          <br />
          <strong>Explanation</strong>
          <br />
          Solution solution = new Solution([1, 2, 3, 3, 3]);
          <br />
          solution.pick(3); // It should return either index 2, 3, or 4
          randomly. Each index should have equal probability of returning.
          <br />
          solution.pick(1); // It should return 0. Since in the array only
          nums[0] is equal to 1.
          <br />
          solution.pick(3); // It should return either index 2, 3, or 4
          randomly. Each index should have equal probability of returning.
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>
              1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup>
            </code>
          </li>
          <li>
            <code>
              -2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1
            </code>
          </li>
          <li>
            <code>target</code> is an integer from <code>nums</code>.
          </li>
          <li>
            At most{" "}
            <code>
              10<sup>4</sup>
            </code>{" "}
            calls will be made to <code>pick</code>.
          </li>
        </ul>
      </div>
    </>
  ),
  519: (
    <>
      <div class="elfjS" data-track-load="description_content">
        <p>
          There is an <code>m x n</code> binary grid <code>matrix</code> with
          all the values set <code>0</code> initially. Design an algorithm to
          randomly pick an index <code>(i, j)</code> where{" "}
          <code>matrix[i][j] == 0</code> and flips it to <code>1</code>. All the
          indices <code>(i, j)</code> where <code>matrix[i][j] == 0</code>{" "}
          should be equally likely to be returned.
        </p>

        <p>
          Optimize your algorithm to minimize the number of calls made to the{" "}
          <strong>built-in</strong> random function of your language and
          optimize the time and space complexity.
        </p>

        <p>
          Implement the <code>Solution</code> class:
        </p>

        <ul>
          <li>
            <code>Solution(int m, int n)</code> Initializes the object with the
            size of the binary matrix <code>m</code> and <code>n</code>.
          </li>
          <li>
            <code>int[] flip()</code> Returns a random index <code>[i, j]</code>{" "}
            of the matrix where <code>matrix[i][j] == 0</code> and flips it to{" "}
            <code>1</code>.
          </li>
          <li>
            <code>void reset()</code> Resets all the values of the matrix to be{" "}
            <code>0</code>.
          </li>
        </ul>

        <p>&nbsp;</p>
        <p>
          <strong class="example">Example 1:</strong>
        </p>

        <pre>
          <strong>Input</strong>
          <br />
          ["Solution", "flip", "flip", "flip", "reset", "flip"]
          <br />
          [[3, 1], [], [], [], [], []]
          <br />
          <strong>Output</strong>
          <br />
          [null, [1, 0], [2, 0], [0, 0], null, [2, 0]]
          <br />
          <strong>Explanation</strong>
          <br />
          Solution solution = new Solution(3, 1);
          <br />
          solution.flip(); // return [1, 0], [0,0], [1,0], and [2,0] should be
          equally likely to be returned.
          <br />
          solution.flip(); // return [2, 0], Since [1,0] was returned, [2,0] and
          [0,0]
          <br />
          solution.flip(); // return [0, 0], Based on the previously returned
          indices, only [0,0] can be returned.
          <br />
          solution.reset(); // All the values are reset to 0 and can be
          returned.
          <br />
          solution.flip(); // return [2, 0], [0,0], [1,0], and [2,0] should be
          equally likely to be returned.
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>
              1 &lt;= m, n &lt;= 10<sup>4</sup>
            </code>
          </li>
          <li>
            There will be at least one free cell for each call to{" "}
            <code>flip</code>.
          </li>
          <li>
            At most <code>1000</code> calls will be made to <code>flip</code>{" "}
            and <code>reset</code>.
          </li>
        </ul>
      </div>
    </>
  ),
  497: (
    <>
      <div class="elfjS" data-track-load="description_content">
        <p>
          You are given an array of non-overlapping axis-aligned rectangles{" "}
          <code>rects</code> where{" "}
          <code>
            rects[i] = [a<sub>i</sub>, b<sub>i</sub>, x<sub>i</sub>, y
            <sub>i</sub>]
          </code>{" "}
          indicates that{" "}
          <code>
            (a<sub>i</sub>, b<sub>i</sub>)
          </code>{" "}
          is the bottom-left corner point of the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          rectangle and{" "}
          <code>
            (x<sub>i</sub>, y<sub>i</sub>)
          </code>{" "}
          is the top-right corner point of the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          rectangle. Design an algorithm to pick a random integer point inside
          the space covered by one of the given rectangles. A point on the
          perimeter of a rectangle is included in the space covered by the
          rectangle.
        </p>

        <p>
          Any integer point inside the space covered by one of the given
          rectangles should be equally likely to be returned.
        </p>

        <p>
          <strong>Note</strong> that an integer point is a point that has
          integer coordinates.
        </p>

        <p>
          Implement the <code>Solution</code> class:
        </p>

        <ul>
          <li>
            <code>Solution(int[][] rects)</code> Initializes the object with the
            given rectangles <code>rects</code>.
          </li>
          <li>
            <code>int[] pick()</code> Returns a random integer point{" "}
            <code>[u, v]</code> inside the space covered by one of the given
            rectangles.
          </li>
        </ul>

        <p>&nbsp;</p>
        <p>
          <strong class="example">Example 1:</strong>
        </p>
        <img
          alt=""
          src="https://assets.leetcode.com/uploads/2021/07/24/lc-pickrandomrec.jpg"
          style={{ width: 419, height: 539 }}
        />
        <pre>
          <strong>Input</strong>
          <br />
          ["Solution", "pick", "pick", "pick", "pick", "pick"]
          <br />
          [[[[-2, -2, 1, 1], [2, 2, 4, 6]]], [], [], [], [], []]
          <br />
          <strong>Output</strong>
          <br />
          [null, [1, -2], [1, -1], [-1, -2], [-2, -2], [0, 0]]
          <br />
          <strong>Explanation</strong>
          <br />
          Solution solution = new Solution([[-2, -2, 1, 1], [2, 2, 4, 6]]);
          <br />
          solution.pick(); // return [1, -2]
          <br />
          solution.pick(); // return [1, -1]
          <br />
          solution.pick(); // return [-1, -2]
          <br />
          solution.pick(); // return [-2, -2]
          <br />
          solution.pick(); // return [0, 0]
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>1 &lt;= rects.length &lt;= 100</code>
          </li>
          <li>
            <code>rects[i].length == 4</code>
          </li>
          <li>
            <code>
              -10<sup>9</sup> &lt;= a<sub>i</sub> &lt; x<sub>i</sub> &lt;= 10
              <sup>9</sup>
            </code>
          </li>
          <li>
            <code>
              -10<sup>9</sup> &lt;= b<sub>i</sub> &lt; y<sub>i</sub> &lt;= 10
              <sup>9</sup>
            </code>
          </li>
          <li>
            <code>
              x<sub>i</sub> - a<sub>i</sub> &lt;= 2000
            </code>
          </li>
          <li>
            <code>
              y<sub>i</sub> - b<sub>i</sub> &lt;= 2000
            </code>
          </li>
          <li>All the rectangles do not overlap.</li>
          <li>
            At most{" "}
            <code>
              10<sup>4</sup>
            </code>{" "}
            calls will be made to <code>pick</code>.
          </li>
        </ul>
      </div>
    </>
  ),
  218: (
    <>
      <div class="elfjS" data-track-load="description_content">
        <p>
          A city's <strong>skyline</strong> is the outer contour of the
          silhouette formed by all the buildings in that city when viewed from a
          distance. Given the locations and heights of all the buildings, return{" "}
          <em>
            the <strong>skyline</strong> formed by these buildings collectively
          </em>
          .
        </p>

        <p>
          The geometric information of each building is given in the array{" "}
          <code>buildings</code> where{" "}
          <code>
            buildings[i] = [left<sub>i</sub>, right<sub>i</sub>, height
            <sub>i</sub>]
          </code>
          :
        </p>

        <ul>
          <li>
            <code>
              left<sub>i</sub>
            </code>{" "}
            is the x coordinate of the left edge of the{" "}
            <code>
              i<sup>th</sup>
            </code>{" "}
            building.
          </li>
          <li>
            <code>
              right<sub>i</sub>
            </code>{" "}
            is the x coordinate of the right edge of the{" "}
            <code>
              i<sup>th</sup>
            </code>{" "}
            building.
          </li>
          <li>
            <code>
              height<sub>i</sub>
            </code>{" "}
            is the height of the{" "}
            <code>
              i<sup>th</sup>
            </code>{" "}
            building.
          </li>
        </ul>

        <p>
          You may assume all buildings are perfect rectangles grounded on an
          absolutely flat surface at height <code>0</code>.
        </p>

        <p>
          The <strong>skyline</strong> should be represented as a list of "key
          points" <strong>sorted by their x-coordinate</strong> in the form{" "}
          <code>
            [[x<sub>1</sub>,y<sub>1</sub>],[x<sub>2</sub>,y<sub>2</sub>],...]
          </code>
          . Each key point is the left endpoint of some horizontal segment in
          the skyline except the last point in the list, which always has a
          y-coordinate <code>0</code> and is used to mark the skyline's
          termination where the rightmost building ends. Any ground between the
          leftmost and rightmost buildings should be part of the skyline's
          contour.
        </p>

        <p>
          <b>Note:</b> There must be no consecutive horizontal lines of equal
          height in the output skyline. For instance,{" "}
          <code>[...,[2 3],[4 5],[7 5],[11 5],[12 7],...]</code> is not
          acceptable; the three lines of height 5 should be merged into one in
          the final output as such: <code>[...,[2 3],[4 5],[12 7],...]</code>
        </p>

        <p>&nbsp;</p>
        <p>
          <strong class="example">Example 1:</strong>
        </p>
        <img
          alt=""
          src="https://assets.leetcode.com/uploads/2020/12/01/merged.jpg"
          style={{ width: 800, height: 331 }}
        />
        <pre>
          <strong>Input:</strong> buildings =
          [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]] <br />
          <strong>Output:</strong>{" "}
          [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]] <br />
          <strong>Explanation:</strong>
          <br />
          Figure A shows the buildings of the input.
          <br />
          Figure B shows the skyline formed by those buildings. The red points
          in figure B represent the key points in the output list.
        </pre>

        <p>
          <strong class="example">Example 2:</strong>
        </p>
        <pre>
          <strong>Input:</strong> buildings = [[0,2,3],[2,5,3]]
          <br />
          <strong>Output:</strong> [[0,3],[5,0]]
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>
              1 &lt;= buildings.length &lt;= 10<sup>4</sup>
            </code>
          </li>
          <li>
            <code>
              0 &lt;= left<sub>i</sub> &lt; right<sub>i</sub> &lt;= 2
              <sup>31</sup> - 1
            </code>
          </li>
          <li>
            <code>
              1 &lt;= height<sub>i</sub> &lt;= 2<sup>31</sup> - 1
            </code>
          </li>
          <li>
            <code>buildings</code> is sorted by{" "}
            <code>
              left<sub>i</sub>
            </code>{" "}
            in&nbsp;non-decreasing order.
          </li>
        </ul>
      </div>
    </>
  ),
  391: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array <code>rectangles</code> where{" "}
        <code>
          rectangles[i] = [x<sub>i</sub>, y<sub>i</sub>, a<sub>i</sub>, b
          <sub>i</sub>]
        </code>{" "}
        represents an axis-aligned rectangle. The bottom-left point of the
        rectangle is{" "}
        <code>
          (x<sub>i</sub>, y<sub>i</sub>)
        </code>{" "}
        and the top-right point of it is{" "}
        <code>
          (a<sub>i</sub>, b<sub>i</sub>)
        </code>
        .
      </p>
      <p>
        Return <code>true</code>{" "}
        <em>
          if all the rectangles together form an exact cover of a rectangular
          region
        </em>
        .
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>{" "}
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/03/27/perectrec1-plane.jpg"
        style={{ width: 300, height: 294 }}
      />{" "}
      <br />
      <pre>
        <strong>Input:</strong> rectangles =
        [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]] <br />
        <strong>Output:</strong> true <br />
        <strong>Explanation:</strong> All 5 rectangles together form an exact
        cover of a rectangular region.
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/03/27/perfectrec2-plane.jpg"
        style={{ width: 300, height: 294 }}
      />
      <br />
      <pre>
        <strong>Input:</strong> rectangles =
        [[1,1,2,3],[1,3,2,4],[3,1,4,2],[3,2,4,4]]
        <br />
        <strong>Output:</strong> false
        <br />
        <strong>Explanation:</strong> Because there is a gap between the two
        rectangular regions.
      </pre>
      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/03/27/perfecrrec4-plane.jpg"
        style={{ width: 300, height: 294 }}
      />
      <br />
      <pre>
        <strong>Input:</strong> rectangles =
        [[1,1,3,3],[3,1,4,2],[1,3,2,4],[2,2,4,4]]
        <br />
        <strong>Output:</strong> false
        <br />
        <strong>Explanation:</strong> Because two of the rectangles overlap with
        each other.
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>
            1 &lt;= rectangles.length &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>rectangles[i].length == 4</code>
        </li>
        <li>
          <code>
            -10<sup>5</sup> &lt;= x<sub>i</sub>, y<sub>i</sub>, a<sub>i</sub>, b
            <sub>i</sub> &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  850: (
    <>
      <div class="elfjS" data-track-load="description_content">
        <p>
          You are given a 2D array of axis-aligned <code>rectangles</code>. Each{" "}
          <code>
            rectangle[i] = [x<sub>i1</sub>, y<sub>i1</sub>, x<sub>i2</sub>, y
            <sub>i2</sub>]
          </code>{" "}
          denotes the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          rectangle where{" "}
          <code>
            (x<sub>i1</sub>, y<sub>i1</sub>)
          </code>{" "}
          are the coordinates of the <strong>bottom-left corner</strong>, and{" "}
          <code>
            (x<sub>i2</sub>, y<sub>i2</sub>)
          </code>{" "}
          are the coordinates of the <strong>top-right corner</strong>.
        </p>

        <p>
          Calculate the <strong>total area</strong> covered by all{" "}
          <code>rectangles</code> in the plane. Any area covered by two or more
          rectangles should only be counted <strong>once</strong>.
        </p>

        <p>
          Return{" "}
          <em>
            the <strong>total area</strong>
          </em>
          . Since the answer may be too large, return it <strong>modulo</strong>{" "}
          <code>
            10<sup>9</sup> + 7
          </code>
          .
        </p>

        <p>&nbsp;</p>
        <p>
          <strong class="example">Example 1:</strong>
        </p>
        <img
          alt=""
          src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/06/06/rectangle_area_ii_pic.png"
          style={{ width: 600, height: 450 }}
        />
        <pre>
          <strong>Input:</strong> rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]
          <br />
          <strong>Output:</strong> 6<br />
          <strong>Explanation:</strong> A total area of 6 is covered by all
          three rectangles, as illustrated in the picture.
          <br />
          From (1,1) to (2,2), the green and red rectangles overlap.
          <br />
          From (1,0) to (2,3), all three rectangles overlap.
        </pre>

        <p>
          <strong class="example">Example 2:</strong>
        </p>

        <pre>
          <strong>Input:</strong> rectangles = [[0,0,1000000000,1000000000]]
          <br />
          <strong>Output:</strong> 49 <br />
          <strong>Explanation:</strong> The answer is 10<sup>18</sup> modulo (10
          <sup>9</sup> + 7), which is 49.
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>1 &lt;= rectangles.length &lt;= 200</code>
          </li>
          <li>
            <code>rectanges[i].length == 4</code>
          </li>
          <li>
            <code>
              0 &lt;= x<sub>i1</sub>, y<sub>i1</sub>, x<sub>i2</sub>, y
              <sub>i2</sub> &lt;= 10<sup>9</sup>
            </code>
          </li>
          <li>
            <code>
              x<sub>i1 &lt;= </sub>x<sub>i2</sub>
            </code>
          </li>
          <li>
            <code>
              y<sub>i1 &lt;=</sub> y<sub>i2</sub>
            </code>
          </li>
        </ul>
      </div>
    </>
  ),
  1851: (
    <>
      <div class="elfjS" data-track-load="description_content">
        <p>
          You are given a 2D integer array <code>intervals</code>, where{" "}
          <code>
            intervals[i] = [left<sub>i</sub>, right<sub>i</sub>]
          </code>{" "}
          describes the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          interval starting at{" "}
          <code>
            left<sub>i</sub>
          </code>{" "}
          and ending at{" "}
          <code>
            right<sub>i</sub>
          </code>{" "}
          <strong>(inclusive)</strong>. The <strong>size</strong> of an interval
          is defined as the number of integers it contains, or more formally{" "}
          <code>
            right<sub>i</sub> - left<sub>i</sub> + 1
          </code>
          .
        </p>

        <p>
          You are also given an integer array <code>queries</code>. The answer
          to the{" "}
          <code>
            j<sup>th</sup>
          </code>{" "}
          query is the <strong>size of the smallest interval</strong>{" "}
          <code>i</code> such that{" "}
          <code>
            left<sub>i</sub> &lt;= queries[j] &lt;= right<sub>i</sub>
          </code>
          . If no such interval exists, the answer is <code>-1</code>.
        </p>

        <p>
          Return <em>an array containing the answers to the queries</em>.
        </p>

        <p>&nbsp;</p>
        <p>
          <strong class="example">Example 1:</strong>
        </p>

        <pre>
          <strong>Input:</strong> intervals = [[1,4],[2,4],[3,6],[4,4]], queries
          = [2,3,4,5] <br />
          <strong>Output:</strong> [3,3,1,4] <br />
          <strong>Explanation:</strong> The queries are processed as follows:{" "}
          <br />
          - Query = 2: The interval [2,4] is the smallest interval containing 2.
          The answer is 4 - 2 + 1 = 3. <br />
          - Query = 3: The interval [2,4] is the smallest interval containing 3.
          The answer is 4 - 2 + 1 = 3. <br />
          - Query = 4: The interval [4,4] is the smallest interval containing 4.
          The answer is 4 - 4 + 1 = 1. <br />- Query = 5: The interval [3,6] is
          the smallest interval containing 5. The answer is 6 - 3 + 1 = 4.
        </pre>

        <p>
          <strong class="example">Example 2:</strong>
        </p>

        <pre>
          <strong>Input:</strong> intervals = [[2,3],[2,5],[1,8],[20,25]],
          queries = [2,19,5,22] <br />
          <strong>Output:</strong> [2,-1,4,6] <br />
          <strong>Explanation:</strong> The queries are processed as follows:{" "}
          <br />
          - Query = 2: The interval [2,3] is the smallest interval containing 2.
          The answer is 3 - 2 + 1 = 2. <br />- Query = 19: None of the intervals
          contain 19. The answer is -1. <br />
          - Query = 5: The interval [2,5] is the smallest interval containing 5.
          The answer is 5 - 2 + 1 = 4. <br />- Query = 22: The interval [20,25]
          is the smallest interval containing 22. The answer is 25 - 20 + 1 = 6.
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>
              1 &lt;= intervals.length &lt;= 10<sup>5</sup>
            </code>
          </li>
          <li>
            <code>
              1 &lt;= queries.length &lt;= 10<sup>5</sup>
            </code>
          </li>
          <li>
            <code>intervals[i].length == 2</code>
          </li>
          <li>
            <code>
              1 &lt;= left<sub>i</sub> &lt;= right<sub>i</sub> &lt;= 10
              <sup>7</sup>
            </code>
          </li>
          <li>
            <code>
              1 &lt;= queries[j] &lt;= 10<sup>7</sup>
            </code>
          </li>
        </ul>
      </div>
    </>
  ),
  192: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Write a bash script to calculate the{" "}
        <span
          data-keyword="frequency-textfile"
          class=" cursor-pointer relative text-dark-blue-s text-sm"
        >
          <div class="popover-wrapper inline-block" data-headlessui-state="">
            <div>
              <div
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:rl:"
              >
                <div>frequency</div>
              </div>
              <div
                style={{
                  position: "fixed",
                  zIndex: 40,
                  inset: "0px auto auto 0px;",
                  transform: "translate(287px, 183px)",
                }}
              ></div>
            </div>
          </div>
        </span>{" "}
        of each word in a text file <code>words.txt</code>.
      </p>
      <p>For simplicity sake, you may assume:</p>
      <ul>
        <li>
          <code>words.txt</code> contains only lowercase characters and space{" "}
          <code>' '</code> characters.
        </li>
        <li>Each word must consist of lowercase characters only.</li>
        <li>Words are separated by one or more whitespace characters.</li>
      </ul>
      <br />
      <p>
        <strong class="example">Example:</strong>
      </p>{" "}
      <p>
        Assume that <code>words.txt</code> has the following content:
      </p>{" "}
      <pre>the day is sunny the the the sunny is is</pre> <br />
      <p>
        Your script should output the following, sorted by descending frequency:
      </p>
      <pre>the 4 is 3 sunny 2 day 1</pre>
      <br />
      <p>
        <b>Note:</b>
      </p>
      <ul>
        <li>
          Don't worry about handling ties, it is guaranteed that each word's
          frequency count is unique.
        </li>
        <li>
          Could you write it in one-line using{" "}
          <a href="http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-4.html">
            Unix pipes
          </a>
          ?
        </li>
      </ul>
    </div>
  ),
  193: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a text file <code>file.txt</code> that contains a list of phone
        numbers (one per line), write a one-liner bash script to print all valid
        phone numbers.
      </p>

      <p>
        You may assume that a valid phone number must appear in one of the
        following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)
      </p>

      <p>
        You may also assume each line in the text file must not contain leading
        or trailing white spaces.
      </p>
      <br />
      <p>
        <strong class="example">Example:</strong>
      </p>

      <p>
        Assume that <code>file.txt</code> has the following content:
      </p>

      <pre>987-123-4567 123 456 7890 (123) 456-7890</pre>

      <p>Your script should output the following valid phone numbers:</p>

      <pre>987-123-4567 (123) 456-7890</pre>
    </div>
  ),
  194: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a text file <code>file.txt</code>, transpose its content.
      </p>

      <p>
        You may assume that each row has the same number of columns, and each
        field is separated by the <code>' '</code> character.
      </p>
      <br />
      <p>
        <strong class="example">Example:</strong>
      </p>

      <p>
        If <code>file.txt</code> has the following content:
      </p>

      <pre>name age alice 21 ryan 30</pre>

      <p>Output the following:</p>

      <pre>name alice ryan age 21 30</pre>
    </div>
  ),
  195: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a text file&nbsp;<code>file.txt</code>, print&nbsp;just the 10th
        line of the&nbsp;file.
      </p>
      <br />
      <p>
        <strong class="example">Example:</strong>
      </p>

      <p>
        Assume that <code>file.txt</code> has the following content:
      </p>

      <pre>
        Line 1 <br /> Line 2 <br /> Line 3 <br /> Line 4 <br /> Line 5 <br />{" "}
        Line 6 <br />
        Line 7 <br />
        Line 8 <br /> Line 9 <br />
        Line 10
      </pre>

      <p>Your script should output the tenth line, which is:</p>

      <pre>Line 10</pre>
      <br />
      <div class="spoilers">
        <b>Note:</b>
        <br />
        <br />
        1. If the file contains less than 10 lines, what should you output?
        <br />
        2. There's at least three different solutions. Try to explore all
        possibilities.
      </div>
    </div>
  ),
  274: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of integers <code>citations</code> where{" "}
        <code>citations[i]</code> is the number of citations a researcher
        received for their{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        paper, return <em>the researcher's h-index</em>.
      </p>

      <p>
        According to the{" "}
        <a
          href="https://en.wikipedia.org/wiki/H-index"
          target="_blank"
          rel="noreferrer"
        >
          definition of h-index on Wikipedia
        </a>
        : The h-index is defined as the maximum value of <code>h</code> such
        that the given researcher has published at least <code>h</code> papers
        that have each been cited at least <code>h</code> times.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> citations = [3,0,6,1,5] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> [3,0,6,1,5] means the researcher has 5
        papers in total and each of them had received 3, 0, 6, 1, 5 citations
        respectively. Since the researcher has 3 papers with at least 3
        citations each and the remaining two with no more than 3 citations each,
        their h-index is 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> citations = [1,3,1] <br />
        <strong>Output:</strong> 1 <br />
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == citations.length</code>
        </li>
        <li>
          <code>1 &lt;= n &lt;= 5000</code>
        </li>
        <li>
          <code>0 &lt;= citations[i] &lt;= 1000</code>
        </li>
      </ul>
    </div>
  ),
  561: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> of <code>2n</code> integers,
        group these integers into <code>n</code> pairs{" "}
        <code>
          (a<sub>1</sub>, b<sub>1</sub>), (a<sub>2</sub>, b<sub>2</sub>), ...,
          (a<sub>n</sub>, b<sub>n</sub>)
        </code>{" "}
        such that the sum of{" "}
        <code>
          min(a<sub>i</sub>, b<sub>i</sub>)
        </code>{" "}
        for all <code>i</code> is <strong>maximized</strong>. Return
        <em> the maximized sum</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,4,3,2] <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> All possible pairings (ignoring the
        ordering of elements) are: <br />
        1. (1, 4), (2, 3) -&gt; min(1, 4) + min(2, 3) = 1 + 2 = 3 <br />
        2. (1, 3), (2, 4) -&gt; min(1, 3) + min(2, 4) = 1 + 2 = 3 <br />
        3. (1, 2), (3, 4) -&gt; min(1, 2) + min(3, 4) = 1 + 3 = 4 <br />
        So the maximum possible sum is 4.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [6,2,6,5,1,2] <br />
        <strong>Output:</strong> 9 <br />
        <strong>Explanation:</strong> The optimal pairing is (2, 1), (2, 5), (6,
        6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>nums.length == 2 * n</code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1051: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        A school is trying to take an annual photo of all the students. The
        students are asked to stand in a single file line in{" "}
        <strong>non-decreasing order</strong> by height. Let this ordering be
        represented by the integer array <code>expected</code> where{" "}
        <code>expected[i]</code> is the expected height of the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        student in line.
      </p>

      <p>
        You are given an integer array <code>heights</code> representing the{" "}
        <strong>current order</strong> that the students are standing in. Each{" "}
        <code>heights[i]</code> is the height of the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        student in line (<strong>0-indexed</strong>).
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>number of indices</strong> where{" "}
        </em>
        <code>heights[i] != expected[i]</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> heights = [1,1,4,2,1,3] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> <br />
        heights: [1,1,<u>4</u>,2,<u>1</u>,<u>3</u>] <br />
        expected: [1,1,<u>1</u>,2,<u>3</u>,<u>4</u>] <br />
        Indices 2, 4, and 5 do not match.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> heights = [5,1,2,3,4] <br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> <br />
        heights: [<u>5</u>,<u>1</u>,<u>2</u>,<u>3</u>,<u>4</u>] <br />
        expected: [<u>1</u>,<u>2</u>,<u>3</u>,<u>4</u>,<u>5</u>] <br />
        All indices do not match.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> heights = [1,2,3,4,5] <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> <br />
        heights: [1,2,3,4,5] <br />
        expected: [1,2,3,4,5] <br />
        All indices match.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= heights.length &lt;= 100</code>
        </li>
        <li>
          <code>1 &lt;= heights[i] &lt;= 100</code>
        </li>
      </ul>
    </div>
  ),
  1122: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given two arrays <code>arr1</code> and <code>arr2</code>, the elements
        of <code>arr2</code> are distinct, and all elements in <code>arr2</code>{" "}
        are also in <code>arr1</code>.
      </p>

      <p>
        Sort the elements of <code>arr1</code> such that the relative ordering
        of items in <code>arr1</code> are the same as in <code>arr2</code>.
        Elements that do not appear in <code>arr2</code> should be placed at the
        end of <code>arr1</code> in <strong>ascending</strong> order.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 =
        [2,1,4,3,9,6] <br />
        <strong>Output:</strong> [2,2,2,1,4,3,3,9,6,7,19]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
        <br />
        <strong>Output:</strong> [22,28,8,6,17,44]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= arr1.length, arr2.length &lt;= 1000</code>
        </li>
        <li>
          <code>0 &lt;= arr1[i], arr2[i] &lt;= 1000</code>
        </li>
        <li>
          All the elements of <code>arr2</code> are <strong>distinct</strong>.
        </li>
        <li>
          Each&nbsp;<code>arr2[i]</code> is in <code>arr1</code>.
        </li>
      </ul>
    </div>
  ),
  1584: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array <code>points</code> representing integer
        coordinates of some points on a 2D-plane, where{" "}
        <code>
          points[i] = [x<sub>i</sub>, y<sub>i</sub>]
        </code>
        .
      </p>

      <p>
        The cost of connecting two points{" "}
        <code>
          [x<sub>i</sub>, y<sub>i</sub>]
        </code>{" "}
        and{" "}
        <code>
          [x<sub>j</sub>, y<sub>j</sub>]
        </code>{" "}
        is the <strong>manhattan distance</strong> between them:{" "}
        <code>
          |x<sub>i</sub> - x<sub>j</sub>| + |y<sub>i</sub> - y<sub>j</sub>|
        </code>
        , where <code>|val|</code> denotes the absolute value of{" "}
        <code>val</code>.
      </p>

      <p>
        Return <em>the minimum cost to make all points connected.</em> All
        points are connected if there is <strong>exactly one</strong> simple
        path between any two points.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/08/26/d.png"
        style={{ width: 214, height: 268 }}
      />
      <pre>
        <strong>Input:</strong> points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
        <br />
        <strong>Output:</strong> 20
        <br />
        <strong>Explanation:</strong> <br />
        <img
          alt=""
          src="https://assets.leetcode.com/uploads/2020/08/26/c.png"
          style={{ width: 214, height: 268 }}
        />
        We can connect the points as shown above to get the minimum cost of 20.
        Notice that there is a unique path between every pair of points.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> points = [[3,12],[-2,5],[-4,1]]
        <br />
        <strong>Output:</strong> 18
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= points.length &lt;= 1000</code>
        </li>
        <li>
          <code>
            -10<sup>6</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10
            <sup>6</sup>
          </code>
        </li>
        <li>
          All pairs{" "}
          <code>
            (x<sub>i</sub>, y<sub>i</sub>)
          </code>{" "}
          are distinct.
        </li>
      </ul>
    </div>
  ),
  1044: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a string <code>s</code>, consider all{" "}
        <em>duplicated substrings</em>: (contiguous) substrings of s that occur
        2 or more times.&nbsp;The occurrences&nbsp;may overlap.
      </p>
      <p>
        Return <strong>any</strong> duplicated&nbsp;substring that has the
        longest possible length.&nbsp;If <code>s</code> does not have a
        duplicated substring, the answer is <code>""</code>.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>{" "}
      <pre>
        <strong>Input:</strong> s = "banana" <br />
        <strong>Output:</strong> "ana" <br />
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>{" "}
      <pre>
        <strong>Input:</strong> s = "abcd" <br />
        <strong>Output:</strong> ""
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>
            2 &lt;= s.length &lt;= 3 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of lowercase English letters.
        </li>
      </ul>
    </div>
  ),
  1923: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        There is a country of <code>n</code> cities numbered from <code>0</code>{" "}
        to <code>n - 1</code>. In this country, there is a road connecting{" "}
        <b>every pair</b> of cities.
      </p>

      <p>
        There are <code>m</code> friends numbered from <code>0</code> to{" "}
        <code>m - 1</code> who are traveling through the country. Each one of
        them will take a path consisting of some cities. Each path is
        represented by an integer array that contains the visited cities in
        order. The path may contain a city <strong>more than once</strong>, but
        the same city will not be listed consecutively.
      </p>

      <p>
        Given an integer <code>n</code> and a 2D integer array{" "}
        <code>paths</code> where <code>paths[i]</code> is an integer array
        representing the path of the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        friend, return{" "}
        <em>
          the length of the <strong>longest common subpath</strong> that is
          shared by <strong>every</strong> friend's path, or{" "}
        </em>
        <code>0</code>
        <em> if there is no common subpath at all</em>.
      </p>

      <p>
        A <strong>subpath</strong> of a path is a contiguous sequence of cities
        within that path.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 5, paths = [[0,1,<u>2,3</u>,4], <br />[
        <u>2,3</u>,4],
        <br />
        [4,0,1,<u>2,3</u>]]
        <br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> The longest common subpath is [2,3].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 3, paths = [[0],[1],[2]]
        <br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> There is no common subpath shared by the
        three paths.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 5, paths = [[<u>0</u>,1,2,3,4],
        <br />
        [4,3,2,1,<u>0</u>]]
        <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> The possible longest common subpaths are
        [0], [1], [2], [3], and [4]. All have a length of 1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>m == paths.length</code>
        </li>
        <li>
          <code>
            2 &lt;= m &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            sum(paths[i].length) &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= paths[i][j] &lt; n</code>
        </li>
        <li>
          The same city is not listed multiple times consecutively in{" "}
          <code>paths[i]</code>.
        </li>
      </ul>
    </div>
  ),
  1977: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You wrote down many <strong>positive</strong> integers in a string
        called <code>num</code>. However, you realized that you forgot to add
        commas to seperate the different numbers. You remember that the list of
        integers was <strong>non-decreasing</strong> and that{" "}
        <strong>no</strong> integer had leading zeros.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>number of possible lists of integers</strong> that you
          could have written down to get the string{" "}
        </em>
        <code>num</code>. Since the answer may be large, return it{" "}
        <strong>modulo</strong>{" "}
        <code>
          10<sup>9</sup> + 7
        </code>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> num = "327" <br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> You could have written down the numbers:
        3, 27 327
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> num = "094"
        <br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> No numbers can have leading zeros and all
        numbers must be positive.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> num = "0"
        <br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> No numbers can have leading zeros and all
        numbers must be positive.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= num.length &lt;= 3500</code>
        </li>
        <li>
          <code>num</code> consists of digits <code>'0'</code> through{" "}
          <code>'9'</code>.
        </li>
      </ul>
    </div>
  ),
  2223: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are <strong>building</strong> a string <code>s</code> of length{" "}
        <code>n</code> <strong>one</strong> character at a time,{" "}
        <strong>prepending</strong> each new character to the{" "}
        <strong>front</strong> of the string. The strings are labeled from{" "}
        <code>1</code> to <code>n</code>, where the string with length{" "}
        <code>i</code> is labeled{" "}
        <code>
          s<sub>i</sub>
        </code>
        .
      </p>

      <ul>
        <li>
          For example, for <code>s = "abaca"</code>,{" "}
          <code>
            s<sub>1</sub> == "a"
          </code>
          ,{" "}
          <code>
            s<sub>2</sub> == "ca"
          </code>
          ,{" "}
          <code>
            s<sub>3</sub> == "aca"
          </code>
          , etc.
        </li>
      </ul>

      <p>
        The <strong>score</strong> of{" "}
        <code>
          s<sub>i</sub>
        </code>{" "}
        is the length of the <strong>longest common prefix</strong> between{" "}
        <code>
          s<sub>i</sub>
        </code>{" "}
        and{" "}
        <code>
          s<sub>n</sub>
        </code>{" "}
        (Note that{" "}
        <code>
          s == s<sub>n</sub>
        </code>
        ).
      </p>

      <p>
        Given the final string <code>s</code>, return
        <em>
          {" "}
          the <strong>sum</strong> of the <strong>score</strong> of every{" "}
        </em>
        <code>
          s<sub>i</sub>
        </code>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "babab" <br />
        <strong>Output:</strong> 9<br />
        <strong>Explanation:</strong>
        <br />
        For s<sub>1</sub> == "b", the longest common prefix is "b" which has a
        score of 1.
        <br />
        For s<sub>2</sub> == "ab", there is no common prefix so the score is 0.
        <br />
        For s<sub>3</sub> == "bab", the longest common prefix is "bab" which has
        a score of 3.
        <br />
        For s<sub>4</sub> == "abab", there is no common prefix so the score is
        0.
        <br />
        For s<sub>5</sub> == "babab", the longest common prefix is "babab" which
        has a score of 5.
        <br />
        The sum of the scores is 1 + 0 + 3 + 0 + 5 = 9, so we return 9.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "azbazbzaz"
        <br />
        <strong>Output:</strong> 14
        <br />
        <strong>Explanation:</strong> <br />
        For s<sub>2</sub> == "az", the longest common prefix is "az" which has a
        score of 2.
        <br />
        For s<sub>6</sub> == "azbzaz", the longest common prefix is "azb" which
        has a score of 3.
        <br />
        For s<sub>9</sub> == "azbazbzaz", the longest common prefix is
        "azbazbzaz" which has a score of 9.
        <br />
        For all other s<sub>i</sub>, the score is 0.
        <br />
        The sum of the scores is 2 + 3 + 9 = 14, so we return 14.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of lowercase English letters.
        </li>
      </ul>
    </div>
  ),
  215: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> and an integer <code>k</code>,
        return <em>the</em>{" "}
        <code>
          k<sup>th</sup>
        </code>{" "}
        <em>largest element in the array</em>.
      </p>

      <p>
        Note that it is the{" "}
        <code>
          k<sup>th</sup>
        </code>{" "}
        largest element in the sorted order, not the{" "}
        <code>
          k<sup>th</sup>
        </code>{" "}
        distinct element.
      </p>

      <p>Can you solve it without sorting?</p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [3,2,1,5,6,4], k = 2 <br />
        <strong>Output:</strong> 5
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [3,2,3,1,2,4,5,5,6], k = 4 <br />
        <strong>Output:</strong> 4
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  324: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code>, reorder it such that{" "}
        <code>nums[0] &lt; nums[1] &gt; nums[2] &lt; nums[3]...</code>.
      </p>
      <p>You may assume the input array always has a valid answer.</p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [1,5,1,1,6,4] <br />
        <strong>Output:</strong> [1,6,1,5,1,4] <br />
        <strong>Explanation:</strong> [1,4,1,5,1,6] is also accepted.
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [1,3,2,2,3,1]
        <br />
        <strong>Output:</strong> [2,3,1,3,1,2]
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= nums[i] &lt;= 5000</code>
        </li>
        <li>
          It is guaranteed that there will be an answer for the given input{" "}
          <code>nums</code>.
        </li>
      </ul>
      <p>&nbsp;</p>
      <strong>Follow Up:</strong> Can you do it in <code>O(n)</code> time and/or{" "}
      <strong>in-place</strong> with <code>O(1)</code> extra space?
    </div>
  ),
  347: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> and an integer <code>k</code>,
        return <em>the</em> <code>k</code> <em>most frequent elements</em>. You
        may return the answer in <strong>any order</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [1,1,1,2,2,3], k = 2 <br />
        <strong>Output:</strong> [1,2]
        <br />
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [1], k = 1<br />
        <strong>Output:</strong> [1]
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>k</code> is in the range{" "}
          <code>[1, the number of unique elements in the array]</code>.
        </li>
        <li>
          It is <strong>guaranteed</strong> that the answer is{" "}
          <strong>unique</strong>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong> Your algorithm's time complexity must be
        better than <code>O(n log n)</code>, where n is the array's size.
      </p>
    </div>
  ),
  973: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of <code>points</code> where{" "}
        <code>
          points[i] = [x<sub>i</sub>, y<sub>i</sub>]
        </code>{" "}
        represents a point on the <strong>X-Y</strong> plane and an integer{" "}
        <code>k</code>, return the <code>k</code> closest points to the origin{" "}
        <code>(0, 0)</code>.
      </p>

      <p>
        The distance between two points on the <strong>X-Y</strong> plane is the
        Euclidean distance (i.e.,{" "}
        <code>
          √(x<sub>1</sub> - x<sub>2</sub>)<sup>2</sup> + (y<sub>1</sub> - y
          <sub>2</sub>)<sup>2</sup>
        </code>
        ).
      </p>

      <p>
        You may return the answer in <strong>any order</strong>. The answer is{" "}
        <strong>guaranteed</strong> to be <strong>unique</strong> (except for
        the order that it is in).
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/03/03/closestplane1.jpg"
        style={{ width: 400, height: 400 }}
      />
      <pre>
        <strong>Input:</strong> points = [[1,3],[-2,2]], k = 1 <br />
        <strong>Output:</strong> [[-2,2]]
        <br />
        <strong>Explanation:</strong>
        <br />
        The distance between (1, 3) and the origin is sqrt(10).
        <br />
        The distance between (-2, 2) and the origin is sqrt(8).
        <br />
        Since sqrt(8) &lt; sqrt(10), (-2, 2) is closer to the origin.
        <br />
        We only want the closest k = 1 points from the origin, so the answer is
        just [[-2,2]].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> points = [[3,3],[5,-1],[-2,4]], k = 2<br />
        <strong>Output:</strong> [[3,3],[-2,4]]
        <br />
        <strong>Explanation:</strong> The answer [[-2,4],[3,3]] would also be
        accepted.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= k &lt;= points.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10
            <sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1738: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a 2D <code>matrix</code> of size <code>m x n</code>,
        consisting of non-negative integers. You are also given an integer{" "}
        <code>k</code>.
      </p>

      <p>
        The <strong>value</strong> of coordinate <code>(a, b)</code> of the
        matrix is the XOR of all <code>matrix[i][j]</code> where{" "}
        <code>0 &lt;= i &lt;= a &lt; m</code> and{" "}
        <code>0 &lt;= j &lt;= b &lt; n</code> <strong>(0-indexed)</strong>.
      </p>

      <p>
        Find the{" "}
        <code>
          k<sup>th</sup>
        </code>{" "}
        largest value <strong>(1-indexed)</strong> of all the coordinates of{" "}
        <code>matrix</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> matrix = [[5,2],[1,6]], k = 1 <br />
        <strong>Output:</strong> 7 <br />
        <strong>Explanation:</strong> The value of coordinate (0,1) is 5 XOR 2 =
        7, which is the largest value.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> matrix = [[5,2],[1,6]], k = 2 <br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> The value of coordinate (0,0) is 5 = 5,
        which is the 2nd largest value.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> matrix = [[5,2],[1,6]], k = 3 <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> The value of coordinate (1,0) is 5 XOR 1 =
        4, which is the 3rd largest value.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>m == matrix.length</code>
        </li>
        <li>
          <code>n == matrix[i].length</code>
        </li>
        <li>
          <code>1 &lt;= m, n &lt;= 1000</code>
        </li>
        <li>
          <code>
            0 &lt;= matrix[i][j] &lt;= 10<sup>6</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= m * n</code>
        </li>
      </ul>
    </div>
  ),
  1985: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array of strings <code>nums</code> and an integer{" "}
        <code>k</code>. Each string in <code>nums</code> represents an integer
        without leading zeros.
      </p>

      <p>
        Return <em>the string that represents the </em>
        <code>
          k<sup>th</sup>
        </code>
        <em>
          <strong> largest integer</strong> in{" "}
        </em>
        <code>nums</code>.
      </p>

      <p>
        <strong>Note</strong>: Duplicate numbers should be counted distinctly.
        For example, if <code>nums</code> is <code>["1","2","2"]</code>,{" "}
        <code>"2"</code> is the first largest integer, <code>"2"</code> is the
        second-largest integer, and <code>"1"</code> is the third-largest
        integer.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = ["3","6","7","10"], k = 4 <br />
        <strong>Output:</strong> "3" <br />
        <strong>Explanation:</strong> <br />
        The numbers in nums sorted in non-decreasing order are
        ["3","6","7","10"]. <br />
        The 4<sup>th</sup> largest integer in nums is "3".
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = ["2","21","12","1"], k = 3 <br />
        <strong>Output:</strong> "2" <br />
        <strong>Explanation:</strong> <br />
        The numbers in nums sorted in non-decreasing order are
        ["1","2","12","21"]. <br />
        The 3<sup>rd</sup> largest integer in nums is "2".
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = ["0","0"], k = 2 <br />
        <strong>Output:</strong> "0" <br />
        <strong>Explanation:</strong> <br />
        The numbers in nums sorted in non-decreasing order are ["0","0"]. <br />
        The 2<sup>nd</sup> largest integer in nums is "0".
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= k &lt;= nums.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= nums[i].length &lt;= 100</code>
        </li>
        <li>
          <code>nums[i]</code> consists of only digits.
        </li>
        <li>
          <code>nums[i]</code> will not have any leading zeros.
        </li>
      </ul>
    </div>
  ),
  808: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        There are two types of soup: <strong>type A</strong> and{" "}
        <strong>type B</strong>. Initially, we have <code>n</code> ml of each
        type of soup. There are four kinds of operations:
      </p>

      <ul>
        <li>
          Serve <code>100</code> ml of <strong>soup A</strong> and{" "}
          <code>0</code> ml of <strong>soup B</strong>,
        </li>
        <li>
          Serve <code>75</code> ml of <strong>soup A</strong> and{" "}
          <code>25</code> ml of <strong>soup B</strong>,
        </li>
        <li>
          Serve <code>50</code> ml of <strong>soup A</strong> and{" "}
          <code>50</code> ml of <strong>soup B</strong>, and
        </li>
        <li>
          Serve <code>25</code> ml of <strong>soup A</strong> and{" "}
          <code>75</code> ml of <strong>soup B</strong>.
        </li>
      </ul>

      <p>
        When we serve some soup, we give it to someone, and we no longer have
        it. Each turn, we will choose from the four operations with an equal
        probability <code>0.25</code>. If the remaining volume of soup is not
        enough to complete the operation, we will serve as much as possible. We
        stop once we no longer have some quantity of both types of soup.
      </p>

      <p>
        <strong>Note</strong> that we do not have an operation where all{" "}
        <code>100</code> ml's of <strong>soup B</strong> are used first.
      </p>

      <p>
        Return{" "}
        <em>
          the probability that <strong>soup A</strong> will be empty first, plus
          half the probability that <strong>A</strong> and <strong>B</strong>{" "}
          become empty at the same time
        </em>
        . Answers within{" "}
        <code>
          10<sup>-5</sup>
        </code>{" "}
        of the actual answer will be accepted.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 50 <br />
        <strong>Output:</strong> 0.62500
        <br />
        <strong>Explanation:</strong> If we choose the first two operations, A
        will become empty first.
        <br />
        For the third operation, A and B will become empty at the same time.
        <br />
        For the fourth operation, B will become empty first.
        <br />
        So the total probability of A becoming empty first plus half the
        probability that A and B become empty at the same time, is 0.25 * (1 + 1
        + 0.5 + 0) = 0.625.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 100
        <br />
        <strong>Output:</strong> 0.71875
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            0 &lt;= n &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  837: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Alice plays the following game, loosely based on the card game{" "}
        <strong>"21"</strong>.
      </p>

      <p>
        Alice starts with <code>0</code> points and draws numbers while she has
        less than <code>k</code> points. During each draw, she gains an integer
        number of points randomly from the range <code>[1, maxPts]</code>, where{" "}
        <code>maxPts</code> is an integer. Each draw is independent and the
        outcomes have equal probabilities.
      </p>

      <p>
        Alice stops drawing numbers when she gets <code>k</code>{" "}
        <strong>or more points</strong>.
      </p>

      <p>
        Return the probability that Alice has <code>n</code> or fewer points.
      </p>

      <p>
        Answers within{" "}
        <code>
          10<sup>-5</sup>
        </code>{" "}
        of the actual answer are considered accepted.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 10, k = 1, maxPts = 10 <br />
        <strong>Output:</strong> 1.00000
        <br />
        <strong>Explanation:</strong> Alice gets a single card, then stops.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 6, k = 1, maxPts = 10
        <br />
        <strong>Output:</strong> 0.60000
        <br />
        <strong>Explanation:</strong> Alice gets a single card, then stops. In 6
        out of 10 possibilities, she is at or below 6 points.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 21, k = 17, maxPts = 10
        <br />
        <strong>Output:</strong> 0.73278
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            0 &lt;= k &lt;= n &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= maxPts &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1093: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a large sample of integers in the range{" "}
        <code>[0, 255]</code>. Since the sample is so large, it is represented
        by an array <code>count</code>&nbsp;where <code>count[k]</code> is the{" "}
        <strong>number of times</strong> that <code>k</code> appears in the
        sample.
      </p>

      <p>Calculate the following statistics:</p>

      <ul>
        <li>
          <code>minimum</code>: The minimum element in the sample.
        </li>
        <li>
          <code>maximum</code>: The maximum element in the sample.
        </li>
        <li>
          <code>mean</code>: The average of the sample, calculated as the total
          sum of all elements divided by the total number of elements.
        </li>
        <li>
          <code>median</code>:
          <ul>
            <li>
              If the sample has an odd number of elements, then the{" "}
              <code>median</code> is the middle element once the sample is
              sorted.
            </li>
            <li>
              If the sample has an even number of elements, then the{" "}
              <code>median</code> is the average of the two middle elements once
              the sample is sorted.
            </li>
          </ul>
        </li>
        <li>
          <code>mode</code>: The number that appears the most in the sample. It
          is guaranteed to be <strong>unique</strong>.
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the statistics of the sample as an array of floating-point numbers{" "}
        </em>
        <code>[minimum, maximum, mean, median, mode]</code>
        <em>. Answers within </em>
        <code>
          10<sup>-5</sup>
        </code>
        <em> of the actual answer will be accepted.</em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> count = [0,1,3,4,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 <br />
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 <br />
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 <br />
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 <br />
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 <br />
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 <br />
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        <br /> <strong>Output:</strong>{" "}
        [1.00000,3.00000,2.37500,2.50000,3.00000]
        <br />
        <strong>Explanation:</strong> The sample represented by count is
        [1,2,2,2,3,3,3,3].
        <br />
        The minimum and maximum are 1 and 3 respectively.
        <br />
        The mean is (1+2+2+2+3+3+3+3) / 8 = 19 / 8 = 2.375.
        <br />
        Since the size of the sample is even, the median is the average of the
        two middle elements 2 and 3, which is 2.5.
        <br />
        The mode is 3 as it appears the most in the sample.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> count = [0,4,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0{" "}
        <br />
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        <br />
        0,0,0,0,0,0,0 ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 <br />
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 <br />
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 <br />
        ,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, <br />
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        <br />
        <strong>Output:</strong> [1.00000,4.00000,2.18182,2.00000,1.00000]
        <br />
        <strong>Explanation:</strong> The sample represented by count is
        [1,1,1,1,2,2,2,3,3,4,4].
        <br />
        The minimum and maximum are 1 and 4 respectively.
        <br />
        The mean is (1+1+1+1+2+2+2+3+3+4+4) / 11 = 24 / 11 = 2.18181818... (for
        display purposes, the output shows the rounded number 2.18182).
        <br />
        Since the size of the sample is odd, the median is the middle element 2.
        <br />
        The mode is 1 as it appears the most in the sample.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>count.length == 256</code>
        </li>
        <li>
          <code>
            0 &lt;= count[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= sum(count) &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          The mode of the sample that <code>count</code> represents is{" "}
          <strong>unique</strong>.
        </li>
      </ul>
    </div>
  ),
  1227: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        <code>n</code> passengers board an airplane with exactly <code>n</code>{" "}
        seats. The first passenger has lost the ticket and picks a seat
        randomly. But after that, the rest of the passengers will:
      </p>

      <ul>
        <li>Take their own seat if it is still available, and</li>
        <li>Pick other seats randomly when they find their seat occupied</li>
      </ul>

      <p>
        Return <em>the probability that the </em>
        <code>
          n<sup>th</sup>
        </code>
        <em> person gets his own seat</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 1<br />
        <strong>Output:</strong> 1.00000 <br />
        <strong>Explanation: </strong>The first person can only get the first
        seat.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 2<br />
        <strong>Output:</strong> 0.50000
        <br />
        <strong>Explanation: </strong>The second person has a probability of 0.5
        to get the second seat (when first person gets the first seat).
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1467: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given <code>2n</code> balls of <code>k</code> distinct colors. You will
        be given an integer array <code>balls</code> of size <code>k</code>{" "}
        where <code>balls[i]</code> is the number of balls of color{" "}
        <code>i</code>.
      </p>

      <p>
        All the balls will be <strong>shuffled uniformly at random</strong>,
        then we will distribute the first <code>n</code> balls to the first box
        and the remaining <code>n</code> balls to the other box (Please read the
        explanation of the second example carefully).
      </p>

      <p>
        Please note that the two boxes are considered different. For example, if
        we have two balls of colors <code>a</code> and <code>b</code>, and two
        boxes <code>[]</code> and <code>()</code>, then the distribution{" "}
        <code>[a] (b)</code> is considered different than the distribution{" "}
        <code>[b] (a) </code>(Please read the explanation of the first example
        carefully).
      </p>

      <p>
        Return<em> the probability</em> that the two boxes have the same number
        of distinct balls. Answers within{" "}
        <code>
          10<sup>-5</sup>
        </code>{" "}
        of the actual value will be accepted as correct.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> balls = [1,1] <br />
        <strong>Output:</strong> 1.00000 <br />
        <strong>Explanation:</strong> Only 2 ways to divide the balls equally:{" "}
        <br />
        - A ball of color 1 to box 1 and a ball of color 2 to box 2 <br />
        - A ball of color 2 to box 1 and a ball of color 1 to box 2 <br />
        In both ways, the number of distinct colors in each box is equal. The
        probability is 2/2 = 1
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> balls = [2,1,1] <br />
        <strong>Output:</strong> 0.66667 <br />
        <strong>Explanation:</strong> We have the set of balls [1, 1, 2, 3]{" "}
        <br />
        This set of balls will be shuffled randomly and we may have one of the
        12 distinct shuffles with equal probability (i.e. 1/12): <br />
        [1,1 / 2,3], [1,1 / 3,2], [1,2 / 1,3], [1,2 / 3,1], [1,3 / 1,2], [1,3 /{" "}
        <br />
        2,1], [2,1 / 1,3], [2,1 / 3,1], [2,3 / 1,1], [3,1 / 1,2], [3,1 / 2,1],{" "}
        <br />
        [3,2 / 1,1] <br />
        After that, we add the first two balls to the first box and the second
        two balls to the second box. <br />
        We can see that 8 of these 12 possible random distributions have the
        same number of distinct colors of balls in each box. <br />
        Probability is 8/12 = 0.66667
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> balls = [1,2,1,2] <br />
        <strong>Output:</strong> 0.60000 <br />
        <strong>Explanation:</strong> The set of balls is [1, 2, 2, 3, 4, 4]. It
        is hard to display all the 180 possible random shuffles of this set but
        it is easy to check that 108 of them will have the same number of
        distinct colors in each box. Probability = 108 / 180 = 0.6
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= balls.length &lt;= 8</code>
        </li>
        <li>
          <code>1 &lt;= balls[i] &lt;= 6</code>
        </li>
        <li>
          <code>sum(balls)</code> is even.
        </li>
      </ul>
    </div>
  ),
  146: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Design a data structure that follows the constraints of a{" "}
        <strong>
          <a
            href="https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU"
            target="_blank"
            rel="noreferrer"
          >
            Least Recently Used (LRU) cache
          </a>
        </strong>
        .
      </p>

      <p>
        Implement the <code>LRUCache</code> class:
      </p>

      <ul>
        <li>
          <code>LRUCache(int capacity)</code> Initialize the LRU cache with{" "}
          <strong>positive</strong> size <code>capacity</code>.
        </li>
        <li>
          <code>int get(int key)</code> Return the value of the <code>key</code>{" "}
          if the key exists, otherwise return <code>-1</code>.
        </li>
        <li>
          <code>void put(int key, int value)</code> Update the value of the{" "}
          <code>key</code> if the <code>key</code> exists. Otherwise, add the{" "}
          <code>key-value</code> pair to the cache. If the number of keys
          exceeds the <code>capacity</code> from this operation,{" "}
          <strong>evict</strong> the least recently used key.
        </li>
      </ul>

      <p>
        The functions <code>get</code> and <code>put</code> must each run in{" "}
        <code>O(1)</code> average time complexity.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input</strong> <br />
        ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get",
        "get"] <br />
        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]] <br />
        <strong>Output</strong> <br />
        [null, null, null, 1, null, -1, null, -1, 3, 4] <br />
        <strong>Explanation</strong> <br />
        LRUCache lRUCache = new LRUCache(2); <br />
        lRUCache.put(1, 1); // cache is &#123;1=1&#125; <br />
        lRUCache.put(2, 2); // cache is &#123;1=1, 2=2&#125; <br />
        lRUCache.get(1); // return 1 <br />
        lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is &#123;1=1,
        3=3&#125; <br />
        lRUCache.get(2); // returns -1 (not found) <br />
        lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is &#123;4=4,
        3=3&#125; <br />
        lRUCache.get(1); // return -1 (not found) <br />
        lRUCache.get(3); // return 3 <br />
        lRUCache.get(4); // return 4
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= capacity &lt;= 3000</code>
        </li>
        <li>
          <code>
            0 &lt;= key &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= value &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          At most{" "}
          <code>
            2 * 10<sup>5</sup>
          </code>{" "}
          calls will be made to <code>get</code> and <code>put</code>.
        </li>
      </ul>
    </div>
  ),
  432: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Design a data structure to store the strings' count with the ability to
        return the strings with minimum and maximum counts.
      </p>

      <p>
        Implement the <code>AllOne</code> class:
      </p>

      <ul>
        <li>
          <code>AllOne()</code> Initializes the object of the data structure.
        </li>
        <li>
          <code>inc(String key)</code> Increments the count of the string{" "}
          <code>key</code> by <code>1</code>. If <code>key</code> does not exist
          in the data structure, insert it with count <code>1</code>.
        </li>
        <li>
          <code>dec(String key)</code> Decrements the count of the string{" "}
          <code>key</code> by <code>1</code>. If the count of <code>key</code>{" "}
          is <code>0</code> after the decrement, remove it from the data
          structure. It is guaranteed that <code>key</code> exists in the data
          structure before the decrement.
        </li>
        <li>
          <code>getMaxKey()</code> Returns one of the keys with the maximal
          count. If no element exists, return an empty string <code>""</code>.
        </li>
        <li>
          <code>getMinKey()</code> Returns one of the keys with the minimum
          count. If no element exists, return an empty string <code>""</code>.
        </li>
      </ul>

      <p>
        <strong>Note</strong> that each function must run in <code>O(1)</code>{" "}
        average time complexity.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input</strong> <br />
        ["AllOne", "inc", "inc", "getMaxKey", "getMinKey", "inc", "getMaxKey",
        "getMinKey"]
        <br />
        [[], ["hello"], ["hello"], [], [], ["leet"], [], []]
        <br />
        <strong>Output</strong>
        <br />
        [null, null, null, "hello", "hello", null, "hello", "leet"]
        <br />
        <strong>Explanation</strong>
        <br />
        AllOne allOne = new AllOne();
        <br />
        allOne.inc("hello");
        <br />
        allOne.inc("hello");
        <br />
        allOne.getMaxKey(); // return "hello"
        <br />
        allOne.getMinKey(); // return "hello"
        <br />
        allOne.inc("leet");
        <br />
        allOne.getMaxKey(); // return "hello"
        <br />
        allOne.getMinKey(); // return "leet"
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= key.length &lt;= 10</code>
        </li>
        <li>
          <code>key</code> consists of lowercase English letters.
        </li>
        <li>
          It is guaranteed that for each call to <code>dec</code>,{" "}
          <code>key</code> is existing in the data structure.
        </li>
        <li>
          At most{" "}
          <code>
            5 * 10<sup>4</sup>
          </code>
          &nbsp;calls will be made to <code>inc</code>, <code>dec</code>,{" "}
          <code>getMaxKey</code>, and <code>getMinKey</code>.
        </li>
      </ul>
    </div>
  ),
  460: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Design and implement a data structure for a{" "}
        <a
          href="https://en.wikipedia.org/wiki/Least_frequently_used"
          target="_blank"
          rel="noreferrer"
        >
          Least Frequently Used (LFU)
        </a>{" "}
        cache.
      </p>

      <p>
        Implement the <code>LFUCache</code> class:
      </p>

      <ul>
        <li>
          <code>LFUCache(int capacity)</code> Initializes the object with the{" "}
          <code>capacity</code> of the data structure.
        </li>
        <li>
          <code>int get(int key)</code> Gets the value of the <code>key</code>{" "}
          if the <code>key</code> exists in the cache. Otherwise, returns{" "}
          <code>-1</code>.
        </li>
        <li>
          <code>void put(int key, int value)</code> Update the value of the{" "}
          <code>key</code> if present, or inserts the <code>key</code> if not
          already present. When the cache reaches its <code>capacity</code>, it
          should invalidate and remove the{" "}
          <strong>least frequently used</strong> key before inserting a new
          item. For this problem, when there is a <strong>tie</strong> (i.e.,
          two or more keys with the same frequency), the{" "}
          <strong>least recently used</strong> <code>key</code> would be
          invalidated.
        </li>
      </ul>

      <p>
        To determine the least frequently used key, a{" "}
        <strong>use counter</strong> is maintained for each key in the cache.
        The key with the smallest <strong>use counter</strong> is the least
        frequently used key.
      </p>

      <p>
        When a key is first inserted into the cache, its{" "}
        <strong>use counter</strong> is set to <code>1</code> (due to the{" "}
        <code>put</code> operation). The <strong>use counter</strong> for a key
        in the cache is incremented either a <code>get</code> or{" "}
        <code>put</code> operation is called on it.
      </p>

      <p>
        The functions&nbsp;<code data-stringify-type="code">get</code>
        &nbsp;and&nbsp;<code data-stringify-type="code">put</code>&nbsp;must
        each run in <code>O(1)</code> average time complexity.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input</strong> <br />
        ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get",
        "get", "get"]
        <br />
        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
        <br />
        <strong>Output</strong>
        <br />
        [null, null, null, 1, null, -1, 3, null, -1, 3, 4]
        <br />
        <strong>Explanation</strong> <br />
        // cnt(x) = the use counter for key x<br />
        // cache=[] will show the last used order for tiebreakers (leftmost
        element is most recent)
        <br />
        LFUCache lfu = new LFUCache(2);
        <br />
        lfu.put(1, 1); // cache=[1,_], cnt(1)=1
        <br />
        lfu.put(2, 2); // cache=[2,1], cnt(2)=1, cnt(1)=1
        <br />
        lfu.get(1); // return 1<br />
        // cache=[1,2], cnt(2)=1, cnt(1)=2
        <br />
        lfu.put(3, 3); // 2 is the LFU key because cnt(2)=1 is the smallest,
        invalidate 2.
        <br />
        &nbsp; // cache=[3,1], cnt(3)=1, cnt(1)=2
        <br />
        lfu.get(2); // return -1 (not found)
        <br />
        lfu.get(3); // return 3<br />
        // cache=[3,1], cnt(3)=2, cnt(1)=2
        <br />
        lfu.put(4, 4); // Both 1 and 3 have the same cnt, but 1 is LRU,
        invalidate 1.
        <br />
        // cache=[4,3], cnt(4)=1, cnt(3)=2
        <br />
        lfu.get(1); // return -1 (not found)
        <br />
        lfu.get(3); // return 3<br />
        // cache=[3,4], cnt(4)=1, cnt(3)=3
        <br />
        lfu.get(4); // return 4<br />
        // cache=[4,3], cnt(4)=2, cnt(3)=3
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= capacity&nbsp;&lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= key &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= value &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          At most{" "}
          <code>
            2 * 10<sup>5</sup>
          </code>
          &nbsp;calls will be made to <code>get</code> and <code>put</code>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <span style={{ display: "none" }}>&nbsp;</span>
    </div>
  ),
  430: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a doubly linked list, which contains nodes that have a
        next pointer, a previous pointer, and an additional{" "}
        <strong>child pointer</strong>. This child pointer may or may not point
        to a separate doubly linked list, also containing these special nodes.
        These child lists may have one or more children of their own, and so on,
        to produce a <strong>multilevel data structure</strong> as shown in the
        example below.
      </p>
      <p>
        Given the <code>head</code> of the first level of the list,{" "}
        <strong>flatten</strong> the list so that all the nodes appear in a
        single-level, doubly linked list. Let <code>curr</code> be a node with a
        child list. The nodes in the child list should appear{" "}
        <strong>after</strong> <code>curr</code> and <strong>before</strong>{" "}
        <code>curr.next</code> in the flattened list.
      </p>
      <p>
        Return <em>the </em>
        <code>head</code>
        <em>
          {" "}
          of the flattened list. The nodes in the list must have{" "}
          <strong>all</strong> of their child pointers set to{" "}
        </em>
        <code>null</code>.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>{" "}
      <br />
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/11/09/flatten11.jpg"
        style={{ width: "700px", height: "339px" }}
      />
      <br />
      <pre>
        <strong>Input:</strong> head =
        [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
        <br />
        <strong>Output:</strong> [1,2,3,7,8,11,12,9,10,4,5,6]
        <br />
        <strong>Explanation:</strong> The multilevel linked list in the input is
        shown.
        <br />
        After flattening the multilevel linked list it becomes:
        <br />
        <img
          src="https://assets.leetcode.com/uploads/2021/11/09/flatten12.jpg"
          style={{ width: 1000, height: 69 }}
          alt="img"
        />
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <br />
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/11/09/flatten2.1jpg"
        style={{ width: 200, height: 200 }}
      />
      <br />
      <pre>
        <strong>Input:</strong> head = [1,2,null,3]
        <br />
        <strong>Output:</strong> [1,3,2]
        <br />
        <strong>Explanation:</strong> The multilevel linked list in the input is
        shown.
        <br />
        After flattening the multilevel linked list it becomes:
        <br />
        <img
          src="https://assets.leetcode.com/uploads/2021/11/24/list.jpg"
          style={{ width: 300, height: 87 }}
          alt="img"
        />
      </pre>
      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <br />
      <pre>
        <strong>Input:</strong> head = []
        <br />
        <strong>Output:</strong> []
        <br />
        <strong>Explanation:</strong> There could be empty list in the input.
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          The number of Nodes will not exceed <code>1000</code>.
        </li>
        <li>
          <code>
            1 &lt;= Node.val &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        <strong>
          How the multilevel linked list is represented in test cases:
        </strong>
      </p>
      <p>
        We use the multilevel linked list from <strong>Example 1</strong> above:
      </p>
      <pre>
        {` 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL`}
      </pre>
      <p>The serialization of each level is as follows:</p>
      <pre>
        [1,2,3,4,5,6,null] <br />
        [7,8,9,10,null] <br />
        [11,12,null]
      </pre>
      <p>
        To serialize all levels together, we will add nulls in each level to
        signify no node connects to the upper node of the previous level. The
        serialization becomes:
      </p>
      <pre>
        {`[1,    2,    3, 4, 5, 6, null] 
             |
[null, null, 7,    8, 9, 10, null]
                   |
[            null, 11, 12, null]`}
      </pre>
      <p>
        Merging the serialization of each level and removing trailing nulls we
        obtain:
      </p>
      <pre>[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]</pre>
    </div>
  ),
  1472: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You have a <strong>browser</strong> of one tab where you start on the{" "}
        <code>homepage</code> and you can visit another <code>url</code>, get
        back in the history number of <code>steps</code> or move forward in the
        history number of <code>steps</code>.
      </p>
      <p>
        Implement the <code>BrowserHistory</code> class:
      </p>
      <ul>
        <li>
          <code>BrowserHistory(string homepage)</code> Initializes the object
          with the <code>homepage</code>&nbsp;of the browser.
        </li>
        <li>
          <code>void visit(string url)</code>&nbsp;Visits&nbsp;<code>url</code>{" "}
          from the current page. It clears up all the forward history.
        </li>
        <li>
          <code>string back(int steps)</code>&nbsp;Move <code>steps</code> back
          in history. If you can only return <code>x</code> steps in the history
          and <code>steps &gt; x</code>, you will&nbsp;return only{" "}
          <code>x</code> steps. Return the current <code>url</code>&nbsp;after
          moving back in history <strong>at most</strong> <code>steps</code>.
        </li>
        <li>
          <code>string forward(int steps)</code>&nbsp;Move <code>steps</code>{" "}
          forward in history. If you can only forward <code>x</code> steps in
          the history and <code>steps &gt; x</code>, you will&nbsp;forward
          only&nbsp;<code>x</code> steps. Return the current <code>url</code>
          &nbsp;after forwarding in history <strong>at most</strong>{" "}
          <code>steps</code>.
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example:</strong>
      </p>{" "}
      <br />
      <pre>
        <strong>Input:</strong>
        <br />
        ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
        <br />
        [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
        <br />
        <br />
        <strong>Output:</strong>
        <br />
        [null,null,null,null,"facebook.com","google.com","facebook.com",null,"linkedin.com","google.com","leetcode.com"]
        <br />
        <br />
        <strong>Explanation:</strong>
        <br />
        BrowserHistory browserHistory = new BrowserHistory("leetcode.com");
        <br />
        browserHistory.visit("google.com"); // You are in "leetcode.com". Visit
        "google.com"
        <br />
        browserHistory.visit("facebook.com"); // You are in "google.com". Visit
        "facebook.com"
        <br />
        browserHistory.visit("youtube.com"); // You are in "facebook.com". Visit
        "youtube.com"
        <br />
        browserHistory.back(1); // You are in "youtube.com", move back to
        "facebook.com" return "facebook.com"
        <br />
        browserHistory.back(1); // You are in "facebook.com", move back to
        "google.com" return "google.com"
        <br />
        browserHistory.forward(1); // You are in "google.com", move forward to
        "facebook.com" return "facebook.com"
        <br />
        browserHistory.visit("linkedin.com"); // You are in "facebook.com".
        Visit "linkedin.com"
        <br />
        browserHistory.forward(2); // You are in "linkedin.com", you cannot move
        forward any steps.
        <br />
        browserHistory.back(2); // You are in "linkedin.com", move back two
        steps to "facebook.com" then to "google.com". return "google.com"
        <br />
        browserHistory.back(7); // You are in "google.com", you can move back
        only one step to "leetcode.com". return "leetcode.com"
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>1 &lt;= homepage.length &lt;= 20</code>
        </li>
        <li>
          <code>1 &lt;= url.length &lt;= 20</code>
        </li>
        <li>
          <code>1 &lt;= steps &lt;= 100</code>
        </li>
        <li>
          <code>homepage</code> and <code>url</code> consist of&nbsp; '.' or
          lower case English letters.
        </li>
        <li>
          At most <code>5000</code>&nbsp;calls will be made to{" "}
          <code>visit</code>, <code>back</code>, and <code>forward</code>.
        </li>
      </ul>
    </div>
  ),
  2296: (
    <div class="elfjS" data-track-load="description_content">
      <p>Design a text editor with a cursor that can do the following:</p>

      <ul>
        <li>
          <strong>Add</strong> text to where the cursor is.
        </li>
        <li>
          <strong>Delete</strong> text from where the cursor is (simulating the
          backspace key).
        </li>
        <li>
          <strong>Move</strong> the cursor either left or right.
        </li>
      </ul>

      <p>
        When deleting text, only characters to the left of the cursor will be
        deleted. The cursor will also remain within the actual text and cannot
        be moved beyond it. More formally, we have that{" "}
        <code>0 &lt;= cursor.position &lt;= currentText.length</code> always
        holds.
      </p>

      <p>
        Implement the <code>TextEditor</code> class:
      </p>

      <ul>
        <li>
          <code>TextEditor()</code> Initializes the object with empty text.
        </li>
        <li>
          <code>void addText(string text)</code> Appends <code>text</code> to
          where the cursor is. The cursor ends to the right of <code>text</code>
          .
        </li>
        <li>
          <code>int deleteText(int k)</code> Deletes <code>k</code> characters
          to the left of the cursor. Returns the number of characters actually
          deleted.
        </li>
        <li>
          <code>string cursorLeft(int k)</code> Moves the cursor to the left{" "}
          <code>k</code> times. Returns the last <code>min(10, len)</code>{" "}
          characters to the left of the cursor, where <code>len</code> is the
          number of characters to the left of the cursor.
        </li>
        <li>
          <code>string cursorRight(int k)</code> Moves the cursor to the right{" "}
          <code>k</code> times. Returns the last <code>min(10, len)</code>{" "}
          characters to the left of the cursor, where <code>len</code> is the
          number of characters to the left of the cursor.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input</strong> <br />
        ["TextEditor", "addText", "deleteText", "addText", "cursorRight",
        "cursorLeft", "deleteText", "cursorLeft", "cursorRight"] <br />
        [[], ["leetcode"], [4], ["practice"], [3], [8], [10], [2], [6]] <br />{" "}
        <br />
        <strong>Output</strong> <br />
        [null, null, 4, null, "etpractice", "leet", 4, "", "practi"] <br />{" "}
        <br />
        <strong>Explanation</strong> <br />
        TextEditor textEditor = new TextEditor(); // The current text is "|".
        (The '|' character represents the cursor) <br />
        textEditor.addText("leetcode"); // The current text is "leetcode|".{" "}
        <br />
        textEditor.deleteText(4); // return 4 <br />
        // The current text is "leet|". <br />
        // 4 characters were deleted. <br />
        textEditor.addText("practice"); // The current text is "leetpractice|".{" "}
        <br />
        textEditor.cursorRight(3); // return "etpractice" <br />
        // The current text is "leetpractice|". <br />
        // The cursor cannot be moved beyond the actual text and thus did not
        move. <br />
        // "etpractice" is the last 10 characters to the left of the cursor.{" "}
        <br />
        textEditor.cursorLeft(8); // return "leet" <br />
        // The current text is "leet|practice". <br />
        // "leet" is the last min(10, 4) = 4 characters to the left of the
        cursor. <br />
        textEditor.deleteText(10); // return 4 <br />
        // The current text is "|practice". <br />
        // Only 4 characters were deleted. <br />
        textEditor.cursorLeft(2); // return "" <br />
        // The current text is "|practice". <br />
        // The cursor cannot be moved beyond the actual text and thus did not
        move. <br />
        // "" is the last min(10, 0) = 0 characters to the left of the cursor.{" "}
        <br />
        textEditor.cursorRight(6); // return "practi" <br />
        // The current text is "practi|ce". <br />
        // "practi" is the last min(10, 6) = 6 characters to the left of the
        cursor.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= text.length, k &lt;= 40</code>
        </li>
        <li>
          <code>text</code> consists of lowercase English letters.
        </li>
        <li>
          At most{" "}
          <code>
            2 * 10<sup>4</sup>
          </code>{" "}
          calls <strong>in total</strong> will be made to <code>addText</code>,{" "}
          <code>deleteText</code>, <code>cursorLeft</code> and{" "}
          <code>cursorRight</code>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow-up:</strong> Could you find a solution with time
        complexity of <code>O(k)</code> per call?
      </p>
    </div>
  ),
  1114: (
    <div class="elfjS" data-track-load="description_content">
      <p>Suppose we have a class:</p>
      <pre>
        public class Foo &#123; <br />
        &nbsp; public void first() &#123; print("first"); &#125;
        <br />
        &nbsp; public void second() &#123; print("second"); &#125;
        <br />
        &nbsp; public void third() &#123; print("third"); &#125;
        <br />
        &#125;
      </pre>
      <p>
        The same instance of <code>Foo</code> will be passed to three different
        threads. Thread A will call <code>first()</code>, thread B will call{" "}
        <code>second()</code>, and thread C will call <code>third()</code>.
        Design a mechanism and modify the program to ensure that{" "}
        <code>second()</code> is executed after <code>first()</code>, and{" "}
        <code>third()</code> is executed after <code>second()</code>.
      </p>
      <p>
        <strong>Note:</strong>
      </p>
      <p>
        We do not know how the threads will be scheduled in the operating
        system, even though the numbers in the input seem to imply the ordering.
        The input format you see is mainly to ensure our tests'
        comprehensiveness.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>{" "}
      <pre>
        <strong>Input:</strong> nums = [1,2,3] <br />
        <strong>Output:</strong> "firstsecondthird" <br />
        <strong>Explanation:</strong> There are three threads being fired
        asynchronously. The input [1,2,3] means thread A calls first(), thread B
        calls second(), and thread C calls third(). "firstsecondthird" is the
        correct output.
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>{" "}
      <pre>
        <strong>Input:</strong> nums = [1,3,2] <br />
        <strong>Output:</strong> "firstsecondthird" <br />
        <strong>Explanation:</strong> The input [1,3,2] means thread A calls
        first(), thread B calls third(), and thread C calls second().
        "firstsecondthird" is the correct output.
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>nums</code> is a permutation of <code>[1, 2, 3]</code>.
        </li>
      </ul>
    </div>
  ),
  1115: (
    <div class="elfjS" data-track-load="description_content">
      <p>Suppose you are given the following code:</p>

      <pre>
        class FooBar &#123; <br />
        &nbsp; public void foo() &#123;
        <br />
        &nbsp;&nbsp;&nbsp;for (int i = 0; i &lt; n; i++) &#123;
        <br />
        &nbsp; &nbsp;&nbsp;&nbsp;print("foo");
        <br />
        &nbsp;&nbsp; &#125;
        <br />
        &nbsp;&nbsp;&#125;
        <br />
        &nbsp; public void bar() &#123; &nbsp; <br />
        &nbsp;&nbsp;&nbsp;for (int i = 0; i &lt; n; i++) &#123;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("bar");
        <br />
        &nbsp;&nbsp; &#125;
        <br />
        &nbsp; &#125;
        <br />
        &#125;
      </pre>

      <p>
        The same instance of <code>FooBar</code> will be passed to two different
        threads:
      </p>

      <ul>
        <li>
          thread <code>A</code> will call <code>foo()</code>, while
        </li>
        <li>
          thread <code>B</code> will call <code>bar()</code>.
        </li>
      </ul>

      <p>
        Modify the given program to output <code>"foobar"</code> <code>n</code>{" "}
        times.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 1 <br />
        <strong>Output:</strong> "foobar" <br />
        <strong>Explanation:</strong> There are two threads being fired
        asynchronously. One of them calls foo(), while the other calls bar().
        "foobar" is being output 1 time.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 2 <br />
        <strong>Output:</strong> "foobarfoobar" <br />
        <strong>Explanation:</strong> "foobar" is being output 2 times.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= n &lt;= 1000</code>
        </li>
      </ul>
    </div>
  ),
  1116: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You have a function <code>printNumber</code> that can be called with an
        integer parameter and prints it to the console.
      </p>

      <ul>
        <li>
          For example, calling <code>printNumber(7)</code> prints <code>7</code>{" "}
          to the console.
        </li>
      </ul>

      <p>
        You are given an instance of the class <code>ZeroEvenOdd</code> that has
        three functions: <code>zero</code>, <code>even</code>, and{" "}
        <code>odd</code>. The same instance of <code>ZeroEvenOdd</code> will be
        passed to three different threads:
      </p>

      <ul>
        <li>
          <strong>Thread A:</strong> calls <code>zero()</code> that should only
          output <code>0</code>'s.
        </li>
        <li>
          <strong>Thread B:</strong> calls <code>even()</code> that should only
          output even numbers.
        </li>
        <li>
          <strong>Thread C:</strong> calls <code>odd()</code> that should only
          output odd numbers.
        </li>
      </ul>

      <p>
        Modify the given class to output the series{" "}
        <code>"010203040506..."</code> where the length of the series must be{" "}
        <code>2n</code>.
      </p>

      <p>
        Implement the <code>ZeroEvenOdd</code> class:
      </p>

      <ul>
        <li>
          <code>ZeroEvenOdd(int n)</code> Initializes the object with the number{" "}
          <code>n</code> that represents the numbers that should be printed.
        </li>
        <li>
          <code>void zero(printNumber)</code> Calls <code>printNumber</code> to
          output one zero.
        </li>
        <li>
          <code>void even(printNumber)</code> Calls <code>printNumber</code> to
          output one even number.
        </li>
        <li>
          <code>void odd(printNumber)</code> Calls <code>printNumber</code> to
          output one odd number.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 2 <br />
        <strong>Output:</strong> "0102" <br />
        <strong>Explanation:</strong> There are three threads being fired
        asynchronously. <br />
        One of them calls zero(), the other calls even(), and the last one calls
        odd(). <br />
        "0102" is the correct output.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 5 <br />
        <strong>Output:</strong> "0102030405"
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= n &lt;= 1000</code>
        </li>
      </ul>
    </div>
  ),
  1117: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        There are two kinds of threads: <code>oxygen</code> and{" "}
        <code>hydrogen</code>. Your goal is to group these threads to form water
        molecules.
      </p>

      <p>
        There is a barrier where each thread has to wait until a complete
        molecule can be formed. Hydrogen and oxygen threads will be given{" "}
        <code>releaseHydrogen</code> and <code>releaseOxygen</code> methods
        respectively, which will allow them to pass the barrier. These threads
        should pass the barrier in groups of three, and they must immediately
        bond with each other to form a water molecule. You must guarantee that
        all the threads from one molecule bond before any other threads from the
        next molecule do.
      </p>

      <p>In other words:</p>

      <ul>
        <li>
          If an oxygen thread arrives at the barrier when no hydrogen threads
          are present, it must wait for two hydrogen threads.
        </li>
        <li>
          If a hydrogen thread arrives at the barrier when no other threads are
          present, it must wait for an oxygen thread and another hydrogen
          thread.
        </li>
      </ul>

      <p>
        We do not have to worry about matching the threads up explicitly; the
        threads do not necessarily know which other threads they are paired up
        with. The key is that threads pass the barriers in complete sets; thus,
        if we examine the sequence of threads that bind and divide them into
        groups of three, each group should contain one oxygen and two hydrogen
        threads.
      </p>

      <p>
        Write synchronization code for oxygen and hydrogen molecules that
        enforces these constraints.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> water = "HOH" <br />
        <strong>Output:</strong> "HHO" <br />
        <strong>Explanation:</strong> "HOH" and "OHH" are also valid answers.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> water = "OOHHHH"
        <br />
        <strong>Output:</strong> "HHOHHO"
        <br />
        <strong>Explanation:</strong> "HOHHHO", "OHHHHO", "HHOHOH", "HOHHOH",
        "OHHHOH", "HHOOHH", "HOHOHH" and "OHHOHH" are also valid answers.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>3 * n == water.length</code>
        </li>
        <li>
          <code>1 &lt;= n &lt;= 20</code>
        </li>
        <li>
          <code>water[i]</code> is either <code>'H'</code> or <code>'O'</code>.
        </li>
        <li>
          There will be exactly <code>2 * n</code> <code>'H'</code> in{" "}
          <code>water</code>.
        </li>
        <li>
          There will be exactly <code>n</code> <code>'O'</code> in{" "}
          <code>water</code>.
        </li>
      </ul>
    </div>
  ),
  1195: (
    <div class="elfjS" data-track-load="description_content">
      <p>You have the four functions:</p>

      <ul>
        <li>
          <code>printFizz</code> that prints the word <code>"fizz"</code> to the
          console,
        </li>
        <li>
          <code>printBuzz</code> that prints the word <code>"buzz"</code> to the
          console,
        </li>
        <li>
          <code>printFizzBuzz</code> that prints the word{" "}
          <code>"fizzbuzz"</code> to the console, and
        </li>
        <li>
          <code>printNumber</code> that prints a given integer to the console.
        </li>
      </ul>

      <p>
        You are given an instance of the class <code>FizzBuzz</code> that has
        four functions: <code>fizz</code>, <code>buzz</code>,{" "}
        <code>fizzbuzz</code> and <code>number</code>. The same instance of{" "}
        <code>FizzBuzz</code> will be passed to four different threads:
      </p>

      <ul>
        <li>
          <strong>Thread A:</strong> calls <code>fizz()</code> that should
          output the word <code>"fizz"</code>.
        </li>
        <li>
          <strong>Thread B:</strong> calls <code>buzz()</code> that should
          output the word <code>"buzz"</code>.
        </li>
        <li>
          <strong>Thread C:</strong> calls <code>fizzbuzz()</code> that should
          output the word <code>"fizzbuzz"</code>.
        </li>
        <li>
          <strong>Thread D:</strong> calls <code>number()</code> that should
          only output the integers.
        </li>
      </ul>

      <p>
        Modify the given class to output the series{" "}
        <code>[1, 2, "fizz", 4, "buzz", ...]</code> where the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        token (<strong>1-indexed</strong>) of the series is:
      </p>

      <ul>
        <li>
          <code>"fizzbuzz"</code> if <code>i</code> is divisible by{" "}
          <code>3</code> and <code>5</code>,
        </li>
        <li>
          <code>"fizz"</code> if <code>i</code> is divisible by <code>3</code>{" "}
          and not <code>5</code>,
        </li>
        <li>
          <code>"buzz"</code> if <code>i</code> is divisible by <code>5</code>{" "}
          and not <code>3</code>, or
        </li>
        <li>
          <code>i</code> if <code>i</code> is not divisible by <code>3</code> or{" "}
          <code>5</code>.
        </li>
      </ul>

      <p>
        Implement the <code>FizzBuzz</code> class:
      </p>

      <ul>
        <li>
          <code>FizzBuzz(int n)</code> Initializes the object with the number{" "}
          <code>n</code> that represents the length of the sequence that should
          be printed.
        </li>
        <li>
          <code>void fizz(printFizz)</code> Calls <code>printFizz</code> to
          output <code>"fizz"</code>.
        </li>
        <li>
          <code>void buzz(printBuzz)</code> Calls <code>printBuzz</code> to
          output <code>"buzz"</code>.
        </li>
        <li>
          <code>void fizzbuzz(printFizzBuzz)</code> Calls{" "}
          <code>printFizzBuzz</code> to output <code>"fizzbuzz"</code>.
        </li>
        <li>
          <code>void number(printNumber)</code> Calls <code>printnumber</code>{" "}
          to output the numbers.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> n = 15
        <br />
        <strong>Output:</strong>{" "}
        [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz"]
        <br />
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> n = 5<br />
        <strong>Output:</strong> [1,2,"fizz",4,"buzz"]
        <br />
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= n &lt;= 50</code>
        </li>
      </ul>
    </div>
  ),
  1226: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Five silent philosophers&nbsp;sit at a round table with bowls of
        spaghetti. Forks are placed between each pair of adjacent philosophers.
      </p>

      <p>
        Each philosopher must alternately think and eat. However, a philosopher
        can only eat spaghetti when they have both left and right forks. Each
        fork can be held by only one philosopher and so a philosopher can use
        the fork only if it is not being used by another philosopher. After an
        individual philosopher finishes eating, they need to put down both forks
        so that the forks become available to others. A philosopher can take the
        fork on their right or the one on their left as they become available,
        but cannot start eating before getting both forks.
      </p>

      <p>
        Eating is not limited by the remaining amounts of spaghetti or stomach
        space; an infinite supply and an infinite demand are assumed.
      </p>

      <p>
        Design a discipline of behaviour (a concurrent algorithm) such that no
        philosopher will starve;&nbsp;<i>i.e.</i>, each can forever continue to
        alternate between eating and thinking, assuming that no philosopher can
        know when others may want to eat or think.
      </p>

      <p style={{ textAlign: "center" }}>
        <img
          alt=""
          src="https://assets.leetcode.com/uploads/2019/09/24/an_illustration_of_the_dining_philosophers_problem.png"
          style={{ width: 400, height: 415 }}
        />
      </p>

      <p style={{ textAlign: "center" }}>
        <em>
          The problem statement and the image above are taken from{" "}
          <a
            href="https://en.wikipedia.org/wiki/Dining_philosophers_problem"
            target="_blank"
            rel="noreferrer"
          >
            wikipedia.org
          </a>
        </em>
      </p>

      <p>&nbsp;</p>

      <p>
        The philosophers' ids are numbered from <strong>0</strong> to{" "}
        <strong>4</strong> in a <strong>clockwise</strong> order. Implement the
        function&nbsp;
        <code>
          void wantsToEat(philosopher, pickLeftFork, pickRightFork, eat,
          putLeftFork, putRightFork)
        </code>{" "}
        where:
      </p>

      <ul>
        <li>
          <code>philosopher</code>&nbsp;is the id of the philosopher who wants
          to eat.
        </li>
        <li>
          <code>pickLeftFork</code>&nbsp;and&nbsp;<code>pickRightFork</code>
          &nbsp;are functions you can call to pick the corresponding forks of
          that philosopher.
        </li>
        <li>
          <code>eat</code>&nbsp;is a function you can call to let the
          philosopher eat once he has picked&nbsp;both forks.
        </li>
        <li>
          <code>putLeftFork</code>&nbsp;and&nbsp;<code>putRightFork</code>
          &nbsp;are functions you can call to put down the corresponding forks
          of that philosopher.
        </li>
        <li>
          The philosophers are assumed to be thinking as long as they are not
          asking to eat (the function is not being called with their number).
        </li>
      </ul>

      <p>
        Five threads, each representing a philosopher, will&nbsp;simultaneously
        use one object of your class to simulate the process. The function may
        be called for the same philosopher more than once, even before the last
        call ends.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 1 <br />
        <strong>Output:</strong>{" "}
        [[4,2,1],[4,1,1],[0,1,1],[2,2,1],[2,1,1],[2,0,3],[2,1,2],[2,2,2],[4,0,3],[4,1,2],[0,2,1],[4,2,2],[3,2,1],[3,1,1],[0,0,3],[0,1,2],[0,2,2],[1,2,1],[1,1,1],[3,0,3],[3,1,2],[3,2,2],[1,0,3],[1,1,2],[1,2,2]]
        <br />
        <strong>Explanation:</strong>n is the number of times each philosopher
        will call the function. The output array describes the calls you made to
        the functions controlling the forks and the eat function, its format is:
        output[i] = [a, b, c] (three integers) - a is the id of a philosopher. -
        b specifies the fork: &#123;1 : left, 2 : right&#125;. - c specifies the
        operation: &#123;1 : pick, 2 : put, 3 : eat&#125;.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= n &lt;= 60</code>
        </li>
      </ul>
    </div>
  ),
  173: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Implement the <code>BSTIterator</code> class that represents an iterator
        over the{" "}
        <strong>
          <a
            href="https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR)"
            target="_blank"
            rel="noreferrer"
          >
            in-order traversal
          </a>
        </strong>{" "}
        of a binary search tree (BST):
      </p>

      <ul>
        <li>
          <code>BSTIterator(TreeNode root)</code> Initializes an object of the{" "}
          <code>BSTIterator</code> class. The <code>root</code> of the BST is
          given as part of the constructor. The pointer should be initialized to
          a non-existent number smaller than any element in the BST.
        </li>
        <li>
          <code>boolean hasNext()</code> Returns <code>true</code> if there
          exists a number in the traversal to the right of the pointer,
          otherwise returns <code>false</code>.
        </li>
        <li>
          <code>int next()</code> Moves the pointer to the right, then returns
          the number at the pointer.
        </li>
      </ul>

      <p>
        Notice that by initializing the pointer to a non-existent smallest
        number, the first call to <code>next()</code> will return the smallest
        element in the BST.
      </p>

      <p>
        You may assume that <code>next()</code> calls will always be valid. That
        is, there will be at least a next number in the in-order traversal when{" "}
        <code>next()</code> is called.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2018/12/25/bst-tree.png"
        style={{ width: 189, height: 178 }}
      />
      <pre>
        <strong>Input</strong> <br />
        ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next",
        "hasNext", "next", "hasNext"] <br />
        [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
        <br /> <br />
        <strong>Output</strong>
        <br />
        [null, 3, 7, true, 9, true, 15, true, 20, false] <br /> <br />
        <strong>Explanation</strong> <br />
        BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9,
        20]);
        <br />
        bSTIterator.next(); // return 3<br />
        bSTIterator.next(); // return 7<br />
        bSTIterator.hasNext(); // return True
        <br />
        bSTIterator.next(); // return 9<br />
        bSTIterator.hasNext(); // return True
        <br />
        bSTIterator.next(); // return 15
        <br />
        bSTIterator.hasNext(); // return True
        <br />
        bSTIterator.next(); // return 20
        <br />
        bSTIterator.hasNext(); // return False
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          The number of nodes in the tree is in the range{" "}
          <code>
            [1, 10<sup>5</sup>]
          </code>
          .
        </li>
        <li>
          <code>
            0 &lt;= Node.val &lt;= 10<sup>6</sup>
          </code>
        </li>
        <li>
          At most{" "}
          <code>
            10<sup>5</sup>
          </code>{" "}
          calls will be made to <code>hasNext</code>, and <code>next</code>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong>
      </p>

      <ul>
        <li>
          Could you implement <code>next()</code> and <code>hasNext()</code> to
          run in average <code>O(1)</code> time and use&nbsp;<code>O(h)</code>{" "}
          memory, where <code>h</code> is the height of the tree?
        </li>
      </ul>
    </div>
  ),
  284: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Design an iterator that supports the <code>peek</code> operation on an
        existing iterator in addition to the <code>hasNext</code> and the{" "}
        <code>next</code> operations.
      </p>
      <p>
        Implement the <code>PeekingIterator</code> class:
      </p>
      <ul>
        <li>
          <code>PeekingIterator(Iterator&lt;int&gt; nums)</code> Initializes the
          object with the given integer iterator <code>iterator</code>.
        </li>
        <li>
          <code>int next()</code> Returns the next element in the array and
          moves the pointer to the next element.
        </li>
        <li>
          <code>boolean hasNext()</code> Returns <code>true</code> if there are
          still elements in the array.
        </li>
        <li>
          <code>int peek()</code> Returns the next element in the array{" "}
          <strong>without</strong> moving the pointer.
        </li>
      </ul>
      <p>
        <strong>Note:</strong> Each language may have a different implementation
        of the constructor and <code>Iterator</code>, but they all support the{" "}
        <code>int next()</code> and <code>boolean hasNext()</code> functions.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input</strong> <br />
        ["PeekingIterator", "next", "peek", "next", "next", "hasNext"] <br />
        [[[1, 2, 3]], [], [], [], [], []] <br />
        <strong>Output</strong> <br />
        [null, 1, 2, 2, 3, false] <br />
        <strong>Explanation</strong> <br />
        PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [
        <u>
          <strong>1</strong>
        </u>
        ,2,3] <br />
        peekingIterator.next(); // return 1, the pointer moves to the next
        element [1,
        <u>
          <strong>2</strong>
        </u>
        ,3]. <br />
        peekingIterator.peek(); // return 2, the pointer does not move [1,
        <u>
          <strong>2</strong>
        </u>
        ,3]. <br />
        peekingIterator.next(); // return 2, the pointer moves to the next
        element [1,2,
        <u>
          <strong>3</strong>
        </u>
        ] <br />
        peekingIterator.next(); // return 3, the pointer moves to the next
        element [1,2,3] peekingIterator.hasNext(); // return False
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 1000</code>
        </li>
        <li>
          <code>1 &lt;= nums[i] &lt;= 1000</code>
        </li>
        <li>
          All the calls to <code>next</code> and <code>peek</code> are valid.
        </li>
        <li>
          At most <code>1000</code> calls will be made to <code>next</code>,{" "}
          <code>hasNext</code>, and <code>peek</code>.
        </li>
      </ul>
      <p>&nbsp;</p>
      <strong>Follow up:</strong> How would you extend your design to be generic
      and work with all types, not just integer?
    </div>
  ),
  341: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a nested list of integers <code>nestedList</code>. Each
        element is either an integer or a list whose elements may also be
        integers or other lists. Implement an iterator to flatten it.
      </p>

      <p>
        Implement the <code>NestedIterator</code> class:
      </p>

      <ul>
        <li>
          <code>NestedIterator(List&lt;NestedInteger&gt; nestedList)</code>{" "}
          Initializes the iterator with the nested list <code>nestedList</code>.
        </li>
        <li>
          <code>int next()</code> Returns the next integer in the nested list.
        </li>
        <li>
          <code>boolean hasNext()</code> Returns <code>true</code> if there are
          still some integers in the nested list and <code>false</code>{" "}
          otherwise.
        </li>
      </ul>

      <p>Your code will be tested with the following pseudocode:</p>

      <pre>
        initialize iterator with nestedList res = [] while iterator.hasNext()
        append iterator.next() to the end of res return res
      </pre>

      <p>
        If <code>res</code> matches the expected flattened list, then your code
        will be judged as correct.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nestedList = [[1,1],2,[1,1]] <br />
        <strong>Output:</strong> [1,1,2,1,1] <br />
        <strong>Explanation:</strong> By calling next repeatedly until hasNext
        returns false, the order of elements returned by next should be:
        [1,1,2,1,1].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nestedList = [1,[4,[6]]] <br />
        <strong>Output:</strong> [1,4,6] <br />
        <strong>Explanation:</strong> By calling next repeatedly until hasNext
        returns false, the order of elements returned by next should be:
        [1,4,6].
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nestedList.length &lt;= 500</code>
        </li>
        <li>
          The values of the integers in the nested list is in the range{" "}
          <code>
            [-10<sup>6</sup>, 10<sup>6</sup>]
          </code>
          .
        </li>
      </ul>
    </div>
  ),
  900: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        We can use run-length encoding (i.e., <strong>RLE</strong>) to encode a
        sequence of integers. In a run-length encoded array of even length{" "}
        <code>encoding</code> (<strong>0-indexed</strong>), for all even{" "}
        <code>i</code>, <code>encoding[i]</code> tells us the number of times
        that the non-negative integer value <code>encoding[i + 1]</code> is
        repeated in the sequence.
      </p>

      <ul>
        <li>
          For example, the sequence <code>arr = [8,8,8,5,5]</code> can be
          encoded to be <code>encoding = [3,8,2,5]</code>.{" "}
          <code>encoding = [3,8,0,9,2,5]</code> and{" "}
          <code>encoding = [2,8,1,8,2,5]</code> are also valid{" "}
          <strong>RLE</strong> of <code>arr</code>.
        </li>
      </ul>

      <p>
        Given a run-length encoded array, design an iterator that iterates
        through it.
      </p>

      <p>
        Implement the <code>RLEIterator</code> class:
      </p>

      <ul>
        <li>
          <code>RLEIterator(int[] encoded)</code> Initializes the object with
          the encoded array <code>encoded</code>.
        </li>
        <li>
          <code>int next(int n)</code> Exhausts the next <code>n</code> elements
          and returns the last element exhausted in this way. If there is no
          element left to exhaust, return <code>-1</code> instead.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input</strong> <br />
        ["RLEIterator", "next", "next", "next", "next"]
        <br />
        [[[3, 8, 0, 9, 2, 5]], [2], [1], [1], [2]]
        <br />
        <strong>Output</strong>
        <br />
        [null, 8, 8, 5, -1]
        <br />
        <strong>Explanation</strong>
        <br />
        RLEIterator rLEIterator = new RLEIterator([3, 8, 0, 9, 2, 5]); // This
        maps to the sequence [8,8,8,5,5].
        <br />
        rLEIterator.next(2); // exhausts 2 terms of the sequence, returning 8.
        The remaining sequence is now [8, 5, 5].
        <br />
        rLEIterator.next(1); // exhausts 1 term of the sequence, returning 8.
        The remaining sequence is now [5, 5].
        <br />
        rLEIterator.next(1); // exhausts 1 term of the sequence, returning 5.
        The remaining sequence is now [5].
        <br />
        rLEIterator.next(2); // exhausts 2 terms, returning -1. This is because
        the first term exhausted was 5,
        <br />
        but the second term did not exist. Since the last term exhausted does
        not exist, we return -1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>2 &lt;= encoding.length &lt;= 1000</code>
        </li>
        <li>
          <code>encoding.length</code> is even.
        </li>
        <li>
          <code>
            0 &lt;= encoding[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          At most <code>1000</code> calls will be made to <code>next</code>.
        </li>
      </ul>
    </div>
  ),
  1286: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Design the <code>CombinationIterator</code> class:
      </p>

      <ul>
        <li>
          <code>
            CombinationIterator(string characters, int combinationLength)
          </code>{" "}
          Initializes the object with a string <code>characters</code> of{" "}
          <strong>sorted distinct</strong> lowercase English letters and a
          number <code>combinationLength</code> as arguments.
        </li>
        <li>
          <code>next()</code> Returns the next combination of length{" "}
          <code>combinationLength</code> in{" "}
          <strong>lexicographical order</strong>.
        </li>
        <li>
          <code>hasNext()</code> Returns <code>true</code> if and only if there
          exists a next combination.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input</strong> <br />
        ["CombinationIterator", "next", "hasNext", "next", "hasNext", "next",
        "hasNext"] <br />
        [["abc", 2], [], [], [], [], [], []] <br />
        <strong>Output</strong> <br />
        [null, "ab", true, "ac", true, "bc", false] <br />
        <strong>Explanation</strong> <br />
        CombinationIterator itr = new CombinationIterator("abc", 2); <br />
        itr.next(); // return "ab" <br />
        itr.hasNext(); // return True <br />
        itr.next(); // return "ac" <br />
        itr.hasNext(); // return True <br />
        itr.next(); // return "bc" <br />
        itr.hasNext(); // return False
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= combinationLength &lt;= characters.length &lt;= 15
          </code>
        </li>
        <li>
          All the characters of <code>characters</code> are{" "}
          <strong>unique</strong>.
        </li>
        <li>
          At most{" "}
          <code>
            10<sup>4</sup>
          </code>{" "}
          calls will be made to <code>next</code> and <code>hasNext</code>.
        </li>
        <li>
          It is guaranteed that all calls of the function <code>next</code> are
          valid.
        </li>
      </ul>
    </div>
  ),
  23: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array of <code>k</code> linked-lists <code>lists</code>
        , each linked-list is sorted in ascending order.
      </p>

      <p>
        <em>
          Merge all the linked-lists into one sorted linked-list and return it.
        </em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> lists = [[1,4,5],[1,3,4],[2,6]] <br />
        <strong>Output:</strong> [1,1,2,3,4,4,5,6] <br />
        <strong>Explanation:</strong> The linked-lists are: <br />
        [ <br />
        &nbsp; 1-&gt;4-&gt;5, <br />
        &nbsp; 1-&gt;3-&gt;4, <br />
        &nbsp; 2-&gt;6 <br />
        ] <br />
        merging them into one sorted list: <br />
        1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4-&gt;5-&gt;6 <br />
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> lists = [] <br />
        <strong>Output:</strong> [] <br />
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> lists = [[]] <br />
        <strong>Output:</strong> []
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>k == lists.length</code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= lists[i].length &lt;= 500</code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= lists[i][j] &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>lists[i]</code> is sorted in <strong>ascending order</strong>.
        </li>
        <li>
          The sum of <code>lists[i].length</code> will not exceed{" "}
          <code>
            10<sup>4</sup>
          </code>
          .
        </li>
      </ul>
    </div>
  ),
  148: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given the <code>head</code> of a linked list, return{" "}
        <em>
          the list after sorting it in <strong>ascending order</strong>
        </em>
        .
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg"
        style={{ width: 450, height: 194 }}
      />
      <pre>
        <strong>Input:</strong> head = [4,2,1,3] <br />
        <strong>Output:</strong> [1,2,3,4]
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg"
        style={{ width: 550, height: 184 }}
      />{" "}
      <pre>
        <strong>Input:</strong> head = [-1,5,3,4,0]
        <br />
        <strong>Output:</strong> [-1,0,3,4,5]
      </pre>
      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <pre>
        <strong>Input:</strong> head = []
        <br />
        <strong>Output:</strong> []
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          The number of nodes in the list is in the range{" "}
          <code>
            [0, 5 * 10<sup>4</sup>]
          </code>
          .
        </li>
        <li>
          <code>
            -10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong> Can you sort the linked list in{" "}
        <code>O(n logn)</code> time and <code>O(1)</code> memory (i.e. constant
        space)?
      </p>
    </div>
  ),
  315: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code>, return
        <em> an integer array </em>
        <code>counts</code>
        <em> where </em>
        <code>counts[i]</code>
        <em> is the number of smaller elements to the right of </em>
        <code>nums[i]</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,2,6,1] <br />
        <strong>Output:</strong> [2,1,1,0]
        <br />
        <strong>Explanation:</strong>
        <br />
        To the right of 5 there are <b>2</b> smaller elements (2 and 1).
        <br />
        To the right of 2 there is only <b>1</b> smaller element (1).
        <br />
        To the right of 6 there is <b>1</b> smaller element (1).
        <br />
        To the right of 1 there is <b>0</b> smaller element.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [-1]
        <br />
        <strong>Output:</strong> [0]
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [-1,-1]
        <br />
        <strong>Output:</strong> [0,0]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  327: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> and two integers{" "}
        <code>lower</code> and <code>upper</code>, return{" "}
        <em>the number of range sums that lie in</em>{" "}
        <code>[lower, upper]</code> <em>inclusive</em>.
      </p>

      <p>
        Range sum <code>S(i, j)</code> is defined as the sum of the elements in{" "}
        <code>nums</code> between indices <code>i</code> and <code>j</code>{" "}
        inclusive, where <code>i &lt;= j</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [-2,5,-1], lower = -2, upper = 2 <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The three ranges are: [0,0], [2,2], and
        [0,2] and their respective sums are: -2, -1, 2.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0], lower = 0, upper = 0<br />
        <strong>Output:</strong> 1
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
        <li>
          <code>
            -10<sup>5</sup> &lt;= lower &lt;= upper &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          The answer is <strong>guaranteed</strong> to fit in a{" "}
          <strong>32-bit</strong> integer.
        </li>
      </ul>
    </div>
  ),
  493: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code>, return{" "}
        <em>
          the number of <strong>reverse pairs</strong> in the array
        </em>
        .
      </p>

      <p>
        A <strong>reverse pair</strong> is a pair <code>(i, j)</code> where:
      </p>

      <ul>
        <li>
          <code>0 &lt;= i &lt; j &lt; nums.length</code> and
        </li>
        <li>
          <code>nums[i] &gt; 2 * nums[j]</code>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,2,3,1] <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> The reverse pairs are: <br />
        (1, 4) --&gt; nums[1] = 3, nums[4] = 1, 3 &gt; 2 * 1 <br />
        (3, 4) --&gt; nums[3] = 3, nums[4] = 1, 3 &gt; 2 * 1
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,4,3,5,1] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> The reverse pairs are: <br />
        (1, 4) --&gt; nums[1] = 4, nums[4] = 1, 4 &gt; 2 * 1 <br />
        (2, 4) --&gt; nums[2] = 3, nums[4] = 1, 3 &gt; 2 * 1 <br />
        (3, 4) --&gt; nums[3] = 5, nums[4] = 1, 5 &gt; 2 * 1
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
      </ul>
    </div>
  ),
  1649: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>instructions</code>, you are asked to
        create a sorted array from the elements in <code>instructions</code>.
        You start with an empty container <code>nums</code>. For each element
        from <strong>left to right</strong> in <code>instructions</code>, insert
        it into <code>nums</code>. The <strong>cost</strong> of each insertion
        is the <b>minimum</b> of the following:
      </p>

      <ul>
        <li>
          The number of elements currently in <code>nums</code> that are{" "}
          <strong>strictly less than</strong> <code>instructions[i]</code>.
        </li>
        <li>
          The number of elements currently in <code>nums</code> that are{" "}
          <strong>strictly greater than</strong> <code>instructions[i]</code>.
        </li>
      </ul>

      <p>
        For example, if inserting element <code>3</code> into{" "}
        <code>nums = [1,2,3,5]</code>, the <strong>cost</strong> of insertion is{" "}
        <code>min(2, 1)</code> (elements <code>1</code> and <code>2</code> are
        less than <code>3</code>, element <code>5</code> is greater than{" "}
        <code>3</code>) and <code>nums</code> will become{" "}
        <code>[1,2,3,3,5]</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>total cost</strong> to insert all elements from{" "}
        </em>
        <code>instructions</code>
        <em> into </em>
        <code>nums</code>. Since the answer may be large, return it{" "}
        <strong>modulo</strong>{" "}
        <code>
          10<sup>9</sup> + 7
        </code>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> instructions = [1,5,6,2] <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> Begin with nums = [].
        <br />
        Insert 1 with cost min(0, 0) = 0, now nums = [1].
        <br />
        Insert 5 with cost min(1, 0) = 0, now nums = [1,5].
        <br />
        Insert 6 with cost min(2, 0) = 0, now nums = [1,5,6].
        <br />
        Insert 2 with cost min(1, 2) = 1, now nums = [1,2,5,6]. The total cost
        is 0 + 0 + 0 + 1 = 1.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> instructions = [1,2,3,6,5,4]
        <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> Begin with nums = [].
        <br />
        Insert 1 with cost min(0, 0) = 0, now nums = [1].
        <br />
        Insert 2 with cost min(1, 0) = 0, now nums = [1,2].
        <br />
        Insert 3 with cost min(2, 0) = 0, now nums = [1,2,3].
        <br />
        Insert 6 with cost min(3, 0) = 0, now nums = [1,2,3,6].
        <br />
        Insert 5 with cost min(3, 1) = 1, now nums = [1,2,3,5,6].
        <br />
        Insert 4 with cost min(3, 2) = 2, now nums = [1,2,3,4,5,6].
        <br />
        The total cost is 0 + 0 + 0 + 0 + 1 + 2 = 3.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> instructions = [1,3,3,3,2,4,2,1,2]
        <br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> Begin with nums = [].
        <br />
        Insert 1 with cost min(0, 0) = 0, now nums = [1].
        <br />
        Insert 3 with cost min(1, 0) = 0, now nums = [1,3].
        <br />
        Insert 3 with cost min(1, 0) = 0, now nums = [1,3,3].
        <br />
        Insert 3 with cost min(1, 0) = 0, now nums = [1,3,3,3].
        <br />
        Insert 2 with cost min(1, 3) = 1, now nums = [1,2,3,3,3].
        <br />
        Insert 4 with cost min(5, 0) = 0, now nums = [1,2,3,3,3,4].
        <br />
        ​​​​​​​Insert 2 with cost min(1, 4) = 1, now nums = [1,2,2,3,3,3,4].
        <br />
        ​​​​​​​Insert 1 with cost min(0, 6) = 0, now nums = [1,1,2,2,3,3,3,4].
        <br />
        ​​​​​​​Insert 2 with cost min(2, 4) = 2, now nums = [1,1,2,2,2,3,3,3,4].
        <br />
        The total cost is 0 + 0 + 0 + 0 + 1 + 0 + 1 + 0 + 2 = 4.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= instructions.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= instructions[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2179: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given two <strong>0-indexed</strong> arrays <code>nums1</code>{" "}
        and <code>nums2</code> of length <code>n</code>, both of which are{" "}
        <strong>permutations</strong> of <code>[0, 1, ..., n - 1]</code>.
      </p>

      <p>
        A <strong>good triplet</strong> is a set of <code>3</code>{" "}
        <strong>distinct</strong> values which are present in{" "}
        <strong>increasing order</strong> by position both in <code>nums1</code>{" "}
        and <code>nums2</code>. In other words, if we consider{" "}
        <code>
          pos1<sub>v</sub>
        </code>{" "}
        as the index of the value <code>v</code> in <code>nums1</code> and{" "}
        <code>
          pos2<sub>v</sub>
        </code>{" "}
        as the index of the value <code>v</code> in <code>nums2</code>, then a
        good triplet will be a set <code>(x, y, z)</code> where{" "}
        <code>0 &lt;= x, y, z &lt;= n - 1</code>, such that{" "}
        <code>
          pos1<sub>x</sub> &lt; pos1<sub>y</sub> &lt; pos1<sub>z</sub>
        </code>{" "}
        and{" "}
        <code>
          pos2<sub>x</sub> &lt; pos2<sub>y</sub> &lt; pos2<sub>z</sub>
        </code>
        .
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>total number</strong> of good triplets
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [2,0,1,3], nums2 = [0,1,2,3] <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> <br />
        There are 4 triplets (x,y,z) such that pos1<sub>x</sub> &lt; pos1
        <sub>y</sub> &lt; pos1<sub>z</sub>. They are (2,0,1), (2,0,3), (2,1,3),
        and (0,1,3). Out of those triplets, only the triplet (0,1,3) satisfies
        pos2<sub>x</sub> &lt; pos2<sub>y</sub> &lt; pos2<sub>z</sub>. Hence,
        there is only 1 good triplet.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [4,0,1,3,2], nums2 = [4,1,0,2,3]
        <br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> The 4 good triplets are (4,0,3), (4,0,2),
        (4,1,3), and (4,1,2).
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == nums1.length == nums2.length</code>
        </li>
        <li>
          <code>
            3 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= nums1[i], nums2[i] &lt;= n - 1</code>
        </li>
        <li>
          <code>nums1</code> and <code>nums2</code> are permutations of{" "}
          <code>[0, 1, ..., n - 1]</code>.
        </li>
      </ul>
    </div>
  ),
  2426: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given two <strong>0-indexed</strong> integer arrays{" "}
        <code>nums1</code> and <code>nums2</code>, each of size <code>n</code>,
        and an integer <code>diff</code>. Find the number of{" "}
        <strong>pairs</strong> <code>(i, j)</code> such that:
      </p>

      <ul>
        <li>
          <code>0 &lt;= i &lt; j &lt;= n - 1</code> <strong>and</strong>
        </li>
        <li>
          <code>nums1[i] - nums1[j] &lt;= nums2[i] - nums2[j] + diff</code>.
        </li>
      </ul>

      <p>
        Return
        <em>
          {" "}
          the <strong>number of pairs</strong> that satisfy the conditions.
        </em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [3,2,5], nums2 = [2,2,1], diff = 1{" "}
        <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong>
        <br />
        There are 3 pairs that satisfy the conditions:
        <br />
        1. i = 0, j = 1: 3 - 2 &lt;= 2 - 2 + 1. Since i &lt; j and 1 &lt;= 1,
        this pair satisfies the conditions.
        <br />
        2. i = 0, j = 2: 3 - 5 &lt;= 2 - 1 + 1. Since i &lt; j and -2 &lt;= 2,
        this pair satisfies the conditions.
        <br />
        3. i = 1, j = 2: 2 - 5 &lt;= 2 - 1 + 1. Since i &lt; j and -3 &lt;= 2,
        this pair satisfies the conditions. Therefore, we return 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [3,-1], nums2 = [-2,2], diff = -1
        <br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong>
        <br />
        Since there does not exist any pair that satisfies the conditions, we
        return 0.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == nums1.length == nums2.length</code>
        </li>
        <li>
          <code>
            2 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= nums1[i], nums2[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= diff &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1135: (
    <>
      <div class="markdown-body div-width" style={{ marginTop: 20 }}>
        <p>
          There are <code>N</code> cities numbered from 1 to <code>N</code>.
        </p>

        <p>
          You are given <code>connections</code>, where each{" "}
          <code>connections[i] = [city1, city2, cost]</code>&nbsp;represents the
          cost to connect <code>city1</code> and <code>city2</code>
          together.&nbsp; (A <em>connection</em> is bidirectional: connecting{" "}
          <code>city1</code> and
          <code>city2</code> is the same as connecting <code>city2</code> and{" "}
          <code>city1</code>.)
        </p>

        <p>
          Return the minimum cost so that for every pair of cities, there exists
          a path&nbsp;of connections (possibly of length 1) that connects those
          two cities together.&nbsp; The cost is the sum of the connection costs
          used. If the task is impossible, return -1.
        </p>

        <p>&nbsp;</p>

        <p>
          <strong>Example 1:</strong>
        </p>

        <p>
          <img src="https://leetcode.ca/all/img/1135_1.png" alt="" />
        </p>

        <pre>
          <strong>Input: </strong>N = 3, connections = [[1,2,5],[1,3,6],[2,3,1]]{" "}
          <br />
          <strong>Output: </strong>6 <br />
          <strong>Explanation: </strong>
          Choosing any 2 edges will connect all cities so we choose the minimum
          2.
        </pre>

        <p>
          <strong>Example 2:</strong>
        </p>

        <p>
          <img src="https://leetcode.ca/all/img/1135_2.png" alt="" />
        </p>

        <pre>
          <strong>Input: </strong>N = 4, connections = [[1,2,3],[3,4,4]] <br />
          <strong>Output: </strong>-1 <br />
          <strong>Explanation: </strong>
          There is no way to connect all cities even if all edges are used.
        </pre>

        <p>&nbsp;</p>

        <p>
          <strong>Note:</strong>
        </p>

        <ul>
          <li>
            <code>1 &lt;= N &lt;= 10000</code>
          </li>
          <li>
            <code>1 &lt;= connections.length &lt;= 10000</code>
          </li>
          <li>
            <code>1 &lt;= connections[i][0], connections[i][1] &lt;= N</code>
          </li>
          <li>
            <code>0 &lt;= connections[i][2] &lt;= 10^5</code>
          </li>
          <li>
            <code>connections[i][0] != connections[i][1]</code>
          </li>
        </ul>
      </div>
    </>
  ),
  1168: (
    <div class="markdown-body div-width" style={{ marginTop: 20 }}>
      <p>
        There are{" "}
        <code>
          <font face="monospace">n</font>
        </code>
        &nbsp;houses in a village. We want to supply water for all the houses by
        building wells and laying pipes.
      </p>

      <p>
        For each house <code>i</code>, we can either build a well inside it
        directly with cost <code>wells[i]</code>, or pipe in water from another
        well to it. The costs to lay pipes between houses are given by the array{" "}
        <code>pipes</code>, where each&nbsp;
        <code>pipes[i] = [house1, house2, cost]</code>&nbsp;represents the cost
        to connect&nbsp;<code>house1</code>&nbsp;and <code>house2</code>
        &nbsp;together using a pipe.&nbsp;Connections are bidirectional.
      </p>

      <p>Find the minimum total cost to supply water to all houses.</p>

      <p>&nbsp;</p>
      <p>
        <strong>Example 1:</strong>
      </p>

      <p>
        <strong>
          <img
            alt=""
            src="https://assets.leetcode.com/uploads/2019/05/22/1359_ex1.png"
            style={{ width: 189, height: 196 }}
          />
        </strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 3, wells = [1,2,2], pipes =
        [[1,2,1],[2,3,1]] <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation: </strong>
        <br />
        The image shows the costs of connecting houses using pipes.
        <br />
        The best strategy is to build a well in the first house with cost 1 and
        connect the other houses to it with cost 2 so the total cost is 3.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= n&nbsp;&lt;= 10000</code>
        </li>
        <li>
          <code>wells.length == n</code>
        </li>
        <li>
          <code>0 &lt;= wells[i] &lt;= 10^5</code>
        </li>
        <li>
          <code>1 &lt;= pipes.length &lt;= 10000</code>
        </li>
        <li>
          <code>1 &lt;= pipes[i][0], pipes[i][1] &lt;= n</code>
        </li>
        <li>
          <code>0 &lt;= pipes[i][2] &lt;= 10^5</code>
        </li>
        <li>
          <code>pipes[i][0] != pipes[i][1]</code>
        </li>
      </ul>
    </div>
  ),
  1724: (
    <>
      <div>
        <p>
          An undirected graph of <code>n</code> nodes is defined by{" "}
          <code>edgeList</code>, where{" "}
          <code>
            edgeList[i] = [u<sub>i</sub>, v<sub>i</sub>, dis<sub>i</sub>]
          </code>{" "}
          denotes an edge between nodes{" "}
          <code>
            u<sub>i</sub>
          </code>{" "}
          and{" "}
          <code>
            v<sub>i</sub>
          </code>{" "}
          with distance{" "}
          <code>
            dis<sub>i</sub>
          </code>
          . Note that there may be <strong>multiple</strong>
          edges between two nodes, and the graph may not be connected.
        </p>

        <p>
          Implement the <code>DistanceLimitedPathsExist</code> class:
        </p>

        <ul>
          <li>
            <code>DistanceLimitedPathsExist(int n, int[][] edgeList)</code>{" "}
            Initializes the class with an undirected graph.
          </li>
          <li>
            <code>boolean query(int p, int q, int limit)</code> Returns{" "}
            <code>true</code> if there exists a path from <code>p</code> to{" "}
            <code>q</code> such that each edge on the path has a distance{" "}
            <strong>strictly less than</strong> <code>limit</code>, and
            otherwise <code>false</code>.
          </li>
        </ul>

        <p>&nbsp;</p>
        <p>
          <strong>Example 1:</strong>
        </p>

        <p>
          <strong>
            <img
              alt=""
              src="https://assets.leetcode.com/uploads/2021/01/05/messed.png"
              style={{ width: 300, height: 298 }}
            />
          </strong>
        </p>

        <pre>
          <strong>Input</strong> <br />
          ["DistanceLimitedPathsExist", "query", "query", "query", "query"] [[6,
          [[0, 2, 4], [0, 3, 2], [1, 2, 3], [2, 3, 1], [4, 5, 5]]], [2, 3, 2],
          [1, 3, 3], [2, 0, 3], [0, 5, 6]] <br />
          <strong>Output</strong> <br />
          [null, true, false, true, false] <br />
          <strong>Explanation</strong> <br />
          DistanceLimitedPathsExist distanceLimitedPathsExist = new
          DistanceLimitedPathsExist(6, [[0, 2, 4], [0, 3, 2], [1, 2, 3], [2, 3,
          1], [4, 5, 5]]); distanceLimitedPathsExist.query(2, 3, 2); // return
          true. There is an edge from 2 to 3 of distance 1, which is less than
          2. distanceLimitedPathsExist.query(1, 3, 3); // return false. There is
          no way to go from 1 to 3 with distances <strong>strictly</strong> less
          than 3. distanceLimitedPathsExist.query(2, 0, 3); // return true.
          There is a way to go from 2 to 0 with distance &lt; 3: travel from 2
          to 3 to 0. distanceLimitedPathsExist.query(0, 5, 6); // return false.
          There are no paths from 0 to 5.
        </pre>

        <p>&nbsp;</p>
        <p>
          <code>
            <strong>Constraints:</strong>
          </code>
        </p>

        <ul>
          <li>
            <code>
              2 &lt;= n &lt;= 10<sup>4</sup>
            </code>
          </li>
          <li>
            <code>
              0 &lt;= edgeList.length &lt;= 10<sup>4</sup>
            </code>
          </li>
          <li>
            <code>edgeList[i].length == 3</code>
          </li>
          <li>
            <code>
              0 &lt;= u<sub>i</sub>, v<sub>i</sub>, p, q &lt;= n-1
            </code>
          </li>
          <li>
            <code>
              u<sub>i</sub> != v<sub>i</sub>
            </code>
          </li>
          <li>
            <code>p != q</code>
          </li>
          <li>
            <code>
              1 &lt;= dis<sub>i</sub>, limit &lt;= 10<sup>9</sup>
            </code>
          </li>
          <li>
            At most&nbsp;
            <code>
              10<sup>4</sup>
            </code>{" "}
            calls will be made to
            <code>query</code>.
          </li>
        </ul>
      </div>
    </>
  ),
  1062: (
    <div class="markdown-body div-width" style={{ marginTop: 20 }}>
      <p>
        Given a string <code>S</code>, find out the length of the longest
        repeating substring(s). Return <code>0</code> if no repeating substring
        exists.
      </p>

      <p>&nbsp;</p>

      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input: </strong>
        <span id="example-input-1-1">"abcd"</span> <br />
        <strong>Output: </strong>
        <span id="example-output-1">0</span>
        <br />
        <strong>Explanation: </strong>There is no repeating substring.
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input: </strong>
        <span id="example-input-2-1">"abbaba"</span>
        <br />
        <strong>Output: </strong>
        <span id="example-output-2">2</span>
        <br />
        <strong>Explanation: </strong>The longest repeating substrings are "ab"
        and "ba", each of which occurs twice.
      </pre>

      <p>
        <strong>Example 3:</strong>
      </p>

      <pre>
        <strong>Input: </strong>
        <span id="example-input-3-1">"aabcaabdaab"</span>
        <br />
        <strong>Output: </strong>
        <span id="example-output-3">3</span>
        <br />
        <strong>Explanation: </strong>The longest repeating substring is "aab",
        which occurs <code>3</code> times.
      </pre>

      <p>
        <strong>Example 4:</strong>
      </p>

      <pre>
        <strong>Input: </strong>
        <span id="example-input-4-1">"aaaaa"</span>
        <br />
        <strong>Output: </strong>
        <span id="example-output-4">4</span>
        <br />
        <strong>Explanation: </strong>The longest repeating substring is "aaaa",
        which occurs twice.
      </pre>

      <p>&nbsp;</p>

      <p>
        <strong>Note:</strong>
      </p>

      <ul>
        <li>
          The string <code>S</code> consists of only lowercase English letters
          from <code>'a'</code>- <code>'z'</code>.
        </li>
        <li>
          <code>1 &lt;= S.length &lt;= 1500</code>
        </li>
      </ul>
    </div>
  ),
  1698: (
    <div class="markdown-body div-width">
      <div class="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Given a string <code>s</code>, return{" "}
            <em>
              the number of <strong>distinct</strong>
              substrings of
            </em>
            &nbsp;<code>s</code>.
          </p>
          <p>
            A <strong>substring</strong> of a string is obtained by deleting any
            number of characters (possibly zero) from the front of the string
            and any number (possibly zero) from the back of the string.
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>Example 1:</strong>
          </p>
          <pre>
            <strong>Input:</strong> s = "aabbaba" <br />
            <strong>Output:</strong> 21
            <br />
            <strong>Explanation:</strong> <br />
            The set of distinct strings is
            ["a","b","aa","bb","ab","ba","aab","abb","bba","aba","aabb",
            <br />
            "abba","bbab","baba","aabba","abbab","bbaba","aabbab","abbaba","aabbaba"]
          </pre>
          <p>
            <strong>Example 2:</strong>
          </p>
          <pre>
            <strong>Input:</strong> s = "abcdefg"
            <br />
            <strong>Output:</strong> 28
          </pre>
          <p>&nbsp;</p>
          <p>
            <strong>Constraints:</strong>
          </p>
          <ul>
            <li>
              <code>1 &lt;= s.length &lt;= 500</code>
            </li>
            <li>
              <code>s</code> consists of lowercase English letters.
            </li>
          </ul>
          <p>&nbsp;</p>
          <strong>Follow up:</strong> Can you solve this problem in{" "}
          <code>O(n)</code> time complexity?
        </div>
      </div>
      <p>
        <strong>Hints:</strong>
      </p>

      <p>Hint 1</p>
      <p>Calculate the prefix hashing array for s.</p>
      <p>Hint 2</p>
      <p>
        Use the prefix hashing array to calculate the hashing value of each
        substring.
      </p>
      <p>Hint 3</p>
      <p>Compare the hashing values to determine the unique substrings.</p>
      <p>Hint 4</p>
      <p>
        There could be collisions if you use hashing, what about double hashing.
      </p>
    </div>
  ),
  220: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code> and two integers{" "}
        <code>indexDiff</code> and <code>valueDiff</code>.
      </p>

      <p>
        Find a pair of indices <code>(i, j)</code> such that:
      </p>

      <ul>
        <li>
          <code>i != j</code>,
        </li>
        <li>
          <code>abs(i - j) &lt;= indexDiff</code>.
        </li>
        <li>
          <code>abs(nums[i] - nums[j]) &lt;= valueDiff</code>, and
        </li>
      </ul>

      <p>
        Return <code>true</code>
        <em> if such pair exists or </em>
        <code>false</code>
        <em> otherwise</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input: </strong>
        nums = [1,2,3,1], indexDiff = 3, valueDiff = 0 <br />
        <strong>Output: </strong>true
        <br />
        <strong>Explanation: </strong>
        We can choose (i, j) = (0, 3).
        <br />
        We satisfy the three conditions:
        <br />
        i != j --&gt; 0 != 3<br />
        abs(i - j) &lt;= indexDiff --&gt; abs(0 - 3) &lt;= 3<br />
        abs(nums[i] - nums[j]) &lt;= valueDiff --&gt; abs(1 - 1) &lt;= 0
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input: </strong>
        nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3<br />
        <strong>Output: </strong>
        false
        <br />
        <strong>Explanation: </strong>
        After trying all the possible pairs (i, j), we cannot satisfy the three
        conditions, so we return false.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            2 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= indexDiff &lt;= nums.length</code>
        </li>
        <li>
          <code>
            0 &lt;= valueDiff &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  451: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a string <code>s</code>, sort it in{" "}
        <strong>decreasing order</strong> based on the{" "}
        <strong>frequency</strong> of the characters. The{" "}
        <strong>frequency</strong> of a character is the number of times it
        appears in the string.
      </p>

      <p>
        Return <em>the sorted string</em>. If there are multiple answers, return{" "}
        <em>any of them</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "tree" <br />
        <strong>Output:</strong> "eert"
        <br />
        <strong>Explanation:</strong> 'e' appears twice while 'r' and 't' both
        appear once.
        <br />
        So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a
        valid answer.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "cccaaa"
        <br />
        <strong>Output:</strong> "aaaccc"
        <br />
        <strong>Explanation:</strong> Both 'c' and 'a' appear three times, so
        both "cccaaa" and "aaaccc" are valid answers.
        <br />
        Note that "cacaca" is incorrect, as the same characters must be
        together.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "Aabb"
        <br />
        <strong>Output:</strong> "bbAa"
        <br />
        <strong>Explanation:</strong> "bbaA" is also a valid answer, but "Aabb"
        is incorrect.
        <br />
        Note that 'A' and 'a' are treated as two different characters.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 5 * 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of uppercase and lowercase English letters and
          digits.
        </li>
      </ul>
    </div>
  ),
  692: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of strings <code>words</code> and an integer{" "}
        <code>k</code>, return <em>the </em>
        <code>k</code>
        <em> most frequent strings</em>.
      </p>

      <p>
        Return the answer <strong>sorted</strong> by{" "}
        <strong>the frequency</strong> from highest to lowest. Sort the words
        with the same frequency by their <strong>lexicographical order</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> words =
        ["i","love","leetcode","i","love","coding"], k = 2 <br />
        <strong>Output:</strong> ["i","love"] <br />
        <strong>Explanation:</strong> "i" and "love" are the two most frequent
        words. <br />
        Note that "i" comes before "love" due to a lower alphabetical order.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> words =
        ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4{" "}
        <br />
        <strong>Output:</strong> ["the","is","sunny","day"] <br />
        <strong>Explanation:</strong> "the", "is", "sunny" and "day" are the
        four most frequent words, with the number of occurrence being 4, 3, 2
        and 1 respectively.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= words.length &lt;= 500</code>
        </li>
        <li>
          <code>1 &lt;= words[i].length &lt;= 10</code>
        </li>
        <li>
          <code>words[i]</code> consists of lowercase English letters.
        </li>
        <li>
          <code>k</code> is in the range{" "}
          <code>
            [1, The number of <strong>unique</strong> words[i]]
          </code>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow-up:</strong> Could you solve it in{" "}
        <code>O(n log(k))</code> time and <code>O(n)</code> extra space?
      </p>
    </div>
  ),
  1230: (
    <div class="markdown-body div-width">
      <p>
        You have some coins.&nbsp; The <code>i</code>-th&nbsp;coin has a
        probability&nbsp;<code>prob[i]</code>
        of facing heads when tossed.
      </p>
      <p>
        Return the probability that the number of coins facing heads equals{" "}
        <code>target</code> if you toss every coin exactly once.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>Example 1:</strong>
      </p>{" "}
      <pre>
        <strong>Input:</strong> prob = [0.4], target = 1<br />
        <strong>Output:</strong> 0.40000
      </pre>
      <p>
        <strong>Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> prob = [0.5,0.5,0.5,0.5,0.5], target = 0<br />
        <strong>Output:</strong> 0.03125
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>1 &lt;= prob.length &lt;= 1000</code>
        </li>
        <li>
          <code>0 &lt;= prob[i] &lt;= 1</code>
        </li>
        <li>
          <code>0 &lt;= target&nbsp;</code>
          <code>&lt;= prob.length</code>
        </li>
        <li>
          Answers will be accepted as correct if they are within{" "}
          <code>10^-5</code> of the correct answer.
        </li>
      </ul>
    </div>
  ),
  716: (
    <div class="markdown-body div-width">
      <p>
        Design a max stack that supports push, pop, top, peekMax and popMax.
      </p>

      <p></p>
      <ul>
        <li>push(x) -- Push element x onto stack.</li>
        <li>pop() -- Remove the element on top of the stack and return it.</li>
        <li>top() -- Get the element on the top.</li>
        <li>peekMax() -- Retrieve the maximum element in the stack.</li>
        <li>
          popMax() -- Retrieve the maximum element in the stack, and remove it.
          If you find more than one maximum elements, only remove the top-most
          one.
        </li>
      </ul>
      <p></p>

      <p>
        <b>Example 1:</b>
        <br />
      </p>
      <pre>
        MaxStack stack = new MaxStack(); <br />
        stack.push(5);
        <br />
        stack.push(1);
        <br />
        stack.push(5);
        <br />
        stack.top(); -&gt; 5<br />
        stack.popMax(); -&gt; 5<br />
        stack.top(); -&gt; 1<br />
        stack.peekMax(); -&gt; 5<br />
        stack.pop(); -&gt; 1<br />
        stack.top(); -&gt; 5
      </pre>
      <p></p>

      <p>
        <b>Note:</b>
        <br />
      </p>
      <ul>
        <li>-1e7 &lt;= x &lt;= 1e7</li>
        <li>Number of operations won't exceed 10000.</li>
        <li>The last four operations won't be called when stack is empty.</li>
      </ul>
      <p></p>
    </div>
  ),
  426: (
    <div class="markdown-body div-width">
      <p>
        Convert a BST to a sorted circular doubly-linked list in-place. Think of
        the left and right pointers as synonymous to the previous and next
        pointers in a doubly-linked list.
      </p>
      <p>
        Let's take the following BST as an example, it may help you understand
        the problem better:
      </p>
      &nbsp;
      <p>
        <img
          src="https://assets.leetcode.com/uploads/2018/10/12/bstdlloriginalbst.png"
          style={{ width: "100%", maxWidth: 300 }}
          alt="img"
        />
      </p>
      &nbsp;
      <p>
        We want to transform this BST into a circular doubly linked list. Each
        node in a doubly linked list has a predecessor and successor. For a
        circular doubly linked list, the predecessor of the first element is the
        last element, and the successor of the last element is the first
        element.
      </p>
      <p>
        The figure below shows the circular doubly linked list for the BST
        above. The "head" symbol means the node it points to is the smallest
        element of the linked list.
      </p>
      &nbsp;
      <p>
        <img
          src="https://assets.leetcode.com/uploads/2018/10/12/bstdllreturndll.png"
          style={{ width: "100%", maxWidth: 450 }}
          alt="img"
        />
      </p>
      &nbsp;
      <p>
        Specifically, we want to do the transformation in place. After the
        transformation, the left pointer of the tree node should point to its
        predecessor, and the right pointer should point to its successor. We
        should return the pointer to the first element of the linked list.
      </p>
      <p>
        The figure below shows the transformed BST. The solid line indicates the
        successor relationship, while the dashed line means the predecessor
        relationship.
      </p>
      &nbsp;
      <p>
        <img
          src="https://assets.leetcode.com/uploads/2018/10/12/bstdllreturnbst.png"
          style={{ width: "100%", maxWidth: 450 }}
          alt="img"
        />
      </p>
    </div>
  ),
  1188: (
    <div class="markdown-body div-width">
      <p>
        Implement a thread safe bounded&nbsp;blocking queue that has&nbsp;the
        following&nbsp;methods:
      </p>

      <ul>
        <li>
          <code>BoundedBlockingQueue(int capacity)</code> The constructor
          initializes the queue with a maximum <code>capacity</code>.
        </li>
        <li>
          <code>void enqueue(int element)</code> Adds an <code>element</code> to
          the front of the queue. If the queue is full, the calling thread is
          blocked until the queue is no longer full.
        </li>
        <li>
          <code>int dequeue()</code> Returns the element at the rear of the
          queue and removes it. If the queue is empty, the calling thread is
          blocked until the queue is no longer empty.
        </li>
        <li>
          <code>int size()</code>&nbsp;Returns the number of elements currently
          in the queue.
        </li>
      </ul>

      <p>
        Your implementation will be tested using multiple threads at the same
        time. Each thread will either be a producer thread that only makes calls
        to the&nbsp;<code>enqueue</code>&nbsp;method or a consumer thread that
        only makes calls to the&nbsp;<code>dequeue</code>&nbsp;method. The&nbsp;
        <code>size</code>&nbsp;method will be called after every test case.
      </p>

      <p>
        Please do not use built-in implementations of bounded&nbsp;blocking
        queue as this will not be accepted in an interview.
      </p>

      <p>&nbsp;</p>

      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong>
        <br />
        1<br />
        1<br />
        ["BoundedBlockingQueue","enqueue","dequeue", <br />
        "dequeue","enqueue", "enqueue", <br />
        "enqueue","enqueue","dequeue"] <br />
        [[2],[1],[],[],[0],[2],[3],[4],[]]
        <br />
        <strong>Output:</strong>
        <br />
        [1,0,2,2]
        <br />
        <strong>
          Explanation:
          <br />
        </strong>
        Number of producer threads = 1<br />
        Number of consumer threads = 1<br />
        BoundedBlockingQueue queue = new BoundedBlockingQueue(2); // initialize
        the queue with capacity = 2.
        <br />
        queue.enqueue(1); // The producer thread enqueues 1 to the queue.
        <br />
        queue.dequeue(); // The consumer thread calls dequeue and returns 1 from
        the queue.
        <br />
        queue.dequeue(); // Since the queue is empty, the consumer thread is
        blocked.
        <br />
        queue.enqueue(0); // The producer thread enqueues 0 to the queue. The
        consumer thread is unblocked and returns 0 from the queue.
        <br />
        queue.enqueue(2); // The producer thread enqueues 2 to the queue.
        <br />
        queue.enqueue(3); // The producer thread enqueues 3 to the queue.
        <br />
        queue.enqueue(4); // The producer thread is blocked because the queue's
        capacity (2) is reached.
        <br />
        queue.dequeue(); // The consumer thread returns 2 from the queue. The
        producer thread is unblocked and enqueues 4 to the queue.
        <br />
        queue.size(); // 2 elements remaining in the queue. size() is always
        called at the end of each test case.
      </pre>

      <p>&nbsp;</p>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> <br />
        3 <br />
        4<br />
        ["BoundedBlockingQueue","enqueue", <br />
        "enqueue","enqueue", "dequeue", <br />
        "dequeue","dequeue","enqueue"]
        <br />
        [[3],[1],[0],[2],[],[],[],[3]]
        <br />
        <strong>Output:</strong>
        <br />
        [1,0,2,1]
        <br />
        <strong>Explanation:</strong>Number of producer threads = 3 Number of
        consumer threads = 4 BoundedBlockingQueue queue = new
        BoundedBlockingQueue(3); // initialize the queue with capacity = 3.
        queue.enqueue(1); // Producer thread P1 enqueues 1 to the queue.
        queue.enqueue(0); // Producer thread P2 enqueues 0 to the queue.
        queue.enqueue(2); // Producer thread P3 enqueues 2 to the queue.
        queue.dequeue(); // Consumer thread C1 calls dequeue. queue.dequeue();
        // Consumer thread C2 calls dequeue. queue.dequeue(); // Consumer thread
        C3 calls dequeue. queue.enqueue(3); // One of the producer threads
        enqueues 3 to the queue. queue.size(); // 1 element remaining in the
        queue. Since the number of threads for producer/consumer is greater than
        1, we do not know how the threads will be scheduled in the operating
        system, even though the input seems to imply the ordering. Therefore,
        any of the output [1,0,2] or [1,2,0] or [0,1,2] or [0,2,1] or [2,0,1] or
        [2,1,0] will be accepted.
      </pre>
    </div>
  ),
  1242: (
    <div class="markdown-body div-width">
      <p>
        Given a url <code>startUrl</code> and an interface{" "}
        <code>HtmlParser</code>, implement
        <strong>a Multi-threaded web&nbsp;crawler</strong> to crawl all links
        that are under the&nbsp;<strong>same hostname</strong> as&nbsp;
        <code>startUrl</code>.&nbsp;
      </p>

      <p>
        Return&nbsp;all urls obtained by your web crawler in{" "}
        <strong>any</strong> order.
      </p>

      <p>Your crawler should:</p>

      <ul>
        <li>
          Start from the page: <code>startUrl</code>
        </li>
        <li>
          Call <code>HtmlParser.getUrls(url)</code> to get all urls from a
          webpage of given url.
        </li>
        <li>Do not crawl the same link twice.</li>
        <li>
          Explore only the links that are under the{" "}
          <strong>same hostname</strong> as <code>startUrl</code>.
        </li>
      </ul>

      <p>
        <img alt="" src="img/1236_1.png" />
      </p>

      <p>
        As shown in the example url above, the hostname is{" "}
        <code>example.org</code>. For simplicity sake, you may assume
        all&nbsp;urls use <strong>http protocol</strong> without any&nbsp;
        <strong>port</strong> specified. For example, the urls&nbsp;
        <code>http://leetcode.com/problems</code>
        and&nbsp;<code>http://leetcode.com/contest</code> are under the same
        hostname, while urls
        <code>http://example.org/test</code> and{" "}
        <code>http://example.com/abc</code> are not under the same hostname.
      </p>

      <p>
        The <code>HtmlParser</code> interface is defined as such:&nbsp;
      </p>

      <pre>{`interface HtmlParser {
  // Return a list of all urls from a webpage of given <em>url</em>.
  // This is a blocking call, that means it will do HTTP request and return when this request is finished.
  public List&lt;String&gt; getUrls(String url);
}`}</pre>

      <p>
        Note that&nbsp;<code>getUrls(String url)</code>&nbsp;simulates
        performing a&nbsp;HTTP request. You can treat it as a blocking function
        call which waits for a&nbsp;HTTP request to finish. It is guaranteed
        that&nbsp;<code>getUrls(String url)</code> will return the urls within{" "}
        <strong>15ms.&nbsp;</strong> Single-threaded solutions will exceed the
        time limit so, can your multi-threaded web crawler do better?
      </p>

      <p>
        Below&nbsp;are two examples explaining the functionality of the problem,
        for custom testing purposes you'll have three&nbsp;variables&nbsp;
        <code data-stringify-type="code">urls</code>,&nbsp;
        <code data-stringify-type="code">edges</code>&nbsp;and&nbsp;
        <code data-stringify-type="code">startUrl</code>. Notice that you will
        only have access to&nbsp;
        <code data-stringify-type="code">startUrl</code>&nbsp;in your code,
        while&nbsp;<code data-stringify-type="code">urls</code>&nbsp;and&nbsp;
        <code data-stringify-type="code">edges</code>&nbsp;are not directly
        accessible to you in code.
      </p>

      <p>&nbsp;</p>

      <p>
        <strong>Follow up:</strong>
      </p>

      <ul>
        <li>
          Assume we have 10,000 nodes and 1 billion URLs to crawl.&nbsp;We will
          deploy the same software onto each node.&nbsp;The software can know
          about all the nodes. We have to minimize communication between
          machines and make sure each node does equal amount of work. How would
          your web crawler design change?
        </li>
        <li>What if one node fails or does not work?</li>
        <li>How do you know when the crawler is done?</li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Example 1:</strong>
      </p>

      <p>
        <img alt="" src="img/1236_2.png" />
      </p>

      <pre>
        <strong>
          Input: <br />
        </strong>
        urls = [ <br />
        &nbsp; "http://news.yahoo.com", <br />
        &nbsp; "http://news.yahoo.com/news", <br />
        &nbsp; "http://news.yahoo.com/news/topics/", <br />
        &nbsp; "http://news.google.com", <br />
        &nbsp; "http://news.yahoo.com/us" <br />
        ] edges = [[2,0],[2,1],[3,2],[3,1],[0,4]] <br />
        startUrl = "http://news.yahoo.com/news/topics/" <br />
        <strong>Output:</strong> [ <br />
        &nbsp; "http://news.yahoo.com", <br />
        &nbsp; "http://news.yahoo.com/news", <br />
        &nbsp; "http://news.yahoo.com/news/topics/", <br />
        &nbsp; "http://news.yahoo.com/us" <br />]
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <p>
        <strong>
          <img
            alt=""
            src="https://assets.leetcode.com/uploads/2019/10/23/sample_3_1497.png"
            style={{ width: 540, height: 270 }}
          />
        </strong>
      </p>

      <pre>
        <strong>Input:</strong> <br />
        urls = [ <br />
        &nbsp; "http://news.yahoo.com", <br />
        &nbsp; "http://news.yahoo.com/news", <br />
        &nbsp; "http://news.yahoo.com/news/topics/", <br />
        &nbsp; "http://news.google.com" <br />
        ] <br />
        edges = [[0,2],[2,1],[3,2],[3,1],[3,0]] <br />
        startUrl = "http://news.google.com" <br />
        <strong>Output:</strong> ["http://news.google.com"] <br />
        <strong>Explanation: </strong>The startUrl links to all other pages that
        do not share the same hostname.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= urls.length &lt;= 1000</code>
        </li>
        <li>
          <code>1 &lt;= urls[i].length &lt;= 300</code>
        </li>
        <li>
          <code>startUrl</code>&nbsp;is one of the <code>urls</code>.
        </li>
        <li>
          Hostname label must be from 1 to 63 characters long, including the
          dots, may contain only the ASCII letters from 'a' to&nbsp;'z', digits
          from '0' to '9' and the&nbsp;hyphen-minus&nbsp;character ('-').
        </li>
        <li>
          The hostname may not start or end with&nbsp;the hyphen-minus character
          ('-').&nbsp;
        </li>
        <li>
          See:&nbsp;&nbsp;
          <a href="https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_hostnames">
            https://en.wikipedia.org/wiki/Hostname#Restrictions_on_valid_hostnames
          </a>
        </li>
        <li>You may assume there're&nbsp;no duplicates in url library.</li>
      </ul>
    </div>
  ),
  1279: (
    <div class="markdown-body div-width">
      <div class="content__u3I1 question-content__JfgR">
        <div>
          <p>
            There is an intersection of two roads. First road is road A where
            cars travel&nbsp;from North to South in direction 1 and from South
            to North in direction 2. Second road is road B where cars travel
            from West to East in direction 3 and from East to West in direction
            4.
          </p>

          <p>
            <img
              alt=""
              src="https://assets.leetcode.com/uploads/2019/11/11/exp.png"
              style={{ width: 600, height: 417 }}
            />
          </p>

          <p>
            There is a traffic light&nbsp;located on each road before the
            intersection. A traffic light&nbsp;can&nbsp;either be green or red.
          </p>

          <ul>
            <li>
              <strong>Green</strong> means&nbsp;cars can cross the
              intersection&nbsp;in both directions of the road.
            </li>
            <li>
              <strong>Red</strong> means cars in both directions cannot cross
              the intersection and must wait until the light turns green.
            </li>
          </ul>

          <p>
            The traffic lights cannot be green on both roads at the same time.
            That means when the light is green on road A, it is red on&nbsp;road
            B and when the light is green on road B, it is red on&nbsp;road A.
          </p>

          <p>
            Initially, the traffic light is <strong>green</strong> on road A and
            <strong>red</strong>&nbsp;on road B. When the light is green on one
            road, all cars can cross the intersection in both directions until
            the light becomes green on the other road.&nbsp;No two cars
            traveling on different roads should cross at the same time.
          </p>

          <p>
            Design a deadlock-free&nbsp;traffic light controlled system at this
            intersection.
          </p>

          <p>
            Implement the function&nbsp;
            <code>
              void carArrived(carId, roadId, direction, turnGreen, crossCar)
            </code>{" "}
            where:
          </p>

          <ul>
            <li>
              <code>carId</code>&nbsp;is the id of the car that arrived.
            </li>
            <li>
              <code>roadId</code>&nbsp;is the id of the road that the car
              travels&nbsp;on.
            </li>
            <li>
              <code>direction</code>&nbsp;is the direction of the car.
            </li>
            <li>
              <code>turnGreen</code>&nbsp;is a function you can call to turn the
              traffic light to green on the current road.
            </li>
            <li>
              <code>crossCar</code>&nbsp;is a function you can call to let the
              current car cross the intersection.
            </li>
          </ul>

          <p>
            Your answer is considered correct if it avoids cars deadlock in the
            intersection.&nbsp;Turning the light green on a road when it was
            already green is considered a&nbsp;wrong answer.
          </p>

          <p>&nbsp;</p>
          <p>
            <strong>Example 1:</strong>
          </p>

          <pre>
            <strong>Input:</strong>
            <br />
            cars = [1,3,5,2,4], directions = [2,1,2,4,3], arrivalTimes =
            [10,20,30,40,50] <br />
            <strong>Output:</strong> [ <br />
            "Car 1 Has Passed Road A In Direction 2", // Traffic light on road A
            is green, car 1 can cross the intersection. <br />
            "Car 3 Has Passed Road A In Direction 1", // Car 3 crosses the
            intersection as the light is still green. <br />
            "Car 5 Has Passed Road A In Direction 2", // Car 5 crosses the
            intersection as the light is still green. <br />
            "Traffic Light On Road B Is Green", // Car 2 requests green light
            for road B. <br />
            "Car 2 Has Passed Road B In Direction 4", // Car 2 crosses as the
            light is green on road B now. <br />
            "Car 4 Has Passed Road B In Direction 3" // Car 4 crosses the
            intersection as the light is still green. ]
          </pre>

          <p>
            <strong>Example 2:</strong>
          </p>

          <pre>
            <strong>Input:</strong>
            <br />
            cars = [1,2,3,4,5], directions = [2,4,3,3,1], arrivalTimes =
            [10,20,30,40,40] <br />
            <strong>Output:</strong> [ <br />
            "Car 1 Has Passed Road A In Direction 2", // Traffic light on road A
            is green, car 1 can cross the intersection. <br />
            "Traffic Light On Road B Is Green", // Car 2 requests green light
            for road B. <br />
            "Car 2 Has Passed Road B In Direction 4", // Car 2 crosses as the
            light is green on road B now. <br />
            "Car 3 Has Passed Road B In Direction 3", // Car 3 crosses as the
            light is green on road B now. <br />
            "Traffic Light On Road A Is Green", // Car 5 requests green light
            for road A. <br />
            "Car 5 Has Passed Road A In Direction 1", // Car 5 crosses as the
            light is green on road A now. <br />
            "Traffic Light On Road B Is Green", // Car 4 requests green light
            for road B. Car 4 blocked until car 5 crosses and then traffic light
            is green on road B. <br />
            "Car 4 Has Passed Road B In Direction 3" // Car 4 crosses as the
            light is green on road B now. <br />
            ] <br />
            <strong>Explanation:</strong> This is a dead-lock free scenario.
            Note that the scenario when car 4 crosses before turning light into
            green on road A and allowing car 5 to pass is also{" "}
            <strong>correct</strong> and <strong>Accepted</strong> scenario.
          </pre>

          <p>&nbsp;</p>
          <p>
            <strong>Constraints:</strong>
          </p>

          <ul>
            <li>
              <code>1 &lt;= cars.length &lt;= 20</code>
            </li>
            <li>
              <code>cars.length = directions.length</code>
            </li>
            <li>
              <code>cars.length = arrivalTimes.length</code>
            </li>
            <li>
              All values of <code>cars</code> are unique
            </li>
            <li>
              <code>1 &lt;= directions[i] &lt;= 4</code>
            </li>
            <li>
              <code>arrivalTimes</code> is non-decreasing
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
  251: (
    <div class="markdown-body div-width">
      <p>
        Design and implement an iterator to flatten a 2d vector. It should
        support the following operations: <code>next</code> and{" "}
        <code>hasNext</code>.
      </p>
      <p>&nbsp;</p>
      <p>
        <b>Example:</b>
      </p>{" "}
      <pre>
        Vector2D iterator = new Vector2D([[1,2],[3],[4]]);
        <br />
        iterator.next(); // return 1<br />
        iterator.next(); // return 2<br />
        iterator.next(); // return 3<br />
        iterator.hasNext(); // return true
        <br />
        iterator.hasNext(); // return true
        <br />
        iterator.next(); // return 4<br />
        iterator.hasNext(); // return false
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Notes:</strong>
      </p>
      <ul>
        <li>
          Please remember to <b>RESET</b> your class variables declared in
          Vector2D, as static/class variables are{" "}
          <b>persisted across multiple test cases</b>. Please see{" "}
          <a href="https://leetcode.com/faq/" target="_blank" rel="noreferrer">
            here
          </a>{" "}
          for more details.
        </li>
        <li>
          You may assume that <code>next()</code> call will always be valid,
          that is, there will be at least a next element in the 2d vector when{" "}
          <code>next()</code> is called.
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        <b>Follow up:</b>
      </p>
      <p>
        As an added challenge, try to code it using only{" "}
        <a
          href="http://www.cplusplus.com/reference/iterator/iterator/"
          target="_blank"
          rel="noreferrer"
        >
          iterators in C++
        </a>{" "}
        or{" "}
        <a
          href="http://docs.oracle.com/javase/7/docs/api/java/util/Iterator.html"
          target="_blank"
          rel="noreferrer"
        >
          iterators in Java
        </a>
        .
      </p>
    </div>
  ),
  281: (
    <div class="markdown-body div-width">
      <p>
        Given two 1d vectors, implement an iterator to return their elements
        alternately.
      </p>
      <br />
      <p>
        <strong>Example:</strong>
      </p>
      <pre>
        <strong>Input:</strong>
        <br />
        v1 = [1,2]
        <br />
        v2 = [3,4,5,6]
        <br />
        <strong>Output:</strong>
        <br />
        <code>[1,3,2,4,5,6]</code>
        <br />
        <strong>Explanation:</strong> <br />
        By calling <i>next</i> repeatedly until <i>hasNext</i> returns{" "}
        <code>false</code>, &nbsp; the order of elements returned by <i>next</i>{" "}
        should be: <code>[1,3,2,4,5,6]</code>.
      </pre>
      <br />

      <p>
        <strong>Follow up</strong>: What if you are given <code>k</code> 1d
        vectors? How well can your code be extended to such cases?
      </p>

      <p>
        <strong>Clarification </strong>
        <strong>for the follow up question</strong>
        <strong>:</strong>
        <br />
        <br />
        The "Zigzag" order is not clearly defined and is ambiguous for{" "}
        <code>k &gt; 2</code> cases. If "Zigzag" does not look right to you,
        replace "Zigzag" with "Cyclic". For example:
      </p>

      <pre>
        <strong>Input:</strong>
        [1,2,3] [4,5,6,7] [8,9] <br />
        <strong>Output: </strong>
        <code>[1,4,8,2,5,9,3,6,7]</code>.
      </pre>
    </div>
  ),
  604: (
    <div class="markdown-body div-width">
      <p>
        Design and implement a data structure for a compressed string iterator.
        It should support the following operations: <code>next</code> and{" "}
        <code>hasNext</code>.
      </p>

      <p>
        The given compressed string will be in the form of each letter followed
        by a positive integer representing the number of this letter existing in
        the original uncompressed string.
      </p>

      <p>
        <code>next()</code> - if the original string still has uncompressed
        characters, return the next letter; Otherwise return a white space.
        <br />
        <code>hasNext()</code> - Judge whether there is any letter needs to be
        uncompressed.
      </p>

      <p>
        <b>Note:</b>
        <br />
        Please remember to <b>RESET</b> your class variables declared in
        StringIterator, as static/class variables are{" "}
        <b>persisted across multiple test cases</b>. Please see{" "}
        <a href="https://leetcode.com/faq/#different-output">here</a> for more
        details.
      </p>

      <p>
        <b>Example:</b>
      </p>
      <pre>
        StringIterator iterator = new StringIterator("L1e2t1C1o1d1e1");' <br />
        iterator.next(); // return 'L' <br />
        iterator.next(); // return 'e'' <br />
        iterator.next(); // return 'e'' <br />
        iterator.next(); // return 't'' <br />
        iterator.next(); // return 'C'' <br />
        iterator.next(); // return 'o'' <br />
        iterator.next(); // return 'd'' <br />
        iterator.hasNext(); // return true' <br />
        iterator.next(); // return 'e'' <br />
        iterator.hasNext(); // return false' <br />
        iterator.next(); // return ' '
      </pre>
      <p></p>
    </div>
  ),
  1586: (
    <div class="markdown-body div-width">
      <div class="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Implement the <code>BSTIterator</code> class that represents an
            iterator over&nbsp;the
            <strong>
              <a href="https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR)">
                {" "}
                in-order traversal{" "}
              </a>
            </strong>
            &nbsp;of&nbsp;a binary search tree (BST):
          </p>

          <ul>
            <li>
              <code>BSTIterator(TreeNode root)</code> Initializes an object of
              the <code>BSTIterator</code>
              class. The <code>root</code> of the BST is given as part of the
              constructor. The pointer should be initialized to a non-existent
              number smaller than any element in the BST.
            </li>
            <li>
              <code>boolean hasNext()</code> Returns <code>true</code> if there
              exists a number in the traversal to the right of the pointer,
              otherwise returns <code>false</code>.
            </li>
            <li>
              <code>int next()</code> Moves the pointer to the right, then
              returns the number at the pointer.
            </li>
            <li>
              <code>boolean hasPrev()</code> Returns <code>true</code> if there
              exists a number in the traversal to the left of the pointer,
              otherwise returns <code>false</code>.
            </li>
            <li>
              <code>int prev()</code> Moves the pointer to the left, then
              returns the number at the pointer.
            </li>
          </ul>

          <p>
            Notice that by initializing the pointer to a non-existent smallest
            number, the first call to <code>next()</code> will return the
            smallest element in the BST.
          </p>

          <p>
            You may assume that <code>next()</code> and <code>prev()</code>{" "}
            calls will always be valid. That is, there will be at least a
            next/previous number in the in-order traversal&nbsp;when{" "}
            <code>next()</code>/<code>prev()</code> is called.
          </p>

          <p>
            <strong>Follow up:</strong> Could you solve the problem without
            precalculating the values of the tree?
          </p>

          <p>&nbsp;</p>
          <p>
            <strong>Example 1:</strong>
          </p>

          <p>
            <strong>
              <img
                alt=""
                src="https://assets.leetcode.com/uploads/2020/09/14/untitled-diagram-1.png"
                style={{ width: 201, height: 201 }}
              />
            </strong>
          </p>

          <pre>
            <strong>Input</strong> <br />
            ["BSTIterator", "next", "next", "prev", "next", "hasNext",
            <br /> "next", "next", "next", "hasNext", "hasPrev", "prev", "prev"]
            <br />
            [[[7, 3, 15, null, null, 9, 20]], [null], [null], [null]
            <br /> [null], [null], [null], [null], [null], [null], [null],
            [null], [null]]
            <br />
            <strong>Output</strong>
            <br />
            [null, 3, 7, 3, 7, true, 9, 15, 20, false, true, 15, 9]
            <br />
            <strong>Explanation</strong>
            <br />
            // The underlined element is where the pointer currently is.
            <br />
            BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9,
            20]); // state is <u> </u> [3, 7, 9, 15, 20]
            <br />
            bSTIterator.next(); // state becomes [<u>3</u>, 7, 9, 15, 20],
            return 3<br />
            bSTIterator.next(); // state becomes [3, <u>7</u>, 9, 15, 20],
            return 7<br />
            bSTIterator.prev(); // state becomes [<u>3</u>, 7, 9, 15, 20],
            return 3<br />
            bSTIterator.next(); // state becomes [3, <u>7</u>, 9, 15, 20],
            return 7<br />
            bSTIterator.hasNext(); // return true
            <br />
            bSTIterator.next(); // state becomes [3, 7, <u>9</u>, 15, 20],
            return 9<br />
            bSTIterator.next(); // state becomes [3, 7, 9, <u>15</u>, 20],
            return 15
            <br />
            bSTIterator.next(); // state becomes [3, 7, 9, 15, <u>20</u>],
            return 20
            <br />
            bSTIterator.hasNext(); // return false
            <br />
            bSTIterator.hasPrev(); // return true
            <br />
            bSTIterator.prev(); // state becomes [3, 7, 9, <u>15</u>, 20],
            return 15
            <br />
            bSTIterator.prev(); // state becomes [3, 7, <u>9</u>, 15, 20],
            return 9
          </pre>

          <p>&nbsp;</p>
          <p>
            <strong>Constraints:</strong>
          </p>

          <ul>
            <li>
              The number of nodes in the tree is in the range{" "}
              <code>
                [1, 10<sup>5</sup>]
              </code>
              .
            </li>
            <li>
              <code>
                0 &lt;= Node.val &lt;= 10<sup>6</sup>
              </code>
            </li>
            <li>
              At most 10<sup>5</sup> calls will be made to <code>hasNext</code>,
              <code>next</code>, <code>hasPrev</code>, and <code>prev</code>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
  2031: (
    <article role="main" class="blog-post">
      <p>
        You are given a binary array <code>nums</code> containing only the
        integers <code>0</code> and <code>1</code>. Return
        <em>
          {" "}
          the number of <strong>subarrays</strong> in nums that have{" "}
          <strong>more</strong>{" "}
        </em>
        <code>1</code>'<em>s than </em>
        <code>0</code>
        <em>
          's. Since the answer may be very large, return it{" "}
          <strong>modulo</strong>{" "}
        </em>
        <code>
          10<sup>9</sup> + 7
        </code>
        .
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous sequence of elements within
        an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,1,1,0,1] <br />
        <strong>Output:</strong> 9 <br />
        <strong>Explanation:</strong> <br />
        The subarrays of size 1 that have more ones than zeros are: [1], [1],
        [1] <br />
        The subarrays of size 2 that have more ones than zeros are: [1,1] <br />
        The subarrays of size 3 that have more ones than zeros are: [0,1,1],
        [1,1,0], [1,0,1] <br />
        The subarrays of size 4 that have more ones than zeros are: [1,1,0,1]{" "}
        <br />
        The subarrays of size 5 that have more ones than zeros are: [0,1,1,0,1]
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0] <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> <br />
        No subarrays have more ones than zeros.
      </pre>

      <p>
        <strong>Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1] <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> <br />
        The subarrays of size 1 that have more ones than zeros are: [1]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= nums[i] &lt;= 1</code>
        </li>
      </ul>
    </article>
  ),
  2519: (
    <article role="main" class="blog-post">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code> and a positive integer <code>k</code>.
      </p>

      <p>
        We call an index <code>i</code> <strong>k-big</strong> if the following
        conditions are satisfied:
      </p>

      <ul>
        <li>
          There exist at least <code>k</code> different indices{" "}
          <code>idx1</code> such that <code>idx1 &lt; i</code> and{" "}
          <code>nums[idx1] &lt; nums[i]</code>.
        </li>
        <li>
          There exist at least <code>k</code> different indices{" "}
          <code>idx2</code> such that <code>idx2 &gt; i</code> and{" "}
          <code>nums[idx2] &lt; nums[i]</code>.
        </li>
      </ul>

      <p>
        Return <em>the number of k-big indices</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,3,6,5,2,3], k = 2 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> There are only two 2-big indices in nums:{" "}
        <br />
        - i = 2 --&gt; There are two valid idx1: 0 and 1. There are three valid
        idx2: 2, 3, and 4. <br />- i = 3 --&gt; There are two valid idx1: 0 and
        1. There are two valid idx2: 3 and 4.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1], k = 3 <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> There are no 3-big indices in nums.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= nums[i], k &lt;= nums.length</code>
        </li>
      </ul>
    </article>
  ),
  3109: (
    <article class="markdown-body entry-content container-lg" itemprop="text">
      <p dir="auto">
        Given an array <code>perm</code> of length <code>n</code> which is a
        permutation of <code>[1, 2, ..., n]</code>, return the index of{" "}
        <code>perm</code> in the <span>lexicographically sorted</span> array of
        all of the permutations of <code>[1, 2, ..., n]</code>.
      </p>
      <p dir="auto">
        Since the answer may be very large, return it <strong>modulo</strong>{" "}
        <code>
          10<sup>9</sup>&nbsp;+ 7
        </code>
        .
      </p>
      <p dir="auto">&nbsp;</p>
      <p dir="auto">
        <strong>Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> <span>perm = [1,2]</span>
        <br />
        <strong>Output:</strong> <span>0</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        There are only two permutations in the following order:
        <code>[1,2]</code>, <code>[2,1]</code>
        <br />
        And <code>[1,2]</code> is at index 0.
      </pre>
      <p dir="auto">
        <strong>Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> <span>perm = [3,1,2]</span>
        <br />
        <strong>Output:</strong> <span>4</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        There are only six permutations in the following order:
        <code>[1,2,3]</code>, <code>[1,3,2]</code>, <code>[2,1,3]</code>,{" "}
        <code>[2,3,1]</code>, <code>[3,1,2]</code>, <code>[3,2,1]</code>
        <br />
        And <code>[3,1,2]</code> is at index 4.
      </pre>
      <p dir="auto">&nbsp;</p>
      <p dir="auto">
        <strong>Constraints:</strong>
      </p>
      <ul dir="auto">
        <li>
          <code>
            1 &lt;= n == perm.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>perm</code> is a permutation of <code>[1, 2, ..., n]</code>.
        </li>
      </ul>
    </article>
  ),
  380: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Implement the <code>RandomizedSet</code> class:
      </p>

      <ul>
        <li>
          <code>RandomizedSet()</code> Initializes the{" "}
          <code>RandomizedSet</code> object.
        </li>
        <li>
          <code>bool insert(int val)</code> Inserts an item <code>val</code>{" "}
          into the set if not present. Returns <code>true</code> if the item was
          not present, <code>false</code> otherwise.
        </li>
        <li>
          <code>bool remove(int val)</code> Removes an item <code>val</code>{" "}
          from the set if present. Returns <code>true</code> if the item was
          present, <code>false</code> otherwise.
        </li>
        <li>
          <code>int getRandom()</code> Returns a random element from the current
          set of elements (it's guaranteed that at least one element exists when
          this method is called). Each element must have the{" "}
          <b>same probability</b> of being returned.
        </li>
      </ul>

      <p>
        You must implement the functions of the class such that each function
        works in&nbsp;<strong>average</strong>&nbsp;<code>O(1)</code>&nbsp;time
        complexity.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input</strong>
        <br />
        ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove",
        "insert", "getRandom"]
        <br />
        [[], [1], [2], [2], [], [1], [2], []]
        <br />
        <strong>Output</strong>
        <br />
        [null, true, false, true, 2, true, false, 2]
        <br />
        <strong>Explanation</strong> <br />
        RandomizedSet randomizedSet = new RandomizedSet();
        <br />
        randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was
        inserted successfully.
        <br />
        randomizedSet.remove(2); // Returns false as 2 does not exist in the
        set.
        <br />
        randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now
        contains [1,2].
        <br />
        randomizedSet.getRandom(); // getRandom() should return either 1 or 2
        randomly.
        <br />
        randomizedSet.remove(1); // Removes 1 from the set, returns true. Set
        now contains [2].
        <br />
        randomizedSet.insert(2); // 2 was already in the set, so return false.
        <br />
        randomizedSet.getRandom(); // Since 2 is the only number in the set,
        getRandom() will always return 2.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            -2<sup>31</sup> &lt;= val &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
        <li>
          At most <code>2 *&nbsp;</code>
          <code>
            10<sup>5</sup>
          </code>{" "}
          calls will be made to <code>insert</code>, <code>remove</code>, and{" "}
          <code>getRandom</code>.
        </li>
        <li>
          There will be <strong>at least one</strong> element in the data
          structure when <code>getRandom</code> is called.
        </li>
      </ul>
    </div>
  ),
  381: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        <code>RandomizedCollection</code> is a data structure that contains a
        collection of numbers, possibly duplicates (i.e., a multiset). It should
        support inserting and removing specific elements and also reporting a
        random element.
      </p>

      <p>
        Implement the <code>RandomizedCollection</code> class:
      </p>

      <ul>
        <li>
          <code>RandomizedCollection()</code> Initializes the empty{" "}
          <code>RandomizedCollection</code> object.
        </li>
        <li>
          <code>bool insert(int val)</code> Inserts an item <code>val</code>{" "}
          into the multiset, even if the item is already present. Returns{" "}
          <code>true</code> if the item is not present, <code>false</code>{" "}
          otherwise.
        </li>
        <li>
          <code>bool remove(int val)</code> Removes an item <code>val</code>{" "}
          from the multiset if present. Returns <code>true</code> if the item is
          present, <code>false</code> otherwise. Note that if <code>val</code>{" "}
          has multiple occurrences in the multiset, we only remove one of them.
        </li>
        <li>
          <code>int getRandom()</code> Returns a random element from the current
          multiset of elements. The probability of each element being returned
          is <strong>linearly related</strong> to the number of the same values
          the multiset contains.
        </li>
      </ul>

      <p>
        You must implement the functions of the class such that each function
        works on <strong>average</strong> <code>O(1)</code> time complexity.
      </p>

      <p>
        <strong>Note:</strong> The test cases are generated such that{" "}
        <code>getRandom</code> will only be called if there is{" "}
        <strong>at least one</strong> item in the{" "}
        <code>RandomizedCollection</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input</strong> <br />
        ["RandomizedCollection", "insert", "insert", "insert", <br />
        "getRandom", "remove", "getRandom"] <br />
        [[], [1], [1], [2], [], [1], []] <br />
        <strong>Output</strong> <br />
        [null, true, false, true, 2, true, 1] <br />
        <strong>Explanation</strong> <br />
        RandomizedCollection randomizedCollection = new RandomizedCollection();{" "}
        <br />
        randomizedCollection.insert(1); // return true since the collection does
        not contain 1. <br />
        // Inserts 1 into the collection. <br />
        randomizedCollection.insert(1); // return false since the collection
        contains 1. <br />
        // Inserts another 1 into the collection. Collection now contains [1,1].{" "}
        <br />
        randomizedCollection.insert(2); // return true since the collection does
        not contain 2. <br />
        // Inserts 2 into the collection. Collection now contains [1,1,2].{" "}
        <br />
        randomizedCollection.getRandom(); // getRandom should: <br />
        // - return 1 with probability 2/3, or <br />
        // - return 2 with probability 1/3. <br />
        randomizedCollection.remove(1); // return true since the collection
        contains 1. <br />
        // Removes 1 from the collection. Collection now contains [1,2]. <br />
        randomizedCollection.getRandom(); // getRandom should return 1 or 2,
        both equally likely.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            -2<sup>31</sup> &lt;= val &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
        <li>
          At most{" "}
          <code>
            2 * 10<sup>5</sup>
          </code>{" "}
          calls <strong>in total</strong> will be made to <code>insert</code>,{" "}
          <code>remove</code>, and <code>getRandom</code>.
        </li>
        <li>
          There will be <strong>at least one</strong> element in the data
          structure when <code>getRandom</code> is called.
        </li>
      </ul>
    </div>
  ),
  384: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code>, design an algorithm to
        randomly shuffle the array. All permutations of the array should be{" "}
        <strong>equally likely</strong> as a result of the shuffling.
      </p>

      <p>
        Implement the <code>Solution</code> class:
      </p>

      <ul>
        <li>
          <code>Solution(int[] nums)</code> Initializes the object with the
          integer array <code>nums</code>.
        </li>
        <li>
          <code>int[] reset()</code> Resets the array to its original
          configuration and returns it.
        </li>
        <li>
          <code>int[] shuffle()</code> Returns a random shuffling of the array.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input</strong> <br />
        ["Solution", "shuffle", "reset", "shuffle"] <br />
        [[[1, 2, 3]], [], [], []] <br />
        <strong>Output</strong> <br />
        [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]] <br />
        <strong>Explanation</strong> <br />
        Solution solution = new Solution([1, 2, 3]); <br />
        solution.shuffle(); // Shuffle the array [1,2,3] and return its result.{" "}
        <br />
        // Any permutation of [1,2,3] must be equally likely to be returned.{" "}
        <br />
        // Example: return [3, 1, 2] <br />
        solution.reset(); // Resets the array back to its original configuration
        [1,2,3]. Return [1, 2, 3] <br />
        solution.shuffle(); // Returns the random shuffling of array [1,2,3].
        Example: return [1, 3, 2]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 50</code>
        </li>
        <li>
          <code>
            -10<sup>6</sup> &lt;= nums[i] &lt;= 10<sup>6</sup>
          </code>
        </li>
        <li>
          All the elements of <code>nums</code> are <strong>unique</strong>.
        </li>
        <li>
          At most{" "}
          <code>
            10<sup>4</sup>
          </code>{" "}
          calls <strong>in total</strong> will be made to <code>reset</code> and{" "}
          <code>shuffle</code>.
        </li>
      </ul>
    </div>
  ),
  528: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> array of positive integers{" "}
        <code>w</code> where <code>w[i]</code> describes the{" "}
        <strong>weight</strong> of the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        index.
      </p>
      <p>
        You need to implement the function <code>pickIndex()</code>, which{" "}
        <strong>randomly</strong> picks an index in the range{" "}
        <code>[0, w.length - 1]</code> (<strong>inclusive</strong>) and returns
        it. The <strong>probability</strong> of picking an index <code>i</code>{" "}
        is <code>w[i] / sum(w)</code>.
      </p>
      <ul>
        <li>
          For example, if <code>w = [1, 3]</code>, the probability of picking
          index <code>0</code> is <code>1 / (1 + 3) = 0.25</code> (i.e.,{" "}
          <code>25%</code>), and the probability of picking index <code>1</code>{" "}
          is <code>3 / (1 + 3) = 0.75</code> (i.e., <code>75%</code>).
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input</strong> <br />
        ["Solution","pickIndex"] <br />
        [[[1]],[]] <br />
        <strong>Output</strong> <br />
        [null,0] <br />
        <strong>Explanation</strong>
        Solution solution = new Solution([1]); solution.pickIndex(); // return
        0. The only option is to return 0 since there is only one element in w.
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>{" "}
      <pre>
        <strong>Input</strong> <br />
        ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]{" "}
        <br />
        [[[1,3]],[],[],[],[],[]] <br />
        <strong>Output</strong> <br />
        [null,1,1,1,1,0] <br />
        <strong>Explanation</strong> <br />
        Solution solution = new Solution([1, 3]); <br />
        solution.pickIndex(); // return 1. It is returning the second element
        (index = 1) that has a probability of 3/4. <br />
        solution.pickIndex(); // return 1 <br />
        solution.pickIndex(); // return 1 <br />
        solution.pickIndex(); // return 1 <br />
        solution.pickIndex(); // return 0. It is returning the first element
        (index = 0) that has a probability of 1/4. <br />
        <br />
        Since this is a randomization problem, multiple answers are allowed.{" "}
        <br />
        All of the following outputs can be considered correct: <br />
        [null,1,1,1,1,0] <br />
        [null,1,1,1,1,1] <br />
        [null,1,1,1,0,0] <br />
        [null,1,1,1,0,1] <br />
        [null,1,0,1,0,0] <br />
        ...... <br />
        and so on.
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>
            1 &lt;= w.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= w[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>pickIndex</code> will be called at most{" "}
          <code>
            10<sup>4</sup>
          </code>{" "}
          times.
        </li>
      </ul>
    </div>
  ),
  1515: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        A delivery company wants to build a new service center in a new city.
        The company knows the positions of all the customers in this city on a
        2D-Map and wants to build the new center in a position such that{" "}
        <strong>
          the sum of the euclidean distances to all customers is minimum
        </strong>
        .
      </p>
      <p>
        Given an array <code>positions</code> where{" "}
        <code>
          positions[i] = [x<sub>i</sub>, y<sub>i</sub>]
        </code>{" "}
        is the position of the <code>ith</code> customer on the map, return{" "}
        <em>the minimum sum of the euclidean distances</em> to all customers.
      </p>
      <p>
        In other words, you need to choose the position of the service center{" "}
        <code>
          [x<sub>centre</sub>, y<sub>centre</sub>]
        </code>{" "}
        such that the following formula is minimized:
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/06/25/q4_edited.jpg"
      />
      <p>
        Answers within{" "}
        <code>
          10<sup>-5</sup>
        </code>{" "}
        of the actual value will be accepted.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>{" "}
      <br />
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/06/25/q4_e1.jpg"
        style={{ width: 377, height: 362 }}
      />{" "}
      <br />
      <pre>
        <strong>Input:</strong> positions = [[0,1],[1,0],[1,2],[2,1]] <br />
        <strong>Output:</strong> 4.00000 <br />
        <strong>Explanation:</strong> As shown, you can see that choosing [x
        <sub>centre</sub>, y<sub>centre</sub>] = [1, 1] will make the distance
        to each customer = 1, the sum of all distances is 4 which is the minimum
        possible we can achieve.
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>{" "}
      <br />
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/06/25/q4_e3.jpg"
        style={{ width: 419, height: 419 }}
      />{" "}
      <br />
      <pre>
        <strong>Input:</strong> positions = [[1,1],[3,3]] <br />
        <strong>Output:</strong> 2.82843 <br />
        <strong>Explanation:</strong> The minimum possible sum of distances =
        sqrt(2) + sqrt(2) = 2.82843
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>1 &lt;= positions.length &lt;= 50</code>
        </li>
        <li>
          <code>positions[i].length == 2</code>
        </li>
        <li>
          <code>
            0 &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 100
          </code>
        </li>
      </ul>
    </div>
  ),
  239: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array of integers&nbsp;<code>nums</code>, there is a
        sliding window of size <code>k</code> which is moving from the very left
        of the array to the very right. You can only see the <code>k</code>{" "}
        numbers in the window. Each time the sliding window moves right by one
        position.
      </p>

      <p>
        Return <em>the max sliding window</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,-1,-3,5,3,6,7], k = 3 <br />
        <strong>Output:</strong> [3,3,5,5,6,7] <br />
        <strong>Explanation:</strong>
        {`
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       <strong>3</strong>
 1 [3  -1  -3] 5  3  6  7       <strong>3</strong>
 1  3 [-1  -3  5] 3  6  7      <strong> 5</strong>
 1  3  -1 [-3  5  3] 6  7       <strong>5</strong>
 1  3  -1  -3 [5  3  6] 7       <strong>6</strong>
 1  3  -1  -3  5 [3  6  7]      <strong>7</strong>
`}
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1], k = 1<br />
        <strong>Output:</strong> [1]
        <br />
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= nums.length</code>
        </li>
      </ul>
    </div>
  ),
  862: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> and an integer <code>k</code>,
        return{" "}
        <em>
          the length of the shortest non-empty <strong>subarray</strong> of{" "}
        </em>
        <code>nums</code>
        <em> with a sum of at least </em>
        <code>k</code>. If there is no such <strong>subarray</strong>, return{" "}
        <code>-1</code>.
      </p>

      <p>
        A <strong>subarray</strong> is a <strong>contiguous</strong> part of an
        array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [1], k = 1 <br />
        <strong>Output:</strong> 1 <br />
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [1,2], k = 4 <br />
        <strong>Output:</strong> -1 <br />
      </pre>
      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [2,-1,2], k = 3 <br />
        <strong>Output:</strong> 3
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= k &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  918: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a <strong>circular integer array</strong> <code>nums</code> of
        length <code>n</code>, return{" "}
        <em>
          the maximum possible sum of a non-empty <strong>subarray</strong> of{" "}
        </em>
        <code>nums</code>.
      </p>

      <p>
        A <strong>circular array</strong> means the end of the array connects to
        the beginning of the array. Formally, the next element of{" "}
        <code>nums[i]</code> is <code>nums[(i + 1) % n]</code> and the previous
        element of <code>nums[i]</code> is <code>nums[(i - 1 + n) % n]</code>.
      </p>

      <p>
        A <strong>subarray</strong> may only include each element of the fixed
        buffer <code>nums</code> at most once. Formally, for a subarray{" "}
        <code>nums[i], nums[i + 1], ..., nums[j]</code>, there does not exist{" "}
        <code>i &lt;= k1</code>, <code>k2 &lt;= j</code> with{" "}
        <code>k1 % n == k2 % n</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,-2,3,-2] <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> Subarray [3] has maximum sum 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,-3,5]
        <br />
        <strong>Output:</strong> 10
        <br />
        <strong>Explanation:</strong> Subarray [5,5] has maximum sum 5 + 5 = 10.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [-3,-2,-3]
        <br />
        <strong>Output:</strong> -2
        <br />
        <strong>Explanation:</strong> Subarray [-2] has maximum sum -2.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == nums.length</code>
        </li>
        <li>
          <code>
            1 &lt;= n &lt;= 3 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -3 * 10<sup>4</sup> &lt;= nums[i] &lt;= 3 * 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1425: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> and an integer <code>k</code>,
        return the maximum sum of a <strong>non-empty</strong> subsequence of
        that array such that for every two <strong>consecutive</strong> integers
        in the subsequence, <code>nums[i]</code> and <code>nums[j]</code>, where{" "}
        <code>i &lt; j</code>, the condition <code>j - i &lt;= k</code> is
        satisfied.
      </p>

      <p>
        A <em>subsequence</em> of an array is obtained by deleting some number
        of elements (can be zero) from the array, leaving the remaining elements
        in their original order.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [10,2,-10,5,20], k = 2<br />
        <strong>Output:</strong> 37
        <br />
        <b>Explanation:</b> The subsequence is [10, 2, 5, 20].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [-1,-2,-3], k = 1 <br />
        <strong>Output:</strong> -1
        <br />
        <b>Explanation:</b> The subsequence must be non-empty, so we choose the
        largest number.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [10,-2,-10,-5,20], k = 2<br />
        <strong>Output:</strong> 23
        <br />
        <b>Explanation:</b> The subsequence is [10, -2, -5, 20].
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1438: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of integers <code>nums</code> and an integer{" "}
        <code>limit</code>, return the size of the longest{" "}
        <strong>non-empty</strong> subarray such that the absolute difference
        between any two elements of this subarray is less than or equal to{" "}
        <code>limit</code>
        <em>.</em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [8,2,4,7], limit = 4 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> All subarrays are: <br />
        [8] with maximum absolute diff |8-8| = 0 &lt;= 4.
        <br />
        [8,2] with maximum absolute diff |8-2| = 6 &gt; 4. <br />
        [8,2,4] with maximum absolute diff |8-2| = 6 &gt; 4.
        <br />
        [8,2,4,7] with maximum absolute diff |8-2| = 6 &gt; 4.
        <br />
        [2] with maximum absolute diff |2-2| = 0 &lt;= 4.
        <br />
        [2,4] with maximum absolute diff |2-4| = 2 &lt;= 4.
        <br />
        [2,4,7] with maximum absolute diff |2-7| = 5 &gt; 4.
        <br />
        [4] with maximum absolute diff |4-4| = 0 &lt;= 4.
        <br />
        [4,7] with maximum absolute diff |4-7| = 3 &lt;= 4.
        <br />
        [7] with maximum absolute diff |7-7| = 0 &lt;= 4. <br />
        Therefore, the size of the longest subarray is 2.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [10,1,2,4,7,2], limit = 5<br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> The subarray [2,4,7,2] is the longest
        since the maximum absolute diff is |2-7| = 5 &lt;= 5.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [4,2,2,2,4,4,2,2], limit = 0<br />
        <strong>Output:</strong> 3
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= limit &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1499: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array <code>points</code> containing the coordinates of
        points on a 2D plane, sorted by the x-values, where{" "}
        <code>
          points[i] = [x<sub>i</sub>, y<sub>i</sub>]
        </code>{" "}
        such that{" "}
        <code>
          x<sub>i</sub> &lt; x<sub>j</sub>
        </code>{" "}
        for all <code>1 &lt;= i &lt; j &lt;= points.length</code>. You are also
        given an integer <code>k</code>.
      </p>

      <p>
        Return <em>the maximum value of the equation </em>
        <code>
          y<sub>i</sub> + y<sub>j</sub> + |x<sub>i</sub> - x<sub>j</sub>|
        </code>{" "}
        where{" "}
        <code>
          |x<sub>i</sub> - x<sub>j</sub>| &lt;= k
        </code>{" "}
        and <code>1 &lt;= i &lt; j &lt;= points.length</code>.
      </p>

      <p>
        It is guaranteed that there exists at least one pair of points that
        satisfy the constraint{" "}
        <code>
          |x<sub>i</sub> - x<sub>j</sub>| &lt;= k
        </code>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> points = [[1,3],[2,0],[5,10],[6,-10]], k = 1{" "}
        <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> The first two points satisfy the condition
        |x<sub>i</sub> - x<sub>j</sub>| &lt;= 1 and if we calculate the equation
        we get 3 + 0 + |1 - 2| = 4. Third and fourth points also satisfy the
        condition and give a value of 10 + -10 + |5 - 6| = 1. No other pairs
        satisfy the condition, so we return the max of 4 and 1.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> points = [[0,0],[3,0],[9,2]], k = 3 <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation: </strong>Only the first two points have an absolute
        difference of 3 or less in the x-values, and give the value of 0 + 0 +
        |0 - 3| = 3.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            2 &lt;= points.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>points[i].length == 2</code>
        </li>
        <li>
          <code>
            -10<sup>8</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10
            <sup>8</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 2 * 10<sup>8</sup>
          </code>
        </li>
        <li>
          <code>
            x<sub>i</sub> &lt; x<sub>j</sub>
          </code>{" "}
          for all <code>1 &lt;= i &lt; j &lt;= points.length</code>
        </li>
        <li>
          <code>
            x<sub>i</sub>
          </code>{" "}
          form a strictly increasing sequence.
        </li>
      </ul>
    </div>
  ),
  1687: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You have the task of delivering some boxes from storage to their ports
        using only one ship. However, this ship has a <strong>limit</strong> on
        the <strong>number of boxes</strong> and the{" "}
        <strong>total weight</strong> that it can carry.
      </p>

      <p>
        You are given an array <code>boxes</code>, where{" "}
        <code>
          boxes[i] = [ports<sub>​​i</sub>​, weight<sub>i</sub>]
        </code>
        , and three integers <code>portsCount</code>, <code>maxBoxes</code>, and{" "}
        <code>maxWeight</code>.
      </p>

      <ul>
        <li>
          <code>
            ports<sub>​​i</sub>
          </code>{" "}
          is the port where you need to deliver the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          box and{" "}
          <code>
            weights<sub>i</sub>
          </code>{" "}
          is the weight of the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          box.
        </li>
        <li>
          <code>portsCount</code> is the number of ports.
        </li>
        <li>
          <code>maxBoxes</code> and <code>maxWeight</code> are the respective
          box and weight limits of the ship.
        </li>
      </ul>

      <p>
        The boxes need to be delivered{" "}
        <strong>in the order they are given</strong>. The ship will follow these
        steps:
      </p>

      <ul>
        <li>
          The ship will take some number of boxes from the <code>boxes</code>{" "}
          queue, not violating the <code>maxBoxes</code> and{" "}
          <code>maxWeight</code> constraints.
        </li>
        <li>
          For each loaded box <strong>in order</strong>, the ship will make a{" "}
          <strong>trip</strong> to the port the box needs to be delivered to and
          deliver it. If the ship is already at the correct port, no{" "}
          <strong>trip</strong> is needed, and the box can immediately be
          delivered.
        </li>
        <li>
          The ship then makes a return <strong>trip</strong> to storage to take
          more boxes from the queue.
        </li>
      </ul>

      <p>
        The ship must end at storage after all the boxes have been delivered.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>minimum</strong> number of <strong>trips</strong> the ship
          needs to make to deliver all boxes to their respective ports.
        </em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> boxes = [[1,1],[2,1],[1,1]], portsCount = 2,
        maxBoxes = 3, maxWeight = 3 <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> The optimal strategy is as follows: <br />
        - The ship takes all the boxes in the queue, goes to port 1, then port
        2, then port 1 again, then returns to storage. 4 trips. <br />
        So the total number of trips is 4. <br /> <br />
        Note that the first and third boxes cannot be delivered together because
        the boxes need to be delivered in order (i.e. the second box needs to be
        delivered at port 2 before the third box).
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> boxes = [[1,2],[3,3],[3,1],[3,1],[2,4]],
        portsCount = 3, maxBoxes = 3, maxWeight = 6 <br />
        <strong>Output:</strong> 6 <br />
        <strong>Explanation:</strong> The optimal strategy is as follows: <br />
        - The ship takes the first box, goes to port 1, then returns to storage.
        2 trips. <br />
        - The ship takes the second, third and fourth boxes, goes to port 3,
        then returns to storage. 2 trips. <br />
        - The ship takes the fifth box, goes to port 2, then returns to storage.
        2 trips. <br />
        So the total number of trips is 2 + 2 + 2 = 6.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> boxes = [[1,4],[1,2],[2,1],[2,1],[3,2],[3,4]],
        portsCount = 3, maxBoxes = 6, maxWeight = 7 <br />
        <strong>Output:</strong> 6 <br />
        <strong>Explanation:</strong> The optimal strategy is as follows: <br />
        - The ship takes the first and second boxes, goes to port 1, then
        returns to storage. 2 trips. <br />
        - The ship takes the third and fourth boxes, goes to port 2, then
        returns to storage. 2 trips. <br />
        - The ship takes the fifth and sixth boxes, goes to port 3, then returns
        to storage. 2 trips. <br />
        So the total number of trips is 2 + 2 + 2 = 6.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= boxes.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= portsCount, maxBoxes, maxWeight &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= ports<sub>​​i</sub> &lt;= portsCount
          </code>
        </li>
        <li>
          <code>
            1 &lt;= weights<sub>i</sub> &lt;= maxWeight
          </code>
        </li>
      </ul>
    </div>
  ),
  1696: (
    <>
      <div class="elfjS" data-track-load="description_content">
        <p>
          You are given a <strong>0-indexed</strong> integer array{" "}
          <code>nums</code> and an integer <code>k</code>.
        </p>

        <p>
          You are initially standing at index <code>0</code>. In one move, you
          can jump at most <code>k</code> steps forward without going outside
          the boundaries of the array. That is, you can jump from index{" "}
          <code>i</code> to any index in the range{" "}
          <code>[i + 1, min(n - 1, i + k)]</code> <strong>inclusive</strong>.
        </p>

        <p>
          You want to reach the last index of the array (index{" "}
          <code>n - 1</code>). Your <strong>score</strong> is the{" "}
          <strong>sum</strong> of all <code>nums[j]</code> for each index{" "}
          <code>j</code> you visited in the array.
        </p>

        <p>
          Return{" "}
          <em>
            the <strong>maximum score</strong> you can get
          </em>
          .
        </p>

        <p>&nbsp;</p>
        <p>
          <strong class="example">Example 1:</strong>
        </p>

        <pre>
          <strong>Input:</strong> nums = [<u>1</u>,<u>-1</u>,-2,<u>4</u>,-7,
          <u>3</u>], k = 2 <br />
          <strong>Output:</strong> 7 <br />
          <strong>Explanation:</strong> You can choose your jumps forming the
          subsequence [1,-1,4,3] (underlined above). The sum is 7.
        </pre>

        <p>
          <strong class="example">Example 2:</strong>
        </p>

        <pre>
          <strong>Input:</strong> nums = [<u>10</u>,-5,-2,<u>4</u>,0,<u>3</u>],
          k = 3 <br />
          <strong>Output:</strong> 17 <br />
          <strong>Explanation:</strong> You can choose your jumps forming the
          subsequence [10,4,3] (underlined above). The sum is 17.
        </pre>

        <p>
          <strong class="example">Example 3:</strong>
        </p>

        <pre>
          <strong>Input:</strong> nums = [1,-5,-20,4,-1,3,-6,-3], k = 2 <br />
          <strong>Output:</strong> 0
        </pre>

        <p>&nbsp;</p>
        <p>
          <strong>Constraints:</strong>
        </p>

        <ul>
          <li>
            <code>
              1 &lt;= nums.length, k &lt;= 10<sup>5</sup>
            </code>
          </li>
          <li>
            <code>
              -10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup>
            </code>
          </li>
        </ul>
      </div>
    </>
  ),
  2071: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You have <code>n</code> tasks and <code>m</code> workers. Each task has
        a strength requirement stored in a <strong>0-indexed</strong> integer
        array <code>tasks</code>, with the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        task requiring <code>tasks[i]</code> strength to complete. The strength
        of each worker is stored in a <strong>0-indexed</strong> integer array{" "}
        <code>workers</code>, with the{" "}
        <code>
          j<sup>th</sup>
        </code>{" "}
        worker having <code>workers[j]</code> strength. Each worker can only be
        assigned to a <strong>single</strong> task and must have a strength{" "}
        <strong>greater than or equal</strong> to the task's strength
        requirement (i.e., <code>workers[j] &gt;= tasks[i]</code>).
      </p>

      <p>
        Additionally, you have <code>pills</code> magical pills that will{" "}
        <strong>increase a worker's strength</strong> by <code>strength</code>.
        You can decide which workers receive the magical pills, however, you may
        only give each worker <strong>at most one</strong> magical pill.
      </p>

      <p>
        Given the <strong>0-indexed </strong>integer arrays <code>tasks</code>{" "}
        and <code>workers</code> and the integers <code>pills</code> and{" "}
        <code>strength</code>, return{" "}
        <em>
          the <strong>maximum</strong> number of tasks that can be completed.
        </em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> <br />
        tasks = [
        <u>
          <strong>3</strong>
        </u>
        ,
        <u>
          <strong>2</strong>
        </u>
        ,
        <u>
          <strong>1</strong>
        </u>
        ], <br />
        workers = [
        <u>
          <strong>0</strong>
        </u>
        ,
        <u>
          <strong>3</strong>
        </u>
        ,
        <u>
          <strong>3</strong>
        </u>
        ], pills = 1, strength = 1<strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong>
        <br />
        We can assign the magical pill and tasks as follows:
        <br />
        - Give the magical pill to worker 0.
        <br />
        - Assign worker 0 to task 2 (0 + 1 &gt;= 1)
        <br />
        - Assign worker 1 to task 1 (3 &gt;= 2)
        <br />- Assign worker 2 to task 0 (3 &gt;= 3)
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> <br />
        tasks = [
        <u>
          <strong>5</strong>
        </u>
        ,4],
        <br />
        workers = [
        <u>
          <strong>0</strong>
        </u>
        ,0,0], pills = 1, strength = 5<br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong>
        <br />
        We can assign the magical pill and tasks as follows:
        <br />
        - Give the magical pill to worker 0.
        <br />- Assign worker 0 to task 0 (0 + 5 &gt;= 5)
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong>
        <br />
        tasks = [
        <u>
          <strong>10</strong>
        </u>
        ,
        <u>
          <strong>15</strong>
        </u>
        ,30],
        <br />
        workers = [
        <u>
          <strong>0</strong>
        </u>
        ,
        <u>
          <strong>10</strong>
        </u>
        ,10,10,10], pills = 3, strength = 10
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong>
        <br />
        We can assign the magical pills and tasks as follows:
        <br />
        - Give the magical pill to worker 0 and worker 1.
        <br />
        - Assign worker 0 to task 0 (0 + 10 &gt;= 10)
        <br />
        - Assign worker 1 to task 1 (10 + 10 &gt;= 15)
        <br />
        The last pill is not given because it will not make any worker strong
        enough for the last task.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == tasks.length</code>
        </li>
        <li>
          <code>m == workers.length</code>
        </li>
        <li>
          <code>
            1 &lt;= n, m &lt;= 5 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= pills &lt;= m</code>
        </li>
        <li>
          <code>
            0 &lt;= tasks[i], workers[j], strength &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2407: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code> and an integer{" "}
        <code>k</code>.
      </p>

      <p>
        Find the longest subsequence of <code>nums</code> that meets the
        following requirements:
      </p>

      <ul>
        <li>
          The subsequence is <strong>strictly increasing</strong> and
        </li>
        <li>
          The difference between adjacent elements in the subsequence is{" "}
          <strong>at most</strong> <code>k</code>.
        </li>
      </ul>

      <p>
        Return
        <em>
          {" "}
          the length of the <strong>longest</strong>{" "}
          <strong>subsequence</strong> that meets the requirements.
        </em>
      </p>

      <p>
        A <strong>subsequence</strong> is an array that can be derived from
        another array by deleting some or no elements without changing the order
        of the remaining elements.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [4,2,1,4,3,4,5,8,15], k = 3 <br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> <br />
        The longest subsequence that meets the requirements is [1,3,4,5,8].{" "}
        <br />
        The subsequence has a length of 5, so we return 5. <br />
        Note that the subsequence [1,3,4,5,8,15] does not meet the requirements
        because 15 - 8 = 7 is larger than 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [7,4,5,1,8,12,4,7], k = 5 <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> <br />
        The longest subsequence that meets the requirements is [4,5,8,12].{" "}
        <br />
        The subsequence has a length of 4, so we return 4.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,5], k = 1 <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> <br />
        The longest subsequence that meets the requirements is [1]. <br />
        The subsequence has a length of 1, so we return 1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i], k &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2444: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code> and two integers{" "}
        <code>minK</code> and <code>maxK</code>.
      </p>

      <p>
        A <strong>fixed-bound subarray</strong> of <code>nums</code> is a
        subarray that satisfies the following conditions:
      </p>

      <ul>
        <li>
          The <strong>minimum</strong> value in the subarray is equal to{" "}
          <code>minK</code>.
        </li>
        <li>
          The <strong>maximum</strong> value in the subarray is equal to{" "}
          <code>maxK</code>.
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the <strong>number</strong> of fixed-bound subarrays
        </em>
        .
      </p>

      <p>
        A <strong>subarray</strong> is a <strong>contiguous</strong> part of an
        array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,5,2,7,5], minK = 1, maxK = 5 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> The fixed-bound subarrays are [1,3,5] and
        [1,3,5,2].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1,1], minK = 1, maxK = 1 <br />
        <strong>Output:</strong> 10 <br />
        <strong>Explanation:</strong> Every subarray of nums is a fixed-bound
        subarray. There are 10 possible subarrays.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            2 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i], minK, maxK &lt;= 10<sup>6</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2762: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code>. A subarray of <code>nums</code> is called{" "}
        <strong>continuous</strong> if:
      </p>

      <ul>
        <li>
          Let <code>i</code>, <code>i + 1</code>, ..., <code>j</code>
          <sub> </sub>be the indices in the subarray. Then, for each pair of
          indices{" "}
          <code>
            i &lt;= i<sub>1</sub>, i<sub>2</sub> &lt;= j
          </code>
          ,{" "}
          <code>
            <font face="monospace">0 &lt;=</font> |nums[i<sub>1</sub>] - nums[i
            <sub>2</sub>]| &lt;= 2
          </code>
          .
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the total number of <strong>continuous</strong> subarrays.
        </em>
      </p>

      <p>
        A subarray is a contiguous <strong>non-empty</strong> sequence of
        elements within an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,4,2,4]
        <br />
        <strong>Output:</strong> 8<br />
        <strong>Explanation:</strong> <br />
        Continuous subarray of size 1: [5], [4], [2], [4].
        <br />
        Continuous subarray of size 2: [5,4], [4,2], [2,4].
        <br />
        Continuous subarray of size 3: [4,2,4].
        <br />
        Thereare no subarrys of size 4.
        <br />
        Total continuous subarrays = 4 + 3 + 1 = 8.
        <br />
        It can be shown that there are no more continuous subarrays.
      </pre>

      <p>&nbsp;</p>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3] <br />
        <strong>Output:</strong> 6<br />
        <strong>Explanation:</strong> <br />
        Continuous subarray of size 1: [1], [2], [3].
        <br />
        Continuous subarray of size 2: [1,2], [2,3].
        <br />
        Continuous subarray of size 3: [1,2,3].
        <br />
        Total continuous subarrays = 3 + 2 + 1 = 6.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2944: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>prices</code> where{" "}
        <code>prices[i]</code> denotes the number of coins needed to purchase
        the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        fruit.
      </p>

      <p>The fruit market has the following reward for each fruit:</p>

      <ul>
        <li>
          If you purchase the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          fruit at <code>prices[i]</code> coins, you can get any number of the
          next <code>(i + 1)</code> fruits for free.
        </li>
      </ul>

      <p>
        <strong>Note</strong> that even if you <strong>can</strong> take fruit{" "}
        <code>j</code> for free, you can still purchase it for{" "}
        <code>prices[j]</code> coins to receive its reward.
      </p>

      <p>
        Return the <strong>minimum</strong> number of coins needed to acquire
        all the fruits.
      </p>

      <p>&nbsp;</p>
      <strong class="example">Example 1:</strong>

      <pre class="example-block">
        <strong>Input:</strong> <span class="example-io">prices = [3,1,2]</span>{" "}
        <br />
        <strong>Output:</strong> <span class="example-io">4</span> <br />
        <strong>Explanation:</strong>
        <ul>
          <li>
            Purchase the 1<sup>st</sup> fruit with <code>prices[0] = 3</code>{" "}
            coins, you are allowed to take the 2<sup>nd</sup> fruit for free.
          </li>
          <li>
            Purchase the 2<sup>nd</sup> fruit with <code>prices[1] = 1</code>{" "}
            coin, you are allowed to take the 3<sup>rd</sup> fruit for free.
          </li>
          <li>
            Take the 3<sup>rd</sup> fruit for free.
          </li>
        </ul>
        <p>
          Note that even though you could take the 2<sup>nd</sup> fruit for free
          as a reward of buying 1<sup>st</sup> fruit, you purchase it to receive
          its reward, which is more optimal.
        </p>
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">prices = [1,10,1,1]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">2</span>
        <br />
        <strong>Explanation:</strong>
        <ul>
          <li>
            Purchase the 1<sup>st</sup> fruit with <code>prices[0] = 1</code>{" "}
            coin, you are allowed to take the 2<sup>nd</sup> fruit for free.
          </li>
          <li>
            Take the 2<sup>nd</sup> fruit for free.
          </li>
          <li>
            Purchase the 3<sup>rd</sup> fruit for <code>prices[2] = 1</code>{" "}
            coin, you are allowed to take the 4<sup>th</sup> fruit for free.
          </li>
          <li>
            Take the 4<sup>t</sup>
            <sup>h</sup> fruit for free.
          </li>
        </ul>
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">prices = [26,18,6,12,49,7,45,45]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">39</span>
        <br />
        <p>
          <strong>Explanation:</strong>
        </p>
        <ul>
          <li>
            Purchase the 1<sup>st</sup> fruit with <code>prices[0] = 26</code>{" "}
            coin, you are allowed to take the 2<sup>nd</sup> fruit for free.
          </li>
          <li>
            Take the 2<sup>nd</sup> fruit for free.
          </li>
          <li>
            Purchase the 3<sup>rd</sup> fruit for <code>prices[2] = 6</code>{" "}
            coin, you are allowed to take the 4<sup>th</sup>, 5<sup>th</sup> and
            6<sup>th</sup> (the next three) fruits for free.
          </li>
          <li>
            Take the 4<sup>t</sup>
            <sup>h</sup> fruit for free.
          </li>
          <li>
            Take the 5<sup>t</sup>
            <sup>h</sup> fruit for free.
          </li>
          <li>
            Purchase the 6<sup>th</sup> fruit with <code>prices[5] = 7</code>{" "}
            coin, you are allowed to take the 8<sup>th</sup> and 9<sup>th</sup>{" "}
            fruit for free.
          </li>
          <li>
            Take the 7<sup>t</sup>
            <sup>h</sup> fruit for free.
          </li>
          <li>
            Take the 8<sup>t</sup>
            <sup>h</sup> fruit for free.
          </li>
        </ul>
        <p>
          Note that even though you could take the 6<sup>th</sup> fruit for free
          as a reward of buying 3<sup>rd</sup> fruit, you purchase it to receive
          its reward, which is more optimal.
        </p>
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= prices.length &lt;= 1000</code>
        </li>
        <li>
          <code>
            1 &lt;= prices[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2945: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code>.
      </p>

      <p>
        You can perform any number of operations, where each operation involves
        selecting a <strong>subarray</strong> of the array and replacing it with
        the <strong>sum</strong> of its elements. For example, if the given
        array is <code>[1,3,5,6]</code> and you select subarray{" "}
        <code>[3,5]</code> the array will convert to <code>[1,8,6]</code>.
      </p>

      <p>
        Return <em>the </em>
        <strong>
          <em>maximum</em>
        </strong>
        <em> length of a </em>
        <strong>
          <em>non-decreasing</em>
        </strong>
        <em> array that can be made after applying operations.</em>
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous <strong>non-empty</strong>{" "}
        sequence of elements within an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,2,2] <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> This array with length 3 is not
        non-decreasing. <br />
        We have two ways to make the array length two. <br />
        First, choosing subarray [2,2] converts the array to [5,4]. <br />
        Second, choosing subarray [5,2] converts the array to [7,2]. <br />
        In these two ways the array is not non-decreasing. <br />
        And if we choose subarray [5,2,2] and replace it with [9] it becomes
        non-decreasing. <br />
        So the answer is 1.
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,4] <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> The array is non-decreasing. So the answer
        is 4.
      </pre>

      <p>
        <strong>Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [4,3,2,6] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> Replacing [3,2] with [5] converts the
        given array to [4,5,6] that is non-decreasing. Because the given array
        is not non-decreasing, the maximum possible answer is 3.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2969: (
    <article role="main" class="blog-post">
      <p>
        You are at a fruit market with different types of exotic fruits on
        display.
      </p>

      <p>
        You are given a <strong>1-indexed</strong> array <code>prices</code>,
        where <code>prices[i]</code> denotes the number of coins needed to
        purchase the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        fruit.
      </p>

      <p>The fruit market has the following offer:</p>

      <ul>
        <li>
          If you purchase the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          fruit at <code>prices[i]</code> coins, you can get the next{" "}
          <code>i</code> fruits for free.
        </li>
      </ul>

      <p>
        <strong>Note</strong> that even if you <strong>can</strong> take fruit{" "}
        <code>j</code> for free, you can still purchase it for{" "}
        <code>prices[j]</code> coins to receive a new offer.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>minimum</strong> number of coins needed to acquire all the
          fruits
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> prices = [3,1,2] <br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> You can acquire the fruits as follows:
        <br />- Purchase the 1<sup>st</sup> fruit with 3 coins, and you are
        allowed to take the 2<sup>nd</sup> fruit for free.
        <br />- Purchase the 2<sup>nd</sup> fruit with 1 coin, and you are
        allowed to take the 3<sup>rd</sup> fruit for free.
        <br />- Take the 3<sup>rd</sup> fruit for free.
        <br />
        Note that even though you were allowed to take the 2<sup>nd</sup> fruit
        for free, you purchased it because it is more optimal.
        <br />
        It can be proven that 4 is the minimum number of coins needed to acquire
        all the fruits.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> prices = [1,10,1,1]
        <br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> You can acquire the fruits as follows:
        <br />- Purchase the 1<sup>st</sup> fruit with 1 coin, and you are
        allowed to take the 2<sup>nd</sup> fruit for free.
        <br />- Take the 2<sup>nd</sup> fruit for free.
        <br />- Purchase the 3<sup>rd</sup> fruit for 1 coin, and you are
        allowed to take the 4<sup>th</sup> fruit for free.
        <br />- Take the 4<sup>t</sup>
        <sup>h</sup> fruit for free.
        <br />
        It can be proven that 2 is the minimum number of coins needed to acquire
        all the fruits.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= prices.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= prices[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </article>
  ),
  5: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a string <code>s</code>, return <em>the longest</em>{" "}
        <span
          data-keyword="palindromic-string"
          class=" cursor-pointer relative text-dark-blue-s text-sm"
        >
          <div class="popover-wrapper inline-block" data-headlessui-state="">
            <div>
              <div
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:rt:"
              >
                <div>
                  <em>palindromic</em>
                </div>
              </div>
            </div>
          </div>
        </span>{" "}
        <span
          data-keyword="substring-nonempty"
          class=" cursor-pointer relative text-dark-blue-s text-sm"
        >
          <div class="popover-wrapper inline-block" data-headlessui-state="">
            <div>
              <div
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:rv:"
              >
                <div>
                  <em>substring</em>
                </div>
              </div>
            </div>
          </div>
        </span>{" "}
        in <code>s</code>.
      </p>

      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "babad" <br />
        <strong>Output:</strong> "bab" <br />
        <strong>Explanation:</strong> "aba" is also a valid answer.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "cbbd" <br />
        <strong>Output:</strong> "bb"
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= s.length &lt;= 1000</code>
        </li>
        <li>
          <code>s</code> consist of only digits and English letters.
        </li>
      </ul>
    </div>
  ),
  11: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>height</code> of length{" "}
        <code>n</code>. There are <code>n</code> vertical lines drawn such that
        the two endpoints of the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        line are <code>(i, 0)</code> and <code>(i, height[i])</code>.
      </p>

      <p>
        Find two lines that together with the x-axis form a container, such that
        the container contains the most water.
      </p>

      <p>
        Return <em>the maximum amount of water a container can store</em>.
      </p>

      <p>
        <strong>Notice</strong> that you may not slant the container.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg"
        style={{ width: 600, height: 287 }}
      />
      <pre>
        <strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7] <br />
        <strong>Output:</strong> 49 <br />
        <strong>Explanation:</strong> The above vertical lines are represented
        by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue
        section) the container can contain is 49.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> height = [1,1] <br />
        <strong>Output:</strong> 1
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == height.length</code>
        </li>
        <li>
          <code>
            2 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= height[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  15: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array nums, return all the triplets{" "}
        <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>,{" "}
        <code>i != k</code>, and <code>j != k</code>, and{" "}
        <code>nums[i] + nums[j] + nums[k] == 0</code>.
      </p>

      <p>Notice that the solution set must not contain duplicate triplets.</p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [-1,0,1,2,-1,-4] <br />
        <strong>Output:</strong> [[-1,-1,2],[-1,0,1]] <br />
        <strong>Explanation:</strong> <br />
        nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. <br />
        nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. <br />
        nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0. <br />
        The distinct triplets are [-1,0,1] and [-1,-1,2]. <br />
        Notice that the order of the output and the order of the triplets does
        not matter.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,1,1] <br />
        <strong>Output:</strong> [] <br />
        <strong>Explanation:</strong> The only possible triplet does not sum up
        to 0.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,0,0] <br />
        <strong>Output:</strong> [[0,0,0]] <br />
        <strong>Explanation:</strong> The only possible triplet sums up to 0.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>3 &lt;= nums.length &lt;= 3000</code>
        </li>
        <li>
          <code>
            -10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  16: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> of length <code>n</code> and an
        integer <code>target</code>, find three integers in <code>nums</code>{" "}
        such that the sum is closest to <code>target</code>.
      </p>

      <p>
        Return <em>the sum of the three integers</em>.
      </p>

      <p>You may assume that each input would have exactly one solution.</p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [-1,2,1,-4], target = 1 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> The sum that is closest to the target is
        2. (-1 + 2 + 1 = 2).
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,0,0], target = 1 <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> The sum that is closest to the target is
        0. (0 + 0 + 0 = 0).
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>3 &lt;= nums.length &lt;= 500</code>
        </li>
        <li>
          <code>-1000 &lt;= nums[i] &lt;= 1000</code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= target &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  18: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array <code>nums</code> of <code>n</code> integers, return{" "}
        <em>
          an array of all the <strong>unique</strong> quadruplets
        </em>{" "}
        <code>[nums[a], nums[b], nums[c], nums[d]]</code> such that:
      </p>

      <ul>
        <li>
          <code>0 &lt;= a, b, c, d&nbsp;&lt; n</code>
        </li>
        <li>
          <code>a</code>, <code>b</code>, <code>c</code>, and <code>d</code> are{" "}
          <strong>distinct</strong>.
        </li>
        <li>
          <code>nums[a] + nums[b] + nums[c] + nums[d] == target</code>
        </li>
      </ul>

      <p>
        You may return the answer in <strong>any order</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,0,-1,0,-2,2], target = 0 <br />
        <strong>Output:</strong> [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,2,2,2,2], target = 8 <br />
        <strong>Output:</strong> [[2,2,2,2]]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 200</code>
        </li>
        <li>
          <code>
            -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  19: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given the <code>head</code> of a linked list, remove the{" "}
        <code>
          n<sup>th</sup>
        </code>{" "}
        node from the end of the list and return its head.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg"
        style={{ width: 542, height: 222 }}
      />
      <pre>
        <strong>Input:</strong> head = [1,2,3,4,5], n = 2 <br />
        <strong>Output:</strong> [1,2,3,5]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> head = [1], n = 1 <br />
        <strong>Output:</strong> []
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> head = [1,2], n = 1 <br />
        <strong>Output:</strong> [1]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          The number of nodes in the list is <code>sz</code>.
        </li>
        <li>
          <code>1 &lt;= sz &lt;= 30</code>
        </li>
        <li>
          <code>0 &lt;= Node.val &lt;= 100</code>
        </li>
        <li>
          <code>1 &lt;= n &lt;= sz</code>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong> Could you do this in one pass?
      </p>
    </div>
  ),
  26: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> sorted in{" "}
        <strong>non-decreasing order</strong>, remove the duplicates{" "}
        <a
          href="https://en.wikipedia.org/wiki/In-place_algorithm"
          target="_blank"
          rel="noreferrer"
        >
          <strong>in-place</strong>
        </a>{" "}
        such that each unique element appears only <strong>once</strong>. The{" "}
        <strong>relative order</strong> of the elements should be kept the{" "}
        <strong>same</strong>. Then return{" "}
        <em>the number of unique elements in </em>
        <code>nums</code>.
      </p>

      <p>
        Consider the number of unique elements of <code>nums</code> to be{" "}
        <code>k</code>, to get accepted, you need to do the following things:
      </p>

      <ul>
        <li>
          Change the array <code>nums</code> such that the first <code>k</code>{" "}
          elements of <code>nums</code> contain the unique elements in the order
          they were present in <code>nums</code> initially. The remaining
          elements of <code>nums</code> are not important as well as the size of{" "}
          <code>nums</code>.
        </li>
        <li>
          Return <code>k</code>.
        </li>
      </ul>

      <p>
        <strong>Custom Judge:</strong>
      </p>

      <p>The judge will test your solution with the following code:</p>

      <pre>
        {`int[] nums = [...]; // Input array
    int[] expectedNums = [...]; // The expected answer with correct length
    
    int k = removeDuplicates(nums); // Calls your implementation
    
    assert k == expectedNums.length;
    for (int i = 0; i &lt; k; i++) {
        assert nums[i] == expectedNums[i];
    }`}
      </pre>

      <p>
        If all assertions pass, then your solution will be{" "}
        <strong>accepted</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,2] <br />
        <strong>Output:</strong> 2, nums = [1,2,_] <br />
        <strong>Explanation:</strong> Your function should return k = 2, with
        the first two elements of nums being 1 and 2 respectively. It does not
        matter what you leave beyond the returned k (hence they are
        underscores).
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,0,1,1,1,2,2,3,3,4] <br />
        <strong>Output:</strong> 5, nums = [0,1,2,3,4,_,_,_,_,_] <br />
        <strong>Explanation:</strong> Your function should return k = 5, with
        the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It
        does not matter what you leave beyond the returned k (hence they are
        underscores).
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>-100 &lt;= nums[i] &lt;= 100</code>
        </li>
        <li>
          <code>nums</code> is sorted in <strong>non-decreasing</strong> order.
        </li>
      </ul>
    </div>
  ),
  27: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> and an integer <code>val</code>
        , remove all occurrences of <code>val</code> in <code>nums</code>{" "}
        <a
          href="https://en.wikipedia.org/wiki/In-place_algorithm"
          target="_blank"
          rel="noreferrer"
        >
          <strong>in-place</strong>
        </a>
        . The order of the elements may be changed. Then return{" "}
        <em>the number of elements in </em>
        <code>nums</code>
        <em> which are not equal to </em>
        <code>val</code>.
      </p>

      <p>
        Consider the number of elements in <code>nums</code> which are not equal
        to <code>val</code> be <code>k</code>, to get accepted, you need to do
        the following things:
      </p>

      <ul>
        <li>
          Change the array <code>nums</code> such that the first <code>k</code>{" "}
          elements of <code>nums</code> contain the elements which are not equal
          to <code>val</code>. The remaining elements of <code>nums</code> are
          not important as well as the size of <code>nums</code>.
        </li>
        <li>
          Return <code>k</code>.
        </li>
      </ul>

      <p>
        <strong>Custom Judge:</strong>
      </p>

      <p>The judge will test your solution with the following code:</p>

      <pre>
        {`int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i &lt; actualLength; i++) {
    assert nums[i] == expectedNums[i];
}`}
      </pre>

      <p>
        If all assertions pass, then your solution will be{" "}
        <strong>accepted</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,2,2,3], val = 3 <br />
        <strong>Output:</strong> 2, nums = [2,2,_,_]
        <br />
        <strong>Explanation:</strong> Your function should return k = 2, with
        the first two elements of nums being 2. It does not matter what you
        leave beyond the returned k (hence they are underscores).
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,1,2,2,3,0,4,2], val = 2<br />
        <strong>Output:</strong> 5, nums = [0,1,4,0,3,_,_,_]
        <br />
        <strong>Explanation:</strong> Your function should return k = 5, with
        the first five elements of nums containing 0, 0, 1, 3, and 4. Note that
        the five elements can be returned in any order. It does not matter what
        you leave beyond the returned k (hence they are underscores).
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>0 &lt;= nums.length &lt;= 100</code>
        </li>
        <li>
          <code>0 &lt;= nums[i] &lt;= 50</code>
        </li>
        <li>
          <code>0 &lt;= val &lt;= 100</code>
        </li>
      </ul>
    </div>
  ),
  28: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given two strings <code>needle</code> and <code>haystack</code>, return
        the index of the first occurrence of <code>needle</code> in{" "}
        <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not
        part of <code>haystack</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> haystack = "sadbutsad", needle = "sad" <br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> "sad" occurs at index 0 and 6. The first
        occurrence is at index 0, so we return 0.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> haystack = "leetcode", needle = "leeto"
        <br />
        <strong>Output:</strong> -1
        <br />
        <strong>Explanation:</strong> "leeto" did not occur in "leetcode", so we
        return -1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= haystack.length, needle.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>haystack</code> and <code>needle</code> consist of only
          lowercase English characters.
        </li>
      </ul>
    </div>
  ),
  31: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        A <strong>permutation</strong> of an array of integers is an arrangement
        of its members into a sequence or linear order.
      </p>

      <ul>
        <li>
          For example, for <code>arr = [1,2,3]</code>, the following are all the
          permutations of <code>arr</code>:{" "}
          <code>[1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1]</code>.
        </li>
      </ul>

      <p>
        The <strong>next permutation</strong> of an array of integers is the
        next lexicographically greater permutation of its integer. More
        formally, if all the permutations of the array are sorted in one
        container according to their lexicographical order, then the{" "}
        <strong>next permutation</strong> of that array is the permutation that
        follows it in the sorted container. If such arrangement is not possible,
        the array must be rearranged as the lowest possible order (i.e., sorted
        in ascending order).
      </p>

      <ul>
        <li>
          For example, the next permutation of <code>arr = [1,2,3]</code> is{" "}
          <code>[1,3,2]</code>.
        </li>
        <li>
          Similarly, the next permutation of <code>arr = [2,3,1]</code> is{" "}
          <code>[3,1,2]</code>.
        </li>
        <li>
          While the next permutation of <code>arr = [3,2,1]</code> is{" "}
          <code>[1,2,3]</code> because <code>[3,2,1]</code> does not have a
          lexicographical larger rearrangement.
        </li>
      </ul>

      <p>
        Given an array of integers <code>nums</code>,{" "}
        <em>find the next permutation of</em> <code>nums</code>.
      </p>

      <p>
        The replacement must be{" "}
        <strong>
          <a
            href="http://en.wikipedia.org/wiki/In-place_algorithm"
            target="_blank"
            rel="noreferrer"
          >
            in place
          </a>
        </strong>{" "}
        and use only constant extra memory.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3] <br />
        <strong>Output:</strong> [1,3,2]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,2,1] <br />
        <strong>Output:</strong> [1,2,3]
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,5] <br />
        <strong>Output:</strong> [1,5,1]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 100</code>
        </li>
        <li>
          <code>0 &lt;= nums[i] &lt;= 100</code>
        </li>
      </ul>
    </div>
  ),
  42: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given <code>n</code> non-negative integers representing an elevation map
        where the width of each bar is <code>1</code>, compute how much water it
        can trap after raining.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png"
        style={{ width: 412, height: 161 }}
      />
      <pre>
        <strong>Input:</strong> height = [0,1,0,2,1,0,1,3,2,1,2,1] <br />
        <strong>Output:</strong> 6 <br />
        <strong>Explanation:</strong> The above elevation map (black section) is
        represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of
        rain water (blue section) are being trapped.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> height = [4,2,0,3,2,5] <br />
        <strong>Output:</strong> 9
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == height.length</code>
        </li>
        <li>
          <code>
            1 &lt;= n &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= height[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  61: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given the <code>head</code> of a linked&nbsp;list, rotate the list to
        the right by <code>k</code> places.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/11/13/rotate1.jpg"
        style={{ width: 450, height: 191 }}
      />
      <pre>
        <strong>Input:</strong> head = [1,2,3,4,5], k = 2 <br />
        <strong>Output:</strong> [4,5,1,2,3]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/11/13/roate2.jpg"
        style={{ width: 305, height: 350 }}
      />
      <pre>
        <strong>Input:</strong> head = [0,1,2], k = 4<br />
        <strong>Output:</strong> [2,0,1]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          The number of nodes in the list is in the range <code>[0, 500]</code>.
        </li>
        <li>
          <code>-100 &lt;= Node.val &lt;= 100</code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 2 * 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  75: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array <code>nums</code> with <code>n</code> objects colored
        red, white, or blue, sort them{" "}
        <strong>
          <a
            href="https://en.wikipedia.org/wiki/In-place_algorithm"
            target="_blank"
            rel="noreferrer"
          >
            in-place
          </a>{" "}
        </strong>
        so that objects of the same color are adjacent, with the colors in the
        order red, white, and blue.
      </p>

      <p>
        We will use the integers <code>0</code>, <code>1</code>, and{" "}
        <code>2</code> to represent the color red, white, and blue,
        respectively.
      </p>

      <p>
        You must solve this problem without using the library's sort function.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,0,2,1,1,0] <br />
        <strong>Output:</strong> [0,0,1,1,2,2]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,0,1] <br />
        <strong>Output:</strong> [0,1,2]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == nums.length</code>
        </li>
        <li>
          <code>1 &lt;= n &lt;= 300</code>
        </li>
        <li>
          <code>nums[i]</code> is either <code>0</code>, <code>1</code>, or{" "}
          <code>2</code>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong>&nbsp;Could you come up with a one-pass
        algorithm using only&nbsp;constant extra space?
      </p>
    </div>
  ),
  80: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> sorted in{" "}
        <strong>non-decreasing order</strong>, remove some duplicates{" "}
        <a
          href="https://en.wikipedia.org/wiki/In-place_algorithm"
          target="_blank"
          rel="noreferrer"
        >
          <strong>in-place</strong>
        </a>{" "}
        such that each unique element appears <strong>at most twice</strong>.
        The <strong>relative order</strong> of the elements should be kept the{" "}
        <strong>same</strong>.
      </p>

      <p>
        Since it is impossible to change the length of the array in some
        languages, you must instead have the result be placed in the{" "}
        <strong>first part</strong> of the array <code>nums</code>. More
        formally, if there are <code>k</code> elements after removing the
        duplicates, then the first <code>k</code> elements of <code>nums</code>
        &nbsp;should hold the final result. It does not matter what you leave
        beyond the first&nbsp;<code>k</code>&nbsp;elements.
      </p>

      <p>
        Return <code>k</code>
        <em> after placing the final result in the first </em>
        <code>k</code>
        <em> slots of </em>
        <code>nums</code>.
      </p>

      <p>
        Do <strong>not</strong> allocate extra space for another array. You must
        do this by{" "}
        <strong>
          modifying the input array{" "}
          <a
            href="https://en.wikipedia.org/wiki/In-place_algorithm"
            target="_blank"
            rel="noreferrer"
          >
            in-place
          </a>
        </strong>{" "}
        with O(1) extra memory.
      </p>

      <p>
        <strong>Custom Judge:</strong>
      </p>

      <p>The judge will test your solution with the following code:</p>

      <pre>
        {`int[] nums = [...]; // Input array
    int[] expectedNums = [...]; // The expected answer with correct length
    
    int k = removeDuplicates(nums); // Calls your implementation
    
    assert k == expectedNums.length;
    for (int i = 0; i &lt; k; i++) {
        assert nums[i] == expectedNums[i];
    }`}
      </pre>

      <p>
        If all assertions pass, then your solution will be{" "}
        <strong>accepted</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1,2,2,3] <br />
        <strong>Output:</strong> 5, nums = [1,1,2,2,3,_] <br />
        <strong>Explanation:</strong> Your function should return k = 5, with
        the first five elements of nums being 1, 1, 2, 2 and 3 respectively. It
        does not matter what you leave beyond the returned k (hence they are
        underscores).
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,0,1,1,1,1,2,3,3] <br />
        <strong>Output:</strong> 7, nums = [0,0,1,1,2,3,3,_,_] <br />
        <strong>Explanation:</strong> Your function should return k = 7, with
        the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3
        respectively. It does not matter what you leave beyond the returned k
        (hence they are underscores).
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>nums</code> is sorted in <strong>non-decreasing</strong> order.
        </li>
      </ul>
    </div>
  ),
  82: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given the <code>head</code> of a sorted linked list,{" "}
        <em>
          delete all nodes that have duplicate numbers, leaving only distinct
          numbers from the original list
        </em>
        . Return{" "}
        <em>
          the linked list <strong>sorted</strong> as well
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist1.jpg"
        style={{ width: 500, height: 142 }}
      />
      <pre>
        <strong>Input:</strong> head = [1,2,3,3,4,4,5] <br />
        <strong>Output:</strong> [1,2,5]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/01/04/linkedlist2.jpg"
        style={{ width: 500, height: 205 }}
      />
      <pre>
        <strong>Input:</strong> head = [1,1,1,2,3] <br />
        <strong>Output:</strong> [2,3]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          The number of nodes in the list is in the range <code>[0, 300]</code>.
        </li>
        <li>
          <code>-100 &lt;= Node.val &lt;= 100</code>
        </li>
        <li>
          The list is guaranteed to be <strong>sorted</strong> in ascending
          order.
        </li>
      </ul>
    </div>
  ),
  86: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given the <code>head</code> of a linked list and a value <code>x</code>,
        partition it such that all nodes <strong>less than</strong>{" "}
        <code>x</code> come before nodes <strong>greater than or equal</strong>{" "}
        to <code>x</code>.
      </p>

      <p>
        You should <strong>preserve</strong> the original relative order of the
        nodes in each of the two partitions.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/01/04/partition.jpg"
        style={{ width: 662, height: 222 }}
      />
      <pre>
        <strong>Input:</strong> head = [1,4,3,2,5,2], x = 3 <br />
        <strong>Output:</strong> [1,2,2,4,3,5]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> head = [2,1], x = 2 <br />
        <strong>Output:</strong> [1,2]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          The number of nodes in the list is in the range <code>[0, 200]</code>.
        </li>
        <li>
          <code>-100 &lt;= Node.val &lt;= 100</code>
        </li>
        <li>
          <code>-200 &lt;= x &lt;= 200</code>
        </li>
      </ul>
    </div>
  ),
  88: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given two integer arrays <code>nums1</code> and{" "}
        <code>nums2</code>, sorted in <strong>non-decreasing order</strong>, and
        two integers <code>m</code> and <code>n</code>, representing the number
        of elements in <code>nums1</code> and <code>nums2</code> respectively.
      </p>

      <p>
        <strong>Merge</strong> <code>nums1</code> and <code>nums2</code> into a
        single array sorted in <strong>non-decreasing order</strong>.
      </p>

      <p>
        The final sorted array should not be returned by the function, but
        instead be <em>stored inside the array </em>
        <code>nums1</code>. To accommodate this, <code>nums1</code> has a length
        of <code>m + n</code>, where the first <code>m</code> elements denote
        the elements that should be merged, and the last <code>n</code> elements
        are set to <code>0</code> and should be ignored. <code>nums2</code> has
        a length of <code>n</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n
        = 3 <br />
        <strong>Output:</strong> [1,2,2,3,5,6]
        <br />
        <strong>Explanation:</strong> The arrays we are merging are [1,2,3] and
        [2,5,6].
        <br />
        The result of the merge is [<u>1</u>,<u>2</u>,2,<u>3</u>,5,6] with the
        underlined elements coming from nums1.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [1], m = 1, nums2 = [], n = 0<br />
        <strong>Output:</strong> [1]
        <br />
        <strong>Explanation:</strong> The arrays we are merging are [1] and [].
        The result of the merge is [1].
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [0], m = 0, nums2 = [1], n = 1<br />
        <strong>Output:</strong> [1]
        <br />
        <strong>Explanation:</strong> The arrays we are merging are [] and [1].
        <br />
        The result of the merge is [1].
        <br />
        Note that because m = 0, there are no elements in nums1. The 0 is only
        there to ensure the merge result can fit in nums1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>nums1.length == m + n</code>
        </li>
        <li>
          <code>nums2.length == n</code>
        </li>
        <li>
          <code>0 &lt;= m, n &lt;= 200</code>
        </li>
        <li>
          <code>1 &lt;= m + n &lt;= 200</code>
        </li>
        <li>
          <code>
            -10<sup>9</sup> &lt;= nums1[i], nums2[j] &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up: </strong>Can you come up with an algorithm that runs
        in <code>O(m + n)</code> time?
      </p>
    </div>
  ),
  125: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        A phrase is a <strong>palindrome</strong> if, after converting all
        uppercase letters into lowercase letters and removing all
        non-alphanumeric characters, it reads the same forward and backward.
        Alphanumeric characters include letters and numbers.
      </p>

      <p>
        Given a string <code>s</code>, return <code>true</code>
        <em>
          {" "}
          if it is a <strong>palindrome</strong>, or{" "}
        </em>
        <code>false</code>
        <em> otherwise</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "A man, a plan, a canal: Panama" <br />
        <strong>Output:</strong> true
        <br />
        <strong>Explanation:</strong> "amanaplanacanalpanama" is a palindrome.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "race a car"
        <br />
        <strong>Output:</strong> false
        <br />
        <strong>Explanation:</strong> "raceacar" is not a palindrome.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = " "<br />
        <strong>Output:</strong> true <br />
        <strong>Explanation:</strong> s is an empty string "" after removing
        non-alphanumeric characters. Since an empty string reads the same
        forward and backward, it is a palindrome.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 2 * 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists only of printable ASCII characters.
        </li>
      </ul>
    </div>
  ),
  141: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given <code>head</code>, the head of a linked list, determine if the
        linked list has a cycle in it.
      </p>

      <p>
        There is a cycle in a linked list if there is some node in the list that
        can be reached again by continuously following the&nbsp;
        <code>next</code>&nbsp;pointer. Internally, <code>pos</code>&nbsp;is
        used to denote the index of the node that&nbsp;tail's&nbsp;
        <code>next</code>&nbsp;pointer is connected to.&nbsp;
        <strong>
          Note that&nbsp;<code>pos</code>&nbsp;is not passed as a parameter
        </strong>
        .
      </p>

      <p>
        Return&nbsp;<code>true</code>
        <em> if there is a cycle in the linked list</em>. Otherwise, return{" "}
        <code>false</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png"
        style={{ width: 300, height: 97, marginTop: 8, marginBottom: 8 }}
      />
      <pre>
        <strong>Input:</strong> head = [3,2,0,-4], pos = 1 <br />
        <strong>Output:</strong> true
        <br />
        <strong>Explanation:</strong> There is a cycle in the linked list, where
        the tail connects to the 1st node (0-indexed).
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png"
        style={{ width: 141, height: 74 }}
      />
      <pre>
        <strong>Input:</strong> head = [1,2], pos = 0<br />
        <strong>Output:</strong> true
        <br />
        <strong>Explanation:</strong> There is a cycle in the linked list, where
        the tail connects to the 0th node.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png"
        style={{ width: 45, height: 45 }}
      />
      <pre>
        <strong>Input:</strong> head = [1], pos = -1
        <br />
        <strong>Output:</strong> false
        <br />
        <strong>Explanation:</strong> There is no cycle in the linked list.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          The number of the nodes in the list is in the range{" "}
          <code>
            [0, 10<sup>4</sup>]
          </code>
          .
        </li>
        <li>
          <code>
            -10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>pos</code> is <code>-1</code> or a <strong>valid index</strong>{" "}
          in the linked-list.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong> Can you solve it using <code>O(1)</code>{" "}
        (i.e. constant) memory?
      </p>
    </div>
  ),
  142: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given the <code>head</code> of a linked list, return{" "}
        <em>the node where the cycle begins. If there is no cycle, return </em>
        <code>null</code>.
      </p>

      <p>
        There is a cycle in a linked list if there is some node in the list that
        can be reached again by continuously following the <code>next</code>{" "}
        pointer. Internally, <code>pos</code> is used to denote the index of the
        node that tail's <code>next</code> pointer is connected to (
        <strong>0-indexed</strong>). It is <code>-1</code> if there is no cycle.{" "}
        <strong>Note that</strong> <code>pos</code>{" "}
        <strong>is not passed as a parameter</strong>.
      </p>

      <p>
        <strong>Do not modify</strong> the linked list.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png"
        style={{ height: 145, width: 450 }}
      />
      <pre>
        <strong>Input:</strong> head = [3,2,0,-4], pos = 1 <br />
        <strong>Output:</strong> tail connects to node index 1<br />
        <strong>Explanation:</strong> There is a cycle in the linked list, where
        tail connects to the second node.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png"
        style={{ height: 105, width: 201 }}
      />
      <pre>
        <strong>Input:</strong> head = [1,2], pos = 0<br />
        <strong>Output:</strong> tail connects to node index 0<br />
        <strong>Explanation:</strong> There is a cycle in the linked list, where
        tail connects to the first node.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png"
        style={{ height: 65, width: 65 }}
      />
      <pre>
        <strong>Input:</strong> head = [1], pos = -1
        <br />
        <strong>Output:</strong> no cycle
        <br />
        <strong>Explanation:</strong> There is no cycle in the linked list.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          The number of the nodes in the list is in the range{" "}
          <code>
            [0, 10<sup>4</sup>]
          </code>
          .
        </li>
        <li>
          <code>
            -10<sup>5</sup> &lt;= Node.val &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>pos</code> is <code>-1</code> or a <strong>valid index</strong>{" "}
          in the linked-list.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong> Can you solve it using <code>O(1)</code>{" "}
        (i.e. constant) memory?
      </p>
    </div>
  ),
  3: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a string <code>s</code>, find the length of the{" "}
        <strong>longest</strong>{" "}
        <span
          data-keyword="substring-nonempty"
          class=" cursor-pointer relative text-dark-blue-s text-sm"
        >
          <div class="popover-wrapper inline-block" data-headlessui-state="">
            <div>
              <div
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:rj:"
              >
                <div>
                  <strong>substring</strong>
                </div>
              </div>
            </div>
          </div>
        </span>{" "}
        without repeating characters.
      </p>

      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abcabcbb"
        <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> The answer is "abc", with the length of 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "bbbbb"
        <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> The answer is "b", with the length of 1.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "pwwkew"
        <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The answer is "wke", with the length of 3.
        <br />
        Notice that the answer must be a substring, "pwke" is a subsequence and
        not a substring.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            0 &lt;= s.length &lt;= 5 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of English letters, digits, symbols and
          spaces.
        </li>
      </ul>
    </div>
  ),
  30: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a string <code>s</code> and an array of strings{" "}
        <code>words</code>. All the strings of <code>words</code> are of{" "}
        <strong>the same length</strong>.
      </p>

      <p>
        A <strong>concatenated string</strong> is a string that exactly contains
        all the strings of any permutation of <code>words</code> concatenated.
      </p>

      <ul>
        <li>
          For example, if <code>words = ["ab","cd","ef"]</code>, then{" "}
          <code>"abcdef"</code>, <code>"abefcd"</code>, <code>"cdabef"</code>,{" "}
          <code>"cdefab"</code>, <code>"efabcd"</code>, and{" "}
          <code>"efcdab"</code> are all concatenated strings.{" "}
          <code>"acdbef"</code> is not a concatenated string because it is not
          the concatenation of any permutation of <code>words</code>.
        </li>
      </ul>

      <p>
        Return an array of <em>the starting indices</em> of all the concatenated
        substrings in <code>s</code>. You can return the answer in{" "}
        <strong>any order</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">
          s = "barfoothefoobarman", words = ["foo","bar"]
        </span>{" "}
        <br />
        <strong>Output:</strong> <span class="example-io">[0,9]</span>
        <br />
        <strong>Explanation: </strong>
        The substring starting at 0 is <code>"barfoo"</code>. It is the
        concatenation of <code>["bar","foo"]</code> which is a permutation of{" "}
        <code>words</code>.<br />
        The substring starting at 9 is <code>"foobar"</code>. It is the
        concatenation of <code>["foo","bar"]</code> which is a permutation of{" "}
        <code>words</code>.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">
          s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
        </span>
        <br />
        <strong>Output:</strong> <span class="example-io">[]</span>
        <br />
        <strong>Explanation: </strong>
        <p>There is no concatenated substring.</p>
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">
          s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
        </span>
        <br />
        <strong>Output:</strong> <span class="example-io">[6,9,12]</span>
        <br />
        <strong>Explanation: </strong>
        The substring starting at 6 is <code>"foobarthe"</code>. It is the
        concatenation of <code>["foo","bar","the"]</code>.<br />
        The substring starting at 9 is <code>"barthefoo"</code>. It is the
        concatenation of <code>["bar","the","foo"]</code>.<br />
        The substring starting at 12 is <code>"thefoobar"</code>. It is the
        concatenation of <code>["the","foo","bar"]</code>.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= words.length &lt;= 5000</code>
        </li>
        <li>
          <code>1 &lt;= words[i].length &lt;= 30</code>
        </li>
        <li>
          <code>s</code> and <code>words[i]</code> consist of lowercase English
          letters.
        </li>
      </ul>
    </div>
  ),
  76: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given two strings <code>s</code> and <code>t</code> of lengths{" "}
        <code>m</code> and <code>n</code> respectively, return{" "}
        <em>
          the <strong>minimum window</strong>
        </em>{" "}
        <span
          data-keyword="substring-nonempty"
          class=" cursor-pointer relative text-dark-blue-s text-sm"
        >
          <div class="popover-wrapper inline-block" data-headlessui-state="">
            <div>
              <div
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:rv:"
              >
                <div>
                  <strong>
                    <em>substring</em>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </span>
        <em> of </em>
        <code>s</code>
        <em> such that every character in </em>
        <code>t</code>
        <em>
          {" "}
          (<strong>including duplicates</strong>) is included in the window
        </em>
        . If there is no such substring, return <em>the empty string </em>
        <code>""</code>.
      </p>

      <p>
        The testcases will be generated such that the answer is{" "}
        <strong>unique</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "ADOBECODEBANC", t = "ABC"
        <br />
        <strong>Output:</strong> "BANC"
        <br />
        <strong>Explanation:</strong> The minimum window substring "BANC"
        includes 'A', 'B', and 'C' from string t.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "a", t = "a"
        <br />
        <strong>Output:</strong> "a"
        <br />
        <strong>Explanation:</strong> The entire string s is the minimum window.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "a", t = "aa" <br />
        <strong>Output:</strong> ""
        <br />
        <strong>Explanation:</strong> Both 'a's from t must be included in the
        window. Since the largest window of s only has one 'a', return empty
        string.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>m == s.length</code>
        </li>
        <li>
          <code>n == t.length</code>
        </li>
        <li>
          <code>
            1 &lt;= m, n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s</code> and <code>t</code> consist of uppercase and lowercase
          English letters.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong> Could you find an algorithm that runs in{" "}
        <code>O(m + n)</code> time?
      </p>
    </div>
  ),
  159: (
    <div class="markdown-body div-width">
      <p>
        Given a string{" "}
        <strong>
          <em>s</em>
        </strong>{" "}
        , find the length of the longest substring&nbsp;
        <strong>
          <em>t&nbsp;&nbsp;</em>
        </strong>
        that contains <strong>at most </strong>2 distinct characters.
      </p>

      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> "eceba" <br />
        <strong>Output: </strong>3 <br />
        <strong>
          Explanation: <em>t</em>
        </strong>
        <em> </em>is "ece" which its length is 3.
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> "ccaabbb" <br />
        <strong>Output: </strong>5 <br />
        <strong>
          Explanation: <em>t</em>
        </strong>
        <em> </em>is "aabbb" which its length is 5.
      </pre>
    </div>
  ),
  187: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        The <strong>DNA sequence</strong> is composed of a series of nucleotides
        abbreviated as <code>'A'</code>, <code>'C'</code>, <code>'G'</code>, and{" "}
        <code>'T'</code>.
      </p>

      <ul>
        <li>
          For example, <code>"ACGAATTCCG"</code> is a{" "}
          <strong>DNA sequence</strong>.
        </li>
      </ul>

      <p>
        When studying <strong>DNA</strong>, it is useful to identify repeated
        sequences within the DNA.
      </p>

      <p>
        Given a string <code>s</code> that represents a{" "}
        <strong>DNA sequence</strong>, return all the{" "}
        <strong>
          <code>10</code>-letter-long
        </strong>{" "}
        sequences (substrings) that occur more than once in a DNA molecule. You
        may return the answer in <strong>any order</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
        <br />
        <strong>Output:</strong> ["AAAAACCCCC","CCCCCAAAAA"]
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> s = "AAAAAAAAAAAAA"
        <br />
        <strong>Output:</strong> ["AAAAAAAAAA"]
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s[i]</code> is either <code>'A'</code>, <code>'C'</code>,{" "}
          <code>'G'</code>, or <code>'T'</code>.
        </li>
      </ul>
    </div>
  ),
  209: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of positive integers <code>nums</code> and a positive
        integer <code>target</code>, return{" "}
        <em>
          the <strong>minimal length</strong> of a{" "}
        </em>
        <span
          data-keyword="subarray-nonempty"
          class=" cursor-pointer relative text-dark-blue-s text-sm"
        >
          <div class="popover-wrapper inline-block" data-headlessui-state="">
            <div>
              <div
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:rt:"
              >
                <div>
                  <em>subarray</em>
                </div>
              </div>
            </div>
          </div>
        </span>
        <em> whose sum is greater than or equal to</em> <code>target</code>. If
        there is no such subarray, return <code>0</code> instead.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> target = 7, nums = [2,3,1,2,4,3] <br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> The subarray [4,3] has the minimal length
        under the problem constraint.
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> target = 4, nums = [1,4,4]
        <br />
        <strong>Output:</strong> 1
      </pre>
      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <pre>
        <strong>Input:</strong> target = 11, nums = [1,1,1,1,1,1,1,1]
        <br />
        <strong>Output:</strong> 0
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>
            1 &lt;= target &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
      <p>&nbsp;</p>
      <strong>Follow up:</strong> If you have figured out the <code>O(n)</code>{" "}
      solution, try coding another solution of which the time complexity is{" "}
      <code>O(n log(n))</code>.
    </div>
  ),
  219: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> and an integer <code>k</code>,
        return <code>true</code>{" "}
        <em>
          if there are two <strong>distinct indices</strong>{" "}
        </em>
        <code>i</code>
        <em> and </em>
        <code>j</code>
        <em> in the array such that </em>
        <code>nums[i] == nums[j]</code>
        <em> and </em>
        <code>abs(i - j) &lt;= k</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,1], k = 3 <br />
        <strong>Output:</strong> true
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,0,1,1], k = 1<br />
        <strong>Output:</strong> true
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,1,2,3], k = 2<br />
        <strong>Output:</strong> false
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  340: (
    <div class="markdown-body div-width">
      <p>
        Given a string, find the length of the longest substring T that contains
        at most <i>k</i>
        distinct characters.
      </p>

      <p>
        <strong>Example 1:</strong>
      </p>

      <div>
        <pre>
          <strong>Input: </strong>s ={" "}
          <span id="example-input-1-1">"eceba"</span>, k ={" "}
          <span id="example-input-1-2">2</span> <br />
          <strong>Output: </strong>
          <span id="example-output-1">3</span> <br />
          <strong>Explanation: </strong>T is "ece" which its length is 3.
        </pre>

        <div>
          <p>
            <strong>Example 2:</strong>
          </p>

          <pre>
            <strong>Input: </strong>s = <span id="example-input-2-1">"aa"</span>
            , k = <span id="example-input-2-2">1</span> <br />
            <strong>Output: </strong>2 <br />
            <strong>Explanation: </strong>T is "aa" which its length is 2.
          </pre>
        </div>
      </div>
    </div>
  ),
  395: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a string <code>s</code> and an integer <code>k</code>, return{" "}
        <em>the length of the longest substring of</em> <code>s</code>{" "}
        <em>
          such that the frequency of each character in this substring is greater
          than or equal to
        </em>{" "}
        <code>k</code>.
      </p>

      <p data-pm-slice="1 1 []">if no such substring exists, return 0.</p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "aaabb", k = 3 <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> The longest substring is "aaa", as 'a' is
        repeated 3 times.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "ababbc", k = 2 <br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> The longest substring is "ababb", as 'a'
        is repeated 2 times and 'b' is repeated 3 times.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of only lowercase English letters.
        </li>
        <li>
          <code>
            1 &lt;= k &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  424: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a string <code>s</code> and an integer <code>k</code>. You
        can choose any character of the string and change it to any other
        uppercase English character. You can perform this operation at most{" "}
        <code>k</code> times.
      </p>

      <p>
        Return{" "}
        <em>
          the length of the longest substring containing the same letter you can
          get after performing the above operations
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "ABAB", k = 2 <br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> Replace the two 'A's with two 'B's or vice
        versa.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "AABABBA", k = 1<br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> Replace the one 'A' in the middle with 'B'
        and form "AABBBBA".
        <br />
        The substring "BBBB" has the longest repeating letters, which is 4.
        <br />
        There may exists other ways to achieve this answer too.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of only uppercase English letters.
        </li>
        <li>
          <code>0 &lt;= k &lt;= s.length</code>
        </li>
      </ul>
    </div>
  ),
  438: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given two strings <code>s</code> and <code>p</code>, return{" "}
        <em>an array of all the start indices of </em>
        <code>p</code>
        <em>'s anagrams in </em>
        <code>s</code>. You may return the answer in <strong>any order</strong>.
      </p>

      <p>
        An <strong>Anagram</strong> is a word or phrase formed by rearranging
        the letters of a different word or phrase, typically using all the
        original letters exactly once.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "cbaebabacd", p = "abc" <br />
        <strong>Output:</strong> [0,6] <br />
        <strong>Explanation:</strong> <br />
        The substring with start index = 0 is "cba", which is an anagram of
        "abc". <br />
        The substring with start index = 6 is "bac", which is an anagram of
        "abc".
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abab", p = "ab" <br />
        <strong>Output:</strong> [0,1,2] <br />
        <strong>Explanation:</strong> <br />
        The substring with start index = 0 is "ab", which is an anagram of "ab".{" "}
        <br />
        The substring with start index = 1 is "ba", which is an anagram of "ab".{" "}
        <br />
        The substring with start index = 2 is "ab", which is an anagram of "ab".
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length, p.length &lt;= 3 * 10<sup>4</sup>
          </code>
        </li>{" "}
        <br />
        <li>
          <code>s</code> and <code>p</code> consist of lowercase English
          letters.
        </li>
      </ul>
    </div>
  ),
  480: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        The <strong>median</strong> is the middle value in an ordered integer
        list. If the size of the list is even, there is no middle value. So the
        median is the mean of the two middle values.
      </p>

      <ul>
        <li>
          For examples, if{" "}
          <code>
            arr = [2,<u>3</u>,4]
          </code>
          , the median is <code>3</code>.
        </li>
        <li>
          For examples, if{" "}
          <code>
            arr = [1,<u>2,3</u>,4]
          </code>
          , the median is <code>(2 + 3) / 2 = 2.5</code>.
        </li>
      </ul>

      <p>
        You are given an integer array <code>nums</code> and an integer{" "}
        <code>k</code>. There is a sliding window of size <code>k</code> which
        is moving from the very left of the array to the very right. You can
        only see the <code>k</code> numbers in the window. Each time the sliding
        window moves right by one position.
      </p>

      <p>
        Return <em>the median array for each window in the original array</em>.
        Answers within{" "}
        <code>
          10<sup>-5</sup>
        </code>{" "}
        of the actual value will be accepted.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,-1,-3,5,3,6,7], k = 3 <br />
        <strong>Output:</strong> <br />
        [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000] <br />
        <strong>Explanation:</strong>
        {`Window position                Median
    ---------------                -----
    [1  3  -1] -3  5  3  6  7        1
     1 [3  -1  -3] 5  3  6  7       -1
     1  3 [-1  -3  5] 3  6  7       -1
     1  3  -1 [-3  5  3] 6  7        3
     1  3  -1  -3 [5  3  6] 7        5
     1  3  -1  -3  5 [3  6  7]       6`}
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,4,2,3,1,4,2], k = 3 <br />
        <strong>Output:</strong>{" "}
        [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
      </ul>
    </div>
  ),
  487: (
    <div class="markdown-body div-width">
      <p>
        Given a binary array, find the maximum number of consecutive 1s in this
        array if you can flip at most one 0.
      </p>

      <p>
        <b>Example 1:</b>
        <br />
      </p>
      <pre>
        <b>Input:</b> [1,0,1,1,0] <br />
        <b>Output:</b> 4 <br />
        <b>Explanation:</b> Flip the first zero will get the the maximum number
        of consecutive 1s. After flipping, the maximum number of consecutive 1s
        is 4.
      </pre>
      <p></p>

      <p>
        <b>Note:</b>
      </p>
      <ul>
        <li>
          The input array will only contain <code>0</code> and <code>1</code>.
        </li>
        <li>
          The length of input array is a positive integer and will not exceed
          10,000
        </li>
      </ul>
      <p></p>

      <p>
        <b>Follow up:</b>
        <br />
        What if the input numbers come in one by one as an{" "}
        <b>infinite stream</b>? In other words, you can't store all numbers
        coming from the stream as it's too large to hold in memory. Could you
        solve it efficiently?
      </p>
    </div>
  ),
  567: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given two strings <code>s1</code> and <code>s2</code>, return{" "}
        <code>true</code>
        <em> if </em>
        <code>s2</code>
        <em> contains a permutation of </em>
        <code>s1</code>
        <em>, or </em>
        <code>false</code>
        <em> otherwise</em>.
      </p>

      <p>
        In other words, return <code>true</code> if one of <code>s1</code>'s
        permutations is the substring of <code>s2</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s1 = "ab", s2 = "eidbaooo" <br />
        <strong>Output:</strong> true <br />
        <strong>Explanation:</strong> s2 contains one permutation of s1 ("ba").
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s1 = "ab", s2 = "eidboaoo" <br />
        <strong>Output:</strong> false
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s1.length, s2.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>s1</code> and <code>s2</code> consist of lowercase English
          letters.
        </li>
      </ul>
    </div>
  ),
  594: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        We define a harmonious array as an array where the difference between
        its maximum value and its minimum value is <b>exactly</b> <code>1</code>
        .
      </p>

      <p>
        Given an integer array <code>nums</code>, return{" "}
        <em>
          the length of its longest harmonious subsequence among all its
          possible subsequences
        </em>
        .
      </p>

      <p>
        A <strong>subsequence</strong> of array is a sequence that can be
        derived from the array by deleting some or no elements without changing
        the order of the remaining elements.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,2,2,5,2,3,7] <br />
        <strong>Output:</strong> 5<br />
        <strong>Explanation:</strong> The longest harmonious subsequence is
        [3,2,2,2,3].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,4]
        <br />
        <strong>Output:</strong> 2
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1,1]
        <br />
        <strong>Output:</strong> 0
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  632: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You have <code>k</code> lists of sorted integers in{" "}
        <strong>non-decreasing&nbsp;order</strong>. Find the <b>smallest</b>{" "}
        range that includes at least one number from each of the <code>k</code>{" "}
        lists.
      </p>

      <p>
        We define the range <code>[a, b]</code> is smaller than range{" "}
        <code>[c, d]</code> if <code>b - a &lt; d - c</code> <strong>or</strong>{" "}
        <code>a &lt; c</code> if <code>b - a == d - c</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums =
        [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]] <br />
        <strong>Output:</strong> [20,24]
        <br />
        <strong>Explanation: </strong>
        <br />
        List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
        <br />
        List 2: [0, 9, 12, 20], 20 is in range [20,24].
        <br />
        List 3: [5, 18, 22, 30], 22 is in range [20,24].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [[1,2,3],[1,2,3],[1,2,3]]
        <br />
        <strong>Output:</strong> [1,1]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>nums.length == k</code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= 3500</code>
        </li>
        <li>
          <code>1 &lt;= nums[i].length &lt;= 50</code>
        </li>
        <li>
          <code>
            -10<sup>5</sup> &lt;= nums[i][j] &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>nums[i]</code>&nbsp;is sorted in <strong>non-decreasing</strong>{" "}
          order.
        </li>
      </ul>
    </div>
  ),
  643: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code> consisting of{" "}
        <code>n</code> elements, and an integer <code>k</code>.
      </p>

      <p>
        Find a contiguous subarray whose <strong>length is equal to</strong>{" "}
        <code>k</code> that has the maximum average value and return{" "}
        <em>this value</em>. Any answer with a calculation error less than{" "}
        <code>
          10<sup>-5</sup>
        </code>{" "}
        will be accepted.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,12,-5,-6,50,3], k = 4 <br />
        <strong>Output:</strong> 12.75000 <br />
        <strong>Explanation:</strong> Maximum average is (12 - 5 - 6 + 50) / 4 =
        51 / 4 = 12.75
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5], k = 1 <br />
        <strong>Output:</strong> 5.00000
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == nums.length</code>
        </li>
        <li>
          <code>
            1 &lt;= k &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  658: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a <strong>sorted</strong> integer array <code>arr</code>, two
        integers <code>k</code> and <code>x</code>, return the <code>k</code>{" "}
        closest integers to <code>x</code> in the array. The result should also
        be sorted in ascending order.
      </p>

      <p>
        An integer <code>a</code> is closer to <code>x</code> than an integer{" "}
        <code>b</code> if:
      </p>

      <ul>
        <li>
          <code>|a - x| &lt; |b - x|</code>, or
        </li>
        <li>
          <code>|a - x| == |b - x|</code> and <code>a &lt; b</code>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = 3 <br />
        <strong>Output:</strong> [1,2,3,4]
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> arr = [1,2,3,4,5], k = 4, x = -1
        <br />
        <strong>Output:</strong> [1,2,3,4]
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= k &lt;= arr.length</code>
        </li>
        <li>
          <code>
            1 &lt;= arr.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>arr</code> is sorted in <strong>ascending</strong> order.
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= arr[i], x &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  683: (
    <div class="markdown-body div-width">
      <p>
        You have <code>N</code> bulbs in a row numbered from <code>1</code> to{" "}
        <code>N</code>. Initially, all the bulbs everyday until all bulbs are on
        after <code>N</code> days.
      </p>

      <p>
        You are given an array <code>bulbs</code>&nbsp;of length <code>N</code>
        &nbsp;where <code>bulbs[i] = x</code> means that on the{" "}
        <code>(i+1)th</code> day, we will turn on the bulb at position
        <code>x</code>&nbsp;where&nbsp;<code>i</code>&nbsp;is&nbsp;
        <code>0-indexed</code>&nbsp;and&nbsp;<code>x</code>&nbsp;is&nbsp;
        <code>1-indexed.</code>
      </p>

      <p>
        Given an integer <code>K</code>, find out the{" "}
        <strong>minimum day number</strong> such that there exists two{" "}
        <strong>turned on</strong> bulbs that have
        <strong>exactly</strong>&nbsp;<code>K</code> bulbs between them that are{" "}
        <strong>all turned off</strong>.
      </p>

      <p>
        If there isn't such day, return <code>-1</code>.
      </p>

      <p>&nbsp;</p>

      <p>
        <b>Example 1:</b>
      </p>

      <pre>
        <strong>Input:</strong>
        bulbs: [1,3,2] K: 1
        <br />
        <strong>Output:</strong> 2
        <strong>
          <br />
          Explanation:
        </strong>
        On the first day: bulbs[0] = 1, first bulb is turned on: [1,0,0] On the
        second day: bulbs[1] = 3, third bulb is turned on: [1,0,1] On the third
        day: bulbs[2] = 2, second bulb is turned on: [1,1,1] We return 2 because
        on the second day, there were two on bulbs with one off bulb between
        them.
      </pre>

      <p>
        <b>Example 2:</b>
      </p>

      <pre>
        <strong>Input:</strong>
        bulbs: [1,2,3] K: 1<br />
        <strong>Output:</strong> -1
      </pre>

      <p>
        <b>Note:</b>
      </p>

      <ul>
        <li>
          <code>1 &lt;= N &lt;= 20000</code>
        </li>
        <li>
          <code>1 &lt;= bulbs[i] &lt;= N</code>
        </li>
        <li>
          <code>bulbs</code>&nbsp;is a permutation of numbers from&nbsp;
          <code>1</code>&nbsp;to&nbsp;<code>N</code>.
        </li>
        <li>
          <code>0 &lt;= K &lt;= 20000</code>
        </li>
      </ul>
    </div>
  ),
  713: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of integers <code>nums</code> and an integer{" "}
        <code>k</code>, return{" "}
        <em>
          the number of contiguous subarrays where the product of all the
          elements in the subarray is strictly less than{" "}
        </em>
        <code>k</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [10,5,2,6], k = 100 <br />
        <strong>Output:</strong> 8<br />
        <strong>Explanation:</strong> The 8 subarrays that have product less
        than 100 are:
        <br />
        [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
        <br />
        Note that [10, 5, 2] is not included as the product of 100 is not
        strictly less than k.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3], k = 0<br />
        <strong>Output:</strong> 0
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= nums[i] &lt;= 1000</code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 10<sup>6</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  718: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given two integer arrays <code>nums1</code> and <code>nums2</code>,
        return{" "}
        <em>
          the maximum length of a subarray that appears in <strong>both</strong>{" "}
          arrays
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7] <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The repeated subarray with maximum length
        is [3,2,1].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
        <br />
        <strong>Output:</strong> 5<br />
        <strong>Explanation:</strong> The repeated subarray with maximum length
        is [0,0,0,0,0].
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code>
        </li>
        <li>
          <code>0 &lt;= nums1[i], nums2[i] &lt;= 100</code>
        </li>
      </ul>
    </div>
  ),
  727: (
    <div class="markdown-body div-width">
      <p>
        Given strings <code>S</code> and <code>T</code>, find the minimum
        (contiguous)
        <b>substring</b> <code>W</code> of <code>S</code>, so that{" "}
        <code>T</code> is a <b>subsequence</b>
        of <code>W</code>.
      </p>

      <p>
        If there is no such window in <code>S</code> that covers all characters
        in <code>T</code>, return the empty string <code>""</code>. If there are
        multiple such minimum-length windows, return the one with the left-most
        starting index.
      </p>

      <p>
        <b>Example 1:</b>
      </p>

      <pre>
        <strong>Input:</strong>
        S = "abcdebdde", T = "bde" <br />
        <strong>Output:</strong> "bcde"
        <br />
        <strong>Explanation:</strong>
        <br />
        "bcde" is the answer because it occurs before "bdde" which has the same
        length.
        <br />
        "deb" is not a smaller window because the elements of T in the window
        must occur in order.
      </pre>

      <p>&nbsp;</p>

      <p>
        <b>Note:</b>
      </p>

      <ul>
        <li>
          All the strings in the input will only contain lowercase letters.
        </li>
        <li>
          The length of <code>S</code> will be in the range{" "}
          <code>[1, 20000]</code>.
        </li>
        <li>
          The length of <code>T</code> will be in the range{" "}
          <code>[1, 100]</code>.
        </li>
      </ul>
    </div>
  ),
  904: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are visiting a farm that has a single row of fruit trees arranged
        from left to right. The trees are represented by an integer array{" "}
        <code>fruits</code> where <code>fruits[i]</code> is the{" "}
        <strong>type</strong> of fruit the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        tree produces.
      </p>

      <p>
        You want to collect as much fruit as possible. However, the owner has
        some strict rules that you must follow:
      </p>

      <ul>
        <li>
          You only have <strong>two</strong> baskets, and each basket can only
          hold a <strong>single type</strong> of fruit. There is no limit on the
          amount of fruit each basket can hold.
        </li>
        <li>
          Starting from any tree of your choice, you must pick{" "}
          <strong>exactly one fruit</strong> from <strong>every</strong> tree
          (including the start tree) while moving to the right. The picked
          fruits must fit in one of your baskets.
        </li>
        <li>
          Once you reach a tree with fruit that cannot fit in your baskets, you
          must stop.
        </li>
      </ul>

      <p>
        Given the integer array <code>fruits</code>, return{" "}
        <em>
          the <strong>maximum</strong> number of fruits you can pick
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> fruits = [<u>1,2,1</u>] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> We can pick from all 3 trees.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> fruits = [0,<u>1,2,2</u>] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> We can pick from trees [1,2,2]. <br />
        If we had started at the first tree, we would only pick from trees
        [0,1].
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> fruits = [1,<u>2,3,2,2</u>] <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> We can pick from trees [2,3,2,2]. <br />
        If we had started at the first tree, we would only pick from trees
        [1,2].
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= fruits.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= fruits[i] &lt; fruits.length</code>
        </li>
      </ul>
    </div>
  ),
  930: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a binary array <code>nums</code> and an integer <code>goal</code>,
        return{" "}
        <em>
          the number of non-empty <strong>subarrays</strong> with a sum
        </em>{" "}
        <code>goal</code>.
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous part of the array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,0,1,0,1], goal = 2<br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> The 4 subarrays are bolded and underlined
        below:
        <br />[
        <u>
          <strong>1,0,1</strong>
        </u>
        ,0,1] <br />[
        <u>
          <strong>1,0,1,0</strong>
        </u>
        ,1]
        <br />
        [1,
        <u>
          <strong>0,1,0,1</strong>
        </u>
        ]<br />
        [1,0,
        <u>
          <strong>1,0,1</strong>
        </u>
        ]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,0,0,0,0], goal = 0<br />
        <strong>Output:</strong> 15
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 3 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>nums[i]</code> is either <code>0</code> or <code>1</code>.
        </li>
        <li>
          <code>0 &lt;= goal &lt;= nums.length</code>
        </li>
      </ul>
    </div>
  ),
  978: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>arr</code>, return{" "}
        <em>the length of a maximum size turbulent subarray of</em>{" "}
        <code>arr</code>.
      </p>

      <p>
        A subarray is <strong>turbulent</strong> if the comparison sign flips
        between each adjacent pair of elements in the subarray.
      </p>

      <p>
        More formally, a subarray <code>[arr[i], arr[i + 1], ..., arr[j]]</code>{" "}
        of <code>arr</code> is said to be turbulent if and only if:
      </p>

      <ul>
        <li>
          For <code>i &lt;= k &lt; j</code>:
          <ul>
            <li>
              <code>arr[k] &gt; arr[k + 1]</code> when <code>k</code> is odd,
              and
            </li>
            <li>
              <code>arr[k] &lt; arr[k + 1]</code> when <code>k</code> is even.
            </li>
          </ul>
        </li>
        <li>
          Or, for <code>i &lt;= k &lt; j</code>:
          <ul>
            <li>
              <code>arr[k] &gt; arr[k + 1]</code> when <code>k</code> is even,
              and
            </li>
            <li>
              <code>arr[k] &lt; arr[k + 1]</code> when <code>k</code> is odd.
            </li>
          </ul>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [9,4,2,10,7,8,8,1,9] <br />
        <strong>Output:</strong> 5<br />
        <strong>Explanation:</strong> arr[1] &gt; arr[2] &lt; arr[3] &gt; arr[4]
        &lt; arr[5]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [4,8,12,16]
        <br />
        <strong>Output:</strong> 2
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [100]
        <br />
        <strong>Output:</strong> 1
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= arr.length &lt;= 4 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= arr[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  992: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> and an integer <code>k</code>,
        return{" "}
        <em>
          the number of <strong>good subarrays</strong> of{" "}
        </em>
        <code>nums</code>.
      </p>

      <p>
        A <strong>good array</strong> is an array where the number of different
        integers in that array is exactly <code>k</code>.
      </p>

      <ul>
        <li>
          For example, <code>[1,2,3,1,2]</code> has <code>3</code> different
          integers: <code>1</code>, <code>2</code>, and <code>3</code>.
        </li>
      </ul>

      <p>
        A <strong>subarray</strong> is a <strong>contiguous</strong> part of an
        array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,1,2,3], k = 2 <br />
        <strong>Output:</strong> 7<br />
        <strong>Explanation:</strong> Subarrays formed with exactly 2 different
        integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,1,3,4], k = 3<br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> Subarrays formed with exactly 3 different
        integers: [1,2,1,3], [2,1,3], [1,3,4].
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= nums[i], k &lt;= nums.length</code>
        </li>
      </ul>
    </div>
  ),
  995: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a binary array <code>nums</code> and an integer{" "}
        <code>k</code>.
      </p>

      <p>
        A <strong>k-bit flip</strong> is choosing a <strong>subarray</strong> of
        length <code>k</code> from <code>nums</code> and simultaneously changing
        every <code>0</code> in the subarray to <code>1</code>, and every{" "}
        <code>1</code> in the subarray to <code>0</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the minimum number of <strong>k-bit flips</strong> required so that
          there is no{" "}
        </em>
        <code>0</code>
        <em> in the array</em>. If it is not possible, return <code>-1</code>.
      </p>

      <p>
        A <strong>subarray</strong> is a <strong>contiguous</strong> part of an
        array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,1,0], k = 1 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> Flip nums[0], then flip nums[2].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,0], k = 2 <br />
        <strong>Output:</strong> -1 <br />
        <strong>Explanation:</strong> No matter how we flip subarrays of size 2,
        we cannot make the array become [1,1,1].
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,0,0,1,0,1,1,0], k = 3 <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> <br />
        Flip nums[0],nums[1],nums[2]: nums becomes [1,1,1,1,0,1,1,0] <br />
        Flip nums[4],nums[5],nums[6]: nums becomes [1,1,1,1,1,0,0,0] <br />
        Flip nums[5],nums[6],nums[7]: nums becomes [1,1,1,1,1,1,1,1]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= nums.length</code>
        </li>
      </ul>
    </div>
  ),
  1004: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a binary array <code>nums</code> and an integer <code>k</code>,
        return <em>the maximum number of consecutive </em>
        <code>1</code>
        <em>'s in the array if you can flip at most</em> <code>k</code>{" "}
        <code>0</code>'s.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2 <br />
        <strong>Output:</strong> 6 <br />
        <strong>Explanation:</strong> [1,1,1,0,0,
        <u>
          <strong>1</strong>,1,1,1,1,<strong>1</strong>
        </u>
        ] Bolded numbers were flipped from 0 to 1. The longest subarray is
        underlined.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],
        k = 3 <br />
        <strong>Output:</strong> 10 <br />
        <strong>Explanation:</strong> [0,0,
        <u>
          1,1,<strong>1</strong>,<strong>1</strong>,1,1,1,<strong>1</strong>,1,1
        </u>
        ,0,0,0,1,1,1,1] Bolded numbers were flipped from 0 to 1. The longest
        subarray is underlined.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>nums[i]</code> is either <code>0</code> or <code>1</code>.
        </li>
        <li>
          <code>0 &lt;= k &lt;= nums.length</code>
        </li>
      </ul>
    </div>
  ),
  1031: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> and two integers{" "}
        <code>firstLen</code> and <code>secondLen</code>, return{" "}
        <em>
          the maximum sum of elements in two non-overlapping{" "}
          <strong>subarrays</strong> with lengths{" "}
        </em>
        <code>firstLen</code>
        <em> and </em>
        <code>secondLen</code>.
      </p>

      <p>
        The array with length <code>firstLen</code> could occur before or after
        the array with length <code>secondLen</code>, but they have to be
        non-overlapping.
      </p>

      <p>
        A <strong>subarray</strong> is a <strong>contiguous</strong> part of an
        array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,6,5,2,2,5,1,9,4], firstLen = 1,
        secondLen = 2 <br />
        <strong>Output:</strong> 20 <br />
        <strong>Explanation:</strong> One choice of subarrays is [9] with length
        1, and [6,5] with length 2.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,8,1,3,2,1,8,9,0], firstLen = 3,
        secondLen = 2 <br />
        <strong>Output:</strong> 29 <br />
        <strong>Explanation:</strong> One choice of subarrays is [3,8,1] with
        length 3, and [8,9] with length 2.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4,
        secondLen = 3 <br />
        <strong>Output:</strong> 31 <br />
        <strong>Explanation:</strong> One choice of subarrays is [5,6,0,9] with
        length 4, and [0,3,8] with length 3.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= firstLen, secondLen &lt;= 1000</code>
        </li>
        <li>
          <code>2 &lt;= firstLen + secondLen &lt;= 1000</code>
        </li>
        <li>
          <code>firstLen + secondLen &lt;= nums.length &lt;= 1000</code>
        </li>
        <li>
          <code>0 &lt;= nums[i] &lt;= 1000</code>
        </li>
      </ul>
    </div>
  ),
  1052: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        There is a bookstore owner that has a store open for <code>n</code>{" "}
        minutes. Every minute, some number of customers enter the store. You are
        given an integer array <code>customers</code> of length <code>n</code>{" "}
        where <code>customers[i]</code> is the number of the customer that
        enters the store at the start of the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        minute and all those customers leave after the end of that minute.
      </p>

      <p>
        On some minutes, the bookstore owner is grumpy. You are given a binary
        array grumpy where <code>grumpy[i]</code> is <code>1</code> if the
        bookstore owner is grumpy during the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        minute, and is <code>0</code> otherwise.
      </p>

      <p>
        When the bookstore owner is grumpy, the customers of that minute are not
        satisfied, otherwise, they are satisfied.
      </p>

      <p>
        The bookstore owner knows a secret technique to keep themselves not
        grumpy for <code>minutes</code> consecutive minutes, but can only use it
        once.
      </p>

      <p>
        Return{" "}
        <em>
          the maximum number of customers that can be satisfied throughout the
          day
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> customers = [1,0,1,2,1,1,7,5], grumpy =
        [0,1,0,1,0,1,0,1], minutes = 3 <br />
        <strong>Output:</strong> 16 <br />
        <strong>Explanation:</strong> The bookstore owner keeps themselves not
        grumpy for the last 3 minutes. <br />
        The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 +
        7 + 5 = 16.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> customers = [1], grumpy = [0], minutes = 1{" "}
        <br />
        <strong>Output:</strong> 1
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == customers.length == grumpy.length</code>
        </li>
        <li>
          <code>
            1 &lt;= minutes &lt;= n &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= customers[i] &lt;= 1000</code>
        </li>
        <li>
          <code>grumpy[i]</code> is either <code>0</code> or <code>1</code>.
        </li>
      </ul>
    </div>
  ),
  1156: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a string <code>text</code>. You can swap two of the
        characters in the <code>text</code>.
      </p>

      <p>
        Return{" "}
        <em>the length of the longest substring with repeated characters</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> text = "ababa" <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> We can swap the first 'b' with the last
        'a', or the last 'b' with the first 'a'. Then, the longest repeated
        character substring is "aaa" with length 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> text = "aaabaaa" <br />
        <strong>Output:</strong> 6 <br />
        <strong>Explanation:</strong> Swap 'b' with the last 'a' (or the first
        'a'), and we get longest repeated character substring "aaaaaa" with
        length 6.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> text = "aaaaa" <br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> No need to swap, longest repeated
        character substring is "aaaaa" with length is 5.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= text.length &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>text</code> consist of lowercase English characters only.
        </li>
      </ul>
    </div>
  ),
  1100: (
    <div class="markdown-body div-width">
      <p>
        Given a string <code>S</code>, return the number of substrings of length{" "}
        <code>K</code> with no repeated characters.
      </p>

      <p>&nbsp;</p>

      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input: </strong>S ={" "}
        <span id="example-input-1-1">"havefunonleetcode"</span>, K ={" "}
        <span id="example-input-1-2">5</span> <br />
        <strong>Output: </strong>
        <span id="example-output-1">6</span> <br />
        <strong>Explanation: </strong>
        There are 6 substrings they are :
        'havef','avefu','vefun','efuno','etcod','tcode'.
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input: </strong>S = <span id="example-input-2-1">"home"</span>,
        K = <span id="example-input-2-2">5</span> <br />
        <strong>Output: </strong>
        <span id="example-output-2">0</span> <br />
        <strong>Explanation: </strong>
        Notice K can be larger than the length of S. In this case is not
        possible to find any substring.
      </pre>

      <p>&nbsp;</p>

      <p>
        <strong>Note:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= S.length &lt;= 10^4</code>
        </li>
        <li>All characters of S are lowercase English letters.</li>
        <li>
          <code>1 &lt;= K &lt;= 10^4</code>
        </li>
      </ul>
    </div>
  ),
  1151: (
    <div class="markdown-body div-width">
      <p>
        Given a&nbsp;binary array <code>data</code>, return&nbsp;the minimum
        number of swaps required to group all <code>1</code>’s present in the
        array together in <strong>any place</strong> in the array.
      </p>

      <p>&nbsp;</p>

      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input: </strong>
        <span id="example-input-1-1">[1,0,1,0,1]</span> <br />
        <strong>Output: </strong>
        <span id="example-output-1">1</span> <br />
        <strong>Explanation: </strong> <br />
        There are 3 ways to group all 1's together: <br />
        [1,1,1,0,0] using 1 swap. <br />
        [0,1,1,1,0] using 2 swaps. <br />
        [0,0,1,1,1] using 1 swap. <br />
        The minimum is 1.
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input: </strong>
        <span id="example-input-2-1">[0,0,0,1,0]</span> <br />
        <strong>Output: </strong>
        <span id="example-output-2">0</span> <br />
        <strong>Explanation: </strong> <br />
        Since there is only one 1 in the array, no swaps needed.
      </pre>

      <p>
        <strong>Example 3:</strong>
      </p>

      <pre>
        <strong>Input: </strong>
        <span id="example-input-3-1">[1,0,1,0,1,0,0,1,1,0,1]</span> <br />
        <strong>Output: </strong>
        <span id="example-output-3">3</span> <br />
        <strong>Explanation: </strong> <br />
        One possible solution that uses 3 swaps is [0,0,0,0,0,1,1,1,1,1,1].
      </pre>

      <p>&nbsp;</p>

      <p>
        <span>
          <strong>Note</strong>
          <strong>:</strong>
        </span>
      </p>

      <ul>
        <li>
          <code>1 &lt;= data.length &lt;= 10^5</code>
        </li>
        <li>
          <code>0 &lt;= data[i] &lt;= 1</code>
        </li>
      </ul>
    </div>
  ),
  1176: (
    <div class="markdown-body div-width">
      <p>
        A dieter consumes&nbsp;<code>calories[i]</code>&nbsp;calories on the{" "}
        <code>i</code>-th day.&nbsp;
      </p>

      <p>
        Given an integer <code>k</code>, for <strong>every</strong> consecutive
        sequence of
        <code>k</code> days (
        <code>calories[i], calories[i+1], ..., calories[i+k-1]</code>&nbsp;for
        all <code>0 &lt;= i &lt;= n-k</code>), they look at <em>T</em>, the
        total calories consumed during that sequence of <code>k</code> days (
        <code>calories[i] + calories[i+1] + ... + calories[i+k-1]</code>):
      </p>

      <ul>
        <li>
          If <code>T &lt; lower</code>, they performed poorly on their diet and
          lose 1 point;&nbsp;
        </li>
        <li>
          If <code>T &gt; upper</code>, they performed well on their diet and
          gain 1 point;
        </li>
        <li>
          Otherwise, they performed normally and there is no change in points.
        </li>
      </ul>

      <p>
        Initially, the dieter has zero points. Return the total number of points
        the dieter has after dieting for <code>calories.length</code>&nbsp;days.
      </p>

      <p>Note that the total points can be negative.</p>

      <p>&nbsp;</p>
      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> calories = [1,2,3,4,5], k = 1, lower = 3, upper
        = 3 <br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation</strong>: Since k = 1, we consider each element of
        the array separately and compare it to lower and upper.
        <br />
        calories[0] and calories[1] are less than lower so 2 points are lost.
        <br />
        calories[3] and calories[4] are greater than upper so 2 points are
        gained.
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> calories = [3,2], k = 2, lower = 0, upper = 1
        <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation</strong>: Since k = 2, we consider subarrays of
        length 2.
        <br />
        calories[0] + calories[1] &gt; upper so 1 point is gained.
      </pre>

      <p>
        <strong>Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> calories = [6,5,0,0], k = 2, lower = 1, upper =
        5
        <strong>
          <br />
          Output:
        </strong>{" "}
        0
        <strong>
          <br />
          Explanation
        </strong>
        : calories[0] + calories[1] &gt; upper so 1 point is gained. lower &lt;=
        calories[1] + calories[2] &lt;= upper so no change in points.
        calories[2] + calories[3] &lt; lower so 1 point is lost.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= k &lt;= calories.length &lt;= 10^5</code>
        </li>
        <li>
          <code>0 &lt;= calories[i] &lt;= 20000</code>
        </li>
        <li>
          <code>0 &lt;= lower &lt;= upper</code>
        </li>
      </ul>
    </div>
  ),
  1208: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given two strings <code>s</code> and <code>t</code> of the same
        length and an integer <code>maxCost</code>.
      </p>

      <p>
        You want to change <code>s</code> to <code>t</code>. Changing the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        character of <code>s</code> to{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        character of <code>t</code> costs <code>|s[i] - t[i]|</code> (i.e., the
        absolute difference between the ASCII values of the characters).
      </p>

      <p>
        Return <em>the maximum length of a substring of </em>
        <code>s</code>
        <em>
          {" "}
          that can be changed to be the same as the corresponding substring of{" "}
        </em>
        <code>t</code>
        <em> with a cost less than or equal to </em>
        <code>maxCost</code>. If there is no substring from <code>s</code> that
        can be changed to its corresponding substring from <code>t</code>,
        return <code>0</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abcd", t = "bcdf", maxCost = 3 <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> "abc" of s can change to "bcd".
        <br />
        That costs 3, so the maximum length is 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abcd", t = "cdef", maxCost = 3<br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> Each character in s costs 2 to change to
        character in t, so the maximum length is 1.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abcd", t = "acde", maxCost = 0<br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> You cannot make any change, so the maximum
        length is 1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>t.length == s.length</code>
        </li>
        <li>
          <code>
            0 &lt;= maxCost &lt;= 10<sup>6</sup>
          </code>
        </li>
        <li>
          <code>s</code> and <code>t</code> consist of only lowercase English
          letters.
        </li>
      </ul>
    </div>
  ),
  1234: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a string s of length <code>n</code> containing only four
        kinds of characters: <code>'Q'</code>, <code>'W'</code>,{" "}
        <code>'E'</code>, and <code>'R'</code>.
      </p>

      <p>
        A string is said to be <strong>balanced</strong>
        <em> </em>if each of its characters appears <code>n / 4</code> times
        where <code>n</code> is the length of the string.
      </p>

      <p>
        Return{" "}
        <em>
          the minimum length of the substring that can be replaced with{" "}
          <strong>any</strong> other string of the same length to make{" "}
        </em>
        <code>s</code>
        <em>
          {" "}
          <strong>balanced</strong>
        </em>
        . If s is already <strong>balanced</strong>, return <code>0</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "QWER" <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> s is already balanced.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "QQWE" <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> We need to replace a 'Q' to 'R', so that
        "RQWE" (or "QRWE") is balanced.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "QQQW" <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> We can replace the first "QQ" to "ER".
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == s.length</code>
        </li>
        <li>
          <code>
            4 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>n</code> is a multiple of <code>4</code>.
        </li>
        <li>
          <code>s</code> contains only <code>'Q'</code>, <code>'W'</code>,{" "}
          <code>'E'</code>, and <code>'R'</code>.
        </li>
      </ul>
    </div>
  ),
  1248: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of integers <code>nums</code> and an integer{" "}
        <code>k</code>. A continuous subarray is called <strong>nice</strong> if
        there are <code>k</code> odd numbers on it.
      </p>

      <p>
        Return{" "}
        <em>
          the number of <strong>nice</strong> sub-arrays
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,2,1,1], k = 3<br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> The only sub-arrays with 3 odd numbers are
        [1,1,2,1] and [1,2,1,1].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,4,6], k = 1<br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> There are no odd numbers in the array.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,2,2,1,2,2,1,2,2,2], k = 2 <br />
        <strong>Output:</strong> 16
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 50000</code>
        </li>
        <li>
          <code>1 &lt;= nums[i] &lt;= 10^5</code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= nums.length</code>
        </li>
      </ul>
    </div>
  ),
  1297: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a string <code>s</code>, return the maximum number of occurrences
        of <strong>any</strong> substring under the following rules:
      </p>

      <ul>
        <li>
          The number of unique characters in the substring must be less than or
          equal to <code>maxLetters</code>.
        </li>
        <li>
          The substring size must be between <code>minSize</code> and{" "}
          <code>maxSize</code> inclusive.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "aababcaab", maxLetters = 2, minSize = 3,
        maxSize = 4 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> Substring "aab" has 2 occurrences in the
        original string. <br />
        It satisfies the conditions, 2 unique letters and size 3 (between
        minSize and maxSize).
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "aaaa", maxLetters = 1, minSize = 3, maxSize
        = 3 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> Substring "aaa" occur 2 times in the
        string. It can overlap.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= maxLetters &lt;= 26</code>
        </li>
        <li>
          <code>1 &lt;= minSize &lt;= maxSize &lt;= min(26, s.length)</code>
        </li>
        <li>
          <code>s</code> consists of only lowercase English letters.
        </li>
      </ul>
    </div>
  ),
  1343: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of integers <code>arr</code> and two integers{" "}
        <code>k</code> and <code>threshold</code>, return{" "}
        <em>the number of sub-arrays of size </em>
        <code>k</code>
        <em> and average greater than or equal to </em>
        <code>threshold</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4{" "}
        <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> Sub-arrays [2,5,5],[5,5,5] and [5,5,8]
        have averages 4, 5 and 6 respectively. All other sub-arrays of size 3
        have averages less than 4 (the threshold).
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [11,13,17,23,29,31,7,5,2,3], k = 3,
        threshold = 5 <br />
        <strong>Output:</strong> 6 <br />
        <strong>Explanation:</strong> The first 6 sub-arrays of size 3 have
        averages greater than 5. Note that averages are not integers.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= arr.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= arr[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= arr.length</code>
        </li>
        <li>
          <code>
            0 &lt;= threshold &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1358: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a string <code>s</code>&nbsp;consisting only of characters{" "}
        <em>a</em>, <em>b</em> and <em>c</em>.
      </p>

      <p>
        Return the number of substrings containing <b>at least</b>&nbsp;one
        occurrence of all these characters <em>a</em>, <em>b</em> and <em>c</em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abcabc" <br />
        <strong>Output:</strong> 10
        <br />
        <strong>Explanation:</strong> The substrings containing&nbsp;at
        least&nbsp;one occurrence of the characters&nbsp;<em>a</em>,&nbsp;
        <em>b</em>&nbsp;and&nbsp;<em>c are "</em>abc<em>", "</em>abca
        <em>", "</em>abcab<em>", "</em>abcabc<em>", "</em>bca<em>", "</em>bcab
        <em>", "</em>bcabc<em>", "</em>cab<em>", "</em>cabc<em>" </em>and
        <em> "</em>abc<em>" </em>(<strong>again</strong>)<em>. </em>
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "aaacb"
        <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The substrings containing&nbsp;at
        least&nbsp;one occurrence of the characters&nbsp;<em>a</em>,&nbsp;
        <em>b</em>&nbsp;and&nbsp;<em>c are "</em>aaacb<em>", "</em>aacb
        <em>" </em>and<em> "</em>acb<em>".</em>
        <em> </em>
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abc"
        <br />
        <strong>Output:</strong> 1
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>3 &lt;= s.length &lt;= 5 x 10^4</code>
        </li>
        <li>
          <code>s</code>&nbsp;only consists of&nbsp;<em>a</em>, <em>b</em> or{" "}
          <em>c&nbsp;</em>characters.
        </li>
      </ul>
    </div>
  ),
  1423: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        There are several cards <strong>arranged in a row</strong>, and each
        card has an associated number of points. The points are given in the
        integer array <code>cardPoints</code>.
      </p>

      <p>
        In one step, you can take one card from the beginning or from the end of
        the row. You have to take exactly <code>k</code> cards.
      </p>

      <p>Your score is the sum of the points of the cards you have taken.</p>

      <p>
        Given the integer array <code>cardPoints</code> and the integer{" "}
        <code>k</code>, return the <em>maximum score</em> you can obtain.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> cardPoints = [1,2,3,4,5,6,1], k = 3 <br />
        <strong>Output:</strong> 12
        <br />
        <strong>Explanation:</strong> After the first step, your score will
        always be 1. However, choosing the rightmost card first will maximize
        your total score. The optimal strategy is to take the three cards on the
        right, giving a final score of 1 + 6 + 5 = 12.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> cardPoints = [2,2,2], k = 2<br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> Regardless of which two cards you take,
        your score will always be 4.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> cardPoints = [9,7,7,9,7,7,9], k = 7<br />
        <strong>Output:</strong> 55
        <br />
        <strong>Explanation:</strong> You have to take all the cards. Your score
        is the sum of points of all cards.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= cardPoints.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= cardPoints[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= cardPoints.length</code>
        </li>
      </ul>
    </div>
  ),
  1456: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a string <code>s</code> and an integer <code>k</code>, return{" "}
        <em>the maximum number of vowel letters in any substring of </em>
        <code>s</code>
        <em> with length </em>
        <code>k</code>.
      </p>

      <p>
        <strong>Vowel letters</strong> in English are <code>'a'</code>,{" "}
        <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, and{" "}
        <code>'u'</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abciiidef", k = 3 <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> The substring "iii" contains 3 vowel
        letters.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "aeiou", k = 2 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> Any substring of length 2 contains 2
        vowels.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "leetcode", k = 3 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> "lee", "eet" and "ode" contain 2 vowels.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of lowercase English letters.
        </li>
        <li>
          <code>1 &lt;= k &lt;= s.length</code>
        </li>
      </ul>
    </div>
  ),
  1477: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array of integers <code>arr</code> and an integer{" "}
        <code>target</code>.
      </p>

      <p>
        You have to find <strong>two non-overlapping sub-arrays</strong> of{" "}
        <code>arr</code> each with a sum equal <code>target</code>. There can be
        multiple answers so you have to find an answer where the sum of the
        lengths of the two sub-arrays is <strong>minimum</strong>.
      </p>

      <p>
        Return <em>the minimum sum of the lengths</em> of the two required
        sub-arrays, or return <code>-1</code> if you cannot find such two
        sub-arrays.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [3,2,2,4,3], target = 3 <br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> Only two sub-arrays have sum = 3 ([3] and
        [3]). The sum of their lengths is 2.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [7,3,4,7], target = 7<br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> Although we have three non-overlapping
        sub-arrays of sum = 7 ([7], [3,4] and [7]), but we will choose the first
        and third sub-arrays as the sum of their lengths is 2.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [4,3,2,6,2,3,4], target = 6<br />
        <strong>Output:</strong> -1
        <br />
        <strong>Explanation:</strong> We have only one sub-array of sum = 6.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= arr.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= arr[i] &lt;= 1000</code>
        </li>
        <li>
          <code>
            1 &lt;= target &lt;= 10<sup>8</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1493: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a binary array <code>nums</code>, you should delete one element
        from it.
      </p>

      <p>
        Return{" "}
        <em>the size of the longest non-empty subarray containing only </em>
        <code>1</code>
        <em>'s in the resulting array</em>. Return <code>0</code> if there is no
        such subarray.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,0,1] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> After deleting the number in position 2,
        [1,1,1] contains 3 numbers with value of 1's.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,1,1,1,0,1,1,0,1] <br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> After deleting the number in position 4,
        [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1] <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> You must delete one element.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>nums[i]</code> is either <code>0</code> or <code>1</code>.
        </li>
      </ul>
    </div>
  ),
  1610: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array <code>points</code>, an integer{" "}
        <code>angle</code>, and your <code>location</code>, where{" "}
        <code>
          location = [pos<sub>x</sub>, pos<sub>y</sub>]
        </code>{" "}
        and{" "}
        <code>
          points[i] = [x<sub>i</sub>, y<sub>i</sub>]
        </code>{" "}
        both denote <strong>integral coordinates</strong> on the X-Y plane.
      </p>

      <p>
        Initially, you are facing directly east from your position. You{" "}
        <strong>cannot move</strong> from your position, but you can{" "}
        <strong>rotate</strong>. In other words,{" "}
        <code>
          pos<sub>x</sub>
        </code>{" "}
        and{" "}
        <code>
          pos<sub>y</sub>
        </code>{" "}
        cannot be changed. Your field of view in <strong>degrees</strong> is
        represented by <code>angle</code>, determining how wide you can see from
        any given view direction. Let <code>d</code> be the amount in degrees
        that you rotate counterclockwise. Then, your field of view is the{" "}
        <strong>inclusive</strong> range of angles{" "}
        <code>[d - angle/2, d + angle/2]</code>.
      </p>

      <p>
        <video
          autoplay=""
          controls=""
          height="360"
          width="480"
          style={{ maxWidth: "100%", height: "auto" }}
        >
          <source
            src="https://assets.leetcode.com/uploads/2020/09/30/angle.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag or this video format.
        </video>
      </p>

      <p>
        You can <strong>see</strong> some set of points if, for each point, the{" "}
        <strong>angle</strong> formed by the point, your position, and the
        immediate east direction from your position is{" "}
        <strong>in your field of view</strong>.
      </p>

      <p>
        There can be multiple points at one coordinate. There may be points at
        your location, and you can always see these points regardless of your
        rotation. Points do not obstruct your vision to other points.
      </p>

      <p>
        Return <em>the maximum number of points you can see</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/09/30/89a07e9b-00ab-4967-976a-c723b2aa8656.png"
        style={{ width: 400, height: 300 }}
      />
      <pre>
        <strong>Input:</strong> points = [[2,1],[2,2],[3,3]], angle = 90,
        location = [1,1] <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The shaded region represents your field of
        view. All points can be made visible in your field of view, including
        [3,3] even though [2,2] is in front and in the same line of sight.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> points = [[2,1],[2,2],[3,4],[1,1]], angle = 90,
        location = [1,1]
        <br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> All points can be made visible in your
        field of view, including the one at your location.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/09/30/5010bfd3-86e6-465f-ac64-e9df941d2e49.png"
        style={{ width: 690, height: 348 }}
      />
      <pre>
        <strong>Input:</strong> points = [[1,0],[2,1]], angle = 13, location =
        [1,1]
        <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> You can only see one of the two points, as
        shown above.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= points.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>points[i].length == 2</code>
        </li>
        <li>
          <code>location.length == 2</code>
        </li>
        <li>
          <code>0 &lt;= angle &lt; 360</code>
        </li>
        <li>
          <code>
            0 &lt;= pos<sub>x</sub>, pos<sub>y</sub>, x<sub>i</sub>, y
            <sub>i</sub> &lt;= 100
          </code>
        </li>
      </ul>
    </div>
  ),
  1652: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You have a bomb to defuse, and your time is running out! Your informer
        will provide you with a <strong>circular</strong> array{" "}
        <code>code</code>&nbsp;of length of <code>n</code>&nbsp;and a key{" "}
        <code>k</code>.
      </p>

      <p>
        To decrypt the code, you must replace every number. All the numbers are
        replaced <strong>simultaneously</strong>.
      </p>

      <ul>
        <li>
          If <code>k &gt; 0</code>, replace the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          number with the sum of the <strong>next</strong> <code>k</code>{" "}
          numbers.
        </li>
        <li>
          If <code>k &lt; 0</code>, replace the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          number with the sum of the <strong>previous</strong> <code>k</code>{" "}
          numbers.
        </li>
        <li>
          If <code>k == 0</code>, replace the{" "}
          <code>
            i<sup>th</sup>
          </code>{" "}
          number with <code>0</code>.
        </li>
      </ul>

      <p>
        As <code>code</code> is circular, the next element of{" "}
        <code>code[n-1]</code> is <code>code[0]</code>, and the previous element
        of <code>code[0]</code> is <code>code[n-1]</code>.
      </p>

      <p>
        Given the <strong>circular</strong> array <code>code</code> and an
        integer key <code>k</code>, return{" "}
        <em>the decrypted code to defuse the bomb</em>!
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> code = [5,7,1,4], k = 3 <br />
        <strong>Output:</strong> [12,10,16,13] <br />
        <strong>Explanation:</strong> Each number is replaced by the sum of the
        next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1].
        Notice that the numbers wrap around.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> code = [1,2,3,4], k = 0 <br />
        <strong>Output:</strong> [0,0,0,0] <br />
        <strong>Explanation:</strong> When k is zero, the numbers are replaced
        by 0.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> code = [2,4,9,3], k = -2 <br />
        <strong>Output:</strong> [12,5,6,13] <br />
        <strong>Explanation:</strong> The decrypted code is [3+9, 2+3, 4+2,
        9+4]. Notice that the numbers wrap around again. If k is negative, the
        sum is of the <strong>previous</strong> numbers.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == code.length</code>
        </li>
        <li>
          <code>1 &lt;= n&nbsp;&lt;= 100</code>
        </li>
        <li>
          <code>1 &lt;= code[i] &lt;= 100</code>
        </li>
        <li>
          <code>-(n - 1) &lt;= k &lt;= n - 1</code>
        </li>
      </ul>
    </div>
  ),
  1658: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code> and an integer{" "}
        <code>x</code>. In one operation, you can either remove the leftmost or
        the rightmost element from the array <code>nums</code> and subtract its
        value from <code>x</code>. Note that this <strong>modifies</strong> the
        array for future operations.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>minimum number</strong> of operations to reduce{" "}
        </em>
        <code>x</code>{" "}
        <em>
          to <strong>exactly</strong>
        </em>{" "}
        <code>0</code> <em>if it is possible</em>
        <em>, otherwise, return </em>
        <code>-1</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,4,2,3], x = 5 <br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> The optimal solution is to remove the last
        two elements to reduce x to zero.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,6,7,8,9], x = 4<br />
        <strong>Output:</strong> -1
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,2,20,1,1,3], x = 10
        <br />
        <strong>Output:</strong> 5<br />
        <strong>Explanation:</strong> The optimal solution is to remove the last
        three elements and the first two elements (5 operations in total) to
        reduce x to zero.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= x &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1695: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array of positive integers <code>nums</code> and want
        to erase a subarray containing&nbsp;<strong>unique elements</strong>.
        The <strong>score</strong> you get by erasing the subarray is equal to
        the <strong>sum</strong> of its elements.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>maximum score</strong> you can get by erasing{" "}
          <strong>exactly one</strong> subarray.
        </em>
      </p>

      <p>
        An array <code>b</code> is called to be a{" "}
        <span class="tex-font-style-it">subarray</span> of <code>a</code> if it
        forms a contiguous subsequence of <code>a</code>, that is, if it is
        equal to <code>a[l],a[l+1],...,a[r]</code> for some <code>(l,r)</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [4,2,4,5,6] <br />
        <strong>Output:</strong> 17 <br />
        <strong>Explanation:</strong> The optimal subarray here is [2,4,5,6].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,2,1,2,5,2,1,2,5] <br />
        <strong>Output:</strong> 8 <br />
        <strong>Explanation:</strong> The optimal subarray here is [5,2,1] or
        [1,2,5].
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1703: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array, <code>nums</code>, and an integer{" "}
        <code>k</code>. <code>nums</code> comprises of only <code>0</code>'s and{" "}
        <code>1</code>'s. In one move, you can choose two{" "}
        <strong>adjacent</strong> indices and swap their values.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>minimum</strong> number of moves required so that{" "}
        </em>
        <code>nums</code>
        <em> has </em>
        <code>k</code>
        <em>
          {" "}
          <strong>consecutive</strong>{" "}
        </em>
        <code>1</code>
        <em>'s</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,0,0,1,0,1], k = 2 <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> In 1 move, nums could be [1,0,0,0,<u>1</u>
        ,<u>1</u>] and have 2 consecutive 1's.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,0,0,0,0,0,1,1], k = 3<br />
        <strong>Output:</strong> 5<br />
        <strong>Explanation:</strong> In 5 moves, the leftmost 1 can be shifted
        right until nums = [0,0,0,0,0,<u>1</u>,<u>1</u>,<u>1</u>].
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,0,1], k = 2<br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> nums already has 2 consecutive 1's.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>nums[i]</code> is <code>0</code> or <code>1</code>.
        </li>
        <li>
          <code>1 &lt;= k &lt;= sum(nums)</code>
        </li>
      </ul>
    </div>
  ),
  1763: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        A string <code>s</code> is <strong>nice</strong> if, for every letter of
        the alphabet that <code>s</code> contains, it appears{" "}
        <strong>both</strong> in uppercase and lowercase. For example,{" "}
        <code>"abABB"</code> is nice because <code>'A'</code> and{" "}
        <code>'a'</code> appear, and <code>'B'</code> and <code>'b'</code>{" "}
        appear. However, <code>"abA"</code> is not because <code>'b'</code>{" "}
        appears, but <code>'B'</code> does not.
      </p>

      <p>
        Given a string <code>s</code>, return{" "}
        <em>
          the longest <strong>substring</strong> of <code>s</code> that is{" "}
          <strong>nice</strong>. If there are multiple, return the substring of
          the <strong>earliest</strong> occurrence. If there are none, return an
          empty string
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "YazaAay" <br />
        <strong>Output:</strong> "aAa" <br />
        <strong>Explanation: </strong>"aAa" is a nice string because 'A/a' is
        the only letter of the alphabet in s, and both 'A' and 'a' appear. "aAa"
        is the longest nice substring.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "Bb" <br />
        <strong>Output:</strong> "Bb" <br />
        <strong>Explanation:</strong> "Bb" is a nice string because both 'B' and
        'b' appear. The whole string is a substring.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "c" <br />
        <strong>Output:</strong> "" <br />
        <strong>Explanation:</strong> There are no nice substrings.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= s.length &lt;= 100</code>
        </li>
        <li>
          <code>s</code> consists of uppercase and lowercase English letters.
        </li>
      </ul>
    </div>
  ),
  1838: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        The <strong>frequency</strong> of an element is the number of times it
        occurs in an array.
      </p>

      <p>
        You are given an integer array <code>nums</code> and an integer{" "}
        <code>k</code>. In one operation, you can choose an index of{" "}
        <code>nums</code> and increment the element at that index by{" "}
        <code>1</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>maximum possible frequency</strong> of an element after
          performing <strong>at most</strong>{" "}
        </em>
        <code>k</code>
        <em> operations</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,4], k = 5 <br />
        <strong>Output:</strong> 3
        <strong>
          {" "}
          <br />
          Explanation:
        </strong>{" "}
        Increment the first element three times and the second element two times
        to make nums = [4,4,4]. <br />4 has a frequency of 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,4,8,13], k = 5 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> There are multiple optimal solutions:{" "}
        <br />
        - Increment the first element three times to make nums = [4,4,8,13]. 4
        has a frequency of 2. <br />
        - Increment the second element four times to make nums = [1,8,8,13]. 8
        has a frequency of 2. <br />- Increment the third element five times to
        make nums = [1,4,13,13]. 13 has a frequency of 2.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,9,6], k = 2 <br />
        <strong>Output:</strong> 1
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= k &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1839: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        A string is considered <strong>beautiful</strong> if it satisfies the
        following conditions:
      </p>

      <ul>
        <li>
          Each of the 5 English vowels (<code>'a'</code>, <code>'e'</code>,{" "}
          <code>'i'</code>, <code>'o'</code>, <code>'u'</code>) must appear{" "}
          <strong>at least once</strong> in it.
        </li>
        <li>
          The letters must be sorted in <strong>alphabetical order</strong>{" "}
          (i.e. all <code>'a'</code>s before <code>'e'</code>s, all{" "}
          <code>'e'</code>s before <code>'i'</code>s, etc.).
        </li>
      </ul>

      <p>
        For example, strings <code>"aeiou"</code> and{" "}
        <code>"aaaaaaeiiiioou"</code> are considered <strong>beautiful</strong>,
        but <code>"uaeio"</code>, <code>"aeoiu"</code>, and{" "}
        <code>"aaaeeeooo"</code> are <strong>not beautiful</strong>.
      </p>

      <p>
        Given a string <code>word</code> consisting of English vowels, return{" "}
        <em>
          the <strong>length of the longest beautiful substring</strong> of{" "}
        </em>
        <code>word</code>
        <em>. If no such substring exists, return </em>
        <code>0</code>.
      </p>

      <p>
        A <strong>substring</strong> is a contiguous sequence of characters in a
        string.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> word = "aeiaaio<u>aaaaeiiiiouuu</u>ooaauuaeiu"{" "}
        <br />
        <strong>Output:</strong> 13 <br />
        <b>Explanation:</b> The longest beautiful substring in word is
        "aaaaeiiiiouuu" of length 13.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> word = "aeeeiiiioooauuu<u>aeiou</u>" <br />
        <strong>Output:</strong> 5 <br />
        <b>Explanation:</b> The longest beautiful substring in word is "aeiou"
        of length 5.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> word = "a" <br />
        <strong>Output:</strong> 0 <br />
        <b>Explanation:</b> There is no beautiful substring, so return 0.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= word.length &lt;= 5 * 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>word</code> consists of characters <code>'a'</code>,{" "}
          <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, and{" "}
          <code>'u'</code>.
        </li>
      </ul>
    </div>
  ),
  1852: (
    <div class="markdown-body div-width">
      <div class="content__u3I1 question-content__JfgR">
        <div>
          <p>
            Given an integer array <code>nums</code> and an integer{" "}
            <code>k</code>, you are asked to construct the array{" "}
            <code>ans</code> of size <code>n-k+1</code> where{" "}
            <code>ans[i]</code> is the number of <strong>distinct</strong>{" "}
            numbers in the subarray{" "}
            <code>nums[i:i+k-1] = [nums[i], nums[i+1], ..., nums[i+k-1]]</code>.
          </p>

          <p>
            Return <em>the array </em>
            <code>ans</code>.
          </p>

          <p>&nbsp;</p>
          <p>
            <strong>Example 1:</strong>
          </p>

          <pre>
            <strong>Input:</strong> nums = [1,2,3,2,2,1,3], k = 3<br />
            <strong>Output:</strong> [3,2,2,2,3]
            <br />
            <strong>Explanation: </strong>The number of distinct elements in
            each subarray goes as follows: - nums[0:2] = [1,2,3] so ans[0] = 3{" "}
            <br />
            - nums[1:3] = [2,3,2] so ans[1] = 2<br />
            - nums[2:4] = [3,2,2] so ans[2] = 2<br />
            - nums[3:5] = [2,2,1] so ans[3] = 2<br />- nums[4:6] = [2,1,3] so
            ans[4] = 3
          </pre>

          <p>
            <strong>Example 2:</strong>
          </p>

          <pre>
            <strong>Input:</strong> nums = [1,1,1,1,2,3,4], k = 4<br />
            <strong>Output:</strong> [1,2,3,4]
            <br />
            <strong>Explanation: </strong>The number of distinct elements in
            each subarray goes as follows:
            <br />
            - nums[0:3] = [1,1,1,1] so ans[0] = 1<br />
            - nums[1:4] = [1,1,1,2] so ans[1] = 2<br />
            - nums[2:5] = [1,1,2,3] so ans[2] = 3<br />- nums[3:6] = [1,2,3,4]
            so ans[3] = 4
          </pre>

          <p>
            <strong>Constraints:</strong>
          </p>

          <ul>
            <li>
              <code>
                1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup>
              </code>
            </li>
            <li>
              <code>
                1 &lt;= nums[i] &lt;= 10<sup>5</sup>
              </code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
  1871: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> binary string <code>s</code>{" "}
        and two integers <code>minJump</code> and <code>maxJump</code>. In the
        beginning, you are standing at index <code>0</code>, which is equal to{" "}
        <code>'0'</code>. You can move from index <code>i</code> to index{" "}
        <code>j</code> if the following conditions are fulfilled:
      </p>

      <ul>
        <li>
          <code>i + minJump &lt;= j &lt;= min(i + maxJump, s.length - 1)</code>,
          and
        </li>
        <li>
          <code>s[j] == '0'</code>.
        </li>
      </ul>

      <p>
        Return <code>true</code>
        <i> if you can reach index </i>
        <code>s.length - 1</code>
        <i> in </i>
        <code>s</code>
        <em>, or </em>
        <code>false</code>
        <em> otherwise.</em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "<u>0</u>11<u>0</u>1<u>0</u>", minJump = 2,
        maxJump = 3 <br />
        <strong>Output:</strong> true
        <br />
        <strong>Explanation:</strong>
        <br />
        In the first step, move from index 0 to index 3. <br />
        In the second step, move from index 3 to index 5.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "01101110", minJump = 2, maxJump = 3<br />
        <strong>Output:</strong> false
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            2 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.
        </li>
        <li>
          <code>s[0] == '0'</code>
        </li>
        <li>
          <code>1 &lt;= minJump &lt;= maxJump &lt; s.length</code>
        </li>
      </ul>
    </div>
  ),
  1876: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        A string is <strong>good</strong> if there are no repeated characters.
      </p>

      <p>
        Given a string <code>s</code>​​​​​, return{" "}
        <em>
          the number of <strong>good substrings</strong> of length{" "}
          <strong>three </strong>in{" "}
        </em>
        <code>s</code>​​​​​​.
      </p>

      <p>
        Note that if there are multiple occurrences of the same substring, every
        occurrence should be counted.
      </p>

      <p>
        A <strong>substring</strong> is a contiguous sequence of characters in a
        string.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "xyzzaz" <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> There are 4 substrings of size 3: "xyz",
        "yzz", "zza", and "zaz". The only good substring of length 3 is "xyz".
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "aababcabc" <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> There are 7 substrings of size 3: "aab",
        "aba", "bab", "abc", "bca", "cab", and "abc". The good substrings are
        "abc", "bca", "cab", and "abc".
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= s.length &lt;= 100</code>
        </li>
        <li>
          <code>s</code>​​​​​​ consists of lowercase English letters.
        </li>
      </ul>
    </div>
  ),
  1888: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a binary string <code>s</code>. You are allowed to perform
        two types of operations on the string in any sequence:
      </p>

      <ul>
        <li>
          <strong>Type-1: Remove</strong> the character at the start of the
          string <code>s</code> and <strong>append</strong> it to the end of the
          string.
        </li>
        <li>
          <strong>Type-2: Pick</strong> any character in <code>s</code> and{" "}
          <strong>flip</strong> its value, i.e., if its value is{" "}
          <code>'0'</code> it becomes <code>'1'</code> and vice-versa.
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the <strong>minimum</strong> number of <strong>type-2</strong>{" "}
          operations you need to perform
        </em>{" "}
        <em>such that </em>
        <code>s</code>{" "}
        <em>
          becomes <strong>alternating</strong>.
        </em>
      </p>

      <p>
        The string is called <strong>alternating</strong> if no two adjacent
        characters are equal.
      </p>

      <ul>
        <li>
          For example, the strings <code>"010"</code> and <code>"1010"</code>{" "}
          are alternating, while the string <code>"0100"</code> is not.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "111000" <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation</strong>: Use the first operation two times to make
        s = "100011". Then, use the second operation on the third and sixth
        elements to make s = "10<u>1</u>01<u>0</u>".
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "010" <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation</strong>: The string is already alternating.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "1110" <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation</strong>: Use the second operation on the second
        element to make s = "1<u>0</u>10".
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s[i]</code> is either <code>'0'</code> or <code>'1'</code>.
        </li>
      </ul>
    </div>
  ),
  1918: (
    <article role="main" class="blog-post">
      <p>
        Given an integer array{" "}
        <code class="language-plaintext highlighter-rouge">nums</code> of length{" "}
        <code class="language-plaintext highlighter-rouge">n</code> and an
        integer <code class="language-plaintext highlighter-rouge">k</code>,
        return{" "}
        <em>
          the <code class="language-plaintext highlighter-rouge">k-th</code>{" "}
          <strong>smallest subarray sum</strong>
        </em>
        .
      </p>
      <p>
        A <strong>subarray</strong> is defined as a <strong>non-empty</strong>{" "}
        contiguous sequence of elements in an array. A{" "}
        <strong>subarray sum</strong> is the sum of all elements in the
        subarray.
      </p>
      <br />
      <p>
        <strong>Example 1:</strong>
      </p>
      <p>
        <strong>Input:</strong> nums = [2,1,3], k = 4
      </p>{" "}
      <p>
        <strong>Output:</strong> 3
      </p>
      <p>
        <strong>Explanation:</strong> The subarrays of [2,1,3] are:
      </p>
      <ul>
        <li>[2] with sum 2</li>
        <li>[1] with sum 1</li>
        <li>[3] with sum 3</li>
        <li>[2,1] with sum 3</li>
        <li>[1,3] with sum 4</li>
        <li>[2,1,3] with sum 6</li>
      </ul>
      <p>
        Ordering the sums from smallest to largest gives 1, 2, 3, 3, 4, 6. The
        4th smallest is 3.
      </p>
      <br />
      <p>
        <strong>Example 2:</strong>
      </p>
      <p>
        <strong>Input:</strong> nums = [3,3,5,5], k = 7
      </p>
      <p>
        <strong>Output:</strong> 10
      </p>
      <p>
        <strong>Explanation:</strong> The subarrays of [3,3,5,5] are:
      </p>
      <ul>
        <li>[3] with sum 3</li>
        <li>[3] with sum 3</li>
        <li>[5] with sum 5</li>
        <li>[5] with sum 5</li>
        <li>[3,3] with sum 6</li>
        <li>[3,5] with sum 8</li>
        <li>[5,5] with sum 10</li>
        <li>[3,3,5], with sum 11</li>
        <li>[3,5,5] with sum 13</li>
        <li>[3,3,5,5] with sum 16</li>
      </ul>
      <p>
        Ordering the sums from smallest to largest gives 3, 3, 5, 5, 6, 8, 10,
        11, 13, 16. The 7th smallest is 10.
      </p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code class="language-plaintext highlighter-rouge">
            n == nums.length
          </code>
        </li>
        <li>
          <code class="language-plaintext highlighter-rouge">
            1 &lt;= n &lt;= 2 * 10^4
          </code>
        </li>
        <li>
          <code class="language-plaintext highlighter-rouge">
            1 &lt;= nums[i] &lt;= 5 * 10^4
          </code>
        </li>
        <li>
          <code class="language-plaintext highlighter-rouge">
            1 &lt;= k &lt;= n * (n + 1) / 2
          </code>
        </li>
      </ul>
    </article>
  ),
  1984: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code>, where <code>nums[i]</code> represents the score of
        the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        student. You are also given an integer <code>k</code>.
      </p>

      <p>
        Pick the scores of any <code>k</code> students from the array so that
        the <strong>difference</strong> between the <strong>highest</strong> and
        the <strong>lowest</strong> of the <code>k</code> scores is{" "}
        <strong>minimized</strong>.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>minimum</strong> possible difference
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [90], k = 1 <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> There is one way to pick score(s) of one
        student: <br />- [
        <strong>
          <u>90</u>
        </strong>
        ]. The difference between the highest and lowest score is 90 - 90 = 0.{" "}
        <br />
        The minimum possible difference is 0.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [9,4,1,7], k = 2 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> There are six ways to pick score(s) of two
        students: <br />- [
        <strong>
          <u>9</u>
        </strong>
        ,
        <strong>
          <u>4</u>
        </strong>
        ,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.{" "}
        <br />- [
        <strong>
          <u>9</u>
        </strong>
        ,4,
        <strong>
          <u>1</u>
        </strong>
        ,7]. The difference between the highest and lowest score is 9 - 1 = 8.{" "}
        <br />- [
        <strong>
          <u>9</u>
        </strong>
        ,4,1,
        <strong>
          <u>7</u>
        </strong>
        ]. The difference between the highest and lowest score is 9 - 7 = 2.{" "}
        <br />- [9,
        <strong>
          <u>4</u>
        </strong>
        ,
        <strong>
          <u>1</u>
        </strong>
        ,7]. The difference between the highest and lowest score is 4 - 1 = 3.{" "}
        <br />- [9,
        <strong>
          <u>4</u>
        </strong>
        ,1,
        <strong>
          <u>7</u>
        </strong>
        ]. The difference between the highest and lowest score is 7 - 4 = 3.{" "}
        <br />- [9,4,
        <strong>
          <u>1</u>
        </strong>
        ,
        <strong>
          <u>7</u>
        </strong>
        ]. The difference between the highest and lowest score is 7 - 1 = 6. The
        minimum possible difference is 2.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= k &lt;= nums.length &lt;= 1000</code>
        </li>
        <li>
          <code>
            0 &lt;= nums[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2009: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code>. In one operation, you
        can replace <strong>any</strong> element in <code>nums</code> with{" "}
        <strong>any</strong> integer.
      </p>

      <p>
        <code>nums</code> is considered <strong>continuous</strong> if both of
        the following conditions are fulfilled:
      </p>

      <ul>
        <li>
          All elements in <code>nums</code> are <strong>unique</strong>.
        </li>
        <li>
          The difference between the <strong>maximum</strong> element and the{" "}
          <strong>minimum</strong> element in <code>nums</code> equals{" "}
          <code>nums.length - 1</code>.
        </li>
      </ul>

      <p>
        For example, <code>nums = [4, 2, 5, 3]</code> is{" "}
        <strong>continuous</strong>, but <code>nums = [1, 2, 3, 5, 6]</code> is{" "}
        <strong>not continuous</strong>.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>minimum</strong> number of operations to make{" "}
        </em>
        <code>nums</code>
        <em> </em>
        <strong>
          <em>continuous</em>
        </strong>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [4,2,5,3] <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong>&nbsp;nums is already continuous.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,5,6]
        <strong>Output:</strong> 1<strong>Explanation:</strong>&nbsp;One
        possible solution is to change the last element to 4. <br />
        The resulting array is [1,2,3,5,4], which is continuous.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,10,100,1000] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong>&nbsp;One possible solution is to: <br />
        - Change the second element to 2. <br />
        - Change the third element to 3. <br />
        - Change the fourth element to 4. <br />
        The resulting array is [1,2,3,4], which is continuous.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2024: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        A teacher is writing a test with <code>n</code> true/false questions,
        with <code>'T'</code> denoting true and <code>'F'</code> denoting false.
        He wants to confuse the students by <strong>maximizing</strong> the
        number of <strong>consecutive</strong> questions with the{" "}
        <strong>same</strong> answer (multiple trues or multiple falses in a
        row).
      </p>

      <p>
        You are given a string <code>answerKey</code>, where{" "}
        <code>answerKey[i]</code> is the original answer to the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        question. In addition, you are given an integer <code>k</code>, the
        maximum number of times you may perform the following operation:
      </p>

      <ul>
        <li>
          Change the answer key for any question to <code>'T'</code> or{" "}
          <code>'F'</code> (i.e., set <code>answerKey[i]</code> to{" "}
          <code>'T'</code> or <code>'F'</code>).
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the <strong>maximum</strong> number of consecutive
        </em>{" "}
        <code>'T'</code>s or <code>'F'</code>s{" "}
        <em>in the answer key after performing the operation at most</em>{" "}
        <code>k</code> <em>times</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> answerKey = "TTFF", k = 2
        <strong>Output:</strong> 4<strong>Explanation:</strong> We can replace
        both the 'F's with 'T's to make answerKey = "<u>TTTT</u>". There are
        four consecutive 'T's.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> answerKey = "TFFT", k = 1 <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> We can replace the first 'T' with an 'F'
        to make answerKey = "<u>FFF</u>T". <br />
        Alternatively, we can replace the second 'T' with an 'F' to make
        answerKey = "T<u>FFF</u>". <br />
        In both cases, there are three consecutive 'F's.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> answerKey = "TTFTTFTT", k = 1 <br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> We can replace the first 'F' to make
        answerKey = "<u>TTTTT</u>FTT" <br />
        Alternatively, we can replace the second 'F' to make answerKey = "TTF
        <u>TTTTT</u>". <br />
        In both cases, there are five consecutive 'T's.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == answerKey.length</code>
        </li>
        <li>
          <code>
            1 &lt;= n &lt;= 5 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>answerKey[i]</code> is either <code>'T'</code> or{" "}
          <code>'F'</code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= n</code>
        </li>
      </ul>
    </div>
  ),
  2090: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> array <code>nums</code> of{" "}
        <code>n</code> integers, and an integer <code>k</code>.
      </p>

      <p>
        The <strong>k-radius average</strong> for a subarray of{" "}
        <code>nums</code> <strong>centered</strong> at some index <code>i</code>{" "}
        with the <strong>radius</strong> <code>k</code> is the average of{" "}
        <strong>all</strong> elements in <code>nums</code> between the indices{" "}
        <code>i - k</code> and <code>i + k</code> (<strong>inclusive</strong>).
        If there are less than <code>k</code> elements before{" "}
        <strong>or</strong> after the index <code>i</code>, then the{" "}
        <strong>k-radius average</strong> is <code>-1</code>.
      </p>

      <p>
        Build and return <em>an array </em>
        <code>avgs</code>
        <em> of length </em>
        <code>n</code>
        <em> where </em>
        <code>avgs[i]</code>
        <em>
          {" "}
          is the <strong>k-radius average</strong> for the subarray centered at
          index{" "}
        </em>
        <code>i</code>.
      </p>

      <p>
        The <strong>average</strong> of <code>x</code> elements is the sum of
        the <code>x</code> elements divided by <code>x</code>, using{" "}
        <strong>integer division</strong>. The integer division truncates toward
        zero, which means losing its fractional part.
      </p>

      <ul>
        <li>
          For example, the average of four elements <code>2</code>,{" "}
          <code>3</code>, <code>1</code>, and <code>5</code> is{" "}
          <code>(2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75</code>, which truncates to{" "}
          <code>2</code>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/11/07/eg1.png"
        style={{ width: 343, height: 119 }}
      />
      <pre>
        <strong>Input:</strong> nums = [7,4,3,9,1,8,5,2,6], k = 3 <br />
        <strong>Output:</strong> [-1,-1,-1,5,4,4,-1,-1,-1] <br />
        <strong>Explanation:</strong>- avg[0], avg[1], and avg[2] are -1 because
        there are less than k elements <strong>before</strong> each index. - The
        sum of the subarray centered at index 3 with radius 3 is: 7 + 4 + 3 + 9
        + 1 + 8 + 5 = 37. Using <strong>integer division</strong>, avg[3] = 37 /
        7 = 5. - For the subarray centered at index 4, avg[4] = (4 + 3 + 9 + 1 +
        8 + 5 + 2) / 7 = 4. - For the subarray centered at index 5, avg[5] = (3
        + 9 + 1 + 8 + 5 + 2 + 6) / 7 = 4. - avg[6], avg[7], and avg[8] are -1
        because there are less than k elements <strong>after</strong> each
        index.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [100000], k = 0<br />
        <strong>Output:</strong> [100000]
        <br />
        <strong>Explanation:</strong>
        <br />
        - The sum of the subarray centered at index 0 with radius 0 is: 100000.
        <br />
        avg[0] = 100000 / 1 = 100000.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [8], k = 100000 <br />
        <strong>Output:</strong> [-1]
        <br />
        <strong>Explanation:</strong> <br />- avg[0] is -1 because there are
        less than k elements before and after index 0.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == nums.length</code>
        </li>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= nums[i], k &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2106: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Fruits are available at some positions on an infinite x-axis. You are
        given a 2D integer array <code>fruits</code> where{" "}
        <code>
          fruits[i] = [position<sub>i</sub>, amount<sub>i</sub>]
        </code>{" "}
        depicts{" "}
        <code>
          amount<sub>i</sub>
        </code>{" "}
        fruits at the position{" "}
        <code>
          position<sub>i</sub>
        </code>
        . <code>fruits</code> is already <strong>sorted</strong> by{" "}
        <code>
          position<sub>i</sub>
        </code>{" "}
        in <strong>ascending order</strong>, and each{" "}
        <code>
          position<sub>i</sub>
        </code>{" "}
        is <strong>unique</strong>.
      </p>
      <p>
        You are also given an integer <code>startPos</code> and an integer{" "}
        <code>k</code>. Initially, you are at the position <code>startPos</code>
        . From any position, you can either walk to the{" "}
        <strong>left or right</strong>. It takes <strong>one step</strong> to
        move <strong>one unit</strong> on the x-axis, and you can walk{" "}
        <strong>at most</strong> <code>k</code> steps in total. For every
        position you reach, you harvest all the fruits at that position, and the
        fruits will disappear from that position.
      </p>
      <p>
        Return{" "}
        <em>
          the <strong>maximum total number</strong> of fruits you can harvest
        </em>
        .
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/11/21/1.png"
        style={{ width: 472, height: 115 }}
      />
      <pre>
        <strong>Input:</strong> fruits = [[2,8],[6,3],[8,6]], startPos = 5, k =
        4<strong>Output:</strong> 9<strong>Explanation:</strong>
        The optimal way is to: - Move right to position 6 and harvest 3 fruits -
        Move right to position 8 and harvest 6 fruits You moved 3 steps and
        harvested 3 + 6 = 9 fruits in total.
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/11/21/2.png"
        style={{ width: 512, height: 129 }}
      />
      <pre>
        <strong>Input:</strong> fruits = [[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]],
        startPos = 5, k = 4<br />
        <strong>Output:</strong> 14
        <br />
        <strong>Explanation:</strong> <br />
        You can move at most k = 4 steps, so you cannot reach position 0 nor 10.
        <br />
        The optimal way is to:
        <br />
        - Harvest the 7 fruits at the starting position 5<br />
        - Move left to position 4 and harvest 1 fruit
        <br />
        - Move right to position 6 and harvest 2 fruits
        <br />
        - Move right to position 7 and harvest 4 fruits
        <br />
        You moved 1 + 3 = 4 steps and harvested 7 + 1 + 2 + 4 = 14 fruits in
        total.
      </pre>
      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/11/21/3.png"
        style={{ width: 476, height: 100 }}
      />{" "}
      <br />
      <pre>
        <strong>Input:</strong> fruits = [[0,3],[6,4],[8,5]], startPos = 3, k =
        2<br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong>
        <br />
        You can move at most k = 2 steps and cannot reach any position with
        fruits.
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>
            1 &lt;= fruits.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>fruits[i].length == 2</code>
        </li>
        <li>
          <code>
            0 &lt;= startPos, position<sub>i</sub> &lt;= 2 * 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            position<sub>i-1</sub> &lt; position<sub>i</sub>
          </code>{" "}
          for any <code>i &gt; 0</code>&nbsp;(<strong>0-indexed</strong>)
        </li>
        <li>
          <code>
            1 &lt;= amount<sub>i</sub> &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 2 * 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2107: (
    <article role="main" class="blog-post">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>candies</code>, where <code>candies[i]</code> represents the
        flavor of the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        candy. Your mom wants you to share these candies with your little sister
        by giving her <code>k</code> <strong>consecutive</strong> candies, but
        you want to keep as many flavors of candies as possible.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>maximum</strong> number of <strong>unique</strong> flavors
          of candy you can keep after sharing{" "}
        </em>
        <em> with your sister.</em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> candies = [1,<u>2,2,3</u>,4,3], k = 3 <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> <br />
        Give the candies in the range [1, 3] (inclusive) with flavors [2,2,3].
        <br />
        You can eat candies with flavors [1,4,3].
        <br />
        There are 3 unique flavors, so return 3.
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> candies = [2,2,2,<u>2,3</u>,3], k = 2<br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> <br />
        Give the candies in the range [3, 4] (inclusive) with flavors [2,3].
        <br />
        You can eat candies with flavors [2,2,2,3].
        <br />
        There are 2 unique flavors, so return 2.
        <br />
        Note that you can also share the candies with flavors [2,2] and eat the
        candies with flavors [2,2,3,3].
      </pre>

      <p>
        <strong>Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> candies = [2,4,5], k = 0<br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> <br />
        You do not have to give any candies.
        <br />
        You can eat the candies with flavors [2,4,5].
        <br />
        There are 3 unique flavors, so return 3.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= candies.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= candies[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= k &lt;= candies.length</code>
        </li>
      </ul>
    </article>
  ),
  2134: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        A <strong>swap</strong> is defined as taking two{" "}
        <strong>distinct</strong> positions in an array and swapping the values
        in them.
      </p>

      <p>
        A <strong>circular</strong> array is defined as an array where we
        consider the <strong>first</strong> element and the{" "}
        <strong>last</strong> element to be <strong>adjacent</strong>.
      </p>

      <p>
        Given a <strong>binary</strong> <strong>circular</strong> array{" "}
        <code>nums</code>, return{" "}
        <em>the minimum number of swaps required to group all </em>
        <code>1</code>
        <em>
          's present in the array together at <strong>any location</strong>
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,1,0,1,1,0,0] <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> Here are a few of the ways to group all
        the 1's together: <br />
        [0,<u>0</u>,<u>1</u>,1,1,0,0] using 1 swap. <br />
        [0,1,<u>1</u>,1,<u>0</u>,0,0] using 1 swap. <br />
        [1,1,0,0,0,0,1] using 2 swaps (using the circular property of the
        array). <br />
        There is no way to group all 1's together with 0 swaps. <br />
        Thus, the minimum number of swaps required is 1.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [0,1,1,1,0,0,1,1,0] <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> Here are a few of the ways to group all
        the 1's together: <br />
        [1,1,1,0,0,0,0,1,1] using 2 swaps (using the circular property of the
        array). <br />
        [1,1,1,1,1,0,0,0,0] using 2 swaps. <br />
        There is no way to group all 1's together with 0 or 1 swaps. <br />
        Thus, the minimum number of swaps required is 2.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,0,0,1] <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> All the 1's are already grouped together
        due to the circular property of the array. <br />
        Thus, the minimum number of swaps required is 0.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>nums[i]</code> is either <code>0</code> or <code>1</code>.
        </li>
      </ul>
    </div>
  ),
  2156: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        The hash of a <strong>0-indexed</strong> string <code>s</code> of length{" "}
        <code>k</code>, given integers <code>p</code> and <code>m</code>, is
        computed using the following function:
      </p>

      <ul>
        <li>
          <code>
            hash(s, p, m) = (val(s[0]) * p<sup>0</sup> + val(s[1]) * p
            <sup>1</sup> + ... + val(s[k-1]) * p<sup>k-1</sup>) mod m
          </code>
          .
        </li>
      </ul>

      <p>
        Where <code>val(s[i])</code> represents the index of <code>s[i]</code>{" "}
        in the alphabet from <code>val('a') = 1</code> to{" "}
        <code>val('z') = 26</code>.
      </p>

      <p>
        You are given a string <code>s</code> and the integers{" "}
        <code>power</code>, <code>modulo</code>, <code>k</code>, and{" "}
        <code>hashValue.</code> Return <code>sub</code>,
        <em>
          {" "}
          the <strong>first</strong> <strong>substring</strong> of{" "}
        </em>
        <code>s</code>
        <em> of length </em>
        <code>k</code>
        <em> such that </em>
        <code>hash(sub, power, modulo) == hashValue</code>.
      </p>

      <p>
        The test cases will be generated such that an answer always{" "}
        <strong>exists</strong>.
      </p>

      <p>
        A <b>substring</b> is a contiguous non-empty sequence of characters
        within a string.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "leetcode", power = 7, modulo = 20, k = 2,
        hashValue = 0 <br />
        <strong>Output:</strong> "ee" <br />
        <strong>Explanation:</strong> The hash of "ee" can be computed to be
        hash("ee", 7, 20) = (5 * 1 + 5 * 7) mod 20 = 40 mod 20 = 0. <br />
        "ee" is the first substring of length 2 with hashValue 0. Hence, we
        return "ee".
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "fbxzaad", power = 31, modulo = 100, k = 3,
        hashValue = 32 <br />
        <strong>Output:</strong> "fbx" <br />
        <strong>Explanation:</strong> The hash of "fbx" can be computed to be
        hash("fbx", 31, 100) = (6 * 1 + 2 * 31 + 24 * 31<sup>2</sup>) mod 100 =
        23132 mod 100 = 32. <br />
        The hash of "bxz" can be computed to be hash("bxz", 31, 100) = (2 * 1 +
        24 * 31 + 26 * 31<sup>2</sup>) mod 100 = 25732 mod 100 = 32. <br />
        "fbx" is the first substring of length 3 with hashValue 32. Hence, we
        return "fbx". <br />
        Note that "bxz" also has a hash of 32 but it appears later than "fbx".
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= k &lt;= s.length &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= power, modulo &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= hashValue &lt; modulo</code>
        </li>
        <li>
          <code>s</code> consists of lowercase English letters only.
        </li>
        <li>
          The test cases are generated such that an answer always{" "}
          <strong>exists</strong>.
        </li>
      </ul>
    </div>
  ),
  2260: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>cards</code> where{" "}
        <code>cards[i]</code> represents the <strong>value</strong> of the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        card. A pair of cards are <strong>matching</strong> if the cards have
        the <strong>same</strong> value.
      </p>

      <p>
        Return
        <em>
          {" "}
          the <strong>minimum</strong> number of <strong>consecutive</strong>{" "}
          cards you have to pick up to have a pair of <strong>matching</strong>{" "}
          cards among the picked cards.
        </em>{" "}
        If it is impossible to have matching cards, return <code>-1</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> cards = [3,4,2,3,4,7] <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> We can pick up the cards [3,4,2,3] which
        contain a matching pair of cards with value 3. Note that picking up the
        cards [4,2,3,4] is also optimal.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> cards = [1,0,5,3] <br />
        <strong>Output:</strong> -1 <br />
        <strong>Explanation:</strong> There is no way to pick up a set of
        consecutive cards that contain a pair of matching cards.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= cards.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= cards[i] &lt;= 10<sup>6</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2269: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        The <strong>k-beauty</strong> of an integer <code>num</code> is defined
        as the number of <strong>substrings</strong> of <code>num</code> when it
        is read as a string that meet the following conditions:
      </p>

      <ul>
        <li>
          It has a length of <code>k</code>.
        </li>
        <li>
          It is a divisor of <code>num</code>.
        </li>
      </ul>

      <p>
        Given integers <code>num</code> and <code>k</code>, return{" "}
        <em>the k-beauty of </em>
        <code>num</code>.
      </p>

      <p>Note:</p>

      <ul>
        <li>
          <strong>Leading zeros</strong> are allowed.
        </li>
        <li>
          <code>0</code> is not a divisor of any value.
        </li>
      </ul>

      <p>
        A <strong>substring</strong> is a contiguous sequence of characters in a
        string.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> num = 240, k = 2 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> The following are the substrings of num of
        length k: <br />- "24" from "
        <strong>
          <u>24</u>
        </strong>
        0": 24 is a divisor of 240. <br />- "40" from "2
        <u>
          <strong>40</strong>
        </u>
        ": 40 is a divisor of 240. <br />
        Therefore, the k-beauty is 2.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> num = 430043, k = 2 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> The following are the substrings of num of
        length k: <br />- "43" from "
        <u>
          <strong>43</strong>
        </u>
        0043": 43 is a divisor of 430043. <br />- "30" from "4
        <u>
          <strong>30</strong>
        </u>
        043": 30 is not a divisor of 430043. <br />- "00" from "43
        <u>
          <strong>00</strong>
        </u>
        43": 0 is not a divisor of 430043. <br />- "04" from "430
        <u>
          <strong>04</strong>
        </u>
        3": 4 is not a divisor of 430043. <br />- "43" from "4300
        <u>
          <strong>43</strong>
        </u>
        ": 43 is a divisor of 430043. Therefore, the k-beauty is 2.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= num &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= num.length</code> (taking <code>num</code> as a
          string)
        </li>
      </ul>
    </div>
  ),
  2302: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        The <strong>score</strong> of an array is defined as the{" "}
        <strong>product</strong> of its sum and its length.
      </p>

      <ul>
        <li>
          For example, the score of <code>[1, 2, 3, 4, 5]</code> is{" "}
          <code>(1 + 2 + 3 + 4 + 5) * 5 = 75</code>.
        </li>
      </ul>

      <p>
        Given a positive integer array <code>nums</code> and an integer{" "}
        <code>k</code>, return{" "}
        <em>
          the <strong>number of non-empty subarrays</strong> of
        </em>{" "}
        <code>nums</code>{" "}
        <em>
          whose score is <strong>strictly less</strong> than
        </em>{" "}
        <code>k</code>.
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous sequence of elements within
        an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,1,4,3,5], k = 10 <br />
        <strong>Output:</strong> 6<br />
        <strong>Explanation:</strong>
        <br />
        The 6 subarrays having scores less than 10 are:
        <br />
        - [2] with score 2 * 1 = 2.
        <br />
        - [1] with score 1 * 1 = 1.
        <br />
        - [4] with score 4 * 1 = 4.
        <br />
        - [3] with score 3 * 1 = 3. <br />
        - [5] with score 5 * 1 = 5.
        <br />
        - [2,1] with score (2 + 1) * 2 = 6.
        <br />
        Note that subarrays such as [1,4] and [4,3,5] are not considered because
        their scores are 10 and 36 respectively, while we need scores strictly
        less than 10.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1], k = 5<br />
        <strong>Output:</strong> 5<br />
        <strong>Explanation:</strong>
        <br />
        Every subarray except [1,1,1] has a score less than 5.
        <br />
        [1,1,1] has a score (1 + 1 + 1) * 3 = 9, which is greater than 5.
        <br />
        Thus, there are 5 subarrays having scores less than 5.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= k &lt;= 10<sup>15</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2379: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> string <code>blocks</code> of
        length <code>n</code>, where <code>blocks[i]</code> is either{" "}
        <code>'W'</code> or <code>'B'</code>, representing the color of the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        block. The characters <code>'W'</code> and <code>'B'</code> denote the
        colors white and black, respectively.
      </p>

      <p>
        You are also given an integer <code>k</code>, which is the desired
        number of <strong>consecutive</strong> black blocks.
      </p>

      <p>
        In one operation, you can <strong>recolor</strong> a white block such
        that it becomes a black block.
      </p>

      <p>
        Return
        <em>
          {" "}
          the <strong>minimum</strong> number of operations needed such that
          there is at least <strong>one</strong> occurrence of{" "}
        </em>
        <code>k</code>
        <em> consecutive black blocks.</em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> blocks = "WBBWWBBWBW", k = 7 <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong>
        <br />
        One way to achieve 7 consecutive black blocks is to recolor the 0th,
        3rd, and 4th blocks
        <br />
        so that blocks = "BBBBBBBWBW". <br />
        It can be shown that there is no way to achieve 7 consecutive black
        blocks in less than 3 operations.
        <br />
        Therefore, we return 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> blocks = "WBWBBBW", k = 2<br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong>
        <br />
        No changes need to be made, since 2 consecutive black blocks already
        exist.
        <br />
        Therefore, we return 0.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == blocks.length</code>
        </li>
        <li>
          <code>1 &lt;= n &lt;= 100</code>
        </li>
        <li>
          <code>blocks[i]</code> is either <code>'W'</code> or <code>'B'</code>.
        </li>
        <li>
          <code>1 &lt;= k &lt;= n</code>
        </li>
      </ul>
    </div>
  ),
  2398: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You have <code>n</code> robots. You are given two{" "}
        <strong>0-indexed</strong> integer arrays, <code>chargeTimes</code> and{" "}
        <code>runningCosts</code>, both of length <code>n</code>. The{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        robot costs <code>chargeTimes[i]</code> units to charge and costs{" "}
        <code>runningCosts[i]</code> units to run. You are also given an integer{" "}
        <code>budget</code>.
      </p>

      <p>
        The <strong>total cost</strong> of running <code>k</code> chosen robots
        is equal to <code>max(chargeTimes) + k * sum(runningCosts)</code>, where{" "}
        <code>max(chargeTimes)</code> is the largest charge cost among the{" "}
        <code>k</code> robots and <code>sum(runningCosts)</code> is the sum of
        running costs among the <code>k</code> robots.
      </p>

      <p>
        Return
        <em>
          {" "}
          the <strong>maximum</strong> number of <strong>consecutive</strong>{" "}
          robots you can run such that the total cost <strong>does not</strong>{" "}
          exceed{" "}
        </em>
        <code>budget</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> chargeTimes = [3,6,1,3,4], runningCosts =
        [2,1,3,4,5], budget = 25 <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> <br />
        It is possible to run all individual and consecutive pairs of robots
        within budget. <br />
        To obtain answer 3, consider the first 3 robots. The total cost will be
        max(3,6,1) + 3 * sum(2,1,3) = 6 + 3 * 6 = 24 which is less than 25.{" "}
        <br />
        It can be shown that it is not possible to run more than 3 consecutive
        robots within budget, so we return 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> chargeTimes = [11,12,19], runningCosts =
        [10,8,7], budget = 19 <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> No robot can be run that does not exceed
        the budget, so we return 0.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>chargeTimes.length == runningCosts.length == n</code>
        </li>
        <li>
          <code>
            1 &lt;= n &lt;= 5 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= chargeTimes[i], runningCosts[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= budget &lt;= 10<sup>15</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2401: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array <code>nums</code> consisting of{" "}
        <strong>positive</strong> integers.
      </p>

      <p>
        We call a subarray of <code>nums</code> <strong>nice</strong> if the
        bitwise <strong>AND</strong> of every pair of elements that are in{" "}
        <strong>different</strong> positions in the subarray is equal to{" "}
        <code>0</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the length of the <strong>longest</strong> nice subarray
        </em>
        .
      </p>

      <p>
        A <strong>subarray</strong> is a <strong>contiguous</strong> part of an
        array.
      </p>

      <p>
        <strong>Note</strong> that subarrays of length <code>1</code> are always
        considered nice.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,8,48,10] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> The longest nice subarray is [3,8,48].
        This subarray satisfies the conditions: <br />
        - 3 AND 8 = 0. <br />
        - 3 AND 48 = 0. <br />
        - 8 AND 48 = 0. <br />
        It can be proven that no longer nice subarray can be obtained, so we
        return 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,1,5,11,13] <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> The length of the longest nice subarray is
        1. Any subarray of length 1 can be chosen.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2411: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> array <code>nums</code> of
        length <code>n</code>, consisting of non-negative integers. For each
        index <code>i</code> from <code>0</code> to <code>n - 1</code>, you must
        determine the size of the <strong>minimum sized</strong> non-empty
        subarray of <code>nums</code> starting at <code>i</code> (
        <strong>inclusive</strong>) that has the <strong>maximum</strong>{" "}
        possible <strong>bitwise OR</strong>.
      </p>

      <ul>
        <li>
          In other words, let{" "}
          <code>
            B<sub>ij</sub>
          </code>{" "}
          be the bitwise OR of the subarray <code>nums[i...j]</code>. You need
          to find the smallest subarray starting at <code>i</code>, such that
          bitwise OR of this subarray is equal to{" "}
          <code>
            max(B<sub>ik</sub>)
          </code>{" "}
          where <code>i &lt;= k &lt;= n - 1</code>.
        </li>
      </ul>

      <p>
        The bitwise OR of an array is the bitwise OR of all the numbers in it.
      </p>

      <p>
        Return <em>an integer array </em>
        <code>answer</code>
        <em> of size </em>
        <code>n</code>
        <em> where </em>
        <code>answer[i]</code>
        <em>
          {" "}
          is the length of the <strong>minimum</strong> sized subarray starting
          at{" "}
        </em>
        <code>i</code>
        <em>
          {" "}
          with <strong>maximum</strong> bitwise OR.
        </em>
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous non-empty sequence of
        elements within an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,0,2,1,3]
        <br />
        <strong>Output:</strong> [3,3,2,2,1]
        <br />
        <strong>Explanation:</strong>
        <br />
        The maximum possible bitwise OR starting at any index is 3. <br />
        - Starting at index 0, the shortest subarray that yields it is [1,0,2].
        <br />
        - Starting at index 1, the shortest subarray that yields the maximum
        bitwise OR is [0,2,1].
        <br />
        - Starting at index 2, the shortest subarray that yields the maximum
        bitwise OR is [2,1].
        <br />
        - Starting at index 3, the shortest subarray that yields the maximum
        bitwise OR is [1,3].
        <br />- Starting at index 4, the shortest subarray that yields the
        maximum bitwise OR is [3]. Therefore, we return [3,3,2,2,1].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2] <br />
        <strong>Output:</strong> [2,1]
        <br />
        <strong>
          Explanation:
          <br />
        </strong>
        Starting at index 0, the shortest subarray that yields the maximum
        bitwise OR is of length 2.
        <br />
        Starting at index 1, the shortest subarray that yields the maximum
        bitwise OR is of length 1.
        <br />
        Therefore, we return [2,1].
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == nums.length</code>
        </li>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2461: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code> and an integer{" "}
        <code>k</code>. Find the maximum subarray sum of all the subarrays of{" "}
        <code>nums</code> that meet the following conditions:
      </p>

      <ul>
        <li>
          The length of the subarray is <code>k</code>, and
        </li>
        <li>
          All the elements of the subarray are <strong>distinct</strong>.
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the maximum subarray sum of all the subarrays that meet the conditions
        </em>
        <em>.</em> If no subarray meets the conditions, return <code>0</code>.
      </p>

      <p>
        <em>
          A <strong>subarray</strong> is a contiguous non-empty sequence of
          elements within an array.
        </em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,5,4,2,9,9,9], k = 3<br />
        <strong>Output:</strong> 15
        <br />
        <strong>Explanation:</strong> The subarrays of nums with length 3 are:
        <br />
        - [1,5,4] which meets the requirements and has a sum of 10.
        <br />
        - [5,4,2] which meets the requirements and has a sum of 11.
        <br />
        - [4,2,9] which meets the requirements and has a sum of 15.
        <br />
        - [2,9,9] which does not meet the requirements because the element 9 is
        repeated.
        <br />
        - [9,9,9] which does not meet the requirements because the element 9 is
        repeated.
        <br />
        We return 15 because it is the maximum subarray sum of all the subarrays
        that meet the conditions
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [4,4,4], k = 3 <br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> The subarrays of nums with length 3 are:
        <br />
        - [4,4,4] which does not meet the requirements because the element 4 is
        repeated.
        <br />
        We return 0 because no subarrays meet the conditions.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2516: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a string <code>s</code> consisting of the characters{" "}
        <code>'a'</code>, <code>'b'</code>, and <code>'c'</code> and a
        non-negative integer <code>k</code>. Each minute, you may take either
        the <strong>leftmost</strong> character of <code>s</code>, or the{" "}
        <strong>rightmost</strong> character of <code>s</code>.
      </p>

      <p>
        Return
        <em>
          {" "}
          the <strong>minimum</strong> number of minutes needed for you to take{" "}
          <strong>at least</strong>{" "}
        </em>
        <code>k</code>
        <em> of each character, or return </em>
        <code>-1</code>
        <em> if it is not possible to take </em>
        <code>k</code>
        <em> of each character.</em>
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "aabaaaacaabc", k = 2 <br />
        <strong>Output:</strong> 8<br />
        <strong>Explanation:</strong> <br />
        Take three characters from the left of s. You now have two 'a'
        characters, and one 'b' character.
        <br />
        Take five characters from the right of s. You now have four 'a'
        characters, two 'b' characters, and two 'c' characters.
        <br />
        A total of 3 + 5 = 8 minutes is needed.
        <br />
        It can be proven that 8 is the minimum number of minutes needed.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "a", k = 1<br />
        <strong>Output:</strong> -1
        <br />
        <strong>Explanation:</strong> It is not possible to take one 'b' or 'c'
        so return -1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of only the letters <code>'a'</code>,{" "}
          <code>'b'</code>, and <code>'c'</code>.
        </li>
        <li>
          <code>0 &lt;= k &lt;= s.length</code>
        </li>
      </ul>
    </div>
  ),
  2524: (
    <article role="main" class="blog-post">
      <p>
        You are given an integer array <code>nums</code> and a{" "}
        <strong>positive</strong> integer <code>k</code>.
      </p>

      <p>
        The <strong>frequency score</strong> of an array is the sum of the{" "}
        <strong>distinct</strong> values in the array raised to the power of
        their <strong>frequencies</strong>, taking the sum{" "}
        <strong>modulo</strong>{" "}
        <code>
          10<sup>9</sup> + 7
        </code>
        .
      </p>

      <ul>
        <li>
          For example, the frequency score of the array{" "}
          <code>[5,4,5,7,4,4]</code> is{" "}
          <code>
            (4<sup>3</sup> + 5<sup>2</sup> + 7<sup>1</sup>) modulo (10
            <sup>9</sup> + 7) = 96
          </code>
          .
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the <strong>maximum</strong> frequency score of a{" "}
          <strong>subarray</strong> of size{" "}
        </em>
        <code>k</code>
        <em> in </em>
        <code>nums</code>. You should maximize the value under the modulo and
        not the actual value.
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous part of an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1,2,1,2], k = 3 <br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> The subarray [2,1,2] has a frequency score
        equal to 5. It can be shown that it is the maximum frequency score we
        can have.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1,1,1,1], k = 4 <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> All the subarrays of length 4 have a
        frequency score equal to 1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= k &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>6</sup>
          </code>
        </li>
      </ul>
    </article>
  ),
  2528: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>stations</code> of length <code>n</code>, where{" "}
        <code>stations[i]</code> represents the number of power stations in the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        city.
      </p>

      <p>
        Each power station can provide power to every city in a fixed{" "}
        <strong>range</strong>. In other words, if the range is denoted by{" "}
        <code>r</code>, then a power station at city <code>i</code> can provide
        power to all cities <code>j</code> such that{" "}
        <code>|i - j| &lt;= r</code> and <code>0 &lt;= i, j &lt;= n - 1</code>.
      </p>

      <ul>
        <li>
          Note that <code>|x|</code> denotes <strong>absolute</strong> value.
          For example, <code>|7 - 5| = 2</code> and <code>|3 - 10| = 7</code>.
        </li>
      </ul>

      <p>
        The <strong>power</strong> of a city is the total number of power
        stations it is being provided power from.
      </p>

      <p>
        The government has sanctioned building <code>k</code> more power
        stations, each of which can be built in any city, and have the same
        range as the pre-existing ones.
      </p>

      <p>
        Given the two integers <code>r</code> and <code>k</code>, return{" "}
        <em>
          the <strong>maximum possible minimum power</strong> of a city, if the
          additional power stations are built optimally.
        </em>
      </p>

      <p>
        <strong>Note</strong> that you can build the <code>k</code> power
        stations in multiple cities.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> stations = [1,2,4,5,0], r = 1, k = 2 <br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> <br />
        One of the optimal ways is to install both the power stations at city 1.{" "}
        <br />
        So stations will become [1,4,4,5,0]. <br />
        - City 0 is provided by 1 + 4 = 5 power stations. <br />
        - City 1 is provided by 1 + 4 + 4 = 9 power stations. <br />
        - City 2 is provided by 4 + 4 + 5 = 13 power stations. <br />
        - City 3 is provided by 5 + 4 = 9 power stations. <br />
        - City 4 is provided by 5 + 0 = 5 power stations. <br />
        So the minimum power of a city is 5. <br />
        Since it is not possible to obtain a larger power, we return 5.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> stations = [4,4,4,4], r = 0, k = 3 <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> <br />
        It can be proved that we cannot make the minimum power of a city greater
        than 4.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == stations.length</code>
        </li>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= stations[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= r&nbsp;&lt;= n - 1</code>
        </li>
        <li>
          <code>
            0 &lt;= k&nbsp;&lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2537: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> and an integer <code>k</code>,
        return{" "}
        <em>
          the number of <strong>good</strong> subarrays of
        </em>{" "}
        <code>nums</code>.
      </p>

      <p>
        A subarray <code>arr</code> is <strong>good</strong> if it there are{" "}
        <strong>at least </strong>
        <code>k</code> pairs of indices <code>(i, j)</code> such that{" "}
        <code>i &lt; j</code> and <code>arr[i] == arr[j]</code>.
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous <strong>non-empty</strong>{" "}
        sequence of elements within an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1,1,1], k = 10 <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> The only good subarray is the array nums
        itself.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,1,4,3,2,2,4], k = 2<br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> There are 4 different good subarrays:
        <br />
        - [3,1,4,3,2,2] that has 2 pairs.
        <br />
        - [3,1,4,3,2,2,4] that has 3 pairs.
        <br />
        - [1,4,3,2,2,4] that has 2 pairs.
        <br />- [4,3,2,2,4] that has 2 pairs.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i], k &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2555: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        There are some prizes on the <strong>X-axis</strong>. You are given an
        integer array <code>prizePositions</code> that is{" "}
        <strong>sorted in non-decreasing order</strong>, where{" "}
        <code>prizePositions[i]</code> is the position of the{" "}
        <code>
          i<sup>th</sup>
        </code>{" "}
        prize. There could be different prizes at the same position on the line.
        You are also given an integer <code>k</code>.
      </p>

      <p>
        You are allowed to select two segments with integer endpoints. The
        length of each segment must be <code>k</code>. You will collect all
        prizes whose position falls within at least one of the two selected
        segments (including the endpoints of the segments). The two selected
        segments may intersect.
      </p>

      <ul>
        <li>
          For example if <code>k = 2</code>, you can choose segments{" "}
          <code>[1, 3]</code> and <code>[2, 4]</code>, and you will win any
          prize <font face="monospace">i</font> that satisfies{" "}
          <code>1 &lt;= prizePositions[i] &lt;= 3</code> or{" "}
          <code>2 &lt;= prizePositions[i] &lt;= 4</code>.
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the <strong>maximum</strong> number of prizes you can win if you
          choose the two segments optimally
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> prizePositions = [1,1,2,2,3,3,5], k = 2 <br />
        <strong>Output:</strong> 7 <br />
        <strong>Explanation:</strong> In this example, you can win all 7 prizes
        by selecting two segments [1, 3] and [3, 5].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> prizePositions = [1,2,3,4], k = 0 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> For this example,{" "}
        <strong>one choice</strong> for the segments is <code>[3, 3]</code> and{" "}
        <code>[4, 4],</code> and you will be able to get <code>2</code> prizes.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= prizePositions.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= prizePositions[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 10<sup>9</sup>{" "}
          </code>
        </li>
        <li>
          <code>prizePositions</code> is sorted in non-decreasing order.
        </li>
      </ul>
    </div>
  ),
  2653: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> containing <code>n</code>{" "}
        integers, find the <strong>beauty</strong> of each subarray of size{" "}
        <code>k</code>.
      </p>

      <p>
        The <strong>beauty</strong> of a subarray is the{" "}
        <code>
          x<sup>th</sup>
        </code>
        <strong> smallest integer </strong>in the subarray if it is{" "}
        <strong>negative</strong>, or <code>0</code> if there are fewer than{" "}
        <code>x</code> negative integers.
      </p>

      <p>
        Return <em>an integer array containing </em>
        <code>n - k + 1</code> <em>integers, which denote the </em>
        <strong>beauty</strong>
        <em>
          {" "}
          of the subarrays <strong>in order</strong> from the first index in the
          array.
        </em>
      </p>

      <ul>
        <li>
          <p>
            A subarray is a contiguous <strong>non-empty</strong> sequence of
            elements within an array.
          </p>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,-1,-3,-2,3], k = 3, x = 2 <br />
        <strong>Output:</strong> [-1,-2,-2]
        <br />
        <strong>Explanation:</strong> There are 3 subarrays with size k = 3.{" "}
        <br />
        The first subarray is <code>[1, -1, -3]</code> and the 2<sup>nd</sup>{" "}
        smallest negative integer is -1.&nbsp;
        <br />
        The second subarray is <code>[-1, -3, -2]</code> and the 2<sup>nd</sup>{" "}
        smallest negative integer is -2.&nbsp;
        <br />
        The third subarray is <code>[-3, -2, 3]&nbsp;</code>and the 2
        <sup>nd</sup> smallest negative integer is -2.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [-1,-2,-3,-4,-5], k = 2, x = 2<br />
        <strong>Output:</strong> [-1,-2,-3,-4]
        <br />
        <strong>Explanation:</strong> There are 4 subarrays with size k = 2.
        <br />
        For <code>[-1, -2]</code>, the 2<sup>nd</sup> smallest negative integer
        is -1.
        <br />
        For <code>[-2, -3]</code>, the 2<sup>nd</sup> smallest negative integer
        is -2.
        <br />
        For <code>[-3, -4]</code>, the 2<sup>nd</sup> smallest negative integer
        is -3.
        <br />
        For <code>[-4, -5]</code>, the 2<sup>nd</sup> smallest negative integer
        is -4.&nbsp;
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [-3,1,2,-3,0,-3], k = 2, x = 1<br />
        <strong>Output:</strong> [-3,0,-3,-3,-3]
        <br />
        <strong>Explanation:</strong> There are 5 subarrays with size k = 2
        <strong>.</strong>
        <br />
        For <code>[-3, 1]</code>, the 1<sup>st</sup> smallest negative integer
        is -3.
        <br />
        For <code>[1, 2]</code>, there is no negative integer so the beauty is
        0.
        <br />
        For <code>[2, -3]</code>, the 1<sup>st</sup> smallest negative integer
        is -3.
        <br />
        For <code>[-3, 0]</code>, the 1<sup>st</sup> smallest negative integer
        is -3.
        <br />
        For <code>[0, -3]</code>, the 1<sup>st</sup> smallest negative integer
        is -3.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == nums.length&nbsp;</code>
        </li>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= n</code>
        </li>
        <li>
          <code>1 &lt;= x &lt;= k&nbsp;</code>
        </li>
        <li>
          <code>-50&nbsp;&lt;= nums[i] &lt;= 50&nbsp;</code>
        </li>
      </ul>
    </div>
  ),
  2730: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a digit string <code>s</code> that consists of digits from
        0 to 9.
      </p>

      <p>
        A string is called <strong>semi-repetitive</strong> if there is{" "}
        <strong>at most</strong> one adjacent pair of the same digit. For
        example, <code>"0010"</code>, <code>"002020"</code>, <code>"0123"</code>
        , <code>"2002"</code>, and <code>"54944"</code> are semi-repetitive
        while the following are not: <code>"00101022"</code> (adjacent same
        digit pairs are 00 and 22), and <code>"1101234883"</code> (adjacent same
        digit pairs are 11 and 88).
      </p>

      <p>
        Return the length of the{" "}
        <strong>
          longest semi-repetitive{" "}
          <span
            data-keyword="substring-nonempty"
            class=" cursor-pointer relative text-dark-blue-s text-sm"
          >
            <div class="popover-wrapper inline-block" data-headlessui-state="">
              <div>
                <div
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:rt:"
                >
                  <div>substring</div>
                </div>
              </div>
            </div>
          </span>
        </strong>{" "}
        of <code>s</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <div class="example-block">
        <p>
          <strong>Input:</strong> <span class="example-io">s = "52233"</span>
        </p>{" "}
        <br />
        <p>
          <strong>Output:</strong> <span class="example-io">4</span>
        </p>{" "}
        <br />
        <p>
          <strong>Explanation:</strong>
        </p>{" "}
        <br />
        <p>
          The longest semi-repetitive substring is "5223". Picking the whole
          string "52233" has two adjacent same digit pairs 22 and 33, but at
          most one is allowed.
        </p>
      </div>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <div class="example-block">
        <p>
          <strong>Input:</strong> <span class="example-io">s = "5494"</span>
        </p>{" "}
        <br />
        <p>
          <strong>Output:</strong> <span class="example-io">4</span>
        </p>{" "}
        <br />
        <p>
          <strong>Explanation:</strong>
        </p>{" "}
        <br />
        <p>
          <code>s</code> is a semi-repetitive string.
        </p>
      </div>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <div class="example-block">
        <p>
          <strong>Input:</strong> <span class="example-io">s = "1111111"</span>
        </p>{" "}
        <br />
        <p>
          <strong>Output:</strong> <span class="example-io">2</span>
        </p>{" "}
        <br />
        <p>
          <strong>Explanation:</strong>
        </p>
        <p>
          The longest semi-repetitive substring is "11". Picking the substring
          "111" has two adjacent same digit pairs, but at most one is allowed.
        </p>
      </div>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= s.length &lt;= 50</code>
        </li>
        <li>
          <code>'0' &lt;= s[i] &lt;= '9'</code>
        </li>
      </ul>
    </div>
  ),
  2743: (
    <article role="main" class="blog-post">
      <p>
        You are given a string <code>s</code> consisting only of lowercase
        English letters. We call a substring <b>special</b> if it contains no
        character which has occurred at least twice (in other words, it does not
        contain a repeating character). Your task is to count the number of{" "}
        <b>special</b> substrings. For example, in the string <code>"pop"</code>
        , the substring <code>"po"</code> is a <strong>special</strong>{" "}
        substring, however, <code>"pop"</code> is not <strong>special</strong>{" "}
        (since <code>'p'</code> has occurred twice).
      </p>

      <p>
        Return{" "}
        <em>
          the number of <b>special</b> substrings.
        </em>
      </p>

      <p>
        A <strong>substring</strong> is a contiguous sequence of characters
        within a string. For example, <code>"abc"</code> is a substring of{" "}
        <code>"abcd"</code>, but <code>"acd"</code> is not.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abcd"
        <br />
        <strong>Output:</strong> 10
        <br />
        <strong>Explanation:</strong> Since each character occurs once, every
        substring is a special substring. We have 4 substrings of length one, 3
        of length two, 2 of length three, and 1 substring of length four. So
        overall there are 4 + 3 + 2 + 1 = 10 special substrings.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "ooo" <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> Any substring with a length of at least
        two contains a repeating character. So we have to count the number of
        substrings of length one, which is 3.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abab"
        <br />
        <strong>Output:</strong> 7<br />
        <strong>Explanation:</strong> Special substrings are as follows (sorted
        by their start positions):
        <br />
        Special substrings of length 1: "a", "b", "a", "b"
        <br />
        Special substrings of length 2: "ab", "ba", "ab"
        <br />
        And it can be shown that there are no special substrings with a length
        of at least three. So the answer would be 4 + 3 = 7.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of lowercase English letters
        </li>
      </ul>
    </article>
  ),
  2747: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer <code>n</code> denoting the total number of
        servers and a <strong>2D</strong> <strong>0-indexed </strong>integer
        array <code>logs</code>, where <code>logs[i] = [server_id, time]</code>{" "}
        denotes that the server with id <code>server_id</code> received a
        request at time <code>time</code>.
      </p>

      <p>
        You are also given an integer <code>x</code> and a{" "}
        <strong>0-indexed</strong> integer array <code>queries</code>.
      </p>

      <p>
        Return{" "}
        <em>
          a <strong>0-indexed</strong> integer array
        </em>{" "}
        <code>arr</code> <em>of length</em> <code>queries.length</code>{" "}
        <em>where</em> <code>arr[i]</code>{" "}
        <em>
          represents the number of servers that <strong>did not receive</strong>{" "}
          any requests during the time interval
        </em>{" "}
        <code>[queries[i] - x, queries[i]]</code>.
      </p>

      <p>Note that the time intervals are inclusive.</p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 3, logs = [[1,3],[2,6],[1,5]], x = 5,
        queries = [10,11] <br />
        <strong>Output:</strong> [1,2] <br />
        <strong>Explanation:</strong> <br />
        For queries[0]: The servers with ids 1 and 2 get requests in the
        duration of [5, 10]. Hence, only server 3 gets zero requests. <br />
        For queries[1]: Only the server with id 2 gets a request in duration of
        [6,11]. Hence, the servers with ids 1 and 3 are the only servers that do
        not receive any requests during that time period.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2,
        queries = [3,4] <br />
        <strong>Output:</strong> [0,1] <br />
        <strong>Explanation:</strong> <br />
        For queries[0]: All servers get at least one request in the duration of
        [1, 3]. <br />
        For queries[1]: Only server with id 3 gets no request in the duration
        [2,4].
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= logs.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= queries.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            <font face="monospace">logs[i].length == 2</font>
          </code>
        </li>
        <li>
          <code>1 &lt;= logs[i][0] &lt;= n</code>
        </li>
        <li>
          <code>
            1 &lt;= logs[i][1] &lt;= 10<sup>6</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= x &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            x &lt;&nbsp;queries[i]&nbsp;&lt;= 10<sup>6</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2760: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code> and an integer <code>threshold</code>.
      </p>

      <p>
        Find the length of the <strong>longest subarray</strong> of{" "}
        <code>nums</code> starting at index <code>l</code> and ending at index{" "}
        <code>r</code> <code>(0 &lt;= l &lt;= r &lt; nums.length)</code> that
        satisfies the following conditions:
      </p>

      <ul>
        <li>
          <code>nums[l] % 2 == 0</code>
        </li>
        <li>
          For all indices <code>i</code> in the range <code>[l, r - 1]</code>,{" "}
          <code>nums[i] % 2 != nums[i + 1] % 2</code>
        </li>
        <li>
          For all indices <code>i</code> in the range <code>[l, r]</code>,{" "}
          <code>nums[i] &lt;= threshold</code>
        </li>
      </ul>

      <p>
        Return{" "}
        <em>an integer denoting the length of the longest such subarray.</em>
      </p>

      <p>
        <strong>Note:</strong> A <strong>subarray</strong> is a contiguous
        non-empty sequence of elements within an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,2,5,4], threshold = 5 <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> In this example, we can select the
        subarray that starts at l = 1 and ends at r = 3 =&gt; [2,5,4]. This
        subarray satisfies the conditions.
        <br />
        Hence, the answer is the length of the subarray, 3. We can show that 3
        is the maximum possible achievable length.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2], threshold = 2<br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> In this example, we can select the
        subarray that starts at l = 1 and ends at r = 1 =&gt; [2]. <br />
        It satisfies all the conditions and we can show that 1 is the maximum
        possible achievable length.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,3,4,5], threshold = 4<br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> In this example, we can select the
        subarray that starts at l = 0 and ends at r = 2 =&gt; [2,3,4]. <br />
        It satisfies all the conditions.
        <br />
        Hence, the answer is the length of the subarray, 3. We can show that 3
        is the maximum possible achievable length.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 100 </code>
        </li>
        <li>
          <code>1 &lt;= nums[i] &lt;= 100 </code>
        </li>
        <li>
          <code>1 &lt;= threshold &lt;= 100</code>
        </li>
      </ul>
    </div>
  ),
  2779: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> array <code>nums</code> and a{" "}
        <strong>non-negative</strong> integer <code>k</code>.
      </p>

      <p>In one operation, you can do the following:</p>

      <ul>
        <li>
          Choose an index <code>i</code> that{" "}
          <strong>hasn't been chosen before</strong> from the range{" "}
          <code>[0, nums.length - 1]</code>.
        </li>
        <li>
          Replace <code>nums[i]</code> with any integer from the range{" "}
          <code>[nums[i] - k, nums[i] + k]</code>.
        </li>
      </ul>

      <p>
        The <strong>beauty</strong> of the array is the length of the longest
        subsequence consisting of equal elements.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>maximum</strong> possible beauty of the array{" "}
        </em>
        <code>nums</code>
        <em> after applying the operation any number of times.</em>
      </p>

      <p>
        <strong>Note</strong> that you can apply the operation to each index{" "}
        <strong>only once</strong>.
      </p>

      <p>
        A&nbsp;<strong>subsequence</strong> of an array is a new array generated
        from the original array by deleting some elements (possibly none)
        without changing the order of the remaining elements.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [4,6,1,2], k = 2 <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> In this example, we apply the following
        operations:
        <br />
        - Choose index 1, replace it with 4 (from range [4,8]), nums =
        [4,4,1,2].
        <br />
        - Choose index 3, replace it with 4 (from range [0,4]), nums =
        [4,4,1,4].
        <br />
        After the applied operations, the beauty of the array nums is 3
        (subsequence consisting of indices 0, 1, and 3).
        <br />
        It can be proven that 3 is the maximum possible length we can achieve.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1,1], k = 10
        <br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> In this example we don't have to apply any
        operations.
        <br />
        The beauty of the array nums is 4 (whole array).
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= nums[i], k &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2781: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a string <code>word</code> and an array of strings{" "}
        <code>forbidden</code>.
      </p>

      <p>
        A string is called <strong>valid</strong> if none of its substrings are
        present in <code>forbidden</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the length of the <strong>longest valid substring</strong> of the
          string{" "}
        </em>
        <code>word</code>.
      </p>

      <p>
        A <strong>substring</strong> is a contiguous sequence of characters in a
        string, possibly empty.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> word = "cbaaaabc", forbidden = ["aaa","cb"]{" "}
        <br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> There are 11 valid substrings in word:
        "c", "b", "a", "ba", "aa", "bc", "baa", "aab", "ab", "abc" and "aabc".
        The length of the longest valid substring is 4. <br />
        It can be shown that all other substrings contain either "aaa" or "cb"
        as a substring.{" "}
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> word = "leetcode", forbidden = ["de","le","e"]
        <br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> There are 11 valid substrings in word:
        "l", "t", "c", "o", "d", "tc", "co", "od", "tco", "cod", and "tcod". The
        length of the longest valid substring is 4.
        <br />
        It can be shown that all other substrings contain either "de", "le", or
        "e" as a substring.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= word.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>word</code> consists only of lowercase English letters.
        </li>
        <li>
          <code>
            1 &lt;= forbidden.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= forbidden[i].length &lt;= 10</code>
        </li>
        <li>
          <code>forbidden[i]</code> consists only of lowercase English letters.
        </li>
      </ul>
    </div>
  ),
  2799: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array <code>nums</code> consisting of{" "}
        <strong>positive</strong> integers.
      </p>

      <p>
        We call a subarray of an array <strong>complete</strong> if the
        following condition is satisfied:
      </p>

      <ul>
        <li>
          The number of <strong>distinct</strong> elements in the subarray is
          equal to the number of distinct elements in the whole array.
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the number of <strong>complete</strong> subarrays
        </em>
        .
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous non-empty part of an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,1,2,2]
        <br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> The complete subarrays are the following:
        [1,3,1,2], [1,3,1,2,2], [3,1,2] and [3,1,2,2].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,5,5,5] <br />
        <strong>Output:</strong> 10
        <br />
        <strong>Explanation:</strong> The array consists only of the integer 5,
        so any subarray is complete. The number of subarrays that we can choose
        is 10.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 1000</code>
        </li>
        <li>
          <code>1 &lt;= nums[i] &lt;= 2000</code>
        </li>
      </ul>
    </div>
  ),
  2831: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code> and an integer <code>k</code>.
      </p>

      <p>
        A subarray is called <strong>equal</strong> if all of its elements are
        equal. Note that the empty subarray is an <strong>equal</strong>{" "}
        subarray.
      </p>

      <p>
        Return{" "}
        <em>
          the length of the <strong>longest</strong> possible equal subarray
          after deleting <strong>at most</strong>{" "}
        </em>
        <code>k</code>
        <em> elements from </em>
        <code>nums</code>.
      </p>

      <p>
        A <b>subarray</b> is a contiguous, possibly empty sequence of elements
        within an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,2,3,1,3], k = 3<br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> It's optimal to delete the elements at
        index 2 and index 4.
        <br />
        After deleting them, nums becomes equal to [1, 3, 3, 3].
        <br />
        The longest equal subarray starts at i = 1 and ends at j = 3 with length
        equal to 3.
        <br />
        It can be proven that no longer equal subarrays can be created.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,2,2,1,1], k = 2<br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> It's optimal to delete the elements at
        index 2 and index 3.
        <br />
        After deleting them, nums becomes equal to [1, 1, 1, 1].
        <br />
        The array itself is an equal subarray, so the answer is 4.
        <br />
        It can be proven that no longer equal subarrays can be created.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= nums[i] &lt;= nums.length</code>
        </li>
        <li>
          <code>0 &lt;= k &lt;= nums.length</code>
        </li>
      </ul>
    </div>
  ),
  2841: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code> and two positive
        integers <code>m</code> and <code>k</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>maximum sum</strong> out of all{" "}
          <strong>almost unique</strong> subarrays of length{" "}
        </em>
        <code>k</code>
        <em> of</em> <code>nums</code>. If no such subarray exists, return{" "}
        <code>0</code>.
      </p>

      <p>
        A subarray of <code>nums</code> is <strong>almost unique</strong> if it
        contains at least <code>m</code> distinct elements.
      </p>

      <p>
        A subarray is a contiguous <strong>non-empty</strong> sequence of
        elements within an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,6,7,3,1,7], m = 3, k = 4 <br />
        <strong>Output:</strong> 18
        <br />
        <strong>Explanation:</strong> There are 3 almost unique subarrays of
        size <code>k = 4</code>. These subarrays are [2, 6, 7, 3], [6, 7, 3, 1],
        and [7, 3, 1, 7]. Among these subarrays, the one with the maximum sum is
        [2, 6, 7, 3] which has a sum of 18.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,9,9,2,4,5,4], m = 1, k = 3<br />
        <strong>Output:</strong> 23
        <br />
        <strong>Explanation:</strong> There are 5 almost unique subarrays of
        size k. These subarrays are [5, 9, 9], [9, 9, 2], [9, 2, 4], [2, 4, 5],
        and [4, 5, 4]. Among these subarrays, the one with the maximum sum is
        [5, 9, 9] which has a sum of 23.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,1,2,1,2,1], m = 3, k = 3<br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> There are no subarrays of size{" "}
        <code>k = 3</code> that contain at least <code>m = 3</code> distinct
        elements in the given array [1,2,1,2,1,2,1]. Therefore, no almost unique
        subarrays exist, and the maximum sum is 0.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= m &lt;= k &lt;= nums.length</code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2875: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> array <code>nums</code> and
        an integer <code>target</code>.
      </p>

      <p>
        A <strong>0-indexed</strong> array <code>infinite_nums</code> is
        generated by infinitely appending the elements of <code>nums</code> to
        itself.
      </p>

      <p>
        Return{" "}
        <em>
          the length of the <strong>shortest</strong> subarray of the array{" "}
        </em>
        <code>infinite_nums</code>
        <em> with a sum equal to </em>
        <code>target</code>
        <em>.</em> If there is no such subarray return <code>-1</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3], target = 5 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> In this example infinite_nums =
        [1,2,3,1,2,3,1,2,...]. <br />
        The subarray in the range [1,2], has the sum equal to target = 5 and
        length = 2. <br />
        It can be proven that 2 is the shortest length of a subarray with sum
        equal to target = 5.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1,2,3], target = 4 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> In this example infinite_nums =
        [1,1,1,2,3,1,1,1,2,3,1,1,...]. <br />
        The subarray in the range [4,5], has the sum equal to target = 4 and
        length = 2. <br />
        It can be proven that 2 is the shortest length of a subarray with sum
        equal to target = 4.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,4,6,8], target = 3 <br />
        <strong>Output:</strong> -1 <br />
        <strong>Explanation:</strong> In this example infinite_nums =
        [2,4,6,8,2,4,6,8,...]. <br />
        It can be proven that there is no subarray with sum equal to target = 3.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= target &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2902: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> array <code>nums</code> of
        non-negative integers, and two integers <code>l</code> and{" "}
        <code>r</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>count of sub-multisets</strong> within
        </em>{" "}
        <code>nums</code>{" "}
        <em>
          where the sum of elements in each subset falls within the inclusive
          range of
        </em>{" "}
        <code>[l, r]</code>.
      </p>

      <p>
        Since the answer may be large, return it modulo{" "}
        <code>
          10<sup>9 </sup>+ 7
        </code>
        .
      </p>

      <p>
        A <strong>sub-multiset</strong> is an <strong>unordered</strong>{" "}
        collection of elements of the array in which a given value{" "}
        <code>x</code> can occur <code>0, 1, ..., occ[x]</code> times, where{" "}
        <code>occ[x]</code> is the number of occurrences of <code>x</code> in
        the array.
      </p>

      <p>
        <strong>Note</strong> that:
      </p>

      <ul>
        <li>
          Two <strong>sub-multisets</strong> are the same if sorting both
          sub-multisets results in identical multisets.
        </li>
        <li>
          The sum of an <strong>empty</strong> multiset is <code>0</code>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,2,3], l = 6, r = 6 <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> The only subset of nums that has a sum of
        6 is {(1, 2, 3)}.
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,1,4,2,7], l = 1, r = 5<br />
        <strong>Output:</strong> 7<br />
        <strong>Explanation:</strong> The subsets of nums that have a sum within
        the range [1, 5] are {1}, {2}, {4}, {(2, 2)}, {(1, 2)}, {(1, 4)}, and{" "}
        {(1, 2, 2)}.
      </pre>

      <p>
        <strong>Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,1,3,5,2], l = 3, r = 5<br />
        <strong>Output:</strong> 9<br />
        <strong>Explanation:</strong> The subsets of nums that have a sum within
        the range [3, 5] are {3}, {5}, {(1, 2)}, {(1, 3)}, {(2, 2)}, {(2, 3)},{" "}
        {(1, 1, 2)}, {(1, 1, 3)}, and {(1, 2, 2)}.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= nums[i] &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          Sum of <code>nums</code> does not exceed{" "}
          <code>
            2 * 10<sup>4</sup>
          </code>
          .
        </li>
        <li>
          <code>
            0 &lt;= l &lt;= r &lt;= 2 * 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  3023: (
    <article role="main" class="blog-post">
      <p>
        You are given a binary array <code>pattern</code> and an object{" "}
        <code>stream</code> of class <code>InfiniteStream</code> representing a{" "}
        <strong>0-indexed</strong> infinite stream of bits.
      </p>

      <p>
        The class <code>InfiniteStream</code> contains the following function:
      </p>

      <ul>
        <li>
          <code>int next()</code>: Reads a <strong>single</strong> bit (which is
          either <code>0</code> or <code>1</code>) from the stream and returns
          it.
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the <strong>first starting</strong> index where the pattern matches
          the bits read from the stream
        </em>
        . For example, if the pattern is <code>[1, 0]</code>, the first match is
        the highlighted part in the stream{" "}
        <code>
          [0,{" "}
          <strong>
            <u>1, 0</u>
          </strong>
          , 1, ...]
        </code>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> stream = [1,1,1,0,1,1,1,...], pattern = [0,1]{" "}
        <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> The first occurrence of the pattern [0,1]
        is highlighted in the stream [1,1,1,
        <strong>
          <u>0,1</u>
        </strong>
        ,...], which starts at index 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> stream = [0,0,0,0,...], pattern = [0] <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> The first occurrence of the pattern [0] is
        highlighted in the stream [
        <strong>
          <u>0</u>
        </strong>
        ,...], which starts at index 0.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> stream = [1,0,1,1,0,1,1,0,1,...], pattern =
        [1,1,0,1] <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> The first occurrence of the pattern
        [1,1,0,1] is highlighted in the stream [1,0,
        <strong>
          <u>1,1,0,1</u>
        </strong>
        ,...], which starts at index 2.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= pattern.length &lt;= 100</code>
        </li>
        <li>
          <code>pattern</code> consists only of <code>0</code> and{" "}
          <code>1</code>.
        </li>
        <li>
          <code>stream</code> consists only of <code>0</code> and <code>1</code>
          .
        </li>
        <li>
          The input is generated such that the pattern's start index exists in
          the first{" "}
          <code>
            10<sup>5</sup>
          </code>{" "}
          bits of the stream.
        </li>
      </ul>
    </article>
  ),
  3037: (
    <article role="main" class="blog-post">
      <p>
        You are given a binary array <code>pattern</code> and an object{" "}
        <code>stream</code> of class <code>InfiniteStream</code> representing a{" "}
        <strong>0-indexed</strong> infinite stream of bits.
      </p>

      <p>
        The class <code>InfiniteStream</code> contains the following function:
      </p>

      <ul>
        <li>
          <code>int next()</code>: Reads a <strong>single</strong> bit (which is
          either <code>0</code> or <code>1</code>) from the stream and returns
          it.
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the <strong>first starting</strong> index where the pattern matches
          the bits read from the stream
        </em>
        . For example, if the pattern is <code>[1, 0]</code>, the first match is
        the highlighted part in the stream{" "}
        <code>
          [0,{" "}
          <strong>
            <u>1, 0</u>
          </strong>
          , 1, ...]
        </code>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> stream = [1,1,1,0,1,1,1,...], pattern = [0,1]{" "}
        <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The first occurrence of the pattern [0,1]
        is highlighted in the stream [1,1,1,
        <strong>
          <u>0,1</u>
        </strong>
        ,...], which starts at index 3.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> stream = [0,0,0,0,...], pattern = [0]
        <br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> The first occurrence of the pattern [0] is
        highlighted in the stream [
        <strong>
          <u>0</u>
        </strong>
        ,...], which starts at index 0.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> stream = [1,0,1,1,0,1,1,0,1,...], pattern =
        [1,1,0,1]
        <br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> The first occurrence of the pattern
        [1,1,0,1] is highlighted in the stream [1,0,
        <strong>
          <u>1,1,0,1</u>
        </strong>
        ,...], which starts at index 2.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= pattern.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>pattern</code> consists only of <code>0</code> and{" "}
          <code>1</code>.
        </li>
        <li>
          <code>stream</code> consists only of <code>0</code> and <code>1</code>
          .
        </li>
        <li>
          The input is generated such that the pattern's start index exists in
          the first{" "}
          <code>
            10<sup>5</sup>
          </code>{" "}
          bits of the stream.
        </li>
      </ul>
    </article>
  ),
  3135: (
    <article role="main" class="blog-post">
      <p>
        Given two strings <code>initial</code> and <code>target</code>, your
        task is to modify <code>initial</code> by performing a series of
        operations to make it equal to <code>target</code>.
      </p>

      <p>
        In one operation, you can add or remove <strong>one character</strong>{" "}
        only at the <em>beginning</em> or the <em>end</em> of the string{" "}
        <code>initial</code>.
      </p>
      <div
        class="google-auto-placed ap_container"
        style={{
          width: "100%",
          height: "auto",
          clear: "both",
          textAlign: "center",
        }}
      >
        <ins
          data-ad-format="auto"
          class="adsbygoogle adsbygoogle-noablate"
          data-ad-client="ca-pub-6766885420008650"
          data-adsbygoogle-status="done"
          style={{
            display: "block",
            margin: "auto",
            backgroundColor: "transparent",
            height: "0px",
          }}
          data-ad-status="unfilled"
        >
          <div
            id="aswift_1_host"
            style={{
              border: "none",
              height: "0px",
              width: "730px",
              margin: "0px",
              padding: "0px",
              position: "relative",
              visibility: "visible",
              backgroundColor: "transparent",
              display: "inline-block",
              overflow: "hidden",
              opacity: "0",
            }}
          >
            <iframe
              id="aswift_1"
              name="aswift_1"
              browsingtopics="true"
              style={{
                left: "0px",
                position: "absolute",
                top: "0px",
                border: "0px",
                width: "730px",
                height: "0px",
              }}
              sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
              width="730"
              height="0"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              vspace="0"
              hspace="0"
              allowtransparency="true"
              scrolling="no"
              allow="attribution-reporting; run-ad-auction"
              src="https://googleads.g.doubleclick.net/pagead/ads?gdpr=0&amp;client=ca-pub-6766885420008650&amp;output=html&amp;h=280&amp;adk=3766017644&amp;adf=2799003785&amp;pi=t.aa~a.3123491585~i.18~rp.4&amp;w=730&amp;abgtt=3&amp;fwrn=4&amp;fwrnh=100&amp;lmt=1719504794&amp;num_ads=1&amp;rafmt=1&amp;armr=3&amp;sem=mc&amp;pwprc=2295191326&amp;ad_type=text_image&amp;format=730x280&amp;url=https%3A%2F%2Fleetcode.ca%2F2024-05-20-3135-Equalize-Strings-by-Adding-or-Removing-Characters-at-Ends%2F&amp;fwr=0&amp;pra=3&amp;rh=183&amp;rw=730&amp;rpe=1&amp;resp_fmts=3&amp;wgl=1&amp;fa=27&amp;uach=WyJtYWNPUyIsIjEyLjIuMCIsImFybSIsIiIsIjEyNi4wLjY0NzguMTE2IixudWxsLDAsbnVsbCwiNjQiLFtbIk5vdC9BKUJyYW5kIiwiOC4wLjAuMCJdLFsiQ2hyb21pdW0iLCIxMjYuMC42NDc4LjExNiJdLFsiR29vZ2xlIENocm9tZSIsIjEyNi4wLjY0NzguMTE2Il1dLDBd&amp;dt=1719562796147&amp;bpp=3&amp;bdt=446&amp;idt=3&amp;shv=r20240625&amp;mjsv=m202406250101&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3D09d2a9b544f17345%3AT%3D1717604490%3ART%3D1719562728%3AS%3DALNI_MaWLjkPukvjTU79nDXQOU50jGM72A&amp;gpic=UID%3D00000e41e1a25d50%3AT%3D1717604490%3ART%3D1719562728%3AS%3DALNI_MYwcxS6KhZpxQL2WMYDFOxY1wxEkg&amp;eo_id_str=ID%3Dfa6b3c6d7ed523fd%3AT%3D1717604490%3ART%3D1719562728%3AS%3DAA-AfjYfRq-RLFAgRd1nyoJHXp6S&amp;prev_fmts=0x0&amp;nras=2&amp;correlator=8185043645010&amp;frm=20&amp;pv=1&amp;ga_vid=522084150.1717604490&amp;ga_sid=1719562796&amp;ga_hid=1664627876&amp;ga_fc=1&amp;u_tz=330&amp;u_his=7&amp;u_h=900&amp;u_w=1440&amp;u_ah=822&amp;u_aw=1440&amp;u_cd=30&amp;u_sd=2&amp;dmc=8&amp;adx=355&amp;ady=788&amp;biw=1440&amp;bih=550&amp;scr_x=0&amp;scr_y=0&amp;eid=44759876%2C44759927%2C44759842%2C95330000%2C95334509%2C95334526%2C95334572%2C95335896%2C95335247%2C95335290%2C31078663%2C31078665%2C31078668%2C31078670&amp;oid=2&amp;pvsid=1655004951637640&amp;tmod=814666498&amp;uas=0&amp;nvt=1&amp;ref=https%3A%2F%2Fleetcode.ca%2Fsearch%2F&amp;fc=1408&amp;brdim=0%2C25%2C0%2C25%2C1440%2C25%2C1440%2C821%2C1440%2C550&amp;vis=1&amp;rsz=%7C%7Cs%7C&amp;abl=NS&amp;fu=128&amp;bc=31&amp;bz=1&amp;td=1&amp;tdf=2&amp;psd=W251bGwsbnVsbCxudWxsLDNd&amp;nt=1&amp;ifi=2&amp;uci=a!2&amp;btvi=1&amp;fsb=1&amp;dtd=249"
              data-google-container-id="a!2"
              tabindex="0"
              title="Advertisement"
              aria-label="Advertisement"
              data-google-query-id="CI7Lpc3u_YYDFW9NnQkdlw4Psg"
              data-load-complete="true"
            ></iframe>
          </div>
        </ins>
      </div>

      <p>
        Return the <strong>minimum</strong> number of operations required to{" "}
        <em>transform</em> <code>initial</code> into <code>target</code>.
      </p>

      <br />

      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">initial = "abcde", target = "cdef"</span>
        <br />
        <strong>Output:</strong> 3
        <br />
        <strong>Explanation:</strong>
        <br />
        <p>
          Remove <code>'a'</code> and <code>'b'</code> from the beginning of{" "}
          <code>initial</code>, then add <code>'f'</code> to the end.
        </p>
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">initial = "axxy", target = "yabx"</span>
        <br />
        <strong>Output:</strong> 6
        <br />
        <strong>Explanation:</strong> <br />
        <table border="1">
          <tbody>
            <tr>
              <th style={{ textAlign: "start" }}>Operation</th>
              <th style={{ textAlign: "start" }}>Resulting String</th>
            </tr>
            <tr>
              <td>
                Add <code>'y'</code> to the beginning
              </td>
              <td>
                <code>"yaxxy"</code>
              </td>
            </tr>
            <tr>
              <td>Remove from end</td>
              <td>
                <code>"yaxx"</code>
              </td>
            </tr>
            <tr>
              <td>Remove from end</td>
              <td>
                <code>"yax"</code>
              </td>
            </tr>
            <tr>
              <td>Remove from end</td>
              <td>
                <code>"ya"</code>
              </td>
            </tr>
            <tr>
              <td>
                Add <code>'b'</code> to the end
              </td>
              <td>
                <code>"yab"</code>
              </td>
            </tr>
            <tr>
              <td>
                Add <code>'x'</code> to the end
              </td>
              <td>
                <code>"yabx"</code>
              </td>
            </tr>
          </tbody>
        </table>
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">initial = "xyz", target = "xyz"</span>
        <br />
        <strong>Output:</strong> <span class="example-io">0</span>
        <br />
        <strong>Explanation:</strong> <br />
        No operations are needed as the strings are already equal.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= initial.length, target.length &lt;= 1000</code>
        </li>
        <li>
          <code>initial</code> and <code>target</code> consist only of lowercase
          English letters.
        </li>
      </ul>
    </article>
  ),
  2904: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a binary string <code>s</code> and a positive integer{" "}
        <code>k</code>.
      </p>

      <p>
        A substring of <code>s</code> is <strong>beautiful</strong> if the
        number of <code>1</code>'s in it is exactly <code>k</code>.
      </p>

      <p>
        Let <code>len</code> be the length of the <strong>shortest</strong>{" "}
        beautiful substring.
      </p>

      <p>
        Return{" "}
        <em>
          the lexicographically <strong>smallest</strong> beautiful substring of
          string{" "}
        </em>
        <code>s</code>
        <em> with length equal to </em>
        <code>len</code>. If <code>s</code> doesn't contain a beautiful
        substring, return{" "}
        <em>
          an <strong>empty</strong> string
        </em>
        .
      </p>

      <p>
        A string <code>a</code> is lexicographically <strong>larger</strong>{" "}
        than a string <code>b</code> (of the same length) if in the first
        position where <code>a</code> and <code>b</code> differ, <code>a</code>{" "}
        has a character strictly larger than the corresponding character in{" "}
        <code>b</code>.
      </p>

      <ul>
        <li>
          For example, <code>"abcd"</code> is lexicographically larger than{" "}
          <code>"abcc"</code> because the first position they differ is at the
          fourth character, and <code>d</code> is greater than <code>c</code>.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "100011001", k = 3<br />
        <strong>Output:</strong> "11001"
        <br />
        <strong>Explanation:</strong> There are 7 beautiful substrings in this
        example:
        <br />
        1. The substring "<u>100011</u>001".
        <br />
        2. The substring "<u>1000110</u>01".
        <br />
        3. The substring "<u>10001100</u>1".
        <br />
        4. The substring "1<u>00011001</u>".
        <br />
        5. The substring "10<u>0011001</u>".
        <br />
        6. The substring "100<u>011001</u>".
        <br />
        7. The substring "1000<u>11001</u>".
        <br />
        The length of the shortest beautiful substring is 5.
        <br />
        The lexicographically smallest beautiful substring with length 5 is the
        substring "11001".
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "1011", k = 2<br />
        <strong>Output:</strong> "11"
        <br />
        <strong>Explanation:</strong> There are 3 beautiful substrings in this
        example:
        <br />
        1. The substring "<u>101</u>1".
        <br />
        2. The substring "1<u>011</u>".
        <br />
        3. The substring "10<u>11</u>".
        <br />
        The length of the shortest beautiful substring is 2.
        <br />
        The lexicographically smallest beautiful substring with length 2 is the
        substring "11".
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "000", k = 1 <br />
        <strong>Output:</strong> "" <br />
        <strong>Explanation:</strong> There are no beautiful substrings in this
        example.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= s.length &lt;= 100</code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= s.length</code>
        </li>
      </ul>
    </div>
  ),
  2932: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code>. A pair of integers <code>x</code> and <code>y</code>{" "}
        is called a <strong>strong</strong> pair if it satisfies the condition:
      </p>

      <ul>
        <li>
          <code>|x - y| &lt;= min(x, y)</code>
        </li>
      </ul>

      <p>
        You need to select two integers from <code>nums</code> such that they
        form a strong pair and their bitwise <code>XOR</code> is the{" "}
        <strong>maximum</strong> among all strong pairs in the array.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>maximum</strong>{" "}
        </em>
        <code>XOR</code>
        <em> value out of all possible strong pairs in the array</em>{" "}
        <code>nums</code>.
      </p>

      <p>
        <strong>Note</strong> that you can pick the same integer twice to form a
        pair.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,4,5] <br />
        <strong>Output:</strong> 7 <br />
        <strong>Explanation:</strong> There are 11 strong pairs in the array{" "}
        <code>nums</code>: (1, 1), (1, 2), (2, 2), (2, 3), (2, 4), (3, 3), (3,
        4), (3, 5), (4, 4), (4, 5) and (5, 5). <br />
        The maximum XOR possible from these pairs is 3 XOR 4 = 7.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [10,100] <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> There are 2 strong pairs in the array{" "}
        <code>nums</code>: (10, 10) and (100, 100). <br />
        The maximum XOR possible from these pairs is 10 XOR 10 = 0 since the
        pair (100, 100) also gives 100 XOR 100 = 0.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,6,25,30] <br />
        <strong>Output:</strong> 7 <br />
        <strong>Explanation:</strong> There are 6 strong pairs in the array{" "}
        <code>nums</code>: (5, 5), (5, 6), (6, 6), (25, 25), (25, 30) and (30,
        30). <br />
        The maximum XOR possible from these pairs is 25 XOR 30 = 7 since the
        only other non-zero XOR value is 5 XOR 6 = 3.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 50</code>
        </li>
        <li>
          <code>1 &lt;= nums[i] &lt;= 100</code>
        </li>
      </ul>
    </div>
  ),
  2935: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code>. A pair of integers <code>x</code> and <code>y</code>{" "}
        is called a <strong>strong</strong> pair if it satisfies the condition:
      </p>

      <ul>
        <li>
          <code>|x - y| &lt;= min(x, y)</code>
        </li>
      </ul>

      <p>
        You need to select two integers from <code>nums</code> such that they
        form a strong pair and their bitwise <code>XOR</code> is the{" "}
        <strong>maximum</strong> among all strong pairs in the array.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>maximum</strong>{" "}
        </em>
        <code>XOR</code>
        <em> value out of all possible strong pairs in the array</em>{" "}
        <code>nums</code>.
      </p>

      <p>
        <strong>Note</strong> that you can pick the same integer twice to form a
        pair.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,4,5] <br />
        <strong>Output:</strong> 7 <br />
        <strong>Explanation:</strong> There are 11 strong pairs in the array{" "}
        <code>nums</code>: (1, 1), (1, 2), (2, 2), (2, 3), (2, 4), (3, 3), (3,
        4), (3, 5), (4, 4), (4, 5) and (5, 5). The maximum XOR possible from
        these pairs is 3 XOR 4 = 7.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [10,100] <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> There are 2 strong pairs in the array
        nums: (10, 10) and (100, 100). <br />
        The maximum XOR possible from these pairs is 10 XOR 10 = 0 since the
        pair (100, 100) also gives 100 XOR 100 = 0.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [500,520,2500,3000] <br />
        <strong>Output:</strong> 1020 <br />
        <strong>Explanation:</strong> There are 6 strong pairs in the array
        nums: (500, 500), (500, 520), (520, 520), (2500, 2500), (2500, 3000) and
        (3000, 3000). <br />
        The maximum XOR possible from these pairs is 500 XOR 520 = 1020 since
        the only other non-zero XOR value is 2500 XOR 3000 = 636.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 5 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 2<sup>20</sup> - 1
          </code>
        </li>
      </ul>
    </div>
  ),
  2953: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a string <code>word</code> and an integer <code>k</code>.
      </p>

      <p>
        A substring <code>s</code> of <code>word</code> is{" "}
        <strong>complete</strong> if:
      </p>

      <ul>
        <li>
          Each character in <code>s</code> occurs <strong>exactly</strong>{" "}
          <code>k</code> times.
        </li>
        <li>
          The difference between two adjacent characters is{" "}
          <strong>at most</strong> <code>2</code>. That is, for any two adjacent
          characters <code>c1</code> and <code>c2</code> in <code>s</code>, the
          absolute difference in their positions in the alphabet is{" "}
          <strong>at most</strong> <code>2</code>.
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the number of <strong>complete </strong>substrings of
        </em>{" "}
        <code>word</code>.
      </p>

      <p>
        A <strong>substring</strong> is a <strong>non-empty</strong> contiguous
        sequence of characters in a string.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> word = "igigee", k = 2 <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> The complete substrings where each
        character appears exactly twice and the difference between adjacent
        characters is at most 2 are:{" "}
        <u>
          <strong>igig</strong>
        </u>
        ee, igig
        <u>
          <strong>ee</strong>
        </u>
        ,{" "}
        <u>
          <strong>igigee</strong>
        </u>
        .
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> word = "aaabbbccc", k = 3 <br />
        <strong>Output:</strong> 6 <br />
        <strong>Explanation:</strong> The complete substrings where each
        character appears exactly three times and the difference between
        adjacent characters is at most 2 are:{" "}
        <strong>
          <u>aaa</u>
        </strong>
        bbbccc, aaa
        <u>
          <strong>bbb</strong>
        </u>
        ccc, aaabbb
        <u>
          <strong>ccc</strong>
        </u>
        ,{" "}
        <strong>
          <u>aaabbb</u>
        </strong>
        ccc, aaa
        <u>
          <strong>bbbccc</strong>
        </u>
        ,{" "}
        <u>
          <strong>aaabbbccc</strong>
        </u>
        .
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= word.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>word</code> consists only of lowercase English letters.
        </li>
        <li>
          <code>1 &lt;= k &lt;= word.length</code>
        </li>
      </ul>
    </div>
  ),
  2958: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code> and an integer{" "}
        <code>k</code>.
      </p>

      <p>
        The <strong>frequency</strong> of an element <code>x</code> is the
        number of times it occurs in an array.
      </p>

      <p>
        An array is called <strong>good</strong> if the frequency of each
        element in this array is <strong>less than or equal</strong> to{" "}
        <code>k</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the length of the <strong>longest</strong> <strong>good</strong>{" "}
          subarray of
        </em>{" "}
        <code>nums</code>
        <em>.</em>
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous non-empty sequence of
        elements within an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,1,2,3,1,2], k = 2 <br />
        <strong>Output:</strong> 6 <br />
        <strong>Explanation:</strong> The longest possible good subarray is
        [1,2,3,1,2,3] since the values 1, 2, and 3 occur at most twice in this
        subarray. Note that the subarrays [2,3,1,2,3,1] and [3,1,2,3,1,2] are
        also good. It can be shown that there are no good subarrays with length
        more than 6.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,1,2,1,2,1,2], k = 1 <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> The longest possible good subarray is
        [1,2] since the values 1 and 2 occur at most once in this subarray. Note
        that the subarray [2,1] is also good. It can be shown that there are no
        good subarrays with length more than 2.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,5,5,5,5,5,5], k = 4 <br />
        <strong>Output:</strong> 4 <br />
        <strong>Explanation:</strong> The longest possible good subarray is
        [5,5,5,5] since the value 5 occurs 4 times in this subarray. It can be
        shown that there are no good subarrays with length more than 4.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= nums.length</code>
        </li>
      </ul>
    </div>
  ),
  2962: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code> and a{" "}
        <strong>positive</strong> integer <code>k</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the number of subarrays where the <strong>maximum</strong> element of{" "}
        </em>
        <code>nums</code>
        <em>
          {" "}
          appears <strong>at least</strong>{" "}
        </em>
        <code>k</code>
        <em> times in that subarray.</em>
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous sequence of elements within
        an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,2,3,3], k = 2 <br />
        <strong>Output:</strong> 6 <br />
        <strong>Explanation:</strong> The subarrays that contain the element 3
        at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3],
        [2,3,3] and [3,3].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,4,2,1], k = 3<br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> No subarray contains the element 4 at
        least 3 times.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>6</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= k &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2968: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code> and an integer <code>k</code>.
      </p>

      <p>
        You can perform the following operation on the array{" "}
        <strong>at most</strong> <code>k</code> times:
      </p>

      <ul>
        <li>
          Choose any index <code>i</code> from the array and{" "}
          <strong>increase</strong> or <strong>decrease</strong>{" "}
          <code>nums[i]</code> by <code>1</code>.
        </li>
      </ul>

      <p>
        The score of the final array is the <strong>frequency</strong> of the
        most frequent element in the array.
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>maximum</strong> score you can achieve
        </em>
        .
      </p>

      <p>
        The frequency of an element is the number of occurences of that element
        in the array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,6,4], k = 3<br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> We can do the following operations on the
        array:
        <br />
        - Choose i = 0, and increase the value of nums[0] by 1. The resulting
        array is [2,2,6,4].
        <br />
        - Choose i = 3, and decrease the value of nums[3] by 1. The resulting
        array is [2,2,6,3].
        <br />
        - Choose i = 3, and decrease the value of nums[3] by 1. The resulting
        array is [2,2,6,2].
        <br />
        The element 2 is the most frequent in the final array so our score is 3.
        <br />
        It can be shown that we cannot achieve a better score.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,4,4,2,4], k = 0<br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> We cannot apply any operations so our
        score will be the frequency of the most frequent element in the original
        array, which is 3.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 10<sup>14</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2981: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a string <code>s</code> that consists of lowercase English
        letters.
      </p>

      <p>
        A string is called <strong>special</strong> if it is made up of only a
        single character. For example, the string <code>"abc"</code> is not
        special, whereas the strings <code>"ddd"</code>, <code>"zz"</code>, and{" "}
        <code>"f"</code> are special.
      </p>

      <p>
        Return{" "}
        <em>
          the length of the <strong>longest special substring</strong> of{" "}
        </em>
        <code>s</code>{" "}
        <em>
          which occurs <strong>at least thrice</strong>
        </em>
        , <em>or </em>
        <code>-1</code>
        <em> if no special substring occurs at least thrice</em>.
      </p>

      <p>
        A <strong>substring</strong> is a contiguous <strong>non-empty</strong>{" "}
        sequence of characters within a string.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "aaaa" <br />
        <strong>Output:</strong> 2 <br />
        <strong>Explanation:</strong> The longest special substring which occurs
        thrice is "aa": substrings "
        <u>
          <strong>aa</strong>
        </u>
        aa", "a
        <u>
          <strong>aa</strong>
        </u>
        a", and "aa
        <u>
          <strong>aa</strong>
        </u>
        ". It can be shown that the maximum length achievable is 2.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abcdef" <br />
        <strong>Output:</strong> -1 <br />
        <strong>Explanation:</strong> There exists no special substring which
        occurs at least thrice. Hence return -1.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abcaba" <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> The longest special substring which occurs
        thrice is "a": substrings "
        <u>
          <strong>a</strong>
        </u>
        bcaba", "abc
        <u>
          <strong>a</strong>
        </u>
        ba", and "abcab
        <u>
          <strong>a</strong>
        </u>
        ". It can be shown that the maximum length achievable is 1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>3 &lt;= s.length &lt;= 50</code>
        </li>
        <li>
          <code>s</code> consists of only lowercase English letters.
        </li>
      </ul>
    </div>
  ),
  2982: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a string <code>s</code> that consists of lowercase English
        letters.
      </p>

      <p>
        A string is called <strong>special</strong> if it is made up of only a
        single character. For example, the string <code>"abc"</code> is not
        special, whereas the strings <code>"ddd"</code>, <code>"zz"</code>, and{" "}
        <code>"f"</code> are special.
      </p>

      <p>
        Return{" "}
        <em>
          the length of the <strong>longest special substring</strong> of{" "}
        </em>
        <code>s</code>{" "}
        <em>
          which occurs <strong>at least thrice</strong>
        </em>
        , <em>or </em>
        <code>-1</code>
        <em> if no special substring occurs at least thrice</em>.
      </p>

      <p>
        A <strong>substring</strong> is a contiguous <strong>non-empty</strong>{" "}
        sequence of characters within a string.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "aaaa" <br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> The longest special substring which occurs
        thrice is "aa": substrings "
        <u>
          <strong>aa</strong>
        </u>
        aa", "a
        <u>
          <strong>aa</strong>
        </u>
        a", and "aa
        <u>
          <strong>aa</strong>
        </u>
        ". It can be shown that the maximum length achievable is 2.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abcdef"
        <br />
        <strong>Output:</strong> -1
        <br />
        <strong>Explanation:</strong> There exists no special substring which
        occurs at least thrice. Hence return -1.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abcaba"
        <br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> The longest special substring which occurs
        thrice is "a": substrings "
        <u>
          <strong>a</strong>
        </u>
        bcaba", "abc
        <u>
          <strong>a</strong>
        </u>
        ba", and "abcab
        <u>
          <strong>a</strong>
        </u>
        ". It can be shown that the maximum length achievable is 1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            3 &lt;= s.length &lt;= 5 * 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s</code> consists of only lowercase English letters.
        </li>
      </ul>
    </div>
  ),
  3013: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> array of integers{" "}
        <code>nums</code> of length <code>n</code>, and two{" "}
        <strong>positive</strong> integers <code>k</code> and <code>dist</code>.
      </p>

      <p>
        The <strong>cost</strong> of an array is the value of its{" "}
        <strong>first</strong> element. For example, the cost of{" "}
        <code>[1,2,3]</code> is <code>1</code> while the cost of{" "}
        <code>[3,4,1]</code> is <code>3</code>.
      </p>

      <p>
        You need to divide <code>nums</code> into <code>k</code>{" "}
        <strong>disjoint contiguous </strong>
        <span
          data-keyword="subarray-nonempty"
          class=" cursor-pointer relative text-dark-blue-s text-sm"
        >
          <div class="popover-wrapper inline-block" data-headlessui-state="">
            <div>
              <div
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:rt:"
              >
                <div>subarrays</div>
              </div>
            </div>
          </div>
        </span>
        , such that the difference between the starting index of the{" "}
        <strong>second</strong> subarray and the starting index of the{" "}
        <code>kth</code> subarray should be{" "}
        <strong>less than or equal to</strong> <code>dist</code>. In other
        words, if you divide <code>nums</code> into the subarrays{" "}
        <code>
          nums[0..(i<sub>1</sub> - 1)], nums[i<sub>1</sub>..(i<sub>2</sub> -
          1)], ..., nums[i<sub>k-1</sub>..(n - 1)]
        </code>
        , then{" "}
        <code>
          i<sub>k-1</sub> - i<sub>1</sub> &lt;= dist
        </code>
        .
      </p>

      <p>
        Return{" "}
        <em>
          the <strong>minimum</strong> possible sum of the cost of these
        </em>{" "}
        <em>subarrays</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,2,6,4,2], k = 3, dist = 3<br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> The best possible way to divide nums into
        3 subarrays is: [1,3], [2,6,4], and [2]. This choice is valid because i
        <sub>k-1</sub> - i<sub>1</sub> is 5 - 2 = 3 which is equal to dist. The
        total cost is nums[0] + nums[2] + nums[5] which is 1 + 2 + 2 = 5. It can
        be shown that there is no possible way to divide nums into 3 subarrays
        at a cost lower than 5.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [10,1,2,2,2,1], k = 4, dist = 3<br />
        <strong>Output:</strong> 15
        <br />
        <strong>Explanation:</strong> The best possible way to divide nums into
        4 subarrays is: [10], [1], [2], and [2,2,1]. This choice is valid
        because i<sub>k-1</sub> - i<sub>1</sub> is 3 - 1 = 2 which is less than
        dist. The total cost is nums[0] + nums[1] + nums[2] + nums[3] which is
        10 + 1 + 2 + 2 = 15. The division [10], [1], [2,2,2], and [1] is not
        valid, because the difference between i<sub>k-1</sub> and i<sub>1</sub>{" "}
        is 5 - 1 = 4, which is greater than dist. It can be shown that there is
        no possible way to divide nums into 4 subarrays at a cost lower than 15.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [10,8,18,9], k = 3, dist = 1<br />
        <strong>Output:</strong> 36
        <br />
        <strong>Explanation:</strong> The best possible way to divide nums into
        4 subarrays is: [10], [8], and [18,9]. This choice is valid because i
        <sub>k-1</sub> - i<sub>1</sub> is 2 - 1 = 1 which is equal to dist.The
        total cost is nums[0] + nums[1] + nums[2] which is 10 + 8 + 18 = 36. The
        division [10], [8,18], and [9] is not valid, because the difference
        between i<sub>k-1</sub> and i<sub>1</sub> is 3 - 1 = 2, which is greater
        than dist. It can be shown that there is no possible way to divide nums
        into 3 subarrays at a cost lower than 36.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            3 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>3 &lt;= k &lt;= n</code>
        </li>
        <li>
          <code>k - 2 &lt;= dist &lt;= n - 2</code>
        </li>
      </ul>
    </div>
  ),
  3086: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a binary array <code>nums</code> of length <code>n</code>,
        a <strong>positive</strong> integer <code>k</code> and a{" "}
        <strong>non-negative</strong> integer <code>maxChanges</code>.
      </p>

      <p>
        Alice plays a game, where the goal is for Alice to pick up{" "}
        <code>k</code> ones from <code>nums</code> using the{" "}
        <strong>minimum</strong> number of <strong>moves</strong>. When the game
        starts, Alice picks up any index <code>aliceIndex</code> in the range{" "}
        <code>[0, n - 1]</code> and stands there. If{" "}
        <code>nums[aliceIndex] == 1</code> , Alice picks up the one and{" "}
        <code>nums[aliceIndex]</code> becomes <code>0</code>(this{" "}
        <strong>does not</strong> count as a move). After this, Alice can make{" "}
        <strong>any</strong> number of <strong>moves</strong> (
        <strong>including</strong> <strong>zero</strong>) where in each move
        Alice must perform <strong>exactly</strong> one of the following
        actions:
      </p>

      <ul>
        <li>
          Select any index <code>j != aliceIndex</code> such that{" "}
          <code>nums[j] == 0</code> and set <code>nums[j] = 1</code>. This
          action can be performed <strong>at</strong> <strong>most</strong>{" "}
          <code>maxChanges</code> times.
        </li>
        <li>
          Select any two adjacent indices <code>x</code> and <code>y</code> (
          <code>|x - y| == 1</code>) such that <code>nums[x] == 1</code>,{" "}
          <code>nums[y] == 0</code>, then swap their values (set{" "}
          <code>nums[y] = 1</code> and <code>nums[x] = 0</code>). If{" "}
          <code>y == aliceIndex</code>, Alice picks up the one after this move
          and <code>nums[y]</code> becomes <code>0</code>.
        </li>
      </ul>

      <p>
        Return{" "}
        <em>
          the <strong>minimum</strong> number of moves required by Alice to pick{" "}
          <strong>exactly </strong>
        </em>
        <code>k</code> <em>ones</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre class="example-block">
        <strong>Input: </strong>
        <span class="example-io">
          nums = [1,1,0,0,0,1,1,0,0,1], k = 3, maxChanges = 1
        </span>
        <br />
        <strong>Output: </strong>
        <span class="example-io">3</span>
        <br />
        <strong>Explanation:</strong> Alice can pick up <code>3</code> ones in{" "}
        <code>3</code> moves, if Alice performs the following actions in each
        move when standing at <code>aliceIndex == 1</code>:
        <ul>
          <li>
            &nbsp;At the start of the game Alice picks up the one and{" "}
            <code>nums[1]</code> becomes <code>0</code>. <code>nums</code>{" "}
            becomes{" "}
            <code>
              [1,
              <strong>
                <u>1</u>
              </strong>
              ,1,0,0,1,1,0,0,1]
            </code>
            .
          </li>
          <li>
            Select <code>j == 2</code> and perform an action of the first type.{" "}
            <code>nums</code> becomes{" "}
            <code>
              [1,
              <strong>
                <u>0</u>
              </strong>
              ,1,0,0,1,1,0,0,1]
            </code>
          </li>
          <li>
            Select <code>x == 2</code> and <code>y == 1</code>, and perform an
            action of the second type. <code>nums</code> becomes{" "}
            <code>
              [1,
              <strong>
                <u>1</u>
              </strong>
              ,0,0,0,1,1,0,0,1]
            </code>
            . As <code>y == aliceIndex</code>, Alice picks up the one and{" "}
            <code>nums</code> becomes&nbsp;
            <code>
              [1,
              <strong>
                <u>0</u>
              </strong>
              ,0,0,0,1,1,0,0,1]
            </code>
            .
          </li>
          <li>
            Select <code>x == 0</code> and <code>y == 1</code>, and perform an
            action of the second type. <code>nums</code> becomes{" "}
            <code>
              [0,
              <strong>
                <u>1</u>
              </strong>
              ,0,0,0,1,1,0,0,1]
            </code>
            . As <code>y == aliceIndex</code>, Alice picks up the one and{" "}
            <code>nums</code> becomes&nbsp;
            <code>
              [0,
              <strong>
                <u>0</u>
              </strong>
              ,0,0,0,1,1,0,0,1]
            </code>
            .
          </li>
        </ul>
        <p>
          Note that it may be possible for Alice to pick up <code>3</code> ones
          using some other sequence of <code>3</code> moves.
        </p>
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre class="example-block">
        <strong>Input: </strong>
        <span class="example-io">nums = [0,0,0,0], k = 2, maxChanges = 3</span>
        <br />
        <strong>Output: </strong>
        <span class="example-io">4</span>
        <br />
        <strong>Explanation:</strong> Alice can pick up <code>2</code> ones in{" "}
        <code>4</code> moves, if Alice performs the following actions in each
        move when standing at <code>aliceIndex == 0</code>:
        <ul>
          <li>
            Select <code>j == 1</code> and perform an action of the first type.{" "}
            <code>nums</code> becomes{" "}
            <code>
              [
              <strong>
                <u>0</u>
              </strong>
              ,1,0,0]
            </code>
            .
          </li>
          <li>
            Select <code>x == 1</code> and <code>y == 0</code>, and perform an
            action of the second type. <code>nums</code> becomes{" "}
            <code>
              [
              <strong>
                <u>1</u>
              </strong>
              ,0,0,0]
            </code>
            . As <code>y == aliceIndex</code>, Alice picks up the one and{" "}
            <code>nums</code> becomes&nbsp;
            <code>
              [
              <strong>
                <u>0</u>
              </strong>
              ,0,0,0]
            </code>
            .
          </li>
          <li>
            Select <code>j == 1</code> again and perform an action of the first
            type. <code>nums</code> becomes{" "}
            <code>
              [
              <strong>
                <u>0</u>
              </strong>
              ,1,0,0]
            </code>
            .
          </li>
          <li>
            Select <code>x == 1</code> and <code>y == 0</code> again, and
            perform an action of the second type. <code>nums</code> becomes{" "}
            <code>
              [
              <strong>
                <u>1</u>
              </strong>
              ,0,0,0]
            </code>
            . As <code>y == aliceIndex</code>, Alice picks up the one and{" "}
            <code>nums</code> becomes&nbsp;
            <code>
              [
              <strong>
                <u>0</u>
              </strong>
              ,0,0,0]
            </code>
            .
          </li>
        </ul>
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            2 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= nums[i] &lt;= 1</code>
        </li>
        <li>
          <code>
            1 &lt;= k &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= maxChanges &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>maxChanges + sum(nums) &gt;= k</code>
        </li>
      </ul>
    </div>
  ),
  3134: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an integer array <code>nums</code>. The{" "}
        <strong>uniqueness array</strong> of <code>nums</code> is the sorted
        array that contains the number of distinct elements of all the{" "}
        <span
          data-keyword="subarray-nonempty"
          class=" cursor-pointer relative text-dark-blue-s text-sm"
        >
          <div class="popover-wrapper inline-block" data-headlessui-state="">
            <div>
              <div
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:rt:"
              >
                <div>subarrays</div>
              </div>
            </div>
          </div>
        </span>{" "}
        of <code>nums</code>. In other words, it is a sorted array consisting of{" "}
        <code>distinct(nums[i..j])</code>, for all{" "}
        <code>0 &lt;= i &lt;= j &lt; nums.length</code>.
      </p>

      <p>
        Here, <code>distinct(nums[i..j])</code> denotes the number of distinct
        elements in the subarray that starts at index <code>i</code> and ends at
        index <code>j</code>.
      </p>

      <p>
        Return the <strong>median</strong> of the{" "}
        <strong>uniqueness array</strong> of <code>nums</code>.
      </p>

      <p>
        <strong>Note</strong> that the <strong>median</strong> of an array is
        defined as the middle element of the array when it is sorted in
        non-decreasing order. If there are two choices for a median, the{" "}
        <strong>smaller</strong> of the two values is taken.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <div class="example-block">
        <p>
          <strong>Input:</strong> <span class="example-io">nums = [1,2,3]</span>
        </p>

        <p>
          <strong>Output:</strong> <span class="example-io">1</span>
        </p>

        <p>
          <strong>Explanation:</strong>
        </p>

        <p>
          The uniqueness array of <code>nums</code> is{" "}
          <code>
            [distinct(nums[0..0]), distinct(nums[1..1]), distinct(nums[2..2]),
            distinct(nums[0..1]), distinct(nums[1..2]), distinct(nums[0..2])]
          </code>{" "}
          which is equal to <code>[1, 1, 1, 2, 2, 3]</code>. The uniqueness
          array has a median of 1. Therefore, the answer is 1.
        </p>
      </div>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [3,4,3,4,5]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">2</span>
        <br />
        <strong>Explanation:</strong>
        The uniqueness array of <code>nums</code> is{" "}
        <code>[1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3]</code>. The
        uniqueness array has a median of 2. Therefore, the answer is 2.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong> <span class="example-io">nums = [4,3,5,4]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">2</span>
        <br />
        <strong>Explanation:</strong>
        The uniqueness array of <code>nums</code> is{" "}
        <code>[1, 1, 1, 1, 2, 2, 2, 3, 3, 3]</code>. The uniqueness array has a
        median of 2. Therefore, the answer is 2.
      </pre>

      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  3090: (
    <div class="elfjS" data-track-load="description_content">
      Given a string <code>s</code>, return the <strong>maximum</strong> length
      of a{" "}
      <span
        data-keyword="substring"
        class=" cursor-pointer relative text-dark-blue-s text-sm"
      >
        <div class="popover-wrapper inline-block" data-headlessui-state="">
          <div>
            <div
              aria-expanded="false"
              data-headlessui-state=""
              id="headlessui-popover-button-:rt:"
            >
              <div>substring</div>
            </div>
          </div>
        </div>
      </span>
      &nbsp;such that it contains <em>at most two occurrences</em> of each
      character.
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre class="example-block">
        <strong>Input:</strong> <span class="example-io">s = "bcbbbcba"</span>
        <br />
        <strong>Output:</strong> <span class="example-io">4</span> <br />
        <strong>Explanation:</strong>
        The following substring has a length of 4 and contains at most two
        occurrences of each character:{" "}
        <code>
          "bcbb<u>bcba</u>"
        </code>
        .
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre class="example-block">
        <strong>Input:</strong> <span class="example-io">s = "aaaa"</span>{" "}
        <br />
        <strong>Output:</strong> <span class="example-io">2</span> <br />
        <strong>Explanation:</strong>
        The following substring has a length of 2 and contains at most two
        occurrences of each character:{" "}
        <code>
          "<u>aa</u>aa"
        </code>
        .
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>2 &lt;= s.length &lt;= 100</code>
        </li>
        <li>
          <code>s</code> consists only of lowercase English letters.
        </li>
      </ul>
    </div>
  ),
  3095: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array <code>nums</code> of{" "}
        <strong>non-negative</strong> integers and an integer <code>k</code>.
      </p>

      <p>
        An array is called <strong>special</strong> if the bitwise{" "}
        <code>OR</code> of all of its elements is <strong>at least</strong>{" "}
        <code>k</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the length of the <strong>shortest</strong> <strong>special</strong>{" "}
          <strong>non-empty</strong>{" "}
          <span
            data-keyword="subarray-nonempty"
            class=" cursor-pointer relative text-dark-blue-s text-sm"
          >
            <div class="popover-wrapper inline-block" data-headlessui-state="">
              <div>
                <div
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:rj:"
                >
                  <div>subarray</div>
                </div>
              </div>
            </div>
          </span>{" "}
          of
        </em>{" "}
        <code>nums</code>, <em>or return</em> <code>-1</code>{" "}
        <em>if no special subarray exists</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [1,2,3], k = 2</span>
        <br />
        <strong>Output:</strong> <span class="example-io">1</span>
        <br />
        <strong>Explanation:</strong> <br />
        The subarray <code>[3]</code> has <code>OR</code> value of{" "}
        <code>3</code>. Hence, we return <code>1</code>.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [2,1,8], k = 10</span>
        <br />
        <strong>Output:</strong> <span class="example-io">3</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        The subarray <code>[2,1,8]</code> has <code>OR</code> value of{" "}
        <code>11</code>. Hence, we return <code>3</code>.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [1,2], k = 0</span>
        <br />
        <strong>Output:</strong> <span class="example-io">1</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        The subarray <code>[1]</code> has <code>OR</code> value of{" "}
        <code>1</code>. Hence, we return <code>1</code>.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 50</code>
        </li>
        <li>
          <code>0 &lt;= nums[i] &lt;= 50</code>
        </li>
        <li>
          <code>0 &lt;= k &lt; 64</code>
        </li>
      </ul>
    </div>
  ),
  3097: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an array <code>nums</code> of{" "}
        <strong>non-negative</strong> integers and an integer <code>k</code>.
      </p>

      <p>
        An array is called <strong>special</strong> if the bitwise{" "}
        <code>OR</code> of all of its elements is <strong>at least</strong>{" "}
        <code>k</code>.
      </p>

      <p>
        Return{" "}
        <em>
          the length of the <strong>shortest</strong> <strong>special</strong>{" "}
          <strong>non-empty</strong>{" "}
          <span
            data-keyword="subarray-nonempty"
            class=" cursor-pointer relative text-dark-blue-s text-sm"
          >
            <div class="popover-wrapper inline-block" data-headlessui-state="">
              <div>
                <div
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:rj:"
                >
                  <div>subarray</div>
                </div>
              </div>
            </div>
          </span>{" "}
          of
        </em>{" "}
        <code>nums</code>, <em>or return</em> <code>-1</code>{" "}
        <em>if no special subarray exists</em>.
      </p>

      <strong class="example">Example 1:</strong>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [1,2,3], k = 2</span> <br />
        <strong>Output:</strong> <span class="example-io">1</span> <br />
        <strong>Explanation:</strong>
        The subarray <code>[3]</code> has <code>OR</code> value of{" "}
        <code>3</code>. Hence, we return <code>1</code>.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [2,1,8], k = 10</span> <br />
        <strong>Output:</strong> <span class="example-io">3</span> <br />
        <strong>Explanation:</strong>
        The subarray <code>[2,1,8]</code> has <code>OR</code> value of{" "}
        <code>11</code>. Hence, we return <code>3</code>.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [1,2], k = 0</span> <br />
        <strong>Output:</strong> <span class="example-io">1</span> <br />
        <strong>Explanation:</strong>
        <p>
          The subarray <code>[1]</code> has <code>OR</code> value of{" "}
          <code>1</code>. Hence, we return <code>1</code>.
        </p>
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 2 * 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  95: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer <code>n</code>, return{" "}
        <em>
          all the structurally unique <strong>BST'</strong>s (binary search
          trees), which has exactly{" "}
        </em>
        <code>n</code>
        <em> nodes of unique values from</em> <code>1</code> <em>to</em>{" "}
        <code>n</code>. Return the answer in <strong>any order</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg"
        style={{ width: 600, height: 148 }}
      />
      <pre>
        <strong>Input:</strong> n = 3<br />
        <strong>Output:</strong>{" "}
        [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 1 <br />
        <strong>Output:</strong> [[1]]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= n &lt;= 8</code>
        </li>
      </ul>
    </div>
  ),
  36: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Determine if a&nbsp;<code>9 x 9</code> Sudoku board&nbsp;is
        valid.&nbsp;Only the filled cells need to be validated&nbsp;
        <strong>according to the following rules</strong>:
      </p>

      <ul>
        <li>
          Each row&nbsp;must contain the&nbsp;digits&nbsp;<code>1-9</code>{" "}
          without repetition.
        </li>
        <li>
          Each column must contain the digits&nbsp;<code>1-9</code>&nbsp;without
          repetition.
        </li>
        <li>
          Each of the nine&nbsp;<code>3 x 3</code> sub-boxes of the grid must
          contain the digits&nbsp;<code>1-9</code>&nbsp;without repetition.
        </li>
      </ul>

      <p>
        <strong>Note:</strong>
      </p>

      <ul>
        <li>
          A Sudoku board (partially filled) could be valid but is not
          necessarily solvable.
        </li>
        <li>
          Only the filled cells need to be validated according to the
          mentioned&nbsp;rules.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png"
        style={{ height: 250, width: 250 }}
      />
      <pre>
        <strong>Input:</strong> board = <br />
        {`[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]`}{" "}
        <br />
        <strong>Output:</strong> true
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> board = <br />
        {`[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]`}{" "}
        <br />
        <strong>Output:</strong> false <br />
        <strong>Explanation:</strong> Same as Example 1, except with the{" "}
        <strong>5</strong> in the top left corner being modified to{" "}
        <strong>8</strong>. Since there are two 8's in the top left 3x3 sub-box,
        it is invalid.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>board.length == 9</code>
        </li>
        <li>
          <code>board[i].length == 9</code>
        </li>
        <li>
          <code>board[i][j]</code> is a digit <code>1-9</code> or{" "}
          <code>'.'</code>.
        </li>
      </ul>
    </div>
  ),
  37: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Write a program to solve a Sudoku puzzle by filling the empty cells.
      </p>

      <p>
        A sudoku solution must satisfy{" "}
        <strong>all of the following rules</strong>:
      </p>

      <ul>
        <li>
          Each of the digits <code>1-9</code> must occur exactly once in each
          row.
        </li>
        <li>
          Each of the digits <code>1-9</code> must occur exactly once in each
          column.
        </li>
        <li>
          Each of the digits <code>1-9</code> must occur exactly once in each of
          the 9 <code>3x3</code> sub-boxes of the grid.
        </li>
      </ul>

      <p>
        The <code>'.'</code> character indicates empty cells.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png"
        style={{ height: 250, width: 250 }}
        alt=""
      />
      <pre>
        <strong>Input:</strong> board =
        [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
        <br />
        <strong>Output:</strong>{" "}
        [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
        <br />
        <strong>Explanation:</strong>&nbsp;The input board is shown above and
        the only valid solution is shown below:
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png"
          style={{ height: 250, width: 250 }}
          alt=""
        />
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>board.length == 9</code>
        </li>
        <li>
          <code>board[i].length == 9</code>
        </li>
        <li>
          <code>board[i][j]</code> is a digit or <code>'.'</code>.
        </li>
        <li>
          It is <strong>guaranteed</strong> that the input board has only one
          solution.
        </li>
      </ul>
    </div>
  ),
  48: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given an <code>n x n</code> 2D <code>matrix</code> representing
        an image, rotate the image by <strong>90</strong> degrees (clockwise).
      </p>

      <p>
        You have to rotate the image{" "}
        <a
          href="https://en.wikipedia.org/wiki/In-place_algorithm"
          target="_blank"
          rel="noreferrer"
        >
          <strong>in-place</strong>
        </a>
        , which means you have to modify the input 2D matrix directly.{" "}
        <strong>DO NOT</strong> allocate another 2D matrix and do the rotation.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg"
        style={{ width: 500, height: 188 }}
      />
      <pre>
        <strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]] <br />
        <strong>Output:</strong> [[7,4,1],[8,5,2],[9,6,3]]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg"
        style={{ width: 500, height: 201 }}
      />
      <pre>
        <strong>Input:</strong> matrix =
        [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] <br />
        <strong>Output:</strong>{" "}
        [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == matrix.length == matrix[i].length</code>
        </li>
        <li>
          <code>1 &lt;= n &lt;= 20</code>
        </li>
        <li>
          <code>-1000 &lt;= matrix[i][j] &lt;= 1000</code>
        </li>
      </ul>
    </div>
  ),
  54: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an <code>m x n</code> <code>matrix</code>, return{" "}
        <em>all elements of the</em> <code>matrix</code>{" "}
        <em>in spiral order</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg"
        style={{ width: 242, height: 242 }}
      />
      <pre>
        <strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]] <br />
        <strong>Output:</strong> [1,2,3,6,9,8,7,4,5]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg"
        style={{ width: 322, height: 242 }}
      />
      <pre>
        <strong>Input:</strong> matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]{" "}
        <br />
        <strong>Output:</strong> [1,2,3,4,8,12,11,10,9,5,6,7]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>m == matrix.length</code>
        </li>
        <li>
          <code>n == matrix[i].length</code>
        </li>
        <li>
          <code>1 &lt;= m, n &lt;= 10</code>
        </li>
        <li>
          <code>-100 &lt;= matrix[i][j] &lt;= 100</code>
        </li>
      </ul>
    </div>
  ),
  59: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a positive integer <code>n</code>, generate an <code>n x n</code>{" "}
        <code>matrix</code> filled with elements from <code>1</code> to{" "}
        <code>
          n<sup>2</sup>
        </code>{" "}
        in spiral order.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/11/13/spiraln.jpg"
        style={{ width: 242, height: 242 }}
      />
      <pre>
        <strong>Input:</strong> n = 3 <br />
        <strong>Output:</strong> [[1,2,3],[8,9,4],[7,6,5]]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 1 <br />
        <strong>Output:</strong> [[1]]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= n &lt;= 20</code>
        </li>
      </ul>
    </div>
  ),
  3191: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a{" "}
        <span
          data-keyword="binary-array"
          class=" cursor-pointer relative text-dark-blue-s text-sm"
        >
          <div class="popover-wrapper inline-block" data-headlessui-state="">
            <div>
              <div
                aria-expanded="false"
                data-headlessui-state=""
                id="headlessui-popover-button-:r10:"
              >
                <div>binary array</div>
              </div>
            </div>
          </div>
        </span>{" "}
        <code>nums</code>.
      </p>

      <p>
        You can do the following operation on the array <strong>any</strong>{" "}
        number of times (possibly zero):
      </p>

      <ul>
        <li>
          Choose <strong>any</strong> 3 <strong>consecutive</strong> elements
          from the array and <strong>flip</strong> <strong>all</strong> of them.
        </li>
      </ul>

      <p>
        <strong>Flipping</strong> an element means changing its value from 0 to
        1, and from 1 to 0.
      </p>

      <p>
        Return the <strong>minimum</strong> number of operations required to
        make all elements in <code>nums</code> equal to 1. If it is impossible,
        return -1.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [0,1,1,1,0,0]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">3</span> <br />
        <strong>Explanation:</strong>
        <br />
        We can do the following operations:
        <br />
        <ul>
          <li>
            Choose the elements at indices 0, 1 and 2. The resulting array is{" "}
            <code>
              nums = [
              <u>
                <strong>1</strong>
              </u>
              ,
              <u>
                <strong>0</strong>
              </u>
              ,
              <u>
                <strong>0</strong>
              </u>
              ,1,0,0]
            </code>
            .
          </li>
          <li>
            Choose the elements at indices 1, 2 and 3. The resulting array is{" "}
            <code>
              nums = [1,
              <u>
                <strong>1</strong>
              </u>
              ,
              <u>
                <strong>1</strong>
              </u>
              ,
              <strong>
                <u>0</u>
              </strong>
              ,0,0]
            </code>
            .
          </li>
          <li>
            Choose the elements at indices 3, 4 and 5. The resulting array is{" "}
            <code>
              nums = [1,1,1,
              <strong>
                <u>1</u>
              </strong>
              ,
              <u>
                <strong>1</strong>
              </u>
              ,
              <u>
                <strong>1</strong>
              </u>
              ]
            </code>
            .
          </li>
        </ul>
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong> <span class="example-io">nums = [0,1,1,1]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">-1</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        It is impossible to make all elements equal to 1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            3 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= nums[i] &lt;= 1</code>
        </li>
      </ul>
    </div>
  ),
  167: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a <strong>1-indexed</strong> array of integers{" "}
        <code>numbers</code> that is already{" "}
        <strong>
          <em>sorted in non-decreasing order</em>
        </strong>
        , find two numbers such that they add up to a specific{" "}
        <code>target</code> number. Let these two numbers be{" "}
        <code>
          numbers[index<sub>1</sub>]
        </code>{" "}
        and{" "}
        <code>
          numbers[index<sub>2</sub>]
        </code>{" "}
        where{" "}
        <code>
          1 &lt;= index<sub>1</sub> &lt; index<sub>2</sub> &lt;= numbers.length
        </code>
        .
      </p>

      <p>
        Return<em> the indices of the two numbers, </em>
        <code>
          index<sub>1</sub>
        </code>
        <em> and </em>
        <code>
          index<sub>2</sub>
        </code>
        <em>
          , <strong>added by one</strong> as an integer array{" "}
        </em>
        <code>
          [index<sub>1</sub>, index<sub>2</sub>]
        </code>
        <em> of length 2.</em>
      </p>

      <p>
        The tests are generated such that there is{" "}
        <strong>exactly one solution</strong>. You <strong>may not</strong> use
        the same element twice.
      </p>

      <p>Your solution must use only constant extra space.</p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> numbers = [<u>2</u>,<u>7</u>,11,15], target = 9{" "}
        <br />
        <strong>Output:</strong> [1,2]
        <br />
        <strong>Explanation:</strong> The sum of 2 and 7 is 9. Therefore, index
        <sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> numbers = [<u>2</u>,3,<u>4</u>], target = 6
        <br />
        <strong>Output:</strong> [1,3]
        <br />
        <strong>Explanation:</strong> The sum of 2 and 4 is 6. Therefore index
        <sub>1</sub> = 1, index<sub>2</sub> = 3. We return [1, 3].
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> numbers = [<u>-1</u>,<u>0</u>], target = -1
        <br />
        <strong>Output:</strong> [1,2]
        <br />
        <strong>Explanation:</strong> The sum of -1 and 0 is -1. Therefore index
        <sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2].
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            2 &lt;= numbers.length &lt;= 3 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>-1000 &lt;= numbers[i] &lt;= 1000</code>
        </li>
        <li>
          <code>numbers</code> is sorted in{" "}
          <strong>non-decreasing order</strong>.
        </li>
        <li>
          <code>-1000 &lt;= target &lt;= 1000</code>
        </li>
        <li>
          The tests are generated such that there is{" "}
          <strong>exactly one solution</strong>.
        </li>
      </ul>
    </div>
  ),
  189: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code>, rotate the array to the right
        by <code>k</code> steps, where <code>k</code> is non-negative.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,4,5,6,7], k = 3 <br />
        <strong>Output:</strong> [5,6,7,1,2,3,4] <br />
        <strong>Explanation:</strong> <br />
        rotate 1 steps to the right: [7,1,2,3,4,5,6] <br />
        rotate 2 steps to the right: [6,7,1,2,3,4,5] <br />
        rotate 3 steps to the right: [5,6,7,1,2,3,4]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [-1,-100,3,99], k = 2 <br />
        <strong>Output:</strong> [3,99,-1,-100] <br />
        <strong>Explanation:</strong> <br />
        rotate 1 steps to the right: [99,-1,-100,3] <br />
        rotate 2 steps to the right: [3,99,-1,-100]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            -2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong>
      </p>

      <ul>
        <li>
          Try to come up with as many solutions as you can. There are at least{" "}
          <strong>three</strong> different ways to solve this problem.
        </li>
        <li>
          Could you do it in-place with <code>O(1)</code> extra space?
        </li>
      </ul>
    </div>
  ),
  202: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Write an algorithm to determine if a number <code>n</code> is happy.
      </p>

      <p>
        A <strong>happy number</strong> is a number defined by the following
        process:
      </p>

      <ul>
        <li>
          Starting with any positive integer, replace the number by the sum of
          the squares of its digits.
        </li>
        <li>
          Repeat the process until the number equals 1 (where it will stay), or
          it <strong>loops endlessly in a cycle</strong> which does not include
          1.
        </li>
        <li>
          Those numbers for which this process <strong>ends in 1</strong> are
          happy.
        </li>
      </ul>

      <p>
        Return <code>true</code> <em>if</em> <code>n</code>{" "}
        <em>is a happy number, and</em> <code>false</code> <em>if not</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 19 <br />
        <strong>Output:</strong> true <br />
        <strong>Explanation:</strong> <br />1<sup>2</sup> + 9<sup>2</sup> = 82{" "}
        <br />8<sup>2</sup> + 2<sup>2</sup> = 68 <br />6<sup>2</sup> + 8
        <sup>2</sup> = 100 <br />1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> =
        1
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 2 <br />
        <strong>Output:</strong> false
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= n &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
      </ul>
    </div>
  ),
  283: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code>, move all <code>0</code>'s to
        the end of it while maintaining the relative order of the non-zero
        elements.
      </p>
      <p>
        <strong>Note</strong> that you must do this in-place without making a
        copy of the array.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [0,1,0,3,12] <br />
        <strong>Output:</strong> [1,3,12,0,0]
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [0] <br />
        <strong>Output:</strong> [0]
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -2<sup>31</sup> &lt;= nums[i] &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
      </ul>
      <p>&nbsp;</p>
      <strong>Follow up:</strong> Could you minimize the total number of
      operations done?
    </div>
  ),
  287: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of integers <code>nums</code> containing&nbsp;
        <code>n + 1</code> integers where each integer is in the range{" "}
        <code>[1, n]</code> inclusive.
      </p>

      <p>
        There is only <strong>one repeated number</strong> in <code>nums</code>,
        return <em>this&nbsp;repeated&nbsp;number</em>.
      </p>

      <p>
        You must solve the problem <strong>without</strong> modifying the array{" "}
        <code>nums</code>&nbsp;and uses only constant extra space.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,4,2,2] <br />
        <strong>Output:</strong> 2
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,1,3,4,2] <br />
        <strong>Output:</strong> 3
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,3,3,3,3] <br />
        <strong>Output:</strong> 3
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= n &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>nums.length == n + 1</code>
        </li>
        <li>
          <code>1 &lt;= nums[i] &lt;= n</code>
        </li>
        <li>
          All the integers in <code>nums</code> appear only{" "}
          <strong>once</strong> except for{" "}
          <strong>precisely one integer</strong> which appears{" "}
          <strong>two or more</strong> times.
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <b>Follow up:</b>
      </p>

      <ul>
        <li>
          How can we prove that at least one duplicate number must exist in{" "}
          <code>nums</code>?
        </li>
        <li>Can you solve the problem in linear runtime complexity?</li>
      </ul>
    </div>
  ),
  344: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Write a function that reverses a string. The input string is given as an
        array of characters <code>s</code>.
      </p>

      <p>
        You must do this by modifying the input array{" "}
        <a
          href="https://en.wikipedia.org/wiki/In-place_algorithm"
          target="_blank"
          rel="noreferrer"
        >
          in-place
        </a>{" "}
        with <code>O(1)</code> extra memory.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> s = ["h","e","l","l","o"] <br />
        <strong>Output:</strong> ["o","l","l","e","h"]
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> s = ["H","a","n","n","a","h"] <br />
        <strong>Output:</strong> ["h","a","n","n","a","H"]
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s[i]</code> is a{" "}
          <a
            href="https://en.wikipedia.org/wiki/ASCII#Printable_characters"
            target="_blank"
            rel="noreferrer"
          >
            printable ascii character
          </a>
          .
        </li>
      </ul>
    </div>
  ),
  345: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a string <code>s</code>, reverse only all the vowels in the string
        and return it.
      </p>

      <p>
        The vowels are <code>'a'</code>, <code>'e'</code>, <code>'i'</code>,{" "}
        <code>'o'</code>, and <code>'u'</code>, and they can appear in both
        lower and upper cases, more than once.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> s = "hello" <br />
        <strong>Output:</strong> "holle"
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> s = "leetcode"
        <br />
        <strong>Output:</strong> "leotcede"
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= s.length &lt;= 3 * 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>s</code> consist of <strong>printable ASCII</strong> characters.
        </li>
      </ul>
    </div>
  ),
  349: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given two integer arrays <code>nums1</code> and <code>nums2</code>,
        return{" "}
        <em>
          an array of their{" "}
          <span
            data-keyword="array-intersection"
            class=" cursor-pointer relative text-dark-blue-s text-sm"
          >
            <div class="popover-wrapper inline-block" data-headlessui-state="">
              <div>
                <div
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:rt:"
                >
                  <div>intersection</div>
                </div>
              </div>
            </div>
          </span>
        </em>
        . Each element in the result must be <strong>unique</strong> and you may
        return the result in <strong>any order</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [1,2,2,1], nums2 = [2,2] <br />
        <strong>Output:</strong> [2]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [4,9,5], nums2 = [9,4,9,8,4]
        <br />
        <strong>Output:</strong> [9,4]
        <br />
        <strong>Explanation:</strong> [4,9] is also accepted.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code>
        </li>
        <li>
          <code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code>
        </li>
      </ul>
    </div>
  ),
  350: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given two integer arrays <code>nums1</code> and <code>nums2</code>,
        return <em>an array of their intersection</em>. Each element in the
        result must appear as many times as it shows in both arrays and you may
        return the result in <strong>any order</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [1,2,2,1], nums2 = [2,2] <br />
        <strong>Output:</strong> [2,2]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums1 = [4,9,5], nums2 = [9,4,9,8,4]
        <br />
        <strong>Output:</strong> [4,9]
        <br />
        <strong>Explanation:</strong> [9,4] is also accepted.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code>
        </li>
        <li>
          <code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong>
      </p>

      <ul>
        <li>
          What if the given array is already sorted? How would you optimize your
          algorithm?
        </li>
        <li>
          What if <code>nums1</code>'s size is small compared to{" "}
          <code>nums2</code>'s size? Which algorithm is better?
        </li>
        <li>
          What if elements of <code>nums2</code> are stored on disk, and the
          memory is limited such that you cannot load all elements into the
          memory at once?
        </li>
      </ul>
    </div>
  ),
  360: (
    <div class="markdown-body div-width">
      <p>
        Given a <b>sorted</b> array of integers <i>nums</i> and integer values{" "}
        <i>a</i>, <i>b</i> and
        <i>c</i>. Apply a quadratic function of the form f(<i>x</i>) = <i>ax</i>
        <sup>2</sup> +<i>bx</i> + <i>c</i> to each element <i>x</i> in the
        array.
      </p>

      <p>
        The returned array must be in <b>sorted order</b>.
      </p>

      <p>
        Expected time complexity:{" "}
        <b>
          O(<i>n</i>)
        </b>
      </p>

      <div>
        <p>
          <strong>Example 1:</strong>
        </p>

        <pre>
          <strong>Input: </strong>nums ={" "}
          <span id="example-input-1-1">[-4,-2,2,4]</span>, a ={" "}
          <span id="example-input-1-2">1</span>, b ={" "}
          <span id="example-input-1-3">3</span>, c ={" "}
          <span id="example-input-1-4">5</span> <br />
          <strong>Output: </strong>
          <span id="example-output-1">[3,9,15,33]</span>
        </pre>

        <div>
          <p>
            <strong>Example 2:</strong>
          </p>

          <pre>
            <strong>Input: </strong>nums ={" "}
            <span id="example-input-2-1">[-4,-2,2,4]</span>, a ={" "}
            <span id="example-input-2-2">-1</span>, b ={" "}
            <span id="example-input-2-3">3</span>, c ={" "}
            <span id="example-input-2-4">5</span>
            <br />
            <strong>Output: </strong>
            <span id="example-output-2">[-23,-5,1,7]</span>
          </pre>
        </div>
      </div>
    </div>
  ),
  457: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are playing a game involving a <strong>circular</strong> array of
        non-zero integers <code>nums</code>. Each <code>nums[i]</code> denotes
        the number of indices forward/backward you must move if you are located
        at index <code>i</code>:
      </p>

      <ul>
        <li>
          If <code>nums[i]</code> is positive, move <code>nums[i]</code> steps{" "}
          <strong>forward</strong>, and
        </li>
        <li>
          If <code>nums[i]</code> is negative, move <code>nums[i]</code> steps{" "}
          <strong>backward</strong>.
        </li>
      </ul>

      <p>
        Since the array is <strong>circular</strong>, you may assume that moving
        forward from the last element puts you on the first element, and moving
        backwards from the first element puts you on the last element.
      </p>

      <p>
        A <strong>cycle</strong> in the array consists of a sequence of indices{" "}
        <code>seq</code> of length <code>k</code> where:
      </p>

      <ul>
        <li>
          Following the movement rules above results in the repeating index
          sequence{" "}
          <code>
            seq[0] -&gt; seq[1] -&gt; ... -&gt; seq[k - 1] -&gt; seq[0] -&gt;
            ...
          </code>
        </li>
        <li>
          Every <code>nums[seq[j]]</code> is either{" "}
          <strong>all positive</strong> or <strong>all negative</strong>.
        </li>
        <li>
          <code>k &gt; 1</code>
        </li>
      </ul>

      <p>
        Return <code>true</code>
        <em>
          {" "}
          if there is a <strong>cycle</strong> in{" "}
        </em>
        <code>nums</code>
        <em>, or </em>
        <code>false</code>
        <em> otherwise</em>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2022/09/01/img1.jpg"
        style={{ width: 402, height: 289 }}
      />
      <pre>
        <strong>Input:</strong> nums = [2,-1,1,2,2] <br />
        <strong>Output:</strong> true <br />
        <strong>Explanation:</strong> The graph shows how the indices are
        connected. White nodes are jumping forward, while red is jumping
        backward. We can see the cycle 0 --&gt; 2 --&gt; 3 --&gt; 0 --&gt; ...,
        and all of its nodes are white (jumping in the same direction).
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2022/09/01/img2.jpg"
        style={{ width: 402, height: 289 }}
      />
      <pre>
        <strong>Input:</strong> nums = [-1,-2,-3,-4,-5,6] <br />
        <strong>Output:</strong> false <br />
        <strong>Explanation:</strong> The graph shows how the indices are
        connected. White nodes are jumping forward, while red is jumping
        backward. The only cycle is of size 1, so we return false.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2022/09/01/img3.jpg"
        style={{ width: 402, height: 289 }}
      />
      <pre>
        <strong>Input:</strong> nums = [1,-1,5,1,4] <br />
        <strong>Output:</strong> true <br />
        <strong>Explanation:</strong> The graph shows how the indices are
        connected. White nodes are jumping forward, while red is jumping
        backward. We can see the cycle 0 --&gt; 1 --&gt; 0 --&gt; ..., and while
        it is of size &gt; 1, it has a node jumping forward and a node jumping
        backward, so <strong>it is not a cycle</strong>. <br />
        We can see the cycle 3 --&gt; 4 --&gt; 3 --&gt; ..., and all of its
        nodes are white (jumping in the same direction). <br />
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 5000</code>
        </li>
        <li>
          <code>-1000 &lt;= nums[i] &lt;= 1000</code>
        </li>
        <li>
          <code>nums[i] != 0</code>
        </li>
      </ul>

      <p>&nbsp;</p>
      <p>
        <strong>Follow up:</strong> Could you solve it in <code>O(n)</code> time
        complexity and <code>O(1)</code> extra space complexity?
      </p>
    </div>
  ),
  532: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an array of integers <code>nums</code> and an integer{" "}
        <code>k</code>, return{" "}
        <em>
          the number of <b>unique</b> k-diff pairs in the array
        </em>
        .
      </p>

      <p>
        A <strong>k-diff</strong> pair is an integer pair{" "}
        <code>(nums[i], nums[j])</code>, where the following are true:
      </p>

      <ul>
        <li>
          <code>0 &lt;= i, j &lt; nums.length</code>
        </li>
        <li>
          <code>i != j</code>
        </li>
        <li>
          <code>|nums[i] - nums[j]| == k</code>
        </li>
      </ul>

      <p>
        <strong>Notice</strong> that <code>|val|</code> denotes the absolute
        value of <code>val</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,1,4,1,5], k = 2 <br />
        <strong>Output:</strong> 2<br />
        <strong>Explanation:</strong> There are two 2-diff pairs in the array,
        (1, 3) and (3, 5).
        <br />
        Although we have two 1s in the input, we should only return the number
        of <strong>unique</strong> pairs.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,4,5], k = 1<br />
        <strong>Output:</strong> 4<br />
        <strong>Explanation:</strong> There are four 1-diff pairs in the array,
        (1, 2), (2, 3), (3, 4) and (4, 5).
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,1,5,4], k = 0<br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> There is one 0-diff pair in the array, (1,
        1).
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>7</sup> &lt;= nums[i] &lt;= 10<sup>7</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= k &lt;= 10<sup>7</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  556: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a positive integer <code>n</code>, find{" "}
        <em>
          the smallest integer which has exactly the same digits existing in the
          integer
        </em>{" "}
        <code>n</code> <em>and is greater in value than</em> <code>n</code>. If
        no such positive integer exists, return <code>-1</code>.
      </p>

      <p>
        <strong>Note</strong> that the returned integer should fit in{" "}
        <strong>32-bit integer</strong>, if there is a valid answer but it does
        not fit in <strong>32-bit integer</strong>, return <code>-1</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> n = 12 <br />
        <strong>Output:</strong> 21
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> n = 21
        <br />
        <strong>Output:</strong> -1
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= n &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
      </ul>
    </div>
  ),
  581: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code>, you need to find one{" "}
        <b>continuous subarray</b> such that if you only sort this subarray in
        non-decreasing order, then the whole array will be sorted in
        non-decreasing order.
      </p>
      <p>
        Return <em>the shortest such subarray and output its length</em>.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [2,6,4,8,10,9,15] <br />
        <strong>Output:</strong> 5<br />
        <strong>Explanation:</strong> You need to sort [6, 4, 8, 10, 9] in
        ascending order to make the whole array sorted in ascending order.
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [1,2,3,4]
        <br />
        <strong>Output:</strong> 0
      </pre>
      <p>
        <strong class="example">Example 3:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [1]
        <br />
        <strong>Output:</strong> 0
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup>
          </code>
        </li>
      </ul>
      <p>&nbsp;</p>
      <strong>Follow up:</strong> Can you solve it in <code>O(n)</code> time
      complexity?
    </div>
  ),
  611: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code>, return{" "}
        <em>
          the number of triplets chosen from the array that can make triangles
          if we take them as side lengths of a triangle
        </em>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,2,3,4] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> Valid combinations are: <br />
        2,3,4 (using the first 2) <br />
        2,3,4 (using the second 2) <br />
        2,2,3
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [4,2,3,4] <br />
        <strong>Output:</strong> 4
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 1000</code>
        </li>
        <li>
          <code>0 &lt;= nums[i] &lt;= 1000</code>
        </li>
      </ul>
    </div>
  ),
  633: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a non-negative integer <code>c</code>, decide whether there're two
        integers <code>a</code> and <code>b</code> such that{" "}
        <code>
          a<sup>2</sup> + b<sup>2</sup> = c
        </code>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> c = 5 <br />
        <strong>Output:</strong> true
        <br />
        <strong>Explanation:</strong> 1 * 1 + 2 * 2 = 5
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> c = 3<br />
        <strong>Output:</strong> false
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            0 &lt;= c &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
      </ul>
    </div>
  ),
  647: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a string <code>s</code>, return{" "}
        <em>
          the number of <strong>palindromic substrings</strong> in it
        </em>
        .
      </p>

      <p>
        A string is a <strong>palindrome</strong> when it reads the same
        backward as forward.
      </p>

      <p>
        A <strong>substring</strong> is a contiguous sequence of characters
        within the string.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "abc" <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> Three palindromic strings: "a", "b", "c".
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = "aaa"
        <br />
        <strong>Output:</strong> 6<strong>Explanation:</strong> Six palindromic
        strings: "a", "a", "a", "aa", "aa", "aaa".
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= s.length &lt;= 1000</code>
        </li>
        <li>
          <code>s</code> consists of lowercase English letters.
        </li>
      </ul>
    </div>
  ),
  719: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        The <strong>distance of a pair</strong> of integers <code>a</code> and{" "}
        <code>b</code> is defined as the absolute difference between{" "}
        <code>a</code> and <code>b</code>.
      </p>

      <p>
        Given an integer array <code>nums</code> and an integer <code>k</code>,
        return <em>the</em>{" "}
        <code>
          k<sup>th</sup>
        </code>{" "}
        <em>
          smallest <strong>distance among all the pairs</strong>
        </em>{" "}
        <code>nums[i]</code> <em>and</em> <code>nums[j]</code> <em>where</em>{" "}
        <code>0 &lt;= i &lt; j &lt; nums.length</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,3,1], k = 1 <br />
        <strong>Output:</strong> 0<br />
        <strong>Explanation:</strong> Here are all the pairs:
        <br />
        (1,3) -&gt; 2<br />
        (1,1) -&gt; 0<br />
        (3,1) -&gt; 2<br />
        Then the 1<sup>st</sup> smallest distance pair is (1,1), and its
        distance is 0.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1], k = 2<br />
        <strong>Output:</strong> 0
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,6,1], k = 3<br />
        <strong>Output:</strong> 5
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>n == nums.length</code>
        </li>
        <li>
          <code>
            2 &lt;= n &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= nums[i] &lt;= 10<sup>6</sup>
          </code>
        </li>
        <li>
          <code>1 &lt;= k &lt;= n * (n - 1) / 2</code>
        </li>
      </ul>
    </div>
  ),
  786: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a sorted integer array <code>arr</code> containing{" "}
        <code>1</code> and <strong>prime</strong> numbers, where all the
        integers of <code>arr</code> are unique. You are also given an integer{" "}
        <code>k</code>.
      </p>
      <p>
        For every <code>i</code> and <code>j</code> where{" "}
        <code>0 &lt;= i &lt; j &lt; arr.length</code>, we consider the fraction{" "}
        <code>arr[i] / arr[j]</code>.
      </p>
      <p>
        Return <em>the</em>{" "}
        <code>
          k<sup>th</sup>
        </code>{" "}
        <em>smallest fraction considered</em>. Return your answer as an array of
        integers of size <code>2</code>, where <code>answer[0] == arr[i]</code>{" "}
        and <code>answer[1] == arr[j]</code>.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> arr = [1,2,3,5], k = 3 <br />
        <strong>Output:</strong> [2,5] <br />
        <strong>Explanation:</strong> The fractions to be considered in sorted
        order are: <br />
        1/5, 1/3, 2/5, 1/2, 3/5, and 2/3. <br />
        The third fraction is 2/5.
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> arr = [1,7], k = 1 <br />
        <strong>Output:</strong> [1,7]
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>2 &lt;= arr.length &lt;= 1000</code>
        </li>
        <li>
          <code>
            1 &lt;= arr[i] &lt;= 3 * 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>arr[0] == 1</code>
        </li>
        <li>
          <code>arr[i]</code> is a <strong>prime</strong> number for{" "}
          <code>i &gt; 0</code>.
        </li>
        <li>
          All the numbers of <code>arr</code> are <strong>unique</strong> and
          sorted in <strong>strictly increasing</strong> order.
        </li>
        <li>
          <code>1 &lt;= k &lt;= arr.length * (arr.length - 1) / 2</code>
        </li>
      </ul>
      <p>&nbsp;</p>
      <strong>Follow up:</strong> Can you solve the problem with better than{" "}
      <code>
        O(n<sup>2</sup>)
      </code>{" "}
      complexity?
    </div>
  ),
  923: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>arr</code>, and an integer{" "}
        <code>target</code>, return the number of tuples <code>i, j, k</code>{" "}
        such that <code>i &lt; j &lt; k</code> and{" "}
        <code>arr[i] + arr[j] + arr[k] == target</code>.
      </p>

      <p>
        As the answer can be very large, return it <strong>modulo</strong>{" "}
        <code>
          10<sup>9</sup> + 7
        </code>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [1,1,2,2,3,3,4,4,5,5], target = 8<br />
        <strong>Output:</strong> 20
        <br />
        <strong>Explanation: </strong>
        <br />
        Enumerating by the values (arr[i], arr[j], arr[k]):
        <br />
        (1, 2, 5) occurs 8 times;
        <br />
        (1, 3, 4) occurs 8 times;
        <br />
        (2, 2, 4) occurs 2 times;
        <br />
        (2, 3, 3) occurs 2 times.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [1,1,2,2,2,2], target = 5 <br />
        <strong>Output:</strong> 12
        <br />
        <strong>Explanation: </strong>
        <br />
        arr[i] = 1, arr[j] = arr[k] = 2 occurs 12 times:
        <br />
        We choose one 1 from [1,1] in 2 ways,
        <br />
        and two 2s from [2,2,2,2] in 6 ways.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [2,1,3], target = 6<br />
        <strong>Output:</strong> 1<br />
        <strong>Explanation:</strong> (1, 2, 3) occured one time in the array so
        we return 1.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>3 &lt;= arr.length &lt;= 3000</code>
        </li>
        <li>
          <code>0 &lt;= arr[i] &lt;= 100</code>
        </li>
        <li>
          <code>0 &lt;= target &lt;= 300</code>
        </li>
      </ul>
    </div>
  ),
  977: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>nums</code> sorted in{" "}
        <strong>non-decreasing</strong> order, return{" "}
        <em>
          an array of <strong>the squares of each number</strong> sorted in
          non-decreasing order
        </em>
        .
      </p>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [-4,-1,0,3,10] <br />
        <strong>Output:</strong> [0,1,9,16,100] <br />
        <strong>Explanation:</strong> After squaring, the array becomes
        [16,1,0,9,100]. <br />
        After sorting, it becomes [0,1,9,16,100].
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums = [-7,-3,2,3,11] <br />
        <strong>Output:</strong> [4,9,9,49,121]
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code>
            <span>1 &lt;= nums.length &lt;= </span>10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>
            -10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>nums</code> is sorted in <strong>non-decreasing</strong> order.
        </li>
      </ul>
      <p>&nbsp;</p>
      <strong>Follow up:</strong> Squaring each element and sorting the new
      array is very trivial, could you find an <code>O(n)</code> solution using
      a different approach?
    </div>
  ),
  1089: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given a fixed-length integer array <code>arr</code>, duplicate each
        occurrence of zero, shifting the remaining elements to the right.
      </p>

      <p>
        <strong>Note</strong> that elements beyond the length of the original
        array are not written. Do the above modifications to the input array in
        place and do not return anything.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [1,0,2,3,0,4,5,0] <br />
        <strong>Output:</strong> [1,0,0,2,3,0,0,4]
        <br />
        <strong>Explanation:</strong> After calling your function, the input
        array is modified to: [1,0,0,2,3,0,0,4]
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> arr = [1,2,3]
        <br />
        <strong>Output:</strong> [1,2,3]
        <br />
        <strong>Explanation:</strong> After calling your function, the input
        array is modified to: [1,2,3]
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= arr.length &lt;= 10<sup>4</sup>
          </code>
        </li>
        <li>
          <code>0 &lt;= arr[i] &lt;= 9</code>
        </li>
      </ul>
    </div>
  ),
  1099: (
    <div class="markdown-body div-width">
      <p>
        Given an array <code>A</code> of integers and&nbsp;integer{" "}
        <code>K</code>, return the maximum
        <code>S</code> such that there exists <code>i &lt; j</code> with{" "}
        <code>A[i] + A[j] = S</code> and <code>S &lt; K</code>. If no{" "}
        <code>i, j</code> exist satisfying this equation, return -1.
      </p>

      <p>&nbsp;</p>

      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input: </strong>A ={" "}
        <span id="example-input-1-1">[34,23,1,24,75,33,54,8]</span>, K ={" "}
        <span id="example-input-1-2">60</span>
        <br />
        <strong>Output: </strong>
        <span id="example-output-1">58</span> <br />
        <strong>Explanation: </strong> <br />
        We can use 34 and 24 to sum 58 which is less than 60.
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>

      <pre>
        <strong>Input: </strong>A ={" "}
        <span id="example-input-2-1">[10,20,30]</span>, K ={" "}
        <span id="example-input-2-2">15</span> <br />
        <strong>Output: </strong>
        <span id="example-output-2">-1</span> <br />
        <strong>Explanation: </strong> <br />
        In this case it's not possible to get a pair sum less that 15.
      </pre>

      <p>&nbsp;</p>

      <p>
        <strong>Note:</strong>
      </p>

      <ol>
        <li>
          <code>1 &lt;= A.length &lt;= 100</code>
        </li>
        <li>
          <code>1 &lt;= A[i] &lt;= 1000</code>
        </li>
        <li>
          <code>1 &lt;= K &lt;= 2000</code>
        </li>
      </ol>
    </div>
  ),
  1712: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        A split of an integer array is <strong>good</strong> if:
      </p>

      <ul>
        <li>
          The array is split into three <strong>non-empty</strong> contiguous
          subarrays - named <code>left</code>, <code>mid</code>,{" "}
          <code>right</code> respectively from left to right.
        </li>
        <li>
          The sum of the elements in <code>left</code> is less than or equal to
          the sum of the elements in <code>mid</code>, and the sum of the
          elements in <code>mid</code> is less than or equal to the sum of the
          elements in <code>right</code>.
        </li>
      </ul>

      <p>
        Given <code>nums</code>, an array of <strong>non-negative</strong>{" "}
        integers, return{" "}
        <em>
          the number of <strong>good</strong> ways to split
        </em>{" "}
        <code>nums</code>. As the number may be too large, return it{" "}
        <strong>modulo</strong>{" "}
        <code>
          10<sup>9 </sup>+ 7
        </code>
        .
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,1,1] <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> The only good way to split nums is [1] [1]
        [1].
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,2,2,5,0] <br />
        <strong>Output:</strong> 3 <br />
        <strong>Explanation:</strong> There are three good ways of splitting
        nums: <br />
        [1] [2] [2,2,5,0] <br />
        [1] [2,2] [2,5,0] <br />
        [1,2] [2,2] [5,0]
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [3,2,1] <br />
        <strong>Output:</strong> 0 <br />
        <strong>Explanation:</strong> There is no good way to split nums.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            3 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= nums[i] &lt;= 10<sup>4</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  1885: (
    <article role="main" class="blog-post">
      <p>
        Given two integer arrays{" "}
        <code class="language-plaintext highlighter-rouge">nums1</code> and{" "}
        <code class="language-plaintext highlighter-rouge">nums2</code> of
        length <code class="language-plaintext highlighter-rouge">n</code>,
        count the pairs of indices{" "}
        <code class="language-plaintext highlighter-rouge">(i, j)</code> such
        that <code class="language-plaintext highlighter-rouge">i &lt; j</code>{" "}
        and{" "}
        <code class="language-plaintext highlighter-rouge">
          nums1[i] + nums1[j] &gt; nums2[i] + nums2[j]
        </code>
        .
      </p>
      <p>
        Return{" "}
        <em>
          the <strong>number of pairs</strong> satisfying the condition
        </em>
        .
      </p>

      <strong>Example 1:</strong>
      <pre>
        <strong>Input:</strong> nums1 = [2,1,2,1], nums2 = [1,2,1,2] <br />
        <strong>Output:</strong> 1 <br />
        <strong>Explanation:</strong> The pairs satisfying the condition are:
        <ul>
          <li>(0, 2) where 2 + 2 &gt; 1 + 1.</li>
        </ul>
      </pre>

      <p>
        <strong>Example 2:</strong>
      </p>
      <pre>
        <strong>Input:</strong> nums1 = [1,10,6,2], nums2 = [1,4,1,5] <br />
        <strong>Output:</strong> 5 <br />
        <strong>Explanation:</strong> The pairs satisfying the condition are:
        <ul>
          <li>(0, 1) where 1 + 10 &gt; 1 + 4.</li>
          <li>(0, 2) where 1 + 6 &gt; 1 + 1.</li>
          <li>(1, 2) where 10 + 6 &gt; 4 + 1.</li>
          <li>(1, 3) where 10 + 2 &gt; 4 + 5.</li>
          <li>(2, 3) where 6 + 2 &gt; 1 + 5.</li>
        </ul>
      </pre>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          <code class="language-plaintext highlighter-rouge">
            n == nums1.length == nums2.length
          </code>
        </li>
        <li>
          <code class="language-plaintext highlighter-rouge">
            1 &lt;= n &lt;= 10^5
          </code>
        </li>
        <li>
          <code class="language-plaintext highlighter-rouge">
            1 &lt;= nums1[i], nums2[i] &lt;= 10^5
          </code>
        </li>
      </ul>
    </article>
  ),
  2856: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer array <code>num</code> sorted in non-decreasing order.
      </p>

      <p>You can perform the following operation any number of times:</p>

      <ul>
        <li>
          Choose <strong>two</strong> indices, <code>i</code> and <code>j</code>
          , where <code>nums[i] &lt; nums[j]</code>.
        </li>
        <li>
          Then, remove the elements at indices <code>i</code> and <code>j</code>{" "}
          from <code>nums</code>. The remaining elements retain their original
          order, and the array is re-indexed.
        </li>
      </ul>

      <p>
        Return the <strong>minimum</strong> length of <code>nums</code> after
        applying the operation zero or more times.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong> <span class="example-io">nums = [1,2,3,4]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">0</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        <p>
          <img
            alt=""
            src="https://assets.leetcode.com/uploads/2024/05/18/tcase1.gif"
            style={{ width: 210, height: 70 }}
          />
        </p>
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [1,1,2,2,3,3]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">0</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        <p>
          <img
            alt=""
            src="https://assets.leetcode.com/uploads/2024/05/19/tcase2.gif"
            style={{ width: 210, height: 70 }}
          />
        </p>
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [1000000000,1000000000]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">2</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        <p>Since both numbers are equal, they cannot be removed.</p>
      </pre>

      <p>
        <strong class="example">Example 4:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [2,3,4,4,4]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">1</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        <p>
          <img
            alt=""
            src="https://assets.leetcode.com/uploads/2024/05/19/tcase3.gif"
            style={{ width: 210, height: 70 }}
          />
        </p>
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>nums</code> is sorted in <strong>non-decreasing</strong> order.
        </li>
      </ul>
    </div>
  ),
  3194: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You have an array of floating point numbers <code>averages</code> which
        is initially empty. You are given an array <code>nums</code> of{" "}
        <code>n</code> integers where <code>n</code> is even.
      </p>

      <p>
        You repeat the following procedure <code>n / 2</code> times:
      </p>

      <ul>
        <li>
          Remove the <strong>smallest</strong> element, <code>minElement</code>,
          and the <strong>largest</strong> element <code>maxElement</code>
          ,&nbsp;from <code>nums</code>.
        </li>
        <li>
          Add <code>(minElement + maxElement) / 2</code> to{" "}
          <code>averages</code>.
        </li>
      </ul>

      <p>
        Return the <strong>minimum</strong> element in <code>averages</code>.
      </p>

      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [7,8,3,4,15,13,4,1]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">5.5</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        <table>
          <tbody>
            <tr>
              <th>step</th>
              <th>nums</th>
              <th>averages</th>
            </tr>
            <tr>
              <td>0</td>
              <td>[7,8,3,4,15,13,4,1]</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>1</td>
              <td>[7,8,3,4,13,4]</td>
              <td>[8]</td>
            </tr>
            <tr>
              <td>2</td>
              <td>[7,8,4,4]</td>
              <td>[8,8]</td>
            </tr>
            <tr>
              <td>3</td>
              <td>[7,4]</td>
              <td>[8,8,6]</td>
            </tr>
            <tr>
              <td>4</td>
              <td>[]</td>
              <td>[8,8,6,5.5]</td>
            </tr>
          </tbody>
        </table>
        The smallest element of averages, 5.5, is returned.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [1,9,8,3,10,5]</span>
        <br />
        <strong>Output:</strong> <span class="example-io">5.5</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        <table>
          <tbody>
            <tr>
              <th>step</th>
              <th>nums</th>
              <th>averages</th>
            </tr>
            <tr>
              <td>0</td>
              <td>
                <span class="example-io">[1,9,8,3,10,5]</span>
              </td>
              <td>[]</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span class="example-io">[9,8,3,5]</span>
              </td>
              <td>[5.5]</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span class="example-io">[8,5]</span>
              </td>
              <td>[5.5,6]</td>
            </tr>
            <tr>
              <td>3</td>
              <td>[]</td>
              <td>[5.5,6,6.5]</td>
            </tr>
          </tbody>
        </table>
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre class="example-block">
        <strong>Input:</strong>{" "}
        <span class="example-io">nums = [1,2,3,7,8,9]</span> <br />
        <strong>Output:</strong> <span class="example-io">5.0</span>
        <br />
        <strong>Explanation:</strong>
        <br />
        <table>
          <tbody>
            <tr>
              <th>step</th>
              <th>nums</th>
              <th>averages</th>
            </tr>
            <tr>
              <td>0</td>
              <td>
                <span class="example-io">[1,2,3,7,8,9]</span>
              </td>
              <td>[]</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span class="example-io">[2,3,7,8]</span>
              </td>
              <td>[5]</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <span class="example-io">[3,7]</span>
              </td>
              <td>[5,5]</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <span class="example-io">[]</span>
              </td>
              <td>[5,5,5]</td>
            </tr>
          </tbody>
        </table>
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>2 &lt;= n == nums.length &lt;= 50</code>
        </li>
        <li>
          <code>n</code> is even.
        </li>
        <li>
          <code>1 &lt;= nums[i] &lt;= 50</code>
        </li>
      </ul>
    </div>
  ),
  2903: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code> having length <code>n</code>, an integer{" "}
        <code>indexDifference</code>, and an integer{" "}
        <code>valueDifference</code>.
      </p>

      <p>
        Your task is to find <strong>two</strong> indices <code>i</code> and{" "}
        <code>j</code>, both in the range <code>[0, n - 1]</code>, that satisfy
        the following conditions:
      </p>

      <ul>
        <li>
          <code>abs(i - j) &gt;= indexDifference</code>, and
        </li>
        <li>
          <code>abs(nums[i] - nums[j]) &gt;= valueDifference</code>
        </li>
      </ul>

      <p>
        Return <em>an integer array</em> <code>answer</code>, <em>where</em>{" "}
        <code>answer = [i, j]</code> <em>if there are two such indices</em>,{" "}
        <em>and</em> <code>answer = [-1, -1]</code> <em>otherwise</em>. If there
        are multiple choices for the two indices, return <em>any of them</em>.
      </p>

      <p>
        <strong>Note:</strong> <code>i</code> and <code>j</code> may be{" "}
        <strong>equal</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,1,4,1], indexDifference = 2,
        valueDifference = 4<br />
        <strong>Output:</strong> [0,3]
        <br />
        <strong>Explanation:</strong> In this example, i = 0 and j = 3 can be
        selected.
        <br />
        abs(0 - 3) &gt;= 2 and abs(nums[0] - nums[3]) &gt;= 4.
        <br />
        Hence, a valid answer is [0,3].
        <br />
        [3,0] is also a valid answer.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,1], indexDifference = 0,
        valueDifference = 0 <br />
        <strong>Output:</strong> [0,0]
        <br />
        <strong>Explanation:</strong> In this example, i = 0 and j = 0 can be
        selected.
        <br />
        abs(0 - 0) &gt;= 0 and abs(nums[0] - nums[0]) &gt;= 0.
        <br />
        Hence, a valid answer is [0,0].
        <br />
        Other valid answers are [0,1], [1,0], and [1,1].
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3], indexDifference = 2,
        valueDifference = 4<br />
        <strong>Output:</strong> [-1,-1]
        <br />
        <strong>Explanation:</strong> In this example, it can be shown that it
        is impossible to find two indices that satisfy both conditions.
        <br />
        Hence, [-1,-1] is returned.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= n == nums.length &lt;= 100</code>
        </li>
        <li>
          <code>0 &lt;= nums[i] &lt;= 50</code>
        </li>
        <li>
          <code>0 &lt;= indexDifference &lt;= 100</code>
        </li>
        <li>
          <code>0 &lt;= valueDifference &lt;= 50</code>
        </li>
      </ul>
    </div>
  ),
  2905: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> integer array{" "}
        <code>nums</code> having length <code>n</code>, an integer{" "}
        <code>indexDifference</code>, and an integer{" "}
        <code>valueDifference</code>.
      </p>

      <p>
        Your task is to find <strong>two</strong> indices <code>i</code> and{" "}
        <code>j</code>, both in the range <code>[0, n - 1]</code>, that satisfy
        the following conditions:
      </p>

      <ul>
        <li>
          <code>abs(i - j) &gt;= indexDifference</code>, and
        </li>
        <li>
          <code>abs(nums[i] - nums[j]) &gt;= valueDifference</code>
        </li>
      </ul>

      <p>
        Return <em>an integer array</em> <code>answer</code>, <em>where</em>{" "}
        <code>answer = [i, j]</code> <em>if there are two such indices</em>,{" "}
        <em>and</em> <code>answer = [-1, -1]</code> <em>otherwise</em>. If there
        are multiple choices for the two indices, return <em>any of them</em>.
      </p>

      <p>
        <strong>Note:</strong> <code>i</code> and <code>j</code> may be{" "}
        <strong>equal</strong>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [5,1,4,1], indexDifference = 2,
        valueDifference = 4<br />
        <strong>Output:</strong> [0,3]
        <br />
        <strong>Explanation:</strong> In this example, i = 0 and j = 3 can be
        selected.
        <br />
        abs(0 - 3) &gt;= 2 and abs(nums[0] - nums[3]) &gt;= 4.
        <br />
        Hence, a valid answer is [0,3].
        <br />
        [3,0] is also a valid answer.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [2,1], indexDifference = 0,
        valueDifference = 0<br />
        <strong>Output:</strong> [0,0]
        <br />
        <strong>Explanation:</strong> In this example, i = 0 and j = 0 can be
        selected.
        <br />
        abs(0 - 0) &gt;= 0 and abs(nums[0] - nums[0]) &gt;= 0.
        <br />
        Hence, a valid answer is [0,0].
        <br />
        Other valid answers are [0,1], [1,0], and [1,1].
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3], indexDifference = 2,
        valueDifference = 4<br />
        <strong>Output:</strong> [-1,-1]
        <br />
        <strong>Explanation:</strong> In this example, it can be shown that it
        is impossible to find two indices that satisfy both conditions.
        <br />
        Hence, [-1,-1] is returned.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= n == nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= indexDifference &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            0 &lt;= valueDifference &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  2970: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> array of{" "}
        <strong>positive</strong> integers <code>nums</code>.
      </p>

      <p>
        A subarray of <code>nums</code> is called <strong>incremovable</strong>{" "}
        if <code>nums</code> becomes <strong>strictly increasing</strong> on
        removing the subarray. For example, the subarray <code>[3, 4]</code> is
        an incremovable subarray of <code>[5, 3, 4, 6, 7]</code> because
        removing this subarray changes the array <code>[5, 3, 4, 6, 7]</code> to{" "}
        <code>[5, 6, 7]</code> which is strictly increasing.
      </p>

      <p>
        Return{" "}
        <em>
          the total number of <strong>incremovable</strong> subarrays of
        </em>{" "}
        <code>nums</code>.
      </p>

      <p>
        <strong>Note</strong> that an empty array is considered strictly
        increasing.
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous non-empty sequence of
        elements within an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,4]
        <br />
        <strong>Output:</strong> 10
        <br />
        <strong>Explanation:</strong> The 10 incremovable subarrays are: [1],
        [2], [3], [4], [1,2], [2,3], [3,4], [1,2,3], [2,3,4], and [1,2,3,4],
        because on removing any one of these subarrays nums becomes strictly
        increasing. Note that you cannot select an empty subarray.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [6,5,7,8]
        <br />
        <strong>Output:</strong> 7<br />
        <strong>Explanation:</strong> The 7 incremovable subarrays are: [5],
        [6], [5,7], [6,5], [5,7,8], [6,5,7] and [6,5,7,8].
        <br />
        It can be shown that there are only 7 incremovable subarrays in nums.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [8,7,6,6]
        <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The 3 incremovable subarrays are: [8,7,6],
        [7,6,6], and [8,7,6,6]. Note that [8,7] is not an incremovable subarray
        because after removing [8,7] nums becomes [6,6], which is sorted in
        ascending order but not strictly increasing.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= nums.length &lt;= 50</code>
        </li>
        <li>
          <code>1 &lt;= nums[i] &lt;= 50</code>
        </li>
      </ul>
    </div>
  ),
  2972: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        You are given a <strong>0-indexed</strong> array of{" "}
        <strong>positive</strong> integers <code>nums</code>.
      </p>

      <p>
        A subarray of <code>nums</code> is called <strong>incremovable</strong>{" "}
        if <code>nums</code> becomes <strong>strictly increasing</strong> on
        removing the subarray. For example, the subarray <code>[3, 4]</code> is
        an incremovable subarray of <code>[5, 3, 4, 6, 7]</code> because
        removing this subarray changes the array <code>[5, 3, 4, 6, 7]</code> to{" "}
        <code>[5, 6, 7]</code> which is strictly increasing.
      </p>

      <p>
        Return{" "}
        <em>
          the total number of <strong>incremovable</strong> subarrays of
        </em>{" "}
        <code>nums</code>.
      </p>

      <p>
        <strong>Note</strong> that an empty array is considered strictly
        increasing.
      </p>

      <p>
        A <strong>subarray</strong> is a contiguous non-empty sequence of
        elements within an array.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [1,2,3,4]
        <br />
        <strong>Output:</strong> 10
        <br />
        <strong>Explanation:</strong> The 10 incremovable subarrays are: [1],
        [2], [3], [4], [1,2], [2,3], [3,4], [1,2,3], [2,3,4], and [1,2,3,4],
        because on removing any one of these subarrays nums becomes strictly
        increasing. Note that you cannot select an empty subarray.
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [6,5,7,8] <br />
        <strong>Output:</strong> 7<br />
        <strong>Explanation:</strong> The 7 incremovable subarrays are: [5],
        [6], [5,7], [6,5], [5,7,8], [6,5,7] and [6,5,7,8].
        <br />
        It can be shown that there are only 7 incremovable subarrays in nums.
      </pre>

      <p>
        <strong class="example">Example 3:</strong>
      </p>

      <pre>
        <strong>Input:</strong> nums = [8,7,6,6]
        <br />
        <strong>Output:</strong> 3<br />
        <strong>Explanation:</strong> The 3 incremovable subarrays are: [8,7,6],
        [7,6,6], and [8,7,6,6]. Note that [8,7] is not an incremovable subarray
        because after removing [8,7] nums becomes [6,6], which is sorted in
        ascending order but not strictly increasing.
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>
            1 &lt;= nums.length &lt;= 10<sup>5</sup>
          </code>
        </li>
        <li>
          <code>
            1 &lt;= nums[i] &lt;= 10<sup>9</sup>
          </code>
        </li>
      </ul>
    </div>
  ),
  96: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given an integer <code>n</code>, return{" "}
        <em>
          the number of structurally unique <strong>BST'</strong>s (binary
          search trees) which has exactly{" "}
        </em>
        <code>n</code>
        <em> nodes of unique values from</em> <code>1</code> <em>to</em>{" "}
        <code>n</code>.
      </p>

      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg"
        style={{ width: 600, height: 148 }}
      />
      <pre>
        <strong>Input:</strong> n = 3<br />
        <strong>Output:</strong> 5
      </pre>

      <p>
        <strong class="example">Example 2:</strong>
      </p>

      <pre>
        <strong>Input:</strong> n = 1 <br />
        <strong>Output:</strong> 1
      </pre>

      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>

      <ul>
        <li>
          <code>1 &lt;= n &lt;= 19</code>
        </li>
      </ul>
    </div>
  ),
  98: (
    <div class="elfjS" data-track-load="description_content">
      <p>
        Given the <code>root</code> of a binary tree,{" "}
        <em>determine if it is a valid binary search tree (BST)</em>.
      </p>
      <p>
        A <strong>valid BST</strong> is defined as follows:
      </p>
      <ul>
        <li>
          The left{" "}
          <span
            data-keyword="subtree"
            class=" cursor-pointer relative text-dark-blue-s text-sm"
          >
            <div class="popover-wrapper inline-block" data-headlessui-state="">
              <div>
                <div
                  aria-expanded="false"
                  data-headlessui-state=""
                  id="headlessui-popover-button-:r5o:"
                >
                  <div>subtree</div>
                </div>
              </div>
            </div>
          </span>{" "}
          of a node contains only nodes with keys <strong>less than</strong> the
          node's key.
        </li>
        <li>
          The right subtree of a node contains only nodes with keys{" "}
          <strong>greater than</strong> the node's key.
        </li>
        <li>
          Both the left and right subtrees must also be binary search trees.
        </li>
      </ul>
      <p>&nbsp;</p>
      <p>
        <strong class="example">Example 1:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg"
        style={{ width: 302, height: 182 }}
      />{" "}
      <br />
      <pre>
        <strong>Input:</strong> root = [2,1,3]
        <br />
        <strong>Output:</strong> true
      </pre>
      <p>
        <strong class="example">Example 2:</strong>
      </p>
      <img
        alt=""
        src="https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg"
        style={{ width: 422, height: 292 }}
      />{" "}
      <br />
      <pre>
        <strong>Input:</strong> root = [5,1,4,null,null,3,6]
        <br />
        <strong>Output:</strong> false
        <br />
        <strong>Explanation:</strong> The root node's value is 5 but its right
        child's value is 4.
      </pre>
      <p>&nbsp;</p>
      <p>
        <strong>Constraints:</strong>
      </p>
      <ul>
        <li>
          The number of nodes in the tree is in the range{" "}
          <code>
            [1, 10<sup>4</sup>]
          </code>
          .
        </li>
        <li>
          <code>
            -2<sup>31</sup> &lt;= Node.val &lt;= 2<sup>31</sup> - 1
          </code>
        </li>
      </ul>
    </div>
  ),
};

export default QUESTIONS;
