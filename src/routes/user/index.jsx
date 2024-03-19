// eslint-disable-next-line no-unused-vars
import React,{useState,useEffect} from "react";
// import {Cardclass} from "./component/cardclass/Cardclass";
import "./style.css";
import Cardclass from "./component/cardclass/Cardclass";
import Header from "./Header";
import Sidebar from "../admin/Sidebar";
import Footer from "./Footer";
import Button  from "./component/button/Button";
const User = () => {
  const [data, setData] = useState(null);
  const url ='https://65dae61c3ea883a15290dd7d.mockapi.io/data';
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="">
      <Header></Header>
      <div className="container flex justify-around">
        <Sidebar></Sidebar>
        <div className="main-layout">
          <input type="text" className="searching" placeholder=" Nhập tên lớp hoặc môn thi"/>
          <div className="list-class">
            {data && data.map(item => (
              
              <Cardclass
                key = {item.id}
                title={item.title}
                author={item.author}
              ></Cardclass>

            ))}
          </div>
          <Button/>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default User;
