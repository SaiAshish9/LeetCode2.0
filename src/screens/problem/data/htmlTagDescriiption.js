import InputImg from "../../../assets/IP.png";
import KImg from "../../../assets/KruskalOP.png";
import PImg from "../../../assets/primsOP.png";

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
        </li>{" "}
        <br />
        <li>
          Data Structure: It typically uses a disjoint-set data structure
          (Union-Find) to efficiently check for cycles and maintain
          connectivity.
        </li>{" "}
        <br />
        <li>
          Edge Selection: The algorithm sorts all the edges by weight and then
          iterates over them, adding edges to the MST if they do not create a
          cycle.
        </li>{" "}
        <br />
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
        <br />
        <li>
          Data Structure: It typically uses a priority queue (or a min-heap) to
          efficiently select the next edge to consider.
        </li>
        <br />
        <li>
          Edge Selection: The algorithm starts with an arbitrary vertex and
          repeatedly grows the MST by adding the smallest edge that connects a
          vertex in the MST to a vertex outside the MST.
        </li>{" "}
        <br />
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
        </li>{" "}
        <br />
        <li>
          Data Structures: Kruskal's algorithm typically requires a disjoint-set
          data structure (Union-Find), which may be slightly more complex to
          implement than a priority queue used in Prim's algorithm.
        </li>{" "}
        <br />
        <li>
          Space Complexity: Prim's algorithm can be more memory-efficient in
          practice, especially when using a binary heap, as it requires less
          space than Union-Find.
        </li>{" "}
        <br />
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

      <br />

      <p>Kruskal Algorithm Implementation:</p>
      <br />

      <pre>{`public class KruskalMinimumSpanningTree {

    class UnionFind {
        int[] parent; // representative, leader, root
        int[] rank;

        UnionFind(int n) {
            parent = new int[n];
            rank = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                rank[i] = 0;
            }
        }

        int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return x;
        }

        void union(int x, int y) {
            int xRoot = find(x);
            int yRoot = find(y);

            if (xRoot == yRoot) {
                return;
            }

            if (rank[xRoot] < rank[yRoot]) {
                parent[xRoot] = yRoot;
            } else if (rank[xRoot] > rank[yRoot]) {
                parent[yRoot] = xRoot;
            } else {
                parent[yRoot] = xRoot;
                rank[xRoot]++;
            }
        }
    }
    
    public List<Edge> kruskal(List<Edge> edges, int n) {
        Collections.sort(edges);
        UnionFind uf = new UnionFind(n);
        List<Edge> mst = new ArrayList<>();

        for (Edge edge : edges) {
//          Adding the current edge to the Minimum Spanning Tree (MST) will create a cycle.
            if (uf.find(edge.getSrc()) != uf.find(edge.getDest())) {
                uf.union(edge.getSrc(), edge.getDest());
                mst.add(edge);
            }
        }

        return mst;
    }

    public static void main(String[] args) {
        List<Edge> edges = new ArrayList<>();
        edges.add(new Edge(0, 1, 4));
        edges.add(new Edge(0, 7, 8));
        edges.add(new Edge(1, 2, 8));
        edges.add(new Edge(1, 7, 11));
        edges.add(new Edge(2, 3, 7));
        edges.add(new Edge(2, 5, 4));
        edges.add(new Edge(2, 8, 2));
        edges.add(new Edge(3, 4, 9));
        edges.add(new Edge(3, 5, 14));
        edges.add(new Edge(4, 5, 10));
        edges.add(new Edge(5, 6, 2));
        edges.add(new Edge(6, 7, 1));
        edges.add(new Edge(6, 8, 6));
        edges.add(new Edge(7, 8, 7));

        List<Edge> mst = new KruskalMinimumSpanningTree().kruskal(edges, 9);

        System.out.println("Minimum Spanning Tree:");
        for (Edge edge : mst) {
            System.out.println(edge.getSrc() + " - " + edge.getDest() + " : " + edge.getWeight());
        }
    }
}`}</pre>

      <br />

      <p>Input:</p>
      <img style={{ width: "60%" }} src={InputImg} alt="img" />
      <br />
      <p>Kruskal Output:</p>
      <img style={{ width: "60%" }} src={KImg} alt="img" />

      <br />
      <p>
        With efficient data structures like Union-Find, Kruskal's algorithm runs
        in O(E log E) time, where E is the number of edges. The algorithm sorts
        all the edges by weight and then iterates over them, adding edges to the
        MST if they do not create a cycle.
        <br />
        <br />
        Kruskal's algorithm grows the minimum spanning tree edge by edge by
        selecting the smallest edge that does not form a cycle.
        <br />
        <br />
        Prim's algorithm can be more efficient in dense graphs (where E is close
        to V^2) because it has a better time complexity in terms of the number
        of vertices.
        <br />
        <br />
        With a priority queue implementation, Prim's algorithm runs in O(E + V
        log V) time, where V is the number of vertices and E is the number of
        edges.
        <br />
        <br />
        Kruskal's Algorithm: It doesn't necessarily select adjacent edges.
        Instead, it selects the smallest edge that does not form a cycle with
        the edges already in the spanning tree. The algorithm iterates over the
        edges in non-decreasing order of weight and adds them to the MST if they
        connect two disjoint components.
        <br />
        <br />
        Prim's Algorithm: It does indeed select adjacent edges in the sense that
        it starts from an initial vertex and greedily adds the smallest edge
        that connects a vertex in the MST to a vertex outside the MST. It grows
        the tree vertex by vertex, always selecting the smallest available edge.
      </p>

      <br />
      <p>Prim's Algorithm Implementation:</p>

      <pre>{`
public class Prims {
    public static List<List<Edge>> prim(List<Edge> edges, int n) {
        PriorityQueue<Edge> pq = new PriorityQueue<>();
        boolean[] visited = new boolean[n];
        List<List<Edge>> mst = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            mst.add(new ArrayList<>());
        }

        visited[0] = true;
        for (Edge edge : edges) {
            if (edge.getSrc() == 0) {
                pq.add(edge);
            }
        }
        while (!pq.isEmpty()) {
            Edge minEdge = pq.poll();
            int u = minEdge.getDest();
            if (!visited[u]) {
                visited[u] = true;
                Edge temp = new Edge(minEdge.getDest(), minEdge.getSrc(), minEdge.getWeight());
                if (minEdge.getSrc() != 0) {
                    mst.get(minEdge.getDest()).add(temp);
                } else {
                    mst.get(0).add(temp);
                }
                for (Edge edge : edges) {
                    if (edge.getSrc() == u && !visited[edge.getDest()]) {
                        pq.add(edge);
                    }
                }
            }
        }

        return mst;
    }

    public static void main(String[] args) {
        List<Edge> edges = new ArrayList<>();
        edges.add(new Edge(0, 1, 4));
        edges.add(new Edge(0, 7, 8));
        edges.add(new Edge(1, 2, 8));
        edges.add(new Edge(1, 7, 11));
        edges.add(new Edge(2, 3, 7));
        edges.add(new Edge(2, 5, 4));
        edges.add(new Edge(2, 8, 2));
        edges.add(new Edge(3, 4, 9));
        edges.add(new Edge(3, 5, 14));
        edges.add(new Edge(4, 5, 10));
        edges.add(new Edge(5, 6, 2));
        edges.add(new Edge(6, 7, 1));
        edges.add(new Edge(6, 8, 6));
        edges.add(new Edge(7, 8, 7));

        List<List<Edge>> mst = prim(edges, 9);

        System.out.println("Minimum Spanning Tree:");
        for (int i = 0; i < mst.size(); i++) {
            for (Edge edge : mst.get(i)) {
                System.out.println(edge.getSrc() + " - " + edge.getDest() + " : " + edge.getWeight());
            }
        }
    }
}
`}</pre>
      <br />
      <p>Alternate Solution:</p>
      <pre>{`import java.util.*;

class Prim {
    static class Edge {
        int target;
        int weight;

        Edge(int target, int weight) {
            this.target = target;
            this.weight = weight;
        }
    }

    static class Node implements Comparable<Node> {
        int vertex;
        int weight;

        Node(int vertex, int weight) {
            this.vertex = vertex;
            this.weight = weight;
        }

        public int compareTo(Node other) {
            return this.weight - other.weight;
        }
    }

    public static List<Edge> primMST(Map<Integer, List<Edge>> graph, int start) {
        PriorityQueue<Node> minHeap = new PriorityQueue<>();
        Set<Integer> inMST = new HashSet<>();
        List<Edge> mst = new ArrayList<>();

        // Start with the start vertex
        minHeap.add(new Node(start, 0));

        while (!minHeap.isEmpty()) {
            Node node = minHeap.poll();
            int u = node.vertex;

            if (inMST.contains(u)) {
                continue;
            }

            inMST.add(u);
            if (node.weight != 0) {
                mst.add(new Edge(u, node.weight));
            }

            for (Edge edge : graph.getOrDefault(u, new ArrayList<>())) {
                if (!inMST.contains(edge.target)) {
                    minHeap.add(new Node(edge.target, edge.weight));
                }
            }
        }

        return mst;
    }

    public static void main(String[] args) {
        // Create the graph as an adjacency list
        Map<Integer, List<Edge>> graph = new HashMap<>();
        graph.put(0, Arrays.asList(new Edge(1, 1), new Edge(2, 4), new Edge(3, 2)));
        graph.put(1, Arrays.asList(new Edge(0, 1), new Edge(3, 3), new Edge(5, 2)));
        graph.put(2, Arrays.asList(new Edge(0, 4), new Edge(3, 1), new Edge(4, 6)));
        graph.put(3, Arrays.asList(new Edge(0, 2), new Edge(1, 3), new Edge(2, 1), new Edge(4, 3)));
        graph.put(4, Arrays.asList(new Edge(2, 6), new Edge(3, 3), new Edge(5, 4)));
        graph.put(5, Arrays.asList(new Edge(1, 2), new Edge(4, 4)));

        List<Edge> mst = primMST(graph, 0);

        System.out.println("Minimum Spanning Tree:");
        for (Edge edge : mst) {
            System.out.println("Vertex: " + edge.target + " - Weight: " + edge.weight);
        }
    }
}
`}</pre>
      <br />
      <p>Input:</p>
      <img style={{ width: "60%" }} src={InputImg} alt="img" />
      <br />
      <p>Prims Output:</p>
      <img style={{ width: "60%" }} src={PImg} alt="img" />
    </>
  ),
};

export default TAG_DESCRIPTION;
