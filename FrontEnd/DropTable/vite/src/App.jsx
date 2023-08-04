// import DripTableGenerator from "drip-table-generator"
// import "drip-table-generator/dist/index.min.css"

import DripTable from "drip-table"
import "drip-table/dist/index.min.css"

const schema = {
  size: "middle",
  columns: [
    {
      key: "columnKey",
      title: "Column Title",
      dataIndex: "dataIndexName",
      component: "text",
      options: {
        mode: "single",
      },
    },
  ],
}

const App = () => {

  return (
    // <h1>Hello World!!!</h1>
    // <DripTableGenerator />
    <DripTable
      schema={schema}
      dataSource={[]}
    />
  )
}

export default App
