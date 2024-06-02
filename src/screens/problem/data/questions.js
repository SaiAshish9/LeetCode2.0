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
};

export default QUESTIONS;
