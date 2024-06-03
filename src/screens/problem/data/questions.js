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
        <strong>Output</strong>
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
  382: (
    <>
      <h1>Steps:</h1>
      <ol>
        <li>
          <strong>Initialize the reservoir:</strong> This problem requires
          selecting a random node from a linked list, which can be done using
          reservoir sampling with a reservoir size of 1.
        </li>
        <li>
          <strong>Traverse the linked list:</strong> As we traverse the linked
          list, we maintain a count of the nodes we have seen so far.
        </li>
      </ol>

      <h2>Explanation:</h2>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <strong>head:</strong> The head of the linked list.
            </li>
            <li>
              <strong>rand:</strong> An instance of <code>Random</code> used to
              generate random numbers.
            </li>
          </ul>
        </li>
        <li>
          <strong>getRandom() Method:</strong>
          <ol>
            <li>
              We initialize <code>current</code> to point to the head of the
              list and <code>reservoir</code> to store the value of the randomly
              selected node.
            </li>
            <li>
              <code>count</code> keeps track of the number of nodes visited so
              far.
            </li>
            <li>
              As we traverse the linked list, for each node:
              <ol>
                <li>
                  Generate a random number between 0 and <code>count-1</code>.
                </li>
                <li>
                  If this number is 0, we update <code>reservoir</code> with the
                  current node's value. This ensures that each node has an equal
                  probability of being selected.
                </li>
              </ol>
            </li>
          </ol>
        </li>
      </ul>

      <h2>Apply Reservoir Sampling:</h2>
      <ol>
        <li>
          For each node, we decide whether to include it in the reservoir based
          on a probability that ensures each node has an equal chance of being
          selected.
        </li>
      </ol>
    </>
  ),
};

export default QUESTIONS;
