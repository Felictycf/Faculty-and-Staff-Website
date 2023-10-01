// 初始化的时候执行一次，然后会存入数据库，修改的时候就删除重新生成
const college = [
  {
    name: 'Faculty of Business, Economics and Law',
    department: [
      {
        name: 'Business School - Te Kura Kaipakihi',
        short: 'Business School',
      },
      {
        name: 'Law School - Te Kura Ture',
        short: 'Law School',
      },
      {
        name: 'School of Economics - Matauranga Ōhanga',
        short: 'School of Economics',
      },
    ],
  },
  {
    name: 'Faculty of Culture and Society',
    department: [
      {
        name: 'School of Education - Te Kura Mātauranga',
        short: 'School of Education',
      },
      {
        name: 'School of Hospitality and Tourism - Te Kura Taurimatanga me te Mahi Tāpoi',
        short: 'School of Hospitality and Tourism',
      },
      {
        name: 'School of Social Sciences and Public Policy - Te Kura Pūtaiao ā-iwi me ngā Kaupapa Tūmatanui',
        short: 'School of Social Sciences and Public Policy',
      },
      {
        name: 'School of Language and Culture - Te Kura Reo me te Ahurea',
        short: 'School of Language and Culture',
      },
    ],
  },
  {
    name: 'Faculty of Design and Creative Technologies',
    department: [
      {
        name: 'School of Art and Design - Te Kura Toi a Hoahoa',
        short: 'School of Art and Design',
      },
      {
        name: 'School of Communication Studies - Te Kura Whakapāho',
        short: 'School of Communication Studies',
      },
      {
        name: 'School of Engineering, Computer and Mathematical Sciences - Te Kura Mātai Pūhanga, Rorohiko, Pāngarau',
        short: 'School of Engineering, Computer and Mathematical Sciences',
      },
      {
        name: 'School of Future Environments - Huri te Ao',
        short: 'School of Future Environments',
      },
    ],
  },
  {
    name: 'Faculty of Health and Environmental Sciences',

    department: [
      {
        name: 'School of Clinical Sciences - Te Kura Mātai Haumanu',
        short: 'School of Clinical Sciences',
      },
      {
        name: 'School of Public Health and Interdisciplinary Studies',
        short: 'School of Public Health and Interdisciplinary Studies',
      },
      {
        name: 'School of Science - Te Kura Pūtaiao',
        short: 'School of Science',
      },
      {
        name: 'School of Sport and Recreation - Te Kura Hākinakina',
        short: 'School of Sport and Recreation',
      },
    ],
  },
];

module.exports = college;
