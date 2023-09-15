import {
   BarChartOutlined,
   BugOutlined,
   BulbOutlined,
   CalendarOutlined,
   CommentOutlined,
   CompassOutlined,
   DashboardOutlined,
   DatabaseOutlined,
   DotChartOutlined,
   EnvironmentOutlined,
   FileDoneOutlined,
   FileTextOutlined,
   FundOutlined,
   FundProjectionScreenOutlined,
   InfoCircleOutlined,
   LayoutOutlined,
   MailOutlined,
   MessageOutlined,
   ProfileOutlined,
   RobotOutlined,
   SafetyCertificateOutlined,
   ShoppingCartOutlined,
} from '@ant-design/icons'

export const sideBar = [
   {
      id: 1,
      titleNav: 'Dashboard',
      listItemNav: [
         {
            id: 1,
            titleItem: 'Default',
            icon: <DashboardOutlined />,
            listSubNav: [],
         },
         {
            id: 2,
            titleItem: 'AnaLytic',
            icon: <DotChartOutlined />,
            listSubNav: [],
         },
         {
            id: 3,
            titleItem: 'Sales',
            icon: <FundOutlined />,
            listSubNav: [],
         },
      ],
   },
   {
      id: 2,
      titleNav: 'Apps',
      listItemNav: [
         {
            id: 1,
            titleItem: 'Mail',
            icon: <MailOutlined />,
            listSubNav: [],
         },
         {
            id: 2,
            titleItem: 'Chats',
            icon: <MessageOutlined />,
            listSubNav: [],
         },
         {
            id: 3,
            titleItem: 'Calendar',
            icon: <CalendarOutlined />,
            listSubNav: [],
         },
         {
            id: 4,
            titleItem: 'Projects',
            icon: <BulbOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'List',
               },
               {
                  id: 2,
                  titleSubNav: 'Scrumboard',
               },
            ],
         },
         {
            id: 5,
            titleItem: 'E-commerce',
            icon: <ShoppingCartOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Product List',
               },
               {
                  id: 2,
                  titleSubNav: 'Add Product',
               },
               {
                  id: 3,
                  titleSubNav: 'Edit Product',
               },
               {
                  id: 4,
                  titleSubNav: 'Orders',
               },
            ],
         },
      ],
   },
   {
      id: 3,
      titleNav: 'Components',
      listItemNav: [
         {
            id: 1,
            titleItem: 'General',
            icon: <InfoCircleOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Button',
               },
               {
                  id: 2,
                  titleSubNav: 'Icon',
               },
               {
                  id: 3,
                  titleSubNav: 'Typography',
               },
            ],
         },
         {
            id: 2,
            titleItem: 'Layout',
            icon: <LayoutOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Grid',
               },
               {
                  id: 2,
                  titleSubNav: 'Layout',
               },
            ],
         },
         {
            id: 3,
            titleItem: 'Navigation',
            icon: <CompassOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Affix',
               },
               {
                  id: 2,
                  titleSubNav: 'Breadcrumb',
               },
               {
                  id: 3,
                  titleSubNav: 'Dropdown',
               },
               {
                  id: 4,
                  titleSubNav: 'Menu',
               },
               {
                  id: 5,
                  titleSubNav: 'Pagination',
               },
               {
                  id: 6,
                  titleSubNav: 'Steps',
               },
            ],
         },
         {
            id: 4,
            titleItem: 'Data Entry',
            icon: <DatabaseOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Auto Complete',
               },
               {
                  id: 2,
                  titleSubNav: 'Checkbox',
               },
            ],
         },
         {
            id: 5,
            titleItem: 'Data Display',
            icon: <FundProjectionScreenOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Avatar',
               },
               {
                  id: 2,
                  titleSubNav: 'Badge',
               },
            ],
         },
         {
            id: 6,
            titleItem: 'Feedback',
            icon: <CommentOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Alert',
               },
               {
                  id: 2,
                  titleSubNav: 'Drawer',
               },
            ],
         },
         {
            id: 7,
            titleItem: 'Other',
            icon: <RobotOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Anchor',
               },
               {
                  id: 2,
                  titleSubNav: 'BackTop',
               },
            ],
         },
         {
            id: 8,
            titleItem: 'Charts',
            icon: <BarChartOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Apex Charts',
               },
               {
                  id: 2,
                  titleSubNav: 'ChartJs',
               },
            ],
         },
         {
            id: 9,
            titleItem: 'Maps',
            icon: <EnvironmentOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Simple Maps',
               },
            ],
         },
      ],
   },
   {
      id: 4,
      titleNav: 'Pages',
      listItemNav: [
         {
            id: 1,
            titleItem: 'Pages',
            icon: <FileDoneOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Profile',
               },
               {
                  id: 2,
                  titleSubNav: 'User list',
               },
            ],
         },
         {
            id: 2,
            titleItem: 'Authentication',
            icon: <SafetyCertificateOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Login 1',
               },
               {
                  id: 2,
                  titleSubNav: 'Login 2',
               },
            ],
         },
         {
            id: 3,
            titleItem: 'Errors',
            icon: <BugOutlined />,
            listSubNav: [
               {
                  id: 1,
                  titleSubNav: 'Error Page 1',
               },
               {
                  id: 2,
                  titleSubNav: 'Error Page 2',
               },
            ],
         },
      ],
   },
   {
      id: 5,
      titleNav: 'Docs',
      listItemNav: [
         {
            id: 1,
            titleItem: 'Documentation',
            icon: <FileTextOutlined />,
            listSubNav: [],
         },
         {
            id: 2,
            titleItem: 'Changelog',
            icon: <ProfileOutlined />,
            listSubNav: [],
         },
      ],
   },
]

export const dataChart = {
   series: [
      {
         name: 'Section duration',
         data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
      {
         name: 'Page views',
         data: [26, 32, 65, 48, 21, 12, 92, 34, 18],
      },
   ],
   options: {
      chart: {
         type: 'line',
         zoom: {
            enabled: false,
         },
         toolbar: {
            show: false,
         },
      },
      dataLabels: {
         enabled: false,
      },
      stroke: {
         curve: 'smooth',
         width: 3,
      },
      title: {
         text: 'Unique Visitors',
         style: {
            fontFamily: 'Roboto',
            fontSize: '17px',
         },
         align: 'left',
      },
      colors: ['#09fb27', '#0936fb'],
      xaxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      legend: {
         position: 'top',
         horizontalAlign: 'right',
         floating: true,
         offsetY: -25,
         offsetX: -5,
      },
      grid: {
         position: 'front',
         xaxis: {
            lines: {
               show: false,
            },
         },
         yaxis: {
            lines: {
               show: false,
            },
         },
      },
   },
}
export const dataChart2 = {
   series: [
      {
         name: 'Section duration',
         data: [41, 60, 35, 51, 72, 62, 65, 91, 148],
      },
   ],
   options: {
      chart: {
         type: 'line',
         zoom: {
            enabled: false,
         },
         toolbar: {
            show: false,
         },
      },
      dataLabels: {
         enabled: false,
      },
      stroke: {
         curve: 'smooth',
         width: 3,
      },
      title: {
         text: 'Unique Visitors',
         style: {
            fontFamily: 'Roboto',
            fontSize: '17px',
         },
         align: 'left',
      },
      colors: ['#09fb27', '#0936fb'],
      xaxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      legend: {
         position: 'top',
         horizontalAlign: 'right',
         floating: true,
         offsetY: -25,
         offsetX: -5,
      },
      grid: {
         position: 'front',
         xaxis: {
            lines: {
               show: false,
            },
         },
         yaxis: {
            lines: {
               show: false,
            },
         },
      },
   },
}

export const dataChartRadial = {
   series: [85],
   options: {
      chart: {
         height: 350,
         type: 'radialBar',
      },
      plotOptions: {
         radialBar: {
            startAngle: -145,
            endAngle: 145,
            hollow: {
               size: '80%',
            },
            track: {
               background: '#eee',
               strokeWidth: '100%',
               dropShadow: {
                  enabled: false,
               },
            },

            dataLabels: {
               name: {
                  show: false,
               },
               value: {
                  fontSize: '36px',
                  show: true,
               },
            },
         },
      },
      title: {
         text: 'Monthly Target',
         align: 'center',
         style: {
            fontFamily: 'Roboto',
            fontSize: '26px',
         },
      },
   },
}
