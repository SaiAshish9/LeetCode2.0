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
            <code>{`C<sub>n</sub> = (\frac{1}{n + 1} \binom{2n}{n})`}</code>
          </li>
        </ul>
        <li>This can be simplified to:</li>
        <ul>
          <li>
            <code>{`C<sub>n</sub> = (\frac{(2n)!}{(n+1)! \cdot n!})`}</code>
          </li>
        </ul>
        <li>
          Where{" "}
          <code>
            (C<sub>n</sub>)
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
  Brainteaser: (
    <>
      {" "}
      <p>
        The "Brainteaser" problems often involve puzzles, riddles, or scenarios
        where straightforward algorithmic approaches might not immediately
        apply.
      </p>
      <br />
      <h2>Characteristics of Brainteaser Problems</h2>
      <ul>
        <li>
          <strong>Unconventional Thinking:</strong> These problems often require
          creative and non-standard approaches to find solutions.
        </li>
        <li>
          <strong>Creative Solutions:</strong> Solutions may involve innovative
          thinking rather than traditional algorithms or data structures.
        </li>
        <li>
          <strong>Ambiguous or Novel Scenarios:</strong> Problem statements may
          present ambiguous or uncommon scenarios.
        </li>
        <li>
          <strong>Multiple Solutions:</strong> Brainteasers may have multiple
          valid solutions, each demonstrating different problem-solving
          techniques.
        </li>
      </ul>
      <h2>Strategies for Solving Brainteasers</h2>
      <ul>
        <li>
          <strong>Understand the Problem Statement:</strong> Read and interpret
          the problem carefully to grasp its requirements and constraints.
        </li>
        <li>
          <strong>Explore Examples and Edge Cases:</strong> Work through
          provided examples and consider edge cases to understand the problem's
          nuances.
        </li>
        <li>
          <strong>Look for Patterns or Insights:</strong> Identify underlying
          patterns, properties, or logical deductions that can lead to a
          solution.
        </li>
        <li>
          <strong>Consider Multiple Approaches:</strong> Brainstorm different
          approaches, including unconventional methods, to tackle the problem.
        </li>
        <li>
          <strong>Trial and Error:</strong> Experiment with different ideas and
          iterate on solutions to refine your approach.
        </li>
        <li>
          <strong>Discuss and Collaborate:</strong> Engage in discussions with
          peers or online communities to explore diverse perspectives and
          strategies.
        </li>
        <li>
          <strong>Optimize and Validate:</strong> Validate your solution with
          test cases and, if possible, optimize it for efficiency while
          maintaining clarity.
        </li>
      </ul>
      <h2>Example Brainteaser Problem:</h2> <br />
      <p>
        A classic example might involve determining the minimum number of moves
        required to solve a puzzle or finding the optimal strategy for a game
        with specific rules and conditions.
      </p>
      <br />
      <h2>Conclusion:</h2> <br />
      <p>
        Brainteaser problems on LeetCode challenge you to develop creative
        problem-solving skills by exploring unconventional approaches and
        strategies. By approaching these problems systematically and engaging in
        problem-solving discussions, you can enhance your analytical thinking
        and tackle a wide range of challenges effectively.
      </p>
    </>
  ),
  "Monotonic Stack": (
    <>
      {" "}
      <p>
        A monotonic stack is a stack data structure where the elements are
        ordered in a strictly increasing or decreasing manner. This ordering
        property helps efficiently solve problems related to finding the next or
        previous greater/smaller elements in an array, among other applications.
      </p>
      <br />
      <h2>Types of Monotonic Stacks</h2>
      <ul>
        <li>
          <strong>Monotonically Increasing Stack:</strong> The elements in the
          stack are in increasing order, with the smallest element at the
          bottom.
        </li>
        <li>
          <strong>Monotonically Decreasing Stack:</strong> The elements in the
          stack are in decreasing order, with the largest element at the bottom.
        </li>
      </ul>
      <h2>Common Problems and Examples</h2>
      <ul>
        <li>
          <strong>Next Greater Element (LeetCode 496):</strong>
          <p>
            Given a circular array, find the next greater element for each
            element in the array.
          </p>
          <ul>
            <li>
              Use a monotonically decreasing stack to keep track of elements for
              which you haven't found the next greater element yet.
            </li>
            <li>
              Iterate through the array, and for each element, pop elements from
              the stack until you find a smaller element or the stack is empty.
              The next greater element for the popped elements is the current
              element.
            </li>
          </ul>
        </li>
        <li>
          <strong>Largest Rectangle in Histogram (LeetCode 84):</strong>
          <p>
            Given an array representing the heights of bars in a histogram, find
            the area of the largest rectangle that can be formed within the
            bounds of the histogram.
          </p>
          <ul>
            <li>
              Use a monotonically increasing stack to maintain the indices of
              the bars.
            </li>
            <li>
              Iterate through the array, and for each bar, calculate the
              possible rectangle area for the bars in the stack when a smaller
              bar is encountered.
            </li>
          </ul>
        </li>
        <li>
          <strong>132 Pattern (LeetCode 456):</strong>
          <p>
            Given an array of integers, find if there is a 132 pattern in the
            array.
          </p>
          <ul>
            <li>
              Use a monotonically decreasing stack to keep track of potential
              "3" elements.
            </li>
            <li>
              Iterate through the array backward to efficiently find the "2"
              element that satisfies the pattern with the elements in the stack.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Example: Next Greater Element</h2> <br />
      <p>
        Here's a detailed explanation of using a monotonically decreasing stack
        to solve the "Next Greater Element" problem.
      </p>{" "}
      <br />
      <h3>Problem Statement</h3> <br />
      <p>
        Given an array <code>nums</code>, for each element in the array, find
        the next greater element. The next greater element for an element{" "}
        <code>x</code> is the first greater element on the right side of{" "}
        <code>x</code> in the array. If no such element exists, return -1.
      </p>
      <h3>Solution</h3>
      <ul>
        <li>
          <strong>Initialize a Stack:</strong> Use a stack to keep track of
          elements for which you haven't found the next greater element.
        </li>
        <li>
          <strong>Iterate through the Array:</strong>
          <ul>
            <li>For each element in the array, do the following:</li>
            <ul>
              <li>
                While the stack is not empty and the current element is greater
                than the element at the top of the stack, pop the stack. The
                next greater element for the popped element is the current
                element.
              </li>
              <li>Push the current element onto the stack.</li>
            </ul>
          </ul>
        </li>
        <li>
          <strong>Handle Remaining Elements in the Stack:</strong> After
          processing all elements in the array, the elements left in the stack
          do not have a next greater element, so their result is -1.
        </li>
      </ul>
      <h3>Implementation</h3> <br />
      <pre>
        <code>
          {`public int[] nextGreaterElement(int[] nums) {
    int[] result = new int[nums.length];
    Stack<Integer> stack = new Stack<>();

    for (int i = nums.length - 1; i >= 0; i--) {
        while (!stack.isEmpty() && stack.peek() <= nums[i]) {
            stack.pop();
        }
        result[i] = stack.isEmpty() ? -1 : stack.peek();
        stack.push(nums[i]);
    }

    return result;
}
`}
        </code>
      </pre>{" "}
      <br />
      <pre>
        <code>{`public int[] nextSmallerElement(int[] nums) {
    int[] result = new int[nums.length];
    Stack<Integer> stack = new Stack<>();

    for (int i = nums.length - 1; i >= 0; i--) {
        while (!stack.isEmpty() && stack.peek() >= nums[i]) {
            stack.pop();
        }
        result[i] = stack.isEmpty() ? -1 : stack.peek();
        stack.push(nums[i]);
    }

    return result;
}
`}</code>
      </pre>{" "}
      <br />
      <h3>Explanation</h3>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Create an array <code>result</code> to store the next greater
              elements.
            </li>
            <li>
              Create a stack to keep track of elements for which you are looking
              for the next greater element.
            </li>
          </ul>
        </li>
        <li>
          <strong>Processing the Array:</strong>
          <ul>
            <li>Iterate through the array from right to left.</li>
            <li>
              For each element, pop elements from the stack that are less than
              or equal to the current element. This ensures the stack maintains
              a decreasing order.
            </li>
            <li>
              If the stack is empty, there is no greater element, so store -1 in
              the result. Otherwise, store the element at the top of the stack.
            </li>
            <li>Push the current element onto the stack.</li>
          </ul>
        </li>
      </ul>
      <h2>Time and Space Complexity Analysis</h2> <br />
      <h3>Time Complexity</h3>
      <ul>
        <li>
          <strong>Iteration Over Array Elements:</strong>
          <ul>
            <li>
              The array is iterated over once from right to left, which takes{" "}
              <code>O(n)</code> time, where <code>n</code> is the number of
              elements in the array.
            </li>
          </ul>
        </li>
        <li>
          <strong>Stack Operations:</strong>
          <ul>
            <li>
              Each element is pushed onto the stack exactly once and popped from
              the stack at most once. Hence, the total number of stack
              operations (push and pop) is <code>O(n)</code>.
            </li>
          </ul>
        </li>
        <li>
          Given that each operation within the loop (push and pop) is{" "}
          <code>O(1)</code>, the overall time complexity is:
          <ul>
            <li>
              <code>O(n) + O(n) = O(n)</code>
            </li>
          </ul>
        </li>
      </ul>
      <h3>Space Complexity</h3>
      <ul>
        <li>
          <strong>Stack:</strong>
          <ul>
            <li>
              The space used by the stack is proportional to the number of
              elements in the array. In the worst case, all elements could be in
              the stack at the same time, which takes <code>O(n)</code> space.
            </li>
          </ul>
        </li>
        <li>
          <strong>Result Array:</strong>
          <ul>
            <li>
              The result array <code>result</code> has the same number of
              elements as the input array, requiring <code>O(n)</code> space.
            </li>
          </ul>
        </li>
        <li>
          <strong>Other Variables:</strong>
          <ul>
            <li>
              The additional space used by other variables (like the integer
              variables and the loop counter) is <code>O(1)</code>, which is
              constant space and does not depend on the size of the input array.
            </li>
          </ul>
        </li>
        <li>
          Combining these, the overall space complexity is:
          <ul>
            <li>
              <code>O(n)</code>
            </li>
          </ul>
        </li>
      </ul>
      <h3>Summary</h3>
      <ul>
        <li>
          <strong>Time Complexity:</strong> <code>O(n)</code>
        </li>
        <li>
          <strong>Space Complexity:</strong> <code>O(n)</code>
        </li>
      </ul>
      <p>
        The <code>nextSmallerElement</code> method is efficient with linear time
        complexity and uses linear additional space.
      </p>
      <br />
      <p>Here are the time complexities for various stack operations:</p>
      <ul>
        <li>
          <strong>Push Operation:</strong>
          <ul>
            <li>
              <strong>Time Complexity:</strong> ( O(1) )
            </li>
            <li>
              <strong>Explanation:</strong> Adding an element to the top of the
              stack is constant-time.
            </li>
          </ul>
        </li>
        <li>
          <strong>Pop Operation:</strong>
          <ul>
            <li>
              <strong>Time Complexity:</strong> ( O(1) )
            </li>
            <li>
              <strong>Explanation:</strong> Removing the top element from the
              stack is constant-time.
            </li>
          </ul>
        </li>
        <li>
          <strong>Peek Operation:</strong>
          <ul>
            <li>
              <strong>Time Complexity:</strong> ( O(1) )
            </li>
            <li>
              <strong>Explanation:</strong> Viewing the top element without
              removing it is constant-time.
            </li>
          </ul>
        </li>
        <li>
          <strong>Search Operation (contains):</strong>
          <ul>
            <li>
              <strong>Time Complexity:</strong> ( O(n) )
            </li>
            <li>
              <strong>Explanation:</strong> Checking if an element exists in the
              stack requires iterating through the stack, resulting in linear
              time complexity.
            </li>
          </ul>
        </li>
        <li>
          <strong>Size Operation:</strong>
          <ul>
            <li>
              <strong>Time Complexity:</strong> ( O(1) )
            </li>
            <li>
              <strong>Explanation:</strong> Getting the number of elements in
              the stack is constant-time.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Summary</h2> <br />
      <p>
        Monotonic stacks are a powerful technique for efficiently solving
        problems involving next/previous greater/smaller elements. They help
        maintain a specific order that allows for quick comparisons and updates,
        making them ideal for a variety of problems in competitive programming
        and coding interviews.
      </p>{" "}
      <br />
    </>
  ),
  "Prefix Sum": (
    <>
      <p>
        Prefix sum is a powerful technique often used in algorithm problems to
        quickly compute the sum of elements in a subarray. By precomputing the
        cumulative sums of elements up to each index, we can answer range sum
        queries in constant time.
      </p>

      <h2>Definition</h2>
      <p>
        The prefix sum array for a given array <code>nums</code> is an array{" "}
        <code>prefix</code> where <code>prefix[i]</code> is the sum of the
        elements from the start of the array up to index <code>i</code>.
        Formally:
      </p>
      <p>
        <code>prefix[i] = sum(nums[j])</code> where <code>j</code> ranges from{" "}
        <code>0</code> to <code>i</code>
      </p>

      <h2>Construction</h2>
      <p>
        To construct the prefix sum array, we can use the following iterative
        approach:
      </p>
      <ul>
        <li>
          Initialize an array <code>prefix</code> of the same length as{" "}
          <code>nums</code> and set <code>prefix[0] = nums[0]</code>.
        </li>
        <li>
          For each index <code>i</code> from 1 to <code>n-1</code> (where{" "}
          <code>n</code> is the length of <code>nums</code>), set:
          <ul>
            <li>
              <code>prefix[i] = prefix[i-1] + nums[i]</code>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Example</h2>
      <p>
        Let's consider an example with the array{" "}
        <code>nums = [1, 2, 3, 4]</code>.
      </p>
      <ul>
        <li>
          Initialize <code>prefix[0] = 1</code> (since <code>nums[0] = 1</code>
          ).
        </li>
        <li>
          Compute the rest of the prefix sums:
          <ul>
            <li>
              <code>prefix[1] = prefix[0] + nums[1] = 1 + 2 = 3</code>
            </li>
            <li>
              <code>prefix[2] = prefix[1] + nums[2] = 3 + 3 = 6</code>
            </li>
            <li>
              <code>prefix[3] = prefix[2] + nums[3] = 6 + 4 = 10</code>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        So, the prefix sum array is <code>prefix = [1, 3, 6, 10]</code>.
      </p>

      <h2>Range Sum Queries</h2>
      <p>
        Once we have the prefix sum array, we can quickly calculate the sum of
        any subarray <code>nums[l, r]</code> (from index <code>l</code> to{" "}
        <code>r</code>) using:
      </p>
      <p>
        <code>sum(nums[l, r]) = prefix[r] - prefix[l-1]</code>
      </p>
      <p>
        For <code>l = 0</code>, the sum is just <code>prefix[r]</code>.
      </p>

      <h2>Example of a LeetCode Problem</h2>
      <p>
        A classic LeetCode problem that uses prefix sums is{" "}
        <a href="https://leetcode.com/problems/range-sum-query-immutable/">
          Range Sum Query - Immutable
        </a>
        .
      </p>

      <h3>Problem Statement</h3>
      <p>
        Given an integer array <code>nums</code>, handle multiple queries of the
        following type:
      </p>
      <ul>
        <li>
          Calculate the sum of the elements of <code>nums</code> between indices{" "}
          <code>i</code> and <code>j</code> inclusive.
        </li>
      </ul>
      <p>
        Implement the <code>NumArray</code> class:
      </p>
      <ul>
        <li>
          <code>NumArray(int[] nums)</code> initializes the object with the
          integer array <code>nums</code>.
        </li>
        <li>
          <code>int sumRange(int i, int j)</code> returns the sum of the
          elements of <code>nums</code> between indices <code>i</code> and{" "}
          <code>j</code> inclusive (i.e.,{" "}
          <code>nums[i] + nums[i + 1] + ... + nums[j]</code>).
        </li>
      </ul>

      <h3>Solution</h3>
      <pre>
        <code>
          {`class NumArray {
    private int[] prefix;

    public NumArray(int[] nums) {
        int n = nums.length;
        prefix = new int[n + 1]; // Create a prefix sum array with an extra element
        prefix[0] = 0; // Prefix sum up to index -1 is 0
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i]; // Compute prefix sums
        }
    }

    public int sumRange(int i, int j) {
        return prefix[j + 1] - prefix[i]; // Use the prefix sum array to calculate range sum
    }
}`}
        </code>
      </pre>

      <h3>Explanation</h3>
      <ul>
        <li>
          <strong>Initialization:</strong>
          <ul>
            <li>
              Create a prefix sum array with an extra element to handle sum
              queries more conveniently.
            </li>
            <li>Initialize the first element of the prefix sum array to 0.</li>
          </ul>
        </li>
        <li>
          <strong>Prefix Sum Calculation:</strong>
          <ul>
            <li>
              Iterate through the <code>nums</code> array and compute the
              cumulative sums.
            </li>
          </ul>
        </li>
        <li>
          <strong>Range Sum Query:</strong>
          <ul>
            <li>
              For a query <code>sumRange(i, j)</code>, return the difference
              between <code>prefix[j + 1]</code> and <code>prefix[i]</code>.
            </li>
          </ul>
        </li>
      </ul>

      <p>
        By using this approach, we can efficiently handle multiple range sum
        queries in constant time after an initial <code>O(n)</code>{" "}
        preprocessing step.
      </p>
    </>
  ),
  "Game Theory": (
    <>
      <p>
        Game theory is a branch of mathematics that studies strategic
        interactions between rational decision-makers. In the context of
        LeetCode, game theory problems involve scenarios where two or more
        players make decisions to maximize their respective payoffs or minimize
        their losses. Here are the main concepts of game theory as applied to
        LeetCode problems:
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>Players</strong>
          <ul>
            <li>
              The decision-makers in the game. In LeetCode problems, this
              usually involves two players taking turns, making decisions, and
              trying to optimize their outcomes.
            </li>
          </ul>
        </li>
        <li>
          <strong>Strategies</strong>
          <ul>
            <li>
              A plan of action a player follows in a given game. In LeetCode
              problems, strategies involve choosing the best possible moves from
              a set of available options.
            </li>
          </ul>
        </li>
        <li>
          <strong>Payoffs</strong>
          <ul>
            <li>
              The rewards or outcomes that players receive based on their
              choices. The objective is often to maximize one's score or to
              guarantee a win.
            </li>
          </ul>
        </li>
        <li>
          <strong>Games</strong>
          <ul>
            <li>
              <strong>Zero-Sum Games</strong>: Many LeetCode game theory
              problems are zero-sum games, where one player's gain is another
              player's loss.
            </li>
            <li>
              <strong>Perfect Information</strong>: Most problems assume perfect
              information, meaning both players have complete knowledge of the
              game state and the sequence of possible moves.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Examples of Game Theory Problems on LeetCode</h2>
      <ul>
        <li>
          <a href="https://leetcode.com/problems/nim-game/">Nim Game (292)</a>
          <ul>
            <li>
              <strong>Scenario</strong>: Players take turns removing 1 to 3
              stones from a heap. The player who removes the last stone wins.
            </li>
            <li>
              <strong>Strategy</strong>: The game can be analyzed using modular
              arithmetic to determine the winning strategy.
            </li>
          </ul>
        </li>
        <li>
          <a href="https://leetcode.com/problems/stone-game/">
            Stone Game (877)
          </a>
          <ul>
            <li>
              <strong>Scenario</strong>: Players take turns picking stones from
              either end of an array of piles. Each pile has a positive number
              of stones. The objective is to maximize the number of stones
              collected.
            </li>
            <li>
              <strong>Strategy</strong>: Use dynamic programming to determine
              the optimal moves for both players.
            </li>
          </ul>
        </li>
        <li>
          <a href="https://leetcode.com/problems/predict-the-winner/">
            Predict the Winner (486)
          </a>
          <ul>
            <li>
              <strong>Scenario</strong>: Similar to the Stone Game, players take
              turns picking numbers from either end of an array to maximize
              their total score.
            </li>
            <li>
              <strong>Strategy</strong>: Dynamic programming or minimax
              algorithm can be used to predict the winner assuming both players
              play optimally.
            </li>
          </ul>
        </li>
        <li>
          <a href="https://leetcode.com/problems/flip-game-ii/">
            Flip Game II (294)
          </a>
          <ul>
            <li>
              <strong>Scenario</strong>: Players take turns flipping two
              consecutive "++" into "--". The game ends when no more moves can
              be made, and the last player to make a move wins.
            </li>
            <li>
              <strong>Strategy</strong>: Use recursion and memoization to
              determine if the starting player can guarantee a win.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Solving Game Theory Problems</h2>
      <ul>
        <li>
          <strong>Understand the Game Rules</strong>: Clearly understand how
          players take turns and how the game progresses.
        </li>
        <li>
          <strong>Model the Game State</strong>: Represent the game state using
          appropriate data structures (arrays, strings, etc.).
        </li>
        <li>
          <strong>Determine Optimal Strategies</strong>: Use techniques like
          dynamic programming, recursion, minimax algorithms, and memoization to
          evaluate the best possible moves.
        </li>
        <li>
          <strong>Predict Opponent Moves</strong>: Consider the opponent's
          possible moves and optimize your strategy accordingly.
        </li>
      </ul>
    </>
  ),
  "Rolling Hash": (
    <>
      <p>
        A rolling hash is a hash function that allows efficient computation of
        hash values for substrings of a given string as the window slides over
        the string. It is commonly used in string matching algorithms.
      </p>

      <h2>Key Concepts</h2>
      <ul>
        <li>
          <strong>Hash Function:</strong> Converts input data into a fixed-size
          numerical value called a hash. The same input always produces the same
          hash.
        </li>
        <li>
          <strong>Sliding Window:</strong> Maintains a window of fixed size that
          moves over the input data, processing only a subset of the data at
          each step.
        </li>
        <li>
          <strong>Modulus Operation:</strong> Used in hash functions to keep
          hash values within a manageable range and avoid overflow.
        </li>
      </ul>

      <h2>How Rolling Hash Works</h2>
      <ul>
        <li>
          <strong>Initial Hash Calculation:</strong> Compute the hash for the
          first window of the string.
        </li>
        <li>
          <strong>Update Hash Efficiently:</strong> When the window slides one
          character to the right, update the hash by removing the leftmost
          character and adding the new rightmost character. This avoids
          recalculating the hash from scratch.
        </li>
      </ul>

      <h2>Formula</h2>
      <p>
        For a string <code>s</code> of length <code>n</code> and a window size{" "}
        <code>k</code>, the rolling hash can be defined as follows:
      </p>
      <ul>
        <li>
          Let <code>h(s, k)</code> be the hash value of the substring{" "}
          <code>s[0:k]</code>.
        </li>
        <li>
          For a prime number <code>p</code> and a base <code>b</code> (commonly
          256 for ASCII characters), the hash value can be computed as:
        </li>
        <ul>
          <li>
            <code>{`h(s, k) = (s[0] * b^{k-1} + s[1] * b^{k-2} + ... + s[k-1]) % p`}</code>
          </li>
        </ul>
        <li>
          When the window slides to the next substring <code>s[1:k+1]</code>,
          update the hash as:
        </li>
        <ul>
          <li>
            <code>{`h(s, k) = (b * (h(s, k) - s[0] * b^{k - 1}) + s[k]) % p`}</code>
          </li>
        </ul>
      </ul>

      <h2>Example</h2>
      <ul>
        <li>
          Consider the string <code>s = "abcd"</code> with a window size{" "}
          <code>k = 2</code>:
        </li>
        <ul>
          <li>Calculate the initial hash for the first window "ab":</li>
          <ul>
            <li>
              <code>h("ab", 2) = (97 * 256^1 + 98) % p</code>
            </li>
          </ul>
          <li>Slide the window to "bc" and update the hash:</li>
          <ul>
            <li>
              <code>
                h("bc", 2) = (256 * (h("ab", 2) - 97 * 256^1) + 99) % p
              </code>
            </li>
          </ul>
        </ul>
      </ul>

      <h2>Applications in LeetCode Problems</h2>
      <ul>
        <li>
          <strong>Substring Search:</strong> Used in problems like the
          Rabin-Karp algorithm to find patterns in a text efficiently.
        </li>
        <li>
          <strong>Anagram Checking:</strong> Useful for checking if one string
          is a permutation of another, such as finding all anagrams in a string.
        </li>
        <li>
          <strong>Duplicate Substrings:</strong> Helps in finding the longest
          duplicate substring by comparing substrings efficiently.
        </li>
      </ul>
    </>
  ),
  "Hash Function": (
    <>
      {" "}
      <p>
        A hash function is used to map data of arbitrary size to fixed-size
        values, typically to achieve efficient data retrieval. Hash functions
        are a fundamental component of hash tables, which are widely used in
        many algorithms to provide constant-time complexity for search, insert,
        and delete operations.
      </p>
      <h2>Key Concepts of Hash Functions:</h2>
      <ul>
        <li>
          <strong>Hashing</strong>:
          <p>
            Hashing is the process of converting an input (or 'key') into a
            fixed-size string of bytes, typically a hash code. This is done by a
            hash function.
          </p>
        </li>
        <li>
          <strong>Hash Code</strong>:
          <p>
            A hash code is a numerical value generated by a hash function. It's
            used to uniquely identify a given piece of data, such as a string or
            a number.
          </p>
        </li>
        <li>
          <strong>Collision</strong>:
          <p>
            A collision occurs when two different inputs produce the same hash
            code. A good hash function minimizes the likelihood of collisions.
          </p>
        </li>
        <li>
          <strong>Hash Table</strong>:
          <p>
            A data structure that uses a hash function to map keys to values for
            efficient lookup. It typically handles collisions using techniques
            like chaining or open addressing.
          </p>
        </li>
      </ul>
      <h2>Example in LeetCode:</h2>
      <p>
        Let's consider an example to see how hash functions and hash tables can
        be used to solve a typical LeetCode problem.
      </p>
      <h3>Problem: Two Sum (LeetCode 1)</h3>
      <p>
        Given an array of integers <code>nums</code> and an integer{" "}
        <code>target</code>, return indices of the two numbers such that they
        add up to <code>target</code>.
      </p>
      <h3>Solution Using Hash Table:</h3>
      <ul>
        <li>
          <strong>Create a Hash Map</strong>:
          <p>
            Use a hash map to store each number's index as you iterate through
            the array.
          </p>
        </li>
        <li>
          <strong>Check for Complement</strong>:
          <p>
            For each number, check if its complement (i.e.,{" "}
            <code>target - number</code>) exists in the hash map.
          </p>
        </li>
        <li>
          <strong>Store and Retrieve Indices</strong>:
          <p>
            If the complement exists, you've found the two numbers. Otherwise,
            store the current number and its index in the hash map.
          </p>
        </li>
      </ul>
      <h3>Java Implementation:</h3>
      <pre>
        <code>
          {`
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        
        throw new IllegalArgumentException("No two sum solution");
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = solution.twoSum(nums, target);
        System.out.println("Indices: " + result[0] + ", " + result[1]); // Output: Indices: 0, 1
    }
}`}
        </code>
      </pre>
      <h2>Explanation:</h2>
      <ul>
        <li>
          <strong>Initialization</strong>:
          <p>
            A <code>HashMap</code> named <code>map</code> is created to store
            each number and its index as we iterate through the array.
          </p>
        </li>
        <li>
          <strong>Iteration</strong>:
          <p>
            For each element <code>nums[i]</code>, compute its complement{" "}
            <code>target - nums[i]</code>. Check if the complement exists in the
            hash map using <code>map.containsKey(complement)</code>. If the
            complement is found, return the indices{" "}
            <code>[map.get(complement), i]</code>.
          </p>
        </li>
        <li>
          <strong>Storing Values</strong>:
          <p>
            If the complement is not found, store the current number and its
            index in the hash map using <code>map.put(nums[i], i)</code>.
          </p>
        </li>
        <li>
          <strong>Efficiency</strong>:
          <p>
            The solution uses a hash map to achieve O(n) time complexity, where
            n is the length of the array. This is because both the{" "}
            <code>containsKey</code> and <code>put</code> operations in a hash
            map are O(1) on average.
          </p>
        </li>
      </ul>
      <h2>Advantages of Using Hash Functions in LeetCode Problems:</h2>
      <ul>
        <li>
          <strong>Efficiency</strong>: Hash tables provide constant-time
          complexity for search, insert, and delete operations.
        </li>
        <li>
          <strong>Simplicity</strong>: Hash functions simplify the design of
          algorithms by providing a straightforward way to store and retrieve
          data based on keys.
        </li>
        <li>
          <strong>Versatility</strong>: Hash tables can be used in a variety of
          problems, including those involving searching, counting, and detecting
          duplicates.
        </li>
      </ul>
    </>
  ),
  Combinatorics: (
    <>
      {" "}
      <p>
        The "Combinatorics" tag on LeetCode categorizes problems that involve
        counting, arranging, or selecting elements in specific ways using
        combinatorial mathematics.
      </p>{" "}
      <br />
      <h2>Key Concepts in Combinatorics:</h2>
      <ul>
        <li>
          <strong>Permutations</strong>:
          <ul>
            <li>Arrangements of elements in a specific order.</li>
            <li>
              Examples include generating permutations of a set or finding the
              k-th permutation.
            </li>
          </ul>
        </li>
        <li>
          <strong>Combinations</strong>:
          <ul>
            <li>Selection of subsets without regard to the order.</li>
            <li>
              Tasks may involve finding combinations that meet certain criteria
              or selecting subsets from a set.
            </li>
          </ul>
        </li>
        <li>
          <strong>Subsets</strong>:
          <ul>
            <li>
              All possible groups of elements that can be formed from a given
              set.
            </li>
            <li>
              Common tasks include generating all subsets (power set) or finding
              subsets that satisfy specific conditions.
            </li>
          </ul>
        </li>
        <li>
          <strong>Counting Problems</strong>:
          <ul>
            <li>
              Problems focused on counting various configurations or
              arrangements of elements.
            </li>
            <li>
              These often involve permutations, combinations, or recursive
              counting techniques.
            </li>
          </ul>
        </li>
        <li>
          <strong>Factorials and Binomial Coefficients</strong>:
          <ul>
            <li>
              Factorials (n!) and binomial coefficients (n choose k) are
              fundamental in combinatorial calculations.
            </li>
            <li>
              They are used extensively in combinatorial problems for
              calculating permutations, combinations, and subsets.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Example Problems:</h2> <br />
      <p>
        Below are examples of problems that fall under the Combinatorics tag:
      </p>
      <ul>
        <li>Generating permutations of a string or array.</li>
        <li>Finding combinations that sum up to a target value.</li>
        <li>Generating all possible subsets of a set.</li>
        <li>
          Counting arrangements or selections that meet specific criteria.
        </li>
      </ul>
      <br />
      <p>
        Here's an example of solving a combinatorics problem using Java:
      </p>{" "}
      <br />
      <pre>
        <code>
          {`import java.util.*;

public class Permutations {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        backtrack(nums, used, current, result);
        return result;
    }

    private void backtrack(int[] nums, boolean[] used, List<Integer> current, List<List<Integer>> result) {
        if (current.size() == nums.length) {
            result.add(new ArrayList<>(current));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            current.add(nums[i]);
            backtrack(nums, used, current, result);
            current.remove(current.size() - 1);
            used[i] = false;
        }
    }

    public static void main(String[] args) {
        Permutations solution = new Permutations();
        int[] nums = {1, 2, 3};
        List<List<Integer>> permutations = solution.permute(nums);
        System.out.println("Permutations: " + permutations);
    }
}`}
        </code>
      </pre>
      <br />
      <p>
        This example demonstrates generating permutations of an array{" "}
        {`{1, 2, 3}`} using recursion and backtracking.
      </p>{" "}
      <br />
      <h2>Advantages of Using Combinatorics:</h2>
      <ul>
        <li>
          <strong>Versatility</strong>: Applicable to a wide range of problems
          involving arrangement, selection, or counting.
        </li>
        <li>
          <strong>Efficiency</strong>: Many combinatorial problems can be solved
          efficiently using recursive techniques.
        </li>
        <li>
          <strong>Understanding</strong>: Solving combinatorial problems
          enhances understanding of fundamental mathematical concepts.
        </li>
      </ul>
    </>
  ),
  "Divide And Conquer": (
    <>
      {" "}
      <p>
        The "Divide and Conquer" approach is a fundamental algorithm design
        paradigm used to solve problems by breaking them down into smaller
        subproblems, solving each subproblem independently, and then combining
        the solutions to solve the original problem.
      </p>
      <br />
      <h2>Key Concepts:</h2>
      <ul>
        <li>
          <strong>Divide</strong>:
          <ul>
            <li>
              Break the original problem into smaller subproblems that are
              similar to the original problem.
            </li>
            <li>
              Each subproblem should be a smaller instance of the same problem.
            </li>
          </ul>
        </li>
        <li>
          <strong>Conquer</strong>:
          <ul>
            <li>Recursively solve each of the smaller subproblems.</li>
            <li>
              Base case: Solve the simplest instances of the problem directly.
            </li>
          </ul>
        </li>
        <li>
          <strong>Combine</strong>:
          <ul>
            <li>
              Combine the solutions of the subproblems to get the solution to
              the original problem.
            </li>
            <li>
              This step may involve merging, summing, or any other operation
              that integrates the subproblem solutions.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Example Problems on LeetCode:</h2>
      <ul>
        <li>
          <strong>Merge Sort</strong>:
          <ul>
            <li>Divide the array into two halves.</li>
            <li>Recursively sort each half.</li>
            <li>Merge the two sorted halves to produce the sorted array.</li>
          </ul>
        </li>
        <li>
          <strong>Quick Sort</strong>:
          <ul>
            <li>
              Choose a pivot element and partition the array into two halves
              based on the pivot.
            </li>
            <li>Recursively sort each partition.</li>
            <li>Combine the partitions to get the sorted array.</li>
          </ul>
        </li>
        <li>
          <strong>Maximum Subarray (Divide and Conquer Approach)</strong>:
          <ul>
            <li>Divide the array into two halves.</li>
            <li>Recursively find the maximum subarray sum in each half.</li>
            <li>Find the maximum subarray sum that crosses the midpoint.</li>
            <li>
              Combine the results to get the overall maximum subarray sum.
            </li>
          </ul>
        </li>
        <li>
          <strong>Median of Two Sorted Arrays</strong>:
          <ul>
            <li>Divide the arrays into smaller subarrays.</li>
            <li>Recursively find the median of the combined subarrays.</li>
            <li>Combine the results to get the overall median.</li>
          </ul>
        </li>
      </ul>
      <h2>Example Implementation: Merge Sort in Java</h2> <br />
      <pre>
        <code>
          {`public class MergeSort {
    public void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    private void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] leftArr = new int[n1];
        int[] rightArr = new int[n2];

        for (int i = 0; i < n1; i++)
            leftArr[i] = arr[left + i];
        for (int j = 0; j < n2; j++)
            rightArr[j] = arr[mid + 1 + j];

        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        MergeSort sorter = new MergeSort();
        int[] arr = {12, 11, 13, 5, 6, 7};
        sorter.mergeSort(arr, 0, arr.length - 1);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}`}
        </code>
      </pre>{" "}
      <br />
      <h2>Explanation of Merge Sort Implementation:</h2>
      <ul>
        <li>
          <strong>mergeSort Method</strong>:
          <ul>
            <li>
              Recursively divides the array into two halves until each subarray
              has one element.
            </li>
            <li>
              Calls the <code>merge</code> method to combine the sorted halves.
            </li>
          </ul>
        </li>
        <li>
          <strong>merge Method</strong>:
          <ul>
            <li>Creates temporary arrays for the left and right halves.</li>
            <li>
              Merges the temporary arrays back into the original array in sorted
              order.
            </li>
            <li>Handles any remaining elements in the temporary arrays.</li>
          </ul>
        </li>
        <li>
          <strong>main Method</strong>:
          <ul>
            <li>
              Creates an instance of <code>MergeSort</code> and sorts a sample
              array.
            </li>
            <li>Prints the sorted array to demonstrate the result.</li>
          </ul>
        </li>
      </ul>
      <h2>Advantages of Divide and Conquer:</h2>
      <ul>
        <li>
          <strong>Efficiency</strong>: Breaks down complex problems into simpler
          subproblems that are easier to solve.
        </li>
        <li>
          <strong>Parallelism</strong>: Subproblems can often be solved in
          parallel, leading to faster execution on multi-core processors.
        </li>
        <li>
          <strong>Simplicity</strong>: Simplifies the problem-solving process by
          focusing on smaller, manageable parts of the problem.
        </li>
      </ul>
    </>
  ),
  Memoization: (
    <>
      <p>
        Memoization is a technique used to optimize recursive algorithms by
        storing the results of expensive function calls and reusing them when
        the same inputs occur again. This can significantly reduce the time
        complexity of problems that have overlapping subproblems.
      </p>
      <br />
      <h2>Key Concepts:</h2>
      <ul>
        <li>
          <strong>Overlapping Subproblems</strong>:
          <ul>
            <li>
              Occurs when a problem can be broken down into smaller subproblems
              which are reused multiple times.
            </li>
            <li>
              Examples include Fibonacci sequence, dynamic programming problems
              like knapsack, and more.
            </li>
          </ul>
        </li>
        <li>
          <strong>Memoization</strong>:
          <ul>
            <li>
              Store the results of expensive function calls in a data structure
              like a hash map or array.
            </li>
            <li>
              Check the data structure before computing the result again to
              avoid redundant calculations.
            </li>
          </ul>
        </li>
        <li>
          <strong>Benefits</strong>:
          <ul>
            <li>Reduces time complexity by avoiding repeated calculations.</li>
            <li>Optimizes recursive solutions, making them more efficient.</li>
          </ul>
        </li>
      </ul>

      <h2>Example Problems on LeetCode:</h2>
      <ul>
        <li>
          <strong>Fibonacci Number (LeetCode 509)</strong>:
          <ul>
            <li>
              Calculate the nth Fibonacci number using memoization to avoid
              redundant calculations.
            </li>
          </ul>
        </li>
        <li>
          <strong>Climbing Stairs (LeetCode 70)</strong>:
          <ul>
            <li>
              Count the number of ways to climb a given number of stairs using
              memoization to optimize the solution.
            </li>
          </ul>
        </li>
        <li>
          <strong>House Robber (LeetCode 198)</strong>:
          <ul>
            <li>
              Determine the maximum amount of money that can be robbed from a
              series of houses without triggering alarms using memoization.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Example Implementation: Fibonacci Number in Java</h2>
      <br />
      <pre>
        <code>
          {`import java.util.HashMap;

public class Solution {
    private HashMap<Integer, Integer> memo = new HashMap<>();

    public int fib(int n) {
        if (n <= 1) {
            return n;
        }

        if (memo.containsKey(n)) {
            return memo.get(n);
        }

        int result = fib(n - 1) + fib(n - 2);
        memo.put(n, result);

        return result;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println("Fib(5): " + solution.fib(5)); // Output: 5
        System.out.println("Fib(10): " + solution.fib(10)); // Output: 55
    }
}`}
        </code>
      </pre>
      <br />
      <h2>Explanation of Fibonacci Implementation:</h2>
      <ul>
        <li>
          <strong>Memo Data Structure</strong>:
          <ul>
            <li>
              Use a <code>HashMap</code> to store previously computed Fibonacci
              numbers.
            </li>
          </ul>
        </li>
        <li>
          <strong>Base Case</strong>:
          <ul>
            <li>
              If <code>n</code> is 0 or 1, return <code>n</code> directly as the
              base case.
            </li>
          </ul>
        </li>
        <li>
          <strong>Memoization Check</strong>:
          <ul>
            <li>
              Before computing, check if the result for <code>n</code> is
              already in the memo.
            </li>
            <li>
              If it is, return the stored result to avoid redundant
              calculations.
            </li>
          </ul>
        </li>
        <li>
          <strong>Recursive Calculation</strong>:
          <ul>
            <li>
              If the result is not in the memo, compute it recursively by
              summing the results of <code>fib(n - 1)</code> and{" "}
              <code>fib(n - 2)</code>.
            </li>
            <li>Store the computed result in the memo before returning it.</li>
          </ul>
        </li>
        <li>
          <strong>Main Method</strong>:
          <ul>
            <li>
              Creates an instance of the <code>Solution</code> class and
              demonstrates the use of the <code>fib</code> method with sample
              inputs.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Advantages of Memoization:</h2>
      <ul>
        <li>
          <strong>Efficiency</strong>: Significantly reduces the number of
          calculations needed by storing and reusing results.
        </li>
        <li>
          <strong>Simplicity</strong>: Easy to implement and understand, making
          it a powerful tool for optimizing recursive algorithms.
        </li>
        <li>
          <strong>Performance</strong>: Improves the performance of algorithms
          with overlapping subproblems, making them feasible for larger inputs.
        </li>
      </ul>
    </>
  ),
  "Shortest Path": (
    <>
      <p>
        The "Shortest Path" is a common algorithmic problem that aims to find
        the shortest distance or minimum number of steps required to travel
        between two points, usually in a graph or grid. This concept is widely
        used in many LeetCode problems.
      </p>
      <br />
      <h2>Key Concepts:</h2>
      <ul>
        <li>
          <strong>Graph Representation</strong>:
          <ul>
            <li>
              Graphs can be represented using adjacency lists, adjacency
              matrices, or edge lists.
            </li>
            <li>
              Nodes (vertices) and edges (connections) form the basis of the
              graph.
            </li>
          </ul>
        </li>
        <li>
          <strong>Common Algorithms</strong>:
          <ul>
            <li>
              <strong>Breadth-First Search (BFS)</strong>:
              <ul>
                <li>Used for unweighted graphs or grids.</li>
                <li>
                  Explores all neighbors at the present depth before moving on
                  to nodes at the next depth level.
                </li>
                <li>
                  Guarantees finding the shortest path in terms of the number of
                  edges (or steps).
                </li>
              </ul>
            </li>
            <li>
              <strong>Dijkstra's Algorithm</strong>:
              <ul>
                <li>Used for weighted graphs.</li>
                <li>
                  Finds the shortest path from a source node to all other nodes.
                </li>
                <li>
                  Maintains a priority queue to explore the next closest node.
                </li>
              </ul>
            </li>
            <li>
              <strong>Floyd-Warshall Algorithm</strong>:
              <ul>
                <li>
                  Used for finding shortest paths in graphs with weighted edges
                  (positive or negative).
                </li>
                <li>Computes shortest paths between all pairs of nodes.</li>
                <li>
                  Dynamic programming approach that iteratively updates shortest
                  path estimates.
                </li>
              </ul>
            </li>
            <li>
              <strong>A*</strong>:
              <ul>
                <li>
                  Used for weighted graphs, similar to Dijkstra's but with a
                  heuristic to improve efficiency.
                </li>
                <li>
                  Combines the cost to reach a node and the estimated cost to
                  the goal.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Applications in LeetCode Problems</strong>:
          <ul>
            <li>
              <strong>Grids</strong>:
              <ul>
                <li>Finding the shortest path in 2D grids with obstacles.</li>
                <li>
                  Examples: Shortest Path in a Grid with Obstacles Elimination
                  (LeetCode 1293), Shortest Path in Binary Matrix (LeetCode
                  1091).
                </li>
              </ul>
            </li>
            <li>
              <strong>Graphs</strong>:
              <ul>
                <li>
                  Finding the shortest path in unweighted or weighted graphs.
                </li>
                <li>
                  Examples: Network Delay Time (LeetCode 743), Cheapest Flights
                  Within K Stops (LeetCode 787).
                </li>
              </ul>
            </li>
            <li>
              <strong>Strings</strong>:
              <ul>
                <li>
                  Transforming one string to another in the minimum number of
                  operations.
                </li>
                <li>
                  Examples: Word Ladder (LeetCode 127), Minimum Genetic Mutation
                  (LeetCode 433).
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Common Strategies:</h2>
      <ul>
        <li>
          <strong>BFS for Unweighted Problems</strong>:
          <ul>
            <li>Use a queue to explore nodes layer by layer.</li>
            <li>Track visited nodes to avoid cycles.</li>
            <li>Suitable for problems where each step has the same cost.</li>
          </ul>
        </li>
        <li>
          <strong>Dijkstra's for Weighted Problems</strong>:
          <ul>
            <li>
              Use a priority queue to always expand the shortest known distance
              node.
            </li>
            <li>Update the shortest path estimates for neighboring nodes.</li>
            <li>
              Best for finding the shortest path in graphs with varying edge
              weights.
            </li>
          </ul>
        </li>
        <li>
          <strong>A* for Heuristic Search</strong>:
          <ul>
            <li>
              Incorporate a heuristic to prioritize nodes likely to lead to the
              goal.
            </li>
            <li>
              Combine the actual cost to a node with an estimated cost to the
              goal.
            </li>
            <li>
              Effective for pathfinding in large, complex graphs or grids.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Example Problems and Solutions:</h2>
      <ul>
        <li>
          <strong>LeetCode 127 - Word Ladder</strong>:
          <ul>
            <li>
              Use BFS to transform one word to another with the shortest
              sequence of transformations.
            </li>
            <li>
              Each transformation changes one letter and must be a valid word
              from the given list.
            </li>
          </ul>
        </li>
        <li>
          <strong>LeetCode 1091 - Shortest Path in Binary Matrix</strong>:
          <ul>
            <li>
              Use BFS to find the shortest path from the top-left corner to the
              bottom-right corner of a binary matrix.
            </li>
            <li>Only move to neighboring cells that are 0 (walkable).</li>
          </ul>
        </li>
        <li>
          <strong>LeetCode 743 - Network Delay Time</strong>:
          <ul>
            <li>
              Use Dijkstra's algorithm to find the shortest time for all nodes
              to receive a signal from a starting node.
            </li>
            <li>
              Each edge has a travel time, and the goal is to minimize the time
              for the signal to reach all nodes.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  "String Matching": (
    <>
      <p>
        String matching problems in LeetCode often involve searching for
        patterns, substrings, or specific structures within strings. These
        problems are common across various domains, including algorithms, data
        structures, and even database queries.
      </p>

      <h2>Key Concepts:</h2>
      <ul>
        <li>
          <strong>Pattern Matching</strong>:
          <ul>
            <li>
              Identifying occurrences of a pattern (substring) within a larger
              string.
            </li>
            <li>
              Examples include finding substrings, checking for regular
              expression matches, or searching for specific characters.
            </li>
          </ul>
        </li>
        <li>
          <strong>Efficiency</strong>:
          <ul>
            <li>
              Optimizing algorithms for pattern matching, especially in large
              datasets.
            </li>
            <li>
              Using techniques like hashing, KMP algorithm (Knuth-Morris-Pratt),
              or Boyer-Moore algorithm for faster searches.
            </li>
          </ul>
        </li>
        <li>
          <strong>Applications in Problems</strong>:
          <ul>
            <li>
              <strong>Substring Search</strong>:
              <ul>
                <li>Finding if a substring exists within a string.</li>
                <li>
                  Examples: Implement strStr() (LeetCode 28), Regular Expression
                  Matching (LeetCode 10).
                </li>
              </ul>
            </li>
            <li>
              <strong>String Comparison</strong>:
              <ul>
                <li>Comparing strings based on specific rules or patterns.</li>
                <li>
                  Examples: Longest Palindromic Substring (LeetCode 5), Compare
                  Version Numbers (LeetCode 165).
                </li>
              </ul>
            </li>
            <li>
              <strong>String Operations</strong>:
              <ul>
                <li>
                  Manipulating strings to match a given format or structure.
                </li>
                <li>
                  Examples: Simplify Path (LeetCode 71), Valid Parentheses
                  (LeetCode 20).
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <h2>Example Problems:</h2>
      <ul>
        <li>
          <strong>LeetCode 28 - Implement strStr()</strong>:
          <ul>
            <li>
              Find the index of the first occurrence of a substring (needle) in
              another string (haystack).
            </li>
            <li>
              Edge cases include handling empty strings and strings where the
              substring does not exist.
            </li>
          </ul>
        </li>
        <li>
          <strong>LeetCode 5 - Longest Palindromic Substring</strong>:
          <ul>
            <li>
              Find the longest substring that is a palindrome within a given
              string.
            </li>
            <li>
              Requires efficient algorithms due to potential large input sizes.
            </li>
          </ul>
        </li>
        <li>
          <strong>LeetCode 165 - Compare Version Numbers</strong>:
          <ul>
            <li>
              Compare two version numbers represented as strings and determine
              if one version is greater than, equal to, or less than the other.
            </li>
            <li>Handles complex versioning schemes and edge cases.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  Geometry: (
    <>
      <p>
        The "geometry" tag in LeetCode refers to problems that involve geometric
        shapes, spatial relationships, and computational geometry algorithms.
        These problems often require applying mathematical concepts to solve
        problems related to points, lines, angles, polygons, and more.
      </p>

      <h2>Key Concepts:</h2>
      <ul>
        <li>
          <strong>Geometric Shapes</strong>:
          <ul>
            <li>
              Problems involving points, lines, circles, triangles, rectangles,
              and other geometric primitives.
            </li>
            <li>
              Tasks can include determining intersections, calculating areas,
              perimeters, or distances between points.
            </li>
          </ul>
        </li>
        <li>
          <strong>Spatial Relationships</strong>:
          <ul>
            <li>
              Identifying positions relative to geometric objects, such as
              inside, outside, or on the boundary.
            </li>
            <li>
              Dealing with concepts like convex hulls, centroid, and geometric
              transformations.
            </li>
          </ul>
        </li>
        <li>
          <strong>Computational Geometry Algorithms</strong>:
          <ul>
            <li>
              Efficient algorithms for solving geometric problems, often
              involving sorting, searching, and geometric data structures.
            </li>
            <li>
              Examples include algorithms for line sweeping, Voronoi diagrams,
              and triangulation.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Applications in Problems:</h2>
      <ul>
        <li>
          <strong>Intersection Problems</strong>:
          <ul>
            <li>
              Detecting intersections between geometric objects like lines,
              segments, or circles.
            </li>
            <li>
              Examples: Line Sweep Algorithm (LeetCode 218), Intersection of Two
              Arrays (LeetCode 350).
            </li>
          </ul>
        </li>
        <li>
          <strong>Area and Perimeter Calculations</strong>:
          <ul>
            <li>Calculating areas of polygons, rectangles, or circles.</li>
            <li>
              Examples: Rectangle Area (LeetCode 223), Minimum Area Rectangle
              (LeetCode 939).
            </li>
          </ul>
        </li>
        <li>
          <strong>Geometric Transformations</strong>:
          <ul>
            <li>Rotating, translating, or scaling geometric objects.</li>
            <li>
              Examples: Rotate Image (LeetCode 48), Construct the Rectangle
              (LeetCode 492).
            </li>
          </ul>
        </li>
      </ul>

      <h2>Example Problems:</h2>
      <ul>
        <li>
          <strong>LeetCode 587 - Erect the Fence</strong>:
          <ul>
            <li>Determining the convex hull of a set of points.</li>
            <li>
              Requires understanding of geometric algorithms like Graham's scan
              or Andrew's monotone chain.
            </li>
          </ul>
        </li>
        <li>
          <strong>LeetCode 816 - Ambiguous Coordinates</strong>:
          <ul>
            <li>
              Generating valid coordinates from a string representing ambiguous
              coordinates.
            </li>
            <li>
              Involves parsing and checking for valid geometric transformations.
            </li>
          </ul>
        </li>
        <li>
          <strong>LeetCode 963 - Minimum Area Rectangle II</strong>:
          <ul>
            <li>
              Finding the minimum area rectangle that can be formed with any
              three points on a plane.
            </li>
            <li>
              Utilizes concepts of distance, slopes, and geometric calculations.
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
  // add dijkstra and floyd warshall algorithm as well
  "Binary Indexed Tree": (
    <>
      {" "}
      <p>
        The "Binary Indexed Tree" (BIT), also known as Fenwick Tree, is a
        specialized data structure that allows efficient updates and prefix sum
        calculations in arrays. It is particularly useful for solving problems
        where frequent updates and sum queries on prefix ranges are required.
      </p>
      <br />
      <h2>Key Concepts:</h2>
      <ul>
        <li>
          <strong>Prefix Sum Calculation</strong>:
          <ul>
            <li>
              Allows quick computation of cumulative sums of elements up to any
              index in an array.
            </li>
            <li>Supports efficient updates and queries on prefix sums.</li>
          </ul>
        </li>
        <li>
          <strong>Operations and Their Complexities</strong>:
          <ul>
            <li>
              <strong>Update Operation</strong>: Adjusts the value of an element
              in the array and updates the corresponding prefix sums.
              <ul>
                <li>
                  Time Complexity: <code>O(log n)</code>
                </li>
              </ul>
            </li>
            <li>
              <strong>Query Operation</strong>: Computes the sum of elements in
              a prefix range from the start of the array up to any index.
              <ul>
                <li>
                  Time Complexity: <code>O(log n)</code>
                </li>
              </ul>
            </li>
            <li>
              <strong>Construction</strong>: Initializing the BIT from an array.
              <ul>
                <li>
                  Time Complexity: <code>O(n log n)</code>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Structure</strong>:
          <ul>
            <li>
              Implemented as an array where each element maintains cumulative
              sums based on specific index calculations.
            </li>
            <li>
              Efficiently handles updates and queries using bitwise operations.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Applications in Problems:</h2>
      <ul>
        <li>
          <strong>Range Sum Queries</strong>:
          <ul>
            <li>
              Calculating sums of elements within a specified range efficiently.
            </li>
            <li>
              Examples: Range Sum Query - Immutable (LeetCode 303), Range Sum
              Query 2D - Mutable (LeetCode 308).
            </li>
          </ul>
        </li>
        <li>
          <strong>Frequency Counting</strong>:
          <ul>
            <li>
              Maintaining counts of elements and efficiently querying
              frequencies.
            </li>
            <li>
              Examples: Count of Smaller Numbers After Self (LeetCode 315),
              Count of Range Sum (LeetCode 327).
            </li>
          </ul>
        </li>
        <li>
          <strong>Coordinate Compression</strong>:
          <ul>
            <li>
              Mapping and compressing coordinate values to efficiently manage
              and query ranges.
            </li>
            <li>
              Examples: Count of Range Sums (LeetCode 327), Reverse Pairs
              (LeetCode 493).
            </li>
          </ul>
        </li>
      </ul>
      <h2>Example Problems:</h2>
      <ul>
        <li>
          <strong>LeetCode 307 - Range Sum Query - Mutable</strong>:
          <ul>
            <li>
              Supports both point updates and range sum queries using BIT.
            </li>
            <li>
              Updates and queries are performed in logarithmic time relative to
              the array size.
            </li>
          </ul>
        </li>
        <li>
          <strong>LeetCode 315 - Count of Smaller Numbers After Self</strong>:
          <ul>
            <li>
              Uses BIT to maintain and query frequencies of numbers after
              processing each element.
            </li>
            <li>
              Efficiently counts smaller elements following each element in an
              array.
            </li>
          </ul>
        </li>
        <li>
          <strong>LeetCode 327 - Count of Range Sum</strong>:
          <ul>
            <li>
              Applies BIT to count ranges of sums within a specified interval.
            </li>
            <li>
              Handles large input sizes efficiently by compressing coordinate
              values.
            </li>
          </ul>
        </li>
      </ul>
      <br />
      <pre>
        <code>{`class FenwickTree {
  public FenwickTree(int n) {
    sums = new int[n + 1];
  }

  public void add(int i, int delta) {
    while (i < sums.length) {
      sums[i] += delta;
      i += lowbit(i);
    }
  }

  public int get(int i) {
    int sum = 0;
    while (i > 0) {
      sum += sums[i];
      i -= lowbit(i);
    }
    return sum;
  }

  private int[] sums;

  private static int lowbit(int i) {
    return i & -i;
  }
}`}</code>
      </pre>
      <br />
      <p>
        The <code>FenwickTree</code> class is an implementation of a Binary
        Indexed Tree (BIT) that supports efficient prefix sum calculations and
        updates. <br /> <br />
        Below is a detailed explanation of the class and its methods:
      </p>{" "}
      <br />
      <h2>Class Definition:</h2>
      <ul>
        <li>
          <code>FenwickTree</code>:
          <ul>
            <li>
              Constructs a Fenwick Tree (Binary Indexed Tree) for an array of
              size <code>n</code>.
            </li>
            <li>
              Initializes an internal array <code>sums</code> to store
              cumulative sums, with size <code>n + 1</code>.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Constructor:</h2>
      <ul>
        <li>
          <code>public FenwickTree(int n)</code>:
          <ul>
            <li>
              Initializes the <code>sums</code> array with <code>n + 1</code>{" "}
              elements.
            </li>
            <li>
              The extra element (at index 0) simplifies calculations, as the
              tree is 1-indexed.
            </li>
          </ul>
        </li>
      </ul>
      <h2>Methods:</h2>
      <ul>
        <li>
          <code>public void add(int i, int delta)</code>:
          <ul>
            <li>
              Adds <code>delta</code> to the element at index <code>i</code> in
              the Fenwick Tree.
            </li>
            <li>
              Iteratively updates the <code>sums</code> array to reflect the
              change.
              <ul>
                <li>
                  Uses a loop to propagate the change to all relevant indices.
                </li>
                <li>
                  Increments <code>i</code> by its lowest set bit (using the{" "}
                  <code>lowbit</code> method) in each iteration.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <code>public int get(int i)</code>:
          <ul>
            <li>
              Calculates the prefix sum from the start of the array to index{" "}
              <code>i</code>.
            </li>
            <li>
              Iteratively sums the values in the <code>sums</code> array.
              <ul>
                <li>
                  Uses a loop to accumulate the sum from all relevant indices.
                </li>
                <li>
                  Decrements <code>i</code> by its lowest set bit (using the{" "}
                  <code>lowbit</code> method) in each iteration.
                </li>
              </ul>
            </li>
            <li>Returns the calculated sum.</li>
          </ul>
        </li>
      </ul>
      <h2>Helper Method:</h2>
      <ul>
        <li>
          <code>private static int lowbit(int i)</code>:
          <ul>
            <li>
              Calculates and returns the lowest set bit of <code>i</code>.
            </li>
            <li>
              Uses the bitwise AND operation: <code>i & -i</code>.
            </li>
            <li>
              Example:
              <ul>
                <li>
                  If <code>i = 6</code> (binary <code>110</code>),{" "}
                  <code>lowbit(6)</code> returns <code>2</code> (binary{" "}
                  <code>010</code>).
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h2>Example Usage:</h2>
      <ul>
        <li>
          <code>FenwickTree fenwickTree = new FenwickTree(5);</code>
          <ul>
            <li>Creates a Fenwick Tree for an array of size 5.</li>
          </ul>
        </li>
        <li>
          <code>fenwickTree.add(3, 5);</code>
          <ul>
            <li>Adds 5 to the element at index 3.</li>
            <li>
              Updates the internal <code>sums</code> array to reflect this
              change.
            </li>
          </ul>
        </li>
        <li>
          <code>int sum = fenwickTree.get(3);</code>
          <ul>
            <li>
              Calculates the prefix sum from the start of the array to index 3.
            </li>
            <li>Returns the calculated sum.</li>
          </ul>
        </li>
      </ul>
    </>
  ),
  "Segment Tree": (
    <>
      <p>
        Segment trees are used for efficient range queries and updates. Here's
        an example implementation in Java for range sum queries and updates:
      </p>
      <br />{" "}
      <pre>
        <code class="language-java">
          {`class SegmentTree {
    private int[] tree;
    private int n;

    public SegmentTree(int[] arr) {
        n = arr.length;
        tree = new int[2 * n];
        buildTree(arr);
    }

    private void buildTree(int[] arr) {
        for (int i = 0; i < n; i++) {
            tree[n + i] = arr[i];
        }
        for (int i = n - 1; i > 0; i--) {
            tree[i] = tree[2 * i] + tree[2 * i + 1];
        }
    }

    public void update(int index, int value) {
        index += n;
        tree[index] = value;
        while (index > 1) {
            index /= 2;
            tree[index] = tree[2 * index] + tree[2 * index + 1];
        }
    }

    public int query(int left, int right) {
        left += n;
        right += n + 1;
        int sum = 0;
        while (left < right) {
            if (left % 2 == 1) {
                sum += tree[left];
                left++;
            }
            if (right % 2 == 1) {
                right--;
                sum += tree[right];
            }
            left /= 2;
            right /= 2;
        }
        return sum;
    }
}

public class Main {
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11};
        SegmentTree segmentTree = new SegmentTree(arr);
        
        System.out.println(segmentTree.query(1, 3)); // Output: 15
        segmentTree.update(1, 10);
        System.out.println(segmentTree.query(1, 3)); // Output: 22
    }
}`}
        </code>
      </pre>
      <br />
      <h2>Explanation:</h2>
      <ul>
        <li>
          <strong>SegmentTree Class</strong>:
          <ul>
            <li>
              <code>SegmentTree(int[] arr)</code>: Constructs the segment tree
              from the given array. Complexity: (O(n)).
            </li>
            <li>
              <code>buildTree(int[] arr)</code>: Initializes the leaf nodes and
              internal nodes of the tree. Complexity: (O(n)).
              <ul>
                <li>Leaf nodes are initialized directly from the array.</li>
                <li>
                  Internal nodes are calculated as the sum of their child nodes.
                </li>
              </ul>
            </li>
            <li>
              <code>update(int index, int value)</code>: Updates the value at
              the specified index and adjusts the tree accordingly. Complexity:
              (O(log n)).
              <ul>
                <li>Updates the leaf node corresponding to the index.</li>
                <li>
                  Propagates the changes up the tree to maintain the correct
                  sums.
                </li>
              </ul>
            </li>
            <li>
              <code>query(int left, int right)</code>: Returns the sum of
              elements in the specified range. Complexity: \(O(\log n)\).
              <ul>
                <li>
                  Converts the query range to the corresponding indices in the
                  tree.
                </li>
                <li>
                  Accumulates the sum by traversing the tree and adjusting the
                  range as needed.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  ),
};

export default TAG_DESCRIPTION;
