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
                  If the condition <code>low[v] {'>'} disc[u]</code> is met, it
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
};

export default SOLUTIONING;
