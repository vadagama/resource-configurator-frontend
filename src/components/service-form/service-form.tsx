import React from 'react';
import { Form, Input, Checkbox, Button, Typography } from 'antd';

const { Title } = Typography;

const ServiceForm = (props: any) => {
  console.log(props);
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleClick = () => {
    props.setFormViewStatus(false);
  };

  return (
    <>
      <Form
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
          label='Операционная система'
          name='os'
          rules={[{ required: false, message: 'Please input your os!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='ghost' danger htmlType='button' onClick={handleClick}>
            Вернуться назад
          </Button>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='ghost' htmlType='reset' onClick={handleClick}>
            Очистить форму
          </Button>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' onClick={handleClick}>
            Добавить к таблице
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ServiceForm;
