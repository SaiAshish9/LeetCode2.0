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

      <ol>
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
      </ol>

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
        {" "}
        1---2---3---4---5---6--NULL | 7---8---9---10--NULL | 11--12--NULL
      </pre>
      <p>The serialization of each level is as follows:</p>
      <pre>[1,2,3,4,5,6,null] [7,8,9,10,null] [11,12,null]</pre>
      <p>
        To serialize all levels together, we will add nulls in each level to
        signify no node connects to the upper node of the previous level. The
        serialization becomes:
      </p>
      <pre>
        [1, 2, 3, 4, 5, 6, null] | [null, null, 7, 8, 9, 10, null] | [ null, 11,
        12, null]
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
};

export default QUESTIONS;
