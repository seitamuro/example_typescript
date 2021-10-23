import Layout from "../components/layout"
import Link from "next/link"
import MyImage from "../components/MyImage"
import useSWR from "swr"
import { useState } from "react"

export default function Hone() {
  const [ pref, setPref ] = useState({id: 0, item: "name"})
  const [ address, setAddress ] = useState(`/api/hello/${pref.id}/${pref.item}`)
  const { data, err } = useSWR(address, (url) => (
    fetch(url)
      .then(res => res.json())
  ))

  const onChange = (e) => {
    pref.id = e.target.value
    setPref(pref)
    setAddress(`/api/hello/${pref.id}/${pref.item}`)
  }

  const onSelect = (e) => {
    pref.item = e.target.value
    setPref(pref)
    setAddress(`/api/hello/${pref.id}/${pref.item}`)
  }

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <div className="d-flex flex-column">
            <h5 className="mb-4 p-2">{ JSON.stringify(data)}</h5>
            <input type="number" className="form-control" onChange={onChange} />
            <select onChange={onSelect} className="form-control form-control-sm">
              <option value="name">Name</option>
              <option value="mail">Mail</option>
              <option value="age">Age</option>
            </select>
            <Link className="p-2" href="./calculator">
              <button className="btn btn-primary">
                go to calculator&gt;&gt;
              </button>
            </Link>
            {/*
            <table className="table bg-white">
              <thead className="">
                <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
              </thead>
              <tbody>
                {data != undefined ? data.map((value, key) => (
                  <tr key={key}>
                    <th>{value.name}</th>
                    <td>{value.mail}</td>
                    <td>{value.age}</td>
                  </tr>
                )) : <tr><th></th><td>no data.</td><td></td></tr>}
              </tbody>
            </table>*/}
            <MyImage className="p-2" fname="image.jpg" size="300" />
            <Link className="p-2" href="./other">
              <button className="btn btn-primary">
                go to Other &gt;&gt;
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}