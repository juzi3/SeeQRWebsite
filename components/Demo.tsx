import gif from "../assets/SeeQRLogin.gif";

const Demo3d = () => {
  return (
    <>
      <div className="flex demo_div">
        <div className="homepage__div px-32">
          <h1 className="text-3xl">
            <u>Easy Setup</u>
          </h1>
          <h4>
            One of the key benefits of SeeQR is its easy and hassle free setup.
            You focus on your application and code, SeeQR has your database
            needs covered. Just download the app below and get started. Head on
            over to our docs for a more indepth look at the initial install and
            configuration.
          </h4>
        </div>
        <img src={gif.src} className="login__gif" />
      </div>
    </>
  );
};

export default Demo3d;
