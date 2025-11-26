import { DaySchedule, ActivityType } from './types';

// Helper for map links
const mapLink = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const ITINERARY: DaySchedule[] = [
  {
    dayId: 1,
    date: '2024-12-03',
    dateDisplay: '12/3 (Tue)',
    location: 'Bangkok Old City',
    items: [
      {
        id: 'd1-1',
        time: '12:00',
        title: '抵達曼谷市區',
        location: 'Bangkok City Center',
        locationUrl: mapLink('Bangkok City Center'),
        type: ActivityType.TRANSPORT,
        description: '抵達後前往飯店放置行李',
        attachments: [
          { type: 'booking', label: '飯店訂單', content: 'Agoda Ref: 12345678' }
        ]
      },
      {
        id: 'd1-2',
        time: '13:30',
        title: '藍色觀光船 (Chao Phraya Tourist Boat)',
        location: 'Sathorn Pier',
        locationUrl: mapLink('Sathorn Pier'),
        type: ActivityType.SIGHTSEEING,
        description: '搭乘藍旗船沿昭披耶河欣賞河岸風光'
      },
      {
        id: 'd1-3',
        time: '14:30',
        title: '大皇宮 & 玉佛寺',
        location: 'The Grand Palace',
        locationUrl: mapLink('The Grand Palace Bangkok'),
        type: ActivityType.SIGHTSEEING,
        description: '參觀泰國皇室建築與翡翠玉佛 (需穿著過膝長褲/裙)',
        attachments: [{ type: 'info', label: '穿著規定', content: '嚴禁無袖背心、短褲、破洞牛仔褲' }]
      },
      {
        id: 'd1-4',
        time: '16:30',
        title: '臥佛寺 (Wat Pho)',
        location: 'Wat Pho',
        locationUrl: mapLink('Wat Pho'),
        type: ActivityType.SIGHTSEEING,
        description: '參觀泰國最大的臥佛像與按摩學校發源地'
      },
      {
        id: 'd1-5',
        time: '18:00',
        title: '鄭王廟夜景 (Wat Arun)',
        location: 'Wat Arun',
        locationUrl: mapLink('Wat Arun'),
        type: ActivityType.SIGHTSEEING,
        description: '欣賞招披耶河畔的絕美夜景，建議搭船至對岸拍攝'
      },
      {
        id: 'd1-6',
        time: '19:30',
        title: 'Talat Phlu Food Market 晚餐',
        location: 'Talat Phlu Market',
        locationUrl: mapLink('Talat Phlu Market'),
        type: ActivityType.FOOD,
        description: '搭乘 MRT 至 Talat Phlu 站，體驗在地街頭美食'
      }
    ]
  },
  {
    dayId: 2,
    date: '2024-12-04',
    dateDisplay: '12/4 (Wed)',
    location: 'Ayutthaya',
    items: [
      {
        id: 'd2-1',
        time: '09:00',
        title: '前往大城 (Mini Van)',
        location: 'Mo Chit Van Terminal',
        locationUrl: mapLink('Mo Chit New Van Terminal'),
        type: ActivityType.TRANSPORT,
        description: '搭乘 Mini Van 前往大城遺址'
      },
      {
        id: 'd2-2',
        time: '10:30',
        title: '瑪哈泰寺 (Wat Mahathat)',
        location: 'Wat Mahathat Ayutthaya',
        locationUrl: mapLink('Wat Mahathat Ayutthaya'),
        type: ActivityType.SIGHTSEEING,
        description: '著名景點：樹中佛陀頭像'
      },
      {
        id: 'd2-3',
        time: '12:00',
        title: '柴瓦塔那蘭寺 (Wat Chaiwatthanaram)',
        location: 'Wat Chaiwatthanaram',
        locationUrl: mapLink('Wat Chaiwatthanaram'),
        type: ActivityType.SIGHTSEEING,
        description: '高棉風格建築，泰劇《天生一對》拍攝地'
      },
      {
        id: 'd2-4',
        time: '13:30',
        title: '帕司三碧寺 (Wat Phra Si Sanphet)',
        location: 'Wat Phra Si Sanphet',
        locationUrl: mapLink('Wat Phra Si Sanphet'),
        type: ActivityType.SIGHTSEEING,
        description: '大城皇宮遺址，三座鐘型佛塔'
      },
      {
        id: 'd2-5',
        time: '15:00',
        title: '拉嘉布拉那寺 (Wat Ratchaburana)',
        location: 'Wat Ratchaburana',
        locationUrl: mapLink('Wat Ratchaburana'),
        type: ActivityType.SIGHTSEEING,
        description: '參觀保存完整的佛塔地宮'
      },
      {
        id: 'd2-6',
        time: '17:00',
        title: '搭火車至廊曼機場站',
        location: 'Ayutthaya Railway Station',
        locationUrl: mapLink('Ayutthaya Railway Station'),
        type: ActivityType.TRANSPORT,
        description: '體驗泰國傳統火車風情'
      },
      {
        id: 'd2-7',
        time: '19:00',
        title: 'Save One Go Night Market',
        location: 'Save One Go Night Market',
        locationUrl: mapLink('Save One Go Night Market'),
        type: ActivityType.FOOD,
        description: '轉乘 Grab 前往熱門夜市晚餐'
      }
    ]
  },
  {
    dayId: 3,
    date: '2024-12-05',
    dateDisplay: '12/5 (Thu)',
    location: 'Kanchanaburi',
    items: [
      {
        id: 'd3-1',
        time: '08:00',
        title: '包車前往 Somboon Legacy',
        location: 'Hotel Lobby',
        type: ActivityType.TRANSPORT,
        description: '私人包車接送'
      },
      {
        id: 'd3-2',
        time: '10:00',
        title: 'Hands-Off Elephant Sanctuary',
        location: 'Somboon Legacy Foundation',
        locationUrl: mapLink('Somboon Legacy Foundation'),
        type: ActivityType.NATURE,
        description: 'Somboon Legacy Foundation - 不騎乘、不強迫表演，純粹觀察與照顧大象',
        attachments: [{ type: 'ticket', label: '預約憑證', content: 'SLF-2024-8899' }]
      }
    ]
  },
  {
    dayId: 4,
    date: '2024-12-06',
    dateDisplay: '12/6 (Fri)',
    location: 'Ratchaburi',
    items: [
      {
        id: 'd4-1',
        time: '07:30',
        title: '包車一日遊出發',
        location: 'Hotel Lobby',
        type: ActivityType.TRANSPORT,
        description: '前往水上市場與鐵道市場'
      },
      {
        id: 'd4-2',
        time: '09:30',
        title: '丹嫩莎多水上市場',
        location: 'Damnoen Saduak Floating Market',
        locationUrl: mapLink('Damnoen Saduak Floating Market'),
        type: ActivityType.SIGHTSEEING,
        description: '搭乘手搖船體驗傳統水上交易'
      },
      {
        id: 'd4-3',
        time: '11:10',
        title: '美功鐵道市場 (火車經過)',
        location: 'Maeklong Railway Market',
        locationUrl: mapLink('Maeklong Railway Market'),
        type: ActivityType.SIGHTSEEING,
        description: '觀看火車穿過市場攤販的奇景 (注意火車時刻)'
      },
      {
        id: 'd4-4',
        time: '13:30',
        title: '安帕瓦水上市場',
        location: 'Amphawa Floating Market',
        locationUrl: mapLink('Amphawa Floating Market'),
        type: ActivityType.FOOD,
        description: '悠閒漫步河岸，享用海鮮與泰式甜點'
      }
    ]
  },
  {
    dayId: 5,
    date: '2024-12-07',
    dateDisplay: '12/7 (Sat)',
    location: 'Samut Prakan',
    items: [
      {
        id: 'd5-1',
        time: '09:30',
        title: '搭乘 BTS 前往',
        location: 'BTS Kheha Station',
        type: ActivityType.TRANSPORT,
        description: '搭乘 BTS 至 Kheha 站，轉乘雙條車或計程車'
      },
      {
        id: 'd5-2',
        time: '10:30',
        title: '暹羅古城 (Ancient City)',
        location: 'The Ancient City',
        locationUrl: mapLink('The Ancient City Samut Prakan'),
        type: ActivityType.SIGHTSEEING,
        description: '世界上最大的露天博物館，騎腳踏車或搭高爾夫球車遊覽泰國縮影',
        attachments: [{ type: 'ticket', label: 'Klook 憑證', content: 'KLK-998877' }]
      },
      {
        id: 'd5-3',
        time: '17:30',
        title: '席娜卡琳火車夜市',
        location: 'Srinakarin Train Night Market',
        locationUrl: mapLink('Srinakarin Train Night Market'),
        type: ActivityType.SHOPPING,
        description: '復古風格夜市，古董車與各式美食',
      }
    ]
  },
  {
    dayId: 6,
    date: '2024-12-08',
    dateDisplay: '12/8 (Sun)',
    location: 'Thonburi',
    items: [
      {
        id: 'd6-1',
        time: '10:00',
        title: '吞武里海鮮市場',
        location: 'Thonburi Market Place',
        locationUrl: mapLink('Thonburi Market Place'),
        type: ActivityType.FOOD,
        description: '當地人的海鮮廚房，現點現烤大頭蝦'
      },
      {
        id: 'd6-2',
        time: '13:00',
        title: 'Big C 採買伴手禮',
        location: 'Big C Supercenter',
        locationUrl: mapLink('Big C Rajdamri'),
        type: ActivityType.SHOPPING,
        description: '購買Pocky, 小老闆海苔, 泰式奶茶包等'
      },
      {
        id: 'd6-3',
        time: '18:00',
        title: 'Bhawa Spa 按摩',
        location: 'Bhawa Spa on the Eight',
        locationUrl: mapLink('Bhawa Spa'),
        type: ActivityType.RELAX,
        description: '頂級精油按摩 18:00~21:00 (需提早抵達)',
        attachments: [{ type: 'booking', label: '預約確認信', content: 'Bhawa-Res-202' }]
      }
    ]
  }
];