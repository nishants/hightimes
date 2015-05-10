(function () {
  "use strict"

  var user = {
        "meta": {
          "code": 200
        },
        "data": {
          "username": "nishant.singh87",
          "bio": "",
          "website": "",
          "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/anonymousUser.jpg",
          "full_name": "Nishant",
          "counts": {
            "media": 3,
            "followed_by": 7,
            "follows": 26
          },
          "id": "1924007889"
        }
      },
      followers = {
        "pagination": {},
        "meta": {
          "code": 200
        },
        "data": [
          {
            "username": "mrinal5",
            "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/10369275_676032095817253_1433304938_a.jpg",
            "id": "260697920",
            "full_name": "Mrinal Singh"
          },
          {
            "username": "priyanka_vishal_mittal",
            "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/10903463_534255253344355_1825474385_a.jpg",
            "id": "1318910537",
            "full_name": "Priyanka Mittal"
          },
          {
            "username": "sonam.r.88",
            "profile_picture": "https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11230419_640353229432207_438505213_a.jpg",
            "id": "1412610557",
            "full_name": "Sonam"
          },
          {
            "username": "himanshu.rawat.562",
            "profile_picture": "https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/10954211_409613369205687_1974464127_a.jpg",
            "id": "1700364730",
            "full_name": "Himanshu Rawat"
          },
          {
            "username": "balajeevenkatesh",
            "profile_picture": "https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/10853151_412920515533426_1539642759_a.jpg",
            "id": "1267501370",
            "full_name": "Balajee Venkatesh"
          },
          {
            "username": "praveer.rai",
            "profile_picture": "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/11116636_103144470016913_1401725987_a.jpg",
            "id": "1442600494",
            "full_name": "Praveer Rai"
          },
          {
            "username": "shivang.singh.796",
            "profile_picture": "https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/10963900_1037447672937655_2105411844_a.jpg",
            "id": "1532939522",
            "full_name": "Shivang singh"
          }
        ]
      },
      sampleMedia = {
        "pagination": {},
        "meta": {
          "code": 200
        },
        "data": [
          {
            "attribution": null,
            "tags": [],
            "type": "image",
            "location": null,
            "comments": {
              "count": 0,
              "data": []
            },
            "filter": "Normal",
            "created_time": "1429886644",
            "link": "https://instagram.com/p/13IkxmrSht/",
            "likes": {
              "count": 0,
              "data": []
            },
            "images": {
              "low_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/s306x306/e15/11189841_393999300804561_592734622_n.jpg",
                "width": 306,
                "height": 306
              },
              "thumbnail": {
                "url": "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/s150x150/e15/11189841_393999300804561_592734622_n.jpg",
                "width": 150,
                "height": 150
              },
              "standard_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/11189841_393999300804561_592734622_n.jpg",
                "width": 640,
                "height": 640
              }
            },
            "users_in_photo": [],
            "caption": null,
            "user_has_liked": false,
            "id": "970281956257114221_1924007889",
            "user": {
              "username": "nishant.singh87",
              "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/anonymousUser.jpg",
              "id": "1924007889",
              "full_name": "Nishant"
            }
          },
          {
            "attribution": null,
            "tags": [],
            "type": "image",
            "location": null,
            "comments": {
              "count": 0,
              "data": []
            },
            "filter": "Earlybird",
            "created_time": "1429886610",
            "link": "https://instagram.com/p/13IgmurSho/",
            "likes": {
              "count": 0,
              "data": []
            },
            "images": {
              "low_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/s306x306/e15/11191370_1619387378277704_1360766747_n.jpg",
                "width": 306,
                "height": 306
              },
              "thumbnail": {
                "url": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/s150x150/e15/11191370_1619387378277704_1360766747_n.jpg",
                "width": 150,
                "height": 150
              },
              "standard_resolution": {
                "url": "https://scontent.cdninstagram.com/hphotos-xpa1/t51.2885-15/e15/11191370_1619387378277704_1360766747_n.jpg",
                "width": 640,
                "height": 640
              }
            },
            "users_in_photo": [],
            "caption": null,
            "user_has_liked": false,
            "id": "970281669702264936_1924007889",
            "user": {
              "username": "nishant.singh87",
              "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/anonymousUser.jpg",
              "id": "1924007889",
              "full_name": "Nishant"
            }
          }
        ]
      },
      users = {
        "meta": {
          "code": 200
        },
        "data": [
          {
            "username": "abc",
            "profile_picture": "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/10919604_482496621890889_920998882_a.jpg",
            "id": "16159",
            "full_name": "Michael M. ⚓"
          },
          {
            "username": "abc.411",
            "profile_picture": "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/11187088_442022029306936_1732993521_a.jpg",
            "id": "289279714",
            "full_name": "ABC"
          },
          {
            "username": "kik_kiki_hh",
            "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/10990610_812459568828115_1616780775_a.jpg",
            "id": "1773673712",
            "full_name": "abc"
          },
          {
            "username": "abchfjll",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/anonymousUser.jpg",
            "id": "1807093967",
            "full_name": "Abc"
          },
          {
            "username": "abcdamor",
            "profile_picture": "https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/10894917_315209062007535_968110754_a.jpg",
            "id": "444142201",
            "full_name": "Amor Frases Reflexiones Sexo"
          },
          {
            "username": "abc3",
            "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/10954797_907910545906003_141401901_a.jpg",
            "id": "1007564118",
            "full_name": "ABC3"
          },
          {
            "username": "abc.6",
            "profile_picture": "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11258233_535202819953248_849233664_a.jpg",
            "id": "1275469275",
            "full_name": "ٰ🅾ٰ   آلـصـهــبــانـي"
          },
          {
            "username": "abcfamily",
            "profile_picture": "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/1516307_832492200176808_1117346647_a.jpg",
            "id": "327054692",
            "full_name": "ABC Family"
          },
          {
            "username": "abctv",
            "profile_picture": "https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/10520203_139010399607447_1180761944_a.jpg",
            "id": "185355856",
            "full_name": "ABC TV Australia"
          },
          {
            "username": "abckj",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_223976368_75sq_1349616328.jpg",
            "id": "223976368",
            "full_name": "غايتي الجنه"
          },
          {
            "username": "bandsntumblr",
            "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/11085203_1630702303819789_277534439_a.jpg",
            "id": "1003137621",
            "full_name": "a b c n z"
          },
          {
            "username": "aurynhistoriainterminable",
            "profile_picture": "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xtp1/t51.2885-19/1799557_936157223077334_839283304_a.jpg",
            "id": "1418046645",
            "full_name": "ABCDD"
          },
          {
            "username": "abcl8",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_279033165_75sq_1370845570.jpg",
            "id": "279033165",
            "full_name": "Kzh"
          },
          {
            "username": "abcnt1",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_25288918_75sq_1380168251.jpg",
            "id": "25288918",
            "full_name": "ABCNT"
          },
          {
            "username": "abcnews",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_327693598_75sq_1376669200.jpg",
            "id": "327693598",
            "full_name": "ABC News"
          },
          {
            "username": "abcopen",
            "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/925069_287990571396227_2101591968_a.jpg",
            "id": "190417859",
            "full_name": "ABC Open"
          },
          {
            "username": "abc30_actionnews",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_332864021_75sq_1382994946.jpg",
            "id": "332864021",
            "full_name": "ABC30"
          },
          {
            "username": "abc7la",
            "profile_picture": "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/11055461_1586743261537465_1836220460_a.jpg",
            "id": "317111047",
            "full_name": "ABC7 Eyewitness News"
          },
          {
            "username": "nayilaw",
            "profile_picture": "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xat1/t51.2885-19/11111436_796235323764220_1178429568_a.jpg",
            "id": "16430839",
            "full_name": "ABC-Always Be Classy"
          },
          {
            "username": "abcagb",
            "profile_picture": "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11248917_1556179577975721_1601879155_a.jpg",
            "id": "1207153823",
            "full_name": "; arianagrande 🌙"
          },
          {
            "username": "abc2bb",
            "profile_picture": "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/1799625_970746862936638_576027960_a.jpg",
            "id": "1341406506",
            "full_name": "ابو حاتم A"
          },
          {
            "username": "abc7ny",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_52491273_75sq_1367511057.jpg",
            "id": "52491273",
            "full_name": "ABC7NY"
          },
          {
            "username": "abchao",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_725116_75sq_1316969739.jpg",
            "id": "725116",
            "full_name": "AB Chao"
          },
          {
            "username": "abchso",
            "profile_picture": "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11116761_1437445566554688_188038441_a.jpg",
            "id": "7563492",
            "full_name": "Abbey Sowick"
          },
          {
            "username": "abcu__",
            "profile_picture": "https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11226667_666467170148909_30351586_a.jpg",
            "id": "1440116915",
            "full_name": "정채영 17"
          },
          {
            "username": "abcdes",
            "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/10296963_1411950809087187_797312371_a.jpg",
            "id": "2648165",
            "full_name": "Des Pieters"
          },
          {
            "username": "abc__t",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_802712064_75sq_1387093614.jpg",
            "id": "802712064",
            "full_name": "QchiQ"
          },
          {
            "username": "abc_kills",
            "profile_picture": "https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11240340_1641082796128023_1357878586_a.jpg",
            "id": "50050598",
            "full_name": "ABC Kills"
          },
          {
            "username": "abckitchen",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_250510156_75sq_1352581027.jpg",
            "id": "250510156",
            "full_name": "ABC Kitchen"
          },
          {
            "username": "abcnews_au",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_259090671_75sq_1353983809.jpg",
            "id": "259090671",
            "full_name": "ABC News"
          },
          {
            "username": "abclebanon",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_336737390_75sq_1364502167.jpg",
            "id": "336737390",
            "full_name": "ABC Lebanon"
          },
          {
            "username": "abccreative",
            "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/10932061_327617580771995_1443228323_a.jpg",
            "id": "589576880",
            "full_name": "[ABC:CREATIVE]"
          },
          {
            "username": "abc_medispa",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_364540151_75sq_1395378791.jpg",
            "id": "364540151",
            "full_name": "ABC Medispa"
          },
          {
            "username": "abcgrandstand",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_231471085_75sq_1355534169.jpg",
            "id": "231471085",
            "full_name": "ABC Grandstand"
          },
          {
            "username": "abc_family_shows",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_265040873_75sq_1377135217.jpg",
            "id": "265040873",
            "full_name": "ABC Family"
          },
          {
            "username": "abc_bows",
            "profile_picture": "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/11137752_1055732681107772_451194931_a.jpg",
            "id": "214857449",
            "full_name": "ABC Bows & crafts"
          },
          {
            "username": "abc_hatco",
            "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/10860045_837791549624691_240589939_a.jpg",
            "id": "1193747061",
            "full_name": "ABC hat co."
          },
          {
            "username": "abcthechew",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_192948241_75sq_1385508419.jpg",
            "id": "192948241",
            "full_name": "ABC's The Chew"
          },
          {
            "username": "abc2020",
            "profile_picture": "https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/10890495_327350130801537_1374001320_a.jpg",
            "id": "327646592",
            "full_name": "abc2020"
          },
          {
            "username": "abcerda",
            "profile_picture": "https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xta1/t51.2885-19/10261192_359032080943527_268761734_a.jpg",
            "id": "225861931",
            "full_name": "Jaime G. Cerda"
          },
          {
            "username": "abc0097",
            "profile_picture": "https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-19/11232827_354020578129838_1805778483_a.jpg",
            "id": "1489741589",
            "full_name": "الشهريه"
          },
          {
            "username": "abcni05",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_10961088_75sq_1380031333.jpg",
            "id": "10961088",
            "full_name": "#JesusLovesyou#MakeJesusFamous"
          },
          {
            "username": "abcd2hy",
            "profile_picture": "https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xpf1/t51.2885-19/11055976_1078536482173495_219933289_a.jpg",
            "id": "1562449119",
            "full_name": ""
          },
          {
            "username": "abcdebe",
            "profile_picture": "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xap1/t51.2885-19/11199456_482937121864368_403727432_a.jpg",
            "id": "293699968",
            "full_name": "avvab abdvllah"
          },
          {
            "username": "abcpixx",
            "profile_picture": "https://igcdn-photos-h-a.akamaihd.net/hphotos-ak-xpt1/t51.2885-19/11142263_458401850984479_142547704_a.jpg",
            "id": "585879858",
            "full_name": ""
          },
          {
            "username": "abcalof",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/profile_11862878_75sq_1319683490.jpg",
            "id": "11862878",
            "full_name": "abcalof"
          },
          {
            "username": "abc7chicago",
            "profile_picture": "https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/10954851_434916006660203_2009414140_a.jpg",
            "id": "326513240",
            "full_name": "ABC 7 Chicago"
          },
          {
            "username": "abc.eatery",
            "profile_picture": "https://igcdn-photos-c-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/10810045_313603988830122_959018275_a.jpg",
            "id": "1597096424",
            "full_name": "ABC ESSENCE IN EATERY"
          },
          {
            "username": "abcpicturesgh",
            "profile_picture": "https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-19/10953096_1402151966754320_490926204_a.jpg",
            "id": "519642957",
            "full_name": "Abc Pictures Ltd"
          },
          {
            "username": "abc_mart_japan",
            "profile_picture": "https://instagramimages-a.akamaihd.net/profiles/anonymousUser.jpg",
            "id": "1748940796",
            "full_name": "ABC-MART Japan"
          }
        ]
      };



  hightimes.mock = function(){
    $.ajax = function (params) {
      if (params.url.indexOf("users/1?") != -1) {
        params.success(user);
      } else if (params.url.indexOf("followed-by") != -1) {
        params.success(followers);
      } else if (params.url.indexOf("media/recent") != -1) {
        params.success(followers);
      } else if (params.url.indexOf("search") != -1) {
        params.success(users);
      }
    };

  }
}).call(this);
