const Download = () => {
  return (
    <>
      <h2 className="download__text text-center mt-5">
        Download{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-emerald-300">
          <strong>SeeQR</strong>
        </span>
      </h2>
      <div className="flex items-center justify-center my-10 mx-30">
        <button className="flex items-center bg-white shadow-md rounded-md px-4 py-2 mr-4 bg-gradient-to-r to-emerald-600 from-emerald-100 hover:-translate-y-1 transition duration-200 ease-out hover:bg-gradient-to-b hover:from-emerald-100 hover:to-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/50">
          <div className="bg-apple bg-contain bg-no-repeat bg-center h-10 w-10 rounded-md mr-2"></div>
          <p>Download for Mac OS</p>
        </button>
        <button className="flex items-center bg-white shadow-md rounded-md px-4 py-2 mr-4 bg-gradient-to-r to-emerald-600 from-emerald-100 hover:-translate-y-1 transition duration-200 ease-out hover:bg-gradient-to-b hover:from-emerald-100 hover:to-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/50">
          <div className="bg-windows bg-contain bg-no-repeat bg-center h-10 w-10 rounded-md mr-2"></div>
          <span>Download for Windows</span>
        </button>
        <button className="flex items-center bg-white shadow-md rounded-md px-4 py-2 bg-gradient-to-r to-emerald-600 from-emerald-100 hover:-translate-y-1 transition duration-200 ease-out hover:bg-gradient-to-b hover:from-emerald-100 hover:to-emerald-600 hover:shadow-2xl hover:shadow-emerald-500/50">
          <div className="bg-linux bg-contain bg-no-repeat bg-center h-10 w-10 rounded-md mr-2"></div>
          <span>Download for Linux</span>
        </button>
      </div>
    </>
  );
};

export default Download;
