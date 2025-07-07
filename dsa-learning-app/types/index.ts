export interface Concept {
  id: string;
  title: string;
  category: Category;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  realLifeExample: RealLifeExample;
  visualization?: Visualization;
  code: CodeExample[];
  exercises: Exercise[];
  timeComplexity?: string;
  spaceComplexity?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface RealLifeExample {
  title: string;
  scenario: string;
  explanation: string;
  visual?: string;
}

export interface Visualization {
  type: 'animation' | 'diagram' | 'interactive';
  component: string;
  props?: any;
}

export interface CodeExample {
  language: 'javascript' | 'typescript' | 'python';
  code: string;
  explanation: string;
}

export interface Exercise {
  id: string;
  question: string;
  hints: string[];
  solution: CodeExample;
  testCases: TestCase[];
}

export interface TestCase {
  input: any;
  output: any;
  explanation?: string;
}

export interface UserProgress {
  conceptId: string;
  completed: boolean;
  exercisesCompleted: string[];
  lastAccessed: Date;
}