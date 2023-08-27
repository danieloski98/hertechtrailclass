function App() {

  return (
    <div className='w-full h-screen flex justify-center items-center px-12 bg-[whitesmoke]'>
      <div className="w-[30%] h-96 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="w-full h-[40%] bg-primary"></div>

      <div className="w-full h-[60%] px-5 py-10 flex flex-col">
        <h1 className="header">Hertechtrailers</h1>
        <p className="text-sm font-Montserrat-Regular mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum molestias sint rerum totam? Ut alias quidem explicabo necessitatibus dolorum repellat eius commodi assumenda quaerat eaque?</p>

        <div className="flex justify-end">
          <button className="h-[40px] px-3 bg-btnBg text-white rounded-md mt-3">Read more</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
