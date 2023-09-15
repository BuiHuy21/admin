import AppLayout from '@/components/app-layout/AppLayout'
import Widget from '@/components/widget/Widget'
import { dataChart, dataChart2, dataChartRadial } from '@/constants'
import { EllipsisOutlined, UserAddOutlined } from '@ant-design/icons'
import { default as Chart, default as ReactApexChart } from 'react-apexcharts'
import thumb from '../../assets/thumb-2.jpg'
import thumb2 from '../../assets/thumb-3.jpg'
import thumb3 from '../../assets/thumb-4.jpg'
import thumb4 from '../../assets/thumb-5.jpg'
import thumb5 from '../../assets/thumb-6.jpg'
import './dashboard.scss'
import { Space, Table, Tag } from 'antd'
const Dashboard = () => {
   const columns = [
      {
         title: 'Name',
         dataIndex: 'name',
         key: 'name',
         render: (text) => <a>{text}</a>,
      },
      {
         title: 'Age',
         dataIndex: 'age',
         key: 'age',
      },
      {
         title: 'Address',
         dataIndex: 'address',
         key: 'address',
      },
      {
         title: 'Tags',
         key: 'tags',
         dataIndex: 'tags',
         render: (_, { tags }) => (
            <>
               {tags.map((tag) => {
                  let color = tag.length > 5 ? 'geekblue' : 'green'
                  if (tag === 'loser') {
                     color = 'volcano'
                  }
                  return (
                     <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                     </Tag>
                  )
               })}
            </>
         ),
      },
      {
         title: 'Action',
         key: 'action',
         render: (_, record) => (
            <Space size="middle">
               <a>Invite {record.name}</a>
               <a>Delete</a>
            </Space>
         ),
      },
   ]
   const data = [
      {
         key: '1',
         name: 'John Brown',
         age: 32,
         address: 'New York No. 1 Lake Park',
         tags: ['nice', 'developer'],
      },
      {
         key: '2',
         name: 'Jim Green',
         age: 42,
         address: 'London No. 1 Lake Park',
         tags: ['loser'],
      },
      {
         key: '3',
         name: 'Joe Black',
         age: 32,
         address: 'Sydney No. 1 Lake Park',
         tags: ['cool', 'teacher'],
      },
      {
         key: '4',
         name: 'Joe Black',
         age: 32,
         address: 'Sydney No. 1 Lake Park',
         tags: ['cool', 'teacher'],
      },
      {
         key: '5',
         name: 'Joe Black',
         age: 32,
         address: 'Sydney No. 1 Lake Park',
         tags: ['cool', 'teacher'],
      },
      {
         key: '6',
         name: 'Joe Black',
         age: 32,
         address: 'Sydney No. 1 Lake Park',
         tags: ['cool', 'teacher'],
      },
   ]
   return (
      <AppLayout>
         <div className="content-dashboard">
            <div className="statistical">
               <div className="chart-statistical">
                  <div className="list-widget">
                     <Widget
                        title={'Revenue'}
                        defaultPrice={2.435}
                        count={-12.2}
                        compare={'Compare to last year (2019)'}
                     />
                     <Widget
                        title={'Sales'}
                        defaultPrice={6.982}
                        count={8.2}
                        compare={'Compare to last year (2019)'}
                     />
                     <Widget
                        title={'Costs'}
                        defaultPrice={8.31}
                        count={0.7}
                        compare={'Compare to last year (2019)'}
                     />
                  </div>
                  <div className="line-chart-statistical">
                     <Chart options={dataChart.options} series={dataChart.series} height={450} />
                  </div>
               </div>
               <div className="list-statistical">
                  <div className="moth-target">
                     <ReactApexChart
                        options={dataChartRadial.options}
                        series={dataChartRadial.series}
                        type="radialBar"
                        height={350}
                     />

                     <div className="desc-mont-target">
                        You need abit more effort to hit monthly target
                     </div>
                     <div className="btn">Learn More</div>
                  </div>
                  <div className="active-members">
                     <Chart options={dataChart2.options} series={dataChart2.series} height={270} />
                  </div>
               </div>
            </div>
            <div className="user">
               <div className="member">
                  <div className="top-member">
                     <div className="title-member">New Join Member</div>
                     <div className="more">
                        <EllipsisOutlined />
                     </div>
                  </div>
                  <div className="content-member">
                     <div className="item-content">
                        <div className="information">
                           <div className="img">
                              <img src={thumb} alt="" />
                           </div>
                           <div className="intro">
                              <div className="name">Terrance Moreno</div>
                              <div className="desc">Software Engineer</div>
                           </div>
                        </div>
                        <div className="btn-add">
                           <UserAddOutlined /> Add
                        </div>
                     </div>
                     <div className="item-content">
                        <div className="information">
                           <div className="img">
                              <img src={thumb2} alt="" />
                           </div>
                           <div className="intro">
                              <div className="name">Ron Vargas</div>
                              <div className="desc">UI/UX Designer</div>
                           </div>
                        </div>
                        <div className="btn-add">
                           <UserAddOutlined /> Add
                        </div>
                     </div>
                     <div className="item-content">
                        <div className="information">
                           <div className="img">
                              <img src={thumb3} alt="" />
                           </div>
                           <div className="intro">
                              <div className="name">Luke Cook</div>
                              <div className="desc">HR Executive</div>
                           </div>
                        </div>
                        <div className="btn-add">
                           <UserAddOutlined /> Add
                        </div>
                     </div>
                     <div className="item-content">
                        <div className="information">
                           <div className="img">
                              <img src={thumb4} alt="" />
                           </div>
                           <div className="intro">
                              <div className="name">Joyce Freeman</div>
                              <div className="desc">Frontend Developer</div>
                           </div>
                        </div>
                        <div className="btn-add">
                           <UserAddOutlined /> Add
                        </div>
                     </div>
                     <div className="item-content">
                        <div className="information">
                           <div className="img">
                              <img src={thumb5} alt="" />
                           </div>
                           <div className="intro">
                              <div className="name">Samantha Phillips</div>
                              <div className="desc">Compliance Manager</div>
                           </div>
                        </div>
                        <div className="btn-add">
                           <UserAddOutlined /> Add
                        </div>
                     </div>
                  </div>
               </div>
               <div className="transaction">
                  <div className="top-transaction">
                     <div className="title-transaction">Latest Transactions</div>
                     <div className="more">
                        <EllipsisOutlined />
                     </div>
                  </div>
                  <div className="content-transaction">
                     <Table
                        scroll={{ y: 280 }}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                     />
                  </div>
               </div>
            </div>
         </div>
      </AppLayout>
   )
}

export default Dashboard
