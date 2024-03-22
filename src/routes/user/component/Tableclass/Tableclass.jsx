import React from 'react';
import { Button } from "@chakra-ui/react";
const Tableclass = (props) => {
    return(
        
            <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{props.code}</td>
                  <td className="whitespace-nowrap px-6 py-4">{props.subject}</td>
                  <td className="whitespace-nowrap px-6 py-4">{props.lecture}</td>
                  <td className="whitespace-nowrap px-6 py-4">{props.date}</td>
                  <td className="whitespace-nowrap px-6 py-4"><Button>Do it</Button></td>
                </tr>
              </tbody>
            
    )
}

export default Tableclass