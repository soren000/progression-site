import globalStyles from '../styles/global.js'

function Layout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  ) 
}

export default Layout



// import Link from 'next/link';
// import { test } from '../styles/style.header';
// console.log(test);

// const Layout = props => {

//     return (
//         <div>
//             <div>
//                 <h1>Layout Title</h1>
//                 <Link href="/">
//                     <a>Home</a>
//                 </Link>
//                 <Link href="/add">
//                     <a>Add</a>
//                 </Link>
//                 <Link href="/contact">
//                     <a>Contact</a>
//                 </Link>
//             </div>
//             {props.children}
//             <style jsx global>{test}</style>
//         </div>
//     )
// };

// export default Layout;