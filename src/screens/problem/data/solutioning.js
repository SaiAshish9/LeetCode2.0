import { LeftContentDescription } from "../styles";

const SOLUTIONING = {
  1192: (
    <>
      <h2>Step-by-Step Explanation:</h2>
      <ul>
        <li>
          <strong>Class Initialization:</strong>
          <p>
            Define the class <code>Solution</code> with necessary member
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
          In <code>Tarjan's</code> Algorithm, which is used to find strongly
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
          <ul>
            <li>
              Initialize <code>graph</code>, <code>low</code>, <code>disc</code>
              , <code>result</code>, and <code>time</code>.
            </li>
            <li>
              Create an empty adjacency list for each vertex in the graph.
            </li>
            <li>
              Build the graph using the given <code>connections</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Build the Graph:</strong>
          <ul>
            <li>
              Iterate over each connection in <code>connections</code>.
            </li>
            <li>
              Add each connection to the adjacency list of both vertices
              involved (since the graph is undirected).
            </li>
          </ul>
        </li>
        <li>
          <strong>Start DFS Traversal:</strong>
          <ul>
            <li>
              Call the <code>dfs</code> method starting from vertex 0 with
              parent as -1 (indicating no parent).
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Depth-First Search (DFS) Method <code>dfs</code>:
          </strong>
          <ul>
            <li>
              Set the discovery time and low value of vertex <code>u</code> to
              the current time.
            </li>
            <li>
              Increment the <code>time</code>.
            </li>
            <li>
              Traverse all the adjacent vertices (<code>v</code>) of vertex{" "}
              <code>u</code>.
            </li>
          </ul>

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
          <ul>
            <li>
              After completing the DFS traversal, return the <code>result</code>{" "}
              list containing all critical connections.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  470: (
    <>
      <h2>Explanation:</h2>
      <ul>
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
      </ul>
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
      <ul>
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
          <ul>
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
          </ul>
        </li>
        <li>
          <h3>
            The isInCircle() method checks if a point is inside the circle based
            on the circle's equation{" "}
            <code>(x - x_center)^2 + (y - y_center)^2 &lt;= radius^2</code>.
          </h3>
        </li>
      </ul>
    </>
  ),
  164: (
    <>
      <h2>Explanation of Maximum Gap Solution</h2>

      <ul>
        <li>
          <code>maximumGap</code> Method:
        </li>
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

        <li>
          <code>radixSort</code> Method:
        </li>
        <ul>
          <li>
            <strong>Find Maximum Number:</strong> Uses{" "}
            <code>Arrays.stream(nums).max().getAsInt()</code> to find the
            maximum number in the array.
          </li>
          <li>
            <strong>Digit-by-Digit Sorting:</strong> Initializes{" "}
            <code>exp</code> to 1 and uses a while loop to sort the array by
            each digit, starting from the least significant digit to the most
            significant digit. In each iteration, <code>exp</code> is multiplied
            by 10 to move to the next digit.
          </li>
        </ul>

        <li>
          <code>countingSort</code> Method:
        </li>
        <ul>
          <li>
            <strong>Initialize Auxiliary Arrays:</strong> Creates an{" "}
            <code>output</code> array to store sorted numbers and a{" "}
            <code>count</code> array to count occurrences of each digit.
          </li>
          <li>
            <strong>Count Digit Occurrences:</strong> Iterates through the array
            and updates the <code>count</code> array based on the current digit
            at the <code>exp</code> position.
          </li>
          <li>
            <strong>Calculate Cumulative Count:</strong> Transforms the{" "}
            <code>count</code> array so that each entry at index <code>i</code>{" "}
            contains the cumulative sum of counts up to <code>i</code>. This
            transformation tells us the position where each digit should be
            placed in the <code>output</code> array.
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
      <ul>
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
      </ul>
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

      <ul>
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
      </ul>

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

      <ul>
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
      </ul>
    </>
  ),
  2097: (
    <>
      <h2>Explanation of the Solution:</h2>

      <ul>
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
            getStartNode(Map&lt;Integer, Stack&lt;Integer&gt; graph,
            Map&lt;Integer, Integer&gt; outDegree, Map&lt;Integer, Integer&gt;
            inDegrees, int[][] pairs):
          </strong>
          <ul>
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
          </ul>
        </li>

        <li>
          <strong>
            eulerDFS(Map&lt;Integer, Stack&lt;Integer&gt;&gt; graph, int u,
            List&lt;int[]&gt; ans):
          </strong>
          <ul>
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
          </ul>
        </li>
      </ul>
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
            <ul>
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
            </ul>
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
            <ul>
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
            </ul>
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
      <ul>
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
      </ul>

      <h3>Try Removing One Land Cell:</h3>
      <p>The main method iterates through each cell. For each land cell:</p>
      <ul>
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
      </ul>

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
      <ul>
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
      </ul>
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
  850: (
    <>
      {" "}
      <h1>Rectangle Area II Solution using Line Sweep Algorithm</h1>
      <ul>
        <li>
          Create an `Event` class to represent each event:
          <ul>
            <li>
              An event has an x-coordinate (`x`), a starting y-coordinate
              (`y1`), an ending y-coordinate (`y2`), and a type (`type`).
            </li>
          </ul>
        </li>
        <li>
          In the `rectangleArea` method:
          <ul>
            <li>Initialize `kMod` to 1,000,000,007 for modular arithmetic.</li>
            <li>
              Create a list of `events` to store all entering and leaving
              events.
            </li>
          </ul>
        </li>
        <li>
          For each rectangle, create two events:
          <ul>
            <li>Add a 'start' event (`s`) when the rectangle starts.</li>
            <li>Add an 'end' event (`e`) when the rectangle ends.</li>
          </ul>
        </li>
        <li>Sort the events by their x-coordinate.</li>
        <li>
          Initialize variables:
          <ul>
            <li>`ans` to accumulate the total area.</li>
            <li>`prevX` to store the previous x-coordinate.</li>
            <li>`yPairs` to maintain the active y-intervals.</li>
          </ul>
        </li>
        <li>
          For each event in the sorted list:
          <ul>
            <li>
              If the current x-coordinate is greater than `prevX`:
              <ul>
                <li>
                  Calculate the width as the difference between the current x
                  and `prevX`.
                </li>
                <li>
                  Update the total area `ans` by adding the product of width and
                  the total height of active y-intervals.
                </li>
                <li>Update `prevX` to the current x-coordinate.</li>
              </ul>
            </li>
            <li>
              If the event is a 'start' event (`s`):
              <ul>
                <li>Add the y-interval (`y1`, `y2`) to `yPairs`.</li>
                <li>Sort `yPairs` by the starting y-coordinate.</li>
              </ul>
            </li>
            <li>
              If the event is an 'end' event (`e`):
              <ul>
                <li>Remove the y-interval (`y1`, `y2`) from `yPairs`.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          In the `getHeight` method:
          <ul>
            <li>Initialize `height` to 0 and `prevY` to 0.</li>
            <li>
              For each y-interval in `yPairs`:
              <ul>
                <li>
                  Update `prevY` to the maximum of `prevY` and the starting
                  y-coordinate (`y1`).
                </li>
                <li>
                  If the ending y-coordinate (`y2`) is greater than `prevY`:
                  <ul>
                    <li>
                      Add the difference between `y2` and `prevY` to `height`.
                    </li>
                    <li>Update `prevY` to `y2`.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Return the total `height` of the active y-intervals.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1851: (
    <>
      <h1>Explanation:</h1>
      <ul>
        <li>
          We initialize an answer array to store the minimum interval size for
          each query.
        </li>
        <li>A minHeap is used to store intervals sorted by their size.</li>
        <li>
          We sort the intervals by their start time and queries by their value.
        </li>
        <li>
          For each query, we add intervals to the minHeap that start before or
          at the current query.
        </li>
        <li>
          We remove intervals from the minHeap that end before the current
          query.
        </li>
        <li>
          The size of the smallest interval remaining in the minHeap is assigned
          to the current query.
        </li>
      </ul>
      <br />
      <p>
        The solution uses a line sweep technique, a common algorithmic paradigm
        used to solve problems involving a set of intervals or events along a
        line. Here's how it applies the line sweep technique:
      </p>
      <ul>
        <li>
          <strong>Sorting:</strong>
          <ul>
            <li>Sort the intervals by their start times.</li>
            <li>Sort the queries by their values.</li>
          </ul>
        </li>
        <li>
          <strong>Processing:</strong>
          <ul>
            <li>Iterate through each query in ascending order.</li>
            <li>
              As each query is processed, simulate sweeping forward along the
              line:
            </li>
            <ul>
              <li>
                Add intervals to the minHeap that start before or at the current
                query's value.
              </li>
              <li>
                Remove intervals from the minHeap that end before the current
                query's value.
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <strong>Heap Management:</strong>
          <ul>
            <li>Use a priority queue (minHeap) to manage active intervals.</li>
            <li>Sort the minHeap by interval size.</li>
            <li>
              Add intervals to the minHeap that start before or at the current
              query's value.
            </li>
            <li>
              Remove intervals from the minHeap that end before the current
              query's value.
            </li>
          </ul>
        </li>
        <li>
          <strong>Query Processing:</strong>
          <ul>
            <li>For each query, check if the minHeap is empty.</li>
            <li>
              If not empty, retrieve the size of the smallest interval remaining
              in the minHeap.
            </li>
            <li>
              This size represents the minimum interval that includes the
              current query value.
            </li>
            <li>
              Assign this size to the corresponding index in the answer array.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  192: (
    <ul>
      <li>
        Input: <code>the day is sunny the the the sunny is is</code>
      </li>
      <li>
        <code>#!/bin/bash</code>
        <ul>
          <li>
            This is known as a shebang line. It specifies the path to the bash
            shell that will be used to interpret the script. It ensures that the
            script runs in the bash shell environment.
          </li>
        </ul>
      </li>
      <li>
        <code>tr -s ' ' '\n' &lt; words.txt</code>
        <ul>
          <li>
            The <code>tr</code> command translates or deletes characters. Here,{" "}
            <code>-s ' '</code> squeezes (replaces multiple spaces with a single
            space) and <code>'\n'</code> translates spaces to newlines,
            effectively turning the file into a list of words, one per line.
          </li>
          <ul>
            <li>the</li>
            <li>day</li>
            <li>is</li>
            <li>sunny</li>
            <li>the</li>
            <li>the</li>
            <li>the</li>
            <li>sunny</li>
            <li>is</li>
            <li>is</li>
          </ul>
        </ul>
      </li>
      <li>
        <code>sort</code>
        <ul>
          <li>
            The <code>sort</code> command sorts the input. By default, it sorts
            in ascending order. Here, it sorts the list of words alphabetically.
          </li>
          <ul>
            <li>day</li>
            <li>is</li>
            <li>is</li>
            <li>is</li>
            <li>sunny</li>
            <li>sunny</li>
            <li>the</li>
            <li>the</li>
            <li>the</li>
            <li>the</li>
          </ul>
        </ul>
      </li>
      <li>
        <code>uniq -c</code>
        <ul>
          <li>
            The <code>uniq</code> command removes duplicate lines from a sorted
            file. The <code>-c</code> option prefixes each line with the number
            of occurrences. This counts the frequency of each unique word.
          </li>
          <ul>
            <li> 1 day</li>
            <li> 3 is</li>
            <li> 2 sunny</li>
            <li> 4 the</li>
          </ul>
        </ul>
      </li>
      <li>
        <code>awk '&#123;print $2, $1&#125;'</code>
        <ul>
          <li>
            The <code>awk</code> command processes the output.{" "}
            <code>'&#123;print $2, $1&#125;'</code> prints the second field (the
            word) followed by the first field (the count), formatting the output
            as required.
          </li>
          <ul>
            <li>day 1</li>
            <li>is 3</li>
            <li>sunny 2</li>
            <li>the 4</li>
          </ul>
        </ul>
      </li>
      <li>
        <code>sort -nr -k2</code>
        <ul>
          <li>
            The <code>sort -nr -k2</code> command sorts the output numerically (
            <code>-n</code>) and in reverse order (<code>-r</code>), based on
            the second column (<code>-k2</code>), which is the count.
          </li>
          <ul>
            <li>the 4</li>
            <li>is 3</li>
            <li>sunny 2</li>
            <li>day 1</li>
          </ul>
        </ul>
      </li>
    </ul>
  ),
  193: (
    <>
      <h1>Valid Phone Numbers</h1>
      <ul>
        <li>
          <code>#!/bin/bash</code>
          <ul>
            <li>
              This is known as a shebang line. It specifies the path to the bash
              shell that will be used to interpret the script. It ensures that
              the script runs in the bash shell environment.
            </li>
          </ul>
        </li>
        <li>
          <code>
            grep -E '^(\([0-9]{3}\) [0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]
            {4}$)' file.txt
          </code>
          <ul>
            <li>
              <code>grep</code> is a command-line utility for searching
              plain-text data for lines that match a regular expression.
            </li>
            <li>
              <code>-E</code> enables extended regular expressions, allowing for
              more complex patterns.
            </li>
            <li>
              <code>
                '^(\([0-9]{3}\) [0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}
                $)'
              </code>
              <ul>
                <li>
                  This is the regular expression used to match valid phone
                  numbers.
                </li>
                <li>
                  <code>^</code> asserts the position at the start of the line.
                </li>
                <li>
                  <code>
                    \([0-9]{3}\) [0-9]{3}-[0-9]{4}
                  </code>{" "}
                  matches the format (xxx) xxx-xxxx.
                  <ul>
                    <li>
                      <code>\(</code> and <code>\)</code> match literal
                      parentheses.
                    </li>
                    <li>
                      <code>[0-9]{3}</code> matches exactly 3 digits.
                    </li>
                    <li>
                      <code>[0-9]{3}</code> matches exactly 3 digits after a
                      space.
                    </li>
                    <li>
                      <code>[0-9]{4}</code> matches exactly 4 digits after a
                      hyphen.
                    </li>
                  </ul>
                </li>
                <li>
                  <code>|</code> acts as an OR operator.
                </li>
                <li>
                  <code>
                    ^[0-9]{3}-[0-9]{3}-[0-9]{4}$
                  </code>{" "}
                  matches the format xxx-xxx-xxxx.
                  <ul>
                    <li>
                      <code>[0-9]{3}</code> matches exactly 3 digits.
                    </li>
                    <li>
                      <code>[0-9]{3}</code> matches exactly 3 digits after a
                      hyphen.
                    </li>
                    <li>
                      <code>[0-9]{4}</code> matches exactly 4 digits after a
                      hyphen.
                    </li>
                  </ul>
                </li>
                <li>
                  <code>$</code> asserts the position at the end of the line.
                </li>
              </ul>
            </li>
            <li>
              <code>file.txt</code> is the input file containing the list of
              phone numbers to be validated.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  194: (
    <>
      <h1>Explanation: Transpose File Shell Script</h1>
      <ul>
        <li>
          <code>#!/bin/bash</code>:
          <ul>
            <li>
              This line is known as a shebang line. It specifies the path to the
              bash shell that will be used to interpret the script. It ensures
              that the script runs in the bash shell environment.
            </li>
          </ul>
        </li>
        <li>
          <code>awk ' ... ' file.txt</code>:
          <ul>
            <li>
              <code>awk</code> is a powerful text processing tool that allows
              for pattern scanning and processing.
            </li>
            <li>
              The script within the single quotes is executed by{" "}
              <code>awk</code>.
            </li>
            <li>
              <code>NR</code> represents the record number, i.e., the current
              line number.
            </li>
            <li>
              <code>NF</code> represents the number of fields in the current
              record.
            </li>
            <li>
              <code>res</code> is an array used to store the transposed result.
            </li>
          </ul>
        </li>
        <li>
          The <code>awk</code> script performs the following steps:
          <ul>
            <li>
              For each line in the file:
              <ul>
                <li>
                  It loops through each field (space-separated values) using a{" "}
                  <code>for</code> loop.
                </li>
              </ul>
            </li>
            <li>
              If it's the first line (<code>NR == 1</code>):
              <ul>
                <li>
                  It stores each field directly in the <code>res</code> array.
                </li>
              </ul>
            </li>
            <li>
              If it's not the first line:
              <ul>
                <li>
                  It appends each field to the corresponding element in the{" "}
                  <code>res</code> array, separated by a space.
                </li>
              </ul>
            </li>
            <li>
              In the <code>END</code> block:
              <ul>
                <li>
                  It loops through the <code>res</code> array and prints each
                  element, effectively transposing the file content.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  195: (
    <>
      <h1>Explanation: Tenth Line Shell Script</h1>
      <ul>
        <li>
          <code>#!/bin/bash</code>:
          <ul>
            <li>
              This line is known as a shebang line. It specifies the path to the
              bash shell that will be used to interpret the script. It ensures
              that the script runs in the bash shell environment.
            </li>
          </ul>
        </li>
        <li>
          <code>sed '10q;d' file.txt</code>:
          <ul>
            <li>
              <code>sed</code> is a stream editor for filtering and transforming
              text.
            </li>
            <li>
              <code>'10q;d'</code> is the script passed to <code>sed</code>.
              <ul>
                <li>
                  <code>10q</code> quits after processing the 10th line.
                </li>
                <li>
                  <code>d</code> deletes the pattern space, so only the 10th
                  line is printed.
                </li>
              </ul>
            </li>
            <li>
              <code>file.txt</code> is the input file from which the 10th line
              is extracted.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  274: (
    <>
      <h1>Solving LeetCode Problem 274 ("H-Index") using Counting Sort</h1>

      <ul>
        <li>
          <strong>Step 1: Understand the Problem</strong>
          <ul>
            <li>
              The H-Index is defined as the maximum value <code>h</code> such
              that the given author has published <code>h</code> papers that
              have each been cited at least <code>h</code> times.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 2: Use Counting Sort Approach</strong>
          <ul>
            <li>
              <strong>Counting Citations:</strong>
              <ul>
                <li>
                  Create an array to count the number of papers with each
                  citation count.
                </li>
              </ul>
            </li>
            <li>
              <strong>Determine the H-Index:</strong>
              <ul>
                <li>
                  Iterate over these counts in reverse order to find the highest
                  possible <code>h</code> index.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Explanation of the Code:</strong>
          <ul>
            <li>
              <strong>Counting Citations:</strong>
              <ul>
                <li>
                  Create a <code>count</code> array of size <code>n + 1</code>{" "}
                  where <code>n</code> is the length of the{" "}
                  <code>citations</code> array.
                </li>
                <li>
                  For each citation, if the citation count is greater than or
                  equal to <code>n</code>, increment <code>count[n]</code>.
                  Otherwise, increment <code>count[c]</code> where{" "}
                  <code>c</code> is the citation count.
                </li>
              </ul>
            </li>
            <li>
              <strong>Calculating H-Index:</strong>
              <ul>
                <li>
                  Iterate from <code>n</code> down to <code>0</code>,
                  maintaining a running total of citations.
                </li>
                <li>
                  The running total keeps track of the number of papers with at
                  least <code>i</code> citations.
                </li>
                <li>
                  The first time this running total meets or exceeds{" "}
                  <code>i</code>, <code>i</code> is the H-Index.
                </li>
              </ul>
            </li>
            <li>
              <strong>Why This Works:</strong>
              <ul>
                <li>
                  The counting sort mechanism ensures that we efficiently count
                  the number of papers with each citation count.
                </li>
                <li>
                  By iterating from the highest possible citation count down to
                  zero, we efficiently determine the highest possible H-Index
                  without sorting the citations array directly.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  561: (
    <>
      {" "}
      <h1>
        Solving LeetCode Problem 561 ("Array Partition I") using Counting Sort
      </h1>
      <ul>
        <li>
          <strong>Step 1: Understand the Problem</strong>
          <ul>
            <li>
              Given an integer array <code>nums</code> of <code>2n</code>{" "}
              integers, your task is to group these integers into <code>n</code>{" "}
              pairs <code>(a1, b1), (a2, b2), ..., (an, bn)</code> such that the
              sum of <code>min(ai, bi)</code> for all <code>i</code> is
              maximized.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 2: Use Counting Sort Approach</strong>
          <ul>
            <li>
              <strong>Counting Numbers:</strong>
              <ul>
                <li>
                  Create an array to count the occurrences of each number.
                </li>
              </ul>
            </li>
            <li>
              <strong>Calculate the Sum:</strong>
              <ul>
                <li>
                  Iterate through the counts to form the pairs and compute the
                  sum.
                </li>
              </ul>
            </li>
          </ul>
        </li>{" "}
        <li>
          <strong>Explanation of the Code:</strong>
          <ul>
            <li>
              <strong>Counting Numbers:</strong>
              <ul>
                <li>
                  Create a <code>count</code> array of size{" "}
                  <code>2 * maxNum + 1</code> where <code>maxNum</code> is the
                  maximum possible absolute value of the numbers in{" "}
                  <code>nums</code>.
                </li>
                <li>
                  For each number in <code>nums</code>, increment the
                  corresponding index in the <code>count</code> array (adjusting
                  for negative numbers by adding <code>maxNum</code>).
                </li>
              </ul>
            </li>
            <li>
              <strong>Calculate the Sum:</strong>
              <ul>
                <li>
                  Initialize a variable <code>sum</code> to store the result and
                  a boolean <code>add</code> to alternate between adding and
                  skipping numbers.
                </li>
                <li>
                  Iterate through the <code>count</code> array. For each
                  non-zero count, add the number to <code>sum</code> if{" "}
                  <code>add</code> is true, then toggle <code>add</code> and
                  decrement the count.
                </li>
              </ul>
            </li>
            <li>
              <strong>Why This Works:</strong>
              <ul>
                <li>
                  The counting sort mechanism ensures that we efficiently sort
                  the numbers without directly sorting the array.
                </li>
                <li>
                  By iterating through the sorted counts and alternately adding
                  the numbers, we maximize the sum of the minimum values of the
                  pairs.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1051: (
    <>
      <h1>
        Solving LeetCode Problem 1051 ("Height Checker") using Counting Sort
      </h1>

      <ul>
        <li>
          <strong>Step 1: Understand the Problem</strong>
          <ul>
            <li>
              Given an array <code>heights</code> representing the heights of
              students in a line, determine how many students are not standing
              in non-decreasing order of height when compared to a sorted
              version of the array.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 2: Use Counting Sort Approach</strong>
          <ul>
            <li>
              <strong>Counting Heights:</strong>
              <ul>
                <li>
                  Create an array to count the occurrences of each height.
                </li>
              </ul>
            </li>
            <li>
              <strong>Reconstruct Sorted Array:</strong>
              <ul>
                <li>
                  Use the count array to create a sorted version of the heights
                  array.
                </li>
              </ul>
            </li>
            <li>
              <strong>Count Discrepancies:</strong>
              <ul>
                <li>
                  Compare the original array with the sorted array to count the
                  number of indices where the heights differ.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Explanation of the Code:</strong>
          <ul>
            <li>
              <strong>Counting Heights:</strong>
              <ul>
                <li>
                  Create a <code>count</code> array of size{" "}
                  <code>maxNum + 1</code> where <code>maxNum</code> is the
                  maximum possible height.
                </li>
                <li>
                  For each height in <code>heights</code>, increment the
                  corresponding index in the <code>count</code> array.
                </li>
              </ul>
            </li>
            <li>
              <strong>Reconstruct Sorted Array:</strong>
              <ul>
                <li>
                  Initialize an array <code>sortedHeights</code> to store the
                  sorted heights.
                </li>
                <li>
                  Iterate through the <code>count</code> array. For each
                  non-zero count, add the height to <code>sortedHeights</code>{" "}
                  until the count is depleted.
                </li>
              </ul>
            </li>
            <li>
              <strong>Count Discrepancies:</strong>
              <ul>
                <li>
                  Initialize a variable <code>discrepancies</code> to store the
                  result.
                </li>
                <li>
                  Iterate through the original <code>heights</code> array and
                  compare each height with the corresponding height in{" "}
                  <code>sortedHeights</code>.
                </li>
                <li>
                  Increment <code>discrepancies</code> for each mismatch.
                </li>
              </ul>
            </li>
            <li>
              <strong>Why This Works:</strong>
              <ul>
                <li>
                  The counting sort mechanism ensures that we efficiently sort
                  the heights without directly sorting the array.
                </li>
                <li>
                  By comparing the original array with the sorted array, we
                  accurately count the number of heights that are out of place.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1122: (
    <>
      {" "}
      <h1>
        Solving LeetCode Problem 1122 ("Relative Sort Array") using Counting
        Sort
      </h1>
      <ul>
        <li>
          <strong>Step 1: Understand the Problem</strong>
          <ul>
            <li>
              Given two arrays <code>arr1</code> and <code>arr2</code>, sort the
              elements of <code>arr1</code> such that the relative ordering of
              items in <code>arr1</code> are the same as in <code>arr2</code>.
              Elements that don't appear in <code>arr2</code> should be placed
              at the end in ascending order.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 2: Use Counting Sort Approach</strong>
          <ul>
            <li>
              <strong>Counting Elements:</strong>
              <ul>
                <li>
                  Create an array to count the occurrences of each element in{" "}
                  <code>arr1</code>.
                </li>
              </ul>
            </li>
            <li>
              <strong>Order According to arr2:</strong>
              <ul>
                <li>
                  Use the counts to create a sorted array that follows the order
                  defined by <code>arr2</code>.
                </li>
              </ul>
            </li>
            <li>
              <strong>Append Remaining Elements:</strong>
              <ul>
                <li>Append the remaining elements in sorted order.</li>
              </ul>
            </li>
          </ul>
        </li>{" "}
        <li>
          <strong>Explanation of the Code:</strong>
          <ul>
            <li>
              <strong>Counting Elements:</strong>
              <ul>
                <li>
                  Create a <code>count</code> array of size{" "}
                  <code>maxNum + 1</code> where <code>maxNum</code> is the
                  maximum possible value in <code>arr1</code>.
                </li>
                <li>
                  For each element in <code>arr1</code>, increment the
                  corresponding index in the <code>count</code> array.
                </li>
              </ul>
            </li>
            <li>
              <strong>Order According to arr2:</strong>
              <ul>
                <li>
                  Initialize an array <code>result</code> to store the sorted
                  elements.
                </li>
                <li>
                  Iterate through <code>arr2</code> and for each element, add it
                  to the <code>result</code> array according to its count.
                </li>
              </ul>
            </li>
            <li>
              <strong>Append Remaining Elements:</strong>
              <ul>
                <li>
                  Iterate through the <code>count</code> array and add the
                  remaining elements to the <code>result</code> array in
                  ascending order.
                </li>
              </ul>
            </li>
            <li>
              <strong>Why This Works:</strong>
              <ul>
                <li>
                  The counting sort mechanism ensures that we efficiently count
                  and sort the elements of <code>arr1</code>.
                </li>
                <li>
                  By following the order of <code>arr2</code> and then appending
                  the remaining elements, we achieve the desired relative
                  sorting.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1135: (
    <>
      {" "}
      <h1>Connecting Cities With Minimum Cost Using Kruskal's Algorithm</h1>
      <ul>
        <li>
          <strong>Steps to Implement Kruskal's Algorithm:</strong>
          <ul>
            <li>
              Define an <code>Edge</code> class to represent edges with source,
              destination, and weight.
            </li>
            <li>
              Use the Union-Find data structure to manage sets of vertices and
              detect cycles.
            </li>
            <li>Sort all edges by their weights in non-decreasing order.</li>
            <li>
              Add edges to the MST one by one, ensuring no cycles are formed,
              until we include <code>n-1</code> edges.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1584: (
    <>
      <h1>Min Cost to Connect All Points using Kruskal's Algorithm</h1>
      <ul>
        <li>
          <strong>Step 1: Define Edge Class</strong>
          <ul>
            <li>
              Create a class to represent each connection between points, which
              includes the two endpoints and the cost of the connection.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 2: Implement Union-Find Data Structure</strong>
          <ul>
            <li>
              Create a Union-Find (also known as Disjoint Set Union, DSU) class
              to manage the sets of points and detect cycles.
            </li>
            <li>
              Implement path compression in the find function to speed up future
              queries.
            </li>
            <li>
              Implement union by rank to keep the tree flat, ensuring efficient
              union operations.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 3: Create and Sort All Possible Edges</strong>
          <ul>
            <li>
              Generate all possible edges between the points and calculate their
              costs using the Manhattan distance formula.
            </li>
            <li>
              Sort the edges by their cost in ascending order to ensure the
              minimum cost edges are considered first.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 4: Apply Kruskal's Algorithm</strong>
          <ul>
            <li>
              Initialize a Union-Find instance to manage the connected
              components of points.
            </li>
            <li>
              Iterate through the sorted edges and add them to the Minimum
              Spanning Tree (MST) if they connect two different components.
            </li>
            <li>Accumulate the total cost of the edges added to the MST.</li>
            <li>
              Stop the process once we've used n-1 edges, where n is the number
              of points, as this is the property of an MST for a connected
              graph.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1168: (
    <>
      {" "}
      <h1>
        Optimize Water Distribution in a Village using Kruskal's Algorithm
      </h1>
      <ul>
        <li>
          <strong>Step 1: Define Edge Class</strong>
          <ul>
            <li>
              Create a class to represent each connection between houses or
              between a house and the well, which includes the two endpoints and
              the cost of the connection.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 2: Implement Union-Find Data Structure</strong>
          <ul>
            <li>
              Create a Union-Find (also known as Disjoint Set Union, DSU) class
              to manage the sets of houses and detect cycles.
            </li>
            <li>
              Implement path compression in the find function to speed up future
              queries.
            </li>
            <li>
              Implement union by rank to keep the tree flat, ensuring efficient
              union operations.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 3: Create and Combine All Possible Connections</strong>
          <ul>
            <li>
              Generate edges for connections between the virtual vertex
              (representing the well) and each house with the cost of digging
              the well.
            </li>
            <li>
              Generate edges for the existing pipes between houses and calculate
              their costs.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 4: Sort All Possible Connections</strong>
          <ul>
            <li>
              Sort all edges by their cost in ascending order to ensure the
              minimum cost edges are considered first.
            </li>
          </ul>
        </li>
        <li>
          <strong>Step 5: Apply Kruskal's Algorithm</strong>
          <ul>
            <li>
              Initialize a Union-Find instance to manage the connected
              components of houses and the well.
            </li>
            <li>
              Iterate through the sorted edges and add them to the Minimum
              Spanning Tree (MST) if they connect two different components.
            </li>
            <li>Accumulate the total cost of the edges added to the MST.</li>
          </ul>
        </li>
        <li>
          <strong>Final Step: Return the Total Minimum Cost</strong>
          <ul>
            <li>
              Once all necessary edges have been added to connect all houses to
              water, return the total accumulated cost as the minimum cost to
              supply water to all houses.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1724: (
    <>
      <h1>
        Explanation of PersistentUnionFind and DistanceLimitedPathsExist in Java
      </h1>
      <h2>PersistentUnionFind Class</h2>
      <ul>
        <li>
          <strong>Fields:</strong>
          <ul>
            <li>
              <code>parent</code>: Array to store the parent of each node.
            </li>
            <li>
              <code>rank</code>: Array to keep track of the rank of each node
              for union by rank.
            </li>
            <li>
              <code>version</code>: Array to store the version (or timestamp)
              when each node was last updated.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Constructor (<code>PersistentUnionFind</code>)
          </strong>
          <ul>
            <li>
              Initializes <code>parent</code> and <code>version</code> arrays.
            </li>
            <li>
              Sets <code>rank</code> array to zeros.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Find Operation (<code>find</code> method)
          </strong>
          <ul>
            <li>
              Implements path compression to flatten the structure of the tree,
              speeding up future queries.
            </li>
            <li>
              Checks if the current node is the root or if the version is
              greater than or equal to <code>t</code>.
            </li>
            <li>
              Recursively finds the root of <code>x</code> if necessary.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Union Operation (<code>union</code> method)
          </strong>
          <ul>
            <li>
              Finds the roots of <code>a</code> and <code>b</code> using{" "}
              <code>find</code>.
            </li>
            <li>
              Merges the trees if they have different roots based on rank to
              keep the tree flat.
            </li>
            <li>
              Updates <code>version</code> for the new root based on the
              provided <code>t</code>.
            </li>
          </ul>
        </li>
      </ul>

      <h2>DistanceLimitedPathsExist Class</h2>
      <ul>
        <li>
          <strong>Fields:</strong>
          <ul>
            <li>
              <code>puf</code>: Instance of <code>PersistentUnionFind</code> to
              manage the persistent union-find structure.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Constructor (<code>DistanceLimitedPathsExist</code>)
          </strong>
          <ul>
            <li>
              Initializes <code>puf</code> with <code>n</code> nodes.
            </li>
            <li>
              Sorts <code>edgeList</code> based on the third element (edge
              weight) using a custom comparator.
            </li>
            <li>
              Iterates through sorted <code>edgeList</code> and unions each edge
              (<code>u</code>, <code>v</code>, <code>dis</code>) into{" "}
              <code>puf</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Query Operation (<code>query</code> method)
          </strong>
          <ul>
            <li>
              Checks if the roots of nodes <code>p</code> and <code>q</code> are
              the same under the edge length <code>limit</code> using{" "}
              <code>puf.find</code>.
            </li>
            <li>
              Returns <code>true</code> if they share the same root (i.e., there
              exists a path between <code>p</code> and <code>q</code> with all
              edges' weights less than or equal to <code>limit</code>),
              otherwise <code>false</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1044: (
    <ul>
      <p>
        It's a <code>rolling hash</code> question.
      </p>
      <li>
        <strong>`longestDupSubstring(String s)` Method:</strong>
        <ul>
          <li>
            Calculates the longest duplicate substring using the suffix array
            and LCP array.
          </li>
          <li>
            Iterates through the LCP array to find the maximum length of common
            prefixes (`maxLen`) and the starting index (`pos`) of the substring.
          </li>
          <li>
            Returns the longest duplicate substring found using the starting
            position `pos` and the maximum length `maxLen`.
          </li>
        </ul>
      </li>
      <li>
        <strong>`buildSuffixArray(String S)` Method:</strong>
        <ul>
          <li>Constructs the suffix array for the input string `S`.</li>
          <li>
            Uses a suffix sorting technique with comparisons based on character
            values.
          </li>
          <li>Returns the constructed suffix array.</li>
        </ul>
      </li>
      <li>
        <strong>`buildLCPArray(int[] suffixArray, String s)` Method:</strong>
        <ul>
          <li>
            Computes the LCP (Longest Common Prefix) array using the suffix
            array and the input string `s`.
          </li>
          <li>
            Compares adjacent suffixes in the suffix array to compute LCP values
            based on character comparisons.
          </li>
          <li>Returns the computed LCP array.</li>
        </ul>
      </li>
    </ul>
  ),
  1062: (
    <ul>
      <p>
        It's a <code>dp</code> question
      </p>
      <li>
        <strong>Class Structure:</strong>
        <ul>
          <li>
            <code>Solution</code> class contains methods to find the longest
            repeating substring.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize variables and arrays needed for suffix array construction
            and LCP computation.
          </li>
          <li>
            <code>p</code>: Array to store powers of base for hashing.
          </li>
          <li>
            <code>h</code>: Array to store hash values of prefixes.
          </li>
          <li>
            <code>base</code>: Base value for hashing.
          </li>
        </ul>
      </li>
      <li>
        <strong>Suffix Array Construction:</strong>
        <ul>
          <li>
            <code>buildSuffixArray(String s)</code>: Constructs the suffix array
            of string <code>s</code>.
          </li>
          <li>
            Uses sorting and doubling technique to build the suffix array
            efficiently.
          </li>
          <li>
            Utilizes a custom comparator to sort suffixes lexicographically.
          </li>
          <li>
            Returns the suffix array which represents the starting indices of
            suffixes in sorted order.
          </li>
        </ul>
      </li>
      <li>
        <strong>LCP Array Construction:</strong>
        <ul>
          <li>
            <code>buildLCPArray(int[] suffixArray, String s)</code>: Constructs
            the LCP (Longest Common Prefix) array using the suffix array and
            string <code>s</code>.
          </li>
          <li>
            Computes the LCP values between consecutive suffixes in the sorted
            order.
          </li>
          <li>
            Helps in determining the length of common prefixes between suffixes.
          </li>
        </ul>
      </li>
      <li>
        <strong>Binary Search for Longest Repeating Substring:</strong>
        <ul>
          <li>
            Uses binary search to find the maximum length of the repeating
            substring.
          </li>
          <li>
            Iterates through possible lengths, checking if there exists a
            repeating substring of that length.
          </li>
          <li>
            <code>check(String s, int len)</code>: Checks if there exists a
            repeating substring of length <code>len</code> using hash sets for
            efficient lookup.
          </li>
        </ul>
      </li>
      <li>
        <strong>Output:</strong>
        <ul>
          <li>
            Returns the longest repeating substring found using the above
            methods.
          </li>
        </ul>
      </li>
    </ul>
  ),
  "1062_dynamic_programming": (
    <>
      <ul>
        <li>
          <strong>Class Structure:</strong>
          <ul>
            <li>
              <code>Solution</code> class contains a method to find the length
              of the longest repeating substring.
            </li>
          </ul>
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Initialize variables and arrays needed for dynamic programming.
            </li>
            <li>
              <code>n</code>: Length of the string <code>s</code>.
            </li>
            <li>
              <code>ans</code>: Variable to store the maximum length of the
              longest repeating substring found.
            </li>
            <li>
              <code>dp</code>: 2D array where <code>dp[i][j]</code> represents
              the length of the longest repeating substring ending at indices{" "}
              <code>i</code> and <code>j</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Dynamic Programming Approach:</strong>
          <ul>
            <li>
              Iterate over each pair of indices <code>(i, j)</code> in the
              string where <code>i &lt; j</code>.
            </li>
            <li>
              Check if characters at indices <code>i</code> and <code>j</code>{" "}
              are the same.
            </li>
            <li>
              If they are the same, update <code>dp[i][j]</code>:
              <ul>
                <li>
                  If <code>i &gt; 0</code>, set{" "}
                  <code>dp[i][j] = dp[i - 1][j - 1] + 1</code>.
                </li>
                <li>
                  Otherwise, set <code>dp[i][j] = 1</code> (starting a new
                  substring).
                </li>
              </ul>
            </li>
            <li>
              Update <code>ans</code> to keep track of the maximum length found.
            </li>
          </ul>
        </li>
        <li>
          <strong>Output:</strong>
          <ul>
            <li>
              Return <code>ans</code>, which represents the length of the
              longest repeating substring in the string <code>s</code>.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Dry Run with Example String "aabcaabdaab":</h3>

      <h4>Initialization:</h4>
      <ul>
        <li>
          <code>n = 11</code>
        </li>
        <li>
          <code>ans = 0</code>
        </li>
        <li>
          <code>dp</code> array (initialized to zeros):
          <pre>
            dp = [ <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] <br />]
          </pre>
        </li>
      </ul>

      <h4>Dynamic Programming Calculation:</h4>
      <ul>
        <li>
          Iterate over each pair of indices <code>(i, j)</code> where{" "}
          <code>i &lt; j</code>:
        </li>
        <li>
          Compare characters at indices <code>i</code> and <code>j</code>:
        </li>
        <li>
          Update <code>dp[i][j]</code> if characters are the same:
        </li>
        <li>
          <code>dp[0][1] = 1</code> (since 'a' at index 0 equals 'a' at index 1)
        </li>
        <li>
          <code>dp[0][2] = 0</code> (since 'a' at index 0 does not equal 'b' at
          index 2)
        </li>
        <li>
          <code>dp[0][3] = 0</code> (since 'a' at index 0 does not equal 'c' at
          index 3)
        </li>
        <li>
          <code>dp[1][2] = 0</code> (since 'a' at index 1 does not equal 'b' at
          index 2)
        </li>
        <li>
          <code>dp[1][3] = 0</code> (since 'a' at index 1 does not equal 'c' at
          index 3)
        </li>
        <li>
          <code>dp[1][4] = 1</code> (since 'a' at index 1 equals 'a' at index 4)
        </li>
        <li>
          Continue updating <code>dp</code> and <code>ans</code> for all valid
          pairs <code>(i, j)</code>.
        </li>
      </ul>

      <h4>
        Final <code>dp</code> Array for input s="<code>aabcaabdaab</code>":
      </h4>
      <pre>
        dp = [ <br />
        [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0], <br />
        [0, 0, 0, 0, 1, 2, 0, 0, 1, 2, 0], <br />
        [0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0], <br />
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0], <br />
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0], <br />
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3], <br />
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], <br />
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], <br />
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] <br />]
      </pre>

      <h4>Final Output:</h4>
      <ul>
        <li>
          Return <code>ans = 3</code>, which represents the length of the
          longest repeating substring in the string <code>"aabcaabdaab"</code>.
        </li>
      </ul>
    </>
  ),
  1698: (
    <>
      <ul>
        <p>
          It's a <code>trie</code> question
        </p>
        <li>
          Initialize variables and data structures:
          <ul>
            <li>
              <code>n</code>: Length of the string <code>s</code>.
            </li>
            <li>
              <code>suffixArray</code>: Array storing starting indices of
              suffixes of <code>s</code>, sorted lexicographically.
            </li>
            <li>
              <code>lcpArray</code>: Array storing the longest common prefix
              lengths between adjacent suffixes in <code>suffixArray</code>.
            </li>
            <li>
              <code>count</code>: Variable to count the number of distinct
              substrings.
            </li>
          </ul>
        </li>
        <li>
          Build the suffix array for <code>s = "aabbaba"</code>.
        </li>
        <li>
          Build the LCP array using the suffix array and string <code>s</code>.
        </li>
        <li>
          Iterate through the suffix array and calculate the total number of
          distinct substrings:
          <ul>
            <li>
              For each suffix, add its length to <code>count</code>.
            </li>
            <li>
              Subtract the LCP value between consecutive suffixes from{" "}
              <code>count</code> to avoid counting duplicate substrings.
            </li>
          </ul>
        </li>
        <li>
          Final <code>count</code> will give the total number of distinct
          substrings in <code>s</code>.
        </li>
      </ul>
    </>
  ),
  1923: (
    <>
      <p>
        It's a <code>Rolling Hash</code> question
      </p>
      <ul>
        <li>
          <strong>Binary Search for Longest Common Subpath:</strong>
        </li>
        <ul>
          <li>
            The method <code>longestCommonSubpath</code> performs a binary
            search to find the length of the longest common subpath among all
            paths.
          </li>
          <li>
            It initializes two pointers, <code>l</code> and <code>r</code>,
            where <code>l</code> starts at 0 (minimum possible length) and{" "}
            <code>r</code> starts at the length of the first path.
          </li>
          <li>
            It iteratively adjusts the midpoint <code>m</code> and checks if
            there exists a common subpath of length <code>m</code> using{" "}
            <code>checkCommonSubpath</code> method.
          </li>
          <li>
            If such a subpath is found, it adjusts <code>l</code> to{" "}
            <code>m</code>; otherwise, it adjusts <code>r</code> to{" "}
            <code>m - 1</code> to continue the binary search.
          </li>
          <li>
            Finally, it returns <code>l</code>, which represents the length of
            the longest common subpath found.
          </li>
        </ul>
        less Copy code
        <li>
          <strong>Rabin-Karp Algorithm for Substring Hashing:</strong>
        </li>
        <ul>
          <li>
            The method <code>rabinKarp</code> computes the set of hash values
            for all substrings of length <code>m</code> in a given path using
            the Rabin-Karp rolling hash technique.
          </li>
          <li>
            It initializes a set <code>hashes</code> to store unique hash
            values.
          </li>
          <li>
            Using constants <code>kMod</code> and <code>kBase</code>, it
            computes the hash value for each substring efficiently.
          </li>
          <li>
            It iterates through the path, updating the hash value by adding the
            next character and removing the contribution of the character that
            falls out of the window (if applicable).
          </li>
          <li>
            Once the hash value for a substring of length <code>m</code> is
            computed, it is added to the <code>hashes</code> set.
          </li>
          <li>
            After processing all substrings of length <code>m</code>, the method
            returns the set of hash values (<code>hashes</code>).
          </li>
        </ul>
        <li>
          <strong>Checking Common Subpath:</strong>
        </li>
        <ul>
          <li>
            The method <code>checkCommonSubpath</code> takes the array of paths
            and the length of the subpath <code>m</code>.
          </li>
          <li>
            It initializes an array of hash sets <code>hashSets</code>, where
            each set contains hash values of all substrings of length{" "}
            <code>m</code> for each path.
          </li>
          <li>
            It uses the <code>rabinKarp</code> method to compute these hash
            sets.
          </li>
          <li>
            It then checks if the first path's hash set contains hash values
            that are present in all other path's hash sets using{" "}
            <code>Arrays.stream().allMatch()</code>.
          </li>
          <li>
            If it finds a common hash value among all sets, it returns{" "}
            <code>true</code>, indicating the existence of a common subpath of
            length <code>m</code>.
          </li>
          <li>
            If no common hash value is found, it returns <code>false</code>.
          </li>
        </ul>
      </ul>
    </>
  ),
  1977: (
    <>
      <ul>
        <p>
          It's a <code>dp</code> question
        </p>
        <li>
          <strong>Initial Check:</strong> Check if the first character of `num`
          is '0'. If true, return 0 immediately as no valid decoding can start
          with '0'.
        </li>

        <li>
          <strong>Constants:</strong> Define constants:
          <ul>
            <li>
              <code>kMod = 1_000_000_007</code>: Modulo value to prevent
              overflow.
            </li>
            <li>
              <code>n = num.length()</code>: Length of the input string `num`.
            </li>
          </ul>
        </li>

        <li>
          <strong>Arrays Initialization:</strong>
          <ul>
            <li>
              <code>dp[i][k]</code>: 2D array to store the number of possible
              lists of integers ending in <code>num[i]</code> with the length of
              the last number being 1..k.
            </li>
            <li>
              <code>lcs[i][j]</code>: 2D array to store the number of the same
              digits in <code>num[i..n)</code> and <code>num[j..n)</code>.
            </li>
          </ul>
        </li>

        <li>
          <strong>Step 1: Compute LCS Array</strong>
          <ul>
            <li>
              Iteratively compute the{" "}
              <strong>Longest Common Subsequence (LCS)</strong> between suffixes
              of `num` to fill the <code>lcs</code> array.
            </li>
            <li>
              This helps in efficiently comparing substrings of `num` to
              determine similarities.
            </li>
          </ul>
        </li>

        <li>
          <strong>Step 2: Dynamic Programming to Count Combinations</strong>
          <ul>
            <li>
              Iterate through each position <code>i</code> in `num` and each
              possible length <code>k</code> of the last number.
            </li>
            <li>
              Update <code>dp[i][k]</code> based on several conditions:
              <ul>
                <li>
                  If the substring starts with '0', skip it as it's not a valid
                  number.
                </li>
                <li>
                  If considering the entire string, increment the count by 1.
                </li>
                <li>
                  If the length <code>k</code> is insufficient, add counts from{" "}
                  <code>dp[s - 1][s]</code>.
                </li>
                <li>
                  Use <code>lcs</code> to determine if the substring can be
                  decoded as a valid number (compare characters).
                </li>
                <li>
                  Apply modulo <code>kMod</code> to ensure results fit within
                  integer limits.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Return:</strong> Return <code>dp[n - 1][n] % kMod</code>,
          which contains the number of ways to decode the entire string `num`.
        </li>
      </ul>
    </>
  ),
  2223: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>n</code> is the length of the string <code>s</code>.
          </li>
          <li>
            <code>z</code> is an array where <code>z[i]</code> stores the length
            of the longest common prefix between the substring starting at index{" "}
            <code>i</code> and the entire string <code>s</code>.
          </li>
          <li>
            <code>l</code> and <code>r</code> are pointers initialized to{" "}
            <code>0</code>, representing the rightmost segment match.
          </li>
        </ul>
      </li>
      <li>
        <strong>Z-function Calculation:</strong>
        <li>
          The Z-function is computed using the algorithm described on{" "}
          <a
            href="https://cp-algorithms.com/string/z-function.html#implementation"
            target="_blank"
            rel="noreferrer"
          >
            CP-Algorithms
          </a>
          .
        </li>
        <li>
          <code>l</code> and <code>r</code> are pointers that represent the
          rightmost segment match. Initially, <code>l = r = 0</code>.
        </li>
        <li>
          The algorithm iterates through each character in the string (
          <code>i</code> from <code>1</code> to <code>n-1</code>):
        </li>
        <li>
          If <code>i &gt; r</code>, it checks if <code>z[i - l]</code> is
          smaller than the segment length <code>r - i</code>. This helps to
          initialize <code>z[i]</code> efficiently.
        </li>
        <li>
          Then, it iteratively extends <code>z[i]</code> by comparing characters
          between <code>s.charAt(z[i])</code> and{" "}
          <code>s.charAt(i + z[i])</code> until a mismatch is found or the end
          of the string is reached.
        </li>
        <li>
          If <code>i + z[i]</code> exceeds <code>r</code>, it updates{" "}
          <code>l</code> and <code>r</code> to <code>i</code> and{" "}
          <code>i + z[i]</code>, respectively, indicating a new rightmost
          segment match.
        </li>
        <ul>
          <li>
            Iterate through each character in the string <code>s</code> from{" "}
            <code>1</code> to <code>n-1</code>.
          </li>
          <li>
            Update <code>z[i]</code> based on the longest common prefix using
            the segment match pointers <code>l</code> and <code>r</code>.
          </li>
          <li>
            Extend <code>z[i]</code> by comparing characters until a mismatch is
            found or the end of the string is reached.
          </li>
          <li>
            Update <code>l</code> and <code>r</code> when extending{" "}
            <code>z[i]</code> exceeds <code>r</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Calculate Sum of Scores:</strong>
        <ul>
          <li>
            Sum all values in the <code>z</code> array to get the total score of
            all prefixes.
          </li>
          <li>
            Add <code>n</code> to account for the score of the entire string{" "}
            <code>s</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  "164_bucket_sort": (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Compute the minimum and maximum values in the array (
            <code>minVal</code> and <code>maxVal</code>).
          </li>
          <li>
            Calculate the size of each bucket based on the number of elements
            and the range of values.
          </li>
        </ul>
      </li>

      <li>
        <strong>Bucket Assignment:</strong>
        <ul>
          <li>
            Assign each element in the array to its respective bucket based on
            its value.
          </li>
        </ul>
      </li>

      <li>
        <strong>Compute Maximum Gap:</strong>
        <ul>
          <li>For each bucket, calculate the minimum and maximum values.</li>
          <li>
            Compute the difference between the minimum of the current bucket and
            the maximum of the previous non-empty bucket to find potential
            maximum gaps.
          </li>
          <li>Track the maximum gap encountered during this computation.</li>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong> The maximum gap found is the desired
        output.
      </li>
    </ul>
  ),
  220: (
    <>
      <ul>
        <li>
          <strong>Edge Case Handling:</strong>
          <ul>
            <li>If ( k &lt; 0 ) or ( t &gt; 0 ), return false immediately.</li>
          </ul>
        </li>
        <li>
          <strong>Bucket Size Calculation:</strong>
          <ul>
            <li>Set bucket size to ( t + 1 ) to manage ranges of values.</li>
          </ul>
        </li>
        <li>
          <strong>Initialize Bucket HashMap:</strong>
          <ul>
            <li>
              Create a HashMap to store elements based on their bucket index.
            </li>
          </ul>
        </li>
        <li>
          <strong>Process Each Element:</strong>
          <ul>
            <li>
              Iterate through the array and compute the bucket index for the
              current element.
            </li>
            <li>
              Check the current bucket and adjacent buckets for potential
              duplicates within the range ( t ).
            </li>
            <li>Add the current element to the bucket.</li>
            <li>
              Remove elements that are out of the range ( k ) from the buckets.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>If no such elements are found, return false.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  347: (
    <ul>
      <li>
        <strong>Count Frequencies:</strong>
        <ul>
          <li>
            Use a HashMap to count the frequency of each element in the array.
          </li>
        </ul>
      </li>
      <li>
        <strong>Bucket Sort:</strong>
        <ul>
          <li>
            Create an array of lists (buckets) where the index represents the
            frequency.
          </li>
          <li>
            Place each element into its corresponding bucket based on its
            frequency.
          </li>
        </ul>
      </li>
      <li>
        <strong>Collect Top K Frequent Elements:</strong>
        <ul>
          <li>
            Iterate through the buckets from the highest frequency to the
            lowest.
          </li>
          <li>Collect the elements until we have gathered `k` elements.</li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>Convert the result list to an array and return it.</li>
        </ul>
      </li>
    </ul>
  ),
  451: (
    <ul>
      <li>
        <strong>Count Frequencies:</strong>
        <ul>
          <li>
            Use a HashMap to count the frequency of each character in the
            string.
          </li>
        </ul>
      </li>
      <li>
        <strong>Bucket Sort:</strong>
        <ul>
          <li>
            Create an array of lists (buckets) where the index represents the
            frequency.
          </li>
          <li>
            Place each character into its corresponding bucket based on its
            frequency.
          </li>
        </ul>
      </li>
      <li>
        <strong>Construct Result:</strong>
        <ul>
          <li>
            Iterate through the buckets from the highest frequency to the
            lowest.
          </li>
          <li>
            Append characters to the result string, repeating each character
            according to its frequency.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>Convert the result StringBuilder to a string and return it.</li>
        </ul>
      </li>
    </ul>
  ),
  692: (
    <ul>
      <li>
        <strong>Count Frequencies:</strong>
        <ul>
          <li>Use a HashMap to count the frequency of each word.</li>
        </ul>
      </li>
      <li>
        <strong>Bucket Sort:</strong>
        <ul>
          <li>
            Create an array of lists (buckets) where the index represents the
            frequency.
          </li>
          <li>
            Place each word into its corresponding bucket based on its
            frequency.
          </li>
        </ul>
      </li>
      <li>
        <strong>Collect Results:</strong>
        <ul>
          <li>
            Iterate through the buckets from the highest frequency to the
            lowest.
          </li>
          <li>
            Sort words lexicographically within the same frequency bucket.
          </li>
          <li>Collect words until we have `k` words.</li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>Ensure the result list only contains `k` elements.</li>
          <li>Return the list of the top `k` frequent words.</li>
        </ul>
      </li>
    </ul>
  ),
  "912_bucket_sort": (
    <ul>
      <li>
        <strong>Determine the Range:</strong>
        <ul>
          <li>Find the minimum and maximum values in the array.</li>
        </ul>
      </li>
      <li>
        <strong>Create Buckets:</strong>
        <ul>
          <li>
            Create an array of lists (buckets) where each list will hold a range
            of values.
          </li>
          <li>
            The number of buckets is determined based on the range and the
            number of elements.
          </li>
        </ul>
      </li>
      <li>
        <strong>Distribute the Elements:</strong>
        <ul>
          <li>
            Iterate through the array and place each element into its
            corresponding bucket based on its value.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sort Each Bucket:</strong>
        <ul>
          <li>
            Sort each bucket individually using an appropriate sorting
            algorithm.
          </li>
        </ul>
      </li>
      <li>
        <strong>Concatenate Buckets:</strong>
        <ul>
          <li>
            Combine all the sorted buckets into the original array to get the
            sorted array.
          </li>
        </ul>
      </li>
    </ul>
  ),
  215: (
    <ul>
      <li>
        <strong>Class Declaration:</strong>
        <ul>
          <li>Defines a public class named Solution.</li>
        </ul>
      </li>
      <li>
        <strong>findKthLargest Method:</strong>
        <ul>
          <li>
            Defines a public method to find the k-th largest element in an
            array.
          </li>
          <li>
            Initializes two pointers, left and right, to the start and end of
            the array, respectively.
          </li>
          <li>
            Creates an instance of the Random class to generate random pivot
            indices.
          </li>
          <li>
            Enters an infinite loop that continues until the k-th largest
            element is found.
          </li>
          <li>
            Within the loop, selects a random pivot index within the current
            subarray.
          </li>
          <li>
            Calls a partition method to rearrange elements around the pivot and
            returns the final pivot index.
          </li>
          <li>
            Checks if the pivot index is equal to the target index for the k-th
            largest element:
            <ul>
              <li>
                If true, returns the element at the pivot index as the k-th
                largest element.
              </li>
            </ul>
          </li>
          <li>
            If the pivot index is greater than the target index:
            <ul>
              <li>Adjusts the right pointer to search in the left subarray.</li>
            </ul>
          </li>
          <li>
            If the pivot index is less than the target index:
            <ul>
              <li>Adjusts the left pointer to search in the right subarray.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Partition Method (Referenced):</strong>
        <ul>
          <li>
            Partitions the array around the pivot, such that elements less than
            the pivot are on one side and elements greater than the pivot are on
            the other side.
          </li>
          <li>
            Swaps the pivot element with other elements to place it in its
            correct sorted position.
          </li>
          <li>Returns the final index of the pivot element.</li>
        </ul>
      </li>
      <li>
        <strong>Swap Method (Referenced):</strong>
        <ul>
          <li>Swaps two elements in the array.</li>
          <li>Uses a temporary variable to facilitate the swap.</li>
        </ul>
      </li>
    </ul>
  ),
  "215_heap_(priority_queue)": (
    <ul>
      <li>
        <strong>Class Declaration:</strong>
        <ul>
          <li>Defines a public class named Solution.</li>
        </ul>
      </li>
      <li>
        <strong>findKthLargest Method:</strong>
        <ul>
          <li>
            Defines a public method to find the k-th largest element in an
            array.
          </li>
          <li>
            Initializes a priority queue named minHeap which serves as a
            min-heap.
          </li>
          <li>
            Iterates through each element in the input array nums:
            <ul>
              <li>Adds the current element to the min-heap.</li>
              <li>
                Checks if the size of the min-heap exceeds k:
                <ul>
                  <li>
                    If true, removes the smallest element from the min-heap to
                    maintain the size of k.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            After processing all elements, the min-heap contains the k largest
            elements in the array.
          </li>
          <li>
            The root of the min-heap (the smallest element in the heap) is the
            k-th largest element in the array.
          </li>
          <li>Returns the root of the min-heap.</li>
        </ul>
      </li>
      <li>
        <strong>Time Complexity:</strong>
        <ul>
          <li>
            The time complexity of adding an element to a priority queue (heap)
            is O(log k), where k is the size of the heap.
          </li>
          <li>
            Since we add each element in nums to the heap exactly once, and
            remove elements from the heap until its size is k, the overall time
            complexity is O(n log k), where n is the number of elements in nums.
          </li>
        </ul>
      </li>
      <li>
        <strong>Space Complexity:</strong>
        <ul>
          <li>
            The space complexity is O(k) due to the min-heap storing at most k
            elements.
          </li>
        </ul>
      </li>
    </ul>
  ),
  324: (
    <ul>
      <li>
        <strong>Class Declaration:</strong>
        <ul>
          <li>Defines a public class named Solution.</li>
        </ul>
      </li>
      <li>
        <strong>wiggleSort Method:</strong>
        <ul>
          <li>
            Public method to rearrange the input array nums into a "wiggle"
            pattern.
          </li>
          <li>Uses quickselect to find the median of the array.</li>
          <li>
            Partitions the array into three sections:
            <ul>
              <li>Elements less than the median.</li>
              <li>Elements equal to the median.</li>
              <li>Elements greater than the median.</li>
            </ul>
          </li>
          <li>
            Uses a helper function newIndex to calculate the new index after
            rearrangement to achieve the "wiggle" pattern.
          </li>
        </ul>
      </li>
      <li>
        <strong>quickselect Method:</strong>
        <ul>
          <li>
            Private method to find the k-th smallest element using quickselect
            algorithm.
          </li>
          <li>
            Partitions the array around a pivot and recursively selects the
            partition to search based on the value of k.
          </li>
        </ul>
      </li>
      <li>
        <strong>partition Method:</strong>
        <ul>
          <li>Private method to partition the array for quickselect.</li>
          <li>
            Uses a pivot (usually the rightmost element) to partition elements
            into smaller and larger sections.
          </li>
        </ul>
      </li>
      <li>
        <strong>newIndex Method:</strong>
        <ul>
          <li>
            Private method to calculate the new index after rearrangement for
            achieving the "wiggle" pattern.
          </li>
          <li>
            Uses a mathematical formula to ensure elements are rearranged
            properly.
          </li>
        </ul>
      </li>
      <li>
        <strong>swap Method:</strong>
        <ul>
          <li>Utility method to swap elements in the array.</li>
          <li>
            Helps in reordering elements during partitioning or rearrangement.
          </li>
        </ul>
      </li>
    </ul>
  ),
  "347_quickselect": (
    <ul>
      <li>
        <strong>Class Declaration:</strong>
        <ul>
          <li>Defines a public class named Solution.</li>
        </ul>
      </li>
      <li>
        <strong>topKFrequent Method:</strong>
        <ul>
          <li>
            Public method to find the top k frequent elements in the input array
            nums.
          </li>
          <li>Uses a HashMap to count frequencies of each element in nums.</li>
          <li>
            Converts unique elements and their frequencies into a list for
            quickselect.
          </li>
          <li>
            Applies quickselect algorithm to find the k-th most frequent
            elements based on their frequencies.
          </li>
          <li>
            Partitions the list based on frequency and retrieves the top k
            elements.
          </li>
          <li>Returns an array containing the top k frequent elements.</li>
        </ul>
      </li>
      <li>
        <strong>partition Method:</strong>
        <ul>
          <li>
            Private method to partition the list based on frequency for
            quickselect.
          </li>
          <li>
            Uses the frequency of elements stored in the frequencyMap to
            determine the order.
          </li>
          <li>Swaps elements in the list to rearrange based on frequency.</li>
          <li>Returns the index of the pivot element after partitioning.</li>
        </ul>
      </li>
    </ul>
  ),
  973: (
    <ul>
      <li>
        <strong>Class Declaration:</strong>
        <ul>
          <li>Defines a public class named Solution.</li>
        </ul>
      </li>
      <li>
        <strong>kClosest Method:</strong>
        <ul>
          <li>
            Public method to find the K closest points to the origin (0, 0) in
            the input array of points.
          </li>
          <li>
            Uses quickselect algorithm to find the K smallest distances from the
            origin.
          </li>
          <li>
            Partitions the array of points based on their distances from the
            origin using a helper method partition.
          </li>
          <li>
            Collects the K closest points after finding the partition point.
          </li>
          <li>Returns an array containing the K closest points.</li>
        </ul>
      </li>
      <li>
        <strong>partition Method:</strong>
        <ul>
          <li>
            Helper method to partition the array of points based on their
            distances from the origin.
          </li>
          <li>
            Selects a pivot point and rearranges the array such that points
            closer to the origin are on the left side of the pivot.
          </li>
          <li>
            Uses the distance method to calculate the squared distance from the
            origin.
          </li>
          <li>Returns the index of the pivot after partitioning.</li>
        </ul>
      </li>
      <li>
        <strong>distance Method:</strong>
        <ul>
          <li>
            Helper method to calculate the squared distance of a point from the
            origin (0, 0).
          </li>
          <li>
            Uses the formula: distance = x^2 + y^2, where x and y are the
            coordinates of the point.
          </li>
          <li>Returns the squared distance.</li>
        </ul>
      </li>
      <li>
        <strong>swap Method:</strong>
        <ul>
          <li>Helper method to swap two elements in the array of points.</li>
          <li>Facilitates the rearrangement of points during partitioning.</li>
        </ul>
      </li>
    </ul>
  ),
  "973_heap_(priority_queue)": (
    <ul>
      <li>
        <strong>Class Declaration:</strong>
        <ul>
          <li>Defines a public class named Solution.</li>
        </ul>
      </li>
      <li>
        <strong>kClosest Method:</strong>
        <ul>
          <li>
            Public method to find the K closest points to the origin (0, 0) in
            the input array of points.
          </li>
          <li>
            Uses a max heap (priority queue) to store points based on their
            distances from the origin.
          </li>
          <li>
            Iterates through each point in the input array and adds it to the
            max heap.
          </li>
          <li>
            Maintains the size of the max heap as k by removing the farthest
            point when necessary.
          </li>
          <li>
            Converts the max heap into the result array containing the K closest
            points.
          </li>
          <li>Returns the result array.</li>
        </ul>
      </li>
      <li>
        <strong>distance Method:</strong>
        <ul>
          <li>
            Private method to calculate the squared distance of a point from the
            origin (0, 0).
          </li>
          <li>
            Uses the formula: distance = x^2 + y^2, where x and y are the
            coordinates of the point.
          </li>
          <li>Returns the squared distance.</li>
        </ul>
      </li>
    </ul>
  ),
  1738: (
    <ul>
      <li>
        <strong>Class Declaration:</strong>
        <ul>
          <li>Defines a public class named Solution.</li>
        </ul>
      </li>
      <li>
        <strong>kthLargestValue Method:</strong>
        <ul>
          <li>
            Public method to find the Kth largest XOR coordinate value in the
            input matrix.
          </li>
          <li>
            Computes XOR values for each coordinate in the matrix and stores
            them in xorMatrix.
          </li>
          <li>
            Uses quickselect algorithm to find the Kth largest XOR value from
            the xorValues list.
          </li>
          <li>Returns the Kth largest XOR value.</li>
        </ul>
      </li>
      <li>
        <strong>quickselect Method:</strong>
        <ul>
          <li>
            Private method to find the Kth smallest element (0-indexed) in an
            array using quickselect.
          </li>
          <li>
            Partitions the array around a pivot element and recursively selects
            the partition to search based on the value of k.
          </li>
          <li>Returns the Kth smallest element.</li>
        </ul>
      </li>
      <li>
        <strong>partition Method:</strong>
        <ul>
          <li>Private method to partition the array for quickselect.</li>
          <li>
            Uses the last element as pivot and rearranges elements so that
            elements smaller than pivot are on the left, and larger are on the
            right.
          </li>
          <li>Returns the index of the pivot after partitioning.</li>
        </ul>
      </li>
      <li>
        <strong>swap Method:</strong>
        <ul>
          <li>Private method to swap elements in an array.</li>
          <li>
            Used by partition method to facilitate element swapping during
            partitioning.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1985: (
    <ul>
      <li>
        <strong>Class Declaration:</strong>
        <ul>
          <li>Defines a public class named Solution.</li>
          <li>
            Includes a Random object `rand` for generating random numbers.
          </li>
        </ul>
      </li>
      <li>
        <strong>compare Method:</strong>
        <ul>
          <li>
            Custom comparison method `compare` that compares two strings `a` and
            `b` based on their lengths.
          </li>
          <li>
            If lengths are different, returns the difference between lengths
            (descending order).
          </li>
          <li>
            If lengths are the same, compares lexicographically in descending
            order.
          </li>
        </ul>
      </li>
      <li>
        <strong>kthLargestNumber Method:</strong>
        <ul>
          <li>
            Public method to find the Kth largest string number in the array
            `nums`.
          </li>
          <li>Initializes the `rand` Random object.</li>
          <li>
            Calls `quickSort` method to perform quicksort on `nums` to find the
            Kth largest number.
          </li>
          <li>Returns the Kth largest number found.</li>
        </ul>
      </li>
      <li>
        <strong>quickSort Method:</strong>
        <ul>
          <li>
            Recursive method to perform quicksort on the `nums` array to find
            the Kth largest number.
          </li>
          <li>
            Uses a random index `selected` as pivot and swaps it with the first
            element `start`.
          </li>
          <li>
            Partitions the array into two parts: elements smaller than
            `nums[start]` and elements larger or equal to `nums[start]`.
          </li>
          <li>
            If the length of the smaller part (`idx - start + 1`) equals `k`,
            the Kth largest element is found.
          </li>
          <li>
            Recursively calls `quickSort` on the appropriate partition based on
            the comparison result.
          </li>
        </ul>
      </li>
      <li>
        <strong>swap Method:</strong>
        <ul>
          <li>Utility method to swap elements in the `nums` array.</li>
        </ul>
      </li>
    </ul>
  ),
  "1985_heap_(priority_queue)": (
    <ul>
      <li>
        <strong>Class Declaration:</strong>
        <ul>
          <li>Defines a public class named Solution.</li>
        </ul>
      </li>
      <li>
        <strong>kthLargestNumber Method:</strong>
        <ul>
          <li>
            Public method to find the Kth largest string number in the array
            `nums`.
          </li>
          <li>
            Uses a min-heap (priority queue) to keep track of the smallest `k`
            elements encountered so far.
          </li>
          <li>
            The min-heap is initialized with a comparator that prioritizes
            shorter strings (length comparison) and then lexicographical order
            if lengths are the same.
          </li>
          <li>Iterates through each string `num` in the `nums` array:</li>
          <ul>
            <li>Adds `num` to the min-heap.</li>
            <li>
              If the size of the min-heap exceeds `k`, removes the smallest
              element (maintaining the largest `k` elements only).
            </li>
          </ul>
          <li>
            After processing all elements, the root of the min-heap (the
            smallest element in the heap) will be the Kth largest element in the
            array.
          </li>
          <li>Returns the Kth largest element found.</li>
        </ul>
      </li>
    </ul>
  ),
  "2343_quickselect": (
    <>
      <ul>
        <li>
          <strong>Pair Class:</strong>
          <ul>
            <li>
              Defines a <code>Pair</code> class representing a trimmed number
              and its original index in the input array.
            </li>
            <li>
              Implements <code>Comparable</code> to compare pairs based on
              trimmed numbers and original indices.
            </li>
          </ul>
        </li>
        <li>
          <strong>smallestTrimmedNumbers Method:</strong>
          <ul>
            <li>
              Initializes <code>result</code> array to store results of each
              query.
            </li>
            <li>
              Uses <code>trimmedMap</code> to cache trimmed arrays for different
              trim lengths.
            </li>
            <li>
              Processes each query:
              <ul>
                <li>
                  Retrieves or computes the trimmed array for the specified trim
                  length.
                </li>
                <li>
                  Creates <code>Pair</code> objects from the trimmed array
                  elements.
                </li>
                <li>
                  Finds the kth smallest Pair using <code>findKthSmallest</code>{" "}
                  method.
                </li>
                <li>
                  Stores the original index of the kth smallest Pair in{" "}
                  <code>result</code>.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>trimStrings Method:</strong>
          <ul>
            <li>
              Trims each string in <code>nums</code> to the specified length{" "}
              <code>trimLength</code>.
            </li>
            <li>Returns a new array of trimmed strings.</li>
          </ul>
        </li>
        <li>
          <strong>findKthSmallest Method:</strong>
          <ul>
            <li>
              Uses modified quickselect algorithm to find the kth smallest{" "}
              <code>Pair</code> in <code>pairs</code>.
            </li>
            <li>
              Partitions <code>pairs</code> based on comparisons using{" "}
              <code>partition</code> method.
            </li>
            <li>
              Returns the kth smallest <code>Pair</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>partition Method:</strong>
          <ul>
            <li>
              Selects a pivot element, partitions <code>pairs</code> into
              smaller and larger elements relative to the pivot.
            </li>
            <li>
              Uses two pointers technique to efficiently partition the array.
            </li>
            <li>
              Moves the pivot to its correct position and returns the index of
              the pivot.
            </li>
          </ul>
        </li>
        <li>
          <strong>swap Method:</strong>
          <ul>
            <li>
              Swaps two elements in <code>pairs</code> array.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  808: (
    <ul>
      <li>
        <strong>Problem Explanation:</strong>
        <ul>
          <li>
            Chef A and Chef B make soup, and each turn they can perform one of
            four actions involving 100 ml or 75 ml of soup.
          </li>
          <li>
            The soups start with `n` ml each, and we need to find the
            probability that both will be empty at the same time.
          </li>
        </ul>
      </li>
      <li>
        <strong>Approach Using Dynamic Programming and Probability:</strong>
        <ul>
          <li>
            <strong>Initialization:</strong>
            <ul>
              <li>
                Use a 2D array `dp` where `dp[i][j]` represents the probability
                that Chef A has `i` ml and Chef B has `j` ml of soup.
              </li>
              <li>
                Initialize `dp[0][0] = 0.5` because both start with empty soups.
              </li>
              <li>
                Initialize `dp[0][j] = 1.0` for `j > 0` since Chef A loses if
                his soup is empty initially.
              </li>
            </ul>
          </li>
          <li>
            <strong>State Transition:</strong>
            <ul>
              <li>
                Update `dp` based on actions where probabilities depend on
                previous states and outcomes of serving actions.
              </li>
            </ul>
          </li>
          <li>
            <strong>Result Calculation:</strong>
            <ul>
              <li>
                Compute `dp[n][n]`, which gives the probability that both soups
                will be empty simultaneously after `n` ml of consumption.
              </li>
              <li>Return `dp[n][n]` as the final result.</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  837: (
    <ul>
      <li>
        <strong>Problem Explanation:</strong>
        <ul>
          <li>
            The game starts with a score of `0` and aims to reach score `N` by
            drawing cards with numbers from `1` to `W`.
          </li>
          <li>
            The goal is to calculate the probability of reaching exactly score
            `N` with the minimum number of draws.
          </li>
        </ul>
      </li>
      <li>
        <strong>Approach Using Dynamic Programming and Probability:</strong>
        <ul>
          <li>
            <strong>Initialization:</strong>
            <ul>
              <li>
                Use a `dp` array where `dp[i]` represents the probability of
                reaching score `i`.
              </li>
              <li>
                Initialize `dp[0] = 1.0` because starting with score `0` has a
                probability of `1.0`.
              </li>
            </ul>
          </li>
          <li>
            <strong>Transition Between States:</strong>
            <ul>
              <li>
                For each score `i` from `1` to `N`, calculate the probability of
                reaching `i` using probabilities from `i-1` to `i-W`.
              </li>
              <li>
                Update `dp[i]` based on the sum of probabilities from `dp[i-1]`
                to `dp[i-W]`, adjusted for card draw probability `1/W`.
              </li>
            </ul>
          </li>
          <li>
            <strong>Calculate Result:</strong>
            <ul>
              <li>
                Compute the sum of probabilities `dp[i]` for scores `K` to `N`,
                representing reaching exactly `N` with the minimum draws
                starting from `K`.
              </li>
              <li>
                Return this sum as the probability of achieving score `N` in the
                game.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1093: (
    <ul>
      <li>
        <strong>Method Overview:</strong>
        <ul>
          <li>
            The `sampleStats` method calculates several statistics from a given
            array `count` representing frequencies of elements in a sample.
          </li>
          <li>
            It returns an array of doubles containing:
            <ul>
              <li>The minimum value in the sample.</li>
              <li>The maximum value in the sample.</li>
              <li>The mean (average) value of the sample.</li>
              <li>The median value of the sample.</li>
              <li>The mode (most frequent value) of the sample.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Details of Calculations:</strong>
        <ul>
          <li>
            <code>getMinimum(int[] count)</code>:
          </li>
          <ul>
            <li>
              Finds and returns the smallest index `i` where `count[i]` is
              greater than 0, indicating the minimum value in the sample.
            </li>
          </ul>
          <li>
            <code>getMaximum(int[] count)</code>:
          </li>
          <ul>
            <li>
              Finds and returns the largest index `i` where `count[i]` is
              greater than 0, indicating the maximum value in the sample.
            </li>
          </ul>
          <li>
            <code>getMean(int[] count, double n)</code>:
          </li>
          <ul>
            <li>
              Calculates the mean by iterating through `count`, summing up the
              product of each element `i` and its frequency `count[i]`, and
              dividing by `n`, which is the total number of elements in the
              sample.
            </li>
          </ul>
          <li>
            <code>getLeftMedian(int[] count, double n)</code>:
          </li>
          <ul>
            <li>
              Finds the left median by accumulating frequencies until reaching
              or surpassing `n / 2`. Returns the corresponding index `i` as the
              left median.
            </li>
          </ul>
          <li>
            <code>getRightMedian(int[] count, double n)</code>:
          </li>
          <ul>
            <li>
              Finds the right median by accumulating frequencies from the end of
              `count` until reaching or surpassing `n / 2`. Returns the
              corresponding index `i` as the right median.
            </li>
          </ul>
          <li>
            <code>getMode(int[] count)</code>:
          </li>
          <ul>
            <li>
              Determines the mode by identifying the index `i` with the highest
              frequency `count[i]`. Returns `i` as the mode.
            </li>
          </ul>
        </ul>
      </li>
    </ul>
  ),
  1227: (
    <ul>
      <li>
        <strong>Case for `n = 1`:</strong>
        <ul>
          <li>When `n` is 1, there is only one passenger and one seat.</li>
          <li>
            The first (and only) passenger will always sit in their assigned
            seat (seat 1).
          </li>
          <li>
            Therefore, the probability that the last passenger (the only
            passenger) gets their assigned seat is `1.0` or 100%.
          </li>
        </ul>
      </li>
      <li>
        <strong>Case for `n &gt; 1`:</strong>
        <ul>
          <li>
            When `n` is greater than 1, the first passenger has an equal chance
            of choosing any of the `n` seats.
          </li>
          <li>There are two scenarios to consider:</li>
          <ul>
            <li>
              If the first passenger chooses their own assigned seat (seat 1),
              then the last passenger will definitely get their assigned seat
              (seat n).
            </li>
            <li>
              If the first passenger chooses any other seat (not their own),
              then the last passenger will not get their assigned seat (seat n)
              unless subsequent passengers make optimal choices (which isn't
              guaranteed).
            </li>
          </ul>
          <li>
            On average, across all possible choices of the first passenger, the
            probability that the last passenger gets their assigned seat is
            `0.5` or 50%.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1467: (
    <ul>
      <li>
        <strong>Key Insights:</strong>
        <ul>
          <li>
            The solution uses recursion with memoization to explore all possible
            distributions of balls into two boxes and calculate the probability
            based on the conditions specified.
          </li>
          <li>
            The solution leverages the factorial array `fact` for efficient
            calculation of permutations.
          </li>
        </ul>
      </li>
      <li>
        <strong>Steps to Solve:</strong>
        <ul>
          <li>
            <strong>Initialization:</strong>
            <ul>
              <li>
                Initialize the factorial array `fact` up to the necessary size
                for factorial calculations.
              </li>
            </ul>
          </li>
          <li>
            <strong>Main Function:</strong>
            <ul>
              <li>
                <code>getProbability(int[] balls)</code>: Computes and returns
                the probability using the <code>cases()</code> function for both
                scenarios (equal distinct balls and equal total balls).
              </li>
            </ul>
          </li>
          <li>
            <strong>Recursive Function:</strong>
            <ul>
              <li>
                <code>cases()</code>: Recursively explores all possible
                distributions of balls between boxes A and B.
              </li>
              <li>
                Tracks the number of balls and distinct colors in both boxes.
              </li>
              <li>
                Calculates probabilities based on the conditions provided (equal
                balls or equal distinct balls).
              </li>
              <li>Uses memoization to avoid redundant calculations.</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1230: (
    <ul>
      <li>
        <strong>Key Insights:</strong>
        <ul>
          <li>
            The solution uses dynamic programming (DP) to compute the
            probabilities.
          </li>
          <li>
            It maintains a 2D array `f` where `f[i][j]` represents the
            probability of getting exactly `j` heads from the first `i` coins.
          </li>
          <li>
            The solution iteratively fills the DP table based on previous
            computations.
          </li>
        </ul>
      </li>
      <li>
        <strong>Steps to Solve:</strong>
        <ul>
          <li>
            <strong>Initialization:</strong>
            <ul>
              <li>
                Initialize a 2D DP array `f` where `f[i][j]` is initially set to
                `0` for all `i` and `j`.
              </li>
              <li>
                Set `f[0][0] = 1` because there's one way (probability `1`) to
                get `0` heads with `0` coins.
              </li>
            </ul>
          </li>
          <li>
            <strong>Main DP Calculation:</strong>
            <ul>
              <li>
                Iterate through each coin (from `1` to `n`, where `n` is the
                number of coins).
              </li>
              <li>
                For each coin and for each possible number of heads (`j` from
                `0` to `target` and bounded by `i`), update `f[i][j]`:
                <ul>
                  <li>
                    Calculate the probability of not getting a head (`1 - prob[i
                    - 1]`) multiplied by the probability from the previous state
                    (`f[i - 1][j]`).
                  </li>
                  <li>
                    If `j &gt; 0`, also calculate the probability of getting a
                    head (`prob[i - 1]`) multiplied by the probability from the
                    state where one less head was achieved (`f[i - 1][j - 1]`).
                  </li>
                  <li>Sum these probabilities to update `f[i][j]`.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Result:</strong>
            <ul>
              <li>
                The desired probability is stored in `f[n][target]`, where `n`
                is the total number of coins.
              </li>
              <li>Return `f[n][target]` as the final result.</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  146: (
    <ul>
      <li>
        <strong>Key Components:</strong>
        <ul>
          <li>
            <strong>Doubly Linked List:</strong> Used to maintain the order of
            recently used items, allowing efficient removal and insertion
            operations.
          </li>
          <li>
            <strong>HashMap:</strong> Used for fast lookup of items by their
            keys.
          </li>
        </ul>
      </li>
      <li>
        <strong>Steps to Solve:</strong>
        <ul>
          <li>
            <strong>Initialization:</strong>
            <ul>
              <li>
                Initialize a doubly linked list to keep track of the order of
                items based on their access.
              </li>
              <li>
                Use a HashMap to store key-value pairs for quick lookup and
                update.
              </li>
            </ul>
          </li>
          <li>
            <strong>Get Operation (`get(key)`):</strong>
            <ul>
              <li>
                If the key exists in the HashMap:
                <ul>
                  <li>
                    Retrieve the corresponding node from the doubly linked list.
                  </li>
                  <li>
                    Move this node to the front of the list (indicating it's the
                    most recently used).
                  </li>
                  <li>Return the value associated with the key.</li>
                </ul>
              </li>
              <li>Otherwise, return -1 indicating the key is not present.</li>
            </ul>
          </li>
          <li>
            <strong>Put Operation (`put(key, value)`):</strong>
            <ul>
              <li>
                If the key exists in the HashMap:
                <ul>
                  <li>Update the value associated with the key.</li>
                  <li>
                    Move the corresponding node to the front of the doubly
                    linked list.
                  </li>
                </ul>
              </li>
              <li>
                If the key doesn't exist:
                <ul>
                  <li>Create a new node with the key-value pair.</li>
                  <li>Add this node to the front of the doubly linked list.</li>
                  <li>Add the key-value pair to the HashMap.</li>
                  <li>
                    If the cache exceeds its capacity:
                    <ul>
                      <li>
                        Remove the least recently used node (from the end of the
                        doubly linked list).
                      </li>
                      <li>Remove the corresponding entry from the HashMap.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  430: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>Start with the head of the list.</li>
        </ul>
      </li>
      <li>
        <strong>Traverse and Flatten:</strong>
        <ul>
          <li>Traverse the list using a pointer.</li>
          <li>If a node with a child is found, perform the following steps:</li>
          <ul>
            <li>
              <strong>Save the Next Node:</strong>
              <ul>
                <li>Store the next node of the current node.</li>
              </ul>
            </li>
            <li>
              <strong>Flatten the Child List:</strong>
              <ul>
                <li>Recursively flatten the child list.</li>
              </ul>
            </li>
            <li>
              <strong>Insert the Flattened Child List:</strong>
              <ul>
                <li>
                  Set the next pointer of the current node to the head of the
                  flattened child list.
                </li>
                <li>
                  Set the previous pointer of the head of the flattened child
                  list to the current node.
                </li>
              </ul>
            </li>
            <li>
              <strong>Find the Tail of the Flattened Child List:</strong>
              <ul>
                <li>
                  Traverse to the end of the flattened child list to find the
                  tail.
                </li>
              </ul>
            </li>
            <li>
              <strong>Connect the Tail to the Next Node:</strong>
              <ul>
                <li>
                  Set the next pointer of the tail to the stored next node.
                </li>
                <li>
                  Set the previous pointer of the stored next node (if it is not
                  null) to the tail.
                </li>
              </ul>
            </li>
            <li>
              <strong>Clear the Child Pointer:</strong>
              <ul>
                <li>Set the child pointer of the current node to null.</li>
              </ul>
            </li>
            <li>
              <strong>Continue Traversal:</strong>
              <ul>
                <li>Move the pointer to the next node in the list.</li>
              </ul>
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <strong>End of List:</strong>
        <ul>
          <li>
            When the end of the list is reached, return the head of the
            flattened list.
          </li>
        </ul>
      </li>
    </ul>
  ),
  432: (
    <ul>
      <li>
        <strong>Data Structures:</strong>
        <ul>
          <li>
            <strong>HashMap:</strong> Used to store the frequency of each key
            and its corresponding node in the doubly linked list.
          </li>
          <li>
            <strong>Doubly Linked List:</strong> Each node stores a frequency
            and a set of keys that have that frequency. The list is ordered by
            frequency.
          </li>
        </ul>
      </li>
      <li>
        <strong>Increment Key:</strong>
        <ul>
          <li>If the key doesn't exist, add it with frequency 1.</li>
          <li>
            If the key exists, remove it from its current frequency node and add
            it to the next frequency node. If the next frequency node doesn't
            exist, create it.
          </li>
          <li>Update the key's entry in the HashMap.</li>
          <li>If a frequency node becomes empty, remove it from the list.</li>
        </ul>
      </li>
      <li>
        <strong>Decrement Key:</strong>
        <ul>
          <li>
            If the key exists and its frequency is 1, remove it completely.
          </li>
          <li>
            If the key exists and its frequency is greater than 1, remove it
            from its current frequency node and add it to the previous frequency
            node. If the previous frequency node doesn't exist, create it.
          </li>
          <li>Update the key's entry in the HashMap.</li>
          <li>If a frequency node becomes empty, remove it from the list.</li>
        </ul>
      </li>
      <li>
        <strong>Get Max Key:</strong>
        <ul>
          <li>Return any key from the node with the highest frequency.</li>
        </ul>
      </li>
      <li>
        <strong>Get Min Key:</strong>
        <ul>
          <li>Return any key from the node with the lowest frequency.</li>
        </ul>
      </li>
    </ul>
  ),
  460: (
    <ul>
      <li>
        <strong>Data Structures:</strong>
        <ul>
          <li>
            <strong>HashMap (keyToNode):</strong> Maps keys to their
            corresponding nodes in the doubly linked list.
          </li>
          <li>
            <strong>HashMap (freqToDLL):</strong> Maps frequencies to their
            corresponding doubly linked lists, which contain all nodes with that
            frequency.
          </li>
          <li>
            <strong>Doubly Linked List:</strong> Each node stores a key, a
            value, and its frequency. The list is ordered by frequency.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>Set the capacity of the LFU cache.</li>
          <li>Initialize the keyToNode and freqToDLL HashMaps.</li>
        </ul>
      </li>
      <li>
        <strong>Get Operation:</strong>
        <ul>
          <li>If the key doesn't exist, return -1.</li>
          <li>
            If the key exists, retrieve its node, update its frequency, and
            return its value.
          </li>
        </ul>
      </li>
      <li>
        <strong>Put Operation:</strong>
        <ul>
          <li>If the key already exists, update its value and frequency.</li>
          <li>
            If the key doesn't exist, check if the cache is at capacity. If so,
            evict the least frequently used node.
          </li>
          <li>Add the new key and value to the cache with a frequency of 1.</li>
        </ul>
      </li>
      <li>
        <strong>Frequency Update:</strong>
        <ul>
          <li>
            Remove the node from its current frequency list and add it to the
            next frequency list.
          </li>
          <li>If a frequency list becomes empty, remove it.</li>
        </ul>
      </li>
    </ul>
  ),
  1472: (
    <ul>
      <li>
        <strong>Data Structures:</strong>
        <ul>
          <li>
            <strong>Doubly Linked List:</strong> Each node represents a page in
            the browser history, storing the URL, and pointers to the previous
            and next nodes.
          </li>
          <li>
            <strong>Current Pointer:</strong> Points to the current page in the
            browser history.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>Initialize the doubly linked list with the homepage URL.</li>
          <li>Set the current pointer to the homepage node.</li>
        </ul>
      </li>
      <li>
        <strong>Visit Operation:</strong>
        <ul>
          <li>Create a new node for the new URL.</li>
          <li>Set the next pointer of the current node to the new node.</li>
          <li>Set the previous pointer of the new node to the current node.</li>
          <li>Move the current pointer to the new node.</li>
          <li>Remove any nodes that were forward of the current node.</li>
        </ul>
      </li>
      <li>
        <strong>Back Operation:</strong>
        <ul>
          <li>
            Move the current pointer back by the specified number of steps or
            until the beginning of the history.
          </li>
        </ul>
      </li>
      <li>
        <strong>Forward Operation:</strong>
        <ul>
          <li>
            Move the current pointer forward by the specified number of steps or
            until the end of the history.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2296: (
    <ul>
      <li>
        <strong>Data Structures:</strong>
        <ul>
          <li>
            <strong>Doubly Linked List:</strong> Each node represents a
            character in the text editor, storing the character, and pointers to
            the previous and next nodes.
          </li>
          <li>
            <strong>Cursor Pointer:</strong> Points to the current position in
            the text editor.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize the doubly linked list with a dummy head and tail node.
          </li>
          <li>Set the cursor pointer to the dummy tail node.</li>
        </ul>
      </li>
      <li>
        <strong>Add Text Operation:</strong>
        <ul>
          <li>
            For each character in the input string, create a new node and insert
            it at the cursor position.
          </li>
          <li>
            Update the previous and next pointers of the surrounding nodes.
          </li>
          <li>Move the cursor pointer to the end of the inserted text.</li>
        </ul>
      </li>
      <li>
        <strong>Delete Text Operation:</strong>
        <ul>
          <li>
            Delete the specified number of characters before the cursor
            position.
          </li>
          <li>
            Update the previous and next pointers of the surrounding nodes
            accordingly.
          </li>
          <li>Move the cursor pointer to the new position after deletion.</li>
        </ul>
      </li>
      <li>
        <strong>Cursor Left Operation:</strong>
        <ul>
          <li>
            Move the cursor pointer to the left by the specified number of steps
            or until the beginning of the text.
          </li>
        </ul>
      </li>
      <li>
        <strong>Cursor Right Operation:</strong>
        <ul>
          <li>
            Move the cursor pointer to the right by the specified number of
            steps or until the end of the text.
          </li>
        </ul>
      </li>
      <li>
        <strong>Get Text Operation:</strong>
        <ul>
          <li>Retrieve up to 10 characters before the cursor position.</li>
          <li>Return these characters as a string.</li>
        </ul>
      </li>
    </ul>
  ),
  716: (
    <>
      <ul>
        <li>
          <strong>`Node` Class:</strong>
          <ul>
            <li>Represents a node in a doubly linked list.</li>
            <li>
              Attributes:
              <ul>
                <li>
                  <code>val</code>: Integer value stored in the node.
                </li>
                <li>
                  <code>prev</code>: Reference to the previous node.
                </li>
                <li>
                  <code>next</code>: Reference to the next node.
                </li>
              </ul>
            </li>
            <li>
              Constructors:
              <ul>
                <li>
                  <code>Node()</code>: Default constructor.
                </li>
                <li>
                  <code>Node(int val)</code>: Constructor initializing{" "}
                  <code>val</code> attribute.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>`DoubleLinkedList` Class:</strong>
          <ul>
            <li>
              Implements a doubly linked list with sentinel nodes (head and
              tail).
            </li>
            <li>
              Attributes:
              <ul>
                <li>
                  <code>head</code>: Sentinel node at the beginning of the list.
                </li>
                <li>
                  <code>tail</code>: Sentinel node at the end of the list.
                </li>
              </ul>
            </li>
            <li>
              Methods:
              <ul>
                <li>
                  <code>DoubleLinkedList()</code>: Constructor initializing{" "}
                  <code>head</code> and <code>tail</code>.
                </li>
                <li>
                  <code>append(int val)</code>: Appends a new node with value{" "}
                  <code>val</code> to the end of the list.
                </li>
                <li>
                  <code>remove(Node node)</code>: Removes a given node from the
                  list.
                </li>
                <li>
                  <code>pop()</code>: Removes and returns the node from the end
                  of the list.
                </li>
                <li>
                  <code>peek()</code>: Returns the value of the node at the end
                  of the list without removing it.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <strong>`MaxStack` Class:</strong>
          <ul>
            <li>
              Implements a stack with additional functionalities to retrieve and
              remove maximum elements efficiently.
            </li>
            <li>
              Attributes:
              <ul>
                <li>
                  <code>stk</code>: Instance of <code>DoubleLinkedList</code> to
                  store stack elements.
                </li>
                <li>
                  <code>tm</code>: TreeMap where keys are integers (stack
                  values) and values are lists of nodes containing these values.
                </li>
              </ul>
            </li>
            <li>
              Methods:
              <ul>
                <li>
                  <code>push(int x)</code>: Pushes integer <code>x</code> onto
                  the stack.
                </li>
                <li>
                  <code>pop()</code>: Removes and returns the top element from
                  the stack.
                </li>
                <li>
                  <code>top()</code>: Returns the top element of the stack
                  without removing it.
                </li>
                <li>
                  <code>peekMax()</code>: Returns the maximum element in the
                  stack.
                </li>
                <li>
                  <code>popMax()</code>: Removes and returns the maximum element
                  in the stack.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  426: (
    <ul>
      <li>
        <strong>Instance Variables:</strong>
        <ul>
          <li>
            <code>private Node prev;</code>: Keeps track of the previous node in
            the inorder traversal.
          </li>
          <li>
            <code>private Node head;</code>: Points to the head of the doubly
            linked list.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Method: <code>treeToDoublyList(Node root)</code>
        </strong>
        <ul>
          <li>
            Converts a binary search tree (BST) rooted at <code>root</code> into
            a sorted doubly linked list.
          </li>
          <li>
            <code>dfs(root)</code> is called to perform inorder traversal and
            link nodes appropriately.
          </li>
          <li>
            Finally, it links the head and tail of the list after traversal.
          </li>
          <li>
            <strong>Parameters:</strong>
            <ul>
              <li>
                <code>root</code>: The root node of the BST.
              </li>
            </ul>
          </li>
          <li>
            <strong>Returns:</strong>
            <ul>
              <li>Returns the head of the sorted doubly linked list.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Method: <code>dfs(Node root)</code>
        </strong>
        <ul>
          <li>Performs inorder traversal recursively.</li>
          <li>Links the current node with the previous node (if exists).</li>
          <li>
            Updates <code>prev</code> to the current node and handles edge case
            to set <code>head</code>.
          </li>
          <li>
            <strong>Parameters:</strong>
            <ul>
              <li>
                <code>root</code>: Current node being processed.
              </li>
            </ul>
          </li>
          <li>
            <strong>Returns:</strong>
            <ul>
              <li>Returns void as it operates on instance variables.</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1114: (
    <>
      <ul>
        <li>
          <b>Object and Flags:</b>
          <ul>
            <li>
              <code>lock</code>: This object is used for synchronization. It
              ensures that only one thread can execute critical sections (
              <code>first</code>, <code>second</code>, <code>third</code>) at a
              time.
            </li>
            <li>
              <code>firstExecuted</code> and <code>secondExecuted</code>: These
              boolean flags track whether <code>first()</code> and{" "}
              <code>second()</code> have been executed, respectively.
            </li>
          </ul>
        </li>
        <li>
          <b>
            Constructor (<code>Foo()</code>):
          </b>
          <ul>
            <li>
              Initializes <code>firstExecuted</code> and{" "}
              <code>secondExecuted</code> to <code>false</code>.
            </li>
          </ul>
        </li>
        <li>
          <b>
            <code>first(Runnable printFirst)</code>:
          </b>
          <ul>
            <li>
              Executes <code>printFirst.run()</code>, which outputs "first".
            </li>
            <li>
              Sets <code>firstExecuted</code> to <code>true</code> to signal
              that <code>first()</code> has completed.
            </li>
            <li>
              Uses <code>lock.notifyAll()</code> to wake up any threads waiting
              in <code>second()</code> or <code>third()</code> methods after{" "}
              <code>first()</code> completes.
            </li>
          </ul>
        </li>
        <li>
          <b>
            <code>second(Runnable printSecond)</code>:
          </b>
          <ul>
            <li>
              Waits (<code>lock.wait()</code>) until <code>firstExecuted</code>{" "}
              is <code>true</code>, indicating that <code>first()</code> has
              completed.
            </li>
            <li>
              Executes <code>printSecond.run()</code>, which outputs "second".
            </li>
            <li>
              Sets <code>secondExecuted</code> to <code>true</code> to signal
              that <code>second()</code> has completed.
            </li>
            <li>
              Uses <code>lock.notifyAll()</code> to wake up any threads waiting
              in <code>third()</code> method after <code>second()</code>{" "}
              completes.
            </li>
          </ul>
        </li>
        <li>
          <b>
            <code>third(Runnable printThird)</code>:
          </b>
          <ul>
            <li>
              Waits (<code>lock.wait()</code>) until <code>secondExecuted</code>{" "}
              is <code>true</code>, indicating that <code>second()</code> has
              completed.
            </li>
            <li>
              Executes <code>printThird.run()</code>, which outputs "third".
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1115: (
    <ul>
      <li>
        <strong>Class and Semaphores Initialization</strong>
        <ul>
          <li>
            Define a class `FooBar` with a constructor that initializes the
            number of iterations `n` and two `Semaphore` objects: `fooSemaphore`
            and `barSemaphore`.
          </li>
          <li>
            `fooSemaphore` is initialized with a permit count of 1, allowing the
            `foo` method to run immediately.
          </li>
          <li>
            `barSemaphore` is initialized with a permit count of 0, ensuring the
            `bar` method must wait for a permit to be released by the `foo`
            method.
          </li>
        </ul>
      </li>
      <li>
        <strong>foo Method</strong>
        <ul>
          <li>The `foo` method runs a loop for `n` iterations.</li>
          <li>
            For each iteration:
            <ul>
              <li>
                Acquire the `fooSemaphore`, which controls the turn for the
                `foo` method to execute.
              </li>
              <li>Run the `printFoo` method which outputs "foo".</li>
              <li>
                Release the `barSemaphore` to signal that the `bar` method can
                now execute.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>bar Method</strong>
        <ul>
          <li>The `bar` method runs a loop for `n` iterations.</li>
          <li>
            For each iteration:
            <ul>
              <li>
                Acquire the `barSemaphore`, which controls the turn for the
                `bar` method to execute.
              </li>
              <li>Run the `printBar` method which outputs "bar".</li>
              <li>
                Release the `fooSemaphore` to signal that the `foo` method can
                now execute.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1116: (
    <ul>
      <li>
        <strong>Initialization</strong>
        <ul>
          <li>
            Create a class `ZeroEvenOdd` that takes an integer `n` as a
            parameter to initialize the number of iterations.
          </li>
          <li>
            Define three semaphores:
            <ul>
              <li>
                `zeroSemaphore`: Controls the printing of zero, initialized with
                a permit count of 1.
              </li>
              <li>
                `evenSemaphore`: Controls the printing of even numbers,
                initialized with a permit count of 0.
              </li>
              <li>
                `oddSemaphore`: Controls the printing of odd numbers,
                initialized with a permit count of 0.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>zero Method</strong>
        <ul>
          <li>The `zero` method runs a loop from 1 to `n` (inclusive).</li>
          <li>
            For each iteration:
            <ul>
              <li>
                Acquire the `zeroSemaphore` to ensure only the zero thread can
                print.
              </li>
              <li>Print the number 0.</li>
              <li>
                Check if the current number `i` is even or odd:
                <ul>
                  <li>
                    If even, release the `evenSemaphore` to allow the even
                    thread to print the number.
                  </li>
                  <li>
                    If odd, release the `oddSemaphore` to allow the odd thread
                    to print the number.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>even Method</strong>
        <ul>
          <li>
            The `even` method runs a loop from 2 to `n` (inclusive) with a step
            of 2.
          </li>
          <li>
            For each iteration:
            <ul>
              <li>
                Acquire the `evenSemaphore` to ensure only the even thread can
                print.
              </li>
              <li>Print the current even number.</li>
              <li>
                Release the `zeroSemaphore` to allow the zero thread to print
                the next zero.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>odd Method</strong>
        <ul>
          <li>
            The `odd` method runs a loop from 1 to `n` (inclusive) with a step
            of 2.
          </li>
          <li>
            For each iteration:
            <ul>
              <li>
                Acquire the `oddSemaphore` to ensure only the odd thread can
                print.
              </li>
              <li>Print the current odd number.</li>
              <li>
                Release the `zeroSemaphore` to allow the zero thread to print
                the next zero.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1117: (
    <ul>
      <li>
        <strong>Initialization</strong>
        <ul>
          <li>
            Create a class `H2O` with:
            <ul>
              <li>
                A `Semaphore` for hydrogen (`hydrogenSemaphore`) initialized
                with 2 permits to allow up to 2 hydrogen atoms.
              </li>
              <li>
                A `Semaphore` for oxygen (`oxygenSemaphore`) initialized with 1
                permit to allow 1 oxygen atom.
              </li>
              <li>
                An integer `hydrogenCount` to keep track of the number of
                hydrogen atoms released.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>hydrogen Method</strong>
        <ul>
          <li>
            The `hydrogen` method:
            <ul>
              <li>
                Acquires a permit from `hydrogenSemaphore` to ensure no more
                than 2 hydrogen atoms are released at a time.
              </li>
              <li>
                Synchronizes the block of code to safely increment
                `hydrogenCount` and run `releaseHydrogen.run()`.
              </li>
              <li>
                Checks if `hydrogenCount` has reached 2, and if so, releases a
                permit for `oxygenSemaphore` to allow the oxygen atom to be
                released.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>oxygen Method</strong>
        <ul>
          <li>
            The `oxygen` method:
            <ul>
              <li>
                Acquires a permit from `oxygenSemaphore` to ensure only one
                oxygen atom is released at a time.
              </li>
              <li>
                Synchronizes the block of code to run `releaseOxygen.run()` and
                reset `hydrogenCount` to 0 after forming a water molecule.
              </li>
              <li>
                Releases 2 permits for `hydrogenSemaphore` to allow the next two
                hydrogen atoms to be released for the next water molecule.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1195: (
    <ul>
      <li>
        <strong>Class and Constructor:</strong>
        <ul>
          <li>
            The class <code>FizzBuzz</code> has a private integer <code>n</code>{" "}
            which represents the limit up to which we will print.
          </li>
          <li>
            It also has a private integer <code>current</code> which tracks the
            current number being processed.
          </li>
        </ul>
      </li>
      <li>
        <strong>Synchronized Methods:</strong>
        <ul>
          <li>
            Each method is <code>synchronized</code> to ensure that only one
            thread can execute it at a time.
          </li>
          <li>
            The <code>fizz</code> method will print "fizz" for numbers divisible
            by 3 but not 5.
          </li>
          <li>
            The <code>buzz</code> method will print "buzz" for numbers divisible
            by 5 but not 3.
          </li>
          <li>
            The <code>fizzbuzz</code> method will print "fizzbuzz" for numbers
            divisible by both 3 and 5.
          </li>
          <li>
            The <code>number</code> method will print the number itself if it is
            not divisible by 3 or 5.
          </li>
        </ul>
      </li>
      <li>
        <strong>Control Flow:</strong>
        <ul>
          <li>
            Each method uses a <code>while</code> loop to keep checking the
            current number.
          </li>
          <li>
            Inside the <code>while</code> loop, another <code>while</code> loop
            ensures that the thread waits if the current number doesn't meet its
            specific condition (using <code>wait()</code>).
          </li>
          <li>
            If the current number meets the condition, the appropriate action
            (running the print method) is performed, the current number is
            incremented, and all threads are notified (using{" "}
            <code>notifyAll()</code>).
          </li>
        </ul>
      </li>
      <li>
        <strong>Usage:</strong>
        <ul>
          <li>
            You will typically run this with multiple threads, each invoking one
            of the methods <code>fizz</code>, <code>buzz</code>,{" "}
            <code>fizzbuzz</code>, or <code>number</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1226: (
    <ul>
      <li>
        <strong>Class and Constructor:</strong>
        <ul>
          <li>
            The class <code>DiningPhilosophers</code> manages the dining
            philosophers problem using two <code>ReentrantLock</code> objects:{" "}
            <code>leftForkLock</code> and <code>rightForkLock</code>.
          </li>
          <li>
            The constructor <code>DiningPhilosophers()</code> initializes the
            locks.
          </li>
        </ul>
      </li>
      <li>
        <strong>wantsToEat Method:</strong>
        <ul>
          <li>
            This method allows a philosopher to attempt to pick up forks, eat,
            and then put the forks down.
          </li>
          <li>
            It takes the following parameters:
            <ul>
              <li>
                <code>int philosopher</code>: the ID of the philosopher.
              </li>
              <li>
                <code>Runnable pickLeftFork</code>: the action to pick up the
                left fork.
              </li>
              <li>
                <code>Runnable pickRightFork</code>: the action to pick up the
                right fork.
              </li>
              <li>
                <code>Runnable eat</code>: the action to eat.
              </li>
              <li>
                <code>Runnable putLeftFork</code>: the action to put down the
                left fork.
              </li>
              <li>
                <code>Runnable putRightFork</code>: the action to put down the
                right fork.
              </li>
            </ul>
          </li>
          <li>
            The method operates in a loop to continuously attempt to pick up the
            left and right forks until successful:
            <ul>
              <li>
                First, it tries to acquire the left fork lock with a timeout of
                100 milliseconds.
              </li>
              <li>
                If successful, it attempts to acquire the right fork lock with
                the same timeout.
              </li>
              <li>
                If both locks are acquired:
                <ul>
                  <li>
                    The philosopher picks up both forks, eats, and then puts
                    down the right fork.
                  </li>
                </ul>
              </li>
              <li>
                Regardless of whether the right fork lock was acquired, the left
                fork is always put down before releasing the left fork lock.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1188: (
    <>
      <ul>
        <li>
          <strong>Class and Fields:</strong>
          <ul>
            <li>
              The class <code>BoundedBlockingQueue</code> implements a
              thread-safe bounded blocking queue using semaphores and a deque.
            </li>
            <li>
              It has the following fields:
              <ul>
                <li>
                  <code>Semaphore s1</code>: Limits the number of elements that
                  can be enqueued (capacity control).
                </li>
                <li>
                  <code>Semaphore s2</code>: Keeps track of the number of
                  elements available to dequeue.
                </li>
                <li>
                  <code>Deque&gt;Integer&lt; q</code>: The underlying deque data
                  structure used to store elements.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Constructor:</strong>
          <ul>
            <li>
              The constructor <code>BoundedBlockingQueue(int capacity)</code>{" "}
              initializes the queue with the specified capacity.
              <ul>
                <li>
                  <code>s1</code> is initialized with the given capacity,
                  allowing that many elements to be enqueued.
                </li>
                <li>
                  <code>s2</code> is initialized to 0, as initially there are no
                  elements to dequeue.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>enqueue Method:</strong>
          <ul>
            <li>
              The method <code>enqueue(int element)</code> adds an element to
              the queue.
              <ul>
                <li>
                  First, it acquires a permit from <code>s1</code> to ensure
                  that the queue is not full.
                </li>
                <li>
                  Then, it adds the element to the deque <code>q</code>.
                </li>
                <li>
                  Finally, it releases a permit on <code>s2</code> to signal
                  that an element is available to dequeue.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>dequeue Method:</strong>
          <ul>
            <li>
              The method <code>dequeue()</code> removes and returns an element
              from the queue.
              <ul>
                <li>
                  First, it acquires a permit from <code>s2</code> to ensure
                  that there is an element to dequeue.
                </li>
                <li>
                  Then, it removes and stores the element from the deque{" "}
                  <code>q</code>.
                </li>
                <li>
                  Finally, it releases a permit on <code>s1</code> to signal
                  that space is available for enqueuing new elements.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>size Method:</strong>
          <ul>
            <li>
              The method <code>size()</code> returns the current number of
              elements in the queue.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1242: (
    <ul>
      <li>
        <strong>Class and Overview:</strong>
        <ul>
          <li>
            The class <code>Web_Crawler_Multithreaded</code> contains three
            different solutions for implementing a web crawler that operates in
            a multithreaded environment.
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution 1: Synchronized List</strong>
        <ul>
          <li>
            <code>Set&gt;String&lt; set</code>: A thread-safe set to keep track
            of visited URLs.
          </li>
          <li>
            <code>List&gt;String&lt; result</code>: A synchronized list to store
            the result URLs.
          </li>
          <li>
            <code>String HOSTNAME</code>: Stores the hostname to ensure we only
            crawl within the same domain.
          </li>
          <li>
            <strong>Methods:</strong>
            <ul>
              <li>
                <code>crawl(String startUrl, HtmlParser htmlParser)</code>:
                Initializes the hostname and starts the crawling process using
                DFS.
              </li>
              <li>
                <code>judgeHostname(String url)</code>: Checks if the URL
                belongs to the same hostname.
              </li>
              <li>
                <code>initHostName(String url)</code>: Initializes the hostname
                from the start URL.
              </li>
              <li>
                <code>getUrlDfs(String startUrl, HtmlParser htmlParser)</code>:
                Performs DFS to crawl URLs and starts new threads for each found
                URL within the same hostname.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution 2: ConcurrentSkipListSet</strong>
        <ul>
          <li>
            <code>Set&gt;String&lt; visited</code>: A thread-safe set to keep
            track of visited URLs.
          </li>
          <li>
            <strong>Methods:</strong>
            <ul>
              <li>
                <code>crawl(String startUrl, HtmlParser htmlParser)</code>:
                Initializes the hostname and starts the crawling process using a
                parallel stream.
              </li>
              <li>
                <code>
                  crawlDfs(String startUrl, HtmlParser htmlParser, String
                  hostname, Set&gt;String&lt; visited)
                </code>
                : Performs DFS to crawl URLs using parallel streams.
              </li>
              <li>
                <code>getHostname(String url)</code>: Extracts the hostname from
                a URL.
              </li>
              <li>
                <code>isSameHostname(String url, String hostname)</code>: Checks
                if the URL belongs to the same hostname.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution 3: Crawler Class</strong>
        <ul>
          <li>
            <strong>Methods:</strong>
            <ul>
              <li>
                <code>crawl(String startUrl, HtmlParser htmlParser)</code>:
                Initializes the hostname and starts a new <code>Crawler</code>{" "}
                thread.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Crawler Class:</strong>
        <ul>
          <li>
            <code>String startUrl</code>: The starting URL for the crawling
            process.
          </li>
          <li>
            <code>String hostname</code>: The hostname to ensure we only crawl
            within the same domain.
          </li>
          <li>
            <code>HtmlParser htmlParser</code>: The HTML parser to extract URLs
            from a webpage.
          </li>
          <li>
            <code>volatile List&gt;String&lt; res</code>: A list to store the
            result URLs (marked volatile for thread-safety).
          </li>
          <li>
            <strong>Methods:</strong>
            <ul>
              <li>
                <code>
                  Crawler(String startUrl, String hostname, HtmlParser
                  htmlParser)
                </code>
                : Constructor to initialize the crawler with the starting URL,
                hostname, and HTML parser.
              </li>
              <li>
                <code>run()</code>: The main logic for the crawling process,
                creating new threads for each found URL within the same
                hostname.
              </li>
              <li>
                <code>static void joinThread(Thread thread)</code>: Helper
                method to join threads and handle interruptions.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>HtmlParser Interface:</strong>
        <ul>
          <li>
            Interface with a method{" "}
            <code>List&gt;String&lt; getUrls(String str)</code> to get the list
            of URLs from a given webpage.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1279: (
    <ul>
      <li>
        <strong>Class and Fields:</strong>
        <ul>
          <li>
            The class <code>TrafficLight</code> simulates a traffic light system
            that manages cars arriving at an intersection from different roads.
          </li>
          <li>
            It has the following field:
            <ul>
              <li>
                <code>int road</code>: Indicates the current road with the green
                light. It is initialized to 1.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Constructor:</strong>
        <ul>
          <li>
            The constructor <code>TrafficLight()</code> initializes the traffic
            light system.
          </li>
        </ul>
      </li>
      <li>
        <strong>carArrived Method:</strong>
        <ul>
          <li>
            The method{" "}
            <code>
              carArrived(int carId, int roadId, int direction, Runnable
              turnGreen, Runnable crossCar)
            </code>{" "}
            handles a car arriving at the intersection.
            <ul>
              <li>
                Parameters:
                <ul>
                  <li>
                    <code>int carId</code>: The ID of the car.
                  </li>
                  <li>
                    <code>int roadId</code>: The ID of the road the car is
                    coming from (1 or 2).
                  </li>
                  <li>
                    <code>int direction</code>: The direction the car is going
                    (not used in this implementation).
                  </li>
                  <li>
                    <code>Runnable turnGreen</code>: A runnable that turns the
                    light green for the car's road if it isn't already green.
                  </li>
                  <li>
                    <code>Runnable crossCar</code>: A runnable that lets the car
                    cross the intersection.
                  </li>
                </ul>
              </li>
              <li>
                Behavior:
                <ul>
                  <li>
                    The method is synchronized to ensure thread safety when
                    multiple cars arrive concurrently.
                  </li>
                  <li>
                    If the arriving car's road ID (<code>roadId</code>) is
                    different from the current green light road (
                    <code>road</code>), the light is switched to the arriving
                    car's road by calling <code>turnGreen.run()</code>, and the{" "}
                    <code>road</code> is updated to <code>roadId</code>.
                  </li>
                  <li>
                    Regardless of whether the light was switched,{" "}
                    <code>crossCar.run()</code> is called to allow the car to
                    cross the intersection.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  173: (
    <>
      <ul>
        <li>
          <strong>Class:</strong> BSTIterator
        </li>
        <li>
          <strong>Fields:</strong>
          <ul>
            <li>
              <code>private Stack&lt;TreeNode&gt; stack;</code> - A stack to
              store nodes for iterative traversal.
            </li>
          </ul>
        </li>
        <li>
          <strong>Constructor:</strong> <code>BSTIterator(TreeNode root)</code>
          <ul>
            <li>Initializes the iterator with the root of the BST.</li>
            <li>
              Invokes <code>pushAll(root)</code> to push all left children of
              the root onto the stack.
            </li>
          </ul>
        </li>
        <li>
          <strong>Method:</strong> <code>int next()</code>
          <ul>
            <li>Returns the next smallest number in the BST.</li>
            <li>
              Pops the top node from the stack, which is the current smallest
              node.
            </li>
            <li>
              Calls <code>pushAll(node.right)</code> to push all left children
              of the right subtree onto the stack.
            </li>
            <li>
              Time Complexity: O(1) average, as popping from a stack and pushing
              left children are constant time operations.
            </li>
          </ul>
        </li>
        <li>
          <strong>Method:</strong> <code>boolean hasNext()</code>
          <ul>
            <li>Checks if there are more nodes to process in the BST.</li>
            <li>
              Returns <code>true</code> if the stack is not empty; otherwise,
              returns <code>false</code>.
            </li>
            <li>
              Time Complexity: O(1), as it simply checks the stack's emptiness.
            </li>
          </ul>
        </li>
        <li>
          <strong>Helper Method:</strong>{" "}
          <code>void pushAll(TreeNode node)</code>
          <ul>
            <li>Pushes all left children of the given node onto the stack.</li>
            <li>
              Starts from <code>node</code> and traverses down its left children
              until reaching <code>null</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  284: (
    <>
      <ul>
        <li>
          <strong>Class:</strong> PeekingIterator
        </li>
        <li>
          <strong>Fields:</strong>
          <ul>
            <li>
              <code>private Iterator&lt;Integer&gt; iterator;</code> - Holds the
              original iterator.
            </li>
            <li>
              <code>private Integer nextElement;</code> - Stores the next
              element that has been peeked at.
            </li>
            <li>
              <code>private boolean hasNext;</code> - Indicates if there is a
              next element in the iterator.
            </li>
          </ul>
        </li>
        <li>
          <strong>Constructor:</strong>{" "}
          <code>PeekingIterator(Iterator&lt;Integer&gt; iterator)</code>
          <ul>
            <li>
              Initializes the iterator with the provided <code>iterator</code>.
            </li>
            <li>
              Checks if there is a next element using{" "}
              <code>iterator.hasNext()</code>.
            </li>
            <li>
              If a next element exists, initializes <code>nextElement</code>{" "}
              with the first element and sets <code>hasNext</code> to{" "}
              <code>true</code>; otherwise, sets <code>hasNext</code> to{" "}
              <code>false</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Method:</strong> <code>Integer peek()</code>
          <ul>
            <li>
              Returns the current <code>nextElement</code> without advancing the
              iterator.
            </li>
          </ul>
        </li>
        <li>
          <strong>Method:</strong> <code>Integer next()</code>
          <ul>
            <li>
              Returns the current <code>nextElement</code>.
            </li>
            <li>
              Advances the iterator by fetching the next element from{" "}
              <code>iterator</code> if it exists.
            </li>
            <li>
              Updates <code>nextElement</code> with the next element from{" "}
              <code>iterator</code>.
            </li>
            <li>
              Sets <code>hasNext</code> to <code>false</code> if there are no
              more elements in <code>iterator</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Method:</strong> <code>boolean hasNext()</code>
          <ul>
            <li>
              Returns <code>true</code> if there is a <code>nextElement</code>{" "}
              available; otherwise, returns <code>false</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  341: (
    <ul>
      <li>
        <strong>Class:</strong> NestedIterator
      </li>
      <li>
        <strong>Fields:</strong>
        <ul>
          <li>
            <code>private Stack&lt;NestedInteger&gt; stack;</code> - A stack to
            manage nested integers during iteration.
          </li>
        </ul>
      </li>
      <li>
        <strong>Constructor:</strong>{" "}
        <code>NestedIterator(List&lt;NestedInteger&gt; nestedList)</code>
        <ul>
          <li>
            Initializes the iterator with a nested list of integers (
            <code>nestedList</code>).
          </li>
          <li>
            Calls <code>addInteger(nestedList)</code> to push all elements of{" "}
            <code>nestedList</code> onto the stack in reverse order.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>Integer next()</code>
        <ul>
          <li>Retrieves and returns the integer at the top of the stack.</li>
          <li>
            Assumes the top element of the stack is an integer (
            <code>stack.pop().getInteger()</code>).
          </li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>boolean hasNext()</code>
        <ul>
          <li>Checks if there is another integer to iterate over.</li>
          <li>
            While the stack is not empty and the top element of the stack is not
            an integer:
            <ul>
              <li>
                Pop the top element (<code>stack.pop()</code>).
              </li>
              <li>
                Call <code>addInteger(ni.getList())</code> to push all elements
                of <code>ni.getList()</code> onto the stack in reverse order.
              </li>
            </ul>
          </li>
          <li>
            Returns <code>true</code> if the stack is not empty after
            processing; otherwise, returns <code>false</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Helper Method:</strong>{" "}
        <code>void addInteger(List&lt;NestedInteger&gt; nestedList)</code>
        <ul>
          <li>
            Pushes all elements of <code>nestedList</code> onto the stack in
            reverse order.
          </li>
          <li>
            Iterates over <code>nestedList</code> from the last element to the
            first (
            <code>for (int i = nestedList.size() - 1; i &gt;= 0; --i)</code>)
            and pushes each element onto the stack (
            <code>stack.push(nestedList.get(i))</code>).
          </li>
        </ul>
      </li>
    </ul>
  ),
  900: (
    <ul>
      <li>
        <strong>Class:</strong> <code>RLEIterator</code>
      </li>
      <li>
        <strong>Fields:</strong>
        <ul>
          <li>
            <code>private int[] encoding;</code> - Array to store the run-length
            encoded sequence.
          </li>
          <li>
            <code>private int index;</code> - Index to keep track of the current
            position in the <code>encoding</code> array.
          </li>
        </ul>
      </li>
      <li>
        <strong>Constructor:</strong> <code>RLEIterator(int[] encoding)</code>
        <ul>
          <li>
            Initializes the iterator with the given run-length encoded sequence.
          </li>
          <li>
            <code>encoding</code> is an array where consecutive elements
            represent pairs of counts and values to be repeated.
          </li>
          <li>
            Sets <code>index</code> to 0 to start iterating from the beginning
            of <code>encoding</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>int next(int n)</code>
        <ul>
          <li>
            Returns the next element in the decoded sequence based on the
            integer <code>n</code>.
          </li>
          <li>
            <code>n</code> specifies the number of elements to fetch from the
            decoded sequence.
          </li>
          <li>
            Iterates through the <code>encoding</code> array:
            <ul>
              <li>
                If <code>n</code> is less than or equal to the current count (
                <code>encoding[index]</code>):
                <ul>
                  <li>
                    Subtracts <code>n</code> from <code>encoding[index]</code>.
                  </li>
                  <li>
                    Returns the corresponding value (
                    <code>encoding[index + 1]</code>) as the next element.
                  </li>
                </ul>
              </li>
              <li>
                If <code>n</code> is greater than the current count:
                <ul>
                  <li>
                    Subtracts the current count from <code>n</code>.
                  </li>
                  <li>
                    Advances <code>index</code> by 2 to skip to the next pair in{" "}
                    <code>encoding</code>.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Returns <code>-1</code> if there are no more elements left in the
            decoded sequence to fetch.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1286: (
    <ul>
      <li>
        <strong>Class:</strong> CombinationIterator
      </li>
      <li>
        <strong>Constructor:</strong>{" "}
        <code>
          CombinationIterator(String characters, int combinationLength)
        </code>
        <ul>
          <li>
            Initializes the iterator with the provided <code>characters</code>{" "}
            and <code>combinationLength</code>.
          </li>
          <li>
            <code>characters</code>: A string of characters from which
            combinations will be generated.
          </li>
          <li>
            <code>combinationLength</code>: The length of combinations to
            generate.
          </li>
          <li>
            Precomputes all combinations of length{" "}
            <code>combinationLength</code> from <code>characters</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>String next()</code>
        <ul>
          <li>Returns the next combination in lexicographical order.</li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>boolean hasNext()</code>
        <ul>
          <li>
            Returns <code>true</code> if there are more combinations to iterate
            over; otherwise, returns <code>false</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  251: (
    <ul>
      <li>
        <strong>Class:</strong> Vector2D
      </li>
      <li>
        <strong>Fields:</strong>
        <ul>
          <li>
            <code>private int i;</code> - Current row index in the 2D vector.
          </li>
          <li>
            <code>private int j;</code> - Current column index in the 2D vector.
          </li>
          <li>
            <code>private int[][] vec;</code> - The 2D vector that holds
            integers.
          </li>
        </ul>
      </li>
      <li>
        <strong>Constructor:</strong> <code>Vector2D(int[][] vec)</code>
        <ul>
          <li>
            Initializes the iterator with the given 2D vector <code>vec</code>.
          </li>
          <li>
            <code>vec</code>: A 2D array where each subarray represents a row of
            integers.
          </li>
          <li>
            Sets <code>i = 0</code> and <code>j = 0</code> to start iterating
            from the beginning of the 2D vector.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>int next()</code>
        <ul>
          <li>Returns the next integer in the 2D vector in row-major order.</li>
          <li>
            Advances <code>i</code> and <code>j</code> using the{" "}
            <code>forward()</code> method to skip empty or finished
            rows/columns.
          </li>
          <li>
            Returns <code>vec[i][j++]</code> as the next integer.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>boolean hasNext()</code>
        <ul>
          <li>
            Checks if there are more integers in the 2D vector to iterate over.
          </li>
          <li>
            Advances <code>i</code> and <code>j</code> using the{" "}
            <code>forward()</code> method to skip empty or finished
            rows/columns.
          </li>
          <li>
            Returns <code>true</code> if there are more integers (
            <code>i &lt; vec.length</code>); otherwise, returns{" "}
            <code>false</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Private Method:</strong> <code>void forward()</code>
        <ul>
          <li>Helper method to skip empty or finished rows/columns.</li>
          <li>
            Increments <code>i</code> and resets <code>j = 0</code> if{" "}
            <code>j</code> is out of bounds for the current row.
          </li>
        </ul>
      </li>
    </ul>
  ),
  281: (
    <ul>
      <li>
        <strong>Class:</strong> ZigzagIterator
      </li>
      <li>
        <strong>Fields:</strong>
        <ul>
          <li>
            <code>private int cur;</code> - Current index of the list being
            accessed.
          </li>
          <li>
            <code>private int size;</code> - Total number of lists (in this
            case, always 2).
          </li>
          <li>
            <code>private List&lt;Integer&gt; indexes;</code> - List to store
            current indexes of each list.
          </li>
          <li>
            <code>private List&lt;List&lt;Integer&gt;&gt; vectors;</code> - List
            of lists (vectors) to iterate over.
          </li>
        </ul>
      </li>
      <li>
        <strong>Constructor:</strong>{" "}
        <code>
          ZigzagIterator(List&lt;Integer&gt; v1, List&lt;Integer&gt; v2)
        </code>
        <ul>
          <li>
            Initializes the iterator with two lists, <code>v1</code> and{" "}
            <code>v2</code>.
          </li>
          <li>
            Sets <code>cur = 0</code> (starting with the first list).
          </li>
          <li>
            Sets <code>size = 2</code> (since there are two lists).
          </li>
          <li>
            Initializes <code>indexes</code> with starting indexes for each list
            (<code>[0, 0]</code>).
          </li>
          <li>
            Stores <code>v1</code> and <code>v2</code> in the{" "}
            <code>vectors</code> list.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>int next()</code>
        <ul>
          <li>Returns the next integer in the zigzag order.</li>
          <li>
            Fetches the current list (<code>vector</code>) and its current index
            (<code>index</code>).
          </li>
          <li>
            Returns the integer at <code>vector.get(index)</code>.
          </li>
          <li>
            Advances the current index for the current list (
            <code>indexes.set(cur, index + 1)</code>).
          </li>
          <li>
            Updates <code>cur</code> to point to the next list in a round-robin
            fashion (<code>cur = (cur + 1) % size</code>).
          </li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>boolean hasNext()</code>
        <ul>
          <li>
            Checks if there are more integers to iterate over in the zigzag
            order.
          </li>
          <li>
            Starts iterating from the current position (<code>start = cur</code>
            ).
          </li>
          <li>
            While the current list's index has reached its size:
            <ul>
              <li>
                Advances <code>cur</code> to the next list (
                <code>cur = (cur + 1) % size</code>).
              </li>
              <li>
                If <code>cur</code> returns to the starting position{" "}
                <code>start</code>, it means all lists have been exhausted.
              </li>
              <li>
                Returns <code>false</code> if no more elements are available;
                otherwise, returns <code>true</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  604: (
    <ul>
      <li>
        <strong>Class:</strong> StringIterator
      </li>
      <li>
        <strong>Fields:</strong>
        <ul>
          <li>
            <code>private List&lt;Node&gt; d;</code> - List of nodes
            representing characters and their counts in the compressed string.
          </li>
          <li>
            <code>private int p;</code> - Current position in the list{" "}
            <code>d</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Constructor:</strong>{" "}
        <code>StringIterator(String compressedString)</code>
        <ul>
          <li>
            Initializes the iterator with a compressed string{" "}
            <code>compressedString</code>.
          </li>
          <li>
            Parses the compressed string to populate the list <code>d</code>{" "}
            with nodes <code>Node(c, x)</code>, where <code>c</code> is the
            character and <code>x</code> is its count.
          </li>
          <li>
            Advances through the string using index <code>i</code> to extract
            characters and their counts.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>char next()</code>
        <ul>
          <li>Returns the next character in the uncompressed form.</li>
          <li>
            Fetches the character at index <code>p</code> in list <code>d</code>
            .
          </li>
          <li>Decrements the count of the current node's character.</li>
          <li>
            If the count becomes zero, advances <code>p</code> to the next node.
          </li>
          <li>Returns the fetched character.</li>
        </ul>
      </li>
      <li>
        <strong>Method:</strong> <code>boolean hasNext()</code>
        <ul>
          <li>Checks if there are more characters to iterate over.</li>
          <li>
            Returns <code>true</code> if <code>p</code> is less than the size of
            list <code>d</code> and the count <code>x</code> of the current node{" "}
            <code>d.get(p)</code> is greater than zero; otherwise, returns{" "}
            <code>false</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1586: (
    <>
      <ul>
        <li>
          <strong>Class:</strong> BSTIterator
        </li>
        <li>
          <strong>Fields:</strong>
          <ul>
            <li>
              <code>private List&lt;Integer&gt; nums;</code> - List to store the
              values of nodes in the BST in sorted order.
            </li>
            <li>
              <code>private int i;</code> - Index to keep track of the current
              position in the list <code>nums</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Constructor:</strong> <code>BSTIterator(TreeNode root)</code>
          <ul>
            <li>Initializes the iterator with the root of the BST.</li>
            <li>
              Performs Depth-First Search (DFS) in-order traversal of the BST to
              populate the list <code>nums</code> with node values in sorted
              order.
            </li>
          </ul>
        </li>
        <li>
          <strong>Method:</strong> <code>boolean hasNext()</code>
          <ul>
            <li>Checks if there is a next element to iterate over.</li>
            <li>
              Returns <code>true</code> if <code>i</code> is less than{" "}
              <code>nums.size() - 1</code>; otherwise, returns{" "}
              <code>false</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Method:</strong> <code>int next()</code>
          <ul>
            <li>Returns the next element in the iterator.</li>
            <li>
              Fetches and returns the element at index <code>i + 1</code> from
              the list <code>nums</code>, then increments <code>i</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Method:</strong> <code>boolean hasPrev()</code>
          <ul>
            <li>Checks if there is a previous element to iterate over.</li>
            <li>
              Returns <code>true</code> if <code>i</code> is greater than{" "}
              <code>0</code>; otherwise, returns <code>false</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Method:</strong> <code>int prev()</code>
          <ul>
            <li>Returns the previous element in the iterator.</li>
            <li>
              Fetches and returns the element at index <code>i - 1</code> from
              the list <code>nums</code>, then decrements <code>i</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  23: (
    <>
      {" "}
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>Base Case</strong>
          <ul>
            <li>If the list of lists is empty or null, return null.</li>
            <li>If there is only one list, return that list.</li>
          </ul>
        </li>
        <li>
          <strong>Recursive Divide</strong>
          <ul>
            <li>Split the list of linked lists into two halves.</li>
            <li>
              Recursively apply the <code>mergeKLists</code> function to each
              half to merge them.
            </li>
          </ul>
        </li>
        <li>
          <strong>Merge</strong>
          <ul>
            <li>
              Merge the two sorted linked lists using the{" "}
              <code>mergeTwoLists</code> function, which is a standard merge
              operation for two sorted linked lists.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Helper Function (<code>mergeTwoLists</code>)
          </strong>
          <ul>
            <li>Create a dummy node to simplify the merge process.</li>
            <li>
              Use two pointers to traverse both lists, appending the smaller
              node to the result list.
            </li>
            <li>
              Attach any remaining nodes once one of the lists is exhausted.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Time Complexity</h2>
      <ul>
        <li>
          <strong>Merge Two Lists:</strong> <code>O(n)</code>, where{" "}
          <code>n</code> is the total number of nodes in both lists.
        </li>
        <li>
          <strong>Merge K Lists:</strong>
          <ul>
            <li>
              Dividing the list of <code>k</code> lists takes{" "}
              <code>O(log k)</code> divisions.
            </li>
            <li>
              Merging all nodes takes <code>O(n)</code>.
            </li>
            <li>
              Hence, the overall time complexity is <code>O(n log k)</code>,
              where <code>n</code> is the total number of nodes across all
              lists.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Space Complexity</h2>
      <ul>
        <li>
          <strong>Auxiliary Space:</strong> <code>O(log k)</code> due to the
          recursion stack.
        </li>
        <li>
          <strong>In-place Merging:</strong> Only uses a fixed amount of
          additional space, making the space complexity efficient.
        </li>
      </ul>
    </>
  ),
  148: (
    <>
      <ul>
        <li>
          <strong>Base Case:</strong>
          <ul>
            <li>
              If the list is empty or has only one node, return the list as it's
              already sorted.
            </li>
          </ul>
        </li>
        <li>
          <strong>Splitting the List:</strong>
          <ul>
            <li>
              Use the slow and fast pointer technique to find the middle of the
              list.
            </li>
            <li>Split the list into two halves at the middle.</li>
          </ul>
        </li>
        <li>
          <strong>Recursive Sorting:</strong>
          <ul>
            <li>Recursively apply the sort function to both halves.</li>
          </ul>
        </li>
        <li>
          <strong>Merge the Sorted Halves:</strong>
          <ul>
            <li>
              Use a helper function to merge the two sorted lists into one
              sorted list.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  3109: (
    <ul>
      <p>
        It's ideal to solve this using <code>Binary Indexed Tree</code>
      </p>
      <li>
        <strong>FenwickTree Class:</strong>
        <ul>
          <li>
            <code>public FenwickTree(int n)</code>: Constructor initializes an
            array <code>sums</code> of size <code>n + 1</code> to store Fenwick
            tree nodes.
          </li>
          <li>
            <code>public void add(int i, int delta)</code>: Adds{" "}
            <code>delta</code> to element at index <code>i</code> and updates
            subsequent nodes in Fenwick tree using <code>lowbit(i)</code>{" "}
            function.
          </li>
          <li>
            <code>public int get(int i)</code>: Retrieves sum of elements from
            index <code>1</code> to <code>i</code> using <code>lowbit(i)</code>{" "}
            function.
          </li>
          <li>
            <code>private int[] sums</code>: Array to store Fenwick tree nodes.
          </li>
          <li>
            <code>private static int lowbit(int i)</code>: Computes lowest
            non-zero bit in <code>i</code> using <code>i &amp; -i</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution Class:</strong>
        <ul>
          <li>
            <code>public int getPermutationIndex(int[] perm)</code>: Computes
            the lexicographical index of <code>perm</code> in permutations of{" "}
            <code>[1, 2, ..., n]</code> using Fenwick tree and factorial
            calculations.
          </li>
          <li>
            <code>final int kMod = 1_000_000_007</code>: Modulus for large
            number calculations.
          </li>
          <li>
            <code>int[] fact = new int[n + 1]</code>: Array to store factorials
            up to <code>n</code>.
          </li>
          <li>
            <code>Arrays.fill(fact, 1)</code>: Initializes <code>fact</code>{" "}
            with factorial values.
          </li>
          <li>
            <code>
              for (int i = 2; i &lt;= n; ++i) fact[i] = (int) ((fact[i - 1] *
              (long) i) % kMod)
            </code>
            : Computes factorial values modulo <code>kMod</code>.
          </li>
          <li>
            Iterates through <code>perm</code> to calculate the lexicographical
            index using:
            <ul>
              <li>
                <code>num - 1 - tree.get(num - 1)</code>: Counts unused numbers
                less than <code>num</code>.
              </li>
              <li>
                <code>fact[n - 1 - i]</code>: Computes suffix length factorial.
              </li>
              <li>
                Updates <code>ans</code> using computed values and adds{" "}
                <code>num</code> to Fenwick tree.
              </li>
            </ul>
          </li>
          <li>
            <code>return ans</code>: Returns the computed lexicographical index.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2519: (
    <ul>
      <p>
        It's ideal to solve this using <code>Binary Indexed Tree</code>
      </p>
      <li>
        <strong>FenwickTree Class:</strong>
        <ul>
          <li>
            <code>public FenwickTree(int n)</code>: Constructor initializes an
            array <code>sums</code> of size <code>n + 1</code> to store Fenwick
            tree nodes.
          </li>
          <li>
            <code>public void add(int i, int delta)</code>: Adds{" "}
            <code>delta</code> to element at index <code>i</code> and updates
            subsequent nodes in Fenwick tree using <code>lowbit(i)</code>{" "}
            function.
          </li>
          <li>
            <code>public int get(int i)</code>: Retrieves sum of elements from
            index <code>1</code> to <code>i</code> using <code>lowbit(i)</code>{" "}
            function.
          </li>
          <li>
            <code>private int[] sums</code>: Array to store Fenwick tree nodes.
          </li>
          <li>
            <code>private static int lowbit(int i)</code>: Computes lowest
            non-zero bit in <code>i</code> using <code>i &amp; -i</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution Class:</strong>
        <ul>
          <li>
            <code>public int kBigIndices(int[] nums, int k)</code>: Counts how
            many indices <code>i</code> in array <code>nums</code> satisfy both{" "}
            <code>left[i] &gt;= k</code> and <code>right[i] &gt;= k</code>.
          </li>
          <li>
            Creates two Fenwick trees, <code>leftTree</code> and{" "}
            <code>rightTree</code>, and arrays <code>left</code> and{" "}
            <code>right</code> to store counts.
          </li>
          <li>
            Populates <code>left</code> array using <code>leftTree</code> to
            count elements less than <code>nums[i]</code> with index{" "}
            <code>&lt; i</code>.
          </li>
          <li>
            Populates <code>right</code> array using <code>rightTree</code> to
            count elements less than <code>nums[i]</code> with index{" "}
            <code>&gt; i</code>.
          </li>
          <li>
            Iterates through <code>nums</code> to count valid indices based on
            conditions and increments <code>ans</code> accordingly.
          </li>
          <li>
            <code>return ans</code>: Returns the count of indices satisfying the
            conditions.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2031: (
    <ul>
      <li>
        <strong>FenwickTree Class:</strong>
        <ul>
          <li>
            <code>public FenwickTree(int n)</code>:
            <ul>
              <li>
                Constructor initializes an array <code>sums</code> of size{" "}
                <code>n + 1</code> to store Fenwick tree nodes.
              </li>
            </ul>
          </li>
          <li>
            <code>public void add(int i, int delta)</code>:
            <ul>
              <li>
                Adds <code>delta</code> to the element at index <code>i</code>{" "}
                and updates subsequent nodes in the Fenwick tree using the{" "}
                <code>lowbit(i)</code> function.
              </li>
            </ul>
          </li>
          <li>
            <code>public int get(int i)</code>:
            <ul>
              <li>
                Retrieves the sum of elements from index <code>1</code> to{" "}
                <code>i</code> using the <code>lowbit(i)</code> function.
              </li>
            </ul>
          </li>
          <li>
            <code>private int[] sums</code>:
            <ul>
              <li>Array to store Fenwick tree nodes.</li>
            </ul>
          </li>
          <li>
            <code>private static int lowbit(int i)</code>:
            <ul>
              <li>
                Computes the lowest non-zero bit in <code>i</code> using{" "}
                <code>i & -i</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution Class:</strong>
        <ul>
          <li>
            <code>public int subarraysWithMoreZerosThanOnes(int[] nums)</code>:
            <ul>
              <li>
                Counts the number of subarrays where the number of ones is
                greater than the number of zeros.
              </li>
              <li>
                Initializes the modulus <code>kMod</code>, the length{" "}
                <code>n</code> of the input array <code>nums</code>, and
                variables <code>ans</code> and <code>prefix</code>.
              </li>
              <li>
                Creates a Fenwick tree <code>tree</code> with size{" "}
                <code>2 * n + 1</code> to handle positive and negative prefix
                sums.
              </li>
              <li>
                Remaps the prefix sum index <code>0</code> to the middle of the
                tree and adds it to the tree.
              </li>
              <li>
                Iterates through the array <code>nums</code>:
                <ul>
                  <li>
                    Updates the <code>prefix</code> sum by adding <code>1</code>{" "}
                    for each <code>1</code> and subtracting <code>1</code> for
                    each <code>0</code>.
                  </li>
                  <li>
                    Adds to <code>ans</code> the number of prefix sums seen so
                    far that are less than the current prefix sum.
                  </li>
                  <li>
                    Updates <code>ans</code> modulo <code>kMod</code>.
                  </li>
                  <li>Adds the current prefix sum to the Fenwick tree.</li>
                </ul>
              </li>
              <li>
                Returns the final answer <code>ans</code>.
              </li>
            </ul>
          </li>
          <li>
            <code>private int remap(int i, int n)</code>:
            <ul>
              <li>
                Remaps the index <code>i</code> to ensure all indices are
                positive by adding <code>n + 1</code> to <code>i</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  315: (
    <>
      <ul>
        <li>
          <strong>Solution Class:</strong>
          <ul>
            <li>
              <code>public List&lt;Integer&gt; countSmaller(int[] nums)</code>:
              <ul>
                <li>
                  Initializes necessary arrays: <code>countSmaller</code> to
                  store the counts, and <code>indices</code> to maintain indices
                  for sorting.
                </li>
                <li>
                  Invokes the <code>mergeSort</code> method to recursively sort
                  and count smaller numbers.
                </li>
                <li>
                  Converts <code>countSmaller</code> to a list and returns it as
                  the result.
                </li>
              </ul>
            </li>
            <li>
              <code>
                private void mergeSort(int[] nums, int[] indices, int[]
                countSmaller, int start, int end)
              </code>
              :
              <ul>
                <li>
                  Divides the array into halves and recursively sorts them using
                  merge sort.
                </li>
                <li>
                  During the merge step, it calls <code>merge</code> to count
                  smaller elements from the right half for each element in the
                  left half.
                </li>
              </ul>
            </li>
            <li>
              <code>
                private void merge(int[] nums, int[] indices, int[]
                countSmaller, int start, int mid, int end)
              </code>
              :
              <ul>
                <li>
                  Merges two sorted halves while counting smaller elements from
                  the right half for each element in the left half.
                </li>
                <li>
                  Updates the <code>countSmaller</code> array based on the
                  number of elements merged from the right half.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        This approach efficiently counts smaller numbers after each element
        using merge sort with a time complexity of O(nlogn) and space complexity
        of O(n), making it suitable for large input sizes up to 10^5
      </p>
    </>
  ),
  327: (
    <>
      <ul>
        <li>
          <strong>Solution Class:</strong>
          <ul>
            <li>
              <code>
                public int countRangeSum(int[] nums, int lower, int upper)
              </code>
              :
              <ul>
                <li>
                  Initializes a `prefixSum` array to store cumulative sums of
                  `nums`.
                </li>
                <li>
                  Invokes the `mergeSortAndCount` method to recursively count
                  valid subarrays within `[lower, upper]`.
                </li>
                <li>Converts and returns the count of valid subarrays.</li>
              </ul>
            </li>
            <li>
              <code>
                private int mergeSortAndCount(long[] prefixSum, int left, int
                right, int lower, int upper)
              </code>
              :
              <ul>
                <li>
                  Divides the array into halves and recursively counts valid
                  subarrays using `mergeAndCount`.
                </li>
                <li>
                  Accumulates the counts from left and right halves and the
                  merged counts.
                </li>
              </ul>
            </li>
            <li>
              <code>
                private int mergeAndCount(long[] prefixSum, int left, int mid,
                int right, int lower, int upper)
              </code>
              :
              <ul>
                <li>
                  Counts the number of valid subarrays that fall within the
                  range `[lower, upper]` during the merge step.
                </li>
                <li>
                  Uses two pointers (`j` and `k`) to find the valid pairs
                  `(left, right)`.
                </li>
                <li>
                  Merges the sorted halves and updates `prefixSum` accordingly.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        This approach efficiently counts the number of range sums using merge
        sort with a time complexity of O(nlogn) and a space complexity of O(n),
        making it suitable for large input sizes.
      </p>
    </>
  ),
  493: (
    <>
      <ul>
        <li>
          <strong>Solution Class:</strong>
          <ul>
            <li>
              <code>public int reversePairs(int[] nums)</code>:
              <ul>
                <li>
                  Initializes the recursive merge sort and counting method.
                </li>
                <li>
                  Converts and returns the count of reverse pairs in `nums`.
                </li>
              </ul>
            </li>
            <li>
              <code>
                private int mergeSortAndCount(int[] nums, int left, int right)
              </code>
              :
              <ul>
                <li>
                  Divides the array into halves and recursively counts reverse
                  pairs using `mergeAndCount`.
                </li>
                <li>Accumulates the counts from left and right halves.</li>
              </ul>
            </li>
            <li>
              <code>
                private int mergeAndCount(int[] nums, int left, int mid, int
                right)
              </code>
              :
              <ul>
                <li>
                  Counts the number of reverse pairs `(i, j)` where `nums[i] > 2
                  * nums[j]` during the merge step.
                </li>
                <li>
                  Merges the sorted halves and updates `nums` accordingly.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        This approach efficiently counts reverse pairs using merge sort with a
        time complexity of O(nlogn) and a space complexity of O(n), making it
        suitable for large input sizes.
      </p>
    </>
  ),
  "912_merge_sort": (
    <>
      <ul>
        <li>
          <strong>Solution Class:</strong>
          <ul>
            <li>
              <code>public int[] sortArray(int[] nums)</code>:
              <ul>
                <li>Entry point to the sorting algorithm.</li>
                <li>Invokes `mergeSort` to sort the entire array `nums`.</li>
                <li>Returns the sorted array.</li>
              </ul>
            </li>
            <li>
              <code>
                private void mergeSort(int[] nums, int left, int right)
              </code>
              :
              <ul>
                <li>
                  Recursive function to divide the array into halves and sort
                  them.
                </li>
                <li>Base case: stops recursion when `left &gt;= right`.</li>
                <li>
                  Divides the array into two halves and recursively sorts them.
                </li>
                <li>Merges the two sorted halves using `merge`.</li>
              </ul>
            </li>
            <li>
              <code>
                private void merge(int[] nums, int left, int mid, int right)
              </code>
              :
              <ul>
                <li>
                  Merges two sorted subarrays (`nums[left...mid]` and
                  `nums[mid+1...right]`) into a single sorted array
                  `nums[left...right]`.
                </li>
                <li>
                  Uses additional arrays `leftArr` and `rightArr` to store the
                  subarrays temporarily.
                </li>
                <li>
                  Compares elements from `leftArr` and `rightArr`, placing the
                  smaller element into `nums`.
                </li>
                <li>
                  Transfers any remaining elements from `leftArr` or `rightArr`
                  into `nums`.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        {" "}
        This implementation ensures that the array nums is sorted in
        non-decreasing order using the merge sort algorithm, which has a time
        complexity of O(nlogn) and a space complexity of O(n). It is efficient
        and suitable for large input sizes.
      </p>
    </>
  ),
  1649: (
    <>
      <ul>
        <p>
          It's ideal to solve this using <code>Binary Indexed Tree</code>
        </p>
        <li>
          <strong>Solution Class:</strong>
          <ul>
            <li>
              <code>public int createSortedArray(int[] instructions)</code>:
              <ul>
                <li>Entry point to the solution.</li>
                <li>
                  Initializes a Fenwick Tree and processes each instruction in
                  the array.
                </li>
                <li>
                  Counts elements less than or equal to the current element
                  using the Fenwick Tree.
                </li>
                <li>
                  Updates the Fenwick Tree with the current element after
                  counting.
                </li>
                <li>Computes the total cost modulo \(10^9 + 7\).</li>
                <li>Returns the computed cost.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>FenwickTree Class:</strong>
          <ul>
            <li>
              <code>public FenwickTree(int size)</code>:
              <ul>
                <li>
                  Constructor to initialize the Fenwick Tree with a given size.
                </li>
              </ul>
            </li>
            <li>
              <code>public void update(int index, int delta)</code>:
              <ul>
                <li>
                  Updates the Fenwick Tree at a specific index with a given
                  delta value.
                </li>
              </ul>
            </li>
            <li>
              <code>public int query(int index)</code>:
              <ul>
                <li>
                  Queries the Fenwick Tree for the prefix sum up to a specific
                  index.
                </li>
                <li>Returns the sum.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  2179: (
    <ul>
      <p>
        It's ideal to solve this using <code>Binary Indexed Tree</code>
      </p>
      <li>
        <strong>FenwickTree class:</strong>
        <ul>
          <li>
            Implements a Fenwick Tree (Binary Indexed Tree) to support efficient
            range sum queries and point updates.
          </li>
          <li>
            Provides methods for adding a value to an index and getting the sum
            up to an index.
          </li>
          <li>
            Uses bitwise operations to compute lowbit, which is essential for
            Fenwick Tree operations.
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution class:</strong>
        <ul>
          <li>
            <code>goodTriplets(int[] nums1, int[] nums2)</code> method
            calculates the number of good triplets satisfying the given
            conditions.
          </li>
          <li>Initializes necessary data structures and mappings:</li>
          <ul>
            <li>
              <code>numToIndex</code>: Maps values in <code>nums1</code> to
              their indices for quick lookup.
            </li>
            <li>
              <code>nums</code>: Converts values in <code>nums2</code> to their
              corresponding indices in <code>nums1</code>.
            </li>
            <li>
              Two Fenwick Trees (<code>tree1</code> and <code>tree2</code>) are
              initialized.
            </li>
          </ul>
          <li>
            Calculates <code>leftSmaller</code> and <code>rightLarger</code>{" "}
            arrays using the Fenwick Tree:
          </li>
          <ul>
            <li>
              <code>leftSmaller[i]</code>: Counts how many elements to the left
              of <code>nums[i]</code> are smaller than <code>nums[i]</code>.
            </li>
            <li>
              <code>rightLarger[i]</code>: Counts how many elements to the right
              of <code>nums[i]</code> are larger than <code>nums[i]</code>.
            </li>
          </ul>
          <li>
            Iterates through each index in <code>nums</code> to calculate the
            number of good triplets and accumulates the result in{" "}
            <code>ans</code>.
          </li>
          <li>
            Returns <code>ans</code> as the final count of good triplets.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2426: (
    <ul>
      {" "}
      <li>
        <strong>Explanation:</strong>
      </li>
      <ul>
        <li>
          <strong>Initialization:</strong> Initialize an array <code>A</code>{" "}
          where <code>A[i] = nums1[i] - nums2[i]</code>. This allows us to
          transform the problem into finding pairs in <code>A</code> where the
          difference between elements is less than or equal to <code>diff</code>
          .
        </li>

        <li>
          <strong>Merge Sort:</strong> Use merge sort to sort array{" "}
          <code>A</code>. Merge sort is chosen for its stability and \( O(n \log
          n) \) time complexity.
        </li>

        <li>
          <strong>Two-Pointer Technique:</strong> During the merge phase of
          merge sort, count the number of valid pairs using two pointers:
          <ul>
            <li>
              For each element in the left half of the merged array, find the
              rightmost element in the right half that satisfies{" "}
              <code>A[j] - A[i] &gt;= diff</code>.
            </li>
            <li>
              Increment the count of valid pairs by the number of elements
              between the current left and right pointers.
            </li>
          </ul>
        </li>

        <li>
          <strong>Time Complexity:</strong> ( O(n log n) ) due to merge sort.
        </li>
        <li>
          <strong>Space Complexity:</strong> ( O(n) ) for the additional arrays
          used.
        </li>
      </ul>
    </ul>
  ),
  380: (
    <>
      <h1>Insert Delete GetRandom O(1) Problem</h1>

      <p>
        The task is to design a data structure that supports the following
        operations in average <code>O(1)</code> time:
      </p>

      <ul>
        <li>
          <code>insert(val)</code>: Inserts an item <code>val</code> to the set
          if not already present.
        </li>
        <li>
          <code>remove(val)</code>: Removes an item <code>val</code> from the
          set if present.
        </li>
        <li>
          <code>getRandom()</code>: Returns a random element from the current
          set of elements. Each element must have the same probability of being
          returned.
        </li>
      </ul>

      <h2>Approach</h2>
      <p>
        To achieve average <code>O(1)</code> time complexity for all operations,
        we use a combination of a list and a hashmap:
      </p>

      <ul>
        <li>
          <strong>List</strong>: To store the elements. This allows{" "}
          <code>O(1)</code> time access to elements for the{" "}
          <code>getRandom()</code> operation.
        </li>
        <li>
          <strong>HashMap</strong>: To store the elements along with their
          indices in the list. This allows <code>O(1)</code> time insertions and
          deletions.
        </li>
      </ul>

      <h2>Java Implementation</h2>

      <h2>Explanation of Operations</h2>
      <ul>
        <li>
          <strong>Insert</strong>: Adds the element to the end of the list and
          records its position in the hashmap.
        </li>
        <li>
          <strong>Remove</strong>: Replaces the element to be removed with the
          last element in the list, updates the position of the last element in
          the hashmap, and then removes the last element from the list and the
          element from the hashmap.
        </li>
        <li>
          <strong>GetRandom</strong>: Uses the <code>Random</code> class to
          select a random index from the list and returns the element at that
          index.
        </li>
      </ul>
    </>
  ),
  381: (
    <>
      <h1>Insert Delete GetRandom O(1) - Duplicates allowed</h1>

      <p>
        The task is to design a data structure that supports the following
        operations in average <code>O(1)</code> time, allowing duplicate
        elements:
      </p>

      <ul>
        <li>
          <code>insert(val)</code>: Inserts an item <code>val</code> into the
          collection.
        </li>
        <li>
          <code>remove(val)</code>: Removes an item <code>val</code> from the
          collection. If there are multiple items, remove any one of them.
        </li>
        <li>
          <code>getRandom()</code>: Returns a random element from the current
          collection of elements. Each element must have the same probability of
          being returned.
        </li>
      </ul>

      <h2>Approach</h2>
      <p>
        To achieve average <code>O(1)</code> time complexity for all operations,
        we use a combination of a list and a hashmap:
      </p>

      <ul>
        <li>
          <strong>List</strong>: To store the elements. This allows{" "}
          <code>O(1)</code> time access to elements for the{" "}
          <code>getRandom()</code> operation.
        </li>
        <li>
          <strong>HashMap</strong>: To store the elements along with their
          indices in the list. Since duplicates are allowed, each value in the
          hashmap points to a set of indices.
        </li>
      </ul>

      <h2>Explanation of Operations</h2>
      <ul>
        <li>
          <strong>Insert</strong>: Adds the element to the end of the list and
          records its position in the hashmap.
        </li>
        <li>
          <strong>Remove</strong>: Replaces the element to be removed with the
          last element in the list, updates the position of the last element in
          the hashmap, and then removes the last element from the list and the
          element from the hashmap.
        </li>
        <li>
          <strong>GetRandom</strong>: Uses the <code>Random</code> class to
          select a random index from the list and returns the element at that
          index.
        </li>
      </ul>
    </>
  ),
  384: (
    <>
      <h1>Shuffle an Array</h1>

      <p>
        The task is to design a class to shuffle an array and also reset it to
        its original configuration.
      </p>

      <h2>Problem Statement</h2>
      <ul>
        <li>
          <code>Solution(int[] nums)</code>: Initializes the object with the
          integer array <code>nums</code>.
        </li>
        <li>
          <code>int[] reset()</code>: Resets the array to its original
          configuration and returns it.
        </li>
        <li>
          <code>int[] shuffle()</code>: Returns a random shuffling of the array.
        </li>
      </ul>

      <h2>Approach</h2>
      <p>
        We use the Fisher-Yates shuffle algorithm to ensure each permutation of
        the array is equally likely:
      </p>
      <ul>
        <li>
          Iterate over the array and for each element, swap it with a randomly
          chosen element that comes after it (or the element itself).
        </li>
      </ul>

      <h2>Java Implementation</h2>

      <h2>Explanation of Operations</h2>
      <ul>
        <li>
          <strong>Initialization</strong>: The constructor initializes the
          object with the given integer array. It clones the array to{" "}
          <code>original</code> to keep a copy of the original configuration,
          and to <code>array</code> which will be shuffled. A{" "}
          <code>Random</code> object is created to generate random indices for
          shuffling.
        </li>
        <li>
          <strong>Reset Operation</strong>: The <code>reset</code> method
          returns the array to its original configuration by cloning the{" "}
          <code>original</code> array to <code>array</code> and returning{" "}
          <code>array</code>.
        </li>
        <li>
          <strong>Shuffle Operation</strong>: The <code>shuffle</code> method
          uses the Fisher-Yates algorithm to shuffle the array. It iterates over
          each element of the array and swaps it with a randomly chosen element
          that comes after it (or the element itself).
        </li>
      </ul>
    </>
  ),
  528: (
    <>
      <h1>Random Pick with Weight</h1>

      <p>
        The task is to design a class to randomly pick an index from an array of
        weights, where the probability of picking an index is proportional to
        its weight.
      </p>

      <h2>Problem Statement</h2>
      <ul>
        <li>
          <code>Solution(int[] w)</code>: Initializes the object with the array{" "}
          <code>w</code> of weights.
        </li>
        <li>
          <code>int pickIndex()</code>: Returns a randomly selected index. The
          probability of picking index <code>i</code> is{" "}
          <code>w[i] / sum(w)</code>.
        </li>
      </ul>

      <h2>Approach</h2>
      <p>We use a prefix sum array and binary search:</p>
      <ul>
        <li>
          Compute the prefix sum array from the input weights. This allows us to
          map each weight to a range of values.
        </li>
        <li>
          Use a random number generator to pick a number between 0 and the total
          sum of weights.
        </li>
        <li>
          Use binary search to find the index corresponding to the picked
          number.
        </li>
      </ul>

      <h2>Java Implementation</h2>

      <h2>Explanation of Operations</h2>
      <ul>
        <li>
          <strong>Initialization</strong>: The constructor initializes the
          object with the given weights array. It computes the prefix sum array
          where each entry at index <code>i</code> is the sum of the weights
          from index 0 to <code>i</code>. The <code>totalSum</code> is the sum
          of all weights.
        </li>
        <li>
          <strong>PickIndex Operation</strong>: The <code>pickIndex</code>{" "}
          method generates a random number between 1 and <code>totalSum</code>{" "}
          (inclusive). It uses binary search to find the first index in the
          prefix sum array that is greater than or equal to the generated random
          number. This index corresponds to the selected weight's index in the
          original array.
        </li>
      </ul>
    </>
  ),
  1515: (
    <>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>n</code>: Number of customer positions.
            </li>
            <li>
              <code>x</code> and <code>y</code>: Initialized as the average of
              all given positions.
            </li>
            <li>
              <code>decay</code>: Rate at which the step size (
              <code>alpha</code>) decreases in each iteration.
            </li>
            <li>
              <code>eps</code>: Small threshold value to determine convergence.
            </li>
            <li>
              <code>alpha</code>: Initial step size for gradient descent.
            </li>
          </ul>
        </li>
        <li>
          <strong>Gradient Descent Loop:</strong>
          <ul>
            <li>
              <code>while (true)</code>: Iterates until convergence criteria are
              met.
            </li>
            <li>
              Calculate gradients <code>gradX</code> and <code>gradY</code> for
              the total distance function.
            </li>
            <li>
              Compute total distance <code>dist</code> from current position{" "}
              <code>(x, y)</code> to all customer positions.
            </li>
            <li>
              Update <code>x</code> and <code>y</code> using <code>gradX</code>{" "}
              and <code>gradY</code> scaled by <code>alpha</code>.
            </li>
            <li>
              Adjust <code>alpha</code> using <code>decay</code> to gradually
              reduce the step size.
            </li>
            <li>
              Exit loop when both <code>dx</code> and <code>dy</code> are
              smaller than <code>eps</code>, indicating convergence.
            </li>
          </ul>
        </li>
        <li>
          <strong>Parameters and Adjustments:</strong>
          <ul>
            <li>
              <code>decay</code> and <code>eps</code> manage convergence and
              accuracy.
            </li>
            <li>
              <code>alpha</code> controls the speed of convergence in gradient
              descent.
            </li>
          </ul>
        </li>
      </ul>
      <br />
      <p>
        This code effectively uses gradient descent to iteratively minimize the
        total distance sum from a service center (x, y) to all given customer
        positions. The parameters (decay, eps, alpha) and the iterative update
        of (x, y) ensure that the algorithm converges towards an optimal or
        near-optimal solution.
      </p>
    </>
  ),
  239: (
    <>
      <h1>Explanation Using Monotonic Queue for Sliding Window Maximum</h1>

      <p>
        This approach uses a double-ended queue (deque) to efficiently find the
        maximum value in each sliding window of size <code>k</code> for an input
        array <code>nums</code>.
      </p>

      <h2>Steps:</h2>

      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>Use a deque to store indices of array elements.</li>
            <li>
              Initialize an array <code>result</code> to store maximum values
              for each window.
            </li>
          </ul>
        </li>
        <li>
          <strong>Sliding Window Process:</strong>
          <ul>
            <li>
              Iterate through the array <code>nums</code>.
            </li>
            <li>
              For each element <code>nums[i]</code>:
            </li>
            <ul>
              <li>
                Remove indices from the front of the deque that are out of the
                current window (<code>i &gt;= k</code>).
              </li>
              <li>
                Remove elements from the back of the deque as long as they are
                smaller than or equal to <code>nums[i]</code>.
              </li>
              <li>
                Add the current index <code>i</code> to the deque.
              </li>
              <li>
                If <code>i &gt;= k - 1</code>, store the maximum value (front of
                the deque) in <code>result[i - k + 1]</code>.
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <strong>Output:</strong>
          <ul>
            <li>
              After processing all elements, <code>result</code> contains the
              maximum values for each sliding window of size <code>k</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  862: (
    <>
      {" "}
      <h3>Class Definition</h3>
      <ul>
        <li>
          We define a class named <code>Solution</code> which contains the
          method <code>shortestSubarray</code>.
        </li>
      </ul>
      <h3>Prefix Sum Calculation</h3>
      <ul>
        <li>
          A <code>long</code> array <code>prefixSum</code> is used to store the
          prefix sums. This helps to handle large sums without overflow.
        </li>
        <li>
          The prefix sums are computed in a loop where{" "}
          <code>prefixSum[i+1] = prefixSum[i] + nums[i]</code>.
        </li>
      </ul>
      <h3>Deque Operations</h3>
      <ul>
        <li>
          We use a <code>Deque&lt;Integer&gt;</code> to maintain indices of the
          prefix sum array.
        </li>
        <li>
          For each index <code>i</code>, we check if the difference between the
          current prefix sum and the prefix sum at the front of the deque is at
          least <code>K</code>. If so, we update the minimum length and remove
          the index from the front of the deque.
        </li>
        <li>
          To maintain the monotonic property of the deque, we remove elements
          from the back of the deque if the current prefix sum is less than or
          equal to the prefix sum at the back of the deque.
        </li>
        <li>We then add the current index to the deque.</li>
      </ul>
      <h3>Edge Case Handling</h3>
      <ul>
        <li>
          If no valid subarray is found, we return <code>-1</code>. Otherwise,
          we return the length of the shortest subarray.
        </li>
      </ul>
      <h3>Main Method for Testing</h3>
      <ul>
        <li>
          The <code>main</code> method is included to provide a simple test case
          where the solution is instantiated and tested with an example array
          and target sum <code>K</code>.
        </li>
      </ul>
    </>
  ),
  918: (
    <>
      <h3>Problem Breakdown</h3>
      <ul>
        <li>
          <strong>Circular Array Consideration</strong>:
          <ul>
            <li>
              A circular array means that the subarray can wrap around the end
              of the array and continue from the beginning.
            </li>
            <li>
              To handle this, we can conceptually duplicate the array to form a
              linear view of the circular nature.
            </li>
          </ul>
        </li>
        <li>
          <strong>Prefix Sum Array</strong>:
          <ul>
            <li>
              We use a prefix sum array to quickly compute the sum of any
              subarray.
            </li>
          </ul>
        </li>
        <li>
          <strong>Using a Monotonic Queue</strong>:
          <ul>
            <li>
              A monotonic queue helps in maintaining a window of valid subarray
              sums, ensuring that we efficiently find the maximum subarray sum.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Steps</h3>
      <ul>
        <li>
          <strong>Extend the Array</strong>:
          <ul>
            <li>
              Create a new array that is twice the length of the original array
              to simulate the circular behavior.
            </li>
          </ul>
        </li>
        <li>
          <strong>Compute Prefix Sums</strong>:
          <ul>
            <li>Calculate the prefix sum for this extended array.</li>
          </ul>
        </li>
        <li>
          <strong>Monotonic Queue for Maximum Subarray Sum</strong>:
          <ul>
            <li>
              Use a deque to keep track of the minimum prefix sum indices in a
              way that helps to find the maximum subarray sum.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Implementation</h3>
      <ul>
        <li>
          Extend the array to simulate circular behavior:
          <ul>
            <li>
              Create an array <code>extendedNums</code> that contains two copies
              of the original array.
            </li>
          </ul>
        </li>
        <li>
          Compute the prefix sum array:
          <ul>
            <li>
              Create a <code>prefixSum</code> array and calculate the prefix
              sums for the extended array.
            </li>
          </ul>
        </li>
        <li>
          Use a monotonic deque to find the maximum subarray sum:
          <ul>
            <li>
              Initialize a deque to store indices of the prefix sum array.
            </li>
            <li>
              Iterate through the prefix sum array and maintain the monotonic
              property of the deque.
            </li>
            <li>
              Update the maximum subarray sum using the values in the deque.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1425: (
    <>
      <h3>Detailed Explanation of the Code</h3>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Initialize a <code>dp</code> array where each <code>dp[i]</code>{" "}
              starts with <code>nums[i]</code> since a single element is a valid
              subsequence.
            </li>
            <li>
              A <code>deque</code> is used to store the indices of the{" "}
              <code>dp</code> array in a way that maintains a decreasing order
              of <code>dp</code> values.
            </li>
          </ul>
        </li>
        <li>
          <strong>Updating DP Array:</strong>
          <ul>
            <li>
              For each index <code>i</code>, update <code>dp[i]</code> to be the
              maximum of <code>nums[i]</code> and{" "}
              <code>nums[i] + dp[deque.peekFirst()]</code> if the deque is not
              empty.
            </li>
            <li>
              Update <code>maxSum</code> to be the maximum value of{" "}
              <code>dp[i]</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Maintaining the Monotonic Deque:</strong>
          <ul>
            <li>
              Remove elements from the back of the deque if <code>dp[i]</code>{" "}
              is greater than or equal to the <code>dp</code> value at the back
              of the deque to maintain the decreasing order.
            </li>
            <li>
              Add the current index <code>i</code> to the deque.
            </li>
            <li>
              Remove the front element of the deque if it is out of the valid
              window of size <code>k</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1438: (
    <>
      {" "}
      <h3>Detailed Explanation of the Code</h3>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>left</code> and <code>right</code> pointers are initialized
              to define the sliding window.
            </li>
            <li>
              <code>maxDeque</code> and <code>minDeque</code> are initialized to
              keep track of the maximum and minimum values within the current
              window.
            </li>
          </ul>
        </li>
        <li>
          <strong>Expand the Window:</strong>
          <ul>
            <li>
              For each element at the <code>right</code> index:
              <ul>
                <li>
                  Update <code>maxDeque</code> by removing elements from the
                  back that are less than the current element to maintain
                  decreasing order.
                </li>
                <li>
                  Update <code>minDeque</code> by removing elements from the
                  back that are greater than the current element to maintain
                  increasing order.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Shrink the Window:</strong>
          <ul>
            <li>
              If the difference between the maximum value (
              <code>maxDeque.peekFirst()</code>) and the minimum value (
              <code>minDeque.peekFirst()</code>) exceeds the limit:
              <ul>
                <li>
                  Increment the <code>left</code> pointer to shrink the window.
                </li>
                <li>
                  Remove elements from the deques if they are out of the current
                  window (i.e., their index is less than <code>left</code>).
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Update the Result:</strong>
          <ul>
            <li>
              Update <code>maxLength</code> with the maximum length of the valid
              subarray found so far.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1499: (
    <>
      {" "}
      <h3>Detailed Explanation of the Code</h3>
      <ul>
        <li>
          <strong>Initialization</strong>
          <ul>
            <li>
              <code>deque</code> is a double-ended queue that will store pairs
              of the form <code>(x_i, y_i - x_i)</code>.
            </li>
            <li>
              <code>maxValue</code> is initialized to the smallest possible
              integer to keep track of the maximum value.
            </li>
          </ul>
        </li>
        <li>
          <strong>Iterate Through Points</strong>
          <ul>
            <li>
              For each point <code>(x, y)</code>
              <ul>
                <li>
                  Remove points from the deque that are out of the window of
                  size <code>k</code>.
                </li>
                <li>
                  If the deque is not empty, update <code>maxValue</code> using
                  the formula <code>y + x + deque.peekFirst()[1]</code>.
                </li>
                <li>
                  Maintain the deque to ensure it remains in a decreasing order
                  by removing elements from the back that are less than the
                  current <code>y - x</code>.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Update Result</strong>
          <ul>
            <li>
              Add the current point <code>(x, y - x)</code> to the deque.
            </li>
            <li>
              The deque is maintained to ensure that the front always contains
              the largest value within the current window.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1687: (
    <>
      {" "}
      <h3>Detailed Explanation of the Code</h3>
      <ul>
        <li>
          <strong>Initialization</strong>:
          <ul>
            <li>
              Arrays <code>ports</code>, <code>weights</code>,{" "}
              <code>differences</code>, and <code>prefixWeights</code> are used
              to store the respective properties of the boxes.
            </li>
            <li>
              <code>dp</code> array stores the minimum number of trips required
              up to each box.
            </li>
            <li>
              <code>remain</code> array helps in maintaining the
              cost-effectiveness of the trips.
            </li>
            <li>
              A deque is used to maintain a sliding window of the minimum trips.
            </li>
          </ul>
        </li>
        <li>
          <strong>Iterate Through Boxes</strong>:
          <ul>
            <li>
              For each box at index <code>i</code>:
              <ul>
                <li>
                  Adjust the deque to maintain the trip constraints (number of
                  boxes and total weight).
                </li>
                <li>
                  Calculate <code>dp[i]</code> using the front of the deque and
                  update it for the minimum number of trips required to deliver
                  up to the current box.
                </li>
                <li>
                  Update the <code>remain</code> array to keep track of the
                  minimum trips in an efficient manner.
                </li>
                <li>
                  Maintain the deque to ensure it provides the minimum number of
                  trips.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1696: (
    <>
      {" "}
      <h3>Detailed Explanation of the Code</h3>
      <ul>
        <li>
          <strong>Initialization</strong>
          <ul>
            <li>
              The <code>dp</code> array stores the maximum score to reach each
              index.
            </li>
            <li>
              The deque is used to keep track of indices with maximum{" "}
              <code>dp</code> values within the current sliding window.
            </li>
          </ul>
        </li>
        <li>
          <strong>Iterate Through the Array</strong>
          <ul>
            <li>
              For each index <code>i</code>
              <ul>
                <li>
                  Remove elements from the front of the deque if they are out of
                  the allowed jump range (<code>i - k</code> to{" "}
                  <code>i - 1</code>).
                </li>
                <li>
                  Update <code>dp[i]</code> by adding <code>nums[i]</code> to
                  the maximum <code>dp</code> value within the allowed range
                  (front of the deque).
                </li>
                <li>
                  Maintain the deque in decreasing order of <code>dp</code>{" "}
                  values by removing elements from the back if they are less
                  than the current <code>dp[i]</code>.
                </li>
                <li>
                  Add the current index <code>i</code> to the deque.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  2071: (
    <>
      <h3>Explanation</h3>

      <ul>
        <li>
          <strong>Sorting:</strong> Both the <code>tasks</code> and{" "}
          <code>workers</code> arrays are sorted to facilitate efficient
          assignment based on task difficulty and worker capability.
        </li>
        <li>
          <strong>Binary Search:</strong> The <code>maxTaskAssign</code> method
          uses binary search to find the maximum number of tasks that can be
          assigned (<code>mid</code>).
        </li>
        <li>
          <strong>Feasibility Check:</strong> The <code>check</code> method
          evaluates whether a given number of tasks (<code>x</code>) can be
          assigned to workers by using a deque (<code>taskQueue</code>) to
          manage tasks and checking worker capabilities against task
          difficulties and available pills.
        </li>
      </ul>
    </>
  ),
  2407: (
    <>
      <h3>Solution Explanation</h3>

      <p>It's ideal to solve this using Segment Tree Approach</p>

      <ul>
        <li>
          <strong>SegmentTree Class</strong>
          <ul>
            <li>
              <strong>Attributes</strong>
              <ul>
                <li>
                  <code>left</code>, <code>right</code>: Pointers to left and
                  right child nodes of the Segment Tree.
                </li>
                <li>
                  <code>start</code>, <code>end</code>: Represent the range{" "}
                  <code>[start, end]</code> covered by the node.
                </li>
                <li>
                  <code>val</code>: Stores the maximum value in the current
                  segment <code>[start, end]</code>.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Constructor (<code>SegmentTree(int start, int end)</code>)
              </strong>
              <ul>
                <li>
                  Initializes the Segment Tree node for the range{" "}
                  <code>[start, end]</code>.
                </li>
                <li>
                  Recursively sets up child nodes until the base case (
                  <code>start == end</code>) is reached.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Setup Method (
                <code>setup(SegmentTree node, int start, int end)</code>)
              </strong>
              <ul>
                <li>
                  Recursively initializes the Segment Tree structure by setting
                  up left and right children.
                </li>
                <li>
                  Calculates <code>val</code> as the maximum of its children's{" "}
                  <code>val</code> attributes.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Update Method (
                <code>update(SegmentTree node, int index, int val)</code>)
              </strong>
              <ul>
                <li>
                  Updates the Segment Tree with a new value <code>val</code> at
                  index <code>index</code>.
                </li>
                <li>
                  Recursively propagates the update to the appropriate child
                  nodes.
                </li>
                <li>
                  Updates <code>val</code> to reflect the new maximum value in
                  the segment.
                </li>
              </ul>
            </li>
            <li>
              <strong>
                Range Maximum Query Method (
                <code>rangeMaxQuery(SegmentTree node, int start, int end)</code>
                )
              </strong>
              <ul>
                <li>
                  Queries the Segment Tree for the maximum value in the range{" "}
                  <code>[start, end]</code>.
                </li>
                <li>
                  Returns <code>0</code> if the current node's range does not
                  intersect with <code>[start, end]</code>.
                </li>
                <li>
                  Recursively queries child nodes and returns the maximum of
                  their results.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>
            Main Solution (<code>lengthOfLIS(int[] nums, int k)</code>)
          </strong>
          <ul>
            <li>
              Initializes a Segment Tree (<code>root</code>) covering the range{" "}
              <code>[1, 100000]</code>.
            </li>
            <li>
              Iterates through each element in <code>nums</code>.
            </li>
            <li>
              For each element <code>num</code>, queries the Segment Tree to
              find the maximum LIS length ending just before <code>num</code>{" "}
              (specifically in the range <code>[num - k, num - 1]</code>).
            </li>
            <li>
              Updates the Segment Tree with the new LIS length ending at{" "}
              <code>num</code>.
            </li>
            <li>
              Tracks and returns the maximum LIS length found during the
              iteration.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  2444: (
    <>
      <p>
        The problem is to count the number of subarrays such that each subarray
        contains at least one element equal to <code>minK</code> and one element
        equal to <code>maxK</code>. Here is a step-by-step approach used to
        solve this problem:
      </p>
      <p>
        Following approach ensures that we efficiently count all subarrays
        containing at least one <code>minK</code> and one <code>maxK</code> by
        maintaining and updating the relevant indices dynamically during a
        single pass through the array.
      </p>

      <ul>
        <li>
          Initialize a variable <code>ans</code> to store the number of valid
          subarrays.
        </li>
        <li>
          Use three pointers to keep track of indices:
          <ul>
            <li>
              <code>j1</code>: to store the last index where <code>minK</code>{" "}
              was found.
            </li>
            <li>
              <code>j2</code>: to store the last index where <code>maxK</code>{" "}
              was found.
            </li>
            <li>
              <code>k</code>: to store the index of the last invalid element (an
              element that is outside the range [<code>minK</code>,{" "}
              <code>maxK</code>]).
            </li>
          </ul>
        </li>
        <li>
          Iterate through the array:
          <ul>
            <li>
              If the current element is out of the bounds defined by{" "}
              <code>minK</code> and <code>maxK</code> (i.e., less than{" "}
              <code>minK</code> or greater than <code>maxK</code>), update{" "}
              <code>k</code> to the current index.
            </li>
            <li>
              If the current element is equal to <code>minK</code>, update{" "}
              <code>j1</code> to the current index.
            </li>
            <li>
              If the current element is equal to <code>maxK</code>, update{" "}
              <code>j2</code> to the current index.
            </li>
            <li>
              Calculate the number of valid subarrays ending at the current
              index:
              <ul>
                <li>
                  This is done by finding the maximum of 0 and the difference
                  between the minimum of <code>j1</code> and <code>j2</code> and{" "}
                  <code>k</code>.
                </li>
                <li>
                  Update <code>ans</code> with this value.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          The total count of valid subarrays is stored in <code>ans</code> and
          returned as the result.
        </li>
      </ul>
    </>
  ),
  2762: (
    <>
      {" "}
      <p>
        The number of subarrays in an array of length n is given by the formula:
        Number of subarray = <code>n×(n+1)/2</code>.​ This formula counts all
        possible subarrays in a segment of length n.
      </p>
      <p>
        The problem is to count the number of continuous subarrays such that the
        absolute difference between any two elements in the subarray is within
        2. Here is the approach used to solve this problem:
      </p>
      <ul>
        <li>
          Initialize a variable <code>count</code> to store the number of valid
          subarrays.
        </li>
        <li>
          Use two deques to maintain the indices of the maximum and minimum
          values within the current window (subarray):
          <ul>
            <li>
              <code>maxDeque</code>: To maintain the indices of elements in
              non-increasing order.
            </li>
            <li>
              <code>minDeque</code>: To maintain the indices of elements in
              non-decreasing order.
            </li>
          </ul>
        </li>
        <li>
          Use a sliding window approach:
          <ul>
            <li>
              Expand the window by moving the right boundary to the right.
            </li>
            <li>
              Adjust the left boundary of the window to ensure that the absolute
              difference between the maximum and minimum values in the window
              does not exceed 2.
            </li>
          </ul>
        </li>
        <li>
          For each position of the right boundary:
          <ul>
            <li>Update the deques to maintain the order properties.</li>
            <li>
              If the condition is violated, move the left boundary to the right
              and remove outdated indices from the deques.
            </li>
            <li>
              Count the number of valid subarrays ending at the current position
              by calculating the distance between the right and left boundaries.
            </li>
          </ul>
        </li>
        <li>
          The total count of valid subarrays is stored in <code>count</code> and
          returned as the result.
        </li>
      </ul>
      <p>
        This approach ensures that we efficiently count all subarrays where the
        absolute difference between the maximum and minimum elements is within 2
        by using two monotonic queues and a sliding window technique.
      </p>
    </>
  ),
  2944: (
    <>
      <p>
        The provided Java code snippet aims to calculate the minimum coins
        required based on given prices using a deque (double-ended queue)
        approach.
      </p>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Initialize <code>n</code> as the length of the <code>prices</code>{" "}
              array.
            </li>
            <li>
              Initialize <code>ans</code> to <code>Integer.MAX_VALUE</code> as
              the initial answer placeholder.
            </li>
            <li>
              Create a deque (<code>ArrayDeque</code>) to store pairs of
              integers (<code>Pair&lt;Integer, Integer&gt;</code>).
            </li>
            <li>
              Initially, push a pair <code>(0, n)</code> to the front of the
              deque. This pair represents the minimum cost (0) to reach the end
              of the array (n).
            </li>
          </ul>
        </li>
        <li>
          <strong>Iterating Backwards:</strong>
          <ul>
            <li>
              Iterate backwards through the <code>prices</code> array from index{" "}
              <code>n-1</code> to <code>0</code>.
            </li>
            <li>
              For each <code>i</code> (current index):
              <ul>
                <li>
                  While the deque is not empty and the value of the first
                  element's second component (<code>getValue()</code>) is
                  greater than <code>(i + 1) * 2</code>, remove the first
                  element from the deque.
                </li>
                <li>
                  Calculate <code>ans</code> as{" "}
                  <code>prices[i] + deque.peekFirst().getKey()</code>.
                </li>
                <li>
                  While the deque is not empty and the value of the last
                  element's first component (<code>getKey()</code>) is greater
                  than or equal to <code>ans</code>, remove the last element
                  from the deque.
                </li>
                <li>
                  Add a new pair <code>(ans, i)</code> to the end of the deque.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Return:</strong>
          <ul>
            <li>
              Return <code>ans</code>, which now holds the minimum cost to reach
              the beginning of the <code>prices</code> array from the end.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  2945: (
    <>
      <p>
        This Java solution finds the maximum length of a non-decreasing subarray
        after performing operations to merge subarrays based on their cumulative
        sums.
      </p>

      <h2>Explanation:</h2>

      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>int n = A.length</code>: Calculate the length of the array{" "}
              <code>A</code>.
            </li>
            <li>
              <code>int[] pre = new int[n + 2], dp = new int[n + 1]</code>:
              Initialize arrays <code>pre</code> to store indices and{" "}
              <code>dp</code> to store results.
            </li>
            <li>
              <code>long[] acc = new long[n + 1]</code>: Initialize{" "}
              <code>acc</code> to store cumulative sums of <code>A</code>.
            </li>
          </ul>
        </li>

        <li>
          <strong>Cumulative Sum Calculation:</strong>
          <ul>
            <li>
              Calculate cumulative sums in <code>acc</code> such that{" "}
              <code>acc[i]</code> represents the sum of elements from{" "}
              <code>A[0]</code> to <code>A[i-1]</code>.
            </li>
            <li>
              Example:
              <pre>
                <code>{`for (int i = 1; i <= n; i ++) {
    acc[i] = acc[i - 1] + A[i - 1];
}`}</code>
              </pre>
            </li>
          </ul>
        </li>

        <li>
          <strong>Dynamic Programming Approach:</strong>
          <ul>
            <li>
              Use <code>dp[j]</code> to store the maximum length of a
              non-decreasing subarray ending at index <code>j</code>.
            </li>
            <li>
              Use <code>pre[j]</code> to store the optimal starting index{" "}
              <code>i</code> for the subarray ending at index <code>j</code>.
            </li>
            <li>
              Iterate through <code>j</code> from <code>1</code> to{" "}
              <code>n</code> and update <code>dp[j]</code> and{" "}
              <code>pre[j]</code> accordingly.
            </li>
            <li>
              Example:
              <pre>
                <code>{`for (int i = 0, j = 1; j <= n; j++) {
    i = Math.max(i, pre[j]); 
    dp[j] = dp[i] + 1;
    int k = Arrays.binarySearch(acc, 2 * acc[j] - acc[i]);
    if (k < 0) {
        k = -k - 1;
    }
    pre[k] = j;
}`}</code>
              </pre>
            </li>
          </ul>
        </li>

        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              Return <code>dp[n]</code>, which holds the maximum length of a
              non-decreasing subarray after processing all elements of{" "}
              <code>A</code>.
            </li>
            <li>
              Example:
              <pre>
                <code>return dp[n];</code>
              </pre>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  2969: (
    <>
      {" "}
      <h2>Explanation:</h2>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>int n = prices.length</code>: Get the length of the prices
              array.
            </li>
            <li>
              <code>Deque&lt;Integer&gt; q = new ArrayDeque&lt;&gt;()</code>:
              Initialize a deque to store indices of prices array.
            </li>
          </ul>
        </li>

        <li>
          <strong>Deque Operations:</strong>
          <ul>
            <li>
              Iterate from <code>n</code> to <code>1</code>:
              <ul>
                <li>
                  Remove elements from the front of deque <code>q</code> if
                  their indices are greater than <code>i * 2 + 1</code>.
                </li>
                <li>
                  If <code>i</code> is less than or equal to{" "}
                  <code>(n - 1) / 2</code>, add the price at index{" "}
                  <code>q.peek() - 1</code> to <code>prices[i - 1]</code>.
                </li>
                <li>
                  Remove elements from the back of deque <code>q</code> if their
                  corresponding prices are greater than or equal to{" "}
                  <code>prices[i - 1]</code>.
                </li>
                <li>
                  Add current index <code>i</code> to the deque <code>q</code>.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              Return <code>prices[0]</code>, which holds the minimum number of
              coins required after processing all elements of{" "}
              <code>prices</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  5: (
    <ul>
      <li>
        <strong>Class `Solution`:</strong>
        <ul>
          <li>
            <strong>Method `longestPalindrome`:</strong>
            <ul>
              <li>Checks if the input string `s` is null or empty.</li>
              <li>
                Initializes variables `n` (length of `s`), `start` (starting
                index of the longest palindrome found), and `maxLen` (length of
                the longest palindrome found, initialized to 1 for single
                characters).
              </li>
              <li>
                Iterates through each character in `s` using a `for` loop.
              </li>
              <li>
                For each character `s[i]`, calls `expandAroundCenter(s, i, i)`
                to find palindromes centered at `s[i]` (odd-length palindromes).
              </li>
              <li>
                Calls `expandAroundCenter(s, i, i + 1)` to find palindromes
                centered between `s[i]` and `s[i+1]` (even-length palindromes).
              </li>
              <li>
                Updates `maxLen` and `start` if a longer palindrome is found.
              </li>
              <li>
                Returns the longest palindromic substring found in `s` using
                `substring(start, start + maxLen)`.
              </li>
            </ul>
          </li>
          <li>
            <strong>Private Method `expandAroundCenter`:</strong>
            <ul>
              <li>
                Takes parameters `s` (input string), `left` (left pointer), and
                `right` (right pointer).
              </li>
              <li>
                While `left` is greater than or equal to 0 and `right` is less
                than the length of `s`, and characters at `left` and `right` are
                equal, expands the window (`left--` and `right++`).
              </li>
              <li>
                Returns the length of the palindrome found using `right - left -
                1`.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  11: (
    <ul>
      <li>
        <strong>Class `Solution`:</strong>
        <ul>
          <li>
            <strong>Method `maxArea(int[] height)`:</strong>
            <ul>
              <li>
                Initializes variables `max` (to store the maximum area found),
                `left` (left pointer), and `right` (right pointer initialized to
                the end of the `height` array).
              </li>
              <li>
                Uses a `while` loop to iterate as long as `left` is less than
                `right`.
              </li>
              <li>
                Calculates the current area using the formula
                `Math.min(height[left], height[right]) * (right - left)`.
              </li>
              <li>Updates `max` if the current area is larger.</li>
              <li>
                Moves the pointer (`left` or `right`) inward based on which side
                has the smaller height.
              </li>
              <li>
                Returns `max`, which represents the maximum area of water that
                can be trapped.
              </li>
            </ul>
          </li>
          <li>
            <strong>Main Method (`main`):</strong>
            <ul>
              <li>Creates an instance of `Solution` (`solution`).</li>
              <li>Defines an example array `heights` (`[1, 2, 1]`).</li>
              <li>
                Calls `maxArea` method with `heights` array and prints the
                result.
              </li>
              <li>
                Prints the maximum area of water that can be trapped, which is
                `2` for the example `[1, 2, 1]`.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  15: (
    <ul>
      <li>
        <strong>Problem Description:</strong> Given an array of integers, find
        all unique triplets in the array which gives the sum of zero.
      </li>
      <li>
        <strong>Approach:</strong> We'll use the two-pointer technique to
        efficiently find these triplets.
      </li>
      <li>
        <strong>Steps:</strong>
        <ul>
          <li>
            <strong>Sort the Array:</strong> First, sort the given array.
            Sorting helps us in easily skipping duplicates and makes it easier
            to apply the two-pointer technique.
          </li>
          <li>
            <strong>Iterate through the Array:</strong> Use a loop to iterate
            through each element of the array.
          </li>
          <li>
            <strong>Fix the First Element:</strong> For each element at index
            `i`, consider it as the potential first element of the triplet.
          </li>
          <li>
            <strong>Apply Two Pointers:</strong> Use two pointers (`left` and
            `right`) to find the remaining two elements that sum up to the
            negative of the current element (`-nums[i]`).
          </li>
          <li>
            <strong>Adjust Pointers:</strong> Adjust the pointers based on
            whether the sum of the three elements is less than zero, greater
            than zero, or equal to zero.
          </li>
          <li>
            <strong>Store Valid Triplets:</strong> Whenever a triplet is found
            (sums up to zero), store it in a list (ensuring uniqueness).
          </li>
          <li>
            <strong>Skip Duplicates:</strong> Skip duplicate values of the first
            element to avoid duplicate triplets.
          </li>
        </ul>
      </li>
      <li>
        <strong>Edge Cases:</strong>
        <ul>
          <li>
            If the array length is less than 3, return an empty list since no
            triplet can be formed.
          </li>
          <li>
            Handle arrays with all positive or all negative numbers by checking
            for duplicates and early exits.
          </li>
        </ul>
      </li>
      <li>
        <strong>Code Example:</strong> Here's a Java implementation of the above
        approach:
      </li>
    </ul>
  ),
  16: (
    <ul>
      <li>
        <strong>Problem Description:</strong> Given an array of integers, find
        three integers in the array such that the sum is closest to a given
        target. Return the sum of the three integers.
      </li>
      <li>
        <strong>Approach:</strong> We'll modify the two-pointer technique to
        find the sum closest to the target.
      </li>
      <li>
        <strong>Steps:</strong>
        <ul>
          <li>
            <strong>Sort the Array:</strong> First, sort the given array.
            Sorting helps in easily adjusting the pointers based on the
            difference from the target.
          </li>
          <li>
            <strong>Initialize Variables:</strong> Use two pointers (`left` and
            `right`) and a variable (`closestSum`) to track the closest sum
            found so far.
          </li>
          <li>
            <strong>Iterate through the Array:</strong> Use a loop to iterate
            through each element of the array.
          </li>
          <li>
            <strong>Adjust Pointers:</strong> Inside the loop, use the two
            pointers to find the sum of the current element and the elements
            pointed by `left` and `right`.
          </li>
          <li>
            <strong>Update Closest Sum:</strong> Update `closestSum` if the
            current sum is closer to the target than the previously recorded
            closest sum.
          </li>
          <li>
            <strong>Handle Differences:</strong> Adjust the pointers based on
            whether the current sum is less than, greater than, or equal to the
            target.
          </li>
        </ul>
      </li>
      <li>
        <strong>Edge Cases:</strong>
        <ul>
          <li>Handle arrays with fewer than 3 elements gracefully.</li>
          <li>Ensure no duplicate triplets are returned.</li>
        </ul>
      </li>
      <li>
        <strong>Code Example:</strong> Here's a Java implementation of the above
        approach:
      </li>
    </ul>
  ),
  18: (
    <>
      {" "}
      <p>
        This Java solution finds all unique quadruplets in an array that sum up
        to a given target.
      </p>
      <h2>Explanation:</h2>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>
                List&lt;List&lt;Integer&gt;&gt; result = new
                ArrayList&lt;&gt;();
              </code>
              : Initialize an empty list to store the result.
            </li>
            <li>
              <code>int n = nums.length;</code>: Get the length of the input
              array.
            </li>
            <li>
              Check if the array length is less than 4. If true, return the
              empty result list immediately.
            </li>
            <li>
              <code>Arrays.sort(nums);</code>: Sort the input array to
              facilitate the two-pointer approach.
            </li>
          </ul>
        </li>

        <li>
          <strong>Outer Loop:</strong>
          <ul>
            <li>
              Iterate through the array using index <code>i</code> from{" "}
              <code>0</code> to <code>n - 4</code>.
            </li>
            <li>
              Skip duplicate values by checking if the current value is the same
              as the previous value.
            </li>
          </ul>
        </li>

        <li>
          <strong>Inner Loop:</strong>
          <ul>
            <li>
              For each <code>i</code>, iterate through the array using index{" "}
              <code>j</code> from <code>i + 1</code> to <code>n - 3</code>.
            </li>
            <li>
              Skip duplicate values by checking if the current value is the same
              as the previous value.
            </li>
          </ul>
        </li>

        <li>
          <strong>Two-Pointer Approach:</strong>
          <ul>
            <li>
              Initialize two pointers, <code>left</code> (starting from{" "}
              <code>j + 1</code>) and <code>right</code> (starting from{" "}
              <code>n - 1</code>).
            </li>
            <li>
              While <code>left</code> is less than <code>right</code>:
              <ul>
                <li>
                  Calculate the sum of the current quadruplet:{" "}
                  <code>
                    long sum = (long) nums[i] + nums[j] + nums[left] +
                    nums[right];
                  </code>
                </li>
                <li>
                  If the sum equals the target:
                  <ul>
                    <li>Add the quadruplet to the result list.</li>
                    <li>
                      Skip duplicate values by moving the <code>left</code> and{" "}
                      <code>right</code> pointers to the next different values.
                    </li>
                    <li>Move both pointers inward.</li>
                  </ul>
                </li>
                <li>
                  If the sum is less than the target, move the <code>left</code>{" "}
                  pointer to the right.
                </li>
                <li>
                  If the sum is greater than the target, move the{" "}
                  <code>right</code> pointer to the left.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              After processing all possible quadruplets, return the result list.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Example Execution:</h2>
      <ul>
        <li>
          Input:{" "}
          <code>
            nums = [1000000000, 1000000000, 1000000000, 1000000000], target =
            -294967296
          </code>
        </li>
        <li>
          Output: <code>[]</code> (no quadruplets sum up to the target).
        </li>
      </ul>
    </>
  ),
  19: (
    <>
      <h2>Steps:</h2>

      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Create a dummy node and set its <code>next</code> to the head of
              the list. This helps handle edge cases where the head might be
              removed.
            </li>
            <li>
              Initialize two pointers, <code>slow</code> and <code>fast</code>,
              both pointing to the dummy node.
            </li>
          </ul>
        </li>

        <li>
          <strong>Advance the Fast Pointer:</strong>
          <ul>
            <li>
              Move the <code>fast</code> pointer <code>n + 1</code> steps ahead.
              This creates a gap of <code>n</code> nodes between the{" "}
              <code>slow</code> and <code>fast</code> pointers.
            </li>
          </ul>
        </li>

        <li>
          <strong>Move Both Pointers:</strong>
          <ul>
            <li>
              Move both <code>slow</code> and <code>fast</code> pointers one
              step at a time until the <code>fast</code> pointer reaches the end
              of the list.
            </li>
            <li>
              At this point, the <code>slow</code> pointer will be just before
              the node that needs to be removed.
            </li>
          </ul>
        </li>

        <li>
          <strong>Remove the Nth Node:</strong>
          <ul>
            <li>
              Set the <code>next</code> pointer of the <code>slow</code> pointer
              to skip the node to be removed.
            </li>
          </ul>
        </li>

        <li>
          <strong>Return the New Head:</strong>
          <ul>
            <li>
              Return <code>dummy.next</code> which points to the new head of the
              list after removal.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Example Execution:</h2>

      <ul>
        <li>
          Input: <code>head = [1,2,3,4,5], n = 2</code>
        </li>
        <li>
          Output: <code>[1,2,3,5]</code>
        </li>
        <li>
          Explanation: The 2nd node from the end is 4. Removing it gives the
          list [1, 2, 3, 5].
        </li>
      </ul>
    </>
  ),
  26: (
    <>
      <h2>Steps:</h2>

      <ul>
        <li>
          <strong>Initialize Pointers:</strong>
          <ul>
            <li>
              Create a <code>slow</code> pointer initialized to 1. This pointer
              keeps track of the position to place the next unique element.
            </li>
            <li>
              Iterate through the array with a <code>fast</code> pointer
              starting from index 1.
            </li>
          </ul>
        </li>

        <li>
          <strong>Iterate Through the Array:</strong>
          <ul>
            <li>
              For each element in the array, compare the current element with
              the previous element.
            </li>
            <li>
              If the current element is not equal to the previous element, it
              means it's a unique element.
            </li>
            <li>
              Place the unique element at the position indicated by the{" "}
              <code>slow</code> pointer and increment the <code>slow</code>{" "}
              pointer.
            </li>
          </ul>
        </li>

        <li>
          <strong>Return the Length:</strong>
          <ul>
            <li>
              After the loop, the <code>slow</code> pointer will indicate the
              length of the array without duplicates.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Example Execution:</h2>

      <ul>
        <li>
          Input: <code>nums = [1,1,2]</code>
        </li>
        <li>
          Output: <code>2</code>
        </li>
        <li>
          Explanation: The first two elements of the array are modified to [1,
          2], and the function returns 2.
        </li>
      </ul>

      <ul>
        <li>
          Input: <code>nums = [0,0,1,1,1,2,2,3,3,4]</code>
        </li>
        <li>
          Output: <code>5</code>
        </li>
        <li>
          Explanation: The first five elements of the array are modified to [0,
          1, 2, 3, 4], and the function returns 5.
        </li>
      </ul>
    </>
  ),
  27: (
    <>
      <h2>Steps:</h2>

      <ul>
        <li>
          <strong>Initialize Pointers:</strong>
          <ul>
            <li>
              Create a <code>left</code> pointer initialized to 0. This pointer
              keeps track of the position to place the next element that is not
              equal to the specified value.
            </li>
            <li>
              Iterate through the array with a <code>right</code> pointer
              starting from index 0.
            </li>
          </ul>
        </li>

        <li>
          <strong>Iterate Through the Array:</strong>
          <ul>
            <li>
              For each element in the array, check if the current element is not
              equal to the specified value (<code>val</code>).
            </li>
            <li>
              If the current element is not equal to <code>val</code>, place the
              element at the position indicated by the <code>left</code> pointer
              and increment the <code>left</code> pointer.
            </li>
          </ul>
        </li>

        <li>
          <strong>Return the Length:</strong>
          <ul>
            <li>
              After the loop, the <code>left</code> pointer will indicate the
              length of the array without the specified value.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Example Execution:</h2>

      <ul>
        <li>
          Input: <code>nums = [3,2,2,3], val = 3</code>
        </li>
        <li>
          Output: <code>2</code>
        </li>
        <li>
          Explanation: The first two elements of the array are modified to [2,
          2], and the function returns 2.
        </li>
      </ul>

      <ul>
        <li>
          Input: <code>nums = [0,1,2,2,3,0,4,2], val = 2</code>
        </li>
        <li>
          Output: <code>5</code>
        </li>
        <li>
          Explanation: The first five elements of the array are modified to [0,
          1, 3, 0, 4], and the function returns 5.
        </li>
      </ul>
    </>
  ),
  28: (
    <>
      <h2>Steps:</h2>

      <ul>
        <li>
          <strong>Check for Empty Needle:</strong>
          <ul>
            <li>
              If the <code>needle</code> is empty, return 0 because an empty
              substring is found at the beginning of any string.
            </li>
          </ul>
        </li>

        <li>
          <strong>Initialize Variables:</strong>
          <ul>
            <li>
              Determine the lengths of <code>haystack</code> and{" "}
              <code>needle</code>.
            </li>
          </ul>
        </li>

        <li>
          <strong>Iterate Through Haystack:</strong>
          <ul>
            <li>
              Use a for loop to iterate through the <code>haystack</code> from
              the beginning to the point where the remaining characters are at
              least as many as the <code>needle</code>.
            </li>
          </ul>
        </li>

        <li>
          <strong>Match Characters:</strong>
          <ul>
            <li>
              For each position in the <code>haystack</code>, use a while loop
              to compare characters of <code>needle</code> with the
              corresponding characters in <code>haystack</code>.
            </li>
            <li>
              Increment the <code>j</code> pointer as long as characters match.
            </li>
          </ul>
        </li>

        <li>
          <strong>Check for Complete Match:</strong>
          <ul>
            <li>
              If the <code>j</code> pointer reaches the length of the{" "}
              <code>needle</code>, it means the entire <code>needle</code> has
              been found in the <code>haystack</code>, and return the current
              index <code>i</code>.
            </li>
          </ul>
        </li>

        <li>
          <strong>Return -1 If Not Found:</strong>
          <ul>
            <li>
              If the loop completes without finding the <code>needle</code>,
              return -1 to indicate that the <code>needle</code> is not found in
              the <code>haystack</code>.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Example Execution:</h2>

      <ul>
        <li>
          Input: <code>haystack = "hello", needle = "ll"</code>
        </li>
        <li>
          Output: <code>2</code>
        </li>
        <li>Explanation: The substring "ll" is found at index 2 in "hello".</li>
      </ul>

      <ul>
        <li>
          Input: <code>haystack = "aaaaa", needle = "bba"</code>
        </li>
        <li>
          Output: <code>-1</code>
        </li>
        <li>Explanation: The substring "bba" is not found in "aaaaa".</li>
      </ul>
    </>
  ),
  31: (
    <>
      {" "}
      <h2>Steps:</h2>
      <ul>
        <li>
          <strong>Find the first decreasing element from the end:</strong>
          <ul>
            <li>
              Start from the end of the array and move backwards to find the
              first element that is not in descending order.
            </li>
            <li>
              This element is the first element that needs to be swapped to get
              the next permutation.
            </li>
          </ul>
        </li>

        <li>
          <strong>
            Find the element just larger than the first decreasing element:
          </strong>
          <ul>
            <li>
              Starting from the end again, find the smallest element that is
              larger than the first decreasing element found in the previous
              step.
            </li>
            <li>Swap these two elements.</li>
          </ul>
        </li>

        <li>
          <strong>
            Reverse the elements after the first decreasing element:
          </strong>
          <ul>
            <li>
              To get the next permutation, reverse the sequence of elements
              after the position of the first decreasing element.
            </li>
            <li>
              This step ensures that we get the smallest lexicographical order
              for the remaining elements.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Example Execution:</h2>
      <ul>
        <li>
          Input: <code>nums = [1,2,3]</code>
        </li>
        <li>
          Output: <code>[1,3,2]</code>
        </li>
        <li>
          Explanation: The next permutation of the array [1,2,3] is [1,3,2].
        </li>
      </ul>
      <ul>
        <li>
          Input: <code>nums = [3,2,1]</code>
        </li>
        <li>
          Output: <code>[1,2,3]</code>
        </li>
        <li>
          Explanation: The array is in descending order, so the next permutation
          is the smallest permutation, which is [1,2,3].
        </li>
      </ul>
      <ul>
        <li>
          Input: <code>nums = [1,1,5]</code>
        </li>
        <li>
          Output: <code>[1,5,1]</code>
        </li>
        <li>
          Explanation: The next permutation of the array [1,1,5] is [1,5,1].
        </li>
      </ul>
    </>
  ),
  42: (
    <>
      <h2>Trapping Rain Water Explanation</h2>
      <ul>
        <li>
          <b>Initialization:</b>
          <ul>
            <li>
              Use two pointers, <code>left</code> and <code>right</code>,
              starting at the beginning and end of the array, respectively.
            </li>
            <li>
              Initialize <code>left_max</code> and <code>right_max</code> to
              track the maximum heights encountered so far from the left and
              right.
            </li>
            <li>
              Initialize <code>waterTrapped</code> to accumulate the total water
              trapped.
            </li>
          </ul>
        </li>
        <li>
          <b>Two-Pointer Technique:</b>
          <ul>
            <li>
              While <code>left</code> is less than <code>right</code>:
              <ul>
                <li>
                  Compare <code>height[left]</code> and{" "}
                  <code>height[right]</code>.
                </li>
                <li>
                  If <code>height[left]</code> is less than{" "}
                  <code>height[right]</code>:
                  <ul>
                    <li>
                      Check if <code>height[left]</code> is greater than or
                      equal to <code>left_max</code>. If so, update{" "}
                      <code>left_max</code>. Otherwise, add{" "}
                      <code>left_max - height[left]</code> to{" "}
                      <code>waterTrapped</code>.
                    </li>
                    <li>
                      Move the <code>left</code> pointer to the right.
                    </li>
                  </ul>
                </li>
                <li>
                  Otherwise:
                  <ul>
                    <li>
                      Check if <code>height[right]</code> is greater than or
                      equal to <code>right_max</code>. If so, update{" "}
                      <code>right_max</code>. Otherwise, add{" "}
                      <code>right_max - height[right]</code> to{" "}
                      <code>waterTrapped</code>.
                    </li>
                    <li>
                      Move the <code>right</code> pointer to the left.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Result:</b> The total amount of water trapped is stored in{" "}
          <code>waterTrapped</code>.
        </li>
      </ul>
      <p>
        This approach ensures that we efficiently calculate the trapped water
        using the two-pointer technique, resulting in an O(n) time complexity.
      </p>
    </>
  ),
  61: (
    <>
      {" "}
      <h2>Rotate List Explanation</h2>
      <ul>
        <li>
          <b>Calculate the Length:</b>
          <ul>
            <li>
              Traverse the list to determine its length and keep a reference to
              the last node (tail).
            </li>
          </ul>
        </li>
        <li>
          <b>Make the List Circular:</b>
          <ul>
            <li>Connect the tail to the head to form a circular list.</li>
          </ul>
        </li>
        <li>
          <b>Determine Effective Rotations:</b>
          <ul>
            <li>
              Calculate <code>k % length</code> to handle cases where k is
              greater than the length of the list.
            </li>
          </ul>
        </li>
        <li>
          <b>Find the New Tail and Head:</b>
          <ul>
            <li>
              Identify the new tail position using{" "}
              <code>length - k % length - 1</code>.
            </li>
            <li>The new head is the node next to the new tail.</li>
          </ul>
        </li>
        <li>
          <b>Break the Circular Link:</b>
          <ul>
            <li>
              Set the <code>next</code> of the new tail to <code>null</code> to
              break the circular connection and finalize the new list.
            </li>
          </ul>
        </li>
      </ul>
      <p>
        This approach ensures efficient rotation of the list using the
        two-pointer technique and handles edge cases effectively.
      </p>
    </>
  ),
  75: (
    <>
      {" "}
      <h2>Sort Colors Explanation</h2>
      <ul>
        <li>
          <b>Initialize Pointers:</b>
          <ul>
            <li>
              <code>low</code>: Position of the last 0.
            </li>
            <li>
              <code>mid</code>: Current element being examined.
            </li>
            <li>
              <code>high</code>: Position of the first 2.
            </li>
          </ul>
        </li>
        <li>
          <b>Traverse the Array:</b>
          <ul>
            <li>
              If <code>nums[mid] == 0</code>:
              <ul>
                <li>
                  Swap <code>nums[mid]</code> with <code>nums[low]</code>.
                </li>
                <li>
                  Increment both <code>low</code> and <code>mid</code>.
                </li>
              </ul>
            </li>
            <li>
              If <code>nums[mid] == 1</code>:
              <ul>
                <li>
                  Just move <code>mid</code> to the next position.
                </li>
              </ul>
            </li>
            <li>
              If <code>nums[mid] == 2</code>:
              <ul>
                <li>
                  Swap <code>nums[mid]</code> with <code>nums[high]</code>.
                </li>
                <li>
                  Decrement <code>high</code>.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Termination:</b>
          <ul>
            <li>
              The loop terminates when <code>mid &gt; high</code>, ensuring the
              array is sorted with all 0s at the front, all 1s in the middle,
              and all 2s at the end.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  80: (
    <>
      {" "}
      <h2>Remove Duplicates from Sorted Array II Explanation</h2>
      <ul>
        <li>
          <b>Initialize Pointers:</b>
          <ul>
            <li>
              <code>index</code>: Position to place the next valid element,
              starting at 2.
            </li>
            <li>
              <code>i</code>: Pointer to traverse the array from the third
              element.
            </li>
          </ul>
        </li>
        <li>
          <b>Traverse the Array:</b>
          <ul>
            <li>
              For each element <code>nums[i]</code>:
              <ul>
                <li>
                  If <code>nums[i]</code> is not equal to{" "}
                  <code>nums[index - 2]</code>, it means <code>nums[i]</code>{" "}
                  can be placed at <code>nums[index]</code>.
                </li>
                <li>
                  Assign <code>nums[i]</code> to <code>nums[index]</code> and
                  increment <code>index</code>.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Termination:</b>
          <ul>
            <li>
              The loop terminates when all elements have been processed. The
              length of the modified array is <code>index</code>, and the first{" "}
              <code>index</code> elements are the valid elements.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  82: (
    <>
      {" "}
      <h2>Remove Duplicates from Sorted List II Explanation</h2>
      <ul>
        <li>
          <b>Initialize Pointers:</b>
          <ul>
            <li>
              <code>dummy</code>: A dummy node pointing to the head of the list
              to handle edge cases.
            </li>
            <li>
              <code>prev</code>: Pointer initially set to <code>dummy</code>.
            </li>
            <li>
              <code>current</code>: Pointer set to the head of the list.
            </li>
          </ul>
        </li>
        <li>
          <b>Traverse the List:</b>
          <ul>
            <li>
              For each node:
              <ul>
                <li>
                  If it has duplicates, move the <code>current</code> pointer to
                  skip all duplicates.
                </li>
                <li>
                  If it is unique, link it to the <code>prev</code> node and
                  move the <code>prev</code> pointer.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <b>Terminate the List:</b>
          <ul>
            <li>
              Ensure the last node of the new list points to null to terminate
              the list correctly.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  86: (
    <>
      <h2>Partition List Explanation</h2>
      <ul>
        <li>
          <b>Initialize Pointers:</b>
          <ul>
            <li>
              <code>dummy1</code>: Dummy node for less than <code>x</code>{" "}
              partition.
            </li>
            <li>
              <code>dummy2</code>: Dummy node for greater or equal to{" "}
              <code>x</code> partition.
            </li>
            <li>
              <code>lessPtr</code>: Pointer to the current node in less than{" "}
              <code>x</code> partition.
            </li>
            <li>
              <code>greaterOrEqualPtr</code>: Pointer to the current node in
              greater or equal to <code>x</code> partition.
            </li>
          </ul>
        </li>
        <li>
          <b>Traverse the Original List:</b>
          <ul>
            <li>Iterate through each node in the original list.</li>
            <li>
              Append each node to either <code>lessThanX</code> or{" "}
              <code>greaterOrEqualX</code> partition based on its value.
            </li>
          </ul>
        </li>
        <li>
          <b>Connect the Partitions:</b>
          <ul>
            <li>
              Link the end of the <code>lessThanX</code> partition to the start
              of the <code>greaterOrEqualX</code> partition.
            </li>
            <li>
              Set the next of the tail of <code>greaterOrEqualX</code> partition
              to <code>null</code> to terminate the list.
            </li>
          </ul>
        </li>
        <li>
          <b>Return the Result:</b>
          <ul>
            <li>
              Return the head of the partitioned list which starts from{" "}
              <code>dummy1.next</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  88: (
    <>
      <h2>Merge Sorted Array Explanation</h2>
      <ul>
        <li>
          <b>Initialize Pointers:</b>
          <ul>
            <li>
              <code>p1</code>: Pointer to the last element in <code>nums1</code>{" "}
              (excluding empty spaces).
            </li>
            <li>
              <code>p2</code>: Pointer to the last element in <code>nums2</code>
              .
            </li>
            <li>
              <code>p</code>: Pointer for placing merged elements starting from
              the end of <code>nums1</code>.
            </li>
          </ul>
        </li>
        <li>
          <b>Merge from End to Beginning:</b>
          <ul>
            <li>
              Compare elements pointed by <code>p1</code> and <code>p2</code>.
            </li>
            <li>
              Place the larger element at <code>nums1[p]</code> and move the
              respective pointer (<code>p1</code> or <code>p2</code>) one step
              left.
            </li>
          </ul>
        </li>
        <li>
          <b>Handle Remaining Elements:</b>
          <ul>
            <li>
              Continue merging until all elements from <code>nums2</code> have
              been merged into <code>nums1</code>.
            </li>
            <li>
              If there are any remaining elements in <code>nums2</code> after{" "}
              <code>p2</code> has been processed, copy them to the beginning of{" "}
              <code>nums1</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  125: (
    <>
      <h2>Valid Palindrome Explanation</h2>
      <ul>
        <li>
          <b>Initialize Pointers:</b>
          <ul>
            <li>
              <code>left</code>: Pointer starting from the beginning of the
              string.
            </li>
            <li>
              <code>right</code>: Pointer starting from the end of the string.
            </li>
          </ul>
        </li>
        <li>
          <b>Move Pointers:</b>
          <ul>
            <li>
              Increment <code>left</code> if the character at <code>left</code>{" "}
              is not alphanumeric.
            </li>
            <li>
              Decrement <code>right</code> if the character at{" "}
              <code>right</code> is not alphanumeric.
            </li>
          </ul>
        </li>
        <li>
          <b>Compare Characters:</b>
          <ul>
            <li>Convert characters to lowercase to ignore case sensitivity.</li>
            <li>
              If characters pointed by <code>left</code> and <code>right</code>{" "}
              are alphanumeric and not equal, return <code>false</code>.
            </li>
          </ul>
        </li>
        <li>
          <b>Palindrome Check:</b>
          <ul>
            <li>
              Continue until <code>left</code> surpasses <code>right</code>.
            </li>
            <li>
              If all comparisons are successful, return <code>true</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  141: (
    <>
      {" "}
      <h2>Linked List Cycle Explanation</h2>
      <ul>
        <li>
          <b>Initialize Pointers:</b>
          <ul>
            <li>
              <code>slow</code>: Starts at the head of the linked list.
            </li>
            <li>
              <code>fast</code>: Starts at <code>head.next</code> (if exists),
              moving two steps at a time.
            </li>
          </ul>
        </li>
        <li>
          <b>Move Pointers:</b>
          <ul>
            <li>Iterate through the linked list.</li>
            <li>
              <code>slow</code> moves one step forward (
              <code>slow = slow.next</code>).
            </li>
            <li>
              <code>fast</code> moves two steps forward (
              <code>fast = fast.next.next</code>).
            </li>
          </ul>
        </li>
        <li>
          <b>Detect Cycle:</b>
          <ul>
            <li>
              If <code>fast</code> or <code>fast.next</code> becomes{" "}
              <code>null</code>, return <code>false</code> (no cycle).
            </li>
            <li>
              If <code>slow</code> meets <code>fast</code> (i.e.,{" "}
              <code>slow == fast</code>), return <code>true</code> (cycle
              detected).
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  142: (
    <>
      <p>
        This algorithm uses <code>Floyd's Tortoise and Hare algorithm</code> to
        detect if there's a cycle in a linked list.
      </p>
      <ul>
        <li>
          <b>Initialization:</b>
          <ul>
            <li>
              Initialize two pointers, <code>slow</code> and <code>fast</code>,
              both starting from <code>head</code>.
            </li>
          </ul>
        </li>
        <li>
          <b>Phase 1: Cycle Detection:</b>
          <ul>
            <li>
              Move <code>slow</code> one step and <code>fast</code> two steps
              forward in each iteration.
            </li>
            <li>
              If <code>slow == fast</code>, a cycle is detected.
            </li>
          </ul>
        </li>
        <li>
          <b>Phase 2: Find the Start of the Cycle:</b>
          <ul>
            <li>
              Reset <code>slow</code> to <code>head</code> and move both
              pointers one step at a time until they meet again.
            </li>
            <li>The node where they meet is the start of the cycle.</li>
          </ul>
        </li>
        <li>
          <b>Return:</b>
          <ul>
            <li>
              If a cycle is found, return the node where the cycle starts.
            </li>
            <li>
              If no cycle is found, return <code>null</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  3: (
    <>
      {" "}
      <h2>Explanation</h2>
      <p>In this solution:</p>
      <ul>
        <li>
          We use an integer array <code>charIndex</code> of size 128 to keep
          track of the last index of each character.
        </li>
        <li>
          Two pointers, <code>left</code> and <code>right</code>, represent the
          current window. Both start at the beginning of the string.
        </li>
        <li>
          We iterate through the string using the <code>right</code> pointer.
        </li>
        <li>
          For each character at index <code>right</code>, we update the{" "}
          <code>left</code> pointer to ensure no repeating characters within the
          current window.
        </li>
        <li>
          We calculate the length of the current window and update{" "}
          <code>maxLength</code> if it's larger than the previous maximum.
        </li>
        <li>
          Finally, we update the <code>charIndex</code> array to store the next
          index of the character at <code>right</code> and increment the{" "}
          <code>right</code> pointer.
        </li>
      </ul>
    </>
  ),
  30: (
    <>
      {" "}
      <h2>Explanation</h2>
      <ul>
        <li>
          The function <code>lengthOfLongestSubstring</code> calculates the
          length of the longest substring without repeating characters using the
          sliding window technique.
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>int[] charIndex = new int[128];</code> - An array to store
              the last index of each character.
            </li>
            <li>
              <code>int left = 0, right = 0;</code> - Two pointers representing
              the current window.
            </li>
            <li>
              <code>int maxLength = 0;</code> - Variable to store the maximum
              length of the substring found.
            </li>
          </ul>
        </li>
        <li>
          <strong>Sliding Window:</strong>
          <ul>
            <li>
              Iterate through the string using the <code>right</code> pointer.
            </li>
            <li>
              For each character at index <code>right</code>, update the{" "}
              <code>left</code> pointer to ensure no repeating characters within
              the current window.
            </li>
            <li>
              Update <code>maxLength</code> if the current window length (right
              - left + 1) is larger than the previous maximum.
            </li>
            <li>
              Update the <code>charIndex</code> array to store the next index of
              the character at <code>right</code> and increment the{" "}
              <code>right</code> pointer.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return Value:</strong> The function returns{" "}
          <code>maxLength</code>, the length of the longest substring without
          repeating characters.
        </li>
        <li>
          <strong>Main Method:</strong>
          <ul>
            <li>
              Creates an instance of the <code>Solution</code> class.
            </li>
            <li>
              Calls <code>lengthOfLongestSubstring</code> with a sample input
              string <code>"abcabcbb"</code>.
            </li>
            <li>
              Prints the result: "Length of Longest Substring Without Repeating
              Characters: 3".
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  76: (
    <>
      {" "}
      <h2>Explanation</h2>
      <ul>
        <li>
          The function <code>minWindow</code> finds the minimum window substring
          in <code>s</code> that contains all characters of <code>t</code>.
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>Map&lt;Character, Integer&gt; tCount</code> - A map to count
              the frequency of characters in <code>t</code>.
            </li>
            <li>
              <code>int required</code> - The number of unique characters in{" "}
              <code>t</code> that need to be present in the window.
            </li>
            <li>
              <code>int left = 0, right = 0</code> - Two pointers representing
              the current window.
            </li>
            <li>
              <code>int formed = 0</code> - The number of unique characters in
              the current window that match the required count.
            </li>
            <li>
              <code>Map&lt;Character, Integer&gt; windowCounts</code> - A map to
              count the frequency of characters in the current window.
            </li>
            <li>
              <code>int[] ans = {(-1, 0, 0)}</code> - An array to store the
              length, left, and right indices of the minimum window.
            </li>
          </ul>
        </li>
        <li>
          <strong>Sliding Window:</strong>
          <ul>
            <li>
              Iterate through the string using the <code>right</code> pointer.
            </li>
            <li>
              Update the count of the current character in the{" "}
              <code>windowCounts</code> map.
            </li>
            <li>
              If the current character's count matches its required count in{" "}
              <code>tCount</code>, increment the <code>formed</code> counter.
            </li>
            <li>
              While the window is valid (i.e., all required characters are
              present in the correct count), try to shrink the window from the
              left to find the minimum window.
            </li>
            <li>
              Update the answer if the current window is smaller than the
              previous smallest window.
            </li>
            <li>
              Decrement the count of the current character in the{" "}
              <code>windowCounts</code> map and adjust the <code>formed</code>{" "}
              counter if necessary.
            </li>
            <li>
              Increment the <code>left</code> pointer to continue shrinking the
              window.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return Value:</strong> The function returns the minimum window
          substring or an empty string if no such window exists.
        </li>
        <li>
          <strong>Main Method:</strong>
          <ul>
            <li>
              Creates an instance of the <code>Solution</code> class.
            </li>
            <li>
              Calls <code>minWindow</code> with a sample input string{" "}
              <code>"ADOBECODEBANC"</code> and pattern <code>"ABC"</code>.
            </li>
            <li>Prints the result: "Minimum window substring: BANC".</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  159: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          The function <code>lengthOfLongestSubstringTwoDistinct</code>{" "}
          calculates the length of the longest substring with at most two
          distinct characters using the sliding window technique.
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>Map&lt;Character, Integer&gt; count</code> - A map to count
              the frequency of characters in the current window.
            </li>
            <li>
              <code>int n = s.length()</code> - The length of the input string.
            </li>
            <li>
              <code>int ans = 0</code> - Variable to store the maximum length of
              the substring found.
            </li>
          </ul>
        </li>
        <li>
          <strong>Sliding Window:</strong>
          <ul>
            <li>
              Iterate through the string using the <code>i</code> pointer as the
              right boundary of the window.
            </li>
            <li>
              Update the count of the current character in the{" "}
              <code>count</code> map.
            </li>
            <li>
              While the window contains more than two distinct characters,
              increment the <code>j</code> pointer (left boundary) to reduce the
              window size and update the count of the character at{" "}
              <code>j</code> in the <code>count</code> map.
            </li>
            <li>
              If a character's count becomes zero, remove it from the{" "}
              <code>count</code> map.
            </li>
            <li>
              Update <code>ans</code> if the current window length (i - j + 1)
              is larger than the previous maximum.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return Value:</strong> The function returns <code>ans</code>,
          the length of the longest substring with at most two distinct
          characters.
        </li>
        <li>
          <strong>Main Method:</strong>
          <ul>
            <li>
              Creates an instance of the <code>Solution</code> class.
            </li>
            <li>
              Calls <code>lengthOfLongestSubstringTwoDistinct</code> with a
              sample input string <code>"eceba"</code>.
            </li>
            <li>
              Prints the result: "Length of Longest Substring with At Most Two
              Distinct Characters: 3".
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  187: (
    <>
      {" "}
      <h2>Explanation</h2>
      <ul>
        <li>
          The function <code>findRepeatedDnaSequences</code> finds all
          10-letter-long sequences (substrings) that occur more than once in a
          DNA string.
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>List&lt;String&gt; result</code> - A list to store the
              resulting repeated sequences.
            </li>
            <li>
              <code>Map&lt;String, Integer&gt; sequenceCount</code> - A map to
              count the occurrences of each 10-letter sequence.
            </li>
          </ul>
        </li>
        <li>
          <strong>Sliding Window:</strong>
          <ul>
            <li>
              Iterate through the string using the <code>i</code> pointer, where
              each position represents the start of a 10-letter sequence.
            </li>
            <li>
              Extract the 10-letter sequence starting at index <code>i</code>.
            </li>
            <li>
              Update the count of the current sequence in the{" "}
              <code>sequenceCount</code> map.
            </li>
            <li>
              If the count of the current sequence becomes 2, add it to the{" "}
              <code>result</code> list.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return Value:</strong> The function returns the{" "}
          <code>result</code> list, containing all repeated 10-letter sequences.
        </li>
        <li>
          <strong>Main Method:</strong>
          <ul>
            <li>
              Creates an instance of the <code>Solution</code> class.
            </li>
            <li>
              Calls <code>findRepeatedDnaSequences</code> with a sample input
              string <code>"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"</code>.
            </li>
            <li>
              Prints the result: "Repeated DNA sequences: [AAAAACCCCC,
              CCCCCAAAAA]".
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  209: (
    <ul>
      <li>
        <strong>Initialize Variables:</strong>
        <ul>
          <li>
            <code>minLength</code> to store the minimum length of the subarray
            (initialize with a large number).
          </li>
          <li>
            <code>left</code> to represent the left boundary of the sliding
            window.
          </li>
          <li>
            <code>sum</code> to store the current sum of the sliding window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Expand the Window:</strong>
        <ul>
          <li>
            Use a <code>for</code> loop to move the right boundary (
            <code>right</code>) of the window from the start to the end of the
            array.
          </li>
          <li>
            Add the current element to the <code>sum</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Shrink the Window:</strong>
        <ul>
          <li>
            When the <code>sum</code> is greater than or equal to <code>s</code>
            , move the left boundary (<code>left</code>) to the right to find
            the minimum length subarray. Update the <code>minLength</code>{" "}
            accordingly.
          </li>
          <li>
            Subtract the element at the left boundary from the <code>sum</code>{" "}
            and increment <code>left</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return the Result:</strong>
        <ul>
          <li>
            If <code>minLength</code> remains unchanged, return <code>0</code>{" "}
            indicating no valid subarray was found.
          </li>
          <li>
            Otherwise, return <code>minLength</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  219: (
    <ul>
      <li>
        <strong>Initialize Variables:</strong>
        <ul>
          <li>
            Create a <code>HashSet&lt;Integer&gt;</code> to store the elements
            within the current window of size <code>k</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Iterate Through the Array:</strong>
        <ul>
          <li>
            Use a <code>for</code> loop to iterate through the elements of the
            array.
          </li>
          <li>For each element, check if it already exists in the HashSet.</li>
          <li>
            If it exists, return <code>true</code> as it means a duplicate
            within distance <code>k</code> is found.
          </li>
          <li>If it does not exist, add the element to the HashSet.</li>
        </ul>
      </li>
      <li>
        <strong>Maintain the Sliding Window:</strong>
        <ul>
          <li>
            If the size of the HashSet exceeds <code>k</code>, remove the oldest
            element (i.e., the element at index <code>i - k</code>).
          </li>
        </ul>
      </li>
      <li>
        <strong>Return the Result:</strong>
        <ul>
          <li>
            If no duplicates are found within the distance <code>k</code>,
            return <code>false</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  "220_sliding_window": (
    <ul>
      <li>
        <strong>Initialize Variables:</strong>
        <ul>
          <li>
            Create a <code>TreeSet&lt;Long&gt;</code> to store the elements
            within the current window of size <code>k</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Iterate Through the Array:</strong>
        <ul>
          <li>
            Use a <code>for</code> loop to iterate through the elements of the
            array.
          </li>
          <li>
            For each element, use the <code>TreeSet</code> to find if there
            exists any element within the range{" "}
            <code>[nums[i] - t, nums[i] + t]</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Check for Elements Within the Range:</strong>
        <ul>
          <li>
            Use the <code>TreeSet</code>'s <code>floor</code> method to find the
            greatest element less than or equal to <code>nums[i] + t</code>.
          </li>
          <li>
            Check if this element is within the range{" "}
            <code>[nums[i] - t, nums[i] + t]</code> and return <code>true</code>{" "}
            if it is.
          </li>
        </ul>
      </li>
      <li>
        <strong>Maintain the Sliding Window:</strong>
        <ul>
          <li>
            Add the current element to the <code>TreeSet</code>.
          </li>
          <li>
            If the size of the <code>TreeSet</code> exceeds <code>k</code>,
            remove the oldest element (i.e., the element at index{" "}
            <code>i - k</code>).
          </li>
        </ul>
      </li>
      <li>
        <strong>Return the Result:</strong>
        <ul>
          <li>
            If no such elements are found, return <code>false</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  340: (
    <ul>
      <li>
        <strong>Initialize Variables:</strong>
        <ul>
          <li>
            Create a <code>HashMap&lt;Character, Integer&gt;</code> to store the
            characters and their counts within the current window.
          </li>
          <li>
            Initialize <code>left</code> to represent the left boundary of the
            sliding window.
          </li>
          <li>
            Initialize <code>maxLength</code> to store the length of the longest
            substring found.
          </li>
        </ul>
      </li>
      <li>
        <strong>Expand the Window:</strong>
        <ul>
          <li>
            Use a <code>for</code> loop to move the right boundary (
            <code>right</code>) of the window from the start to the end of the
            string.
          </li>
          <li>
            Add the current character to the HashMap and update its count.
          </li>
        </ul>
      </li>
      <li>
        <strong>Shrink the Window if Needed:</strong>
        <ul>
          <li>
            If the number of distinct characters in the HashMap exceeds{" "}
            <code>k</code>, shrink the window from the left until the number of
            distinct characters is at most <code>k</code>.
          </li>
          <li>
            Decrease the count of the character at the left boundary in the
            HashMap, and if its count becomes zero, remove it from the HashMap.
          </li>
          <li>Move the left boundary to the right.</li>
        </ul>
      </li>
      <li>
        <strong>Update the Maximum Length:</strong>
        <ul>
          <li>
            Update <code>maxLength</code> with the size of the current window if
            it is greater than the previously stored <code>maxLength</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return the Result:</strong>
        <ul>
          <li>
            Return <code>maxLength</code> as the length of the longest substring
            with at most <code>k</code> distinct characters.
          </li>
        </ul>
      </li>
    </ul>
  ),
  395: (
    <ul>
      <li>
        <strong>Iterate Over Unique Character Counts:</strong>
        <ul>
          <li>
            Iterate over the number of unique characters in the substring, from
            1 to the total number of unique characters in the string.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window for Each Unique Character Count:</strong>
        <ul>
          <li>
            Use a sliding window to maintain the current window of characters.
          </li>
          <li>
            Use a <code>HashMap</code> to keep track of character frequencies
            within the window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Maintain the Window:</strong>
        <ul>
          <li>Expand the window by adding characters to the right.</li>
          <li>
            If the number of unique characters exceeds the target, shrink the
            window from the left until the number of unique characters is equal
            to the target.
          </li>
          <li>
            Ensure that all characters in the window have a frequency of at
            least <code>K</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Update the Maximum Length:</strong>
        <ul>
          <li>
            For each configuration of the window where all characters have at
            least <code>K</code> repetitions, update the maximum length of the
            substring.
          </li>
        </ul>
      </li>
    </ul>
  ),
  424: (
    <ul>
      <li>
        <strong>Initialize Variables:</strong>
        <ul>
          <li>
            Create an array <code>count</code> to store the frequency of each
            character in the current window.
          </li>
          <li>
            Initialize <code>maxCount</code> to store the count of the most
            frequent character in the current window.
          </li>
          <li>
            Initialize <code>left</code> to represent the left boundary of the
            sliding window.
          </li>
          <li>
            Initialize <code>maxLength</code> to store the length of the longest
            valid substring found.
          </li>
        </ul>
      </li>
      <li>
        <strong>Expand the Window:</strong>
        <ul>
          <li>
            Use a <code>for</code> loop to move the right boundary (
            <code>right</code>) of the window from the start to the end of the
            string.
          </li>
          <li>
            Add the current character to the frequency array and update{" "}
            <code>maxCount</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Shrink the Window if Needed:</strong>
        <ul>
          <li>
            If the window size (<code>right - left + 1</code>) minus{" "}
            <code>maxCount</code> is greater than <code>k</code>, shrink the
            window from the left.
          </li>
          <li>
            Decrease the count of the character at the left boundary and move
            the left boundary to the right.
          </li>
        </ul>
      </li>
      <li>
        <strong>Update the Maximum Length:</strong>
        <ul>
          <li>
            Update <code>maxLength</code> with the size of the current window if
            it is greater than the previously stored <code>maxLength</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return the Result:</strong>
        <ul>
          <li>
            Return <code>maxLength</code> as the length of the longest substring
            after at most <code>k</code> replacements.
          </li>
        </ul>
      </li>
    </ul>
  ),
  438: (
    <ul>
      <li>
        <strong>Initialize Variables:</strong>
        <ul>
          <li>
            Create two arrays <code>pCount</code> and <code>sCount</code> to
            store the frequency of each character in the strings <code>p</code>{" "}
            and the current window in <code>s</code>.
          </li>
          <li>
            Create a list <code>result</code> to store the starting indices of
            the anagrams found.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Populate the Frequency Array for <code>p</code>:
        </strong>
        <ul>
          <li>
            Traverse the string <code>p</code> and populate the{" "}
            <code>pCount</code> array with the frequency of each character.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initialize the Sliding Window:</strong>
        <ul>
          <li>
            Traverse the first window of size <code>p.length()</code> in{" "}
            <code>s</code> and populate the <code>sCount</code> array.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Sliding Window Over the String <code>s</code>:
        </strong>
        <ul>
          <li>
            Use a <code>for</code> loop to slide the window from the start to
            the end of the string <code>s</code>.
          </li>
          <li>
            If the frequency arrays <code>pCount</code> and <code>sCount</code>{" "}
            are equal, add the starting index of the current window to the
            result list.
          </li>
          <li>
            Move the window one character to the right by updating the{" "}
            <code>sCount</code> array:
            <ul>
              <li>
                Decrease the count of the character that is sliding out of the
                window.
              </li>
              <li>
                Increase the count of the new character that is sliding into the
                window.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Check the Final Window:</strong>
        <ul>
          <li>After the loop, check the last window.</li>
        </ul>
      </li>
      <li>
        <strong>Return the Result:</strong>
        <ul>
          <li>Return the list of starting indices of the anagrams found.</li>
        </ul>
      </li>
    </ul>
  ),
  480: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize an empty list <code>resList</code> to store the result
            medians.
          </li>
          <li>
            Get the length of the input array <code>nums</code> and initialize
            an empty <code>ArrayList</code> <code>temp</code> to store the
            elements in the current sliding window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Setup Sliding Window:</strong>
        <ul>
          <li>
            Populate the initial sliding window with the first <code>k-1</code>{" "}
            elements of <code>nums</code> and sort them using{" "}
            <code>Collections.sort()</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            Iterate through the array <code>nums</code> using two pointers{" "}
            <code>i</code> (start of window) and <code>j</code> (end of window).
          </li>
          <li>
            For each position of the window:
            <ul>
              <li>
                Insert <code>nums[j]</code> into <code>temp</code> in sorted
                order using <code>Collections.binarySearch()</code> to find the
                insertion point.
              </li>
              <li>
                Calculate the median based on whether <code>k</code> is odd or
                even:
                <ul>
                  <li>
                    If <code>k</code> is odd, the median is simply{" "}
                    <code>temp.get(k / 2)</code>.
                  </li>
                  <li>
                    If <code>k</code> is even, the median is the average of{" "}
                    <code>temp.get(k / 2)</code> and{" "}
                    <code>temp.get(k / 2 - 1)</code>.
                  </li>
                </ul>
              </li>
              <li>
                Remove <code>nums[i]</code> from <code>temp</code> using{" "}
                <code>Collections.binarySearch()</code> to find its index.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Conversion and Output:</strong>
        <ul>
          <li>
            Convert the <code>List&lt;Double&gt;</code> <code>resList</code> to
            a <code>double[]</code> array <code>resArray</code> before returning
            it.
          </li>
        </ul>
      </li>
    </ul>
  ),
  487: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize two pointers <code>l</code> and <code>r</code> both
            starting at index 0.
          </li>
          <li>
            Initialize <code>k</code> to 1, which represents the number of flips
            (changing a <code>0</code> to <code>1</code>) allowed.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            Use the pointers <code>l</code> (left) and <code>r</code> (right) to
            create a sliding window.
          </li>
          <li>
            Iterate through the array <code>nums</code> using the right pointer{" "}
            <code>r</code>:
            <ul>
              <li>
                If <code>nums[r]</code> is <code>0</code>, decrement{" "}
                <code>k</code> (since we encounter a <code>0</code>).
              </li>
              <li>
                If <code>k</code> becomes less than <code>0</code> (meaning
                we've used more flips than allowed), move the left pointer{" "}
                <code>l</code> to the right until <code>k</code> is back to{" "}
                <code>0</code> (by flipping a <code>0</code> back to{" "}
                <code>1</code>).
              </li>
              <li>
                Update the maximum length of consecutive ones found using{" "}
                <code>r - l</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Return the maximum length of consecutive ones found, which is{" "}
            <code>r - l</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  567: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Create two arrays, <code>countS1</code> and <code>countWindow</code>
            , each of size 26 (assuming lowercase English letters), to count the
            frequency of characters.
          </li>
          <li>
            Initialize <code>countS1</code> with the frequency of characters in{" "}
            <code>s1</code>.
          </li>
          <li>
            Initialize <code>countWindow</code> with the frequency of characters
            in the initial window of size <code>s1.length()</code> in{" "}
            <code>s2</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Slide a window of size equal to <code>s1.length()</code> across{" "}
            <code>s2</code>.
          </li>
          <li>
            Adjust <code>countWindow</code> as characters enter or leave the
            window:
          </li>
          <ul>
            <li>
              Remove the count of the character that is sliding out of the
              window.
            </li>
            <li>
              Add the count of the character that is sliding into the window.
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <strong>Comparison:</strong>
        <ul>
          <li>
            After adjusting <code>countWindow</code> for each window position,
            compare it with <code>countS1</code>.
          </li>
          <li>
            If they match at any position, return <code>true</code> indicating
            that a permutation of <code>s1</code> exists in <code>s2</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Edge Cases:</strong>
        <ul>
          <li>
            Check if <code>s1.length()</code> is greater than{" "}
            <code>s2.length()</code>. If so, immediately return{" "}
            <code>false</code> because <code>s1</code> cannot fit into{" "}
            <code>s2</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  594: (
    <ul>
      <li>
        <strong>Initialize HashMap:</strong>
        <ul>
          <li>
            Use a hashmap <code>frequencyMap</code> to count the frequency of
            each number in the array.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>Iterate through each number in the array.</li>
          <li>
            For each number, check if its neighboring numbers (current number +
            1 and current number - 1) exist in <code>frequencyMap</code>.
          </li>
          <li>
            If they exist, calculate the length of the harmonious subsequence
            that includes the current number and update the maximum length found
            so far.
          </li>
        </ul>
      </li>
      <li>
        <strong>Edge Cases:</strong>
        <ul>
          <li>
            Handle cases where the array is empty or has only one element, where
            no harmonious subsequence can exist.
          </li>
        </ul>
      </li>
    </ul>
  ),
  632: (
    <ul>
      <li>
        <strong>Initialize Min-Heap:</strong>
        <ul>
          <li>
            Use a min-heap (priority queue) to keep track of the current
            smallest element from each list. The min-heap helps efficiently find
            and manage the smallest element and update the range.
          </li>
        </ul>
      </li>
      <li>
        <strong>Track Maximum Element:</strong>
        <ul>
          <li>
            Maintain a variable <code>maxElement</code> to keep track of the
            maximum element among the current elements from all lists in the
            min-heap.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Initialize a sliding window with the smallest range covering the
            first elements of all lists.
          </li>
          <li>
            Adjust the window by moving the start of the window to the right and
            updating <code>maxElement</code> accordingly.
          </li>
        </ul>
      </li>
      <li>
        <strong>Update Minimum Range:</strong>
        <ul>
          <li>
            Continuously update the minimum range <code>[start, end]</code>{" "}
            whenever a smaller valid range is found by comparing the current
            range with the smallest range found so far.
          </li>
        </ul>
      </li>
      <li>
        <strong>Iterate Until Completion:</strong>
        <ul>
          <li>
            Continue popping elements from the heap and pushing the next element
            from the same list until any list is exhausted (
            <code>elementIdx == nums.get(listIdx).size()</code>).
          </li>
        </ul>
      </li>
    </ul>
  ),
  643: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize a variable <code>sum</code> to store the sum of the first{" "}
            <code>k</code> elements in the array <code>nums</code>.
          </li>
          <li>
            Iterate through the first <code>k</code> elements of{" "}
            <code>nums</code> and compute the initial sum.
          </li>
          <li>
            Initialize a variable <code>res</code> with <code>sum</code>, which
            represents the maximum sum of any <code>k</code> consecutive
            elements initially.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Iterate through the array <code>nums</code> starting from index{" "}
            <code>k</code>.
          </li>
          <li>
            Update <code>sum</code> by adding the current element{" "}
            <code>nums[i]</code> and subtracting the element that is going out
            of the sliding window <code>nums[i - k]</code>.
          </li>
          <li>
            Update <code>res</code> to store the maximum of <code>res</code> and{" "}
            <code>sum</code>, ensuring <code>res</code> always holds the maximum
            sum of any <code>k</code> consecutive elements encountered so far.
          </li>
        </ul>
      </li>
      <li>
        <strong>Compute and Return Maximum Average:</strong>
        <ul>
          <li>
            Return <code>res / k</code>, which gives the maximum average of any{" "}
            <code>k</code> consecutive elements in the array <code>nums</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  658: (
    <ul>
      <p>It's ideal to solve this using binary search approach</p>
      <li>
        <strong>Binary Search for Optimal Starting Index:</strong>
        <ul>
          <li>
            Initialize <code>left</code> to <code>0</code> and{" "}
            <code>right</code> to <code>arr.length - k</code>. These represent
            the boundaries within which we search for the starting index of the
            subarray containing the <code>k</code> closest elements.
          </li>
          <li>
            Use binary search within this range to find the optimal starting
            index <code>left</code>. The condition{" "}
            <code>x - arr[mid] &lt;= arr[mid + k] - x</code> determines whether
            to adjust <code>right</code> or <code>left</code> to move towards
            finding the closest elements.
          </li>
        </ul>
      </li>
      <li>
        <strong>Collecting and Returning the Result:</strong>
        <ul>
          <li>
            After determining <code>left</code>, use a <code>for</code> loop to
            collect the <code>k</code> closest elements starting from index{" "}
            <code>left</code> into a <code>List</code>.
          </li>
          <li>
            Return the <code>List</code> containing the <code>k</code> closest
            elements to <code>x</code> in <code>arr</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  683: (
    <ul>
      <li>
        <strong>Mapping Days to Positions:</strong>
        <ul>
          <li>
            Create an array <code>day</code> where{" "}
            <code>
              day[position - 1] = day when bulb at position is turned on
            </code>
            . This helps in quickly accessing the day when a specific bulb is
            turned on.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Initialize a sliding window represented by <code>l</code> (left
            boundary) and <code>r</code> (right boundary such that{" "}
            <code>r = l + k + 1</code> initially).
          </li>
          <li>
            Iterate through the array from day <code>1</code> to{" "}
            <code>n - 1</code> (where <code>n</code> is the length of{" "}
            <code>bulbs</code>).
          </li>
          <li>
            Check if the current day <code>i</code> equals <code>r</code> (end
            of the current window):
            <ul>
              <li>
                If yes, calculate the potential earliest day <code>ans</code>{" "}
                where there are exactly <code>k</code> empty bulbs between{" "}
                <code>day[l]</code> and <code>day[r]</code>.
              </li>
              <li>
                Update <code>l</code> to <code>i</code> and move <code>r</code>{" "}
                to <code>i + k + 1</code>.
              </li>
            </ul>
          </li>
          <li>
            If the day <code>day[i]</code> is less than the maximum of{" "}
            <code>day[l]</code> and <code>day[r]</code>, update <code>l</code>{" "}
            to <code>i</code> and move <code>r</code> to <code>i + k + 1</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Return <code>ans</code> if it is not <code>Integer.MAX_VALUE</code>,
            otherwise return <code>-1</code> indicating no valid day was found
            with <code>k</code> empty bulbs.
          </li>
        </ul>
      </li>
    </ul>
  ),
  713: (
    <ul>
      <li>
        <strong>Initialize Pointers and Variables:</strong>
        <ul>
          <li>
            Use two pointers, <code>left</code> and <code>right</code>, to
            represent the current window of the subarray.
          </li>
          <li>
            Initialize <code>product</code> to <code>1</code> (this will keep
            track of the product of elements in the current window).
          </li>
          <li>
            Initialize <code>count</code> to <code>0</code> (this will count the
            number of valid subarrays).
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Expand the <code>right</code> pointer to include more elements in
            the window.
          </li>
          <li>
            Update the <code>product</code> by multiplying it with{" "}
            <code>nums[right]</code>.
          </li>
          <li>
            If <code>product</code> is less than <code>k</code>, all subarrays
            starting from <code>left</code> to <code>right</code> are valid:
            <ul>
              <li>
                Add <code>right - left + 1</code> to <code>count</code>.
              </li>
            </ul>
          </li>
          <li>
            If <code>product</code> is greater than or equal to <code>k</code>,
            shrink the window from the <code>left</code>:
            <ul>
              <li>
                Update <code>product</code> by dividing it by{" "}
                <code>nums[left]</code>.
              </li>
              <li>
                Move <code>left</code> pointer to the right (<code>left++</code>
                ).
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Edge Cases:</strong>
        <ul>
          <li>
            If <code>nums</code> is empty, return <code>0</code> because there
            are no subarrays.
          </li>
          <li>
            Handle the case where elements in <code>nums</code> are{" "}
            <code>1</code>, as the product will always be less than{" "}
            <code>k</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            After iterating through the array with the sliding window technique,{" "}
            <code>count</code> will contain the number of subarrays where the
            product is less than <code>k</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  718: (
    <ul>
      <li>
        <strong>Dynamic Programming with Sliding Window:</strong>
        <ul>
          <li>
            Use a 2D array <code>dp</code> where <code>dp[i][j]</code>{" "}
            represents the length of the longest common subarray ending at{" "}
            <code>A[i-1]</code> and <code>B[j-1]</code>.
          </li>
          <li>
            Initialize a variable <code>maxLen</code> to keep track of the
            maximum length found.
          </li>
          <li>
            Iterate through each pair of indices <code>i</code> and{" "}
            <code>j</code>:
            <ul>
              <li>
                If <code>A[i-1] == B[j-1]</code>, then{" "}
                <code>dp[i][j] = dp[i-1][j-1] + 1</code> (extend the length of
                the common subarray).
              </li>
              <li>
                Update <code>maxLen</code> if <code>dp[i][j]</code> is greater
                than <code>maxLen</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  727: (
    <ul>
      <li>
        <strong>
          Dynamic Programming Table (<code>dp</code>):
        </strong>
        <ul>
          <li>
            Use a 2D array <code>dp</code> where <code>dp[i][j]</code> indicates
            the position in <code>s1</code> where the subsequence{" "}
            <code>s2.substring(0, i)</code> ends at or before index{" "}
            <code>j</code> in <code>s1</code>.
          </li>
          <li>
            Initialize <code>dp[0][j]</code> to <code>j + 1</code> because an
            empty subsequence can end anywhere in <code>s1</code>.
          </li>
          <li>
            Fill the table by iterating through <code>s1</code> and{" "}
            <code>s2</code>:
            <ul>
              <li>
                If characters match, update <code>dp[i][j]</code> to{" "}
                <code>dp[i-1][j-1]</code>.
              </li>
              <li>
                Otherwise, carry forward the previous position from{" "}
                <code>dp[i][j-1]</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Finding the Minimum Window:</strong>
        <ul>
          <li>
            Iterate through the last row of <code>dp</code> to find the smallest
            window which contains all characters of <code>s2</code> in order.
          </li>
          <li>
            Calculate the minimum length of the window and update{" "}
            <code>bestLeft</code> accordingly.
          </li>
          <li>
            Return the substring of <code>s1</code> starting from{" "}
            <code>bestLeft</code> with length <code>minLength</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  904: (
    <ul>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Use two pointers, <code>start</code> and <code>end</code>, to
            represent the current window of fruits.
          </li>
          <li>
            Maintain a hashmap <code>fruitCount</code> to keep track of the
            count of each type of fruit in the current window.
          </li>
          <li>
            Use a variable <code>maxFruits</code> to keep track of the maximum
            number of fruits in any valid subarray.
          </li>
          <li>
            Iterate through the array and expand the window by moving the{" "}
            <code>end</code> pointer to the right.
          </li>
          <li>
            Add the current fruit (<code>tree[end]</code>) to the{" "}
            <code>fruitCount</code> hashmap and update its count.
          </li>
          <li>
            If the size of <code>fruitCount</code> exceeds 2 (i.e., more than
            two distinct types of fruits), shrink the window from the{" "}
            <code>start</code> pointer until we have at most two distinct types
            of fruits in the window.
          </li>
          <li>
            Update <code>maxFruits</code> with the maximum number of fruits
            collected in any valid subarray after adjusting the window.
          </li>
        </ul>
      </li>
    </ul>
  ),
  930: (
    <ul>
      <li>
        <strong>Prefix Sum and HashMap:</strong>
        <ul>
          <li>
            Compute a prefix sum array where each element at index{" "}
            <code>i</code> represents the sum of elements from the start of the
            array up to <code>i</code>.
          </li>
          <li>
            Use a hashmap (<code>prefixSumCount</code>) to store the frequency
            of each prefix sum encountered.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Initialize <code>prefixSumCount</code> with <code>{"{0:1}"}</code>{" "}
            to handle cases where a subarray from the start of the array has the
            sum equal to <code>goal</code>.
          </li>
          <li>
            Initialize <code>prefixSum</code> to keep track of the current
            prefix sum.
          </li>
          <li>
            Iterate through the array <code>nums</code>, updating{" "}
            <code>prefixSum</code> and calculating <code>currentSum</code> as{" "}
            <code>prefixSum - goal</code>.
          </li>
          <li>
            For each <code>currentSum</code>, add its count to the result if it
            exists in <code>prefixSumCount</code>.
          </li>
          <li>
            Update <code>prefixSumCount</code> with the frequency of{" "}
            <code>prefixSum</code> encountered during iteration.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>Return the count of subarrays found.</li>
        </ul>
      </li>
    </ul>
  ),
  978: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>ans</code>: Initialized to <code>1</code>, represents the
            length of the longest turbulent subarray found so far.
          </li>
          <li>
            <code>increasing</code>: Initialized to <code>1</code>, tracks the
            length of the current increasing turbulent subarray.
          </li>
          <li>
            <code>decreasing</code>: Initialized to <code>1</code>, tracks the
            length of the current decreasing turbulent subarray.
          </li>
        </ul>
      </li>
      <br />
      <li>
        <strong>Iterating through the array:</strong>
        <ul>
          <li>
            Start iterating from the second element (<code>i = 1</code>) of the
            array <code>arr</code>.
          </li>
          <li>
            Compare <code>arr[i]</code> with <code>arr[i - 1]</code> to
            determine the type of turbulent subarray:
            <ul>
              <li>
                If <code>arr[i] &gt; arr[i - 1]</code>, it indicates an
                increasing sequence. Update <code>increasing</code> to{" "}
                <code>decreasing + 1</code> and reset <code>decreasing</code> to{" "}
                <code>1</code>.
              </li>
              <li>
                If <code>arr[i] &lt; arr[i - 1]</code>, it indicates a
                decreasing sequence. Update <code>decreasing</code> to{" "}
                <code>increasing + 1</code> and reset <code>increasing</code> to{" "}
                <code>1</code>.
              </li>
              <li>
                If <code>arr[i] == arr[i - 1]</code>, reset both{" "}
                <code>increasing</code> and <code>decreasing</code> to{" "}
                <code>1</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <br />
      <li>
        <strong>Updating the Maximum Length:</strong>
        <ul>
          <li>
            After updating <code>increasing</code> and <code>decreasing</code>,
            update <code>ans</code> to the maximum of itself and the current
            lengths of <code>increasing</code> and <code>decreasing</code>.
          </li>
        </ul>
      </li>
      <br />
      <li>
        <strong>Returning the Result:</strong>
        <ul>
          <li>
            After iterating through the entire array, <code>ans</code> will
            contain the length of the longest turbulent subarray found, which is
            returned as the result.
          </li>
        </ul>
      </li>
    </ul>
  ),
  992: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Use two pointers, `left` and `right`, to represent the current
            window of elements.
          </li>
          <li>
            Use a hashmap (`frequency`) to keep track of the frequency of each
            element in the current window.
          </li>
          <li>
            Initialize variables:
            <ul>
              <li>
                <code>count</code>: To count the number of valid subarrays.
              </li>
              <li>
                <code>distinctCount</code>: To count the number of distinct
                integers in the current window.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <br />
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Expand the window by moving the <code>right</code> pointer to the
            right and include the element at <code>A[right]</code> in the
            window.
          </li>
          <li>
            Update the <code>frequency</code> map and <code>distinctCount</code>
            .
          </li>
          <li>
            Shrink the window from the left by moving the <code>left</code>{" "}
            pointer to the right until <code>distinctCount &gt; K</code>:
            <ul>
              <li>
                Decrease the frequency of <code>A[left]</code> in{" "}
                <code>frequency</code>.
              </li>
              <li>
                If the frequency becomes zero, decrement{" "}
                <code>distinctCount</code>.
              </li>
            </ul>
          </li>
          <li>
            If <code>distinctCount == K</code>, increment <code>count</code> to
            count the valid subarrays ending at <code>right</code>.
          </li>
        </ul>
      </li>
      <br />
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After iterating through the entire array, <code>count</code> will
            contain the total number of subarrays with exactly <code>K</code>{" "}
            different integers.
          </li>
        </ul>
      </li>
    </ul>
  ),
  995: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize a variable <code>ans</code> to count the number of flips
            required.
          </li>
          <li>
            Initialize a variable <code>flippedTime</code> to keep track of the
            number of flips currently affecting the window.
          </li>
          <li>
            Initialize a variable <code>left</code> to keep track of the left
            boundary of the sliding window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Iterate through the Array:</strong>
        <ul>
          <li>
            For each element at index <code>right</code> in the array:
          </li>
          <ul>
            <li>
              If the index <code>right</code> is greater than or equal to{" "}
              <code>k</code> and the element at <code>nums[right - k]</code> is
              marked as flipped (value is 2), decrement <code>flippedTime</code>
              .
            </li>
            <li>
              Check if the current element needs to be flipped by comparing{" "}
              <code>flippedTime % 2</code> with <code>nums[right]</code>.
            </li>
            <li>
              If they are equal, it means the current bit is not yet flipped
              correctly, so perform a flip:
            </li>
            <ul>
              <li>
                Check if there are enough elements remaining to perform the
                flip. If not, return <code>-1</code>.
              </li>
              <li>
                Increment the flip counter <code>ans</code>.
              </li>
              <li>
                Increment <code>flippedTime</code>.
              </li>
              <li>
                Mark the current element as flipped by setting{" "}
                <code>nums[right]</code> to 2.
              </li>
            </ul>
          </ul>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After iterating through the entire array, return <code>ans</code>,
            which holds the minimum number of flips required.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1004: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Variables <code>left</code>, <code>right</code>,{" "}
            <code>maxOnes</code>, and <code>zerosCount</code> are initialized.
          </li>
        </ul>
      </li>
      <li>
        <strong>Iterate through the Array:</strong>
        <ul>
          <li>
            For each element at index <code>right</code> in the array:
          </li>
          <ul>
            <li>
              If the current element is 0, increment <code>zerosCount</code>.
            </li>
            <li>
              While <code>zerosCount</code> is greater than <code>k</code>, move
              the <code>left</code> pointer to the right:
            </li>
            <ul>
              <li>
                If the element at the <code>left</code> pointer is 0, decrement{" "}
                <code>zerosCount</code>.
              </li>
              <li>
                Increment the <code>left</code> pointer.
              </li>
            </ul>
            <li>
              Update <code>maxOnes</code> with the maximum of{" "}
              <code>maxOnes</code> and the length of the current window (which
              is <code>right - left + 1</code>).
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After iterating through the entire array, return{" "}
            <code>maxOnes</code>, which holds the maximum number of consecutive
            ones that can be obtained.
          </li>
        </ul>
      </li>
      <li>
        <strong>Alternate Solution:</strong>
        <pre>
          <code>
            {`/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let ans = 0;
    for (let l = 0, r = 0; r < nums.length; ++r) {
        if (nums[r] == 0)
            --k;
        while (k < 0)
            if (nums[l++] == 0)
                ++k;
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))`}
          </code>
        </pre>
      </li>
    </ul>
  ),
  1031: (
    <ul>
      <li>
        <strong>Calculate Prefix Sums:</strong>
        <ul>
          <li>
            Use an auxiliary array <code>prefixSum</code> where{" "}
            <code>prefixSum[i]</code> holds the sum of elements from the start
            of the array to the <code>i-1</code>th element.
          </li>
        </ul>
      </li>
      <li>
        <strong>Find Maximum Sums for Subarrays:</strong>
        <ul>
          <li>
            Iterate through the array using a single loop to calculate the
            maximum sum of two non-overlapping subarrays.
          </li>
          <li>
            Use variables <code>maxL</code> and <code>maxM</code> to keep track
            of the maximum sums of subarrays of lengths <code>L</code> and{" "}
            <code>M</code> respectively.
          </li>
        </ul>
      </li>
      <li>
        <strong>Update Result:</strong>
        <ul>
          <li>
            At each step, calculate the maximum sum of two non-overlapping
            subarrays by updating the <code>result</code> variable with the
            maximum possible sum found so far.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After iterating through the entire array, return the maximum sum
            found.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1052: (
    <ul>
      <li>
        <strong>Initial Satisfied Customers:</strong>
        <ul>
          <li>
            We iterate through the `customers` array and add the number of
            customers to `totalSatisfied` if the owner is not grumpy at that
            minute (i.e., `grumpy[i] == 0`).
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Sliding Window to Maximize Additional Satisfied Customers:
        </strong>
        <ul>
          <li>
            We use a sliding window of size `X` to calculate the maximum
            additional customers we can satisfy by applying the non-grumpy
            interval.
          </li>
          <li>
            We iterate through the `customers` array, adding the number of
            customers to `currentAdditionalSatisfied` if the owner is grumpy at
            that minute.
          </li>
          <li>
            When the window exceeds size `X`, we subtract the number of
            customers from `currentAdditionalSatisfied` if the owner was grumpy
            at the start of the window (`i - X`).
          </li>
          <li>
            We update `maxAdditionalSatisfied` with the maximum value of
            `currentAdditionalSatisfied` during the sliding window traversal.
          </li>
        </ul>
      </li>
      <li>
        <strong>Result:</strong>
        <ul>
          <li>
            Finally, we return the sum of `totalSatisfied` and
            `maxAdditionalSatisfied` as the maximum number of satisfied
            customers.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1156: (
    <ul>
      <li>
        <strong>Count Frequency:</strong>
        <ul>
          <li>
            We start by counting the frequency of each character in the string
            using an array `count`.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window:</strong>
        <ul>
          <li>We use a sliding window to traverse through the string.</li>
          <li>
            For each character block (continuous substring of the same
            character), we check the length of this block.
          </li>
          <li>
            We then look ahead to see if there's a potential extension of this
            block with a single swap.
          </li>
        </ul>
      </li>
      <li>
        <strong>Calculate Maximum Length:</strong>
        <ul>
          <li>
            We calculate the total length of the block considering one swap,
            ensuring it doesn't exceed the total available characters of that
            type in the string.
          </li>
          <li>
            We keep track of the maximum length found during this process.
          </li>
        </ul>
      </li>
      <li>
        <strong>Result:</strong>
        <ul>
          <li>Finally, we return the maximum length found.</li>
        </ul>
      </li>
    </ul>
  ),
  1100: (
    <ul>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            We will use a sliding window of size `K` to examine each substring
            in the string `S`.
          </li>
          <li>
            By sliding this window from the beginning to the end of the string,
            we can efficiently check each substring of length `K`.
          </li>
        </ul>
      </li>
      <li>
        <strong>HashSet for Character Tracking:</strong>
        <ul>
          <li>
            Use a HashSet to keep track of characters within the current window.
          </li>
          <li>
            This allows us to quickly check if a character is repeated within
            the window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Count Valid Substrings:</strong>
        <ul>
          <li>
            As we slide the window across the string:
            <ul>
              <li>Add characters to the HashSet.</li>
              <li>
                If a character repeats within the window (i.e., already exists
                in the HashSet), slide the window to the right until the
                repeated character is removed from the HashSet.
              </li>
              <li>
                Count the substring as valid if its length equals `K` and all
                characters are unique.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1151: (
    <ul>
      <li>
        <strong>Initialization and Calculation:</strong>
        <ul>
          <li>
            Initialize `sum` to calculate the total number of 1's in the array.
          </li>
          <li>
            Initialize `sumK` to calculate the number of 1's in the first window
            of size `sum`.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Use a sliding window of size `sum` to calculate the maximum number
            of 1's (`max`) that can be grouped together.
          </li>
        </ul>
      </li>
      <li>
        <strong>Calculate Minimum Swaps:</strong>
        <ul>
          <li>
            Subtract `max` from `sum` to get the minimum number of swaps
            required to group all 1's together.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1176: (
    <>
      {" "}
      <h2>Explanation of Diet Plan Performance Calculation</h2>
      <ul>
        <li>
          <strong>Prefix Sum Array Initialization:</strong>
          <p>
            We initialize an array <code>s</code> where <code>s[i]</code> stores
            the sum of calories from the start of the <code>calories</code>{" "}
            array up to index <code>i-1</code>.
          </p>
        </li>
        <li>
          <strong>Calculate Prefix Sums:</strong>
          <p>
            Iterate through the <code>calories</code> array to populate the{" "}
            <code>s</code> array:
          </p>
        </li>
        <li>
          <strong>Sliding Window and DPP Calculation:</strong>
          <p>
            Initialize <code>ans</code> to <code>0</code>, then iterate through
            the array from index <code>0</code> to <code>n - k</code>:
          </p>

          <p>
            For each window, compare the sum <code>t</code> with{" "}
            <code>lower</code> and <code>upper</code> thresholds:
          </p>
        </li>
        <li>
          <strong>Return the Result:</strong>
          <p>
            Return the accumulated value of <code>ans</code>, which represents
            the Diet Plan Performance based on the given criteria.
          </p>
        </li>
      </ul>
    </>
  ),
  1208: (
    <>
      {" "}
      <h2>Explanation of Get Equal Substrings Within Budget</h2>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <p>
            Initialize variables <code>left</code>, <code>right</code>,{" "}
            <code>currentCost</code>, and <code>maxLength</code>.
          </p>
        </li>
        <li>
          <strong>Sliding Window Approach:</strong>
          <ul>
            <li>
              Iterate through both strings using a sliding window defined by{" "}
              <code>left</code> and <code>right</code> pointers.
            </li>
            <li>
              Calculate the cost of converting each character in the current
              window from <code>s</code> to <code>t</code>.
            </li>
            <li>
              Adjust the window size based on whether <code>currentCost</code>{" "}
              is within the allowed <code>maxCost</code>.
            </li>
            <li>
              Update <code>maxLength</code> whenever a valid substring length is
              found.
            </li>
          </ul>
        </li>
        <li>
          <strong>Edge Cases:</strong>
          <ul>
            <li>
              Handle cases where either <code>s</code> or <code>t</code> is
              empty.
            </li>
            <li>
              Ensure the loop runs until the end of the string and accounts for
              all possible substrings.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1234: (
    <ul>
      <li>
        <strong>Initialization:</strong> The variables `n`, `k`, and `ans` are
        initialized. `n` is the length of the string `s`, `k` is the target
        frequency for each character ('Q', 'W', 'E', 'R'), and `ans` is
        initialized to `n`.
      </li>
      <li>
        <strong>Character Counting:</strong> An array `count` of size 128 is
        used to store the frequency of each character ('Q', 'W', 'E', 'R') in
        the string `s`.
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            The outer loop iterates through each character in `s`. Inside this
            loop, the count of the current character is decremented.
          </li>
          <li>
            An inner while loop adjusts the window size until the substring is
            balanced (`count['Q'] &lt;= k`, `count['W'] &lt;= k`, `count['E']
            &lt;= k`, `count['R'] &lt;= k`). The minimum length found is updated
            in `ans`.
          </li>
          <li>
            After adjusting the window, `j` is incremented to slide the window
            to the right, and the count of `s.charAt(j)` is incremented.
          </li>
        </ul>
      </li>
      <li>
        <strong>Result:</strong> After completing the loops, `ans` holds the
        minimum length of a substring that needs to be replaced to achieve a
        balanced string.
      </li>
    </ul>
  ),
  1248: (
    <ul>
      <li>
        <strong>numberOfSubarrays Method:</strong> This method calculates the
        number of "nice" subarrays with exactly `k` odd numbers.
        <ul>
          <li>
            It calls the helper method `atMost` twice: once with `k` and once
            with `k - 1`.
          </li>
          <li>
            The difference between these two calls gives the count of subarrays
            with exactly `k` odd numbers.
          </li>
        </ul>
      </li>
      <li>
        <strong>atMost Method:</strong> This helper method calculates the number
        of subarrays with at most `k` odd numbers.
        <ul>
          <li>
            <strong>Initialization:</strong>
            <ul>
              <li>
                <code>res</code>: Stores the count of valid subarrays.
              </li>
              <li>
                <code>left</code>: The starting index of the sliding window.
              </li>
              <li>
                <code>count</code>: The number of odd numbers in the current
                window.
              </li>
            </ul>
          </li>
          <li>
            <strong>Sliding Window Logic:</strong>
            <ul>
              <li>
                Iterate over <code>nums</code> with <code>right</code> as the
                right boundary of the window.
              </li>
              <li>
                If <code>nums[right]</code> is odd, decrement <code>k</code>.
              </li>
              <li>
                If <code>k</code> becomes negative, move the <code>left</code>{" "}
                pointer to the right until <code>k</code> is non-negative.
              </li>
              <li>
                For each valid <code>right</code>, add the number of subarrays
                ending at <code>right</code> to <code>res</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Returning the Result:</strong> The difference{" "}
        <code>atMost(nums, k) - atMost(nums, k - 1)</code> provides the number
        of subarrays with exactly `k` odd numbers.
      </li>
    </ul>
  ),
  1297: (
    <ul>
      <li>
        <strong>maxFreq Method:</strong> This method calculates the maximum
        frequency of any substring within the constraints.
        <ul>
          <li>
            Parameters:
            <ul>
              <li>
                <code>s</code>: The input string.
              </li>
              <li>
                <code>maxLetters</code>: The maximum number of unique letters
                allowed in the substring.
              </li>
              <li>
                <code>minSize</code>: The minimum length of the substring.
              </li>
              <li>
                <code>maxSize</code>: The maximum length of the substring (not
                used in the code as we only need to consider{" "}
                <code>minSize</code>).
              </li>
            </ul>
          </li>
          <li>
            Initialization:
            <ul>
              <li>
                <code>n</code>: Length of the input string.
              </li>
              <li>
                <code>maxCount</code>: Stores the maximum count of valid
                substrings.
              </li>
              <li>
                <code>substringCount</code>: A HashMap to count occurrences of
                substrings.
              </li>
            </ul>
          </li>
          <li>
            Sliding Window Logic:
            <ul>
              <li>
                Iterate over the string with a window of size{" "}
                <code>minSize</code>.
              </li>
              <li>
                For each window, extract the substring and check if it is valid
                using the <code>isValid</code> method.
              </li>
              <li>
                If valid, update the count in <code>substringCount</code> and
                update <code>maxCount</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>isValid Method:</strong> This helper method checks if a
        substring has &lt;= <code>maxLetters</code> unique characters.
        <ul>
          <li>
            Initialization:
            <ul>
              <li>
                <code>count</code>: An array to count occurrences of each
                character in the substring.
              </li>
              <li>
                <code>uniqueLetters</code>: The count of unique letters in the
                substring.
              </li>
            </ul>
          </li>
          <li>
            Validation Logic:
            <ul>
              <li>Iterate over each character in the substring.</li>
              <li>
                If the character is seen for the first time, increment{" "}
                <code>uniqueLetters</code>.
              </li>
              <li>Update the count for each character.</li>
              <li>
                Return true if <code>uniqueLetters</code> &lt;={" "}
                <code>maxLetters</code>, otherwise false.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1343: (
    <ul>
      <li>
        <strong>numOfSubarrays Method:</strong> This method calculates the
        number of sub-arrays of size `k` with an average greater than or equal
        to the given threshold.
        <ul>
          <li>
            Parameters:
            <ul>
              <li>
                <code>arr</code>: The input array of integers.
              </li>
              <li>
                <code>k</code>: The size of the sub-array.
              </li>
              <li>
                <code>threshold</code>: The threshold value.
              </li>
            </ul>
          </li>
          <li>
            Initialization:
            <ul>
              <li>
                <code>count</code>: To count the number of valid sub-arrays.
              </li>
              <li>
                <code>windowSum</code>: To store the sum of the current window.
              </li>
              <li>
                <code>n</code>: Length of the input array.
              </li>
              <li>
                <code>targetSum</code>: The target sum which is{" "}
                <code>k * threshold</code>.
              </li>
            </ul>
          </li>
          <li>
            First Window Calculation:
            <ul>
              <li>Calculate the sum of the first window of size `k`.</li>
              <li>
                If the sum is greater than or equal to <code>targetSum</code>,
                increment <code>count</code>.
              </li>
            </ul>
          </li>
          <li>
            Sliding Window Logic:
            <ul>
              <li>Slide the window from left to right across the array.</li>
              <li>
                For each new element, add it to the <code>windowSum</code> and
                subtract the element that is left out of the window.
              </li>
              <li>
                Check if the updated <code>windowSum</code> meets the condition.
                If yes, increment <code>count</code>.
              </li>
            </ul>
          </li>
          <li>
            Return:
            <ul>
              <li>Return the total count of valid sub-arrays.</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1358: (
    <ul>
      <li>
        <strong>numberOfSubstrings Method:</strong> This method calculates the
        number of substrings containing all three characters 'a', 'b', and 'c'.
        <ul>
          <li>
            Parameters:
            <ul>
              <li>
                <code>s</code>: The input string.
              </li>
            </ul>
          </li>
          <li>
            Initialization:
            <ul>
              <li>
                <code>count</code>: An array to store the count of 'a', 'b', and
                'c'.
              </li>
              <li>
                <code>left</code>: The left pointer of the sliding window.
              </li>
              <li>
                <code>result</code>: To store the total number of valid
                substrings.
              </li>
            </ul>
          </li>
          <li>
            Sliding Window Logic:
            <ul>
              <li>
                Iterate through the string using the <code>right</code> pointer.
              </li>
              <li>
                Increment the count of the current character in the{" "}
                <code>count</code> array.
              </li>
              <li>
                Check if all three characters are present in the current window.
                If true:
                <ul>
                  <li>
                    Increment the <code>result</code> by the number of
                    substrings ending at the current <code>right</code>{" "}
                    position.
                  </li>
                  <li>
                    Decrement the count of the character at the{" "}
                    <code>left</code> pointer and move the <code>left</code>{" "}
                    pointer to the right.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Return:
            <ul>
              <li>
                Return the total count of valid substrings stored in{" "}
                <code>result</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1423: (
    <ul>
      <li>
        <strong>maxScore Method:</strong> This method calculates the maximum
        points you can obtain from cards.
        <ul>
          <li>
            Parameters:
            <ul>
              <li>
                <code>cardPoints</code>: The array of points on the cards.
              </li>
              <li>
                <code>k</code>: The number of cards you can select.
              </li>
            </ul>
          </li>
          <li>
            Initialization:
            <ul>
              <li>
                <code>n</code>: The total number of cards.
              </li>
              <li>
                <code>totalPoints</code>: The sum of the first <code>k</code>{" "}
                cards.
              </li>
              <li>
                <code>maxPoints</code>: To store the maximum points obtained.
              </li>
            </ul>
          </li>
          <li>
            Initial Calculation:
            <ul>
              <li>
                Calculate the sum of the first <code>k</code> cards and store it
                in <code>totalPoints</code>.
              </li>
              <li>
                Initialize <code>maxPoints</code> with <code>totalPoints</code>.
              </li>
            </ul>
          </li>
          <li>
            Sliding Window Logic:
            <ul>
              <li>
                Slide the window from the end of the array towards the start.
              </li>
              <li>
                For each position, update <code>totalPoints</code> by removing
                the last element of the current window and adding the
                corresponding element from the end of the array.
              </li>
              <li>
                Update <code>maxPoints</code> with the maximum of the current{" "}
                <code>totalPoints</code> and <code>maxPoints</code>.
              </li>
            </ul>
          </li>
          <li>
            Return:
            <ul>
              <li>
                Return the maximum points stored in <code>maxPoints</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1456: (
    <ul>
      <li>
        <strong>maxVowels Method:</strong> This method calculates the maximum
        number of vowels in any substring of length <code>k</code>.
        <ul>
          <li>
            Parameters:
            <ul>
              <li>
                <code>s</code>: The input string.
              </li>
              <li>
                <code>k</code>: The length of the substring.
              </li>
            </ul>
          </li>
          <li>
            Initialization:
            <ul>
              <li>
                <code>maxVowels</code>: To store the maximum number of vowels
                found in any substring.
              </li>
              <li>
                <code>currentVowels</code>: To store the number of vowels in the
                current sliding window.
              </li>
              <li>
                <code>n</code>: The length of the input string.
              </li>
            </ul>
          </li>
          <li>
            Initial Calculation:
            <ul>
              <li>
                Calculate the number of vowels in the first <code>k</code>{" "}
                characters and store it in <code>currentVowels</code>.
              </li>
              <li>
                Initialize <code>maxVowels</code> with{" "}
                <code>currentVowels</code>.
              </li>
            </ul>
          </li>
          <li>
            Sliding Window Logic:
            <ul>
              <li>
                Use a for loop to slide the window from the start to the end of
                the string.
              </li>
              <li>
                For each iteration:
                <ul>
                  <li>
                    Check if the new character entering the window is a vowel
                    and update <code>currentVowels</code> accordingly.
                  </li>
                  <li>
                    Check if the character leaving the window is a vowel and
                    update <code>currentVowels</code> accordingly.
                  </li>
                  <li>
                    Update <code>maxVowels</code> with the maximum value between
                    the current <code>currentVowels</code> and the existing{" "}
                    <code>maxVowels</code>.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Return:
            <ul>
              <li>
                Return the maximum number of vowels stored in{" "}
                <code>maxVowels</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>isVowel Method:</strong> This helper method checks if a given
        character is a vowel.
        <ul>
          <li>
            Parameters:
            <ul>
              <li>
                <code>c</code>: The character to check.
              </li>
            </ul>
          </li>
          <li>
            Return:
            <ul>
              <li>
                Returns <code>true</code> if the character is a vowel;
                otherwise, returns <code>false</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1477: (
    <ul>
      <li>
        <strong>minSumOfLengths Method:</strong> This method finds the minimum
        sum of lengths of two non-overlapping sub-arrays each with the target
        sum.
        <ul>
          <li>
            Parameters:
            <ul>
              <li>
                <code>arr</code>: The input array of integers.
              </li>
              <li>
                <code>target</code>: The target sum for the sub-arrays.
              </li>
            </ul>
          </li>
          <li>
            Initialization:
            <ul>
              <li>
                <code>n</code>: The length of the input array.
              </li>
              <li>
                <code>minLength</code>: An array to store the minimum length of
                sub-arrays with the target sum up to each index.
              </li>
              <li>
                <code>left</code>: The left pointer for the sliding window.
              </li>
              <li>
                <code>currSum</code>: The current sum of the sliding window.
              </li>
              <li>
                <code>minLen</code>: The minimum length of any sub-array found
                with the target sum.
              </li>
              <li>
                <code>result</code>: The result to store the minimum sum of
                lengths of two non-overlapping sub-arrays with the target sum.
              </li>
            </ul>
          </li>
          <li>
            Sliding Window Logic:
            <ul>
              <li>
                Use a for loop with the <code>right</code> pointer to slide the
                window from the start to the end of the array.
              </li>
              <li>
                Add the current element to <code>currSum</code>.
              </li>
              <li>
                While <code>currSum</code> is greater than the target, subtract
                the element at the <code>left</code> pointer and increment{" "}
                <code>left</code>.
              </li>
              <li>
                If <code>currSum</code> equals the target:
                <ul>
                  <li>Calculate the current length of the sub-array.</li>
                  <li>
                    If the left pointer is greater than 0 and{" "}
                    <code>minLength[left - 1]</code> is not{" "}
                    <code>Integer.MAX_VALUE</code>, update the result with the
                    minimum of the current result and the sum of the current
                    length and <code>minLength[left - 1]</code>.
                  </li>
                  <li>
                    Update <code>minLen</code> with the minimum of the current{" "}
                    <code>minLen</code> and the current length.
                  </li>
                </ul>
              </li>
              <li>
                Update <code>minLength[right]</code> with the current{" "}
                <code>minLen</code>.
              </li>
            </ul>
          </li>
          <li>
            Return:
            <ul>
              <li>
                Return <code>result</code> if it is not{" "}
                <code>Integer.MAX_VALUE</code>, otherwise return -1.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1493: (
    <ul>
      <li>
        <strong>longestSubarray Method:</strong> This method finds the longest
        subarray of 1s after deleting at most one element.
        <ul>
          <li>
            Parameters:
            <ul>
              <li>
                <code>nums</code>: The input array of integers containing 0s and
                1s.
              </li>
            </ul>
          </li>
          <li>
            Initialization:
            <ul>
              <li>
                <code>left</code>: The left pointer for the sliding window,
                initialized to 0.
              </li>
              <li>
                <code>zeroCount</code>: A counter to keep track of the number of
                zeros in the current window, initialized to 0.
              </li>
              <li>
                <code>maxLength</code>: The length of the longest subarray of 1s
                found so far, initialized to 0.
              </li>
            </ul>
          </li>
          <li>
            Sliding Window Logic:
            <ul>
              <li>
                Use a for loop with the <code>right</code> pointer to slide the
                window from the start to the end of the array.
              </li>
              <li>
                Check if the current element is 0:
                <ul>
                  <li>
                    If it is, increment <code>zeroCount</code>.
                  </li>
                </ul>
              </li>
              <li>
                While <code>zeroCount</code> is greater than 1:
                <ul>
                  <li>
                    Check if the element at the <code>left</code> pointer is 0:
                    <ul>
                      <li>
                        If it is, decrement <code>zeroCount</code>.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Increment the <code>left</code> pointer to shrink the window
                    from the left.
                  </li>
                </ul>
              </li>
              <li>
                Update <code>maxLength</code> with the maximum of the current{" "}
                <code>maxLength</code> and the current window size (calculated
                as <code>right - left</code>).
              </li>
            </ul>
          </li>
          <li>
            Return:
            <ul>
              <li>
                Return <code>maxLength</code> as the length of the longest
                subarray of 1s after deleting at most one element.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1610: (
    <ul>
      <li>
        <strong>visiblePoints Method:</strong> This method finds the maximum
        number of points that can be visible within a given viewing angle.
        <ul>
          <li>
            Parameters:
            <ul>
              <li>
                <code>points</code>: A list of lists, where each inner list
                contains the x and y coordinates of a point.
              </li>
              <li>
                <code>angle</code>: The viewing angle in degrees.
              </li>
              <li>
                <code>location</code>: A list containing the x and y coordinates
                of the observer's location.
              </li>
            </ul>
          </li>
          <li>
            Initialization:
            <ul>
              <li>
                <code>sameLocationCount</code>: A counter for points that are at
                the same location as the observer, initialized to 0.
              </li>
              <li>
                <code>angles</code>: A list to store the angles of the points
                relative to the observer's location.
              </li>
              <li>
                <code>x0, y0</code>: The x and y coordinates of the observer's
                location.
              </li>
            </ul>
          </li>
          <li>
            Convert Points to Angles:
            <ul>
              <li>
                Iterate through each point in <code>points</code>:
              </li>
              <li>
                If the point is at the same location as the observer, increment{" "}
                <code>sameLocationCount</code>.
              </li>
              <li>
                Otherwise, calculate the angle of the point relative to the
                observer using <code>Math.atan2</code> and convert it to
                degrees. Add this angle to <code>angles</code>.
              </li>
            </ul>
          </li>
          <li>
            Sort and Duplicate Angles:
            <ul>
              <li>
                Sort the <code>angles</code> list in ascending order.
              </li>
              <li>
                Duplicate the angles by adding each angle plus 360 degrees to
                the list. This helps handle the circular nature of angles.
              </li>
            </ul>
          </li>
          <li>
            Sliding Window Technique:
            <ul>
              <li>
                Initialize <code>maxVisible</code> to 0 and <code>left</code>{" "}
                pointer to 0.
              </li>
              <li>
                Iterate through the <code>angles</code> list with a{" "}
                <code>right</code> pointer:
              </li>
              <li>
                While the difference between the current angle and the angle at
                the <code>left</code> pointer is greater than <code>angle</code>
                , increment the <code>left</code> pointer.
              </li>
              <li>
                Update <code>maxVisible</code> to the maximum of its current
                value and the number of angles in the current window (calculated
                as <code>right - left + 1</code>).
              </li>
            </ul>
          </li>
          <li>
            Return:
            <ul>
              <li>
                Return the sum of <code>maxVisible</code> and{" "}
                <code>sameLocationCount</code> as the maximum number of visible
                points.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  1652: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Declare an array <code>result</code> to store decrypted values.
          </li>
          <li>
            Check if <code>k</code> is <code>0</code>; if true, return{" "}
            <code>result</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Decryption Process:</strong>
        <ul>
          <li>
            Loop through each index <code>i</code> of <code>code</code>.
          </li>
          <li>
            If <code>k</code> is positive, sum the next <code>k</code> elements
            using circular indexing.
          </li>
          <li>
            If <code>k</code> is negative, sum the previous <code>-k</code>{" "}
            elements using circular indexing.
          </li>
        </ul>
      </li>
      <li>
        <strong>Modulus Operation:</strong>
        <ul>
          <li>
            Use modulus <code>% n</code> to handle circular indexing, ensuring
            indices wrap around at the end of the array.
          </li>
        </ul>
      </li>
      <li>
        <strong>Result Compilation:</strong>
        <ul>
          <li>
            Store computed sums in <code>result</code> array at index{" "}
            <code>i</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Return the <code>result</code> array containing decrypted values.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1658: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>x = -x;</code>: Negates the value of <code>x</code> to
            simplify the problem into finding a subarray with sum <code>0</code>
            .
          </li>
          <li>
            Calculate the total sum of <code>nums</code> after adjusting for{" "}
            <code>x</code>.
          </li>
          <li>
            Initialize a HashMap to track cumulative sums encountered so far.
          </li>
        </ul>
      </li>
      <li>
        <strong>HashMap Setup:</strong>
        <ul>
          <li>
            Initialize a HashMap <code>vis</code> where keys are cumulative sums
            and values are their corresponding indices.
          </li>
          <li>
            <code>vis.put(0, -1);</code>: Initialize the HashMap with{" "}
            <code>0</code> mapped to <code>-1</code> to handle subarrays
            starting from index <code>0</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Iterate through <code>nums</code>:
        </strong>
        <ul>
          <li>
            Compute the cumulative sum <code>s</code> as you iterate through
            each element of <code>nums</code>.
          </li>
          <li>
            Update the HashMap to record the index of each cumulative sum if it
            hasn't been recorded before.
          </li>
        </ul>
      </li>
      <li>
        <strong>Check for Subarray Sum:</strong>
        <ul>
          <li>
            Within the iteration, check if <code>vis</code> contains{" "}
            <code>s - x</code>. If found, calculate the length of the subarray
            that sums up to <code>x</code>.
          </li>
          <li>
            Update <code>ans</code> with the minimum length of such subarray
            found.
          </li>
        </ul>
      </li>
      <li>
        <strong>Result:</strong>
        <ul>
          <li>
            After iterating through all elements, <code>ans</code> will contain
            the minimum length of a subarray with sum <code>x</code>.
          </li>
          <li>
            If no such subarray is found, return <code>-1</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1695: (
    <ul>
      <li>
        We are using a sliding window approach to find the maximum sum of a
        subarray containing only unique elements.
      </li>
      <li>
        <code>set</code>: This set is used to keep track of unique elements in
        the current window.
      </li>
      <li>
        <code>left</code> and <code>right</code>: These pointers denote the
        current window of elements in the array.
      </li>
      <li>
        <code>maxSum</code>: This variable keeps track of the maximum sum found
        so far.
      </li>
      <li>
        <code>currentSum</code>: This variable keeps track of the sum of
        elements in the current window.
      </li>
      <li>
        The sliding window expands by moving <code>right</code> pointer to the
        right, adding elements to <code>set</code> and <code>currentSum</code>.
      </li>
      <li>
        If a duplicate element is found (i.e., already in the <code>set</code>),
        move the <code>left</code> pointer to the right until the duplicate is
        removed from the <code>set</code> and subtract its value from{" "}
        <code>currentSum</code>.
      </li>
      <li>
        Update <code>maxSum</code> whenever <code>currentSum</code> exceeds it.
      </li>
      <li>
        Continue this process until the <code>right</code> pointer reaches the
        end of the array.
      </li>
    </ul>
  ),
  1703: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>n</code> is the length of the input array <code>nums</code>.
          </li>
          <li>
            Create a <code>prefixOnes</code> array to store cumulative counts of
            ones up to each index in <code>nums</code>.
          </li>
          <li>
            Calculate <code>totalOnes</code> as the sum of all elements in{" "}
            <code>prefixOnes</code>, which gives the total number of ones in{" "}
            <code>nums</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>
          Calculate <code>onesInWindow</code>:
        </strong>
        <ul>
          <li>
            Iterate through the array to compute the number of ones in every
            window of size <code>k</code> using the <code>prefixOnes</code>{" "}
            array.
          </li>
        </ul>
      </li>

      <li>
        <strong>Find Minimum Moves:</strong>
        <ul>
          <li>Iterate through potential starting positions of the window.</li>
          <li>
            For each position, calculate:
            <ul>
              <li>
                <code>onesOutsideWindow</code>: Ones outside the current window,
                derived from <code>prefixOnes</code>.
              </li>
              <li>
                <code>moves</code>: Number of moves required to group{" "}
                <code>k</code> consecutive ones starting at the current
                position.
              </li>
            </ul>
          </li>
          <li>
            Update <code>minMoves</code> with the minimum value found.
          </li>
        </ul>
      </li>

      <li>
        <strong>Output:</strong>
        <ul>
          <li>
            Print <code>minMoves</code>, which represents the minimum adjacent
            swaps required to group <code>k</code> consecutive ones.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1763: (
    <>
      {" "}
      <p>
        The following is a step-by-step explanation of the Java code to find the
        longest "nice" substring:
      </p>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>n</code> is the length of the input string <code>s</code>.
            </li>
            <li>
              <code>k</code> is initialized to <code>-1</code>, which stores the
              start index of the longest nice substring found.
            </li>
            <li>
              <code>max</code> is initialized to <code>0</code>, which stores
              the length of the longest nice substring found.
            </li>
          </ul>
        </li>

        <li>
          <strong>
            Main Loop (<code>i</code> loop):
          </strong>
          <ul>
            <li>
              Iterates through each starting index <code>i</code> of the
              substring.
            </li>
          </ul>
        </li>

        <li>
          <strong>
            Inner Loop (<code>j</code> loop):
          </strong>
          <ul>
            <li>
              Iterates through each ending index <code>j</code> of the substring
              starting from <code>i</code>.
            </li>
            <li>
              Creates a <code>HashSet</code> <code>set</code> to store
              characters encountered in the current substring{" "}
              <code>[i, j]</code>.
            </li>
          </ul>
        </li>

        <li>
          <strong>Checking "Nice" Condition:</strong>
          <ul>
            <li>
              For each character <code>a</code> in the set, calculates{" "}
              <code>b</code> as its toggle case using{" "}
              <code>(char) (a ^ 32)</code>.
            </li>
            <li>
              Checks if both <code>a</code> and <code>b</code> are present in
              the set. If not, sets <code>check</code> to <code>false</code> and
              breaks out of the loop.
            </li>
          </ul>
        </li>

        <li>
          <strong>Updating Maximum Length:</strong>
          <ul>
            <li>
              If the substring <code>[i, j]</code> is "nice" (<code>check</code>{" "}
              is <code>true</code>) and its length (<code>j - i + 1</code>) is
              greater than <code>max</code>, updates <code>max</code> and stores{" "}
              <code>i</code> in <code>k</code>.
            </li>
          </ul>
        </li>

        <li>
          <strong>Returning Result:</strong>
          <ul>
            <li>
              After iterating through all possible substrings, returns the
              substring starting at index <code>k</code> with length{" "}
              <code>max</code>. If <code>k</code> is still <code>-1</code>,
              returns an empty string indicating no nice substring was found.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1838: (
    <ul>
      <li>
        <strong>Sort the Array:</strong>
        <ul>
          <li>
            Start by sorting the input array <code>nums</code>. Sorting helps in
            efficiently managing and calculating frequencies within any window
            of size <code>k</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Initialize Variables:</strong>
        <ul>
          <li>
            <code>left</code>: Pointer for the left boundary of the sliding
            window.
          </li>
          <li>
            <code>right</code>: Pointer for the right boundary of the sliding
            window.
          </li>
          <li>
            <code>sum</code>: Current sum of elements in the sliding window.
          </li>
          <li>
            <code>maxFreq</code>: Maximum frequency of any element found after
            operations.
          </li>
        </ul>
      </li>

      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Use two pointers, <code>left</code> and <code>right</code>, to
            represent the current window of size <code>k</code>.
          </li>
          <li>
            Incrementally expand the window by moving <code>right</code> to the
            right.
          </li>
          <li>
            Calculate the sum of elements in the current window and adjust the
            window size as necessary.
          </li>
        </ul>
      </li>

      <li>
        <strong>Adjust Window:</strong>
        <ul>
          <li>
            Add <code>nums[right]</code> to the current window and update{" "}
            <code>sum</code>.
          </li>
          <li>
            Check if the cost to make all elements in the window equal to{" "}
            <code>nums[right]</code> is within the allowed operations{" "}
            <code>k</code>. If not, shrink the window from the left until it
            fits.
          </li>
        </ul>
      </li>

      <li>
        <strong>Update Maximum Frequency:</strong>
        <ul>
          <li>
            For each valid window (<code>right - left + 1</code>), calculate its
            size and update <code>maxFreq</code> if it's larger than the
            previously recorded maximum frequency.
          </li>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After processing all possible windows, <code>maxFreq</code> holds
            the maximum frequency of any element achievable with the allowed
            operations <code>k</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1839: (
    <>
      <p>Let's solve this using two pointers</p>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Initialize <code>ans</code> to 0 to store the length of the
              longest valid substring found.
            </li>
            <li>
              Initialize <code>count</code> to 1 to count the current sequence
              of increasing vowels.
            </li>
          </ul>
        </li>

        <li>
          <strong>Iterate Through the String:</strong>
          <ul>
            <li>
              Use two pointers, <code>l</code> (left) and <code>r</code>{" "}
              (right), to define the current window of characters.
            </li>
            <li>
              Start iterating from index 1 (<code>r = 1</code>) to the end of
              the string (<code>r &lt; word.length()</code>).
            </li>
          </ul>
        </li>

        <li>
          <strong>Check Current and Previous Characters:</strong>
          <ul>
            <li>
              Retrieve the current character (<code>curr</code>) at index{" "}
              <code>r</code> and the previous character (<code>prev</code>) at
              index <code>r - 1</code>.
            </li>
            <li>
              Compare <code>curr</code> with <code>prev</code> to determine if
              the characters are in increasing order or not.
            </li>
          </ul>
        </li>

        <li>
          <strong>Update Count and Length:</strong>
          <ul>
            <li>
              If <code>curr &gt;= prev</code>, increment the <code>count</code>{" "}
              to track the length of the current sequence of increasing vowels.
            </li>
            <li>
              If <code>curr &gt; prev</code>, it indicates a new vowel in
              sequence, so increment <code>count</code> and check if{" "}
              <code>count</code> reaches 5 (all vowels).
            </li>
            <li>
              If <code>count == 5</code>, update <code>ans</code> to the maximum
              of its current value or the length of the current valid substring
              (<code>r - l + 1</code>).
            </li>
          </ul>
        </li>

        <li>
          <strong>Reset Count and Left Pointer:</strong>
          <ul>
            <li>
              If <code>curr &lt; prev</code>, reset <code>count</code> to 1 and
              move the <code>l</code> pointer to <code>r</code> to start a new
              potential substring.
            </li>
          </ul>
        </li>

        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              After iterating through the string, <code>ans</code> holds the
              length of the longest substring where characters are in increasing
              order of vowels.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1852: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Create a <code>Map</code> <code>cnt</code> to count occurrences of
            elements in the current sliding window.
          </li>
          <li>
            Iterate through the first window of size <code>k</code> to populate{" "}
            <code>cnt</code> with initial counts.
          </li>
        </ul>
      </li>

      <li>
        <strong>Process Sliding Window:</strong>
        <ul>
          <li>
            Initialize an array <code>ans</code> to store results, where each
            index <code>i</code> represents the number of distinct elements in
            the window starting at <code>i</code>.
          </li>
          <li>
            Calculate <code>ans[0]</code> as the number of distinct elements in
            the first window.
          </li>
          <li>
            Iterate from index <code>k</code> to the end of the array to slide
            the window:
          </li>
          <ul>
            <li>
              Update <code>cnt</code> by adding the current element (
              <code>nums[i]</code>) and removing the element that slides out of
              the window (<code>nums[i - k]</code>).
            </li>
            <li>
              If the count of the element sliding out becomes 0, remove it from{" "}
              <code>cnt</code>.
            </li>
            <li>
              Store the count of distinct elements in{" "}
              <code>ans[i - k + 1]</code>.
            </li>
          </ul>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After processing all windows, <code>ans</code> contains the number
            of distinct elements in each sliding window of size <code>k</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1871: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize <code>count</code> to 0 to keep track of reachable
            indices within the current window.
          </li>
          <li>
            Create a boolean array <code>dp</code> of size{" "}
            <code>s.length()</code> to store reachability status of each index.
          </li>
          <li>
            Set <code>dp[0] = true</code> since starting from the first index is
            always reachable.
          </li>
        </ul>
      </li>

      <li>
        <strong>Iterate Through the String:</strong>
        <ul>
          <li>
            Loop through the string from index <code>minJump</code> to{" "}
            <code>s.length() - 1</code>:
          </li>
          <ul>
            <li>
              Update <code>count</code> by adding <code>1</code> if the index{" "}
              <code>i - minJump</code> is reachable (
              <code>dp[i - minJump]</code> is <code>true</code>).
            </li>
            <li>
              Adjust <code>count</code> by subtracting <code>1</code> if the
              index <code>i - maxJump - 1</code> is reachable, ensuring it only
              includes indices within the window{" "}
              <code>[i - maxJump, i - minJump]</code>.
            </li>
            <li>
              Set <code>dp[i]</code> to <code>true</code> if{" "}
              <code>count &gt; 0</code> (indicating there are reachable indices)
              and the current character <code>s.charAt(i)</code> is{" "}
              <code>'0'</code>.
            </li>
          </ul>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            Return <code>dp[s.length() - 1]</code>, which determines if the last
            index of <code>s</code> is reachable.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1876: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize <code>count</code> to 0 to keep track of the number of
            valid substrings found.
          </li>
          <li>
            Get the length of the input string <code>s</code> and store it in{" "}
            <code>n</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Iterate through the String:</strong>
        <ul>
          <li>
            Use a <code>for</code> loop to iterate through <code>s</code> from
            index <code>0</code> to <code>n - 3</code>.
          </li>
          <li>
            At each index <code>i</code>, check if the substring{" "}
            <code>s.substring(i, i + 3)</code> has all distinct characters:
          </li>
          <ul>
            <li>
              Compare characters at positions <code>i</code>, <code>i + 1</code>
              , and <code>i + 2</code>.
            </li>
            <li>
              Increment <code>count</code> if all three characters are distinct.
            </li>
          </ul>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After looping through all possible substrings of size three, return
            the final value of <code>count</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1888: (
    <ul>
      <li>
        <strong>Generate Alternating Patterns:</strong>
        <ul>
          <li>
            Create two patterns:
            <ul>
              <li>
                <code>pattern1</code> starting with <code>0</code> (e.g.,{" "}
                <code>010101...</code>).
              </li>
              <li>
                <code>pattern2</code> starting with <code>1</code> (e.g.,{" "}
                <code>101010...</code>).
              </li>
            </ul>
          </li>
          <li>
            Ensure each pattern is at least twice the length of the input string{" "}
            <code>s</code> to handle the circular nature of the problem.
          </li>
        </ul>
      </li>

      <li>
        <strong>Double the Input String:</strong>
        <ul>
          <li>
            Concatenate the input string <code>s</code> with itself to create a
            new string <code>s + s</code>. This helps in managing the circular
            nature of the string using a sliding window approach.
          </li>
        </ul>
      </li>

      <li>
        <strong>Sliding Window:</strong>
        <ul>
          <li>
            Use a sliding window of the same length as the original input string{" "}
            <code>s</code> to compare segments of the doubled string with the
            generated patterns.
          </li>
          <li>
            Initialize <code>minFlips</code> to track the minimum number of
            flips needed.
          </li>
          <li>
            For each window position, count the number of flips needed to match
            the current segment with <code>pattern1</code> and{" "}
            <code>pattern2</code>:
            <ul>
              <li>
                Initialize <code>flips1</code> and <code>flips2</code> to count
                flips needed for each pattern.
              </li>
              <li>
                Iterate through the current window segment and compare with the
                corresponding characters in both patterns.
              </li>
              <li>
                Update <code>flips1</code> and <code>flips2</code> based on
                mismatches.
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <strong>Determine Minimum Flips:</strong>
        <ul>
          <li>
            Update <code>minFlips</code> to the minimum value between the flips
            needed for both patterns in each window position.
          </li>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After sliding through the entire string, return the final value of{" "}
            <code>minFlips</code> which represents the minimum number of flips
            required to make the binary string alternating.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1918: (
    <>
      {" "}
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Initialize <code>min</code> to <code>Integer.MAX_VALUE</code> to
              find the smallest element in the array.
            </li>
            <li>
              Initialize <code>sum</code> to <code>0</code> to find the total
              sum of the array elements.
            </li>
            <li>
              Loop through each element <code>num</code> in <code>nums</code> to
              update <code>min</code> and <code>sum</code>:
              <ul>
                <li>
                  Set <code>min</code> to the minimum value between{" "}
                  <code>min</code> and <code>num</code>.
                </li>
                <li>
                  Add <code>num</code> to <code>sum</code>.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Binary Search for k-th Smallest Sum:</strong>
          <ul>
            <li>
              Initialize <code>low</code> to <code>min</code> and{" "}
              <code>high</code> to <code>sum</code>.
            </li>
            <li>
              While <code>low</code> is less than <code>high</code>:
              <ul>
                <li>
                  Calculate <code>mid</code> as the average of <code>low</code>{" "}
                  and <code>high</code>.
                </li>
                <li>
                  Call <code>countSubarrays(nums, mid)</code> to count the
                  number of subarrays with sums less than or equal to{" "}
                  <code>mid</code>.
                </li>
                <li>
                  If the count is less than <code>k</code>, set <code>low</code>{" "}
                  to <code>mid + 1</code>.
                </li>
                <li>
                  Otherwise, set <code>high</code> to <code>mid</code>.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              After the binary search completes, return <code>low</code>, which
              will be the <code>k</code>-th smallest subarray sum.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Helper Function: countSubarrays</h3>
      <ul>
        <li>
          <strong>Initialize Variables:</strong>
          <ul>
            <li>
              Initialize <code>count</code> to <code>0</code> to count the
              number of valid subarrays.
            </li>
            <li>
              Initialize <code>sum</code> to <code>0</code> to keep the sum of
              the current subarray.
            </li>
            <li>
              Initialize <code>left</code> and <code>right</code> pointers to{" "}
              <code>0</code>.
            </li>
          </ul>
        </li>

        <li>
          <strong>Sliding Window:</strong>
          <ul>
            <li>
              While <code>right</code> is less than the length of{" "}
              <code>nums</code>:
              <ul>
                <li>
                  Add <code>nums[right]</code> to <code>sum</code>.
                </li>
                <li>
                  While <code>sum</code> is greater than <code>threshold</code>:
                  <ul>
                    <li>
                      Subtract <code>nums[left]</code> from <code>sum</code>.
                    </li>
                    <li>
                      Increment <code>left</code> pointer.
                    </li>
                  </ul>
                </li>
                <li>
                  Add <code>right - left + 1</code> to <code>count</code>{" "}
                  (number of subarrays ending at <code>right</code>).
                </li>
                <li>
                  Increment <code>right</code> pointer.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              Return <code>count</code> which represents the number of subarrays
              with sums less than or equal to <code>threshold</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1984: (
    <ul>
      <li>
        <strong>Sort the Array:</strong>
        <ul>
          <li>
            Sort the array <code>nums</code> to facilitate the sliding window
            approach.
          </li>
        </ul>
      </li>

      <li>
        <strong>Initialize Minimum Difference:</strong>
        <ul>
          <li>
            Initialize <code>minDiff</code> to <code>Integer.MAX_VALUE</code> to
            keep track of the minimum difference found.
          </li>
        </ul>
      </li>

      <li>
        <strong>Sliding Window:</strong>
        <ul>
          <li>
            Use a sliding window of size <code>k</code> to find the minimum
            difference:
            <ul>
              <li>
                Iterate through the sorted array from index <code>0</code> to{" "}
                <code>nums.length - k</code>.
              </li>
              <li>
                Calculate the difference between the <code>i + k - 1</code>{" "}
                element and the <code>i</code> element in the current window.
              </li>
              <li>
                Update <code>minDiff</code> with the minimum value between{" "}
                <code>minDiff</code> and the calculated difference.
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            Return <code>minDiff</code> which represents the minimum difference
            between the highest and lowest scores in any <code>k</code>-length
            subarray.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2009: (
    <ul>
      <li>
        <strong>Sort and Remove Duplicates:</strong>
        <ul>
          <li>
            Create a <code>Set</code> to store unique elements from the array{" "}
            <code>nums</code>.
          </li>
          <li>
            Convert the <code>Set</code> back to an array{" "}
            <code>uniqueNums</code> and sort it.
          </li>
        </ul>
      </li>

      <li>
        <strong>Sliding Window:</strong>
        <ul>
          <li>
            Use a sliding window to find the longest subarray of consecutive
            elements in the sorted <code>uniqueNums</code> array.
          </li>
          <li>
            Initialize <code>maxLength</code> to keep track of the length of the
            longest subarray found.
          </li>
          <li>
            Use two pointers, <code>left</code> and <code>right</code>, to
            define the window.
          </li>
          <li>
            Move the <code>right</code> pointer to expand the window, and move
            the <code>left</code> pointer to maintain the consecutive condition.
          </li>
        </ul>
      </li>

      <li>
        <strong>Calculate Minimum Operations:</strong>
        <ul>
          <li>
            The minimum number of operations required is the difference between
            the length of the original array <code>nums</code> and{" "}
            <code>maxLength</code> (the length of the longest subarray of
            consecutive elements).
          </li>
        </ul>
      </li>
    </ul>
  ),
  2024: (
    <ul>
      <li>
        <strong>Main Function: maxConsecutiveAnswers</strong>
        <ul>
          <li>
            Calls the helper function <code>maxConsecutiveChar</code> twice,
            once for 'T' and once for 'F'.
          </li>
          <li>
            Returns the maximum value between the two calls, which represents
            the longest contiguous subarray of 'T' or 'F' with at most{" "}
            <code>k</code> flips.
          </li>
        </ul>
      </li>

      <li>
        <strong>Helper Function: maxConsecutiveChar</strong>
        <ul>
          <li>
            Initializes <code>maxLen</code> to keep track of the maximum length
            of the subarray.
          </li>
          <li>
            Uses two pointers, <code>left</code> and <code>right</code>, to
            define the sliding window.
          </li>
          <li>
            Initializes <code>flipCount</code> to count the number of flips used
            within the window.
          </li>
          <li>
            Iterates through the string using the <code>right</code> pointer:
            <ul>
              <li>
                If the character at <code>right</code> is not equal to{" "}
                <code>ch</code>, increments <code>flipCount</code>.
              </li>
              <li>
                While <code>flipCount</code> exceeds <code>k</code>, increments
                the <code>left</code> pointer and adjusts <code>flipCount</code>{" "}
                accordingly.
              </li>
              <li>
                Updates <code>maxLen</code> with the maximum value between{" "}
                <code>maxLen</code> and the current window size (
                <code>right - left + 1</code>).
              </li>
            </ul>
          </li>
          <li>
            Returns <code>maxLen</code>, which represents the length of the
            longest contiguous subarray with at most <code>k</code> flips.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2090: (
    <ul>
      <li>
        <strong>Initialize Result Array:</strong>
        <ul>
          <li>
            Create an array <code>result</code> of the same length as{" "}
            <code>nums</code> and fill it with <code>-1</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Check Window Size:</strong>
        <ul>
          <li>
            If the window size <code>2k + 1</code> is larger than the array
            length <code>n</code>, return the result array with all{" "}
            <code>-1</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Calculate Initial Window Sum:</strong>
        <ul>
          <li>
            Calculate the sum of the first window of size <code>2k + 1</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Calculate Initial Average:</strong>
        <ul>
          <li>
            Calculate the average for the first valid window and store it in{" "}
            <code>result[k]</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Slide the Window:</strong>
        <ul>
          <li>
            Slide the window across the array from index <code>k + 1</code> to{" "}
            <code>n - k - 1</code>.
          </li>
          <li>
            For each new position, update the window sum by subtracting the
            element that is sliding out of the window and adding the new element
            that is sliding into the window.
          </li>
          <li>
            Calculate the average for the current window and store it in{" "}
            <code>result[i]</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            Return the <code>result</code> array containing the k-radius
            subarray averages.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2106: (
    <>
      {" "}
      <ul>
        <li>
          <strong>Initialize Variables:</strong>
          <ul>
            <li>
              <code>maxRight</code>: Calculate the furthest position to the
              right we need to consider, which is the maximum of{" "}
              <code>startPos</code> and the furthest fruit position.
            </li>
            <li>
              <code>amounts</code>: An array to store the number of fruits at
              each position.
            </li>
            <li>
              <code>prefix</code>: An array to store the prefix sums of the{" "}
              <code>amounts</code> array.
            </li>
          </ul>
        </li>

        <li>
          <strong>Populate Amounts Array:</strong>
          <ul>
            <li>
              Iterate through the <code>fruits</code> array and fill the{" "}
              <code>amounts</code> array with the number of fruits at each
              position.
            </li>
          </ul>
        </li>

        <li>
          <strong>Calculate Prefix Sum:</strong>
          <ul>
            <li>
              Iterate through the <code>amounts</code> array to fill the{" "}
              <code>prefix</code> array with cumulative sums of fruits up to
              each position.
            </li>
          </ul>
        </li>

        <li>
          <strong>Calculate Maximum Fruits Going Right First:</strong>
          <ul>
            <li>
              Determine the maximum steps to the right we can take, constrained
              by <code>k</code> and <code>maxRight</code>.
            </li>
            <li>
              For each possible number of right steps, calculate the
              corresponding left steps we can take within the remaining steps{" "}
              <code>k</code>.
            </li>
            <li>
              Use the <code>getFruits</code> method to calculate the total
              fruits collected for each possible combination of left and right
              steps.
            </li>
            <li>
              Update <code>ans</code> if the current calculation yields more
              fruits than previously recorded.
            </li>
          </ul>
        </li>

        <li>
          <strong>Calculate Maximum Fruits Going Left First:</strong>
          <ul>
            <li>
              Determine the maximum steps to the left we can take, constrained
              by <code>k</code> and <code>startPos</code>.
            </li>
            <li>
              For each possible number of left steps, calculate the
              corresponding right steps we can take within the remaining steps{" "}
              <code>k</code>.
            </li>
            <li>
              Use the <code>getFruits</code> method to calculate the total
              fruits collected for each possible combination of left and right
              steps.
            </li>
            <li>
              Update <code>ans</code> if the current calculation yields more
              fruits than previously recorded.
            </li>
          </ul>
        </li>

        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              Return the maximum number of fruits collected within{" "}
              <code>k</code> steps.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Helper Method: getFruits</h3>
      <ul>
        <li>
          <strong>Inputs:</strong>
          <ul>
            <li>
              <code>startPos</code>: The starting position.
            </li>
            <li>
              <code>maxRight</code>: The furthest position to the right to
              consider.
            </li>
            <li>
              <code>leftSteps</code>: Number of steps to move left.
            </li>
            <li>
              <code>rightSteps</code>: Number of steps to move right.
            </li>
            <li>
              <code>prefix</code>: The prefix sum array.
            </li>
          </ul>
        </li>

        <li>
          <strong>Calculate Boundaries:</strong>
          <ul>
            <li>
              <code>l</code>: The left boundary, ensuring it is not less than
              zero.
            </li>
            <li>
              <code>r</code>: The right boundary, ensuring it does not exceed{" "}
              <code>maxRight</code>.
            </li>
          </ul>
        </li>

        <li>
          <strong>Calculate Fruits:</strong>
          <ul>
            <li>
              Return the difference between <code>prefix[r + 1]</code> and{" "}
              <code>prefix[l]</code> to get the total fruits collected in the
              range from <code>l</code> to <code>r</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  2107: (
    <ul>
      <li>
        <strong>Initialize Variables:</strong>
        <ul>
          <li>
            <code>count</code>: A map to keep track of the count of each candy
            type in the current window.
          </li>
          <li>
            <code>n</code>: The length of the <code>candies</code> array.
          </li>
        </ul>
      </li>

      <li>
        <strong>Initialize the Sliding Window:</strong>
        <ul>
          <li>
            Iterate through the array from index <code>k</code> to{" "}
            <code>n-1</code> to populate the initial window with candy counts.
          </li>
          <li>
            Use <code>count.merge(candies[i], 1, Integer::sum)</code> to add or
            update the count of each candy type.
          </li>
        </ul>
      </li>

      <li>
        <strong>Track Maximum Distinct Candies:</strong>
        <ul>
          <li>
            Initialize <code>ans</code> to store the size of the initial window,
            which represents the number of distinct candies.
          </li>
        </ul>
      </li>

      <li>
        <strong>Slide the Window:</strong>
        <ul>
          <li>
            For each index from <code>k</code> to{" "}
            <code>candies.length - 1</code>, update the window by removing the
            candy type that slides out and adding the candy type that slides in.
          </li>
          <li>
            If the count of a candy type becomes zero after removing, remove it
            from the map using <code>count.remove(candies[i])</code>.
          </li>
          <li>
            Update the count of the candy type that slides in using{" "}
            <code>count.merge(candies[i - k], 1, Integer::sum)</code>.
          </li>
          <li>
            Update <code>ans</code> with the maximum size of the window (number
            of distinct candies) after each slide.
          </li>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            Return the maximum number of distinct candies found during the
            sliding window process.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2134: (
    <ul>
      <li>
        <strong>Calculate Total Ones:</strong>
        <ul>
          <li>
            Compute <code>totalOnes</code> as the sum of all 1's in the array.
          </li>
        </ul>
      </li>

      <li>
        <strong>Initialize Sliding Window:</strong>
        <ul>
          <li>
            Set <code>windowSize</code> to <code>totalOnes</code> since that's
            the size of the contiguous segment of 1's we want to achieve.
          </li>
          <li>
            Initialize <code>currentZeros</code> to count zeros within the first
            window of size <code>windowSize</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Track Minimum Zeros:</strong>
        <ul>
          <li>
            Update <code>minZeros</code> to the number of zeros found in the
            first window.
          </li>
          <li>Slide the window across the array:</li>
          <li>
            - Add zeros entering the window and subtract zeros leaving the
            window.
          </li>
          <li>
            - Update <code>minZeros</code> to track the minimum number of zeros
            found in any window of size <code>windowSize</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Calculate Result:</strong>
        <ul>
          <li>
            The minimum number of swaps needed is{" "}
            <code>totalOnes - minZeros</code>, as it represents the minimum
            flips required to turn all zeros in the best window into ones.
          </li>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>Return the computed minimum number of swaps.</li>
        </ul>
      </li>
    </ul>
  ),
  2156: (
    <ul>
      <li>
        <strong>Initialize Parameters:</strong>
        <ul>
          <li>
            <code>n</code>: Length of the input string <code>s</code>.
          </li>
          <li>
            <code>targetHash</code>: The hash value we want to find in the
            string.
          </li>
          <li>
            <code>base</code>: Base for the rolling hash calculation.
          </li>
          <li>
            <code>modulus</code>: Prime modulus to prevent overflow in hash
            calculations.
          </li>
          <li>
            <code>baseL</code>: Precompute <code>base^L % modulus</code> for
            efficient rolling hash updates.
          </li>
        </ul>
      </li>

      <li>
        <strong>Compute Initial Hash Value:</strong>
        <ul>
          <li>
            Calculate the initial hash value for the first window of length{" "}
            <code>L</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Sliding Window to Find Matching Substring:</strong>
        <ul>
          <li>
            Slide the window across the string to compute hash values for
            successive substrings.
          </li>
          <li>
            Update the hash using the rolling hash technique for each new
            window.
          </li>
          <li>
            Compare the computed hash value with <code>targetHash</code>.
          </li>
          <li>
            If they match, check if the substring itself matches to handle hash
            collisions.
          </li>
          <li>Return the substring if found.</li>
        </ul>
      </li>

      <li>
        <strong>Edge Cases:</strong>
        <ul>
          <li>
            Handle cases where the input string is shorter than the target
            substring length <code>L</code>.
          </li>
          <li>Return an empty string if no matching substring is found.</li>
        </ul>
      </li>
    </ul>
  ),
  2260: (
    <ul>
      <li>
        <strong>Initialize Variables:</strong>
        <ul>
          <li>
            <code>ans</code>: Initialized to <code>Integer.MAX_VALUE</code> to
            store the minimum number of consecutive cards to pick up.
          </li>
          <li>
            <code>seen</code>: A <code>HashMap</code> to store the last seen
            index of each card value.
          </li>
        </ul>
      </li>

      <li>
        <strong>Iterate through the Array:</strong>
        <ul>
          <li>
            Loop through each card in the <code>cards</code> array using index{" "}
            <code>i</code>.
          </li>
          <li>
            Check if <code>cards[i]</code> has been seen before:
            <ul>
              <li>
                If yes, calculate the length of the current sequence (
                <code>i - seen.get(cards[i]) + 1</code>).
              </li>
              <li>
                Update <code>ans</code> to store the minimum of its current
                value and the calculated sequence length.
              </li>
            </ul>
          </li>
          <li>
            Update the <code>seen</code> map with the current card's index (
            <code>seen.put(cards[i], i)</code>).
          </li>
        </ul>
      </li>

      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After iterating through all cards, check if <code>ans</code> is
            still <code>Integer.MAX_VALUE</code>.
          </li>
          <li>
            If yes, return <code>-1</code> indicating no valid sequence was
            found.
          </li>
          <li>
            Otherwise, return <code>ans</code> as the minimum number of
            consecutive cards to pick up.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2269: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Convert the integer <code>num</code> to its string representation{" "}
            <code>s</code> using <code>String.valueOf(num)</code>.
          </li>
          <li>
            Initialize <code>ans</code> to <code>0</code> to store the count of
            valid substrings.
          </li>
        </ul>
      </li>

      <li>
        <strong>Iterate through Substrings:</strong>
        <ul>
          <li>
            Use a for loop to iterate through possible starting indices{" "}
            <code>i</code> of substrings of length <code>k</code>.
          </li>
          <li>
            Ensure the loop condition <code>i + k &lt;= s.length()</code> to
            stay within the bounds of the string.
          </li>
        </ul>
      </li>

      <li>
        <strong>Extract and Validate Substrings:</strong>
        <ul>
          <li>
            Inside the loop, extract the substring of length <code>k</code>{" "}
            starting at index <code>i</code> using{" "}
            <code>s.substring(i, i + k)</code>.
          </li>
          <li>
            Convert this substring to an integer <code>x</code> using{" "}
            <code>Integer.parseInt()</code>.
          </li>
          <li>
            Check if <code>x != 0</code> and <code>num % x == 0</code> to
            determine if <code>x</code> is a valid divisor of <code>num</code>.
          </li>
          <li>
            If both conditions are true, increment <code>ans</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Return the Result:</strong>
        <ul>
          <li>
            After the loop completes, <code>ans</code> will contain the count of
            valid substrings that are divisors of <code>num</code>.
          </li>
          <li>
            Return <code>ans</code> as the result of the function.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2302: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize <code>ans</code> to <code>0</code> to store the total
            count of valid subarrays.
          </li>
          <li>
            Initialize <code>sum</code> to <code>0</code> to keep track of the
            current sum of elements in the sliding window.
          </li>
        </ul>
      </li>

      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Use two pointers, <code>left</code> and <code>right</code>, to
            represent the current subarray.
          </li>
          <li>
            Expand the <code>right</code> pointer to include more elements in
            the current subarray (<code>right</code> loop).
          </li>
          <li>
            Add <code>nums[right]</code> to <code>sum</code> to expand the
            window's sum.
          </li>
        </ul>
      </li>

      <li>
        <strong>Adjust Window:</strong>
        <ul>
          <li>
            Use a while loop to adjust the <code>left</code> pointer whenever
            the sum of the current window (<code>sum</code>) multiplied by the
            number of elements in the window (<code>right - left + 1</code>) is
            greater than or equal to <code>k</code>.
          </li>
          <li>
            This condition ensures that if the product{" "}
            <code>sum * (right - left + 1)</code> is greater than or equal to{" "}
            <code>k</code>, the window sum needs adjustment by moving{" "}
            <code>left</code> to the right.
          </li>
        </ul>
      </li>

      <li>
        <strong>Count Valid Subarrays:</strong>
        <ul>
          <li>
            For each valid subarray ending at <code>right</code>, add{" "}
            <code>right - left + 1</code> to <code>ans</code>.
          </li>
          <li>
            This adds the count of subarrays ending at <code>right</code> that
            satisfy the condition <code>sum &lt; k</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            After iterating through all elements in the array using the{" "}
            <code>right</code> pointer, <code>ans</code> contains the total
            count of valid subarrays whose sum is less than <code>k</code>.
            Return <code>ans</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2379: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize <code>countB</code> to 0 to keep track of the current
            number of 'B' blocks in the sliding window.
          </li>
          <li>
            Initialize <code>maxCountB</code> to 0 to store the maximum count of
            'B' blocks found in any valid window of size <code>k</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Iterate through the string <code>blocks</code> using a sliding
            window of size <code>k</code>.
          </li>
          <li>
            Update <code>countB</code> as you slide the window:
            <ul>
              <li>
                Increment <code>countB</code> when adding a new 'B' block (
                <code>blocks.charAt(i) == 'B'</code>).
              </li>
              <li>
                Decrement <code>countB</code> when removing an old 'B' block (
                <code>blocks.charAt(i - k) == 'B'</code>).
              </li>
            </ul>
          </li>
          <li>
            Update <code>maxCountB</code> to track the maximum{" "}
            <code>countB</code> observed during the iteration.
          </li>
        </ul>
      </li>

      <li>
        <strong>Calculate Result:</strong>
        <ul>
          <li>
            The minimum number of recolors required to achieve <code>k</code>{" "}
            consecutive 'B' blocks is calculated as <code>k - maxCountB</code>.
          </li>
          <li>
            This calculation is based on the fact that you need to change{" "}
            <code>(k - maxCountB)</code> blocks to 'B' to ensure there are at
            least <code>k</code> consecutive 'B' blocks.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2398: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>sum</code>: Total cost accumulated as robots are added.
          </li>
          <li>
            <code>i</code>: Starting index of the current window of robots being
            considered.
          </li>
          <li>
            <code>n</code>: Length of the <code>times</code> array.
          </li>
          <li>
            <code>deque</code>: Deque used to manage indices of robots being
            considered.
          </li>
        </ul>
      </li>

      <li>
        <strong>Iterating through Robots:</strong>
        <ul>
          <li>
            Loop through each robot indexed by <code>j</code> from 0 to{" "}
            <code>n-1</code>.
          </li>
          <li>
            Add the cost of the current robot to <code>sum</code>.
          </li>
          <li>
            Maintain a decreasing deque to ensure indices of robots are sorted
            by their build times.
          </li>
          <li>
            Adjust the deque to maintain the order based on the build times.
          </li>
        </ul>
      </li>

      <li>
        <strong>Checking Budget Constraints:</strong>
        <ul>
          <li>
            After adding each robot, check if adding one more robot with their
            cumulative cost exceeds the given budget.
          </li>
          <li>
            If it exceeds, remove robots from the front of the deque, reduce{" "}
            <code>sum</code> accordingly, and adjust <code>i</code>.
          </li>
        </ul>
      </li>

      <li>
        <strong>Result Calculation:</strong>
        <ul>
          <li>
            Calculate the maximum number of robots that can be purchased within
            the budget as <code>n - i</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2401: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>ans</code>: Initialized to 0 to store the maximum length of
            "nice" subarray found.
          </li>
          <li>
            <code>used</code>: Initialized to 0 to keep track of currently
            "used" characters in the current window.
          </li>
        </ul>
      </li>

      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            <strong>
              Outer Loop (<code>for</code> loop):
            </strong>
            <ul>
              <li>
                Initializes two pointers, <code>left</code> and{" "}
                <code>right</code>, defining the current window [
                <code>left</code>, <code>right</code>].
              </li>
            </ul>
          </li>

          <li>
            <strong>
              Inner Loop (<code>while</code> loop):
            </strong>
            <ul>
              <li>
                Ensures that the current window [<code>left</code>,{" "}
                <code>right</code>] is "nice", meaning all elements in this
                window are either all uppercase or all lowercase (represented by
                bits set in <code>used</code>).
              </li>
              <li>
                Continues to increment <code>left</code> until the element at{" "}
                <code>nums[right]</code> can be added to <code>used</code>{" "}
                without violating the "nice" condition.
              </li>
            </ul>
          </li>

          <li>
            <strong>
              Updating <code>used</code>:
            </strong>
            <ul>
              <li>
                Once the inner loop finishes and the window [<code>left</code>,{" "}
                <code>right</code>] is "nice", updates <code>used</code> by
                adding <code>nums[right]</code> to it (
                <code>used |= nums[right]</code>).
              </li>
            </ul>
          </li>

          <li>
            <strong>Calculating Maximum Length:</strong>
            <ul>
              <li>
                Updates <code>ans</code> to be the maximum of its current value
                and the length of the current "nice" subarray (
                <code>right - left + 1</code>).
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            After iterating through all possible windows of the array{" "}
            <code>nums</code>, <code>ans</code> will contain the length of the
            longest "nice" subarray found, which is then returned.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2411: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>kMaxBit</code>: Maximum number of bits to consider (typically
            30 for a 32-bit integer).
          </li>
          <li>
            <code>ans</code>: Array to store the lengths of smallest subarrays.
          </li>
          <li>
            <code>closest</code>: Array to store closest indices of each bit set
            to 1 in the current window.
          </li>
        </ul>
      </li>

      <li>
        <strong>
          Fill <code>ans</code> Array:
        </strong>
        <ul>
          <li>
            Initialize <code>ans</code> array with all elements set to 1, as the
            minimum subarray length is 1.
          </li>
        </ul>
      </li>

      <li>
        <strong>
          Iterate Backwards through <code>nums</code>:
        </strong>
        <ul>
          <li>
            <strong>
              Outer Loop (<code>for</code> loop):
            </strong>
            <ul>
              <li>
                Starts from the end of <code>nums</code> array and moves
                backwards to index 0.
              </li>
            </ul>
          </li>

          <li>
            <strong>
              Inner Loop (<code>for</code> loop for <code>kMaxBit</code>):
            </strong>
            <ul>
              <li>
                Iterates through each bit position from 0 to{" "}
                <code>kMaxBit - 1</code>.
              </li>
              <li>
                Checks if the bit at current position (<code>j</code>) in{" "}
                <code>nums[i]</code> is set to 1 using{" "}
                <code>(nums[i] &gt;&gt; j & 1) == 1</code>.
              </li>
              <li>
                Updates <code>closest[j]</code> to the current index{" "}
                <code>i</code> if the condition is true.
              </li>
              <li>
                Calculates the maximum length of subarray ending at index{" "}
                <code>i</code> with maximum bitwise OR using{" "}
                <code>ans[i] = Math.max(ans[i], closest[j] - i + 1)</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Returns the <code>ans</code> array containing lengths of the
            smallest subarrays ending at each index, ensuring maximum bitwise
            OR.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2516: (
    <ul>
      <li>
        Initialize variables:
        <ul>
          <li>
            <code>final int n = s.length();</code> - The length of the string.
          </li>
          <li>
            <code>int ans = n;</code> - To store the minimum length of the
            substring that can be removed to achieve the condition.
          </li>
          <li>
            <code>int[] count = new int[3];</code> - An array to count the
            frequency of 'a', 'b', and 'c' in the string.
          </li>
        </ul>
      </li>
      <li>
        Count the frequency of each character in the string:
        <ul>
          <li>
            Iterate through the string and increment the count of each
            character.
          </li>
          <li>
            <code>for (final char c : s.toCharArray()) ++count[c - 'a'];</code>
          </li>
        </ul>
      </li>
      <li>
        Check if it's possible to take <code>k</code> characters of each type:
        <ul>
          <li>
            If any character's frequency is less than <code>k</code>, return -1
            as it's not possible.
          </li>
          <li>
            <code>
              if (count[0] &lt; k || count[1] &lt; k || count[2] &lt; k) return
              -1;
            </code>
          </li>
        </ul>
      </li>
      <li>
        Sliding window approach to find the minimum length of substring:
        <ul>
          <li>
            Use two pointers <code>left</code> and <code>right</code> to define
            the window.
          </li>
          <li>
            Iterate through the string with the <code>right</code> pointer:
          </li>
          <ul>
            <li>
              Decrement the count of the character at the <code>right</code>{" "}
              pointer.
            </li>
            <li>
              While the count of the character at the <code>right</code> pointer
              is less than <code>k</code>:
              <ul>
                <li>
                  Increment the count of the character at the <code>left</code>{" "}
                  pointer and move the <code>left</code> pointer to the right.
                </li>
              </ul>
            </li>
            <li>
              Update <code>ans</code> with the minimum of the current{" "}
              <code>ans</code> and the length of the remaining substring.
            </li>
            <li>
              <code>ans = Math.min(ans, n - (right - left + 1));</code>
            </li>
          </ul>
        </ul>
      </li>
      <li>
        Return <code>ans</code> which holds the minimum length of the substring
        that can be removed to achieve the condition.
      </li>
    </ul>
  ),
  2524: (
    <>
      {" "}
      <h2>
        Code Explanation for <code>maxFrequencyScore</code> Method
      </h2>
      <ul>
        <li>
          Initialize constants and data structures:
          <ul>
            <li>
              <code>final int mod = (int) 1e9 + 7;</code> - Modulo value for
              calculations to avoid overflow.
            </li>
            <li>
              <code>
                Map&lt;Integer, Integer&gt; count = new HashMap&lt;&gt;();
              </code>{" "}
              - Frequency map to store counts of elements in the current window.
            </li>
          </ul>
        </li>
        <li>
          Initialize frequency map for the first window:
          <ul>
            <li>
              Iterate through the first <code>k</code> elements and populate the
              frequency map.
            </li>
          </ul>
        </li>
        <li>
          Calculate the initial frequency score for the first window:
          <ul>
            <li>
              Use the <code>qmi</code> method to compute the frequency score for
              each element and accumulate it.
            </li>
          </ul>
        </li>
        <li>
          Slide the window through the array:
          <ul>
            <li>
              For each new element in the window (from <code>k</code> to the end
              of the array), update the frequency map and current score.
            </li>
            <li>
              If the element leaving the window is different from the new
              element entering the window:
              <ul>
                <li>
                  Update the current score by removing the effect of the leaving
                  element and adding the effect of the new element.
                </li>
                <li>Update the frequency map accordingly.</li>
                <li>
                  Update the maximum score if the current score is greater.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Return the maximum frequency score:
          <ul>
            <li>
              <code>return (int) ans;</code>
            </li>
          </ul>
        </li>
      </ul>
      <h2>
        Code Explanation for <code>qmi</code> Method
      </h2>
      <ul>
        <li>
          The <code>qmi</code> method is used to compute <code>a^k % p</code>{" "}
          using the method of exponentiation by squaring:
          <ul>
            <li>
              Initialize <code>res</code> to 1.
            </li>
            <li>
              While <code>k</code> is not zero:
              <ul>
                <li>
                  If the current bit of <code>k</code> is set, multiply{" "}
                  <code>res</code> by <code>a</code> modulo <code>p</code>.
                </li>
                <li>
                  Right shift <code>k</code> by 1 bit.
                </li>
                <li>
                  Square <code>a</code> modulo <code>p</code>.
                </li>
              </ul>
            </li>
            <li>
              Return the result <code>res</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  2528: (
    <ul>
      <li>
        Initialize Variables:
        <ul>
          <li>
            <code>long left = Arrays.stream(stations).min().getAsInt();</code> -
            Initialize the minimum possible initial power.
          </li>
          <li>
            <code>
              long right = Arrays.stream(stations).asLongStream().sum() + k + 1;
            </code>{" "}
            - Initialize the maximum possible initial power, considering the sum
            of all station powers and additional power units.
          </li>
        </ul>
      </li>
      <li>
        Binary Search:
        <ul>
          <li>
            Use binary search to find the maximum possible minimum power:
            <ul>
              <li>
                <code>while (left &lt; right) {"{ ... }"}</code>
              </li>
              <li>
                Calculate the middle value <code>mid</code> and use the{" "}
                <code>check</code> method to determine if <code>mid</code> can
                be achieved.
              </li>
              <li>
                Update <code>left</code> or <code>right</code> based on the
                result of <code>check</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <code>check</code> Method:
        <ul>
          <li>
            Check if a given minimum power <code>minPower</code> can be
            achieved:
            <ul>
              <li>
                Initialize <code>power</code> as the sum of power within the
                initial radius <code>r</code>.
              </li>
              <li>
                Iterate through each city to update <code>power</code> and
                adjust station power if needed.
              </li>
              <li>
                If current power is less than <code>minPower</code>, calculate
                the required additional power and update station power if
                possible.
              </li>
              <li>
                Return <code>true</code> if it's possible to achieve{" "}
                <code>minPower</code> with the available additional power units,
                otherwise return <code>false</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  2537: (
    <ul>
      <li>
        Method Overview:
        <ul>
          <li>
            <code>public long countGood(int[] nums, int k)</code>: Computes the
            number of "good" subarrays with at most <code>k</code> pairs.
          </li>
        </ul>
      </li>
      <li>
        Initialization:
        <ul>
          <li>
            <code>long ans = 0;</code>: Variable to accumulate the count of
            "good" subarrays.
          </li>
          <li>
            <code>int pairs = 0;</code>: Keeps track of the number of pairs
            encountered.
          </li>
          <li>
            <code>{`Map<Integer, Integer> count = new HashMap<>();`}</code>:
            HashMap to store the count of each element in the current window.
          </li>
        </ul>
      </li>
      <li>
        Sliding Window Technique:
        <ul>
          <li>
            Two pointers approach: <code>left</code> and <code>right</code>{" "}
            pointers are used to represent the current window of elements in{" "}
            <code>nums</code>.
          </li>
          <li>
            <strong>
              Adding to <code>pairs</code>:
            </strong>{" "}
            Increment <code>pairs</code> by the count of{" "}
            <code>nums[right]</code> in <code>count</code>, and update its count
            in <code>count</code>.
          </li>
          <li>
            <strong>Adjusting window size:</strong> While{" "}
            <code>pairs &gt;= k</code>, move <code>left</code> pointer to reduce
            the number of pairs until it is less than <code>k</code>.
          </li>
          <li>
            <strong>
              Calculating <code>ans</code>:
            </strong>{" "}
            Add <code>left</code> to <code>ans</code> after adjusting the
            window. This counts all subarrays ending at <code>right</code> that
            satisfy the condition of having at most <code>k</code> pairs.
          </li>
        </ul>
      </li>
      <li>
        Return:
        <ul>
          <li>
            Finally, return <code>ans</code>, which represents the total number
            of "good" subarrays in <code>nums</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2555: (
    <ul>
      <li>
        <strong>Method Overview:</strong>
        <ul>
          <li>
            <code>public int maximizeWin(int[] prizePositions, int k)</code>:
            Computes the maximum number of prizes that can be collected under
            the constraint that no two selected intervals overlap by more than{" "}
            <code>k</code> units.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>ans = 0;</code>: Variable to store the maximum number of
            prizes that can be collected.
          </li>
          <li>
            <code>dp[]</code>: An array where <code>dp[i]</code> represents the
            maximum number of prizes that can be collected up to the i-th
            position without violating the overlap constraint.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            Use two pointers, <code>i</code> (end of the current interval) and{" "}
            <code>j</code> (start of the current interval), to maintain a
            sliding window over the <code>prizePositions</code> array.
          </li>
          <li>
            <code>i</code> iterates over each position in{" "}
            <code>prizePositions</code>.
          </li>
          <li>
            <code>j</code> moves forward to ensure that the distance between{" "}
            <code>prizePositions[i]</code> and <code>prizePositions[j]</code>{" "}
            does not exceed <code>k</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Calculating Covered Prizes:</strong>
        <ul>
          <li>
            For each <code>i</code>, calculate <code>covered = i - j + 1</code>,
            representing the number of prizes covered by the current valid
            interval <code>[prizePositions[j], prizePositions[i]]</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Updating <code>dp</code> Array:
        </strong>
        <ul>
          <li>
            Update <code>dp[i + 1]</code> using{" "}
            <code>dp[i + 1] = Math.max(dp[i], covered)</code>. This ensures that{" "}
            <code>dp[i + 1]</code> holds the maximum number of prizes that can
            be collected up to the i-th position without violating the overlap
            constraint.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Updating <code>ans</code>:
        </strong>
        <ul>
          <li>
            Update <code>ans</code> using{" "}
            <code>ans = Math.max(ans, dp[j] + covered)</code>. Here,{" "}
            <code>dp[j]</code> represents the maximum number of prizes collected
            up to <code>j</code> without violating the overlap constraint.
            Adding <code>covered</code> gives the total number of prizes
            collected by including the current interval{" "}
            <code>[prizePositions[j], prizePositions[i]]</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return the Result:</strong>
        <ul>
          <li>
            After processing all intervals, <code>ans</code> holds the maximum
            number of prizes that can be collected without violating the overlap
            constraint by more than <code>k</code> units.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2653: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>ans</code>: An array initialized to store results, where each
            element corresponds to the starting index of a subarray with the
            desired properties.
          </li>
          <li>
            <code>count</code>: An array of size 50 used to count occurrences of
            negative numbers within the sliding window of size <code>k</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            Iterate through the <code>nums</code> array using index{" "}
            <code>i</code>.
          </li>
          <li>
            Update the <code>count</code> array for the current element{" "}
            <code>nums[i]</code> if it is negative.
          </li>
          <li>
            Adjust the <code>count</code> array to remove the contribution of
            the element that is moving out of the window (when{" "}
            <code>i - k</code> is valid).
          </li>
          <li>
            When the window size reaches <code>k</code>, calculate the x-th
            smallest negative number using <code>getXthSmallestNum</code> and
            store it in <code>ans[i - k + 1]</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          <code>getXthSmallestNum</code> Method:
        </strong>
        <ul>
          <li>
            Calculates the x-th smallest negative number by iterating through
            the <code>count</code> array.
          </li>
          <li>
            <code>prefix</code> accumulates the counts until it reaches or
            exceeds <code>x</code>.
          </li>
          <li>
            Once <code>prefix &gt;= x</code>, return the corresponding negative
            number (<code>i - 50</code>), where <code>i</code> is the index in
            the <code>count</code> array.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2730: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize variables <code>n</code> (length of string),{" "}
            <code>ans</code> (to store the maximum length of semi-repetitive
            substring found), <code>start</code> (pointer to the start of
            current window), and <code>count</code> (hashmap to count
            occurrences of characters in the current window).
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Iterate through the string with the <code>end</code> pointer,
            expanding the window to include characters.
          </li>
          <li>
            Update the character count in the <code>count</code> hashmap for the
            character at index <code>end</code>.
          </li>
          <li>
            Check if the current window (defined by <code>start</code> to{" "}
            <code>end</code>) is valid (semi-repetitive) using the{" "}
            <code>isValid</code> method.
          </li>
          <li>
            If the window is not valid, shrink the window from the{" "}
            <code>start</code> pointer until it becomes valid again.
          </li>
          <li>
            Update <code>ans</code> with the maximum length of valid
            semi-repetitive substring found so far.
          </li>
        </ul>
      </li>
      <li>
        <strong>isValid Method:</strong>
        <ul>
          <li>
            Checks if the current window (represented by the <code>count</code>{" "}
            hashmap) contains at most two distinct characters with at most one
            character appearing exactly twice.
          </li>
          <li>
            Returns <code>true</code> if the conditions are satisfied,
            indicating a valid semi-repetitive substring.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Return <code>ans</code>, which holds the length of the longest
            semi-repetitive substring found in the input string <code>s</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2743: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>n = s.length()</code>: Stores the length of the input string{" "}
            <code>s</code>.
          </li>
          <li>
            <code>ans</code>: Initialized to zero. It will store the total count
            of special substrings found.
          </li>
          <li>
            <code>count</code>: An array of size 26 (for each letter from 'a' to
            'z') to keep track of the count of each character in the current
            window [j, i].
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            <strong>
              Outer Loop (<code>i</code> loop):
            </strong>
            <ul>
              <li>
                Iterates through each character of the string <code>s</code>.
              </li>
              <li>
                <code>k = s.charAt(i) - 'a'</code>: Calculates the index of the
                current character in the <code>count</code> array.
              </li>
              <li>
                <code>++count[k]</code>: Increments the count of the current
                character.
              </li>
            </ul>
          </li>
          <li>
            <strong>
              Inner Loop (<code>while</code> loop):
            </strong>
            <ul>
              <li>
                Ensures that the current substring from <code>j</code> to{" "}
                <code>i</code> is a special substring:
              </li>
              <li>
                If <code>count[k] &gt; 1</code>, it means the current substring
                has duplicate characters.
              </li>
              <li>
                In this case, increment <code>j</code> to shrink the window from
                the left until the substring becomes special again (
                <code>count[k] &lt;= 1</code>).
              </li>
            </ul>
          </li>
          <li>
            <strong>Counting Special Substrings:</strong>
            <ul>
              <li>
                For each position <code>i</code>, <code>ans += i - j + 1</code>{" "}
                adds the number of special substrings ending at position{" "}
                <code>i</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Returns <code>ans</code>, which represents the total count of
            special substrings in the string <code>s</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2747: (
    <ul>
      <li>
        <strong>Query Class:</strong>
        <ul>
          <li>
            Defines a <code>Query</code> class to hold each query's timestamp (
            <code>query</code>) and its original index (<code>index</code>) from
            the <code>queries</code> array.
          </li>
        </ul>
      </li>
      <li>
        <strong>countServers Method:</strong>
        <ul>
          <li>
            <strong>Sorting:</strong>
            <ul>
              <li>
                Sorts <code>logs</code> by their timestamp using{" "}
                <code>Arrays.sort</code>.
              </li>
              <li>
                Encapsulates <code>queries</code> into <code>Query</code>{" "}
                objects and sorts them by their timestamp using{" "}
                <code>Collections.sort</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>Processing Queries with Sliding Window Technique:</strong>
            <ul>
              <li>
                <strong>Initialization:</strong>
                <ul>
                  <li>
                    Initializes <code>ans</code> array to store results for each
                    query.
                  </li>
                  <li>
                    Uses <code>countMap</code> to track active servers based on
                    their server id.
                  </li>
                  <li>
                    <code>left</code> and <code>right</code> pointers for
                    managing sliding window over <code>logs</code>.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Main Loop:</strong>
                <ul>
                  <li>
                    Iterates through each query (<code>q</code> in{" "}
                    <code>queryList</code>).
                  </li>
                  <li>
                    Adds servers to <code>countMap</code> whose timestamp is
                    less than or equal to <code>q.query</code>.
                  </li>
                  <li>
                    Removes servers from <code>countMap</code> whose timestamp
                    is less than <code>q.query - x</code>.
                  </li>
                  <li>
                    Calculates active servers as{" "}
                    <code>n - countMap.size()</code> and stores the result in{" "}
                    <code>ans</code> at <code>q.index</code>.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Result:</strong>
            <ul>
              <li>
                Returns the <code>ans</code> array containing results for each
                query, where each result represents the number of active servers
                at the corresponding timestamp.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  2760: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>ans</code> is initialized to 0 to store the maximum length of
            alternating subarrays found.
          </li>
          <li>
            <code>dp</code> is initialized to 0 to keep track of the current
            length of the alternating subarray.
          </li>
        </ul>
      </li>
      <li>
        <strong>Iterating through the array:</strong>
        <ul>
          <li>
            Loop through each element <code>nums[i]</code> in the array{" "}
            <code>nums</code>.
          </li>
          <li>
            If <code>nums[i]</code> is greater than <code>threshold</code>,
            reset <code>dp</code> to 0 because it cannot continue an alternating
            subarray.
          </li>
          <li>
            Else if <code>i &gt; 0</code> and the previous <code>dp</code> value{" "}
            <code>dp &gt; 0</code> and the current element and the previous
            element alternate between odd and even (checked using{" "}
            <code>isOddEven</code> method), increment <code>dp</code>.
          </li>
          <li>
            Otherwise, set <code>dp</code> to 1 if <code>nums[i]</code> is even,
            or 0 if it is odd.
          </li>
          <li>
            Update <code>ans</code> to be the maximum of itself and{" "}
            <code>dp</code>, ensuring it captures the longest alternating
            subarray found so far.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Helper method <code>isOddEven</code>:
        </strong>
        <ul>
          <li>
            Determines if two integers <code>a</code> and <code>b</code> are of
            opposite parity (one is odd and the other is even).
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Return <code>ans</code>, which contains the length of the longest
            alternating subarray found.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2779: (
    <ul>
      <li>
        <strong>Sorting:</strong>
        <ul>
          <li>
            <code>Arrays.sort(nums);</code> - Sorts the array <code>nums</code>{" "}
            in non-decreasing order. Sorting helps in efficiently finding the
            maximum beauty by ensuring that we can easily manage the sliding
            window constraints.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            Initialize two pointers, <code>left</code> and <code>right</code>,
            both starting at <code>0</code>.
          </li>
          <li>
            Iterate through the array using <code>right</code> pointer to expand
            the window:
          </li>
          <ul>
            <li>
              <code>while (nums[right] - nums[left] &gt; 2 * k)</code>: Checks
              if the difference between <code>nums[right]</code> and{" "}
              <code>nums[left]</code> exceeds <code>2 * k</code>. If it does,
              increment <code>left</code> to shrink the window from the left
              side until the condition is satisfied.
            </li>
            <li>
              <code>ans = Math.max(ans, right - left + 1);</code>: Updates{" "}
              <code>ans</code> with the maximum length of the valid subarray
              (window) found so far.
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Return <code>ans</code>, which represents the maximum beauty of the
            array after applying the operation with the sliding window of size{" "}
            <code>k</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2781: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize <code>ans</code> to store the maximum length of a valid
            substring found.
          </li>
          <li>
            Create a <code>HashSet</code> named <code>forbiddenSet</code> to
            store all forbidden substrings for quick lookup.
          </li>
          <li>
            Initialize <code>right</code> to the last index of the string{" "}
            <code>word</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window:</strong>
        <ul>
          <li>
            Use a for loop to iterate backward from the end of the string to the
            beginning with the variable <code>left</code>.
          </li>
          <li>
            Within the for loop, use another loop to check substrings starting
            from <code>left</code> to the minimum of <code>left + 10</code> or{" "}
            <code>right + 1</code>.
          </li>
          <li>
            If a forbidden substring is found, update the <code>right</code>{" "}
            pointer to exclude this substring and break out of the inner loop.
          </li>
        </ul>
      </li>
      <li>
        <strong>Update Maximum Length:</strong>
        <ul>
          <li>
            After adjusting the window, update <code>ans</code> to be the
            maximum of its current value and the length of the current valid
            substring (<code>right - left + 1</code>).
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After the loop finishes, return <code>ans</code> as the length of
            the longest valid substring.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2799: (
    <ul>
      <li>
        <strong>Identify Unique Elements:</strong>
        <ul>
          <li>
            Create a <code>HashSet</code> to store all unique elements in the
            array.
          </li>
          <li>
            The size of this set gives the total count of unique elements,{" "}
            <code>uniqueCount</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            Use a <code>HashMap</code> to keep track of the counts of elements
            within the current window.
          </li>
          <li>
            Initialize the left pointer <code>left</code> to the start of the
            array.
          </li>
          <li>
            Iterate through the array with the right pointer <code>right</code>{" "}
            extending the window one element at a time.
          </li>
        </ul>
      </li>
      <li>
        <strong>Check Window for Complete Subarray:</strong>
        <ul>
          <li>
            For each position of <code>right</code>, add the current element to
            the <code>HashMap</code> and update its count.
          </li>
          <li>
            If the current window contains all unique elements (i.e., the size
            of the <code>HashMap</code> matches <code>uniqueCount</code>), count
            all subarrays ending at <code>right</code> and starting from each
            position between <code>left</code> and <code>right</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Adjust Window:</strong>
        <ul>
          <li>
            Move the left pointer <code>left</code> to shrink the window while
            it still contains all unique elements.
          </li>
          <li>
            Decrease the count of the element at <code>left</code> in the{" "}
            <code>HashMap</code>. If its count becomes zero, remove it from the
            map.
          </li>
          <li>
            Continue moving the left pointer until the window no longer contains
            all unique elements.
          </li>
        </ul>
      </li>
      <li>
        <strong>Count Valid Subarrays:</strong>
        <ul>
          <li>
            For every position of <code>right</code> where the window contains
            all unique elements, the number of valid subarrays is equal to the
            length of the remaining array from <code>right</code> to the end.
          </li>
          <li>Update the result accordingly.</li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After the loop finishes, return the total count of complete
            subarrays.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2831: (
    <ul>
      <li>
        <strong>Initialize Variables:</strong>
        <ul>
          <li>
            Initialize <code>ans</code> to store the maximum length of the equal
            subarray found.
          </li>
          <li>
            Create a frequency map (<code>HashMap</code>) named{" "}
            <code>count</code> to store the counts of elements within the
            window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            Use two pointers, <code>left</code> and <code>right</code>, to
            represent the sliding window. Initialize both to the start of the
            list.
          </li>
          <li>
            Iterate through the list with the <code>right</code> pointer
            extending the window one element at a time.
          </li>
          <li>
            Update the frequency map with the current element at{" "}
            <code>right</code> using{" "}
            <code>count.merge(nums.get(right), 1, Integer::sum)</code>.
          </li>
          <li>
            Update <code>ans</code> to be the maximum of its current value and
            the highest frequency of any element in the current window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Adjust Window:</strong>
        <ul>
          <li>
            While the condition <code>right - left + 1 - k &gt; ans</code> is
            true, contract the window by moving the <code>left</code> pointer.
          </li>
          <li>
            Update the frequency map for the element at <code>left</code> by
            decrementing its count using{" "}
            <code>count.merge(nums.get(left++), -1, Integer::sum)</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            After the loop finishes, return <code>ans</code> as the length of
            the longest equal subarray.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2841: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize <code>ans</code> to store the maximum sum found.
          </li>
          <li>
            Initialize <code>sum</code> to accumulate the sum of the current
            window of elements.
          </li>
          <li>
            Create a <code>HashMap</code> named <code>count</code> to store the
            frequency of each element in the current window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Iterating through the List:</strong>
        <ul>
          <li>
            Iterate through the list <code>nums</code> using index{" "}
            <code>i</code>.
          </li>
          <li>
            Add the current element <code>nums.get(i)</code> to <code>sum</code>{" "}
            and update its frequency in <code>count</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Maintaining the Sliding Window:</strong>
        <ul>
          <li>
            Check if the window size exceeds <code>k</code>. If so, remove the
            oldest element (<code>nums.get(i - k)</code>) from <code>sum</code>{" "}
            and update its frequency in <code>count</code>.
          </li>
          <li>
            If the count of the element reaches zero after decrementing, remove
            it from <code>count</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Checking Condition for Distinct Elements:</strong>
        <ul>
          <li>
            Check if the current window (<code>count.size()</code>) has at least{" "}
            <code>m</code> distinct elements.
          </li>
          <li>
            If true, update <code>ans</code> to be the maximum of its current
            value and <code>sum</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            After iterating through the entire list, <code>ans</code> will hold
            the maximum sum of any valid subarray according to the constraints.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2875: (
    <ul>
      <li>
        <strong>Calculate Total Sum and Initial Setup:</strong>
        <ul>
          <li>
            Compute the total sum of elements in <code>nums</code>.
          </li>
          <li>
            Determine the length <code>n</code> of <code>nums</code>.
          </li>
          <li>
            Compute <code>remainingTarget</code> and <code>repeatLength</code>{" "}
            based on <code>target</code> and <code>sum</code>.
          </li>
          <li>
            If <code>remainingTarget</code> is <code>0</code>, return{" "}
            <code>repeatLength</code> as the entire array can be repeated enough
            times to meet the target sum.
          </li>
        </ul>
      </li>
      <li>
        <strong>Prefix Sum Technique with HashMap:</strong>
        <ul>
          <li>
            Initialize <code>suffixPlusPrefixLength</code> to <code>n</code>.
          </li>
          <li>
            Initialize <code>prefix</code> to <code>0</code> and{" "}
            <code>prefixToIndex</code> to store prefix sums and their indices.
          </li>
          <li>
            Iterate through <code>2 * n</code> (doubling the array size to
            handle potential wrap-around).
          </li>
          <li>
            Update <code>prefix</code> by adding elements of <code>nums</code>{" "}
            using modulo to cycle through the array.
          </li>
          <li>
            Check if <code>prefixToIndex</code> contains{" "}
            <code>prefix - remainingTarget</code> and update{" "}
            <code>suffixPlusPrefixLength</code> accordingly.
          </li>
          <li>
            Update <code>prefixToIndex</code> with the current{" "}
            <code>prefix</code> and its index.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            If <code>suffixPlusPrefixLength</code> remains <code>n</code>,
            return <code>-1</code> indicating no subarray meets the target sum.
          </li>
          <li>
            Otherwise, return <code>repeatLength + suffixPlusPrefixLength</code>
            , combining the length of repeated arrays and the length of the
            subarray found.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2902: (
    <ul>
      <li>
        <strong>Dynamic Programming Setup (dp Array):</strong>
        <ul>
          <li>
            <code>dp[i]</code>: Represents the number of sub-multisets with sum{" "}
            <code>i</code>.
          </li>
          <li>
            Initialize <code>dp[0]</code> to <code>1</code> because there's one
            way to have a sum of <code>0</code> (by choosing an empty
            sub-multiset).
          </li>
        </ul>
      </li>
      <li>
        <strong>Counting Element Frequencies (count Map):</strong>
        <ul>
          <li>
            Use a <code>HashMap</code> named <code>count</code> to store the
            frequency of each element in <code>nums</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Handling Zeroes in <code>nums</code>:
        </strong>
        <ul>
          <li>
            Check if there are any zeros in <code>nums</code> (
            <code>count.containsKey(0)</code>). If yes, remove them from{" "}
            <code>count</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Iterating Over Elements in <code>count</code>:
        </strong>
        <ul>
          <li>
            For each element (<code>num</code>) and its frequency (
            <code>freq</code>) in <code>count</code>, calculate how many times{" "}
            <code>num</code> can be added to existing sub-multisets (
            <code>stride</code> array).
          </li>
          <li>
            Update the <code>dp</code> array based on the constraints{" "}
            <code>[l, r]</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Calculating the Final Result:</strong>
        <ul>
          <li>
            Sum up the values in <code>dp</code> from <code>l</code> to{" "}
            <code>r</code> to get the total count of valid sub-multisets.
          </li>
          <li>
            Multiply this sum by <code>(zeros + 1)</code> (adding one to account
            for the empty sub-multiset) and take modulo{" "}
            <code>1,000,000,007</code> (<code>kMod</code>) to handle large
            numbers.
          </li>
        </ul>
      </li>
    </ul>
  ),
  3023: (
    <ul>
      <li>
        <strong>Initialization and Setup:</strong>
        <ul>
          <li>
            <code>long a = 0, b = 0;</code>: Initialize <code>a</code> and{" "}
            <code>b</code> to store the pattern split into two parts.
          </li>
          <li>
            <code>int m = pattern.length;</code>: Determine the length of the
            pattern array.
          </li>
          <li>
            <code>int half = m &gt;&gt; 1;</code>: Calculate half the length of
            the pattern (<code>m / 2</code>).
          </li>
          <li>
            <code>long mask1 = (1L &lt;&lt; half) - 1;</code>: Create a mask (
            <code>mask1</code>) to extract the first half of the pattern.
          </li>
          <li>
            <code>long mask2 = (1L &lt;&lt; (m - half)) - 1;</code>: Create a
            mask (<code>mask2</code>) to extract the second half of the pattern.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Constructing <code>a</code> and <code>b</code> from{" "}
          <code>pattern</code>:
        </strong>
        <ul>
          <li>
            Iterate through the first half of <code>pattern</code>, shifting
            bits left into <code>a</code>.
          </li>
          <li>
            Iterate through the second half of <code>pattern</code>, shifting
            bits left into <code>b</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Processing the Infinite Stream:</strong>
        <ul>
          <li>
            Initialize <code>x</code> and <code>y</code> to store the current
            state of bits from the infinite stream.
          </li>
          <li>
            Enter an infinite loop to continuously read bits from the stream:
          </li>
          <li>
            <code>y = y &lt;&lt; 1 | v;</code>: Shift <code>y</code> left by one
            bit and add the latest bit <code>v</code>.
          </li>
          <li>
            <code>v = (int) ((y &gt;&gt; (m - half)) & 1);</code>: Extract the
            relevant bit from <code>y</code> based on the second half of the
            pattern length.
          </li>
          <li>
            <code>y &amp;= mask2;</code>: Apply <code>mask2</code> to{" "}
            <code>y</code> to retain only relevant bits.
          </li>
          <li>
            <code>x = x &lt;&lt; 1 | v;</code>: Shift <code>x</code> left by one
            bit and add the latest bit <code>v</code>.
          </li>
          <li>
            <code>x &amp;= mask1;</code>: Apply <code>mask1</code> to{" "}
            <code>x</code> to retain only relevant bits.
          </li>
        </ul>
      </li>
      <li>
        <strong>Checking for Pattern Match:</strong>
        <ul>
          <li>
            After processing enough bits (<code>i &gt;= m</code>), compare{" "}
            <code>x</code> and <code>y</code> with precomputed values{" "}
            <code>a</code> and <code>b</code> respectively.
          </li>
          <li>
            If a match is found (<code>a == x</code> and <code>b == y</code>),
            return the starting index of the pattern in the stream (
            <code>i - m</code>).
          </li>
        </ul>
      </li>
      <li>
        <strong>Endless Search:</strong>
        <ul>
          <li>
            If no match is found immediately, the loop continues indefinitely,
            continuously updating <code>x</code> and <code>y</code> with new
            bits from the stream.
          </li>
        </ul>
      </li>
    </ul>
  ),
  3037: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>int[] lps = getLPS(pattern);</code>: Computes the Longest
            Prefix Suffix (LPS) array for the given pattern using the helper
            method <code>getLPS</code>.
          </li>
          <li>
            <code>int i = 0;</code>: Initializes <code>i</code> to track the
            index in the stream.
          </li>
          <li>
            <code>int j = 0;</code>: Initializes <code>j</code> to track the
            index in the pattern.
          </li>
          <li>
            <code>int bit = 0;</code>: Stores the current bit read from the
            stream.
          </li>
          <li>
            <code>boolean readNext = false;</code>: Flag to control when to read
            the next bit from the stream.
          </li>
        </ul>
      </li>
      <li>
        <strong>Pattern Matching in Infinite Stream:</strong>
        <ul>
          <li>
            The method enters an infinite loop where it continuously compares
            bits from the stream with the corresponding bits in the pattern.
          </li>
          <li>
            If bits match, it increments <code>i</code> and <code>j</code>. If{" "}
            <code>j</code> reaches the end of the pattern, it returns the
            starting index of the pattern in the stream.
          </li>
          <li>
            If there is a mismatch after some matches, it updates <code>j</code>{" "}
            using the LPS array to skip unnecessary comparisons.
          </li>
          <li>
            If there is no match and <code>j</code> is <code>0</code>, it simply
            increments <code>i</code> and prepares to read the next bit from the
            stream.
          </li>
        </ul>
      </li>
      <li>
        <strong>Handling Input:</strong>
        <ul>
          <li>
            Reads bits from the stream using <code>stream.next()</code> and
            stores them in <code>bit</code>.
          </li>
          <li>
            <code>readNext</code> is used to control when the next bit should be
            read to ensure efficiency in accessing the stream.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Helper Method <code>getLPS</code>:
        </strong>
        <ul>
          <li>
            Computes the LPS array, where <code>lps[i]</code> indicates the
            length of the longest prefix which is also a suffix for the
            substring <code>pattern[0..i]</code>.
          </li>
          <li>
            Iterates through the pattern and adjusts <code>j</code> to find the
            longest prefix that matches the suffix using a while loop.
          </li>
        </ul>
      </li>
    </ul>
  ),
  3135: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>m</code> and <code>n</code> represent the lengths of strings{" "}
            <code>initial</code> and <code>target</code>, respectively.
          </li>
          <li>
            <code>dp</code> is a 2D array where <code>dp[i][j]</code> stores the
            length of the longest common substring ending at{" "}
            <code>initial.charAt(i-1)</code> and <code>target.charAt(j-1)</code>
            .
          </li>
          <li>
            <code>mx</code> keeps track of the maximum length of such common
            substrings found during the iteration.
          </li>
        </ul>
      </li>
      <li>
        <strong>Dynamic Programming Approach:</strong>
        <ul>
          <li>
            Nested loops iterate through each character of <code>initial</code>{" "}
            and <code>target</code>.
          </li>
          <li>
            If characters match at <code>initial.charAt(i - 1)</code> and{" "}
            <code>target.charAt(j - 1)</code>:
          </li>
          <ul>
            <li>
              <code>dp[i][j]</code> is updated to{" "}
              <code>dp[i - 1][j - 1] + 1</code>, extending the length of the
              common substring found up to that point.
            </li>
            <li>
              <code>mx</code> is updated to track the maximum length of common
              substrings found.
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <strong>Calculate Minimum Operations:</strong>
        <ul>
          <li>
            The minimum number of operations to transform <code>initial</code>{" "}
            into <code>target</code> is calculated using:
          </li>
          <p>
            <code>m + n - 2 * mx</code>
          </p>
          <ul>
            <li>
              <code>m + n</code> represents the total length of both strings.
            </li>
            <li>
              <code>2 * mx</code> accounts for the maximum length of common
              substrings found twice, indicating the operations required.
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            The result of <code>m + n - 2 * mx</code> is returned, representing
            the minimum number of operations needed.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2904: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>bestLeft</code>: Starting index of the best substring found.
          </li>
          <li>
            <code>minLength</code>: Length of the shortest substring found,
            initialized to <code>s.length() + 1</code>.
          </li>
          <li>
            <code>ones</code>: Counts the number of '1's in the current window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Uses two pointers, <code>l</code> (left) and <code>r</code> (right),
            to define the current window of characters in the string{" "}
            <code>s</code>.
          </li>
          <li>
            <code>r</code> expands the window by iterating through the string.
          </li>
        </ul>
      </li>
      <li>
        <strong>Main Loop:</strong>
        <ul>
          <li>
            Iterates through the string with <code>r</code>.
          </li>
          <li>
            Increments <code>ones</code> when <code>s.charAt(r)</code> is{" "}
            <code>'1'</code>.
          </li>
          <li>
            When <code>ones</code> reaches <code>k</code>:
          </li>
          <ul>
            <li>
              Enters an inner loop (<code>ones == k</code>) to find the shortest
              "beautiful" substring.
            </li>
            <li>
              Updates <code>bestLeft</code> and <code>minLength</code> based on
              the conditions specified.
            </li>
            <li>
              Moves <code>l</code> to shrink the window until <code>ones</code>{" "}
              is no longer <code>k</code>.
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <strong>Result Handling:</strong>
        <ul>
          <li>Returns the result:</li>
          <ul>
            <li>
              If <code>bestLeft</code> remains <code>-1</code>, returns an empty
              string <code>""</code> indicating no valid substring was found.
            </li>
            <li>
              Otherwise, returns the substring from <code>bestLeft</code> with
              length <code>minLength</code>, representing the shortest and
              lexicographically smallest "beautiful" substring found.
            </li>
          </ul>
        </ul>
      </li>
    </ul>
  ),
  2932: (
    <ul>
      <li>
        <strong>TrieNode Class:</strong>
        <ul>
          <li>
            Represents a node in the Trie with left (<code>0</code>) and right (
            <code>1</code>) children.
          </li>
          <li>
            Stores <code>min</code> and <code>max</code> values to optimize XOR
            calculations.
          </li>
        </ul>
      </li>
      <li>
        <strong>BitTrie Class:</strong>
        <ul>
          <li>
            Manages Trie operations for inserting numbers and finding maximum
            XOR.
          </li>
          <li>
            <code>insert(int num)</code>: Inserts <code>num</code> into Trie and
            updates node values.
          </li>
          <li>
            <code>getMaxXor(int x)</code>: Finds maximum XOR with <code>x</code>{" "}
            using Trie traversal.
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution Class:</strong>
        <ul>
          <li>
            <code>maximumStrongPairXor(int[] nums)</code>: Computes maximum XOR
            using <code>BitTrie</code>.
          </li>
          <li>
            Calculates <code>maxBit</code> based on the maximum number in{" "}
            <code>nums</code>.
          </li>
          <li>
            Initializes and inserts numbers into <code>BitTrie</code>.
          </li>
          <li>
            Iterates through <code>nums</code> to find and update maximum XOR.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2935: (
    <ul>
      <li>
        <strong>TrieNode Class:</strong>
        <ul>
          <li>
            Represents a node in the Trie with left (<code>0</code>) and right (
            <code>1</code>) children.
          </li>
          <li>
            Stores <code>min</code> and <code>max</code> values to optimize XOR
            calculations.
          </li>
        </ul>
      </li>
      <li>
        <strong>BitTrie Class:</strong>
        <ul>
          <li>
            Manages Trie operations for inserting numbers and finding maximum
            XOR.
          </li>
          <li>
            <code>insert(int num)</code>: Inserts <code>num</code> into Trie and
            updates node values.
          </li>
          <li>
            <code>getMaxXor(int x)</code>: Finds maximum XOR with <code>x</code>{" "}
            using Trie traversal.
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution Class:</strong>
        <ul>
          <li>
            <code>maximumStrongPairXor(int[] nums)</code>: Computes maximum XOR
            using <code>BitTrie</code>.
          </li>
          <li>
            Calculates <code>maxBit</code> based on the maximum number in{" "}
            <code>nums</code>.
          </li>
          <li>
            Initializes and inserts numbers into <code>BitTrie</code>.
          </li>
          <li>
            Iterates through <code>nums</code> to find and update maximum XOR.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2953: (
    <ul>
      <li>
        <strong>countCompleteSubstrings Method:</strong>
        <ul>
          <li>
            Calculates the number of unique letters in <code>word</code>.
          </li>
          <li>
            Iterates through possible window sizes and calls{" "}
            <code>countCompleteStrings</code> to count valid substrings of each
            size.
          </li>
          <li>Returns the total count of valid substrings.</li>
        </ul>
      </li>
      <li>
        <strong>countCompleteStrings Method:</strong>
        <ul>
          <li>
            Initializes variables to track counts and validity of substrings.
          </li>
          <li>
            Iterates through each character in <code>word</code>, adjusting
            counts and checking validity based on given conditions.
          </li>
          <li>
            Accumulates the count of valid substrings meeting the criteria.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2958: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>ans</code>: Variable to store the maximum length of the
            subarray found.
          </li>
          <li>
            <code>count</code>: HashMap to store the frequency of each element
            in the current window.
          </li>
          <li>
            <code>left</code> and <code>right</code>: Pointers defining the
            current window in the array.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            Iterate through <code>nums</code> using <code>right</code> as the
            end of the window.
          </li>
          <li>
            Update frequency of <code>nums[right]</code> in <code>count</code>{" "}
            hashmap.
          </li>
          <li>
            Shrink the window from the left until each element's frequency is at
            most <code>k</code>.
          </li>
          <li>
            Calculate current window size and update <code>ans</code> if
            necessary.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            After iterating through <code>nums</code>, <code>ans</code> contains
            the length of the longest subarray where each element appears at
            most <code>k</code> times.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2962: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>maxNum</code>: Finds the maximum element in the array{" "}
            <code>nums</code>.
          </li>
          <li>
            <code>ans</code>: Variable to accumulate the count of subarrays.
          </li>
          <li>
            <code>count</code>: Counter to track the number of times{" "}
            <code>maxNum</code> appears in the current window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            Use two pointers, <code>left</code> and <code>right</code>, to
            define the current window of the array.
          </li>
          <li>
            Increment <code>count</code> whenever <code>nums[right]</code>{" "}
            equals <code>maxNum</code>.
          </li>
          <li>
            Adjust the window by incrementing <code>left</code> to shrink the
            window until <code>count</code> is no longer equal to <code>k</code>
            .
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Calculating <code>ans</code>:
        </strong>
        <ul>
          <li>
            Add <code>left</code> to <code>ans</code> for each iteration of the
            outer loop. This accumulates the starting indices of subarrays that
            meet the condition.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            After iterating through <code>nums</code>, <code>ans</code> contains
            the total count of subarrays where the maximum element appears
            exactly <code>k</code> times.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2968: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>ans</code>: Variable to store the maximum frequency score
            found.
          </li>
          <li>
            <code>cost</code>: Represents the cumulative cost of adjusting the
            array to make all elements in the current window equal.
          </li>
          <li>
            <code>Arrays.sort(nums)</code>: Sorts the array <code>nums</code> in
            non-decreasing order.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            Use two pointers, <code>left</code> and <code>right</code>, to
            define the current window in the sorted array <code>nums</code>.
          </li>
          <li>
            Calculate the <code>cost</code> as the sum of differences between{" "}
            <code>nums[right]</code> and the median value of the current window
            (<code>nums[(left + right) / 2]</code>).
          </li>
          <li>
            Adjust the window by incrementing <code>left</code> whenever{" "}
            <code>cost</code> exceeds <code>k</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Calculating <code>ans</code>:
        </strong>
        <ul>
          <li>
            For each window, update <code>ans</code> with the maximum of its
            current value and the size of the current window (
            <code>right - left + 1</code>).
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            After iterating through the array, <code>ans</code> contains the
            maximum frequency score achievable under the given constraints.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2981: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>n</code>: Length of the string <code>s</code>.
          </li>
          <li>
            <code>ans</code>: Variable to store the maximum length found.
          </li>
          <li>
            <code>runningLen</code>: Counter for consecutive occurrences of the
            current character.
          </li>
          <li>
            <code>prevLetter</code>: Previous character encountered in the
            string.
          </li>
          <li>
            <code>counts</code>: 2D array to store counts of consecutive
            character occurrences for each letter ('a' to 'z').
          </li>
        </ul>
      </li>
      <li>
        <strong>Iterate through the String:</strong>
        <ul>
          <li>
            For each character in <code>s</code>, update <code>runningLen</code>{" "}
            and populate <code>counts</code> accordingly.
          </li>
        </ul>
      </li>
      <li>
        <strong>Compute Maximum Length:</strong>
        <ul>
          <li>
            After populating <code>counts</code>, iterate over each row
            (representing each letter from 'a' to 'z') to find the maximum
            frequency of consecutive occurrences that is at least three times.
          </li>
          <li>
            Update <code>ans</code> with the maximum length found across all
            rows.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            Return <code>ans</code>, which represents the maximum length of a
            substring that appears exactly three times consecutively in{" "}
            <code>s</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2982: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>n</code>: Length of the string <code>s</code>.
          </li>
          <li>
            <code>ans</code>: Variable to store the maximum length found.
          </li>
          <li>
            <code>runningLen</code>: Counter for consecutive occurrences of the
            current character.
          </li>
          <li>
            <code>prevLetter</code>: Previous character encountered in the
            string.
          </li>
          <li>
            <code>counts</code>: 2D array to store counts of consecutive
            character occurrences for each letter ('a' to 'z').
          </li>
        </ul>
      </li>
      <li>
        <strong>Iterate through the String:</strong>
        <ul>
          <li>
            For each character in <code>s</code>, update <code>runningLen</code>{" "}
            and populate <code>counts</code> accordingly.
          </li>
        </ul>
      </li>
      <li>
        <strong>Compute Maximum Length:</strong>
        <ul>
          <li>
            After populating <code>counts</code>, iterate over each row
            (representing each letter from 'a' to 'z') to find the maximum
            frequency of consecutive occurrences that is at least three times.
          </li>
          <li>
            Update <code>ans</code> with the maximum length found across all
            rows.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            Return <code>ans</code>, which represents the maximum length of a
            substring that appears exactly three times consecutively in{" "}
            <code>s</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  3013: (
    <>
      {" "}
      <h3>Multiset Class</h3>
      <ul>
        <li>
          <code>add(int num)</code>: Adds a number to the multiset.
        </li>
        <li>
          <code>remove(int num)</code>: Removes a number from the multiset.
        </li>
        <li>
          <code>min()</code>: Returns the smallest number in the multiset.
        </li>
        <li>
          <code>max()</code>: Returns the largest number in the multiset.
        </li>
        <li>
          <code>size()</code>: Returns the current size of the multiset.
        </li>
        <li>
          <code>contains(int num)</code>: Checks if a number exists in the
          multiset.
        </li>
      </ul>
      <h3>Solution Class</h3>
      <ul>
        <li>
          <code>minimumCost(int[] nums, int k, int dist)</code>: Computes the
          minimum cost adjustment.
        </li>
        <li>
          <code>
            balance(long windowSum, Multiset selected, Multiset candidates, int
            k)
          </code>
          : Balances the multiset <code>selected</code> to maintain the top{" "}
          <code>k-1</code> smallest numbers.
        </li>
        <li>
          Uses a sliding window technique to iterate through <code>nums</code>{" "}
          and adjust <code>windowSum</code> accordingly.
        </li>
        <li>
          Updates <code>minWindowSum</code> with the minimum{" "}
          <code>windowSum</code> encountered.
        </li>
      </ul>
    </>
  ),
  3086: (
    <>
      {" "}
      <h3>Steps:</h3>
      <ul>
        <li>Initialize necessary variables and lists.</li>
        <li>Collect indices of 1s and compute prefix sums of these indices.</li>
        <li>
          Determine the range of 1s allowed around the median index based on the
          constraints.
        </li>
        <li>
          Iterate through possible configurations of 1s and calculate the cost
          to achieve each configuration.
        </li>
        <li>
          Update and maintain the minimum cost found across all configurations.
        </li>
        <li>Return the minimum cost.</li>
      </ul>
      <h3>Key Components:</h3>
      <ul>
        <li>
          <code>oneIndices</code>: List to store indices where{" "}
          <code>nums[i] == 1</code>.
        </li>
        <li>
          <code>prefix</code>: List to store cumulative sums of indices where{" "}
          <code>1</code>s are located.
        </li>
        <li>
          <code>cost1</code> and <code>cost2</code>: Calculate the cost to make
          adjustments to <code>nums</code> based on the selected configuration
          of <code>1</code>s.
        </li>
      </ul>
    </>
  ),
  3134: (
    <>
      {" "}
      <h3>Steps:</h3>
      <ul>
        <li>Calculate the total number of subarrays possible in the array.</li>
        <li>Compute the median position in terms of subarrays.</li>
        <li>
          Use binary search to find the smallest integer k such that the number
          of subarrays with at most k distinct elements meets or exceeds the
          median count.
        </li>
        <li>Return the median of the uniqueness array.</li>
      </ul>
      <h3>Key Components:</h3>
      <ul>
        <li>
          <code>subarrayWithAtMostKDistinct</code>: Helper method to count
          subarrays with at most k distinct elements using a sliding window
          technique.
        </li>
        <li>
          <code>Binary Search</code>: Used to efficiently find the median k by
          narrowing down the search space based on the count of subarrays.
        </li>
      </ul>
    </>
  ),
  3090: (
    <>
      {" "}
      <h3>Steps:</h3>
      <ul>
        <li>
          Initialize variables: <code>ans</code> to store the maximum length
          found, and <code>count</code> array to keep track of character
          frequencies.
        </li>
        <li>
          Use two pointers, <code>left</code> and <code>right</code>, to
          represent the current window of characters.
        </li>
        <li>
          Expand the window by moving <code>right</code> to the right and update{" "}
          <code>count</code> for the corresponding character.
        </li>
        <li>
          If adding the current character exceeds the allowed frequency, move{" "}
          <code>left</code> to the right until the window meets the condition
          (at most two instances of each character).
        </li>
        <li>
          Update <code>ans</code> to be the maximum of its current value or the
          length of the current valid substring.
        </li>
        <li>Continue until the end of the string is reached.</li>
      </ul>
      <h3>Key Components:</h3>
      <ul>
        <li>
          <code>Sliding Window Technique</code>: Efficiently maintains a window
          of characters and adjusts it based on the problem's constraints.
        </li>
        <li>
          <code>Count Array</code>: Tracks character frequencies in the current
          window to ensure each character appears at most twice.
        </li>
      </ul>
    </>
  ),
  3095: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>kMax</code> is set to <code>50</code>, assuming the maximum
            possible value of <code>k</code>.
          </li>
          <li>
            <code>n</code> is the length of the array <code>nums</code>.
          </li>
          <li>
            <code>ans</code> is initialized to <code>n + 1</code>, which will
            eventually hold the minimum length of the subarray satisfying the
            condition.
          </li>
          <li>
            <code>ors</code> is initialized to <code>0</code>, which stores the
            current bitwise OR of the elements in the current window.
          </li>
          <li>
            <code>count</code> is an array of size <code>kMax + 1</code> used to
            count occurrences of each bit position in the current window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Iterate over the array using two pointers <code>l</code> (left) and{" "}
            <code>r</code> (right). Expand <code>r</code> to include more
            elements in the current window.
          </li>
          <li>
            Update <code>ors</code> using <code>orNum</code> function which
            modifies the <code>count</code> array based on the bitwise OR of{" "}
            <code>nums[r]</code>.
          </li>
          <li>
            If <code>ors</code> (the current OR value) is greater than or equal
            to <code>k</code>, attempt to shrink the window from the left (
            <code>l</code>) to find the minimum length subarray.
          </li>
        </ul>
      </li>
      <li>
        <strong>Functions:</strong>
        <ul>
          <li>
            <code>orNum</code>: Updates <code>count</code> array and returns the
            new bitwise OR value (<code>ors</code>) after including{" "}
            <code>num</code> in the window.
          </li>
          <li>
            <code>undoOrNum</code>: Updates <code>count</code> array and returns
            the new bitwise OR value (<code>ors</code>) after removing{" "}
            <code>num</code> from the window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Edge Cases:</strong>
        <ul>
          <li>
            If <code>ans</code> remains <code>n + 1</code> after the loop, it
            means no valid subarray was found, so return <code>-1</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  3097: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>kMax</code> is set to <code>50</code>, representing the
            maximum possible value for <code>k</code>.
          </li>
          <li>
            <code>n</code> is the length of the input array <code>nums</code>.
          </li>
          <li>
            <code>ans</code> is initialized to <code>n + 1</code>, which will
            store the minimum length of the subarray satisfying the condition.
          </li>
          <li>
            <code>ors</code> is initialized to <code>0</code>, which keeps track
            of the current bitwise OR of elements in the current window.
          </li>
          <li>
            <code>count</code> is an array of size <code>kMax + 1</code> used to
            count occurrences of each bit position in the current window.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Technique:</strong>
        <ul>
          <li>
            Use two pointers, <code>left</code> and <code>right</code>, to
            represent the current window in the array <code>nums</code>.
          </li>
          <li>
            Expand the window by moving <code>right</code> to include more
            elements until <code>ors</code> (the current OR value) is greater
            than or equal to <code>k</code>.
          </li>
          <li>
            Once <code>ors</code> meets or exceeds <code>k</code>, attempt to
            shrink the window from the left (<code>left</code>) to find the
            minimum length subarray that satisfies the condition.
          </li>
          <li>
            Update <code>ans</code> with the minimum length found as the window
            is adjusted.
          </li>
        </ul>
      </li>
      <li>
        <strong>Bitwise Operations:</strong>
        <ul>
          <li>
            <code>orNum</code> method updates the <code>count</code> array and
            returns the new bitwise OR value (<code>ors</code>) after including{" "}
            <code>num</code> in the window.
          </li>
          <li>
            <code>undoOrNum</code> method updates the <code>count</code> array
            and returns the new bitwise OR value (<code>ors</code>) after
            removing <code>num</code> from the window.
          </li>
          <li>
            These methods handle bitwise operations efficiently within the
            sliding window to maintain and update the OR value.
          </li>
        </ul>
      </li>
      <li>
        <strong>Edge Cases:</strong>
        <ul>
          <li>
            If <code>ans</code> remains <code>n + 1</code> after the loop, it
            indicates that no valid subarray meets the condition, so return{" "}
            <code>-1</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  95: (
    <>
      <ul>
        <li>
          The number of unique Binary Search Trees (BSTs) that can be formed
          with <em>n</em> nodes is given by the Catalan number.
        </li>
        <li>The nth Catalan number is given by the formula:</li>
        <ul>
          <li>
            <code>{`C<sub>n</sub> = \(\frac{1}{n + 1} \binom{2n}{n}\)`}</code>
          </li>
        </ul>
        <li>This can be simplified to:</li>
        <ul>
          <li>
            <code>{`C<sub>n</sub> = \(\frac{(2n)!}{(n+1)! \cdot n!}\)`}</code>
          </li>
        </ul>
        <li>
          Where{" "}
          <code>
            \(C<sub>n</sub>\)
          </code>{" "}
          represents the nth Catalan number.
        </li>
      </ul>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              The <code>TreeNode</code> class represents a node in the binary
              tree with:
              <ul>
                <li>
                  A value <code>val</code>.
                </li>
                <li>
                  A left child <code>left</code>.
                </li>
                <li>
                  A right child <code>right</code>.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Solution Class:</strong>
          <ul>
            <li>
              The <code>generateTrees</code> method is the entry point which
              takes an integer <code>n</code> and returns a list of all unique
              BSTs.
            </li>
            <li>
              If <code>n</code> is 0, it returns an empty list.
            </li>
          </ul>
        </li>
        <li>
          <strong>Recursive Helper Method:</strong>
          <ul>
            <li>
              The <code>generateTrees(int start, int end)</code> method
              recursively generates all possible BSTs for a given range of
              values.
            </li>
            <li>
              For each value <code>i</code> in the range from <code>start</code>{" "}
              to <code>end</code>, it considers <code>i</code> as the root and
              recursively generates:
              <ul>
                <li>
                  All left subtrees (from <code>start</code> to <code>i-1</code>
                  ).
                </li>
                <li>
                  All right subtrees (from <code>i+1</code> to <code>end</code>
                  ).
                </li>
              </ul>
            </li>
            <li>
              It combines each left subtree with each right subtree and attaches
              them to the root <code>i</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Combining Trees:</strong>
          <ul>
            <li>
              For each possible root <code>i</code>, the method combines:
              <ul>
                <li>
                  Every possible left subtree with every possible right subtree.
                </li>
                <li>
                  Forms a new tree with <code>i</code> as the root.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <ul>
        <li>
          <strong>Recursive Nature:</strong>
          <ul>
            <li>
              For each node chosen as the root, we need to generate all possible
              left and right subtrees.
            </li>
            <li>
              For a given node <code>i</code> as the root, we recursively
              generate trees for the left side (<code>1</code> to{" "}
              <code>i-1</code>) and the right side (<code>i+1</code> to{" "}
              <code>n</code>).
            </li>
            <li>
              This process involves a lot of repeated calculations for different
              subproblems.
            </li>
          </ul>
        </li>
        <li>
          <strong>Catalan Number:</strong>
          <ul>
            <li>
              The number of unique BSTs that can be generated with{" "}
              <code>n</code> nodes is given by the <code>n</code>th Catalan
              number, <code>C(n)</code>.
            </li>
            <li>
              The <code>n</code>th Catalan number can be expressed as:
              <ul>
                <li>
                  <code>{`C(n) = \(\frac{1}{n+1} \binom{2n}{n} = \frac{(2n)!}{(n+1)!n!}\)`}</code>
                </li>
              </ul>
            </li>
            <li>
              The Catalan number grows exponentially with <code>n</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Time Complexity:</strong>
          <ul>
            <li>
              The number of unique BSTs (which is the <code>n</code>th Catalan
              number) gives an indication of the number of trees generated.
            </li>
            <li>
              Constructing each tree involves creating nodes and linking them
              together, leading to an overall time complexity that is influenced
              by the Catalan number.
            </li>
            <li>
              The exact time complexity is <code>O(C(n) * n)</code>, where{" "}
              <code>C(n)</code> is the <code>n</code>th Catalan number.
            </li>
            <li>
              Since the Catalan number grows as{" "}
              <code>{`\(\frac{4^n}{n^{3/2} \sqrt{\pi}}\)`}</code>, the time
              complexity can be approximated as{" "}
              <code>{`O(\(\frac{4^n}{n^{3/2}}\))`}</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  36: (
    <>
      {" "}
      <h3>
        Helper Method: <code>isSafe</code>
      </h3>
      <ul>
        <li>
          <strong>Purpose:</strong> Check if placing a specific number in a
          given cell is valid.
        </li>
        <li>
          <strong>Check the Row:</strong>
          <ul>
            <li>
              Iterates over all columns in the given row to check if the number
              already exists.
            </li>
          </ul>
        </li>
        <li>
          <strong>Check the Column:</strong>
          <ul>
            <li>
              Iterates over all rows in the given column to check if the number
              already exists.
            </li>
          </ul>
        </li>
        <li>
          <strong>Check the 3x3 Sub-Box:</strong>
          <ul>
            <li>Calculates the starting indices of the 3x3 sub-box.</li>
            <li>Checks if the number already exists within that sub-box.</li>
          </ul>
        </li>
        <li>
          <strong>Return:</strong>
          <ul>
            <li>
              Returns <code>true</code> if the number can be safely placed;
              otherwise, <code>false</code>.
            </li>
          </ul>
        </li>
      </ul>
      <h3>
        Main Method: <code>isValidSudoku</code>
      </h3>
      <ul>
        <li>
          <strong>Purpose:</strong> Validate the entire Sudoku board.
        </li>
        <li>
          <strong>Iterate over Each Cell:</strong>
          <ul>
            <li>
              Nested loops are used to iterate over each cell of the 9x9 Sudoku
              board.
            </li>
          </ul>
        </li>
        <li>
          <strong>Skip Empty Cells:</strong>
          <ul>
            <li>
              If the current cell contains <code>'.'</code>, it is skipped.
            </li>
          </ul>
        </li>
        <li>
          <strong>Temporarily Mark as Empty:</strong>
          <ul>
            <li>
              Temporarily sets the current cell to <code>'.'</code> to avoid
              false positives while checking the current cell itself.
            </li>
          </ul>
        </li>
        <li>
          <strong>Check if Safe:</strong>
          <ul>
            <li>
              Uses the <code>isSafe</code> method to check if placing the
              current number in the current cell is valid.
            </li>
          </ul>
        </li>
        <li>
          <strong>Restore Original Value:</strong>
          <ul>
            <li>Restores the original value of the current cell.</li>
          </ul>
        </li>
        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              If any cell is found to be invalid, the function returns{" "}
              <code>false</code>.
            </li>
            <li>
              If all cells are valid, it returns <code>true</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  37: (
    <>
      <h3>
        Helper Method: <code>isSafe</code>
      </h3>
      <ul>
        <li>
          <strong>Purpose:</strong> Check if placing a specific number in a
          given cell is valid.
        </li>
        <li>
          <strong>Check the Row:</strong>
          <ul>
            <li>
              Iterates over all columns in the given row to check if the number
              already exists.
            </li>
          </ul>
        </li>
        <li>
          <strong>Check the Column:</strong>
          <ul>
            <li>
              Iterates over all rows in the given column to check if the number
              already exists.
            </li>
          </ul>
        </li>
        <li>
          <strong>Check the 3x3 Sub-Box:</strong>
          <ul>
            <li>Calculates the starting indices of the 3x3 sub-box.</li>
            <li>Checks if the number already exists within that sub-box.</li>
          </ul>
        </li>
        <li>
          <strong>Return:</strong>
          <ul>
            <li>
              Returns <code>true</code> if the number can be safely placed;
              otherwise, <code>false</code>.
            </li>
          </ul>
        </li>
      </ul>

      <h3>
        Recursive Method: <code>solve</code>
      </h3>
      <ul>
        <li>
          <strong>Purpose:</strong> Solve the Sudoku puzzle using backtracking.
        </li>
        <li>
          <strong>Check if All Cells are Explored:</strong>
          <ul>
            <li>If all cells are explored, the puzzle is solved.</li>
          </ul>
        </li>
        <li>
          <strong>Move to the Next Row:</strong>
          <ul>
            <li>
              If the end of a row is reached, move to the next row and reset the
              column to 0.
            </li>
          </ul>
        </li>
        <li>
          <strong>Check if Cell is Already Filled:</strong>
          <ul>
            <li>If the cell is already filled, move to the next cell.</li>
          </ul>
        </li>
        <li>
          <strong>Try Placing Numbers 1 to 9:</strong>
          <ul>
            <li>
              Place numbers 1 to 9 in the cell and check if the number is safe
              to place.
            </li>
            <li>If placing a number leads to a solution, return true.</li>
            <li>
              Reset the cell if the current number doesn't lead to a solution
              and continue with the next number.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return:</strong>
          <ul>
            <li>
              Returns <code>false</code> if no number can be placed in the cell.
            </li>
          </ul>
        </li>
      </ul>

      <h3>
        Main Method: <code>solveSudoku</code>
      </h3>
      <ul>
        <li>
          <strong>Purpose:</strong> Solve the given Sudoku puzzle.
        </li>
        <li>
          <strong>Convert char board to int grid:</strong>
          <ul>
            <li>
              Converts the given char board to an int grid where empty cells are
              represented by 0.
            </li>
          </ul>
        </li>
        <li>
          <strong>Solve the Sudoku puzzle:</strong>
          <ul>
            <li>
              Calls the <code>solve</code> method to solve the Sudoku puzzle.
            </li>
          </ul>
        </li>
        <li>
          <strong>Convert int grid back to char board:</strong>
          <ul>
            <li>
              Converts the int grid back to the char board where empty cells are
              represented by '.'.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  48: (
    <>
      {" "}
      <h2>Code Explanation</h2>
      <ul>
        <li>
          <strong>rotate(int[][] matrix)</strong>
          <ul>
            <li>Checks if the matrix is null or empty and returns if true.</li>
            <li>Gets the length of the matrix.</li>
            <li>
              Calls the <code>transpose(matrix, n)</code> method to transpose
              the matrix.
            </li>
            <li>
              Loops through each row and calls the{" "}
              <code>reverseRow(matrix[i], n)</code> method to reverse the row.
            </li>
          </ul>
        </li>
        <li>
          <strong>transpose(int[][] matrix, int n)</strong>
          <ul>
            <li>
              Loops through the matrix to transpose it by swapping elements at
              positions <code>(i, j)</code> with <code>(j, i)</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>reverseRow(int[] row, int n)</strong>
          <ul>
            <li>
              Initializes two pointers, <code>left</code> and <code>right</code>
              .
            </li>
            <li>
              Reverses the row by swapping elements at the <code>left</code> and{" "}
              <code>right</code> pointers until they meet in the middle.
            </li>
          </ul>
        </li>
        <li>
          <strong>swap(int[][] matrix, int i, int j, int x, int y)</strong>
          <ul>
            <li>
              Swaps the elements at positions <code>(i, j)</code> and{" "}
              <code>(x, y)</code> in the matrix.
            </li>
          </ul>
        </li>
        <li>
          <strong>main(String[] args)</strong>
          <ul>
            <li>
              Creates an instance of the <code>RotateImage</code> class.
            </li>
            <li>Defines a sample matrix to rotate.</li>
            <li>
              Calls the <code>rotate(matrix)</code> method to rotate the matrix.
            </li>
            <li>Prints the rotated matrix to the console.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  54: (
    <ul>
      <li>
        <strong>Class Declaration</strong>
        <ul>
          <li>
            <code>public class SpiralMatrixDFS</code> declares the class.
          </li>
        </ul>
      </li>
      <li>
        <strong>Direction Arrays</strong>
        <ul>
          <li>
            <code>private static final int[] dr = {(0, 1, 0, -1)};</code>{" "}
            represents row movement.
          </li>
          <li>
            <code>private static final int[] dc = {(1, 0, -1, 0)};</code>{" "}
            represents column movement.
          </li>
        </ul>
      </li>
      <li>
        <strong>spiralOrder(int[][] matrix)</strong>
        <ul>
          <li>
            Initializes an empty list <code>result</code> to store the spiral
            order.
          </li>
          <li>
            Checks if the matrix is null or empty, returning an empty result if
            true.
          </li>
          <li>
            Initializes the number of rows and columns, and a{" "}
            <code>visited</code> matrix to track visited cells.
          </li>
          <li>
            Calls the <code>dfs</code> method starting from the top-left corner
            with initial direction 0 (right).
          </li>
          <li>
            Returns the <code>result</code> list.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          dfs(int[][] matrix, boolean[][] visited, List&lt;Integer&gt; result,
          int row, int col, int direction)
        </strong>
        <ul>
          <li>
            Base case: If the current cell is out of bounds or already visited,
            return.
          </li>
          <li>
            Marks the current cell as visited and adds its value to the{" "}
            <code>result</code> list.
          </li>
          <li>
            Calculates the next cell to visit based on the current direction.
          </li>
          <li>
            If the next cell is invalid (out of bounds or already visited),
            changes direction to the next one.
          </li>
          <li>
            Recursively calls <code>dfs</code> with the next cell.
          </li>
        </ul>
      </li>
      <li>
        <strong>main(String[] args)</strong>
        <ul>
          <li>
            Creates an instance of the <code>SpiralMatrixDFS</code> class.
          </li>
          <li>Defines a sample matrix to be traversed.</li>
          <li>
            Calls the <code>spiralOrder(matrix)</code> method and stores the
            result.
          </li>
          <li>Prints the result, which is the matrix in spiral order.</li>
        </ul>
      </li>
    </ul>
  ),
  59: (
    <ul>
      <li>
        <strong>Class Declaration</strong>
        <ul>
          <li>
            <code>public class SpiralMatrixII</code> declares the class.
          </li>
        </ul>
      </li>
      <li>
        <strong>Direction Arrays</strong>
        <ul>
          <li>
            <code>private static final int[] dr = {(0, 1, 0, -1)};</code>{" "}
            represents row movement (right, down, left, up).
          </li>
          <li>
            <code>private static final int[] dc = {(1, 0, -1, 0)};</code>{" "}
            represents column movement (right, down, left, up).
          </li>
        </ul>
      </li>
      <li>
        <strong>generateMatrix(int n)</strong>
        <ul>
          <li>
            Initializes an <code>n x n</code> matrix and a <code>visited</code>{" "}
            matrix to track visited cells.
          </li>
          <li>
            Initializes starting positions <code>row</code> and <code>col</code>{" "}
            to 0 and starting direction <code>dir</code> to 0 (right).
          </li>
          <li>
            Fills the matrix in a spiral order from 1 to <code>n * n</code>{" "}
            using a loop.
          </li>
          <li>
            In each iteration, assigns the current number to the matrix cell and
            marks it as visited.
          </li>
          <li>
            Calculates the next cell position based on the current direction.
          </li>
          <li>
            If the next cell is invalid (out of bounds or already visited),
            changes direction and calculates the next cell position again.
          </li>
        </ul>
      </li>
      <li>
        <strong>main(String[] args)</strong>
        <ul>
          <li>
            Creates an instance of the <code>SpiralMatrixII</code> class.
          </li>
          <li>
            Defines a sample size <code>n</code> for the matrix.
          </li>
          <li>
            Calls the <code>generateMatrix(n)</code> method and stores the
            result.
          </li>
          <li>Prints the generated matrix in spiral order.</li>
        </ul>
      </li>
    </ul>
  ),
  3191: (
    <>
      {" "}
      <ul>
        <li>
          First, it gets the length of the array <u>nums</u> and stores it in
          the variable <u>n</u>.
        </li>
        <li>
          It initializes a variable <u>ans</u> to <u>0</u>, which will be used
          to count the number of operations.
        </li>
        <li>
          It then loops through the array from the start to the third last
          element (i.e., up to index <u>n-3</u>), and for each element{" "}
          <u>nums[i]</u>:
        </li>
        <ul>
          <li>
            If <u>nums[i]</u> is <u>0</u>, it performs two operations:
            <ul>
              <li>
                It flips the value of <u>nums[i + 1]</u> (using the XOR
                operation with <u>1</u>).
              </li>
              <li>
                It also flips the value of <u>nums[i + 2]</u> (using the XOR
                operation with <u>1</u>).
              </li>
            </ul>
          </li>
          <li>
            It increments the <u>ans</u> by <u>1</u> to count this operation.
          </li>
        </ul>
        <li>
          Finally, it checks the last two elements of the array:
          <ul>
            <li>
              If either of the last two elements (i.e., <u>nums[n - 1]</u> or{" "}
              <u>nums[n - 2]</u>) is <u>0</u>, it returns <u>-1</u> indicating
              that it's not possible to perform the operations to satisfy the
              conditions.
            </li>
            <li>
              Otherwise, it returns the value of <u>ans</u> which represents the
              minimum number of operations performed.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  167: (
    <>
      {" "}
      <h2>Explanation of Solution:</h2>
      <ul>
        <li>
          Initialize two pointers, <code>left</code> and <code>right</code>, at
          the beginning and end of the array respectively.
        </li>
        <li>
          Iterate through the array using a while loop, adjusting the pointers
          based on the sum of elements at these pointers:
        </li>
        <ul>
          <li>
            If the sum equals the <code>target</code>, return an array
            containing the indices <code>left + 1</code> and{" "}
            <code>right + 1</code> (1-based index).
          </li>
          <li>
            If the sum is less than the <code>target</code>, move the{" "}
            <code>left</code> pointer to the right to increase the sum.
          </li>
          <li>
            If the sum is greater than the <code>target</code>, move the{" "}
            <code>right</code> pointer to the left to decrease the sum.
          </li>
        </ul>
        <li>
          If no valid pair is found that sums up to <code>target</code>, return
          an empty array.
        </li>
      </ul>
    </>
  ),
  189: (
    <>
      <h2>Explanation of Solution:</h2>

      <ul>
        <li>
          <code>rotate(int[] nums, int k)</code>: This method rotates the array{" "}
          <code>nums</code> to the right by <code>k</code> steps.
        </li>
        <li>
          <code>k = k % nums.length;</code>: Ensures <code>k</code> is within
          the range of array length to handle large <code>k</code> values.
        </li>
        <li>
          <code>reverse(nums, 0, nums.length - 1);</code>: Reverses the entire
          array.
        </li>
        <li>
          <code>reverse(nums, 0, k - 1);</code>: Reverses the first{" "}
          <code>k</code> elements of the array.
        </li>
        <li>
          <code>reverse(nums, k, nums.length - 1);</code>: Reverses the
          remaining elements after the first <code>k</code> elements.
        </li>
      </ul>

      <h3>
        Explanation of <code>reverse</code> Helper Method:
      </h3>
      <ul>
        <li>
          <code>private void reverse(int[] nums, int start, int end)</code>:
          This method reverses the elements in the array <code>nums</code>{" "}
          between indices <code>start</code> and <code>end</code>, inclusive.
        </li>
        <li>
          It uses a two-pointer approach to swap elements: <code>start</code>{" "}
          from the beginning and <code>end</code> from the end, moving towards
          the middle.
        </li>
      </ul>

      <p>
        This approach effectively rotates the array in-place with O(n) time
        complexity, where n is the number of elements in the array, using the
        reversal technique. It operates directly on the input array without
        using additional space proportional to the array size, making it both
        time and space efficient.
      </p>
    </>
  ),
  202: (
    <>
      <h2>Explanation of Happy Number Solution:</h2>

      <ul>
        <li>
          <code>boolean isHappy(int n)</code>: This method checks if the number{" "}
          <code>n</code> is a happy number.
        </li>
        <li>
          <code>HashSet&lt;Integer&gt; seen</code>: A HashSet to keep track of
          numbers already encountered to detect cycles.
        </li>
        <li>
          <code>while (n != 1 &amp;&amp; !seen.contains(n))</code>: Loop
          continues until <code>n</code> becomes 1 (indicating a happy number)
          or we detect a cycle.
        </li>
        <li>
          <code>seen.add(n)</code>: Adds <code>n</code> to <code>seen</code> set
          to track its occurrence.
        </li>
        <li>
          <code>n = getNextNumber(n)</code>: Updates <code>n</code> to its next
          number based on the sum of squares of its digits.
        </li>
        <li>
          <code>int getNextNumber(int n)</code>: Helper method to compute the
          sum of squares of digits of <code>n</code>.
        </li>
        <li>
          Uses a systematic process of digit extraction, squaring, and summing
          to determine if a number is happy.
        </li>
      </ul>

      <h3>Example:</h3>
      <p>For number 19:</p>
      <ul>
        <li>( 1^2 + 9^2 = 1 + 81 = 82 )</li>
        <li>( 8^2 + 2^2 = 64 + 4 = 68 )</li>
        <li>( 6^2 + 8^2 = 36 + 64 = 100 )</li>
        <li>( 1^2 + 0^2 + 0^2 = 1 )</li>
        <li>Hence, 19 is a happy number.</li>
      </ul>
    </>
  ),
  283: (
    <>
      <h2>Explanation of Move Zeroes Solution</h2>
      <ul>
        <li>
          <code>public void moveZeroes(int[] nums)</code>: This method
          rearranges an array <code>nums</code> such that all zeros are moved to
          the end while maintaining the order of non-zero elements.
        </li>
        <li>
          <code>int slow = 0;</code>: Initializes a pointer <code>slow</code> to
          track where the next non-zero element should be placed.
        </li>
        <li>
          Iterates through the array with <code>fast</code> pointer.
        </li>
        <li>
          <code>if (nums[fast] != 0)</code>: Checks if the current element is
          non-zero.
        </li>
        <li>
          If non-zero, swaps <code>nums[slow]</code> with{" "}
          <code>nums[fast]</code> to place non-zero elements at the beginning of
          the array.
        </li>
        <li>
          <code>slow++;</code>: Moves <code>slow</code> pointer forward to the
          next position.
        </li>
        <li>
          After iterating through the array, all non-zero elements are at the
          beginning in their original order, and zeros are naturally at the end.
        </li>
      </ul>
    </>
  ),
  287: (
    <>
      {" "}
      <h2>Explanation of Find the Duplicate Number Solution</h2>
      <ul>
        <li>
          <code>public int findDuplicate(int[] nums)</code>: This method finds
          the duplicate number in an array <code>nums</code>.
        </li>
        <li>
          <code>int slow = nums[0];</code>: Initializes the <code>slow</code>{" "}
          pointer to start at the first element of the array.
        </li>
        <li>
          <code>int fast = nums[nums[0]];</code>: Initializes the{" "}
          <code>fast</code> pointer to start at the element pointed to by the
          value at index <code>nums[0]</code>.
        </li>
        <li>
          <strong>Phase 1: Cycle Detection</strong>
          <ul>
            <li>
              Uses Floyd's Tortoise and Hare algorithm to detect the
              intersection point within the cycle:
            </li>
            <li>
              <code>while (slow != fast)</code>: Moves <code>slow</code> one
              step at a time and <code>fast</code> two steps at a time until
              they meet.
            </li>
            <li>
              Identifies the intersection point where <code>slow</code> and{" "}
              <code>fast</code> meet.
            </li>
          </ul>
        </li>
        <li>
          <strong>Phase 2: Find the Duplicate Number</strong>
          <ul>
            <li>
              Resets <code>fast</code> to start from the beginning of the array.
            </li>
            <li>
              <code>while (slow != fast)</code>: Moves both <code>slow</code>{" "}
              and <code>fast</code> one step at a time until they meet at the
              entrance of the cycle.
            </li>
            <li>The meeting point is the duplicate number.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  344: (
    <>
      <h2>Explanation of Reverse String Solution</h2>
      <ul>
        <li>
          <code>public void reverseString(char[] s)</code>: This method reverses
          the array of characters <code>s</code> in-place.
        </li>
        <li>
          <code>int left = 0;</code>: Initializes the <code>left</code> pointer
          to start at the beginning of the array.
        </li>
        <li>
          <code>int right = s.length - 1;</code>: Initializes the{" "}
          <code>right</code> pointer to start at the end of the array.
        </li>
        <li>
          <strong>Reversing Process:</strong>
          <ul>
            <li>Uses a two-pointer approach:</li>
            <li>
              <code>while (left &lt; right)</code>: Swaps characters at{" "}
              <code>left</code> and <code>right</code> pointers until they meet
              in the middle.
            </li>
            <li>
              Swaps characters using a temporary variable <code>temp</code>.
            </li>
            <li>
              Moves <code>left</code> pointer forward and <code>right</code>{" "}
              pointer backward after each swap.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  349: (
    <>
      <h2>Explanation of Intersection of Two Arrays Solution</h2>
      <ul>
        <li>
          <code>public int[] intersection(int[] nums1, int[] nums2)</code>: This
          method finds the intersection of two arrays <code>nums1</code> and{" "}
          <code>nums2</code>.
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Creates a <code>HashSet&lt;Integer&gt; set</code> to store
              elements of <code>nums1</code> for efficient lookup.
            </li>
            <li>
              Creates another <code>HashSet&lt;Integer&gt; intersect</code> to
              store the intersection elements.
            </li>
          </ul>
        </li>
        <li>
          <strong>Finding Intersection:</strong>
          <ul>
            <li>
              Adds each element of <code>nums1</code> to <code>set</code>.
            </li>
            <li>
              Iterates through <code>nums2</code> and checks if each element
              exists in <code>set</code>. If yes, adds it to{" "}
              <code>intersect</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Convert to Array:</strong>
          <ul>
            <li>
              Converts <code>intersect</code> set to an array{" "}
              <code>result</code> to return as the final intersection result.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              Returns the <code>result</code> array containing the intersection
              elements.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  350: (
    <>
      <h2>Explanation of Intersection of Two Arrays II Solution</h2>
      <ul>
        <li>
          <code>public int[] intersect(int[] nums1, int[] nums2)</code>: This
          method finds the intersection of two arrays <code>nums1</code> and{" "}
          <code>nums2</code> considering the frequency of elements.
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Creates a <code>HashMap&lt;Integer, Integer&gt; map</code> to
              count the frequency of elements in <code>nums1</code>.
            </li>
            <li>
              Creates a <code>List&lt;Integer&gt; intersect</code> to store the
              intersection elements.
            </li>
          </ul>
        </li>
        <li>
          <strong>Counting Frequency:</strong>
          <ul>
            <li>
              Iterates through <code>nums1</code> and populates <code>map</code>{" "}
              with each element's frequency using{" "}
              <code>map.put(num, map.getOrDefault(num, 0) + 1);</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Finding Intersection:</strong>
          <ul>
            <li>
              Iterates through <code>nums2</code>:
            </li>
            <li>
              Checks if each element exists in <code>map</code> and its count is
              greater than zero (<code>map.get(num) &gt; 0</code>).
            </li>
            <li>
              If yes, adds the element to <code>intersect</code> list and
              decrements its count in <code>map</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Convert to Array:</strong>
          <ul>
            <li>
              Converts <code>intersect</code> list to an array{" "}
              <code>result</code> to return as the final intersection result.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              Returns the <code>result</code> array containing the intersection
              elements considering their frequency.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  360: (
    <>
      <h2>Explanation of Sort Transformed Array Solution</h2>
      <ul>
        <li>
          <code>
            public int[] sortTransformedArray(int[] nums, int a, int b, int c)
          </code>
          : This method sorts the transformed array based on the quadratic
          function \( ax^2 + bx + c \).
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Initializes variables: <code>n</code> as the length of{" "}
              <code>nums</code>, <code>left</code> and <code>right</code> as
              pointers to the beginning and end of <code>nums</code>, and{" "}
              <code>k</code> as an index for placing values in <code>res</code>{" "}
              array.
            </li>
            <li>
              Creates <code>res</code> array to store the sorted transformed
              values.
            </li>
          </ul>
        </li>
        <li>
          <strong>Sorting Process:</strong>
          <ul>
            <li>
              Uses a while loop to iterate while <code>left</code> is less than
              or equal to <code>right</code>:
            </li>
            <li>
              Calculates transformed values <code>v1</code> and <code>v2</code>{" "}
              for elements at <code>left</code> and <code>right</code> indices
              using the quadratic function.
            </li>
            <li>
              Determines the direction of sorting based on the sign of{" "}
              <code>a</code>:
            </li>
            <ul>
              <li>
                If <code>a &lt; 0</code>: Places smaller value between{" "}
                <code>v1</code> and <code>v2</code> into <code>res[k]</code> and
                increments <code>left</code> or decrements <code>right</code>.
              </li>
              <li>
                If <code>a &ge; 0</code>: Places larger value between{" "}
                <code>v1</code> and <code>v2</code> into <code>res[k]</code> and
                increments <code>left</code> or decrements <code>right</code>.
              </li>
            </ul>
            <li>
              Adjusts <code>k</code> based on the direction of sorting.
            </li>
          </ul>
        </li>
        <li>
          <strong>Transformation Function:</strong>
          <ul>
            <li>
              <code>private int fn(int a, int b, int c, int x)</code>: Computes
              the value of the quadratic function \( ax^2 + bx + c \) for a
              given <code>x</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              Returns the <code>res</code> array containing the sorted
              transformed values.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  457: (
    <>
      <h2>Explanation of Circular Array Loop Solution</h2>
      <ul>
        <li>
          <code>public boolean circularArrayLoop(int[] nums)</code>: This method
          checks if there exists a circular loop in the given array{" "}
          <code>nums</code>.
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Checks if the length of <code>nums</code> is less than 2; if so,
              returns <code>false</code> immediately.
            </li>
            <li>
              Iterates through each element in <code>nums</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Main Loop:</strong>
          <ul>
            <li>
              For each element <code>nums[i]</code>, skips if it's already
              visited (marked as 0).
            </li>
            <li>
              Initializes <code>slow</code> pointer to <code>i</code> and{" "}
              <code>fast</code> pointer to the next index using the{" "}
              <code>advance</code> method.
            </li>
            <li>Uses two conditions to detect a cycle:</li>
            <ul>
              <li>
                <code>nums[i] * nums[fast] &gt; 0</code> and{" "}
                <code>nums[i] * nums[advance(nums, fast)] &gt; 0</code>: Ensures
                all elements in the loop have the same direction.
              </li>
              <li>
                If conditions are met and <code>slow</code> meets{" "}
                <code>fast</code>, checks for a valid cycle (excluding
                self-loops).
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <strong>Marking Visited Nodes:</strong>
          <ul>
            <li>
              Resets the loop starting from <code>i</code>, marking all nodes
              involved in the cycle as visited by setting them to 0.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Helper Method <code>advance(int[] nums, int i)</code>:
          </strong>
          <ul>
            <li>
              Calculates the next index using the formula:{" "}
              <code>(i + nums[i]) % n</code>.
            </li>
            <li>
              Handles negative indices by adding <code>n</code> if necessary.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return Result:</strong>
          <ul>
            <li>
              Returns <code>true</code> if a valid circular loop is found;
              otherwise, returns <code>false</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  532: (
    <>
      <h2>Explanation of findPairs Method</h2>
      <ul>
        <li>
          <code>public int findPairs(int[] nums, int k)</code>: This method
          calculates the number of k-difference pairs in the array{" "}
          <code>nums</code>.
        </li>
        <li>
          <strong>Edge Case Handling:</strong>
          <ul>
            <li>
              Checks if <code>nums</code> is null, has fewer than 2 elements, or{" "}
              <code>k</code> is negative. If true, returns 0 immediately.
            </li>
          </ul>
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Initializes a <code>{`Map<Integer, Integer>`}</code> named{" "}
              <code>frequencyMap</code> to store the frequency of each element
              in <code>nums</code>.
            </li>
            <li>
              Initializes a <code>{`Set<Integer>`}</code> named{" "}
              <code>countedPairs</code> to keep track of already counted pairs
              to avoid duplicates.
            </li>
            <li>
              Initializes <code>count</code> to 0, which will store the number
              of k-difference pairs.
            </li>
          </ul>
        </li>
        <li>
          <strong>First Pass: Frequency Counting</strong>
          <ul>
            <li>
              Iterates through each element <code>num</code> in{" "}
              <code>nums</code> and updates its frequency in{" "}
              <code>frequencyMap</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Second Pass: Counting Pairs</strong>
          <ul>
            <li>
              Iterates through each element <code>num</code> in{" "}
              <code>nums</code>.
            </li>
            <li>
              Checks if <code>num + k</code> exists in <code>frequencyMap</code>{" "}
              and ensures <code>num</code> itself has not been counted already (
              <code>!countedPairs.contains(num)</code>).
            </li>
            <li>
              If <code>k</code> is 0, checks if the frequency of{" "}
              <code>num</code> is greater than 1 to avoid counting pairs with
              the same element.
            </li>
            <li>
              If conditions are met, increments <code>count</code> and adds{" "}
              <code>num</code> to <code>countedPairs</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return the Count:</strong>
          <ul>
            <li>
              Returns <code>count</code>, which represents the number of valid
              k-difference pairs in <code>nums</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  556: (
    <>
      <h2>Explanation of Next Greater Element III</h2>
      <ul>
        <li>
          <code>public int nextGreaterElement(int n)</code>: This method finds
          the next greater element with the same set of digits for the given
          number <code>n</code>.
        </li>
        <li>
          <strong>Convert Number to Array of Digits:</strong>
          <ul>
            <li>
              Converts the integer <code>n</code> to a character array{" "}
              <code>digits</code> for easier manipulation.
            </li>
          </ul>
        </li>
        <li>
          <strong>Identify the Point of Dip:</strong>
          <ul>
            <li>
              Traverses the array from right to left to find the first digit
              that is smaller than the digit immediately to its right. This is
              stored in <code>left</code>.
            </li>
            <li>
              If no such digit is found (<code>left == -1</code>), returns -1 as
              no greater number can be formed.
            </li>
          </ul>
        </li>
        <li>
          <strong>Find the Smallest Greater Digit:</strong>
          <ul>
            <li>
              Finds the smallest digit on the right side of the dip point that
              is greater than <code>digits[left]</code>. This is stored in{" "}
              <code>right</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Swap and Sort:</strong>
          <ul>
            <li>
              Swaps the digits at positions <code>left</code> and{" "}
              <code>right</code>.
            </li>
            <li>
              Reverses the digits to the right of the dip point to get the
              smallest possible number that is greater than the original number.
            </li>
          </ul>
        </li>
        <li>
          <strong>Check for Validity:</strong>
          <ul>
            <li>
              Converts the modified character array back to a long integer.
            </li>
            <li>
              Checks if the result is within the valid 32-bit integer range.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return the Result:</strong>
          <ul>
            <li>
              Returns the new number if it is valid, otherwise returns -1.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  581: (
    <>
      <h2>Explanation of Shortest Unsorted Continuous Subarray</h2>
      <ul>
        <li>
          <code>public int findUnsortedSubarray(int[] nums)</code>: This method
          finds the shortest unsorted continuous subarray that, when sorted,
          makes the whole array sorted.
        </li>
        <li>
          <strong>Identify the Unsorted Subarray:</strong>
          <ul>
            <li>
              Initializes two pointers <code>left</code> at the start of the
              array and <code>right</code> at the end.
            </li>
            <li>
              Moves <code>left</code> pointer to the right until it finds the
              first element that is out of order. This is done by the loop:
              <ul>
                <li>
                  <code>{`while (left < n - 1 && nums[left] <= nums[left + 1]) { left++; }`}</code>
                </li>
              </ul>
            </li>
            <li>
              Moves <code>right</code> pointer to the left until it finds the
              first element that is out of order. This is done by the loop:
              <ul>
                <li>
                  <code>{`while (right > 0 && nums[right] &gt;= nums[right - 1]) { right--; }`}</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Check if the Array is Already Sorted:</strong>
          <ul>
            <li>
              If <code>left</code> reaches the end of the array, it means the
              array is already sorted, and the function returns 0:
              <ul>
                <li>
                  <code>{`if (left == n - 1) { return 0; }`}</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Find Minimum and Maximum in the Unsorted Subarray:</strong>
          <ul>
            <li>
              Finds the minimum and maximum values in the subarray defined by{" "}
              <code>left</code> and <code>right</code> pointers:
              <ul>
                <li>
                  <code>{`for (int i = left; i <= right; i++) { subarrayMin = Math.min(subarrayMin, nums[i]); subarrayMax = Math.max(subarrayMax, nums[i]); }`}</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Expand the Bounds:</strong>
          <ul>
            <li>
              Extends the <code>left</code> boundary to include any elements
              greater than <code>subarrayMin</code>:
              <ul>
                <li>
                  <code>{`while (left > 0 && nums[left - 1] > subarrayMin) { left--; }`}</code>
                </li>
              </ul>
            </li>
            <li>
              Extends the <code>right</code> boundary to include any elements
              smaller than <code>subarrayMax</code>:
              <ul>
                <li>
                  <code>{`while (right < n - 1 && nums[right + 1] < subarrayMax) { right++; }`}</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Calculate the Length of the Unsorted Subarray:</strong>
          <ul>
            <li>
              Returns the length of the subarray from <code>left</code> to{" "}
              <code>right</code>:
              <ul>
                <li>
                  <code>return right - left + 1;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  611: (
    <>
      <h2>Explanation of Valid Triangle Number</h2>
      <ul>
        <li>
          <code>public int triangleNumber(int[] nums)</code>: This method
          returns the number of valid triangles that can be formed with the
          given array of integers.
        </li>
        <li>
          <strong>Sort the Array:</strong>
          <ul>
            <li>
              Sorts the array to make it easier to find valid triangles using
              the two-pointer technique:
              <ul>
                <li>
                  <code>Arrays.sort(nums);</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Iterate Over the Array:</strong>
          <ul>
            <li>
              Starts from the end of the array and iterates backwards to use the
              current element as the largest side of the triangle:
              <ul>
                <li>
                  <code>for (int i = nums.length - 1; i &gt;= 2; i--)</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Use Two-Pointer Technique:</strong>
          <ul>
            <li>
              Initializes two pointers, <code>left</code> at the beginning and{" "}
              <code>right</code> just before the current element:
              <ul>
                <li>
                  <code>int left = 0, right = i - 1;</code>
                </li>
              </ul>
            </li>
            <li>
              Moves the pointers to find valid triangles:
              <ul>
                <li>
                  If the sum of the elements at <code>left</code> and{" "}
                  <code>right</code> is greater than the current element, it
                  means all elements between <code>left</code> and{" "}
                  <code>right</code> can form a triangle with the current
                  element. Add the count of these elements to the total count
                  and move the <code>right</code> pointer to the left:
                  <ul>
                    <li>
                      <code>{`if (nums[left] + nums[right] > nums[i]) { count += right - left; right--; }`}</code>
                    </li>
                  </ul>
                </li>
                <li>
                  If the sum is not greater, move the <code>left</code> pointer
                  to the right:
                  <ul>
                    <li>
                      <code>{`else { left++; }`}</code>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Return the Count:</strong>
          <ul>
            <li>
              Returns the total count of valid triangles:
              <ul>
                <li>
                  <code>return count;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  633: (
    <>
      <h2>Explanation of Sum of Square Numbers</h2>
      <ul>
        <li>
          <code>public boolean judgeSquareSum(int c)</code>: This method
          determines if a given number <code>c</code> can be expressed as the
          sum of two squares.
        </li>
        <li>
          <strong>Initialize Pointers:</strong>
          <ul>
            <li>
              Initializes two pointers, <code>left</code> at 0 and{" "}
              <code>right</code> at the integer square root of <code>c</code>:
              <ul>
                <li>
                  <code>long left = 0;</code>
                </li>
                <li>
                  <code>long right = (long) Math.sqrt(c);</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Use Two-Pointer Technique:</strong>
          <ul>
            <li>
              Checks all pairs of integers <code>left</code> and{" "}
              <code>right</code> to see if their squares sum to <code>c</code>:
              <ul>
                <li>
                  <code>{`while (left <= right)`}</code>
                </li>
              </ul>
            </li>
            <li>
              Calculates the sum of squares:
              <ul>
                <li>
                  <code>long sum = left * left + right * right;</code>
                </li>
              </ul>
            </li>
            <li>
              Compares the sum to <code>c</code>:
              <ul>
                <li>
                  If the sum is equal to <code>c</code>, returns true:
                  <ul>
                    <li>
                      <code>{`if (sum == c) { return true; }`}</code>
                    </li>
                  </ul>
                </li>
                <li>
                  If the sum is less than <code>c</code>, increments the{" "}
                  <code>left</code> pointer:
                  <ul>
                    <li>
                      <code>{`else if (sum < c) { left++; }`}</code>
                    </li>
                  </ul>
                </li>
                <li>
                  If the sum is greater than <code>c</code>, decrements the{" "}
                  <code>right</code> pointer:
                  <ul>
                    <li>
                      <code>{`else { right--; }`}</code>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Return False if No Pair Found:</strong>
          <ul>
            <li>
              If no valid pairs are found, returns false:
              <ul>
                <li>
                  <code>return false;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  647: (
    <>
      <h2>Explanation of Palindromic Substrings</h2>
      <ul>
        <li>
          <code>public int countSubstrings(String s)</code>: This method returns
          the number of palindromic substrings in the given string{" "}
          <code>s</code>.
        </li>
        <li>
          <strong>Initialize Variables:</strong>
          <ul>
            <li>
              Initializes the length of the string <code>n</code> and the count
              of palindromic substrings <code>count</code>:
              <ul>
                <li>
                  <code>int n = s.length();</code>
                </li>
                <li>
                  <code>int count = 0;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Iterate Over Each Character:</strong>
          <ul>
            <li>
              Uses a for-loop to iterate over each character in the string as a
              potential center for palindromic substrings:
              <ul>
                <li>
                  <code>{`for (int i = 0; i < n; i++)`}</code>
                </li>
              </ul>
            </li>
            <li>
              Counts palindromic substrings with the current character as the
              center for odd-length palindromes:
              <ul>
                <li>
                  <code>count += countPalindromesAroundCenter(s, i, i);</code>
                </li>
              </ul>
            </li>
            <li>
              Counts palindromic substrings with the current and next character
              as the center for even-length palindromes:
              <ul>
                <li>
                  <code>
                    count += countPalindromesAroundCenter(s, i, i + 1);
                  </code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Return the Count:</strong>
          <ul>
            <li>
              Returns the total count of palindromic substrings:
              <ul>
                <li>
                  <code>return count;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <code>
            private int countPalindromesAroundCenter(String s, int left, int
            right)
          </code>
          : This helper method counts the number of palindromic substrings
          centered around the given indices <code>left</code> and{" "}
          <code>right</code>.
        </li>
        <li>
          <strong>Initialize Variables:</strong>
          <ul>
            <li>
              Initializes the count of palindromic substrings to 0:
              <ul>
                <li>
                  <code>int count = 0;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Expand Around Center:</strong>
          <ul>
            <li>
              Uses a while-loop to expand around the center as long as the
              characters at <code>left</code> and <code>right</code> are equal:
              <ul>
                <li>
                  <code>{`while (left &gt;= 0 && right < s.length() && s.charAt(left) == s.charAt(right))`}</code>
                </li>
              </ul>
            </li>
            <li>
              Increments the count for each palindromic substring found and
              moves the pointers outward:
              <ul>
                <li>
                  <code>count++;</code>
                </li>
                <li>
                  <code>left--;</code>
                </li>
                <li>
                  <code>right++;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Return the Count:</strong>
          <ul>
            <li>
              Returns the count of palindromic substrings found for the given
              center:
              <ul>
                <li>
                  <code>return count;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  719: (
    <>
      <h2>Explanation of K-th Smallest Pair Distance</h2>
      <ul>
        <li>
          <code>public int smallestDistancePair(int[] nums, int k)</code>: This
          method finds the k-th smallest distance between any two pairs in the
          array <code>nums</code>.
        </li>
        <li>
          <strong>Sort the Array:</strong>
          <ul>
            <li>
              Sorts the input array to make it easier to find pairs with
              specific distances:
              <ul>
                <li>
                  <code>Arrays.sort(nums);</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Initialize Binary Search Bounds:</strong>
          <ul>
            <li>
              Initializes the left bound to 0 and the right bound to the maximum
              possible distance (difference between the largest and smallest
              elements):
              <ul>
                <li>
                  <code>int left = 0;</code>
                </li>
                <li>
                  <code>int right = nums[n - 1] - nums[0];</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Binary Search:</strong>
          <ul>
            <li>
              Uses binary search to find the k-th smallest distance:
              <ul>
                <li>
                  <code>while (left &lt; right)</code>
                </li>
              </ul>
            </li>
            <li>
              Calculates the middle value <code>mid</code> and counts the number
              of pairs with a distance less than or equal to <code>mid</code>:
              <ul>
                <li>
                  <code>int mid = (left + right) / 2;</code>
                </li>
                <li>
                  <code>if (countPairs(nums, mid) &lt; k)</code>
                </li>
              </ul>
            </li>
            <li>
              If the count is less than k, adjusts the left bound; otherwise,
              adjusts the right bound:
              <ul>
                <li>
                  <code>left = mid + 1;</code>
                </li>
                <li>
                  <code>right = mid;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Return the Result:</strong>
          <ul>
            <li>
              Returns the left bound as the k-th smallest distance:
              <ul>
                <li>
                  <code>return left;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <code>private int countPairs(int[] nums, int mid)</code>: This helper
          method counts the number of pairs in the array with a distance less
          than or equal to <code>mid</code>.
        </li>
        <li>
          <strong>Initialize Count:</strong>
          <ul>
            <li>
              Initializes the count of pairs to 0:
              <ul>
                <li>
                  <code>int count = 0;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Count Pairs:</strong>
          <ul>
            <li>
              Uses a nested loop to count pairs with a distance less than or
              equal to <code>mid</code>:
              <ul>
                <li>
                  <code>for (int i = 0; i &lt; n; i++)</code>
                </li>
                <li>
                  <code>{`while (j < n && nums[j] - nums[i] <= mid)`}</code>
                </li>
                <li>
                  <code>count += j - i - 1;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Return the Count:</strong>
          <ul>
            <li>
              Returns the count of pairs:
              <ul>
                <li>
                  <code>return count;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  786: (
    <>
      <h2>Explanation of K-th Smallest Prime Fraction</h2>
      <ul>
        <li>
          <code>public int[] kthSmallestPrimeFraction(int[] arr, int k)</code>:
          This method returns the k-th smallest prime fraction from the sorted
          array <code>arr</code>.
        </li>
        <li>
          <strong>Initialize Variables:</strong>
          <ul>
            <li>
              Initializes the length of the array <code>n</code> and a min-heap{" "}
              <code>minHeap</code> to store fractions:
              <ul>
                <li>
                  <code>int n = arr.length;</code>
                </li>
                <li>
                  <code>
                    PriorityQueue&lt;Fraction&gt; minHeap = new
                    PriorityQueue&lt;&gt;((a, b) -&gt; Double.compare(a.value,
                    b.value));
                  </code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Initialize the Heap:</strong>
          <ul>
            <li>
              Adds the first fraction in each column of the matrix to the heap:
              <ul>
                <li>
                  <code>{`for (int i = 0; i < n - 1; i++)`}</code>
                </li>
                <li>
                  <code>{`minHeap.offer(new Fraction(i, n - 1, (double) arr[i] / arr[n - 1]));`}</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Extract the K-th Smallest Fraction:</strong>
          <ul>
            <li>
              Extracts the smallest fraction from the heap k times to find the
              k-th smallest:
              <ul>
                <li>
                  <code>Fraction fraction = null;</code>
                </li>
                <li>
                  <code>for (int i = 0; i &lt; k; i++)</code>
                </li>
                <li>
                  <code>fraction = minHeap.poll();</code>
                </li>
                <li>
                  Checks if there are more fractions to add from the same row
                  and adds them to the heap:
                  <ul>
                    <li>
                      <code>int numeratorIndex = fraction.numeratorIndex;</code>
                    </li>
                    <li>
                      <code>
                        int denominatorIndex = fraction.denominatorIndex;
                      </code>
                    </li>
                    <li>
                      <code>if (denominatorIndex - 1 &gt; numeratorIndex)</code>
                    </li>
                    <li>
                      <code>
                        minHeap.offer(new Fraction(numeratorIndex,
                        denominatorIndex - 1, (double) arr[numeratorIndex] /
                        arr[denominatorIndex - 1]));
                      </code>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Return the Result:</strong>
          <ul>
            <li>
              Returns the numerator and denominator of the k-th smallest
              fraction:
              <ul>
                <li>
                  <code>
                    return new int[]
                    {`{
                      (arr[fraction.numeratorIndex],
                      arr[fraction.denominatorIndex])
                    }`}
                    ;
                  </code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <code>private static class Fraction</code>: This inner class
          represents a fraction with its numerator index, denominator index, and
          value.
        </li>
        <li>
          <strong>Constructor:</strong>
          <ul>
            <li>
              Initializes the fraction with the given indices and value:
              <ul>
                <li>
                  <code>
                    Fraction(int numeratorIndex, int denominatorIndex, double
                    value)
                  </code>
                </li>
                <li>
                  <code>this.numeratorIndex = numeratorIndex;</code>
                </li>
                <li>
                  <code>this.denominatorIndex = denominatorIndex;</code>
                </li>
                <li>
                  <code>this.value = value;</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  923: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>MOD = 1_000_000_007;</code>: A constant modulus value to
            prevent overflow and keep results within a manageable range.
          </li>
          <li>
            <code>Arrays.sort(arr);</code>: Sorting the array <code>arr</code>{" "}
            in ascending order. Sorting is crucial for using the two-pointer
            technique efficiently.
          </li>
          <li>
            <code>int n = arr.length;</code>: Getting the length of the array{" "}
            <code>arr</code>.
          </li>
          <li>
            <code>long result = 0;</code>: Initializing a long variable{" "}
            <code>result</code> to accumulate the number of valid triplets,
            considering it might be large.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Outer Loop (<code>left</code> Pointer):
        </strong>
        <ul>
          <li>
            <code>{`for (int left = 0; left &lt; n; left++) { ... }`}</code>:
            Looping through each index <code>left</code> from <code>0</code> to{" "}
            <code>n-1</code>.
          </li>
          <li>
            <code>int T = target - arr[left];</code>: Calculating <code>T</code>{" "}
            as the target sum minus the current element <code>arr[left]</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>
          Inner Loop (<code>right</code> and <code>k</code> Pointers):
        </strong>
        <ul>
          <li>
            <code>int right = left + 1, k = n - 1;</code>: Initializing{" "}
            <code>right</code> as <code>left + 1</code> and <code>k</code> as{" "}
            <code>n - 1</code>.
          </li>
          <li>
            <code>{`while (right < k) { ... }`}</code>: Using a while loop to
            find pairs (<code>right</code>, <code>k</code>) such that{" "}
            <code>right &lt; k</code>.
          </li>
          <li>
            <strong>Conditions inside the while loop:</strong>
            <ul>
              <li>
                <code>{`if (arr[right] + arr[k] < T) { right++; }`}</code>:
                Increment <code>right</code> if the sum of elements at{" "}
                <code>right</code> and <code>k</code> is less than{" "}
                <code>T</code>.
              </li>
              <li>
                <code>{`else if (arr[right] + arr[k] &gt; T) { k--; }`}</code>:
                Decrement <code>k</code> if the sum of elements at{" "}
                <code>right</code> and <code>k</code> is greater than{" "}
                <code>T</code>.
              </li>
              <li>
                <code>{`else if (arr[right] != arr[k]) { ... }`}</code>: If the
                sum equals <code>T</code> and elements at <code>right</code> and{" "}
                <code>k</code> are not equal, count occurrences considering
                duplicates.
              </li>
              <li>
                <code>{`else { ... }`}</code>: If elements at <code>right</code>{" "}
                and <code>k</code> are equal, calculate combinations.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Counting Valid Triplets:</strong>
        <ul>
          <li>
            <code>result += leftCount * rightCount;</code>: Adding the count of
            valid combinations to <code>result</code> and taking modulo{" "}
            <code>MOD</code> to manage large numbers.
          </li>
          <li>
            <code>right++;</code> and <code>k--;</code>: Adjusting pointers
            after counting.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            <code>return (int) result;</code>: Returning the accumulated count
            of valid triplets as an integer, which is casted from{" "}
            <code>result</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  977: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>{`int n = nums.length;`}</code>: Store the length of the input
            array <code>{`nums`}</code>.
          </li>
          <li>
            <code>{`int[] result = new int[n];`}</code>: Initialize an array{" "}
            <code>{`result`}</code> of the same length as <code>{`nums`}</code>{" "}
            to store the squared values.
          </li>
          <li>
            <code>{`int left = 0, right = n - 1;`}</code>: Initialize two
            pointers, <code>{`left`}</code> at the beginning (index{" "}
            <code>{`0`}</code>) and <code>{`right`}</code> at the end (index{" "}
            <code>{`n - 1`}</code>) of <code>{`nums`}</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Iteration and Squaring:</strong>
        <ul>
          <li>
            <code>{`for (int i = n - 1; i &gt;= 0; i--) { ... }`}</code>:
            Iterate backwards through the <code>{`result`}</code> array starting
            from the last index (<code>{`n - 1`}</code> to <code>{`0`}</code>).
          </li>
          <li>
            <strong>Comparison and Assignment:</strong>
            <ul>
              <li>
                <code>{`if (Math.abs(nums[left]) > Math.abs(nums[right])) { ... }`}</code>
                : Compare the absolute values of <code>{`nums[left]`}</code> and{" "}
                <code>{`nums[right]`}</code>.
              </li>
              <li>
                <code>{`result[i] = nums[left] * nums[left]; left++;`}</code>:
                If <code>{`|nums[left]| > |nums[right]|`}</code>, square{" "}
                <code>{`nums[left]`}</code> and increment <code>{`left`}</code>{" "}
                pointer to the right.
              </li>
              <li>
                <code>{`result[i] = nums[right] * nums[right]; right--;`}</code>
                : Otherwise, square <code>{`nums[right]`}</code> and decrement{" "}
                <code>{`right`}</code> pointer to the left.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            <code>{`return result;`}</code>: After filling the{" "}
            <code>{`result`}</code> array with squared values in non-decreasing
            order, return <code>{`result`}</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1089: (
    <ul>
      <li>
        <strong>Count Zeros:</strong> First, iterate through the array to count
        the number of zeros (`0`s). This helps in determining how many zeros
        need to be duplicated and shifted.
      </li>
      <li>
        <strong>Modify Array (from end to beginning):</strong>
        <ul>
          <li>
            Start iterating from the end of the array towards the beginning (`i
            = n - 1` to `i &gt;= 0`).
          </li>
          <li>
            If the current element (`arr[i]`) is zero:
            <ul>
              <li>
                Shift elements to the right to make space for the duplicate
                zero. This is done by moving elements to positions `i +
                zeroCount` and placing the duplicate zero (`0`) there.
              </li>
              <li>
                Decrement `zeroCount` to keep track of remaining zeros to be
                duplicated.
              </li>
            </ul>
          </li>
          <li>
            If the current element is not zero, simply move it to its new
            position to accommodate any previously shifted zeros.
          </li>
        </ul>
      </li>
      <li>
        <strong>Efficiency:</strong> This approach runs in \( O(n) \) time
        complexity, where \( n \) is the length of the array `arr`. It modifies
        the array in place without using extra space beyond a few variables
        (`zeroCount` and `lastIndex`), making it efficient and suitable for
        large inputs as specified in the problem constraints.
      </li>
    </ul>
  ),
  1099: (
    <>
      <ul>
        <li>
          <strong>Sorting:</strong> Sort the array `nums` to facilitate
          efficient searching for pairs that sum up to less than `k`.
        </li>
        <li>
          <strong>Iterating through Array:</strong> Iterate through each element
          `nums[i]` of the array.
        </li>
        <li>
          <strong>Binary Search:</strong> Use binary search (`search` method) to
          find the largest index `j` such that `nums[j]` is less than or equal
          to `k - nums[i]`.
        </li>
        <li>
          <strong>Finding Maximum Sum:</strong> Calculate `nums[i] + nums[j]`
          for each valid index `j` found and update `ans` with the maximum of
          the current `ans` and `nums[i] + nums[j]`.
        </li>
        <li>
          <strong>Returning the Result:</strong> Return `ans`, which contains
          the maximum sum of two elements from `nums` that is less than `k`.
        </li>
      </ul>
      <p>
        This approach ensures efficiency with a time complexity of O(nlogn) due
        to the sorting step, followed by O(nlogn) for each pair search using
        binary search within the loop. This is suitable for the given
        constraints where nums can have up to 1000 elements.
      </p>
    </>
  ),
  1712: (
    <ul>
      <li>
        <strong>Initialization:</strong> Initialize variables and constants.
        <ul>
          <li>
            <code>kMod = 1_000_000_007;</code>: Modulo value to handle large
            numbers.
          </li>
          <li>
            <code>n = nums.length;</code>: Length of the input array.
          </li>
          <li>
            <code>ans = 0;</code>: Initialize the answer accumulator.
          </li>
          <li>
            <code>prefix = nums.clone();</code>: Clone the input array to
            maintain prefix sums.
          </li>
        </ul>
      </li>
      <li>
        <strong>Calculate Prefix Sums:</strong> Build the prefix sum array.
        <ul>
          <li>Iterate through the array and compute cumulative sums.</li>
          <li>
            <code>prefix[i] += prefix[i - 1];</code>: Update each element with
            cumulative sum up to that index.
          </li>
        </ul>
      </li>
      <li>
        <strong>Main Loop:</strong> Iterate through possible start points of the
        first subarray.
        <ul>
          <li>
            <code>for (int i = 0; i &lt; n - 2; ++i)</code>: Loop through the
            array up to the third last element.
          </li>
          <li>
            <strong>Binary Search for Mid and Right Bounds:</strong>
            <ul>
              <li>
                <code>j = firstGreaterEqual(prefix, i);</code>: Find the
                smallest index where the sum from <code>i</code> to{" "}
                <code>j</code> is at least half of the total sum.
              </li>
              <li>
                <code>mid = prefix[j] - prefix[i];</code>: Calculate the sum of
                the second subarray.
              </li>
              <li>
                <code>right = prefix[prefix.length - 1] - prefix[j];</code>:
                Calculate the sum of the third subarray.
              </li>
              <li>
                <code>if (mid &gt; right) continue;</code>: Skip if the
                condition of a valid split is not met.
              </li>
            </ul>
          </li>
          <li>
            <strong>Binary Search for K Bound:</strong>
            <ul>
              <li>
                <code>k = firstGreater(prefix, i);</code>: Find the smallest
                index where the sum from <code>i</code> to <code>k</code> is
                greater than the sum from <code>k</code> to the end.
              </li>
              <li>
                <code>ans = (ans + k - j) % kMod;</code>: Update the answer with
                the number of valid splits found.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong> Return the final answer modulo{" "}
        <code>kMod</code>.
      </li>
    </ul>
  ),
  1885: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>count</code>: Initialized to accumulate the total count of
            valid pairs <code>(i, j)</code>.
          </li>
          <li>
            <code>n</code>: Represents the length of arrays <code>nums1</code>{" "}
            and <code>nums2</code>.
          </li>
          <li>
            <code>differences</code>: An array storing differences between
            corresponding elements of <code>nums1</code> and <code>nums2</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Calculate Differences:</strong>
        <ul>
          <li>
            Populate the <code>differences</code> array where each element{" "}
            <code>differences[i]</code> is computed as{" "}
            <code>nums1[i] - nums2[i]</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sorting:</strong>
        <ul>
          <li>
            Sort the <code>differences</code> array. Sorting helps in
            efficiently counting how many elements are greater than a given
            value using binary search.
          </li>
        </ul>
      </li>
      <li>
        <strong>Counting Valid Pairs:</strong>
        <ul>
          <li>
            Iterate through the <code>differences</code> array using a nested
            loop.
          </li>
          <li>
            For each element at index <code>i</code>, compute the target value{" "}
            <code>target = -differences[i] + 1</code>.
          </li>
          <li>
            Use binary search (<code>binarySearch</code> method) to find the
            smallest index <code>index</code> such that{" "}
            <code>differences[index] &gt;= target</code>.
          </li>
          <li>
            Compute the count of valid pairs as <code>n - index</code> because
            all elements from <code>index</code> to <code>n-1</code> satisfy the
            condition <code>differences[index] &gt;= target</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Return the accumulated <code>count</code>, which represents the
            total number of pairs <code>(i, j)</code> where{" "}
            <code>nums1[i] &gt; nums2[j]</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2856: (
    <ul>
      <li>
        <strong>Counting Frequencies:</strong>
        <ul>
          <li>
            A <code>HashMap</code> named <code>count</code> is initialized to
            store the frequency of each element in the input list{" "}
            <code>nums</code>.
          </li>
          <li>
            Using a loop, each element <code>x</code> in <code>nums</code> is
            processed to update its count in the <code>count</code> map using{" "}
            <code>merge</code> method.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initializing Priority Queue:</strong>
        <ul>
          <li>
            A <code>PriorityQueue</code> named <code>pq</code> is created with a
            reverse order comparator to prioritize the largest counts at the
            front.
          </li>
          <li>
            Each unique count from the <code>count</code> map is added to the{" "}
            <code>pq</code> using the <code>offer</code> method.
          </li>
        </ul>
      </li>
      <li>
        <strong>Processing Pairs:</strong>
        <ul>
          <li>
            A <code>while</code> loop continues as long as there are at least
            two elements in the <code>pq</code>.
          </li>
          <li>
            Within the loop, the two largest counts are retrieved from the{" "}
            <code>pq</code> using <code>poll</code>.
          </li>
          <li>
            Each count is decremented by one, representing the removal of a pair
            (i, j).
          </li>
          <li>
            If the decremented count is still greater than zero, it is added
            back to the <code>pq</code> using <code>offer</code>.
          </li>
          <li>
            The <code>ans</code> variable is decremented by 2 for each pair
            removed, reflecting the reduction in the total number of elements in{" "}
            <code>nums</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Returning the Result:</strong>
        <ul>
          <li>
            After the loop completes, <code>ans</code> contains the minimum
            possible length of <code>nums</code> after all removal operations.
          </li>
          <li>This value is returned as the final result of the function.</li>
        </ul>
      </li>
    </ul>
  ),
  3194: (
    <ul>
      <li>
        <strong>Sorting:</strong>
        <ul>
          <li>
            The input array <code>nums</code> is sorted in non-decreasing order
            using <code>Arrays.sort(nums)</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            An empty list <code>averages</code> is initialized to store the
            computed averages.
          </li>
          <li>
            Pointers <code>left</code> and <code>right</code> are initialized to
            the start and end of the sorted array respectively.
          </li>
        </ul>
      </li>
      <li>
        <strong>Iteration:</strong>
        <ul>
          <li>
            A loop iterates until <code>left</code> is less than{" "}
            <code>right</code>.
          </li>
          <li>
            Inside the loop:
            <ul>
              <li>
                The smallest element <code>min</code> at index <code>left</code>{" "}
                and largest element <code>max</code> at index <code>right</code>{" "}
                are extracted.
              </li>
              <li>
                The average of <code>min</code> and <code>max</code> is computed
                as <code>(min + max) / 2.0</code> to ensure accurate division.
              </li>
              <li>
                The computed average is added to the <code>averages</code> list.
              </li>
              <li>
                <code>left</code> is incremented and <code>right</code> is
                decremented to move inward through the array.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            After the loop completes, the <code>averages</code> list is
            converted to a stream of doubles using{" "}
            <code>averages.stream().mapToDouble(Double::doubleValue)</code>.
          </li>
          <li>
            The minimum value in the stream is obtained using{" "}
            <code>.min().orElse(0.0)</code>, which handles the case where the
            list might be empty with a default value of <code>0.0</code>.
          </li>
          <li>The minimum average is returned as the result.</li>
        </ul>
      </li>
    </ul>
  ),
  2903: (
    <ul>
      <li>
        <strong>Problem Understanding:</strong>
        <ul>
          <li>
            We need to find two indices <code>i</code> and <code>j</code> in the
            array <code>nums</code> that satisfy specific conditions.
          </li>
          <li>
            The conditions are:
            <ul>
              <li>
                Absolute difference of indices <code>|i - j|</code> must be
                greater than or equal to <code>indexDifference</code>.
              </li>
              <li>
                Absolute difference of values <code>|nums[i] - nums[j]|</code>{" "}
                must be greater than or equal to <code>valueDifference</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Implementation Strategy:</strong>
        <ul>
          <li>
            Iterate through each index <code>i</code> in <code>nums</code>.
          </li>
          <li>
            For each <code>i</code>, iterate through subsequent indices{" "}
            <code>j</code>.
          </li>
          <li>
            Check if the conditions <code>|i - j| &ge; indexDifference</code>{" "}
            and <code>|nums[i] - nums[j]| &ge; valueDifference</code> are
            satisfied.
          </li>
          <li>
            If found, return the pair <code>[i, j]</code>.
          </li>
          <li>
            If no such pair is found after checking all possible pairs, return{" "}
            <code>[-1, -1]</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Edge Cases:</strong>
        <ul>
          <li>
            If <code>indexDifference = 0</code>, ensure <code>i</code> and{" "}
            <code>j</code> can be equal.
          </li>
          <li>
            If <code>valueDifference = 0</code>, handle cases where{" "}
            <code>nums[i]</code> and <code>nums[j]</code> are equal.
          </li>
          <li>
            If <code>indexDifference</code> is large relative to{" "}
            <code>nums.length</code>, handle cases where no valid pairs exist.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2905: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>minIndex</code> and <code>maxIndex</code> are initialized to{" "}
            <code>0</code>. These indices track the positions of the smallest
            and largest elements within the current window defined by{" "}
            <code>indexDifference</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Sliding Window Approach:</strong>
        <ul>
          <li>
            The algorithm iterates through the array starting from{" "}
            <code>indexDifference</code>. For each index <code>i</code>:
            <ul>
              <li>
                Updates <code>minIndex</code> and <code>maxIndex</code> to
                ensure they point to the smallest and largest elements within
                the current window.
              </li>
              <li>
                Checks if either{" "}
                <code>nums[i] - nums[minIndex] &gt;= valueDifference</code> or{" "}
                <code>nums[maxIndex] - nums[i] &gt;= valueDifference</code>.
                These conditions verify if there exists a pair{" "}
                <code>(i, minIndex)</code> or <code>(i, maxIndex)</code> that
                satisfies both specified conditions (
                <code>abs(i - j) &gt;= indexDifference</code> and{" "}
                <code>abs(nums[i] - nums[j]) &gt;= valueDifference</code>).
              </li>
              <li>
                If either condition is met, it returns the indices{" "}
                <code>[i, minIndex]</code> or <code>[i, maxIndex]</code>.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>Edge Case Handling:</strong>
        <ul>
          <li>
            If no valid indices are found that satisfy the conditions after
            iterating through the array, the function returns{" "}
            <code>[-1, -1]</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2970: (
    <ul>
      <li>
        <strong>Problem Understanding:</strong> We need to identify all
        subarrays in the given array <code>nums</code> where removing the
        subarray results in the remaining array being strictly increasing.
      </li>
      <li>
        <strong>Approach:</strong> Here's how we can solve this problem:
      </li>
      <ul>
        <li>
          <strong>Iterate Over Subarrays:</strong> Use two nested loops to
          generate all possible subarrays of <code>nums</code>.
        </li>
        <li>
          <strong>Check Each Subarray:</strong> For each subarray, remove its
          elements from <code>nums</code> and check if the remaining array is
          strictly increasing.
        </li>
        <ul>
          <li>
            <strong>Strictly Increasing Check:</strong> Iterate through the
            remaining array and ensure each element is greater than the previous
            one.
          </li>
        </ul>
        <li>
          <strong>Count Valid Subarrays:</strong> Maintain a counter to count
          all subarrays that satisfy the conditions.
        </li>
      </ul>
      <li>
        <strong>Implementation in Java:</strong> Here is the Java code that
        implements the above approach:
      </li>
    </ul>
  ),
  2972: (
    <>
      <ul>
        <li>
          <strong>
            Method <code>incremovableSubarrayCount</code>:
          </strong>
          <ul>
            <li>
              <strong>getStartIndexOfSuffix:</strong> This method finds the
              starting index <code>startIndex</code> of the suffix in the array{" "}
              <code>nums</code> where the array is not strictly increasing. It
              iterates from the end of the array towards the beginning and
              returns the index where the non-strictly increasing sequence
              starts.
            </li>
            <li>
              <strong>Main Calculation:</strong>
              <ul>
                <li>
                  If <code>startIndex</code> is <code>0</code>, it means the
                  entire array is strictly increasing. In this case, the total
                  number of subarrays is calculated using the formula{" "}
                  <code>(n * (n + 1)) / 2</code>, where <code>n</code> is the
                  length of <code>nums</code>.
                </li>
                <li>
                  Otherwise, initialize <code>ans</code> to{" "}
                  <code>n - startIndex + 1</code>, which represents all
                  subarrays ending at or after the <code>startIndex</code>.
                </li>
                <li>
                  Iterate over the array:
                  <ul>
                    <li>
                      For each element before <code>startIndex</code>, count
                      subarrays ending at that element which are not strictly
                      increasing.
                    </li>
                    <li>
                      Use <code>firstGreater</code> to find the first index
                      where <code>nums[i]</code> is greater than or equal to{" "}
                      <code>nums[j]</code>, iterating <code>j</code> from{" "}
                      <code>startIndex</code> towards the end of the array.
                    </li>
                    <li>
                      Update <code>ans</code> by adding the count of subarrays
                      found.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>firstGreater</code>:
          </strong>
          <ul>
            <li>
              This method uses <code>Arrays.binarySearch</code> to find the
              first index where the element is greater than <code>target</code>.
              If the element is not found, it returns the insertion point (the
              index where the element should be inserted to maintain sorted
              order).
            </li>
          </ul>
        </li>
      </ul>
      <p>
        This approach efficiently counts the number of "incremovable" subarrays
        by leveraging indexing and binary search to handle the constraints
        provided in the problem.
      </p>
    </>
  ),
  96: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>Class Declaration:</strong>
          <ul>
            <li>
              The class <code>Solution</code> contains the method{" "}
              <code>numTrees</code> which computes the number of unique BSTs.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>numTrees</code>:
          </strong>
          <ul>
            <li>
              <code>public int numTrees(int n)</code>: This method takes an
              integer <code>n</code> as input and returns the number of unique
              BSTs that can be formed with <code>n</code> distinct nodes.
            </li>
            <li>
              <code>int[] dp = new int[n + 1];</code>: Initializes a dynamic
              programming array <code>dp</code> to store the number of unique
              BSTs for each number of nodes from 0 to <code>n</code>.
            </li>
            <li>
              <code>dp[0] = 1;</code>: Base case - there is one unique BST (an
              empty tree) with 0 nodes.
            </li>
            <li>
              <code>dp[1] = 1;</code>: Base case - there is one unique BST with
              1 node.
            </li>
            <li>
              Loop through each number of nodes from 2 to <code>n</code>:
              <ul>
                <li>
                  <code>for (int nodes = 2; nodes &lt;= n; nodes++)</code>:
                  Outer loop iterating through the number of nodes.
                </li>
                <li>
                  For each number of nodes, consider each node as the root:
                  <ul>
                    <li>
                      <code>for (int root = 1; root &lt;= nodes; root++)</code>:
                      Inner loop iterating through each possible root node.
                    </li>
                    <li>
                      Calculate the number of unique BSTs by considering the
                      product of the number of BSTs that can be formed with the
                      left subtree and the right subtree:
                      <ul>
                        <li>
                          <code>
                            dp[nodes] += dp[root - 1] * dp[nodes - root];
                          </code>
                          : Adds the product of the number of BSTs with{" "}
                          <code>root-1</code> nodes on the left and{" "}
                          <code>nodes-root</code> nodes on the right to{" "}
                          <code>dp[nodes]</code>.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <code>return dp[n];</code>: Returns the number of unique BSTs that
              can be formed with <code>n</code> nodes.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  98: (
    <>
      {" "}
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>Class Declaration:</strong>
          <ul>
            <li>
              The class <code>Solution</code> contains the method{" "}
              <code>isValidBST</code> which validates the BST.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>isValidBST</code>:
          </strong>
          <ul>
            <li>
              <code>public boolean isValidBST(TreeNode root)</code>: This method
              takes the root of the tree and returns a boolean indicating if the
              tree is a valid BST.
            </li>
            <li>
              It calls a helper method <code>isValidBST</code> with additional
              parameters to check the validity recursively.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Helper Method <code>isValidBST</code>:
          </strong>
          <ul>
            <li>
              <code>
                private boolean isValidBST(TreeNode node, long min, long max)
              </code>
              : This method takes a tree node and the minimum and maximum values
              that the node's value must lie between to be a valid BST.
            </li>
            <li>
              Base case: If the node is null, it returns true (an empty tree is
              a valid BST).
            </li>
            <li>
              It checks if the node's value is within the valid range:
              <ul>
                <li>
                  <code>if (node.val &lt;= min || node.val &gt;= max)</code>: If
                  the node's value is less than or equal to <code>min</code> or
                  greater than or equal to <code>max</code>, it returns false.
                </li>
              </ul>
            </li>
            <li>
              It recursively checks the left and right subtrees:
              <ul>
                <li>
                  <code>
                    return isValidBST(node.left, min, node.val) &&
                    isValidBST(node.right, node.val, max);
                  </code>
                  : The left subtree must have all values less than the current
                  node's value, and the right subtree must have all values
                  greater than the current node's value.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Main Method:</strong>
          <ul>
            <li>
              The <code>main</code> method demonstrates an example usage of the{" "}
              <code>isValidBST</code> method by creating a simple tree and
              checking its validity.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  99: (
    <>
      <p>
        To solve the problem of recovering a binary search tree (BST) where two
        nodes have been swapped by mistake, we can use Morris In-order Traversal
        to achieve O(1) space complexity. Morris Traversal allows us to traverse
        the tree in-order without using a stack or recursion, making it a
        constant space solution.
      </p>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>Class Declaration:</strong>
          <ul>
            <li>
              The class <code>Solution</code> contains methods to recover a BST
              where two nodes have been swapped by mistake.
            </li>
          </ul>
        </li>
        <li>
          <strong>Fields:</strong>
          <ul>
            <li>
              <code>TreeNode first = null;</code>: Stores the first incorrect
              node.
            </li>
            <li>
              <code>TreeNode second = null;</code>: Stores the second incorrect
              node.
            </li>
            <li>
              <code>TreeNode prev = null;</code>: Used to keep track of the
              previous node during in-order traversal.
            </li>
            <li>
              <code>TreeNode temp = null;</code>: Temporary node used in Morris
              Traversal.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>recoverTree</code>:
          </strong>
          <ul>
            <li>
              <code>public void recoverTree(TreeNode root)</code>: This method
              takes the root of the tree and recovers the BST by identifying and
              swapping the two incorrect nodes using Morris Traversal.
            </li>
            <li>
              Initializes <code>first</code>, <code>second</code>, and{" "}
              <code>prev</code> nodes.
            </li>
            <li>
              Uses a while loop to traverse the tree in in-order using Morris
              Traversal.
            </li>
            <li>
              Within the while loop, checks if the left child is not null:
              <ul>
                <li>
                  Finds the rightmost node in the left subtree or links it to
                  the current root.
                </li>
                <li>
                  If the rightmost node is already linked, it means we've
                  finished the left subtree, so we unlink it and move to the
                  right subtree.
                </li>
                <li>
                  During this process, checks if the current node is less than
                  the previous node to identify the swapped nodes.
                </li>
              </ul>
            </li>
            <li>
              If the left child is null, it simply moves to the right child and
              continues checking for swapped nodes.
            </li>
            <li>After identifying the swapped nodes, swaps their values.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  108: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>Class Declaration:</strong>
          <ul>
            <li>
              The class <code>Solution</code> contains methods to convert a
              sorted array into a balanced BST.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>sortedArrayToBST</code>:
          </strong>
          <ul>
            <li>
              <code>public TreeNode sortedArrayToBST(int[] nums)</code>: This
              method takes a sorted array and returns the root of the balanced
              BST.
            </li>
            <li>
              Checks if the input array is null or empty and returns null if
              true.
            </li>
            <li>
              Calls the helper method <code>constructBST</code> with the input
              array and the initial indices (0 to array length - 1).
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>constructBST</code>:
          </strong>
          <ul>
            <li>
              <code>
                private TreeNode constructBST(int[] nums, int left, int right)
              </code>
              : This helper method constructs the BST recursively.
            </li>
            <li>
              Base Case: If <code>left</code> is greater than <code>right</code>
              , returns null.
            </li>
            <li>
              Finds the middle index of the current subarray and creates a new{" "}
              <code>TreeNode</code> with the middle element as the root.
            </li>
            <li>
              Recursively constructs the left and right subtrees using the left
              and right halves of the current subarray, respectively.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>printInOrder</code>:
          </strong>
          <ul>
            <li>
              <code>public static void printInOrder(TreeNode root)</code>: This
              method prints the tree nodes in in-order traversal to verify the
              tree structure after construction.
            </li>
            <li>
              If the node is not null, recursively prints the left subtree, the
              current node's value, and the right subtree.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  109: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>Class Declaration:</strong>
          <ul>
            <li>
              The class <code>Solution</code> contains methods to convert a
              sorted singly linked list into a balanced BST.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>sortedListToBST</code>:
          </strong>
          <ul>
            <li>
              <code>public TreeNode sortedListToBST(ListNode head)</code>: This
              method takes the head of the sorted linked list and returns the
              root of the balanced BST.
            </li>
            <li>Checks if the input list is null and returns null if true.</li>
            <li>
              Calls the helper method <code>sortedListToBSTHelper</code> with
              the input list and null as the initial tail.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>sortedListToBSTHelper</code>:
          </strong>
          <ul>
            <li>
              <code>
                private TreeNode sortedListToBSTHelper(ListNode head, ListNode
                tail)
              </code>
              : This helper method constructs the BST recursively.
            </li>
            <li>
              Base Case: If <code>head</code> is equal to <code>tail</code>,
              returns null.
            </li>
            <li>
              Uses two pointers (<code>slow</code> and <code>fast</code>) to
              find the middle element of the current sublist.
            </li>
            <li>
              Creates a new <code>TreeNode</code> with the middle element as the
              root.
            </li>
            <li>
              Recursively constructs the left and right subtrees using the left
              and right halves of the current sublist, respectively.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  230: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>Class Declaration:</strong>
          <ul>
            <li>
              The class <code>Solution</code> contains methods to find the Kth
              smallest element in a BST.
            </li>
          </ul>
        </li>
        <li>
          <strong>Instance Variables:</strong>
          <ul>
            <li>
              <code>private int count = 0;</code>: Keeps track of the number of
              nodes visited during the in-order traversal.
            </li>
            <li>
              <code>private int result = 0;</code>: Stores the value of the Kth
              smallest element.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>kthSmallest</code>:
          </strong>
          <ul>
            <li>
              <code>public int kthSmallest(TreeNode root, int k)</code>: This
              method initiates the in-order traversal of the BST and returns the
              Kth smallest element.
            </li>
            <li>
              Calls the helper method <code>inOrderTraversal</code> with the
              root node and the target K value.
            </li>
            <li>
              Returns the <code>result</code> which holds the Kth smallest
              element.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  235: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>Class Declaration:</strong>
          <ul>
            <li>
              The class <code>Solution</code> contains methods to find the
              Lowest Common Ancestor (LCA) of two nodes in a BST.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Method <code>lowestCommonAncestor</code>:
          </strong>
          <ul>
            <li>
              <code>
                public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p,
                TreeNode q)
              </code>
              : This method takes the root of the BST and two nodes{" "}
              <code>p</code> and <code>q</code>, and returns their LCA.
            </li>
            <li>Checks if the root is null and returns null if true.</li>
            <li>
              If both <code>p</code> and <code>q</code> are smaller than the
              root's value, it means LCA lies in the left subtree, so it
              recursively calls the method on the left subtree.
            </li>
            <li>
              If both <code>p</code> and <code>q</code> are greater than the
              root's value, it means LCA lies in the right subtree, so it
              recursively calls the method on the right subtree.
            </li>
            <li>
              If neither of the above conditions is true, it means the current
              root is the LCA, so it returns the root.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  255: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>Class and Method Definition:</strong>
          <ul>
            <li>
              <code>class Solution</code>: Defines a class named{" "}
              <code>Solution</code>.
            </li>
            <li>
              <code>public boolean verifyPreorder(int[] preorder)</code>: Method
              to verify if the given <code>preorder</code> array is a valid
              preorder traversal of a BST.
            </li>
          </ul>
        </li>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              <code>{`Deque<Integer> stack = new ArrayDeque<>();`}</code>:
              Initializes a stack to track nodes during traversal.
            </li>
            <li>
              <code>int last = Integer.MIN_VALUE;</code>: Initializes{" "}
              <code>last</code> to the smallest possible integer value to
              compare against during traversal.
            </li>
          </ul>
        </li>
        <li>
          <strong>Traversal and Validation:</strong>
          <ul>
            <li>
              <code>for (int x : preorder)</code>: Iterates through each element{" "}
              <code>x</code> in the <code>preorder</code> array.
            </li>
            <li>
              <code>{`if (x < last) return false;`}</code>: Checks if{" "}
              <code>x</code> is less than <code>last</code>. If true, returns{" "}
              <code>false</code> since it violates the BST {`property.`}
            </li>
            <li>
              <code>
                {`̦while (!stack.isEmpty() && stack.peek() < x) `}last =
                stack.poll();
              </code>
              : Pops elements from the stack that are less than <code>x</code>,
              updating <code>last</code> accordingly.
            </li>
            <li>
              <code>stack.push(x);</code>: Pushes <code>x</code> onto the stack,
              representing the current node in traversal.
            </li>
          </ul>
        </li>
        <li>
          <strong>Completion:</strong>
          <ul>
            <li>
              Returns <code>true</code> if the entire <code>preorder</code>{" "}
              array satisfies the BST preorder traversal property.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  270: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              Contains a method{" "}
              <code>public int closestValue(TreeNode root, double target)</code>{" "}
              to find the closest value in the BST to the target value.
            </li>
            <li>
              <code>int ans = root.val;</code>: Initializes <code>ans</code>{" "}
              with the value of the root node.
            </li>
            <li>
              <code>double minDiff = Double.MAX_VALUE;</code>: Initializes{" "}
              <code>minDiff</code> to the maximum possible value.
            </li>
            <li>
              <strong>While Loop:</strong> Continues while <code>root</code> is
              not <code>null</code>.
              <ul>
                <li>
                  <code>double currentDiff = Math.abs(root.val - target);</code>
                  : Calculates the absolute difference between{" "}
                  <code>root.val</code> and <code>target</code>.
                </li>
                <li>
                  <code>if (currentDiff &lt; minDiff)</code>: Updates{" "}
                  <code>ans</code> and <code>minDiff</code> if the current
                  difference is smaller.
                </li>
                <li>
                  <strong>Conditionals:</strong> Adjusts <code>root</code> to
                  traverse left or right based on whether <code>root.val</code>{" "}
                  is greater than or less than <code>target</code>.
                </li>
              </ul>
            </li>
            <li>
              Returns <code>ans</code>, which contains the value closest to{" "}
              <code>target</code> found during traversal.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  272: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>{`public List<Integer> closestKValues(TreeNode root, double target, int k)`}</code>
              : Public method to initiate the search for k closest values.
            </li>
            <li>
              <code>{`ans = new LinkedList<>();`}</code>: Initializes{" "}
              <code>ans</code> as an empty list to store closest values.
            </li>
            <li>
              <code>this.target = target;</code> and <code>this.k = k;</code>:
              Sets target and k values from parameters.
            </li>
            <li>
              <code>dfs(root);</code>: Initiates depth-first search to populate{" "}
              <code>ans</code> with closest values.
            </li>
            <li>
              <strong>dfs Method:</strong> Performs depth-first traversal of the
              BST.
              <ul>
                <li>
                  <code>if (root == null) return;</code>: Base case, stops
                  recursion if current node is null.
                </li>
                <li>
                  <code>dfs(root.left);</code>: Recursively explores left
                  subtree.
                </li>
                <li>
                  <code>{`if (ans.size() < k) { ans.add(root.val); }`}</code>:
                  Adds root value to <code>ans</code> if <code>ans</code> size
                  is less than k.
                </li>
                <li>
                  <code>{`else { if (Math.abs(root.val - target) >= Math.abs(ans.get(0) - target)) return;`}</code>
                  : Checks if root value is further from target than first
                  element in <code>ans</code>.
                </li>
                <li>
                  <code>ans.remove(0); ans.add(root.val);</code>: If root value
                  is closer to target, updates first element of <code>ans</code>{" "}
                  to root value.
                </li>
                <li>
                  <code>dfs(root.right);</code>: Recursively explores right
                  subtree.
                </li>
              </ul>
            </li>
            <li>
              Returns <code>ans</code>, which contains the k closest values to{" "}
              <code>target</code> found during traversal.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  285: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Constructor <code>TreeNode(int x)</code> initializes a node with a
              given value <code>x</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>
                public TreeNode inorderSuccessor(TreeNode root, TreeNode p)
              </code>
              : Method to find the inorder successor of node <code>p</code> in
              the BST.
            </li>
            <li>
              <code>TreeNode ans = null;</code>: Initializes <code>ans</code> to
              store the successor node.
            </li>
            <li>
              <strong>While Loop:</strong> Continues while <code>root</code> is
              not <code>null</code>.
              <ul>
                <li>
                  <code>if (root.val &gt; p.val)</code>: Checks if current node
                  value <code>root.val</code> is greater than <code>p.val</code>
                  .
                  <ul>
                    <li>
                      <code>ans = root;</code>: Updates <code>ans</code> to
                      current node <code>root</code>.
                    </li>
                    <li>
                      <code>root = root.left;</code>: Moves to the left child of{" "}
                      <code>root</code> to find a closer successor.
                    </li>
                  </ul>
                </li>
                <li>
                  <code>else</code>: If current node value is less than or equal
                  to <code>p.val</code>,
                  <ul>
                    <li>
                      <code>root = root.right;</code>: Moves to the right child
                      of <code>root</code> to potentially find a larger
                      successor.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Returns <code>ans</code>, which contains the inorder successor of
              node <code>p</code> found during traversal.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  333: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>private int ans;</code>: Variable to store the size of the
              largest BST subtree found.
            </li>
            <li>
              <code>public int largestBSTSubtree(TreeNode root)</code>: Public
              method to initiate the search for the largest BST subtree.
            </li>
            <li>
              <code>ans = 0;</code>: Initializes <code>ans</code> to 0 before
              starting the search.
            </li>
            <li>
              <strong>dfs Method:</strong> Recursively checks each subtree to
              determine if it is a BST and calculates its size.
              <ul>
                <li>
                  <code>
                    if (root == null) return new int[]{" "}
                    {`{Integer.MAX_VALUE, Integer.MIN_VALUE, 0};`}
                  </code>
                  : Returns an array representing min value, max value, and size
                  of the BST subtree if the current node is null (base case).
                </li>
                <li>
                  <code>int[] left = dfs(root.left);</code> and{" "}
                  <code>int[] right = dfs(root.right);</code>: Recursively
                  calculates properties (min value, max value, size) of left and
                  right subtrees.
                </li>
                <li>
                  <code>{`if (left[1] < root.val && root.val < right[0])`}</code>
                  : Checks if the current node satisfies the BST condition
                  between its left and right subtrees.
                </li>
                <li>
                  <code>ans = Math.max(ans, left[2] + right[2] + 1);</code>:
                  Updates <code>ans</code> with the size of the current subtree
                  if it forms a valid BST.
                </li>
                <li>
                  <code>
                    return new int[]{" "}
                    {`{Math.min(root.val, left[0]), Math.max(root.val, right[1]), left[2] + right[2] + 1};`}
                  </code>
                  : Returns updated min value, max value, and size of the BST
                  subtree rooted at the current node.
                </li>
              </ul>
            </li>
            <li>
              Returns <code>ans</code>, which contains the size of the largest
              BST subtree found in the binary tree.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  449: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Codec</code>:
          </strong>
          <ul>
            <li>
              <code>public String serialize(TreeNode root)</code>: Method to
              serialize the BST into a string.
            </li>
            <li>
              <code>
                private void serializeHelper(TreeNode node, StringBuilder sb)
              </code>
              : Recursive helper method for serialization.
              <ul>
                <li>
                  Appends each node's value to <code>sb</code>, separated by
                  commas.
                </li>
                <li>Uses "null" to represent null nodes.</li>
              </ul>
            </li>
            <li>
              <code>public TreeNode deserialize(String data)</code>: Method to
              deserialize the string data back into a BST.
            </li>
            <li>
              <code>
                private TreeNode deserializeHelper(Queue&lt;String&gt; queue)
              </code>
              : Recursive helper method for deserialization.
              <ul>
                <li>
                  Dequeues the next string from <code>queue</code>.
                </li>
                <li>
                  If the string is "null", returns null (indicating a null
                  node).
                </li>
                <li>
                  Creates a new <code>TreeNode</code> with the parsed integer
                  value.
                </li>
                <li>
                  Recursively sets the left and right children of the node.
                </li>
                <li>Returns the reconstructed node.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  450: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>public TreeNode deleteNode(TreeNode root, int key)</code>:
              Method to delete a node with value <code>key</code> from the BST.
            </li>
            <li>
              <code>if (root == null) return null;</code>: Base case where the
              tree is empty or the node is not found.
            </li>
            <li>
              <code>if (key &lt; root.val)</code> and{" "}
              <code>else if (key &gt; root.val)</code>: Recursively searches for
              the node to delete in the left or right subtree based on the
              comparison with <code>key</code>.
            </li>
            <li>
              <code>{`// Case 1: Node to be deleted has no children or only one child`}</code>
              :
              <ul>
                <li>
                  If <code>root.left</code> or <code>root.right</code> is null,
                  returns the non-null child (if any).
                </li>
              </ul>
            </li>
            <li>
              <code>{`// Case 2: Node to be deleted has two children`}</code>:
              <ul>
                <li>
                  Finds the minimum node in the right subtree (or maximum in the
                  left subtree).
                </li>
                <li>
                  Assigns the value of the minimum node to <code>root.val</code>
                  .
                </li>
                <li>
                  Recursively deletes the minimum node from the right subtree.
                </li>
              </ul>
            </li>
            <li>
              <code>private int findMin(TreeNode node)</code>: Helper method to
              find the minimum value in a subtree rooted at <code>node</code>.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  501: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>private int maxCount;</code>,{" "}
              <code>private int currentCount;</code>,{" "}
              <code>private int currentVal;</code>,{" "}
              <code>private List&lt;Integer&gt; modes;</code>: Instance
              variables to track the current mode and its counts.
            </li>
            <li>
              <code>public int[] findMode(TreeNode root)</code>: Main method to
              find the mode values in the BST.
              <ul>
                <li>
                  Returns an array of integers representing the mode values.
                </li>
                <li>
                  Initializes variables and calls <code>traverse(root)</code> to
                  traverse the tree.
                </li>
              </ul>
            </li>
            <li>
              <code>private void traverse(TreeNode node)</code>: Recursive
              method to perform an inorder traversal of the BST.
              <ul>
                <li>
                  Traverses left subtree, handles current node value, and
                  traverses right subtree.
                </li>
              </ul>
            </li>
            <li>
              <code>private void handleValue(int val)</code>: Helper method to
              handle occurrences of node values during traversal.
              <ul>
                <li>
                  Updates <code>currentCount</code> and checks if the current
                  node value is a new mode candidate.
                </li>
                <li>
                  Updates <code>maxCount</code> and adds to <code>modes</code>{" "}
                  list if necessary.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  530: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>private int minDiff;</code>,{" "}
              <code>private Integer prev;</code>: Instance variables to track
              the minimum difference and the previous node value during
              traversal.
            </li>
            <li>
              <code>public int getMinimumDifference(TreeNode root)</code>:
              Method to find the minimum absolute difference between any two
              nodes in the BST.
              <ul>
                <li>Returns the minimum absolute difference.</li>
                <li>
                  Initializes <code>minDiff</code> to{" "}
                  <code>Integer.MAX_VALUE</code> and calls{" "}
                  <code>inorder(root)</code> to perform an inorder traversal.
                </li>
              </ul>
            </li>
            <li>
              <code>private void inorder(TreeNode node)</code>: Recursive method
              to perform an inorder traversal of the BST.
              <ul>
                <li>
                  Traverses left subtree, calculates the difference between
                  current node and <code>prev</code> if <code>prev</code> is not
                  null, updates <code>minDiff</code> accordingly, and updates{" "}
                  <code>prev</code> to current node value.
                </li>
                <li>Traverses right subtree.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  700: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>public TreeNode searchBST(TreeNode root, int val)</code>:
              Method to search for a value <code>val</code> in the BST{" "}
              <code>root</code>.
              <ul>
                <li>
                  Returns the node containing the value <code>val</code> if
                  found, or <code>null</code> if not found.
                </li>
                <li>
                  Base case handles scenarios where <code>root</code> is{" "}
                  <code>null</code> or the value is found at the current node.
                </li>
                <li>
                  Recursively searches in the left subtree if <code>val</code>{" "}
                  is less than <code>root.val</code>, otherwise searches in the
                  right subtree.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  701: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>public TreeNode insertIntoBST(TreeNode root, int val)</code>
              : Method to insert a value <code>val</code> into the BST{" "}
              <code>root</code>.
              <ul>
                <li>Returns the modified BST with the new node inserted.</li>
                <li>
                  Base case handles scenarios where <code>root</code> is{" "}
                  <code>null</code>, creating a new node with value{" "}
                  <code>val</code>.
                </li>
                <li>
                  Recursively inserts the new value into the left subtree if{" "}
                  <code>val</code> is less than <code>root.val</code>, or into
                  the right subtree otherwise.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  703: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>
            Class <code>KthLargest</code>:
          </strong>
          <ul>
            <li>
              <code>{`private PriorityQueue<Integer> minHeap;`}</code>,{" "}
              <code>private int k;</code>: Instance variables to maintain a min
              heap of size <code>k</code> and track <code>k</code>.
            </li>
            <li>
              <code>public KthLargest(int k, int[] nums)</code>: Constructor
              initializes the class with <code>k</code> and processes an initial
              array of integers <code>nums</code>.
              <ul>
                <li>
                  Populates the <code>minHeap</code> with the first{" "}
                  <code>k</code> elements of <code>nums</code>.
                </li>
              </ul>
            </li>
            <li>
              <code>public int add(int val)</code>: Method to add a new element{" "}
              <code>val</code> to the stream and return the Kth largest element
              seen so far.
              <ul>
                <li>
                  If the size of <code>minHeap</code> is less than{" "}
                  <code>k</code>, adds <code>val</code> to <code>minHeap</code>.
                </li>
                <li>
                  Otherwise, if <code>val</code> is larger than the smallest
                  element in <code>minHeap</code> (peek), replaces the smallest
                  element with <code>val</code>.
                </li>
                <li>
                  Returns the smallest element (Kth largest) in{" "}
                  <code>minHeap</code> (peek).
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  776: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>
            Class <code>KthLargest</code>:
          </strong>
          <ul>
            <li>
              <code>{`private PriorityQueue<Integer> minHeap;`}</code>,{" "}
              <code>private int k;</code>: Instance variables to maintain a min
              heap of size <code>k</code> and track <code>k</code>.
            </li>
            <li>
              <code>public KthLargest(int k, int[] nums)</code>: Constructor
              initializes the class with <code>k</code> and processes an initial
              array of integers <code>nums</code>.
              <ul>
                <li>
                  Populates the <code>minHeap</code> with the first{" "}
                  <code>k</code> elements of <code>nums</code>.
                </li>
              </ul>
            </li>
            <li>
              <code>public int add(int val)</code>: Method to add a new element{" "}
              <code>val</code> to the stream and return the Kth largest element
              seen so far.
              <ul>
                <li>
                  If the size of <code>minHeap</code> is less than{" "}
                  <code>k</code>, adds <code>val</code> to <code>minHeap</code>.
                </li>
                <li>
                  Otherwise, if <code>val</code> is larger than the smallest
                  element in <code>minHeap</code> (peek), replaces the smallest
                  element with <code>val</code>.
                </li>
                <li>
                  Returns the smallest element (Kth largest) in{" "}
                  <code>minHeap</code> (peek).
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  783: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>private Integer prev;</code>,{" "}
              <code>private int minDiff;</code>: Instance variables to track the
              previous node value and the minimum difference found so far.
            </li>
            <li>
              <code>public int minDiffInBST(TreeNode root)</code>: Method to
              find the minimum difference between nodes in the BST.
              <ul>
                <li>
                  Returns the minimum difference between any two nodes in the
                  BST.
                </li>
                <li>
                  Initializes <code>minDiff</code> to{" "}
                  <code>Integer.MAX_VALUE</code> and calls{" "}
                  <code>inorder(root)</code> to perform an inorder traversal.
                </li>
              </ul>
            </li>
            <li>
              <code>private void inorder(TreeNode node)</code>: Recursive method
              to perform an inorder traversal of the BST.
              <ul>
                <li>
                  Traverses left subtree, calculates the difference between
                  current node and <code>prev</code> if <code>prev</code> is not
                  null, updates <code>minDiff</code> accordingly, and updates{" "}
                  <code>prev</code> to current node value.
                </li>
                <li>Traverses right subtree.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  897: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>private TreeNode result;</code>: Instance variable to track
              the current node in the result tree.
            </li>
            <li>
              <code>public TreeNode increasingBST(TreeNode root)</code>: Method
              to transform the original BST into the modified tree where nodes
              are in increasing order.
              <ul>
                <li>
                  Initializes a dummy node <code>dummy</code> and sets{" "}
                  <code>result</code> to <code>dummy</code>.
                </li>
                <li>
                  Calls <code>inorder(root)</code> to perform an inorder
                  traversal of the original BST.
                </li>
                <li>
                  Returns the right child of <code>dummy</code>, which is the
                  root of the transformed tree.
                </li>
              </ul>
            </li>
            <li>
              <code>private void inorder(TreeNode node)</code>: Recursive method
              to perform an inorder traversal of the BST.
              <ul>
                <li>Traverses left subtree.</li>
                <li>
                  Creates a new node with the current node's value and links it
                  to <code>result</code> in the result tree.
                </li>
                <li>
                  Moves <code>result</code> pointer to the newly created node.
                </li>
                <li>Traverses right subtree.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1008: (
    <>
      {" "}
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>private int index = 0;</code>: Instance variable to keep
              track of the current index in the preorder traversal.
            </li>
            <li>
              <code>public TreeNode bstFromPreorder(int[] preorder)</code>:
              Method to construct a BST from a given preorder traversal array.
              <ul>
                <li>
                  Initializes the construction process by calling{" "}
                  <code>
                    bstFromPreorder(preorder, Integer.MIN_VALUE,
                    Integer.MAX_VALUE)
                  </code>
                  .
                </li>
                <li>Returns the root of the constructed BST.</li>
              </ul>
            </li>
            <li>
              <code>
                private TreeNode bstFromPreorder(int[] preorder, int lower, int
                upper)
              </code>
              : Recursive method to construct the BST.
              <ul>
                <li>
                  Checks if the current index is out of bounds or if the current
                  value violates the BST property (not within <code>lower</code>{" "}
                  and <code>upper</code> bounds).
                </li>
                <li>Creates a new node with the current value.</li>
                <li>
                  Recursively constructs left and right subtrees by adjusting
                  the <code>lower</code> and <code>upper</code> bounds
                  accordingly.
                </li>
                <li>Returns the root of the subtree.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1373: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>private int maxSum = 0;</code>: Instance variable to keep
              track of the maximum sum of BST found so far.
            </li>
            <li>
              <code>public int maxSumBST(TreeNode root)</code>: Method to find
              the maximum sum of any BST in the given binary tree.
              <ul>
                <li>
                  Initializes the process by calling <code>dfs(root)</code>.
                </li>
                <li>Returns the maximum sum found.</li>
              </ul>
            </li>
            <li>
              <code>private int[] dfs(TreeNode node)</code>: Recursive method to
              perform a post-order traversal and gather information about each
              subtree.
              <ul>
                <li>
                  Returns an array of four integers:{" "}
                  <code>{`{(isBST, min, max, sum)}`}</code>.
                </li>
                <li>
                  <code>isBST</code>: Indicates if the subtree is a BST (1 if
                  true, 0 if false).
                </li>
                <li>
                  <code>min</code>: The minimum value in the subtree.
                </li>
                <li>
                  <code>max</code>: The maximum value in the subtree.
                </li>
                <li>
                  <code>sum</code>: The sum of all values in the subtree.
                </li>
                <li>
                  If the current node is null, returns{" "}
                  <code>{`{(1, Integer.MAX_VALUE, Integer.MIN_VALUE, 0)}`}</code>
                  .
                </li>
                <li>Recursively processes the left and right subtrees.</li>
                <li>
                  Checks if the current subtree is a BST and updates{" "}
                  <code>maxSum</code> if necessary.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1382: (
    <>
      {" "}
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>public TreeNode balanceBST(TreeNode root)</code>: Method to
              balance the given BST.
              <ul>
                <li>
                  Initializes a list to store nodes from the in-order traversal.
                </li>
                <li>
                  Performs in-order traversal and stores nodes in the list.
                </li>
                <li>Returns the root of the newly constructed balanced BST.</li>
              </ul>
            </li>
            <li>
              <code>{`private void inorderTraversal(TreeNode root, List<TreeNode> nodes)`}</code>
              : Helper method to perform in-order traversal and store nodes.
              <ul>
                <li>If the current node is null, returns immediately.</li>
                <li>Recursively traverses the left subtree.</li>
                <li>Adds the current node to the list.</li>
                <li>Recursively traverses the right subtree.</li>
              </ul>
            </li>
            <li>
              <code>{`private TreeNode buildBalancedBST(List<TreeNode> nodes, int start, int end)`}</code>
              : Helper method to build a balanced BST from the sorted list of
              nodes.
              <ul>
                <li>
                  If the start index is greater than the end index, returns
                  null.
                </li>
                <li>Calculates the middle index of the current segment.</li>
                <li>Creates a new node using the value at the middle index.</li>
                <li>
                  Recursively builds the left and right subtrees using the
                  appropriate segments of the list.
                </li>
                <li>Returns the constructed node.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  2476: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>TreeNode Definition:</strong>
          <ul>
            <li>
              Defines a class <code>TreeNode</code> representing a node in a
              binary tree.
            </li>
            <li>
              Three constructors are provided:
              <ul>
                <li>
                  <code>TreeNode()</code>: Initializes an empty node.
                </li>
                <li>
                  <code>TreeNode(int val)</code>: Initializes a node with a
                  given value.
                </li>
                <li>
                  <code>TreeNode(int val, TreeNode left, TreeNode right)</code>:
                  Initializes a node with a value, left child, and right child.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>
            Class <code>Solution</code>:
          </strong>
          <ul>
            <li>
              <code>{`private List<Integer> nums = new ArrayList<>();`}</code>:
              A list to store the in-order traversal of the BST.
            </li>
            <li>
              <code>{`public List<List<Integer>> closestNodes(TreeNode root, List<Integer> queries)`}</code>
              : Main method to find the closest nodes for each query.
              <ul>
                <li>
                  Calls <code>inorder</code> to perform an in-order traversal
                  and store nodes in <code>nums</code>.
                </li>
                <li>
                  Initializes a list <code>ans</code> to store the results.
                </li>
                <li>
                  For each query:
                  <ul>
                    <li>
                      Uses <code>Collections.binarySearch</code> to find
                      positions in the sorted list.
                    </li>
                    <li>Calculates the closest smaller and larger values.</li>
                    <li>
                      Adds the results to <code>ans</code>.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <code>private void inorder(TreeNode root)</code>: Helper method to
              perform an in-order traversal and store nodes in <code>nums</code>
              .
              <ul>
                <li>If the current node is null, returns immediately.</li>
                <li>Recursively traverses the left subtree.</li>
                <li>
                  Adds the current node value to <code>nums</code>.
                </li>
                <li>Recursively traverses the right subtree.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1902: (
    <>
      <h2>Explanation</h2>
      <ul>
        <li>
          <strong>
            Method: <code>maxDepthBST</code>
          </strong>
          <ul>
            <li>
              This method takes an array of integers, <code>order</code>,
              representing the preorder traversal of a BST, and returns the
              maximum depth of the tree.
            </li>
            <li>
              <code>{`TreeMap<Integer, Integer> map = new TreeMap<>();`}</code>:
              A TreeMap to store the depth of nodes in the BST.
            </li>
            <li>
              <code>map.put(0, 0);</code>: Adds a sentinel node with value 0 and
              depth 0.
            </li>
            <li>
              <code>map.put(Integer.MAX_VALUE, 0);</code>: Adds a sentinel node
              with the maximum integer value and depth 0.
            </li>
            <li>
              <code>map.put(order[0], 1);</code>: Adds the root node (first
              element of the order array) with depth 1.
            </li>
            <li>
              <code>int ans = 1;</code>: Initializes the answer to 1, since the
              depth of the root node is 1.
            </li>
            <li>
              <code>for (int i = 1; i &lt; order.length; ++i)</code>: Iterates
              through the rest of the nodes in the preorder traversal.
              <ul>
                <li>
                  <code>int v = order[i];</code>: Retrieves the current node
                  value.
                </li>
                <li>
                  <code>{`Map.Entry<Integer, Integer> lower = map.lowerEntry(v);`}</code>
                  : Finds the largest node value in the map that is less than
                  the current node value.
                </li>
                <li>
                  <code>{`Map.Entry<Integer, Integer> higher = map.higherEntry(v);`}</code>
                  : Finds the smallest node value in the map that is greater
                  than the current node value.
                </li>
                <li>
                  <code>
                    int depth = 1 + Math.max(lower.getValue(),
                    higher.getValue());
                  </code>
                  : Calculates the depth of the current node as one more than
                  the maximum depth of its lower and higher neighbors.
                </li>
                <li>
                  <code>ans = Math.max(ans, depth);</code>: Updates the answer
                  with the maximum depth found so far.
                </li>
                <li>
                  <code>map.put(v, depth);</code>: Adds the current node value
                  and its depth to the map.
                </li>
              </ul>
            </li>
            <li>
              <code>return ans;</code>: Returns the maximum depth of the BST.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  225: (
    <>
      <h2>Class Definition</h2>
      <ul>
        <li>
          <code>MyStack</code> class:
          <ul>
            <li>
              Contains two queues: <code>queue1</code> and <code>queue2</code>.
            </li>
            <li>
              Uses the <code>LinkedList</code> class for queue implementation.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Constructor</h2>
      <ul>
        <li>
          <code>public MyStack()</code>:
          <ul>
            <li>
              Initializes <code>queue1</code> and <code>queue2</code> as empty
              linked lists.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Push Operation</h2>
      <ul>
        <li>
          <code>public void push(int x)</code>:
          <ul>
            <li>
              Adds the element <code>x</code> to <code>queue2</code>.
            </li>
            <li>
              Moves all elements from <code>queue1</code> to <code>queue2</code>
              .
            </li>
            <li>
              Swaps <code>queue1</code> and <code>queue2</code> to maintain the
              order.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Pop Operation</h2>
      <ul>
        <li>
          <code>public int pop()</code>:
          <ul>
            <li>
              Removes and returns the element at the front of{" "}
              <code>queue1</code>.
            </li>
            <li>
              Throws a <code>RuntimeException</code> if the stack is empty.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Top Operation</h2>
      <ul>
        <li>
          <code>public int top()</code>:
          <ul>
            <li>
              Returns the element at the front of <code>queue1</code> without
              removing it.
            </li>
            <li>
              Throws a <code>RuntimeException</code> if the stack is empty.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Empty Operation</h2>
      <ul>
        <li>
          <code>public boolean empty()</code>:
          <ul>
            <li>
              Checks if <code>queue1</code> is empty, indicating whether the
              stack is empty.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Usage Example</h2>
      <ul>
        <li>
          <code>MyStack obj = new MyStack();</code>
          <ul>
            <li>
              Creates a new instance of <code>MyStack</code>.
            </li>
          </ul>
        </li>
        <li>
          <code>obj.push(x);</code>
          <ul>
            <li>
              Adds an element <code>x</code> to the stack.
            </li>
          </ul>
        </li>
        <li>
          <code>int param_2 = obj.pop();</code>
          <ul>
            <li>Removes and returns the top element from the stack.</li>
          </ul>
        </li>
        <li>
          <code>int param_3 = obj.top();</code>
          <ul>
            <li>Returns the top element of the stack without removing it.</li>
          </ul>
        </li>
        <li>
          <code>boolean param_4 = obj.empty();</code>
          <ul>
            <li>Checks if the stack is empty.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  232: (
    <>
      {" "}
      <h1>MyQueue Code Explanation</h1>
      <p>
        This implementation of <code>MyQueue</code> uses two stacks to simulate
        the behavior of a queue, ensuring FIFO (First In, First Out) order.
      </p>
      <h2>Class Definition</h2>
      <ul>
        <li>
          <code>MyQueue</code> class:
          <ul>
            <li>
              Contains two stacks: <code>stack1</code> and <code>stack2</code>.
            </li>
            <li>
              Uses the <code>Stack</code> class for stack implementation.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Constructor</h2>
      <ul>
        <li>
          <code>public MyQueue()</code>:
          <ul>
            <li>
              Initializes <code>stack1</code> and <code>stack2</code> as empty
              stacks.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Push Operation</h2>
      <ul>
        <li>
          <code>public void push(int x)</code>:
          <ul>
            <li>
              Adds the element <code>x</code> to <code>stack1</code>.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Pop Operation</h2>
      <ul>
        <li>
          <code>public int pop()</code>:
          <ul>
            <li>
              If <code>stack2</code> is empty, moves all elements from{" "}
              <code>stack1</code> to <code>stack2</code>.
            </li>
            <li>
              Removes and returns the top element from <code>stack2</code>,
              which represents the front of the queue.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Peek Operation</h2>
      <ul>
        <li>
          <code>public int peek()</code>:
          <ul>
            <li>
              If <code>stack2</code> is empty, moves all elements from{" "}
              <code>stack1</code> to <code>stack2</code>.
            </li>
            <li>
              Returns the top element from <code>stack2</code> without removing
              it, representing the front of the queue.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Empty Operation</h2>
      <ul>
        <li>
          <code>public boolean empty()</code>:
          <ul>
            <li>
              Checks if both <code>stack1</code> and <code>stack2</code> are
              empty, indicating whether the queue is empty.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Usage Example</h2>
      <ul>
        <li>
          <code>MyQueue obj = new MyQueue();</code>
          <ul>
            <li>
              Creates a new instance of <code>MyQueue</code>.
            </li>
          </ul>
        </li>
        <li>
          <code>obj.push(x);</code>
          <ul>
            <li>
              Adds an element <code>x</code> to the queue.
            </li>
          </ul>
        </li>
        <li>
          <code>int param_2 = obj.pop();</code>
          <ul>
            <li>Removes and returns the front element from the queue.</li>
          </ul>
        </li>
        <li>
          <code>int param_3 = obj.peek();</code>
          <ul>
            <li>Returns the front element of the queue without removing it.</li>
          </ul>
        </li>
        <li>
          <code>boolean param_4 = obj.empty();</code>
          <ul>
            <li>Checks if the queue is empty.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  387: (
    <>
      {" "}
      <h1>First Unique Character in a String</h1>
      <p>
        This implementation finds the first non-repeating character in a string
        and returns its index. If it doesn't exist, it returns -1.
      </p>
      <h2>Class Definition</h2>
      <ul>
        <li>
          <code>public class Solution</code>:
          <ul>
            <li>
              Contains the method <code>firstUniqChar(String s)</code>.
            </li>
          </ul>
        </li>
      </ul>
      <h2>firstUniqChar Method</h2>
      <ul>
        <li>
          <code>public int firstUniqChar(String s)</code>:
          <ul>
            <li>
              Finds the first unique character in the string <code>s</code> and
              returns its index.
            </li>
            <li>Returns -1 if there is no unique character.</li>
          </ul>
        </li>
      </ul>
      <h3>Steps</h3>
      <ul>
        <li>
          <b>Step 1: Build Hash Map</b>
          <ul>
            <li>
              Create a <code>HashMap&lt;Character, Integer&gt;</code> named{" "}
              <code>count</code> to store the frequency of each character.
            </li>
            <li>
              Iterate through the string <code>s</code> and populate the{" "}
              <code>count</code> map with the frequency of each character.
            </li>
          </ul>
        </li>
        <li>
          <b>Step 2: Find the Index</b>
          <ul>
            <li>
              Iterate through the string <code>s</code> again and check the
              frequency of each character in the <code>count</code> map.
            </li>
            <li>
              Return the index of the first character with a frequency of 1.
            </li>
            <li>If no unique character is found, return -1.</li>
          </ul>
        </li>
      </ul>
      <h2>Example Usage</h2>
      <ul>
        <li>
          <code>Solution solution = new Solution();</code>
          <ul>
            <li>
              Creates a new instance of the <code>Solution</code> class.
            </li>
          </ul>
        </li>
        <li>
          <code>int index = solution.firstUniqChar("leetcode");</code>
          <ul>
            <li>
              Finds the first unique character in the string{" "}
              <code>"leetcode"</code> and returns its index.
            </li>
            <li>
              Expected result: <code>0</code>, since 'l' is the first unique
              character.
            </li>
          </ul>
        </li>
        <li>
          <code>int index = solution.firstUniqChar("loveleetcode");</code>
          <ul>
            <li>
              Finds the first unique character in the string{" "}
              <code>"loveleetcode"</code> and returns its index.
            </li>
            <li>
              Expected result: <code>2</code>, since 'v' is the first unique
              character.
            </li>
          </ul>
        </li>
        <li>
          <code>int index = solution.firstUniqChar("aabb");</code>
          <ul>
            <li>
              Finds the first unique character in the string <code>"aabb"</code>{" "}
              and returns its index.
            </li>
            <li>
              Expected result: <code>-1</code>, since there are no unique
              characters.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1352: (
    <>
      <h2>Class Definition</h2>
      <ul>
        <li>
          <code>ProductOfNumbers</code> class:
          <ul>
            <li>
              Private member:
              <ul>
                <li>
                  <code>List&lt;Integer&gt; prefix</code>: Stores cumulative
                  products of numbers added so far.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>
        Constructor (<code>ProductOfNumbers()</code>)
      </h2>
      <ul>
        <li>
          Initializes the <code>prefix</code> list with <code>[1]</code>:
          <ul>
            <li>
              Uses <code>ArrayList</code> and <code>Arrays.asList()</code> to
              initialize the list with a single element <code>1</code>.
            </li>
          </ul>
        </li>
      </ul>

      <h2>
        Adding a Number (<code>add(int num)</code> method)
      </h2>
      <ul>
        <li>
          Method signature: <code>public void add(int num)</code>
          <ul>
            <li>
              Checks if <code>num</code> is <code>0</code>:
              <ul>
                <li>
                  If true, resets <code>prefix</code> to <code>[1]</code>:
                  <ul>
                    <li>
                      Creates a new <code>ArrayList</code> with a single element{" "}
                      <code>1</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  Otherwise, calculates the new product and updates{" "}
                  <code>prefix</code>:
                  <ul>
                    <li>
                      Multiplies <code>num</code> with the last element of{" "}
                      <code>prefix</code> and adds it to <code>prefix</code>.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>
        Getting Product of Last K Numbers (<code>getProduct(int k)</code>{" "}
        method)
      </h2>
      <ul>
        <li>
          Method signature: <code>public int getProduct(int k)</code>
          <ul>
            <li>
              Checks if <code>k</code> is greater than or equal to the size of{" "}
              <code>prefix</code>:
              <ul>
                <li>
                  If true, returns <code>0</code>:
                  <ul>
                    <li>
                      Indicates that there are not enough numbers to compute the
                      product.
                    </li>
                  </ul>
                </li>
                <li>
                  Otherwise, computes and returns the product of the last{" "}
                  <code>k</code> numbers:
                  <ul>
                    <li>
                      Divides the last element of <code>prefix</code> by the
                      element <code>k</code> positions before the end of{" "}
                      <code>prefix</code>.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1823: (
    <>
      {" "}
      <h1>Explanation of findTheWinner Method</h1>
      <h2>Method Overview</h2>
      <ul>
        <li>
          <code>public int findTheWinner(int n, int k)</code>:
          <ul>
            <li>
              Returns the winner's number in a circular elimination game with{" "}
              <code>n</code> players and elimination step <code>k</code>.
            </li>
            <li>
              <code>n</code>: Total number of players.
            </li>
            <li>
              <code>k</code>: Step size for eliminating players.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Implementation Details</h2>
      <ul>
        <li>
          <strong>Initialization</strong>:
          <ul>
            <li>
              Creates an <code>ArrayList</code> <code>players</code> to
              represent the players with numbers from 1 to <code>n</code>.
            </li>
            <li>
              <code>for</code> loop iterates from 1 to <code>n</code> and adds
              each player's number to <code>players</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Elimination Process</strong>:
          <ul>
            <li>
              <code>while</code> loop continues as long as there is more than
              one player in <code>players</code>.
            </li>
            <li>
              <code>index</code> variable is updated using modulo operation to
              handle circular indexing.
            </li>
            <li>
              Removes the player at index <code>index</code> from{" "}
              <code>players</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Return</strong>:
          <ul>
            <li>
              After all eliminations, returns the number of the last remaining
              player in <code>players</code>, which is the winner.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  1429: (
    <>
      <h2>Class Overview</h2>
      <ul>
        <li>
          <code>FirstUnique</code> class:
          <ul>
            <li>
              Manages a collection of integers and efficiently finds and
              maintains the first unique integer.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Fields</h2>
      <ul>
        <li>
          <code>private Map&lt;Integer, Integer&gt; cnt</code>:
          <ul>
            <li>Stores the count of each integer added using a HashMap.</li>
          </ul>
        </li>
        <li>
          <code>private Set&lt;Integer&gt; unique</code>:
          <ul>
            <li>
              Stores unique integers using a LinkedHashSet, maintaining
              insertion order.
            </li>
          </ul>
        </li>
      </ul>

      <h2>
        Constructor (<code>FirstUnique(int[] nums)</code>)
      </h2>
      <ul>
        <li>
          Initializes the <code>cnt</code> map and <code>unique</code> set based
          on the input array <code>nums</code>:
          <ul>
            <li>
              Iterates through <code>nums</code> to populate <code>cnt</code>{" "}
              with counts of each number.
            </li>
            <li>
              Populates <code>unique</code> with numbers that have a count of 1
              in <code>cnt</code>.
            </li>
          </ul>
        </li>
      </ul>

      <h2>
        <code>showFirstUnique()</code> Method
      </h2>
      <ul>
        <li>
          <code>public int showFirstUnique()</code>:
          <ul>
            <li>
              Returns the first unique element from <code>unique</code> set, or{" "}
              <code>-1</code> if empty.
            </li>
          </ul>
        </li>
      </ul>

      <h2>
        <code>add(int value)</code> Method
      </h2>
      <ul>
        <li>
          <code>public void add(int value)</code>:
          <ul>
            <li>
              Updates <code>cnt</code> with the count of <code>value</code>.
            </li>
            <li>
              Updates <code>unique</code> set based on the count of{" "}
              <code>value</code>:
              <ul>
                <li>
                  If count becomes 1, adds <code>value</code> to{" "}
                  <code>unique</code>.
                </li>
                <li>
                  If count becomes greater than 1, removes <code>value</code>{" "}
                  from <code>unique</code>.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  2745: (
    <>
      {" "}
      <h1>Code Explanation: longestString Method</h1>
      <p>
        The following HTML provides a breakdown of the{" "}
        <code>longestString</code> method in the <code>Solution</code> class:
      </p>
      <ul>
        <li>
          <strong>Finding Minimum Count:</strong>
          <ul>
            <li>
              <code>min = Math.min(x, y);</code> determines the minimum count
              between <code>x</code> and <code>y</code>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Condition Check:</strong>
          <ul>
            <li>
              <code>if (x == y)</code>: Checks if <code>x</code> is equal to{" "}
              <code>y</code>.
            </li>
            <li>
              If true, return <code>(min * 2 + z) * 2;</code>
            </li>
            <li>
              If false, return <code>(min * 2 + 1 + z) * 2;</code>
            </li>
          </ul>
        </li>
        <li>
          <strong>Explanation of Return Values:</strong>
          <ul>
            <li>
              <code>(min * 2 + z) * 2;</code>: Calculates maximum length when{" "}
              <code>x</code> and <code>y</code> are equal.
            </li>
            <li>
              <code>(min * 2 + 1 + z) * 2;</code>: Calculates maximum length
              when <code>x</code> and <code>y</code> are not equal.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  292: (
    <>
      <p>
        The following HTML provides a breakdown of the solution to the Nim Game
        problem:
      </p>

      <ul>
        <li>
          <strong>Key Insight:</strong>
          <ul>
            <li>
              In Nim Game, winning or losing depends on the number of stones{" "}
              <code>n</code>.
            </li>
            <li>
              If <code>n % 4 == 0</code>, the first player (you) will lose if
              both play optimally.
            </li>
            <li>
              If <code>n % 4 != 0</code>, the first player (you) can win with
              optimal play.
            </li>
          </ul>
        </li>
        <li>
          <strong>Implementation:</strong>
          <ul>
            <li>
              <code>public boolean canWinNim(int n)</code>: Method signature
              that checks if the first player can win with <code>n</code>{" "}
              stones.
            </li>
            <li>
              <code>return n % 4 != 0;</code>: Returns <code>true</code> if{" "}
              <code>n</code> is not a multiple of 4, indicating a winning
              position.
            </li>
          </ul>
        </li>
        <li>
          <strong>Explanation of Return Statement:</strong>
          <ul>
            <li>
              The return statement uses <code>n % 4 != 0</code> to determine if
              the current number of stones <code>n</code> allows the first
              player to win.
            </li>
            <li>
              If <code>n % 4 == 0</code>, the statement returns{" "}
              <code>false</code>, indicating the first player will lose with
              optimal play.
            </li>
            <li>
              If <code>n % 4 != 0</code>, the statement returns{" "}
              <code>true</code>, indicating the first player can win with
              optimal play.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  319: (
    <ul>
      <li>
        <strong>Problem Understanding:</strong>
        <ul>
          <li>
            We have <code>n</code> bulbs initially off.
          </li>
          <li>
            In each round <code>i</code>, we toggle every <code>i</code>th bulb.
          </li>
          <li>
            Our goal is to find how many bulbs remain on after <code>n</code>{" "}
            rounds.
          </li>
        </ul>
      </li>
      <li>
        <strong>Key Insight:</strong>
        <ul>
          <li>A bulb ends up on if it is toggled an odd number of times.</li>
          <li>
            A bulb is toggled an odd number of times if it is a perfect square.
          </li>
          <li>
            The number of perfect squares ≤ <code>n</code> determines the number
            of bulbs that remain on.
          </li>
        </ul>
      </li>
      <li>
        <strong>Implementation:</strong>
        <ul>
          <li>
            <code>public int bulbSwitch(int n)</code>: Method signature that
            calculates the number of bulbs remaining on.
          </li>
          <li>
            <code>return (int) Math.sqrt(n);</code>: Returns the integer part of
            the square root of <code>n</code>, representing the count of perfect
            squares ≤ <code>n</code>.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2419: (
    <ul>
      <li>
        <strong>Finding the Maximum Element:</strong>
        <ul>
          <li>
            Initialize <code>max</code> to 0.
          </li>
          <li>
            Iterate through the array <code>nums</code>.
          </li>
          <li>
            For each element <code>num</code>, update <code>max</code> to be the
            maximum of <code>max</code> and <code>num</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Identifying Longest Subarray with Maximum Element:</strong>
        <ul>
          <li>
            Initialize <code>maxLength</code> and <code>currentLength</code> to
            0.
          </li>
          <li>
            Iterate through the array <code>nums</code> again.
          </li>
          <li>
            If the current element equals <code>max</code>:
            <ul>
              <li>
                Increment <code>currentLength</code>.
              </li>
              <li>
                Update <code>maxLength</code> to be the maximum of{" "}
                <code>maxLength</code> and <code>currentLength</code>.
              </li>
            </ul>
          </li>
          <li>
            If the current element does not equal <code>max</code>, reset{" "}
            <code>currentLength</code> to 0.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2568: (
    <ul>
      <li>
        <strong>Method Definition:</strong>
        <ul>
          <li>
            <code>{`public int minImpossibleOR(int[] nums) {`}</code>: Defines
            the minImpossibleOR method that takes an array of integers as input
            and returns an integer.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>int res = 1;</code>: Initialize <code>res</code> to 1, the
            smallest positive integer.
          </li>
          <li>
            <code>{`Set<Integer> seen = new HashSet<>();`}</code>: Create a set{" "}
            <code>seen</code> to store the unique integers from{" "}
            <code>nums</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Populate the Set:</strong>
        <ul>
          <li>
            <code>{`for (int num : nums) {`}</code>: Start a loop to iterate
            through the array <code>nums</code>.
          </li>
          <li>
            <code>seen.add(num);</code>: Add each number to the set{" "}
            <code>seen</code>.
          </li>
          <li>
            <code>{`}`}</code>: Close the loop.
          </li>
        </ul>
      </li>
      <li>
        <strong>Find the Smallest Missing Integer:</strong>
        <ul>
          <li>
            <code>{`while (seen.contains(res)) {`}</code>: Start a while loop to
            check if <code>res</code> is in the set <code>seen</code>.
          </li>
          <li>
            <code>{`res <<= 1;`}</code>: If <code>res</code> is in the set,
            shift <code>res</code> to the left by 1 (equivalent to multiplying
            by 2, moving to the next power of 2).
          </li>
          <li>
            <code>{`}`}</code>: Close the while loop.
          </li>
          <li>
            Continue until <code>res</code> is not in the set. This value of{" "}
            <code>res</code> is the answer.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Statement:</strong>
        <ul>
          <li>
            <code>return res;</code>: Return the value of <code>res</code> as
            the result.
          </li>
          <li>
            <code>{`}`}</code>: Close the minImpossibleOR method.
          </li>
          <li>
            <code>{`}`}</code>: Close the Solution class.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1908: (
    <ul>
      <li>
        <strong>Class Definition:</strong>
        <ul>
          <li>
            <code>{`class Solution {`}</code>: Defines the Solution class.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method Definition:</strong>
        <ul>
          <li>
            <code>{`public boolean nimGame(int[] piles) {`}</code>: Defines the
            nimGame method that takes an array of integers (piles) as input and
            returns a boolean.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            <code>int xor = 0;</code>: Initialize <code>xor</code> to 0. This
            variable will hold the XOR result of all pile sizes.
          </li>
        </ul>
      </li>
      <li>
        <strong>Iterate through the Piles:</strong>
        <ul>
          <li>
            <code>for (int pile : piles)</code>: Start a loop to iterate through
            each pile in the <code>piles</code> array.
          </li>
          <li>
            <code>xor ^= pile;</code>: XOR the current pile size with the
            current <code>xor</code> value.
          </li>
          <li>
            <code>{`}`}</code>: Close the loop.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Statement:</strong>
        <ul>
          <li>
            <code>return xor != 0;</code>: Return true if <code>xor</code> is
            not 0; otherwise, return false. If the XOR of all pile sizes is 0,
            the first player will lose; otherwise, the first player will win.
          </li>
          <li>
            <code>{`}`}</code>: Close the nimGame method.
          </li>
          <li>
            <code>{`}`}</code>: Close the Solution class.
          </li>
        </ul>
      </li>
    </ul>
  ),
  "347_heap_(priority_queue)": (
    <ul>
      <li>
        <strong>Class Definition:</strong>
        <ul>
          <li>
            <code>{`class Solution {`}</code>: Defines the Solution class.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method Definition:</strong>
        <ul>
          <li>
            <code>{`public int[] topKFrequent(int[] nums, int k) {`}</code>:
            Defines the topKFrequent method that takes an array of integers and
            an integer k, and returns an array of integers.
          </li>
        </ul>
      </li>
      <li>
        <strong>Frequency Map:</strong>
        <ul>
          <li>
            <code>{`Map<Integer, Integer> frequencyMap = new HashMap<>();`}</code>
            : Creates a HashMap to store the frequency of each element in the
            array.
          </li>
          <li>
            <code>{`for (int num : nums) {`}</code>: Starts a loop to iterate
            through the array <code>nums</code>.
          </li>
          <li>
            <code>
              frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
            </code>
            : Updates the frequency count for each element in the map.
          </li>
          <li>
            <code>{`}`}</code>: Closes the loop.
          </li>
        </ul>
      </li>
      <li>
        <strong>Priority Queue:</strong>
        <ul>
          <li>
            <code>{`PriorityQueue<Map.Entry<Integer, Integer>> heap = new PriorityQueue<>(`}</code>
            : Creates a priority queue (min-heap) to keep track of the top k
            frequent elements.
          </li>
          <li>
            <code>{`(a, b) -> a.getValue() - b.getValue()`}</code>: Defines a
            comparator to sort the entries by their frequency in ascending
            order.
          </li>
          <li>
            <code>{`)`};</code>: Closes the priority queue declaration.
          </li>
          <li>
            <code>{`for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {`}</code>
            : Starts a loop to iterate over the entries in the frequency map.
          </li>
          <li>
            <code>heap.offer(entry);</code>: Adds each entry to the heap.
          </li>
          <li>
            <code>{`if (heap.size() > k) {`}</code>: Checks if the size of the
            heap exceeds k.
          </li>
          <li>
            <code>heap.poll();</code>: Removes the root of the heap if its size
            exceeds k, ensuring that only the top k frequent elements are kept.
          </li>
          <li>
            <code>{`}`}</code>: Closes the if statement.
          </li>
          <li>
            <code>{`}`}</code>: Closes the for loop.
          </li>
        </ul>
      </li>
      <li>
        <strong>Extracting Results:</strong>
        <ul>
          <li>
            <code>int[] result = new int[k];</code>: Creates an array to store
            the result.
          </li>
          <li>
            <code>{`for (int i = k - 1; i >= 0; i--) {`}</code>: Starts a loop
            to extract the elements from the heap into the result array.
          </li>
          <li>
            <code>result[i] = heap.poll().getKey();</code>: Retrieves and
            removes the root of the heap and stores the key (element) in the
            result array.
          </li>
          <li>
            <code>{`}`}</code>: Closes the for loop.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Statement:</strong>
        <ul>
          <li>
            <code>return result;</code>: Returns the result array.
          </li>
          <li>
            <code>{`}`}</code>: Closes the topKFrequent method.
          </li>
          <li>
            <code>{`}`}</code>: Closes the Solution class.
          </li>
        </ul>
      </li>
    </ul>
  ),
  378: (
    <ul>
      <li>
        <strong>Problem Understanding:</strong>
        <ul>
          <li>
            Given a n x n matrix where each row and column is sorted in
            ascending order, find the Kth smallest element.
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution Approach:</strong>
        <ul>
          <li>
            <strong>Using Min-Heap:</strong> Utilize a priority queue (min-heap)
            to keep track of potential smallest elements in the matrix.
          </li>
          <li>
            <strong>Add Elements:</strong> Start by adding elements from the
            first row into the min-heap.
          </li>
          <li>
            <strong>Extract Smallest K Times:</strong> Extract the smallest
            element (root of heap) and add the next element from the same column
            if exists, repeat K times.
          </li>
        </ul>
      </li>
      <li>
        <strong>Java Implementation:</strong>
        <ul>
          <li>See the provided Java code for detailed implementation.</li>
          <li>
            Includes using a min-heap to efficiently find the Kth smallest
            element in a sorted matrix.
          </li>
        </ul>
      </li>
    </ul>
  ),
  "692_heap_(priority_queue)": (
    <ul>
      <li>
        <strong>Problem Understanding:</strong>
        <ul>
          <li>
            Given a non-empty list of words, find the K most frequent elements.
          </li>
          <li>
            If there are ties in frequency, return the words in lexicographical
            order.
          </li>
        </ul>
      </li>
      <li>
        <strong>Solution Approach:</strong>
        <ul>
          <li>
            <strong>HashMap:</strong> Count frequencies of each word.
          </li>
          <li>
            <strong>Min-Heap (Priority Queue):</strong> Use a min-heap to
            maintain the K most frequent words.
          </li>
          <li>
            <strong>Lexicographical Order:</strong> Handle ties in frequency
            using the comparator.
          </li>
        </ul>
      </li>
      <li>
        <strong>Java Implementation:</strong>
        <ul>
          <li>See the provided Java code for detailed implementation.</li>
          <li>
            Uses HashMap for counting, Priority Queue for maintaining top K
            elements, and handles ties with lexicographical order.
          </li>
        </ul>
      </li>
    </ul>
  ),
  1439: (
    <ul>
      <li>
        <strong>Class `T`:</strong>
        <ul>
          <li>
            Represents a tuple `(i, j, sum)` where `i` and `j` are indices and
            `sum` is their sum.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method `kthSmallest`:</strong>
        <ul>
          <li>
            Iteratively computes k smallest pair sums between rows using
            `kSmallestPairSums`.
          </li>
        </ul>
      </li>
      <li>
        <strong>Method `kSmallestPairSums`:</strong>
        <ul>
          <li>
            Uses a min-heap to track and extract the smallest k sums
            efficiently.
          </li>
          <li>
            Populates `ans` with k smallest sums using a heap-based approach.
          </li>
        </ul>
      </li>
      <li>
        <strong>Java Implementation:</strong>
        <ul>
          <li>See the provided Java code for detailed implementation.</li>
          <li>
            Utilizes min-heap (`PriorityQueue`) for efficient tracking of
            smallest sums.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2231: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>Convert the integer `num` to a string `s`.</li>
          <li>
            Initialize `ans` to 0 and create `maxHeap` to store odd and even
            digits in descending order.
          </li>
        </ul>
      </li>
      <li>
        <strong>Populating Heaps:</strong>
        <ul>
          <li>
            Iterate through each digit of `s` and add it to the appropriate heap
            (`maxHeap[0]` for even, `maxHeap[1]` for odd).
          </li>
        </ul>
      </li>
      <li>
        <strong>Building the Largest Integer:</strong>
        <ul>
          <li>
            Iterate through each digit of `s` again and construct `ans` by
            appending digits from `maxHeap`.
          </li>
          <li>
            Multiply `ans` by 10 and add the next largest digit from the heap to
            form the largest possible integer.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Once all digits are processed, return `ans` as the largest possible
            integer formed by rearranging the digits of `num`.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2233: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize `kMod` for modulo operation and `ans` for storing
            product.
          </li>
          <li>Create `minHeap` to store elements from `nums`.</li>
        </ul>
      </li>
      <li>
        <strong>Populating the Heap:</strong>
        <ul>
          <li>Add all elements of `nums` to `minHeap`.</li>
        </ul>
      </li>
      <li>
        <strong>Modifying Elements:</strong>
        <ul>
          <li>
            Extract the smallest `k` elements from `minHeap`, increment each by
            1, and put them back.
          </li>
        </ul>
      </li>
      <li>
        <strong>Calculating Product:</strong>
        <ul>
          <li>
            Multiply all elements in `minHeap` together, taking modulo `kMod` at
            each step.
          </li>
        </ul>
      </li>
      <li>
        <strong>Return:</strong>
        <ul>
          <li>
            Convert and return `ans` as the maximum product after adding 1 to
            the smallest `k` elements.
          </li>
        </ul>
      </li>
    </ul>
  ),
  2333: (
    <ul>
      <li>
        <strong>Input Preparation:</strong>
        <ul>
          <li>
            <code>getDiff(nums1, nums2)</code>: Calculates absolute differences
            between corresponding elements of <code>nums1</code> and{" "}
            <code>nums2</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Calculate <code>k = k1 + k2</code>.
          </li>
          <li>
            Edge case check: If sum of all differences is ≤ <code>k</code>,
            return <code>0</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Heap and Count Initialization:</strong>
        <ul>
          <li>
            Initialize <code>count</code> map to store frequency of each unique
            difference.
          </li>
          <li>
            Initialize <code>maxHeap</code> to store pairs{" "}
            <code>(difference, frequency)</code> in descending order of
            difference.
          </li>
        </ul>
      </li>
      <li>
        <strong>Heap Population:</strong>
        <ul>
          <li>
            Iterate through <code>diff</code> array to populate{" "}
            <code>count</code> map.
          </li>
          <li>
            Insert each unique difference with frequency into{" "}
            <code>maxHeap</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Modification Process:</strong>
        <ul>
          <li>
            While <code>k &gt; 0</code>:
          </li>
          <ul>
            <li>
              Remove largest difference pair from <code>maxHeap</code>.
            </li>
            <li>
              Determine how much of this difference can be reduced (
              <code>numDecreased</code>).
            </li>
            <li>Adjust heap and frequencies accordingly.</li>
          </ul>
        </ul>
      </li>
      <li>
        <strong>Calculate Minimum Sum:</strong>
        <ul>
          <li>
            Iterate through <code>maxHeap</code> to calculate minimum possible
            sum of squared differences (<code>ans</code>).
          </li>
        </ul>
      </li>
      <li>
        <strong>Return Result:</strong>
        <ul>
          <li>
            Return <code>ans</code>, which represents the minimized sum of
            squared differences after allowed modifications.
          </li>
        </ul>
      </li>
    </ul>
  ),
  499: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize the dimensions of the maze (<code>m</code> and{" "}
            <code>n</code>).
          </li>
          <li>
            Initialize the starting position of the ball (<code>r, c</code>) and
            the position of the hole (<code>rh, ch</code>).
          </li>
          <li>
            Set up a queue <code>q</code> to manage the BFS exploration starting
            from the ball's initial position.
          </li>
          <li>
            Initialize a 2D array <code>dist</code> to keep track of minimum
            distances from the starting position to each cell in the maze.
          </li>
          <li>
            Initialize a 2D array <code>path</code> to store the shortest path
            string to reach each cell in the maze.
          </li>
          <li>
            Define directions as movements up (<code>'u'</code>), down (
            <code>'d'</code>), left (<code>'l'</code>), and right (
            <code>'r'</code>) along with their corresponding changes in
            coordinates.
          </li>
        </ul>
      </li>
      <li>
        <strong>Breadth-First Search (BFS) Loop:</strong>
        <ul>
          <li>
            While the queue <code>q</code> is not empty:
          </li>
          <ul>
            <li>
              Dequeue the current position <code>p</code> from <code>q</code>.
            </li>
            <li>
              Iterate over all possible movement directions (<code>dirs</code>).
            </li>
            <li>
              For each direction, attempt to move the ball until it hits a wall
              (<code>maze[x+a][y+b] == 0</code>) or reaches the hole (
              <code>x == rh && y == ch</code>).
            </li>
            <li>
              Calculate the number of steps taken to reach the new position (
              <code>step</code>).
            </li>
            <li>
              If this new position offers a shorter path (based on{" "}
              <code>dist[x][y]</code>) or has an equally short path but
              lexicographically smaller path string (<code>path[i][j] + d</code>
              ), update <code>dist[x][y]</code>, <code>path[x][y]</code>, and
              enqueue the new position <code>(x, y)</code> into <code>q</code>.
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <strong>Result:</strong>
        <ul>
          <li>
            Return the shortest path string stored in <code>path[rh][ch]</code>.
            If <code>path[rh][ch]</code> is still <code>null</code>, return{" "}
            <code>"impossible"</code> indicating that no path exists from the
            starting position to the hole.
          </li>
        </ul>
      </li>
    </ul>
  ),
  505: (
    <ul>
      <li>
        <strong>Initialization:</strong>
        <ul>
          <li>
            Initialize variables and constants:
            <ul>
              <li>
                <code>m</code> and <code>n</code> for the dimensions of the
                maze.
              </li>
              <li>
                <code>inf</code> set to a large value (1 &lt;&lt; 30) to
                represent an infinite distance initially.
              </li>
              <li>
                <code>dist</code> as a 2D array to store the minimum distance
                from the start point to each cell in the maze.
              </li>
              <li>
                <code>start</code> and <code>destination</code> arrays to store
                the coordinates of the start and destination points
                respectively.
              </li>
              <li>
                <code>si, sj</code> for start point coordinates and{" "}
                <code>di, dj</code> for destination point coordinates.
              </li>
              <li>
                <code>q</code> as a <code>Deque</code> to facilitate BFS
                traversal with the starting point enqueued.
              </li>
              <li>
                <code>dirs</code> array representing directional movements (up,
                down, left, right).
              </li>
            </ul>
          </li>
          <li>
            Initialize the distance from the start point to itself as{" "}
            <code>0</code> in the <code>dist</code> array and enqueue the start
            point into <code>q</code>.
          </li>
        </ul>
      </li>
      <li>
        <strong>Breadth-First Search (BFS) Loop:</strong>
        <ul>
          <li>
            While <code>q</code> is not empty:
          </li>
          <ul>
            <li>
              Dequeue the current position <code>p</code> from <code>q</code>.
            </li>
            <li>
              Retrieve the coordinates <code>i, j</code> from <code>p</code> and
              the current distance <code>k</code> from <code>dist[i][j]</code>.
            </li>
            <li>
              Iterate through all four possible movement directions (
              <code>dirs</code>).
            </li>
            <li>
              Attempt to move in the current direction (<code>a, b</code>) until
              hitting a wall (<code>maze[x + a][y + b] == 0</code>).
            </li>
            <li>
              If the new calculated distance <code>k</code> to reach{" "}
              <code>(x, y)</code> is less than the current recorded{" "}
              <code>dist[x][y]</code>, update <code>dist[x][y]</code> and
              enqueue <code>(x, y)</code> into <code>q</code>.
            </li>
          </ul>
        </ul>
      </li>
      <li>
        <strong>Result:</strong>
        <ul>
          <li>
            Return <code>dist[di][dj]</code> which holds the minimum distance
            from the start point to the destination point. If it remains set to{" "}
            <code>inf</code>, return <code>-1</code> indicating that the
            destination is unreachable from the start point.
          </li>
        </ul>
      </li>
    </ul>
  ),
  316: (
    <ul>
      <li>
        <b>Count Array:</b>
        <ul>
          <li>
            Create an array <code>count</code> of size 26 to store the frequency
            of each character in the string <code>s</code>.
          </li>
          <li>
            Iterate through the string <code>s</code> and increment the count
            for each character.
          </li>
        </ul>
      </li>
      <li>
        <b>Visited Array:</b>
        <ul>
          <li>
            Create a boolean array <code>visited</code> of size 26 to keep track
            of characters that are already in the stack.
          </li>
        </ul>
      </li>
      <li>
        <b>Monotonic Stack:</b>
        <ul>
          <li>
            Create a stack to store the result characters in lexicographical
            order without duplicates.
          </li>
          <li>
            Iterate through the string <code>s</code> again:
            <ul>
              <li>
                Decrement the count for the current character <code>c</code>.
              </li>
              <li>
                If <code>c</code> is already in the stack (
                <code>visited[c - 'a']</code> is <code>true</code>), skip to the
                next character.
              </li>
              <li>
                While the stack is not empty and the top character of the stack
                is greater than <code>c</code>, and the top character appears
                later in the string (its count is greater than 0):
                <ul>
                  <li>
                    Pop the top character from the stack and mark it as not
                    visited.
                  </li>
                </ul>
              </li>
              <li>
                Push the current character <code>c</code> onto the stack and
                mark it as visited.
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <b>Building the Result:</b>
        <ul>
          <li>
            Create a <code>StringBuilder</code> to build the result string.
          </li>
          <li>
            Pop characters from the stack and insert them at the beginning of
            the <code>StringBuilder</code> to get the final result string.
          </li>
        </ul>
      </li>
      <li>
        <b>Return the Result:</b>
        <ul>
          <li>Return the final result string.</li>
        </ul>
      </li>
    </ul>
  ),
  321: (
    <ul>
      <li>
        <b>
          Main Function (<code>maxNumber</code>):
        </b>
        <ul>
          <li>
            Calculate the lengths of <code>nums1</code> and <code>nums2</code>.
          </li>
          <li>
            Initialize an array <code>maxNum</code> to store the maximum number
            of length <code>k</code>.
          </li>
          <li>
            Iterate over possible lengths for the subsequences from{" "}
            <code>nums1</code> and <code>nums2</code> to form a sequence of
            length <code>k</code>.
          </li>
          <li>
            Call <code>maxSubsequence</code> for <code>nums1</code> and{" "}
            <code>nums2</code> to get the maximum subsequences of given lengths.
          </li>
          <li>
            Merge the two subsequences using the <code>merge</code> function.
          </li>
          <li>
            Update the maximum subsequence if the new candidate is greater.
          </li>
        </ul>
      </li>
      <li>
        <b>
          Max Subsequence Function (<code>maxSubsequence</code>):
        </b>
        <ul>
          <li>
            Use a stack to store the maximum subsequence of a given length.
          </li>
          <li>
            Iterate over the array and maintain the stack by keeping only the
            greatest elements while ensuring the length constraint.
          </li>
        </ul>
      </li>
      <li>
        <b>
          Merge Function (<code>merge</code>):
        </b>
        <ul>
          <li>
            Merge two subsequences by comparing their elements
            lexicographically.
          </li>
          <li>
            Use a helper function <code>greater</code> to determine which
            element to take from which subsequence.
          </li>
        </ul>
      </li>
      <li>
        <b>
          Greater Function (<code>greater</code>):
        </b>
        <ul>
          <li>
            Compare elements of two subsequences starting from given indices.
          </li>
          <li>
            Return true if the element in the first subsequence is greater,
            otherwise return false.
          </li>
        </ul>
      </li>
    </ul>
  ),
  402: (
    <>
      <h3>Explanation:</h3>
      <ul>
        <li>
          <b>
            Main Function (<code>removeKdigits</code>):
          </b>
          <ul>
            <li>
              Check if <code>k</code> is equal to the length of <code>num</code>
              . If so, return "0" because removing all digits results in 0.
            </li>
            <li>Initialize a stack to store the digits.</li>
            <li>
              Iterate through each character (digit) in the input string{" "}
              <code>num</code>.
            </li>
            <li>
              While the stack is not empty, <code>k</code> is greater than 0,
              and the top of the stack is greater than the current digit:
              <ul>
                <li>Pop the top of the stack.</li>
                <li>
                  Decrease <code>k</code> by 1.
                </li>
              </ul>
            </li>
            <li>Push the current digit onto the stack.</li>
            <li>
              After processing all digits, if <code>k</code> is still greater
              than 0, pop elements from the stack until <code>k</code> becomes
              0.
            </li>
          </ul>
        </li>
        <li>
          <b>Building the Result:</b>
          <ul>
            <li>
              Initialize a <code>StringBuilder</code> to construct the result
              string.
            </li>
            <li>
              Pop all elements from the stack and append them to the{" "}
              <code>StringBuilder</code>.
            </li>
            <li>
              Reverse the <code>StringBuilder</code> to get the correct order of
              digits.
            </li>
            <li>
              Remove any leading zeros by deleting characters from the start of
              the <code>StringBuilder</code>.
            </li>
            <li>Return the final string representation of the result.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  456: (
    <>
      <ul>
        <li>
          <b>
            Main Function (<code>find132pattern</code>):
          </b>
          <ul>
            <li>
              Check if the length of <code>nums</code> is less than 3. If so,
              return <code>false</code> because a 132 pattern requires at least
              3 elements.
            </li>
            <li>
              Initialize a stack to keep track of potential '3' elements in the
              132 pattern.
            </li>
            <li>
              Create an array <code>min</code> to store the minimum value up to
              each index.
            </li>
            <li>
              Initialize <code>min[0]</code> to <code>nums[0]</code>.
            </li>
            <li>
              Fill the <code>min</code> array such that <code>min[i]</code>{" "}
              contains the minimum value from <code>nums[0]</code> to{" "}
              <code>nums[i]</code>.
            </li>
          </ul>
        </li>
        <li>
          <b>Traverse the Array:</b>
          <ul>
            <li>Iterate through the array from the end to the beginning.</li>
            <li>
              For each element <code>nums[j]</code>:
              <ol>
                <li>
                  Check if <code>nums[j]</code> is greater than{" "}
                  <code>min[j]</code> (potential '3' element).
                </li>
                <li>
                  While the stack is not empty and the top element of the stack
                  is less than or equal to <code>min[j]</code>, pop elements
                  from the stack.
                </li>
                <li>
                  Check if the stack is not empty and the top element of the
                  stack is less than <code>nums[j]</code>. If true, a 132
                  pattern is found, return <code>true</code>.
                </li>
                <li>
                  Push <code>nums[j]</code> onto the stack (potential '3'
                  element for future iterations).
                </li>
              </ol>
            </li>
          </ul>
        </li>
        <li>
          If no 132 pattern is found after traversing the array, return{" "}
          <code>false</code>.
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
