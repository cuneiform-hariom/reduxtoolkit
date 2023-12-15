import React from 'react'
import { fakeUserData } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers, removeUsers, removeAllUsers } from '../store/slices/UserSlice'

export default function UserDetails() {

    const dispatch = useDispatch();
    const removedispatch = useDispatch();
    const removeAlldispatch = useDispatch();

    const addNewUser = (fname) => {
        dispatch(addUsers(fname))
    }

    const data = useSelector((state) => {
        return state.users;
    })

    const deleteUser = (id) => {
        removedispatch(removeUsers(id))
    }
    
    const deleteallUser = () => {
        removeAlldispatch(removeAllUsers())

    }

    console.log(data)

    return (
        <div>
            <div className="titlebar p-4 d-flex justify-content-between border">

                <h4>List of users</h4>
                <button className='btn btn-primary' onClick={() => addNewUser(fakeUserData())}>Add User</button>
            </div>
            <div>
                {
                    data.map((dname, id) => {
                        return (
                            <div className='d-flex border my-3 px-5 py-1 justify-content-between align-items-center' key={id}>
                                <div>{dname}</div>
                                <button className='btn btn-danger btn-sm' onClick={() => deleteUser(id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
            <button className="btn btn-warning mt-2" onClick={deleteallUser}>Delete All</button>
        </div>
    )
}
