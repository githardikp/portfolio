import { Concept } from '@/types';
import { categories } from './categories';

export const concepts: Concept[] = [
  // Arrays
  {
    id: 'array-basics',
    title: 'Arrays: Shopping Cart',
    category: categories[0],
    difficulty: 'beginner',
    description: 'Arrays are like shopping carts - you can add items, remove them, and access any item directly.',
    realLifeExample: {
      title: 'Online Shopping Cart',
      scenario: 'When you shop online, your cart is essentially an array. Each item has a position (index) and you can add items at the end, remove specific items, or view all items.',
      explanation: 'Just like arrays have indexes (0, 1, 2...), items in your cart have positions. You can directly access "item at position 3" or add new items at the end.'
    },
    code: [
      {
        language: 'javascript',
        code: `// Shopping cart as an array
const shoppingCart = ['Laptop', 'Mouse', 'Keyboard'];

// Add item (push)
shoppingCart.push('Monitor');
console.log(shoppingCart); // ['Laptop', 'Mouse', 'Keyboard', 'Monitor']

// Remove last item (pop)
const removed = shoppingCart.pop();
console.log(removed); // 'Monitor'

// Access specific item
console.log(shoppingCart[1]); // 'Mouse'

// Update item
shoppingCart[0] = 'Gaming Laptop';`,
        explanation: 'Basic array operations mirror shopping cart actions: add items, remove items, and update items.'
      }
    ],
    exercises: [
      {
        id: 'array-ex-1',
        question: 'Create a function that finds the most expensive item in a shopping cart array where each item is an object with name and price.',
        hints: [
          'Use a loop to iterate through the array',
          'Keep track of the highest price seen so far',
          'Compare each item\'s price with the current maximum'
        ],
        solution: {
          language: 'javascript',
          code: `function findMostExpensive(cart) {
  if (cart.length === 0) return null;
  
  let mostExpensive = cart[0];
  
  for (let i = 1; i < cart.length; i++) {
    if (cart[i].price > mostExpensive.price) {
      mostExpensive = cart[i];
    }
  }
  
  return mostExpensive;
}`,
          explanation: 'This solution iterates through the array once, keeping track of the most expensive item.'
        },
        testCases: [
          {
            input: [
              { name: 'Laptop', price: 999 },
              { name: 'Mouse', price: 29 },
              { name: 'Monitor', price: 399 }
            ],
            output: { name: 'Laptop', price: 999 }
          }
        ]
      }
    ],
    timeComplexity: 'O(1) for access, O(n) for search',
    spaceComplexity: 'O(n)'
  },

  // Stack
  {
    id: 'stack-browser-history',
    title: 'Stack: Browser History',
    category: categories[1],
    difficulty: 'beginner',
    description: 'A stack follows Last-In-First-Out (LIFO) principle - like your browser\'s back button!',
    realLifeExample: {
      title: 'Browser Navigation History',
      scenario: 'When you browse websites, each new page is added to a history stack. The back button removes (pops) the most recent page, revealing the previous one.',
      explanation: 'Stack operations: push (visit new page), pop (go back), peek (see current page). You can\'t jump to a page in the middle - you must go back through recent pages first.'
    },
    code: [
      {
        language: 'javascript',
        code: `class BrowserHistory {
  constructor() {
    this.history = [];
    this.currentPage = null;
  }
  
  // Visit a new page (push)
  visit(url) {
    if (this.currentPage) {
      this.history.push(this.currentPage);
    }
    this.currentPage = url;
    console.log(\`Visiting: \${url}\`);
  }
  
  // Go back (pop)
  back() {
    if (this.history.length > 0) {
      const previousPage = this.history.pop();
      console.log(\`Going back to: \${previousPage}\`);
      this.currentPage = previousPage;
      return previousPage;
    }
    return null;
  }
  
  // View current page (peek)
  getCurrentPage() {
    return this.currentPage;
  }
}

// Usage
const browser = new BrowserHistory();
browser.visit('google.com');
browser.visit('youtube.com');
browser.visit('github.com');
browser.back(); // Returns to youtube.com
browser.back(); // Returns to google.com`,
        explanation: 'The browser history perfectly demonstrates stack behavior - you can only go back to the most recently visited page.'
      }
    ],
    exercises: [
      {
        id: 'stack-ex-1',
        question: 'Implement a function to check if parentheses in a string are balanced using a stack.',
        hints: [
          'Push opening brackets onto the stack',
          'When you see a closing bracket, pop from stack and check if it matches',
          'The string is balanced if the stack is empty at the end'
        ],
        solution: {
          language: 'javascript',
          code: `function isBalanced(str) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of str) {
    if (char in pairs) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (pairs[last] !== char) return false;
    }
  }
  
  return stack.length === 0;
}`,
          explanation: 'Uses a stack to ensure each opening bracket has a corresponding closing bracket in the correct order.'
        },
        testCases: [
          { input: '({[]})', output: true },
          { input: '({[}])', output: false },
          { input: '((()))', output: true }
        ]
      }
    ],
    timeComplexity: 'O(1) for push/pop operations',
    spaceComplexity: 'O(n) for n elements'
  },

  // Queue
  {
    id: 'queue-printer',
    title: 'Queue: Printer Queue',
    category: categories[1],
    difficulty: 'beginner',
    description: 'A queue follows First-In-First-Out (FIFO) principle - like a printer processing print jobs!',
    realLifeExample: {
      title: 'Office Printer Queue',
      scenario: 'When multiple people send documents to print, they\'re added to a queue. The printer processes them in order - first document sent is first to print.',
      explanation: 'Queue operations: enqueue (add print job), dequeue (print next document), peek (see what\'s printing). Fair and predictable!'
    },
    code: [
      {
        language: 'javascript',
        code: `class PrinterQueue {
  constructor() {
    this.queue = [];
  }
  
  // Add print job (enqueue)
  addJob(document) {
    this.queue.push({
      document,
      timestamp: new Date(),
      status: 'waiting'
    });
    console.log(\`Added to queue: \${document}\`);
  }
  
  // Process next job (dequeue)
  printNext() {
    if (this.queue.length === 0) {
      console.log('No jobs in queue');
      return null;
    }
    
    const job = this.queue.shift();
    job.status = 'printing';
    console.log(\`Now printing: \${job.document}\`);
    return job;
  }
  
  // View queue
  viewQueue() {
    return this.queue.map((job, index) => ({
      position: index + 1,
      document: job.document,
      waitTime: \`\${Math.floor((Date.now() - job.timestamp) / 1000)}s\`
    }));
  }
}

// Usage
const printer = new PrinterQueue();
printer.addJob('Report.pdf');
printer.addJob('Invoice.pdf');
printer.addJob('Presentation.pdf');
printer.printNext(); // Prints Report.pdf first`,
        explanation: 'The printer queue ensures fairness - documents are printed in the order they were submitted.'
      }
    ],
    exercises: [
      {
        id: 'queue-ex-1',
        question: 'Implement a ticket counter system where customers take a number and are served in order.',
        hints: [
          'Use a queue to store customer numbers',
          'Implement methods to issue new tickets and serve next customer',
          'Keep track of the last issued number'
        ],
        solution: {
          language: 'javascript',
          code: `class TicketCounter {
  constructor() {
    this.queue = [];
    this.lastNumber = 0;
    this.nowServing = null;
  }
  
  issueTicket() {
    this.lastNumber++;
    this.queue.push(this.lastNumber);
    console.log(\`Ticket #\${this.lastNumber} issued\`);
    return this.lastNumber;
  }
  
  serveNext() {
    if (this.queue.length === 0) {
      console.log('No customers waiting');
      return null;
    }
    
    this.nowServing = this.queue.shift();
    console.log(\`Now serving: #\${this.nowServing}\`);
    return this.nowServing;
  }
  
  getWaitingCount() {
    return this.queue.length;
  }
}`,
          explanation: 'This system ensures customers are served in the order they arrived, implementing fair queuing.'
        },
        testCases: [
          {
            input: 'issueTicket() called 3 times, then serveNext()',
            output: 'Now serving: #1'
          }
        ]
      }
    ],
    timeComplexity: 'O(1) for enqueue/dequeue operations',
    spaceComplexity: 'O(n) for n elements'
  },

  // Binary Search
  {
    id: 'binary-search-dictionary',
    title: 'Binary Search: Dictionary Lookup',
    category: categories[6],
    difficulty: 'intermediate',
    description: 'Binary search is like looking up a word in a dictionary - you don\'t read every page!',
    realLifeExample: {
      title: 'Finding a Word in a Dictionary',
      scenario: 'To find "Python" in a dictionary, you open to the middle. If you\'re at "M", you know "Python" is in the second half. You then open to the middle of the second half, and repeat.',
      explanation: 'Each comparison eliminates half of the remaining pages. Much faster than checking every page! Works because dictionary is sorted alphabetically.'
    },
    code: [
      {
        language: 'javascript',
        code: `function dictionaryLookup(dictionary, word) {
  let left = 0;
  let right = dictionary.length - 1;
  let comparisons = 0;
  
  while (left <= right) {
    comparisons++;
    const mid = Math.floor((left + right) / 2);
    const currentWord = dictionary[mid];
    
    console.log(\`Checking page \${mid}: "\${currentWord}"\`);
    
    if (currentWord === word) {
      console.log(\`Found "\${word}" after \${comparisons} checks!\`);
      return mid;
    }
    
    if (currentWord < word) {
      console.log(\`"\${word}" comes after "\${currentWord}", checking second half\`);
      left = mid + 1;
    } else {
      console.log(\`"\${word}" comes before "\${currentWord}", checking first half\`);
      right = mid - 1;
    }
  }
  
  console.log(\`"\${word}" not found after \${comparisons} checks\`);
  return -1;
}

// Example with sorted words
const dictionary = [
  'apple', 'banana', 'cherry', 'date', 'elderberry',
  'fig', 'grape', 'honeydew', 'kiwi', 'lemon',
  'mango', 'nectarine', 'orange', 'papaya', 'quince'
];

dictionaryLookup(dictionary, 'kiwi');
// Output shows how we narrow down the search`,
        explanation: 'Binary search dramatically reduces the number of comparisons needed by eliminating half the search space with each check.'
      }
    ],
    exercises: [
      {
        id: 'binary-search-ex-1',
        question: 'Implement a function to find which page a specific topic appears on in a textbook index (sorted by page number).',
        hints: [
          'The index is sorted by page numbers',
          'Use binary search to find the topic efficiently',
          'Return the page number or -1 if not found'
        ],
        solution: {
          language: 'javascript',
          code: `function findTopicPage(index, topic) {
  // index is array of {topic: string, page: number} sorted by page
  let left = 0;
  let right = index.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (index[mid].topic === topic) {
      return index[mid].page;
    }
    
    // Since sorted by page, we need to search entire range
    // This becomes a linear search for exact topic match
    // Better approach: sort by topic for binary search
  }
  
  // If topics were sorted alphabetically:
  function findTopicPageOptimized(sortedIndex, topic) {
    let left = 0;
    let right = sortedIndex.length - 1;
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (sortedIndex[mid].topic === topic) {
        return sortedIndex[mid].page;
      }
      
      if (sortedIndex[mid].topic < topic) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return -1;
  }
}`,
          explanation: 'Binary search works best when the array is sorted by the search key. For topic lookup, sort by topic name.'
        },
        testCases: [
          {
            input: [
              { topic: 'Arrays', page: 45 },
              { topic: 'Binary Search', page: 112 },
              { topic: 'Graphs', page: 234 }
            ],
            output: 'Page 112 for Binary Search'
          }
        ]
      }
    ],
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)'
  },

  // Hash Table
  {
    id: 'hash-table-phonebook',
    title: 'Hash Table: Phone Contact List',
    category: categories[4],
    difficulty: 'intermediate',
    description: 'Hash tables are like your phone\'s contact list - instant lookup by name!',
    realLifeExample: {
      title: 'Smartphone Contacts',
      scenario: 'When you search for "Mom" in your contacts, your phone doesn\'t scroll through every contact. It uses a hash function to jump directly to where "Mom" is stored.',
      explanation: 'The hash function converts the name into a storage location. This is why searching contacts is instant, whether you have 10 or 1000 contacts!'
    },
    code: [
      {
        language: 'javascript',
        code: `class PhoneContacts {
  constructor() {
    this.contacts = {};
  }
  
  // Add contact
  addContact(name, phoneNumber, email) {
    // Hash table stores by name (key)
    this.contacts[name] = {
      phoneNumber,
      email,
      addedAt: new Date()
    };
    console.log(\`Added contact: \${name}\`);
  }
  
  // Find contact - O(1) lookup!
  findContact(name) {
    if (this.contacts[name]) {
      return this.contacts[name];
    }
    return null;
  }
  
  // Update contact
  updateContact(name, updates) {
    if (this.contacts[name]) {
      this.contacts[name] = {
        ...this.contacts[name],
        ...updates
      };
      console.log(\`Updated: \${name}\`);
      return true;
    }
    return false;
  }
  
  // Delete contact
  deleteContact(name) {
    if (this.contacts[name]) {
      delete this.contacts[name];
      console.log(\`Deleted: \${name}\`);
      return true;
    }
    return false;
  }
  
  // Search by partial name (not a hash table strength)
  searchByPartial(partial) {
    // This requires checking all contacts - O(n)
    return Object.keys(this.contacts)
      .filter(name => name.toLowerCase().includes(partial.toLowerCase()))
      .map(name => ({ name, ...this.contacts[name] }));
  }
}

// Usage
const myContacts = new PhoneContacts();
myContacts.addContact('Mom', '555-1234', 'mom@family.com');
myContacts.addContact('John Doe', '555-5678', 'john@work.com');
myContacts.addContact('Pizza Place', '555-PIZZA', null);

// Instant lookup!
console.log(myContacts.findContact('Mom')); // O(1) - immediate!`,
        explanation: 'Hash tables provide constant-time lookups, making them perfect for scenarios where you need to find data by a unique key.'
      }
    ],
    exercises: [
      {
        id: 'hash-table-ex-1',
        question: 'Implement a system to track inventory in a store where you can quickly check if an item is in stock.',
        hints: [
          'Use item name or SKU as the key',
          'Store quantity and other details as the value',
          'Implement methods to check stock, update quantity, and add new items'
        ],
        solution: {
          language: 'javascript',
          code: `class Inventory {
  constructor() {
    this.items = {};
  }
  
  addItem(sku, name, quantity, price) {
    this.items[sku] = {
      name,
      quantity,
      price,
      lastUpdated: new Date()
    };
  }
  
  checkStock(sku) {
    const item = this.items[sku];
    if (!item) return null;
    
    return {
      inStock: item.quantity > 0,
      quantity: item.quantity,
      name: item.name
    };
  }
  
  updateQuantity(sku, change) {
    if (this.items[sku]) {
      this.items[sku].quantity += change;
      this.items[sku].lastUpdated = new Date();
      return this.items[sku].quantity;
    }
    return null;
  }
  
  getLowStockItems(threshold = 10) {
    return Object.entries(this.items)
      .filter(([sku, item]) => item.quantity < threshold)
      .map(([sku, item]) => ({ sku, ...item }));
  }
}`,
          explanation: 'Hash tables enable instant inventory lookups by SKU, making checkout and restocking efficient.'
        },
        testCases: [
          {
            input: 'checkStock("LAPTOP-001")',
            output: '{ inStock: true, quantity: 15, name: "Gaming Laptop" }'
          }
        ]
      }
    ],
    timeComplexity: 'O(1) average case for insert/delete/lookup',
    spaceComplexity: 'O(n)'
  },

  // Tree - File System
  {
    id: 'tree-file-system',
    title: 'Trees: Computer File System',
    category: categories[2],
    difficulty: 'intermediate',
    description: 'Trees represent hierarchical data - like folders and files on your computer!',
    realLifeExample: {
      title: 'Computer File System',
      scenario: 'Your computer organizes files in a tree structure. The root is your main drive (C:\\ or /), with folders as branches and files as leaves. Each folder can contain more folders or files.',
      explanation: 'This hierarchical structure makes it easy to organize and find files. Path like /Users/John/Documents/report.pdf shows the tree traversal from root to file.'
    },
    code: [
      {
        language: 'javascript',
        code: `class FileSystemNode {
  constructor(name, isDirectory = false) {
    this.name = name;
    this.isDirectory = isDirectory;
    this.children = isDirectory ? [] : null;
    this.parent = null;
    this.size = 0;
    this.createdAt = new Date();
  }
  
  // Add child (file or folder)
  addChild(node) {
    if (!this.isDirectory) {
      throw new Error('Cannot add children to a file');
    }
    node.parent = this;
    this.children.push(node);
  }
  
  // Get full path
  getPath() {
    if (!this.parent) return this.name;
    return this.parent.getPath() + '/' + this.name;
  }
  
  // Find file/folder
  find(name) {
    if (this.name === name) return this;
    
    if (this.isDirectory) {
      for (let child of this.children) {
        const found = child.find(name);
        if (found) return found;
      }
    }
    return null;
  }
  
  // Calculate total size
  getTotalSize() {
    if (!this.isDirectory) return this.size;
    
    return this.children.reduce((total, child) => {
      return total + child.getTotalSize();
    }, 0);
  }
  
  // List directory contents
  ls() {
    if (!this.isDirectory) return null;
    
    return this.children.map(child => ({
      name: child.name,
      type: child.isDirectory ? 'folder' : 'file',
      size: child.isDirectory ? child.getTotalSize() : child.size
    }));
  }
}

// Create file system
const root = new FileSystemNode('/', true);
const users = new FileSystemNode('Users', true);
const john = new FileSystemNode('John', true);
const documents = new FileSystemNode('Documents', true);
const report = new FileSystemNode('report.pdf', false);
report.size = 1024 * 50; // 50KB

// Build tree
root.addChild(users);
users.addChild(john);
john.addChild(documents);
documents.addChild(report);

// Use the file system
console.log(report.getPath()); // /Users/John/Documents/report.pdf
console.log(john.getTotalSize()); // 51200 bytes`,
        explanation: 'The tree structure perfectly represents the hierarchical nature of file systems, making navigation and organization intuitive.'
      }
    ],
    exercises: [
      {
        id: 'tree-ex-1',
        question: 'Implement a method to find all files with a specific extension in the file system tree.',
        hints: [
          'Use tree traversal to visit all nodes',
          'Check if node is a file and has the desired extension',
          'Collect all matching files in an array'
        ],
        solution: {
          language: 'javascript',
          code: `findFilesByExtension(extension) {
  const results = [];
  
  function traverse(node) {
    if (!node.isDirectory) {
      // Check if file has the extension
      if (node.name.endsWith(extension)) {
        results.push({
          name: node.name,
          path: node.getPath(),
          size: node.size
        });
      }
    } else {
      // Traverse all children
      for (let child of node.children) {
        traverse(child);
      }
    }
  }
  
  traverse(this);
  return results;
}

// Usage
const pdfFiles = root.findFilesByExtension('.pdf');
console.log(pdfFiles); // All PDF files in the system`,
          explanation: 'Tree traversal allows us to visit every node and collect files matching our criteria.'
        },
        testCases: [
          {
            input: 'findFilesByExtension(".pdf")',
            output: '[{ name: "report.pdf", path: "/Users/John/Documents/report.pdf", size: 51200 }]'
          }
        ]
      }
    ],
    timeComplexity: 'O(log n) for balanced trees, O(n) worst case',
    spaceComplexity: 'O(n)'
  },

  // Graph - Social Network
  {
    id: 'graph-social-network',
    title: 'Graphs: Social Networks',
    category: categories[3],
    difficulty: 'intermediate',
    description: 'Graphs represent connections between entities - like your social media connections!',
    realLifeExample: {
      title: 'Facebook Friend Network',
      scenario: 'On Facebook, each person is a node, and friendships are edges connecting nodes. Features like "People You May Know" use graph algorithms to find friends of friends.',
      explanation: 'Graph traversal algorithms help find shortest paths (degrees of separation), detect communities (friend groups), and suggest new connections based on mutual friends.'
    },
    code: [
      {
        language: 'javascript',
        code: `class SocialNetwork {
  constructor() {
    // Adjacency list representation
    this.users = new Map();
  }
  
  // Add a user
  addUser(name) {
    if (!this.users.has(name)) {
      this.users.set(name, new Set());
      console.log(\`User \${name} joined the network\`);
    }
  }
  
  // Add friendship (undirected edge)
  addFriendship(user1, user2) {
    this.addUser(user1);
    this.addUser(user2);
    
    this.users.get(user1).add(user2);
    this.users.get(user2).add(user1);
    
    console.log(\`\${user1} and \${user2} are now friends\`);
  }
  
  // Find mutual friends
  getMutualFriends(user1, user2) {
    const friends1 = this.users.get(user1) || new Set();
    const friends2 = this.users.get(user2) || new Set();
    
    const mutual = [];
    for (let friend of friends1) {
      if (friends2.has(friend)) {
        mutual.push(friend);
      }
    }
    
    return mutual;
  }
  
  // Find degrees of separation (BFS)
  findDegreesOfSeparation(start, target) {
    if (!this.users.has(start) || !this.users.has(target)) {
      return -1;
    }
    
    const queue = [[start, 0]];
    const visited = new Set([start]);
    
    while (queue.length > 0) {
      const [current, distance] = queue.shift();
      
      if (current === target) {
        return distance;
      }
      
      for (let friend of this.users.get(current)) {
        if (!visited.has(friend)) {
          visited.add(friend);
          queue.push([friend, distance + 1]);
        }
      }
    }
    
    return -1; // Not connected
  }
  
  // Suggest friends (friends of friends)
  suggestFriends(user) {
    if (!this.users.has(user)) return [];
    
    const suggestions = new Map();
    const userFriends = this.users.get(user);
    
    // Check friends of friends
    for (let friend of userFriends) {
      for (let friendOfFriend of this.users.get(friend)) {
        // Skip if it's the user or already a friend
        if (friendOfFriend !== user && !userFriends.has(friendOfFriend)) {
          const count = suggestions.get(friendOfFriend) || 0;
          suggestions.set(friendOfFriend, count + 1);
        }
      }
    }
    
    // Sort by number of mutual friends
    return Array.from(suggestions.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([name, mutualCount]) => ({ name, mutualFriends: mutualCount }));
  }
}

// Usage
const network = new SocialNetwork();

// Add users and friendships
network.addFriendship('Alice', 'Bob');
network.addFriendship('Alice', 'Charlie');
network.addFriendship('Bob', 'David');
network.addFriendship('Charlie', 'David');
network.addFriendship('David', 'Eve');

// Find mutual friends
console.log(network.getMutualFriends('Alice', 'Bob')); // []
console.log(network.getMutualFriends('Bob', 'Charlie')); // ['Alice', 'David']

// Find degrees of separation
console.log(network.findDegreesOfSeparation('Alice', 'Eve')); // 3

// Suggest friends for Alice
console.log(network.suggestFriends('Alice'));
// [{ name: 'David', mutualFriends: 2 }]`,
        explanation: 'The social network graph uses an adjacency list to store connections efficiently. BFS helps find shortest paths (degrees of separation), while graph traversal enables friend suggestions.'
      }
    ],
    exercises: [
      {
        id: 'graph-ex-1',
        question: 'Implement a method to find all users within N degrees of separation from a given user.',
        hints: [
          'Use BFS but track the distance from the starting user',
          'Stop exploring when you reach distance N',
          'Return all users found within that distance'
        ],
        solution: {
          language: 'javascript',
          code: `findUsersWithinDegrees(user, maxDegrees) {
  if (!this.users.has(user)) return [];
  
  const result = [];
  const queue = [[user, 0]];
  const visited = new Set([user]);
  
  while (queue.length > 0) {
    const [current, distance] = queue.shift();
    
    if (distance > 0 && distance <= maxDegrees) {
      result.push({ user: current, degrees: distance });
    }
    
    if (distance < maxDegrees) {
      for (let friend of this.users.get(current)) {
        if (!visited.has(friend)) {
          visited.add(friend);
          queue.push([friend, distance + 1]);
        }
      }
    }
  }
  
  return result;
}`,
          explanation: 'BFS naturally explores nodes level by level, making it perfect for finding all users within a certain distance.'
        },
        testCases: [
          {
            input: 'findUsersWithinDegrees("Alice", 2)',
            output: '[{ user: "Bob", degrees: 1 }, { user: "Charlie", degrees: 1 }, { user: "David", degrees: 2 }]'
          }
        ]
      }
    ],
    timeComplexity: 'O(V + E) for traversal',
    spaceComplexity: 'O(V) for adjacency list'
  }
];