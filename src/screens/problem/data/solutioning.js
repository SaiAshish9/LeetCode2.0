import { LeftContentDescription } from "../styles";

const SOLUTIONING = {
  1192: (
    <>
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
    </>
  ),
  470: (
    <>
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
    </>
  ),
  478: (
    <>
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
    </>
  ),
  164: (
    <>
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
    </>
  ),
  912: (
    <>
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
    </>
  ),
  2343: (
    <>
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
    </>
  ),
  332: (
    <>
      <p>
        To reconstruct an itinerary given a list of airline tickets, we can
        model this problem as finding an Eulerian path in a directed graph. The
        Eulerian path is a trail in a graph that visits every edge exactly once.
        Given the nature of flight itineraries (where you may have multiple
        tickets between the same cities), this problem ensures the existence of
        an Eulerian path rather than an Eulerian circuit (where the path must
        start and end at the same vertex).
      </p>
      <br />
      <h2>Problem Statement:</h2>
      <p>
        You are given a list of airline tickets represented as pairs of
        departure and arrival airports [from, to], and you need to reconstruct
        the itinerary in such a way that:
      </p>
      <p>1. The itinerary starts at "JFK".</p>
      <p>2. The itinerary uses all the tickets exactly once.</p>
      <p>
        3. The itinerary is lexicographically smallest when there are multiple
        valid itineraries.
      </p>
      <br />
      <h1>Reconstruct Itinerary Explanation:</h1>

      <p>
        <strong>Hierholzer's Algorithm:</strong>
      </p>
      <p>
        Hierholzer’s algorithm is used to find an Eulerian path or circuit in a
        graph. In this problem, we adapt the algorithm to find an Eulerian path
        in a directed graph, where we must visit every edge (flight) exactly
        once. The algorithm involves traversing the graph and backtracking as
        necessary to cover all edges.
      </p>

      <ol>
        <li>
          <strong>Graph Construction:</strong>
          <ul>
            <li>
              We represent the graph using a{" "}
              <code>Map&lt;String, PriorityQueue&lt;String&gt;&gt;</code>. Each
              airport points to a priority queue of destination airports,
              ensuring destinations are processed in lexicographical order.
            </li>
          </ul>
        </li>
        <li>
          <strong>Iterative Depth-First Search Using Stack:</strong>
          <ul>
            <li>
              This part of the solution implements a variation of Hierholzer’s
              algorithm. Instead of using recursion for DFS, we use an explicit
              stack to manage the traversal.
            </li>
            <li>
              Initialize a <code>Stack&lt;String&gt;</code> and push "JFK" to
              start the journey.
            </li>
            <li>
              While the stack is not empty:
              <ul>
                <li>
                  Peek at the top of the stack to get the current airport.
                </li>
                <li>
                  Retrieve the priority queue of next possible airports from the
                  graph.
                </li>
                <li>
                  If there are any destinations left from the current airport,
                  push the next airport onto the stack.
                </li>
                <li>
                  If no destinations are left, pop the current airport from the
                  stack and add it to the front of the itinerary using{" "}
                  <code>addFirst</code>.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Result Construction:</strong>
          <ul>
            <li>
              The itinerary is constructed in reverse order because we add
              airports to the front of the list during backtracking. This
              ensures the final itinerary is in the correct order when traversal
              is complete.
            </li>
          </ul>
        </li>
        <li>
          <strong>Example Usage:</strong>
          <ul>
            <li>
              The <code>main</code> method demonstrates using the{" "}
              <code>findItinerary</code> method with a sample list of tickets
              and prints the resulting itinerary to verify the output.
            </li>
          </ul>
        </li>
      </ol>

      <p>
        By following Hierholzer’s algorithm iteratively with a stack, this
        solution ensures that all tickets are used exactly once and the
        resulting itinerary is the lexicographically smallest possible.
      </p>
    </>
  ),
  753: (
    <>
      <h1>Explanation for "Cracking the Safe" Solution</h1>

      <ol>
        <li>
          <strong>De Bruijn Graph: </strong>
          <ul>
            <li>
              A De Bruijn graph is a directed graph that represents overlapping
              subsequences of symbols from a larger sequence. It has
              applications in various fields, including computer science,
              bioinformatics, and cryptography. Here's an explanation of the De
              Bruijn graph:
            </li>
            <li>
              Consider a De Bruijn graph 𝐵 ( 2 , 3 ) B(2,3) over the binary
              alphabet {(0, 1)} {(0, 1)}. It consists of vertices representing
              all possible 3-bit binary sequences: 000 000, 001 001, 010 010,
              011 011, 100 100, 101 101, 110 110, and 111 111. The edges are
              determined by the overlapping subsequences of length 𝑛 − 1 = 2.{" "}
            </li>
            <li>
              For example, there is an edge from 001 001 to 010 010 because the
              last 2 bits of 001 001 match the first 2 bits of 010 010.
              Similarly, there is an edge from 110 110 to 101 101 because the
              last 2 bits of 110 110 match the first 2 bits of 101 101.
            </li>
            <li>
              Construct a graph where each node represents a string of length
              n-1, and each edge represents adding a new digit 0 to k-1 to this
              string, leading to another string of length n-1. This graph is a
              De Bruijn graph.
            </li>
          </ul>
        </li>
        <li>
          <strong>Eulerian Path:</strong>
          <ul>
            <li>
              The problem can be reduced to finding an Eulerian path in this
              graph. An Eulerian path visits every edge exactly once, which
              corresponds to visiting every possible combination exactly once.
            </li>
          </ul>
        </li>
        <li>
          <strong>Hierholzer’s Algorithm:</strong>
          <ul>
            <li>
              Use Hierholzer's algorithm to find the Eulerian path, which is
              suitable for finding an Eulerian circuit in a graph.
            </li>
          </ul>
        </li>
        <li>
          <strong>Edge Case Handling:</strong>
          <ul>
            <li>
              If <code>n == 1</code>, construct the result by concatenating
              digits from 0 to <code>k-1</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Main Logic for <code>n &gt; 1</code>:
          </strong>
          <ul>
            <li>
              Initialize the <code>result</code> <code>StringBuilder</code>.
            </li>
            <li>
              Use a <code>Set</code> <code>visited</code> to track visited
              edges.
            </li>
            <li>
              Use a stack <code>stack</code> for iterative DFS, starting with a
              string of <code>n-1</code> zeros.
            </li>
            <li>
              While the stack is not empty, perform DFS and backtrack as needed
              to construct the sequence.
            </li>
            <li>
              For each node, try all possible edges (formed by appending digits
              0 to <code>k-1</code>), checking if the edge has been visited.
              <ul>
                <li>
                  If an edge has not been visited, mark it as visited, push the
                  suffix of the new string onto the stack, and set{" "}
                  <code>hasUnvisitedEdge</code> to true.
                </li>
              </ul>
            </li>
            <li>
              If all edges from the current node are visited, backtrack by
              popping the stack and appending the last character of the current
              node to <code>result</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Final Sequence Construction:</strong>
          <ul>
            <li>
              After visiting all edges, append the initial starting string minus
              its last character to the <code>result</code> to avoid redundancy.
            </li>
          </ul>
        </li>
      </ol>
    </>
  ),
  2097: (
    <>
      <h2>Explanation of the Solution:</h2>

      <ol>
        <li>
          <strong>validArrangement(int[][] pairs):</strong>
          <ul>
            <li>
              This method takes a 2D array of pairs as input and returns a 2D
              array representing a valid arrangement of pairs.
            </li>
            <li>
              It initializes a list <code>ans</code> to store the resulting
              pairs, and three maps: <code>graph</code>, <code>outDegree</code>,
              and <code>inDegrees</code>.
            </li>
            <li>
              It iterates through the pairs and constructs the directed graph{" "}
              <code>graph</code>, where each vertex is a start point and each
              edge is a pair.
            </li>
            <li>
              For each start point, it counts its out-degree (number of outgoing
              edges) and in-degree (number of incoming edges).
            </li>
            <li>
              It then finds the start node for the Eulerian circuit using the{" "}
              <code>getStartNode</code> method.
            </li>
            <li>
              After finding the start node, it performs a depth-first search
              (DFS) using the <code>eulerDFS</code> method to find the Eulerian
              circuit.
            </li>
            <li>
              Finally, it reverses the resulting list <code>ans</code> and
              converts it into a 2D array before returning.
            </li>
          </ul>
        </li>

        <li>
          <strong>
            getStartNode(Map&lt;Integer, Stack&lt;Integer&gt;&gt; graph,
            Map&lt;Integer, Integer&gt; outDegree, Map&lt;Integer, Integer&gt;
            inDegrees, int[][] pairs):
          </strong>
          <ol>
            <li>This method finds the start node for the Eulerian circuit.</li>
            <li>
              It iterates through the vertices in the graph and checks if the
              difference between the out-degree and in-degree of each vertex is
              1 (except for the last vertex).
            </li>
            <li>
              If found, it returns the start node. If no such node is found, it
              returns the first start node from the input pairs.
            </li>
          </ol>
        </li>

        <li>
          <strong>
            eulerDFS(Map&lt;Integer, Stack&lt;Integer&gt;&gt; graph, int u,
            List&lt;int[]&gt; ans):
          </strong>
          <ol>
            <li>
              This method performs a depth-first search (DFS) to find the
              Eulerian circuit.
            </li>
            <li>
              It takes the current vertex <code>u</code> and a list{" "}
              <code>ans</code> to store the resulting pairs.
            </li>
            <li>
              It pops vertices from the stack of outgoing edges for the current
              vertex <code>u</code> until the stack is empty.
            </li>
            <li>
              For each popped vertex <code>v</code>, it recursively calls{" "}
              <code>eulerDFS</code> with <code>v</code> and adds the pair{" "}
              <code>(u, v)</code> to the list <code>ans</code>.
            </li>
          </ol>
        </li>
      </ol>
    </>
  ),
  1489: (
    <>
      <p>
        Using Strongly Connected Components (SCCs) is not typically how one
        would solve the problem of finding critical and pseudo-critical edges in
        a Minimum Spanning Tree (MST). The problem fundamentally relies on the
        properties of MSTs, which are efficiently addressed using algorithms
        like Kruskal's or Prim's in combination with Union-Find for cycle
        detection.
      </p>

      <p>
        However, I can provide a brief explanation of how SCCs might
        theoretically relate to this problem, though it's not a practical or
        efficient approach for this particular task:
      </p>

      <ul>
        <li>
          <strong>Strongly Connected Components (SCCs)</strong>
          <ul>
            <li>
              SCCs are a feature of directed graphs where each vertex is
              reachable from every other vertex in the same component.
            </li>
            <li>Tarjan's algorithm is a well-known method to find SCCs.</li>
          </ul>
        </li>
        <li>
          <strong>MST and Edge Criticality</strong>
          <ul>
            <li>
              The problem of finding critical and pseudo-critical edges in an
              MST is different:
            </li>
            <ol>
              <li>
                <strong>Critical Edge</strong>: An edge is critical if its
                removal increases the weight of the MST or disconnects the
                graph.
              </li>
              <li>
                <strong>Pseudo-Critical Edge</strong>: An edge is
                pseudo-critical if it is part of some MST but not necessarily
                every MST.
              </li>
            </ol>
          </ul>
        </li>
        <li>
          <strong>Applying SCCs</strong>
          <ul>
            <li>
              In theory, if you consider the undirected graph as a directed
              graph by treating each edge as bidirectional, you could use SCCs
              to understand certain properties of reachability and connectivity.
            </li>
            <li>
              However, this does not directly help with MST properties, which
              depend on weights and not just connectivity.
            </li>
          </ul>
        </li>
        <li>
          <strong>Efficient Approach</strong>
          <ul>
            <li>
              The efficient approach for the problem, as previously provided, is
              based on:
            </li>
            <ol>
              <li>
                <strong>Kruskal's Algorithm:</strong> To construct the MST.
              </li>
              <li>
                <strong>Union-Find:</strong> For efficient cycle detection and
                union operations.
              </li>
              <li>
                <strong>Edge Exclusion/Inclusion:</strong> To determine the
                criticality of each edge.
              </li>
            </ol>
          </ul>
        </li>
      </ul>
      <h2>Explanation of the Solution:</h2>
      <ul>
        <li>
          <strong>Solution class:</strong>
          <ul>
            <li>
              The `Solution` class contains the main logic to find critical and
              pseudo-critical edges in a Minimum Spanning Tree (MST).
            </li>
            <li>The `findCriticalAndPseudoCriticalEdges` method:</li>
            <ul>
              <li>
                Takes the number of vertices `n` and the array of edges `edges`
                as input.
              </li>
              <li>
                Initializes two lists to store critical and pseudo-critical
                edges.
              </li>
              <li>
                Iterates through the edges array and modifies each edge to
                include its index.
              </li>
              <li>
                Sorts the edges array based on their weights in ascending order.
              </li>
              <li>
                Calculates the weight of the MST without considering any edge (
                <code>firstEdge</code> is an empty array) and stores it in{" "}
                <code>mstWeight</code>.
              </li>
              <li>Iterates through the sorted edges array:</li>
              <ul>
                <li>
                  For each edge, checks if deleting it increases the MST's
                  weight or makes the MST invalid. If so, adds its index to the
                  list of critical edges.
                </li>
                <li>
                  Otherwise, if the edge can be in any MST (i.e., deleting it
                  doesn't change the MST's weight), adds its index to the list
                  of pseudo-critical edges.
                </li>
              </ul>
              <li>
                Returns a list containing the lists of critical and
                pseudo-critical edges.
              </li>
            </ul>
            <li>The `getMSTWeight` method:</li>
            <ul>
              <li>
                Takes the number of vertices `n`, the array of edges `edges`, an
                array representing the first edge to consider, and the index of
                the edge to exclude from the MST.
              </li>
              <li>
                Initializes the MST's weight to 0 and creates a `UnionFind`
                instance to track connected components.
              </li>
              <li>
                If the firstEdge array is not empty, unions the vertices of the
                first edge and adds its weight to the MST's weight.
              </li>
              <li>Iterates through the edges array:</li>
              <ul>
                <li>For each edge, if it's the edge to exclude, skips it.</li>
                <li>
                  If the vertices of the edge are not already in the same
                  connected component, unions them and adds the edge's weight to
                  the MST's weight.
                </li>
              </ul>
              <li>
                Checks if all vertices belong to the same connected component.
                If not, returns <code>Integer.MAX_VALUE</code> to indicate an
                invalid MST.
              </li>
              <li>Returns the weight of the MST.</li>
            </ul>
            <li>The `main` method:</li>
            <ul>
              <li>Creates an instance of `Solution`.</li>
              <li>
                Defines the number of vertices `n` and initializes the array of
                edges.
              </li>
              <li>
                Calls the `findCriticalAndPseudoCriticalEdges` method to obtain
                the result.
              </li>
              <li>Prints the result.</li>
            </ul>
          </ul>
        </li>
      </ul>
    </>
  ),
  1568: (
    <>
      <p>
        One common approach is to iterate through all the edges, removing one
        edge at a time and checking if the resulting graph becomes disconnected.
      </p>

      <p>
        While using Strongly Connected Components (SCCs) to solve this problem
        is feasible, it's not the most straightforward or efficient approach.
        SCCs are more commonly used for problems related to cycle detection,
        connectivity, and certain graph algorithms like Kosaraju's algorithm for
        finding strongly connected components.
      </p>

      <p>
        Here's why SCCs might not be the ideal approach for solving this
        particular problem:
      </p>

      <ul>
        <li>
          <strong>Complexity:</strong> SCC algorithms, like Tarjan's algorithm
          or Kosaraju's algorithm, have a complexity of O(V+E), where V is the
          number of vertices and E is the number of edges. While this might seem
          reasonable, it's important to note that SCC algorithms typically
          require preprocessing the entire graph to find SCCs, which might not
          be necessary for this problem.
        </li>
        <li>
          <strong>Extra Overhead:</strong> SCC algorithms involve additional
          steps such as DFS traversal and stack operations to identify SCCs. For
          this problem, where the goal is to simply find whether removing a
          single edge disconnects the island, this extra overhead might not be
          justified.
        </li>
        <li>
          <strong>Scalability:</strong> The SCC approach might not scale well
          for larger graphs. As the size of the graph increases, the complexity
          of finding SCCs also increases, potentially leading to longer
          execution times.
        </li>
      </ul>

      <p>
        Instead, a more straightforward and efficient approach for this problem
        would be to use a simple graph traversal algorithm, such as Depth First
        Search (DFS) or Breadth First Search (BFS), to iterate through all the
        edges and check if removing an edge disconnects the island.
      </p>
      <h1>Code Explanation:</h1>
      <h2>Disconnected Check:</h2>
      <p>
        First, it checks if the island is already disconnected by counting the
        number of connected components (islands) in the grid. If there is more
        than one connected component, the grid is already disconnected, and the
        function returns 0.
      </p>

      <h2>Try Removing One Land Cell:</h2>
      <p>
        The function then iterates through each cell in the grid. For each land
        cell (<code>grid[i][j] == 1</code>), it temporarily removes the cell
        (sets it to 0) and checks if this operation disconnects the island. If
        it does, the function returns 1. After checking, it restores the cell
        back to 1.
      </p>

      <h2>Remove Two Land Cells:</h2>
      <p>
        If removing one land cell does not disconnect the island, the function
        concludes that at least two cells must be removed to disconnect the
        island, and it returns 2.
      </p>

      <h2>Detailed Steps:</h2>
      <h3>Check Initial Disconnection:</h3>
      <p>
        The <code>disconnected</code> method checks if the island is already
        disconnected by counting the number of islands using DFS.
      </p>
      <ol>
        <li>
          It initializes <code>islandsCount</code> to 0.
        </li>
        <li>
          It iterates through each cell in the grid. If it finds an unvisited
          land cell (<code>grid[i][j] == 1</code> and <code>!seen[i][j]</code>),
          it starts a DFS from that cell, marking all connected land cells as
          visited.
        </li>
        <li>
          If it finds more than one island during this process, it returns{" "}
          <code>true</code>, indicating that the grid is disconnected.
        </li>
      </ol>

      <h3>Try Removing One Land Cell:</h3>
      <p>The main method iterates through each cell. For each land cell:</p>
      <ol>
        <li>
          It temporarily removes the cell (<code>grid[i][j] = 0</code>).
        </li>
        <li>
          It calls <code>disconnected</code> to check if this removal
          disconnects the island.
        </li>
        <li>If it does, it returns 1.</li>
        <li>
          Otherwise, it restores the cell (<code>grid[i][j] = 1</code>).
        </li>
      </ol>

      <h3>Return 2 If Needed:</h3>
      <p>
        If no single cell removal disconnects the island, it returns 2, meaning
        that at least two cells need to be removed to disconnect the island.
      </p>
    </>
  ),
  2846: (
    <>
      <p>
        Strongly Connected Components (SCCs) are typically used in the context
        of directed graphs to identify subgraphs where every vertex is reachable
        from every other vertex within the same subgraph. This concept is
        crucial for solving problems related to cycle detection, graph
        condensation, and other connectivity issues in directed graphs. However,
        the problem at hand involves a tree structure, which is an undirected
        and acyclic graph.
      </p>
      <p>
        Here are the key reasons why SCCs are not applicable or ideal for
        solving this problem:
      </p>
      <ul>
        <li>
          <strong>Tree Structure:</strong> A tree is inherently an acyclic
          connected graph. Each node is connected by exactly one path, and there
          are no cycles. SCCs are used to identify cycles and strongly connected
          subgraphs in directed graphs, which is irrelevant in the context of a
          tree where such cycles do not exist.
        </li>

        <li>
          <strong>Nature of Queries:</strong> The problem requires determining
          the minimum number of operations (edge removals) to equalize edge
          weights between given pairs of nodes in a tree. This involves finding
          the Lowest Common Ancestor (LCA) of the nodes and analyzing paths in
          an undirected graph. SCCs do not provide a mechanism to efficiently
          handle such path queries in trees.
        </li>

        <li>
          <strong>DFS and LCA Sufficiency:</strong> Depth-First Search (DFS)
          combined with Binary Lifting for LCA preprocessing is sufficient and
          efficient for handling queries in a tree. These techniques allow for
          efficient traversal and ancestor queries, which are directly related
          to the problem's requirements. SCCs do not offer any additional
          advantage for these types of operations in trees.
        </li>

        <li>
          <strong>Complexity and Overhead:</strong> Using SCC algorithms like
          Tarjan's or Kosaraju's in this context would introduce unnecessary
          complexity and computational overhead. These algorithms have a time
          complexity of O(V + E) and are designed for directed graphs. In
          contrast, the combination of DFS and Binary Lifting operates
          efficiently within the constraints of the problem and is optimized for
          trees.
        </li>
      </ul>

      <p>
        <strong>Summary:</strong> SCCs are specialized for directed graphs to
        identify strongly connected components where each vertex is reachable
        from any other vertex within the same component. The problem at hand
        involves undirected trees, where the primary operations revolve around
        path queries and ancestor relationships, making techniques like DFS and
        Binary Lifting much more suitable and efficient.
      </p>

      <p>
        <strong>Correct Approach:</strong> The correct approach for solving this
        problem is using DFS for tree traversal and Binary Lifting for LCA
        preprocessing. This method ensures that all queries can be answered
        efficiently after a preprocessing step, making it well-suited for the
        given problem constraints.
      </p>

      <h1>Code Explanation:</h1>
      <ul>
        <li>
          <strong>Method minOperationsQueries:</strong>
          <ul>
            <li>
              This method takes three parameters: <code>n</code> (the number of
              nodes in the tree), <code>edges</code> (an array of edges with
              weights), and <code>queries</code> (an array of queries).
            </li>
            <li>
              It returns an array of integers representing the minimum number of
              operations required to equalize edge weights for each query.
            </li>
            <li>
              Inside the method:
              <ul>
                <li>
                  It initializes constants <code>kMax</code> and <code>m</code>:
                  <ul>
                    <li>
                      <code>kMax</code> represents the maximum possible weight
                      of an edge.
                    </li>
                    <li>
                      <code>m</code> represents the number of bits required to
                      represent the maximum node count <code>n</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  It initializes several data structures:
                  <ul>
                    <li>
                      <code>ans</code>: An array to store the answers for each
                      query.
                    </li>
                    <li>
                      <code>graph</code>: An array of lists to represent the
                      adjacency list of the graph.
                    </li>
                    <li>
                      <code>jump</code>: A 2D array to store the ancestor nodes
                      for binary lifting.
                    </li>
                    <li>
                      <code>count</code>: A 2D array to store the frequency of
                      edge weights for each node.
                    </li>
                    <li>
                      <code>depth</code>: An array to store the depth of each
                      node in the tree.
                    </li>
                  </ul>
                </li>
                <li>
                  It initializes the graph by iterating through the edges and
                  adding them to the adjacency list.
                </li>
                <li>
                  It initializes the count array for the root node (node 0).
                </li>
                <li>
                  It calls the <code>dfs</code> method to perform depth-first
                  search traversal and populate the <code>jump</code> and{" "}
                  <code>count</code> arrays.
                </li>
                <li>
                  It performs binary lifting by filling the <code>jump</code>{" "}
                  array to enable efficient LCA (Lowest Common Ancestor)
                  queries.
                </li>
                <li>
                  It iterates through each query and calculates the minimum
                  number of operations required to equalize edge weights:
                  <ul>
                    <li>
                      It finds the LCA of the two nodes involved in the query.
                    </li>
                    <li>
                      It calculates the number of edges between the nodes and
                      the maximum frequency of edge weights.
                    </li>
                    <li>
                      It computes the answer for the query by subtracting the
                      maximum frequency from the total number of edges.
                    </li>
                  </ul>
                </li>
                <li>
                  It returns the array containing answers for all queries.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Helper Methods:</strong>
          <ul>
            <li>
              <code>dfs</code>: Performs depth-first search traversal to
              populate the <code>jump</code> and <code>count</code> arrays.
            </li>
            <li>
              <code>getLCA</code>: Finds the Lowest Common Ancestor (LCA) of two
              nodes using binary lifting.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  382: (
    <>
      <h1>Steps:</h1>
      <ul>
        <li>
          <strong>Initialize the reservoir:</strong> This problem requires
          selecting a random node from a linked list, which can be done using
          reservoir sampling with a reservoir size of 1.
        </li>
        <li>
          <strong>Traverse the linked list:</strong> As we traverse the linked
          list, we maintain a count of the nodes we have seen so far.
        </li>
      </ul>

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
          <ul>
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
              <ul>
                <li>
                  Generate a random number between 0 and <code>count-1</code>.
                </li>
                <li>
                  If this number is 0, we update <code>reservoir</code> with the
                  current node's value. This ensures that each node has an equal
                  probability of being selected.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Apply Reservoir Sampling:</h2>
      <ul>
        <li>
          For each node, we decide whether to include it in the reservoir based
          on a probability that ensures each node has an equal chance of being
          selected.
        </li>
      </ul>
    </>
  ),
  398: (
    <>
      <h1>Steps:</h1>
      <ul>
        <li>
          <strong>Initialize the reservoir:</strong> This problem requires
          selecting a random node from a linked list, which can be done using
          reservoir sampling with a reservoir size of 1.
        </li>
        <li>
          <strong>Traverse the linked list:</strong> As we traverse the linked
          list, we maintain a count of the nodes we have seen so far.
        </li>
      </ul>

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
          <ul>
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
              <ul>
                <li>
                  Generate a random number between 0 and <code>count-1</code>.
                </li>
                <li>
                  If this number is 0, we update <code>reservoir</code> with the
                  current node's value. This ensures that each node has an equal
                  probability of being selected.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Apply Reservoir Sampling:</h2>
      <ul>
        <li>
          For each node, we decide whether to include it in the reservoir based
          on a probability that ensures each node has an equal chance of being
          selected.
        </li>
      </ul>
    </>
  ),
  497: (
    <>
      {" "}
      <h1>Steps:</h1>
      <ol>
        <li>
          <strong>Initialize the rectangles:</strong> Store the given list of
          non-overlapping rectangles and calculate the total number of points in
          all rectangles combined.
        </li>
        <li>
          <strong>Calculate cumulative area:</strong> Maintain a cumulative area
          sum to assist in selecting a rectangle based on its area.
        </li>
        <li>
          <strong>Select a rectangle based on area:</strong> Use a random number
          to pick a rectangle proportionally to its area.
        </li>
        <li>
          <strong>Pick a random point within the selected rectangle:</strong>{" "}
          Generate random coordinates within the bounds of the selected
          rectangle.
        </li>
      </ol>
      <h2>Explanation:</h2>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <strong>rects:</strong> The list of non-overlapping rectangles.
            </li>
            <li>
              <strong>rand:</strong> An instance of <code>Random</code> used to
              generate random numbers.
            </li>
            <li>
              <strong>areas:</strong> An array to store the cumulative number of
              points up to each rectangle.
            </li>
          </ul>
        </li>
        <li>
          <strong>pick() Method:</strong>
          <ul>
            <li>
              Generate a random integer up to the total number of points across
              all rectangles.
            </li>
            <li>
              Use binary search to determine which rectangle this random integer
              falls into.
            </li>
            <li>Generate random coordinates within the selected rectangle.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  519: (
    <>
      {" "}
      <h1>Steps:</h1>
      <ul>
        <li>
          <strong>Initialize the matrix dimensions:</strong>
          <ul>
            <li>
              Store the number of rows (<code>m</code>) and columns (
              <code>n</code>).
            </li>
            <li>Use a map to keep track of flipped positions.</li>
            <li>Maintain a count of the remaining unflipped cells.</li>
          </ul>
        </li>
        <li>
          <strong>
            Use reservoir sampling to select a random unflipped cell:
          </strong>
          <ul>
            <li>
              Each time a cell is flipped, it is marked and won't be chosen
              again.
            </li>
          </ul>
        </li>
        <li>
          <strong>Reset the matrix:</strong>
          <ul>
            <li>
              Provide functionality to reset the matrix to its original state.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Explanation:</h2>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <strong>m and n:</strong> Dimensions of the matrix.
            </li>
            <li>
              <strong>totalCells:</strong> Total number of cells in the matrix.
            </li>
            <li>
              <strong>map:</strong> A hash map to keep track of the mapping
              between the original and shuffled positions.
            </li>
            <li>
              <strong>rand:</strong> An instance of <code>Random</code> used to
              generate random numbers.
            </li>
          </ul>
        </li>
        <li>
          <strong>flip() Method:</strong>
          <ul>
            <li>
              Generate a random integer up to the number of remaining unflipped
              cells.
            </li>
            <li>
              Use the hash map to keep track of the shuffled positions to avoid
              duplicates.
            </li>
            <li>Decrement the count of remaining unflipped cells.</li>
          </ul>
        </li>
        <li>
          <strong>reset() Method:</strong>
          <ul>
            <li>Reset the count of remaining unflipped cells.</li>
            <li>Clear the hash map.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  218: (
    <>
      {" "}
      <h1>Skyline Problem Solution using Line Sweep Algorithm:</h1>
      <ul>
        <li>
          Collect Events:
          <ul>
            <li>
              For each building, create two events: a start event and an end
              event.
            </li>
            <li>
              The start event is represented by the left coordinate and the
              height (negative value to denote the start).
            </li>
            <li>
              The end event is represented by the right coordinate and the
              height (positive value to denote the end).
            </li>
          </ul>
        </li>
        <li>
          Sort Events:
          <ul>
            <li>Sort all events primarily by the x-coordinate.</li>
            <li>
              If two events have the same x-coordinate, sort them by height,
              with start events coming before end events.
            </li>
          </ul>
        </li>
        <li>
          Process Events:
          <ul>
            <li>
              Use a priority queue (max-heap) to track current building heights.
            </li>
            <li>
              Traverse through the sorted events, updating the heap and
              recording the critical points where the height changes.
            </li>
          </ul>
        </li>
        <li>
          Output the Result:
          <ul>
            <li>The result is a list of key points defining the skyline.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  391: (
    <>
      {" "}
      <h1>Perfect Rectangle Solution using Line Sweep Algorithm</h1>
      <ul>
        <li>
          Initialize Variables:
          <ul>
            <li>Set `area` to 0 to track the total area of all rectangles.</li>
            <li>
              Initialize `x1`, `y1` to `Integer.MAX_VALUE` to find the minimum
              coordinates.
            </li>
            <li>
              Initialize `x2`, `y2` to `Integer.MIN_VALUE` to find the maximum
              coordinates.
            </li>
            <li>Create a `Set` called `corners` to track corner points.</li>
          </ul>
        </li>
        <li>
          Process Each Rectangle:
          <ul>
            <li>
              Update `x1`, `y1` with the minimum x and y coordinates
              respectively.
            </li>
            <li>
              Update `x2`, `y2` with the maximum x and y coordinates
              respectively.
            </li>
            <li>
              Calculate the area of the current rectangle and add it to `area`.
            </li>
            <li>For each rectangle, get its four corners.</li>
            <li>
              For each corner:
              <ul>
                <li>
                  If the corner is already in the `corners` set, remove it
                  (toggle).
                </li>
                <li>If the corner is not in the set, add it.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Check for Perfect Rectangle:
          <ul>
            <li>
              Ensure the set `corners` contains exactly four corners of the
              bounding rectangle.
            </li>
            <li>
              Check if these four corners are the min and max coordinates found.
            </li>
            <li>
              Compare the total area of all rectangles with the area of the
              bounding rectangle.
            </li>
            <li>
              If both conditions are met, the rectangles form a perfect
              rectangle; otherwise, they do not.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
};

function appendPxToValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = (
        <LeftContentDescription desc>{obj[key]}</LeftContentDescription>
      );
    }
  }
}

appendPxToValues(SOLUTIONING);

export default SOLUTIONING;
