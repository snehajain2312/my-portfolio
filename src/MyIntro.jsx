// // import Students from "./Students";
// // const products = [
// //   { id: 1, name: "Laptop", price: 50000, stock: 1000 },
// //   { id: 2, name: "Phone", price: 20000, stock:9 },
// //   { id: 3, name: "Headphones", price: 2000, stock:0 }
// // ];
// // function App(){
// //   return(
// //     <>
// //         {products.map((product)=>(
// //           <Students
// //           key={product.id}
// //           name={product.name}
// //           price={product.price} 
// //           stock={product.stock} 
// //           />
// //         ))}
// //     </>
// //   )
// // }

// // export default App;



// // function App(){
// //   function handleClick() {
// //     alert("Clicked")
// //     let h1 = document.querySelector(".heading");
// //     h1.textContent = "Welcome To React!"
// //   }

// //   return (
// //     <>
// //     <h1 className="heading">Hello!</h1>
// //     <button onClick={handleClick}>Click Me!</button>
// //     </>
// //   )

// // }

// // export default App;


// // import { useState } from "react";
// // function App(){
// // const [name, setName] = useState("Sneha");
// //   function handleClick() {
// //     setName("Welcome to React!");
// //   }

// //   const [count, setCount] = useState(0);
// //   function handleClickk(){
// //     setCount(count + 1);
// //   }
// //   return (
// //     <>
// //       <h1>{name}</h1>
// //       <button onClick={handleClick}> Click Me! </button>
// //       <button onClick={handleClickk}>Increase Count: {count}</button>
// //     </>
// //   );
// // }

// // export default App;


// // import { useState } from "react";
// // function App(){
// //  const [count, setCount] = useState(0);

// //  function  increaseCount(){
// //   // setCount(count + 1);
// //   setCount(prev => prev + 1);
// //   setCount(prev => prev + 1);
// //  }
// //  function decreaseCount (){
// //   // setCount(count - 1);
// //     setCount(prev => prev - 1);
// //   setCount(prev => prev - 1);
// //  }

// //  function resetCount(){
// //   setCount(0);
// //  }


// // return(
// //   <>
// //    <h2>Counter</h2>
// //    <p>{count}</p>
// //    <div>
// //     <button onClick={increaseCount}>+ Increase</button>
// //     <button onClick={decreaseCount}>- Decrease</button>
// //     <button onClick={resetCount}>Reset</button>
// //    </div>
  
// //   </>
// // );
// // }
// // export default App;




// // import { useState } from "react";

// // function App() {
// // const [email, setEmail] = useState("");

// // function clear(){
// //   setEmail("");
// // }
// //   return (
// //     <>
// //     <h1>Your Email: {email}</h1>
// //     <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
// //     <button onClick={clear}>Clear</button>
// //     </>
// //   );
// // }

// // export default App;


// // import { useState } from "react";

// // function App() {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");

// //   function submit(){
// //     if(name === "" || email === ""){
// //       alert("Please enter the name and email");
// //       return;
// //     }
// //     alert("Form Submitted!")
// //   }
// //   return (
// //     <>
// //       <h2>Contact Form</h2>

// //       <input
// //         type="text"
// //         placeholder="Enter your name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />

// //       <input
// //         type="email"
// //         placeholder="Enter your email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />

// //       <h3>Your Name: {name}</h3>
// //       <h3>Your Email: {email}</h3>

// //       <button onClick={submit}>Submit</button>
// //     </>
// //   );
// // }

// // export default App;



// // function App() {
// //   const projects = [
// //     "Portfolio Website",
// //     "Placement Prep",
// //     "Beauty Products Website"
// //   ];

// //   const fruits = ["Apple", "Mango", "Orange"];
// //   return (
// //     <>
// //     <h2>My Projects</h2>
// //     {
// //       projects.map((project, index)=>(
// //        <p key={index}>{project}</p>
// //       ))
    
// //     }

// //     {
// //       fruits.map((fruit, index)=>(
// //         <h2 key={index}>{fruit}</h2>
// //       ))
// //     }
// //     </>
// //   )

// // }

// // export default App;


// // function App(){

// //     const projects = [
// //     {
// //       id: 1,
// //       name: "Portfolio Website",
// //       technology: "React",
// //     },
// //     {
// //       id: 2,
// //       name: "Placement Prep",
// //       technology: "React",
// //     },
// //     {
// //       id: 3,
// //       name: "Beauty Products Website",
// //       technology: "JavaScript",
// //     },
// //   ];

// //   return (
// //     <>
// //     <h1>My Projects</h1>
// //     {
// //       projects.map((project)=>(
// //         <div key={project.id} >
// //           <h2>{project.name}</h2>
// //           <p>Technology: {project.technology}</p>

// //         </div>
// //       ))
// //     }
    
// //     </>
// //   )
// // }

// // export default App;

// // import { useState } from "react";

// // function App(){
  
// //   const [projects, setProjects] = useState([
// //     { id: 1, name: "Portfolio Website" },
// //     { id: 2, name: "Placement Prep" },
// //   ])
  
// //   function addProject(){
// //     const newProject = {
// //       id: 3,
// //       name: "Wheather App",
// //     }
    
// //     setProjects([...projects, newProject]);
// //   }

// //   function addEco(){
// //     const ecoProject = {
// //       id:4,
// //       name: "E-commerce Website",
// //     }

// //     setProjects([...projects, ecoProject]);
// //   }

// //   function removeProject(id) {
// //   setProjects(projects.filter((project) => project.id !== id));
// // }
// // return (
// //    <>
// //    <h1>My Projects</h1>
// //      {
// //       projects.length >= 3 ? <p>You are 3 more project available</p> :
// //       projects.map((project) => (
// //         <div key={project.id}>
// //           <h2 >{project.name}</h2>
// //           <button onClick={() => removeProject(project.id)}>Remove</button>

// //         </div>
// //       ))
// //      }

// //      <button onClick={addProject}>Add Project</button>

// //      <button onClick={addEco}>Add E-commerce Website</button>
   
// //    </>

// // )

// // }
// // export default App;







// // import { useState } from "react";

// // function App(){

// //   const [user, setUser] = useState({
// //     name:"sneha",
// //     age:23,
// //   });


// //   return (
// //     <>
// //     <h2>{user.name}</h2>
// //     <h3>{user.age}</h3>
// //     <button onClick={()=>setUser({...user,name:"Priya",age:25,})}>Update Profile</button>
// //     </>
// //   )
// // }

// // export default App;



// // import { useState } from "react";
// // function App(){
// // const [students, setStudents] = useState([
// //   { id: 1, name: "Sneha", age: 23 },
// //   { id: 2, name: "Rahul", age: 24 }
// // ]);

// // function updateAge(id) {
// //   setStudents(students.map(student =>
// //     student.id === id
// //       ? { ...student, age: student.age + 1 }
// //       : student
// //   ));
// // }
// // function degradeAge(id) {
// //   setStudents(students.map(student =>
// //     student.id === id
// //       ? { ...student, age: student.age - 1 }
// //       : student
// //   ));
// // }

// // function addStudent(){
// //   setStudents(prevStudents=>{
// //     const exist = prevStudents.some(
// //       student => student.name === "Priya"
// //     );

// //     if(exist){
// //       return prevStudents;
// //     }

// //     return [
// //         ...prevStudents,   { id: 3, name: "Priya", age: 22 } 
// //     ];
// //   });
// // }
// //   return(
// //     <>
// //     {
// //       students.map((stu)=>(
// //         <div key={stu.id}>
// //         <h1>{stu.name}</h1>
// //         <h2>{stu.age}</h2>
// //         <button onClick={()=>updateAge(stu.id)}>Update Age</button>
// //         <button onClick={()=>degradeAge(stu.id)}>Degrade Age</button>
// //         </div>

// //       ))

// //     }
// //     <button onClick={addStudent}>Add Student</button>
// //     </>
// //   )

// // }

// // export default App; 



// // import { useState, useEffect } from "react";

// // function App() {
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     document.title = `Count: ${count}`;
// //   }, [count]);

// //   return (
// //     <>
// //       <h2>Count: {count}</h2>
// //       <button onClick={() => setCount(prev => prev + 1)}>
// //         Increase
// //       </button>
// //     </>
// //   );
// // }

// // export default App;


// // import { useEffect, useState } from "react";
// // function App(){
// //   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     console.log("haann jii");
// //     document.title = `Count: ${count}`;
// //   }, [count]);

// //   return (
// //     <>
// //       <h2>Count: {count}</h2>
// //       <button onClick={() => setCount(prev => prev + 1)}>
// //         Increase
// //       </button>
    
// //     </>
// //   )
// // }
// // export default App;




// // import { useState, useEffect } from "react";

// // function App() {
// //   // 1. Create your states here
// //   const [post, setPost] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");


// //   useEffect(() => {
// //     // 2. Fetch the posts here
// //     fetch("https://jsonplaceholder.typicode.com/posts")
// //     .then(response =>{
// //       if(!response.ok){
// //         throw new Error("Failed to fetch the post");
// //       }
// //       return response.json();
// //     })
// //     .then( postdata => {
// //       setPost(postdata);
// //     })
// //     .catch(err => {
// //         setError(err.message);
// //       })
// //     .finally(() => {
// //         setLoading(false);
// //       });
// //   }, []);

// //   // 3. Handle loading here

// //   if(loading) return <h2>Loading...</h2>
// //   if (error) return <p>{error}</p>;
// //   return (
// //     <>
// //       <h2>Posts titles</h2>
// //       {/* 4. Display post titles here */}
// //         {post.map(pos => (
// //         <p key={pos.id}>{pos.id}: {pos.title}</p>
// //       ))}

// //     </>
// //   );
// // }

// // export default App;



// import {useEffect, useState } from "react";

// function App(){

//   const [posts, setPosts] = useState([]);
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");


//   useEffect(()=>{

//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response =>{
//       if(!response.ok){
//         throw new Error("Failed to fetch the post")
//       }
//       return response.json();
//     })
//     .then(postData =>{
//       setPosts(postData);
//     })
//     .catch(err =>{
//       setErr(err.message);
//     })
//     .finally(()=>{
//       setLoading(false);
//     })

//   },[])
//     const filteredPosts = posts.filter((post) =>
//     post.title.toLowerCase().includes(search.toLowerCase())
//   );

//   if(loading) return <h2>Loading...</h2>
//   if(err) return <h2>{err}</h2>
 
//   return (
//     <>
//     <h2>Post Titles</h2>
//     <input
//       type="text"
//       placeholder="Search post titles..."
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//     />
//     <button onClick={() => setSearch("")}>
//       Clear Search
//     </button>
//     {
//       filteredPosts.length > 0 ? (
//       filteredPosts.map((post)=>(
//         <p key={post.id}>{post.id}: {post.title}</p>
//       )))
//       :(<p>No posts found.</p>)
//     }
//     </>
//   )


// }
// export default App;