import Layout from "../components/Layout"
import Calculator from "../components/Calculator"

export default function Home() {
  return (
    <Layout subtitle="Top Page">
      <div className="container">
        <Calculator />
      </div>
    </Layout>
  )
}
