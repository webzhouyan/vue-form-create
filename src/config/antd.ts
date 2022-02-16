export interface Rules {
  trigger: string
  enum: string
  len?: number
  max?: number
  message: string
  min?: number
  pattern: string
  required: boolean
  type: string
}

export interface WidgetForm {
  list: any[]
  config: {
    size: string
    hideRequiredMark: boolean
    layout: string
    labelAlign: string
    labelCol: {
      span: number
      offset: number
    }
  }
}

const rules: Rules = {
  trigger: 'blur',
  enum: '',
  len: undefined,
  max: undefined,
  message: '',
  min: undefined,
  pattern: '',
  required: false,
  type: 'any'
}

export const widgetForm: WidgetForm = {
  list: [],
  config: {
    size: 'default',
    hideRequiredMark: false,
    layout: 'horizontal',
    labelAlign: 'right',
    labelCol: {
      span: 3,
      offset: 0
    }
  }
}

export const basicComponents = [
  {
    label: '文本',
    type: 'input',
    options: {
      width: '100%',
      defaultValue: '',
      placeholder: '',
      maxlength: null,
      prefix: '',
      suffix: '',
      addonBefore: '',
      addonAfter: '',
      disabled: false,
      allowClear: false,
      readonly: false,
      rules
    }
  },
  {
    label: '金额',
    type: 'input',
    options: {
      width: '100%',
      defaultValue: '',
      placeholder: '请输入金额',
      maxlength: null,
      prefix: '',
      suffix: '元',
      addonBefore: '',
      addonAfter: '',
      disabled: false,
      allowClear: false,
      readonly: false,
      rules
    }
  },
  {
    label: '日期',
    type: 'date',
    options: {
      defaultValue: '',
      width: '',
      placeholder: '请选择时间',
      format: 'YYYY-MM-DD',
      readonly: false,
      allowClear: true,
      disabled: false,
      rules
    }
  },
  {
    label: '数值',
    type: 'number',
    options: {
      defaultValue: '',
      width: '60%',
      step: 1,
      readonly: false,
      disabled: false,
      rules
    }
  },
  {
    label: '邮箱',
    type: 'input',
    options: {
      width: '100%',
      defaultValue: '',
      placeholder: '请输入邮箱',
      maxlength: null,
      prefix: '',
      suffix: '',
      addonBefore: '',
      addonAfter: '',
      disabled: false,
      allowClear: false,
      readonly: false,
      rules
    }
  },
  {
    label: '手机号',
    type: 'input',
    options: {
      width: '100%',
      defaultValue: '',
      placeholder: '请输入手机号',
      maxlength: null,
      prefix: '',
      suffix: '',
      addonBefore: '',
      addonAfter: '',
      disabled: false,
      allowClear: false,
      readonly: false,
      rules
    }
  }
]

export const advanceComponents = [
  {
    label: '图片',
    type: 'img-upload',
    options: {
      defaultValue: [],
      name: 'file',
      action: 'http://example.com/upload',
      method: 'post',
      listType: 'text',
      accept: 'image/*',
      maxCount: 3,
      multiple: false,
      disabled: false,
      rules
    }
  },
  {
    label: '富文本编辑器',
    type: 'richtext-editor',
    options: {
      defaultValue: '',
      width: '',
      disabled: false
    }
  },
  {
    label: '级联选择器',
    type: 'cascader',
    options: {
      defaultValue: [],
      width: '200px',
      placeholder: '',
      disabled: false,
      allowClear: false,
      remote: true,
      remoteOptions: [],
      props: {
        label: 'label',
        value: 'value',
        children: 'children'
      },
      remoteFunc:
        'https://raw.githubusercontent.com/fuchengwei/vue-form-create/master/mock/mock.json',
      rules
    }
  }
]

export const layoutComponents = [
  {
    label: '栅格布局',
    type: 'grid',
    columns: [
      {
        span: 12,
        list: []
      },
      {
        span: 12,
        list: []
      }
    ],
    options: {
      gutter: 0,
      justify: 'start',
      align: 'top'
    }
  }
]
