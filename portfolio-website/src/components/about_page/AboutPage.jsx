import React from 'react'
import Footer from '../footer/Footer'

import './about.css'

import { Tabs } from "./Tabs/Tabs";

import {IoIosConstruct} from 'react-icons/io'

import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {IoLogoNodejs} from 'react-icons/io'
import {GrGatsbyjs} from 'react-icons/gr'
import {SiFlutter} from 'react-icons/si'
import {FaSwift} from 'react-icons/fa'
import {SiXcode} from 'react-icons/si'
import {SiXamarin} from 'react-icons/si'
import {SiKotlin} from 'react-icons/si'

import {AiFillAndroid} from 'react-icons/ai'
import {SiIos} from 'react-icons/si'
import {GrWindows} from 'react-icons/gr'
import {DiLinux} from 'react-icons/di'
import {AiFillMacCommand} from 'react-icons/ai'
import {FcCommandLine} from 'react-icons/fc'

import {AiOutlineGithub} from 'react-icons/ai'
import {VscAzure} from 'react-icons/vsc'
import {SiGooglecloud}  from 'react-icons/si'
import {SiFirebase} from 'react-icons/si'
import {FaAws} from 'react-icons/fa'

import {SiJava} from 'react-icons/si'
import {SiCplusplus}  from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {SiRuby} from 'react-icons/si'
import {SiCloudera} from 'react-icons/si'
import {RiComputerLine} from 'react-icons/ri'
import {SiDart} from 'react-icons/si'
import {IoLogoSass} from 'react-icons/io'
import {SiNextdotjs} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'

import {BiGitBranch} from 'react-icons/bi'
import {SiReactrouter} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {FaVuejs} from 'react-icons/fa'
import {VscNotebook} from 'react-icons/vsc'
import {BsMarkdownFill} from 'react-icons/bs'
import {SiLatex} from 'react-icons/si'
import {SiAdobexd} from 'react-icons/si'
import {FiFigma} from   'react-icons/fi'
import {SiAdobephotoshop} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'

import {SiGoland} from 'react-icons/si'

import {SiMicrosoftoffice, SiMicrosoftaccess} from 'react-icons/si'
import {RiFileExcel2Fill, RiFileWord2Fill, } from 'react-icons/ri'

import {SiRedux}  from 'react-icons/si'

import {FaRust, FaAngular} from 'react-icons/fa'

import {SiElectron, SiVite, SiRubyonrails, SiNumpy, SiSourcegraph, SiGraphql, SiPandas,
   SiSympy, SiScipy, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, SiKubernetes} from 'react-icons/si'
import {DiMongodb}  from 'react-icons/di'

import {GiProcessor}  from 'react-icons/gi'

import { SiVisualstudio, SiEclipseide, SiVisualstudiocode, SiPycharm } from 'react-icons/si';
import {DiAtom, DiVim} from 'react-icons/di'

import {VscRegex} from 'react-icons/vsc'

const WebTech = [
  {
    label: "HTML",
    icon: <AiFillHtml5 />,
  },{
    label: "CSS",
    icon: <FaCss3 />,
  },{
    label: "JavaScript",
    icon: <SiJavascript />,
  },{
    label: "React",
    icon: <FaReact />,
  },{
    label: "Node",
    icon: <IoLogoNodejs />,
  },{
    label: "Gatsby",
    icon:  <GrGatsbyjs />
  },{
    label: "SASS",
    icon: <IoLogoSass />,
  },{
    label: "Next.js",
    icon: <SiNextdotjs />,
  },{
    label: "Bootstrap",
    icon: <FaBootstrap />,
  },{
    label: "Express.JS",
    icon: <SiExpress />,
  },{
    label: "Vue.JS",
    icon: <FaVuejs />,
  },{
    label: "Go",
    icon: <SiGoland />,
  },{
    label: "Rust",
    icon: <FaRust />,
  },{
    label: "Angular",
    icon: <FaAngular />,
  }
]

const mobileTech = [
  {
    label: "React Native",
    icon: <FaReact />,
  },{
    label: "Flutter",
    icon: <SiFlutter />,
  },{
    label: "Xcode",
    icon: <SiXcode />,
  },{
    label: "Swift",
    icon: <FaSwift />,
  },{
    label: "Xamarin",
    icon: <SiXamarin />,
  },{
    label: "koltin",
    icon: <SiKotlin />,
  },{
    label: "Dart",
    icon: <SiDart />,
  }
]

const platformsTech = [
  {
    label: "Android",
    icon: <AiFillAndroid />,
  },{
    label: "iOS",
    icon: <SiIos />,
  },{
    label: "Windows",
    icon: <GrWindows />,
  },{
    label: "Linux",
    icon: <DiLinux />,
  },{
    label: "Mac",
    icon: <AiFillMacCommand />,
  },{
    label: "unix",
    icon: <FcCommandLine />,
  },{
    label: "Adobe XD",
    icon: <SiAdobexd />,
  },{
    label: "Figma",
    icon: <FiFigma />,
  },{
    label: "Adobe Photoshop",
    icon: <SiAdobephotoshop />,
  }
]

const FrameworksTech = [
  {
    label: "Github",
    icon: <AiOutlineGithub />,
  },{
    label: "Azure",
    icon: <VscAzure />,
  },{
    label: "Google Cloud",
    icon: <SiGooglecloud />,
  },{
    label: "Firebase",
    icon: <SiFirebase />,
  },{
    label: "AWS",
    icon: <FaAws />,
  },{
    label: "Git",
    icon: <BiGitBranch />,
  },{
    label: "React Router",
    icon: <SiReactrouter />,
  },{
    label: "Python Nodebooks",
    icon: <VscNotebook />,
  },{
    label: "Redux",
    icon: <SiRedux />,
  },{
    label: "ELectron",
    icon: <SiElectron />,
  },{
    label: "Vite",
    icon: <SiVite />,
  },{
    label: "Ruby on Rails",
    icon: <SiRubyonrails />,
  },{   
    label: "GraphQl",
    icon: <SiGraphql />,
  },{
    label: "kubernetes",
    icon: <SiKubernetes />,
  }
]

const Codinglanguages =[
  {
    label: "Java",
    icon: <SiJava />,
  },{
    label: "C++",
    icon: <SiCplusplus />,
  },{
    label: "Python",
    icon: <FaPython />,
  },{
    label: "Ruby",
    icon: <SiRuby />,
  },{
    label: "C",
    icon: <SiCloudera />,
  },{
    label: "ARMAssembly",
    icon: <GiProcessor />,
  },{
    label: "markdown",
    icon: <BsMarkdownFill />,
  },{
    label: "LaTeX",
    icon: <SiLatex />,
  },{
    label: "SQL",
    icon: <GrMysql />,
  },{
    label: "MongoDB",
    icon: <DiMongodb />,
  },{
    label: "Regex",
    icon: <VscRegex />,
  }
]

const officeTech = [
  {
    label: "Microsoft Office",
    icon: <SiMicrosoftoffice />,
  },{
    label: "Microsoft Access",
    icon: <SiMicrosoftaccess />,
  },{
    label: "Excel (certified)",
    icon: <RiFileExcel2Fill />,
  },{
    label: "Word (certified)",
    icon: <RiFileWord2Fill />,
  }
]

const pythonModules = [
  {
    label: "Numpy",
    icon: <SiNumpy />,
  },{
    label: "Matplotlib",
    icon: <SiSourcegraph />,
  },{
    label: "Pandas",
    icon: <SiPandas />,
  },{
    label: "SymPy",
    icon: <SiSympy />,
  },{
    label: "SciPy",
    icon: <SiScipy />,
  },{
    label: "TensorFlow",
    icon: <SiTensorflow />,
  },{
 
    label: "Pytorch",
    icon: <SiPytorch />,
  // },{
  //   label: "Keras",
  //   icon: "",
   },{
    label: "Scikit-Learn",
    icon: <SiScikitlearn />,
  },{
    label: "opencv",
    icon: <SiOpencv />,
  }
]

const CondingPlatforms = [
  {
    label: "Visual Studio",
    icon: <SiVisualstudio />,
  },{
    label: "Eclipse",
    icon: <SiEclipseide />,
  },{
    label: "Visual Studio Code",
    icon: <SiVisualstudiocode />,
  },{
    label: "Atom",
    icon: <DiAtom />,
  },{
    label: "Vim",
    icon: <DiVim />,
  },{
    label: "Pycharm",
    icon: <SiPycharm />,
  }
]

const fall2020 = [
  {
    id: 1,
    courseName: 'EGR 100 Intro to Engineering Design',
    credits : '2',
    Semester: 'Fall 2020',
    Projects: ['Mit App Inventor', 'Phone Case'],
    Content: [],
    Desc: "Engineering design process as modeled by team-based, interdisciplinary design projects. Roles of engineers and the contributions of engineering in society. Project management, creativity and design of products and processes to specified outcomes under specified constraints. Introduction to computing tools and physical equipment in support of engineering design.",
    tags: ['Design', 'Engineering', 'Fundamentals'],
  },
  {
    id: 3,
    courseName: 'MTH 132 Calculus I',
    credits : '3',
    Semester: 'Fall 2020',
    Projects: [], //need to fill this
    Content: [], // need to fill this
    Desc: "Basic calc didn't have to break a sweat. Limits, continuous functions, derivatives and their applications. Integrals and the fundamental theorem of calculus.",
    tags: ['Math', 'Calculus', 'Engineering'],
  },
  {
    id: 4,
    courseName: 'PHY 183 Physics I Mechanics',
    credits : '4',
    Semester: 'Fall 2020',
    Projects: [],
    Content: [],
    Desc: "Not so basic Physics. Was Fun tho. Mechanics, Newton's laws, momentum, energy conservation laws, rotational motion, oscillation, gravity, and waves.",
    tags: ['Physics', 'Mechanics', 'Engineering'],
  },
  {
    id: 5,
    courseName: 'WRA 491 iOS Design Lab',
    credits : '3',
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
    credits : '3',
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
    credits : '4',
    Semester: 'Spring 2021',
    Projects: [], // fill this
    Content: [],
    Desc: "My favorite Calc by far. Applications of the integral and methods of integration. Improper integrals. Polar coordinates and parametric curves. Sequences and series. Power series.",
    tags: ["Math", "Calculus", "Engineering"],
  },
  {
    id: 1,
    courseName: 'CSE 232 Intro To Programming II',
    credits : '4',
    Semester: 'Spring 2021',
    Projects: ["Special Characters kinda like RegEx", "Bank Transactions Platform", "Crypto Trading"],
    Content: ["C++", "Data Abstraction", "Classes", "Memory Allocation"], //fill this later
    Desc: "A lot of Coding. Back when C++ was my favorite language. Learned Object-centered design and implementation in C++. Building programs from modules. Data abstraction and classes to implement abstract data types. Static and dynamic memory allocation. Data structure implementation and algorithm efficiency. Lists, tables, stacks, and queues. Templates and generic programming.",
    tags: ["C++", "Computer Science", "Programming"],
  }]

  const clubsFall2020 = [{
    id: 1,
    courseName: 'iOS Club',
    credits : 'Club',
    Semester: 'Spring 2021',
    Projects: [], // fill this
    Content: [], //fill this later
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["iOS", "Design", "Development", "Swift", "Xcode", "Apps"],
  }]

  const clubsSpring2021 = [{
    id: 1,
    courseName: 'Engineering Student Council',
    credits : 'Club',
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
    credits : '3',
    Semester: 'Fall 2021',
    Projects: [],
    Content: [],
    Desc: "One of my Favorite Classes. Thanks to prof @Amy Haimerl. Learned about creative processes, complex problem solving and innovative entrepreneurship. Examination of successful social, cultural and corporate thinkers and creators. Activities focused on inquiry, observation, experimentation and networking for situational problem solving.",
    tags: ["Creativity", "Entrepreneurship", "Business", "Startup"],
  },{
    id: 12,
    courseName: 'CSE 260 Discrete Structures',
    credits : '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: ["Set Theory", "Probability"], //fill this later
    Desc: "Fun CS Proofs Class. Propositional and first order logic. Equivalence and methods of proof. Basics of counting. Set operations, relations, functions. Grammars and finite state automata. Discrete probability. Applications to computer science and engineering.",
    tags: ["Discrete Structures", "Computer Science", "Programming", "Math"],
  },
  {
    id: 13,
    courseName: 'MTH 234 Calculus III (Multivariable)',
    credits : '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: ["Vectors", "More Vectors", "A bunch of integrals stacked", "Greens Theorm", "Stokes Theorm"], //fill this later
    Desc: "A lot of intresting 3D math. Atleast i didn't have to prove anything... yet. Vectors in space. Functions of several variables and partial differentiation. Multiple integrals. Line and surface integrals. Green's and Stokes's theorems.",
    tags: ['Math', 'Calculus', 'Engineering', 'Multivariable', 'Computer Science'],
  },
  {
    id: 14,
    courseName: 'MTH 299 Introduction to Formal Proofs(Transitions)',
    credits : '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: ["Set Theory", "Proofs using Induction", "Proofs using Contradiction", "Other Proofs..."], //fill this later
    Desc: "Started solving long proofs. Introduction to mathematical reasoning, basic logic, set theory, integers, natural numbers and induction, basic number theory, real numbers, limits, sequences, series.",
    tags: ['Math', 'Formal Proofs'],
  },{
    id: 15,
    courseName: 'MTH 314 Matrix Algebra',
    credits : '4',
    Semester: 'Fall 2021',
    Projects: [], // fill this
    Content: ["Vectors", "Linear Transformations", "Steady State", "Matrices!!! A lot of them"], //fill this later
    Desc: "We can make computers do a bunch of math faster. yaaaaay!!!! Vectors, matrices, linear transformations, inner products, dimension, eigenvalues and eigenvectors. Applications to systems of equations and to geometry.",
    tags: ['Math', 'Linear Algebra', 'Computer Science', 'Python' ,'Math', "NumPy", "SciPy", "Matplotlib", "SymPy"],
  }]
  
  const workFall2021 =[{
    id: 16,
    courseName: 'ICER Institute for Cyber Enabled Research',
    credits : 'Work',
    Semester: 'Fall 2021',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Ruby', 'Front-end', 'git'],
  },{
    id: 17,
    courseName: 'ULA Undergraduate Learning Assistant MTH',
    credits : 'Work',
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
    credits : '3',
    Semester: 'Spring 2022',
    Projects: ['Game of Life in Assembly', 'Fractals in Assembly', "built an ALU", "built a CPU"],
    Content: ['Circuit Design', 'Microprocessor', 'Assembly Language', 'Computer Architecture'],
    Desc: "Learned about concepts in architecture such as digial electronics, Optimization of Circuits, essential Concepts of Memory Management in C, and Writing Assembly Language Programs.",
    tags: ['ARM Assembly', 'Computer Architecture', 'Computer Science', 'Programming', 'Circuit Design'],
  },{
    id: 19,
    courseName: 'CSE 331 Data Structures and Algorithms',
    credits : '4',
    Semester: 'Spring 2022',
    Projects: ["Kadane algorithm", "Moore's Voting algo", "A* search", "Dijkstra's algorithm"],// fill this
    Content: ['Linked Lists', 'Binary Trees', 'Trees', 'Graphs', 'Heaps', 'Hash Tables'], //fill this later
    Desc: "Learned about data structures and algorithms to solve problems. Optimized the algorithms to gain efficiency.", 
    tags: ['Data Structures', 'Algorithms', 'Computer Science', 'Programming'],
  },{
    id: 20,
    courseName: 'MTH 235 Differential Equations',
    credits : '3',
    Semester: 'Spring 2022',
    Projects: [], // fill this
    Content: ["Ordinary Differential Equation", "Partial Differential Equation", "Secord and Third order ODE's", "Laplace Transform"], //fill this later
    Desc: "Solved a lot of long problems. SMH. Separable and exact equations. Linear equations and variation of parameters. Higher order linear equations. Laplace transforms. Systems of first-order linear equations. Introduction to partial differential equations and Fourier series.",
    tags: ['Math', 'Differential Equations'],
  },{
    id: 21,
    courseName: 'MTH 310 Abstract Algebra',
    credits : '3',
    Semester: 'Spring 2022',
    Projects: [], // fill this
    Content: ["Rings", "Groups", "Ideals", "Congruence", "Modular Arithmetic"], //fill this later
    Desc: "Proved a lot of long proofs. Structure of the integers, congruences, polynomial rings, and ideals. With applications in cryptography.",
    tags: ['Math', 'Abstract Algebra', 'Cryptography'],
  }]
  
  const fall2022 = [{
    id: 22,
    courseName: 'CMSE 201 Computational Modeling and Data Analysis I',
    credits : '4',
    Semester: 'Fall 2022',
    Projects: [], // fill this
    Content: [], //fill this later
    Desc: "Upcomming Course",
    tags: ['Data Analysis', 'Computer Science', 'Programming'],
  },{
    id: 23,
    courseName: 'CSE 300 Ethics in Computer Science',
    credits : '1',
    Semester: 'Fall 2022',
    Projects: [],
    Content: [],
    Desc: "Upcomming Course",
    tags: ['Ethics', 'Computer Science', 'Programming'],
  },{
    id: 24,
    courseName: 'CSE 325 Computer Systems',
    credits : '3',
    Semester: 'Fall 2022',
    Projects: [],
    Content: [],
    Desc: "Upcomming Course",
    tags: ['Computer Systems', 'Computer Science', 'Programming'], 
  },{
    id: 25,
    courseName: 'CSE 335 Software Design and Development',
    credits : '4',
    Semester: 'Fall 2022',
    Projects: [],
    Content: [],
    Desc: "Upcomming Course",
    tags: ['Software Development', 'Computer Science', 'Programming'],
  },{
    id: 26,
    courseName: 'MTH 310 Abstract Algebra',
    credits : '3',
    Semester: 'Fall 2022',
    Projects: [],
    Content: [],
    Desc: "Upcomming Course",
    tags: ['Math', 'Abstract Algebra', 'Cryptography'],

  },{
    id: 27,
    courseName: 'STT 351 Probability and Statistics',
    credits : '3',
    Semester: 'Fall 2022',
    Projects: [],
    Content: [],
    Desc: "Upcomming Course",
    tags: ["Computer Science", "Statistics", "Probability"],
  }]
  
  const spring2023 = [
    {
    id: 28,
    courseName: 'CMSE 202 Computational Modeling and Data Analysis II',
    credits : '4',
    Semester: 'Spring 2023',
    Projects: [],
    Content: [],
    Desc: "Upcomming Course",
    tags: ['Data Analysis', 'Computer Science', 'Programming'],
  },{
    id: 29,
    courseName: 'CSE 830 Design and Theory of Algorithms',
    credits : '3',
    Semester: 'Spring 2023',
    Projects: [],
    Content: [],
    Desc: "Upcomming Course",
    tags: ['Algorithms', 'Computer Science', 'Programming'],
  },{
    id: 30,
    courseName: 'CSE 860 Foundations of Computer Science',
    credits : '3',
    Semester: 'Spring 2023',
    Projects: [],
    Content: ['Finite Automata', 'Regular Expressions', 'Turing Machines', 'Compilers'],
    Desc: "Upcomming Course",
    tags: ['Computer Science', 'Math', 'Theory of Computation'],
  },{
    id: 31,
    courseName: 'MTH 320 Analysis I',
    credits : '3',
    Semester: 'Spring 2023',
    Projects: [],
    Content: [],
    Desc: "Upcomming Course",
    tags: ['Math', 'Analysis I', 'Proofs'],
  }];

const HighSchool = [
  {
    id: 1,
    courseName: 'AP Computer Science',
    credits : '4',
    Semester: '2019',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['AP', 'Computer Science', 'Programming'],
  }, {
    id: 2,
    courseName: 'AP Physics',
    credits : '4',
    Semester: '2019',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['AP', 'Physics'],
  }, {
    id: 3,
    courseName: 'AP Calculus',
    credits : '4',
    Semester: '2019',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Math', 'AP', 'Calculus'],
  }, {
    id: 4,
    courseName: 'Advanced Business',
    credits : '4',
    Semester: '2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Business'],
  }]

const clubsHS = [
  {
    id: 1,
    courseName: 'Computer Science Club',
    credits : 'Club',
    Semester: '2018-2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Computer Science', 'Programming'],
  }, {
    id: 2,
    courseName: 'Electronics Club',
    credits : 'Club',
    Semester: '2016-2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Electronics'],
  }, {
    id: 3,
    courseName: 'FIRST Robotics Club 5509',
    credits : 'Club',
    Semester: '2016-2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Robotics'],
  },{
    id: 4,
    courseName: 'Business Professionals of America',
    credits : 'Club',
    Semester: '2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ['Business'],
  },{
    id: 5,
    courseName: 'Big Brothers and Big Sisters',
    credits : 'Club',
    Semester: '2017-2020',
    Projects: [],
    Content: [],
    Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: [],
  }

]

const temp2 = [
  {
    name: "aman",
    age: "12",
    Parents: [
      {
        name: "Muralee",
        age: "14"
      }
      ,{
        name: "Kalpana",
        age: "13"
      },
      {
        name: "Jashwanth",
        age: "12"
      }
    ]
  },
  {
    name: "aman3",
    age: "12",
    Parents: [
      {
        name: "Muralee3",
        age: "14"
      }
      ,{
        name: "Kalpana3",
        age: "13"
      },
      {
        name: "Jashwanth3",
        age: "12"
      }
    ]
  }
]

const AboutPage = () => {
  return (
    <div>
      <p>Pardon the dust! Still Under Construction!!</p> <IoIosConstruct />
      <section>
        <h1>About</h1>
      </section>
      <section className='container1'>

        {/* .container */}
        <h1>Education</h1>

        <h3 className="edu">Michigan State University</h3>
        <h2 className='dipolama'>Bachelor of Science in Computer Science and Mathematics</h2>
        
        <h5>2020-2024</h5>
        


        {/* {
          temp2.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.name}</h3>
                <h3>{item.age}</h3>
                <h4>{item.Parents.map((item, index) => {
                  return (
                    <div key={index}>
                      <h5>{item.name}</h5>
                      <h5>{item.age}</h5>
                    </div>
                  )})}</h4>
              </div>

            )})
        } */}
        <div>
        <Tabs >

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
              )}
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
              )}
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
              )}
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
              )}
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
              )}
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
              )}
              )
          }
          </div>
        </div>

        </Tabs>
        </div>




        <h1>Tech I have worked with</h1>
        <h4>Web Techonologies</h4>
        <div className='technologies'>
          {
            WebTech.map((tech, index) => {
              return(
                <div className='tech' key={index}>
                  <h4><span>{tech.icon}</span> {tech.label}</h4>
                </div>
              )
            })
          }
        </div>

        <h4>Mobile Techonologies</h4>
        <div className='technologies'>
          {
            mobileTech.map((tech, index) => {
              return(
                <div className='tech' key={index}>
                  <h4><span>{tech.icon}</span> {tech.label}</h4>
                </div>
              )
            })
          }
        </div>
        
        <h4>Platforms</h4>
        <div className='technologies'>
          {
            platformsTech.map((tech, index) => {
              return(
                <div className='tech' key={index}>
                  <h4><span>{tech.icon}</span> {tech.label}</h4>
                </div>
              )
            })
          }
        </div>
        
        <h4>Frameworks</h4>
        <div className='technologies'>
          {
            FrameworksTech.map((tech, index) => {
              return(
                <div className='tech' key={index}>
                  <h4><span>{tech.icon}</span> {tech.label}</h4>
                </div>
              )
            })
          }
        </div>
        
        <h4>Programing Languages</h4>
        <div className='technologies'>
          {
            Codinglanguages.map((tech, index) => {
              return(
                <div className='tech' key={index}>
                  <h4><span>{tech.icon}</span> {tech.label}</h4>
                </div>
              )
            })
          }
        </div>

        
        <h4>Python Libs</h4>
        <div className='technologies'>
          {
            pythonModules.map((tech, index) => {
              return(
                <div className='tech' key={index}>
                  <h4><span>{tech.icon}</span> {tech.label}</h4>
                </div>
              )
            })
          }
        </div>

        <h4>IDE's</h4>
        <div className='technologies'>
          {
            CondingPlatforms.map((tech, index) => {
              return(
                <div className='tech' key={index}>
                  <h4><span>{tech.icon}</span> {tech.label}</h4>
                </div>
              )
            })
          }
        </div>

        <h4>Other</h4>
        <div className='technologies'>
          {
            officeTech.map((tech, index) => {
              return(
                <div className='tech' key={index}>
                  <h4><span>{tech.icon}</span> {tech.label}</h4>
                </div>
              )
            })
          }
        </div>

        

        {/* {
          data2.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.id}</h3>
                <ul>
                      {item.details.map((y) => <li>{y}</li>)}
                </ul>
              </div>
            )
          })
        } */}



        {/* {
          data.map(({id, courseName, credits, Semester, Projects, tags}) => {
            return (
              <div className='course' key={id}>
                <h3>{courseName}</h3>
                <h4>{credits} Credits</h4>
                <h4>{Semester}</h4>
                <h4>{Projects}</h4>
                <h4>{tags}</h4>
              </div>)
          })  
        } */}
        {/* <h3 className='course'>2020</h3>
        <h4 className='course'>EGR 100 Intro to Engineering Design</h4>
        <h5>Fall</h5>
        <p className='cetre cdata'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean eu dolor justo. Quisque venenatis a lacus a fermentum. Quisque eget suscipit magna. 
        Integer ac ornare est, sed maximus neque. Etiam ullamcorper quam quis ipsum bibendum pharetra. 
        Morbi eget nisl id tellus elementum lobortis. </p> */}

        <br />
        <br />
        <br />
        <h3 className='edu'>Midland High School</h3>
        <h2>High School Diploma</h2>
        <h5>2016-2020</h5>
        
        {/* <div>
          <Tabs>

          </Tabs>
        </div> */}

        {/* <Tabs> */}
        {/* <div label="Courses">
          <h1>Courses</h1>
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
              )}
              )
          }
          </div>
        </div>


        <div label='Clubs'>
        <h1>Clubs</h1>
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
            )}
            )
        }
        </div>
        </div> */}
        {/* </ Tabs> */}



      </section>
      <Footer />
    </div>
  )
}

export default AboutPage