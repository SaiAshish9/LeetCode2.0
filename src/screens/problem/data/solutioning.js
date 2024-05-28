import { LeftContentDescription } from "../styles";

const SOLUTIONING = {
  1192: (
    <LeftContentDescription desc>
      <h2>Step-by-Step Explanation:</h2>
      <ol>
        <li>
          <strong>Class Initialization:</strong>
          <p>
            a. Define the class <code>Solution</code> with necessary member
            variables:
          </p>
          <ul>
            <li>
              <code>graph</code>: Adjacency list representation of the graph.
            </li>
            <li>
              <code>low</code>: Array to keep track of the lowest discovery time
              reachable from each vertex.
            </li>
            <li>
              <code>disc</code>: Array to store the discovery times of each
              vertex.
            </li>
            <li>
              The <code>discovery time of a vertex</code> is the timestamp when
              the DFS algorithm first visits the vertex. This timestamp is
              unique for each vertex and helps in tracking the order in which
              vertices are explored.
            </li>
            <li>
              <code>time</code>: An integer to keep track of the discovery time
              during DFS traversal.
            </li>
            <li>
              <code>result</code>: List to store the critical connections.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Significance in <code>Tarjan's</code> Algorithm
          </strong>
        </li>
        <p>
          a. In <code>Tarjan's</code> Algorithm, which is used to find strongly
          connected components (SCCs) or bridges (critical connections) in a
          graph, discovery time plays a crucial role:
        </p>
        <ul>
          <li>
            <strong>Low Link Value:</strong>
            <p>
              The discovery time is used along with another concept called the
              "low link value," which helps in determining the SCCs or bridges.
              The low link value of a vertex is the smallest discovery time
              reachable from that vertex, including itself and its descendants
              in the DFS tree.
            </p>
          </li>
          <li>
            <strong>Bridge Detection:</strong>
            <p>
              In the context of finding critical connections (bridges), if the
              low link value of a vertex v is greater than the discovery time of
              its parent vertex u (in the DFS tree), then the edge (u, v) is a
              bridge. This is because there is no alternative way to reach
              vertex v or its descendants from vertex u or any of its ancestors,
              other than through the edge (u, v).
            </p>
          </li>
        </ul>
        <li>
          <strong>
            Method <code>criticalConnections</code>:
          </strong>
          <p>
            a. Initialize <code>graph</code>, <code>low</code>,{" "}
            <code>disc</code>, <code>result</code>, and <code>time</code>.
          </p>
          <p>b. Create an empty adjacency list for each vertex in the graph.</p>
          <p>
            c. Build the graph using the given <code>connections</code>.
          </p>
        </li>
        <li>
          <strong>Build the Graph:</strong>
          <p>
            a. Iterate over each connection in <code>connections</code>.
          </p>
          <p>
            b. Add each connection to the adjacency list of both vertices
            involved (since the graph is undirected).
          </p>
        </li>
        <li>
          <strong>Start DFS Traversal:</strong>
          <p>
            a. Call the <code>dfs</code> method starting from vertex 0 with
            parent as -1 (indicating no parent).
          </p>
        </li>
        <li>
          <strong>
            Depth-First Search (DFS) Method <code>dfs</code>:
          </strong>
          <p>
            a. Set the discovery time and low value of vertex <code>u</code> to
            the current time.
          </p>
          <p>
            b. Increment the <code>time</code>.
          </p>
          <p>
            c. Traverse all the adjacent vertices (<code>v</code>) of vertex{" "}
            <code>u</code>.
          </p>
          <ul>
            <li>Skip the parent vertex to avoid backtracking.</li>
            <li>
              If vertex <code>v</code> is not visited:
              <ul>
                <li>
                  Recursively call <code>dfs</code> for vertex <code>v</code>{" "}
                  with <code>u</code> as its parent.
                </li>
                <li>
                  After returning from the DFS call, update the low value of{" "}
                  <code>u</code> based on the low value of <code>v</code>.
                </li>
                <li>
                  If the condition <code>low[v] {">"} disc[u]</code> is met, it
                  means that removing the edge (<code>u, v</code>) will increase
                  the number of connected components, hence it is a critical
                  connection.
                </li>
              </ul>
            </li>
            <li>
              If vertex <code>v</code> is already visited, update the low value
              of <code>u</code> considering the discovery time of <code>v</code>
              .
            </li>
          </ul>
        </li>
        <li>
          <strong>Return the Result:</strong>
          <p>
            a. After completing the DFS traversal, return the{" "}
            <code>result</code> list containing all critical connections.
          </p>
        </li>
      </ol>
    </LeftContentDescription>
  ),
  470: (
    <LeftContentDescription desc>
      <h2>Explanation:</h2>
      <ol>
        <li>
          <h3>Uniform Distribution:</h3>
          <ul>
            <li>
              The goal is to generate a random integer in the range 1 to 10
              using the <code>rand7()</code> method, ensuring a uniform
              distribution where each number has an equal probability of being
              selected.
            </li>
          </ul>
        </li>
        <li>
          <h3>Generating Numbers from 1 to 49:</h3>
          <ul>
            <li>
              By using <code>rand7()</code> twice, we can generate numbers in
              the range 1 to 49. This is achieved by calculating{" "}
              <code>num = (rand7() - 1) * 7 + rand7()</code>.
            </li>
          </ul>
        </li>
        <li>
          <h3>Acceptance Criteria:</h3>
          <ul>
            <li>
              We want to accept numbers from 1 to 40 because this range allows
              us to map them uniformly to the range 1 to 10 without bias.
            </li>
            <li>
              Accepting numbers from 1 to 40 ensures that each number in the
              range 1 to 10 has an equal probability of being generated.
            </li>
          </ul>
        </li>
        <li>
          <h3>Rejection of Numbers from 41 to 49:</h3>
          <ul>
            <li>
              If we accepted numbers from 41 to 49, we would not have a uniform
              distribution when mapping them to the range 1 to 10.
            </li>
            <li>
              {" "}
              Specifically, if we accepted numbers from 41 to 49 and mapped them
              to the range 1 to 10, the numbers 1 to 9 would have a lower
              probability of being generated compared to the number 10.
            </li>
            <li>
              {" "}
              This bias occurs because there are fewer numbers in the range 1 to
              9 when compared to the number 10 in the range 41 to 49.
            </li>
          </ul>
        </li>
        <li>
          <h3>Reasoning behind 40:</h3>
          <ul>
            <li>
              We choose to accept numbers up to 40 because it is the largest
              multiple of 10 less than 49.
            </li>
            <li>
              By accepting numbers up to 40, we ensure that when we map them to
              the range 1 to 10, each number has an equal probability of being
              generated.
            </li>
            <li>
              Rejecting numbers beyond 40 maintains the integrity of the uniform
              distribution and prevents biases in the generated numbers.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        In summary, rejecting numbers from 41 to 49 ensures that the generated
        random integer in the range 1 to 10 has a uniform distribution. This
        rejection ensures fairness in the selection process and prevents biases
        in the generated numbers, as 40 is the largest multiple of 10 less than
        49.
      </p>
    </LeftContentDescription>
  ),
  478: (
    <LeftContentDescription desc>
      <h2>Explanation:</h2>
      <ol>
        <li>We define a Solution class to encapsulate the functionality.</li>
        <li>
          The constructor initializes the radius and center coordinates of the
          circle, and creates a Random object.
        </li>
        <li>
          The randPoint() method generates random coordinates within a square
          circumscribing the circle and checks if they lie within the circle. If
          not, it generates new coordinates until a point inside the circle is
          found.
        </li>
        <li>
          <h3>
            <code>
              double x = x_center - radius + 2 * radius * random.nextDouble();
            </code>
          </h3>
          <ul>
            <li>
              This line of code is used to generate a random value{" "}
              <code>x</code> within the range [<code>x_center - radius</code>,{" "}
              <code>x_center + radius</code>], which corresponds to the possible
              x-coordinates of points within the circle.
            </li>
          </ul>
          <ol>
            <li>
              <h4>
                <code>random.nextDouble():</code>
              </h4>
              <ul>
                <li>
                  <code>random.nextDouble()</code> is a method call that returns
                  a random double value between 0.0 (inclusive) and 1.0
                  (exclusive).
                </li>
                <li>
                  It generates a random number uniformly distributed in the
                  interval {"["}0.0, 1.0{")"}.
                </li>
              </ul>
            </li>
            <li>
              <h4>
                <code>2 * radius * random.nextDouble():</code>
              </h4>
              <ul>
                <li>
                  Multiplying <code>random.nextDouble()</code> by{" "}
                  <code>2 * radius</code> scales the random value to the
                  interval {"["}0.0, <code>2 * radius</code>
                  {")"}.{" "}
                </li>
                <li>
                  This effectively distributes random values evenly across the
                  width of the square bounding the circle.
                </li>
              </ul>
            </li>
            <li>
              <h4>
                <code>
                  x_center - radius + 2 * radius * random.nextDouble():
                </code>
              </h4>
              <ul>
                <li>
                  By subtracting <code>radius</code> from <code>x_center</code>,
                  we shift the starting point of the range to the left by{" "}
                  <code>radius</code> units, making it [
                  <code>x_center - radius</code>, <code>x_center + radius</code>
                  ].
                </li>
                <li>
                  Adding the scaled random value (
                  <code>2 * radius * random.nextDouble()</code>) to the shifted
                  starting point distributes the random values within the
                  desired range [<code>x_center - radius</code>,{" "}
                  <code>x_center + radius</code>].{" "}
                </li>
                <li>
                  The resulting <code>x</code> value lies within the specified
                  range [<code>x_center - radius</code>,{" "}
                  <code>x_center + radius</code>], effectively covering the
                  possible x-coordinates of points within the circle.{" "}
                </li>
                <li>
                  This approach ensures that the random points are uniformly
                  distributed within the circle's bounding square.
                </li>
              </ul>
            </li>
          </ol>
        </li>
        <li>
          <h3>
            The isInCircle() method checks if a point is inside the circle based
            on the circle's equation{" "}
            <code>(x - x_center)^2 + (y - y_center)^2 &lt;= radius^2</code>.
          </h3>
        </li>
      </ol>
    </LeftContentDescription>
  ),
  164: (
    <LeftContentDescription desc>
      <h2>Explanation of Maximum Gap Solution</h2>

      <h3>
        1. <code>maximumGap</code> Method:
      </h3>
      <ul>
        <li>
          <strong>Input Validation:</strong> Checks if the input array{" "}
          <code>nums</code> is <code>null</code> or has fewer than 2 elements.
          If so, it returns 0 because no gaps can be calculated.
        </li>
        <li>
          <strong>Sorting:</strong> Calls <code>radixSort</code> to sort the
          array.
        </li>
        <li>
          <strong>Calculate Maximum Gap:</strong> Iterates through the sorted
          array, calculates the gap between each pair of consecutive elements,
          and keeps track of the maximum gap.
        </li>
      </ul>

      <h3>
        2. <code>radixSort</code> Method:
      </h3>
      <ul>
        <li>
          <strong>Find Maximum Number:</strong> Uses{" "}
          <code>Arrays.stream(nums).max().getAsInt()</code> to find the maximum
          number in the array.
        </li>
        <li>
          <strong>Digit-by-Digit Sorting:</strong> Initializes <code>exp</code>{" "}
          to 1 and uses a while loop to sort the array by each digit, starting
          from the least significant digit to the most significant digit. In
          each iteration, <code>exp</code> is multiplied by 10 to move to the
          next digit.
        </li>
      </ul>

      <h3>
        3. <code>countingSort</code> Method:
      </h3>
      <ul>
        <li>
          <strong>Initialize Auxiliary Arrays:</strong> Creates an{" "}
          <code>output</code> array to store sorted numbers and a{" "}
          <code>count</code> array to count occurrences of each digit.
        </li>
        <li>
          <strong>Count Digit Occurrences:</strong> Iterates through the array
          and updates the <code>count</code> array based on the current digit at
          the <code>exp</code> position.
        </li>
        <li>
          <strong>Calculate Cumulative Count:</strong> Transforms the{" "}
          <code>count</code> array so that each entry at index <code>i</code>{" "}
          contains the cumulative sum of counts up to <code>i</code>. This
          transformation tells us the position where each digit should be placed
          in the <code>output</code> array.
        </li>
        <li>
          <strong>Build Output Array:</strong> Iterates through the array in
          reverse order, places each number in its correct position in the{" "}
          <code>output</code> array, and decrements the corresponding count.
        </li>
        <li>
          <strong>Copy Sorted Numbers:</strong> Copies the sorted numbers from{" "}
          <code>output</code> back to the original array <code>nums</code>.
        </li>
      </ul>
    </LeftContentDescription>
  ),
  912: (
    <LeftContentDescription desc>
      <h2>Explanation of Sort an Array Solution:</h2>

      <p>
        {" "}
        The provided solution using radix sort does not have a time complexity
        of O(nlogn). Radix sort typically has a time complexity of O(d⋅(n+k)),
        where d is the number of digits in the largest number, n is the number
        of elements, and k is the range of the digits.
      </p>

      <p>
        {" "}
        While radix sort is often more efficient than comparison-based sorting
        algorithms like quicksort or mergesort in certain scenarios, it is not
        O(nlogn). Radix sort's time complexity depends on the range of the keys
        (digits) and the number of digits in the input numbers rather than being
        dependent on the number of elements alone.
      </p>

      <ul>
        <li>
          <strong>Method Setup:</strong>
          <ul>
            <li>
              The <code>sortArray</code> method in the <code>Solution</code>{" "}
              class is the entry point for sorting the array.
            </li>
            <li>
              It first checks if the array is null or has less than 2 elements.
              If so, it returns the array as it is.
            </li>
            <li>Otherwise, it proceeds with the radix sort algorithm.</li>
          </ul>
        </li>
        <li>
          <strong>Finding Maximum Absolute Value:</strong>
          <ul>
            <li>
              Before sorting, the algorithm finds the maximum absolute value in
              the array to handle negative numbers.
            </li>
            <li>
              It uses{" "}
              <code>Arrays.stream(nums).map(Math::abs).max().getAsInt()</code>{" "}
              to find the maximum absolute value.
            </li>
          </ul>
        </li>
        <li>
          <strong>Radix Sort:</strong>
          <ul>
            <li>
              The algorithm iterates through each digit position, starting from
              the least significant digit (units place).
            </li>
            <li>
              It uses the <code>countingSort</code> method to perform the
              sorting based on the current digit position.
            </li>
          </ul>
        </li>
        <li>
          <strong>Counting Sort:</strong>
          <ul>
            <li>
              In the <code>countingSort</code> method, the algorithm first
              initializes an array <code>output</code> to store the sorted
              elements.
            </li>
            <li>
              It also initializes an array <code>count</code> to store the count
              of occurrences of each digit.
            </li>
          </ul>
        </li>
        <li>
          <strong>Counting Occurrences of Digits:</strong>
          <ul>
            <li>
              The algorithm iterates through the array and calculates the count
              of occurrences of each digit.
            </li>
            <li>
              Since the range of values includes negative numbers, it shifts the
              index by 9 to handle negative numbers properly.
            </li>
          </ul>
        </li>
        <li>
          <strong>Calculating Cumulative Counts:</strong>
          <ul>
            <li>
              We transform this array so that each entry at index i contains the
              cumulative sum of counts up to i. This tells us the position where
              each digit should be placed in the output array.
            </li>
          </ul>
        </li>
        <li>
          <strong>Building the Output Array:</strong>
          <ul>
            <li>
              Using the cumulative counts, the algorithm places each element in
              its correct position in the <code>output</code> array.
            </li>
          </ul>
        </li>
        <li>
          <strong>Copying Sorted Array:</strong>
          <ul>
            <li>
              Finally, the algorithm copies the sorted elements from the{" "}
              <code>output</code> array back to the original array.
            </li>
          </ul>
        </li>
      </ul>
    </LeftContentDescription>
  ),
  2343: (
    <LeftContentDescription desc>
      <h2>Step-by-Step Explanation of the Java Solution:</h2>
      <ol>
        <li>
          <strong>
            Define the <code>Solution</code> Class and Methods:
          </strong>
          <ul>
            <li>
              The <code>Solution</code> class contains the method{" "}
              <code>smallestTrimmedNumbers</code> which processes the queries
              and uses helper methods for sorting.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method: <code>smallestTrimmedNumbers</code>:
          </strong>
          <ul>
            <li>
              This method takes in an array of strings <code>nums</code> and a
              2D array of queries.
            </li>
            <li>
              It iterates over each query and uses the{" "}
              <code>getKSmallestIndex</code> method to find the required
              indices.
            </li>
            <li>
              The results are stored in an array <code>ans</code> which is then
              returned.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method: <code>getKSmallestIndex</code>:
          </strong>
          <ul>
            <li>
              This method processes each number in <code>nums</code> to extract
              the trimmed part as specified by the query.
            </li>
            <li>
              It creates a list of pairs where each pair contains the trimmed
              number as a string and its original index.
            </li>
            <li>
              The list of pairs is then converted into arrays for the trimmed
              numbers and their indices.
            </li>
            <li>
              The <code>radixSort</code> method is called to sort these arrays.
            </li>
            <li>
              The method returns the index of the k-th smallest trimmed number.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method: <code>radixSort</code>:
          </strong>
          <ul>
            <li>
              This method sorts the array of strings (trimmed numbers) using
              radix sort.
            </li>
            <li>
              It determines the maximum length of the strings to decide the
              number of sorting passes.
            </li>
            <li>
              It calls the <code>countingSort</code> method for each digit
              position starting from the least significant digit.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method: <code>countingSort</code>:
          </strong>
          <ul>
            <li>
              This method performs counting sort on the strings based on the
              current digit position.
            </li>
            <li>
              It counts the occurrences of each character, calculates the
              positions, and rearranges the array accordingly.
            </li>
            <li>
              Change <code>count[i]</code> so that it contains the actual
              position of this digit in <code>output[]</code>. We transform this
              array so that each entry at index <code>i</code> contains the
              cumulative sum of counts up to <code>i</code>. This tells us the
              position where each digit should be placed in the output array.
            </li>
            <li>
              The indices are also rearranged to maintain the correspondence
              with the sorted numbers.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Helper Class: <code>Pair</code>:
          </strong>
          <ul>
            <li>
              This class is used to store the trimmed number as a string and its
              original index.
            </li>
          </ul>
        </li>
        <li>
          <strong>Main Method:</strong>
          <ul>
            <li>
              The <code>main</code> method is provided for testing the solution
              with a sample input.
            </li>
          </ul>
        </li>
      </ol>
    </LeftContentDescription>
  ),
};

export default SOLUTIONING;
