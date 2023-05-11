import { BasicColumn, FormSchema, useRender } from '@/components/Table'
import { DICT_TYPE, getDictOpts } from '@/utils/dict'

export const columns: BasicColumn[] = [
  {
    title: '发送人',
    dataIndex: 'templateNickname',
    width: 100
  },
  {
    title: '发送时间',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDate(text)
    }
  },
  {
    title: '类型',
    dataIndex: 'templateType',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.SYSTEM_NOTIFY_TEMPLATE_TYPE)
    }
  },
  {
    title: '内容',
    dataIndex: 'templateContent',
    width: 300
  },
  {
    title: '是否已读',
    dataIndex: 'readStatus',
    width: 180,
    customRender: ({ text }) => {
      return useRender.renderDict(text, DICT_TYPE.INFRA_BOOLEAN_STRING)
    }
  }
]

export const searchFormSchema: FormSchema[] = [
  {
    label: '是否已读',
    field: 'readStatus',
    component: 'Select',
    componentProps: {
      options: getDictOpts(DICT_TYPE.INFRA_BOOLEAN_STRING)
    },
    colProps: { span: 8 }
  },
  {
    label: '发送时间',
    field: 'createTime',
    component: 'RangePicker',
    colProps: { span: 8 }
  }
]

export const formSchema: FormSchema[] = [
  {
    label: '编号',
    field: 'id',
    show: false,
    component: 'Input'
  },
  {
    label: '模版编码',
    field: 'code',
    required: true,
    component: 'Input'
  },
  {
    label: '模板名称',
    field: 'name',
    required: true,
    component: 'Input'
  },
  {
    label: '发件人名称',
    field: 'nickname',
    required: true,
    component: 'Input'
  },
  {
    label: '模板内容',
    field: 'content',
    required: true,
    component: 'InputTextArea'
  },
  {
    label: '类型',
    field: 'type',
    component: 'Select',
    defaultValue: 0,
    componentProps: {
      options: getDictOpts(DICT_TYPE.SYSTEM_NOTIFY_TEMPLATE_TYPE)
    }
  },
  {
    label: '开启状态',
    field: 'status',
    component: 'RadioGroup',
    defaultValue: 0,
    componentProps: {
      options: getDictOpts(DICT_TYPE.COMMON_STATUS)
    }
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea'
  }
]
