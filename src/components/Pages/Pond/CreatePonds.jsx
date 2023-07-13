import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { authenticatedApi } from "../../../services/api";

const CreatePonds = () => {

    let navigate = useNavigate();
    const [input, setInput] = useState({
        hardware_id: "",
        name: "",
        address: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name === "hardware_id"){
            setInput({...input, hardware_id: value});
        } else if(name === "name"){
            setInput({...input, name: value});
        } else if(name === "address"){
            setInput({...input, address: value});
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let {hardware_id, name, address} = input;
        axios.post("http://127.0.0.1:8000/api/ponds", {
            hardware_id, name, address
        }).then((res) => {
            console.log(res);
            navigate('/ponds');
        }).catch((err) => {
            console.log(err);
        });

        setInput({
            hardware_id: "",
            name: "",
            address: "",
        })
    }

  return (
    <>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Tambahkan Ponds</h5>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hardware ID</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="hardware_id" value={input.hardware_id} onChange={handleInput}/>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kolam</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="name" value={input.name} onChange={handleInput}/>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="address" value={input.address} onChange={handleInput}/>
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default CreatePonds