// import './globals.css'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'

// export const metadata = {
//   title: 'Career Goal Tracker',
//   description: 'Track your career goals efficiently',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <div className="flex">
//           <Sidebar />
//           <main className="flex-1 p-6 bg-gray-50 min-h-screen">
//             {children}
//           </main>
//         </div>
//       </body>
//     </html>
//   )
// }



// app/layout.js

// app/layout.js
import './globals.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Analytics from './analytics' // or './components/Analytics' if you placed it in components

export const metadata = {
  title: 'Career Goal Tracker',
  description: 'Track your career goals efficiently',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 bg-gray-50 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
