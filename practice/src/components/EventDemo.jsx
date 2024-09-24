"use client"
const EventDemo = () => {
  function display(){
    console.log('hii')
  }
  return (
    <div className="min-h-screen max-w-5xl flex justify-center items-center">
      <button
        onClick={display}
        className="px-10 py-2 bg-blue-800 text-gray-50 font-semibold rounded-md"
      >
        Event Management
      </button>
    </div>
  );
};

export default EventDemo;
