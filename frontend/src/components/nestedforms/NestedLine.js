import React, { useState } from "react";
import {Button} from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './nested.css'
import {InputText} from 'primereact/inputtext';

function NestedLine() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "", money: '', donkey:'' }]);


  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "", money: '', donkey:'' }]);
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h3>ADD BILL LINES HERE</h3>
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <InputText
              name="firstName"
              placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
            <InputText
              className="ml10"
              name="lastName"
              placeholder="Enter Last Name"
              value={x.lastName}
              onChange={e => handleInputChange(e, i)}
            />
            <InputText
              className="ml10"
              name="money"
              placeholder="Enter Last Name"
              value={x.money}
              onChange={e => handleInputChange(e, i)}
            />
            <InputText
              className="ml10"
              name="donkey"
              placeholder="Enter Last Name"
              value={x.donkey}
              onChange={e => handleInputChange(e, i)}
            />
            <InputText
              className="ml10"
              name="donkey"
              placeholder="Enter Last Name"
              value={x.donkey}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <Button
                className="p-button-danger"
                icon='pi pi-trash'
                onClick={() => handleRemoveClick(i)}/>}
              {inputList.length - 1 === i && <Button icon='pi pi-plus' className="p-button-warning " onClick={handleAddClick}/>}
            </div>

          </div>
        );
      })}
    </div>
  );
}




export default NestedLine;