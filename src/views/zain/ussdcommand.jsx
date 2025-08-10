import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  IconButton,
  Typography,
  Chip,
  InputAdornment,
  Stack,
  Tooltip,
  TablePagination,
  useTheme,
  alpha
} from '@mui/material';
import {
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function Ussdcommand() {
    const initialData = [
  {
    id: 1,
    englishName: 'Mobile Internet Plans Menu',
    arabicName: 'قائمة خوم الانترنت',
    number: '240'
  },
  {
    id: 2,
    englishName: 'My prepaid tarif',
    arabicName: 'بطاقة حطب الوقود مسبقا',
    number: '113'
  },
  {
    id: 3,
    englishName: 'Embedded minutes balance',
    arabicName: 'رصيد الدقائق المضمنة',
    number: '116*1'
  },
  {
    id: 4,
    englishName: 'Embedded internet and SMS',
    arabicName: 'رصيد الانترنت والرسائل المضمنة',
    number: '116*2'
  },
  {
    id: 5,
    englishName: 'To recharge your prepaid line',
    arabicName: 'لشحن حطك البطاقات المدفوعة مسبقا',
    number: '114'
  },
  {
    id: 6,
    englishName: 'To recharge another prepaid number',
    arabicName: 'لشحن حط بطاقات مدفوعة مسبقا آخر',
    number: '115'
  },
  {
    id: 7,
    englishName: 'Early subscription renewal for prepaid lines',
    arabicName: 'لتجديد اشتراك حطك المدفوع مسبقا في أي وقت من الشهر',
    number: '358'
  },
  {
    id: 8,
    englishName: 'Zain Services Menu',
    arabicName: 'قائمة خدمات زين',
    number: '111'
  },
  {
    id: 9,
    englishName: 'International Bolts',
    arabicName: 'خوم الاتصال الدولي',
    number: '181'
  },
  {
    id: 10,
    englishName: 'CLI+ Service',
    arabicName: 'CLI+ خدمة',
    number: '163'
  },
  {
    id: 11,
    englishName: 'Hide Your Number Service',
    arabicName: 'خدمة إخفاء الرقم',
    number: '132'
  },
  {
    id: 12,
    englishName: 'To get PUK code',
    arabicName: 'خدمة فك الإغلاق',
    number: '174'
  },
  {
    id: 13,
    englishName: 'Sama3ni Menu',
    arabicName: 'قائمة خدمات سمعني الموسيقية',
    number: '104'
  },
  {
    id: 14,
    englishName: 'To transfer credit to another prepaid line',
    arabicName: 'لتحويل مبلغ من رصيد حطك المدفوع مسبقا إلى مشترك زين آخر',
    number: '101'
  },
  {
    id: 15,
    englishName: 'Early Subscription Renewal for Mish Tabee3i 2',
    arabicName: 'لتجديد اشتراك بطاقة مش طبيعي 2 في أي وقت من الشهر',
    number: '360'
  },
  {
    id: 16,
    englishName: 'Early Subscription Renewal for Social Line',
    arabicName: 'لتجديد اشتراك بطاقة حط اجتماعي في أي وقت من الشهر',
    number: '600'
  },
  {
    id: 17,
    englishName: 'Zain Cash',
    arabicName: 'زين كاش',
    number: '999'
  }
];
  const theme = useTheme();

const [data, setData] = useState(initialData);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchNumber, setSearchNumber] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  // Filter data based on search
  const filteredData = data.filter(item => {
    const titleMatch = item.englishName.toLowerCase().includes(searchTitle.toLowerCase()) ||
                      item.arabicName.toLowerCase().includes(searchTitle.toLowerCase());
    const numberMatch = item.number.includes(searchNumber);
    return titleMatch && numberMatch;
  });

  // Pagination
  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (id) => {
    console.log('Edit item with id:', id);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    console.log('Delete item with id:', id);
    // Add your delete logic here
    setData(data.filter(item => item.id !== id));
  };

  const handleAdd = () => {
    console.log('Add new USSD command');
    // Add your add logic here
  };

  return (
    <MainCard title="USSD Commands"
    secondary={
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
      
        >
          Add Command
        </Button>
      }
    >
  

       <Box sx={{ width: '100%' }}>
        {/* Search Section */}
        <Box sx={{ mb: 3 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <TextField
              placeholder="Search by title (English/Arabic)"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{ 
                flexGrow: 1,
                minWidth: { xs: '100%', sm: '300px' }
              }}
            />
            <TextField
              placeholder="Search by number"
              value={searchNumber}
              onChange={(e) => setSearchNumber(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon color="action" />
                  </InputAdornment>
                ),
              }}
              sx={{ 
                minWidth: { xs: '100%', sm: '200px' }
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SearchIcon />}
              sx={{
                minWidth: '100px',
                height: '56px'
              }}
            >
              Search
            </Button>
          </Stack>
        </Box>

        {/* Table Section */}
        <TableContainer 
          component={Paper} 
          sx={{ 
            boxShadow: theme.shadows[1],
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow 
                sx={{ 
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  '& .MuiTableCell-head': {
                    fontWeight: 600,
                    color: theme.palette.primary.main
                  }
                }}
              >
                <TableCell align="center" sx={{ width: 80 }}>Order</TableCell>
                <TableCell>English Name</TableCell>
                <TableCell>Arabic Name</TableCell>
                <TableCell align="center" sx={{ width: 120 }}>Number</TableCell>
                <TableCell align="center" sx={{ width: 120 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:nth-of-type(odd)': {
                      backgroundColor: alpha(theme.palette.action.hover, 0.04),
                    },
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.action.hover, 0.08),
                    },
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  <TableCell align="center">
                    <Chip 
                      label={page * rowsPerPage + index + 1}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {row.englishName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: 500,
                        direction: 'rtl',
                        textAlign: 'right'
                      }}
                    >
                      {row.arabicName}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Chip 
                      label={row.number}
                      size="small"
                      sx={{
                        backgroundColor: alpha(theme.palette.success.main, 0.1),
                        color: theme.palette.success.main,
                        fontWeight: 600,
                        fontFamily: 'monospace'
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Tooltip title="Edit">
                        <IconButton
                          size="small"
                          onClick={() => handleEdit(row.id)}
                          sx={{
                            color: theme.palette.primary.main,
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            }
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          size="small"
                          onClick={() => handleDelete(row.id)}
                          sx={{
                            color: theme.palette.error.main,
                            '&:hover': {
                              backgroundColor: alpha(theme.palette.error.main, 0.1),
                            }
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={filteredData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
       
        />

        {/* Results Info */}
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Showing {paginatedData.length} of {filteredData.length} commands
            {filteredData.length !== data.length && ` (filtered from ${data.length} total)`}
          </Typography>
        </Box>
      </Box>
    </MainCard>
  );
}
