/* eslint-disable no-unused-vars */
import React from "react";
import Layout, { Content, Header } from "antd/lib/layout/layout";
import { PageHeader } from "antd";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { APP_NAME } from "./Constants";
import Sidebar from "./Components/Sidebar";
import UserTable from "./Components/UserTable";
function Dashboard() {
  return (
    <div>
      <Layout style={{ height: "100%" }}>
        <Header>
          <h2 style={{ color: "#fff" }}>{APP_NAME}</h2>
        </Header>
      </Layout>
      <Layout style={{}}>
        <Sidebar />
        <Layout
          style={{
            height: "100vh",
            padding: "0 24px 24px",
            overflow: "scroll",
          }}
        >
          <PageHeader style={{ padding: "24px 0 0 24px" }} />
          <Content
            style={{
              margin: "24px 0px 0px 0px",
              padding: 24,
              background: "white",
              minHeight: "auto",
            }}
          >
            <Routes>
              <Route path="/*" element={<>Create Dash Component</>} />
              <Route path="/home" element={<> OVERVIEW BUILDERS TOTAL </>} />
              <Route path="/users" element={<UserTable />} />
              <Route path="/map" element={<>PLEASE LET ME FINISH THE MAP</>} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Dashboard;
