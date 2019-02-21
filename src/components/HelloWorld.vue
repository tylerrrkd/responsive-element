<template>
  <div class="helloWorld">
    <Form ref="form" :model="form" label-width="80px">
      <FormItem label="活动名称">
        <Input v-model="form.name"></Input>
      </FormItem>
      <FormItem label="活动区域">
        <Select v-model="form.region" placeholder="请选择活动区域">
          <Option label="区域一" value="shanghai"></Option>
          <Option label="区域二" value="beijing"></Option>
        </Select>
      </FormItem>
      <FormItem label="活动时间">
        <Col :span="11">
        <DatePicker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></DatePicker>
        </Col>
      </FormItem>
      <FormItem label="活动性质">
        <CheckboxGroup v-model="form.type">
          <Checkbox label="美食/餐厅线上活动" name="type"></Checkbox>
          <Checkbox label="地推活动" name="type"></Checkbox>
          <Checkbox label="线下主题活动" name="type"></Checkbox>
          <Checkbox label="单纯品牌曝光" name="type"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="特殊资源">
        <RadioGroup v-model="form.resource">
          <Radio label="线上品牌商赞助"></Radio>
          <Radio label="线下场地免费"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="活动形式">
        <Input type="textarea" v-model="form.desc"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="onSubmit">立即创建</Button>
        <Button>取消</Button>
      </FormItem>
    </Form>
    <h4>缩放窗口以查看响应式效果</h4>
  </div>
</template>

<script>
import {
  Form,
  FormItem,
  Button,
  Input,
  Col,
  Select,
  Option,
  DatePicker,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
} from 'element-ui'
import './HelloWorld.scss'
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  components: {
    Form,
    FormItem,
    Button,
    Input,
    Col,
    Select,
    Option,
    DatePicker,
    RadioGroup,
    Radio,
    CheckboxGroup,
    Checkbox,
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    }
  }
}
</script>
<style lang="scss" scoped>
.helloWorld {
  margin: 0 auto;
  width: 6rem;
  h4 {
    font-size: 0.5rem;
  }
}
</style>