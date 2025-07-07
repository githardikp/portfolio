# DSA Learning App

Learn Data Structures and Algorithms through real-life examples and interactive visualizations.

## 🚀 Features

- **Real-Life Examples**: Every DSA concept is explained through familiar, everyday scenarios
- **Interactive Learning**: Visualize how algorithms work with step-by-step demonstrations
- **Hands-On Practice**: Solve practical exercises with hints and solutions
- **Progress Tracking**: Monitor your learning journey

## 📚 Topics Covered

### Data Structures
- **Arrays & Lists**: Shopping cart examples
- **Stacks**: Browser history navigation
- **Queues**: Printer queue management
- **Trees**: File system organization
- **Graphs**: Social networks and connections
- **Hash Tables**: Phone contact lists

### Algorithms
- **Sorting**: Organizing items efficiently
- **Searching**: Finding information quickly (dictionary lookup)
- **Dynamic Programming**: Breaking down complex problems

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dsa-learning-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dsa-learning-app/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Landing page
│   ├── category/[id]/       # Category detail pages
│   └── concept/[id]/        # Concept detail pages
├── components/              # React components
│   ├── Hero.tsx            # Landing page hero section
│   ├── CategoryCard.tsx    # Category display card
│   ├── ConceptCard.tsx     # Concept display card
│   ├── CodeExample.tsx     # Code snippet display
│   └── ExerciseSection.tsx # Interactive exercises
├── lib/data/               # DSA content data
│   ├── categories.ts       # Category definitions
│   └── concepts.ts         # Concept definitions with examples
├── types/                  # TypeScript type definitions
└── public/                 # Static assets
```

## 🎯 Usage

1. **Browse Categories**: Start from the homepage and explore different DSA categories
2. **Select a Concept**: Click on any concept card to dive deeper
3. **Learn Through Examples**: Read real-life scenarios that explain the concept
4. **Study Code**: Review implementation examples in multiple languages
5. **Practice**: Solve exercises with hints and check solutions

## 🤝 Contributing

Feel free to contribute by:
- Adding new DSA concepts
- Improving existing examples
- Creating interactive visualizations
- Adding more exercises
- Fixing bugs or improving UI/UX

## 📝 License

This project is licensed under the ISC License.