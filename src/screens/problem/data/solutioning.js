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
            first (<code>for (int i = nestedList.size() - 1; i >= 0; --i)</code>
            ) and pushes each element onto the stack (
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
