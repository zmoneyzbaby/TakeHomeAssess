import Modal from "antd/lib/modal/Modal";
import React from "react";

import { AutoComplete } from "antd";
import { Form, Input, InputNumber } from "antd";
import { AUSTIN_AREAS } from "../Constants";

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} is required!",
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: "${label} is not a valid email!",
    // eslint-disable-next-line no-template-curly-in-string
    number: "${label} is not a valid number!",
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    range: "${label} must be between ${min} and ${max}",
  },
};

function NewBuilderModal({
  showModal,
  handleCancel,
  handleSubmit,
  setShowAlert,
  setAlertType,
}) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={showModal}
      title="Add New Builder"
      onCancel={handleCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            handleSubmit(values);
            setShowAlert(
              "Success: " +
                values.builder.firstName +
                " " +
                values.builder.lastName +
                " Successfully Added"
            );
            setAlertType("success");
          })
          .catch((info) => {
            setShowAlert("Failed: Unable to Add Builder");
            setAlertType("error");
          });
      }}
    >
      <Form form={form} name="new-builders" validateMessages={validateMessages}>
        <Form.Item
          name={["builder", "firstName"]}
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["builder", "lastName"]}
          label="Last Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={["builder", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["builder", "phone"]}
          label="Phone Number"
          rules={[
            {
              min: 1000000000,
              message: "Please enter 9 digits.",
              required: true,
              type: "number",
            },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            placeholder=" XXX XXX XXXX "
            maxLength={10}
            controls={false}
          />
        </Form.Item>
        <Form.Item
          name={["builder", "ext"]}
          label="Phone Ext"
          rules={[
            {
              type: "number",
            },
          ]}
        >
          <InputNumber
            style={{ width: "30%" }}
            placeholder=" XXXX"
            maxLength={5}
            controls={false}
          />
        </Form.Item>
        <Form.Item
          name={["builder", "address"]}
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["builder", "area"]}
          label="Area"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <AutoComplete
            style={{
              width: 200,
            }}
            options={AUSTIN_AREAS}
            placeholder="type area"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default NewBuilderModal;
