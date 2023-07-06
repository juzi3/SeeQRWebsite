const Download = () => {

  const handleDownload = (OSLink) => {
    window.location.href = OSLink;
  };

  return (
    <>
      <h2 className="download__text text-center mt-[5em] font-light">
        Download{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-emerald-300">
          <strong>SeeQR</strong>
        </span>
      </h2>
      <div className="flex items-center justify-center my-10 mx-30">
        <button onClick={() => handleDownload('https://github.com/SeeQRWeb')} className="flex items-center rounded-full bg-white shadow-md px-4 py-2 mr-4 bg-gradient-to-r to-purple-300 from-purple-200 hover:-translate-y-1 transition duration-200 ease-out hover:bg-gradient-to-b hover:from-purple-300 hover:to-purple-200 hover:shadow-2xl hover:shadow-purple-500/50">
          <div className="bg-apple bg-contain bg-no-repeat bg-center h-7 w-7 rounded-md mr-2"></div>
          <p>Mac OS</p>
        </button>
        <button onClick={() => handleDownload('https://github.com/SeeQRWeb')} className="flex items-center bg-white shadow-md rounded-full px-4 py-2 mr-4 bg-gradient-to-r to-purple-300 from-purple-200 hover:-translate-y-1 transition duration-200 ease-out hover:bg-gradient-to-b hover:from-purple-300 hover:to-purple-200 hover:shadow-2xl hover:shadow-purple-500/50">
          <div className="bg-windows bg-contain bg-no-repeat bg-center h-7 w-7 rounded-md mr-2"></div>
          <span>Windows</span>
        </button>
        <button onClick={() => handleDownload('https://github.com/SeeQRWeb')} className="flex items-center bg-white shadow-md rounded-full px-4 py-2 bg-gradient-to-r to-purple-300 from-purple-200 hover:-translate-y-1 transition duration-200 ease-out hover:bg-gradient-to-b hover:from-purple-300 hover:to-purple-200 hover:shadow-2xl hover:shadow-purple-500/50">
          <div className="bg-linux bg-contain bg-no-repeat bg-center h-7 w-7 rounded-md mr-2"></div>
          <span>Linux</span>
        </button>
      </div>
    </>
  );
};

export default Download;
