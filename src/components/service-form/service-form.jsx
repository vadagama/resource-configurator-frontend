import React from 'react';
import { Form, Input, Checkbox, Button, Typography, Select } from 'antd';
import { Radio, Slider } from 'antd';

const { Option } = Select;
const { Title } = Typography;
const { form } = Form.useForm;

const ServiceForm = (props) => {
  console.log(props);

  const handleAddToConfig = (values) => {};

  const onFinish = (values) => {
    const data = {
      id: Math.random().toString(16).slice(2),
      service_type: props.currentMenuItem,
      name: values.name,
      title: props.currentFormServiceId,
      description: `ОС: ${values.os}, ${values.cores} ядра ${values.processor_type}, ${values.ram}GiB RAM, Основной диск ${values.disk}GiB ${values.disk_type}`,
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
          label='Операционная система'
          name='os'
          rules={[{ required: false }]}
        >
          <Select
            defaultValue='Microsoft Windows Server 2016'
            style={{ width: 200 }}
          >
            <Option value='Ubuntu 20.04 LTS'>Ubuntu 20.04 LTS</Option>
            <Option value='Microsoft Windows'>Microsoft Windows</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label='Количество ядер процессора'
          name='cores'
          rules={[{ required: false }]}
        >
          <Radio.Group defaultValue='4'>
            <Radio.Button value='4'>4</Radio.Button>
            <Radio.Button value='8'>8</Radio.Button>
            <Radio.Button value='16'>16</Radio.Button>
            <Radio.Button value='32'>32</Radio.Button>
            <Radio.Button value='64'>64</Radio.Button>
            <Radio.Button value='128'>128</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label='Тип процессора'
          name='processor_type'
          rules={[{ required: false }]}
        >
          <Radio.Group defaultValue='CPU' buttonStyle='solid'>
            <Radio.Button value='CPU'>CPU</Radio.Button>
            <Radio.Button value='GPU'>GPU</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label='Объем оперативной памяти (GiB)'
          name='ram'
          rules={[{ required: false }]}
        >
          <Radio.Group defaultValue='4'>
            <Radio value='4'>4</Radio>
            <Radio value='8'>8</Radio>
            <Radio value='16'>16</Radio>
            <Radio value='32'>32</Radio>
            <Radio value='64'>64</Radio>
            <Radio value='128'>128</Radio>
            <Radio value='256'>256</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label='Объем диска (GiB)'
          name='disk'
          style={{ padding: '20px 0 0 0' }}
          rules={[{ required: false }]}
        >
          <Slider defaultValue={30} min={0} max={2000} tooltipVisible />
        </Form.Item>

        <Form.Item
          label='Тип диска'
          name='disk_type'
          style={{ padding: '0  0 40px 0' }}
          rules={[{ required: false }]}
        >
          <Radio.Group defaultValue='HDD' buttonStyle='solid'>
            <Radio.Button value='SSD'>SSD</Radio.Button>
            <Radio.Button value='HDD'>HDD</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <div style={{ display: 'flex', padding: '0 0 0 40px' }}>
          <Form.Item style={{ padding: '0 15px 0 0' }}>
            <Button
              type='ghost'
              danger
              htmlType='button'
              onClick={handleBackToServices}
            >
              Вернуться назад
            </Button>
          </Form.Item>

          <Form.Item style={{ padding: '0 15px 0 0' }}>
            <Button type='ghost' htmlType='reset' onClick={handleResetForm}>
              Очистить форму
            </Button>
          </Form.Item>

          <Form.Item style={{ padding: '0 15px 0 0' }}>
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
