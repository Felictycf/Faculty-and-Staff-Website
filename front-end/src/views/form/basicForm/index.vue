<!--第一个editing 页面-->
<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <a-card :body-style="{ padding: '24px 32px' }" :bordered="false">
    <a-form :form="form">
      <a-form-item
        v-show="false"
        label="id"
        :labelCol="{ lg: { span: 7 }, sm: { span: 17 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input v-decorator="['id', { rules: [{ required: true }] }]" name="id" placeholder="Please enter id" />
      </a-form-item>

      <a-form-item
        label="Title"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input
          v-decorator="['title', { rules: [{ required: true }] }]"
          name="title"
          placeholder="Please enter Title"
        />
      </a-form-item>

      <a-form-item
        label="Name"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-row :gutter="10">
          <a-col :span="12">
            <a-input
              v-decorator="['firstName', { rules: [{ required: true }] }]"
              name="firstName"
              placeholder="Please enter First name"
            />
          </a-col>
          <a-col :span="12">
            <a-input
              v-decorator="['lastName', { rules: [{ required: true }] }]"
              name="lastName"
              placeholder="Please enter Last name"
            />
          </a-col>
        </a-row>
      </a-form-item>

      <a-form-item
        label="Email"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input
          v-decorator="['email', { rules: [{ required: true }] }]"
          name="email"
          placeholder="Please enter Email"
        />
      </a-form-item>

      <a-form-item
        label="Phone"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input
          v-decorator="['phone', { rules: [{ required: true }] }]"
          name="phone"
          placeholder="Please enter Phone"
        />
      </a-form-item>
<!--删除掉 department-->
<!--      <a-form-item-->
<!--        label="Department"-->
<!--        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"-->
<!--        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"-->
<!--      >-->
<!--        <a-input-->
<!--          v-decorator="['department', { rules: [{ required: true }] }]"-->
<!--          name="department"-->
<!--          placeholder="Please enter Department"-->
<!--        />-->
<!--      </a-form-item>-->
      <a-form-item
        label="Contact"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input
          v-decorator="['contact', { rules: [{ required: true }] }]"
          name="contact"
          placeholder="Please enter Contact"
        />
      </a-form-item>
      <!-- <a-form-item
        label="Teaching"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input
          v-decorator="['teaching', { rules: [{ required: true }] }]"
          name="teaching"
          placeholder="Please enter Teaching"
        />
      </a-form-item> -->
      <a-form-item
        label="publication"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-textarea
          :auto-size="{ minRows: 2, maxRows: 20 }"
          v-decorator="['contribution', { rules: [{ required: true }] }]"
          name="contribution"
          placeholder="Please enter publication"
        />
      </a-form-item>

      <a-form-item
        label="Bio"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input v-decorator="['bio', { rules: [{ required: true }] }]" name="bio" placeholder="Please enter Bio" />
      </a-form-item>

      <a-form-item
        label="Location"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input
          v-decorator="['location', { rules: [{ required: true }] }]"
          name="location"
          placeholder="Please enter Location"
        />
      </a-form-item>

      <!-- <a-form-item
        label="Aacdimic Position"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input
          v-decorator="['aacdimicPosition', { rules: [{ required: true }] }]"
          name="aacdimicPosition"
          placeholder="Please enter Aacdimic Position"
        />
      </a-form-item> -->

      <a-form-item
        label="office"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-select placeholder="Please enter office" v-decorator="['office', { rules: [{ required: true }] }]">
          <a-select-option value="Epsom">Epsom</a-select-option>
          <a-select-option value="New market">New market</a-select-option>
          <a-select-option value="City">City</a-select-option>
          <a-select-option value="Avondale">Avondale</a-select-option>
          <a-select-option value="Newlynn">Newlynn</a-select-option>
          <a-select-option value="Mount eden">Mount eden</a-select-option>
          <a-select-option value="Remuera">Remuera</a-select-option>
          <a-select-option value="Ellerslie">Ellerslie</a-select-option>
          <a-select-option value="Albany">Albany</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item
        label="faculty"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-select placeholder="Please enter faculty" v-decorator="['faculty', { rules: [{ required: true }] }]">
          <a-select-option value="Art">Art</a-select-option>
          <a-select-option value="Software engineering">Software engineering</a-select-option>
          <a-select-option value="architecture">architecture</a-select-option>
          <a-select-option value="Business">Business</a-select-option>
          <a-select-option value="Others">Others</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item
        label="Degrees"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input
          v-decorator="['degtees', { rules: [{ required: true }] }]"
          name="degtees"
          placeholder="Please enter Degrees"
        />
      </a-form-item>

      <a-form-item
        label="Avibilitiy"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input
          v-decorator="['avibilitiy', { rules: [{ required: true }] }]"
          name="avibilitiy"
          placeholder="Please enter Avibilitiy"
        />
      </a-form-item>
      <!-- <a-form-item
        label="Upload"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-upload
          name="avatar"
          action="#"
          :maxCount="1"
          :file-list="fileList"
          :before-upload="beforeUpload"
          headers="{
            authorization: 'authorization-text'
            X-Requested-With: null
          }"
        >
          <a-button>
            <upload-outlined></upload-outlined>
            Click to Upload
          </a-button>
        </a-upload>
      </a-form-item> -->

      <a-form-item
        label="Avatar"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-upload
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          accept="image/jpeg,image/jpg,image/png"
          :headers="{
            'X-Requested-With': null,
          }"
          v-decorator="['avatar', { rules: [{ required: true }] }]"
          :show-upload-list="false"
          :customRequest="(file) => handleChange(file, 'avatar')"
        >
          <img v-if="formValue.avatar" :src="formValue.avatar" alt="avatar" class="upload-img" />

          <div v-else>
            <!-- <loading-outlined v-if="loading"></loading-outlined> -->
            <!-- <plus-outlined v-else></plus-outlined> -->
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-form-item>

      <a-form-item
        label="Background"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-upload
          name="backgroundImage"
          list-type="picture-card"
          class="avatar-uploader"
          accept="image/jpeg,image/jpg,image/png"
          :headers="{
            'X-Requested-With': null,
          }"
          v-decorator="['backgroundImage', { rules: [{ required: true }] }]"
          :show-upload-list="false"
          :customRequest="(file) => handleChange(file, 'backgroundImage')"
        >
          <img v-if="formValue.backgroundImage" :src="formValue.backgroundImage" alt="avatar" class="upload-img" />

          <div v-else>
            <!-- <loading-outlined v-if="loading"></loading-outlined> -->
            <!-- <plus-outlined v-else></plus-outlined> -->
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-form-item>

      <a-form-item
        label="Fields of research"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-input
          v-decorator="['researchAreas', { rules: [{ required: true }] }]"
          name="researchAreas"
          placeholder="Please enter Fields of research"
        />
      </a-form-item>

      <a-form-item
        label="Contributions"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-select
          mode="tags"
          placeholder="Please enter Contributions"
          v-decorator="['contributions', { rules: [{ required: true }] }]"
        >
          <a-select-option v-for="item in userList" :key="item.id" :value="item.id"
            >{{ item.firstName }} {{ item.lastName }}</a-select-option
          >
        </a-select>
      </a-form-item>

      <a-form-item
        label="publications"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-table :columns="columns2" :dataSource="data2" :pagination="false">
          <template
            v-for="(col2, indx) in ['time', 'title', 'img', 'pdf', 'description', '']"
            :slot="col2"
            slot-scope="text2, record2"
          >
            <a-textarea
              :key="col2"
              v-if="record2?.editable"
              style="margin: -5px 0"
              :value="text2"
              :placeholder="columns2[indx].title"
              @change="(e) => handleRowChange2(e.target.value, record2.key, col2)"
            />
            <template v-else>{{ text2 }}</template>
          </template>

          <template slot="operation" slot-scope="text, record2">
            <template v-if="record2?.editable">
              <span v-if="record2?.isNew">
                <a-popconfirm title="is delete" @confirm="remove2(record2.key)">
                  <a>delete</a>
                </a-popconfirm>
              </span>
              <span v-else>
                <a @click="cancel(record2.key)">cancel</a>
              </span>
            </template>
            <span v-else>
              <a @click="toggle(record2.key)">edit</a>
              <a-popconfirm title="is delete" @confirm="remove2(record2.key)">
                <a>delete</a>
              </a-popconfirm>
            </span>
          </template>
        </a-table>
        <a-button
          style="width: 100%; margin-top: 16px; margin-bottom: 8px"
          type="dashed"
          icon="plus"
          @click="newMember2"
          >add</a-button
        >
      </a-form-item>

      <a-form-item
        label="highlights"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-table :columns="columns1" :dataSource="data1" :pagination="false">
          <template v-for="(col, i) in ['time', 'description', '']" :slot="col" slot-scope="text, record">
            <a-textarea
              :key="col"
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              :placeholder="columns1[i].title"
              @change="(e) => handleRowChange1(e.target.value, record.key, col)"
            />
            <template v-else>{{ text }}</template>
          </template>

          <template slot="operation" slot-scope="text, record">
            <template v-if="record.editable">
              <span v-if="record.isNew">
                <a-popconfirm title="is delete?" @confirm="remove1(record.key)">
                  <a>delete</a>
                </a-popconfirm>
              </span>
              <span v-else>
                <a @click="cancel(record.key)">cancel</a>
              </span>
            </template>
            <span v-else>
              <a @click="toggle(record.key)">edit</a>
              <a-popconfirm title="是否要删除此行？" @confirm="remove1(record.key)">
                <a>delete</a>
              </a-popconfirm>
            </span>
          </template>
        </a-table>
        <a-button
          style="width: 100%; margin-top: 16px; margin-bottom: 8px"
          type="dashed"
          icon="plus"
          @click="newMember1"
          >add</a-button
        >
      </a-form-item>

      <a-form-item
        label="Degrees"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-table :columns="columns3" :dataSource="data3" :pagination="false">
          <template v-for="(col, i) in ['time', 'description', '']" :slot="col" slot-scope="text, record">
            <a-textarea
              :key="col"
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              :placeholder="columns3[i].title"
              @change="(e) => handleRowChange3(e.target.value, record.key, col)"
            />
            <template v-else>{{ text }}</template>
          </template>

          <template slot="operation" slot-scope="text, record">
            <template v-if="record.editable">
              <span v-if="record.isNew">
                <a-popconfirm title="is delete?" @confirm="remove3(record.key)">
                  <a>delete</a>
                </a-popconfirm>
              </span>
              <span v-else>
                <a @click="cancel(record.key)">cancel</a>
              </span>
            </template>
            <span v-else>
              <a @click="toggle(record.key)">edit</a>
              <a-popconfirm title="是否要删除此行？" @confirm="remove3(record.key)">
                <a>delete</a>
              </a-popconfirm>
            </span>
          </template>
        </a-table>
        <a-button
          style="width: 100%; margin-top: 16px; margin-bottom: 8px"
          type="dashed"
          icon="plus"
          @click="newMember3"
          >add</a-button
        >
      </a-form-item>

      <a-form-item
        label="Aacdimic Position"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-table :columns="columns4" :dataSource="data4" :pagination="false">
          <template v-for="(col, i) in ['time', 'description', '']" :slot="col" slot-scope="text, record">
            <a-textarea
              :key="col"
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              :placeholder="columns4[i].title"
              @change="(e) => handleRowChange4(e.target.value, record.key, col)"
            />
            <template v-else>{{ text }}</template>
          </template>

          <template slot="operation" slot-scope="text, record">
            <template v-if="record.editable">
              <span v-if="record.isNew">
                <a-popconfirm title="is delete?" @confirm="remove4(record.key)">
                  <a>delete</a>
                </a-popconfirm>
              </span>
              <span v-else>
                <a @click="cancel(record.key)">cancel</a>
              </span>
            </template>
            <span v-else>
              <a @click="toggle(record.key)">edit</a>
              <a-popconfirm title="是否要删除此行？" @confirm="remove4(record.key)">
                <a>delete</a>
              </a-popconfirm>
            </span>
          </template>
        </a-table>
        <a-button
          style="width: 100%; margin-top: 16px; margin-bottom: 8px"
          type="dashed"
          icon="plus"
          @click="newMember4"
          >add</a-button
        >
      </a-form-item>

      <a-form-item
        label="Teaching"
        :labelCol="{ lg: { span: 4 }, sm: { span: 4 } }"
        :wrapperCol="{ lg: { span: 16 }, sm: { span: 20 } }"
      >
        <a-table :columns="columns5" :dataSource="data5" :pagination="false">
          <template v-for="(col, i) in ['time', 'description', '']" :slot="col" slot-scope="text, record">
            <a-textarea
              :key="col"
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              :placeholder="columns5[i].title"
              @change="(e) => handleRowChange5(e.target.value, record.key, col)"
            />
            <template v-else>{{ text }}</template>
          </template>

          <template slot="operation" slot-scope="text, record">
            <template v-if="record.editable">
              <span v-if="record.isNew">
                <a-popconfirm title="is delete?" @confirm="remove5(record.key)">
                  <a>delete</a>
                </a-popconfirm>
              </span>
              <span v-else>
                <a @click="cancel(record.key)">cancel</a>
              </span>
            </template>
            <span v-else>
              <a @click="toggle(record.key)">edit</a>
              <a-popconfirm title="是否要删除此行？" @confirm="remove5(record.key)">
                <a>delete</a>
              </a-popconfirm>
            </span>
          </template>
        </a-table>
        <a-button
          style="width: 100%; margin-top: 16px; margin-bottom: 8px"
          type="dashed"
          icon="plus"
          @click="newMember5"
          >add</a-button
        >
      </a-form-item>

      <a-form-item :wrapperCol="{ span: 24 }" style="text-align: center">
        <a-button htmlType="submit" type="primary" @click="handleSubmit">submit</a-button>
        <a-button
          htmlType="submit"
          type="primary"
          :style="{
            marginLeft: '20px',
          }"
          @click="toChooseTemplate"
          >To template choose
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
import { message } from 'ant-design-vue'
import { login, getInfo, logout } from '@/api/login'
import axios from 'axios'
import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'

export default {
  name: 'BaseForm',
  data() {
    return {
      form: this.$form.createForm(this),
      formValue: {},
      userList: [],

      columns1: [
        {
          title: 'time',
          dataIndex: 'time',
          key: 'time',
          width: '50%',
          scopedSlots: { customRender: 'time' },
        },
        {
          title: 'description',
          dataIndex: 'description',
          key: 'description',
          width: '50%',
          scopedSlots: { customRender: 'description' },
        },
        {
          title: 'action',
          key: 'action',
          scopedSlots: { customRender: 'operation' },
        },
      ],
      data1: [],

      columns2: [
        {
          title: 'time',
          dataIndex: 'time',
          key: 'time',
          width: '10%',
          scopedSlots: { customRender: 'time' },
        },

        {
          title: 'title',
          dataIndex: 'title',
          key: 'title',
          width: '20%',
          scopedSlots: { customRender: 'title' },
        },

        {
          title: 'img',
          dataIndex: 'img',
          key: 'img',
          width: '20%',
          scopedSlots: { customRender: 'img' },
        },

        {
          title: 'pdf',
          dataIndex: 'pdf',
          key: 'pdf',
          width: '30%',
          scopedSlots: { customRender: 'pdf' },
        },

        {
          title: 'description',
          dataIndex: 'description',
          key: 'description',
          width: '30%',
          scopedSlots: { customRender: 'description' },
        },
        {
          title: 'action',
          key: 'action',
          scopedSlots: { customRender: 'operation' },
        },
      ],
      data2: [],

      columns3: [
        {
          title: 'time',
          dataIndex: 'time',
          key: 'time',
          width: '20%',
          scopedSlots: { customRender: 'time' },
        },

        {
          title: 'description',
          dataIndex: 'description',
          key: 'description',
          width: '50%',
          scopedSlots: { customRender: 'description' },
        },
        {
          title: 'action',
          key: 'action',
          scopedSlots: { customRender: 'operation' },
        },
      ],
      data3: [],
      columns4: [
        {
          title: 'time',
          dataIndex: 'time',
          key: 'time',
          width: '20%',
          scopedSlots: { customRender: 'time' },
        },

        {
          title: 'description',
          dataIndex: 'description',
          key: 'description',
          width: '50%',
          scopedSlots: { customRender: 'description' },
        },
        {
          title: 'action',
          key: 'action',
          scopedSlots: { customRender: 'operation' },
        },
      ],
      data4: [],
      columns5: [
        {
          title: 'time',
          dataIndex: 'time',
          key: 'time',
          width: '20%',
          scopedSlots: { customRender: 'time' },
        },

        {
          title: 'description',
          dataIndex: 'description',
          key: 'description',
          width: '50%',
          scopedSlots: { customRender: 'description' },
        },
        {
          title: 'action',
          key: 'action',
          scopedSlots: { customRender: 'operation' },
        },
      ],
      data5: [],
    }
  },

  mounted() {
    this.getMyInfo()
    this.getUserList()
  },

  methods: {
    handleRowChange1(value, key, column) {
      const newData = [...this.data1]
      const target = newData.find((item) => key === item.key)
      if (target) {
        target[column] = value
        this.data1 = newData
      }
    },
    handleRowChange2(value, key, column) {
      const newData = [...this.data2]
      const target = newData.find((item) => key === item.key)
      if (target) {
        target[column] = value
        this.data2 = newData
      }
    },
    handleRowChange3(value, key, column) {
      const newData = [...this.data3]
      const target = newData.find((item) => key === item.key)
      if (target) {
        target[column] = value
        this.data3 = newData
      }
    },
    handleRowChange4(value, key, column) {
      const newData = [...this.data4]
      const target = newData.find((item) => key === item.key)
      if (target) {
        target[column] = value
        this.data4 = newData
      }
    },
    handleRowChange5(value, key, column) {
      const newData = [...this.data5]
      const target = newData.find((item) => key === item.key)
      if (target) {
        target[column] = value
        this.data5 = newData
      }
    },

    remove1(key) {
      const newData = this.data1?.filter((item) => item.key !== key)
      this.data1 = newData
    },

    remove2(key) {
      const newData = this.data2?.filter((item) => item.key !== key)
      this.data2 = newData
    },
    remove3(key) {
      const newData = this.data3?.filter((item) => item.key !== key)
      this.data3 = newData
    },
    remove4(key) {
      const newData = this.data4?.filter((item) => item.key !== key)
      this.data4 = newData
    },
    remove5(key) {
      const newData = this.data5?.filter((item) => item.key !== key)
      this.data5 = newData
    },
    newMember1() {
      const length = this.data1?.length || 0
      this.data1?.push({
        key: length === 0 ? '1' : (parseInt(this.data1[length - 1].key) + 1).toString(),
        time: '',
        description: '',
        editable: true,
        isNew: true,
      })
    },
    newMember2() {
      const length = this.data2?.length || 0
      this.data2?.push({
        key: length === 0 ? '1' : (parseInt(this.data2[length - 1].key) + 1).toString(),
        time: '',
        title: '',
        description: '',
        editable: true,
        isNew: true,
      })
    },

    newMember3() {
      const length = this.data3?.length || 0
      this.data3?.push({
        key: length === 0 ? '1' : (parseInt(this.data3[length - 1].key) + 1).toString(),
        time: '',
        title: '',
        description: '',
        editable: true,
        isNew: true,
      })
    },
    newMember4() {
      const length = this.data4?.length || 0
      this.data4?.push({
        key: length === 0 ? '1' : (parseInt(this.data4[length - 1].key) + 1).toString(),
        time: '',
        title: '',
        description: '',
        editable: true,
        isNew: true,
      })
    },

    newMember5() {
      const length = this.data5?.length || 0
      this.data5?.push({
        key: length === 0 ? '1' : (parseInt(this.data5[length - 1].key) + 1).toString(),
        time: '',
        title: '',
        description: '',
        editable: true,
        isNew: true,
      })
    },

    getUserList() {
      this.$http.get('/api/users/list', {}).then((res) => {
        this.userList = res.list || []
        this.userList = this.userList.filter((item) => item.id !== storage.get(ACCESS_TOKEN))
      })
    },
    getMyInfo() {
      const that = this
      getInfo().then((res) => {
        that.form.setFieldsValue({
          ...res.userInfo,
        })

        this.formValue = res.userInfo
        this.data1 = res.userInfo.highlights || []
        this.data2 = res.userInfo.publications || []
        this.data3 = res.userInfo.degrees || []
        this.data4 = res.userInfo.aacdimicPosition || []
        this.data5 = res.userInfo.teaching || []
      })
    },
    // handleRemove(file) {
    //   const index = fileList.value.indexOf(file)
    //   const newFileList = fileList.value.slice()
    //   newFileList.splice(index, 1)
    //   fileList.value = newFileList
    // },

    // 图片上传
    handleChange(file, key) {
      const that = this
      // if (info.file.status === 'uploading') {
      //   return
      // }
      // if (info.file.status === 'done') {
      // Get this url from response in real world.
      // getBase64(info.file.originFileObj, (base64Url: string) => {
      //   imageUrl.value = base64Url
      // })
      // const rawFile = $('#input-file-avatar')[0].files[0]

      var formData = new FormData()
      formData.append('file', file.file)

      axios({
        method: 'post',
        url: `http://localhost:3001/api/upLoad/file`,
        // url: `http://47.113.221.19:3001/api/upLoad/file`,
        data: formData,
        headers: {
          'X-Requested-With': null,
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((res) => {
          message.success('upload success')
          that.formValue[key] = res.data.url
          that.form.setFieldsValue({ [key]: res.data.url })
        })
        .catch((e) => {})
      // }
      // if (info.file.status === 'error') {
      //   message.error('upload error')
      // }
    },

    toChooseTemplate() {
      this.$router.push('/profile/advanced')
    },

    handleSubmit() {
      this.form.validateFields((err, values) => {
        if (err) {
          this.$notification['error']({
            message: 'Received values of form:',
            description: values,
          })
          return
        }
        if (this.data1?.length) {
          values.highlights = this.data1
        }

        if (this.data2?.length) {
          values.publications = this.data2
        }

        if (this.data3?.length) {
          values.degrees = this.data3
        }

        if (this.data4?.length) {
          values.aacdimicPosition = this.data4
        }

        if (this.data5?.length) {
          values.teaching = this.data5
        }

        this.$http.post('/api/users/edit', values).then((response) => {
          this.getMyInfo()
          this.$router.push('/profile/basic')
        })
      })
    },
  },
}
</script>

<style>
.upload-img {
  max-height: 100px;
}

.ant-table-title {
  display: none;
}
</style>
