import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const Edit = ({ toggle, setToggle }) => {
  const [selected, setSelected] = useState();
  const history = useHistory();
  const { rowIndex } = useParams();
  console.log(rowIndex);

  const [data, setData] = useState({
    name: "",
    email: "",
    rating: "",
  });
  //FETCH INDIVIDUAL NOTE DATA//////////////////////////////////////////////////////////////////////////////
  const getData = async () => {
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/6a062e2c-62e9-4e25-b45a-372711a3827e/${rowIndex}`
      );
      const data = await res.json();
      setData(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  //INPUT HANDLER////////////////////////////////////////////////////////////////////////////////////////////////
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setSelected(+e.currentTarget.value);
    console.log(+e.currentTarget.value);
  };
  //SUBMIT HANDLER/////////////////////////////////////////////////////////////////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://sheet.best/api/sheets/6a062e2c-62e9-4e25-b45a-372711a3827e/${rowIndex}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        setToggle(!toggle);
        console.log("yay! done.");
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  ////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card">
      <h2>Add a new note</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Title goes here"
              value={data.name}
              onChange={handleChange}
            />

            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Write your note here"
              value={data?.message}
              onChange={handleChange}
            />
            <ul className="rating">
              <li>
                <input
                  type="radio"
                  id="num1"
                  name="rating"
                  value="1"
                  onChange={handleChange}
                  checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="num2"
                  name="rating"
                  value="2"
                  onChange={handleChange}
                  checked={selected === 2}
                />
                <label htmlFor="num2">2</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="num3"
                  name="rating"
                  value="3"
                  onChange={handleChange}
                  checked={selected === 3}
                />
                <label htmlFor="num3">3</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="num4"
                  name="rating"
                  value="4"
                  onChange={handleChange}
                  checked={selected === 4}
                />
                <label htmlFor="num4">4</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="num5"
                  name="rating"
                  value="5"
                  onChange={handleChange}
                  checked={selected === 5}
                />
                <label htmlFor="num5">5</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="num6"
                  name="rating"
                  value="6"
                  onChange={handleChange}
                  checked={selected === 6}
                />
                <label htmlFor="num6">6</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="num7"
                  name="rating"
                  value="7"
                  onChange={handleChange}
                  checked={selected === 7}
                />
                <label htmlFor="num7">7</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="num8"
                  name="rating"
                  value="8"
                  onChange={handleChange}
                  checked={selected === 8}
                />
                <label htmlFor="num8">8</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="num9"
                  name="rating"
                  value="9"
                  onChange={handleChange}
                  checked={selected === 9}
                />
                <label htmlFor="num9">9</label>
              </li>
              <li>
                <input
                  type="radio"
                  id="num10"
                  name="rating"
                  value="10"
                  onChange={handleChange}
                  checked={selected === 10}
                />
                <label htmlFor="num10">10</label>
              </li>
            </ul>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
