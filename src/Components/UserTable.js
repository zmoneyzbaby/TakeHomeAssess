import React from "react";
import { Table, Space, Button } from "antd";
import { ReloadOutlined, UserAddOutlined } from "@ant-design/icons";
import NutsAndBoltsRestService from "../Services/NutsAndBoltsRestService";
import { useState, useEffect } from "react";
import NewBuilderModal from "./NewBuilderModal";
import { Alert } from "antd";
import { formatBuilder } from "../utils/formatFunctions";

const api = new NutsAndBoltsRestService(); // Update the document title using the browser API

//Formats the name
//If Time-use regex and get rid of loop/array
function formatName(fullName) {
  const toRemove = ["Mrs.", "Ms.", "Mr.", "Mrs", "PhD", "Mr", "II"];
  toRemove.forEach((badWord) => {
    fullName = fullName.replace(badWord, "");
  });
  return fullName;
}

function UserTable() {
  const [showAlert, setShowAlert] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [loading, setloading] = useState(true);
  const [alertType, setAlertType] = useState("");

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleSubmit = (builderValues) => {
    setShowModal(false);
    builderValues.builder.id = dataSource.length + 1;
    const formattedBuilder = formatBuilder(builderValues.builder);
    api.addBuilder(formattedBuilder);
    toggleRefresh();
  };

  const toggleRefresh = () => {
    setRefresh(!refresh);
  };

  //ComponetdidMount - dependent on refresh state
  useEffect(() => {
    api
      .getBuilders()
      .then((data) => setDataSource(data))
      .catch(setDataSource([]))
      .finally(() => {
        setloading(false);
      });
  }, [refresh]);

  return (
    <>
      <Space
        size={[8, 16]}
        wrap
        style={{ width: "100%", justifyContent: "space-between" }}
      >
        <Button type="primary" onClick={() => setShowModal(true)}>
          <UserAddOutlined />
          Add Builder
        </Button>
        <Button type="default" onClick={toggleRefresh}>
          <ReloadOutlined />
          Refresh
        </Button>
      </Space>
      <div>
        {showModal && (
          <NewBuilderModal
            showModal={showModal}
            handleCancel={handleCancel}
            handleSubmit={handleSubmit}
            setShowAlert={setShowAlert}
            setAlertType={setAlertType}
          />
        )}
        {alertType === "error" && (
          <Alert
            message={showAlert}
            type="error"
            showIcon
            closable="true"
            style={{ marginTop: "15px" }}
          />
        )}

        {alertType === "success" && (
          <Alert
            message={showAlert}
            type="success"
            showIcon
            closable="true"
            style={{ marginTop: "15px" }}
          />
        )}

        <Table
          style={{ marginTop: "24px" }}
          size="small"
          rowKey="id"
          pagination={{ position: ["bottomCenter"] }}
          dataSource={dataSource}
          loading={loading}
          columns={[
            {
              key: "1",
              align: "left",
              title: "ID",
              dataIndex: "id",
            },
            {
              key: "2",
              title: "NAME",
              align: "left",
              render: (data) => formatName(data.fullName),
            },
            {
              key: "4",
              title: "PHONE",
              align: "left",
              dataIndex: "phone",
            },
            {
              key: "5",
              title: "EMAIL",
              align: "left",
              dataIndex: "email",
            },

            {
              key: 6,
              title: "ADDRESS",
              render: (data) => data.address.description,
            },
            {
              key: "8",
              title: "AREA",
              align: "left",
              render: (data) => data.address.area,
            },
          ]}
        ></Table>
      </div>
    </>
  );
}

export default UserTable;
