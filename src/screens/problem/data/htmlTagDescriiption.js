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
      <br />
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
  "Sliding Window": (
    <div class="text">
      <p dir="ltr">
        <span>
          Sliding Window problems are problems in which a fixed or variable-size
          window is moved through a data structure, typically an array or
          string, to solve problems efficiently based on continuous subsets of
          elements. This technique is used when we need to find subarrays or
          substrings according to a given set of conditions.
        </span>
      </p>
      <br />
      <p>
        The sliding window technique is a very useful method for solving a
        variety of problems in competitive programming and coding interviews. It
        involves maintaining a window (usually a subarray or substring) that
        slides over the input data to solve the problem more efficiently than
        using a brute force approach.
      </p>
      <br />
      <div style={{ width: "80%" }} class="wp-caption alignnone">
        <img
          alt="Sliding-Window-Technique-copy-(1)"
          height="470"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240312122853/Sliding-Window-Technique-copy-(1).webp"
          width="1000"
        />
      </div>
      <br />
      <h2 id="what-is-sliding-window-technique">
        <u>
          <b>
            <strong class="GFGEditorTheme__textUnderline">
              What is Sliding Window Technique?
            </strong>
          </b>
        </u>
      </h2>{" "}
      <br />
      <blockquote>
        <p dir="ltr">
          <b>
            <strong>Sliding Window Technique</strong>
          </b>
          <span>
            {" "}
            is a method used to efficiently solve problems that involve defining
            a{" "}
          </span>
          <b>
            <strong>window </strong>
          </b>
          <span>or </span>
          <b>
            <strong>range </strong>
          </b>
          <span>
            in the input data (arrays or strings) and then moving that window
            across the data to perform some operation within the window. This
            technique is commonly used in algorithms like finding subarrays with
            a specific sum, finding the longest substring with unique
            characters, or solving problems that require a fixed-size window to
            process elements efficiently.
          </span>
        </p>
      </blockquote>
      <br />
      <p dir="ltr">
        <span>
          Let’s take an example to understand this properly, say we have an
          array of size{" "}
        </span>
        <b>
          <strong>N </strong>
        </b>
        <span>and also an integer </span>
        <b>
          <strong>K.</strong>
        </b>
        <span>
          {" "}
          Now, we have to calculate the maximum sum of a subarray having size
          exactly{" "}
        </span>
        <b>
          <strong>K.</strong>
        </b>
        <span> Now how should we approach this problem?</span>
      </p>{" "}
      <br />
      <p dir="ltr">
        <span>
          One way to do this by taking each subarray of size K from the array
          and find out the maximum sum of these subarrays. This can be done
          using Nested loops which will result into O(N
        </span>
        <sup>
          <span>2</span>
        </sup>
        <span>) Time Complexity.</span>
      </p>
      <br />
      <p dir="ltr">
        <b>
          <strong>But can we optimize this approach?</strong>
        </b>
      </p>{" "}
      <br />
      <p dir="ltr">
        <span>The answer is Yes, instead of taking each </span>
        <b>
          <strong>K</strong>
        </b>
        <span>
          {" "}
          sized subarray and calculating its sum, we can just take one K size
          subarray from 0 to K-1 index and calculate its sum now shift our range
          one by one along with the iterations and update the result, like in
          next iteration increase the left and right pointer and update the
          previous sum as shown in the below image:
        </span>
      </p>{" "}
      <br />
      <div
        id="GFG_AD_Desktop_InContent_ATF_336x280"
        style={{ textAlign: "center", maxHeight: 280 }}
      ></div>
      <div id="GFG_AD_gfg_mobile_336x280_1" style={{ margin: "5px 0" }}></div>
      <div style={{ width: "80%" }} class="wp-caption alignnone">
        <img
          alt="sliding-window-1"
          height="400"
          loading="lazy"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240306112433/sliding-window-1.webp"
          width="800"
        />
      </div>{" "}
      <br />
      <p dir="ltr">
        <span>
          Now follow this method for each iteration till we reach the end of the
          array:
        </span>
      </p>
      <div style={{ width: "80%" }} class="wp-caption alignnone">
        <img
          alt="sliding-window-technique-2"
          height="460"
          loading="lazy"
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240306112450/sliding-window-technique-2.webp"
          width="800"
        />
      </div>{" "}
      <br />
      <p dir="ltr">
        <span>
          So, we can see that instead of recalculating the sum of each K sized
          subarray we are using previous window of size K and using its results
          we update the sum and shift the window right by moving left and right
          pointers, this operation is optimal because it take O(1) time to shift
          the range instead of recalculating.
        </span>
      </p>{" "}
      <br />
      <p dir="ltr">
        <span>
          This approach of shifting the pointers and calculating the results
          accordingly is known as{" "}
        </span>
        <b>
          <strong>Sliding window Technique</strong>
        </b>
        <span>.</span>
      </p>
      <div>&nbsp;</div>
      <h2 id="how-to-use-sliding-window-technique">
        <a
          href="https://www.geeksforgeeks.org/sliding-window-problems-identify-solve-and-interview-questions/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <u>
            <b>
              <strong class="GFGEditorTheme__textUnderline">
                How to use Sliding Window Technique?
              </strong>
            </b>
          </u>
        </a>
      </h2>{" "}
      <br />
      <p dir="ltr">
        <span>There are basically two types of sliding window:</span>
      </p>
      <br />
      <h3>
        <a
          href="https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <b>
            <strong>1. Fixed Size Sliding Window:</strong>
          </b>
        </a>
      </h3>
      <p dir="ltr">
        <span>
          The general steps to solve these questions by following below steps:
        </span>
      </p>{" "}
      <br />
      <ul>
        <li>
          <span>Find the size of the window required, say K.</span>
        </li>
        <li>
          <span>
            Compute the result for 1st window, i.e. include the first K elements
            of the data structure.
          </span>
        </li>
        <li>
          <span>
            Then use a loop to slide the window by 1 and keep computing the
            result window by window.
          </span>
        </li>
      </ul>
      <br />
      <h3>
        <a
          href="https://www.geeksforgeeks.org/sliding-window-problems-identify-solve-and-interview-questions/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <b>
            <strong>2. Variable Size Sliding Window:</strong>
          </b>
        </a>
      </h3>
      <p dir="ltr">
        <span>
          The general steps to solve these questions by following below steps:
        </span>
      </p>
      <div
        style={{ textAlign: "center", margin: "20px 0", maxHeight: 280 }}
        id="GFG_AD_gfg_outstream_incontent"
      ></div>
      <ul>
        <li>
          <span>
            In this type of sliding window problem, we increase our right
            pointer one by one till our condition is true.
          </span>
        </li>
        <li>
          <span>
            At any step if our condition does not match, we shrink the size of
            our window by increasing left pointer.
          </span>
        </li>
        <li value="3">
          <span>
            Again, when our condition satisfies, we start increasing the right
            pointer and follow step 1.
          </span>
        </li>
        <li>
          <span>
            We follow these steps until we reach to the end of the array.
          </span>
        </li>
      </ul>
      <br />
      <h2 id="how-to-identify-sliding-window-problems">
        <u>
          <span class="GFGEditorTheme__textUnderline">
            How to Identify Sliding Window Problems:
          </span>
        </u>
      </h2>
      <br />
      <ul>
        <li value="1">
          <span>
            These problems generally require Finding Maximum/Minimum&nbsp;
          </span>
          <b>
            <strong>Subarray</strong>
          </b>
          <span>,&nbsp;</span>
          <b>
            <strong>Substrings</strong>
          </b>
          <span>&nbsp;which satisfy some specific condition.</span>
        </li>
        <li value="2">
          <span>The size of the subarray or substring ‘</span>
          <b>
            <strong>K’</strong>
          </b>
          <span>&nbsp;will be given in some of the problems.</span>
        </li>
        <li value="3">
          <span>These problems can easily be solved in O(N</span>
          <sup>
            <span>2</span>
          </sup>
          <span>
            ) time complexity using nested loops, using sliding window we can
            solve these in&nbsp;
          </span>
          <b>
            <strong>O(n)</strong>
          </b>
          <span>&nbsp;Time Complexity.</span>
        </li>
        <li value="4">
          <b>
            <strong>Required Time Complexity:</strong>
          </b>
          <span>&nbsp;O(N) or O(Nlog(N))</span>
        </li>
        <li value="5">
          <b>
            <strong>Constraints:</strong>
          </b>
          <span>&nbsp;N &lt;= 10</span>
          <sup>
            <span>6&nbsp;</span>
          </sup>
          <span>, If N is the size of the Array/String.</span>
        </li>
      </ul>
      <br />
      <h2 id="use-cases-of-sliding-window-technique">
        <u>
          <b>
            <strong class="GFGEditorTheme__textUnderline">
              Use Cases of Sliding Window Technique:
            </strong>
          </b>
        </u>
      </h2>
      <br />
      <h3>
        <span>1. To find the maximum sum of all subarrays of size K:</span>
      </h3>
      <br />
      <p dir="ltr">
        <span>Given an array of integers of size </span>
        <b>
          <strong>‘n’, </strong>
        </b>
        <span>Our aim is to calculate the maximum sum of </span>
        <b>
          <strong>‘k’</strong>
        </b>
        <span> consecutive elements in the array.</span>
      </p>
      <p dir="ltr">
        <span>Below is the implementation of the above approach:&nbsp;</span>
      </p>
      <br />
      <pre>
        <code>
          {`class GFG {
    static int maxSum(int arr[], int n, int k)
    {
        int max_sum = Integer.MIN_VALUE;

        for (int i = 0; i < n - k + 1; i++) {
            int current_sum = 0;
            for (int j = 0; j < k; j++)
                current_sum = current_sum + arr[i + j];

            max_sum = Math.max(current_sum, max_sum);
        }

        return max_sum;
    }

    public static void main(String[] args)
    {
        int arr[] = { 1, 4, 2, 10, 2, 3, 1, 0, 20 };
        int k = 4;
        int n = arr.length;
        System.out.println(maxSum(arr, n, k));
    }
}
`}
        </code>
      </pre>
      <br />
      <p dir="ltr">
        <b>
          <strong>Time complexity:</strong>
        </b>
        <span> O(k*n) as it contains two nested loops.</span>
        <br />
        <b>
          <strong>Auxiliary Space: </strong>
        </b>
        <span>O(1)</span>
      </p>
      <br />
      <p dir="ltr">
        <b>
          <strong>Applying the sliding window technique:</strong>
        </b>
        <span>&nbsp;</span>
      </p>
      <br />
      <ul>
        <li value="1">
          <span>
            We compute the sum of the first k elements out of n terms using a
            linear loop and store the sum in variable{" "}
          </span>
          <b>
            <strong>window_sum</strong>
          </b>
          <span>.</span>
        </li>
        <li value="2">
          <span>
            Then we will traverse linearly over the array till it reaches the
            end and simultaneously keep track of the maximum sum.
          </span>
        </li>
        <li value="3">
          <span>
            To get the current sum of a block of k elements just subtract the
            first element from the previous block and add the last element of
            the current block.
          </span>
        </li>
      </ul>
      <br />
      <p dir="ltr">
        <span>
          The below representation will make it clear how the window slides over
          the array.
        </span>
      </p>
      <br />
      <pre>
        <code>{`class GFG {

    static int maxSum(int arr[], int n, int k)
    {
        if (n <= k) {
            System.out.println("Invalid");
            return -1;
        }

        int max_sum = 0;
        for (int i = 0; i < k; i++)
            max_sum += arr[i];

        int window_sum = max_sum;
        for (int i = k; i < n; i++) {
            window_sum += arr[i] - arr[i - k];
            max_sum = Math.max(max_sum, window_sum);
        }

        return max_sum;
    }

    public static void main(String[] args)
    {
        int arr[] = { 1, 4, 2, 10, 2, 3, 1, 0, 20 };
        int k = 4;
        int n = arr.length;
        System.out.println(maxSum(arr, n, k));
    }
}
`}</code>
      </pre>
    </div>
  ),
  "Binary Search Tree": (
    <>
      <p>
        A <strong>binary search tree</strong> is a binary tree where each node
        has at most two children, referred to as the left child and the right
        child. For each node:
      </p>
      <ul>
        <li>
          The left subtree contains only nodes with keys less than the node's
          key.
        </li>
        <li>
          The right subtree contains only nodes with keys greater than the
          node's key.
        </li>
        <li>
          Both the left and right subtrees must also be binary search trees.
        </li>
      </ul>
      <p>
        In a balanced Binary Search Tree (BST), operations such as insertion,
        deletion, and search are O(log n) because of the tree's hierarchical
        structure and balanced properties. Here’s why O(log n) complexity is
        achieved:
      </p>
      <ul>
        <li>
          <strong>Hierarchical Structure:</strong>
          <ul>
            <li>
              In a Binary Search Tree (BST), each node has at most two children:
              a left child and a right child.
            </li>
            <li>
              This hierarchical structure allows for efficient searching by
              recursively comparing the target value with nodes and deciding the
              next subtree to explore based on comparisons.
            </li>
          </ul>
        </li>
        <li>
          <strong>Balanced Property:</strong>
          <ul>
            <li>
              To achieve O(log n) complexity, the BST must maintain a balanced
              structure.
            </li>
            <li>
              A balanced BST ensures that the height of the tree remains
              logarithmic relative to the number of nodes (n), typically
              ensuring that the height is proportional to log(n).
            </li>
          </ul>
        </li>
        <li>
          <strong>Depth of Tree:</strong>
          <ul>
            <li>
              In a balanced BST, the depth (or height) of the tree is
              approximately log base 2 of n.
            </li>
            <li>
              At each level of the tree, the number of nodes can roughly double
              or halve, depending on whether traversing down the left or right
              subtree, contributing to the logarithmic height.
            </li>
          </ul>
        </li>
        <li>
          <strong>Operations Complexity:</strong>
          <ul>
            <li>
              <strong>Search:</strong> Starting from the root, searching for a
              node involves recursively descending either left or right,
              reducing the search space by half at each step (O(log n) time
              complexity).
            </li>
            <li>
              <strong>Insertion and Deletion:</strong> After finding the correct
              position (O(log n)), insertion and deletion operations are
              typically O(1) at that position, assuming no rebalancing is needed
              immediately.
            </li>
          </ul>
        </li>
        <li>
          <strong>Use Cases:</strong>
          <ul>
            <li>
              BSTs are used in applications requiring fast search, insertion,
              and deletion operations, such as databases, compilers, and
              implementing data structures like sets and maps.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Properties of a BST</h2>
      <ul>
        <li>
          <strong>Ordering Property</strong>: For any node with value{" "}
          <code>x</code>, all values in the left subtree are less than{" "}
          <code>x</code>, and all values in the right subtree are greater than{" "}
          <code>x</code>.
        </li>
        <li>
          <strong>No Duplicate Values</strong>: In a typical BST, all values are
          unique (though there are variations that handle duplicates).
        </li>
        <li>
          <strong>Recursive Nature</strong>: The BST is recursively defined;
          each subtree is itself a BST.
        </li>
      </ul>
      <h2>Operations on a BST</h2>
      <br />
      <h3>1. Insertion</h3>
      <br />
      <p>Insert a new value into the BST.</p>
      <br />
      <pre>
        <code>
          {`class TreeNode {
    int value;
    TreeNode left, right;

    public TreeNode(int item) {
        value = item;
        left = right = null;
    }
}

class BST {
    TreeNode root;

    public BST() {
        root = null;
    }

    void insert(int value) {
        root = insertRec(root, value);
    }

    TreeNode insertRec(TreeNode root, int value) {
        if (root == null) {
            root = new TreeNode(value);
            return root;
        }

        if (value < root.value)
            root.left = insertRec(root.left, value);
        else if (value > root.value)
            root.right = insertRec(root.right, value);

        return root;
    }
}`}
        </code>
      </pre>{" "}
      <br />
      <p>
        <strong>Complexity</strong>:
      </p>
      <ul>
        <li>Average case: O(log n)</li>
        <li>Worst case: O(n) (if the tree becomes skewed)</li>
      </ul>
      <h3>Iterative Approach:</h3> <br />
      <pre>
        <code>{`import java.io.*;
import java.util.*;

class GFG {

	public static void main(String[] args)
	{
		BST tree = new BST();
		tree.insert(30);
		tree.insert(50);
		tree.insert(15);
		tree.insert(20);
		tree.insert(10);
		tree.insert(40);
		tree.insert(60);

		tree.inorder();
	}
}

class Node {
	Node left;
	int val;
	Node right;
	Node(int val) { this.val = val; }
}

class BST {
	Node root;

	public void insert(int key)
	{
		Node node = new Node(key);
		if (root == null) {
			root = node;
			return;
		}
		Node prev = null;
		Node temp = root;
		while (temp != null) {
			if (temp.val > key) {
				prev = temp;
				temp = temp.left;
			}
			else if (temp.val < key) {
				prev = temp;
				temp = temp.right;
			}
		}
		if (prev.val > key)
			prev.left = node;
		else
			prev.right = node;
	}

	public void inorder()
	{
		Node temp = root;
		Stack<Node> stack = new Stack<>();
		while (temp != null || !stack.isEmpty()) {
			if (temp != null) {
				stack.add(temp);
				temp = temp.left;
			}
			else {
				temp = stack.pop();
				System.out.print(temp.val + " ");
				temp = temp.right;
			}
		}
	}
}
`}</code>
      </pre>
      <br />
      <p>
        The time complexity of inorder traversal is O(n), as each node is
        visited once. <br />
        The Auxiliary space is O(n), as we use a stack to store nodes for
        recursion.
      </p>
      <br />
      <h3>2. Deletion</h3> <br />
      <p>Delete a value from the BST.</p> <br />
      <pre>
        <code>
          {`void delete(int value) {
    root = deleteRec(root, value);
}

TreeNode deleteRec(TreeNode root, int value) {
    if (root == null) return root;

    if (value < root.value)
        root.left = deleteRec(root.left, value);
    else if (value > root.value)
        root.right = deleteRec(root.right, value);
    else {
        if (root.left == null)
            return root.right;
        else if (root.right == null)
            return root.left;

        root.value = minValue(root.right);
        root.right = deleteRec(root.right, root.value);
    }

    return root;
}

int minValue(TreeNode root) {
    int minv = root.value;
    while (root.left != null) {
        minv = root.left.value;
        root = root.left;
    }
    return minv;
}`}
        </code>
      </pre>{" "}
      <br />
      <p>
        <strong>Complexity</strong>:
      </p>
      <ul>
        <li>Average case: O(log n)</li>
        <li>Worst case: O(n)</li>
      </ul>
      <p>
        Note: Inorder successor is needed only when the right child is not
        empty. In this particular case, the inorder successor can be obtained by
        finding the minimum value in the right child of the node.
      </p>
      <br />
      <h3>Iteraive Approach:</h3>
      <br />
      <pre>
        <code>{`class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    public TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    public TreeNode deleteNode(TreeNode root, int key) {
        TreeNode parent = null;
        TreeNode current = root;
        
        // Search for the node to delete
        while (current != null && current.val != key) {
            parent = current;
            if (key < current.val)
                current = current.left;
            else
                current = current.right;
        }
        
        // If key is not found
        if (current == null)
            return root;
        
        // Case 1: Node to be deleted has no children (leaf node)
        if (current.left == null && current.right == null) {
            if (current != root) {
                if (parent.left == current)
                    parent.left = null;
                else
                    parent.right = null;
            } else {
                root = null;
            }
        }
        // Case 2: Node to be deleted has one child
        else if (current.left == null) {
            if (current != root) {
                if (parent.left == current)
                    parent.left = current.right;
                else
                    parent.right = current.right;
            } else {
                root = current.right;
            }
        } else if (current.right == null) {
            if (current != root) {
                if (parent.left == current)
                    parent.left = current.left;
                else
                    parent.right = current.left;
            } else {
                root = current.left;
            }
        }
        // Case 3: Node to be deleted has two children
        else {
            TreeNode successor = findSuccessor(current);
            int temp = successor.val;
            deleteNode(root, successor.val); 
            current.val = temp; 
        }
        
        return root;
    }
    
    private TreeNode findSuccessor(TreeNode node) {
        TreeNode successor = node.right;
        while (successor.left != null)
            successor = successor.left;
        return successor;
    }
}
`}</code>
      </pre>
      <br />
      <h3>3. Search</h3> <br />
      <p>Search for a value in the BST.</p>
      <br />
      <pre>
        <code>
          {`boolean search(int value) {
    return searchRec(root, value);
}

boolean searchRec(TreeNode root, int value) {
    if (root == null) return false;

    if (root.value == value)
        return true;

    return value < root.value ? searchRec(root.left, value) : searchRec(root.right, value);
}`}
        </code>
      </pre>{" "}
      <br />
      <p>
        <strong>Complexity</strong>:
      </p>
      <ul>
        <li>Average case: O(log n)</li>
        <li>Worst case: O(n)</li>
      </ul>
      <h3>4. Traversal</h3> <br />
      <p>Common BST traversals include inorder, preorder, and postorder.</p>
      <br />
      <h4>Inorder Traversal</h4>
      <p>Left, Root, Right (produces sorted order for BST).</p>
      <br />
      <pre>
        <code>
          {`void inorder() {
    inorderRec(root);
}

void inorderRec(TreeNode root) {
    if (root != null) {
        inorderRec(root.left);
        System.out.print(root.value + " ");
        inorderRec(root.right);
    }
}`}
        </code>
      </pre>
      <br />
      <p>
        <strong>Complexity</strong>: O(n)
      </p>
      <br />
      <h4>Preorder Traversal</h4>
      <p>Root, Left, Right.</p>
      <br />
      <pre>
        <code>
          {`void preorder() {
    preorderRec(root);
}

void preorderRec(TreeNode root) {
    if (root != null) {
        System.out.print(root.value + " ");
        preorderRec(root.left);
        preorderRec(root.right);
    }
}`}
        </code>
      </pre>{" "}
      <br />
      <p>
        <strong>Complexity</strong>: O(n)
      </p>{" "}
      <br />
      <h4>Postorder Traversal</h4>
      <p>Left, Right, Root.</p>
      <br />
      <pre>
        <code>
          {`void postorder() {
    postorderRec(root);
}

void postorderRec(TreeNode root) {
    if (root != null) {
        postorderRec(root.left);
        postorderRec(root.right);
        System.out.print(root.value + " ");
    }
}`}
        </code>
      </pre>{" "}
      <br />
      <p>
        <strong>Complexity</strong>: O(n)
      </p>{" "}
      <br />
      <h2>Use Cases of BST</h2>
      <ul>
        <li>
          <strong>Search Applications</strong>: Quickly finding an element in a
          sorted data structure.
        </li>
        <li>
          <strong>Sorted Data</strong>: Maintaining a dynamically sorted set of
          data.
        </li>
        <li>
          <strong>Dynamic Order Statistics</strong>: Find the kth
          smallest/largest element.
        </li>
        <li>
          <strong>Database Indexing</strong>: Implementing indexing in
          databases.
        </li>
        <li>
          <strong>Associative Arrays</strong>: Implementing map/dictionary data
          structures.
        </li>
      </ul>{" "}
      <br />
      <h2>Summary</h2> <br />
      <p>
        <strong>Insertion, Deletion, Search</strong>: O(log n) on average; O(n)
        in the worst case.
      </p>
      <p>
        <strong>Traversal</strong>: O(n).
      </p>{" "}
      <br />
      <h1>Unique Binary Search Trees Formula</h1>
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
      <p>
        BSTs are highly efficient for operations requiring sorted data, fast
        search, insertion, and deletion, especially when balanced. For
        self-balancing BSTs like AVL trees or Red-Black trees, the worst-case
        complexity is improved to O(log n) for insertions, deletions, and
        searches.
      </p>
    </>
  ),
};

export default TAG_DESCRIPTION;
