import style from "../Component/About/Footer.module.css";

const FooterComponent = ({ items }) => {

/*   const checkData = () =>{

    items.forEach(el => {
      console.log(el[0].title);
      
      el[1].items.forEach(ele => {
        console.log(ele);
      });
    });
  }

  checkData() */


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
      {items.map((d, i) => {
        return (
          <div key={d + i}>
            {d.map((dt, j) => {
              return (
                <div className="" key={dt + 1 + j}>
                  <p className="text-white text-2xl font-bold py-2">
                    {dt.title}
                  </p>
                  <div>
                    {dt.items?.map((item) => {
                      return (
                        <div key={item + 1 + "kj"}>
                          <a
                            className={`text-white my-1 ${style.hover}`}
                            href="#"
                          >
                            {item}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FooterComponent;
