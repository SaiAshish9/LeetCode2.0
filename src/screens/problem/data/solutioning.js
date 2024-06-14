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
            getStartNode(Map&lt;Integer, Stack&lt;Integer&gt;&gt; graph,
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
