import React, { useState } from "react";

export const AddFood = ({ otraCosa, addFood }) => {
  //   console.log("props", props);
  //   console.log("otraCosa", otraCosa);
  //   console.log("addFood", addFood);

  const [newFood, setNewFood] = useState({
    name: "",
    calories: "",
    image: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("form sent!");
    addFood(newFood);
    setNewFood({
      ...newFood,
      name: "",
      calories: "",
      image: ""
    });
  };

  return (
    <>
      <h2>ADD A NEW FOOD:</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
          </label>
          <div className="control">
            <input
              className="input"
              id="name"
              type="text"
              placeholder="Name"
              onChange={e => setNewFood({ ...newFood, name: e.target.value })}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="image">
            Image
          </label>
          <div className="control">
            <input
              className="input"
              id="image"
              type="text"
              placeholder="Image"
              onChange={e => setNewFood({ ...newFood, image: e.target.value })}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="calories">
            Calories
          </label>
          <div className="control">
            <input
              className="input"
              id="calories"
              type="number"
              placeholder="Calories"
              onChange={e =>
                setNewFood({ ...newFood, calories: e.target.value })
              }
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
