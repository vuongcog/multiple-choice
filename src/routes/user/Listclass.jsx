import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "../admin/Sidebar";
import Footer from "./Footer";
import Tableclass from "./component/Tableclass/Tableclass";
const Listclass = () => {
  const [data, setData] = useState(null);
  return (
    <div>
      <Header></Header>
      <div className="container flex justify-around">
        <Sidebar></Sidebar>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        CODE
                      </th>
                      <th scope="col" className="px-6 py-4">
                        SUBJECT
                      </th>
                      <th scope="col" className="px-6 py-4">
                        LECTURE
                      </th>
                      <th scope="col" className="px-6 py-4">
                        DATE
                      </th>
                      <th scope="col" className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <Tableclass
                    code="asd"
                    subject="KTLT"
                    lecture="Bằng"
                    date="20-10-2023"
                  ></Tableclass>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Listclass;
