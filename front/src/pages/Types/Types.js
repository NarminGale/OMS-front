import React, { useState } from 'react'
import Sidenav from '../../components/Sidenav'
import iconEdit from '../../images/icon-edit.svg'
import iconDelete from '../../images/icon-delete.svg'
import iconClose from '../../images/icon-close.svg'
import { FaPlus } from 'react-icons/fa'

function Types() {
  const [types, setTypes] = useState('')
  const [selectValue, setSelectValue] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  console.log(selectValue)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!types) {
      // display alert
    } else if (types && isEditing) {
      // editing
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: types }
          }
          return item
        })
      )
      setTypes('')
      setEditId(null)
      setIsEditing(false)
    } else {
      // show alert
      const newTypes = {
        id: new Date().getTime().toString(),
        category: selectValue,
        type: types,
      }
      list.push(newTypes)
      setTypes('')
      setSelectValue('')
      console.log(list)
    }
  }

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditId(id)
    setTypes(specificItem.type)
    console.log(specificItem)
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
                          value={selectValue}
                          onChange={(e) => setSelectValue(e.target.value)}>
                          <option defaultValue="Choose a category">
                            Choose a category
                          </option>
                          <option value="Maintain">Maintain</option>
                          <option value="Repair">Repair</option>
                          <option value="Office Services">
                            Office Services
                          </option>
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
                            value={types}
                            onChange={(e) => {
                              setTypes(e.target.value)
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
                return (
                  <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td>{item.type}</td>
                    <td>{item.category}</td>
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
