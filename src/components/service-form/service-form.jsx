import React from 'react';
import { Form, Input, Checkbox, Button, Typography } from 'antd';

const { Title } = Typography;
const { form } = Form.useForm;

const ServiceForm = (props) => {
  console.log(props);

  const handleAddToConfig = (values) => {
    //
    // const data = {
    //   service_type: values.type,
    //   name: values.name,
    //   title: values.title,
    //   description: `${values.os} ${values.ram} ${values.disk}`,
    // };
    // console.log('Success:', data);
    // props.addItemToConfig(data);
  };

  const onFinish = (values) => {
    const data = {
      id: Math.random().toString(16).slice(2),
      service_type: values.type,
      name: values.name,
      title: values.title,
      description: `${values.os} ${values.ram} ${values.disk}`,
    };

    console.log('Success:', data);
    props.addItemToConfigAC(data);
    props.getConfig();
    props.setFormViewStatus(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleBackToServices = () => {
    props.setFormViewStatus(false);
  };

  const handleResetForm = () => {};

  return (
    <>
      <Form
        form={form}
        name='basic'
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Наименование ресурса'
          name='name'
          rules={[{ required: true, message: 'Please input name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Заголовок'
          name='title'
          rules={[{ required: false, message: 'Please input name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Тип ресурса'
          name='type'
          rules={[{ required: false, message: 'Please input name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Операционная система'
          name='os'
          rules={[{ required: false, message: 'Please input your os!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Объем оперативной памяти'
          name='ram'
          rules={[{ required: false, message: 'Please input ram!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Объем дискового пространства'
          name='disk'
          rules={[{ required: false, message: 'Please input disk!' }]}
        >
          <Input />
        </Form.Item>

        <div style={{ display: 'flex', padding: '0 0 0 40px' }}>
          <Form.Item style={{ padding: '0 20px 0 0' }}>
            <Button
              type='ghost'
              danger
              htmlType='button'
              onClick={handleBackToServices}
            >
              Вернуться назад
            </Button>
          </Form.Item>

          <Form.Item style={{ padding: '0 20px 0 0' }}>
            <Button type='ghost' htmlType='reset' onClick={handleResetForm}>
              Очистить форму
            </Button>
          </Form.Item>

          <Form.Item style={{ padding: '0 20px 0 0' }}>
            <Button
              type='primary'
              htmlType='submit'
              onClick={handleAddToConfig}
            >
              Добавить в конфигурацию
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default ServiceForm;
