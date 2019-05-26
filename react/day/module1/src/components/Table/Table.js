import React from 'react';



const Table = ({trans}) =>(
  <table className="transaction-history">

  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
<tbody>
  {trans.map(el => (
<tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}</td>
      <td>{el.currency}</td>
    </tr>
  ))}


  </tbody>
</table>
)

export default Table;
