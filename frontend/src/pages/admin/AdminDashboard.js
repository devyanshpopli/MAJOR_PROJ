import { Box, Stack, Typography } from '@mui/material';
import StatComponent from '../../component/StatComponent';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import { Chart } from "react-google-charts";
import { data, options } from './data/data'
import ChartComponent from '../../component/ChartComponent';


const AdminDashboard = () => {
    return (
        <>
            <Box>
                <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
                    Dashboard
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >

                    <StatComponent
                        value="45621"
                        icon={<SupervisorAccountIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Administrators"
                        money=''
                    />
                    <StatComponent
                        value="450"
                        icon={<WorkIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs"
                        money=''
                    />
                    <StatComponent
                        value="6548"
                        icon={<CategoryIcon sx={{ color: "#fafafa", fontSize: 30 }} />}
                        description="Jobs categories"
                        money=''
                    />

                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 3 }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <ChartComponent>
                        {/* <Chart
                            chartType="Bar"
                            data={data}
                            options={options}
                            width="100%"
                            height="300px"
                            legendToggle
                        /> */}
                        <iframe title="KITPLACE_ANALYTICAL_DASHBOARD" src="https://app.powerbi.com/reportEmbed?reportId=d9c79a33-eec3-4a22-9b37-6b4b8b151522&autoAuth=true&ctid=0c2c5eb2-7477-4593-ac08-f1de3be027d2" width='100%' height='1000px' allowfullscreen frameborder='0'></iframe>
                    </ChartComponent>
                </Stack>

            </Box>
            
        </>
    )
}

export default AdminDashboard