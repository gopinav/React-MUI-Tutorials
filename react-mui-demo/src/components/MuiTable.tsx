import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper
} from '@mui/material'

export const MuiTable = () => {
  return (
    <TableContainer sx={{ maxHeight: '300px' }} component={Paper}>
      <Table stickyHeader aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map(row => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align='center'>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const tableData = [
  {
    id: 1,
    first_name: 'Beret',
    last_name: 'Lennard',
    email: 'blennard0@pcworld.com',
    gender: 'Female',
    ip_address: '213.196.192.52'
  },
  {
    id: 2,
    first_name: 'Tera',
    last_name: 'Choke',
    email: 'tchoke1@theatlantic.com',
    gender: 'Male',
    ip_address: '101.152.241.70'
  },
  {
    id: 3,
    first_name: 'Lyn',
    last_name: 'Bowart',
    email: 'lbowart2@odnoklassniki.ru',
    gender: 'Male',
    ip_address: '188.127.126.94'
  },
  {
    id: 4,
    first_name: 'Bert',
    last_name: 'Huckett',
    email: 'bhuckett3@tinypic.com',
    gender: 'Female',
    ip_address: '247.156.243.148'
  },
  {
    id: 5,
    first_name: 'Drew',
    last_name: 'Jenicke',
    email: 'djenicke4@businessinsider.com',
    gender: 'Male',
    ip_address: '0.185.35.172'
  },
  {
    id: 6,
    first_name: 'Deloria',
    last_name: 'Pepperill',
    email: 'dpepperill5@meetup.com',
    gender: 'Non-binary',
    ip_address: '101.44.39.120'
  },
  {
    id: 7,
    first_name: 'Spense',
    last_name: 'Ivashnyov',
    email: 'sivashnyov6@hexun.com',
    gender: 'Female',
    ip_address: '253.192.252.49'
  },
  {
    id: 8,
    first_name: 'Elden',
    last_name: 'Chaucer',
    email: 'echaucer7@mozilla.com',
    gender: 'Agender',
    ip_address: '60.70.120.186'
  },
  {
    id: 9,
    first_name: 'Sholom',
    last_name: 'Deetch',
    email: 'sdeetch8@so-net.ne.jp',
    gender: 'Female',
    ip_address: '218.36.95.147'
  },
  {
    id: 10,
    first_name: 'Genovera',
    last_name: 'Colby',
    email: 'gcolby9@dagondesign.com',
    gender: 'Non-binary',
    ip_address: '199.140.221.248'
  }
]
