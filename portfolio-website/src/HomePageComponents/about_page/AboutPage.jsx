import React from 'react'
import Footer from '../footer/Footer'

import './about.css'

import Tabs from "./Tabs/Tabs";

import { IoIosConstruct } from 'react-icons/io'

import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { GrGatsbyjs } from 'react-icons/gr'
import { SiFlutter } from 'react-icons/si'
import { FaSwift } from 'react-icons/fa'
import { SiXcode } from 'react-icons/si'
import { SiXamarin } from 'react-icons/si'
import { SiKotlin } from 'react-icons/si'

import { AiFillAndroid } from 'react-icons/ai'
import { SiIos } from 'react-icons/si'
import { GrWindows } from 'react-icons/gr'
import { DiLinux } from 'react-icons/di'
import { AiFillMacCommand } from 'react-icons/ai'
import { FcCommandLine } from 'react-icons/fc'

import { AiOutlineGithub } from 'react-icons/ai'
import { VscAzure } from 'react-icons/vsc'
import { SiGooglecloud } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

import { FaJava } from 'react-icons/fa'
import { SiCplusplus } from 'react-icons/si'
import { FaPython } from 'react-icons/fa'
import { SiRuby } from 'react-icons/si'
import { SiCloudera } from 'react-icons/si'
import { RiComputerLine } from 'react-icons/ri'
import { SiDart } from 'react-icons/si'
import { IoLogoSass } from 'react-icons/io'
import { SiNextdotjs } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'

import { BiGitBranch } from 'react-icons/bi'
import { SiReactrouter } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'
import { FaVuejs } from 'react-icons/fa'
import { VscNotebook } from 'react-icons/vsc'
import { BsMarkdownFill } from 'react-icons/bs'
import { SiLatex } from 'react-icons/si'
import { SiAdobexd } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { SiAdobephotoshop } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

import { SiGoland } from 'react-icons/si'

import { SiMicrosoftoffice, SiMicrosoftaccess } from 'react-icons/si'
import { RiFileExcel2Fill, RiFileWord2Fill, } from 'react-icons/ri'

import { SiRedux } from 'react-icons/si'

import { FaRust, FaAngular } from 'react-icons/fa'

import {
  SiElectron, SiVite, SiRubyonrails, SiNumpy, SiSourcegraph, SiGraphql, SiPandas,
  SiSympy, SiScipy, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiKubernetes
} from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'

import { GiProcessor } from 'react-icons/gi'

import { SiVisualstudio, SiEclipseide, SiVisualstudiocode, SiPycharm } from 'react-icons/si';
import { DiAtom, DiVim } from 'react-icons/di'

import { VscRegex } from 'react-icons/vsc'

import { IoArrowBack } from 'react-icons/io5'

import ME from '../../assets/AmanPhoto.jpg'
import TRAVEL from '../../assets/Travel.jpg'
import SHADOW from '../../assets/shadow.png'

import { Link } from 'gatsby';

const WebTech = [
  {
    label: "HTML",
    icon: <AiFillHtml5 />,
  }, {
    label: "CSS",
    icon: <FaCss3 />,
  }, {
    label: "JavaScript",
    icon: <SiJavascript />,
  }, {
    label: "React",
    icon: <FaReact />,
  }, {
    label: "Node",
    icon: <IoLogoNodejs />,
  }, {
    label: "Gatsby",
    icon: <GrGatsbyjs />
  }, {
    label: "SASS",
    icon: <IoLogoSass />,
  }, {
    label: "Next.js",
    icon: <SiNextdotjs />,
  }, {
    label: "Bootstrap",
    icon: <FaBootstrap />,
  }, {
    label: "Express.JS",
    icon: <SiExpress />,
  }, {
    label: "Vue.JS",
    icon: <FaVuejs />,
  }, {
    label: "Go",
    icon: <SiGoland />,
  }, {
    label: "Rust",
    icon: <FaRust />,
  }, {
    label: "Angular",
    icon: <FaAngular />,
  }
]

const mobileTech = [
  {
    label: "React Native",
    icon: <FaReact />,
  }, {
    label: "Flutter",
    icon: <SiFlutter />,
  }, {
    label: "Xcode",
    icon: <SiXcode />,
  }, {
    label: "Swift",
    icon: <FaSwift />,
  }, {
    label: "Xamarin",
    icon: <SiXamarin />,
  }, {
    label: "koltin",
    icon: <SiKotlin />,
  }, {
    label: "Dart",
    icon: <SiDart />,
  }
]

const platformsTech = [
  {
    label: "Android",
    icon: <AiFillAndroid />,
  }, {
    label: "iOS",
    icon: <SiIos />,
  }, {
    label: "Windows",
    icon: <GrWindows />,
  }, {
    label: "Linux",
    icon: <DiLinux />,
  }, {
    label: "Mac",
    icon: <AiFillMacCommand />,
  }, {
    label: "unix",
    icon: <FcCommandLine />,
  }, {
    label: "Adobe XD",
    icon: <SiAdobexd />,
  }, {
    label: "Figma",
    icon: <FiFigma />,
  }, {
    label: "Adobe Photoshop",
    icon: <SiAdobephotoshop />,
  }
]

const FrameworksTech = [
  {
    label: "Github",
    icon: <AiOutlineGithub />,
  }, {
    label: "Azure",
    icon: <VscAzure />,
  }, {
    label: "Google Cloud",
    icon: <SiGooglecloud />,
  }, {
    label: "Firebase",
    icon: <SiFirebase />,
  }, {
    label: "AWS",
    icon: <FaAws />,
  }, {
    label: "Git",
    icon: <BiGitBranch />,
  }, {
    label: "React Router",
    icon: <SiReactrouter />,
  }, {
    label: "Python Nodebooks",
    icon: <VscNotebook />,
  }, {
    label: "Redux",
    icon: <SiRedux />,
  }, {
    label: "ELectron",
    icon: <SiElectron />,
  }, {
    label: "Vite",
    icon: <SiVite />,
  }, {
    label: "Ruby on Rails",
    icon: <SiRubyonrails />,
  }, {
    label: "GraphQl",
    icon: <SiGraphql />,
  }, {
    label: "kubernetes",
    icon: <SiKubernetes />,
  }
]

const Codinglanguages = [
  {
    label: "Java",
    icon: <FaJava />,
  }, {
    label: "C++",
    icon: <SiCplusplus />,
  }, {
    label: "Python",
    icon: <FaPython />,
  }, {
    label: "Ruby",
    icon: <SiRuby />,
  }, {
    label: "C",
    icon: <SiCloudera />,
  }, {
    label: "ARMAssembly",
    icon: <GiProcessor />,
  }, {
    label: "markdown",
    icon: <BsMarkdownFill />,
  }, {
    label: "LaTeX",
    icon: <SiLatex />,
  }, {
    label: "SQL",
    icon: <GrMysql />,
  }, {
    label: "MongoDB",
    icon: <DiMongodb />,
  }, {
    label: "Regex",
    icon: <VscRegex />,
  }
]

const officeTech = [
  {
    label: "Microsoft Office",
    icon: <SiMicrosoftoffice />,
  }, {
    label: "Microsoft Access",
    icon: <SiMicrosoftaccess />,
  }, {
    label: "Excel (certified)",
    icon: <RiFileExcel2Fill />,
  }, {
    label: "Word (certified)",
    icon: <RiFileWord2Fill />,
  }
]

const pythonModules = [
  {
    label: "Numpy",
    icon: <SiNumpy />,
  }, {
    label: "Matplotlib",
    icon: <SiSourcegraph />,
  }, {
    label: "Pandas",
    icon: <SiPandas />,
  }, {
    label: "SymPy",
    icon: <SiSympy />,
  }, {
    label: "SciPy",
    icon: <SiScipy />,
  }, {
    label: "TensorFlow",
    icon: <SiTensorflow />,
  }, {

    label: "Pytorch",
    icon: <SiPytorch />,
    // },{
    //   label: "Keras",
    //   icon: "",
  }, {
    label: "Scikit-Learn",
    icon: <SiScikitlearn />,
  }, {
    label: "opencv",
    icon: <SiOpencv />,
  }
]

const CondingPlatforms = [
  {
    label: "Visual Studio",
    icon: <SiVisualstudio />,
  }, {
    label: "Eclipse",
    icon: <SiEclipseide />,
  }, {
    label: "Visual Studio Code",
    icon: <SiVisualstudiocode />,
  }, {
    label: "Atom",
    icon: <DiAtom />,
  }, {
    label: "Vim",
    icon: <DiVim />,
  }, {
    label: "Pycharm",
    icon: <SiPycharm />,
  }
]

const fall2020 = [
  {
    id: 1,
    courseName: 'EGR 100 Intro to Engineering Design',
    credits: '2',
    Semester: 'Fall 2020',
    Projects: ['Mit App Inventor', 'Phone Case'],
    Content: [],
    Desc: "Engineering design process as modeled by team-based, interdisciplinary design projects. Roles of engineers and the contributions of engineering in society. Project management, creativity and design of products and processes to specified outcomes under specified constraints. Introduction to computing tools and physical equipment in support of engineering design.",
    tags: ['Design', 'Engineering', 'Fundamentals'],
  },
  {
    id: 3,
    courseName: 'MTH 132 Calculus I',
    credits: '3',
    Semester: 'Fall 2020',
    Projects: [], //need to fill this
    Content: [], // need to fill this
    Desc: "Basic calc didn't have to break a sweat. Limits, continuous functions, derivatives and their applications. Integrals and the fundamental theorem of calculus.",
    tags: ['Math', 'Calculus', 'Engineering'],
  },
  {
    id: 4,
    courseName: 'PHY 183 Physics I Mechanics',
    credits: '4',
    Semester: 'Fall 2020',
    Projects: [],
    Content: [],
    Desc: "Not so basic Physics. Was Fun tho. Mechanics, Newton's laws, momentum, energy conservation laws, rotational motion, oscillation, gravity, and waves.",
    tags: ['Physics', 'Mechanics', 'Engineering'],
  },
  {
    id: 5,
    courseName: 'WRA 491 iOS Design Lab',
    credits: '3',
    Semester: 'Fall 2020',
    Projects: [],
    Content: [],
    Desc: "In partnership with Apple, collaborated with other lab members to design and code mobile apps!",
    tags: ['iOS', 'Design', 'Development', 'Swift', "Xcode", "entrepreneurship", "Apple"],
  }]

const spring2021 = [
  {
    id: 2,
    courseName: 'ESHP 190 The Art of Starting',
    credits: '3',
    Semester: 'Spring 2021',
    Projects: ["Startup Weekend"],// fill this
    Content: ["Business Efficiency Analysis"],// fill this
    Desc: "Learned about the entrepreneurial mindset and the venture creation process. Foundation for getting a venture started, and understanding of what it takes to be an entrepreneur.",
    tags: ["Entrepreneurship", "Business", "Startup"],
  },
  // {
  //   id: 3,
  //   courseName: 'IAH 202 Europe and the World',
  //   credits : '4',
  //   Semester: 'Spring 2021',
  //   Projects: [],
  //   tags: [],
  //   // probally remove this
  // },
  {
    id: 3,
    courseName: 'MTH 132 Calculus II',
    credits: '4',
    Semester: 'Spring 2021',
    Projects: [], // fill this
    Content: [],
    Desc: "My favorite Calc by far. Applications of the integral and methods of integration. Improper integrals. Polar coordinates and parametric curves. Sequences and series. Power series.",
    tags: ["Math", "Calculus", "Engineering"],
  },
  {
    id: 1,
    courseName: 'CSE 232 Intro To Programming II',
    credits: '4',
    Semester: 'Spring 2021',
    Projects: ["Special Characters kinda like RegEx", "Bank Transactions Platform", "Crypto Trading"],
    Content: ["C++", "Data Abstraction", "Classes", "Memory Allocation"], //fill this later
    Desc: "A lot of Coding. Back when C++ was my favorite language. Learned Object-centered design and implementation in C++. Building programs from modules. Data abstraction and classes to implement abstract data types. Static and dynamic memory allocation. Data structure implementation and algorithm efficiency. Lists, tables, stacks, and queues. Templates and generic programming.",
    tags: ["C++", "Computer Science", "Programming"],
  }]

const clubsFall2020 = [{
  id: 1,
  courseName: 'iOS Club',
  credits: 'Club',
  Semester: 'Spring 2021',
  Projects: [], // fill this
  Content: [], //fill this later
  Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tags: ["iOS", "Design", "Development", "Swift", "Xcode", "Apps"],
}]

const clubsSpring2021 = [{
  id: 1,
  courseName: 'Engineering Student Council',
  credits: 'Club',
  Semester: 'Spring 2021',
  Projects: [],
  Content: [],
  Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tags: [],
}]

const fall2021 = [
  {
    id: 11,
    courseName: 'CAS 114 Creativity & Entrepreneurship',
    credits: '3',
    Semester: 'Fall 2021',
    Projects: [],
    Content: [],
    Desc: "One of my Favorite Classes. Thanks to prof @Amy Haimerl. Learned about creative processes, complex problem solving and innovative entrepreneurship. Examination of successful social, cultural and corporate thinkers and creators. Activities focused on inquiry, observation, experimentation and networking for situational problem solving.",
    tags: ["Creativity", "Entrepreneurship", "Business", "Startup"],
  }, {
    id: 12,
    courseName: 'CSE 260 Discrete Structures',
    credits: '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: ["Set Theory", "Probability"], //fill this later
    Desc: "Fun CS Proofs Class. Propositional and first order logic. Equivalence and methods of proof. Basics of counting. Set operations, relations, functions. Grammars and finite state automata. Discrete probability. Applications to computer science and engineering.",
    tags: ["Discrete Structures", "Computer Science", "Programming", "Math"],
  },
  {
    id: 13,
    courseName: 'MTH 234 Calculus III (Multivariable)',
    credits: '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: ["Vectors", "More Vectors", "A bunch of integrals stacked", "Greens Theorm", "Stokes Theorm"], //fill this later
    Desc: "A lot of intresting 3D math. Atleast i didn't have to prove anything... yet. Vectors in space. Functions of several variables and partial differentiation. Multiple integrals. Line and surface integrals. Green's and Stokes's theorems.",
    tags: ['Math', 'Calculus', 'Engineering', 'Multivariable', 'Computer Science'],
  },
  {
    id: 14,
    courseName: 'MTH 299 Introduction to Formal Proofs(Transitions)',
    credits: '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: ["Set Theory", "Proofs using Induction", "Proofs using Contradiction", "Other Proofs..."], //fill this later
    Desc: "Started solving long proofs. Introduction to mathematical reasoning, basic logic, set theory, integers, natural numbers and induction, basic number theory, real numbers, limits, sequences, series.",
    tags: ['Math', 'Formal Proofs'],
  }, {
    id: 15,
    courseName: 'MTH 314 Matrix Algebra',
    credits: '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: ["Vectors", "Linear Transformations", "Steady State", "Matrices!!! A lot of them"], //fill this later
    Desc: "We can make computers do a bunch of math faster. yaaaaay!!!! Vectors, matrices, linear transformations, inner products, dimension, eigenvalues and eigenvectors. Applications to systems of equations and to geometry.",
    tags: ['Math', 'Linear Algebra', 'Computer Science', 'Python', 'Math', "NumPy", "SciPy", "Matplotlib", "SymPy"],
  }]

const workFall2021 = [{
  id: 16,
  courseName: 'ICER Institute for Cyber Enabled Research',
  credits: 'Work',
  Semester: 'Fall 2021',
  Projects: [],
  Content: [],
  Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tags: ['Ruby', 'Front-end', 'git'],
}, {
  id: 17,
  courseName: 'ULA Undergraduate Learning Assistant MTH',
  credits: 'Work',
  Semester: 'Fall 2021',
  Projects: [],
  Content: [],
  Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tags: ['Math', "Teaching Assistant"],
}]

const spring2022 = [
  {
    id: 18,
    courseName: 'CSE 320 Computer Organization and Architecture',
    credits: '3',
    Semester: 'Spring 2022',
    Projects: ['Game of Life in Assembly', 'Fractals in Assembly', "built an ALU", "built a CPU"],
    Content: ['Circuit Design', 'Microprocessor', 'Assembly Language', 'Computer Architecture'],
    Desc: "Learned about concepts in architecture such as digial electronics, Optimization of Circuits, essential Concepts of Memory Management in C, and Writing Assembly Language Programs.",
    tags: ['ARM Assembly', 'Computer Architecture', 'Computer Science', 'Programming', 'Circuit Design'],
  }, {
    id: 19,
    courseName: 'CSE 331 Data Structures and Algorithms',
    credits: '4',
    Semester: 'Spring 2022',
    Projects: ["Kadane algorithm", "Moore's Voting algo", "A* search", "Dijkstra's algorithm"],// fill this
    Content: ['Linked Lists', 'Binary Trees', 'Trees', 'Graphs', 'Heaps', 'Hash Tables'], //fill this later
    Desc: "Learned about data structures and algorithms to solve problems. Optimized the algorithms to gain efficiency.",
    tags: ['Data Structures', 'Algorithms', 'Computer Science', 'Programming'],
  }, {
    id: 20,
    courseName: 'MTH 235 Differential Equations',
    credits: '3',
    Semester: 'Spring 2022',
    Projects: [], // fill this
    Content: ["Ordinary Differential Equation", "Partial Differential Equation", "Secord and Third order ODE's", "Laplace Transform"], //fill this later
    Desc: "Solved a lot of long problems. SMH. Separable and exact equations. Linear equations and variation of parameters. Higher order linear equations. Laplace transforms. Systems of first-order linear equations. Introduction to partial differential equations and Fourier series.",
    tags: ['Math', 'Differential Equations'],
  }, {
    id: 21,
    courseName: 'MTH 310 Abstract Algebra',
    credits: '3',
    Semester: 'Spring 2022',
    Projects: [], // fill this
    Content: ["Rings", "Groups", "Ideals", "Congruence", "Modular Arithmetic"], //fill this later
    Desc: "Proved a lot of long proofs. Structure of the integers, congruences, polynomial rings, and ideals. With applications in cryptography.",
    tags: ['Math', 'Abstract Algebra', 'Cryptography'],
  }]

const fall2022 = [{
  id: 22,
  courseName: 'CMSE 201 Computational Modeling and Data Analysis I',
  credits: '4',
  Semester: 'Fall 2022',
  Projects: [], // fill this
  Content: ['Numpy', 'Agent Based Modeling', `Modeling with ODE's(Ordinary Differential Equations)`, 'Data Prediction'], //fill this later
  Desc: "Formally learned python. learned techniques for computational modeling and data analysis including NumPy, agent-based modeling, modeling with ordinary differential equations, and data prediction.",
  tags: ['Data Analysis', 'Computer Science', 'Programming'],
}, {
  id: 23,
  courseName: 'CSE 300 Ethics in Computer Science',
  credits: '1',
  Semester: 'Fall 2022',
  Projects: ['Ethics in AI', 'Ethics in Software Development', 'Privacy of Users'],
  Content: ['Intellectual Property', 'Privacy', 'Professional Ethics', 'Social Implications of Computing', 'Freedom of Speech'],
  Desc: "Learned about all the ways technology can go horribly wrong if you don't consider ethics. Examined ethical issues in computer science including intellectual property, privacy, professional ethics, social implications of computing, and freedom of speech.",
  tags: ['Ethics', 'Computer Science', 'Programming'],
}, {
  id: 24,
  courseName: 'CSE 325 Computer Systems',
  credits: '3',
  Semester: 'Fall 2022',
  Projects: ['Caching', 'Signals and Processes', 'Pthreads and Deadlocks'],
  Content: ['Architecture', 'Operating Systems', 'Concurrency', 'Memory Management', 'Networking'],
  Desc: "Yaaaaah. First CS Lecture Class. Studied key concepts in computer systems including architecture, operating systems, concurrency, memory management, and networking.",
  tags: ['Computer Systems', 'Computer Science', 'Programming'],
}, {
  id: 25,
  courseName: 'CSE 335 Software Design and Development',
  credits: '4',
  Semester: 'Fall 2022',
  Projects: ['Angry Sparty', `Harold's Magic Musical Machine`],
  Content: [`Software Development`, `Software Design`, `Software Testing`, `Software Implementation`, `Software Maintenance`, `Object Oriented Programming`, `Design Patterns`],
  Desc: "Spent many sleepless nights debugging complex software projects. Applied software engineering principles and design patterns through team projects and assignments. Gained experience with the full software development lifecycle",
  tags: ['Software Development', 'Computer Science', 'Programming'],
}, {
  id: 26,
  courseName: 'MTH 310 Abstract Algebra',
  credits: '3',
  Semester: 'Fall 2022',
  Projects: [],
  Content: ['Arithmetic', 'Algebraic Structures', 'Polynomials', 'Fields', 'Galois Theory', 'Rings', `Fermat's theorem`, `Modular arithmetic`],
  Desc: "we have come far from counting just sheep. Studied abstract algebraic structures including groups, rings, fields, and polynomials. Proved theorems related to these structures. Applied concepts such as Fermat's theorem and modular arithmetic.",
  tags: ['Math', 'Abstract Algebra', 'Cryptography'],

}, {
  id: 27,
  courseName: 'STT 351 Probability and Statistics',
  credits: '3',
  Semester: 'Fall 2022',
  Projects: ['Probability Distributions', 'Conditional Probability', 'Regression', 'Variance', 'Hypothesis Testing', 'Confidence Intervals'],
  Content: [],
  Desc: "Fancy fortune telling. Gained an understanding of probability, random variables, expectation, distribution functions, hypothesis testing, regression, correlation, analysis of variance, and design of experiments.",
  tags: ["Computer Science", "Statistics", "Probability"],
}]

const spring2023 = [
  {
    id: 28,
    courseName: 'CMSE 202 Computational Modeling and Data Analysis II',
    credits: '4',
    Semester: 'Spring 2023',
    Projects: ['catan using genetic algorithm', 'machine learning prediction for rainfall'],
    Content: ['Object Oriented Programing', 'Version Control (git)', 'Reading and Creating Documentation', 'Comand Line interfacing', 'Plotting', 'Visualization', "signal processing" ,"graph theory", "machine learning", "image analysis", "Pandas", "Agent Based Modeling", "Regression Logistic, single and Multi", "Support Vector Machine", "Principal component analysis", ],
    Desc: "Apply Object Oriented Programming to build computational models and analyze complex data sets. Learn techniques like machine learning, data visualization, and simulation modeling to extract insights from data.",
    tags: ['Data Analysis', 'Computer Science', 'Programming'],
  }, {
    id: 29,
    courseName: 'CSE 830 Design and Theory of Algorithms',
    credits: '3',
    Semester: 'Spring 2023',
    Projects: ['Performace Analysis Report', 'Algorithm Design Report'],
    Content: ['Asymptotic Analysis', 'Divide and Conquer', 'Dynamic Programming', 'Greedy Algorithms', 'Graph Algorithms', 'NP Completeness', 'Approximation Algorithms'],
    Desc: "Study advanced algorithms and analyze their complexity and performance. Learn techniques like dynamic programming, greedy algorithms, and graph algorithms to design efficient solutions.",
    tags: ['Algorithms', 'Computer Science', 'Programming'],
  }, {
    id: 30,
    courseName: 'CSE 860 Foundations of Computer Science',
    credits: '3',
    Semester: 'Spring 2023',
    Projects: ['Presentations', 'Proofs', 'Reductions'],
    Content: ['Finite Automata', 'Regular Expressions', 'Turing Machines', 'Decidability', 'Complexity Theory', 'NP Completeness', 'P and NP', 'Reductions', ],
    Desc: "Learn foundations of computation including automata, computability, and complexity theory. Study important concepts like NP-completeness and reductions between computational problems.",
    tags: ['Computer Science', 'Math', 'Theory of Computation'],
  }, {
    id: 31,
    courseName: 'MTH 320 Analysis I',
    credits: '3',
    Semester: 'Spring 2023',
    Projects: [],
    Content: ['Sequences', 'Series', 'Topology', 'Continuity', 'Differentiation', 'Integration', 'Metric Spaces', 'Convergence', 'Compactness', 'Connectedness', 'Uniform Continuity', 'Uniform Convergence', 'Power Series', 'Fourier Series', 'Differentiation of Functions of Several Variables',  'Stokes Theorem'],
    Desc: "Learn foundations of computation including automata, computability, and complexity theory. Study important concepts like NP-completeness and reductions between computational problems.",
    tags: ['Math', 'Analysis I', 'Proofs'],
  }];



const HighSchool = [
  {
    id: 1,
    courseName: 'AP Computer Science',
    credits: '4',
    Semester: '2019',
    Projects: ["Bric Breaker", "Tic Tac Toe", "Fractals"],
    Content: ["CPP", "Java", "Object Oriented Programming", "Data Structures", "Algorithms", "Recursion", "Sorting"],
    Desc: "Learned fundamentals of programming and computer science concepts like data structures, algorithms, and object-oriented programming using Java. Completed projects like text-based games, and graphics programs",
    tags: ['AP', 'Computer Science', 'Programming'],
  }, {
    id: 2,
    courseName: 'AP Physics',
    credits: '4',
    Semester: '2019',
    Projects: [],
    Content: ["Mechanics", "Electricity", "Magnetism", "Optics", "Modern Physics", "Quantum Physics"],
    Desc: "Studied concepts of classical and modern physics including mechanics, electricity, magnetism, optics, and modern physics. Performed hands-on lab experiments and solved complex theoretical problems.",
    tags: ['AP', 'Physics'],
  }, {
    id: 3,
    courseName: 'AP Calculus',
    credits: '4',
    Semester: '2019',
    Projects: [],
    Content: ["Limits", "Derivatives", "Integrals", "Series"],
    Desc: "Covered concepts of differential and integral calculus including limits, derivatives, integrals, and series",
    tags: ['Math', 'AP', 'Calculus'],
  }, {
    id: 4,
    courseName: 'Advanced Business',
    credits: '4',
    Semester: '2020',
    Projects: [],
    Content: [],
    Desc: "Learned foundations of business including marketing, finance, management, and entrepreneurship.",
    tags: ['Business'],
  }]

const clubsHS = [
  {
    id: 1,
    courseName: 'Computer Science Club',
    credits: 'Club',
    Semester: '2018-2020',
    Projects: [],
    Content: ['Threads', 'Networking', 'Operating Systems', 'Computer Architecture', 'Computer Science'],
    Desc: "Learned more advanced computer science concepts beyond the classroom curriculum. ",
    tags: ['Computer Science', 'Programming'],
  }, {
    id: 2,
    courseName: 'Electronics Club',
    credits: 'Club',
    Semester: '2016-2020',
    Projects: [],
    Content: ['Electronics', 'Soldering', 'Circuits', 'Troubleshooting', 'HAM Radio',],
    Desc: "Designed and built electronic circuits and devices. Gained hands-on experience with soldering, testing equipment, and troubleshooting issues.",
    tags: ['Electronics'],
  }, {
    id: 3,
    courseName: 'FIRST Robotics Club 5509',
    credits: 'Club',
    Semester: '2016-2020',
    Projects: ['Robotics', 'Engineering', 'Programming', 'CAD', 'Gamma Robot Steam Power', 'Delta Robot Power up', 'Eplison Robot Deep Space', 'Zeta Robot Infinite Rechage', 'FIRST', 'Deans List'],
    Content: [],
    Desc: "Part of robotics team that designed, built, fabricated, and programmed robots to compete in FIRST Robotics challenges. Learned engineering, teamwork, and problem solving.",
    tags: ['Robotics'],
  }, {
    id: 4,
    courseName: 'Business Professionals of America',
    credits: 'Club',
    Semester: '2020',
    Projects: ['Clean Energy Plan', 'Web Design', 'Fundraising', 'web development'],
    Content: [],
    Desc: "Studied business concepts and worked on leadership skills. Participated in business plan competitions, fundraising, and community service projects. Worked as part of web-design team",
    tags: ['Business'],
  }, {
    id: 5,
    courseName: 'Big Brothers and Big Sisters',
    credits: 'Club',
    Semester: '2017-2020',
    Projects: [],
    Content: [],
    Desc: "Volunteered as a mentor to provide guidance and support to younger students. Developed leadership, communication, and interpersonal skills.",
    tags: [],
  }

]




const AboutPage = () => {

  // make a function to go back a page

  return (
    <div>
      <section className='container1'>
        <br />
        <br />
        <Link to='/' className='btn backtoHome'> <IoArrowBack className='iconLower' /> Back</Link>
        <br />
        <h1>About</h1>
        <div className="MoreAbout__container">

          <div className='MoreAbout__me'  style={{marginTop: '2rem'}}>
            <div className='MoreAbout__me_img'>
              <img src={ME} />
            </div>
          </div>

          <div>
          <p> I was born and raised in India and moved to the United States when I was 13 years old. Prior to my move, I had the opportunity to live in several cities in India, including Hyderabad, Bangalore, and Vishakhapatnam. Each city had its own unique charm and cultural experiences, and I cherished the diverse perspectives and traditions I encountered while living there.</p>
          <p>After relocating to the United States, my family settled in Midland, Michigan. It was a significant transition for me, as I had to adapt to a new environment and lifestyle. Despite the initial challenges, I embraced the opportunity to explore a different country and immerse myself in its culture.</p>
          <p>Currently, I am pursuing my education in Computer Science and Mathematics at Michigan State University, located in the vibrant city of East Lansing. My interest in this field was sparked by my dad, who introduced me to the fascinating world of technology and programming. His passion for computers inspired me to pursue a career in computer science</p>
          
          </div>
        </div>
        <br />
        <div className="MoreAbout__container_R">

          

          <div>
          <h2 className='headingTag_activity'>When I am <span className='status_tab'> <span className='dot__active'/> Active</span>  at <span className='keyboard'>👨🏽‍💻</span>!</h2>
          
          <p>I currently work for Auto-Owners Insurance as Software Development Intern For Corporate Data Management (Lot of SQL). <br />During the semester, I am involved with Acadamic Governance, Teaching Assistantship for Computer Science Department in College of Engieering MSU, and Apple Design Lab. I have recently been working on reseach on Genetic Programing Code Synthesis with Dr.Banzaf and Abstract Algebra with Dr.Levin.   </p>
          
          <p>I actively participate in hackathons and pitch competitions. These events provide a platform for me to showcase my problem-solving skills, creativity, and teamwork in a fast-paced, collaborative environment. I thrive on the challenge of creating innovative solutions and pitching them to a panel of judges or potential investors. The intense and dynamic nature of these events fuels my passion for technology and entrepreneurship, pushing me to think outside the box and constantly learn and grow. </p>

          <p>My ultimate passion lies in crafting stories that deeply connect with people, and I've discovered that entrepreneurship provides me with the perfect avenue to continue sharing them.</p>
          {/* <p>Currently, I am pursuing my education in Computer Science and Mathematics at Michigan State University, located in the vibrant city of East Lansing. My interest in this field was sparked by my dad, who introduced me to the fascinating world of technology and programming. His passion for computers inspired me to pursue a career in computer science</p> */}

          </div>

          <div className='MoreAbout__me'>
            <div className='MoreAbout__me_img'>
              <img src={TRAVEL} />
            </div>
          </div>
        </div>

        <div className="MoreAbout__container" >

        <div className='MoreAbout__me' style={{marginTop: '5rem'}}>

          <div className='MoreAbout__me_img'>

            <img src={SHADOW} />
          </div>
        </div>

        <div>
          <br />
        <h2 className='headingTag_activity'>When I am <span className='status_tab'> <span className='dot__inactive'/> Away</span> from <span className='keyboard'>⌨️</span>!</h2>

        <p>I find joy in exploring new places and experiencing different cultures. Rather than relying solely on GPS or technology, I prefer the old-fashioned approach of engaging with locals and asking for directions. This not only allows me to navigate the unfamiliar terrain but also creates opportunities for meaningful connections and conversations along the way. I believe that these personal interactions enhance the richness of my travel experiences and provide a deeper understanding of the places I visit.</p>
        <p> I also enjoy casually playing ultimate frisbee. It's a sport that I find both fun and challenging, providing a great way to stay active and socialize with friends.</p>
        <p>Each year, I strive to acquire new skills and earn certifications. As a result, I have obtained a green belt in Judo, completed a Motorcycling Endorsement course, and learned how to sail.</p>
        <p>I have recently learned how to play euchre and I always welcome the opportunity to play a game. It's become a new hobby of mine, and I enjoy engaging in friendly matches whenever the opportunity arises.</p>

        </div>
        </div>

        <CollegePart />

        <Technologies />

        <br />
        <br />
        <br />
        <HighSchoolPart />
      </section>
      <Footer />
    </div>
  )
}

export default AboutPage


const HighSchoolPart = () => {

  return (
    <div>

      <h2 className='edu'>Midland High School</h2>
      <h3 className=''>High School Diploma</h3>
      <h5>2016-2020</h5>
      <br />

      <Tabs key={'Highschool'}>

        <div label="Courses">
          <h1 className='date'>High School Courses</h1>
          <h3>Upcoming</h3>
          <div className="Courses">
            {
              HighSchool.map((course, index) => {
                return (
                  <div className='course' key={index}>
                    <h3>{course.courseName}</h3>
                    <h4 className='centre'>{course.credits} Credits</h4>
                    <h4 className='centre'>{course.Semester}</h4>
                    <div className='Projects'>
                      {course.Projects.map((y) => <div className='project'>{y}</div>)}
                    </div>
                    <div className='contents__course'>
                      {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                    </div>
                    <h4 className='centre'>{course.Desc}</h4>
                    <div className='tags__course'>
                      {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                    </div>
                  </div>
                )
              }
              )
            }
          </div>

        </div>

        <div label='Extracirculars'>
          <h1 className='date' >Extracirculars</h1>
          <div className="Courses">
            {
              clubsHS.map((course, index) => {
                return (
                  <div className='course' key={index}>
                    <h3>{course.courseName}</h3>
                    <h4 className='centre'>{course.credits} Credits</h4>
                    <h4 className='centre'>{course.Semester}</h4>
                    <div className='Projects'>
                      {course.Projects.map((y) => <div className='project'>{y}</div>)}
                    </div>
                    <div className='contents__course'>
                      {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                    </div>
                    <h4 className='centre'>{course.Desc}</h4>
                    <div className='tags__course'>
                      {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                    </div>
                  </div>
                )
              }
              )
            }
          </div>
        </div>

      </Tabs>
    </div>
  );

}

const Technologies = () => {
  return (
    <>
      <h1>Tech I have worked with</h1>
      <h4 className='TechName'>Web Techonologies</h4>
      <div className='technologies'>
        {
          WebTech.map((tech, index) => {
            return (
              <div className='tech' key={index}>
                <h4><span>{tech.icon}</span> {tech.label}</h4>
              </div>
            )
          })
        }
      </div>

      <h4 className='TechName'>Mobile Techonologies</h4>
      <div className='technologies'>
        {
          mobileTech.map((tech, index) => {
            return (
              <div className='tech' key={index}>
                <h4><span>{tech.icon}</span> {tech.label}</h4>
              </div>
            )
          })
        }
      </div>

      <h4 className='TechName'>Platforms</h4>
      <div className='technologies'>
        {
          platformsTech.map((tech, index) => {
            return (
              <div className='tech' key={index}>
                <h4><span>{tech.icon}</span> {tech.label}</h4>
              </div>
            )
          })
        }
      </div>

      <h4 className='TechName'>Frameworks</h4>
      <div className='technologies'>
        {
          FrameworksTech.map((tech, index) => {
            return (
              <div className='tech' key={index}>
                <h4><span>{tech.icon}</span> {tech.label}</h4>
              </div>
            )
          })
        }
      </div>

      <h4 className='TechName'>Programing Languages</h4>
      <div className='technologies'>
        {
          Codinglanguages.map((tech, index) => {
            return (
              <div className='tech' key={index}>
                <h4><span>{tech.icon}</span> {tech.label}</h4>
              </div>
            )
          })
        }
      </div>


      <h4 className='TechName'>Python Libs</h4>
      <div className='technologies'>
        {
          pythonModules.map((tech, index) => {
            return (
              <div className='tech' key={index}>
                <h4><span>{tech.icon}</span> {tech.label}</h4>
              </div>
            )
          })
        }
      </div>

      <h4 className='TechName'>IDE's</h4>
      <div className='technologies'>
        {
          CondingPlatforms.map((tech, index) => {
            return (
              <div className='tech' key={index}>
                <h4><span>{tech.icon}</span> {tech.label}</h4>
              </div>
            )
          })
        }
      </div>

      <h4 className='TechName'>Other</h4>
      <div className='technologies'>
        {
          officeTech.map((tech, index) => {
            return (
              <div className='tech' key={index}>
                <h4><span>{tech.icon}</span> {tech.label}</h4>
              </div>
            )
          })
        }
      </div>
    </>
  );
}


const CollegePart = () => {

  return (
    <>
      <h1>Education</h1>

      <h2 className="edu">Michigan State University</h2>
      <h3 className='dipolama'>Bachelor of Science in Computer Science and Mathematics</h3>

      <h5>2020-2024</h5>
      <br />




      <div>
        <Tabs key={'College'} setInitial={1}>

          <div label="Spring 2023">
            <h1 className='date'>Spring 2023</h1>
            <h3>Upcoming</h3>
            <div className="Courses">
              {
                spring2023.map((course, index) => {
                  return (
                    <div className='course' key={index}>
                      <h3>{course.courseName}</h3>
                      <h4 className='centre'>{course.credits} Credits | {course.Semester}</h4>
                      <div className='Projects'>
                        {course.Projects.map((y) => <div className='project'>{y}</div>)}
                      </div>

                      <div className='contents__course'>
                        {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                      </div>
                      <h4 className='centre'>{course.Desc}</h4>
                      <div className='tags__course'>
                        {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>
          </div>

          <div label="Fall 2022">
            <h1 className='date'>Fall 2022</h1>
            <h3>Upcoming</h3>
            <div className="Courses">
              {
                fall2022.map((course, index) => {
                  return (
                    <div className='course' key={index}>
                      <h3>{course.courseName}</h3>
                      <h4 className='centre'>{course.credits} Credits | {course.Semester}</h4>
                      <div className='Projects'>
                        {course.Projects.map((y) => <div className='project'>{y}</div>)}
                      </div>

                      <div className='contents__course'>
                        {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                      </div>
                      <h4 className='centre'>{course.Desc}</h4>
                      <div className='tags__course'>
                        {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>
          </div>


          <div label='Spring 2022'>
            <h1 className='date'>Spring 2022</h1>
            <div className="Courses">
              {
                spring2022.map((course, index) => {
                  return (
                    <div className='course' key={index}>
                      <h3>{course.courseName}</h3>
                      <h4 className='centre'>{course.credits} Credits | {course.Semester}</h4>
                      <div className='Projects'>
                        {course.Projects.map((y) => <div className='project'>{y}</div>)}
                      </div>

                      <div className='contents__course'>
                        {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                      </div>
                      <h4 className='centre'>{course.Desc}</h4>
                      <div className='tags__course'>
                        {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>
          </div>

          <div label='Fall 2021'>
            <h1 className='date'>Fall 2021</h1>
            <div className="Courses">
              {
                fall2021.map((course, index) => {
                  return (
                    <div className='course' key={index}>
                      <h3>{course.courseName}</h3>
                      <h4 className='centre'>{course.credits} Credits | {course.Semester}</h4>
                      <div className='Projects'>
                        {course.Projects.map((y) => <div className='project'>{y}</div>)}
                      </div>
                      <div className='contents__course'>
                        {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                      </div>
                      <h4 className='centre'>{course.Desc}</h4>
                      <div className='tags__course'>
                        {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>
          </div>


          <div label='Spring 2021'>
            <h1 className='date'>Spring 2021</h1>
            <div className="Courses">
              {
                spring2021.map((course, index) => {
                  return (
                    <div className='course' key={index}>
                      <h3>{course.courseName}</h3>
                      <h4 className='centre'>{course.credits} Credits | {course.Semester}</h4>
                      <div className='Projects'>
                        {course.Projects.map((y) => <div className='project'>{y}</div>)}
                      </div>
                      <div className='contents__course'>
                        {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                      </div>
                      <h4 className='centre'>{course.Desc}</h4>
                      <div className='tags__course'>
                        {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>
          </div>

          <div label='Fall 2020'>
            <h1 className='date' >Fall 2020</h1>
            <div className="Courses">
              {
                fall2020.map((course, index) => {
                  return (
                    <div className='course' key={index}>
                      <h3>{course.courseName}</h3>
                      <h4 className='centre'>{course.credits} Credits | {course.Semester}</h4>
                      <div className='Projects'>
                        {course.Projects.map((y) => <div className='project'>{y}</div>)}
                      </div>
                      <div className='contents__course'>
                        {course.Content.map((y) => <div className='content__course'>{y}</div>)}
                      </div>
                      <h4 className='centre'>{course.Desc}</h4>
                      <div className='tags__course'>
                        {course.tags.map((y) => <div className='tag__course'>#{y}</div>)}
                      </div>
                    </div>
                  )
                }
                )
              }
            </div>
          </div>

        </Tabs>




      </div>
    </>
  );
}
