const TAG_DESCRIPTION = {
  "Minimum Spanning Tree": (
    <>
      <p>
        A Minimum Spanning Tree (MST) of a weighted, connected, undirected graph
        is a spanning tree whose sum of edge weights is as small as possible.
        The spanning tree includes all the vertices of the graph, and the total
        weight of all the edges in the tree is minimized.
      </p>
      <br />
      <p>
        Kruskal's algorithm and Prim's algorithm are both popular algorithms
        used to find the minimum spanning tree (MST) of a weighted undirected
        graph, but they use different approaches to achieve this.
      </p>
      <br />

      <p>Kruskal's Algorithm </p>
      <br />

      <ul>
        <li>
          Approach: Kruskal's algorithm grows the minimum spanning tree edge by
          edge by selecting the smallest edge that does not form a cycle.
        </li>
        <li>
          Data Structure: It typically uses a disjoint-set data structure
          (Union-Find) to efficiently check for cycles and maintain
          connectivity.
        </li>
        <li>
          Edge Selection: The algorithm sorts all the edges by weight and then
          iterates over them, adding edges to the MST if they do not create a
          cycle.
        </li>
        <li>
          Complexity: With efficient data structures like Union-Find, Kruskal's
          algorithm runs in O(E log E) time, where E is the number of edges.
        </li>
      </ul>
      <br />

      <p>Prim's Algorithm:</p>
      <br />

      <ul>
        <li>
          Approach: Prim's algorithm grows the minimum spanning tree vertex by
          vertex by selecting the smallest edge that connects a vertex in the
          MST to a vertex outside the MST.
        </li>
        <li>
          Data Structure: It typically uses a priority queue (or a min-heap) to
          efficiently select the next edge to consider.
        </li>
        <li>
          Edge Selection: The algorithm starts with an arbitrary vertex and
          repeatedly grows the MST by adding the smallest edge that connects a
          vertex in the MST to a vertex outside the MST.
        </li>
        <li>
          Complexity: With a priority queue implementation, Prim's algorithm
          runs in O(E + V log V) time, where V is the number of vertices and E
          is the number of edges.
        </li>
      </ul>
      <br />

      <p>Comparison:</p>
      <br />

      <ul>
        <li>
          Complexity: Prim's algorithm can be more efficient in dense graphs
          (where E is close to V^2) because it has a better time complexity in
          terms of the number of vertices.
        </li>
        <li>
          Data Structures: Kruskal's algorithm typically requires a disjoint-set
          data structure (Union-Find), which may be slightly more complex to
          implement than a priority queue used in Prim's algorithm.
        </li>
        <li>
          Space Complexity: Prim's algorithm can be more memory-efficient in
          practice, especially when using a binary heap, as it requires less
          space than Union-Find.
        </li>
        <li>
          Applications: Kruskal's algorithm is often preferred when the graph is
          represented as a list of edges, while Prim's algorithm is preferred
          when the graph is represented as an adjacency matrix or list.
        </li>
      </ul>

      <br />

      <p>
        In summary, both algorithms are effective for finding minimum spanning
        trees, but the choice between them often depends on factors such as the
        graph representation, graph density, and available data structures.
      </p>
    </>
  ),
};

export default TAG_DESCRIPTION;
