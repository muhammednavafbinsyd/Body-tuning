/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
// import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
// import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData();

  const [totalUsers, setTotalUsers] = useState("");
  const [totalsubscribedUsers, setTotalsubscribedUsers] = useState("");
  const [totalWorkoutplan, seTotalWorkoutplan] = useState("");
  const [totaldietplan, seTotaldietplan] = useState("");
  const [ totalTrainers,setTotaltrainers] = useState("");
console.log(chart);
  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get("http://localhost:2000/adminroute/signupcount");
        setTotalUsers(response.data.totalitems);
      } catch (error) {
        console.error("Error fetching total users count:", error);
      }
    };

    const fetchTotalsubscribedUsers = async () => {
      try {
        const response = await axios.get("http://localhost:2000/adminroute/subscribedUsersCount");
        setTotalsubscribedUsers(response.data.totalitems);
      } catch (error) {
        console.error("Error fetching total users count:", error);
      }
    };

    const fetchTotalWorkoutplan = async () => {
      try {
        const response = await axios.get("http://localhost:2000/adminroute/totalworkoutplan");
        seTotalWorkoutplan(response.data);
      } catch (error) {
        console.error("Error fetching total users count:", error);
      }
    };

    const fetchDietPlancount = async () => {
      try {
        const response = await axios.get("http://localhost:2000/adminroute/totaldietplancount");
        seTotaldietplan(response.data.totalitems);
      } catch (error) {
        console.error("Error fetching total users count:", error);
      }
    };
    const fetchTrainerscount = async () => {
      try {
        const response = await axios.get("http://localhost:2000/adminroute/trainersCount");
        setTotaltrainers(response.data);
        
      } catch (error) {
        console.error("Error fetching total users count:", error);
      }
    };
    fetchTrainerscount();
    fetchDietPlancount();
    fetchTotalWorkoutplan();
    fetchTotalsubscribedUsers();
    fetchTotalUsers();
  }, []);

  const currentYear = new Date().getFullYear();



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Customers" }}
                count={totalUsers}
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Subscribed customers" }}
                count={totalsubscribedUsers}
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Workouts" }}
                count={totalWorkoutplan}
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Diets" }}
                count={totaldietplan}
                percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Trainers" }}
                count={totalTrainers}
                percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              {/* <BuildByDevelopers /> */}
            </Grid>
            <Grid item xs={12} lg={5}>
              {/* <WorkWithTheRockets /> */}
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <ReportsBarChart
                title="active users"
                description={
                  <>
                    (<strong>+23%</strong>) than last week
                  </>
                }
                chart={chart}
                items={items}
              />
            </Grid>
            <Grid item xs={12} lg={7}>
              <GradientLineChart
                title="Sales Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        {currentYear}
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="20.25rem"
                chart={gradientLineChartData()}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
