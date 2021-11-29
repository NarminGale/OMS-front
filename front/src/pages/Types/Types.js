import React, { useState, useEffect } from 'react'
import Sidenav from '../../components/Sidenav'
import iconEdit from '../../images/icon-edit.svg'
import iconDelete from '../../images/icon-delete.svg'
import iconClose from '../../images/icon-close.svg'
import { FaPlus } from 'react-icons/fa'
import axios from 'axios'

function Types() {
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [list, setList] = useState([])
  const [editId, setEditId] = useState(null)
  const [categories, setCategories] = useState([])

  let manualID = 0

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios
      .post(
        `${process.env.REACT_APP_API_URL}api/types`,
        {
          category_id: category,
          name: type,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 46|s2qMomccCBR0uO1dw6v1W9qSwtIFd6xaTXxh3FTe',
          },
        }
      )
      .then((res) => {
        console.log(res)
        setType('')
        setCategory('')
        getTypes()
      })
      .catch((err) => console.log(err))
  }

  const getTypes = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/types`, {
        headers: {
          Authorization: 'Bearer 46|s2qMomccCBR0uO1dw6v1W9qSwtIFd6xaTXxh3FTe',
        },
      })
      .then((res) => {
        setList(res.data.types)
      })
      .catch((err) => console.log(err))
  }

  const getCategories = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/categories`, {
        headers: {
          Authorization: 'Bearer 46|s2qMomccCBR0uO1dw6v1W9qSwtIFd6xaTXxh3FTe',
        },
      })
      .then((res) => {
        setCategories(res.data.categories)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getTypes()
    getCategories()
  }, [])

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    // setIsEditing(true)
    // setEditId(id)
    // setType(specificItem.type)
    // console.log(specificItem)
  }

  return (
    <>
      <Sidenav />
      <div className="categories">
        <h1>Types</h1>
        <div className="container">
          <div className="col-11 text-right ">
            <button
              type="button"
              className="btn btn-success add-button px-4 mb-4 rounded-3 pull-right"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              <span className="plus-icon">
                <FaPlus
                  color="white"
                  style={{
                    height: '20px',
                    width: '14px',
                    marginRight: '14',
                  }}
                />
              </span>
              Add
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Add Type
                    </h5>
                    <button
                      type="button"
                      className="close-button"
                      data-bs-dismiss="modal"
                      aria-label="Close">
                      <img src={iconClose} alt="icon" />
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          htmlFor="validationCustomUsername"
                          className="col-form-label">
                          Category name
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={category}
                          onChange={(e) => {
                            setCategory(e.target.value)
                          }}>
                          <option defaultValue="Choose a category">
                            Choose a category
                          </option>
                          {categories.map((category, index) => (
                            <option value={category.id} key={index}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="validationCustomUsername"
                          className="col-form-label">
                          Types
                        </label>
                        <div className="input-group has-validation">
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustomUsername"
                            aria-describedby="inputGroupPrepend"
                            placeholder="Enter"
                            required
                            value={type}
                            onChange={(e) => {
                              setType(e.target.value)
                            }}
                          />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success mr-2"
                        data-bs-dismiss="modal">
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-light mx-3"
                        data-bs-dismiss="modal">
                        Cancel
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" width="1%">
                  №
                </th>
                <th scope="col" className="types-name">
                  Type Name
                </th>
                <th scope="col" className="category-name">
                  Category Name
                </th>
                <th scope="col" width="15%" className="operation-name">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => {
                manualID++
                return (
                  <tr key={index}>
                    <th scope="row">{manualID}</th>
                    <td>{item.name}</td>
                    <td>
                      {categories.map((category) => {
                        if (category.id === item.category_id) {
                          return category.name
                        }
                      })}
                    </td>
                    <td>
                      <div className="d-inline-block">
                        <button onClick={() => editItem(item.id)}>
                          <img src={iconEdit} alt="icon" />
                        </button>
                      </div>
                      <div className="d-inline-block">
                        <button onClick={() => removeItem(item.id)}>
                          <img src={iconDelete} alt="icon" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Types
