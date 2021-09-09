import React from 'react'

import Footer from './components/Footer'
import AddTodoContainer from './containers/AddTodoContainer'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => {
  return (
    <div className="flex flex-col w-1/2 mx-auto bg-white rounded-lg shadow-md">
      <div className="text-center py-5 mb-5">
        <h2 className="text-2xl text-gray-900 font-medium">TODO</h2>
      </div>
      <AddTodoContainer />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

export default App
