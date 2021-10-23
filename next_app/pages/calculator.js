import Layout from "../components/layout";
import Link from "next/dist/client/link";

export default function Other() {
    return (
        <div>
            <Layout header="Calculator" title="Calculator">
                <div className="card p-4 text-center">
                    <div className="card p-4 text-center alert alert-primary">
                        <h4>Result: Clear history</h4>
                        <input type="text" className="form-control" />
                        <div className="text-center">
                            <button className="btn btn-primary m-2">a</button>
                            <button className="btn btn-primary m-2">b</button>
                            <button className="btn btn-primary m-2">c</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                        <h4>History</h4>
                        <button className="btn btn-primary">Clear History</button>
                    </div>
                    <hr></hr>
                    <Link href=".">
                        <button className="btn btn-primary">
                            &lt;&lt; Back to Top
                        </button>
                    </Link>
                </div>
            </Layout>
        </div>
    )
}