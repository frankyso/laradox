import 'prismjs/themes/prism-okaidia.css'

require('../plugins/jsplumb/dist/js/jsplumb');
require('../plugins/jquery-confirm2/js/jquery-confirm');

window.VuePrism = require('vue-prism');
window.VeeValidate = require('vee-validate');
Vue.use(VeeValidate);
Vue.use(VuePrism);
Vue.component('ltable', require('./components/ltable.vue'));


import { ErrorBag } from 'vee-validate';

Vue.config.productionTip = false

var css = "text-shadow: -1px -1px hsl(0,100%,50%), 1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%), 18px 10px hsl(54, 100%, 50%), 20px 11px hsl(59.4, 100%, 50%), 22px 12px hsl(64.8, 100%, 50%), 23px 13px hsl(70.2, 100%, 50%), 25px 14px hsl(75.6, 100%, 50%), 27px 15px hsl(81, 100%, 50%), 28px 16px hsl(86.4, 100%, 50%), 30px 17px hsl(91.8, 100%, 50%), 32px 18px hsl(97.2, 100%, 50%), 33px 19px hsl(102.6, 100%, 50%), 35px 20px hsl(108, 100%, 50%), 36px 21px hsl(113.4, 100%, 50%), 38px 22px hsl(118.8, 100%, 50%), 39px 23px hsl(124.2, 100%, 50%), 41px 24px hsl(129.6, 100%, 50%), 42px 25px hsl(135, 100%, 50%), 43px 26px hsl(140.4, 100%, 50%), 45px 27px hsl(145.8, 100%, 50%), 46px 28px hsl(151.2, 100%, 50%), 47px 29px hsl(156.6, 100%, 50%), 48px 30px hsl(162, 100%, 50%), 49px 31px hsl(167.4, 100%, 50%), 50px 32px hsl(172.8, 100%, 50%), 51px 33px hsl(178.2, 100%, 50%), 52px 34px hsl(183.6, 100%, 50%), 53px 35px hsl(189, 100%, 50%), 54px 36px hsl(194.4, 100%, 50%), 55px 37px hsl(199.8, 100%, 50%), 55px 38px hsl(205.2, 100%, 50%), 56px 39px hsl(210.6, 100%, 50%), 57px 40px hsl(216, 100%, 50%), 57px 41px hsl(221.4, 100%, 50%), 58px 42px hsl(226.8, 100%, 50%), 58px 43px hsl(232.2, 100%, 50%), 58px 44px hsl(237.6, 100%, 50%), 59px 45px hsl(243, 100%, 50%), 59px 46px hsl(248.4, 100%, 50%), 59px 47px hsl(253.8, 100%, 50%), 59px 48px hsl(259.2, 100%, 50%), 59px 49px hsl(264.6, 100%, 50%), 60px 50px hsl(270, 100%, 50%), 59px 51px hsl(275.4, 100%, 50%), 59px 52px hsl(280.8, 100%, 50%), 59px 53px hsl(286.2, 100%, 50%), 59px 54px hsl(291.6, 100%, 50%), 59px 55px hsl(297, 100%, 50%), 58px 56px hsl(302.4, 100%, 50%), 58px 57px hsl(307.8, 100%, 50%), 58px 58px hsl(313.2, 100%, 50%), 57px 59px hsl(318.6, 100%, 50%), 57px 60px hsl(324, 100%, 50%), 56px 61px hsl(329.4, 100%, 50%), 55px 62px hsl(334.8, 100%, 50%), 55px 63px hsl(340.2, 100%, 50%), 54px 64px hsl(345.6, 100%, 50%), 53px 65px hsl(351, 100%, 50%), 52px 66px hsl(356.4, 100%, 50%), 51px 67px hsl(361.8, 100%, 50%), 50px 68px hsl(367.2, 100%, 50%), 49px 69px hsl(372.6, 100%, 50%), 48px 70px hsl(378, 100%, 50%), 47px 71px hsl(383.4, 100%, 50%), 46px 72px hsl(388.8, 100%, 50%), 45px 73px hsl(394.2, 100%, 50%), 43px 74px hsl(399.6, 100%, 50%), 42px 75px hsl(405, 100%, 50%), 41px 76px hsl(410.4, 100%, 50%), 39px 77px hsl(415.8, 100%, 50%), 38px 78px hsl(421.2, 100%, 50%), 36px 79px hsl(426.6, 100%, 50%), 35px 80px hsl(432, 100%, 50%), 33px 81px hsl(437.4, 100%, 50%), 32px 82px hsl(442.8, 100%, 50%), 30px 83px hsl(448.2, 100%, 50%), 28px 84px hsl(453.6, 100%, 50%), 27px 85px hsl(459, 100%, 50%), 25px 86px hsl(464.4, 100%, 50%), 23px 87px hsl(469.8, 100%, 50%), 22px 88px hsl(475.2, 100%, 50%), 20px 89px hsl(480.6, 100%, 50%), 18px 90px hsl(486, 100%, 50%), 16px 91px hsl(491.4, 100%, 50%), 14px 92px hsl(496.8, 100%, 50%), 13px 93px hsl(502.2, 100%, 50%), 11px 94px hsl(507.6, 100%, 50%), 9px 95px hsl(513, 100%, 50%), 7px 96px hsl(518.4, 100%, 50%), 5px 97px hsl(523.8, 100%, 50%), 3px 98px hsl(529.2, 100%, 50%), 1px 99px hsl(534.6, 100%, 50%), 7px 100px hsl(540, 100%, 50%), -1px 101px hsl(545.4, 100%, 50%), -3px 102px hsl(550.8, 100%, 50%), -5px 103px hsl(556.2, 100%, 50%), -7px 104px hsl(561.6, 100%, 50%), -9px 105px hsl(567, 100%, 50%), -11px 106px hsl(572.4, 100%, 50%), -13px 107px hsl(577.8, 100%, 50%), -14px 108px hsl(583.2, 100%, 50%), -16px 109px hsl(588.6, 100%, 50%), -18px 110px hsl(594, 100%, 50%), -20px 111px hsl(599.4, 100%, 50%), -22px 112px hsl(604.8, 100%, 50%), -23px 113px hsl(610.2, 100%, 50%), -25px 114px hsl(615.6, 100%, 50%), -27px 115px hsl(621, 100%, 50%), -28px 116px hsl(626.4, 100%, 50%), -30px 117px hsl(631.8, 100%, 50%), -32px 118px hsl(637.2, 100%, 50%), -33px 119px hsl(642.6, 100%, 50%), -35px 120px hsl(648, 100%, 50%), -36px 121px hsl(653.4, 100%, 50%), -38px 122px hsl(658.8, 100%, 50%), -39px 123px hsl(664.2, 100%, 50%), -41px 124px hsl(669.6, 100%, 50%), -42px 125px hsl(675, 100%, 50%), -43px 126px hsl(680.4, 100%, 50%), -45px 127px hsl(685.8, 100%, 50%), -46px 128px hsl(691.2, 100%, 50%), -47px 129px hsl(696.6, 100%, 50%), -48px 130px hsl(702, 100%, 50%), -49px 131px hsl(707.4, 100%, 50%), -50px 132px hsl(712.8, 100%, 50%), -51px 133px hsl(718.2, 100%, 50%), -52px 134px hsl(723.6, 100%, 50%), -53px 135px hsl(729, 100%, 50%), -54px 136px hsl(734.4, 100%, 50%), -55px 137px hsl(739.8, 100%, 50%), -55px 138px hsl(745.2, 100%, 50%), -56px 139px hsl(750.6, 100%, 50%), -57px 140px hsl(756, 100%, 50%), -57px 141px hsl(761.4, 100%, 50%), -58px 142px hsl(766.8, 100%, 50%), -58px 143px hsl(772.2, 100%, 50%), -58px 144px hsl(777.6, 100%, 50%), -59px 145px hsl(783, 100%, 50%), -59px 146px hsl(788.4, 100%, 50%), -59px 147px hsl(793.8, 100%, 50%), -59px 148px hsl(799.2, 100%, 50%), -59px 149px hsl(804.6, 100%, 50%), -60px 150px hsl(810, 100%, 50%), -59px 151px hsl(815.4, 100%, 50%), -59px 152px hsl(820.8, 100%, 50%), -59px 153px hsl(826.2, 100%, 50%), -59px 154px hsl(831.6, 100%, 50%), -59px 155px hsl(837, 100%, 50%), -58px 156px hsl(842.4, 100%, 50%), -58px 157px hsl(847.8, 100%, 50%), -58px 158px hsl(853.2, 100%, 50%), -57px 159px hsl(858.6, 100%, 50%), -57px 160px hsl(864, 100%, 50%), -56px 161px hsl(869.4, 100%, 50%), -55px 162px hsl(874.8, 100%, 50%), -55px 163px hsl(880.2, 100%, 50%), -54px 164px hsl(885.6, 100%, 50%), -53px 165px hsl(891, 100%, 50%), -52px 166px hsl(896.4, 100%, 50%), -51px 167px hsl(901.8, 100%, 50%), -50px 168px hsl(907.2, 100%, 50%), -49px 169px hsl(912.6, 100%, 50%), -48px 170px hsl(918, 100%, 50%), -47px 171px hsl(923.4, 100%, 50%), -46px 172px hsl(928.8, 100%, 50%), -45px 173px hsl(934.2, 100%, 50%), -43px 174px hsl(939.6, 100%, 50%), -42px 175px hsl(945, 100%, 50%), -41px 176px hsl(950.4, 100%, 50%), -39px 177px hsl(955.8, 100%, 50%), -38px 178px hsl(961.2, 100%, 50%), -36px 179px hsl(966.6, 100%, 50%), -35px 180px hsl(972, 100%, 50%), -33px 181px hsl(977.4, 100%, 50%), -32px 182px hsl(982.8, 100%, 50%), -30px 183px hsl(988.2, 100%, 50%), -28px 184px hsl(993.6, 100%, 50%), -27px 185px hsl(999, 100%, 50%), -25px 186px hsl(1004.4, 100%, 50%), -23px 187px hsl(1009.8, 100%, 50%), -22px 188px hsl(1015.2, 100%, 50%), -20px 189px hsl(1020.6, 100%, 50%), -18px 190px hsl(1026, 100%, 50%), -16px 191px hsl(1031.4, 100%, 50%), -14px 192px hsl(1036.8, 100%, 50%), -13px 193px hsl(1042.2, 100%, 50%), -11px 194px hsl(1047.6, 100%, 50%), -9px 195px hsl(1053, 100%, 50%), -7px 196px hsl(1058.4, 100%, 50%), -5px 197px hsl(1063.8, 100%, 50%), -3px 198px hsl(1069.2, 100%, 50%), -1px 199px hsl(1074.6, 100%, 50%), -1px 200px hsl(1080, 100%, 50%), 1px 201px hsl(1085.4, 100%, 50%), 3px 202px hsl(1090.8, 100%, 50%), 5px 203px hsl(1096.2, 100%, 50%), 7px 204px hsl(1101.6, 100%, 50%), 9px 205px hsl(1107, 100%, 50%), 11px 206px hsl(1112.4, 100%, 50%), 13px 207px hsl(1117.8, 100%, 50%), 14px 208px hsl(1123.2, 100%, 50%), 16px 209px hsl(1128.6, 100%, 50%), 18px 210px hsl(1134, 100%, 50%), 20px 211px hsl(1139.4, 100%, 50%), 22px 212px hsl(1144.8, 100%, 50%), 23px 213px hsl(1150.2, 100%, 50%), 25px 214px hsl(1155.6, 100%, 50%), 27px 215px hsl(1161, 100%, 50%), 28px 216px hsl(1166.4, 100%, 50%), 30px 217px hsl(1171.8, 100%, 50%), 32px 218px hsl(1177.2, 100%, 50%), 33px 219px hsl(1182.6, 100%, 50%), 35px 220px hsl(1188, 100%, 50%), 36px 221px hsl(1193.4, 100%, 50%), 38px 222px hsl(1198.8, 100%, 50%), 39px 223px hsl(1204.2, 100%, 50%), 41px 224px hsl(1209.6, 100%, 50%), 42px 225px hsl(1215, 100%, 50%), 43px 226px hsl(1220.4, 100%, 50%), 45px 227px hsl(1225.8, 100%, 50%), 46px 228px hsl(1231.2, 100%, 50%), 47px 229px hsl(1236.6, 100%, 50%), 48px 230px hsl(1242, 100%, 50%), 49px 231px hsl(1247.4, 100%, 50%), 50px 232px hsl(1252.8, 100%, 50%), 51px 233px hsl(1258.2, 100%, 50%), 52px 234px hsl(1263.6, 100%, 50%), 53px 235px hsl(1269, 100%, 50%), 54px 236px hsl(1274.4, 100%, 50%), 55px 237px hsl(1279.8, 100%, 50%), 55px 238px hsl(1285.2, 100%, 50%), 56px 239px hsl(1290.6, 100%, 50%), 57px 240px hsl(1296, 100%, 50%), 57px 241px hsl(1301.4, 100%, 50%), 58px 242px hsl(1306.8, 100%, 50%), 58px 243px hsl(1312.2, 100%, 50%), 58px 244px hsl(1317.6, 100%, 50%), 59px 245px hsl(1323, 100%, 50%), 59px 246px hsl(1328.4, 100%, 50%), 59px 247px hsl(1333.8, 100%, 50%), 59px 248px hsl(1339.2, 100%, 50%), 59px 249px hsl(1344.6, 100%, 50%), 60px 250px hsl(1350, 100%, 50%), 59px 251px hsl(1355.4, 100%, 50%), 59px 252px hsl(1360.8, 100%, 50%), 59px 253px hsl(1366.2, 100%, 50%), 59px 254px hsl(1371.6, 100%, 50%), 59px 255px hsl(1377, 100%, 50%), 58px 256px hsl(1382.4, 100%, 50%), 58px 257px hsl(1387.8, 100%, 50%), 58px 258px hsl(1393.2, 100%, 50%), 57px 259px hsl(1398.6, 100%, 50%), 57px 260px hsl(1404, 100%, 50%), 56px 261px hsl(1409.4, 100%, 50%), 55px 262px hsl(1414.8, 100%, 50%), 55px 263px hsl(1420.2, 100%, 50%), 54px 264px hsl(1425.6, 100%, 50%), 53px 265px hsl(1431, 100%, 50%), 52px 266px hsl(1436.4, 100%, 50%), 51px 267px hsl(1441.8, 100%, 50%), 50px 268px hsl(1447.2, 100%, 50%), 49px 269px hsl(1452.6, 100%, 50%), 48px 270px hsl(1458, 100%, 50%), 47px 271px hsl(1463.4, 100%, 50%), 46px 272px hsl(1468.8, 100%, 50%), 45px 273px hsl(1474.2, 100%, 50%), 43px 274px hsl(1479.6, 100%, 50%), 42px 275px hsl(1485, 100%, 50%), 41px 276px hsl(1490.4, 100%, 50%), 39px 277px hsl(1495.8, 100%, 50%), 38px 278px hsl(1501.2, 100%, 50%), 36px 279px hsl(1506.6, 100%, 50%), 35px 280px hsl(1512, 100%, 50%), 33px 281px hsl(1517.4, 100%, 50%), 32px 282px hsl(1522.8, 100%, 50%), 30px 283px hsl(1528.2, 100%, 50%), 28px 284px hsl(1533.6, 100%, 50%), 27px 285px hsl(1539, 100%, 50%), 25px 286px hsl(1544.4, 100%, 50%), 23px 287px hsl(1549.8, 100%, 50%), 22px 288px hsl(1555.2, 100%, 50%), 20px 289px hsl(1560.6, 100%, 50%), 18px 290px hsl(1566, 100%, 50%), 16px 291px hsl(1571.4, 100%, 50%), 14px 292px hsl(1576.8, 100%, 50%), 13px 293px hsl(1582.2, 100%, 50%), 11px 294px hsl(1587.6, 100%, 50%), 9px 295px hsl(1593, 100%, 50%), 7px 296px hsl(1598.4, 100%, 50%), 5px 297px hsl(1603.8, 100%, 50%), 3px 298px hsl(1609.2, 100%, 50%), 1px 299px hsl(1614.6, 100%, 50%), 2px 300px hsl(1620, 100%, 50%), -1px 301px hsl(1625.4, 100%, 50%), -3px 302px hsl(1630.8, 100%, 50%), -5px 303px hsl(1636.2, 100%, 50%), -7px 304px hsl(1641.6, 100%, 50%), -9px 305px hsl(1647, 100%, 50%), -11px 306px hsl(1652.4, 100%, 50%), -13px 307px hsl(1657.8, 100%, 50%), -14px 308px hsl(1663.2, 100%, 50%), -16px 309px hsl(1668.6, 100%, 50%), -18px 310px hsl(1674, 100%, 50%), -20px 311px hsl(1679.4, 100%, 50%), -22px 312px hsl(1684.8, 100%, 50%), -23px 313px hsl(1690.2, 100%, 50%), -25px 314px hsl(1695.6, 100%, 50%), -27px 315px hsl(1701, 100%, 50%), -28px 316px hsl(1706.4, 100%, 50%), -30px 317px hsl(1711.8, 100%, 50%), -32px 318px hsl(1717.2, 100%, 50%), -33px 319px hsl(1722.6, 100%, 50%), -35px 320px hsl(1728, 100%, 50%), -36px 321px hsl(1733.4, 100%, 50%), -38px 322px hsl(1738.8, 100%, 50%), -39px 323px hsl(1744.2, 100%, 50%), -41px 324px hsl(1749.6, 100%, 50%), -42px 325px hsl(1755, 100%, 50%), -43px 326px hsl(1760.4, 100%, 50%), -45px 327px hsl(1765.8, 100%, 50%), -46px 328px hsl(1771.2, 100%, 50%), -47px 329px hsl(1776.6, 100%, 50%), -48px 330px hsl(1782, 100%, 50%), -49px 331px hsl(1787.4, 100%, 50%), -50px 332px hsl(1792.8, 100%, 50%), -51px 333px hsl(1798.2, 100%, 50%), -52px 334px hsl(1803.6, 100%, 50%), -53px 335px hsl(1809, 100%, 50%), -54px 336px hsl(1814.4, 100%, 50%), -55px 337px hsl(1819.8, 100%, 50%), -55px 338px hsl(1825.2, 100%, 50%), -56px 339px hsl(1830.6, 100%, 50%), -57px 340px hsl(1836, 100%, 50%), -57px 341px hsl(1841.4, 100%, 50%), -58px 342px hsl(1846.8, 100%, 50%), -58px 343px hsl(1852.2, 100%, 50%), -58px 344px hsl(1857.6, 100%, 50%), -59px 345px hsl(1863, 100%, 50%), -59px 346px hsl(1868.4, 100%, 50%), -59px 347px hsl(1873.8, 100%, 50%), -59px 348px hsl(1879.2, 100%, 50%), -59px 349px hsl(1884.6, 100%, 50%), -60px 350px hsl(1890, 100%, 50%), -59px 351px hsl(1895.4, 100%, 50%), -59px 352px hsl(1900.8, 100%, 50%), -59px 353px hsl(1906.2, 100%, 50%), -59px 354px hsl(1911.6, 100%, 50%), -59px 355px hsl(1917, 100%, 50%), -58px 356px hsl(1922.4, 100%, 50%), -58px 357px hsl(1927.8, 100%, 50%), -58px 358px hsl(1933.2, 100%, 50%), -57px 359px hsl(1938.6, 100%, 50%), -57px 360px hsl(1944, 100%, 50%), -56px 361px hsl(1949.4, 100%, 50%), -55px 362px hsl(1954.8, 100%, 50%), -55px 363px hsl(1960.2, 100%, 50%), -54px 364px hsl(1965.6, 100%, 50%), -53px 365px hsl(1971, 100%, 50%), -52px 366px hsl(1976.4, 100%, 50%), -51px 367px hsl(1981.8, 100%, 50%), -50px 368px hsl(1987.2, 100%, 50%), -49px 369px hsl(1992.6, 100%, 50%), -48px 370px hsl(1998, 100%, 50%), -47px 371px hsl(2003.4, 100%, 50%), -46px 372px hsl(2008.8, 100%, 50%), -45px 373px hsl(2014.2, 100%, 50%), -43px 374px hsl(2019.6, 100%, 50%), -42px 375px hsl(2025, 100%, 50%), -41px 376px hsl(2030.4, 100%, 50%), -39px 377px hsl(2035.8, 100%, 50%), -38px 378px hsl(2041.2, 100%, 50%), -36px 379px hsl(2046.6, 100%, 50%), -35px 380px hsl(2052, 100%, 50%), -33px 381px hsl(2057.4, 100%, 50%), -32px 382px hsl(2062.8, 100%, 50%), -30px 383px hsl(2068.2, 100%, 50%), -28px 384px hsl(2073.6, 100%, 50%), -27px 385px hsl(2079, 100%, 50%), -25px 386px hsl(2084.4, 100%, 50%), -23px 387px hsl(2089.8, 100%, 50%), -22px 388px hsl(2095.2, 100%, 50%), -20px 389px hsl(2100.6, 100%, 50%), -18px 390px hsl(2106, 100%, 50%), -16px 391px hsl(2111.4, 100%, 50%), -14px 392px hsl(2116.8, 100%, 50%), -13px 393px hsl(2122.2, 100%, 50%), -11px 394px hsl(2127.6, 100%, 50%), -9px 395px hsl(2133, 100%, 50%), -7px 396px hsl(2138.4, 100%, 50%), -5px 397px hsl(2143.8, 100%, 50%), -3px 398px hsl(2149.2, 100%, 50%), -1px 399px hsl(2154.6, 100%, 50%); font-size: 40px;";
console.log("%cDo You Really Want %s", css, 'to know how laradox work? how about send me an email?');
console.log("%cfrankyso.mail@gmail.com %s", css, '');

const laradox = new Vue({
    el: '.canvas',
    data: {
        schema: {
            uuid: null,
            readonly: false,
            namespace: null,
            tables: [],
            relationships: [
                // {
                //     primary:{
                //         table:'fa655-a5sf55-a5dfa88-adfa65',
                //         field:'1a'
                //     },
                //     foreign:{
                //         table:'fa655-a5sf55-a5dfa88-adaa65',
                //         field:'12a'
                //     },
                //     type:"belongsTo"
                // }
            ]
        },
        temporary: {
            createTable: {
                name: null,
                modelName: null,
                tableColorClass: null,
                schemaUuid: null,
                incrementalId:true,
                timestamps:true,
                softDeletes:false

            },
            editTable: {
                uuid: null,
                name: null,
                modelName: null,
                tableColorClass: null
            },
            addField: {
                tableUuid: null,
                tableName: null,
                name: null,
                type: null,
                typeDescription: null,
                length: null,
                decimal: null,
                default: null,
                enum: [""],
                options: {
                    autoIncrementCheck: false,
                    unsignedCheck: false,
                    primaryKeyCheck: false,
                    indexCheck: false,
                    nullableCheck: false,
                    fillableCheck: false,
                    guardedCheck: false,
                    visibleCheck: false,
                    hiddenCheck: false,
                    foreignKeyCheck: false,
                    uniqueCheck: false,

                    nameVisibility: false,
                    lengthVisibility: false,
                    lengthDecimalVisibility: false,
                    arrayVisibility: false,
                    defaultValueVisibility: false,
                },
                optionValues: {
                    foreign: false,
                    foreignValue: {
                        fieldUuid: null,
                        tableUuid: null,
                        onUpdate: null,
                        onDelete: null
                    }
                }
            },
            editField: {
                tableUuid: null,
                tableName: null,
                uuid: null,
                name: null,
                type: null,
                typeDescription: null,
                length: null,
                decimal: null,
                default: null,
                enum: [""],
                options: {
                    autoIncrementCheck: false,
                    unsignedCheck: false,
                    primaryKeyCheck: false,
                    indexCheck: false,
                    nullableCheck: false,
                    fillableCheck: false,
                    guardedCheck: false,
                    visibleCheck: false,
                    hiddenCheck: false,
                    foreignKeyCheck: false,
                    uniqueCheck: false,

                    nameVisibility: false,
                    lengthVisibility: false,
                    lengthDecimalVisibility: false,
                    arrayVisibility: false,
                    defaultValueVisibility: false,
                },
                optionValues: {
                    foreign: false
                }
            },
            relation: {
                id: "",
                tableName: "",
                function: "",
                sourceTable: "",
                tableKey: 0,
                foreignKey: "",
                relationType: "hasMany"
            },
            filteredRelation: []
        },
        options: {
            tableColor: [
                {
                    name: "Laradox",
                    class: "laradox"
                },
                {
                    name: "Aqua",
                    class: "aqua"
                },
                {
                    name: "Mud",
                    class: "mud"
                },
                {
                    name: "Grass",
                    class: "grass"
                }
            ],
            styleColor: {
                "laradox": "#812653",
                "aqua": "#0A4958",
                "mud": "#6F533D",
                "grass": "#35682D",
            },
            fieldType: []
        }
    },
    watch: {
        'temporary.addField.type':
            {
                handler: function (value) {
                    // console.log(value + " Value");
                    var position = this.helperSearchFieldtypeIndex(value);
                    // console.log(position + " Position");
                    if (position >= 0) {
                        // console.log("position Come In");
                        this.temporary.addField.typeDescription = this.options.fieldType[position].description;
                        this.temporary.addField.options = this.options.fieldType[position].options;
                        this.temporary.addField.optionValues = {
                            foreign: false,
                            foreignValue: {
                                fieldUuid: null,
                                tableUuid: null,
                                onUpdate: null,
                                onDelete: null
                            }
                        };

                        // console.log(this.temporary.addField.options);
                    }
                }
            },
        'temporary.editField.type':
            {
                handler: function (value) {
                    var position = this.helperSearchFieldtypeIndex(value);
                    this.temporary.editField.typeDescription = this.options.fieldType[position].description;
                    this.temporary.editField.options = this.options.fieldType[position].options;
                }
            },
        // 'temporary.addField.optionValues.foreign':
        //     {
        //         handler: function () {
        //             console.log("njir");
        //             this.$forceUpdate();
        //         }
        //     }
        // 'temporary.relation.tableKey': {
        //     handler: function (value) {
        //         laradox.temporary.relation.primary.tableName = laradox.schema.tables[value].name
        //     }
        // }
    },
    computed: {
        fieldForeignAddField: function () {
            if (this.temporary.addField.optionValues.foreignValue.tableUuid == null) {
                return [];
            }

            return this.schema.tables[this.temporary.addField.optionValues.foreignValue.tableUuid].fields;
        },
        // relationForeignFields: function () {
        //     if (this.schema.tables.length == 0) {
        //         return [];
        //     }

        //     if (!this.schema.tables[this.temporary.relation.foreignKey]) {
        //         return [];
        //     }

        //     return this.schema.tables[this.temporary.relation.foreignKey].fields
        // },
        relationForeignModelName: function () {
            if (this.schema.tables.length == 0) {
                return [];
            }

            // console.log(this.temporary.relation.foreignKey);
            // console.log(this.temporary.relation.foreignKey);
            return this.schema.tables[this.temporary.relation.tableKey].modelName;
        },
        // relationForeignFieldName: function () {
        //     // return this.temporary.relation.foreign.fieldKey;
        //     // console.log(this.temporary.relation.foreign.fieldKey);
        //     if (this.temporary.relation.foreign.fieldKey === "") {
        //         return "";
        //     }
        //     else {
        //         return this.schema.tables[this.temporary.relation.foreignKey].fields[this.temporary.relation.foreign.fieldKey].name
        //     }
        // }
    },
    mounted: function () {
        this.schema.uuid = $('meta[name=schema-uuid]').attr("content");
        this.schema.namespace = $('meta[name=schema-namespace]').attr("content");
        this.schema.readonly = $('meta[name=readonly]').attr("content");

        this.fetchLaravelMigrationTypes();
        this.fetchTables();
        // this.helperDrawConnection();


        // Dialog Auto
        $(document).ready(function () {
            // console.log("auto");
            if (window.location.href.indexOf('#editModal') != -1) {
                $('#editModal').modal('show');
            }
        });
    },
    methods: {
        fetchLaravelMigrationTypes: function () {
            axios.get('/api/v1/schemas/laravel/54')
                .then(function (response) {
                    if (response.data.responseCode == 200) {
                        laradox.options.fieldType = response.data.responseItem;
                        // self.schema.tables.push(response.data.responseItem);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        fetchSchema: function (uuid) {
            var self = laradox;
            axios.get('/api/v1/schemas/' + this.schema.uuid)
                .then(function (response) {
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        fetchTables: function () {
            // self = laradox;
            axios.get('/api/v1/schemas/' + this.schema.uuid + '/tables')
                .then(function (response) {
                    laradox.schema.tables = response.data.responseItem;
                    laradox.fetchRelationships();

                    // if tables is zero open create table
                    if (response.data.responseItem.length == 0) {
                        laradox.createTable();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        fetchRelationships: function () {
            axios.get('/api/v1/schemas/' + this.schema.uuid + '/relationships')
                .then(function (response) {
                    laradox.schema.relationships = response.data.responseItem;
                    laradox.helperDrawConnection();
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        exportDialog: function () {
            console.log("masuk");
            $('#exportModal').modal('show');
        },
        createTable: function () {
            $('#createTableModal').modal('show');
            this.temporary.createTable.name = null;
            this.temporary.createTable.modelName = null;
            this.temporary.createTable.tableColorClass = 'laradox';
            this.temporary.createTable.schemaUuid = this.schema.uuid;
        },
        showRelation: function (tableUuid) {
            var position = laradox.helperSearchTableIndex(tableUuid);

            laradox.temporary.relation.tableName = laradox.schema.tables[position].name
            laradox.temporary.relation.sourceTable = laradox.schema.tables[position];
            $('#relationModal').modal('show');

            laradox.temporary.filteredRelation = [];

            // Filtering Data depends on tableUuid
            laradox.schema.relationships.map((value) => {
                console.log(value.primary.table == tableUuid);
                if (value.primary.table == tableUuid) {
                    laradox.temporary.filteredRelation.push(value);
                }
            });

            laradox.$forceUpdate();
        },
        createRelationship: function () {
            $('#createRelationModal').on("hidden.bs.modal", function () {
                $('#relationModal').modal('show');
            }).modal('show');

            laradox.temporary.relation.id = "";
            laradox.temporary.relation.function = "";
            // laradox.temporary.relation.sourceTable = ""
            laradox.temporary.relation.tableKey = 0;
            laradox.temporary.relation.foreignKey = "";
            laradox.temporary.relation.relationType = "hasMany";

            $('#relationModal').modal('hide');
        },
        createRelationshipSubmit() {
            var self = this;

            // Validating
            this.$validator.attach('functionNameField', 'required|alpha_dash', { prettyName: 'Function Name' });
            this.$validator.validateAll({
                functionNameField: self.temporary.relation.function
            });

            if (self.errors.any()) {
                console.log("error");
                return;
            }

            var sourceTableUuid = self.temporary.relation.sourceTable.uuid;
            var targetTableUuid = self.schema.tables[self.temporary.relation.tableKey].uuid

            // var targetFieldUuid = "";
            // if (self.temporary.relation.foreign.fieldKey !== "") {
            //     targetFieldUuid = self.schema.tables[self.temporary.relation.tableKey].fields[self.temporary.relation.foreign.fieldKey].uuid
            // }

            // Post to create relation
            axios.post('/api/v1/relationships', {
                functionName: self.temporary.relation.function,
                sourceTableUuid: sourceTableUuid,
                targetTableUuid: targetTableUuid,
                foreignKey: self.temporary.relation.foreignKey,
                relationType: self.temporary.relation.relationType,
            })
                .then(function (response) {
                    $('#createRelationModal').modal('hide');
                    setTimeout(() => {
                        $('#relationModal').modal('hide');
                    }, 400);

                    laradox.fetchRelationships();
                });
        },
        editRelationship(relation) {
            $('#editRelationModal').on("hidden.bs.modal", function () {
                $('#relationModal').modal('show');
            }).modal('show');

            laradox.temporary.relation.id = relation.id;
            laradox.temporary.relation.function = relation.functionName;
            laradox.temporary.relation.sourceTable = relation.primary.tableObject
            laradox.temporary.relation.tableKey = laradox.helperSearchTableIndex(relation.foreign.table);
            laradox.temporary.relation.foreignKey = relation.foreign.foreignKey;
            laradox.temporary.relation.relationType = relation.type;

            $('#relationModal').modal('hide');
        },
        deleteRelationship: function (id) {
            $.confirm({
                title: 'Delete Relationship',
                content: 'Are you sure want to delete this relationship?',
                theme: 'supervan',
                buttons: {
                    confirm: function () {
                        axios.delete('/api/v1/relationships/' + id).then(function () {
                            laradox.fetchRelationships();
                            $('#relationModal').modal('hide');
                        }).catch(function (error) {
                            console.log(error);
                            $.toast({
                                text: "Something happen, cannot delete this relationship", // Text that is to be shown in the toast
                                heading: 'Error', // Optional heading to be shown on the toast
                                icon: 'error', // Type of toast icon
                                showHideTransition: 'fade', // fade, slide or plain
                                allowToastClose: true, // Boolean value true or false
                                hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                                position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                                loader: true,  // Whether to show loader or not. True by default
                            });
                        });
                    },
                    cancel: function () {

                    }
                }
            });
        },
        deleteScheme: function () {
            $.confirm({
                title: 'Delete Schema',
                content: 'Are you sure want to delete this schema?',
                theme: 'supervan',
                buttons: {
                    confirm: function () {
                        axios.delete('/api/v1/schemas/' + laradox.schema.uuid).then(function () {
                            window.location = "/";
                        }).catch(function (error) {
                            $.toast({
                                text: "Something happen, cannot delete this relationship", // Text that is to be shown in the toast
                                heading: 'Error', // Optional heading to be shown on the toast
                                icon: 'error', // Type of toast icon
                                showHideTransition: 'fade', // fade, slide or plain
                                allowToastClose: true, // Boolean value true or false
                                hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                                position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                                loader: true,  // Whether to show loader or not. True by default
                            });
                        });
                    },
                    cancel: function () {

                    }
                }
            });
        },
        updateRelationshipSubmit: function () {
            var self = this;

            // Validating
            this.$validator.attach('functionNameField', 'required|alpha_dash', { prettyName: 'Function Name' });
            this.$validator.validateAll({
                functionNameField: self.temporary.relation.function
            });

            if (self.errors.any()) {
                console.log("error");
                return;
            }

            var sourceTableUuid = self.temporary.relation.sourceTable.uuid;
            var targetTableUuid = self.schema.tables[self.temporary.relation.tableKey].uuid

            // Post to create relation
            axios.patch('/api/v1/relationships/' + self.temporary.relation.id, {
                functionName: self.temporary.relation.function,
                sourceTableUuid: sourceTableUuid,
                targetTableUuid: targetTableUuid,
                foreignKey: self.temporary.relation.foreignKey,
                relationType: self.temporary.relation.relationType,
            })
                .then(function (response) {
                    $('#editRelationModal').modal('hide');
                    setTimeout(() => {
                        $('#relationModal').modal('hide');
                    }, 300);

                    laradox.fetchRelationships();
                });
        },
        createTableSubmit: function () {
            var self = this;

            /*Validating*/
            this.$validator.attach('createTableName', 'required|alpha_dash', { prettyName: 'Table Name' });
            this.$validator.attach('createTableModelName', 'required|alpha_dash', { prettyName: 'Model Name' });
            this.$validator.attach('createTableTableColorClass', 'required', { prettyName: 'Table Color' });

            this.$validator.validateAll({
                createTableName: self.temporary.createTable.name,
                createTableModelName: self.temporary.createTable.modelName,
                createTableTableColorClass: self.temporary.createTable.tableColorClass,
            });

            if (self.errors.any()) {
                return;
            };

            // Post to saving
            axios.post('/api/v1/tables', self.temporary.createTable)
                .then(function (response) {
                    if (response.data.responseCode == 200) {
                        // console.log(this.schema.tables);
                        self.schema.tables.push(response.data.responseItem);

                        // If already submit show create fields
                        laradox.addField(self.schema.tables.length - 1);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

            $('#createTableModal').modal('hide');
            self.$forceUpdate();
        },
        editTable: function (key) {
            $('#editTableModal').modal('show');
            var self = laradox;
            self.temporary.editTable.uuid = self.schema.tables[key].uuid;
            self.temporary.editTable.name = self.schema.tables[key].name;
            self.temporary.editTable.modelName = self.schema.tables[key].modelName;
            self.temporary.editTable.tableColorClass = self.schema.tables[key].style.tableColorClass;
        },
        editTableSubmit: function () {
            var self = laradox;

            /*Validating*/
            this.$validator.attach('editTableName', 'required|alpha_dash', { prettyName: 'Table Name' });
            this.$validator.attach('editTableModelName', 'required|alpha_dash', { prettyName: 'Model Name' });
            this.$validator.attach('editTableTableColorClass', 'required', { prettyName: 'Table Color' });

            this.$validator.validateAll({
                editTableName: self.temporary.editTable.name,
                editTableModelName: self.temporary.editTable.modelName,
                editTableTableColorClass: self.temporary.editTable.tableColorClass,
            });

            if (self.errors.any()) {
                return;
            };

            // Post to saving
            axios.patch('/api/v1/tables/' + self.temporary.editTable.uuid, self.temporary.editTable)
                .then(function (response) {
                    if (response.data.responseCode == 200) {
                        var position = self.helperSearchTableIndex(self.temporary.editTable.uuid);

                        self.schema.tables[position].name = self.temporary.editTable.name;
                        self.schema.tables[position].modelName = self.temporary.editTable.modelName;
                        self.schema.tables[position].style.tableColorClass = self.temporary.editTable.tableColorClass;

                        $('#editTableModal').modal('hide');
                        self.$forceUpdate();
                        laradox.helperDrawConnection();
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });

        },
        resetAddField: function () {
            // laradox.temporary.addField.tableUuid = null;
            // laradox.temporary.addField.tableName = null;
            laradox.temporary.addField.name = "";
            // laradox.temporary.addField.type = "";
            laradox.temporary.addField.typeDescription = "";
            laradox.temporary.addField.length = "";
            laradox.temporary.addField.decimal = "";
            laradox.temporary.addField.defaults = "";
            laradox.temporary.addField.enum = [""];
            // laradox.temporary.addField.options.autoIncrementCheck = false;
            // laradox.temporary.addField.options.unsignedCheck = false;
            // laradox.temporary.addField.options.primaryKeyCheck = false;
            // laradox.temporary.addField.options.indexCheck = false;
            // laradox.temporary.addField.options.nullableCheck = false;
            // laradox.temporary.addField.options.fillableCheck = false;
            // laradox.temporary.addField.options.guardedCheck = false;
            // laradox.temporary.addField.options.visibleCheck = false;
            // laradox.temporary.addField.options.hiddenCheck = false;
            // laradox.temporary.addField.options.foreignKeyCheck = false;
            // laradox.temporary.addField.options.uniqueCheck = false;
            // laradox.temporary.addField.optionValues.foreign = false;
            // laradox.temporary.addField.optionValues.foreignValue.fieldUuid
            // laradox.temporary.addField.optionValues.foreignValue.tableUuid = "";
            // laradox.temporary.addField.optionValues.foreignValue.onUpdate = "";
            // laradox.temporary.addField.optionValues.foreignValue.onDelete = "";
        },
        addField: function (index) {
            var self = laradox;
            $('#addFieldModal').modal('show');
            self.temporary.addField.tableName = self.schema.tables[index].name;
            self.temporary.addField.tableUuid = self.schema.tables[index].uuid;
        },
        addFieldSubmit: function () {
            var self = this;
            var position = self.helperSearchTableIndex(self.temporary.addField.tableUuid);

            $(".addFieldSubmitButton").button('loading');

            // Post to saving
            axios.post('/api/v1/fields', self.temporary.addField)
                .then(function (response) {
                    $(".addFieldSubmitButton").button('reset');
                    if (response.data.responseCode == 200) {
                        self.schema.tables[position].fields.push(response.data.responseItem);
                        // console.log(response);
                        // self.schema.tables.push(response.data.responseItem);
                        // 
                        $('#addFieldModal').modal('hide');

                        setTimeout(() => {
                            self.resetAddField();
                            laradox.addField(position);
                        }, 500);

                        $.toast({
                            text: "Field Successfuly Added", // Text that is to be shown in the toast
                            heading: 'Success', // Optional heading to be shown on the toast
                            icon: 'success', // Type of toast icon
                            showHideTransition: 'fade', // fade, slide or plain
                            allowToastClose: true, // Boolean value true or false
                            hideAfter: 5000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                            stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                            position: 'top-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                            loader: true,  // Whether to show loader or not. True by default
                        });
                    }
                })
                .catch(function (error) {
                    $(".addFieldSubmitButton").button('reset');
                    if (error.response.status == 422) {
                        var array = $.map(error.response.data, function (value, index) {
                            return [value];
                        });

                        $.toast({
                            text: array, // Text that is to be shown in the toast
                            heading: 'Error', // Optional heading to be shown on the toast
                            icon: 'error', // Type of toast icon
                            showHideTransition: 'fade', // fade, slide or plain
                            allowToastClose: true, // Boolean value true or false
                            hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                            stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                            position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                            loader: true,  // Whether to show loader or not. True by default
                        });

                        // for (var key in error.response.data) {
                        //   if (error.response.data.hasOwnProperty(key)) {
                        //     console.log(key + " -> " + error.response.data[key]);
                        //   }
                        // }

                        // bag.add('email', 'Wrong Credentials');
                    }
                });
        },
        editField: function (tableUuid, fieldIndex) {
            var self = laradox;

            var position = self.helperSearchTableIndex(tableUuid);
            self.temporary.editField.tableName = self.schema.tables[position].name;
            self.temporary.editField.tableUuid = tableUuid;
            self.temporary.editField.uuid = self.schema.tables[position].fields[fieldIndex].uuid;
            self.temporary.editField.name = self.schema.tables[position].fields[fieldIndex].name;
            self.temporary.editField.type = self.schema.tables[position].fields[fieldIndex].type;
            self.temporary.editField.length = self.schema.tables[position].fields[fieldIndex].length;
            self.temporary.editField.default = self.schema.tables[position].fields[fieldIndex].default;
            self.temporary.editField.optionValues = self.schema.tables[position].fields[fieldIndex].options;
            self.temporary.editField.enum = self.schema.tables[position].fields[fieldIndex].enum;

            $('#editFieldModal').modal('show');
        },
        editFieldSubmit: function () {
            var self = this;
            var tablePosition = self.helperSearchTableIndex(self.temporary.editField.tableUuid);
            var fieldPosition = self.helperSearchFieldIndex(self.temporary.editField.tableUuid, self.temporary.editField.uuid);

            // Post to saving
            axios.patch('/api/v1/fields/' + self.temporary.editField.uuid, self.temporary.editField)
                .then(function (response) {
                    if (response.data.responseCode == 200) {
                        Vue.set(self.schema.tables[tablePosition].fields, fieldPosition, response.data.responseItem);
                        $('#editFieldModal').modal('hide');
                    }
                })
                .catch(function (error) {
                    if (error.response.status == 422) {
                        var array = $.map(error.response.data, function (value, index) {
                            return [value];
                        });

                        $.toast({
                            text: array, // Text that is to be shown in the toast
                            heading: 'Error', // Optional heading to be shown on the toast
                            icon: 'error', // Type of toast icon
                            showHideTransition: 'fade', // fade, slide or plain
                            allowToastClose: true, // Boolean value true or false
                            hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                            stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                            position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                            loader: true,  // Whether to show loader or not. True by default
                        });
                    }

                    $('#editFieldModal').modal('hide');
                });
        },
        UpdateFieldOrder(tableUuid, fieldArray) {
            axios.post('/api/v1/tables/' + tableUuid + '/sortfield', fieldArray)
                .catch(function (error) {
                    if (error.response.status == 422) {
                        var array = $.map(error.response.data, function (value, index) {
                            return [value];
                        });

                        $.toast({
                            text: array, // Text that is to be shown in the toast
                            heading: 'Error', // Optional heading to be shown on the toast
                            icon: 'error', // Type of toast icon
                            showHideTransition: 'fade', // fade, slide or plain
                            allowToastClose: true, // Boolean value true or false
                            hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                            stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                            position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                            loader: true,  // Whether to show loader or not. True by default
                        });
                    }
                });
        },
        deleteField: function (fieldUuid, tableUuid) {
            var self = laradox;
            var tablePosition = self.helperSearchTableIndex(tableUuid);
            var fieldPosition = self.helperSearchFieldIndex(tableUuid, self.temporary.editField.uuid);

            $.confirm({
                title: 'Delete Field',
                content: 'Are you sure want to delete this field?',
                theme: 'supervan',
                buttons: {
                    confirm: function () {
                        axios.delete('/api/v1/fields/' + fieldUuid).then(function () {
                            Vue.delete(self.schema.tables[tablePosition].fields, fieldPosition)
                        }).catch(function (error) {
                            // console.log(error);
                            $.toast({
                                text: "Something happen, cannot delete this field", // Text that is to be shown in the toast
                                heading: 'Error', // Optional heading to be shown on the toast
                                icon: 'error', // Type of toast icon
                                showHideTransition: 'fade', // fade, slide or plain
                                allowToastClose: true, // Boolean value true or false
                                hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                                position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                                loader: true,  // Whether to show loader or not. True by default
                            });
                        });
                    },
                    cancel: function () {

                    }
                }
            });
        },
        deleteTable: function (tableUuid) {
            var tablePosition = self.helperSearchTableIndex(tableUuid);
            $.confirm({
                title: 'Delete Table',
                content: 'Are you sure want to delete this table?',
                theme: 'supervan',
                buttons: {
                    confirm: function () {
                        axios.delete('/api/v1/tables/' + tableUuid).then(function () {
                            Vue.delete(self.schema.tables, tablePosition);
                        }).catch(function (error) {
                            $.toast({
                                text: "Something happen, cannot delete this field", // Text that is to be shown in the toast
                                heading: 'Error', // Optional heading to be shown on the toast
                                icon: 'error', // Type of toast icon
                                showHideTransition: 'fade', // fade, slide or plain
                                allowToastClose: true, // Boolean value true or false
                                hideAfter: 10000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
                                stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
                                position: 'bottom-left', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
                                loader: true,  // Whether to show loader or not. True by default
                            });
                        });
                    },
                    cancel: function () {

                    }
                }
            });
        },
        helperRemoveConnection: function (source, target) {
            var conn = jsPlumb.getConnections({
                source: source,
                target: target
            });
            if (conn[0]) {
                jsPlumb.detach(conn[0]);
            }
        },
        helperDrawConnection: function () {
            self = this;
            Vue.nextTick(function () {
                jsPlumb.ready(function () {
                    setInterval(function () {
                        jsPlumb.repaintEverything();
                    }, 10);

                    jsPlumb.setContainer($(".canvas"));
                    jsPlumb.Defaults.Connector = ["Flowchart", { cornerRadius: 6 }];
                    jsPlumb.Defaults.Anchor = "Continuous";
                    jsPlumb.Defaults.ConnectionsDetachable = false;
                    jsPlumb.Defaults.PaintStyle = { strokeWidth: 5, stroke: "#000" };
                    jsPlumb.Defaults.EndpointStyle = { fill: "#445566" };
                    jsPlumb.Defaults.HoverPaintStyle = { stroke: "#637b94", strokeWidth: 6 };
                    jsPlumb.Defaults.EndpointHoverStyle = { fill: "#637b94" };

                    // jsPlumb.detachEveryConnection();
                    jsPlumb.deleteEveryEndpoint();

                    jsPlumb.setSuspendDrawing(true);
                    laradox.schema.relationships.forEach(function (entry) {
                        var position = laradox.helperSearchTableIndex(entry.primary.table);
                        var color = laradox.schema.tables[position].style.tableColorClass;
                        var colorHex = laradox.options.styleColor[color];
                        jsPlumb.connect({
                            // source: entry.primary.table + '_' + entry.primary.field,
                            // target: entry.foreign.table + '_' + entry.foreign.field,
                            source: entry.primary.table,
                            target: entry.foreign.table,
                            paintStyle: { stroke: colorHex, strokeWidth: 5 },
                            endpointStyle: { fill: colorHex },
                            overlays: [["Label", { cssClass: "label label-" + color, label: entry.type, location: 0.3, id: "label" }]],
                        });
                    });
                    jsPlumb.setSuspendDrawing(false, true);

                    jsPlumb.bind("click", function (connection, originalEvent) {
                        console.log(connection.sourceId);
                        console.log(connection.targetId);
                    });
                });
            });
        },
        helperSearchTableIndex: function (uuid) {
            self = this;
            var elementPos = self.schema.tables.map(function (x) { return x.uuid; }).indexOf(uuid);
            return elementPos;
        },
        helperSearchFieldIndex: function (tableUuid, uuid) {
            self = this;
            var tablePosition = self.schema.tables.map(function (x) { return x.uuid; }).indexOf(tableUuid);
            var fieldPosition = self.schema.tables[tablePosition].fields.map(function (x) { return x.uuid; }).indexOf(uuid);
            return fieldPosition;
        },
        helperSearchFieldtypeIndex: function (type) {
            self = this;
            var elementPos = self.options.fieldType.map(function (x) { return String(x.type); }).indexOf(String(type));
            return elementPos;
        }
    },
});
